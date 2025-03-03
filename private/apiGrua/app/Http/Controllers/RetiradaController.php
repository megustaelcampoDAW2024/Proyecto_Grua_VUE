<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Retirada;
use App\Models\Tarifa;
use App\Models\Vehiculo;
use Illuminate\Support\Facades\DB;

class RetiradaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $retirada = new Retirada();
        return $retirada->index();
    }
    
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store()
    {
        $input = file_get_contents('php://input');
        $data = json_decode($input, true);

        if ($data) {
            try {
                DB::beginTransaction();
                try {
                    $tarifa = new Tarifa();
                    $tarifa->opcion_pago = $data['tarifa']['opcion_pago'];
                    $tarifa->importe_retirada = $data['tarifa']['importe_retirada'];
                    $tarifa->importe_deposito = $data['tarifa']['importe_deposito'];
                    $tarifa->horas_gratis = $data['tarifa']['horas_gratis'];
                    $tarifa->costo_por_hora = $data['tarifa']['costo_por_hora'];
                    $tarifa->total = $data['tarifa']['total'];
                    $tarifa->save();
                    
                    $retirada = new Retirada();
                    $retirada->id_tarifa = $tarifa->id;
                    $retirada->id_vehiculos = $data['id_vehiculos'];
                    $retirada->nombre = $data['nombre'];
                    $retirada->nif = $data['nif'];
                    $retirada->domicilio = $data['domicilio'];
                    $retirada->poblacion = $data['poblacion'];
                    $retirada->provincia = $data['provincia'];
                    $retirada->permiso = $data['permiso'];
                    $retirada->fecha = $data['fecha'];
                    $retirada->agente = $data['agente'];
                    $retirada->save();

                    $vehiculo = Vehiculo::find($data['id_vehiculos']);
                    if ($vehiculo) {
                        $vehiculo->fecha_salida = now();
                        $vehiculo->estado = 'Liquidado';
                        $vehiculo->save();
                    }

                    DB::commit();
                } catch (\Exception $e) {
                    DB::rollBack();
                    throw $e;
                }

                return response()->json(['message' => 'Retirada created successfully'], 201);
            } catch (\Exception $e) {
                return response()->json(['message' => 'Error creating Retirada.', 'error' => $e->getMessage()], 500);
            }
        } else {
            return response()->json(['message' => 'Data not found.'], 404);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
