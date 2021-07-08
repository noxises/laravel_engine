@extends('layouts.app_pages')
@section('content')
    <?php $i = 0;?>
    <div class="wrapper wrapper-inner">
        <div class="main">

            <h1><?= $page['title'] ?> </h1>
            <div class="tab">
                <div class="tab-header">
                    <?php $category = \App\Models\Category::all();
                    foreach ($category as $category_item) {
                    $i++;
                    ?>
                    <div class="tab-header-item <?php if ($i == 1) {
                        echo 'active';
                    } ?> "><?= $category_item['name'] ?></div>
                    <?php }?>
                </div>
                <div class="tab-body">
                    <?php
                    $i = 0;
                    foreach ($category as $category_item) {$i++;?>
                    <div class="tab-inner <?php if ($i == 1) {
                        echo 'active';
                    } ?>">
                        <?php foreach($posts as $post) {
                        if($category_item['id'] == $post['category_id']){?>
                            <div class="tab-inner-item">
                            <div class="tab-inner-info">
                                <div class="tab-inner-type"><?= $post['title'] ?></div>
                                <div class="tab-inner-text">
                                    <div class="tab-inner-title"><?= $post['title'] ?></div>
                                    <div class="tab-inner-desc"><?= $post['excerpt'] ?></div>
                                </div>
                                <div class="tab-inner-readMore"> <a href="portfolio/<?= $post['slug'] ?>">Read more</a></div>
                            </div>
                            <img src="storage/<?= $post['image'] ?>" alt="">

                            </div>


                        <?php }} ?>
                    </div>
                    <?php } ?>
                </div>
            </div>
        </div>
    </div>
@endsection
