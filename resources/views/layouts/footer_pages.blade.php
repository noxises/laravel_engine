<div class="footer">
    <canvas class="footer-bg"></canvas>
    <div class="footer-text">
        <div class="footer-title">
            Discuss the project
        </div>

        <div class="footer-desc">
            And there is no doubt that clear signs <br>
            of the victory
        </div>
        <button class="footer-btn">to discuss</button>
        <div class="copyright">© 2021 Binopt Company</div>
    </div>
</div>
<div class="modal">
    <form class="form" action="{{url('send-mail')}}" method="post" enctype="multipart/form-data">
        @csrf
        <div class="form-title">Write to us</div>
        <input class="input name" type="text" id="name" name="name" placeholder="Your name*" required>
        <input class="input phone" type="tel" id="tel" name="tel" placeholder="Your phone*" required>
        <label for="message" class="input label">Message*</label>
        <textarea class="input message" id="message" name="message"></textarea>
        <button type="submit" class="form-btn">send message</button>
        <div class="form-close">X</div>
    </form>

</div>
<div class="mask"></div>

<script src="{{url('js/inner-common.js')}}"></script>

</body>
</html>
