const operators = [
    {
        edit: false,
        category: "operators",
        title: "Comparison operators - Equal",
        scenario: `
        In the console.log() statement below we use the Equal operator to check whether numOne and numTwo have the same value. Change the code so that the console.log() statement logs true.
        `,
        codeScenario: `
        const numOne = 5;
        const numTwo = 6;
        console.log(numOne == numTwo);
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
        codeScenario: `
        const numOne = 5;
        const numTwo = 5;
        console.log(numOne != numTwo);
        `,
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
        codeScenario: `
        const numOne = 5;
        const numTwo = 6;
        console.log(numOne > numTwo);
        `,
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
        codeScenario: `
        const numOne = 2;
        const numTwo = 1;
        console.log(numOne < numTwo);
        `,
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
        codeScenario: `
        const numOne = 3;
        const numTwo = 4;
        const numThree = 2;
        console.log(numOne >= numTwo, numTwo >= numThree);
        `,
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
        codeScenario: `
        const numOne = 1;
        const numTwo = 4;
        const numThree = 2;
        console.log(numOne <= numTwo, numTwo <= numThree);
        `,
        javascript: [`
        const numOne = 1;
        const numTwo = 1;
        const numThree = 2;
        console.log(numOne <= numTwo, numTwo <= numThree);
        `]
    }
]
module.exports = operators;