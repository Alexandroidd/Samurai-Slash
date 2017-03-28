

// -----PLAYER DATA ----//
var playerOne = {
	reactionTime: 0,
	waitTime: 0
};

var playerTwo = {
	reactionTime: 0,
	waitTime: 0
};
//-------//

///////OBJECT DATA//////
var readyButton = document.getElementById('ready');





// Thinking about whether I should make an object constructor or not
// for each player.
// ------------------- //

// --^^^^^^--Time_Related Variables + Functions ----^^^^^//
var waitingPeriod = Math.floor(Math.random() * (9000 - 3000)) + 3000;

var bang = function(){
  console.log("BANG is Working!");
};

bangBox = function() {
	var bangBox = document.createElement('img');
	document.body.appendChild(bangBox);
	bangBox.id="bang";
	bangBox.src = "images/bang.png";
};

bangBox();



// Here, "ready" button is active and initiates the 'timer'//
readyButton.addEventListener('click', function(){
	console.log(waitingPeriod); //will be changed to run the timeout.
	console.log("I'm Ready!");
	window.setTimeout(bang, waitingPeriod);
	readyButton.style.opacity = '0';

});






//-----^^^^----------//








