const iconoMenu = document.querySelector('#icono-menu'),
        menu = document.querySelector('#menu');
        // animacion menu
        iconoMenu.addEventListener('click', (e) => {

            menu.classList.toggle('active')
        // icono del menu
        const rutaActual = e.target.getAttribute('src');

        if (rutaActual == 'assets/burger.svg'){
            e.target.setAttribute('src', 'assets/close.svg')
        }else{
            e.target.setAttribute('src', 'assets/burger.svg')
        }
        
        });