const html = document.documentElement
const index_page = html.getElementsByClassName("index-page");
const theme = window.localStorage.getItem("theme");
const button_theme = document.getElementById("switch");

if (!(index_page === null) && theme === null) { 
    localStorage.setItem('theme', '');
}

if(!(button_theme === null)){
    button_theme.addEventListener("click", () => {
        html.classList.toggle('light');
    
        if (theme === "light") {
            window.localStorage.setItem("theme", "");
        } else { 
            window.localStorage.setItem("theme", "light");
        }
    });
}

if(theme === "light") {
    html.classList.add("light");
} else { 
    html.classList.remove("light");
}


function makeApresentacao() {
    let about_me = document.getElementById("content-aboutme");
    
    if (!(about_me === null)) {

        let textoApresentacao = "<p>Me chamo Luiz Otávio de Moraes, atualmente tenho " + calcIdade() + " anos de idade e sou natural de Cascavel, PR.</p>"
        document.getElementsByClassName("apresentacao")[0].innerHTML = textoApresentacao;
    
    }
}

function calcIdade() {
    const dataAtual = Date.now();
    const dataNascimento = new Date("1997-11-24");

    let idade = ~~((dataAtual - dataNascimento) / (31557600000));

    return idade;
}

document.onload(makeApresentacao());
