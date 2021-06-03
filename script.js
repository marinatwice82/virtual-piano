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

//const dataLetter = pianoКeys[0].getAttribute('data-letter');
//console.log(dataLetter);
//const dataNote = pianoКeys[0].getAttribute('data-note');
//console.log(dataNote);
const btnLetters = document.querySelector('.btn-letters');
const btnNotes = document.querySelector('.btn-notes');

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

/*func letters*/
btnLetters.addEventListener('click', (event) => {
    pianoКeys.forEach(key => {
        key.classList.add('letter');
    });
    btnNotes.classList.remove('btn-active')
    btnLetters.classList.add('btn-active')
});

/*func notes*/
btnNotes.addEventListener('click', (event) => {
    pianoКeys.forEach(key => {
        key.classList.remove('letter');
    });
    btnLetters.classList.remove('btn-active')
    btnNotes.classList.add('btn-active')
});

/*func keydown*/
window.addEventListener('keydown', (event) => {
    pianoКeys.forEach(elem => {
        if (`Key${elem.dataset.letter}` === event.code) {
            console.log(elem.dataset.note)
            elem.classList.add('piano-key-active');
            elem.classList.remove('piano-key-active');
            const note = elem.dataset.note;
            const src = `assets/audio/${note}.mp3`;
            playAudio(src);
        };
        elem.addEventListener('keyup', event => {
            elem.classList.remove('piano-key-active');
        });
    });
});

