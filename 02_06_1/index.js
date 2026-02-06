import { input } from "./input.js";
import fs from "node:fs";

let magassagok = [];

const szam = await input();

for (let i = 0; i < szam; i++) {
    magassagok.push(Math.floor(Math.random() * 50) + 150);
}
magassagok.sort(function(a, b) {return a - b});
console.log(magassagok);
for (const magassag of magassagok) {
    fs.appendFileSync("magassagok.txt", magassag.toString() + "\n");
}
fs.closeSync(1);