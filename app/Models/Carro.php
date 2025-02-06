<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Carro extends Model
{
    protected $fillable = [
        'marca',
        'modelo',
        'año',
        'color',
        'precio',
        'photo_url'
    ];
}
