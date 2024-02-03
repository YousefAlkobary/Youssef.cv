
let isColored = false;
function toggleColor() {
    const button = document.getElementById('span');

    if (isColored) {
      button.style.color = '#fff'; // Set your initial color
    } else {
      button.style.color = '#76a0e2'; // Set the color when pressed
    }
    isColored = !isColored;
}