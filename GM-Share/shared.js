// Shared functions for Grease-Monkey scripts
// version 0.1
// 2015-12-01
// Copyright (c) 2015, Yun Huang, huangyunict@gmail.com
// Released under the GPL license
// http://www.gnu.org/copyleft/gpl.html
// --------------------------------------------------------------------

//  script name
function scriptName() {
    return GM_info["script"]["name"];
}

//  script prefix, used for script id/class
function scriptPrefix() {
    return "monkey-script-" + scriptName();
}

//  run XPath
function runXPath(docNode, xpath) {
    var results = [];
    var elem;
    var nodesSnapshot = document.evaluate(xpath, docNode, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
    for (var i=0; i<nodesSnapshot.snapshotLength; i++) {
        elem = nodesSnapshot.snapshotItem(i);
        results.push(elem);
    }
    return results;
}

//  wrap element inner HTML
function wrapElemInnerHTML(name, content, attrObj) {
    var result = [];
    result.push("<");
    result.push(name);
    for (var key in attrObj) {
        if (attrObj.hasOwnProperty(key)) {
            result.push(" ");
            result.push(key);
            result.push("=\"");
            result.push(attrObj[key]);
            result.push("\"");
        }
    }
    result.push(">");
    result.push(content);
    result.push("</");
    result.push(name);
    result.push(">");
    return result.join("");
}

