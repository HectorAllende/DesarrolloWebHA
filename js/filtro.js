$(function () {

    // ir a las distintas secciones

    let mision = $('#mision').offset().top,
        nosotros = $('#nosotros').offset().top,
        galeria = $('#galeria').offset().top,
        ubicacion = $('#ubicacion').offset().top;
        contacto = $('#contacto').offset().top;

    window.addEventListener('resize', function(){
        let mision = $('#mision').offset().top,
        nosotros = $('#nosotros').offset().top,
        galeria = $('#galeria').offset().top,
        ubicacion = $('#ubicacion').offset().top;
        contacto = $('#contacto').offset().top;
    });

    $('#enlace-inicio').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0,
            behavior: 'smooth',
        },600);
    });

    $('#enlace-mision').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: mision -100
        },600);
    });

    $('#enlace-nosotros').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: nosotros -100
        },600);
    });

    $('#enlace-galeria').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: galeria -100
        },600);
    });

    $('#enlace-ubicacion').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: ubicacion -100
        },600);
    });
    $('#enlace-contacto').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: contacto -100
        },600);
    });
});