const darkModeToggle = document.getElementById('checkbox');
let darkMode = localStorage.getItem('darkMode');

const enableDarkMode = () => {   
    document.body.classList.add('darkmode');    
    localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {  
    document.body.classList.remove('darkmode');   
    localStorage.setItem('darkMode', null);
}

if (darkMode === 'enabled') {
    enableDarkMode();
    darkModeToggle.checked = true;
}

checkbox.addEventListener('change', ()=>{   
    darkMode = localStorage.getItem('darkMode');  

    if (darkMode !== 'enabled') {
        enableDarkMode();

      } else {  
        disableDarkMode(); 
      }
});
