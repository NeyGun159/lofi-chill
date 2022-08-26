document.querySelector(".nav__list-music").addEventListener("click", function(){
    if (document.querySelector(".widget-music").getAttribute("class") == "widget widget-music"){
        document.querySelector(".widget-music").classList.add("active");
        this.classList.add("active");
    }
    else{
        document.querySelector(".widget-music").classList.remove("active");
        this.classList.remove("active");
    };
});
document.querySelector(".nav__list-timer").addEventListener("click", function(){
    if (document.querySelector(".widget-timer").getAttribute("class") == "widget widget-timer"){
        document.querySelector(".widget-timer").classList.add("active");
        this.classList.add("active");
    }
    else{
        document.querySelector(".widget-timer").classList.remove("active");
        this.classList.remove("active");
    };
});
document.querySelector(".nav__list-check").addEventListener("click", function(){
    if (document.querySelector(".widget-check").getAttribute("class") == "widget widget-check"){
        document.querySelector(".widget-check").classList.add("active");
        this.classList.add("active");
    }
    else{
        document.querySelector(".widget-check").classList.remove("active");
        this.classList.remove("active");
    };
});