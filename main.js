

// -----PLAYER DATA ----//
var playerOne = {
	baseTime: getTime
	}; 


var playerTwo = {
	reactionTime: 0,
	waitTime: 0
};
//-------//

///////OBJECT DATA//////
var readyButton = document.getElementById('ready');
var isWorking = false;





// Thinking about whether I should make an object constructor or not
// for each player.
// ------------------- //



// --*This determines waiting time*--//
var waitingPeriod = Math.floor(Math.random() * (9000 - 3000)) + 3000;

//---*tThis function makes the GO/ALERT box to shock player --//
var bang = function(){
bangBox();
  console.log("BANG is Working!");
};


//--Here the exclamation box is created--//
bangBox = function() {
	var bangBox = document.createElement('img');
	document.body.appendChild(bangBox);
	isWorking = true;
	bangBox.id="bang";
	bangBox.src = "images/bang.png";
	document.getElementById('bang').addEventListener("load", getTime);
	};




//----This function gets the starting time of the Duel----//
var getTime = function(event){
	//this is where to save the timestamp into a variable
	var startTime = Math.floor((event.timeStamp));
	console.log(startTime);
	return(startTime);
};

var earlyRestart = function(){
	var removeBangs = document.getElementById('bang');
	document.body.removeChild(removeBangs);
	waitingPeriod = Math.floor(Math.random() * (9000 - 3000)) + 3000;
	startTime = 0;
	console.log("FALSE START TTRY AGAIN");
};


var falseStart = function() {
if(isWorking !== true) {
	document.addEventListener('click', earlyRestart);     // -----add two variable that are each separate event listeners for the player's respective keys.
} else {
	return;
}
};


// Here, "ready" button is active and initiates the 'timer'//
readyButton.addEventListener('click', function(){
	console.log(waitingPeriod); //will be changed to run the timeout.
	console.log("I'm Ready!");
	document.addEventListener('click', falseStart);


	window.setTimeout(bang, waitingPeriod);
	readyButton.style.opacity = '0';

});






//-----RESTART FROM FALSE START FUNCTION---//





//-----RESTART FUNCTION-----//





// console.log(startTime);
//-----^^^^----------//








