const menuItems = document.querySelectorAll('.menu a[href^="#"]');
const headerAltura = document.querySelector('header').clientHeight;
const footerLogo = document.querySelector('.footer-logo a');

menuItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnCLick);
})

footerLogo.addEventListener('click', topZero);

function scrollToIdOnCLick(e) { 
    e.preventDefault();   
    const nav = document.querySelector('nav');

    const element = e.target;      

    if(nav.classList.contains('activeMenu')) {        
        nav.classList.remove('activeMenu');
    }

    if(document.querySelector('.active')) {
        document.querySelector('.active').classList.remove('active');
        element.classList.add('active');
    } else {
        element.classList.add('active');
    }
    
    const section = getScrollTopByHref(element);    
    
    scrollToPosition(section - headerAltura);
}

function scrollToPosition(section) {  
    smoothScrollTo(0, section);
}

function getScrollTopByHref(e) {
    const id = e.getAttribute('href');    
    return document.querySelector(id).offsetTop;
}

function topZero(e) {    
    e.preventDefault();
    scrollToPosition(e);
}


/**
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int} endY: destination y coordinate
 * @param {int} duration: animation duration in ms
 */
 function smoothScrollTo(endX, endY, duration) {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();
  
    duration = typeof duration !== 'undefined' ? duration : 400;
  
    // Easing function
    const easeInOutQuart = (time, from, distance, duration) => {
      if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
      return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
    };
  
    const timer = setInterval(() => {
      const time = new Date().getTime() - startTime;
      const newX = easeInOutQuart(time, startX, distanceX, duration);
      const newY = easeInOutQuart(time, startY, distanceY, duration);
      if (time >= duration) {
        clearInterval(timer);
      }
      window.scroll(newX, newY);
    }, 1000 / 60); // 60 fps
  };