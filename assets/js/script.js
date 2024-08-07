// variáveis
let ativar_modos = JSON.parse(localStorage.getItem("ativar_modos")) || false;
let cor_logo = JSON.parse(localStorage.getItem("cor_logo")) || false;

function login(){
    
}

// Modo claro / escuro - cores
function modos(){
    // Alterna o estado das variáveis
    ativar_modos = !ativar_modos;
    cor_logo = !cor_logo;

    // Salva os novos valores no localStorage
    localStorage.setItem("ativar_modos", JSON.stringify(ativar_modos));
    localStorage.setItem("cor_logo", JSON.stringify(cor_logo));

    // Aplica o estilo com base no modo
    if(!ativar_modos){
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
    }else{
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

    // Função para atualizar a imagem do modo
    modos_img();
}

document.addEventListener("DOMContentLoaded",() => {
    if(ativar_modos){
        document.documentElement.style.setProperty('--base-negro', '#010409');
        document.documentElement.style.setProperty('--gris100', '#0d0d0d');
        document.documentElement.style.setProperty('--gris90', '#212121');
        document.documentElement.style.setProperty('--gris80', '#242424');
        document.documentElement.style.setProperty('--gris70', '#2b2b2b');
        document.documentElement.style.setProperty('--gris60', '#383838');
        document.documentElement.style.setProperty('--gris10', '#d4d4d4');
        document.documentElement.style.setProperty('--gris5', '#ececea');
        document.documentElement.style.setProperty('--cores', '#0094ff');
        document.documentElement.style.setProperty('--cores-es', '#005694');
    }else{
        document.documentElement.style.setProperty('--base-negro', '#ffffff');
        document.documentElement.style.setProperty('--gris100', '#f2f2f2');
        document.documentElement.style.setProperty('--gris90', '#f8f8fa');
        document.documentElement.style.setProperty('--gris80', '#f6f7f8');
        document.documentElement.style.setProperty('--gris70', '#f1f3f1');
        document.documentElement.style.setProperty('--gris60', '#eae7ea');
        document.documentElement.style.setProperty('--gris10', '#616b77');
        document.documentElement.style.setProperty('--gris5', '#1f2328');
        document.documentElement.style.setProperty('--cores', '#ff6b00');
        document.documentElement.style.setProperty('--cores-es', '#ffa05c');
    }
});


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

// mascaras
document.addEventListener('DOMContentLoaded', (event) => {
    $(document).ready(function(){
        $(".cpf-mask").inputmask("999.999.999-99");
        $(".nit-mask").inputmask("999.99999.99-9");
        $(".ctps-mask").inputmask("9999999/9999");
        $(".cbo-mask").inputmask("9999-99");
        $(".cep-mask").inputmask("99999-999");
        $(".cnpj-mask").inputmask("99.999.999/9999-99");
        $(".cei-mask").inputmask("99.999.99999/99");
        $(".caepf-mask").inputmask("999.999.999/999-99");
        $(".cno-mask").inputmask("99.999.999999/99");
        $(".cnae-mask").inputmask("9999-9/99");
        $(".rg-mask").inputmask("99.999.999-9");
        $(".tell-mask").inputmask("(99) 9 9999-9999");
        $(".regpoli-mask").inputmask("99999");
        $(".crm-mask").inputmask("999999-9")
        $(".num-mask").inputmask({
            alias: "currency",
            prefix: "R$ ",
            groupSeparator: ".",
            radixPoint: ",",
            digits: 2,
            autoGroup: true,
            rightAlign: false   
        });
    });
});

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
    $(document).ready(function(){
        $(".tell-mask").inputmask("(99) 9 9999-9999");
        $(".num-mask").inputmask({
            alias: "currency",
            prefix: "R$ ",
            groupSeparator: ".",
            radixPoint: ",",
            digits: 2,
            autoGroup: true,
            rightAlign: false
        });
    });
});

// cat-inicio
document.getElementById("tipoCat").addEventListener('change', function(){
    const tipoCat = this.value;

    const inicial = document.querySelectorAll(".inicial-cat");
    const reaber = document.querySelectorAll(".reabertura-cat");
    const obito = document.querySelectorAll(".obito-cat");
    const cat_part2 = document.getElementById("cat-part2");

    // reinicia deixando tudo invisivel quando mudado
    inicial.forEach(function(inicial){inicial.style.display = "none";});

    reaber.forEach(function(reaber){reaber.style.display = "none";});

    obito.forEach(function(obito){obito.style.display = "none";});

    cat_part2.style.visibility = "visible";
    
    if(tipoCat == 1){
        inicial.forEach(function(inicial){
            inicial.style.display = "block";
        });
    }else if(tipoCat == 2){
        reaber.forEach(function(reaber){
            reaber.style.display = "block";
        });
    }else if(tipoCat == 3){
        obito.forEach(function(obito){
            obito.style.display = "block";
        });
    }else{
        cat_part2.style.visibility = "hidden";
        alert("Uma opção precisa ser selecionada");
    }
});

//cat inicio
document.getElementById("tipo_empre-cat").addEventListener('change', function(){
    const tipo_empre = this.value;

    const cnpj = document.querySelectorAll(".cnpj-cat"); // campos que mudam
    const cei = document.querySelectorAll(".cei-cat");
    const cpf = document.querySelectorAll(".cpf-cat");
    const nit = document.querySelectorAll(".nit-cat");
    const caepf = document.querySelectorAll(".caepf-cat");
    const cno = document.querySelectorAll(".cno-cat");

    //reinicia deixado tudo invisível quando mudado
    cnpj.forEach(function(cnpj){cnpj.style.display = "none";});

    cei.forEach(function(cei){cei.style.display = "none";});

    cpf.forEach(function(cpf){cpf.style.display = "none";});

    caepf.forEach(function(caepf){caepf.style.display = "none";});

    cno.forEach(function(cno){cno.style.display = "none";});

    if(tipo_empre == 1){
        cnpj.forEach(function(cnpj){
            cnpj.style.display = "block";
        });
    }else if(tipo_empre == 2){
        cei.forEach(function(cei){
            cei.style.display = "block";
        });
    }else if(tipo_empre == 3){
        cpf.forEach(function(cpf){
            cpf.style.display = "block";
        });
    }else if(tipo_empre == 4){
        nit.forEach(function(nit){
            nit.style.display = "block";
        });
    }else if(tipo_empre == 5){
        caepf.forEach(function(caepf){
            caepf.style.display = "block";
        });
    }else if(tipo_empre == 6){
        cno.forEach(function(cno){
            cno.style.display = "block";
        });
    }else{
        alert("Uma opção precisa ser selecionada")
    }
});

document.getElementById("cep-pesquisa").addEventListener('change'), function(){
    var cep = document.getElementById('cep-pesquisa').value.replace(/\D/g, '');
}

function cat_proximo1(){
    const campo3 = document.getElementById("campo3"); // Elemento que será exibido ou oculto
    
    const campos = document.querySelectorAll('#cnpj-mask, #cei-mask, #cpf-mask, #nit-mask, #caepf-mask, #cno-mask');
    let preenchidos = false;

    campos.forEach((campo) => {
        // Exclui caracteres não numéricos e verifica se há pelo menos 11 caracteres numéricos visíveis
        if(campo.value.replace(/[^0-9]/g, '').length >= 11){
            preenchidos = true;
        }
    });
    if(preenchidos){
        campo3.style.display = "flex";
    }
}

//print da tela do documento
// window.print()