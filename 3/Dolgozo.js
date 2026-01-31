import fs from 'node:fs';
import * as csv from 'csv/sync'
import readline from 'node:readline/promises';

export class Dolgozo {
    constructor(nev, jovedelem, ev, lakhely) {
        this.nev = nev;
        this.jovedelem = jovedelem;
        this.ev = ev;
        this.lakhely = lakhely;
    }
}

export function readMyFile(filePath) {
    const dolgozok = [];
    const tartalom = fs.readFileSync(filePath)

    const feldolgozott = csv.parse(tartalom, {
        delimiter: ';',
        columns: true
    });

    for (const adat of feldolgozott) {
        const dolgozo = new Dolgozo(adat.name, parseInt(adat.income.slice(1)), parseInt(adat.birthyear), adat.location);
        dolgozok.push(dolgozo)
    }
    return dolgozok;
}

export function atlag() {
    const dolgozok = readMyFile("./employees.txt");
    let sum = 0;
    for (const dolgozo of dolgozok) {
        sum += dolgozo.jovedelem / 12;
    }
    return sum / dolgozok.length;
}

export async function kereses() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    const dolgozok = readMyFile("./employees.txt")
    const keresendo = await rl.question("írd be a keresett nevet: ");
    rl.close();
    let dolgozo = dolgozok.find(d => d.nev == keresendo);
    if (dolgozo == undefined) {
        return "nincs ilyen nevű alkalmazott a cégnél"
    }    
    return `életkor:      ${2026-dolgozo.ev}
székhely:     ${dolgozo.lakhely}
havi fizetés: ${(dolgozo.jovedelem / 12 * 361.51).toFixed(0)} HUF`
}