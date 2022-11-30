const javascript_dates = [
    {
        edit: false,
        category: "Javascript dates",
        title: "Check if two dates are equal",
        scenario: `
        Sounds easy, but you need to know the trick. Write a function that takes two date instances as 
        arguments. It should return true if the dates are equal. It should return false otherwise.
        `,
        javascript: [`
        function myFunction(a, b) {
            return a.getTime() === b.getTime();
        }`,`
        function myFunction(a, b) {
            return a - b === 0;
        }
        `]
    }
]
module.exports = javascript_dates;