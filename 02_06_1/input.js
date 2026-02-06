import readline from 'readline/promises';

export async function input() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    const szam = parseInt(await rl.question('Adj azt a számot, amennyi értéket akarsz generálni: '))
    rl.close();
    return szam;
}