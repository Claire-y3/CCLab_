// if(true){
//     console.log("true is true")
// }

// alert("hi!!!!! welcome to my website")

// window.open("","_blank")

let headline = document.getElementById("myHeadline");
headline.textContent="hello hello hello";

theButton.addEventListener("click",changeHeadline)

function changeHeadline(){
    headline.textContent = "hello hello hello";
}

theRange.addEventListener("input",rangeWasUsed);

function rangeWasUsed(){
    console.log("lalala");
}