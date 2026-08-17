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

const musicas = [
    {
        nome: "Heaven Can Wait",
        cantor: "Michael Jackson",
        audio: "audio/heavenCanWait.mp4",
        capa: "img/heaven-can-await.jpeg",
        cor: "#A1A4A6"
    },

    {
        nome: "Saikai",
        cantor: "Mili",
        audio: "audio/saikai.mp4",
        capa: "img/saikai.jpeg",
        cor: "#BFC7D9"
    },

    {
        nome: "Vou desafiar você",
        cantor: "Mc Sapão",
        audio: "audio/vouDesafiarVc.mp4",
        capa: "img/vou-desafiar-vc.jpeg",
        cor: "#4F328C",
    },

    {
        nome: "Crawling",
        cantor: "Linkin Park",
        audio: "audio/crawling.mp4",
        capa: "img/crawling.jpeg",
        cor: "#731A1A",
    },

    {
        nome: "Anjos",
        cantor: "O Rappa",
        audio: "audio/anjos-dyana.mp4",
        capa: "img/anjos-orappa.jpeg",
        cor: "#31889B",
    },

    {
        nome: "Golden hour",
        cantor: "JVKE",
        audio: "audio/goldenHOur.mp4",
        capa: "img/goldenHOur.jpeg",
        cor: "#BFA730",
    },

    {
        nome: "Filho do dono",
        cantor: "Flávio José",
        audio: "audio/filhoDoDono.mp4",
        capa: "img/filhoDoDono.jpeg",
        cor: "#F27830",
    },

    {
        nome: "Riptide",
        cantor: "Vance Joy",
        audio: "audio/riptide.mp4",
        capa: "img/Riptide.jpeg",
        cor: "#181926",
    },

    {
        nome: "Metamorfose ambulante",
        cantor: "Raul Seixas",
        audio: "audio/metamorfose.mp4",
        capa: "img/metamorfose-ambulante.jpeg",
        cor: "#734838",
    },

    {
        nome: "Planos",
        cantor: "BK",
        audio: "audio/planos.mp4",
        capa: "img/planos.jpeg",
        cor: "#D9A84E",
    },

    {
        nome: "The other woman",
        cantor: "Lana Del Rey",
        audio: "audio/theOtherWoman.mp4",
        capa: "img/theOtherWoman.jpeg",
        cor: "#89888C",
    },

    {
        nome: "Aquarela",
        cantor: "Toquinho",
        audio: "audio/aquarela.mp4",
        capa: "img/aquarela.jpeg",
        cor: "#F2BD1D",
    },

    {
        nome: "R U Mine",
        cantor: "Artics Monkeys",
        audio: "audio/RUMine.mp4",
        capa: "img/rUMine.jpeg",
        cor: "#060C0D",
    },

    {
        nome: "Salmo 126",
        cantor: "Ministério Zoe",
        audio: "audio/salmo126.mp4",
        capa: "img/salmo126.jpeg",
        cor: "#0B5959",
    },

    {
        nome: "Muse",
        cantor: "Sofia Isella",
        audio: "audio/muse.mp4",
        capa: "img/muse.jpeg",
        cor: "#261F18",
    },

    {
        nome: "Oceano",
        cantor: "Djavan",
        audio: "audio/oceano.mp4",
        capa: "img/oceano.jpeg",
        cor: "#586A8C",
    },

    {
        nome: "Anjo Azul",
        cantor: "Jorge Ben Jor",
        audio: "audio/anjo-azul.mp4",
        capa: "img/anjoAzul.jpeg",
        cor: "#D1B36B",
    },

    {
        nome: "Jealousy, Jealousy",
        cantor: "Olivia Rodrigo",
        audio: "audio/Jealosy.mp4",
        capa: "img/jealosy-jealousy.jpeg",
        cor: "#dabdd2",
    },

    {
        nome: "Caminhoneiros",
        cantor: "Roberto Carlos",
        audio: "audio/caminhoneiros.mp4",
        capa: "img/caminhoneiros.jpeg",
        cor: "#53518C",
    },

    {
        nome: "Awake and alive",
        cantor: "Skillet",
        audio: "audio/awakeAndAlive.mp4",
        capa: "img/awakeAndAlive.jpeg",
        cor: "#F2F2F2",
    },

    {
        nome: "Bulletproof Love",
        cantor: "Pierce the Veil",
        audio: "audio/bulletproofLove.mp4",
        capa: "img/bulletproofLove.jpeg",
        cor: "#1C3732",
    },

    {
        nome: "Anjos",
        cantor: "O Rappa",
        audio: "audio/anjos-maria.mp4",
        capa: "img/anjos-orappa.jpeg",
        cor: "#8C241B",
    },

    {
        nome: "Trem bala",
        cantor: "Ana Vilela e Luan Santana",
        audio: "audio/tremBala.mp4",
        capa: "img/tremBala.jpeg",
        cor: "#D9C2BA",
    },

    {
        nome: "Pai eu não confio em mim",
        cantor: "Thalles Roberto",
        audio: "audio/paiEuNConfioEmMIm.mp4",
        capa: "img/paiEuNConfioEmMIm.jpeg",
        cor: "#1239B0",
    },

    {
        nome: "Lisboa",
        cantor: "ANAVITÓRIA",
        audio: "audio/lisboa.mp4",
        capa: "img/lisboa.jpeg",
        cor: "#D99518",
    },

    {
        nome: "Where'd all the time go?",
        cantor: "Dr. Dog",
        audio: "audio/wheredAllTheTImeGo.mp4",
        capa: "img/wheredAllTheTImeGO.jpeg",
        cor: "#2D3359",
    },
];

let musicaAtual = 0;

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

function formatarTempo(tempo) {

    const minutos = Math.floor(tempo / 60);

    const segundos = Math.floor(tempo % 60)
        .toString()
        .padStart(2, "0");

    return `${minutos}:${segundos}`;
}

async function tocarMusica() {

    try {
        await audio.play();
        playBtn.classList.remove("ri-play-circle-fill");
        playBtn.classList.add("ri-pause-circle-fill");

    } catch (erro) {
        console.error("Erro ao reproduzir:", erro);
    }
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

    audio.currentTime =
        porcentagem * audio.duration;

});

async function trocarMusica(index) {

    const elementos = [
        capa,
        musicName,
        musicArtist,
        progressContainer
    ];

    elementos.forEach(elemento => {

        elemento.classList.add("trocando-musica");

    });

    await new Promise(resolve =>
        setTimeout(resolve, 400)
    );

    musicaAtual = index;

    carregarMusica(musicaAtual);

    elementos.forEach(elemento => {

        elemento.classList.remove("trocando-musica");

    });

}

async function proximaMusica() {

    let proxima = musicaAtual + 1;


    if (proxima >= musicas.length) {

        proxima = 0;

    }


    await trocarMusica(proxima);

    tocarMusica();

}

nextBtn.addEventListener("click", proximaMusica);

async function musicaAnterior() {

    let anterior = musicaAtual - 1;


    if (anterior < 0) {

        anterior = musicas.length - 1;

    }


    await trocarMusica(anterior);

    tocarMusica();

}

prevBtn.addEventListener("click", musicaAnterior);

audio.addEventListener("ended", () => {

    playBtn.classList.remove("ri-pause-circle-fill");

    playBtn.classList.add("ri-play-circle-fill");

});

carregarMusica(musicaAtual);