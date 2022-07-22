$(function(){
    $('.pomodoro').on('click', function(){
        $('.timer__option').removeClass("active");
        $(this).toggleClass("active");
        startingMinutes = 1;
    })
    $('.short-break').on('click', function(){
        $('.timer__option').removeClass("active");
        $(this).toggleClass("active");
        startingMinutes = 2;
    })
    $('.long-break').on('click', function(){
        $('.timer__option').removeClass("active");
        $(this).toggleClass("active");
        startingMinutes = 3;
    })
})
$(function startingTimer() {
    var startTimer;
    startingMinutes = 1;
    time = startingMinutes*60;
    if (startingMinutes < 10){
        $('#countdown').html('0' +startingMinutes + ':' +  '00');
    }   else{
        $('#countdown').html(startingMinutes + ':' +  '00');
    }
    $('.timer__start').on('click', function(){
        $('.timer__pause').toggleClass('active');
        $('.timer__start').removeClass('active');
        startTimer = setInterval(timer, 1000);
    })
    $('.timer__pause').on('click', function(){
        $('.timer__start').toggleClass('active');
        $('.timer__pause').removeClass("active");
        clearInterval(startTimer);
    })
    function timer(){
        minutes = Math.floor((time-1)/60);
        seconds = (time-1)%60;
        if (minutes < 10){
            minutes = '0' + minutes;
        }
        if (seconds < 10){
            seconds = '0' + seconds;
        }
        $('#countdown, title').html(minutes + ':' +  seconds);
        time--;
    }
}
)























//  $(function(){
//      if(startingMinutes < 10){
//         startingMinutes = '0' + startingMinutes;
//      }
//     $('#countdown').html(startingMinutes + ':00');
// })

// Timer selection


// https://github.com/masoudtabatabaei/vanilla-js-countdown-timer