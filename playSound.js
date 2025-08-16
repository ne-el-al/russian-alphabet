function Letter(name, sound, key) {
    this.name = name;
    this.sound = new Audio(sound);
    this.key = key;
    this.play = function () {
        this.sound.play();
    }
}

const letterA = new Letter("A", "./lettersAudio/А.m4a", "f");
const letterB = new Letter("B", "./lettersAudio/Б.m4a", ",");
const letterV = new Letter("V", "./lettersAudio/В.m4a", "d");
const letterG = new Letter("G", "./lettersAudio/Г.m4a", "u");
const letterD = new Letter("D", "./lettersAudio/Д.m4a", "l");
const letterYe = new Letter("YE", "./lettersAudio/Е.m4a", "t");
const letterYo = new Letter("YO", "./lettersAudio/Yo.m4a", "`");
const letterZh = new Letter("ZH", "./lettersAudio/Ж.m4a", ";");
const letterZ = new Letter("Z", "./lettersAudio/З.m4a", "p");
const letterI = new Letter("I", "./lettersAudio/И.m4a", "b");
const letterIy = new Letter("IY", "./lettersAudio/Iy.m4a", "q");
const letterK = new Letter("K", "./lettersAudio/К.m4a", "r");
const letterL = new Letter("L", "./lettersAudio/Л.m4a", "k");
const letterM = new Letter("M", "./lettersAudio/М.m4a", "v");
const letterN = new Letter("N", "./lettersAudio/Н.m4a", "y");
const letterO = new Letter("O", "./lettersAudio/О.m4a", "j");
const letterP = new Letter("P", "./lettersAudio/П.m4a", "g");
const letterR = new Letter("R", "./lettersAudio/Р.m4a", "h");
const letterS = new Letter("S", "./lettersAudio/С.m4a", "c");
// const letterT = new Letter("T", "./lettersAudio/Т.m4a", "n");
const letterU = new Letter("U", "./lettersAudio/У.m4a", "e");
const letterF = new Letter("F", "./lettersAudio/Ф.m4a", "a");
const letterH = new Letter("H", "./lettersAudio/Х.m4a", "[");
const letterTs = new Letter("TS", "./lettersAudio/Ц.m4a", "w");
const letterCh = new Letter("CH", "./lettersAudio/Ч.m4a", "x");
const letterSh = new Letter("SH", "./lettersAudio/Ш.m4a", "i");
const letterSch = new Letter("SCH", "./lettersAudio/Щ.m4a", "o");
const letterQyi = new Letter("--", "./lettersAudio/Ъ.m4a", "]");
const letterYi = new Letter("YI", "./lettersAudio/Ы.m4a", "s");
const letterQi = new Letter("-", "./lettersAudio/Ь.m4a", "m");
const letterE = new Letter("E", "./lettersAudio/Э.m4a", "'");
const letterYu = new Letter("YU", "./lettersAudio/Ю.m4a", ".");
const letterYa = new Letter("YA", "./lettersAudio/Я.m4a", "z");

const letterObjects = [letterA, letterB, letterV, letterG, letterD, letterYe,
    letterYo,
    letterZh, letterZ, letterI,
    letterIy,
    letterK, letterM, letterN, letterO, letterP, letterR, letterS,
    // letterT,
    letterU, letterF, letterH, letterTs,
    letterCh, letterSh, letterSch, letterQyi, letterYi, letterQi, letterE, letterYu, letterYa];


function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

function playSound(e) {
    var button;
    var keyValue;
    var div;
    if (e.type == "click") {
        keyValue = this.childNodes[3].innerText.toUpperCase();
        button = letterObjects.find((object) => object.name === keyValue);
        div = this;
    }
    else {
        keyValue = e.key;
        button = letterObjects.find((object) => object.key === keyValue);
        const selectedDiv = Array.from(document.querySelectorAll(".letter")).find((div) => div.childNodes[3].innerText.toUpperCase() === button.name);;
        div = selectedDiv;
    }
    if (!button) return;

    div.classList.add("playing");

    button.play();
}

// screen event handling
const letters = document.querySelectorAll(".letter");
console.log(letters);

letters.forEach((letter) => letter.addEventListener("click", playSound));

// keyboard event handling
document.addEventListener("keydown", playSound);

// animation finish after css transition finished 
letters.forEach(letter => letter.addEventListener("transitionend", removeTransition));