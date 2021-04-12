let openB = document.querySelector('#open');
let closeB = document.querySelector('#close');
let modalBG = document.querySelector('#modal-bg');
let modal = document.querySelector('#modal');

openB.addEventListener('click', () => {
  modal.style.display = "block";
  modalBG.style.display = "block";
})

closeB.addEventListener('click', () => {
  modal.style.display = "none";
  modalBG.style.display = "none";
})

modalBG.addEventListener('click', () => {
  modal.style.display = "none";
  modalBG.style.display = "none";
})

// modal.addEventListener('click', () => {
//   modal.style.display = "block";
// })