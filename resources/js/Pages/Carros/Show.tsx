import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Carro, PageProps } from '@/types';
import { Head, Link } from '@inertiajs/react';

interface Props extends PageProps {
    carro: Carro;
}

export default function Show({ auth, carro }: Props) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Detalles del Carro
                </h2>
            }
        >
            <Head title="Detalles del Carro" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="md:flex md:items-start md:space-x-6">
                                <div className="md:w-1/2">
                                    {carro.photo_url}
                                    <div className="relative h-48 w-full rounded-md overflow-hidden">  
                                        {carro.photo_url ? (
                                            <img
                                                src={`/storage/${carro.photo_url}`} 
                                                alt={`${carro.marca} ${carro.modelo}`}
                                                className="object-cover w-full h-full" 
                                            />
                                        ) : (
                                            <div className="bg-gray-200 h-full w-full flex items-center justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-gray-500">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.548 3.376 2.583 3.376h14.02c2.036 0 3.419-1.876 2.583-3.376L12 9z" />
                                                </svg>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="md:w-1/2">
                                    <h3 className="text-lg font-semibold mb-2">
                                        {carro.marca} {carro.modelo}
                                    </h3>

                                    <div className="mb-4">
                                        <p className="text-gray-700">
                                            <strong>Año:</strong> {carro.año}
                                        </p>
                                        <p className="text-gray-700">
                                            <strong>Color:</strong> {carro.color}
                                        </p>
                                        <p className="text-gray-700">
                                            <strong>Precio:</strong> {carro.precio}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6">
                                <Link
                                    href={route('carros.index')}
                                    className="inline-block bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" // Estilos para el botón
                                >
                                    Volver al Listado
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}