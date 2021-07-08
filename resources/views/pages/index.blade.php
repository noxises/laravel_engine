@extends('layouts.app_pages')

@section('content')
    <div class="wrapper wrapper-inner">
        <div class="main services">
            <h1><?= $page['title'] ?></h1>
            <div class="">

                <?= $page['content'] ?>
            </div>
        </div>
    </div>
@endsection
