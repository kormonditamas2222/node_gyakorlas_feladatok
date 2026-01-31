import { halmazFeltoltes, metszet } from "./feladat2.js";

const halmazA = await halmazFeltoltes("A");
const halmazB = await halmazFeltoltes("B");

console.log(`'A' halmaz elemei: ${halmazA}`);
console.log(`'B' halmaz elemei: ${halmazB}`);

const metszetEredmeny = metszet(halmazA, halmazB);

console.log(`'A'∩'B': ${metszetEredmeny}`);
