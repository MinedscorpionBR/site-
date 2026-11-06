
const botao = document.getElementById("liberar");
const conteudo = document.getElementById("conteudo");
const musica = document.getElementById("musica");
const gay = document.getElementById("gay");

const cores = [
    "#FF0000", // Vermelho
    "#FF8000", // Laranja
    "#FFFF00", // Amarelo
    "#00CC00", // Verde
    "#0080FF", // Azul
    "#0000CC", // Anil
    "#9900FF"  // Violeta
];

let indiceFundo = 0;
let indiceTexto = 3;

botao.addEventListener("click", function() {

    // Revela o conteúdo
    botao.style.display = "none";
    conteudo.hidden = false;

    // Configura a música
    musica.volume = 1.0;
    musica.currentTime = 45;

    musica.play().catch(() => {
        console.log("Não foi possível iniciar a música.");
    });

    // Inicia as mudanças imediatamente
    mudarCores();

    // Continua mudando a cada 2,8 segundos
    setInterval(mudarCores, 2800);

});

function mudarCores() {

    // Muda o fundo
    document.body.style.backgroundColor = cores[indiceFundo];

    // Muda o texto GAY
    gay.style.color = cores[indiceTexto];

    // Avança as duas cores independentemente
    indiceFundo = (indiceFundo + 1) % cores.length;
    indiceTexto = (indiceTexto + 1) % cores.length;

}
