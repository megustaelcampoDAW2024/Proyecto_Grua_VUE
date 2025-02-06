<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Usuario extends Model
{
    use SoftDeletes;
    protected $table = 'usuario';
    protected $primaryKey = 'id';
    protected $guarded = [];
    public $timestamps = false;
}
