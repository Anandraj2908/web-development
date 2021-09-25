for(let i=1;i<=150;i++)
{
const pokemon=document.createElement('div');
 const newImg=document.createElement('img');
 newImg.src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
 
 const num=document.createElement('span');
num.innerText=`#${i}`;
pokemon.appendChild(newImg);
pokemon.appendChild(num);
document.body.appendChild(pokemon);
}
