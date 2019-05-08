$(document).ready(function () {
    $('.navbar-burger').click(toggleNav)
    $('.navbar-item').click(toggleNav)
})

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault()
    $('html, body').animate({scrollTop: $($.attr(this, 'href')).offset().top - 52}, 500)
})

$(window).resize(function () {
    if ($(window).width() >= 1088) {
        $('.navbar-burger').removeClass('is-active')
        $('.navbar-menu').removeClass('is-active')
        $('.icon').removeClass('fa-times').addClass('fa-bars')
    }
})

function toggleNav() {
    $('.navbar-burger').toggleClass('is-active')
    $('.navbar-menu').toggleClass('is-active')
    $('.icon').toggleClass('fa-times').toggleClass('fa-bars')
}
