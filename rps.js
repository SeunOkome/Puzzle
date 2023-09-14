let player = prompt("Enter rock (r), paper (p), scissors (s)")

if (player== "r") 
{
    console.log ("you have chosen ROCK")
}
else if (player== "p")
{
    console.log ("you have chosen PAPER")
}
else (player== "r") 
{
    console.log ("you have chosen SCISSORS") 
} 
let random = Math.floor(Math.random() *3) + 1
let computer = 0;
if (random ==1) 
{
    console.log("Computer has chosen Rock");
    computer = "r";
}
else if (random == 2)
{   console.log("Computer has chosen PAPER");
    computer = "p"}

else {
    console.log("Computer has chosen SCISSORS")

    if(player==computer){
        alert ("Its a DRAW")
    
    }
    else if (player =='r') {
        if (computer =='s'){
            alert("You Win");
        }
        else{
            alert('you lose :(')
        }
    }
        else if (player =='p') {
            if (computer =='r')
            {
                alert("You Win") 
            }
         else {
            alert ('you lose :(');
         }
        }
         else if (player =='s') 
         {
         if (computer =='r'){
              alert("You Win")
         }
          else{
              alert('you lose :(')
         }
        }
         else if (player =='p');
         {
            if (computer =='r'){
                alert("You Win")
         }
            else{
                alert('you lose :(')
         }
    }
    
}