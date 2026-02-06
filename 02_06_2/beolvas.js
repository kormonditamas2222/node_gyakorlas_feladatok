import * as csv from 'csv/sync';
import fs from 'node:fs';
import { Tanterem } from './Tanterem.js';

export function beolvas(filePath) {
    const tantermek = [];
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