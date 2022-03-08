function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function increment(n) {
    return ++n;
}

function decrement(n) {
    return --n;
}

function makeInt(n = 2) {
    return parseInt(n, 10);
}

function preserveDecimal(n = 2.22) {
    return parseFloat(n);
}