const events_and_user_interactions = [
    {
        edit: false,
        category: "Events and user interactions",
        title: "Execute function on button click",
        scenario: `
        The Javascript function handleText fills the input field with the words Hello World. But, there is no code to execute this function.
        Complete the existing code below such that the function is called when the button is clicked. Verify by clicking the button.
        `,
        html: `
        <input type="text" id="input" readonly/>
        <button type="button" id="button">Click Me</button>
        `,
        javascript: [`
        const button = document.getElementById('button');
        const input = document.getElementById('input');

        const handleClick = () => {
          input.value = 'Hello World';
        };

        button.addEventListener('click', handleClick);
        `]
    },
    {
        edit: false,
        category: "Events and user interactions",
        title: "Execute function when cursor moves onto element",
        scenario: `
        The Javascript function changeText changes the text inside the circle. But again, there is no code to execute this function.
        Complete the existing code below such that the function is called when the cursor moves onto the circle. Verify that your code works by hovering over the circle.        `,
        html: `
        <div id="element">
            Hover Me
        </div>
        `,
        javascript: [`
        const element = document.getElementById('element');
  
        const changeText = () => {
          element.innerText = 'Thanks!';
        };

        element.addEventListener("mouseover", changeText);
        `]
    },
    {
        edit: false,
        category: "Events and user interactions",
        title: "Cursor enters and leaves element",
        scenario: `
        In this scenario we want the color of the circle to change depending on the type of cursor movement. Use the function toggleColor to turn the circle orange when the cursor moves onto it. Reuse the same function to turn it black when the cursor leaves it.
        The tricky part is that you have to call toggleColor with different values for the parameter isEntering. Verify that your code is working by hovering the circle with the mouse cursor and leaving it again.        `,
        html: `
        <div id="element">
            Hover Me
        </div>        `,
        javascript: [`
        const element = document.querySelector('#element');
  
        const toggleColor = (isEntering) => {
          element.style.background = isEntering ? 'orange' : 'black';
        };
        
        element.addEventListener('mouseover', () => toggleColor(true));
        element.addEventListener('mouseleave', () => toggleColor(false));
        `]
    },
    
]
module.exports = events_and_user_interactions;