const piano = document.querySelector('.piano');
const pianoКeys = document.querySelectorAll('.piano-key');


//piano.addEventListener('click', (event) => playAudio(event));
function playAudio(src) {
    const audio = new Audio();
    audio.src = src;
    audio.currentTime = 0;
    audio.play();
  }
  
piano.addEventListener('click', (event) => {
    if(event.target.classList.contains('piano-key')) {
        console.log("key");
      const note = event.target.dataset.note;
      console.log("note", note);
      const src = `./assets/audio/${note}.mp3`;
      console.log("src", src);
      console.log("playAudio", playAudio(src));

      playAudio(src);
    }   
  });


