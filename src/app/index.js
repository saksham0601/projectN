const fontUpButton = document.getElementById("font_up");
const fontDownButton = document.getElementById("font_down");
const saveFileButton = document.getElementById("save");
let input = document.getElementById("textarea");
let selection = getSelectedText();

function getSelectedText(el)
{
    if (window.getSelection) {
        return "" + window.getSelection();
    } else if (document.selection && document.selection.type == "Text") {
        return document.selection.createRange().text;
    }
    return "";
}

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
    if (input.style.fontWeight == "bold")
    {
        input.style.fontWeight = "normal";
    }
    else
    {
        input.style.fontWeight = "bold";
    }
}

function textItalic()
{
    if (input.style.fontStyle == "italic")
    {
        input.style.fontStyle = "normal";
    }
    else
    {
        input.style.fontStyle = "italic";
    }
}

function saveFile()
{
    let output = document.getElementById("textarea").value;
    let file_name = prompt("Please enter the file name", "MyNote");
    
    let blob = new Blob([output], {type: "text/plain;charset=utf-8"});
    saveAs(blob, file_name + ".md");
}