function randomColor() {
    const r=Math.floor(Math.random()*256);
    const g=Math.floor(Math.random()*256);
    const b=Math.floor(Math.random()*256);
    return newColor = `rgb(${r},${g},${b})`;
}
function colorize() {
    this.style.backgroundColor =randomColor();
    this.style.color=randomColor();
}
const btn=document.querySelectorAll('button');
for(let i of  btn)
{
    i.addEventListener('click',colorize)
}


