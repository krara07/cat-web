// MODO CLARO/ESCURO
let ativar_modos = true;
let cor_logo = false;

login = false;

function login(){
    var login_nome = document.getElementById('login');
    if(login == false){
        login_nome.classList.add('login'); // classe por padrão
    }else{
        login_nome.classList.add('logado'); // ativar a classe após a confirmação de login
    }
}

function modos(){
    ativar_modos = !ativar_modos;
    cor_logo = !cor_logo;
    const login = document.getElementById('login');
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

function upload_img() {
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

document.addEventListener('DOMContentLoaded', function() {
    var previewImg = document.getElementById('previewImg');
    var storedImage = localStorage.getItem('uploadedImage');

    if (storedImage) {
        previewImg.src = storedImage;
    }
});



// código de usuário

const generateCode = length => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    return Array.from({ length }, () => characters.charAt(Math.floor(Math.random() * characters.length))).join('');
};

function gerar_cod(){ // Função para gerar o código
    const randomCode = generateCode(10);
}


// let assunto = 'teste assunto';
// let destinatario = 'brendaevil55@gmail.com';
// let corpo = 'teste corpo do email';
// let mensagem = 'Mensagem do email, teste';

// enviar email
// function enviarEmail(destinatario, assunto, corpo){
//     Email.send({
//         Host: "smtp.gmail.com",
//         Username: "beatrizADJofc@gmail.com",
//         Password: "997557087",
//         To: destinatario,
//         From: "beatrizADJofc@gmail.com",
//         Subject: assunto,
//         Body: corpo,
//     }).then(function (mensagem) {
//         alert("E-mail enviado com sucesso!");
//     });
// }

function enviarEmail(destinatario, assunto, corpo) {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "brendaevil55@gmail.com",
        Password: "249D792C1803119F75E2B93C7BD26D823A0C",
        To: destinatario,
        From: "brendaevil55@gmail.com",
        Subject: assunto,
        Body: corpo,
    }).then(function (mensagem) {
        alert("E-mail enviado com sucesso!");
    });
}