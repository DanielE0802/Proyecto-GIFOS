let bt_fav = document.getElementById("btn_fav")
let fav= document.getElementById("favoritos")
let section_fav_btn = document.getElementById("section_fav_btn")
let bt_mis_gifos = document.getElementById("btn_mis_gifos")
let mis_gif= document.getElementById("mis-gifos")
let section_mis_gifos_btn = document.getElementById("section_mis_gifos_btn")



bt_fav.addEventListener('click', function(e){
    fav.classList.toggle('display-none');
    section_fav_btn.classList.toggle('display-none');

    
    mis_gif.classList.add("display-none")
    section_mis_gifos_btn.classList.add('display-none');

},false)




bt_mis_gifos.addEventListener('click', function(i){
    mis_gif.classList.toggle('display-none');
    section_mis_gifos_btn.classList.toggle('display-none');

    fav.classList.add("display-none")
    section_fav_btn.classList.add('display-none');
},false)



