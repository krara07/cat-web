// variáveis
let ativar_modos = true;
let cor_logo = false;
let login_senha = false;

// let login_senha = false;

function login(){
    const login_nome = document.getElementById('login');
    if(login == false){
        login_nome.classList.add('login'); // classe por padrão
    }else{
        login_nome.classList.add('logado'); // ativar a classe após a confirmação de login
    }
}

// Modo claro / escuro - cores
function modos(){
    ativar_modos = !ativar_modos;
    cor_logo = !cor_logo;
    
    if (ativar_modos == false){
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
    }
    else{
        document.documentElement.style.setProperty('--base-negro', '#010409');
        document.documentElement.style.setProperty('--gris100', '#0d0d0d');
        document.documentElement.style.setProperty('--gris90', '#212121');
        document.documentElement.style.setProperty('--gris80', '#242424'); // modo escuro
        document.documentElement.style.setProperty('--gris70', '#2b2b2b');
        document.documentElement.style.setProperty('--gris60', '#383838');
        document.documentElement.style.setProperty('--gris10', '#d4d4d4');
        document.documentElement.style.setProperty('--gris5', '#ececea');
        document.documentElement.style.setProperty('--cores', '#0094ff');
        document.documentElement.style.setProperty('--cores-es', '#005694');
    }
    modos_img();
}

// trocar imagens
function modos_img(){
    const icons = document.querySelectorAll(".icon"); // seleciona todos os documentos com Class=".icon"

    icons.forEach((icon) => { // Transforma cada célula do vetor icons em uma variável icon
        const type = icon.getAttribute("data-type"); // pega o atributo que tem o data-type
        if(ativar_modos === false){
            icon.src = `assets/images/${type}-cl.png`;
        }else{
            icon.src = `assets/images/${type}-es.png`;
        }
    });
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

// checkbox marcado para ver senha
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

// cat-inicio

document.getElementById("tipoCat").addEventListener('change', function(){
    const tipoCat = this.value;

    const inicial = document.querySelectorAll(".inicial-cat");
    const reaber = document.querySelectorAll(".reabertura-cat");
    const obito = document.querySelectorAll(".obito-cat");

    // reinicia deixando tudo visivel quando mudado
    inicial.forEach(function(inicial){
        inicial.style.display = "none";
    });
    reaber.forEach(function(reaber){
        reaber.style.display = "none";
    });
    obito.forEach(function(obito){
        obito.style.display = "none";
    });

    if(tipoCat == "0"){
        alert("Uma opção precisa ser selecionada")
    }else if(tipoCat == "1"){
        inicial.forEach(function(inicial){
            inicial.style.display = "block";
        });
    }else if(tipoCat == "2"){
        reaber.forEach(function(reaber){
            reaber.style.display = "block";
        });
    }else{
        obito.forEach(function(obito){
            obito.style.display = "block";
        });
    }
});

document.getElementById("tipo_empre-cat").addEventListener('change', function(){
    const tipo_empre = this.value;

    const cnpj = document.querySelectorAll(".cnpj-cat");
    const cei = document.querySelectorAll(".cei-cat");
    const cpf = document.querySelectorAll(".cpf-cat");
});
//print da tela do documento
// window.print()