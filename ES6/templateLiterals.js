//When we have need to generate html, write too much of information to concatenate, in that case handling with
//"", or '' is a tough thing, so we've backtick ( `` ) or template literals helps doing easily

const shortHand = require("./shortHand");
const pi = "3.1414";

let aSimpleString = "Lorem Lipsum Lorem Lipsum Lorem Lipsum "+
"\n Lorem Lipsum Lorem Lipsum Lorem Lipsum Lorem Lipsum Lorem"+
"\n Lorem Lipsum Lorem Lipsum Lorem Lipsum "+ pi +" Lorem Lipsum Lorem"+
"\n Lipsum Lorem Lipsum Lorem Lipsum Lorem Lipsum Lorem Lipsum"+
"\n Lipsum Lorem Lipsum "+ JSON.stringify(shortHand) +"<div>some value</div>"

console.log(aSimpleString)

let aTemplateString = `Lorem Lipsum Lorem Lipsum Lorem Lipsum
Lorem Lipsum Lorem Lipsum Lorem Lipsum
                        Lorem Lipsum Lorem Lipsum Lorem Lipsum
            ${pi}     Lorem Lipsum Lorem Lipsum Lorem Lipsum
    Lipsum Lorem Lipsum "+ ${JSON.stringify(shortHand)} +"<div>some value</div>        `;

console.log(aTemplateString)