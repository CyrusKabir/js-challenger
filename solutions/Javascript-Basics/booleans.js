const booleans = [
    {
        edit: false,
        category: "booleans",
        title: "Assign boolean to a variable",
        scenario: `
        Here, we declare the variable isTrue. But, it has no value yet. Assign a boolean value to it and run the code.
        `,
        codeScenario: `
        let isTrue;

        console.log(isTrue);
        `,
        javascript: [`
        let isTrue;
        isTrue = true;
        console.log(isTrue);
        `]
    },
    {
        edit: false,
        category: "booleans",
        title: "Convert Number to Boolean",
        scenario: `
        Here, we declare the variable num and assign it the value 5. We also declare the variable bool which we assign the boolean 
        representation of num.
        Extend the code such that the console.log() statement logs false.`,
        codeScenario: `
        let num = 5;
        
        const bool = Boolean(bool);
        console.log(bool);
        `,
        javascript: [`
        let num = 5;
        num = 0;
        const bool = Boolean(bool);
        console.log(bool);
        `]
    },
    
]
module.exports = booleans;