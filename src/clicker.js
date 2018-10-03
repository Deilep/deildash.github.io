let button = document.getElementById('button');
let text = document.getElementsByClassName('field')[0];
let game = {
	score: 0,
	start: function() {
		game.score = 0;
		text.value = '';
		console.clear();
		button.onclick = game.click;
		setTimeout(game.finish, 2000);
	},
	click: function() {
			game.score++;
			text.value = game.score;
			console.log('click');
	},
	finish: function() {
		alert("Вы набрали " + game.score + " очков");
		button.onclick = game.start;
	}
}

button.onclick = game.start;