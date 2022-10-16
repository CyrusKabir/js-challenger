const dom_fundamentals = [
    {
        category: "DOM fundamentals",
        title: "Check the checkbox",
        nth: 1,
        scenario: `
        Your first JavaScript DOM exercise. Let's start simple.
        Extend the JavaScript code below to interact with the displayed HTML elements. 
        Once you click the button, the checkbox should be checked.
        Confirm your code by clicking the button!
        `,
        html: `
        <input id="checkbox" disabled/>
        <label for="checkbox">checkbox</label>
        <button type="button" id="button">Verify Code</button>
        `,
        javascript: `
        const button = document.getElementById('button');
        button.addEventListener('click', () => {
            const checkbox = document.getElementById('checkbox');
            checkbox.checked = true;
        });
        `
    },
    {
        category: "DOM fundamentals",
        title: "Get full-name from inputs",
        nth: 1,
        scenario: `
        displayed HTML elements.
        This time we are looking for the full name. 
        When the button is clicked, combine the names of the first two input fields. 
        Insert the full name in the third input field.
        Hint: Check if your code still works if you change the first or last name.
        Confirm your code by clicking the button!
        `,
        html: `
        <input type="text" id="firstName" placeholder="Max" value="Max"/>
        <input type="text" id="lastName" placeholder="Musterman" value="Musterman"/>
        <input type="text" id="fullName" placeholder="full name" readonly/>
        <button type="button" id="button">Verify Code</button>
        `,
        javascript: `
        const button = document.getElementById('button');
        button.addEventListener('click' , () => {
          const firstName = document.getElementById('firstName');
          const lastName = document.getElementById('lastName');
          const fullName = document.getElementById('fullName');
          fullName.value = firstName.value + ' ' + lastName.value;
        });
        `
    },
    {
        category: "DOM fundamentals",
        title: "Increment the counter on button click",
        nth: 1,
        scenario: `
        Extend the JavaScript code below to interact with the displayed HTML elements.
        On each button click, increase the value of the button by 1.
        Confirm your code by clicking the button!
        `,
        html: `
        <button type="button" id="button">0</button>
        `,
        javascript: `
        const button = document.getElementById('button');
        button.addEventListener('click' , () => {
          // type in your code here
          const button = document.getElementById('button');
          button.addEventListener('click' , () => {
            const oldValue = parseInt(button.innerText, 10);
            button.innerText = oldValue + 1;
          });
        });
        `
    },
    {
      category: "DOM fundamentals",
      title: "Increment the counter on button click",
      nth: 1,
      scenario: `
      Extend the JavaScript code below to interact with the displayed HTML elements.
      On each button click, increase the value of the button by 1.
      Confirm your code by clicking the button!
      `,
      html: `
      <button type="button" id="button">0</button>
      `,
      javascript: `
      const button = document.getElementById('button');
      button.addEventListener('click' , () => {
        // type in your code here
        const button = document.getElementById('button');
        button.addEventListener('click' , () => {
          const oldValue = parseInt(button.innerText, 10);
          button.innerText = oldValue + 1;
        });
      });
      `
  },
  {
    category: "DOM fundamentals",
    title: "Increment the counter on button click 2",
    nth: 1,
    scenario: `
    Extend the JavaScript code below to interact with the displayed HTML elements.
    On each button click, increase the value of the button by 1.
    Confirm your code by clicking the button!
    `,
    html: `
    <button type="button" id="button">0</button>
    `,
    javascript: `
    const button = document.getElementById('button');
    button.addEventListener('click' , () => {
      // type in your code here
      const button = document.getElementById('button');
      button.addEventListener('click' , () => {
        const oldValue = parseInt(button.innerText, 10);
        button.innerText = oldValue + 1;
      });
    });
    `
},
]

module.exports = dom_fundamentals;