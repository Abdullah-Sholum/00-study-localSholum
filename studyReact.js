// React Introduction
/*pertama react merupakan pustaka milik Javascript untuk membangun user interface,
react digunakan un8tuk membuat aplikasi single page,
react memungkinkan untuk membuat komponen UI yang reusable 
==cara kerja react
React membuaat Virtual DOM di memori & melakukan manipulasi di Virtual dom daripada melakukan manipulasi DOM di browser secara langsung*/

/*untuk menggunakan react pertama perlu NPM yang telah termasuk di paket NODE.js
ketika dalam produksi kita perlu untuk melakukan set up "react Environment"
*/

//cara install react
/**
 * cara install react bisa dengan 2 cara *disini lebih ke alat yang digunakan untuk membangun & mengembangkan react
 *  -pertama menggunakan CRA  (create-react-app) dengan mengetik sintaks "npx create-react-app nama-aplikasi-react-kita"
 *   cara ini menyediakan semua alat untuk pengembangan seperti webpack, babel. cara ini ramah pemula. mines lebih lambat dari vite
 *  -kedua dengan vite dengan sintaks "npm create vite@latest nama-app --template react"
 *   cara ini lebih cepatt karena menggunakan ESBuild dari pada yang menggunakan webpack. mines kadang butuh penyesuaian & dikumentasi dikit.
 *   dlm instalasi dengan ini nanti ada beberapa pilihan & salah satunya adalah apakah pen buat dengan JS / TS
 * kemudian masuk ke folder react tsb & untuk menjalankan ketik "npm start" / "npm run dev" ada perbedaan fungsi kedua sintaks, tanya gpt
 * masuk ke file direktori src kemudian buka file App.js *coba edit file ini
 */

console.log("Import & export di react");
/*terdapat 2 cara untk melakukan export dan import komponen (fungsi) di react
1. pertama dengan menggunakan Default syntax dengan export statement "export default function functionName() {}" & import statement "import functionName from './nameFileComponent' "
2. kedua dengan menggunakan named sytanx dengan export statement "export function functionName() {}" & dengan import statement "import {functionName} from './nameFileComponent' " 
developer sering menggunkan  default export ketika file yang diexport  hanya memiliki 1 nama komponent, dan menggunakan named export ketika file yang diexport memiliki berbagai komponen dan values*/
