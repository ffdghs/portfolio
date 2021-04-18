let plus = document.querySelectorAll('.plus');

for(value of plus) {
  value.addEventListener('click', (e) => {
    let num = e.currentTarget.getAttribute('data-faq');
    document.querySelector('#answer'+num).classList.toggle('display'); 
    if(e.currentTarget.innerHTML == '+') {
      e.currentTarget.innerHTML = '-';
    }
    else {
      e.currentTarget.innerHTML = '+';
    }
  })  
}
