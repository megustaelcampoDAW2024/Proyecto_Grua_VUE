<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GruaController;

Route::get('/logs', [GruaController::class, 'indexLogs']);
Route::get('/retiradas', [GruaController::class, 'indexRetiradas']);
Route::get('/tarifas', [GruaController::class, 'indexTarifas']);
Route::get('/usuarios', [GruaController::class, 'indexUsuarios']);
Route::get('/vehiculos', [GruaController::class, 'indexVehiculos']);