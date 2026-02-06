import * as csv from 'csv/sync';
import fs from 'node:fs';
import { Tanterem } from './Tanterem.js';
import chalk from 'chalk';

export function beolvas(filePath) {
    const tantermek = [];
    try {
        const tartalom = fs.readFileSync(filePath);
    }
    catch (e) {
        return chalk.red(e.message);
    }
    const tartalom = fs.readFileSync(filePath);
    const feldolgozott = csv.parse(tartalom, {
        delimiter: ';',
        columns: true
    })

    for (const adat of feldolgozott) {
        const tanterem = new Tanterem(adat.epulet, parseInt(adat.sorszam), adat.osztaly);
        tantermek.push(tanterem);
    }
    return tantermek;
}