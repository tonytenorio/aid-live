$(document).ready(function() {

    $('#fecha').countdown('2019/08/23', function(event) {
        $(this).html(event.strftime('<p><span> %D </span> dias <span> %H </span> horas <span> %M </span> minutos  <span> %S </span> Segundos </p>'));
    });

});