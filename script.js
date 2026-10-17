let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let tentativas = 0;
let partidaTerminada = false;

const campoPalpite = document.getElementById("palpite");
const botaoAdivinhar = document.getElementById("botaoAdivinhar");
const botaoReiniciar = document.getElementById("botaoReiniciar");
const mensagem = document.getElementById("mensagem");
const contador = document.getElementById("contador");
const numero = document.querySelector(".numero");

function verificarPalpite() {
    if (partidaTerminada) {
        mensagem.textContent = "INICIE UMA NOVA PARTIDA!";
        return;
    }

    const palpite = Number(campoPalpite.value);

    if (campoPalpite.value === "" || !Number.isInteger(palpite)
        || palpite < 1 || palpite > 10) {
        mensagem.textContent = "DIGITE UM NÚMERO DE 1 A 10!";
        return;
    }

    tentativas++;
    contador.textContent = tentativas;

    if (palpite === numeroSecreto) {
        mensagem.textContent = "ACERTOU! VOCÊ É LENDÁRIO!";
        numero.textContent = numeroSecreto;
        partidaTerminada = true;
    } else if (palpite < numeroSecreto) {
        mensagem.textContent = "É MAIOR! TENTE DE NOVO!";
    } else {
        mensagem.textContent = "É MENOR! TENTE DE NOVO!";
    }

    campoPalpite.value = "";
    campoPalpite.focus();
}

function reiniciarJogo() {
    numeroSecreto = Math.floor(Math.random() * 10) + 1;
    tentativas = 0;
    partidaTerminada = false;

    contador.textContent = "0";
    numero.textContent = "?";
    mensagem.textContent = "PRONTO PARA JOGAR?";
    campoPalpite.value = "";
    campoPalpite.focus();
}

botaoAdivinhar.addEventListener("click", verificarPalpite);
botaoReiniciar.addEventListener("click", reiniciarJogo);

campoPalpite.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        verificarPalpite();
    }
});