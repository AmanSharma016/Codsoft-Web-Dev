let result = document.getElementById('result');

function appendNumber(number) {
    result.value += number;
}

function appendSymbol(symbol) {
    result.value += symbol;
}

function clearResult() {
    result.value = '';
}

function calculate() {
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = 'Error';
    }
}
