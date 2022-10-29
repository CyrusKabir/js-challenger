const arrays = [
    {
        edit: false,
        category: "arrays",
        title: "Create a JavaScript array",
        scenario: `
        In this exercise, we will create our first JavaScript array. In the code below we declare an array named arr using the so called literal notation. The literal notation is a pair or square brackets that enclose the values that we want to put inside the array: [value, value, ...]. Each value is separated by a comma. In the context of an array, these values are called the elements of the array.
        Currently arr contains two strings. But, you can put as many values inside an array as you want.
        In the console.log() statement we use the array.length property to get the number of array elements. The statement logs true if the array has 3 elements.
        Task: Add a third element to the array. It can have any value.
        `,
        javascript: [`
        const arr = ['a', 'b', 'c'];
        console.log(arr.length === 3);
        `]
    }
]
module.exports = arrays;