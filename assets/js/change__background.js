const lofiBackground = document.querySelector(".lofi__background");
const popoverAction = document.querySelector(".popover__action");
document.getElementById('change__background-icon-id').addEventListener("click", function(){
    document.getElementById("change__background-id").classList.add("active");
});
document.getElementById('change__background-close-id').addEventListener("click", function(){
    document.getElementById("change__background-id").classList.remove("active");
});
function animation(){
    document.querySelector(".change__animation").pause();
    document.querySelector(".change__animation-radio").pause();
    document.querySelector(".change__animation").classList.remove("active");
}
for (i=0; i < document.getElementsByClassName("change__background-img").length; i++) {
    document.getElementsByClassName("change__background-img")[i].addEventListener("click", function(){
        attrSrc = this.getAttribute("src");
        lofiBackground.removeAttribute("src");
        lofiBackground.setAttribute("src", attrSrc);
        document.querySelector(".change__animation").classList.add("active");
        document.querySelector(".change__animation").play();
        document.querySelector(".change__animation-radio").play();
        setInterval(animation, 500);
        checkBackground();
    });
};
function dayAction(){
    isDayAction = false;
    document.querySelector(".day__action").addEventListener("click", function(){
        isDayAction = !isDayAction;
        document.querySelector(".day__action").classList.toggle("active", isDayAction);
        if (isDayAction){
            attrSrc = lofiBackground.getAttribute("src");
            lofiBackground.setAttribute("src", attrSrc.replace("Day.mp4", "Night.mp4"));
        }else {
            attrSrc = lofiBackground.getAttribute("src");
            lofiBackground.setAttribute("src", attrSrc.replace("Night.mp4", "Day.mp4"));
        }
    });
};
document.querySelector(".rain-sound").volume = 0.5;
function rainAction(){
    isRainAction = false;
    document.querySelector(".rain-btn").addEventListener("click", function(){
        isRainAction = !isRainAction;
        document.querySelector(".rain__action").classList.toggle("active", isRainAction);
        if (isRainAction){
            attrSrc = lofiBackground.getAttribute("src");
            lofiBackground.setAttribute("src", attrSrc.replace("Sunny", "Rainy"));
            document.querySelector(".rain-sound").play();
        }else {
            attrSrc = lofiBackground.getAttribute("src");
            lofiBackground.setAttribute("src", attrSrc.replace("Rainy", "Sunny"));
            document.querySelector(".rain-sound").pause();
        }
    })
    document.querySelector(".rain-volume").addEventListener("change", function(e){
        seekVolume = e.target.value/100;
        document.querySelector(".rain-sound").volume = seekVolume;
    })
};
document.querySelector(".traffic-sound").volume = 0.5;
function trafficAction(){
    isTrafficAction = false;
    document.querySelector(".traffic-btn").addEventListener("click", function(){
        isTrafficAction = !isTrafficAction;
        document.querySelector(".traffic__action").classList.toggle("active", isTrafficAction);
        if (isTrafficAction){
            attrSrc = lofiBackground.getAttribute("src");
            document.querySelector(".traffic-sound").play();
        }else {
            attrSrc = lofiBackground.getAttribute("src");
            document.querySelector(".traffic-sound").pause();
        }
    });
    document.querySelector(".traffic-volume").addEventListener("change", function(e){
        seekVolume = e.target.value/100;
        document.querySelector(".traffic-sound").volume = seekVolume;
    });
};
document.querySelector(".keyboard-sound").volume = 0.5;
function keyBoardAction(){
    isKeyboardAction = false;
    document.querySelector(".keyboard-btn").addEventListener("click", function(){
        isKeyboardAction = !isKeyboardAction;
        document.querySelector(".keyboard__action").classList.toggle("active", isKeyboardAction);
        if (isKeyboardAction){
            attrSrc = lofiBackground.getAttribute("src");
            document.querySelector(".keyboard-sound").play();
        }else {
            attrSrc = lofiBackground.getAttribute("src");
            document.querySelector(".keyboard-sound").pause();
        }
    });
    document.querySelector(".keyboard-volume").addEventListener("change", function(e){
        seekVolume = e.target.value/100;
        document.querySelector(".keyboard-sound").volume = seekVolume;
    });
};
function enterAction(){
    document.querySelector(".enter-btn").addEventListener("click", function(){
        attrSrc = lofiBackground.getAttribute("src");
        lofiBackground.setAttribute("src", attrSrc.replace("./assets/img/Exterior", "./assets/img/Cafe"));
        checkBackground();
    })
}
function goOutAction(){
    document.querySelector(".out-btn").addEventListener("click", function(){
        attrSrc = lofiBackground.getAttribute("src");
        lofiBackground.setAttribute("src", attrSrc.replace("./assets/img/Cafe", "./assets/img/Exterior"));
        checkBackground();
    })
}
function checkBackground(){
    if (lofiBackground.getAttribute("src").slice(13, 21) == "Exterior"){
        popoverAction.innerHTML = '<div class="day__action"><i class="fa-solid fa-sun-bright"></i><i class="fa-solid fa-moon"></i></div><div class="wrapper__action traffic__action"><div class="btn-action traffic-btn"></div><div><span class="text__action">City Traffic</span><div><input type="range" class="traffic-volume" value="50" step="1" min="0" max="100"></div></div></div><div class="wrapper__action rain__action"><div class="btn-action rain-btn"></div><div><span class="text__action">City Rain</span><div><input type="range" class="rain-volume" value="50" step="1" min="0" max="100"></div></div></div><div class="wrapper__action enter__action"><div class="btn-action enter-btn"></div><span class="text__action">Enter</span></div>'
        popoverAction.querySelector(".rain__action").style.top = "300px";
        popoverAction.querySelector(".rain__action").style.left = "78px";
        popoverAction.querySelector(".traffic__action").style.top = "500px";
        popoverAction.querySelector(".traffic__action").style.left = "480px";
        popoverAction.querySelector(".enter__action").style.top = "555px";
        popoverAction.querySelector(".enter__action").style.right = "580px";
        dayAction();
        rainAction();
        trafficAction();
        enterAction();
    }else if (lofiBackground.getAttribute("src").slice(13, 17) == "Cafe"){
        popoverAction.innerHTML = '<div class="day__action"><i class="fa-solid fa-sun-bright"></i><i class="fa-solid fa-moon"></i></div><div class="wrapper__action keyboard__action"><div class="btn-action keyboard-btn"></div><div><span class="text__action">Keyboard</span><div><input type="range" class="keyboard-volume" value="50" step="1" min="0" max="100"></div></div></div><div class="wrapper__action rain__action"><div class="btn-action rain-btn"></div><div><span class="text__action">City Rain</span><div><input type="range" class="rain-volume" value="50" step="1" min="0" max="100"></div></div></div><div class="wrapper__action out__action"><div class="btn-action out-btn"></div><span class="text__action">Go Out</span></div>';
        popoverAction.querySelector(".rain__action").style.top = "180px";
        popoverAction.querySelector(".rain__action").style.left = "150px";
        popoverAction.querySelector(".out__action").style.bottom = "180px";
        popoverAction.querySelector(".keyboard__action").style.top = "500px";
        popoverAction.querySelector(".keyboard__action").style.right = "70px";
        dayAction();
        rainAction();
        keyBoardAction();
        goOutAction();
    }else if (lofiBackground.getAttribute("src").slice(13, 20) == "Bedroom"){
        popoverAction.innerHTML = '<div class="wrapper__action rain__action"><div class="btn-action rain-btn"></div><div><span class="text__action">City Rain</span><div><input type="range" class="rain-volume" value="50" step="1" min="0" max="100"></div></div></div>';
        popoverAction.querySelector(".rain__action").style.top = "180px";
        popoverAction.querySelector(".rain__action").style.right = "150px";
        rainAction();
    }else{
        popoverAction.innerHTML = "";
    }
}
checkBackground()

