timerOption = document.getElementsByClassName("timer__option");
valuePomodoro = document.getElementById("timer__value-pomodoro");
valueShortBreak = document.getElementById("timer__value-short-break");
valueLongBreak = document.getElementById("timer__value-long-break");
// Timer Gear
document.querySelector(".timer__gear").addEventListener("click", function(){
    if (document.querySelector(".timer__value").getAttribute("class") == "timer__value"){
        document.querySelector(".timer__value").classList.add("active");
    }
    else{
        document.querySelector(".timer__value").classList.remove("active");
    };
});
// Save
document.querySelector(".timer__value-save").addEventListener("click", function(){
    for (let i=0;i < timerOption.length; i++) {
        timerOption[i].classList.remove("active");
    };
    document.getElementById("countdown").innerHTML = '00:00';
    document.querySelector(".timer__value").classList.remove("active");
});
// Pomodoro
document.querySelector(".pomodoro").addEventListener("click", function(){
    for (let i=0;i < timerOption.length; i++) {
        timerOption[i].classList.remove("active");
    };
    this.classList.add("active");
    startingMinutes = valuePomodoro.value;
    startingTimer();

});
// Short Break
document.querySelector(".short-break").addEventListener("click", function(){
    for (let i=0;i < timerOption.length; i++) {
        timerOption[i].classList.remove("active");
    };
    this.classList.add("active");
    startingMinutes = valueShortBreak.value;
    startingTimer();

});
// Long Break
document.querySelector(".long-break").addEventListener("click", function(){
    for (let i=0;i < timerOption.length; i++) {
        timerOption[i].classList.remove("active");
    };
    this.classList.add("active");
    startingMinutes = valueLongBreak.value;
    startingTimer();

});
// Timer Countdown
function startingTimer(){
    clearInterval(startTimer);
    var startTimer;
    time = startingMinutes*60;
    // First innerHTML
    if (startingMinutes < 10){
    document.getElementById("countdown").innerHTML = '0' + startingMinutes + ':00';
    }else{
    document.getElementById("countdown").innerHTML = startingMinutes + ':00';
    }
    // Start & Pause
    document.querySelector(".timer__start").addEventListener("click", function(){
        this.classList.remove("active");
        document.querySelector(".timer__pause").classList.add("active");
        startTimer = setInterval(timer, 1000);
    });
    document.querySelector(".timer__pause").addEventListener("click", function(){
        this.classList.remove("active");
        document.querySelector(".timer__start").classList.add("active");
        clearInterval(startTimer);
    });
    function timer(){
        minutes = Math.floor(time/60);
        seconds = time%60;
        if (minutes == 0 & seconds == 0){
            clearInterval(startTimer);
        };
        if (minutes < 10){
            minutes = '0' + minutes;
        };
        if (seconds < 10){
            seconds = '0' + seconds;
        };
        document.getElementById("countdown").innerHTML = minutes + ':' + seconds;
        time--;
    };    
};























//  $(function(){
//      if(startingMinutes < 10){
//         startingMinutes = '0' + startingMinutes;
//      }
//     $('#countdown').html(startingMinutes + ':00');
// })

// Timer selection


// https://github.com/masoudtabatabaei/vanilla-js-countdown-timer