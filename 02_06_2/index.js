import { beolvas } from "./beolvas.js";

const tanteremLista = beolvas("./petrik-termek.csv");

for (const tanterem of tanteremLista) {
    console.log(tanterem.toString());
}