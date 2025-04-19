const Buttons = document.getElementsByClassName("Button")
const Sounds = [`chess-chad.mp3`,`the-rook.mp3`,`lichess-beep.mp3`,`I guess we'll never know.mp3`,`maravillosa-jugada-2.mp3`,`La vida es un carrusel.mp3`,`elprimosoundeffectmp3.mp3`,`hog-rider-clash.mp3`,`sac-the-queen.mp3`]
const Images = [`brilliant-move.gif`,`the-rook.png`,`Lichess_Logo.png`,`kanye.png`,`maravillosa-jugada.png`,`carousel.png`,`el-primo.png`,`Hog_Rider.webp`,`Queen.png`,`stop.png`]
for(let i = 0; i < Buttons.length; i++){
    Buttons[i].addEventListener('click', () =>
    {
        if (i == 9)
        {
            pauseAudio()
        }
        else
        {
            PlaySound(Sounds[i])
        }
    })
    console.log(i)
    Buttons[i].style.backgroundImage = `url(${Images[i]})`
    Buttons[i].style.backgroundPosition = `center`
    Buttons[i].style.backgroundSize = `95%`
    Buttons[i].style.backgroundRepeat = `no-repeat`
}
let snd;
let crazymode = false;
function pauseAudio() {
  // If audio is not undefined and if is playing, pause it
  if (snd && !snd.paused) {
    snd.pause();
    snd.currentTime = 0; // Rewind track to beginning (is you need this)
  }
}

function PlaySound(soundPath)
{
    if(!crazymode)
    {
        pauseAudio();
    }
    snd = new Audio(); // buffers automatically when created
    snd.src = soundPath;
    snd.play();
}