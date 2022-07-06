//function playerSelection() {
//   const userchoice = prompt("Do you choose Rock, Paper or Scissors?");
//   return userchoice
//}
//playerSelection()

//function computerPlay() {
//   const options = ["Rock", "Paper", "Scissors"];
  // return options[Math.floor(Math.random()*options.length)];  
//}
//console.log(computerPlay())
const move = ["Rock", "Paper", "Scissors"]
let playerCount = 0;
let computerCount = 0;

function computerPlay() {
   return move[Math.floor(Math.random()*move.length)]
}

function playRound(playerSelection, computerSelection) {
   if ((playerSelection == "Rock" && computerSelection == "Paper")) {
      return `You lose, ${computerSelection} beat ${playerSelection}. Computer gains ${++computerCount} point`;
   } else if ((playerSelection == "Rock" && computerSelection == "Scissors")) {
      ++playerCount;
      return "You win, rock beat scissors";
   } else if ((playerSelection == "Rock" && computerSelection == "Rock")) {
      return "It's a tie";
   } else if ((playerSelection == "Paper" && computerSelection == "Rock")) {
      ++playerCount;
      return "You win, paper beat rock";
   } else if ((playerSelection == "Paper" && computerSelection == "Paper")) {
      return "It's a tie";
   } else if ((playerSelection == "Paper" && computerSelection == "Scissors")) {
      ++computerCount;
      return "You lose, scissors beat paper";
   } else if ((playerSelection == "Scissors" && computerSelection == "Rock")) {
      ++computerCount;
      return "You lose, rock beats scissors";
   } else if ((playerSelection == "Scissors" && computerSelection == "Scissors")) {
      return "It's a tie";   
   } else if ((playerSelection == "Scissors" && computerSelection == "Paper")) {
      ++playerCount;
      return "You win, scissors beat paper";    
   }
   }
   
                              

function game() {
   for (let i=0; i < 5; i++) {
      const computerSelection = computerPlay();
      let input = prompt("Choose Rock, Paper or scissors?");
      let playerSelection = input.substring(0,1).toUpperCase() + input.substring(1).toLowerCase();
      console.log(playRound(playerSelection, computerSelection));
   }
   if (playerCount > computerCount) {
      return "You win the game"
   }
   else {
      return "You lose! computer wins the game"
   }
}
console.log(game());


