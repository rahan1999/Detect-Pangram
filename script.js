let string = window
  .prompt("Provide sentence to check if it is a pangram")
  .toLowerCase()
  .split("");

const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

let filtered = [];
let filteredLetter;

function isPangram() {
  for (i = 0; i < alphabet.length; i++) {
    filteredLetter = string.find((element) => element === alphabet[i]);

    if (filteredLetter !== undefined) {
      filtered.push(filteredLetter);
    }
  }

  if (filtered.length === alphabet.length) {
    window.alert("Sentence in a pangram");
  } else {
    window.alert("Sentence is not a pangram");
  }
}

isPangram();
