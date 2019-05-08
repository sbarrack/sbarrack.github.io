$(document).ready(function () {
    $('.navbar-burger').click(toggleNav)
    $('.navbar-item').click(toggleNav)
})

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault()
    $('html, body').animate({scrollTop: $($.attr(this, 'href')).offset().top - 52}, 500)
})

function toggleNav() {
    $('.navbar-burger').toggleClass('is-active')
    $('.navbar-menu').toggleClass('is-active')
    $('.icon').toggleClass('fa-times')
    $('.icon').toggleClass('fa-bars')
}
