const songList = [
    {
        name: "Play Date (Slowed)",
        artist: "Melanie Martinez",
        src: "assets/1.mp3",
        cover: "assets/1.jpg"
    },
    {
        name: "BEUNATEKK",
        artist: "Ya Boi Ivan",
        src: "assets/2.mp3",
        cover: "assets/2.jpg"
    },
    {
        name: "Around The World",
        artist: "Sabrina Carpenter",
        src: "assets/3.mp3",
        cover: "assets/3.jpg"
    }
];

const atristName = document.querySelector('.artisat-name');
const musicName = document.querySelector('.song-name');
const fillBar = document.querySelector('.fill-bar');
const time = document.querySelector('time');
const cover = document.getElementById('.cover');
const playBtn = document.getElementById('.play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const prog = document.querySelector('.progress-bar');