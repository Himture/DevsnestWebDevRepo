
let squares = document.getElementsByClassName('baksa');

Array.prototype.forEach.call(squares, (el)=>{
el.addEventListener('contextmenu', (event)=>{
    el.classList.toggle('active');})
});
