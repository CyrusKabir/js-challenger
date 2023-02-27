const dom_fundamentals = [
    {
        edit: false,
        category: "DOM fundamentals",
        title: "Check the checkbox",
        scenario: `
        Your first JavaScript DOM exercise. Let's start simple.
        Extend the JavaScript code below to interact with the displayed HTML elements. Once you click the button, the checkbox should be checked.
        Confirm your code by clicking the button!        `,
        html: `
        <input id="checkbox" disabled/>
        <label for="checkbox">checkbox</label>
        <button type="button" id="button">Verify Code</button>        `,
        codeScenario: `
        const button = document.getElementById('button');
        button.addEventListener('click', () => {
          
        });
        `,
        javascript: [`
        const button = document.getElementById('button');
        button.addEventListener('click', () => {
          const checkbox = document.getElementById('checkbox');
          checkbox.checked = true;
        });`]
    },
    {
        edit: false,
        category: "DOM fundamentals",
        title: "Get full-name from input",
        scenario: `
        Extend the JavaScript code below to interact with the displayed HTML elements.
        This time we are looking for the full name. When the button is clicked, combine the names of the first two input fields. Insert the full name in the third input field.
        Hint: Check if your code still works if you change the first or last name.
        Confirm your code by clicking the button!        `,
        html: `
        <input type="text" id="firstName" placeholder="Max" value="Max"/>
        <input type="text" id="lastName" placeholder="Musterman" value="Musterman"/>
        <input type="text" id="fullName" placeholder="full name" readonly/>
        <button type="button" id="button">Verify Code</button>        `,
        codeScenario: `
        const button = document.getElementById('button');
        button.addEventListener('click' , () => {
          
        });
        `,
        javascript: [`
        const button = document.getElementById('button');
        button.addEventListener('click' , () => {
          const firstName = document.getElementById('firstName');
          const lastName = document.getElementById('lastName');
          const fullName = document.getElementById('fullName');
          fullName.value = firstName.value + ' ' + lastName.value;
        });`]
    },
    {
        edit: true,
        category: "DOM fundamentals",
        title: "Pop the balloons",
        scenario: `
        Make the balloons pop by hovering over them.
        Extend the JavaScript code below to interact with the displayed HTML elements. Every time you hover over a balloon, it should become invisible.
        Your goal is to pop all the balloons one after the other.`,
        html: `
        <ul id="list">
          <li/>
          <li/>
          <li/>
          <li/>
          <li/>
          <li/>
          <li/>
          <li/>
          <li/>
          <li/>
        </ul>`,
        codeScenario: `
        const list = document.getElementById('list');
        `,
        javascript: [`
        const list = document.getElementById('list');
        const handleHover = event => {
          if(event.target !== list) {
            event.target.style.visibility = 'hidden';
          }
        };

        list.addEventListener('mouseover', handleHover);
        `]
  }
]
module.exports = dom_fundamentals;