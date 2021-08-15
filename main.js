let menu = document.querySelector('.menu')
let bar = document.querySelector('.bar')
let img = document.querySelector('.img-bb')
bar.onclick = () => {
    menu.classList.toggle('active')
}
window.onscroll = () => {
    menu.classList.remove('active')
}
window.onscroll = function () {
   
    if (this.scrollY = 3000) {
        img.classList.toggle('show')
    }
    else {
         img.classList.toggle('show')
    }
}