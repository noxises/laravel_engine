<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PagesController;
use App\Http\Controllers\PostsController;
use App\Http\Controllers\Auth\LoginController;
use \App\Http\Controllers\AdministrationController;
use App\Models\Lead;
use Illuminate\Http\Request;
use TCG\Voyager\Models\Page;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/', [PagesController::class, 'index']);
Route::get('/contact', [PagesController::class, 'contact']);
Route::get('/services', [PagesController::class, 'services']);
Route::resource('/portfolio', PostsController::class);
Route::middleware('throttle:5,1')->group(function () {
    Route::post('send-mail', function (Request $request) {
        $request->validate([
            'name' => 'required',
            'tel' => 'required',
            'message' => 'required',
        ]);
        $details = [
            'name' => $request->input('name'),
            'phone' => $request->input('tel'),
            'message' => $request->input('message'),
        ];
        try {
            \Mail::to(setting('site.site_email'))->send(new \App\Mail\MyTestMail($details), $send = true);
        } catch (\Exception $e) {
            $details['send'] = 'No';
        }
        Lead::create($details);
        return back()->with('message', 'Your Message Has Been Send');
    });
});
Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
});
$pages = Page::all();
foreach ($pages as $page) {
    Route::get("/{{$page['url']}}", [PagesController::class, 'pages']);
}





