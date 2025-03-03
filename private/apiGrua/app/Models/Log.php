<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Log extends Model
{
    protected $table = 'log';
    protected $primaryKey = 'id';
    protected $guarded = [];
    public $timestamps = false;

    public function usuario()
    {
        return $this->belongsTo(Usuario::class, 'usuario_id', 'id');
    }

    public function index()
    {
        return self::orderBy('id', 'desc')->get()->toJson();
    }
}
