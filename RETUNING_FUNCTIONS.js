function makeMysteryFunc(){
    const rand =Math.random();
    if(rand > 0.5)
    {
        return function(){
            console.log("CONGRATS ,I AM GOOD FUNCTION")
            console.log("YOU WIN A MILLION DOLLAR!!")
        }
    }else {
return function(){
    alert("YOU HAVE BEEN INFECTED BY A COMPUTER VIRUS!");
    alert("STOP TRYING TO CLOSE THIS WINDOW");
    alert("STOP TRYING TO CLOSE THIS WINDOW");
    alert("STOP TRYING TO CLOSE THIS WINDOW");
    alert("STOP TRYING TO CLOSE THIS WINDOW");
    alert("STOP TRYING TO CLOSE THIS WINDOW");
    alert("STOP TRYING TO CLOSE THIS WINDOW");
}
    }
}
const mystery =makeMysteryFunc();
function isBetween(num){
    return num >= 50 && num <= 100

}
// isBetween(57)
function makeBetweenFunc(min,max){
    return function (num){
        return num >= min && num <= max 
    }
}
const isChild =makeBetweenFunc(0,18);
const allImages=document.getElementsById('img');
for(let something of allImages)
{
    img.src='https:  ninnffsnj';
}
const squareImages=document.getElementsByClassName('square');
for(let img of squareImages)
{
    img.src='https:  ninnffsnj';
}