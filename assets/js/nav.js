$(function(){
    $('.nav__list-music').on('click', function(){
        $('.widget-music, .nav__list-music').toggleClass('active')
        
    })
    $('.nav__list-timer').on('click', function(){
        $('.widget-timer, .nav__list-timer').toggleClass('active')
        
    })
    $('.nav__list-check').on('click', function(){
        $('.widget-check, .nav__list-check').toggleClass('active')
        
    })
})