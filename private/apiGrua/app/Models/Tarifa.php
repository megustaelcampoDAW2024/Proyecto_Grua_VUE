<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tarifa extends Model
{
    protected $table = 'tarifa';
    protected $primaryKey = 'id';
    protected $guarded = [];
    public $timestamps = false;

    public function retiradas()
    {
        return $this->hasOne(Retirada::class, 'id_tarifa', 'id');
    }

    public function index()
    {
        return self::all()->toJson();
    }
}
