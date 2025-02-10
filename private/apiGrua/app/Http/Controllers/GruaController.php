<?php

namespace App\Http\Controllers;

use App\Models\Log;
use App\Models\Retirada;
use App\Models\Tarifa;
use App\Models\Usuario;
use App\Models\Vehiculo;
use Illuminate\Http\Request;

class GruaController extends Controller
{
    public function indexLogs()
    {
        $log = new Log();
        return $log->index();
    }

    public function indexRetiradas()
    {
        $retirada = new Retirada();
        return $retirada->index();
    }

    public function indexTarifas()
    {
        $tarifa = new Tarifa();
        return $tarifa->index();
    }

    public function indexUsuarios()
    {
        $usuario = new Usuario();
        return $usuario->index();
    }

    public function indexVehiculos()
    {
        $vehiculo = new Vehiculo();
        return $vehiculo->index();
    }
}