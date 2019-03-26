let formLogin = document.querySelector('#login');
let btnBusca = document.querySelector('#btnFormBusca');
let btnMenu = document.querySelector('#btnMenuLateral');
let sectionBusca = document.querySelector('#busca');
let menuLateral = document.querySelector('#menuLateral');
let colunaInfoGeral = document.querySelectorAll('.colInfoGeral');

$(sectionBusca).hide();
$(menuLateral).hide();
//$('.botoesCadastro button').hide();

btnBusca.addEventListener('click', ev => {
    $(sectionBusca).toggle();
    $(menuLateral).hide();
});

btnMenu.addEventListener('click', ev => {
    $(sectionBusca).hide();
    $(menuLateral).toggle();
});

if(formLogin)
    formLogin.addEventListener('submit', ev => {
        ev.preventDefault();
        document.location = "admin.html";
    });

// colunaInfoGeral.forEach(col => col.addEventListener('mouseover', ev => {
//     //console.log(ev.fromElement);
//     var divBtn = $('.botoesCadastro button', $(ev.fromElement));
//     $('.botoesCadastro button').hide();
//     divBtn.show();
// }));