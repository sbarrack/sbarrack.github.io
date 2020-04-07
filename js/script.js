(function ($, AOS) {
    $(document).ready(function () {
        AOS.init(/* {
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
        } */);
        $('.navbar-burger').click(toggleNav);
        $('.navbar-end .navbar-item').click(toggleNav);

        $(document).on('click', 'a[href^="#"]', function (e) {
            e.preventDefault();
            $('html, body').animate({ scrollTop: $($.attr(this, 'href')).offset().top - $('.navbar').outerHeight(true) }, 500);
        })

        $(window).resize(function () {
            if ($(window).width() >= 1024) {
                $('.navbar-burger').removeClass('is-active');
                $('.navbar-menu').removeClass('is-active');
                $('nav .icon').removeClass('fa-times').addClass('fa-bars');
            }
        })

        function toggleNav() { 
            $('.navbar-burger').toggleClass('is-active');
            $('.navbar-menu').toggleClass('is-active');
            $('nav .icon').toggleClass('fa-times').toggleClass('fa-bars');
        }
    });
})($, AOS);