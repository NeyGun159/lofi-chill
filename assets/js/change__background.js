$(function(){
    $('.change__background-icon').on('click', function(){
        $('.change__background').toggleClass('active');
    })
})  
$(function(){
    $('.change__background-img').on('click', function(){
        attrSrc = $(this).attr("src")
        $('.lofi__background').removeAttr('src');
        $('.lofi__background').attr('src', attrSrc);
    })
})
