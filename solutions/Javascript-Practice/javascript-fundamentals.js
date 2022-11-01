const javascript_fundamentals = [
    {
        edit: true,
        category: "Javascript fundamentals",
        title: "Sum two numbers",
        scenario: `
        Write a function that takes two numbers (a and b) as argument
        Sum a and b
        Return the result`,
        javascript: [`
        function myFunction(a, b) {
            return a + b;
        }`]
    },
    {
        edit: false,
        category: "Javascript fundamentals",
        title: "Comparison operators, strict equality",
        scenario: `
        Write a function that takes two values, say a and b, as arguments
        Return true if the two values are equal and of the same type`,
        javascript: [`
        function myFunction(a, b) {
            return a === b;
        }`]
    },
    {
        edit: false,
        category: "Javascript fundamentals",
        title: "Get type of value",
        scenario: `
        Write a function that takes a value as argument
        Return the type of the value`,
        javascript: [`
        function myFunction(a) {
            return typeof a;
        }`]
    },
    {
        edit: false,
        category: "Javascript fundamentals",
        title: "Get nth character of string",
        scenario: `
        Write a function that takes a string (a) and a number (n) as argument
        Return the nth character of 'a'        `,
        javascript: [`
        function myFunction(a, n) {
            return a[n - 1];
        }`]
    },
    {
        edit: false,
        category: "Javascript fundamentals",
        title: "Remove first n characters of string",
        scenario: `
        Write a function that takes a string (a) as argument
        Remove the first 3 characters of a
        Return the result`,
        javascript: [`
        function myFunction(a) {
            return a.slice(3);
        }`]
    },
    {
        edit: false,
        category: "Javascript fundamentals",
        title: "Get first n characters of string",
        scenario: `
        Write a function that takes a string (a) as argument
        Get the first 3 characters of a
        Return the result`,
        javascript: [`
        function myFunction(a) {
            return a.slice(0, 3);
        }`]
    },
    {
        edit: false,
        category: "Javascript fundamentals",
        title: "Find the position of one string in another",
        scenario: `
        Write a function that takes a string as argument
        The string contains the substring 'is'
        Return the index of 'is'`,
        javascript: [`
        function myFunction(a) {
            return a.indexOf('is');
        }`]
    },
    {
        edit: false,
        category: "Javascript fundamentals",
        title: "Extract first half of string",
        scenario: `
        Write a function that takes a string (a) as argument
        Extract the first half a
        Return the result`,
        javascript: [`
        function myFunction(a) {
            return a.slice(0, a.length / 2);
        }`]
    }
]
module.exports = javascript_fundamentals;