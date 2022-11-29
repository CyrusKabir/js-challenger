const javascript_objects = [
    {
        edit: false,
        category: "Javascript objects",
        title: "Accessing object properties one",
        scenario: `
        Write a function that takes an object with two properties as argument. It should return the value of 
        the property with key country.
        `,
        javascript: [`
        function myFunction(obj) {
            return obj.country;
        }`]
    },
    {
        edit: false,
        category: "Javascript objects",
        title: "Accessing object properties two",
        scenario: `
        Write a function that takes an object with two properties as argument. It should return the value of 
        the property with key 'prop-2'. Tipp: you might want to use the square brackets property accessor
        `,
        javascript: [`
        function myFunction(obj) {
            return obj['prop-2'];
        }`]
    },
    {
        edit: false,
        category: "Javascript objects",
        title: "Accessing object properties three",
        scenario: `
        Write a function that takes an object with two properties and a string as arguments. It should return 
        the value of the property with key equal to the value of the string
        `,
        javascript: [`
        function myFunction(obj, key) {
            return obj[key]
        }`]
    },
    {
        edit: false,
        category: "Javascript objects",
        title: "Check if property exists in object",
        scenario: `
        Write a function that takes an object (a) and a string (b) as argument. Return true if the object has a 
        property with key 'b'. Return false otherwise. Tipp: test case 3 is a bit tricky because the value of 
        property 'z' is undefined. But the property itself exists.
        `,
        javascript: [`
        function myFunction(a, b) {
            // The in operator returns true if the specified property is in 
            // the object or its prototype chain.
            return b in a;
        }`]
    },
    {
        edit: false,
        category: "Javascript objects",
        title: "Check if property exists in object and is truthy",
        scenario: `
        Write a function that takes an object (a) and a string (b) as argument. Return true if the object has a 
        property with key 'b', but only if it has a truthy value. In other words, it should not be null or 
        undefined or false. Return false otherwise.
        `,
        javascript: [`
        function myFunction(a, b) {
            return Boolean(a[b]);
        }`,`
        function myFunction(a, b) {
            return a[b] ? true : false;
        }`]
    },
    {
        edit: false,
        category: "Javascript objects",
        title: "Creating Javascript objects one",
        scenario: `
        Write a function that takes a string as argument. Create an object that has a property with key 'key' 
        and a value equal to the string. Return the object.
        `,
        javascript: [`
        function myFunction(a) {
            return { key: a }
        }`]
    },
    {
        edit: false,
        category: "Javascript objects",
        title: "Creating Javascript objects two",
        scenario: `
        Write a function that takes two strings (a and b) as arguments. Create an object that has a property 
        with key 'a' and a value of 'b'. Return the object.
        `,
        javascript: [`
        function myFunction(a, b) {
            return { [a]: b }
        }`]
    }
]
module.exports = javascript_objects;