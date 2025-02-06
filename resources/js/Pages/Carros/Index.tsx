import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Carro, PageProps } from '@/types';
import { Head, Link, router } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

interface Props extends PageProps {
    carros: Carro[];
    currentPage: number; // Añade currentPage a las props
    totalPages: number;
    marcas: string[];
    modelos: string[];
}

export default function Index({
    auth,
    carros,
    totalPages,
    marcas,
    modelos,
}: Props) {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [filtroMarca, setFiltroMarca] = useState('');
    const [filtroModelo, setFiltroModelo] = useState('');
    const [shouldUpdate, setShouldUpdate] = useState(false); 

    const handleChangePage = (page: number) => {
      setCurrentPage(page);
      setShouldUpdate(true);
  };

  useEffect(() => {
    if(shouldUpdate){
      router.visit(route('carros.index'), {
          data: {
              page: currentPage,
              marca: filtroMarca,
              modelo: filtroModelo,
          },
          preserveScroll: true,
          replace: true,
          onFinish: () => setShouldUpdate(false), // Reinicia shouldUpdate después de la visita

      });
    }
  }, [shouldUpdate,currentPage, filtroMarca, filtroModelo]);

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>, filterType: 'marca' | 'modelo') => {
    if (filterType === 'marca') {
        setFiltroMarca(event.target.value);
    } else {
        setFiltroModelo(event.target.value);
    }
    setShouldUpdate(true); // Indica que se debe actualizar
};


const GeneratePaginationLinks = () => {
  const links = [];

  if (currentPage > 1) {
      links.push(
          <li key="prev" className="mx-1">
              <button
                  onClick={() => handleChangePage(currentPage - 1)}
                  className="rounded-md bg-white px-3 py-2 text-gray-700 hover:bg-gray-100"
              >
                  Anterior
              </button>
          </li>
      );
  }

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  pageNumbers.forEach(pageNumber => {
      links.push(
          <li key={pageNumber} className="mx-1">
              <button
                  onClick={() => handleChangePage(pageNumber)}
                  className={`rounded-md px-3 py-2 ${currentPage === pageNumber ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
              >
                  {pageNumber}
              </button>
          </li>
      );
  });
  if (currentPage < totalPages) {
      links.push(
          <li key="next" className="mx-1">
              <button
                  onClick={() => handleChangePage(currentPage + 1)}
                  className="rounded-md bg-white px-3 py-2 text-gray-700 hover:bg-gray-100"
              >
                  Siguiente
              </button>
          </li>
      );
  }

  return links;
};
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-2xl font-bold leading-tight text-gray-800">
                    Listado de Carros
                </h2>
            }
        >
            <Head title="Carros" />

            <div className="bg-gray-100 py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-xl sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="flex items-center gap-2 py-2 ">
                                <div >
                                    Marcas{' '}
                                    <select
                                        className="rounded-md  border border-gray-300 px-8 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        value={filtroMarca}
                                        onChange={(e) => handleFilterChange(e, 'marca')}
                                    >
                                        <option value="">
                                            Todas las marcas
                                        </option>
                                        {marcas.map((marca, index) => (
                                            <option key={index} value={marca}>
                                                {marca}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    Modelos{' '}
                                    <select
                                        className="rounded-md  border border-gray-300 px-8 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        value={filtroModelo}
                                        onChange={(e) => handleFilterChange(e, 'modelo')}
                                    >
                                        <option value="">
                                            Todos los modelos
                                        </option>
                                        {modelos.map((modelo, index) => (
                                            <option key={index} value={modelo}>
                                                {modelo}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="mb-6">
                                <Link
                                    href={route('carros.create')}
                                    className="inline-block rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
                                >
                                    Crear Nuevo Carro
                                </Link>
                            </div>

                            <table className="min-w-full table-auto divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                                        >
                                            Marca
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                                        >
                                            Modelo
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                                        >
                                            Año
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                                        >
                                            Color
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                                        >
                                            Precio
                                        </th>
                                        <th
                                            scope="col"
                                            className="relative px-6 py-3"
                                        >
                                            <span className="sr-only">
                                                Acciones
                                            </span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {carros?.map((carro: Carro) => (
                                        <tr key={carro.id}>
                                            <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                                                {carro.marca}
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                                                {carro.modelo}
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                                                {carro.año}
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                                                {carro.color}
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                                                {carro.precio}
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                                                <Link
                                                    href={route('carros.show', {
                                                        carro: carro.id,
                                                    })}
                                                    className="mr-2 text-indigo-600 hover:text-indigo-900"
                                                >
                                                    Ver
                                                </Link>
                                                <Link
                                                    href={route('carros.edit', {
                                                        carro: carro.id,
                                                    })}
                                                    className="mr-2 text-yellow-600 hover:text-yellow-900"
                                                >
                                                    Editar
                                                </Link>
                                                <Link
                                                    href={route(
                                                        'carros.destroy',
                                                        { carro: carro.id },
                                                    )}
                                                    onClick={(e) => {
                                                        // Añade el manejador onClick
                                                        e.preventDefault(); // Evita la navegación por defecto del enlace

                                                        Swal.fire({
                                                            title: '¿Estás seguro?',
                                                            text: '¡No podrás revertir esto!',
                                                            icon: 'warning',
                                                            showCancelButton:
                                                                true,
                                                            confirmButtonColor:
                                                                '#3085d6',
                                                            cancelButtonColor:
                                                                '#d33',
                                                            confirmButtonText:
                                                                '¡Sí, eliminar!',
                                                        }).then((result) => {
                                                            if (
                                                                result.isConfirmed
                                                            ) {
                                                                router.delete(
                                                                    route(
                                                                        'carros.destroy',
                                                                        {
                                                                            carro: carro.id,
                                                                        },
                                                                    ),
                                                                );
                                                            }
                                                        });
                                                    }}
                                                    method="delete"
                                                    as="button"
                                                    className="text-red-600 hover:text-red-900"
                                                >
                                                    Eliminar
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            <ul className="flex list-none">
                                <GeneratePaginationLinks />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
