for (var i = 0; i < 10; i ++) {
	col = $('<div>').css('width', '10%');
	for (var j = 0; j < 10; j ++) {
		col.append(
			$('<div></div>').css('height', '10%').addClass('tile')
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