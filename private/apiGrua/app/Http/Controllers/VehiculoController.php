<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Vehiculo;
use Illuminate\Support\Facades\DB;

class VehiculoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $vehiculo = new Vehiculo();
        return $vehiculo->index();
    }

    public function porRetirar()
    {
        $retirada = new Vehiculo();
        return $retirada->porRetirar();
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
                $vehiculo = new Vehiculo();
                $vehiculo->fecha_entrada = $data['fecha_entrada'];
                $vehiculo->fecha_salida = empty($data['fecha_salida']) ? null : $data['fecha_salida'];
                $vehiculo->lugar = $data['lugar'];
                $vehiculo->direccion = $data['direccion'];
                $vehiculo->agente = $data['agente'];
                $vehiculo->matricula = $data['matricula'];
                $vehiculo->marca = $data['marca'];
                $vehiculo->modelo = $data['modelo'];
                $vehiculo->color = $data['color'];
                $vehiculo->motivo = $data['motivo'];
                $vehiculo->tipo_vehiculo = $data['tipo_vehiculo'];
                $vehiculo->grua = $data['grua'];
                $vehiculo->estado = $data['estado'];
                $vehiculo->save();
                return response()->json(['message' => 'Vehiculo created successfully.'], 200);
            } catch (\Exception $e) {
                return response()->json(['message' => 'Error creating Vehiculo.', 'error' => $e->getMessage()], 500);
            }
            return response()->json(['message' => 'Vehiculo created successfully.'], 200);
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
        $input = file_get_contents('php://input');
        $data = json_decode($input, true);

        if ($data) {
            try {
                $vehiculo = Vehiculo::find($id);
                if ($vehiculo) {
                    $vehiculo->fecha_entrada = $data['fecha_entrada'];
                    $vehiculo->fecha_salida = $data['fecha_salida'];
                    $vehiculo->lugar = $data['lugar'];
                    $vehiculo->direccion = $data['direccion'];
                    $vehiculo->agente = $data['agente'];
                    $vehiculo->matricula = $data['matricula'];
                    $vehiculo->marca = $data['marca'];
                    $vehiculo->modelo = $data['modelo'];
                    $vehiculo->color = $data['color'];
                    $vehiculo->motivo = $data['motivo'];
                    $vehiculo->tipo_vehiculo = $data['tipo_vehiculo'];
                    $vehiculo->grua = $data['grua'];
                    $vehiculo->estado = $data['estado'];
                    $vehiculo->save();
                    return response()->json(['message' => 'Vehiculo updated successfully.'], 200);
                } else {
                    return response()->json(['message' => 'Vehiculo not found.'], 404);
                }
            } catch (\Exception $e) {
                return response()->json(['message' => 'Error updating Vehiculo.', 'error' => $e->getMessage()], 500);
            }
        } else {
            return response()->json(['message' => 'Data not found.'], 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $vehiculo = Vehiculo::find($id);

        if ($vehiculo) {
            // Delete related records in the 'retiradas' table
            DB::table('retiradas')->where('id_vehiculos', $id)->delete();
            
            $vehiculo->delete();
            return response()->json(['message' => 'Vehiculo deleted successfully.'], 200);
        } else {
            return response()->json(['message' => 'Vehiculo not found.'], 404);
        }
    }
}
