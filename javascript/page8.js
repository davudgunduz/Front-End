let playgame = confirm("shall we play rock , paper or scissors ?");
if(playgame)
{
    //play
    let playerchoice = prompt("please enter rock paper or scissors");
    if(playerchoice)
    {
        let playerone = playerchoice.trim().toLowerCase();
        if(playerone ==="rock" || playerone === "paper" || playerone === "scissors")
        {
            let computerchoice = Math.floor(Math.random() *3 +1);
            let computer = computerchoice === 1 ? "rock" : 
            computerchoice === 2 ? "paper" :
            "scissors" ; 

            let result = playerone  === computer ? "tie game" :
             playerone === "rock" && computer === "paper" ? "computer wins" :
             playerone === "paper" && computer === "scissors" ? "computer wins" :
             playerone === "scissors" && computer === "rock" ? "computer wins" :
             "player wins";
             console.log("playeer choice = " +playerone);
             console.log("computer choice = " + computer);
             console.log(" result = " +result);

            let playagain = confirm("play again");
            playagain ? location.reload() : alert("thanks for playing");
        } else {
            alert("you didnt enter rock , paper or scissors");
        }
    }
    else
    {
        alert("i guess changed your mind,maybe next time");
    }
}else 
{
    alert("okay , maybe next time");
}