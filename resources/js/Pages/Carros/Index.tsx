import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Carro, PageProps } from '@/types';
import { Head, Link } from '@inertiajs/react';

interface Props extends PageProps {
    carros: Carro[];
}

export default function Index({ auth, carros }: Props) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-2xl font-bold leading-tight text-gray-800">
                    Listado de Carros
                </h2>
            }
        >
            <Head title="Carros" />

            <div className="py-12 bg-gray-100"> {/* Fondo gris suave */}
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg"> {/* Sombra más pronunciada */}
                        <div className="p-6 text-gray-900">
                            <div className="mb-6"> {/* Margen inferior para el botón */}
                                <Link
                                    href={route('carros.create')}
                                    className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" // Botón más estilizado
                                >
                                    Crear Nuevo Carro
                                </Link>
                            </div>

                            <table className="min-w-full divide-y divide-gray-200 table-auto"> {/* Tabla responsive */}
                                <thead className="bg-gray-50"> {/* Encabezado de tabla con fondo claro */}
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Marca</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Modelo</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Año</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Color</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Precio</th>
                                        <th scope="col" className="relative px-6 py-3">
                                            <span className="sr-only">Acciones</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200"> {/* Cuerpo de la tabla con separadores */}
                                    {carros?.map((carro:Carro) => (
                                        <tr key={carro.id}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{carro.marca}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{carro.modelo}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{carro.año}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{carro.color}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{carro.precio}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"> {/* Botones de acción */}
                                                <Link href={route('carros.show', { carro: carro.id })} className="text-indigo-600 hover:text-indigo-900 mr-2">Ver</Link>
                                                <Link href={route('carros.edit', { carro: carro.id })} className="text-yellow-600 hover:text-yellow-900 mr-2">Editar</Link>
                                                <Link href={route('carros.destroy', { carro: carro.id })} method="delete" as="button" className="text-red-600 hover:text-red-900">Eliminar</Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}