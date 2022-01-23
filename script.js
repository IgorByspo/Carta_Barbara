let audio = document.getElementById("audio");

btnPlay = document.getElementById("play");

btnPause = document.getElementById("pause");

function play(){
    audio.play();
    btnPlay.style.display = "none";
    btnPause.style.display = "inline-block";
}

function pause(){
    audio.pause();
    btnPause.style.display = "none";
    btnPlay.style.display = "inline-block";
}

function stop(){
    audio.pause();
    audio.currentTime = 0;
    btnPause.style.display = "none";
    btnPlay.style.display = "inline-block";
}

