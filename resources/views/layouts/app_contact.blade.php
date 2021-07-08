<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="{{url('css/main.css')}}">
    <link rel="icon" type="image/x-icon" href="{{url('img/svg/logo.svg')}}">
    <link href='https://api.mapbox.com/mapbox-gl-js/v2.3.0/mapbox-gl.css' rel='stylesheet' />
    <script src='https://api.mapbox.com/mapbox-gl-js/v2.3.0/mapbox-gl.js'></script>
    <title><?= $page['title'] ?></title>
    <meta name="description" content="<?= htmlspecialchars($page['meta_description'], ENT_QUOTES) ?>">
    <meta name="keywords" content="<?= htmlspecialchars($page['meta_keywords'], ENT_QUOTES) ?>">

</head>

<div class="header not-index">
    <canvas class="header-bg"></canvas>


    <div class="main">
        <div class="header-top">
            <a href="{{ url('/') }}" class="logo">
                <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.4 9.7L29.1 0H19.4H9.7H0L9.7 9.7L0 19.4L9.7 29.1L0 38.8H9.7H19.4H29.1L19.4 29.1L29.1 19.4L19.4 9.7Z"
                          fill="#7B4091"/>
                    <path opacity="0.8"
                          d="M38.8 9.7L29.1 0H9.70001L19.4 9.7L9.70001 19.4L19.4 29.1L9.70001 38.8H29.1L38.8 29.1L29.1 19.4L38.8 9.7Z"
                          fill="#15128D"/>
                    <path d="M0 19.4H9.7L19.4 9.70001H9.7L0 19.4Z" fill="#B671AC"/>
                    <path d="M0 38.8H9.7L19.4 29.1H9.7L0 38.8Z" fill="#B671AC"/>
                </svg>
                <svg width="142" style="margin-left: 10px" height="30" viewBox="0 0 142 30" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.799988 28.3V2.70001H4.69999C6.39999 2.70001 7.79999 2.80001 8.79999 3.10001C9.79999 3.40001 10.7 3.80001 11.4 4.40001C12.1 5.10001 12.7 5.90001 13.1 6.80001C13.5 7.80001 13.7 8.80001 13.7 9.80001C13.7 11.6 13 13.2 11.6 14.5C13 15 14 15.8 14.8 16.9C15.6 18.1 16 19.4 16 20.9C16 22.9 15.3 24.6 13.9 26C13 26.9 12.1 27.4 11 27.8C9.79999 28.1 8.39999 28.3 6.59999 28.3H0.799988ZM4.69999 13.7H5.89999C7.29999 13.7 8.39999 13.4 9.09999 12.7C9.79999 12.1 10.1 11.1 10.1 9.90001C10.1 8.70001 9.79999 7.80001 9.09999 7.20001C8.39999 6.60001 7.39999 6.30001 6.09999 6.30001H4.69999V13.7ZM4.69999 24.7H6.99999C8.69999 24.7 9.99999 24.4 10.9 23.7C11.8 23 12.2 22 12.2 20.9C12.2 19.8 11.8 18.9 11 18.1C10.2 17.4 8.69999 17 6.69999 17H4.69999V24.7Z"
                          fill="white"/>
                    <path d="M28.8 2.70001V28.3H25V2.70001H28.8Z" fill="white"/>
                    <path d="M39.1 28.3V0.900024L57.8 20.4V2.70002H61.7V29.9L42.9 10.4V28.3H39.1Z" fill="white"/>
                    <path d="M70.8 15.4C70.8 11.8 72.1 8.70001 74.8 6.10001C77.4 3.50001 80.6 2.20001 84.3 2.20001C88 2.20001 91.1 3.50001 93.7 6.10001C96.3 8.70001 97.6 11.8 97.6 15.5C97.6 19.2 96.3 22.3 93.7 24.9C91.1 27.5 87.9 28.8 84.1 28.8C80.8 28.8 77.8 27.7 75.2 25.4C72.2 22.8 70.8 19.5 70.8 15.4ZM74.7 15.4C74.7 18.2 75.7 20.6 77.6 22.4C79.5 24.2 81.7 25.1 84.2 25.1C86.9 25.1 89.2 24.2 91 22.3C92.8 20.4 93.8 18.1 93.8 15.4C93.8 12.7 92.9 10.4 91.1 8.50001C89.3 6.60001 87 5.70001 84.4 5.70001C81.7 5.70001 79.5 6.60001 77.6 8.50001C75.6 10.5 74.7 12.7 74.7 15.4Z"
                          fill="white"/>
                    <path d="M110.4 17.9V28.3H106.5V2.70001H110.9C113 2.70001 114.7 2.80001 115.8 3.10001C116.9 3.40001 117.9 4.00001 118.7 4.80001C120.2 6.20001 120.9 8.10001 120.9 10.2C120.9 12.5 120.1 14.4 118.5 15.8C116.9 17.2 114.8 17.9 112.1 17.9H110.4ZM110.4 14.3H111.8C115.4 14.3 117.1 12.9 117.1 10.2C117.1 7.60001 115.3 6.20001 111.6 6.20001H110.3V14.3H110.4Z"
                          fill="white"/>
                    <path d="M136 6.30001V28.3H132.1V6.30001H126.2V2.70001H141.8V6.30001H136Z" fill="white"/>
                </svg>

            </a>
            <?= menu('top','top_menu') ?>
            <div class="burger">
                <div class="burger-trigger">
                </div>
            </div>
        </div>


    </div>
</div>
@if(session()->has('message'))


    <h1><?= session()->get('message') ?></h1>
@endif
<?php if ($errors->any()) { ?>
<h1>try again</h1>
<?php }?>
@yield('content')

<div>
    @include('layouts.footer_contact')

</div>
</div>
</body>
</html>
