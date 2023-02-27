const dom_selector_methods = [
    {
        edit: false,
        category: "DOM selector methods",
        title: "Select the button element on the page",
        scenario: `
        In this scenario, the existing code adds an eventListener for a click event on a variable buttonElem. It expects buttonElem to be the button element in the example UI. But, that element is not selected yet.
        Assign the button element to the variable buttonElem. Click the button to verify that the code is working.
        Hint: Make use of the unique id of the button element.
        `,
        html: `
        <button type="button" id="button">OFF</button>
        `,
        codeScenario: `
        const buttonElem = 
  
        buttonElem.addEventListener('click', () => {
          const oldText = buttonElem.innerText;
          return button.innerText = oldText === "ON" ? "OFF" : "ON";
        });
        `,
        javascript: [`
        const buttonElem = document.getElementById("button");
  
        buttonElem.addEventListener('click', () => {
          const oldText = buttonElem.innerText;
          return button.innerText = oldText === "ON" ? "OFF" : "ON";
        });
        `]
    },
    {
        edit: false,
        category: "DOM selector methods",
        title: "Query descendent HTML elements",
        scenario: `
        Here, the existing code expects the variables 'buttonElem' and 'inputElem' to represent the button and input elements in the example UI.
        Assign the respective elements to the variables.
        In this case, the two elements do not have unique identifiers - like for example an id. Instead they are direct descendents of a div element with id 'wrapper'. Use an appropriate selector method!
        Click the button to verify that the code is working.
        `,
        html: `
        <div id="wrapper">
            <input type="text" value="OFF" readonly/>
            <button type="button">Click Me</button>
        </div>        `,
        codeScenario: `
        const buttonElem = 
        const inputElem = 

        buttonElem.addEventListener('click', () => {
          const oldText = inputElem.value;
            return inputElem.value = oldText === "ON" ? "OFF" : "ON";
        });
        `,
        javascript: [`
        const buttonElem = document.querySelector("#wrapper button");
        const inputElem = document.querySelector("#wrapper input");

        buttonElem.addEventListener('click', () => {
          const oldText = inputElem.value;
            return inputElem.value = oldText === "ON" ? "OFF" : "ON";
        });
        `]
    },
    {
        edit: false,
        category: "DOM selector methods",
        title: "Select multiple HTML elements",
        scenario: `
        In this scenario, we are looking for a list of elements gathered in one variable - rather than only one element.
        Assign the list items in the view to the variable 'listItems' by using an appropriate selector method.
        Once you have completed the code below, verify it by hovering over the list items until all items have the value 'ON'
        `,
        html: `
        <ul id="list">
            <li>OFF</li>
            <li>OFF</li>
            <li>OFF</li>
            <li>OFF</li>
            <li>OFF</li>
            <li>OFF</li>
        </ul>`,
        codeScenario: `
        const listItems = 
  
        const handleHover = (event) => {
          return event.target.innerText = 'ON';
        };
        
        if(listItems.length > 1) {
          listItems.forEach(item => item.addEventListener('mouseover', handleHover));
        }
        `,
        javascript: [`
        const listItems = document.querySelectorAll("#list li");
  
        const handleHover = (event) => {
          return event.target.innerText = 'ON';
        };
        
        if(listItems.length > 1) {
          listItems.forEach(item => item.addEventListener('mouseover', handleHover));
        }
        `]
    },
    
]
module.exports = dom_selector_methods;