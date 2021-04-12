let profile1 = document.querySelector('#profile-1');
let profile2 = document.querySelector('#profile-2');
let profile3 = document.querySelector('#profile-3');
let profile4 = document.querySelector('#profile-4');
let profile5 = document.querySelector('#profile-5');

let next = document.querySelectorAll('.next');
let previous = document.querySelectorAll('.previous');
let surprise = document.querySelectorAll('button');

for(value of next){
  value.addEventListener('click',(e) => {
    e.preventDefault();
    let profileNum = e.currentTarget.getAttribute('data-profile');
    if(profileNum == 5) {
      profile1.style.display = 'block';
      profile5.style.display = 'none';

    }
    else {
      let profileActual = '#profile-'+profileNum;
      let profileNext = '#profile-'+(parseInt(profileNum)+1);
      let divProfileActual = document.querySelector(profileActual);
      let divProfileNext = document.querySelector(profileNext);
      divProfileNext.style.display = 'block';
      divProfileActual.style.display = 'none';
    }
  })
}

for(value of previous){
  value.addEventListener('click',(e) => {
    e.preventDefault();
    let profileNum = e.currentTarget.getAttribute('data-profile');
    if(profileNum == 1) {
      profile1.style.display = 'none';
      profile5.style.display = 'block';

    }
    else {
      let profileActual = '#profile-'+profileNum;
      let profileNext = '#profile-'+(parseInt(profileNum)-1);
      let divProfileActual = document.querySelector(profileActual);
      let divProfileNext = document.querySelector(profileNext);
      divProfileNext.style.display = 'block';
      divProfileActual.style.display = 'none';
    }
  })
}

for(value of surprise) {
  value.addEventListener('click',(e) => {
    let profileNum = e.currentTarget.getAttribute('data-profile');
    let profileActual = '#profile-'+profileNum;
    let divProfileActual = document.querySelector(profileActual);
    let profileNext = '';
    do {
      profileNext = '#profile-'+(parseInt(Math.floor(Math.random()*4))+1);
    }
    while(profileActual == profileNext);
    console.log(profileNext);
    let divProfileNext = document.querySelector(profileNext);
    divProfileNext.style.display = 'block';
    divProfileActual.style.display = 'none';
  })
}