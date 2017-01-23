// Задание 3

/* i - число, d3 - остаток от деления на 3, d5 - остаток от деления на 5
	i_out - выводимое значение */
var i, d3, d5, i_out;

for (i = 1; i < 101; i++) {
  d3 = i % 3;
  d5 = i % 5;
  if (d3 == 0 & d5 == 0) {
  	i_out = 'FizzBuzz';
  } else if (d3 == 0 & d5 != 0) {
  	i_out = 'Fizz';
  } else if (d3 != 0 & d5 == 0) {
  	i_out = 'Buzz';
  } else i_out = i;

  console.log (i_out);
}