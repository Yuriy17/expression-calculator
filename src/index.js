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
        pop_number = 0,
        number = '',
        operators = [],
        prev_operator = '',
        pop_operator = '',
        line_array = [],
        line = expr.replace(/\s/g, '');
    for (let i = 0; i < line.length; i++) {

         if (line[i] == '+' ||
            line[i] == '-' ||
            line[i] == '*' ||
            line[i] == '/' ||
            line[i] == '(' ||
            line[i] == ')') {
            if (number.length) {
                numbers.push(parseInt(number));
                number = '';
            }
            if (operators.length) {
                prev_operator = operators[operators.length - 1];
                if (line[i] == brackets.open) {
                    operators.push(line[i]);

                } else if (line[i] == brackets.close) {
                    if (operators.includes(brackets.open)) {
                        while (prev_operator == brackets.open) {
                            pop_operator = operators.pop();
                            pop_number = numbers.pop();
                            switch (pop_operator) {
                                case '+':
                                    numbers[numbers.length - 1] += pop_number;
                                    break;
                                case '-':
                                    numbers[numbers.length - 1] -= pop_number;
                                    break;
                                case '*':
                                    numbers[numbers.length - 1] *= pop_number;
                                    if (prior[operators[operators.length - 1]] == 1 && prior[line[i]] == 1) {
                                        pop_number = numbers.pop();
                                        if (operators[operators.length - 1] == '+') {
                                            numbers[numbers.length - 1] += pop_number;
                                            pop_operator = operators.pop();
                                        } else {
                                            numbers[numbers.length - 1] -= pop_number;
                                            pop_operator = operators.pop();
                                        }
                                    }
                                    break;
                                case '/':
                                    if (pop_number) {
                                        numbers[numbers.length - 1] /= pop_number;
                                        if (prior[operators[operators.length - 1]] == 1 && prior[line[i]] == 1) {
                                            pop_number = numbers.pop();
                                            if (operators[operators.length - 1] == '+') {
                                                numbers[numbers.length - 1] += pop_number;
                                                pop_operator = operators.pop();
                                            } else {
                                                numbers[numbers.length - 1] -= pop_number;
                                                pop_operator = operators.pop();
                                            }
                                        }
                                    } else {
                                        throw new Error("TypeError: Division by zero.");
                                    }
                                    break;
                                default:
                                    break;
                            }
                        }
                    } else {
                        throw new Error("ExpressionError: Brackets must be paired");
                    }

                } else if (prior[prev_operator] < prior[line[i]]) {
                    operators.push(line[i]);
                } else {
                    pop_operator = operators.pop();
                    pop_number = numbers.pop();
                    switch (pop_operator) {
                        case '+':
                            numbers[numbers.length - 1] += pop_number;
                            break;
                        case '-':
                            numbers[numbers.length - 1] -= pop_number;
                            break;
                        case '*':
                            numbers[numbers.length - 1] *= pop_number;
                            if (prior[operators[operators.length - 1]] == 1 && prior[line[i]] == 1) {
                                pop_number = numbers.pop();
                                if (operators[operators.length - 1] == '+') {
                                    numbers[numbers.length - 1] += pop_number;
                                    pop_operator = operators.pop();
                                } else {
                                    numbers[numbers.length - 1] -= pop_number;
                                    pop_operator = operators.pop();
                                }
                            }
                            break;
                        case '/':
                            if (pop_number) {
                                numbers[numbers.length - 1] /= pop_number;
                                if (prior[operators[operators.length - 1]] == 1 && prior[line[i]] == 1) {
                                    pop_number = numbers.pop();
                                    if (operators[operators.length - 1] == '+') {
                                        numbers[numbers.length - 1] += pop_number;
                                        pop_operator = operators.pop();
                                    } else {
                                        numbers[numbers.length - 1] -= pop_number;
                                        pop_operator = operators.pop();
                                    }
                                }
                            } else {
                                throw new Error("TypeError: Division by zero.");
                            }
                            break;
                        default:
                            break;
                    }
                    operators.push(line[i]);
                }
            } else {
                operators.push(line[i]);
            }

        } else {
            number += line[i];
            if (i == line.length - 1) {
                numbers.push(parseInt(number));
                while (numbers.length > 1) {
                    pop_operator = operators.pop();
                    pop_number = numbers.pop();
                    switch (pop_operator) {
                        case '+':
                            numbers[numbers.length - 1] += pop_number;
                            break;
                        case '-':
                            numbers[numbers.length - 1] -= pop_number;
                            break;
                        case '*':
                            numbers[numbers.length - 1] *= pop_number;
                            if (prior[operators[operators.length - 1]] == 1 && prior[line[i]] == 1) {
                                pop_number = numbers.pop();
                                if (operators[operators.length - 1] == '+') {
                                    numbers[numbers.length - 1] += pop_number;
                                    pop_operator = operators.pop();
                                } else {
                                    numbers[numbers.length - 1] -= pop_number;
                                    pop_operator = operators.pop();
                                }
                            }
                            break;
                        case '/':
                            if (pop_number) {
                                numbers[numbers.length - 1] /= pop_number;
                                if (prior[operators[operators.length - 1]] == 1 && prior[line[i]] == 1) {
                                    pop_number = numbers.pop();
                                    if (operators[operators.length - 1] == '+') {
                                        numbers[numbers.length - 1] += pop_number;
                                        pop_operator = operators.pop();
                                    } else {
                                        numbers[numbers.length - 1] -= pop_number;
                                        pop_operator = operators.pop();
                                    }
                                }
                                break;
                            } else {
                                throw new Error("TypeError: Division by zero.");
                            }
                            default:
                                break;
                    }
                }
            }
        }

    }
    return numbers[0];
}

module.exports = {
    expressionCalculator
}