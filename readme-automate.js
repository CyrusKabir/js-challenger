const fs = require("fs");
const solutions_obj = require("./solutions/all");
const { processInject } = require("./src/inject");
const readMeFilePath = "./README.md";

try {
    fs.readFile(readMeFilePath, "utf-8", (err, readMeFileData_str) => {
        if(err) throw new Error(err)
        let readMeFileLines_arr = readMeFileData_str.split(/\r?\n/);
        let result_str = processInject(solutions_obj, readMeFileLines_arr);
        try {
            fs.writeFile(readMeFilePath, result_str, (err) => {
                if(err) throw new Error(err)
            });
        } catch(err) {
            console.log(err);
        }
        
    })
} catch (err) {
    console.log(err);
}
