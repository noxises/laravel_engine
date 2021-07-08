<?php $i=0; foreach($items as $menu_item){
    $menu=\TCG\Voyager\Models\Menu::all()->where('id' , $menu_item['menu_id']);
foreach($menu as $item){ if ($i==0){ ?>
<h2> <?= $item['title'] ?></h2><?php } $i++;
}}
?>

<div class="services-box">

    <ul class="services-list">
   <?php $i=0;  foreach($items as $menu_item) {  $i++ ?>
    <li class="services-list-item"><a href="{{ url("{$menu_item->link()}") }}">{{ $menu_item->title }}</a></li>
    <?php
   if ($i%3==0 ){
       echo '</ul> <ul class="services-list">';
   };

   } ?>
    </ul>
</div>
