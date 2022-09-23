const calculator = {
    plus: function(firstOfNumber, secondOfNumber) {
        return firstOfNumber + secondOfNumber;
    },
    subtraction: function(firstOfNumber, secondOfNumber) {
        return firstOfNumber - secondOfNumber;
    },
    multiple: function(firstOfNumber, secondOfNumber) {
        return firstOfNumber * secondOfNumber;
    },
    divide: function(firstOfNumber, secondOfNumber) {
        return firstOfNumber / secondOfNumber;
    },
    power: function(firstOfNumber, secondOfNumber) {
        return firstOfNumber ** secondOfNumber;
    }
}

const plusResult = calculator.plus(5, 3);
const subtractionResult = calculator.subtraction(plusResult, 5);
const multipleResult = calculator.multiple(subtractionResult, 2);
const divideResult = calculator.divide(multipleResult, plusResult);
const powerResult = calculator.power(plusResult, subtractionResult);