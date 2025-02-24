<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Vehiculo extends Model
{
    protected $table = 'vehiculos';
    protected $primaryKey = 'id';
    protected $guarded = [];
    public $timestamps = false;

    public function retiradas()
    {
        return $this->hasOne(Retirada::class, 'id_vehiculos', 'id');
    }

    public function index()
    {
        return self::all()->toJson();
    }
    
    public function porRetirar()
    {
        return self::where('fecha_salida', null)->get()->toJson();
    }
}
