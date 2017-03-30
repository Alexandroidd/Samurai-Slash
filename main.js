//////////////////////////////////
//******************************//
//*******GAME FUNCTION DATA*****//						
//******************************//
//////////////////////////////////


function falseStart() {
	clearTimeout(pause);
	console.log("A false start has been triggered");
}

var pause;	
var startTime;

//-------------Initiate-The-bangBox----------//
//--this-begins-the-whole-shebang-mode---only-occurs-if-no-false-start//
var initiateBang = function(){
		pause = window.setTimeout(bangBox, waitingPeriod);
			};
//-------------------------------------------//
				
				
	

//----This function gets the starting time of the Duel----//
var getTime = function(event){
	//this is where to save the timestamp into a variable
	startTime = Math.floor((event.timeStamp));
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



function n() {
	if (event.code === "KeyA" || event.code === "KeyL") {
		falseStart();
	}
}


// Here, "ready" button is active and initiates the 'timer'//
//requires these vars: readyButton, falseStart, bang, waitingPeriod
readyButton.addEventListener('click', function(){
	console.log(waitingPeriod);
	console.log("I'm Ready!");
      console.log("I'M LISTENING...");
      timeToAlert = true;
     let interval = initiateBang();
      document.addEventListener('keydown', n);

     // <--- can add function with two separate event listeners for each player's key.
	readyButton.style.opacity = '0';
});


var playerOneTime;

var playerTwoTime;



function pOne() {
	if (event.code === "KeyA") {
		playerOneTime = Math.floor((event.timeStamp));
		movesPlayed++;
		evalWinner();
		console.log(playerOneTime);
	}
}
function pTwo() {
	if (event.code === "KeyL") {
		playerTwoTime = Math.floor((event.timeStamp));
		movesPlayed++;
		evalWinner();
		console.log(playerTwoTime);
	}
}

function evalWinner() {
	if ( movesPlayed === 2 && (playerOneTime - startTime) < (playerTwoTime - startTime)) {
		console.log("PLAYER ONE WINS");
	} else if (movesPlayed === 2 && (playerTwoTime - startTime) < (playerOneTime - startTime)) {
		console.log("Player Two WINS!");
	}
}
var movesPlayed = 0;

bangBox = function() {
	document.removeEventListener('keydown', n);
	var startBox = document.createElement('img');
	document.body.appendChild(startBox);
	startBox.id="bang";
	startBox.src = "images/bang.png";
	document.getElementById('bang').addEventListener("load", getTime);
	document.addEventListener('keydown', pOne);
	document.addEventListener('keydown', pTwo);

	};








//-------------------------//



// console.log(startTime);
//-----^^^^----------//








