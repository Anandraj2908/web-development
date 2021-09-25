
let input=prompt("What would you like to do?");
let list=[];
while(input !== "quit" && input !== 'q')
{
    
   
    if(input == "new")
    {
        let newtodo=prompt("Enter new To Do.");
      list.push(newtodo);
    }
   else if(input == "delete")
    {
       let oldtodo=prompt("Enter the index of To Do to delete.");
       list.splice(oldtodo-1,1);
   }
    else if(input == "list")
    {
        console.log("---------------------");
       for(let i=1;i<=list.length;i++)
        {
           console.log(`| ${i}: ${list[i-1]}              |`);
        }
        console.log("---------------------");
    }
    else{
         console.log("Wrong input try again");
   }
    input = prompt("What would you like to do?"); 
}
console.log("You have quit");