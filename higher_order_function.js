/* function callTwice(func){
    for(let i=1;i<=10;i++)
    {
        func();
    }
  
    
}
function rollDie(){
    const roll =Math.floor(Math.random()*6)+1;
    console.log(roll);
}
callTwice(rollDie); */
/*if we callTwice(rollDie())
rollDie will be executed
i.e callTwice(6)
and then callTwice will give undefined
 */
const newImage=document.createElement('img');
newImage.src='https://images.unsplash.com/photo-1504297050568-910d24c426d3?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60';
document.body.appendChild(newImage);
newImage.classList.add('square');