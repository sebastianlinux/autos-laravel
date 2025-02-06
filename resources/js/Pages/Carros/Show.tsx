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
                                    {/*imagen del carro aquí */}
                                    <div className="bg-gray-200 h-48 w-full rounded-md">
                                        {/* Imagen del carro */}
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

                                    {/* Otros detalles del carro */}
                                    {/* ... */}
                                </div>
                            </div>

                            <div className="mt-6">
                                <Link
                                    href={route('carros.index')}
                                    className="btn btn-secondary"
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