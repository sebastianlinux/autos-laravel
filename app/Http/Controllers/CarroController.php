<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Carro;
use Illuminate\Http\Request;

class CarroController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // Obtiene todos los carros de la base de datos
        $carros = Carro::all();
        return Inertia::render('Carros/Index', ['carros' => $carros, 'success' => session('success')]);

        // Retorna la vista 'carros.index' y pasa la variable $carros
        //return view('carros.index', compact('carros'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        // Retorna la vista 'carros.create' para mostrar el formulario de creación
        return Inertia::render('Carros/Create', ['success' => session('success')]);

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
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
        ]);
        Carro::create($request->all());
        return redirect()->route('carros.index')->with('success', '¡Carro creado exitosamente!');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Carro  $carro
     * @return \Illuminate\Http\Response
     */
    public function show(Carro $carro)
    {
        return Inertia::render('carros.show', ['carro' => $carro]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Carro  $carro
     * @return \Illuminate\Http\Response
     */
    public function edit(Carro $carro)
    {
        // Retorna la vista 'carros.edit' y pasa la variable $carro
        return Inertia::render('carros.edit', ['carro' => $carro]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Carro  $carro
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Carro $carro)
    {
        // Valida los datos del formulario (similar a 'store')
        $request->validate([
            'marca' => 'required|string|max:255',
            'modelo' => 'required|string|max:255',
            'año' => 'required|integer|min:1900|max:2024',
            'color' => 'required|string|max:255',
            'precio' => 'required|numeric|min:0',
        ]);

        // Actualiza los datos del carro con los datos validados
        $carro->update($request->all());

        // Redirecciona a la lista de carros con un mensaje de éxito
        return redirect()->route('carros.index')->with('success', '¡Carro actualizado exitosamente!');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Carro  $carro
     * @return \Illuminate\Http\Response
     */
    public function destroy(Carro $carro)
    {
        // Elimina el carro
        $carro->delete();

        // Redirecciona a la lista de carros con un mensaje de éxito
        return redirect()->route('carros.index')->with('success', '¡Carro eliminado exitosamente!');
    }
}