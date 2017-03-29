

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
	console.log(waitingPeriod);
	console.log("I'm Ready!");
	initiateBang();
	document.addEventListener('click', falseStart); // <--- can add function with two separate event listeners for each player's key.
	readyButton.style.opacity = '0';
});

var falseStart = function() {
	stopBang();
 	document.removeEventListener('click',falseStart);
	console.log("FALSE START TRY AGAIN");


};

//---*tThis function makes the GO/ALERT box to shock player --//
//----------REQUIRES the ready button to be clicked which ---//
//------sets off the timeout for this to occur.-------------//
var bang = function(){
bangBox();
  console.log("BANG is Working!");
};
//------------------------------------------------------------//
//***********************************************************//




//-----so, bang() just passes off the baton to bangBox, which actually----//
//-----creates the box which exclaims that is is time to react------------//

bangBox = function() {
	document.removeEventListener('click', falseStart);
	var startBox = document.createElement('img');
	document.body.appendChild(startBox);
	startBox.id="bang";
	startBox.src = "images/bang.png";
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
	

	waitingPeriod = Math.floor(Math.random() * (9000 - 3000)) + 3000;
	startTime = 0;
	readyButton.style.opacity = '1';
	console.log("FALSE START TRY AGAIN");
};



//so this function is dependent on whether the startBox has appeared or not
//if the box has NOT appeared, this function adds an event listener for player
//input.-------------
//this could simply be inserted into another function....











//-------------Initiate-The-bangBox----------//
//--this-begins-the-whole-shebang-mode---only-occurs-if-no-false-start//
var initiateBang = function(){
		window.setTimeout(bang, waitingPeriod);
	};
//-------------------------------------------//
				
				

//-----Stops the BOX from appearing ------//
var stopBang = function(){
		clearTimeout(initiateBang);
	};
//-----------------------------------------//

			

//-----RESTART FUNCTION-----//
var restart = function() {
	waitingPeriod = Math.floor(Math.random() * (9000 - 3000)) + 3000;
	startTime = 0;
	readyButton.style.opacity = '1';
	console.log("a fresh restart");

};
//-------------------------//



// console.log(startTime);
//-----^^^^----------//








