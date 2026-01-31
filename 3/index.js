import { readMyFile, atlag, kereses } from "./Dolgozo.js"

const dolgozok = readMyFile("./employees.txt");

console.log(`3.2: a cégnél ${dolgozok.length} programozó dolgozik!`);
console.log(`3.3: az alkalmazottak havi átlagjövedelme: $${atlag().toFixed(1)}`);
console.log("3.4:")
console.log(await kereses())