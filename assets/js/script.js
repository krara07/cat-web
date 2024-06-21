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
    // const senha = document.getElementById('senha');
    if (!ativar_modos){
        document.documentElement.style.setProperty('--base-negro', '#ffffff');
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
        document.documentElement.style.setProperty('--img-eye', 'url(../images/eye-laranja.png)');
    }
    else{
        document.documentElement.style.setProperty('--base-negro', '#010409');
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
        document.documentElement.style.setProperty('--img-eye', "url('../images/eye-azul.png')");
    }
}

// trocar imagens
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


// header fixa, transparente
window.addEventListener('scroll', function(){
    var header = document.getElementById('header');
    var div = document.getElementById('div');
    if (window.scrollY > 15){
        header.classList.add('scrolled');
        div.classList.remove('none');
        div.classList.add('add');
    } else {
        header.classList.remove('scrolled');
        div.classList.remove('add');
        div.classList.add('none');
    }
});


// password -> text - Não funciona
function ver_senha(){
    var senha1 = document.getElementById("pass");
    var senha2 = document.getElementById("pass2");
    if (senha1.type === "password") {
        senha1.type = "text";
        senha2.type = "text";
    } else {
        senha1.type = "password";
        senha2.type = "password";
    }
}

// atualizar imagem de perfil => login.html
function upload_img(){
    var fileInput = document.getElementById('imageUpload');
    var previewImg = document.getElementById('previewImg');
    
    if (fileInput.files && fileInput.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function(e) {
            var imageUrl = e.target.result;
            previewImg.src = imageUrl;
            localStorage.setItem('uploadedImage', imageUrl);
        }
        
        reader.readAsDataURL(fileInput.files[0]);
    }
}

document.addEventListener('DOMContentLoaded', function(){
    var previewImg = document.getElementById('previewImg');
    var storedImage = localStorage.getItem('uploadedImage');

    if (storedImage) {
        previewImg.src = storedImage;
    }
});

function novo_user(){
    var nome = document.getElementById("nome"); //input
    var erro_nome = document.getElementById("erro_nome"); //span

    var cod = document.getElementById("cod"); //input
    var erro_cod = document.getElementById("erro_cod"); //span

    var email = document.getElementById("email"); //input
    var erro_email = document.getElementById("erro_email"); //span

    var pass = document.getElementById("pass"); //input
    var erro_pass = document.getElementById("erro_pass"); //span

    var pass2 = document.getElementById("pass2"); //input
    var erro_pass2 = document.getElementById("erro_pass2"); //span

    if(!nome.value){
        erro_nome.textContent = "*";
        erro_nome.style.display = "inline";
    }
    
    if(!cod.value){
        erro_cod.textContent = "*";
        erro_cod.style.display = "inline";
    }
    
    if(!pass.value || !pass2.value){
        erro_pass.textContent = "*";
        erro_pass.style.display = "inline";
        erro_pass2.textContent = "*";
        erro_pass2.style.display = "inline";
    }

    if(!email.value){
        erro_email.textContent = "*";
        erro_email.style.display = "inline";
    }
}

function user_apro(){
    var cod = document.getElementById("cod"); //input
    var erro_cod = document.getElementById("erro_cod"); //span

    var pass = document.getElementById("pass"); //input
    var erro_pass = document.getElementById("erro_pass"); //span

    if(!cod.value){
        erro_cod.textContent = "*";
        erro_cod.style.display = "inline";
    }

    if(!pass.value){
        erro_pass.textContent = "*";
        erro_pass.style.display = "inline";
    }
}



