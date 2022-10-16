const fs = require("fs");
const solutions = require("./solutions/all");
const testFilePath = "./README.md";
fs.readFile(testFilePath, "utf-8", (err, data) => {
    if (err) {
        console.log(err);
        return err;
    }
    let dataSplitedByLines = data.split(/\r?\n/);
    for(let solution of solutions) {
        let renderedResult = render(solution);
        const injectStart = `<!-- inject ${solution.category} start -->`;
        const injectEnd = `<!-- inject ${solution.category} end -->`;
        let startPos = dataSplitedByLines.indexOf(injectStart);
        let endPos = dataSplitedByLines.indexOf(injectEnd);
        let injectPos = (endPos - startPos) + startPos;
        if (dataSplitedByLines.join("\n").includes(`- #### ${solution.title}`) === false) {
            if(startPos + endPos === -2) break; // if category was not defined in README file 
            else {
                dataSplitedByLines.splice(injectPos, 0, renderedResult);
            }
        } else {
            const linesOfDuplicateSolution = renderedResult.split("\n").length;
            const injectPos = dataSplitedByLines.indexOf(`- #### ${solution.title}`);
            if(injectPos !== -1) {
                dataSplitedByLines.splice(injectPos, linesOfDuplicateSolution, renderedResult)
            }
        }
    }
    let result = dataSplitedByLines.join("\n");
    fs.writeFile(testFilePath, result, (err) => {
        if (err) {
            console.log(err);
            return err
        }
    });
})

function render(solution) {
    return `- #### ${solution.title}
    <details><summary>Solution ${solution.nth}</summary>
    <p>

    scenario :
    \`\`\`python
    ${solution.scenario}
    \`\`\`
    ${
    (() => solution.html ? `\`\`\`html :
    ${solution.html}
    \`\`\`` : "")()
    }
    javascript :
    \`\`\`js
    ${solution.javascript}
    \`\`\`
    </p>
    </details>

    [Back to table ⬆](#table-of-solutions)`
}