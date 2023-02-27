const javascript_arrays = [
    {
        edit: false,
        category: "Javascript arrays",
        title: "Get nth element of array",
        scenario: `
        Write a function that takes an array (a) and a value (n) as argument. Return the nth element of 'a'
        `,
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
        category: "Javascript arrays",
        title: "Remove first n elements of an array",
        scenario: `
        Write a function that takes an array (a) as argument. Remove the first 3 elements of 'a'. Return the 
        result`,
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
        category: "Javascript arrays",
        title: "Get last n elements of an array",
        scenario: `
        Write a function that takes an array (a) as argument. Extract the last 3 elements of 'a'. Return the 
        resulting array`,
        codeScenario: `
        function myFunction(a) {
            return 
        }`,
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
        category: "Javascript arrays",
        title: "Return last n array elements",
        scenario: `
        Write a function that takes an array (a) and a number (n) as arguments. It should return the last n 
        elements of a.`,
        codeScenario: `
        function myFunction(a, n) {
            return 
        }`,
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
        codeScenario: `
        function myFunction( a, b ) {
            return 
        }`,
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
        codeScenario: `
        function myFunction(a) {
            return 
        }`,
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
        codeScenario: `
        function myFunction(a) {
            return 
        }`,
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
        codeScenario: `
        function myFunction(arr) {
            return 
        }`,
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
        codeScenario: `
        function myFunction( arr ) {
            return 
        }`,
        javascript: [`
        function myFunction( arr ) {
            // > 0 => sort a after b
            // < 0 => sort a before b
            // === 0 => keep original order of a and b
            return arr.sort((a, b) => b - a)
        }`]
    },
    {
        edit: false,
        category: "Javascript arrays",
        title: "Calculate the sum of an array of numbers",
        scenario: `
        Write a function that takes an array of numbers as argument. It should return the sum of the 
        numbers.`,
        codeScenario: `
        function myFunction(a) {
            return 
        }`,
        javascript: [`
        function myFunction(a) {
            return a.reduce((acc, cur) => acc + cur, 0);
        }`]
    },
    {
        edit: false,
        category: "Javascript arrays",
        title: "Return the average of an array of numbers",
        scenario: `
        Write a function that takes an array of numbers as argument. It should return the average of the 
        numbers.`,
        codeScenario: `
        function myFunction( arr ) {
            return 
        }`,
        javascript: [`
        function myFunction( arr ) {
            return arr.reduce((acc, cur) => acc + cur, 0) / arr.length
        }`]
    },
    {
        edit: false,
        category: "Javascript arrays",
        title: "Return the longest string from an array of strings",
        scenario: `
        Write a function that takes an array of strings as argument. Return the longest string.`,
        codeScenario: `
        function myFunction( arr ) {
            return 
        }`,
        javascript: [`
        function myFunction( arr ) {
            return arr.reduce((a, b) => a.length <= b.length ? b : a)
        }`]
    },
    {
        edit: false,
        category: "Javascript arrays",
        title: "Check if all array elements are equal",
        scenario: `
        Write a function that takes an array as argument. It should return true if all elements in the array are 
        equal. It should return false otherwise.
        `,
        codeScenario: `
        function myFunction( arr ) {
            return 
        }`,
        javascript: [`
        function myFunction( arr ) {
            return new Set(arr).size === 1;
        }`]
    },
    {
        edit: false,
        category: "Javascript arrays",
        title: "Merge an arbitrary number of arrays",
        scenario: `
        Write a function that takes arguments an arbitrary number of arrays. It should return an array 
        containing the values of all arrays.
        `,
        codeScenario: `
        function myFunction(...arrays) {
            return 
        }`,
        javascript: [`
        function myFunction(...arrays) {
            return arrays.flat();
        }`]
    },
    {
        edit: false,
        category: "Javascript arrays",
        title: "Sort array by object property",
        scenario: `
        Write a function that takes an array of objects as argument. Sort the array by property b in ascending 
        order. Return the sorted array
        `,
        codeScenario: `
        function myFunction(arr) {
            return 
        }`,
        javascript: [`
        function myFunction(arr) {
            // > 0 => sort a after b
            // < 0 => sort a before b
            // === 0 => keep original order of a and b
            const sort = (x, y) => x.b - y.b;
            return arr.sort(sort);
        }`]
    },
    {
        edit: false,
        category: "Javascript arrays",
        title: "Merge two arrays with duplicate values",
        scenario: `
        Write a function that takes two arrays as arguments. Merge both arrays and remove duplicate values. 
        Sort the merge result in ascending order. Return the resulting array
        `,
        codeScenario: `
        function myFunction(a, b) {
            return 
        }`,
        javascript: [`
        function myFunction(a, b) {
            return [...new Set([...a, ...b])].sort((x, y) => x - y);
        }`,`
        function myFunction(a, b) {
            let merged = a.concat(b);
            let noDuplicate = Array.from(new Set(merged));
            let sorted = noDuplicate.sort((a, b) => a - b);
            return sorted;
        }
        `]
    },
]
module.exports = javascript_arrays;