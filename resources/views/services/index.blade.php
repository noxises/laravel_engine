@extends('layouts.app_pages')
@section('content')
    <div class="wrapper wrapper-inner">
        <div class="main services">
            <h1><?= $page['title'] ?></h1>
            <div class="services-item">
                <img src="{{url('img/services/1.jpg')}}" alt="" width="100%">
                <div class="services-inner">

                        {{menu('Services_top','services_menu')}}

                        {{menu('Other services','services_menu')}}


                </div>

            </div>
            <div class="services-item">
                <div>
                    <img src="{{url('/img/services/2.jpg')}}" alt="">
                    <div>

                        {{menu('Services_middle1','services_menu')}}
                    </div>
                </div>
                <div>
                    <img src="{{url('/img/services/3.jpg')}}" alt="">
                    <div>

                        {{menu('Services_middle2','services_menu')}}
                    </div>
                </div>
            </div>
            <div class="services-item">
                <img src="{{url('img/services/4.jpg')}}" alt="" width="100%">
                <div class="services-inner">

                        {{menu('Services_footer','services_menu')}}

                </div>
                </div>

            </div>
        </div>
    </div>
@endsection
