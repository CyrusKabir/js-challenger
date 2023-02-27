const javascript_fundamentals = [
    {
        edit: false,
        category: "Javascript fundamentals",
        title: "Sum two numbers",
        scenario: `
        Write a function that takes two numbers (a and b) as argument
        Sum a and b
        Return the result`,
        codeScenario: `
        function myFunction(a, b) {
            return 
        }`,
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
        codeScenario: `
        function myFunction(a, b) {
            return 
        }`,
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
        codeScenario: `
        function myFunction(a) {
            return 
        }`,
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
        codeScenario: `
        function myFunction(a, n) {
            return 
        }`,
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
        codeScenario: `
        function myFunction(a) {
            return 
        }`,
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
        codeScenario: `
        function myFunction(a) {
            return 
        }`,
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
        codeScenario: `
        function myFunction(a) {
            return 
        }`,
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
        codeScenario: `
        function myFunction(a) {
            return 
        }`,
        javascript: [`
        function myFunction(a) {
            return a.slice(0, a.length / 2);
        }`]
    },
    {
        edit: false,
        category: "Javascript fundamentals",
        title: "Remove last n characters of string",
        scenario: `
        Write a function that takes a string (a) as argument
        Remove the last 3 characters of a
        Return the result`,
        codeScenario: `
        function myFunction(a) {
            return 
        }`,
        javascript: [`
        function myFunction(a) {
            return a.slice(0, -3);
        }`]
    },
    {
        edit: false,
        category: "Javascript fundamentals",
        title: "Return the percentage of a number",
        scenario: `
        Write a function that takes two numbers (a and b) as argument
        Return b percent of a`,
        codeScenario: `
        function myFunction(a, b) {
            return 
        }`,
        javascript: [`
        function myFunction(a, b) {
            return b / 100 * a
        }`]
    },
    {
        edit: false,
        category: "Javascript fundamentals",
        title: "Basic JavaScript math operators",
        scenario: `
        Write a function that takes 6 values (a,b,c,d,e,f) as arguments
        Sum a and b
        Then substract by c
        Then multiply by d and divide by e
        Finally raise to the power of f and return the result
        Tip: mind the order`,
        codeScenario: `
        function myFunction(a, b, c, d, e, f) {
            return 
        }`,
        javascript: [`
        function myFunction(a, b, c, d, e, f) {
            return (((a + b - c) * d) / e) ** f;
        }`]
    },
    {
        edit: false,
        category: "Javascript fundamentals",
        title: "Check whether a string contains another string and concatenate",
        scenario: `
        Write a function that takes two strings (a and b) as arguments. If a contains b, append b to the 
        beginning of a. If not, append it to the end. Return the concatenation`,
        codeScenario: `
        function myFunction(a, b) {
            return 
        }`,
        javascript: [`
        function myFunction(a, b) {
            return a.indexOf(b) === -1 ? a + b : b + a
        }`,`
        function myFunction(a, b) {
            return a.includes(b) ? \`\${b}\${a}\` : \`\${a}\${b}\`
        }`]
    },
    {
        edit: false,
        category: "Javascript fundamentals",
        title: "Check if a number is even",
        scenario: `
        Write a function that takes a number as argument. If the number is even, return true. Otherwise, 
        return false`,
        codeScenario: `
        function myFunction(a) {
            return 
        }`,
        javascript: [`
        function myFunction(a) {
            return a % 2 === 0
        }`]
    },
    {
        edit: false,
        category: "Javascript fundamentals",
        title: "How many times does a character occur?",
        scenario: `
        Write a function that takes two strings (a and b) as arguments. Return the number of times a occurs in 
        b.`,
        codeScenario: `
        function myFunction(a, b) {
            return 
        }`,
        javascript: [`
        function myFunction(a, b) {
            return b.split(a).length - 1
        }`]
    },
    {
        edit: false,
        category: "Javascript fundamentals",
        title: "Check if a number is a whole number",
        scenario: `
        Write a function that takes a number (a) as argument. If a is a whole number (has no decimal place), 
        return true. Otherwise, return false.`,
        codeScenario: `
        function myFunction(a) {
            return 
        }`,
        javascript: [`
        function myFunction(a) {
            return a - Math.floor(a) === 0
        }`,`
        function myFunction(a) {
            return parseInt(a) === a
        }`]
    },
    {
        edit: false,
        category: "Javascript fundamentals",
        title: "Multiplication, division, and comparison operators",
        scenario: `
        Write a function that takes two numbers (a and b) as arguments. If a is smaller than b, divide a by b. 
        Otherwise, multiply both numbers. Return the resulting value`,
        codeScenario: `
        function myFunction(a, b) {
            return 
        }`,
        javascript: [`
        function myFunction(a, b) {
            return a < b ? a / b : a * b
        }`]
    },
    {
        edit: false,
        category: "Javascript fundamentals",
        title: "Round a number to 2 decimal places",
        scenario: `
        Write a function that takes a number (a) as argument. Round a to the 2nd digit after the comma. 
        Return the rounded number`,
        codeScenario: `
        function myFunction(a) {
            return 
        }`,
        javascript: [`
        function myFunction(a) {
            return Number(a.toFixed(2));
        }
        `]
    },
    {
        edit: false,
        category: "Javascript fundamentals",
        title: "Split a number into its digits",
        scenario: `
        Write a function that takes a number (a) as argument. Split a into its individual digits and return 
        them in an array. Tipp: you might want to change the type of the number for the splitting`,
        codeScenario: `
        function myFunction( a ) {
            return 
        }`,
        javascript: [`
        function myFunction( a ) {
            const string = a + '';
            const strings = string.split('');
            return strings.map(digit => Number(digit))
        }`,`
        function myFunction(a) {
            return a.toString()
                    .split('')
                    .map(charNum => parseInt(charNum))
        }
        `]
    }
]
module.exports = javascript_fundamentals;