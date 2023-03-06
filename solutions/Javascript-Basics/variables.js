const variables = [
    {
        edit: false,
        category: "variables",
        title: "Reassign a value to a variable",
        scenario: `
        Assign a new value to the variable num. The code will not work the way it is. Find the 
        mistake and fix it. Execute the corrected code.
        `,
        codeScenario: `
        let num = 1;
        let num = 2;
        console.log(num);
        `,
        javascript: [`
        let num = 1;
        num = 2;
        console.log(num);
        `]
    },
    {
        edit: false,
        category: "variables",
        title: "Assign a value to a variable",
        scenario: `
        Here, we declare the variable num. But, it has no value yet. Assign a value to it and run 
        the code.
        `,
        codeScenario: `
        let num;
        console.log(num);
        `,
        javascript: [`
        let num;
        num = 2;
        console.log(num);
        `]
    },
    {
        edit: false,
        category: "variables",
        title: "Assign the value of another variable",
        scenario: `
        Here, we have two variables numOne and numTwo. numOne already has a value. Assign 
        numTwo the value of numOne and run the code.`,
        codeScenario: `
        let numOne = 5;
        let numTwo;
        console.log(numTwo);
        `,
        javascript: [`
        let numOne = 5;
        let numTwo = numOne;
        console.log(numTwo);
        `]
    },
    {
        edit: false,
        category: "variables",
        title: "Create the missing variable",
        scenario: `
        Below, we attempt to assign the value of a variable named numOne to the variable 
        numTwo. But, that variable has not been declared yet. Declare a variable named numOne 
        and run the code.`,
        codeScenario: `
        let numTwo = numOne;
        console.log(numTwo);
        `,
        javascript: [`
        let numOne = 5;
        let numTwo = numOne;
        console.log(numTwo);
        `]
    },
    {
        edit: false,
        category: "variables",
        title: "Accessing a variable 1",
        scenario: `
        In this simple exercise we declare a variable called num and assign it a value of 5. Then 
        we try to log the value of the variable using the console.log() method.
        But, the console.log() method contains a small mistake. If you try the run the code, you 
        will see an error message.
        Fix the mistake and run the code again.
        `,
        codeScenario: `
        const num = 5;
        console.log(Num);
        `,
        javascript: [`
        const num = 5;
        console.log(num);
        `]
    },
    {
        edit: false,
        category: "variables",
        title: "Accessing a variable 2",
        scenario: `
        This exercise is very similar to the previous one. We declare a variable called num, assign 
        it a value of 5, and try to log it. But again, we introduced a small mistake.
        Fix the code and run it.
        `,
        codeScenario: `
        console.log(num);
        const num = 5;
        `,
        javascript: [`
        const num = 5;
        console.log(num);
        `]
    },
    {
        edit: false,
        category: "variables",
        title: "Declare a variable and assign a number",
        scenario: `
        In this exercise we practice how to declare a new variable and how to assign it a number. 
        The console.log() statement below attempts to log a variable named num.
        Declare a variable with this name and assign it a number of your choice. Run the code to 
        see if the number is being logged.
        `,
        codeScenario: `
        console.log('The value of num is: ' + num);
        `,
        javascript: [`
        const num = 5;
        console.log('The value of num is: ' + num);
        `]
    },
    {
        edit: false,
        category: "variables",
        title: "Reassign a value to a variable 2",
        scenario: `
        Here again, we want to assign a new value to a variable that we previously declared. Again, the code will not work the way it is. Find the mistake and fix it. Execute the corrected code.
        `,
        codeScenario: `
        const text = 'hello';
        text = 'hello world';
        console.log(text);
        `,
        javascript: [`
        let text = 'hello';
        text = 'hello world';
        console.log(text);
        `]
    }
]
module.exports = variables;