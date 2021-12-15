AOS.init();

//Variables

let nav = document.getElementById('nav')
let menu = document.getElementById('enlaces')
let abrir = document.getElementById('open')
let botones = document.querySelector('btn-header')
let logo = document.querySelector('.logos')

let cerrado = true



function menus(){

    let desplazamientoActual = window.pageYOffset

    if(desplazamientoActual<= 300){
        nav.classList.remove('nav2')
        nav.classList.add('nav1')

        nav.style.transition= '1s'
        menu.style.top ='80px'
        abrir.style.color = "#FFF"       
    
    }else{
        nav.classList.remove('nav1')
        nav.classList.add('nav2')
        nav.style.transition= '1s'

        menu.style.top ='100px'
        abrir.style.color = "#000"
    }
}

function apertura(){
    if(cerrado){
        menu.style.width = '40vh'
        cerrado = false
       
    }else{
        menu.style.width = '0%'
        menu.style.overflow = 'hidden'
        cerrado = true      
    }
}

window.addEventListener('load', function(){
    // Para el spinner
    setTimeout(() => {
        $('#onload').fadeOut()
        $('body').removeClass('hidden') 
    }, 900);
   

    menus();

})
window.addEventListener('scroll', function(){
    // console.log(window.pageYOffset)
    menus()
})

// resuelve que el menu vuelva a su origen cuando volvemos a tamaño mas grande
window.addEventListener('resize', function(){
    if(screen.width >= 700){
        cerrado = true
        menu.style.removeProperty('overflow')
        menu.style.removeProperty('width')
    }
})

// Para cerrar el menu al pinchar la pantalla

window.addEventListener('click', function(e){
    // console.log(e.target)

    if(cerrado== false){
        let span = document.querySelector('span')
        if(e.target !== span && e.target !== abrir){
            menu.style.width = '0%'
            menu.style.overflow = 'hidden'
            cerrado = true
        } 
    }
})



abrir.addEventListener('click', function(){
    apertura()
})




// galeria


const imagenes = document.querySelectorAll('.img-galeria')
const imagenesLight = document.querySelector('.agregar-imagen')
const contenedorLight = document.querySelector('.imagen-light')
const hamburger1 = document.querySelector('.hamburger')

imagenes.forEach(imagen=>{
    imagen.addEventListener('click',()=>{
        aparecerImagen(imagen.getAttribute('src')) 
    })
})

contenedorLight.addEventListener('click', (e)=>{
    if(e.target !== imagenesLight){
        contenedorLight.classList.toggle('show')
        imagenesLight.classList.toggle('showImage')
        hamburger1.style.opacity = '1'
    }
})

const aparecerImagen = (imagen)=>{
    imagenesLight.src = imagen
    contenedorLight.classList.toggle('show')
    imagenesLight.classList.toggle('showImage')
    hamburger1.style.opacity = '0'
}









