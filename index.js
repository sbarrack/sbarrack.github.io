$(document).ready(function () {

    $(".navbar-burger").click(function () {
        toggleNav();

        $(".icon").toggleClass("fa-times");
        $(".icon").toggleClass("fa-bars");

    });
    $(".navbar-item").click(toggleNav());

});

function toggleNav() {
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
}
