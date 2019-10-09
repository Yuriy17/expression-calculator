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
            '(': 0,
            ')': 0
        },
        numbers = [],
        pop_number=0;
        number = '',
        operators = [],
        prev_operator = '',
        pop_operator = '',
        line_array = [],
        line = expr.replace(/\s/g, '');
    for (let i; i < line.length; i++) {

        if (line[i] == '+' ||
            line[i] == '-' ||
            line[i] == '*' ||
            line[i] == '/' ||
            line[i] == '(' ||
            line[i] == ')') {
            if (!number.length) {
                numbers.push(parseInt(number));
                number = '';
            }
            if (operators !== null) {
                prev_operator = operators[operators.length - 1];
                if (line[i] == brackets.open) {
                    operators.push(line[i]);

                } else if (line[i] == brackets.close) {
                    while (prev_operator == brackets.open) {
                        pop_operator = operators.pop();
                        pop_number=numbers.pop();
                        switch (pop_operator) {
                            case '+':
                                numbers[numbers.length-1]+=pop_number;
                                break;
                            case '-':
                                numbers[numbers.length-1]-=pop_number;
                                break;
                            case '*':
                                numbers[numbers.length-1]*=pop_number;
                                if(prior[operators[operators.length - 1]]==1){
                                    pop_number=numbers.pop();
                                    if(operators[operators.length - 1]=='+'){
                                        numbers[numbers.length-1]+=pop_number;
                                    }else{
                                        numbers[numbers.length-1]-=pop_number;
                                    }
                                }
                                break;
                            case '/':
                                numbers[numbers.length-1]/=pop_number;
                                if(prior[operators[operators.length - 1]]==1){
                                    pop_number=numbers.pop();
                                    if(operators[operators.length - 1]=='+'){
                                        numbers[numbers.length-1]+=pop_number;
                                    }else{
                                        numbers[numbers.length-1]-=pop_number;
                                    }
                                }
                                break;
                            default:
                                break;
                        }
                    }

                } else if (prior[prev_operator] > prior[line[i]]) {
                    operators.push(line[i]);
                } else {
                    pop_operator = operators.pop();
                    pop_number=numbers.pop();
                    switch (pop_operator) {
                        case '+':
                            numbers[numbers.length-1]+=pop_number;
                            break;
                        case '-':
                            numbers[numbers.length-1]-=pop_number;
                            break;
                        case '*':
                            numbers[numbers.length-1]*=pop_number;
                            if(prior[operators[operators.length - 1]]==1){
                                pop_number=numbers.pop();
                                if(operators[operators.length - 1]=='+'){
                                    numbers[numbers.length-1]+=pop_number;
                                }else{
                                    numbers[numbers.length-1]-=pop_number;
                                }
                            }
                            break;
                        case '/':
                            numbers[numbers.length-1]/=pop_number;
                            if(prior[operators[operators.length - 1]]==1){
                                pop_number=numbers.pop();
                                if(operators[operators.length - 1]=='+'){
                                    numbers[numbers.length-1]+=pop_number;
                                }else{
                                    numbers[numbers.length-1]-=pop_number;
                                }
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
                pop_operator = operators.pop();
                pop_number=numbers.pop();
                switch (pop_operator) {
                    case '+':
                        numbers[numbers.length-1]+=pop_number;
                        break;
                    case '-':
                        numbers[numbers.length-1]-=pop_number;
                        break;
                    case '*':
                        numbers[numbers.length-1]*=pop_number;
                        if(prior[operators[operators.length - 1]]==1){
                            pop_number=numbers.pop();
                            if(operators[operators.length - 1]=='+'){
                                numbers[numbers.length-1]+=pop_number;
                            }else{
                                numbers[numbers.length-1]-=pop_number;
                            }
                        }
                        break;
                    case '/':
                        numbers[numbers.length-1]/=pop_number;
                        if(prior[operators[operators.length - 1]]==1){
                            pop_number=numbers.pop();
                            if(operators[operators.length - 1]=='+'){
                                numbers[numbers.length-1]+=pop_number;
                            }else{
                                numbers[numbers.length-1]-=pop_number;
                            }
                        }
                        break;
                    default:
                        break;
                }
            }
        }

    }
    return numbers[0];
}

module.exports = {
    expressionCalculator
}