$(document).ready(function(){
    $('header button').click(function(){$('form').slideDown();
})
    $('#btn_cancelar').click(function(){$('form').slideUp();
});
    $('form').on('submit', function(e){
        e.preventDefault();
        const new_image = $('#newImage_url').val();
        //console.log(new_image);
        /*Colocamos style inline para hacer el efecto de fade in, 
        por lo que de entrada no aparecerá la imagen, pero si la recibe el html
       después con .fadeIn() hacemos la aparición (5000 milisegundos).*/
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${new_image}"/>`).appendTo(novoItem);
        $(`
        <div class="overlay_image">
        <a href="${new_image}" target="_blank" title="Ver imagem em tamanho real">
        Ver imagem em tamanho real
        </a>
        </div>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1500);
        $('#newImage_url').val('')
    });
})