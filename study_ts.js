"use strict";
console.log('hello world!!');
/**cara insall project dengan ts
 * 1. buat folder & isinya
 * 2. inisialisasi projek dengan 'npm init'. command akan membuat file 'package.json' di direkori
 * 3. install TypeScript sebagai dependensi project 'npm install typescript --save-dev'
 * 4. inisiasi TypeScript Config', command akan menkofigurasi project ts & akan membuat file 'tsconfig.json'
 * 5.1. kompilasi file .ts. dengan 'tsc nama-file.ts' hal ini akan membuat file yang sama dengan format 'js
 * 5.2. kompilasi tanpa berganti format.
 *      a. install paket 'ts-node' 'npm install -g ts-node'. install global btw
 *      b. install paket 'ts-node' 'npm install ts-node --save-dev'. install tingkat project btw
 *      c. jalankan dengan 'ts-node namaFile.ts'
 */
/**penulisan object
 * namaObject:{namaProperti: tipeData;} = {namaProperti: value};
 */
let meSholum = {
    name: 'Abdullah Sholum',
    age: 20,
    gender: 'male',
    college: true,
    hobby: ['DIY', 'electoric', 'gaming', 'watch anime', 'reading manga']
};
console.log(meSholum);
