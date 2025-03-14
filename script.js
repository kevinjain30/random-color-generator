let c1 = document.getElementById("c1");
let c2 = document.getElementById("c2");
let c3 = document.getElementById("c3");
let c4 = document.getElementById("c4");
let c5 = document.getElementById("c5");

let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let p3 = document.getElementById("p3");
let p4 = document.getElementById("p4");
let p5 = document.getElementById("p5");

let copyBtn = document.getElementsByClassName("copy-btns");
let toast = document.getElementById("toast");
let generateBtn = document.getElementById("random-btn");

let colors = [c1, c2, c3, c4, c5];
let paras = [p1, p2, p3, p4, p5];

function generateRandomColor(){
    return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
}

function changeColor() {
    for (let i = 0; i < colors.length; i++) {
        let newColor = generateRandomColor();
        colors[i].style.backgroundColor = newColor;
        paras[i].textContent = newColor.toUpperCase();
    }
}

// Copy function
function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
    toast.style.display = "block";
    setTimeout(() => {
        toast.style.display = "none";
    }, 2000);
}

// Attach event listener to each copy button
for (let i = 0; i < copyBtn.length; i++) {
    copyBtn[i].addEventListener("click",()=>{
        let colorCode = paras[i].textContent;
        console.log("hello")
        copyToClipboard(colorCode);
    });
}


generateBtn.addEventListener(("click"),()=>{
    generateRandomColor();
    changeColor();
});

window.addEventListener("keydown",(e)=>{
    if(e.code === "Space"){
        changeColor();
    }
})