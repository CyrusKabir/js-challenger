const variables = [
    {
        edit: false,
        category: "variables",
        title: "Accessing a variable 1",
        scenario: `
        In this simple exercise we declare a variable called num and assign it a value of 5. Then we try to log the value of the variable using the console.log() method.
        But, the console.log() method contains a small mistake. If you try the run the code, you will see an error message.
        Fix the mistake and run the code again.
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
        This exercise is very similar to the previous one. We declare a variable called num, assign it a value of 5, and try to log it. But again, we introduced a small mistake.
        Fix the code and run it.
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
        In this exercise we practice how to declare a new variable and how to assign it a number. The console.log() statement below attempts to log a variable named num.
        Declare a variable with this name and assign it a number of your choice. Run the code to see if the number is being logged.
        `,
        javascript: [`
        const num = 5;
        console.log('The value of num is: ' + num);
        `]
    },
    {
        edit: false,
        category: "variables",
        title: "Reassign a value to a variable 1",
        scenario: `
        The code below first declares a variable named text with a string value hello. Then, a new value bye is assigned. Finally, the variable is logged.
        But, the code will not work like that. Find the mistake and fix it. Execute the corrected code.
        `,
        javascript: [`
        let text = 'hello';
        text = 'bye';
        console.log(text);
        `]
    },
    {
        edit: false,
        category: "variables",
        title: "Reassign a value to a variable 2",
        scenario: `
        Here again, we want to assign a new value to a variable that we previously declared. Again, the code will not work the way it is. Find the mistake and fix it. Execute the corrected code.
        `,
        javascript: [`
        let text = 'hello';
        text = 'hello world';
        console.log(text);
        `]
    },
    
]
module.exports = variables;