window.onload = function() {
    // sticky navbar
    const navbar = document.getElementById("nav");
    var sticky = navbar.offsetTop;

    window.onscroll = () => {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    }

    window.onresize = () => {
        sticky = navbar.offsetTop;
    }

}
