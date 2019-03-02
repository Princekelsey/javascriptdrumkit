let ranColor, keys

ranColor = document.body;
keys = Array.from(document.querySelectorAll('.key'));


// Setting Background to change between random colors on key press
function ran_Color() {
    // random red value
    let red = Math.floor(Math.random() * 256);
    // random green value
    let green = Math.floor(Math.random() * 256);
    // random blue value
    let blue = Math.floor(Math.random() * 256);
    // Adding them together to create an RGB color
    let rgbColor = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
    ranColor.style.backgroundColor = rgbColor;

};

// Function to play sound on keypress,add transition effect and Change random background colors
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio)
        return;
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
    ran_Color();
}
// Removing Transition effect
function removeTransition(e) {
    if (e.propertyName !== 'transform')
        return;
    e.target.classList.remove('playing');
}


keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
window.addEventListener('load',ran_Color);


// Setting Background to change between random colors
// function randomColor() {
//     let color = '#';
//     const letters = ['45a3e5', 'FF0000', '66bf39',  'ffa602', '#f35', 'eb670f',  'C0C0C0', '#3cc',];
//     color += letters[Math.floor(Math.random() * letters.length)];
//     ranColor.style.backgroundColor = color;
// }