let span = document.querySelector('span');
let button = document.querySelector('button');

function switchHex(hex) {
  switch(hex) {
    case 10:hex='A';
    break;
    case 11:hex='B';
    break;
    case 12:hex='C';
    break;
    case 13:hex='D';
    break;
    case 14:hex='E';
    break;
    case 15:hex='F';
    break;
  }
  return hex;
}

button.addEventListener('click',() => {
  let hex1 = Math.floor(Math.random()*15);
  let hex2 = Math.floor(Math.random()*15);
  let hex3 = Math.floor(Math.random()*15);
  let hex4 = Math.floor(Math.random()*15);
  let hex5 = Math.floor(Math.random()*15);
  let hex6 = Math.floor(Math.random()*15);
  hex1 = switchHex(hex1);
  hex2 = switchHex(hex2);
  hex3 = switchHex(hex3);
  hex4 = switchHex(hex4);
  hex5 = switchHex(hex5);
  hex6 = switchHex(hex6);
  document.querySelector('body').style.backgroundColor = '#'+hex1+hex2+hex3+hex4+hex5+hex6;
  span.innerHTML = '#'+hex1+hex2+hex3+hex4+hex5+hex6;
})