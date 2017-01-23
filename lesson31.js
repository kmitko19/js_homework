// Задание 1

/* i - счетчик, 
	i_out - выводимое значение */
var i, i_out = '';

for (i = 1; i <= 7; i++) {

  i_out += '#';
  console.log (i_out);
}

// Задание 2

var c, d, i_out = '|';

for (var j = 1; j <= 8; j++) {
	
	if (j % 2 != 0) {
		c = '#|';
		d = ' |';
	} else {
		c = ' |';
		d = '#|';
	}

	for (var i = 1; i <= 8; i++) {

		if (i % 2 != 0) {

			i_out += c;
		} else	i_out += d;

	}
		console.log (i_out)
		i_out = '|';
}