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
        photo?: string;
    };
}

export default function Create({ auth, errors }: Props) {
    const { data, setData, post, processing, reset } = useForm<Carro | any>({
        marca: '',
        modelo: '',
        año: '',
        color: '',
        precio: 0,
        photo: null,
    });

    const submit = (e: any) => {
        e.preventDefault();

        post(route('carros.store'), {
            onSuccess: () => {
                reset();
            },
            onError: (err) => {
                console.error('Error al crear carro:', err);
            },
            onFinish: () => {},
        });
    };

    const handlePhotoChange = (e: any) => {
        setData('photo', e.target.files[0]);
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

            <div className="py-12 bg-gray-100">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg p-6">
                        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Nuevo Carro</h3>

                        <form onSubmit={submit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> {/* Diseño en grid */}
                                <div>
                                    <label htmlFor="marca" className="block text-sm font-medium text-gray-700">Marca:</label>
                                    <input type="text" id="marca" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 sm:text-sm" value={data.marca} onChange={e => setData('marca', e.target.value)} required aria-invalid={errors?.marca ? 'true' : 'false'} aria-describedby={errors?.marca ? 'marca-error' : undefined} />
                                    {errors?.marca && <p className="mt-2 text-sm text-red-600" id="marca-error">{errors.marca}</p>}
                                </div>

                                <div>
                                    <label htmlFor="modelo" className="block text-sm font-medium text-gray-700">Modelo:</label>
                                    <input type="text" id="modelo" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 sm:text-sm" value={data.modelo} onChange={e => setData('modelo', e.target.value)} required aria-invalid={errors?.modelo ? 'true' : 'false'} aria-describedby={errors?.modelo ? 'modelo-error' : undefined} />
                                    {errors?.modelo && <p className="mt-2 text-sm text-red-600" id="modelo-error">{errors.modelo}</p>}
                                </div>

                                <div>
                                    <label htmlFor="año" className="block text-sm font-medium text-gray-700">Año:</label>
                                    <input type="number" id="año" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 sm:text-sm" value={data.año} onChange={e => setData('año', Number(e.target.value))} required aria-invalid={errors?.año ? 'true' : 'false'} aria-describedby={errors?.año ? 'año-error' : undefined} />
                                    {errors?.año && <p className="mt-2 text-sm text-red-600" id="año-error">{errors.año}</p>}
                                </div>

                                <div>
                                    <label htmlFor="color" className="block text-sm font-medium text-gray-700">Color:</label>
                                    <input type="text" id="color" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 sm:text-sm" value={data.color} onChange={e => setData('color', e.target.value)} required aria-invalid={errors?.color ? 'true' : 'false'} aria-describedby={errors?.color ? 'color-error' : undefined} />
                                    {errors?.color && <p className="mt-2 text-sm text-red-600" id="color-error">{errors.color}</p>}
                                </div>

                                <div>
                                    <label htmlFor="precio" className="block text-sm font-medium text-gray-700">Precio:</label>
                                    <input type="number" id="precio" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 sm:text-sm" value={data.precio} onChange={e => setData('precio', Number(e.target.value))} required aria-invalid={errors?.precio ? 'true' : 'false'} aria-describedby={errors?.precio ? 'precio-error' : undefined} />
                                    {errors?.precio && <p className="mt-2 text-sm text-red-600" id="precio-error">{errors.precio}</p>}
                                </div>

                                <div>
                                    <label htmlFor="photo" className="block text-sm font-medium text-gray-700">Foto:</label>
                                    <input type="file" id="photo" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 sm:text-sm" onChange={handlePhotoChange} aria-invalid={errors?.photo ? 'true' : 'false'} aria-describedby={errors?.photo ? 'photo-error' : undefined} />
                                    {errors?.photo && <p className="mt-2 text-sm text-red-600" id="photo-error">{errors.photo}</p>}
                                </div>
                            </div>

                            <div className="flex justify-end">
                                <button type="submit" disabled={processing} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:bg-gray-400">
                                    {processing ? 'Guardando...' : 'Guardar'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}