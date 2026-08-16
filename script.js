const audio = document.getElementById("main-audio");

const playBtn = document.getElementById("play-btn");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");

const currentTime = document.getElementById("current-time");
const duration = document.getElementById("duration");

const musicName = document.getElementById("music-name");
const musicArtist = document.getElementById("music-artist");
const capa = document.getElementById("capa");

const main = document.getElementById("main");


// MÚSICAS

const musicas = [
    {
        nome: "Amor dos Deuses",
        cantor: "Cantor 1",
        audio: "imgs/amor-dos-deuses.mp4",
        capa: "imgs/capa1.jpg",
        cor: "#6b5c6b"
    },

    {
        nome: "Nome da Música 2",
        cantor: "Cantor 2",
        audio: "imgs/musica2.mp3",
        capa: "imgs/capa2.jpg",
        cor: "#263b70"
    },

    {
        nome: "Nome da Música 3",
        cantor: "Cantor 3",
        audio: "imgs/musica3.mp3",
        capa: "imgs/capa3.jpg",
        cor: "#704b32"
    }
];


// MÚSICA ATUAL

let musicaAtual = 0;


// CARREGAR MÚSICA

function carregarMusica(index) {

    const musica = musicas[index];

    musicName.textContent = musica.nome;
    musicArtist.textContent = musica.cantor;

    audio.src = musica.audio;

    capa.style.backgroundImage = `url("${musica.capa}")`;
    capa.style.backgroundSize = "cover";
    capa.style.backgroundPosition = "center";

    main.style.backgroundColor = musica.cor;

    progress.style.width = "0%";

    currentTime.textContent = "0:00";
    duration.textContent = "0:00";

    audio.load();
}


// FORMATAR TEMPO

function formatarTempo(tempo) {

    const minutos = Math.floor(tempo / 60);

    const segundos = Math.floor(tempo % 60)
        .toString()
        .padStart(2, "0");

    return `${minutos}:${segundos}`;
}


// PLAY / PAUSE

function tocarMusica() {

    audio.play();

    playBtn.classList.remove("ri-play-circle-fill");
    playBtn.classList.add("ri-pause-circle-fill");
}


function pausarMusica() {

    audio.pause();

    playBtn.classList.remove("ri-pause-circle-fill");
    playBtn.classList.add("ri-play-circle-fill");
}


playBtn.addEventListener("click", () => {

    if (audio.paused) {
        tocarMusica();
    } else {
        pausarMusica();
    }

});


audio.addEventListener("loadedmetadata", () => {

    duration.textContent = formatarTempo(audio.duration);

});


audio.addEventListener("timeupdate", () => {

    if (!audio.duration) return;

    const porcentagem =
        (audio.currentTime / audio.duration) * 100;

    progress.style.width = `${porcentagem}%`;

    currentTime.textContent =
        formatarTempo(audio.currentTime);

});

progressContainer.addEventListener("click", (event) => {

    const largura = progressContainer.clientWidth;

    const clique = event.offsetX;

    const porcentagem = clique / largura;

    audio.currentTime = porcentagem * audio.duration;

});

function proximaMusica() {

    musicaAtual++;

    if (musicaAtual >= musicas.length) {
        musicaAtual = 0;
    }

    carregarMusica(musicaAtual);

    tocarMusica();
}

nextBtn.addEventListener("click", proximaMusica);

function musicaAnterior() {

    musicaAtual--;

    if (musicaAtual < 0) {
        musicaAtual = musicas.length - 1;
    }

    carregarMusica(musicaAtual);

    tocarMusica();
}

prevBtn.addEventListener("click", musicaAnterior);

audio.addEventListener("ended", () => {

    proximaMusica();

});

carregarMusica(musicaAtual);