function changePage(page) {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("page").innerHTML = this.responseText;
        }
    };

    xhttp.open("GET", page, true);
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

    window.onresize = () => {
        sticky = navbar.offsetTop;
    };

    // MOTD
    var motd = new XMLHttpRequest();

    motd.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("motd").innerHTML = this.responseText;
        }
    };

    var today = new Date();
    var motdFile = new File('motd/' + today.toDateString().slice(4).replace(' ', '_') + '.html')
    motd.open("GET", motdFile.exists() ? motdFile.name : 'motd/' + today.getDay() + '.html', true);
    motd.send();

}
