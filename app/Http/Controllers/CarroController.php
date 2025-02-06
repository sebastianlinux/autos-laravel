<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Carro;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use OpenApi\Annotations as OA;

/**
 * @OA\Schema(
 *     schema="Carro",
 *     @OA\Property(property="marca", type="string", description="Marca del carro"),
 *     @OA\Property(property="modelo", type="string", description="Modelo del carro"),
 *     @OA\Property(property="año", type="integer", description="Año del carro"),
 *     @OA\Property(property="color", type="string", description="Color del carro"),
 *     @OA\Property(property="precio", type="number", format="float", description="Precio del carro"),
 *     @OA\Property(property="photo_url", type="string", nullable=true, description="URL de la foto del carro")
 * )
 */
class CarroController extends Controller
{
    
/**
     * @OA\Get(
     *     path="/api/carros",
     *     @OA\Parameter(
     *         name="marca",
     *         in="query",
     *         description="Filtrar por marca",
     *         @OA\Schema(type="string")
     *     ),
     *     @OA\Parameter(
     *         name="modelo",
     *         in="query",
     *         description="Filtrar por modelo",
     *         @OA\Schema(type="string")
     *     ),
     *     @OA\Response(
     *         response="200",
     *         description="Lista de carros",
     *         @OA\JsonContent(
     *             type="array",
     *             @OA\Items(ref="#/components/schemas/Carro")
     *         )
     *     )
     * )
     */
    public function index(Request $request)
    {
        $marca = $request->query('marca');
        $modelo = $request->query('modelo');
        $page = $request->query('page', 1); // Valor padrão: página 1
        $perPage = 5; // Quantidade de resultados por página
        $query = Carro::query();
        if ($marca) {
            $query->where('marca', $marca);
            
        }

        if ($modelo) {
            $query->where('modelo', $modelo);
            
        }

        $carros = $query->paginate($perPage);

        $marcas = Carro::select('marca')->distinct()->pluck('marca');
        $modelos = Carro::select('modelo')->distinct()->pluck('modelo');

        return Inertia::render('Carros/Index', [
            'carros' => $carros->items(),
            'marcas' => $marcas,
            'modelos' => $modelos,
            'currentPage' => $carros->currentPage(),
            'totalPages' => $carros->lastPage(),
            'success' => session('success'),
        ]);
    }

    public function find(Request $request)
    {
        $page = $request->input('page', 0); 
        $take = 5;

        $skip = $page > 0 ? ($take * $page) : 0;
        
        $totalCarros = Carro::count(); 
        $totalPages = ceil($totalCarros / $take); 

        $carros = Carro::skip($skip)->take($take)->get();
        return Inertia::render('Carros/Index', ['carros' => $carros,'totalPages'=>$totalPages, 'success' => session('success')]);
    }
 
    public function create()
    {
       
        return Inertia::render('Carros/Create', ['success' => session('success')]);

    }
     /**
     * @OA\Post(
     *     path="/api/carros",
     *     @OA\RequestBody(
     *         @OA\MediaType(
     *             mediaType="application/json",
     *             @OA\Schema(ref="#/components/schemas/Carro")
     *         )
     *     ),
     *     @OA\Response(response="201", description="Carro creado")
     * )
     */
    public function store(Request $request)
    {
        // Valida los datos del formulario
        $request->validate([
            'marca' => 'required|string|max:255',
            'modelo' => 'required|string|max:255',
            'año' => 'required|integer|min:1900|max:2024',
            'color' => 'required|string|max:255',
            'precio' => 'required|numeric|min:0',
            'photo' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048', // Validación para la imagen
        ]);

        $data = $request->all();  

        if ($request->hasFile('photo')) { // Verifica si se envió una imagen
            $photo = $request->file('photo');
            $photoPath = $photo->store('car_photos', 'public'); // Guarda la imagen en storage/app/public/car_photos
            $data['photo_url'] = $photoPath; // Guarda la ruta en la base de datos
        }

        Carro::create($data); 
        return redirect()->route('carros.index')->with('success', '¡Carro creado exitosamente!');
    }
     /**
     * @OA\Get(
     *     path="/api/carros/{carro}",
     *     @OA\Parameter(
     *         name="carro",
     *         in="path",
     *         description="ID del carro",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Response(
     *         response="200",
     *         description="Información del carro",
     *         @OA\JsonContent(ref="#/components/schemas/Carro")
     *     )
     * )
     */
    public function show(Carro $carro)
    {
        return Inertia::render('Carros/Show', ['carro' => $carro]);
    }

  
    public function edit(Carro $carro)
    {
        return Inertia::render('Carros/Edit', ['carro' => $carro]);
    }

      /**
     * @OA\Put(
     *     path="/api/carros/{carro}",
     *     @OA\Parameter(
     *         name="carro",
     *         in="path",
     *         description="ID del carro",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\RequestBody(
     *         @OA\MediaType(
     *             mediaType="application/json",
     *             @OA\Schema(ref="#/components/schemas/Carro")
     *         )
     *     ),
     *     @OA\Response(response="200", description="Carro actualizado")
     * )
     */
    public function update(Request $request, Carro $carro)
    {
        $request->validate([
            'marca' => 'required|string|max:255',
            'modelo' => 'required|string|max:255',
            'año' => 'required|integer|min:1900|max:2024',
            'color' => 'required|string|max:255',
            'precio' => 'required|numeric|min:0',
            'photo' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048', // Validación para la imagen
        ]);
        $carro->update($request->all());

        return redirect()->route('carros.index')->with('success', '¡Carro actualizado exitosamente!');
    }

        /**
     * @OA\Delete(
     *     path="/api/carros/{carro}",
     *     @OA\Parameter(
     *         name="carro",
     *         in="path",
     *         description="ID del carro",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Response(response="204", description="Carro eliminado")
     * )
     */
    public function destroy(Carro $carro){
    if ($carro->photo_url) { 
        Storage::disk('public')->delete($carro->photo_url);
    }
    $carro->delete();
    return redirect()->route('carros.index')->with('success', '¡Carro eliminado exitosamente!');
}
}

