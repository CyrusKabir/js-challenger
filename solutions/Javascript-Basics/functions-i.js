const functions_i = [
    {
        edit: false,
        category: "functions I",
        title: "Function declaration",
        scenario: `
        In this exercise we will work with our first JavaScript function. In the code below we create a function named func. This way of creating functions is called function declaration: the keyword function followed by the name of the function and a pair of parentheses. Then follows some JavaScript code wrapped by curly braces.
        Notice that we use the return keyword to make the function return a value, in this case a string.
        When we create a function in JavaScript, the statement inside the curly braces is exectued only when the function is called. You can call a function by using its name and a pair of parentheses func().
        Below, we call our function and assign its return value to the variable result. Then, we log the result. To solve this exercise simply have the console.log() statement log the words hello world.
        `,
        codeScenario: `
        function func() {
            return 'hello';
        };
        const result = func();
        console.log(result);
        `,
        javascript: [`
        function func() {
            return 'hello world';
        };
        const result = func();
        console.log(result);`]
    }
    ,{
        edit: false,
        category: "functions I",
        title: "Function expression",
        scenario: `
        In this exercise, we use a slightly different way to create a function – a function expression. Here, we create a function and assign it to the variable func. Notice that we omit the name of the function after the function keyword. We call this function the same way as in the previous exercise. But, instead of using the name of the function itself, we call it using the name of the variable to which the function was assigned.
        In the code below, we introduced a small mistake when calling the function. Find the mistake and run the code to see if the words hello world are correctly logged.        `,
        codeScenario: `
        const func = function() {
            return 'hello world';
        };
        const result = func;
        console.log(result);
        `,
        javascript: [`
        const func = function() {
            return 'hello world';
        };
        const result = func();
        console.log(result);`]
    }
    ,{
        edit: false,
        category: "functions I",
        title: "Correctly return value from function 1",
        scenario: `
        In this exercise, we create a function func. Then, we call func and assign its return value to the variable result.
        When you run the code like this, you see that the value undefined is logged. This is the current return value of func because we do not explicitly define a return value ourselfs.
        Let func return the value of the variable text.        `,
        codeScenario: `
        const func = function() {
            let text = 'hello';
            text = text + ' world';
        };
        const result = func();
        console.log(result);
        `,
        javascript: [`
        const func = function() {
            let text = 'hello';
            text = text + ' world';
            return text;
        };
        const result = func();
        console.log(result);`]
    }
    ,{
        edit: false,
        category: "functions I",
        title: "Correctly return value from function 2",
        scenario: `
        In this exercise, func declares a variable text with the value hello. Then it returns the value of text. After that, it assigns a new value hello world to the variable text and returns the new value.
        But, when you run the code, you see that only the initial value of text (hello) is logged. This is because once a function call reaches a return statement, further function execution is stopped. All code after the return statement is ignored.
        Adjust the code so that the final value of text is logged.        `,
        codeScenario: `
        const func = function () {
            let text = 'hello';
            return text;
            text = text + ' world';
            return text;
        };
        const result = func();
        console.log(result);
        `,
        javascript: [`
        const func = function () {
            let text = 'hello';
            text = text + ' world';
            return text;
        };
        const result = func();
        console.log(result);
        `]
    }
]
module.exports = functions_i;