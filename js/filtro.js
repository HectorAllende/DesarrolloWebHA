$(function () {

    // ir a las distintas secciones

    let mision = $('#mision').offset().top,
        habitaciones = $('#habitaciones').offset().top,
        instalaciones = $('#instalaciones').offset().top,
        responsabilidad = $('#responsabilidad').offset().top,
        ubicacion = $('#ubicacion').offset().top;
        contacto = $('#contacto').offset().top;

    window.addEventListener('resize', function(){
        let mision = $('#mision').offset().top,
        habitaciones = $('#habitaciones').offset().top,
        instalaciones = $('#instalaciones').offset().top,
        responsabilidad = $('#responsabilidad').offset().top,
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

    $('#enlace-habitaciones').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: habitaciones -100
        },600);
    });

    $('#enlace-instalaciones').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: instalaciones -100
        },600);
    });
    $('#enlace-responsabilidad').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: responsabilidad -100
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