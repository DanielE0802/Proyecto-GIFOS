let icon_delte_my_gif = document.querySelectorAll("#mis-gifos > div > div > div > div.iconos_layout > img:nth-child(1)")

function deleteMyGif() {
  icon_delte_my_gif.forEach(Element => Element.addEventListener("click", function (e) {
    deleteMyGIf(e)
  }))
}

const deleteMyGIf = (e) => {
  let deleteId = (e.path[3].children[0].id)
  e.path[3].remove()
  removeItemFromArr(idMyGifos, deleteId)
  if (idMyGifos.length == 0) {
    let miGif_local = localStorage.removeItem('My_gifos')
  } else {
    let miGif_local = localStorage.setItem('My_gifos', idMyGifos)
  }
}


function maxGifMyGif (){
  icon_max_gif_my_gif.forEach(Element => Element.addEventListener('click', function(e){
    maxGifFavAndMyGif(e)
  }))
}

function downloadMyGifSection (){
  download_my_gif_section.forEach(Element => Element.addEventListener('click', function(e){
    info = searchId(e.path[3].childNodes[0].id)
    info.then(Response => {
      descargarGif(Response.data.images.original.url)
    })
  }))
}