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
    input.style.fontWeight = "bold";
}

function textItalic()
{
    input.style.fontStyle = "italic";
}

function saveFile()
{
    let output = document.getElementById("note").value;
    
    let blob = new Blob([output], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "Note.txt");
}