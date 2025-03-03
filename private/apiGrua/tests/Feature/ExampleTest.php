<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\Vehiculo;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class VehiculoControllerTest extends TestCase
{
    use DatabaseTransactions;

    private $createData = [
        "fecha_entrada" => "2025-03-26T17:18",
        "fecha_salida" => null,
        "lugar" => "aawdawd",
        "direccion" => "aawdawd",
        "agente" => "aawdawd", 
        "matricula" => "2344OOO",
        "marca" => "aawdawd",
        "modelo" => "aawdawd",
        "color" => "aawdawd",
        "motivo" => "aawdawd",
        "tipo_vehiculo" => "A",
        "grua" => "aawdawd",
        "estado" => "En deposito"
    ];

    private $updateData = [
        "fecha_entrada" => "2025-03-26 17:18:00",
        "fecha_salida" => null,
        "lugar" => "aawdawd-edit",
        "direccion" => "aawdawd-edit",
        "agente" => "aawdawd-edit",
        "matricula" => "2344KKK",
        "marca" => "aawdawd-edit",
        "modelo" => "aawdawd-edit",
        "color" => "aawdawd-edit",
        "motivo" => "aawdawd-edit",
        "tipo_vehiculo" => "B",
        "grua" => "aawdawd-edit",
        "estado" => "En deposito"
    ];

    public function test_can_get_all_vehicles()
    {
        $response = $this->getJson('/api/vehiculos');
        $response->assertStatus(200);
    }

    /*public function test_can_create_vehicle()
    {
        $response = $this->json('POST', '/api/vehiculos', $this->createData);
        
        $response->assertStatus(200)
                ->assertJson(['message' => 'Vehiculo created successfully.']);

        $this->assertDatabaseHas('vehiculos', [
            'matricula' => '2344OOO',
            'tipo_vehiculo' => 'A'
        ]);
    }

    public function test_can_update_vehicle()
    {
        $vehicle = Vehiculo::create($this->createData);

        $response = $this->json('PUT', "/api/vehiculos/{$vehicle->id}", $this->updateData);

        $response->assertStatus(200)
                ->assertJson(['message' => 'Vehiculo updated successfully.']);

        $this->assertDatabaseHas('vehiculos', [
            'id' => $vehicle->id,
            'matricula' => '2344KKK',
            'tipo_vehiculo' => 'B'
        ]);
    }*/

    public function test_can_delete_vehicle()
    {
        $vehicle = Vehiculo::create($this->createData);

        $response = $this->json('DELETE', "/api/vehiculos/{$vehicle->id}");

        $response->assertStatus(200)
                ->assertJson(['message' => 'Vehiculo deleted successfully.']);

        $this->assertDatabaseMissing('vehiculos', ['id' => $vehicle->id]);
    }

    public function test_can_get_vehicles_por_retirar()
    {
        $response = $this->getJson('/api/vehiculos/por_retirar');
        $response->assertStatus(200);
    }
}