// MODO CLARO/ESCURO
let ativar_modos = true;
let cor_logo = false;

function modos(){
    ativar_modos = !ativar_modos;
    cor_logo = !cor_logo;
    if (!ativar_modos){
        document.documentElement.style.setProperty('--base-negro', '#ffffff');
        document.documentElement.style.setProperty('--gris90', '#f8f8fa');
        document.documentElement.style.setProperty('--gris80', '#f6f7f8'); // modo claro
        document.documentElement.style.setProperty('--gris10', '#616b77');
        document.documentElement.style.setProperty('--gris5', '#1f2328');
        document.documentElement.style.setProperty('--cores', '#ff6b00');
    }
    else{
        document.documentElement.style.setProperty('--base-negro', '#010409');
        document.documentElement.style.setProperty('--gris90', '#212121');
        document.documentElement.style.setProperty('--gris80', '#2f2f2f'); // modo escuro
        document.documentElement.style.setProperty('--gris10', '#a0a9b2');
        document.documentElement.style.setProperty('--gris5', '#ececea');
        document.documentElement.style.setProperty('--cores', '#0094ff')
    }
}


document.addEventListener('DOMContentLoaded', (event) => {
    const imagem = document.getElementById('logo');
    logo.addEventListener('mouseenter', () => {
        if (!cor_logo){
            imagem.src = 'assets/images/logo-cl.png';
        }else{
            imagem.src = 'assets/images/logo-es.png';
        }
    });
    imagem.addEventListener('mouseleave', () =>{
        if (!cor_logo){
            imagem.src = 'assets/images/logo-es.png';
        }else{
            imagem.src = 'assets/images/logo-cl.png';
        }
    });
});


window.addEventListener('scroll', function(){
    var header = document.getElementById('header');
    var div = document.getElementById('div');
    if (window.scrollY > 10){
        header.classList.add('scrolled');
        div.classList.add('add');
    }else{
        header.classList.remove('scrolled');
        div.classList.add('none');
    }
});