let btnBusca = document.querySelector('#btnFormBusca');
let btnMenu = document.querySelector('#btnMenuLateral');
let sectionBusca = document.querySelector('#busca');
let menuLateral = document.querySelector('#menuLateral')

$(sectionBusca).hide();
$(menuLateral).hide();

btnBusca.addEventListener('click', ev => {
    $(sectionBusca).toggle();
    $(menuLateral).hide();
});

btnMenu.addEventListener('click', ev => {
    $(sectionBusca).hide();
    $(menuLateral).toggle();
});

