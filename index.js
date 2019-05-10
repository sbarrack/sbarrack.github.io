$(document).ready(function () {
    const end = 2
    var count = 0

    $('.navbar-burger').click(toggleNav)
    $('.navbar-end .navbar-item').click(toggleNav)
    slideshow()

    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault()
        $('html, body').animate({scrollTop: $($.attr(this, 'href')).offset().top - 52}, 500)
    })

    $(window).resize(function () {
        if ($(window).width() >= 1088) {
            $('.navbar-burger').removeClass('is-active')
            $('.navbar-menu').removeClass('is-active')
            $('nav .icon').removeClass('fa-times').addClass('fa-bars')
        }
    })

    function toggleNav() {
        $('.navbar-burger').toggleClass('is-active')
        $('.navbar-menu').toggleClass('is-active')
        $('nav .icon').toggleClass('fa-times').toggleClass('fa-bars')
    }

    function slideshow() {
        count = count > end ? 0 : count
        $('body').css('background-image', 'url("images/bg/' + count++ + '.jpg")').show(0, function () {
            setTimeout(slideshow, 5000)
        })
    }
})
