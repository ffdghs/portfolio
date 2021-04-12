let decrease = document.querySelector('#decrease');
let increase = document.querySelector('#increase');
let reset    = document.querySelector('#reset');
let start    = document.querySelector('#start');
let counter  = document.querySelector('p');

decrease.addEventListener('click',() => {
  counter.style.color = "black";
  if(counter.innerHTML > 0) {
    counter.innerHTML -= 1;
    counter.style.animationName = "";
  }
})

increase.addEventListener('click',() => {
  counter.innerHTML = parseInt(counter.innerHTML) + 1;
  counter.style.color = "black";
  counter.style.animationName = "";
})

reset.addEventListener('click',() => {
  counter.innerHTML = 0;
  counter.style.color = "black";
  counter.style.animationName = "";
})

start.addEventListener('click',() => {
  if(counter.innerHTML > 0) {
    counter.style.color = "green";
    let timer = setInterval(()=>{
      counter.innerHTML -= 1;
      console.log(counter.innerHTML);
      if(parseInt(counter.innerHTML) == 0) {
        counter.style.color = "#CF3F2D";
        clearInterval(timer);
        counter.style.animationName = "finish";
      }
      else {
        if(parseInt(counter.innerHTML) % 2 == 0) {
          counter.style.color = "#8E6541";
        }
        
        else {
          counter.style.color = "#416A8E";
        }
      }
    },1000);
  }
  else {
    window.alert('The counter is null');
  }
  
})
