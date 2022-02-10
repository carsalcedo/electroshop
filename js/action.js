//funcion para search
let search = document.querySelector('#search, .bi-search')

search.addEventListener('mouseenter', e =>{
    document.querySelector('.logo').classList.add('hide')
})
search.addEventListener('mouseleave', e =>{
    document.querySelector('.logo').classList.remove('hide')
})

//funcion para menu izquierdo

let menu = document.querySelector('.bi-list');

 menu.addEventListener('click', () =>{
    document.querySelector('.navbar').classList.toggle('active');
    menu.classList.toggle('bi-x');
 });

 let despace = document.querySelector('.navbar, .navbar a');
 despace.addEventListener('click', () =>{
    document.querySelector('.navbar').classList.remove('active');
    menu.classList.remove('bi-x');
 });
