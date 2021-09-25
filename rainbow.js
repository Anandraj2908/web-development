const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

//YOU CODE GOES HERE:
/* const letter=document.querySelectorAll("h1>span");
for(let i=0;i<colors.length;i++)
{
    letter[i].style.color=colors[i];
}
 */
const letter=document.querySelectorAll("h1>span");
let i=0;
for(let ltr of letter)
{
    ltr.style.color=colors[i];
    i++;
}