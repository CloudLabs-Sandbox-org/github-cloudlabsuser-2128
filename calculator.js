const readline = require('readline');

// Basic Calculator Implementation


// Create interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to perform calculations
function calculate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num2 !== 0 ? num1 / num2 : 'Error: Division by zero';
        default:
            return 'Error: Invalid operator';
    }
}

// Function to handle user interaction
function startCalculator() {
    rl.question('Enter the first number: ', (firstInput) => {
        const num1 = parseFloat(firstInput);

        rl.question('Enter the operator (+, -, *, /): ', (operator) => {
            rl.question('Enter the second number: ', (secondInput) => {
                const num2 = parseFloat(secondInput);

                const result = calculate(num1, num2, operator);
                console.log(`Result: ${result}`);

                rl.question('Do you want to perform another calculation? (yes/no): ', (answer) => {
                    if (answer.toLowerCase() === 'yes') {
                        startCalculator();
                    } else {
                        console.log('Goodbye!');
                        rl.close();
                    }
                });
            });
        });
    });
}

// Start the calculator
console.log('Welcome to the Basic Calculator!');
startCalculator();