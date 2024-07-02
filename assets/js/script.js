// variáveis
let ativar_modos = true;
let cor_logo = false;
let login_senha = false;

// let login_senha = false;

function login(){
    var login_nome = document.getElementById('login');
    if(login == false){
        login_nome.classList.add('login'); // classe por padrão
    }else{
        login_nome.classList.add('logado'); // ativar a classe após a confirmação de login
    }
}

// Modo claro/ escuro
function modos(){
    ativar_modos = !ativar_modos;
    cor_logo = !cor_logo;
    const login = document.getElementById('login');
    const maleta = document.getElementById('maleta');
    const select = document.getElementsByClassName('id_select'); // Não funciona (ainda)
    const logos = document.getElementById('logo')
    // const senha = document.getElementById('senha');

    if (!ativar_modos){
        document.documentElement.style.setProperty('--base-negro', '#ffffff');
        document.documentElement.style.setProperty('--gris100', '#f2f2f2');
        document.documentElement.style.setProperty('--gris90', '#f8f8fa');
        document.documentElement.style.setProperty('--gris80', '#f6f7f8'); // modo claro
        document.documentElement.style.setProperty('--gris70', '#f1f3f1');
        document.documentElement.style.setProperty('--gris60', '#eae7ea');
        document.documentElement.style.setProperty('--gris10', '#616b77');
        document.documentElement.style.setProperty('--gris5', '#1f2328');
        document.documentElement.style.setProperty('--cores', '#ff6b00');
        document.documentElement.style.setProperty('--cores-es', '#ffa05c');
        login.src = 'assets/images/login-cl.png';
        maleta.src = 'assets/images/maleta-cl.png';
        select.src = 'assets/images/select-cl.png';
        logos.src = 'assets/images/logo-cl.png'; // não funciona (ainda)
        document.documentElement.style.setProperty('--img-eye', 'url(../images/eye-laranja.png)');
    }
    else{
        document.documentElement.style.setProperty('--base-negro', '#010409');
        document.documentElement.style.setProperty('--gris100', '#0d0d0d');
        document.documentElement.style.setProperty('--gris90', '#212121');
        document.documentElement.style.setProperty('--gris80', '#242424'); // modo escuro
        document.documentElement.style.setProperty('--gris70', '#2b2b2b');
        document.documentElement.style.setProperty('--gris60', '#383838');
        document.documentElement.style.setProperty('--gris10', '#a0a9b2');
        document.documentElement.style.setProperty('--gris5', '#ececea');
        document.documentElement.style.setProperty('--cores', '#0094ff');
        document.documentElement.style.setProperty('--cores-es', '#005694');
        login.src = 'assets/images/login-es.png';
        maleta.src = 'assets/images/maleta-es.png';
        select.src = 'assets/images/select-es.png';
        logos.src = 'assets/images/logo-es.png';
        document.documentElement.style.setProperty('--img-eye', "url('../images/eye-azul.png')");
    }
}

// trocar imagens
document.addEventListener('DOMContentLoaded', (event) => {
    const imagens = document.querySelectorAll('.img-logo'); // Seleciona todos os elementos com a classe 'img-logo'
    
    imagens.forEach(imagem => {
        imagem.addEventListener('mouseenter', () => {
            if (!cor_logo){
                imagem.src = 'assets/images/logo-cl.png';
            } else {
                imagem.src = 'assets/images/logo-es.png';
            }
        });

        imagem.addEventListener('mouseleave', () => {
            if (!cor_logo){
                imagem.src = 'assets/images/logo-es.png';
            } else {
                imagem.src = 'assets/images/logo-cl.png';
            }
        });
    });
});

// header fixa, transparente
window.addEventListener('scroll', function(){
    var header = document.getElementById('header');
    var div = document.getElementById('div');
    if (window.scrollY > 15){
        header.classList.add('scrolled');
        div.classList.remove('none');
        div.classList.add('add');
    }else{
        header.classList.remove('scrolled');
        div.classList.remove('add');
        div.classList.add('none');
    }
});

//checkbox marcado para ver senha
document.addEventListener('DOMContentLoaded', (event) => {
    const check = document.getElementById('ver_senha');
    const senha = document.getElementById('password');

    check.addEventListener('change', () => {
        if(check.checked){
            // checkbox marcado
            senha.type = 'text';
        }else{
            // checkbox não marcado
            senha.type = 'password';
        }
    });
});


//print da tela do documento
// window.print()