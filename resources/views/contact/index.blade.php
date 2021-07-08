@extends('layouts.app_contact')

@section('content')

    <div id='map' style="height: 400px"></div>
    <div class="contact-box">
        <div class="contact">
            <div class="contact-content">
                <div class="title"><?= $page['title'] ?></div>
                <div class="desc"> <?= $page['description'] ?>
                </div>
                <div class="info">
                    <div style="margin-bottom: 20px">
                        Call us: <br>
                        <a href="tel:{{setting('site.site_phone')}}" class="trigger">{{setting('site.site_phone')}}</a>
                    </div>
                    <div>
                        Email: <br>
                        <div class="trigger">{{setting('site.site_email')}}</div>
                    </div>
                </div>
            </div>

            <form class="form" action="{{url('send-mail')}}" method="post" enctype="multipart/form-data">
                @csrf
                <div class="form-title">Write to us</div>
                <input class="input name" type="text" id="name" name="name" placeholder="Your name*" required>
                <input class="input phone" type="number" id="tel" name="tel" placeholder="Your phone*" required>
                <label for="message" class="input label">Message*</label>
                <textarea class="input message" id="message" name="message"></textarea>
                <button type="submit" class="form-btn">send message</button>

            </form>

        </div>
    </div>
@endsection
