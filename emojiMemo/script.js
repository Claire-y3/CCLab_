console.log("hello");

let enterSound;

function preload() {
  enterSound = loadSound("sound/enterSound.mp3");
}

let emojiDict = [
    ["`", "~", 15],
    ["1", "!", 16],
    ["2", ",", 17],
    ["3", ".", 18],
    ["4", "。", 19],
    ["5", "?", 20],
    ["6", "“", 21],
    ["7", "”", 22],
    ["8", ":", 23],
    ["9", "(", 24],
    ["0", ")", 25],
    ["-", "-", 26],
    ["=", "+", 27],
    ["q", "👧", 30],
    ["w", "👩", 31],
    ["e", "👨", 32],
    ["r","👶", 33],
    ["t","🤴", 34],
    ["y","🚶‍♂️", 35],
    ["u","🏃‍♂️", 36],
    ["i","👫", 37],
    ["o","🦮", 38],
    ["p","🐈", 39],
    ["[","🐷", 40],
    ["]","💤", 41],
    ["\\","🐾", 42], // cannot use "\", using "\\" instead, learn from: https://stackoverflow.com/questions/3903488/javascript-backslash-in-variables-is-causing-an-error
    ["a","🌧", 44],
    ["s","🌤", 45],
    ["d","🌲", 46],
    ["f","🌱", 47],
    ["g","🌸", 48],
    ["h","🎂", 49],
    ["j","🍂", 50],
    ["k","☂️", 51],
    ["l","🍦", 52],
    [";","🍭", 53],
    ["'","💰", 54],
    ["z","🏠", 57],
    ["x","🏥", 58],
    ["c","🚗", 59],
    ["v","✈️", 60],
    ["b","💕", 61],
    ["n","💬", 62],
    ["m","👀", 63],
    [",","👽", 64],
    [".","📱", 65],
    ["/","💊", 66]
]

let emojiForRandomSelection=["🧳", "🌂", "☂️", "🧵", "🪡", "🪢", "🧶", "👓", "🕶", "🥽", "🥼", "🦺", "👔", "👕", "👖", "🧣", "🧤", "🧥", "🧦", "👗", "👘", "🥻", "🩴", "🩱", "🩲", "🩳", "👙", "👚", "👛", "👜", "👝", "🎒", "👞", "👟", "🥾", "🥿", "👠", "👡", "🩰", "👢", "👑", "👒", "🎩", "🎓", "🧢", "⛑", "🪖", "💄", "💍" ,"💼","🚗", "🚕", "🚙", "🚌", "🚎", "🏎", "🚓", "🚑", "🚒", "🚐", "🛻", "🚚", "🚛", "🚜", "🦯", "🦽", "🦼", "🛴", "🚲", "🛵", "🏍", "🛺", "🚨", "🚔", "🚍", "🚘", "🚖", "🛞", "🚡", "🚠", "🚟", "🚃", "🚋", "🚞", "🚝", "🚄", "🚅", "🚈", "🚂", "🚆" ,"🚇", "🚊", "🚉", "✈️", "🛫", "🛬", "🛩", "💺", "🛰", "🚀", "🛸", "🚁", "🛶", "⛵️", "🚤", "🛥", "🛳", "⛴", "🚢", "⚓️", "🛟", "🪝", "⛽️", "🚧", "🚦", "🚥", "🚏", "🗺", "🗿", "🎡", "🎢", "🛝","🎠", "⛲️", "⛱", "🏖", "🏝", "🏜", "🌋", "⛰", "🏔", "🗻", "🏕", "⛺️", "🛖", "🏠", "🏡", "🏘", "🏚", "🏗", "🏭", "🏢", "🏬", "🏣", "🏤", "🏦", "🏪", "🏫", "🏩", "💒", "🏛", "⛪️", "🕌", "🕍", "🛕", "🕋", "⛩", "🛤", "🛣", "🗾", "🎑", "🏞", "🌅", "🌄", "🌠", "🎇", "🎆", "🌇", "🌆", "🏙", "🌃", "🌌", "🌉", "🌁"]

let emojiKeys = document.getElementsByClassName("emoji");
// console.log(emojiKeys)


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
        // console.log("random!")
        let pickedEmoji = getMultipleRandom(emojiForRandomSelection, 10);
        // console.log(pickedEmoji);
        let c = 0;
        for (let i = emojiDict.length-10;i<emojiDict.length;i++){
            let currentEmoji= emojiDict[i];
            currentEmoji[1] = pickedEmoji[c];
            c++;
        }
    }
    fillKeys();
}

// let getRandomButton  = document.getElementById("getRandomButton");
document.addEventListener("keydown", randomizeLastRow);

// let getKeys  = document.getElementById("z");
// getKeys.addEventListener("click", getEmojiByLetter());

document.addEventListener("keydown",printStory);

function printStory(){
    if (event.key === "Enter"){
        enterSound.play();
        let currentSentence = input.value
        dataObject.addSentence(currentSentence)
        input.value = "";
        currentStringElements=[''];
    }
}

function getEmojiByLetter(letter){
    for (let i =0; i < emojiDict.length; i++){
        let currentEmoji = emojiDict[i];
        if(currentEmoji[0] == letter){
            // console.log(currentEmoji[1]);
            return currentEmoji[1];
        }
    }
}
function getTabIndexByLetter(letter){
    for (let i =0; i < emojiDict.length; i++){
        let currentEmoji = emojiDict[i];
        if(currentEmoji[0] == letter){
            // console.log(currentEmoji[1]);
            return currentEmoji[2];
        }
    }
}

// test:
// let emoji = getEmojiByLetter("a");
// console.log(emoji)

// got this function from: https://levelup.gitconnected.com/javascript-events-handlers-keyboard-and-load-events-1b3e46a6b0c3
let input = document.querySelector("input");
let log = document.getElementById("log");

input.addEventListener("keydown", logKey);

//log the key code of the key that was pressed
let currentStringElements = [];
function logKey(event) {
    event.preventDefault();
//   log.textContent += ` ${e.code}`;
    let letterTyped = event.key;
    // console.log(letterTyped);

    if (letterTyped == "Backspace"){
        // console.log(currentStringElements);
        // delete last emoji from array
        currentStringElements.splice(currentStringElements.length-1,1);
        // console.log(currentStringElements);

        // let currentString = input.value;
        // if(currentString.length > 0){
        //     // delete last emoji in string
        //     currentString = currentString.slice(0, -1);
        // }
        input.value = currentStringElements.join('');
    }

    let correspondingEmoji = getEmojiByLetter(letterTyped)
    if (correspondingEmoji != undefined){
        currentStringElements.push(correspondingEmoji);
        // console.log(currentStringElements);

        // console.log(correspondingEmoji);
        // console.log(input.value)
        input.value += correspondingEmoji;

        // change color of element on page using its tabIndex
        let tabIndex = getTabIndexByLetter(letterTyped)
        // console.log("tabIndex is", tabIndex)
        let keyElement = document.getElementById("key"+tabIndex);
        // keyElement.style.backgroundColor = "red";

        changeElementColor(keyElement, "rgba(255, 205, 128, 0.99)");

        //after 5 seconds we wanna call:
        setTimeout(function(){
            changeElementColor(keyElement, "rgba(255, 255, 255, 0.2)");
        }, 100);
    }
}

function changeElementColor(elm, colorString){
    elm.style.backgroundColor = colorString;
}
