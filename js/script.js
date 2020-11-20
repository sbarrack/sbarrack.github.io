(function ($, AOS) {
  $(function () {
    const $window = $(window);
    const $scroll = $("html, body");
    const $icon = $("nav .icon");
    const $navbar = $(".navbar");
    const $burger = $(".navbar-burger");
    const $menu = $(".navbar-menu");
    const $terminal = $("#terminal");

    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
    if ($terminal.length) {
      let xterm = new Terminal();
      // xterm.open($terminal.get(0));
      // xterm.write('Testing, testaroo...');
    }

    $burger.on("click", toggleNav);
    $(".navbar-item").on("click", toggleNav);

    $(document).on("click", 'a[href^="#"]', function (e) {
      e.preventDefault();
      $scroll.animate(
        {
          scrollTop:
            $($.attr(this, "href")).offset().top - $navbar.outerHeight(),
        },
        500
      );
    });

    $window.on("resize", function () {
      if ($window.width() >= 1024) {
        $burger.removeClass("is-active");
        $menu.removeClass("is-active");
        $icon.removeClass("fa-times").addClass("fa-bars");
      }
    });

    if (document.readyState === "complete") {
      $menu.addClass("enabled");
    } else {
      $window.on("load", function () {
        $menu.addClass("enabled");
      });
    }

    function toggleNav(e) {
      $navbar.toggleClass("is-active");
      $burger.toggleClass("is-active");
      $menu.toggleClass("is-active");
      $icon.toggleClass("fa-times").toggleClass("fa-bars");
    }
  });
})(jQuery, AOS);
