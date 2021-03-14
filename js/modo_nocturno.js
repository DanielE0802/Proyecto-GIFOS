function call (id){
    return document.getElementById(id)
}

let modo_nocturno = call("modo_nocturno")
let btn_modo_nocturno = call("btn_modo_nocturno") 





btn_modo_nocturno.addEventListener('click', function(e){
    modo_nocturno.classList.toggle("modo_nocturno");
    btn_crear_gifos.setAttribute('src', 'assets/CTA-crear-gifo-hover-modo-noc.svg');
}, false)