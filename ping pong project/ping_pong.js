const button1=document.querySelector('#player1');
const button2=document.querySelector('#player2');
const score1=document.querySelector('#scorrer1');
const score2=document.querySelector('#scorrer2');
const form=document.querySelector('#form');
const optionValue=document.querySelector('#maxScore')
const reset=document.querySelector('#reset');
let totalScore=-1;




optionValue.addEventListener('input',function (e){
    e.preventDefault();
    totalScore=optionValue.value;
    console.log(totalScore);
    
}
)
button1.addEventListener('click',function updateValue(e){
    e.preventDefault();
    button1.value++;
    score1.innerText=`${button1.value}`;
    console.log(button1.value);
    if(totalScore === button1.value || totalScore === button2.value )
{
    console.log(totalScore);
    console.log(button1.value);
button1.disabled=true;
button2.disabled=true;
if(button1.value > button2.value)
{
    score1.style.color="green";
    score2.style.color="red";
}
else{
    score1.style.color="red";
    score2.style.color="green";
}
 

}
})
button2.addEventListener('click',function updateValue(e){
    e.preventDefault();
    button2.value++;
    score2.innerText=`${button2.value}`;
    console.log(button2.value);
    if(totalScore === button1.value || totalScore === button2.value )
{
    console.log(totalScore);
    console.log(button1.value);
button1.disabled=true;
button2.disabled=true;
if(button2.value > button1.value)
{
    score1.style.color="red";
    score2.style.color="green";
}
else{
   
    score1.style.color="green";
    score2.style.color="red";
}
 
}
})

reset.addEventListener('click',function (e){
    e.preventDefault();
    button1.disabled=false;
    button2.disabled=false;

    button1.value=0;
    button2.value=0;
    score1.style.color="black";
    score2.style.color="black";
    score1.innerText='0';
    score2.innerText='0';
})
