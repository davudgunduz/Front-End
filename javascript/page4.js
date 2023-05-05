let player1 = "rock";
let computer = "paper";

switch(player1)
{
    
    case "rock" :
        if(computer==="paper")
        {
            console.log("computer win");
        } else {
            console.log("player1 win") ;  
        } 
        break;

    case "paper" :
            if(computer==="makas")
            {
                console.log("computer win");
            } else {
                console.log("player1 win") ;  
            } 
            break;

    case "makas" :
                if(computer==="rock")
                {
                    console.log("computer win");
                } else {
                    console.log("player1 win") ;  
                } 
                break;
        default:
            console.log("wrong sections");

}