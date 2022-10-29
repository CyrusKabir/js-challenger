const operators = [
    {
        edit: false,
        category: "operators",
        title: "Comparison operators - Equal",
        scenario: `
        In the console.log() statement below we use the Equal operator to check whether numOne and numTwo have the same value. Change the code so that the console.log() statement logs true.
        `,
        javascript: [`
        const numOne = 5;
        const numTwo = 5;
        console.log(numOne == numTwo);
        `]
    },
    {
        edit: false,
        category: "operators",
        title: "Comparison operators - Not Equal",
        scenario: `
        In the console.log() statement below we use the Not Equal operator to check whether numOne and numTwo have different values. Change the code so that the console.log() statement logs true.        `,
        javascript: [`
        const numOne = 5;
        const numTwo = 6;
        console.log(numOne != numTwo);
        `]
    },
    {
        edit: false,
        category: "operators",
        title: "Comparison operators - Greater than",
        scenario: `
        In the console.log() statement below we use the Greater Than operator to check whether the value of numOne is greater than the value of numTwo. Change the code so that the console.log() statement logs true.        `,
        javascript: [`
        const numOne = 6;
        const numTwo = 5;
        console.log(numOne > numTwo);
        `]
    },
    {
        edit: false,
        category: "operators",
        title: "Comparison operators - Less than",
        scenario: `
        In the console.log() statement below we use the Less Than operator to check whether the value of numOne is less than the value of numTwo. Change the code so that the console.log() statement logs true.        `,
        javascript: [`
        const numOne = 1;
        const numTwo = 2;
        console.log(numOne < numTwo);
        `]
    },
    {
        edit: false,
        category: "operators",
        title: "Comparison operators - Greater than or equal",
        scenario: `
        In the console.log() statement below we use the Greater Than Or Equal operator to check whether the value of numOne is greater than or equal the value of numTwo. It also checks whether the value of numTwo is greater than or equal the value of numThree. Change the code so that both expressions in the console.log() statement logs true.        `,
        javascript: [`
        const numOne = 3;
        const numTwo = 2;
        const numThree = 2;
        console.log(numOne >= numTwo, numTwo >= numThree);
        `]
    },
    {
        edit: false,
        category: "operators",
        title: "Comparison operators - Less than or equal",
        scenario: `
        In the console.log() statement below we use the Less Than Or Equal operator to check whether the value of numOne is less than or equal the value of numTwo. It also checks whether the value of numTwo is less than or equal the value of numThree. Change the code so that both expressions in the console.log() statement logs true.        `,
        javascript: [`
        const numOne = 1;
        const numTwo = 1;
        const numThree = 2;
        console.log(numOne <= numTwo, numTwo <= numThree);
        `]
    },
    {
        edit: false,
        category: "operators",
        title: "Logical operators - logical AND",
        scenario: `
        You can chain multiple comparison operators using the logical AND (&&) operator. In the code below, result will only have the value true if both comparison expressions evaluate to true.
        Adjust the code below such that result will have the value true.
        `,
        javascript: [`
        const numOne = 13;
        const numTwo = 13;
        const result = numOne > 12 && numTwo > 12;
        console.log(result);
        `]
    },
    {
        edit: false,
        category: "operators",
        title: "Arithmetic operators - Addition",
        scenario: `
        In the code below we calculate the sum of numOne and numTwo with the Addition operator +. Then, the console.log() statement checks whether the sum equals 10. Change the code so that the console.log() statement logs true.        `,
        javascript: [`
        const numOne = 4;
        const numTwo = 6;
        const sum = numOne + numTwo;
        console.log(sum == 10);
        `]
    },
    {
        edit: false,
        category: "operators",
        title: "Arithmetic operators - Subtraction",
        scenario: `
        In the code below we calculate the difference of numOne and numTwo with the Substraction operator -. Then, the console.log() statement checks whether the difference equals 5. Change the code so that the console.log() statement logs true.        `,
        javascript: [`
        const numOne = 9;
        const numTwo = 4;
        const dif = numOne - numTwo;
        console.log(dif == 5);
        `]
    },
    {
        edit: false,
        category: "operators",
        title: "Arithmetic operators - Multiplication",
        scenario: `
        In the code below we calculate the product of numOne and numTwo with the Multiplication operator *. Then, the console.log() statement checks whether the product equals 81. Change the code so that the console.log() statement logs true.        `,
        javascript: [`
        const numOne = 9;
        const numTwo = 9;
        const product = numOne * numTwo;
        console.log(product == 81);
        `]
    },
    {
        edit: false,
        category: "operators",
        title: "Arithmetic operators - Division",
        scenario: `
        In the code below we divide numOne by numTwo with the Division operator /. Then, the console.log() statement checks whether the quotient equals 9. Change the code so that the console.log() statement logs true.        `,
        javascript: [`
        const numOne = 81;
        const numTwo = 9;
        const quotient = numOne / numTwo;
        console.log(quotient == 9);
        `]
    },
    {
        edit: false,
        category: "operators",
        title: "Arithmetic operators - Exponential",
        scenario: `
        In the code below we calculate numOne to the power of numTwo with the Exponential operator **. Then, the console.log() statement checks whether the result of this calculation equals 8. Change the code so that the console.log() statement logs true.        `,
        javascript: [`
        const numOne = 2;
        const numTwo = 3;
        const res = numOne**numTwo;
        console.log(res == 8);
        `]
    },
    
]
module.exports = operators;