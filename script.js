async function delay(ms) {
    await new Promise(resolve => {
        setTimeout(() => {
            resolve(2)
        }, ms)
    })
}

window.onload = function() {
    var toggle = true
    var restore = false
    const time = 50

    var menu = document.getElementById("menu")
    var items = Array.from(document.getElementsByClassName("item")).concat(Array.from(document.getElementsByClassName("right")))
    items2 = items.slice().reverse()

    menu.onclick = async function() {
        if (toggle) {
            for (item of items) {
                await delay(time);
                item.style.display = "block"
            }
        } else {
            for (item of items2) {
                await delay(time);
                item.style.display = "none"
            }
            restore = true
        }
        toggle = !toggle
    }

    window.onresize = function() {
        if (restore && window.innerWidth > 640) {
            restore = false
            for (item of items) {
                item.style.display = "block"
            }
        } else if (toggle && window.innerWidth <= 640) {
            for (item of items) {
                item.style.display = "none"
            }
        }
    }
}
