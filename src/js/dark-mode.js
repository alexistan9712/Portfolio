console.log("dark-mode.js ready ! 👍")
const toggleDarkMode = document.querySelectorAll('.dark-mode-cta');

// Permet de changer l'état du Dark Mode
function toggleClass(i) {
    // Toggle Dark mode class
    toggleDarkMode[i].classList.toggle('enable-dark-mode')

    // Toggle Dark mode icon
    return (toggleDarkMode[i].classList.contains('enable-dark-mode')) ? toggleDarkMode[i].src = 'src/assets/sunny.svg' : toggleDarkMode[i].src = 'src/assets/moon.svg';
}

// Selectionne tous le contenu a modifier
for(let i = 0; i < toggleDarkMode.length; i++) {
    toggleDarkMode[i].addEventListener('click', e => {
        toggleClass(i);

        // Mobile menu
        document.querySelector('.mobile-menu .container').classList.toggle('dark-mode-navigation')
        document.querySelector('.mobile-menu .mobile-navigation').classList.toggle('dark-mode-navigation')

        // Desktop menu
        document.querySelector('.desktop-menu .container').classList.toggle('dark-mode-navigation')
        document.querySelector('.desktop-menu .desktop-navigation').classList.toggle('dark-mode-navigation')

        // Cursor
        document.querySelector('.cursor-container .cursor-dot ').classList.toggle('dark-mode-cursor')
        document.querySelector('.cursor-container .cursor-circle ').classList.toggle('dark-mode-cursor')

        // Sections
        document.querySelector('#hero').classList.toggle('dark-mode-section')
        document.querySelector('#work').classList.toggle('dark-mode-section')
        document.querySelector('#contact').classList.toggle('dark-mode-section')


        document.querySelector('#work .livetest-grid').classList.toggle('dark-mode-section')

    })
}



/*
toggleDarkMode.addEventListener('click', e => {

        

    /* Toggle Dark Mode icon
    if(toggleDarkMode.innerText == '🌑') { 
        toggleDarkMode.innerHTML = '🌕';  
        
        navigation.classList.add('dark-mode')
        document.querySelector('.navbar').classList.add('dark-mode')
    } else { toggleDarkMode.innerHTML = '🌑'; 

        navigation.classList.remove('dark-mode')
        document.querySelector('.navbar').classList.remove('dark-mode')
    }

    //document.querySelector('nav *').
})*/