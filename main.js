//////////////////////////////////
//******************************//
//*******GAME FUNCTION DATA*****//						
//******************************//
//////////////////////////////////


function falseStart() {
	
	console.log(clearTimeout(pause));
	console.log("A false start has been triggered");
}


var pause;

var timeOutBang = function(){
		pause = window.setTimeout(bangBox, waitingPeriod);
	};
	


// document.addEventListener('keydown', function(event) {
//	if(event.code === "KeyL") {

var addListen = function(event) {
	if(event.code === "KeyL" || event.code === "KeyA") {
		falseStart(bangPause);
	}
};


//-------------Initiate-The-bangBox----------//
//--this-begins-the-whole-shebang-mode---only-occurs-if-no-false-start//
var initiateBang = function(){
		pause = window.setTimeout(bang, waitingPeriod);
			};
//-------------------------------------------//
				
				
	

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

};




//IM THINKING THAT IF I CAN ATTACH THE EVENT LISTENER TO A SPECIFIC PART OF THE PLAYER OBJECT, 
//I JUST DELETE THAT PART OF THE OBJECT LATER ON WHEN I NEED TO REMOVE THE EVENT LISTENER//





// -----PLAYER DATA ----//
var playerOne = {
	baseTime: getTime,
	pushButton: "KeyA"
	
	}; 


var playerTwo = {
	baseTime: getTime,
	pushButton: "KeyL"
};
//-------//

///////OBJECT DATA//////
var readyButton = document.getElementById('ready');
var timeToAlert = false;
// var startListening = false;


// --*This determines waiting time*--//
var waitingPeriod = Math.floor(Math.random() * (9000 - 3000)) + 3000;
//-------------------------------------

// var addListen = function(x) {
// 	document.addEventListener('keydown', function(event) {
// 		if (event.code === "KeyA" || event.code === "KeyL") {
// 			falseStart(x);
// 		}
// });
// };

// Here, "ready" button is active and initiates the 'timer'//
//requires these vars: readyButton, falseStart, bang, waitingPeriod
readyButton.addEventListener('click', function(){
	console.log(waitingPeriod);
	console.log("I'm Ready!");
      console.log("I'M LISTENING...");
      timeToAlert = true;
      
     let interval = initiateBang();
      // var kickOut = timeToGo();
      document.addEventListener('keydown', function n(){
      	if (event.code === "KeyA" || event.code === "KeyL") {
      		falseStart();
      	}
      	});

     // <--- can add function with two separate event listeners for each player's key.
	readyButton.style.opacity = '0';
});




//---------------------------//
if(timeToAlert === true) {
timeOutBang();
}


//This global var is weird, had//
//to separate it though.
//----------------------------//





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
	// document.removeEventListener('keydown', );
	var startBox = document.createElement('img');
	document.body.appendChild(startBox);
	startBox.id="bang";
	startBox.src = "images/bang.png";
	document.getElementById('bang').addEventListener("load", getTime);


	};








//-------------------------//



// console.log(startTime);
//-----^^^^----------//








