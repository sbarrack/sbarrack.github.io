var count
const end = 2

$(document).ready(function () {
    $('.navbar-burger').click(toggleNav)
    $('.navbar-item').click(toggleNav)
    count = 0
    slideshow()
})

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
