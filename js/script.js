(function ($, AOS) {
    $(document).on('ready', function () {
        AOS.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
        });
        $('.navbar-burger').on('click', toggleNav);
        $('.navbar-end .navbar-item').on('click', toggleNav);

        $(document).on('click', 'a[href^="#"]', function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top - $('.navbar').outerHeight(true)
            }, 500);
        });

        $(window).on('resize', function () {
            if ($(window).width() >= 1024) {
                $('.navbar-burger, .navbar-menu').removeClass('is-active');
                $('nav .icon').removeClass('fa-times').addClass('fa-bars');
            }
        });

        function toggleNav() {
            $('.navbar-burger, .navbar, .navbar-menu').toggleClass('is-active');
            $('nav .icon').toggleClass('fa-times').toggleClass('fa-bars');
        }

        // var xterm = new Terminal();
        // xterm.open($('#terminal')[0]);
        // xterm.write('Testing, testaroo...');
    });
})($, AOS);