<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use Symfony\Component\VarDumper\Cloner\Data;
use TCG\Voyager\Models\Page;

class PostsController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('blog.index')
            ->with('page',Page::where('slug','portfolio')->first())
            ->with('posts',Post::orderBy('updated_at', 'DESC')
                ->get());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('blog.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'title'=> 'required',
            'description'=> 'required',
            'slug'=> 'required',
            'image'=> 'required|mimes:jpg,png,jpeg,svg,webpg,gif|max:10096',
            'category'=> 'required',
        ]);
        $newImageNmae=$request->title . '.' . $request->image->extension();
        $request->image->move(public_path('upload'),$newImageNmae);

        Post::create([
            'title'=>$request->input('title'),
            'slug'=>$request->input('slug'),
            'description'=>$request->input('description'),
            'category_id'=> $request->input('category'),
            'image_path'=>$newImageNmae,


            ]
        );

        return redirect('/blog')->with('message','Your post has been added ');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $slug
     * @return \Illuminate\Http\Response
     */
    public function show($slug)
    {
        $check_posts= Post::all();

        foreach ($check_posts as $check){
            if ($check['slug']==$slug ){
                return view('blog.view')
                    ->with('post', Post::where('slug', $slug)->first());
            }
        }

        abort(404);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  string  $slug
     * @return \Illuminate\Http\Response
     */
    public function edit($slug)
    {
    return view('blog.edit')->with('post',Post::where('slug',$slug)->first());
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  string  $slug
     * @param  string  $newImageNmae
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $slug)
    {
        if ($request->input('image')) {
            $newImageNmae = $request->title . '.' . $request->image->extension();
            $request->image->move(public_path('upload'), $newImageNmae);
            Post::where('slug',$slug)->update([
                'image_path'=>$newImageNmae,
            ]);
        }
       Post::where('slug',$slug)->update([
           'title'=>$request->input('title'),
           'slug'=>$request->input('slug'),
           'description'=>$request->input('description'),
           'category_id'=> $request->input('category'),
       ]);
       return redirect('/blog')->with('message','Your post has been updated');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
