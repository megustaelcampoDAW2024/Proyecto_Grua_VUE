<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LogController;
use App\Http\Controllers\RetiradaController;
use App\Http\Controllers\TarifaController;
use App\Http\Controllers\UsuarioController;
use App\Http\Controllers\VehiculoController;

// Rutas LogController
Route::any('/logs/index', [LogController::class, 'index']);
Route::any('/logs/create', [LogController::class, 'create']);
Route::any('/logs/store', [LogController::class, 'store']);
Route::any('/logs/show/{id}', [LogController::class, 'show']);
Route::any('/logs/edit/{id}', [LogController::class, 'edit']);
Route::any('/logs/update/{id}', [LogController::class, 'update']);
Route::any('/logs/delete/{id}', [LogController::class, 'destroy']);

// Rutas RetiradaController
Route::any('/retiradas/index', [RetiradaController::class, 'index']);
Route::any('/retiradas/create', [RetiradaController::class, 'create']);
Route::any('/retiradas/store', [RetiradaController::class, 'store']);
Route::any('/retiradas/show/{id}', [RetiradaController::class, 'show']);
Route::any('/retiradas/edit/{id}', [RetiradaController::class, 'edit']);
Route::any('/retiradas/update/{id}', [RetiradaController::class, 'update']);
Route::any('/retiradas/delete/{id}', [RetiradaController::class, 'destroy']);

// Rutas TarifaController
Route::any('/tarifas/index', [TarifaController::class, 'index']);
Route::any('/tarifas/create', [TarifaController::class, 'create']);
Route::any('/tarifas/store', [TarifaController::class, 'store']);
Route::any('/tarifas/show/{id}', [TarifaController::class, 'show']);
Route::any('/tarifas/edit/{id}', [TarifaController::class, 'edit']);
Route::any('/tarifas/update/{id}', [TarifaController::class, 'update']);
Route::any('/tarifas/delete/{id}', [TarifaController::class, 'destroy']);

// Rutas UsuarioController
Route::any('/usuarios/index', [UsuarioController::class, 'index']);
Route::any('/usuarios/create', [UsuarioController::class, 'create']);
Route::any('/usuarios/store', [UsuarioController::class, 'store']);
Route::any('/usuarios/show/{id}', [UsuarioController::class, 'show']);
Route::any('/usuarios/edit/{id}', [UsuarioController::class, 'edit']);
Route::any('/usuarios/update/{id}', [UsuarioController::class, 'update']);
Route::any('/usuarios/delete/{id}', [UsuarioController::class, 'destroy']);

// Rutas VehiculoController
Route::any('/vehiculos/index', [VehiculoController::class, 'index']);
Route::any('/vehiculos/por_retirar', [VehiculoController::class, 'porRetirar']);
Route::any('/vehiculos/create', [VehiculoController::class, 'create']);
Route::any('/vehiculos/store', [VehiculoController::class, 'store']);
Route::any('/vehiculos/show/{id}', [VehiculoController::class, 'show']);
Route::any('/vehiculos/edit/{id}', [VehiculoController::class, 'edit']);
Route::any('/vehiculos/update/{id}', [VehiculoController::class, 'update']);
Route::any('/vehiculos/delete/{id}', [VehiculoController::class, 'destroy']);