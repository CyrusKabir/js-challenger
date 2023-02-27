const dom_manipulation = [
    {
        edit: false,
        category: "DOM manipulation",
        title: "Remove element from the DOM",
        scenario: `
        You may not see it in the example UI, but underneath the red circle is a green circle. Extend the function removeRedCircle to remove the circle with id red from the DOM.
        Make sure that you really remove the element instead of just hiding it. Confirm that your code works by clicking the button.
        `,
        html: `
        <div id="green"/>
        <div id="red"/>
        <button type="button" id="button">Click Me</button>        `,
        codeScenario: `
        const button = document.querySelector('#button');
  
        const removeRedCircle = () => {
          
        };
        button.addEventListener('click', removeRedCircle);
        `,
        javascript: [`
        const button = document.querySelector('#button');
  
        const removeRedCircle = () => {
          const redCircle = document.querySelector('#red');
          redCircle.parentNode.removeChild(redCircle);
        };
        button.addEventListener('click', removeRedCircle);`
        ,`
        const button = document.querySelector('#button');
  
        const removeRedCircle = () => {
          document.getElementById("red").remove();
        };
        button.addEventListener('click', removeRedCircle);
        `]
    },
    {
        edit: false,
        category: "DOM manipulation",
        title: "Change id of HTML element",
        scenario: `
        In this scenario the existing code listens to a click on the button. When the button is clicked, the function changeInput is triggered. changeInput tries to select an input field with id inputEl. But, the existing input field does not have this id. Add some Javascript code to add the id inputEl to the existing input field.
        Verify that your code works by clicking the button.        `,
        html: `
        <div id="wrapper">
            <input type="text" placeholder="Text" readonly/>
            <button type="button">Click Me</button>
        </div>
        `,
        codeScenario: `
        const button = document.querySelector('#wrapper button');
  
        const changeInput = () => {
          const input = document.querySelector('#inputEl');
          if(input) {
            input.value = 'Hello World';
          }
        };
        
        button.addEventListener('click', changeInput);
        `,
        javascript: [`
        const button = document.querySelector('#wrapper button');
  
        const changeInput = () => {
          const input = document.querySelector('#inputEl');
          if(input) {
            input.value = 'Hello World';
          }
        };
        
        button.addEventListener('click', changeInput);
        
        document.querySelector('#wrapper input').setAttribute('id', 'inputEl');`]
    },
    
]
module.exports = dom_manipulation;