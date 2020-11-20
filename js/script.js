(function ($, AOS) {
  $(function () {
    const $window = $(window);
    const $scroll = $("html, body");
    const $icon = $("nav .icon");
    const $navbar = $(".navbar");
    const $burger = $(".navbar-burger");
    const $menu = $(".navbar-menu");
    const $terminal = $("#terminal");
    const $calendar = $(".calendar");

    AOS.init({
      offset: 200,
      duration: 400,
      easing: "ease-in-sine",
      delay: 150,
    });

    if ($terminal.length) {
      let xterm = new Terminal();
      // xterm.open($terminal.get(0));
      // xterm.write('Testing, testaroo...');
    }
    if ($calendar.length) {
      let calendar = new GitHubCalendar(".calendar", "sbarrack");
    }
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
      enableNav();
    } else {
      $window.on("load", enableNav);
    }

    function enableNav() {
      setTimeout(function() {
        $menu.addClass("enabled");
        $(".buttons").addClass("enabled");
        $burger.on("click", toggleNav);
      }, 1000);
    }

    function toggleNav(e) {
      $navbar.toggleClass("is-active");
      $burger.toggleClass("is-active");
      $menu.toggleClass("is-active");
      $icon.toggleClass("fa-times").toggleClass("fa-bars");
    }
  });
})(jQuery, AOS);
