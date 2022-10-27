const fs = require("fs");
const solutions_obj = require("../solutions/all");
const { processInject } = require("./inject");
const readMeFilePath = "../README.md";

fs.readFile(readMeFilePath, "utf-8", (err, readMeFileData_str) => {
    if (err) {
        console.log(err);
        return err;
    }
    let readMeFileLines_arr = readMeFileData_str.split(/\r?\n/);
    let result_str = processInject(solutions_obj, readMeFileLines_arr);
    fs.writeFile(readMeFilePath, result_str, (err) => {
        if (err) {
            console.log(err);
            return err
        }
    });
})