function renderSolution(solution_obj) {
    return `    - #### ${solution_obj.title}
        scenario :
        \`\`\`python
        ${solution_obj.scenario.trim()}
        \`\`\`
        ${
        (() => solution_obj.html ? `html :
        \`\`\`html
        ${solution_obj.html.trim()}
        \`\`\`` : "")()
        }
        ${
        (() => {
            let javascriptSolutions_str = "";
            for(let i = 0; i < solution_obj.javascript.length; i++) {
                javascriptSolutions_str += `
        <details><summary>Solution ${i + 1}</summary>
        <p>

        js :
        \`\`\`js
        ${solution_obj.javascript[i].trim()}
        \`\`\`
        </p>
        </details>`.trim() + "\n" + "        ";
            }
            return javascriptSolutions_str.trim();
        })()
        }

        [Back to table ⬆](#table-of-solutions)`
}

function renderTableOfSolution(solutionTitle_str) {
    let linkToSolution_str = solutionTitle_str.toLowerCase().split(" ").join("-");
    return `    1. [${solutionTitle_str}](#${linkToSolution_str})`
}

module.exports = {
    renderSolution, 
    renderTableOfSolution
}