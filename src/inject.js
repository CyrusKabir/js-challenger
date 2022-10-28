const { renderSolution, renderTableOfSolution } = require("./render");

function findInjectPosInfo({injectType_str, solutionInfo_obj, fileLines_arr}) {
    let injectStartSign_str, injectEndSign_str;
    if(injectType_str === "table-of-solutions") {
        injectStartSign_str = `<!-- inject tos-${solutionInfo_obj.category} start -->`;
        injectEndSign_str = `<!-- inject tos-${solutionInfo_obj.category} end -->`;
    }
    if(injectType_str === "solution") {
        injectStartSign_str = `<!-- inject ${solutionInfo_obj.category} start -->`;
        injectEndSign_str = `<!-- inject ${solutionInfo_obj.category} end -->`;
    }
    let startPos_num = fileLines_arr.map(line => line.trim()).indexOf(injectStartSign_str);
    let endPos_num = fileLines_arr.map(line => line.trim()).indexOf(injectEndSign_str);
    let injectPos_num = (endPos_num - startPos_num) + startPos_num;
    return {
        startPos_num,
        endPos_num,
        injectPos_num
    };
}

function injectRenderedResultToArray(injectPos_num, remove_num,renderedResult_str,arr) {
    arr.splice(injectPos_num, remove_num, renderedResult_str);
}

function processInject(solutions_obj, readMeFileLines_arr) {
    for(let solution_obj of solutions_obj) {
        let renderedSolution_str = renderSolution(solution_obj);
        let renderedTableOfSolution_str = renderTableOfSolution(solution_obj.title);
        let injectPosInfoForSolution_obj = findInjectPosInfo({
            injectType_str: "solution", 
            solutionInfo_obj: solution_obj, 
            fileLines_arr: readMeFileLines_arr
        });
        let injectPosInfoForTableOfSolutions_obj = findInjectPosInfo({
            injectType_str: "table-of-solution", 
            solutionInfo_obj: solution_obj, 
            fileLines_arr: readMeFileLines_arr
        });
        let challengeExist_bool = readMeFileLines_arr.join("\n").includes(solution_obj.title);
        if(challengeExist_bool) {
            let renderedSolutionTitle_str = `- #### ${solution_obj.title}`;
            let readMeFileLinesTrimed_arr = readMeFileLines_arr.map(line => line.trim());
            let injectPosStart_num = readMeFileLinesTrimed_arr.indexOf(renderedSolutionTitle_str);
            let injectPosEnd_num = readMeFileLinesTrimed_arr.indexOf("[Back to table ⬆](#table-of-solutions)", injectPosStart_num)
            if(injectPosStart_num !== -1) {
                injectRenderedResultToArray(injectPosStart_num, injectPosEnd_num - injectPosStart_num + 1, renderedSolution_str, readMeFileLines_arr);
            }
        } else {
            let isCategoryDefined_bool = injectPosInfoForSolution_obj.startPos_num + injectPosInfoForSolution_obj.endPos_num !== -1; 
            if(isCategoryDefined_bool) {
                injectRenderedResultToArray(injectPosInfoForSolution_obj.injectPos_num, 0,renderedSolution_str, readMeFileLines_arr);
                injectRenderedResultToArray(injectPosInfoForTableOfSolutions_obj.injectPos_num, 0,renderedTableOfSolution_str, readMeFileLines_arr);
            }
        }
    }
    return readMeFileLines_arr.join("\n");
}

module.exports = {
    processInject, 
}