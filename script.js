const piano = document.querySelector('.piano');
const pianoКeys = document.querySelectorAll('.piano-key');
const keysSharp = document.querySelector('.piano');
const pianoKeysSharp = document.querySelectorAll('.piano-key');

piano.addEventListener('click', (event) => playAudio(event));

window.addEventListener('keydown', (event) => playAudio(event));
window.addEventListener('keydown', (event) => {
    if(event.code === 'Space') {
      playAudio();
    }
});