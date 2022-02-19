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



//cambio d ecolor del nav al scrolear
 window.addEventListener('scroll', function()  {
    let $sheader = document.getElementById('header')
    if (window.scrollY > 20){
        $sheader.style.setProperty( 'background', '#eb4d4b')
    }else{
    $sheader.style.setProperty( 'background', '#333')
    }
    })
