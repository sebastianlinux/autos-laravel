import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Carro, PageProps } from '@/types';
import { Head, useForm } from '@inertiajs/react';

interface Props extends PageProps {
    errors?: {
        marca?: string;
        modelo?: string;
        año?: string;
        color?: string;
        precio?: string;
    };
}

export default function Create({ auth, errors }: Props) {
    const { data, setData, post, processing } = useForm<Carro | any>({
        marca: '',
        modelo: '',
        año: '',
        color: '',
        precio: 0,
    });

    const submit = (e: any) => {
        e.preventDefault();

        post(route('carros.store'), {
            onSuccess: () => {
            },
            onError: (err) => {
                console.error('Error al crear carro:', err);
            },
            onFinish: () => {},
        });
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-3xl font-semibold leading-tight text-gray-800">
                    Crear Carro
                </h2>
            }
        >
            <Head title="Crear Carro" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <form onSubmit={submit} className="space-y-4">
                                {' '}
                                <div className="mb-4">
                                    <label
                                        htmlFor="marca"
                                        className="mb-2 block text-sm font-bold text-gray-700"
                                    >
                                        Marca:
                                    </label>
                                    <input
                                        type="text"
                                        name="marca"
                                        id="marca"
                                        className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                                        value={data.marca}
                                        onChange={(e) =>
                                            setData('marca', e.target.value)
                                        }
                                        required
                                    />
                                    {errors?.marca && (
                                        <div className="mt-1 text-red-500">
                                            {errors.marca}
                                        </div>
                                    )}
                                </div>
                                <div className="mb-4">
                                    <label
                                        htmlFor="modelo"
                                        className="mb-2 block text-sm font-bold text-gray-700"
                                    >
                                        Modelo:
                                    </label>
                                    <input
                                        type="text"
                                        name="modelo"
                                        id="modelo"
                                        className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                                        value={data.modelo}
                                        onChange={(e) =>
                                            setData('modelo', e.target.value)
                                        }
                                        required
                                    />
                                    {errors?.modelo && (
                                        <div className="mt-1 text-red-500">
                                            {errors.modelo}
                                        </div>
                                    )}
                                </div>
                                <div className="mb-4">
                                    <label
                                        htmlFor="año"
                                        className="mb-2 block text-sm font-bold text-gray-700"
                                    >
                                        Año:
                                    </label>
                                    <input
                                        type="number"
                                        name="año"
                                        id="año"
                                        className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                                        value={data.año}
                                        onChange={(e) =>
                                            setData(
                                                'año',
                                                Number(e.target.value),
                                            )
                                        }
                                        required
                                    />
                                    {errors?.año && (
                                        <div className="mt-1 text-red-500">
                                            {errors.año}
                                        </div>
                                    )}
                                </div>
                                <div className="mb-4">
                                    <label
                                        htmlFor="color"
                                        className="mb-2 block text-sm font-bold text-gray-700"
                                    >
                                        Color:
                                    </label>
                                    <input
                                        type="text"
                                        name="color"
                                        id="color"
                                        className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                                        value={data.color}
                                        onChange={(e) =>
                                            setData('color', e.target.value)
                                        }
                                        required
                                    />
                                    {errors?.color && (
                                        <div className="mt-1 text-red-500">
                                            {errors.color}
                                        </div>
                                    )}
                                </div>
                                <div className="mb-4">
                                    <label
                                        htmlFor="precio"
                                        className="mb-2 block text-sm font-bold text-gray-700"
                                    >
                                        Precio:
                                    </label>
                                    <input
                                        type="number"
                                        name="precio"
                                        id="precio"
                                        className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                                        value={data.precio}
                                        onChange={(e) =>
                                            setData(
                                                'precio',
                                                Number(e.target.value),
                                            )
                                        }
                                        required
                                    />
                                    {errors?.precio && (
                                        <div className="mt-1 text-red-500">
                                            {errors.precio}
                                        </div>
                                    )}
                                </div>
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
                                >
                                    Guardar
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
