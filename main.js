$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown()
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp()
    })

    $('form').on('submit', function(e) {
        e.preventDefault()
        const endereçoNovaImagem = $('#endereço-imagem-nova').val()
        const novoItem = $('<li style="display: none"></li>')
        $(`<img src="${endereçoNovaImagem}" />`).appendTo(novoItem)
        $(`
            <div class="overlay-image-link">
                <a href="${endereçoNovaImagem}" title="Ver imagem em tamanho real" target="_blank">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem)
        $(novoItem).appendTo('ul')
        $(novoItem).fadeIn(1000)
        $('#endereço-imagem-nova').val('')
    })
})