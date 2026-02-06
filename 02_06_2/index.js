import { beolvas } from "./beolvas.js";

const tanteremLista = beolvas("./petrik-termek.csv");

if (typeof (tanteremLista) == "string") {
    console.log(tanteremLista);
}
else {
    for (const tanterem of tanteremLista) {
        console.log(tanterem.toString());
    }
}