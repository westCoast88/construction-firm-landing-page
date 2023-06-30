window.addEventListener('DOMContentLoaded', function() {
  let burger = document.querySelector('#burger')
  let buttonClose = document.querySelector('#buttonClose')
  let menuHide = document.querySelector('#menu-hide')
  
  let searchForm = document.querySelector('#searchForm')
  let closeForm = document.querySelector('#closeForm')
  let openForm = document.querySelector('#openForm')

  burger.addEventListener('click', function () {
    menuHide.classList.toggle('is-active')
  })

  buttonClose.addEventListener('click', function(){
    menuHide.classList.remove('is-active')
  })

  openForm.addEventListener('click', function () {
    searchForm.classList.toggle('is-active')
  })

  closeForm.addEventListener('click', function(){
    searchForm.classList.remove('is-active')
  })
})
