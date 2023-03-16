const asynchronous_javascript = [
    {
        edit: false,
        category: "asynchronous javascript",
        title: "Execute the code synchronously",
        scenario: `
        Adjust the code snippet so that the console.log statement logs the value 2.
        `,
        codeScenario: `
        let i = 0;
        function func() {
         i = 2;
        }
        setTimeout(func, 100)
        // expected output = 2
        console.log(i);
        `,
        javascript: [`
        let i = 0;
        function func() {
         i = 2;
        }
        func();
        // expected output = 2
        console.log(i);
        `]
    },
    {
        edit: false,
        category: "asynchronous javascript",
        title: "Execute the code asynchronously",
        scenario: `
        Adjust the code snippet so that the value 0 is logged first and then the value 1.
        `,
        codeScenario: `
        let count = 0;
        function increment() {
         count = count + 1;
        }
        increment();
        setTimeout(() => {

          console.log(count);
        }, 1000);

        console.log(count);
        `,
        javascript: [`
        let count = 0;
        function increment() {
         count = count + 1;
        }
        setTimeout(() => {
          increment();
          console.log(count);
        }, 1000);

        console.log(count);
        `]
    }
]
module.exports = asynchronous_javascript;