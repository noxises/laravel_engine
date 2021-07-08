<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use TCG\Voyager\Traits\Translatable;

class Post extends Model
{
    use HasFactory;
    protected $fillable = [
        'title','slug','description','image_path','category_id',

    ];
    use Translatable;
    protected $translatable = ['title', 'body'];

    public function category() {
        return $this-> belongsTo(Category::class);
    }
}
