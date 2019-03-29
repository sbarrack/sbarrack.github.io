function getFile(page) {
    'use strict';
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            return this.responseText;
        }
    };

    xhttp.open("GET", page);
    xhttp.send();
}

function changePage(page) {
    document.getElementById("page").innerHTML = getFile(page);
}

window.onload = function() {
    'use strict';
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
    var motds = JSON.parse(getFile('motd.json')).motds
    document.getElementById("motd").innerText = motds[Math.floor(Math.random() * motds.length)];

}
