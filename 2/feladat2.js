import readline from 'readline/promises'

export async function halmazFeltoltes(betu) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    let index = 1;
    let end = false;
    let halmaz = [];
    do {
        let valasz = await rl.question(`'${betu}' halmaz ${index}. eleme: `);
        if (valasz == "") {
            console.log(`'${betu}' halmaz feltöltése befejeződött!`)
            end = true;
        }
        else {
            valasz = parseInt(valasz);
            if (halmaz.includes(valasz)) {
                console.log(`HIBA! A(z) ${valasz} már benne van a(z) '${betu}' halmazban!`)
            }
            else {
                halmaz.push(valasz);
                index++;
            }
        }
    }while(end == false);
    rl.close();
    return halmaz;
}

export function metszet(A, B) {
    let metszetTomb = [];
    for (const szam of A) {
        if (B.includes(szam)) {
            metszetTomb.push(szam);
        }
    }
    if (metszetTomb.length == 0) {
        return "A két halmaz metszete üres halmaz"
    }
    else {
        return metszetTomb;
    }
}