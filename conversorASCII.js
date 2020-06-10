#!/usr/bin/env node

const program = require("commander");
const package = require("./package.json");

const lowers = [
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
const uppers = lowers.map((letter) => letter.toUpperCase());

const isLower = (value) => /[a-z]/gm.test(value);
const isUpper = (value) => /[A-Z]/gm.test(value);

function convertLetterToASCII(letter) {
    if (letter === " ") {
        return 32;
    }

    const type = isLower(letter) ? lowers : uppers;
    const index = type.findIndex((l) => l === letter);
    return isLower(letter) ? index + 97 : index + 65;
}

function convertToASCII(msg) {
    return msg.split("").map((letter) => convertLetterToASCII(letter));
}

const convertToBase = (number, base) => Number(number).toString(base);

const binaryMsg = (msg) =>
    convertToASCII(msg)
        .map((n) => convertToBase(n, 2).padStart(8, "0"))
        .join(" ");

// // Trocar aqui se quiser em binario
// console.log(binaryMsg("Eu Gosto de AOC"));

// // Trocar aqui se quiser em decimal
// console.log(convertToASCII("Eu Gosto de AOC").join());

program.version(package.version);

program
    .command("binary [msg]")
    .description("Converte uma mensagem passada como parametro")
    .action((msg) => {
        console.log(binaryMsg(msg));
    });

program
    .command("decimal [msg]")
    .description("Converte uma mensagem passada como parametro")
    .action((msg) => {
        console.log(convertToASCII(msg).join());
    });

program.parse(process.argv);
