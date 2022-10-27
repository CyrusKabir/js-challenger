const dom_manipulation = [
    {
        category: "DOM manipulation",
        title: "Remove element from the DOM",
        scenario: `
        You may not see it in the example UI, but underneath the red circle is a green circle. 
        Extend the function removeRedCircle to remove the circle with id red from the DOM.
        Make sure that you really remove the element instead of just hiding it. 
        Confirm that your code works by clicking the button.
        `,
        html: `
        <div id="green"/>
        <div id="red"/>
        <button type="button" id="button">Click Me</button>
        `,
        javascript: [`
        const button = document.querySelector('#button');

        const removeRedCircle = () => {
           const redCircle = document.querySelector('#red');
           redCircle.parentNode.removeChild(redCircle);
        };

        button.addEventListener('click', removeRedCircle);
        `,`
        const removeRedCircle = () => {
           const redCircle = document.querySelector('#red');
           redCircle.parentNode.removeChild(redCircle);
        };
        `
        ],
    },
    {
        category: "DOM manipulation",
        title: "Change id of HTML element",
        scenario: `
        In this scenario the existing code listens to a click on the button. 
        When the button is clicked, the function changeInput is triggered. 
        changeInput tries to select an input field with id inputEl. But, the existing input field does not have this id. 
        Add some Javascript code to add the id inputEl to the existing input field.
        Verify that your code works by clicking the button.
        `,
        html: `
        <div id="wrapper">
            <input type="text" placeholder="Text" readonly/>
            <button type="button">Click Me</button>
        </div>
        `,
        javascript: [
        `
        const button = document.querySelector('#wrapper button');

        const changeInput = () => {
          const input = document.querySelector('#inputEl');
          if(input) {
            input.value = 'Hello World';
          }
        };

        button.addEventListener('click', changeInput);

        const input = document.querySelector("#wrapper input[type=text]");
        input.setAttribute("id", "inputEl");
        `]
    },
    {
        category: "DOM manipulation",
        title: "Wrap element in div",
        scenario: `
        The JavaScript code below installs en eventListener on a variable btn. 
        A button element that is a descendent of another element with id wrapper was assigned to the variable btn. 
        But, the existing button element has no parent node with id wrapper.
        Make the code work by creating a new element with id wrapper that wraps the existing button element. 
        Verify your solution by clicking the button. It should change its text.
        Hint: you might have to use the following methods: querySelector, createElement, setAttribute, append.
        `,
        html: `
        <button type="button" id="button">Click Me</button>
        `,
        javascript: [
        `
        const button = document.querySelector('#button');
        const wrapper = document.createElement('div');
        wrapper.setAttribute('id', 'wrapper');
        button.parentNode.append(wrapper);
        wrapper.append(button);

        const btn = document.querySelector('#wrapper btn');

        if(btn) {
          const handleClick = () => {
            btn.innerText = 'Thank you! ❤️'
          }

        btn.addEventListener('click', handleClick)
        `]
    },
]

module.exports = dom_manipulation;