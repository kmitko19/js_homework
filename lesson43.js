// Задание 3
//-------------------------------------------------
var n; //Задаем переменные

function isEven (n) {
		
		if (n == 0 || n == 1) {		// Проверяем на равенство 0 или 1
		return 0 == n;			// Если четное - присваиваем True, если нет, то False
	}  else {
		return isEven (n - 2);	// Делаем рекурсию с уменьшением значения на 2
	}								
}

n = Math.abs (prompt ('Введите число:'));	// Ввод анализируемого значения и преобразование его к абсолютному

console.log (isEven (n));		// Вывод булевого значения на консоль			