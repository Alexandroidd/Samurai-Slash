
//DELETING TIME TO GO AS A FUNCTION JUST USING TIME OUT BANG

// var timeToGo = function() {
// 	console.log("initiating...");
// 	return (initiateBang());
// };

var timeOutBang = function(){
		var pause = window.setTimeout(bangBox, waitingPeriod);
		return pause;
	};
 var bangPause = timeOutBang;

//DELETING BANG AS A FUNCTION JUST USING BANGBOX

// var bang = function(){
// bangBox();
//   console.log("BANG is Working!");
// };

//--------------------------------------------------------//

//=---------THIS IS THE FALSE START MECHANISM -----------//



var falseStart = function(x) {
	clearTimeout(x);
	restart();
};


// falseStart(bangPause);
//DELETED STOP BANG AS WELL FUCK THIS SHIT TOO.
// var stopBang = function(x){
// 		clearTimeout(x);
// 	};




	 var kickOut = timeToGo();
      playerZone.addEventListener('click', function() {
      		falseStart(kickOut);




//----------------------stuff I cut from the original----------//
//-----Stops the BOX from appearing ------//
var stopBang = function(x){
		clearTimeout(x);
	};
//-----------------------------------------//

//This is TIME TO GO --- This function initiates the TIMEOUT of Bang.
//This had to be separated out from the readyButton because it was
//firing simultaneously as the game was being started.

var timeToGo = function() {
	console.log("initiating...");
	return (initiateBang());
};
//------------//







