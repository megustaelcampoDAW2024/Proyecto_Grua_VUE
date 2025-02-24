<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Retirada extends Model
{
    protected $table = 'retiradas';
    protected $primaryKey = 'id';
    protected $guarded = [];
    public $timestamps = false;

    public function vehiculo()
    {
        return $this->belongsTo(Vehiculo::class, 'id_vehiculos', 'id');
    }

    public function tarifa()
    {
        return $this->belongsTo(Tarifa::class, 'id_tarifa', 'id');
    }

    public function index()
    {
        return self::with(['vehiculo', 'tarifa'])->get()->toJson();
    }
    
}
