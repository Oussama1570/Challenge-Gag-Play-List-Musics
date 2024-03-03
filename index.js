let currentSong = songs[0];
let index = 0;

let playBtn = document.querySelector("#play");
let previousBtn = document.querySelector("#prev");
let nextBtn = document.querySelector("#next");
let cover = document.querySelector("#cover");

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');


// Progress Bar Event

audio.addEventListener('timeupdate', () => {
  const percent = (audio.currentTime / audio.duration) * 100;
  progress.style.width = percent + '%';
});

progress.addEventListener('click', (e) => {
  const boundingRect = this.getBoundingClientRect();
  const offsetX = e.clientX - boundingRect.left;
  const percentClicked = offsetX / boundingRect.width;
  audio.currentTime = percentClicked * audio.duration;
});


// Play Button Event



function playPause(){


  playBtn.addEventListener("click",()=>{


    if(!document.querySelector(".fa-play").classList.contains("play-pause")){
      audio.play();
      progressBarClick();
      rotateImage();
      document.querySelector(".music-container").classList.add("play");
      document.querySelector(".fa-play").classList.add("play-pause");
      document.querySelector(".fa-pause").classList.remove("play-pause");
  
  
    }
  
    else{
  
      audio.pause();
      stopRotateImage();
      document.querySelector(".music-container").classList.remove("play");
      document.querySelector(".fa-pause").classList.add("play-pause");
      document.querySelector(".fa-play").classList.remove("play-pause");
  
  
    }
    
  
  
  
  });


}





// Render Song function

function renderSong(){

  audio.setAttribute('src',currentSong.songPath);
  document.querySelector("#cover").setAttribute('src',currentSong.songImagePath);
  document.querySelector("#title").innerHTML= currentSong.title;



}


// next function


function nextSong(){


  document.querySelector("#next").addEventListener("click", ()=>{



    index === 3 ? index = 0 : index++;

    currentSong= songs[index];

    renderSong();
    play();
    progressBarClick();


  })


}

function play(){


  if(!document.querySelector(".fa-play").classList.contains("play-pause")){
    audio.play();
    progressBarClick();
    rotateImage();
    document.querySelector(".fa-play").classList.add("play-pause");
    document.querySelector(".fa-pause").classList.remove("play-pause");


  }

  else
  audio.play();
  progressBarClick();
  rotateImage();


}

// rotate image function

function rotateImage() {
  const image = document.getElementById("cover");
  image.style.animation = "rotate 3s linear infinite";
}

function stopRotateImage(){

  const image = document.getElementById("cover");
  image.style.animation = "none";

}

//  previous song

function previousSong(){


  document.querySelector("#prev").addEventListener("click", ()=>{



    index === 0 ? index = 3 : index--;

    currentSong= songs[index];


    renderSong();
    play();
    progressBarClick();

  })


}

// Progress Bar click function


function progressBarClick(){

  progress.addEventListener('click', (e) => {
    const boundingRect = this.getBoundingClientRect();
    const offsetX = e.clientX - boundingRect.left;
    const percentClicked = offsetX / boundingRect.width;
    audio.currentTime = percentClicked * audio.duration;
  });
  

}



// Program



renderSong();
playPause();
nextSong();
previousSong();
stopRotateImage();