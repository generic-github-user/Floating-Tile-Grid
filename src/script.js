for (var i = 0; i < 10; i ++) {
	col = $('<div>').css('width', '10%');
	for (var j = 0; j < 10; j ++) {
		col.append(
			$('<div></div>').css('height', '10%').addClass('tile')
		);
	}
	$('#grid').append(col);
}