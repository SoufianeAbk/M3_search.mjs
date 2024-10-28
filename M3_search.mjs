import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const rl = readline.createInterface({ input, output });


function zoekNaamIndex(namenlijst, naam) {
    const index = namenlijst.indexOf(naam);
    return index !== -1 ? index : -1;
}


const namen = ["Amin", "Sofie", "Samantha", "Karel", "Mehdi", "Joris", "Nuria"];
const resultaat = zoekNaamIndex(namen, "Nuria");
console.log(resultaat); // Output = 6 voor Nuria bv

process.exit()