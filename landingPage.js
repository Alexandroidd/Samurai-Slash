var zelda = document.getElementById('zelda');
zelda.play();



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
	manual.classList.toggle('appear');
});


