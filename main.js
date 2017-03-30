//////////////////////////////////
//******************************//
//*******GAME FUNCTION DATA*****//						
//******************************//
//////////////////////////////////


function falseStart() {
	clearTimeout(pause);
	japan.pause();
	whoops.play();
	var falseBox = document.createElement('div');
		falseBox.id='falseStart';
		falseBox.innerHTML='FALSE START!';
		document.body.appendChild(falseBox);
	console.log("A false start has been triggered");
}

var pause;	
var startTime;
var audioSlash = document.getElementById('slashSound');
var audioSlash2 = document.getElementById('slashSound2');
var japan = document.getElementById('japan');
var ding = document.getElementById('ding');
var whoops = document.getElementById('whoops');

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
	waitingPeriod = 1000;//Math.floor(Math.random() * (9000 - 3000)) + 3000;
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
var waitingPeriod = 1000;//Math.floor(Math.random() * (9000 - 3000)) + 3000;
//-------------------------------------



function n() {
	if (event.code === "KeyA" || event.code === "KeyL") {
		japan.pause();

		falseStart();
	}
}


// Here, "ready" button is active and initiates the 'timer'//
//requires these vars: readyButton, falseStart, bang, waitingPeriod
readyButton.addEventListener('click', function(){
	console.log(waitingPeriod);
	console.log("I'm Ready!");
      console.log("I'M LISTENING...");
      japan.play();
      timeToAlert = true;
     let interval = initiateBang();
      document.addEventListener('keydown', n);

     // <--- can add function with two separate event listeners for each player's key.
	readyButton.style.opacity = '0';
});


var playerOneTime;

var playerTwoTime;

var pOneCharacter = document.getElementById('player1');
var pTwoCharacter = document.getElementById('player2');

function playerOneAction() {
	pOneCharacter.classList.toggle('animated');
	audioSlash.play();
}

function playerTwoAction() {
	pTwoCharacter.classList.toggle('animated');
	audioSlash2.play();
}


function pOne() {
	if (event.code === "KeyA") {
		playerOneTime = Math.floor((event.timeStamp));
		movesPlayed++;
		removeBox();
		// pOneCharacter.className += 'alt';
		playerOneAction();
		evalWinner();
		console.log(playerOneTime);
	}
}
function pTwo() {
	if (event.code === "KeyL") {
		playerTwoTime = Math.floor((event.timeStamp));
		movesPlayed++;
		removeBox();
		playerTwoAction();
		evalWinner();
		console.log(playerTwoTime);
	}
}

function removeBox(){
		if (document.getElementById('bang')){
		document.body.removeChild(document.getElementById('bang'));
	} else {
		return;
	}
}


function evalWinner() {
	if ( movesPlayed === 2 && (playerOneTime - startTime) < (playerTwoTime - startTime)) {
		console.log("PLAYER ONE WINS");
		var oneWins = document.createElement('div');
		oneWins.id="oneWins";
		oneWins.innerHTML = 'Player One Wins!';
		document.body.appendChild(oneWins);

	} else if (movesPlayed === 2 && (playerTwoTime - startTime) < (playerOneTime - startTime)) {
		console.log("Player Two WINS!");
		var twoWins = document.createElement('div');
		twoWins.id='twoWins';
		twoWins.innerHTML='Player Two Wins!';
		document.body.appendChild(twoWins);

	} else if (movesPlayed === 2 && (playerOneTime === playerTwoTime)) {
		console.log("It's a tie!");
	}
}
var movesPlayed = 0;

bangBox = function() {
	document.removeEventListener('keydown', n);
	var startBox = document.createElement('img');
	document.body.appendChild(startBox);
	japan.pause();
	ding.play();
	startBox.id="bang";
	startBox.src = "images/bang.png";
	document.getElementById('bang').addEventListener("load", getTime);
	document.addEventListener('keydown', pOne);
	document.addEventListener('keydown', pTwo);

	};








//-------------------------//



// console.log(startTime);
//-----^^^^----------//








