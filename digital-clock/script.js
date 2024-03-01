setInterval(function(){
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    const period = "AM";

    if (hours >= 12) {
        period = "PM";
    } else if (hours > 12) {
        hours = hours - 12;
    } else if (seconds < 10) {
        seconds = "0" + seconds;
    }else if (minutes < 10) {
        minutes = "0" + minutes;
    }
    const clockTime  = hours + ":" + minutes + ":" + seconds + " " + period;

    const clock  = document.getElementById('clock');
    clock.innerText = clockTime;
}, 1000);