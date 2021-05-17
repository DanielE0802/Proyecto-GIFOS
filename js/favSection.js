
console.log(icon_delete_gif)

function deleteGif(){
    icon_delete_gif.forEach(Element => Element.addEventListener("click", function(e){
        deleteGifGeneral(e)
    }))
}

function removeItemFromArr ( arr, item ) {
    var i = arr.indexOf( item );
    if ( i !== -1 ) {
        arr.splice( i, 1 );
    }
}

function deleteGifGeneral(e){
    let deleteId = (e.path[3].children[0].id)
    console.log(e)
    e.path[3].remove()
    removeItemFromArr(idFav, deleteId)
    if(idFav.length == 0){
        var fav_local = localStorage.removeItem('Section_Fav')
        sin_fav.classList.remove('display-none')
    }
    else{
        var fav_local = localStorage.setItem('Section_Fav', idFav)
    }
    
}