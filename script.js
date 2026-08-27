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

let song = new Audio();
let currentSong = 0;
let playing = false;

document.addEventListener('DOMContentLoaded', () => {
    loadSong(currentSong);
    song.addEventListener('timeupdate', updateProgress);
    song.addEventListener('ended', nextSong);
    prevBtn.addEventListener('click', prevSong);
    nextBtn.addEventListener('click', nextSong);
    playBtn.addEventListener('click', togglePlayPause);
    prog.addEventListener('click', seek); 
});

function loadSong(index){
    const { name, artist, src, cover: thumb} = songList[index];
    atristName.innerText = artist;
    musicName.innerText = name;
    song.src = src;
    cover.style.backgroundImage = `url(${thumb})`;
}

function updateProgress(){
    if(song.duration){
        const pos = (song.currentTime / song.duration) * 100;
        fillBar.style.width = `${pos}%`;

        const duration = formatTime(song.duration);
        const currentTime = formatTime(song.currentTime);
        time.innerTExt = `${currentTime} - ${duration}`;
    }
}

function formatTime(seconds){
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}