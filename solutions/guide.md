# GUIDE
## SOLUTIONS OBJECT FORMAT
```js
const category = [
    {
        edit: false || true
        category: "challenge_category",
        title: "challenge_title",
        scenario: `
        challenge_scenario
        `,
        html: `
        challenge_html
        `,
        javascript: [`
        challenge_javascripts
        `]
    }
]
module.exports = category;
```
## NOTES
- if challenge title have sequence like (e.g challenge_title (1), challenge_title (2)) remove parentheses around number
- edit property must be false if:
    - it's a new solutions object
- edit property must be true if: 
    - there is a change in scenario, html, or javascript solutions array
## WARNINGS
- don't change inject signs (e.g <\!-- inject category start -->)in README file 
- don't change category and title in solution object