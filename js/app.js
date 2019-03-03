$(document).ready(function() {

    document.querySelectorAll('.navbar .nav-link').forEach(enlace => {
        enlace.addEventListener('click', function (e) {
            e.preventDefault();
    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    window.onscroll = function (e) {
        let scroll = window.scrollY;
    
        const headerScroll = document.querySelector('#navegacion-principal');
        if(scroll > 300) {
            headerScroll.classList.add('bg-success');
        } else {
            headerScroll.classList.remove('bg-success');
        }
    };

    $('#fecha').countdown('2019/08/23', function(event) {
        $(this).html(event.strftime('<p><span> %D </span> dias <span> %H </span> horas <span> %M </span> minutos  <span> %S </span> Segundos </p>'));
    });

});