       
       //player's turn to choose
        let playerChoice = getPlayerChoice();
        alert("Your choice is:"+" "+ playerChoice);

        //computer's turn
        let computerChoice = getComputerChoice();
        alert("Computer's choice is:"+" "+computerChoice);

        //decide the winner based on their choice

        let winner = playRound(playerChoice,computerChoice);
  
        if(winner == playerChoice)
        {
            alert(`You win! ${playerChoice} beats ${computerChoice} !`);
        }
        else if(winner == computerChoice){
            alert(`You lose! ${computerChoice} beats ${playerChoice} !`);
        }
        else{
            alert(`It's a draw!`);
        }

    //  Implementation of functions

        function getPlayerChoice(){
            let choice = null;
           let selectionNumber = parseInt(prompt("Make a selection:\n1.Rock\n2.Paper\n3.Scissors"));
            switch(selectionNumber)
            {
                case 1:
                    choice = 'Rock';
                    break;
                case 2:
                    choice = 'Paper';
                    break;
                case 3:
                    choice = 'Scissors';
                    break;
                default:
                    console.log("invalid value");
            }

        return choice;
        }

        function getComputerChoice(){
            let choice = null;
           let selectionNumber = Math.ceil(Math.random() * 3);
            switch(selectionNumber)
            {
                case 1:
                    choice = 'Rock';
                    break;
                case 2:
                    choice = 'Paper';
                    break;
                case 3:
                    choice = 'Scissors';
                    break;
                default:
                    console.log("invalid value");
            }

        return choice;
        }

        function playRound(playerChoice,computerChoice){
            let winner = null;
            let loser = null;

            if((playerChoice == 'Rock' && computerChoice == 'Scissors') ||
             playerChoice == 'Scissors' && computerChoice == 'Paper' ||
             playerChoice == 'Paper' && computerChoice == 'Rock' ){
                winner = playerChoice;
            }
            else{
                winner = computerChoice;
            }

            if(playerChoice == computerChoice){
                winner = null;
            }
            return winner;
        }
