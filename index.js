let newPassword = document.querySelector(".new-password");
let generate = document.querySelector(".btn");

let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let digits = "0123456789";
let minus = "-";
let underline = "_";
let spaces = " ";
let special = "!\"#$%&'()*+,./:;<=>?@[]^`{|}~";
let brackets = "[]{}()<>";
let latin_1 = "¡¢£¤¥¦§¨©ª«¬®¯°±²³´µ¶·¸¹º»¼½¾¿";

let charTypes = [
    upperCase,
    lowerCase,
    digits,
    minus,
    underline,
    spaces,
    special,
    brackets,
    latin_1,
];

function getParameters() {
    let length = document.querySelector(".length-selector").value;
    let params = document.querySelectorAll(".param");
    let used = [];
    for (let i = 0; i < params.length; i++) {
        if (params[i].checked) {
            used.push(charTypes[i]);
        }
    }
    createPassword(length, used);
}

function createPassword(charCount, characters) {
    let password = "";

    for (let i = 0; i < characters.length; i++) {
        password +=
            characters[i][Math.floor(Math.random() * characters[i].length)];
    }

    characters = characters.join("");

    while (password.length < charCount - 1) {
        password += characters[Math.floor(Math.random() * characters.length)];
    }

    password = password.split("");

    for (let ii = password.length; ii > 0; ii--) {
        let j = Math.floor(Math.random() * (ii + 1));
        [password[ii], password[j]] = [password[j], password[ii]];
    }
    newPassword.innerHTML = password.join("");
    console.log(password.length);
}

generate.addEventListener("click", getParameters);
