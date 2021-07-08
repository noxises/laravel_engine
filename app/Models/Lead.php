<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use TCG\Voyager\Traits\Translatable;

class Lead extends Model
{

    use HasFactory;
    protected $fillable = [
        'name','phone','message','send'
    ];
}
