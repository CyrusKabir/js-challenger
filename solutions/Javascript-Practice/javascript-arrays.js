const javascript_arrays = [
    {
        edit: false,
        category: "Javascript arrays",
        title: "Get nth element of array",
        scenario: `
        Write a function that takes an array (a) and a value (n) as argument. Return the nth element of 'a'
        `,
        javascript: [`
        function myFunction(a, n) {
            return a[n - 1];
        }`]
    },
    {
        edit: false,
        category: "Javascript arrays",
        title: "Remove first n elements of an array",
        scenario: `
        Write a function that takes an array (a) as argument. Remove the first 3 elements of 'a'. Return the 
        result`,
        javascript: [`
        function myFunction(a) {
            return a.slice(3);
        }`]
    },
    {
        edit: false,
        category: "Javascript arrays",
        title: "Get last n elements of an array",
        scenario: `
        Write a function that takes an array (a) as argument. Extract the last 3 elements of 'a'. Return the 
        resulting array`,
        javascript: [`
        function myFunction(a) {
            return a.slice(-3);
        }`]
    },
    {
        edit: false,
        category: "Javascript arrays",
        title: "Get first n elements of an array",
        scenario: `
        Write a function that takes an array (a) as argument. Extract the first 3 elements of a. Return the 
        resulting array`,
        javascript: [`
        function myFunction(a) {
            return a.slice(0, 3);
        }`]
    },
    {
        edit: false,
        category: "Javascript arrays",
        title: "Return last n array elements",
        scenario: `
        Write a function that takes an array (a) and a number (n) as arguments. It should return the last n 
        elements of a.`,
        javascript: [`
        function myFunction(a, n) {
            return a.slice(-n);
        }`]
    },
    {
        edit: false,
        category: "Javascript arrays",
        title: "Remove a specific array element",
        scenario: `
        Write a function that takes an array (a) and a value (b) as argument. The function should remove all 
        elements equal to 'b' from the array. Return the filtered array.`,
        javascript: [`
        function myFunction( a, b ) {
            return a.filter(arrItem => arrItem !== b)
        }`]
    },
    {
        edit: false,
        category: "Javascript arrays",
        title: "Count number of elements in JavaScript array",
        scenario: `Write a function that takes an array (a) as argument. Return the number of elements in a.`,
        javascript: [`
        function myFunction(a) {
            return a.length;
        }`]
    },
    {
        edit: false,
        category: "Javascript arrays",
        title: "Count number of negative values in array",
        scenario: `Write a function that takes an array of numbers as argument. Return the number of negative values 
        in the array.`,
        javascript: [`
        function myFunction(a) {
            return a.filter((el) => el < 0).length;
        }`,`
        function myFunction(a) {
            const isNegative = num => num < 0;
            return a.filter(isNegative).length;
        }
        `]
    },
    {
        edit: false,
        category: "Javascript arrays",
        title: "Sort an array of strings alphabetically",
        scenario: `
        Write a function that takes an array of strings as argument. Sort the array elements alphabetically. 
        Return the result.`,
        javascript: [`
        function myFunction(arr) {
            return arr.sort();
        }`]
    },
    {
        edit: false,
        category: "Javascript arrays",
        title: "Sort an array of numbers in descending order",
        scenario: `
        Write a function that takes an array of numbers as argument. It should return an array with the 
        numbers sorted in descending order.`,
        javascript: [`
        function myFunction( arr ) {
            // > 0 => sort a after b
            // < 0 => sort a before b
            // === 0 => keep original order of a and b
            return arr.sort((a, b) => b - a)
        }`]
    },
]
module.exports = javascript_arrays;