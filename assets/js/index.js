let tags = document.querySelectorAll('.tag-link');
let iframe = document.querySelector('iframe');

for(value of tags) {
  value.addEventListener('click', (e) => {
    e.preventDefault();
    let link = e.currentTarget.href;
    iframe.src = link;
    iframe.style.display = "block"
  })
}