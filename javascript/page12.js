let playgame = confirm("shall we play rock , paper or scissors ?");
if(playgame){
    while(playgame)
{
    //play
    let playerchoice = prompt("please enter rock paper or scissors");
    if(playerchoice)
    {
        let playerone = playerchoice.trim().toLowerCase();
        if(playerone ==="rock" || playerone === "paper" || playerone === "scissors")
        {
            const computerchoice = Math.floor(Math.random() *3 );
            const array = ["rock","paper", "scissors"];
            const computer = array[computerchoice]

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
}
} else 
{
    console.log("see you later");
}