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
]
module.exports = javascript_fundamentals;