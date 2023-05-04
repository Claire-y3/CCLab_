console.log("hello");

let emojiDict = [
    ["q", "👧"],
    ["w", "👩"],
    ["e", "👨"],
    ["r","👫"],
    ["t","🤴"],
    ["y","🤳"],
    ["u","🤶"],
    ["i","💬"],
    ["o","💤"],
    ["p","💗"],
    ["[","🎂"],
    ["]","🌬"],
    ["|","🎲"], // cannot use "\"
    ["a","🌧"],
    ["s","🌤"],
    ["d","🌲"],
    ["f","🌱"],
    ["g","🌸"],
    ["h","🌼"],
    ["j","🍂"],
    ["k","🍎"],
    ["l","🍦"],
    [";","🍭"],
    ["'","💰"],
    ["z","🏠"],
    ["x","🏥"],
    ["c","🐍"],
    ["v","🐰"],
    ["b","🐶"],
    ["n","🐷"],
    ["m","👀"],
    [",","👽"],
    [".","💆"],
    ["/","💊"]
]

let emojiForRandomSelection=["😄", "😅", "😂", "🤣", "🥲", "🥹", "☺️", "😍", "🥰", "🤨", "🥇", "🎫", "🩰", "🎨", "🎬", "🎤", "🎧", "🎹", "🎮", "🧩"]

let emojiKeys = document.getElementsByClassName("emoji");
console.log(emojiKeys)


function fillKeys(){
    for(let i = 0; i<emojiDict.length; i++){
        let currentEmoji = emojiDict[i];
        emojiKeys[i].innerText = currentEmoji[1];
    }
}

// call the fillKeys function in the beginning to fill the keys initally
fillKeys();

// got this function from https://bobbyhadz.com/blog/javascript-get-multiple-random-elements-from-array
function getMultipleRandom(arr, num) {
    // next line makes copy of the array passed
    // in as a parameter (arr), then shuffles that copy
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    // next line return the first num elements of the shuffled array
    return shuffled.slice(0, num);
  }

function randomizeLastRow(){
    if(event.shiftKey){
        console.log("random!")
        let pickedEmoji = getMultipleRandom(emojiForRandomSelection, 10);
        console.log(pickedEmoji);
        let c = 0;
        for (let i = emojiDict.length-10;i<emojiDict.length;i++){
            let currentEmoji= emojiDict[i];
            currentEmoji[1] = pickedEmoji[c];
            c++;
        }
    }
    fillKeys();
}

let getRandomButton  = document.getElementById("getRandomButton");
getRandomButton.addEventListener("keydown", randomizeLastRow);


// let getKeys  = document.getElementById("z");
// getKeys.addEventListener("click", getEmojiByLetter());

function getEmojiByLetter(letter){
    for (let i =0; i < emojiDict.length; i++){
        let currentEmoji = emojiDict[i];
        if(currentEmoji[0] == letter){
            // console.log(currentEmoji);
            return currentEmoji[1]
        }
    }
}



// test:
// let emoji = getEmojiByLetter("a");
// console.log(emoji)

const input = document.querySelector("input");
const log = document.getElementById("log");

input.addEventListener("keydown", logKey);

function logKey(e) {
  log.textContent += ` ${e.code}`;
}