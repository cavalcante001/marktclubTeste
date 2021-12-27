let totalSlides = document.querySelectorAll('.slider--item').length;
let currentSlide = 0;
let timer = setInterval(goNext, 4000);

document.querySelector('.slider--controls').style.height = 
    `${document.querySelector('.slider').clientHeight}px`;

    document.querySelector('.slider--controls').style.width = 
    `${document.querySelector('.slider').clientWidth}px`;

    let itemWidth = document.querySelector('.slider').clientWidth;
    
    document.querySelector('.slider--width').style.width = `
    calc(${itemWidth}px * ${totalSlides})`;

    let controlLeft = (document.querySelectorAll('.slider--control')[0]);
    let controlRight = (document.querySelectorAll('.slider--control')[1]);

    controlLeft.addEventListener('click',  resetTimer);
    controlRight.addEventListener('click', resetTimer);

function goPrev(){
    currentSlide--;
    if(currentSlide < 0)
    {
        currentSlide = totalSlides -1;
    }
    updateMargin();
}
function goNext(){   
   currentSlide++;
   if(currentSlide > (totalSlides-1 )) {
       currentSlide = 0;
   }  
   updateMargin();
}

function updateMargin() {
    let newMargin = (currentSlide * itemWidth);       
    document.querySelector('.slider--width').style.marginLeft = `-${newMargin}px`;
}

function resetTimer() {
    clearInterval(timer);
    goNext();
    timer = setInterval(goNext, 4000);
}

