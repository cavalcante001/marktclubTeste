let headerHeight = document.querySelector('header').clientHeight;
let menu = document.querySelector('.menu ul');

document.querySelector('.menuMobile').addEventListener('click', menuToggle);
document.querySelector('.menuMobile').addEventListener('touchstart', menuToggle);


function menuToggle(e) { 
    if (e.type === 'touchstart') {
        e.preventDefault();
    }

    const nav = document.querySelector('nav');
    const active = nav.classList.contains('activeMenu');
    nav.classList.toggle('activeMenu');
    e.currentTarget.setAttribute('aria-expanded', active);  
    
    if(active) { 
        e.currentTarget.setAttribute('aria-label', 'Fechar Menu');       
        document.querySelector('.menuMobile .fa-bars').style.display = 'none';
        document.querySelector('.menuMobile .fa-times').style.display = 'block';
    } else {
        e.currentTarget.setAttribute('aria-label', 'Abrir Menu');       
        document.querySelector('.menuMobile .fa-bars').style.display = 'block';
        document.querySelector('.menuMobile .fa-times').style.display = 'none';
    }
}


   
