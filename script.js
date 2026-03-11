console.log("Hello World!")

function changeStyle(){
    console.log("click");
    // Get the p element and store it in a variable
let p = document.getElementById("text");
// Optional: Set some new text
p.innerText = "The text has been changed";
p.style.color = "red";
p.style.fontSize = "100px";
p.style.border = "2px solid green";
}

function style2(){
    console.log("click2")
    let p = document.getElementById("text");
    p.innerText= "This is style2!";
    p.style.fontSize = "8px";
    p.style.color = "green";
    p.style.border = "2px dashed red";
}