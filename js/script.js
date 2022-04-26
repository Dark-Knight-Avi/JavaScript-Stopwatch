window.onload = () => {
    var sec = 00;
    var ten = 00;
    var appendTen = document.getElementById('tens');
    var appendSec = document.getElementById('seconds');
    var startbtn = document.getElementById('button-start');
    var stopbtn = document.getElementById('button-stop');
    var resetbtn = document.getElementById('button-reset');
    var interval;
    startbtn.onclick = () => {
        clearInterval(interval);
        interval = setInterval(() => {
            ten++;
            if (ten <= 9) {
                appendTen.innerHTML = "0" + ten;
            }
            if (ten > 9) {
                appendTen.innerHTML = ten;
            }
            if (ten > 99) {
                sec++;
                appendSec.innerHTML = "0" + sec;
                ten = 0;
                appendTen.innerHTML = "0" + 0;
            }
            if (sec > 9) {
                appendSec.innerHTML = sec;
            }
        }, 10);
    }
    stopbtn.onclick = () => {
        clearInterval(interval);
    }
    resetbtn.onclick = () => {
        clearInterval(interval);
        ten = "00";
        sec = "00";
        appendTen.innerHTML = ten;
        appendSec.innerHTML = sec;
    }
}