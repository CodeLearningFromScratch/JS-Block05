

console.log('------------------------------------- Block 05 start --------------------------------------------------------')

// Ex 1
function calc_1(num1, num2, operator_1) {
    if (operator_1 === "+") {
        return num1 + num2;
    } else if (operator_1 === "-") {
        return num1 - num2;
    } else if (operator_1 === "*") {
        return num1 * num2;
    } else if (operator_1 === "/") {
        return num1 / num2;
    } else {
        return "wrong data provided";
    }
}

console.log('Ex 1:', calc_1(5, 15, "+"))  // 20  
console.log('Ex 1:', calc_1(50, 15, "-"))  // 35 
console.log('Ex 1:', calc_1(50, 2, "*"))  // 100  
console.log('Ex 1:', calc_1(500, 2, "/"))  // 250  
console.log('Ex 1:', calc_1(500, 2))  // ("wrong data provided");

console.log('------------------------------------------------------------------')

// Ex 2
    function calc_2(num_1, num_2, operator_2) {
            let operatorArr = ['+', '-', '/', '*'];
            operator_2 = !operatorArr.includes(num_2) ? operator_2 : num_2;
            num_2 = !isNaN(num_2) ? num_2 : operatorArr.includes(num_2) ? (['/', '*'].includes(num_2) ? 1 : 0) : undefined;
            switch (operator_2) {
                case "*":
                    return num_1 * num_2;
                    break;
                case "/":
                    return num_1 / num_2;
                    break;
                case "-":
                    return num_1 - num_2;
                    break;
                case "+":
                    return num_1 + num_2;
                    break;
                default:
                    return "wrong data provided";
            }
        }
        console.log('Ex 2:', calc_2(5, 15, "+"))  // 20  
        console.log('Ex 2:', calc_2(500, "+"))    // 500  
        console.log('Ex 2:', calc_2(10, "/"))  // 10 

console.log('------------------------------------------------------------------')

// Ex 3
function filter(array, type, minLength) {
    let newArr = array.filter(function (element) {
        if (typeof element !== type && String(element).length >= minLength) {
            return true;
        } else {
            return false;
        }
    });

    return newArr;
}

console.log('Ex 3:', filter(
    [
        "sdads",
        "sadsasadasddsaddsadadsasd",
        44,
        [1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    ],
    "object",
    3
));
// ["sdads", "sadsasadasddsaddsadadsasd"]; 

console.log('------------------------------------------------------------------')

// Ex 4
// EMPTY

console.log('------------------------------------------------------------------')

// Ex 5
// EMPTY

console.log('------------------------------------------------------------------')

// Ex 6
// EMPTY

console.log('------------------------------------------------------------------')

// Ex 7
// EMPTY

console.log('------------------------------------------------------------------')

// Ex 8
// EMPTY

console.log('------------------------------------- Block 05 end --------------------------------------------------------')