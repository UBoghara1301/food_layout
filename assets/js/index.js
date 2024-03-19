function lunch() {
    var a = document.getElementById("lunch");
    var b = document.getElementById("dinner");
    var c = document.getElementById("desserts");
    var d = document.getElementById("drinks");
    document.getElementById("btn1").style.background = "white"
    document.getElementById("btn1").style.color = "black"
    a.style.display = "block";
    if (a.style.display == "block") {
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        document.getElementById("btn2").style.background = "#f3b251"
        document.getElementById("btn2").style.color = "white"
        document.getElementById("btn3").style.background = "#f3b251"
        document.getElementById("btn3").style.color = "white"
        document.getElementById("btn4").style.background = "#f3b251"
        document.getElementById("btn4").style.color = "white"
    }

}
function dinner() {
    var a = document.getElementById("lunch");
    var b = document.getElementById("dinner");
    var c = document.getElementById("desserts");
    var d = document.getElementById("drinks");
    document.getElementById("btn2").style.background = "white"
    document.getElementById("btn2").style.color = "black"
    b.style.display = "block";
    if (b.style.display == "block") {
        a.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        document.getElementById("btn1").style.background = "#f3b251"
        document.getElementById("btn1").style.color = "white"
        document.getElementById("btn3").style.background = "#f3b251"
        document.getElementById("btn3").style.color = "white"
        document.getElementById("btn4").style.background = "#f3b251"
        document.getElementById("btn4").style.color = "white"
    }

}
function desserts() {
    var a = document.getElementById("lunch");
    var b = document.getElementById("dinner");
    var c = document.getElementById("desserts");
    var d = document.getElementById("drinks");
    document.getElementById("btn3").style.background = "white"
    document.getElementById("btn3").style.color = "black"
    c.style.display = "block";
    if (c.style.display == "block") {
        a.style.display = "none";
        b.style.display = "none";
        d.style.display = "none";
        document.getElementById("btn2").style.background = "#f3b251"
        document.getElementById("btn2").style.color = "white"
        document.getElementById("btn1").style.background = "#f3b251"
        document.getElementById("btn1").style.color = "white"
        document.getElementById("btn4").style.background = "#f3b251"
        document.getElementById("btn4").style.color = "white"
    }

}
function drinks() {
    var a = document.getElementById("lunch");
    var b = document.getElementById("dinner");
    var c = document.getElementById("desserts");
    var d = document.getElementById("drinks");
    document.getElementById("btn4").style.background = "white"
    document.getElementById("btn4").style.color = "black"
    d.style.display = "block";
    if (d.style.display == "block") {
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";
        document.getElementById("btn2").style.background = "#f3b251"
        document.getElementById("btn2").style.color = "white"
        document.getElementById("btn3").style.background = "#f3b251"
        document.getElementById("btn3").style.color = "white"
        document.getElementById("btn1").style.background = "#f3b251"
        document.getElementById("btn1").style.color = "white"
    }
}
//---scroll button---//


document.addEventListener("DOMContentLoaded", function () {
    window.onscroll = function () {
        togglePageUpButton();
    };
});

function togglePageUpButton() {
    var button = document.getElementById("pageUpButton");
    var scrollPosition = document.body.scrollTop || document.documentElement.scrollTop;

    if (scrollPosition > 500) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}

function scrollToTop() {
    const duration = 1000; // 5 seconds in milliseconds
    const start = document.documentElement.scrollTop || document.body.scrollTop;
    const startTime = performance.now();

    const scrollStep = (timestamp) => {
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);

        window.scrollTo(0, start * (1 - progress));

        if (elapsed < duration) {
            window.requestAnimationFrame(scrollStep);
        }
    };

    window.requestAnimationFrame(scrollStep);
}





// gallery //

function whole() {
    document.getElementById('all').style.color = "#f4b350";
    document.getElementById('des').style.color = "#999999";
    document.getElementById('lunc').style.color = "#999999";
    document.getElementById('din').style.color = "#999999";

    document.getElementsByClassName('dess').style.display = "block";
    document.getElementsByClassName('lun').style.display = "block";
    document.getElementsByClassName('dinn').style.display = "block";

}
function des() {
    document.getElementById('all').style.color = "#999999";
    document.getElementById('des').style.color = "#f4b350";
    document.getElementById('lunc').style.color = "#999999";
    document.getElementById('din').style.color = "#999999";

    let a = document.getElementsByClassName('dess');
    let b = document.getElementsByClassName('lun');
    let c = document.getElementsByClassName('dinn');

    a.style.display = "block";
    b.style.display = "none";
    c.style.display = "none";
}
function lunchh() {
    document.getElementById('all').style.color = "#999999";
    document.getElementById('des').style.color = "#999999";
    document.getElementById('lunc').style.color = "#f4b350";
    document.getElementById('din').style.color = "#999999";

    document.getElementsByClassName('dess').style.display = "none";
    document.getElementsByClassName('lun').style.display = "block";
    document.getElementsByClassName('dinn').style.display = "none";

}
function din() {
    document.getElementById('all').style.color = "#999999";
    document.getElementById('des').style.color = "#999999";
    document.getElementById('lunc').style.color = "#999999";
    document.getElementById('din').style.color = "#f4b350";

    document.getElementsByClassName('dess').style.display = "none";
    document.getElementsByClassName('lun').style.display = "none";
    document.getElementsByClassName('dinn').style.display = "block";
}

