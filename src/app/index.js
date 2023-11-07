const fontUpButton = document.getElementById("font_up");
const saveFileButton = document.getElementById("save");
let input = document.getElementById("note");

function fontUp()
{
    input.style.fontSize = "larger";
}

function fontDown()
{
    input.style.fontSize = "smaller";
}

function textBold()
{
    input = input.bold;
}

function textItalic()
{
    input = input.italics;
}

function saveFile()
{
    var output = document.getElementById("note").value;
    
    var blob = new Blob([output], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "Note.txt");
}