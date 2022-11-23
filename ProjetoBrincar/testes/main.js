const slider = document.getElementById("slider");
let sliderSection = document.getElementsByClassName("slider_section");
let sliderSectionLast = sliderSection[sliderSection.length - 1];

const btnLeft = document.getElementById("btn_left");
const btnRight = document.getElementById("btn_right");

slider.insertAdjacentElement("afterbegin", sliderSectionLast);

function Next(){
    let sliderSectionFirst = document.getElementsByClassName("slider_section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement("beforeend", sliderSectionFirst);
        slider.style.marginLeft = "-100%"
    }, 500);
}

function Prev(){
    let sliderSection = document.getElementsByClassName("slider_section");
    let sliderSectionLast = sliderSection[sliderSection.length - 1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement("afterbegin", sliderSectionLast);
        slider.style.marginLeft = "-100%"
    }, 500);
}

btnRight.addEventListener("click", () => Next());
btnLeft.addEventListener("click", () => Prev())