<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LogController;
use App\Http\Controllers\RetiradaController;
use App\Http\Controllers\TarifaController;
use App\Http\Controllers\UsuarioController;
use App\Http\Controllers\VehiculoController;

// Rutas LogController
Route::get('/logs', [LogController::class, 'index']);
Route::get('/logs/create', [LogController::class, 'create']);
Route::post('/logs', [LogController::class, 'store']);
Route::get('/logs/{id}', [LogController::class, 'show']);
Route::get('/logs/edit/{id}', [LogController::class, 'edit']);
Route::put('/logs/{id}', [LogController::class, 'update']);
Route::delete('/logs/{id}', [LogController::class, 'destroy']);

// Rutas RetiradaController
Route::get('/retiradas', [RetiradaController::class, 'index']);
Route::get('/retiradas/create', [RetiradaController::class, 'create']);
Route::post('/retiradas', [RetiradaController::class, 'store']);
Route::get('/retiradas/{id}', [RetiradaController::class, 'show']);
Route::get('/retiradas/edit/{id}', [RetiradaController::class, 'edit']);
Route::put('/retiradas/{id}', [RetiradaController::class, 'update']);
Route::delete('/retiradas/{id}', [RetiradaController::class, 'destroy']);

// Rutas TarifaController
Route::get('/tarifas', [TarifaController::class, 'index']);
Route::get('/tarifas/create', [TarifaController::class, 'create']);
Route::post('/tarifas', [TarifaController::class, 'store']);
Route::get('/tarifas/{id}', [TarifaController::class, 'show']);
Route::get('/tarifas/edit/{id}', [TarifaController::class, 'edit']);
Route::put('/tarifas/{id}', [TarifaController::class, 'update']);
Route::delete('/tarifas/{id}', [TarifaController::class, 'destroy']);

// Rutas UsuarioController
Route::get('/usuarios', [UsuarioController::class, 'index']);
Route::get('/usuarios/create', [UsuarioController::class, 'create']);
Route::post('/usuarios', [UsuarioController::class, 'store']);
Route::get('/usuarios/{id}', [UsuarioController::class, 'show']);
Route::get('/usuarios/edit/{id}', [UsuarioController::class, 'edit']);
Route::put('/usuarios/{id}', [UsuarioController::class, 'update']);
Route::delete('/usuarios/{id}', [UsuarioController::class, 'destroy']);

// Rutas VehiculoController
Route::get('/vehiculos', [VehiculoController::class, 'index']);
Route::get('/vehiculos/create', [VehiculoController::class, 'create']);
Route::post('/vehiculos', [VehiculoController::class, 'store']);
Route::get('/vehiculos/{id}', [VehiculoController::class, 'show']);
Route::get('/vehiculos/edit/{id}', [VehiculoController::class, 'edit']);
Route::put('/vehiculos/{id}', [VehiculoController::class, 'update']);
Route::delete('/vehiculos/{id}', [VehiculoController::class, 'destroy']);