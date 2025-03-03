<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Vehiculo;
use Illuminate\Support\Facades\DB;

/**
 * @OA\Info(
 *     title="API Grua",
 *     version="1.0.0",
 *     description="API para gestión de vehículos retirados por grúa"
 * )
 * @OA\Schema(
 *     schema="VehiculoRequest",
 *     required={"fecha_entrada", "lugar", "direccion", "agente", "matricula", "marca", "modelo", "color", "motivo", "tipo_vehiculo", "grua", "estado"},
 *     @OA\Property(property="fecha_entrada", type="string", format="date-time", example="2025-03-26T17:18"),
 *     @OA\Property(property="fecha_salida", type="string", format="date-time", nullable=true),
 *     @OA\Property(property="lugar", type="string", example="aawdawd"),
 *     @OA\Property(property="direccion", type="string", example="aawdawd"),
 *     @OA\Property(property="agente", type="string", example="aawdawd"),
 *     @OA\Property(property="matricula", type="string", example="2344OOO"),
 *     @OA\Property(property="marca", type="string", example="aawdawd"),
 *     @OA\Property(property="modelo", type="string", example="aawdawd"),
 *     @OA\Property(property="color", type="string", example="aawdawd"),
 *     @OA\Property(property="motivo", type="string", example="aawdawd"),
 *     @OA\Property(property="tipo_vehiculo", type="string", example="A"),
 *     @OA\Property(property="grua", type="string", example="aawdawd"),
 *     @OA\Property(property="estado", type="string", example="En deposito")
 * )
 */
class VehiculoController extends Controller
{
    /**
     * @OA\Get(
     *     path="/api/vehiculos",
     *     summary="Obtener lista de vehículos",
     *     @OA\Response(
     *         response=200,
     *         description="Lista de vehículos obtenida correctamente",
     *         @OA\JsonContent(type="array", @OA\Items(ref="#/components/schemas/VehiculoRequest"))
     *     )
     * )
     */
    public function index()
    {
        $vehiculo = new Vehiculo();
        return $vehiculo->index();
    }

    /**
     * @OA\Get(
     *     path="/api/vehiculos/por_retirar",
     *     summary="Obtener vehículos pendientes de retirar",
     *     @OA\Response(
     *         response=200,
     *         description="Lista de vehículos por retirar"
     *     )
     * )
     */
    public function porRetirar()
    {
        $retirada = new Vehiculo();
        return $retirada->porRetirar();
    }

    /**
     * @OA\Post(
     *     path="/api/vehiculos",
     *     summary="Crear nuevo vehículo",
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(ref="#/components/schemas/VehiculoRequest")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Vehículo creado correctamente"
     *     )
     * )
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
     * @OA\Put(
     *     path="/api/vehiculos/{id}",
     *     summary="Actualizar vehículo existente",
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(ref="#/components/schemas/VehiculoRequest")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Vehículo actualizado correctamente"
     *     )
     * )
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
     * @OA\Delete(
     *     path="/api/vehiculos/{id}",
     *     summary="Eliminar vehículo",
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         required=true,
     *         description="ID del vehículo",
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Vehículo eliminado correctamente"
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Vehículo no encontrado"
     *     )
     * )
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
