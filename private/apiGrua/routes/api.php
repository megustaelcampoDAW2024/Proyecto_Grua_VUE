<?php
use App\Http\Controllers\Api\VehiculoController;
use Illuminate\Support\Facades\Route;

Route::get('/vehiculos/por_retirar', [VehiculoController::class, 'porRetirar']);
Route::apiResource('vehiculos', VehiculoController::class);
/*
// Rutas VehiculoController
Route::any('/vehiculos/index', [VehiculoController::class, 'index']);
Route::any('/vehiculos/por_retirar', [VehiculoController::class, 'porRetirar']);
Route::any('/vehiculos/create', [VehiculoController::class, 'create']);
Route::any('/vehiculos/store', [VehiculoController::class, 'store']);
Route::any('/vehiculos/show/{id}', [VehiculoController::class, 'show']);
Route::any('/vehiculos/edit/{id}', [VehiculoController::class, 'edit']);
Route::any('/vehiculos/update/{id}', [VehiculoController::class, 'update']);
Route::any('/vehiculos/delete/{id}', [VehiculoController::class, 'destroy']);
*/