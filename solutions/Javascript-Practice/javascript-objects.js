const javascript_objects = [
    {
        edit: false,
        category: "Javascript objects",
        title: "Accessing object properties one",
        scenario: `
        Write a function that takes an object with two properties as argument. It should return the value of 
        the property with key country.
        `,
        codeScenario: `
        function myFunction(obj) {
            return 
        }`,
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
        codeScenario: `
        function myFunction(obj) {
            return 
        }`,
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
        codeScenario: `
        function myFunction(obj, key) {
            return 
        }`,
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
        codeScenario: `
        function myFunction(a, b) {
            return 
        }`,
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
        codeScenario: `
        function myFunction(a, b) {
            return 
        }`,
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
        codeScenario: `
        function myFunction(a) {
            return 
        }`,
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
        codeScenario: `
        function myFunction(a, b) {
            return 
        }`,
        javascript: [`
        function myFunction(a, b) {
            return { [a]: b }
        }`]
    },
    {
        edit: false,
        category: "Javascript objects",
        title: "Creating Javascript objects three",
        scenario: `
        WWrite a function that takes two arrays (a and b) as arguments. Create an object that has properties 
        with keys 'a' and corresponding values 'b'. Return the object.
        `,
        codeScenario: `
        function myFunction(a, b) {
            return 
        }`,
        javascript: [`
        function myFunction(a, b) {
            return a.reduce((acc, cur, i) => ({ ...acc, [cur]: b[i] }), {})
        }
        `]
    },
    {
        edit: false,
        category: "Javascript objects",
        title: "Extract keys from Javascript object",
        scenario: `Write a function that takes an object (a) as argument. Return an array with all object keys.`,
        codeScenario: `
        function myFunction(a) {
            return 
        }`,
        javascript: [`
        function myFunction(a) {
            return Object.keys(a);
        }
        `]
    },
    {
        edit: false,
        category: "Javascript objects",
        title: "Return nested object property",
        scenario: `
        Write a function that takes an object as argument. In some cases the object contains other objects 
        with some deeply nested properties. Return the property 'b' of object 'a' inside the original object if it 
        exists. If not, return undefined`,
        codeScenario: `
        function myFunction(obj) {
            return 
        }`,
        javascript: [`
        function myFunction(obj) {
            return obj?.a?.b;
        }`,`
        function myFunction(obj) {
            return obj.a && obj.a.b ? obj.a.b : undefined
        }`]
    },
    {
        edit: false,
        category: "Javascript objects",
        title: "Sum object values",
        scenario: `Write a function that takes an object (a) as argument. Return the sum of all object values.`,
        codeScenario: `
        function myFunction(a) {
            return 
        }`,
        javascript: [`
        function myFunction(a) {
            return Object.values(a).reduce((sum, cur) => sum + cur, 0);
        }`]
    },
    {
        edit: false,
        category: "Javascript objects",
        title: "Remove a property from an object",
        scenario: `
        Write a function that takes an object as argument. It should return an object with all original object 
        properties. except for the property with key 'b'
        `,
        codeScenario: `
        function myFunction(obj) {
            return 
        }`,
        javascript: [`
        function myFunction(obj) {
            const { b, ...rest } = obj;
            return rest;
        }`,`
        function myFunction(obj) {
            if("b" in obj) {
                return delete obj.b && obj;
            }
        }
        `]
    },
    {
        edit: false,
        category: "Javascript objects",
        title: "Merge two objects with matching keys",
        scenario: `
        Write a function that takes two objects as arguments. Unfortunately, the property 'b' in the second 
        object has the wrong key. It should be named 'd' instead. Merge both objects and correct the wrong 
        property name. Return the resulting object. It should have the properties 'a', 'b', 'c', 'd', and 'e'
        `,
        codeScenario: `
        function myFunction(x, y) {
            return 
        }`,
        javascript: [`
        function myFunction(x, y) {
            const {b, ...rest} = y;
            return {...x, ...rest, d: b};
        }`,`
        function myFunction(x, y) {
            y.d = y.b;
            delete y.b;
            return {...x, ...y};
        }`]
    },
    {
        edit: false,
        category: "Javascript objects",
        title: "Multiply all object values by x",
        scenario: `
        Write a function that takes an object (a) and a number (b) as arguments. Multiply all values of 'a' by 
        'b'. Return the resulting object.
        `,
        codeScenario: `
        function myFunction(a, b) {
            return 
        }`,
        javascript: [`
        function myFunction(a, b) {
            return Object.entries(a).reduce((acc, [key, val]) => {
                return { ...acc, [key]: val * b };
            }, {});
        }`]
    }
]
module.exports = javascript_objects;