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
    
]
module.exports = javascript_arrays;