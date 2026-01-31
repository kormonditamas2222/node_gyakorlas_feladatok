import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Írj be egy egész számot: ", szam => {
    rl.question("Írj be egy tetszőleges szöveget: ", szoveg => {
        let kimenet = "megoldás: ";
        szoveg = szoveg.toUpperCase();
        for (let i = 0; i < szam; i++) {
            kimenet += szoveg + " ";
        }
        console.log(kimenet);
        rl.close();
    })
})
