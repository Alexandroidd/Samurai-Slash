

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
var badStart = false;




// Thinking about whether I should make an object constructor or not
// for each player.
// ------------------- //



// --*This determines waiting time*--//
var waitingPeriod = Math.floor(Math.random() * (9000 - 3000)) + 3000;
//-------------------------------------



// Here, "ready" button is active and initiates the 'timer'//
//requires these vars: readyButton, falseStart, bang, waitingPeriod
readyButton.addEventListener('click', function(){
	console.log(waitingPeriod); //will be changed to run the timeout.
	console.log("I'm Ready!");
	document.addEventListener('click', falseStart);


	window.setTimeout(bang, waitingPeriod);
	readyButton.style.opacity = '0';

});




//---*tThis function makes the GO/ALERT box to shock player --//
//----------REQUIRES the ready button to be clicked which ---//
//------sets off the timeout for this to occure.-------------//

var bang = function(){
bangBox();
  console.log("BANG is Working!");
};


//--Here the exclamation box is created--//
bangBox = function() {
	if (badStart === true) {
		return;
	} else {
	var bangBox = document.createElement('img');
	document.body.appendChild(bangBox);
	isWorking = true;
	bangBox.id="bang";
	bangBox.src = "images/bang.png";
	document.getElementById('bang').addEventListener("load", getTime);
}
	};




//----This function gets the starting time of the Duel----//
var getTime = function(event){
	//this is where to save the timestamp into a variable
	var startTime = Math.floor((event.timeStamp));
	console.log(startTime);
	return(startTime);
};

var earlyRestart = function(){
	waitingPeriod = Math.floor(Math.random() * (9000 - 3000)) + 3000;
	startTime = 0;
	readyButton.style.opacity = '1';
	console.log("FALSE START TRY AGAIN");
};


var falseStart = function() {
if(isWorking !== true) {
	badStart = true;
	document.addEventListener('click', earlyRestart);     // -----add two variable that are each separate event listeners for the player's respective keys.
} else {
	return;
}
};









//-----RESTART FROM FALSE START FUNCTION---//





//-----RESTART FUNCTION-----//
var restart = function() {
	var removeBangs = document.getElementById('bang');
	document.body.removeChild(removeBangs);
	waitingPeriod = Math.floor(Math.random() * (9000 - 3000)) + 3000;
	startTime = 0;
	readyButton.style.opacity = '1';
	console.log("a fresh restart");

};




// console.log(startTime);
//-----^^^^----------//








