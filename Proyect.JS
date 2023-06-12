let boxWidth = localStorage.getItem('boxWidth') || '200px';
let boxHeight = localStorage.getItem('boxHeight') || '750px';

document.documentElement.style.setProperty('--box-width', boxWidth);
document.documentElement.style.setProperty('--box-height', boxHeight);

function saveBoxDimensions() {
  localStorage.setItem('boxWidth', boxWidth);
  localStorage.setItem('boxHeight', boxHeight);
}

function updateBoxDimensions() {
  const boxes = document.querySelectorAll('.box');
  boxes.forEach((box) => {
    box.style.width = boxWidth;
    box.style.height = boxHeight;
  });
}

window.addEventListener('DOMContentLoaded', updateBoxDimensions);
window.addEventListener('beforeunload', saveBoxDimensions);
