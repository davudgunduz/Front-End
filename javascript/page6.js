let computer = "rock";
let player = "paper" ;
let result = player === computer ? "tie game" :
             player === "rock" && computer === "paper" ? "computer wins" :
             player === "paper" && computer === "scissors" ? "computer wins" :
             player === "scissors" && computer === "rock" ? "computer wins" :
             "player wins";
             console.log(result);

