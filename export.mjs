// - export 'export named'. disini bisa melakukan export beberapa hal dari 1 file dan masing2 memiliki nama tertentu
//code ada di file math.mjs

// - export default: disini hanya bisa melakukan 1 export secara default dari 1 file, ketika di import nama bisa ditentukan sesuai keinginan
//code ada di file greet.mjs

/*import diogunakan untuk mengambil fungsi, object, variabel yang telah di export dari file lain
cara melakukan import sesuai dengan export yang dilakukan */
//import named
import { pi, exportAdd } from "./math.mjs";
console.log(pi);
console.log(exportAdd(4, 5));

//imprt default
// import greet from './greet.mjs';
// greet();

import helloExport from './greet.mjs';
console.log(helloExport("export default function\n","SholumAxe"));