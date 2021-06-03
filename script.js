const piano = document.querySelector('.piano');
const pianoКeys = document.querySelectorAll('.piano-key');

/*func playAudio*/
function playAudio(src) {
    const audio = new Audio();
    audio.src = src;
    audio.currentTime = 0;
    audio.play();
  }

piano.addEventListener('click', (event) => {
    if(event.target.classList.contains('piano-key')) {
        const note = event.target.dataset.note;
        const src = `./assets/audio/${note}.mp3`;
        playAudio(src);
    }   
});
 
/*func highlight the active key*/
piano.addEventListener('click', (event) => {
    if(event.target.classList.contains('piano-key')) {
        pianoКeys.forEach((el) => {
        if(el.classList.contains('active')) {
            el.classList.remove('active');
        }
    });
        event.target.classList.add('active');
    }
});

const btnContainer = document.querySelector('.btn-container');
const btn = document.querySelectorAll('.btn');

btnContainer.addEventListener('click', (event) => {
    if(event.target.classList.contains('btn')) {
        btn.forEach((el) => {
            if(el.classList.contains('btn-active')) {
                el.classList.remove('btn-active');
            }
        });
        event.target.classList.add('btn-active');
    }

});


