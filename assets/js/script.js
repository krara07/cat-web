// MODO CLARO/ESCURO
let ativar_modos = true;

function setCor(){
    if (ativar_modos){
        document.documentElement.style.setProperty('--base-negro', '#ffffff');
        document.documentElement.style.setProperty('--griss90', '#f8f8fa');
        document.documentElement.style.setProperty('--griss80', '#f6f7f8');
        document.documentElement.style.setProperty('--griss10', '#616b77');
        document.documentElement.style.setProperty('--griss5', '#1f2328');
    }
    else{
        document.documentElement.style.setProperty('--base-negro', '#010409');
        document.documentElement.style.setProperty('--griss90', '#212121');
        document.documentElement.style.setProperty('--griss80', '#2f2f2f');
        document.documentElement.style.setProperty('--griss10', '#a0a9b2');
        document.documentElement.style.setProperty('--griss5', '#ececea');
    }
}
function modos() {
    ativar_modos = !ativar_modos;
    setCor();
}

setCor();   