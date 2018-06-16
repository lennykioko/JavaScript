const fs = require("fs");

const mergeValues = (values, content) => {
    for(let key in values) {
        content = content.replace(`{{${key}}}`, values[key]);
    }
    return content;
}

const view = (templateName, values, reponse) => {
    const fileContents = fs.readFileSync(`./views/${templateName}.html`, {encoding: "utf8"});
    fileContents = mergeValues(values, fileContents);
    reponse.write(fileContents);
}

module.exports.view = view;
