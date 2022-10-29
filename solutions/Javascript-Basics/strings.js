const strings = [
    {
        edit: false,
        category: "strings",
        title: "Create a Javascript string",
        scenario: `
        In this exercise the existing console.log() statement logs the value of the variable text. The variable text has already been declared with an empty string – as indicated by the two single quotes.
        Fill in the string with some characters and run the code to see if the string is being logged.
        `,
        javascript: [`
        const text = 'hello world';
        console.log('The value of text is: ' + text);
        `]
    },
    {
        edit: false,
        category: "strings",
        title: "Different ways to create Javascript strings",
        scenario: `
        Here, we have declared 3 variables textOne, textTwo, and textThree. An empty string is assigned to all of them.
        Do you see how in each case different symbols are used to create the string? All three of them are valid methods to create a JavaScript string.
        Fill in all 3 strings with some characters and run the code to see if the values get logged.In this exercise the existing console.log() statement logs the value of the variable text. The variable text has already been declared with an empty string – as indicated by the two single quotes.
        Fill in the string with some characters and run the code to see if the string is being logged.
        `,
        javascript: [`
        const textOne = 'Hello, ';
        const textTwo = "it's ";
        const textThree = \`me\`;
        console.log('The value of text is: ' + text);
        `]
    },
    {
        edit: false,
        category: "strings",
        title: "Connect Javascript strings 1",
        scenario: `
        After we have learnt how to create JavaScript strings, we will now connect 2 strings together. In the code below we use the Addition (+) operator to concatenate textOne and textTwo. The console.log() statement logs the resulting string. Currently, the result would be HelloWorld.
        Change the code below so that the value of res is Hello World
        `,
        javascript: [`
        const textOne = 'Hello';
        const textTwo = 'World';
        const combined = textOne + ' ' + textTwo;
        console.log(combined);
        `]
    },
]
module.exports = strings;