const javascript_dates = [
    {
        edit: false,
        category: "Javascript dates",
        title: "Check if two dates are equal",
        scenario: `
        Sounds easy, but you need to know the trick. Write a function that takes two date instances as 
        arguments. It should return true if the dates are equal. It should return false otherwise.
        `,
        codeScenario: `
        function myFunction(a, b) {
            return 
        }`,
        javascript: [`
        function myFunction(a, b) {
            return a.getTime() === b.getTime();
        }`,`
        function myFunction(a, b) {
            return a - b === 0;
        }
        `]
    },
    {
        edit: false,
        category: "Javascript dates",
        title: "Return the number of days between two dates",
        scenario: `
        Write a function that takes two date instances as argument. It should return the number of days that 
        lies between those dates.
        `,
        codeScenario: `
        function myFunction(a, b) {
            return 
        }`,
        javascript: [`
        function myFunction(a, b) {
            const dif = Math.abs(a - b);
            return dif / 1000 / 60 / 60 / 24
        }`,`
        functiion myFunction(a, b) {
            return Math.abs( (a.getTime() / 86400000) - (b.getTime() / 86400000) )
        }`]
    },
    {
        edit: false,
        category: "Javascript dates",
        title: "Check if two dates fall on the exact same day",
        scenario: `
        Write a function that takes two date instances as argument. It should return true if they fall on the 
        exact same day. It should return false otherwise.
        `,
        codeScenario: `
        function myFunction(a, b) {
            return 
        }`,
        javascript: [`
        function myFunction(a, b) {
            return a.getFullYear() === b.getFullYear() &&
                   a.getMonth() === b.getMonth() &&
                   a.getDate()=== b.getDate()
        }`]
    }
]
module.exports = javascript_dates;