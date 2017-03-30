
function hazy() {
	var theBackground = document.querySelector('body');
	theBackground.classList.toggle('animated');
	console.log("this is working");
}

hazy();



var instructions = document.getElementById('instructions');

instructions.addEventListener('mouseenter', function() {
	instructions.style.color = 'yellow';

});

instructions.addEventListener('mouseout', function() {
	instructions.style.color='#fdebe1';
});

instructions.addEventListener('click', function() {
	var manual = document.createElement('div');
	manual.id="manual";
	manual.innerHTML="Welcome to Samurai Slash<br>This is a 2-player test of reflexes. The game requires you to be fast and aware!<br>As soon as you hit 'ready' the game will begin. Activate you player as soon as the '!' sign appears.<br>Player1 = 'A'<br>Player2 = 'B'";
	manual.display.toggle('none');
});



