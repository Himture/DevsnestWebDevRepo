
let squares = document.getElementsByClassName('baksa');

Array.prototype.forEach.call(squares, (el)=>{
el.addEventListener('mouseover', (event)=>{
    el.classList.toggle('active');})
});
