// Snippet from https://codepen.io/Halfhappy/pen/DmxuB
const random_color = () => '#'+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);

for (var i = 0; i < 10; i ++) {
	col = $('<div>').css('width', '10%').css('height', '100%').addClass('col');
	for (var j = 0; j < 10; j ++) {
		col.append(
			$('<div data-tilt></div>').css('width', '100%').css('height', '10%').addClass('tile').css('background-color', random_color())
		);
	}
	$('#grid').append(col);
}

$(document).ready(
	() => {
		$('[data-tilt]').tilt({
			maxTilt: 10,
			scale: 1.2,
			speed: 2000,
			glare: true,
			maxGlare: 0.5
		});
	}
);