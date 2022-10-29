const BASICS = require("./javascript-fundamentals");
const ARRAYS = require("./javascript-arrays");
const OBJECTS = require("./javascript-objects");
const DATES = require("./javascript-dates");
const SETS = require("./javascript-sets");
const ALL_EXISTING_SOLUTIONS = [
    BASICS,
    ARRAYS,
    OBJECTS,
    DATES,
    SETS
].filter(solutions => typeof solutions[Symbol.iterator] === 'function').flat();
const ALL_JAVASCRIPT_PRACTICE_SOLUTIONS = [...ALL_EXISTING_SOLUTIONS];
module.exports = ALL_JAVASCRIPT_PRACTICE_SOLUTIONS;
