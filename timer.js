var timerId = NaN, count = 611;
function startTimer() {
    timerId = setInterval(tick, 1000);
}
function stopTimer() {
    clearInterval(timerId);
}
function tick() {
    count--;
    var m = Math.floor(count / 60);
    var s = count % 60;
    if (s < 10) {
        s = "0" + String(s);
    } else {
        s = String(s);
    }
    var timestr = String(m) + " : " + s;

    var timerArea = document.getElementById("timer-area");
    timerArea.textContent = timestr;
}

function init() {
    startTimer();
}