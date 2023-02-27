const javascript_sets = [
    {
        edit: false,
        category: "Javascript Sets",
        title: "Check if value is present in Set",
        scenario: `
        Write a function that takes a Set and a value as arguments. Check if the value is present in 
        the Set
        `,
        codeScenario: `
        function myFunction(set, val) {
            return 
        }`,
        javascript: [`
        function myFunction(set, val) {
            return set.has(val);
        }
        `]
    },
    {
        edit: false,
        category: "Javascript Sets",
        title: "Convert a Set to Array",
        scenario: `
        Write a function that takes a Set as argument. Convert the Set to an Array. Return the Array
        `,
        codeScenario: `
        function myFunction(set) {
            return 
        }`,
        javascript: [`
        function myFunction(set) {
            return [...set];
        }
        `]
    },
    {
        edit: false,
        category: "Javascript Sets",
        title: "Get union of two sets",
        scenario: `
        Write a function that takes two Sets as arguments. Create the union of the two sets. Return 
        the result. Tipp: try not to switch to Arrays, this would slow down your code`,
        codeScenario: `
        function myFunction(a, b) {
            return 
        }`,
        javascript: [`
        function myFunction(a, b) {
            const result = new Set(a);
            b.forEach((el) => result.add(el));
            return result;
        }
        `]
    },
    {
        edit: false,
        category: "Javascript Sets",
        title: "Creating Javascript Sets",
        scenario: `
        Write a function that takes three elements of any type as arguments. Create a Set from 
        those elements. Return the result
        `,
        codeScenario: `
        function myFunction(a, b, c) {
            return 
        }`,
        javascript: [`
        function myFunction(a, b, c) {
            const set = new Set();
            set.add(a);
            set.add(b);
            set.add(c);
            return set;
        }
        `]
    },
    {
        edit: false,
        category: "Javascript Sets",
        title: "Delete element from Set",
        scenario: `
        Write a function that takes a Set and a value as argument. If existing in the Set, remove the 
        value from the Set. Return the result
        `,
        codeScenario: `
        function myFunction(set, val) {
            return 
        }`,
        javascript: [`
        function myFunction(set, val) {
            set.delete(val);
            return set;
        }`,`
        function myFunction(set, val) {
            return set.has(val) ? set.delete(val) && set : set;
        }
        `]
    }
]
module.exports = javascript_sets;