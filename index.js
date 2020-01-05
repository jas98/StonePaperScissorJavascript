function execute(yourChoice) {
  var humanChoice = yourChoice.id;
  var botChoice = Math.floor(Math.random() * 2 + 0);
  console.log(humanChoice);

  var botChoiceStringVariable = botChoiceString(botChoice);
  decideWinner(humanChoice, botChoiceString(botChoice));

  console.log(botChoiceString(botChoice));
  console.log(decideWinner(humanChoice, botChoiceStringVariable));
  console.log(
    messageFunction(decideWinner(humanChoice, botChoiceStringVariable)[0])[
      "message"
    ]
  );

  //var a = decideWinner(humanChoice, botChoiceStringVariable);
  FrontEnd(
    humanChoice,
    botChoiceString(botChoice),
    decideWinner(humanChoice, botChoiceStringVariable)[0]
  );
  // messageFunction(yourScore);
}

function FrontEnd(humanChoice, botChoiceStringVariable, a) {
  var imageDatabase = {
    rock: document.getElementById("rock").src,
    paper: document.getElementById("paper").src,
    scissors: document.getElementById("scissors").src
  };

  document.getElementById("scissors").remove();
  document.getElementById("paper").remove();
  document.getElementById("rock").remove();

  var humanDiv = document.createElement("div");
  var messageDiv = document.createElement("div");
  var botDiv = document.createElement("div");

  humanDiv.innerHTML =
    "<img src='" +
    imageDatabase[humanChoice] +
    "' height='342' width='352' / >";

  messageDiv.innerHTML =
    "<h1 style='color:" +
    messageFunction(a)["color"] +
    "; font-size:60px; padding-top:100px;'>" +
    messageFunction(a)["message"];
  +"</h1>";

  botDiv.innerHTML =
    "<img src='" +
    imageDatabase[botChoiceStringVariable] +
    "' height='342' width='352' / >";

  document.getElementById("big-container").appendChild(humanDiv);
  document.getElementById("big-container").appendChild(messageDiv);
  document.getElementById("big-container").appendChild(botDiv);
}
function botChoiceString(botChoice) {
  var arr = ["rock", "scissors", "paper"];
  return arr[botChoice];
}

function decideWinner(humanChoice, botChoiceString) {
  var database = {
    rock: { scissors: 1, rock: 0.5, paper: 0 },
    scissors: { scissors: 0.5, rock: 0, paper: 1 },
    paper: { scissors: 0, rock: 1, paper: 0.5 }
  };
  var yourScore = database[humanChoice][botChoiceString];
  var botScore = database[botChoiceString][humanChoice];

  var result = [yourScore, botScore];
  return result;
}

function messageFunction(yourScore) {
  if (yourScore == 1) {
    return { message: "You Win", color: "green" };
  } else if (yourScore == 0) {
    return { message: "You Loose", color: "Red" };
  } else {
    return { message: "Match Tie", color: "yellow" };
  }
}
