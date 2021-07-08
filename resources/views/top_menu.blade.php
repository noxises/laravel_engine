<nav class="nav">
    <div class="nav-list">
        @foreach($items as $menu_item)
           <a class="nav-item" href="{{ url("{$menu_item->link()}") }}">{{ $menu_item->title }}</a>
        @endforeach
    </div>
</nav>
<nav class="nav-mob">
    <div class="nav-list">

        @foreach($items as $menu_item)
            <a class="nav-item" href="{{ url("{$menu_item->link()}") }}">{{ $menu_item->title }}</a>
        @endforeach
    </div>
</nav>
