<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Retirada extends Model
{
    protected $table = 'retiradas';
    protected $primaryKey = 'id';
    protected $guarded = [];
    public $timestamps = false;
}
