// Giving four crystal buttons a random hidden value betwee 1-12

// variables to tally guesses, wins & losses
var playerScore = 0
  , wins = 0
  , losses = 0
  ;

// attach value to each individual id on page load assign random value
var rand = Math.floor(Math.random() * 101) + 19
  , crystal1 = Math.floor(Math.random() * 11) + 1
  , crystal2 = Math.floor(Math.random() * 11) + 1
  , crystal3 = Math.floor(Math.random() * 11) + 1
  , crystal4 = Math.floor(Math.random() * 11) + 1
  ;

$(".display").text(rand);

// reset 
$('#reset').on('click', function(){    
    resetScore();
});

//these generate the random numbers for the jewels
// add to existing score on each new click of any jewel
$('#aqua').on('click', function () {
    playerScore = playerScore + crystal1;
    console.log('Our Player Score:', playerScore)
    $('.score').text(playerScore);
    // sets win/lose conditions
    if (playerScore == rand) {
      conclusion(true);
    }
    else if (playerScore > rand) {
      conclusion(false);
    }
});

$('#pink').on('click', function () {
    playerScore = playerScore + crystal2;
    console.log('Our Player Score:', playerScore)
    $('.score').text(playerScore);
    // sets win/lose conditions
    if (playerScore == rand) {
      conclusion(true);
    }
    else if (playerScore > rand) {
      conclusion(false);
    }
});

$('#blue').on('click', function () {
    playerScore = playerScore + crystal3;
    console.log('Our Player Score:', playerScore)
    $('.score').text(playerScore);
    // sets win/lose conditions
    if (playerScore == rand) {
      conclusion(true);
    }
    else if (playerScore > rand) {
      conclusion(false);
    }
});

$('#red').on('click', function () {
    playerScore = playerScore + crystal4;
    console.log('Our Player Score:', playerScore)
    $('.score').text(playerScore);
    // sets win/lose conditions
    if (playerScore == rand) {
      conclusion(true);
    }
    else if (playerScore > rand) {
      conclusion(false);
    }
});

// called when you win or lose
function conclusion(e){
  switch(e) {
    case true:
      alert("You Won!!!");
      wins++;
      $('#winTotal').text(wins);
      break;
    case false:
      alert("You lost. Play again!");
      losses++;
      $('#loseTotal').text(losses);
      break;
  }
}

// reset, which is called as part of win/lose scenario
function resetScore() {
    rand = Math.floor(Math.random() * 101) + 19;
    crystal1 = Math.floor(Math.random() * 11) + 1;
    crystal2 = Math.floor(Math.random() * 11) + 1;
    crystal3 = Math.floor(Math.random() * 11) + 1;
    crystal4 = Math.floor(Math.random() * 11) + 1;
    playerScore = 0;
    $('.score').text(playerScore);
    $(".display").text(rand);
}
