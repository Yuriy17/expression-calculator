function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    let prior = {
            '+': 1,
            '-': 1,
            '*': 2,
            '/': 2
        },
        brackets = {
            open: '(',
            close: ')'
        },
        numbers = [],
        number = '',
        operators = [],
        line_array = [],
        line = expr.replace(/\s/g, '');
    for (let i; i < line.length; i++) {
        switch (line[i]) {
            case '+':
                operators.push('+');
                if (number.length > 0) {
                    numbers.push(parseInt(number));
                    number = '';
                }
                break;

            case '-':
                operators.push('-');
                if (number.length > 0) {
                    numbers.push(parseInt(number));
                    number = '';
                }
                break;
            case '*':
                operators.push('*');
                if (number.length > 0) {
                    numbers.push(parseInt(number));
                    number = '';
                }
                break;
            case '/':
                operators.push('/');
                if (number.length > 0) {
                    numbers.push(parseInt(number));
                    number = '';
                }
                break;
            case '(':
                operators.push('(');
                if (number.length > 0) {
                    numbers.push(parseInt(number));
                    number = '';
                }
                break;
            case ')':
                operators.push(')');
                if (number.length > 0) {
                    numbers.push(parseInt(number));
                    number = '';
                }
                break;
            default:
                number += line[i];
                if(i==line.length-1){
                    numbers.push(parseInt(number));
                }
                break;
        }
    }
}

module.exports = {
    expressionCalculator
}