const VARIABLES = require("./variables");
const OPERATORS = require("./operators");
const STRINGS = require("./strings");
const CONDITIONALS = require("./conditionals");
const FUNCTIONS_I = require("./functions-i");
const ARRAYS = require("./arrays");
const LOOPS = require("./loops");
const ALL_EXISTING_SOLUTIONS = [
    VARIABLES,
    OPERATORS,
    STRINGS,
    CONDITIONALS,
    FUNCTIONS_I,
    ARRAYS,
    LOOPS 
].filter(solutions => typeof solutions[Symbol.iterator] === 'function').flat();
const ALL_JAVASCRIPT_PRACTICE_SOLUTIONS = [...ALL_EXISTING_SOLUTIONS];
module.exports = ALL_JAVASCRIPT_PRACTICE_SOLUTIONS;
