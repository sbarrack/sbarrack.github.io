function changePage(page) {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("page").innerHTML = this.responseText;
        } else if (this.readyState != 4 && this.state == 404) {
            motd.open("GET", '404.html');
            motd.send();
        }
    };

    xhttp.open("GET", page);
    xhttp.send();
}

window.onload = function() {
    // sticky navbar
    const navbar = document.getElementById("nav");
    var sticky = navbar.offsetTop;

    changePage('home.html');

    window.onscroll = () => {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    };

    window.onresize = function() {
        sticky = navbar.offsetTop;
    };

    // MOTD
    var today = new Date();
    var motd = new XMLHttpRequest();

    motd.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("motd").innerHTML = this.responseText;
        } else if (this.readyState != 4 && this.status == 404) {
            motd.open("GET", 'motd/' + today.getDay() + '.html');
            motd.send();
        }
    };

    motd.open("GET", 'motd/' + today.toDateString().slice(4).replace(' ', '_') + '.html');
    motd.send();
}
