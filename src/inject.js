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
    let startSignPos_num = fileLinesTrimmed_arr.indexOf(injectStartSign_str);
    let endSignPos_num = fileLinesTrimmed_arr.indexOf(injectEndSign_str);
    let injectPos_num = (endSignPos_num - startSignPos_num) + startSignPos_num;
    return {
        startSignPos_num,
        endSignPos_num,
        injectPos_num
    };
}

/* 
adding rendered results for both table of solutions and solutions in injection process start position to array of lines 
adding new changes from solutions to file or editing :(
*/
function injectRenderedResultToArray({injectPos_num, numberOfItemsToRemoveInArray_num = 0, renderedResult_str, array_arr}) {
    array_arr.splice(injectPos_num, numberOfItemsToRemoveInArray_num, renderedResult_str);
}

// function edit({editType, }) {

// }
/*
process :
    - finding position for injection for both table of solutions and solutions 
    - injecting new rendered result to file 
    - editing or adding new changes from solutions to file
    */
   function processInject(solutions_obj, fileLines_arr) {
    const file = {
         trim: (file) => file.map(line => line.trim()),
         join: (file, joiner) => file.join(joiner)
    }
    for(let solution_obj of solutions_obj) {
        let solutionFileName = solution_obj.category.toLowerCase().split(" ").join("-");
        let trimmedFile_arr = file.trim(fileLines_arr);
        let joinedFileBeLineBreak_str = file.join(fileLines_arr, "\n");
        let challengeExist_bool = joinedFileBeLineBreak_str.includes(solution_obj.title) || 
                                  joinedFileBeLineBreak_str.includes(solution_obj.scenario);
        if(challengeExist_bool) {
            if(solution_obj.edit === true) {
                let renderedSolution_str = renderSolution(solution_obj);
                let renderedSolutionTitle_str = `- #### ${solution_obj.title}`;
                let injectPosSolutionStart_num = trimmedFile_arr.indexOf(renderedSolutionTitle_str);
                let injectPosSolutionEnd_num = trimmedFile_arr.indexOf("[Back to table ⬆](#table-of-solutions)", injectPosSolutionStart_num);
                if(injectPosSolutionStart_num !== -1) {
                    injectRenderedResultToArray({
                        injectPos_num: injectPosSolutionStart_num,
                        numberOfItemsToRemoveInArray_num: injectPosSolutionEnd_num - injectPosSolutionStart_num + 1,
                        renderedResult_str: renderedSolution_str,
                        array_arr: fileLines_arr
                    });                    
                }
            } else continue;
        } else {
            try {
                if(Array.isArray(solution_obj.javascript)) {
                    try {
                        if(solution_obj.javascript.length !== 0) {
                            let renderedSolution_str = renderSolution(solution_obj);
                            let renderedTableOfSolution_str = renderTableOfSolution(solution_obj.title);
                            let injectPosInfoForSolution_obj = findInjectPosInfo({
                                injectType_str: "solution", 
                                solutionCategory_str: solution_obj.category, 
                                fileLinesTrimmed_arr: trimmedFile_arr
                            });
                            let injectPosInfoForTableOfSolutions_obj = findInjectPosInfo({
                                injectType_str: "table-of-solutions", 
                                solutionCategory_str: solution_obj.category, 
                                fileLinesTrimmed_arr: trimmedFile_arr
                            });
                            const {startSignPos_num, endSignPos_num} = injectPosInfoForSolution_obj;
                            let isCategoryDefined_bool = startSignPos_num + endSignPos_num !== -1 && startSignPos_num < endSignPos_num;
                            try {
                                if(isCategoryDefined_bool) {
                                    injectRenderedResultToArray({
                                        injectPos_num: injectPosInfoForSolution_obj.injectPos_num,
                                        renderedResult_str: renderedSolution_str,
                                        array_arr: fileLines_arr
                                    })
                                    injectRenderedResultToArray({
                                        injectPos_num: injectPosInfoForTableOfSolutions_obj.injectPos_num,
                                        renderedResult_str: renderedTableOfSolution_str,
                                        array_arr: fileLines_arr
                                    })
                                } else throw new Error(`${solution_obj.category} inject signs is not defined correctly. Please check the desired file. (e.g README.MD)`)
                            } catch (err) {
                                console.error(err);
                                break;
                            }
                        } else throw new Error(`javascript solutions in solution obj should have at least one solution! please check ${solutionFileName}.js file`)
                    } catch (err) {
                        console.error(err);
                        break;
                    }
                } else throw new Error(`javascript solutions in solution obj must be array! please check ${solutionFileName}.js file`)
            } catch (err) {
                console.error(err);
                break;
            }

        }
    }
    return file.join(fileLines_arr, "\n");
}

module.exports = {
    processInject, 
}