//////////////////////////////////
//******************************//
//*******GAME FUNCTION DATA*****//						
//******************************//
//////////////////////////////////


//----When to start Listening for False Start------//
//---Had to put this outside the ready button because it was firing--//
//---false start when it should just be ready-----//






///----This is the FALSE START MECHANISM -------////
//-----------------------------------------------///
//--this function stops the timeout, removes the event
//----listener and restarts the game----------//
var falseStart = function(x) {
	stopBang(x);
	console.log("FALSE START has activated");
	restart();
};
//--------------------//


//This is TIME TO GO --- This function initiates the TIMEOUT of Bang.
//This had to be separated out from the readyButton because it was
//firing simultaneously as the game was being started.

var timeToGo = function() {
	console.log("initiating...");
	return (initiateBang());
};
//------------//


//-------------Initiate-The-bangBox----------//
//--this-begins-the-whole-shebang-mode---only-occurs-if-no-false-start//
var initiateBang = function(){
		var pause = window.setTimeout(bang, waitingPeriod);
		return pause;
	};
//-------------------------------------------//
				
				

//-----Stops the BOX from appearing ------//
var stopBang = function(x){
		clearTimeout(x);
	};
//-----------------------------------------//

			

//----This function gets the starting time of the Duel----//
var getTime = function(event){
	//this is where to save the timestamp into a variable
	var startTime = Math.floor((event.timeStamp));
	console.log(startTime);
	return(startTime);
};
//--------------------------------//



//-----RESTART FUNCTION-----//
var restart = function() {
	waitingPeriod = Math.floor(Math.random() * (9000 - 3000)) + 3000;
	startTime = 0;
	readyButton.style.opacity = '1';
	console.log("a restart has been initiated");
	document.removeEventListener('click',falseStart);

};









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
var playerZone = document.getElementById('player2');
var timeToAlert;
// var startListening = false;



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
      console.log("I'M LISTENING...");
      timeToAlert = true;
      var kickOut = timeToGo();
      playerZone.addEventListener('click', function() {
      		falseStart(kickOut);

      }); // <--- can add function with two separate event listeners for each player's key.

	readyButton.style.opacity = '0';
});




if(timeToAlert === true) {
	timeToGo();
}






// var listening = function(){
//       document.addEventListener('click', falseStart); // <--- can add function with two separate event listeners for each player's key.
//       console.log("I'M LISTENING...");
// };
// listening();


//---*tThis function makes the GO/ALERT box to shock player --//
//----------REQUIRES the ready button to be clicked which ---//
//------sets off the timeout for this to occur.-------------//
var bang = function(){
bangBox();
  console.log("BANG is Working!");
};
//------------------------------------------------------------//

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







//-------------------------//



// console.log(startTime);
//-----^^^^----------//








