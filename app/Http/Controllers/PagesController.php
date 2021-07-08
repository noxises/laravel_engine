<?php

namespace App\Http\Controllers;

use TCG\Voyager\Models\Page;
use Illuminate\Http\Request;

class PagesController extends Controller
{
    public function index()
    {
        return view('index')->with('page', Page::where('slug', 'home')->first());
    }

    public function contact()
    {
        return view('contact.index')->with('page', Page::where('slug', 'contact')->first());
    }

    public function services()
    {
        return view('services.index')->with('page', Page::where('slug', 'services')->first());
    }

    public function pages($url)
    {
        if (Page::where('url', $url)->first()) {
            return view('pages.index')->with('page', Page::where('url', $url)->first());
        }
        abort(404);
    }
}
