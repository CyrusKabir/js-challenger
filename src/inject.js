// Imports
const { renderSolution, renderTableOfSolution } = require("./render");

/* 
find inject position info for solution in README body or challenge title in table of solutions
return inject info object:
    - position of inject start sign e.g <!-- inject category start -->
    - position of inject end sign e.g <!-- inject category end -->
    - position of injecting process start for solution or challenge title after each other 
*/
function findInjectPosInfo({injectType_str, solutionCategory_str, fileLinesTrimmed_arr}) {
    let injectStartSign_str, injectEndSign_str;
    if(injectType_str === "table-of-solution" || injectType_str === "table-of-solutions") {
        injectStartSign_str = `<!-- inject tos-${solutionCategory_str} start -->`;
        injectEndSign_str = `<!-- inject tos-${solutionCategory_str} end -->`;
    }
    if(injectType_str === "solution" || injectType_str === "solutions") {
        injectStartSign_str = `<!-- inject ${solutionCategory_str} start -->`;
        injectEndSign_str = `<!-- inject ${solutionCategory_str} end -->`;
    }
    let startPos_num = fileLinesTrimmed_arr.indexOf(injectStartSign_str);
    let endPos_num = fileLinesTrimmed_arr.indexOf(injectEndSign_str);
    let injectPos_num = (endPos_num - startPos_num) + startPos_num;
    return {
        startPos_num,
        endPos_num,
        injectPos_num
    };
}

/* 
adding rendered results for both table of solutions and solutions in injection process start to array of lines 
adding new changes from solutions to file or editing :(
*/
function injectRenderedResultToArray(injectPos_num, remove_num = 0, renderedResult_str, fileLines_arr) {
    fileLines_arr.splice(injectPos_num, remove_num, renderedResult_str);
}

/*
process :
    - finding position for injection for both table of solutions and solutions 
    - injecting new rendered result to file 
    - editing or adding new changes from solutions to file
*/
function processInject(solutions_obj, readMeFileLines_arr) {
    for(let solution_obj of solutions_obj) {
        let readMeFileLinesTrimmed_arr = readMeFileLines_arr.map(line => line.trim());
        let renderedSolution_str = renderSolution(solution_obj);
        let renderedTableOfSolution_str = renderTableOfSolution(solution_obj.title);
        let injectPosInfoForSolution_obj = findInjectPosInfo({
            injectType_str: "solution", 
            solutionCategory_str: solution_obj.category, 
            fileLinesTrimmed_arr: readMeFileLinesTrimmed_arr
        });
        let injectPosInfoForTableOfSolutions_obj = findInjectPosInfo({
            injectType_str: "table-of-solutions", 
            solutionCategory_str: solution_obj.category, 
            fileLinesTrimmed_arr: readMeFileLinesTrimmed_arr
        });
        let challengeExist_bool = readMeFileLines_arr.join("\n").includes(solution_obj.title);
        if(challengeExist_bool) {
            let renderedSolutionTitle_str = `- #### ${solution_obj.title}`;
            let injectPosStart_num = readMeFileLinesTrimmed_arr.indexOf(renderedSolutionTitle_str);
            let injectPosEnd_num = readMeFileLinesTrimmed_arr.indexOf("[Back to table ⬆](#table-of-solutions)", injectPosStart_num)
            if(injectPosStart_num !== -1) {
                injectRenderedResultToArray(injectPosStart_num, injectPosEnd_num - injectPosStart_num + 1, renderedSolution_str, readMeFileLines_arr);
            }
        } else {
            console.log("test");
            let isCategoryDefined_bool = injectPosInfoForSolution_obj.startPos_num + injectPosInfoForSolution_obj.endPos_num !== -1; 
            if(isCategoryDefined_bool) {
                injectRenderedResultToArray(injectPosInfoForSolution_obj.injectPos_num, renderedSolution_str, readMeFileLines_arr);
                injectRenderedResultToArray(injectPosInfoForTableOfSolutions_obj.injectPos_num, renderedTableOfSolution_str, readMeFileLines_arr);
            }
        }
    }
    return readMeFileLines_arr.join("\n");
}

module.exports = {
    processInject, 
}