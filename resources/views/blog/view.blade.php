@extends('layouts.app_page')
@section('content')

    <div class="wrapper wrapper-inner">
        <div class="main">
            <h1><?= $post['title'] ?></h1>
            <div class="portfolio-img">
                <img src="../storage/{{$post['image'] }}" alt="">
            </div>
            <div class="content">
                <?= $post['body'] ?>

            </div>
        </div>
    </div>


@endsection
