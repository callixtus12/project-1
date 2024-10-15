AOS.init();

const menu = document.querySelector(".ri-menu-line")
const close = document.querySelector(".ri-close-line")
const nav = document.querySelector("nav ul")

menu.addEventListener('click', ()=>{
    nav.style.top = '30%'
    menu.style.display = 'none'
    close.style.display = 'block'
})

close.addEventListener('click', ()=>{
    nav.style.top = '-30%'
    menu.style.display = 'block'
    close.style.display = 'none'
})