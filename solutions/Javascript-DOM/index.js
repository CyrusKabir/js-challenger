const DOM_SELECTOR_METHODS = require("./dom-selector-methods");
const EVENTS_AND_USER_INTERACTIONS = require("./events-and-user-interactions");
const DOM_MANIPULATION = require("./dom-manipulation");
const DOM_FUNDAMENTALS = require("./dom-fundamentals");
const RECURSIVE_FUNCTIONS = require("./recursive-functions");
const ALL_EXISTING_SOLUTIONS = [
    DOM_SELECTOR_METHODS,
    EVENTS_AND_USER_INTERACTIONS,
    DOM_MANIPULATION,
    DOM_FUNDAMENTALS,
    RECURSIVE_FUNCTIONS,
].filter(solutions => typeof solutions[Symbol.iterator] === 'function').flat();
const ALL_JAVASCRIPT_DOM_SOLUTIONS = [...ALL_EXISTING_SOLUTIONS];
module.exports = ALL_JAVASCRIPT_DOM_SOLUTIONS;