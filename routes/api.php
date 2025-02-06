<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CarroController;


Route::get('/carros', [CarroController::class, 'index']);
Route::get('/carros/{carro}', [CarroController::class, 'show']);
Route::middleware('auth')->group(function () {
    Route::post('/carros', [CarroController::class, 'store']); 
    Route::put('/carros/{carro}', [CarroController::class, 'update']); 
    Route::delete('/carros/{carro}', [CarroController::class, 'destroy']);
});
