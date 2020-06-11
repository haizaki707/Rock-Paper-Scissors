    
        

    //     let startPoint = '';
    //     document.getElementById("startBtn").addEventListener("click", startFunction);
    
        

    //     function startFunction() {
    //         alert("Rounds Start Now!")
    //         startPoint = 1;
    //         return startPoint;
    //     }

    // if(startPoint === 1) {

    let computerPlay = function(){
    let pickOne = ['rock', 'paper', 'scissors']
    return pickOne[Math.floor(Math.random()*pickOne.length)];
    } 
        let computerSelection = computerPlay();

    //Score
       let playerScore = 0;
       let computerScore  = 0;
       let tiesScore = 0;


    function playRound(playerSelection, computerSelection) {
        if (playerSelection === 'rock' && computerSelection === 'paper') { 
            computerScore++; document.getElementById("moveHere").innerHTML = ("Rock vs Paper: The Winner is Computer!"); 

        } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
            playerScore++; document.getElementById("moveHere").innerHTML = ("Rock vs Scissors: The Winner is Player!"); 

        } else if (playerSelection === 'rock' && computerSelection === 'rock') { 
            tiesScore++; document.getElementById("moveHere").innerHTML = ("Rock vs Rock: The round ends in draw!"); 

        }   if (playerSelection === 'paper' && computerSelection === 'paper') {
            tiesScore++; document.getElementById("moveHere").innerHTML = ("Paper vs Paper: The round ends in draw!"); 

        } else if (playerSelection === 'paper' && computerSelection === 'scissors') { 
            computerScore++; document.getElementById("moveHere").innerHTML= ("Paper vs Scissors: The Winner is Computer!"); 

        } else if (playerSelection === 'paper' && computerSelection === 'rock') {
            playerScore++; document.getElementById("moveHere").innerHTML = ("Paper vs Rock: The winner is Player!"); 

        }  if (playerSelection === 'scissors' && computerSelection === 'paper') {
            playerScore++; document.getElementById("moveHere").innerHTML = ("Scissors vs Paper: The Winner is Player!"); 

        } else if (playerSelection === 'scissors' && computerSelection === 'scissors') { 
            tiesScore++; document.getElementById("moveHere").innerHTML = ("Scissors vs Scissors: The round ends in draw!"); 

        } else if (playerSelection === 'scissors' && computerSelection === 'rock') { 
            computerScore++; document.getElementById("moveHere").innerHTML = ("Scissors vs Rock: The Winner is Computer!"); 

        } else {
            return "Wrong input! Please choose Rock/Paper/Scissors";
        }
    }

    function resetFunction() {
        document.getElementById('userScore').innerHTML = playerScore = 0;
        document.getElementById("compScore").innerHTML = computerScore = 0;
        document.getElementById("finalResult").innerHTML = "The final result will appear here!";
        document.getElementById("moveHere").innerHTML = "Make your choice wisely!"; 
    }

    const rockbutton = document.querySelector('#imgBtn1');
    rockbutton.addEventListener('click', () => {
            playerSelection = 'rock';
            computerSelection = computerPlay();
            let result = playRound(playerSelection, computerSelection);
            document.getElementById('userScore').innerHTML = playerScore;
            document.getElementById("compScore").innerHTML = computerScore;

            if(playerScore === 5 || computerScore === 5) {
                if (playerScore > computerScore) {
                document.getElementById("finalResult").innerHTML = ("You have won by " + (playerScore - computerScore) +" Points!");
              } else if (computerScore > playerScore) {
                document.getElementById("finalResult").innerHTML = ("Computer has won by " + (computerScore - playerScore) + " Points!")
              } else if (playerScore === computerScore) {
                document.getElementById("finalResult").innerHTML = ("It's a tie!")  }
            }

            if(computerScore > 5 || playerScore > 5) {
                 resetFunction();
            } 
            
    })

    const paperbutton = document.querySelector("#imgBtn2");
    paperbutton.addEventListener('click', () => {
            playerSelection = 'paper';
            computerSelection = computerPlay();
            let result = playRound(playerSelection, computerSelection);
            
            document.getElementById('userScore').innerHTML = playerScore;
            document.getElementById("compScore").innerHTML = computerScore;

            if(playerScore === 5 || computerScore === 5) {
                if (playerScore > computerScore) {
                document.getElementById("finalResult").innerHTML = ("You have won by " + (playerScore - computerScore) +" Points!");
              } else if (computerScore > playerScore) {
                document.getElementById("finalResult").innerHTML = ("Computer has won by " + (computerScore - playerScore) + " Points!")
              } else if (playerScore === computerScore) {
                document.getElementById("finalResult").innerHTML = ("It's a tie!")  }
            }

            if(computerScore > 5 || playerScore > 5) {
                resetFunction();
           } 
            
    })

    const scissorsbutton = document.querySelector("#imgBtn3");
    scissorsbutton.addEventListener('click', () => {
            playerSelection = 'scissors';
            computerSelection = computerPlay();
            let result = playRound(playerSelection, computerSelection);
            
            document.getElementById('userScore').innerHTML = playerScore;
            document.getElementById("compScore").innerHTML = computerScore;

            if(playerScore === 5 || computerScore === 5) {
                if (playerScore > computerScore) {
                document.getElementById("finalResult").innerHTML = ("You have won by " + (playerScore - computerScore) +" Points!");
              } else if (computerScore > playerScore) {
                document.getElementById("finalResult").innerHTML = ("Computer has won by " + (computerScore - playerScore) + " Points!")
              } else if (playerScore === computerScore) {
                document.getElementById("finalResult").innerHTML = ("It's a tie!")  }
            }

            if(computerScore > 5 || playerScore > 5) {
                resetFunction();
           } 
            
    })  

   

    // };


  