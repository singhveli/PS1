/*
Write a function that takes as input each of the following strings in turn:
‘4+2’
‘5*7’
‘6-1’
‘9/2’
This function should
Determine the operator (+, *, -, or /) embedded in the string
Return a function to implement the input operator that returns the result
For example, if the input string is ‘8%3’, return (left, right) => left % right
Execute the returned function to evaluate and print each expression. For example,
const expression = '8%3';
let operator = evaluate(expression);
console.log(`${expression} = ${operator(expression)}`)

You can assume that the format of the input string is fixed (i.e. a digit, an
operator, and a digit, lways the same length).
*/

const getLeft = expLeft => {
    let left = Number(expLeft.charAt(0));
    return left;
}
const getRight = expRight => {
    let right = Number(expRight.charAt(2));
    return right;
}

const evaluate = str => {
    let sym = str.charAt(1);
    switch (sym) {
        case '+':
            return (exp) => {
                return getLeft(exp) + getRight(exp);
            }
            break;
        case '-':
            return (exp) => {
                return getLeft(exp) - getRight(exp);
            }
            break;
        case '*':
            return (exp) => {
                return getLeft(exp) * getRight(exp);
            }
            break;
        case '/':
            return (exp) => {
                return getLeft(exp) / getRight(exp);
            }
            break;
        case '%':
            return (exp) => {
                return getLeft(exp) % getRight(exp);
            }
            break;
    }
}

const expression = '4+2';
let operator = evaluate(expression);
console.log(`${expression} = ${operator(expression)}`)

const expression1 = '5*7';
let operator1 = evaluate(expression1);
console.log(`${expression1} = ${operator1(expression1)}`)

const expression2 = '6-1';
let operator2 = evaluate(expression2);
console.log(`${expression2} = ${operator2(expression2)}`)

const expression3 = '9/2';
let operator3 = evaluate(expression3);
console.log(`${expression3} = ${operator3(expression3)}`)
