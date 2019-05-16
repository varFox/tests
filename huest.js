// Функция sum должна возвращать тип данных true. Проверить её на это.

function sum(a, b) {
	return a + b > 10;
}
sum(2,2);

let assert = require('chai').assert

describe('sum', function() {
	it('Тип данных ', function() {
		assert.typeOf(sum(2,2), 'boolean')
	});
});

// Переменная num должна быть равна 5. Проверить на соответствие.

let arr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
let num = arr[1][1];

describe('num', function() {
	it('arr[1][1] = 5', function() {
		assert.equal(num, 5)
	});
});

// Узнать, что нам вернет функция each в данных условиях. Проверить её на тип данных, который она возвращает,
// на соответствие ожидаемому результату (который вы получили) и на свойство length.

let each = function(startArr, f){return f(startArr)};
let arr2 = [64, 49, 36, 25, 16];
let myFunc = function(a){
	let newArr = [];
	for (let i = 0; i < a.length; i++) {
		newArr[i]=Math.sqrt(a[i]);
	}
	return newArr;
}
console.log(each(arr2, myFunc));

describe('each type', function() {
	it('each(arr, myFunc) вернёт массив', function() {
		assert.typeOf(each(arr2, myFunc), 'array')
	});
});

describe('each result', function() {
	it('result', function() {
		assert.equal(each(arr, myFunc), [8, 7, 6, 5, 4])
	});
});

describe('each result', function() {
	it('result', function() {
		assert.equal(each(arr, myFunc).length, 5)
	});
});