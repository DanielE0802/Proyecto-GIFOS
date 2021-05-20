function deleteGif() {
  icon_delete_gif.forEach(Element => Element.addEventListener("click", function (e) {
    deleteGifGeneral(e)
  }))
}

function removeItemFromArr(arr, item) {
  var i = arr.indexOf(item);
  if (i !== -1) {
    arr.splice(i, 1);
  }
}

function deleteGifGeneral(e) {
  let deleteId = (e.path[3].children[0].id)
  e.path[3].remove()
  removeItemFromArr(idFav, deleteId)
  if (idFav.length == 0) {
    var fav_local = localStorage.removeItem('Section_Fav')
    sin_fav.classList.remove('display-none')
  } else {
    var fav_local = localStorage.setItem('Section_Fav', idFav)
  }

}

function maxGifFav() {
  downloadFromGifMax ()
  icon_max_gif_fav.forEach(Element => Element.addEventListener('click', function (e) {
    maxGifFavAndMyGif(e)

  }))
}

function maxGifFavAndMyGif(e) {
  
  info = searchId(e.path[3].childNodes[0].id)
  info.then(Response => {
      gifos_max.classList.remove('display-none')
      img_gifos_max.setAttribute("src", Response.data.images.original.url)
      img_gifos_max.setAttribute("id", Response.data.id)
      gifos_max_user.textContent = Response.data.username
      gifos_max_title.textContent = Response.data.title
    })
    .catch(err => console.error(err))
}

function downloadMyFavGif() {
  download_my_fav_gif.forEach(Element => Element.addEventListener('click', function (e) {
    info = searchId(e.path[3].childNodes[0].id)
    info.then(Response => {
      descargarGif(Response.data.images.original.url)
    })
  }))
}