// menulis program
/*deklarasi & inisiasi.
perbedaan 
deklarasi adalah tindakan untuk memperkenalkan variabel ke program dan menentukan tipenya. dengan 'let', 'var', 'const'
contoh deklarasi*/
let deklarasiItem1;
var deklarasiItem2;
/*sedang inisiasi marupakan tindakan untuk menetapkan nilai awal saat saat variabel telah dideklarasikan.
contoh inisiasi */
deklarasiItem1 = 1;
deklarasiItem2 = "berisi string";

// console.log merupakan fungsi menampilkan output ke console
console.log("hello world, hello brudah");

console.log("");
console.log("===expression====");
// expression adalah kode yang dapat dievaluasi menjadi nilai
5; //expression bernilai 5
2 + 4; //expression akan menghevaluasi kode dan akan mengahasilkan nilai 6
// pemanggilan fungsi exppression
console.log(5); //statement
console.log(2 + 4); //statement

console.log("===javascript Best Practice===");
/*
#hindari variabel global, mencangkup semua tipe data, object, fungsi. karena bisa tertimpa fungsi / variable lain
selalu deklarasikan local variabel,
deklarasikan paling atas.
inisiasi variabel.
  -deklarasi object dengan const
  -deklarasi array dengan const
  -jangan gunakan new Object()
      Use "" instead of new String()
      Use 0 instead of new Number()
      Use false instead of new Boolean()
      Use {} instead of new Object()
      Use [] instead of new Array()
      Use /()/ instead of new RegExp()
      Use function (){} instead of new Function()
    --lebih baik
      let x1 = "";             // new primitive string
      let x2 = 0;              // new primitive number
      let x3 = false;          // new primitive boolean
      const x4 = {};           // new object
      const x5 = [];           // new array object
      const x6 = /()/;         // new regexp object
      const x7 = function(){}; // new function object


#javascript diketik secara longgar, suatu variabel dapat berisi semua data, suatu variabel dapat mengubah tipe datanya.
number bisa berubah menjadi string / NaN (Not a Number)
//contoh
let x = 5 + 7;       // x.valueOf() is 12,    =typeof x is a number
let x = 5 + "7";     // x.valueOf() is 57,    =typeof x is a string
let x = "5" + 7;     // x.valueOf() is 57,    =typeof x is a string
let x = 5 - 7;       // x.valueOf() is -2,    =typeof x is a number
let x = 5 - "7";     // x.valueOf() is -2,    =typeof x is a number
let x = "5" - 7;     // x.valueOf() is -2,    =typeof x is a number
let x = 5 - "x";     // x.valueOf() is NaN,   =typeof x is a number

#gunakan === sebagai pembanding
operator "==" melakukan convert tipe data yang mirip sebelum dibandingkan
operator "===" memaksa membandingkan tipe data dan nilai
//contoh
0 == "";        // true
1 == "1";       // true
1 == true;      // true

0 === "";       // false
1 === "1";      // false
1 === true;     // false

#gunakan parameter default
jika fungsi kehilangan argumen maka argumen kosong tsb akan "undenfined" yang akan membuat kode rusak, menetapkan nilai default merupakan kebiasaan bagus
//contoh
function myFunction(x, y) {
  if (y === undefined) {
    y = 0;
  }
}
di ECMAScript 2015 mengizinkan parameter default saat pendefinisian fungsi
//contoh
function (a=1, b=1) { statement }

end switch statement dengan default
//contoh
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
  default:
    day = "Unknown";
}

#hindari number, string dan boolean sebagai objects. perlakukan merekan sebagai nilai primitif. mendeklarasikan tipe tadi sebagai object memperlambat kecepatan eksekusi,
*/
//contoh
// let xContoh = "John";             
// let y = new String("John");
// (xContoh === y) // is false because x is a string and y is an object.
//more worse
// let xContoh = new String("John");             
// let y = new String("John");
// (xContoh == y) // is false because you cannot compare objects.
/**#hindari menggunakan eval()
fungsi eval() berfungsi menjalankan text sebagai code, jangan gunakan
 */

console.log("");
console.log("===statement===");

// statement adalah instruksi untuk melakukan aksi. (membuat variabel, perulangan, pengecekan kondisi)
var yourName;
let yourAge;
/*const numberOfDays; //declaration statement
variabel adalah tempat untuk menyimpan data
penggunaan dengan let*/
let lastName; //declaration statement (mendeklaras ikan variabel)
lastName = "Sholaxe"; //assignment statement (memberikan nilai ke variabel)
console.log(lastName); //expression statement (menampilkan nilai variabel)
// atau menggunakan satu baris
let firstName = "AbdShoLaxe"; // assigmnet expression
console.log(firstName);

console.log("");
console.log("===penulisan variabel===");
console.log("penggunaan dengan let");

/*beberapa penulisan variabel
gantian aktifkan program ke dua dan ketiga agar tidak error */
// let fullname = let lastName;             //akan error karena let lastName merupakan statement dengan sebuah variabel dan tidak bisa digunakan untuk expression
let fullName = (lastName = "sholaxe"); //tidak error karena (let lastName = "sholaxe") merupakan expression
// let fullName = "abdullah" + "Sholum";    //tidak error karena "abdullah" + "Sholum" merupakan expression
console.log(fullName);

console.log("");
console.log("penggunaan dengan const");

// penggunaan dengan const, merupakan kependekan dari constant. artinya variabel yang bersifat constant dan tidak bisa berubah nilainya setelah diinsiialisasi nilainya.
const z = 100;
console.log(z); //jika program dijalankan maka akan menampilkan nilai 100
// const z = 200;
// console.log(z);      //akan error karena nilai variabel z sudah diinisialisasi sebelumnya

console.log("");
console.log("===penulisan tipe data===");

/*tipe data
undefined
tipe data ketika sebuah variabel tidak memiliki nilai*/
let x;
console.log(x); //tampilkan undefined
console.log(typeof x); //tampilkan teks tipe data undefined

console.log("");
console.log("===operator===");

/* Operator
assignment operator*/
let y1 = 10;
let x1 = 5;

console.log("assignment operator");
/*coba ganti2 aktifkan operator*/
// x1 += y1;        //operasi x1 = x1 + y1 //assignment operator penambahan
// x1 -= y1;        //operasi x1 = x1 + y1 //assignment operator pengurangan
x1 *= y1; //operasi x1 = x1 + y1  //assignment operator perkalian
// x1 /= y1;        //operasi x1 = x1 + y1 //assignment operator pembagian
// x1 %= y1;        //operasi x1 = x1 + y1 //assignment operator modulus
console.log(x1); //print ke terminal

console.log("");
console.log("comparison operator");

/*comparison operator
== pembanding nilai, tapi tidak membandingkan tipe data
!= tidak sama dengan
=== membandingkan nilai berdasarkan tipe data
!== tidak sama dengan berdasarkan tipe data
> lebih besar dari
< kurang dari
>= lebih besar sama dengan
<= kurang dari sama dengan
contoh */

console.log(y1 < x1, "<"); //akan menampilkan true
console.log(y1 > x1, ">"); //akan menampilkan false
console.log(y1 == x1, "=="); //akan menampilkan false
console.log(y1 != x1, "!="); //akan menampilkan false

console.log("");
console.log("comparison operator('===')");
// penggunaan comparison operator ""===" yang digunakan untuk membandingkan nilai berdasarkan tipe data

const aString = "10"; //tipe data disini string
const aNumber = 10; //tipe data disini number

console.log("output", aString == aNumber, "karena nilainya sama"); //akan menampilkan true
console.log("output", aString === aNumber, "karena meski nilainya sama tapi tipe datanya beda"); //akan menampilkan false

console.log("");
console.log("logical operator");

/*logical operator 
di javasctipt terdapat 3 macam operator
&& = operator and. logika akan bernilai true ketika semua kondisi bernilai true
|| = operator or. logika akan bernilai true ketika salah satu kondisi bernilai true
!  = operator not.  untuk membalikkan suatu kondisi */

let y2 = 10;
let x2 = 12;
console.log("and operator");
console.log(y2 < 15 && x2 > 10); //(true && true) -> true
console.log(y2 > 15 && x2 > 10); //(false && true) -> false

console.log("");
console.log("or operator");
console.log(y2 < 15 || x2 > 10); //(true || true) -> true
console.log(y2 > 15 || x2 > 10); //(false || true) -> true

console.log("");
console.log("not operator");
console.log(!(y2 < 15)); //!(true) -> false
console.log(!(y2 < 15 && x2 > 10)); //!(true && true) -> !(true) -> false

console.log("");
console.log("===if/else statetment===");
console.log("penggunaan if else 1");
/*berikut contoh penggunaan if/else statement  pada statement is raining*/
const isRaining = true; //apakah kondisi hujan bernilai true atau false

console.log("persiapan sebelum keluar rumah");
console.log("");
if (isRaining) {
  //jika kondisi true maka jalankan kode didalam
  console.log("hari ini hujan harus bawa payung");
}
console.log("berangkat kegiatan");

console.log("");
console.log("penggunaan if else 2");
/*penggunaan if else dengan operator perbandingan serta penggunaan else if untuk beberapa kondisi*/
let y3 = "20";
let x3 = 60;

if (y3 < x3) {
  console.log(y3, "lebih kecil dari", x3);
} else if (y3 > x3) {
  console.log(y3, "lebih besar dari", x3);
} /*else if (y3 == x3) {
    console.log(y3, 'sama dengan', x3);
} */ else if (!(y3 === x3)) {
  console.log(y3, "berbeda", x3, "karena tipe datanya berbeda");
}
console.log("");
console.log("penggunaan if else 3");

let language = "EnglishUsa"; //ganti ganti nilai language untuk melihat hasilnya
let greeting = "Selamat Pagi"; //default greeting yang digunakan untuk pemanggilan

if (language === "English") {
  greeting = "Good Morning!";
} else if (language === "French") {
  greeting = "Bonjour monseur";
} else if (language === "EnglishUsa") {
  greeting = "Yoo wahatsapp ni**a";
}
console.log(greeting);

console.log("");
console.log("penggunaan if else 4 dengan ternary operator");
/*penggunaan if else statement dengan  ternary operator atau conditional expression agar
penulisan if else statement dapat dilakukan dalam satu baris\
ternary operator menggunakan simbol '?' dan ':'
dengan contoh penggunaan
"   kondisi ? nilaiJikaTrue : nilaiJikaFalse    "*/

const isMember = true;
const discount = isMember ? 0.1 : 0; //ternary operator jika member true/false, maka nilai 0.1 atau 0 | 0.1 = 10%
console.log(`anda mendapatkan diskon sebesar ${discount * 100}%`); //${discount * 100}% adalah string literal dibaca dicount dikali dengan 100 persen
//DISINI MENGGUNAKAN BACKTICKS "``" BUKAN SINGLE QUOES "''"
console.log("");
console.log("penggunaan ternary operator 2");
let umur1 = 20;
let status1 = umur1 < 19 ? "remaja" : "dewasa";
console.log(status1);

console.log("");
console.log("penggunaan if truthy & falsy");
/* Truthy & falsy
dalam if statement kita perlu memamasukkan expression yang akan dievaluasi dan umumnya akan mengembalikan nilai boolean untuk menentukan nilai true atau false
. untuk menulisan expression yang tidak mengembalikan nilai boolen kita mengunakan truthy dan falsy. yaitu nilai yang akan dievaluasi akan mengembalikan nilai
true dan false. selain nilai boolean false ada beberapa nilai yang dianggan falsy
berikut tipe data yang dianggap  falsy
-number 0
-BigInt On
-string kosong "" atau ''
-null
-undenfined
-NaN, atau Not a Number */

let name1 = ""; //disini variabel name1 bernilai string kosong
if (name1) {
  console.log(`Halo, apakah benar nama anda ${name1}`);
} else {
  console.log("tolong isi namanya");
}

console.log("");
console.log("===switch case===");
/* penggunaan switch case untuk melakukan tugas pengecekan banyak kondisi*/

let language1 = ""; //expression yang akan dievaluasi di switch case
let greeting1 = null;

switch (
  language1 //switch (expression atau variabel yang akan dievaluasi)
) {
  case "English": //case pertama untuk kondisi pertama dengan kondisi valid
    greeting1 = "Good Morning!"; //statement yang akan dieksekusi
    break; //break untuk menghentikan eksekusi
  case "French":
    greeting1 = "Bonjour!";
    break;
  case "Japanese":
    greeting1 = "Ohayou Gozaimasu!";
    break;
  default: //default untuk kondisi yang tidak valid atau else pada if else statement
    greeting1 = "Selamat Pagi!";
}
console.log(greeting1);

console.log("");
console.log("===while loop===");
console.log("penggunaan for loop");
/*penggunaan for loop untuk melakukan perulangan
dengan struktur penulisan
for(inisiasi variabel; test kondisi; perubahan nilai variabel) {
    statement
}   */
for (let i = 0; i < 5; i += 2) {
  //program diatas dapat dibaca  inisisiasi i, kemudian cek kondisi nilai i apakah true/false, jika true jalankan statement untuk perubahan nilai i
  console.log(i);
}
console.log("");
console.log("penggunaan for of loop");
/*cara ini lebih sederhana dan moderen daripada loop biasa
dengan struktur penulisan
for(arrayItem of myArray) {
  statement
} */
let myArray1 = ["Yae", "Sakura", "Ganyu", "Ayaka", "Raiden"]; // variabel array yang akan di looping
for (const arrayItem of myArray1) {
  // dibaca untuk setiap arrayItem di myArray1
  console.log(arrayItem); // jalankan statement
}
console.log("");
console.log("penggunaan while dan do-while loop");
/*penggunaan while dan do-while loop untuk menampikan angka 1-100*/
let i = 1; //inisiasi variabel i
while (i <= 100) {
  //dibaca selama i kurang dari sama dengan 100
  console.log(i); //maka jalankan statement print i
  i++; //dan tambahkan nilai i dengan 1 setiap perulangan
}
console.log("do-while loop");
let i1 = 1; //inisiasi variabel i1
do {
  //lakukan
  console.log(i1); //jalankan statement print i1
  i1++; //dan tambahkan nilai i1 dengan 1 setiap perulangan
} while (i1 <= 10); //dibaca selama i1 kurang dari sama dengan 100
console.log("infinite loops");
/*infinite loops adalah perulangan yang tidak akan berhenti
 */
// let i2 = 1;                     //inisiasi variabel i2
// while (i2 <= 10) {              //dibaca selama i2 kurang dari sama dengan 10
//   console.log(i2);              //jalankan statement print i2
// }
// pls jan dijalankan program diatas karena akan infinite loops karena nilai true terus
console.log("");
console.log("===Struktur data===");
/*strukturt data yang lebih kompleks yaitu
-object
-array
-map
-set */
console.log("object");
/*Object adalah tipe data yang mampu menyimpan nilai dari berbagai macam tipe data dan membentuk
data yang lebih kompleks
untuk menetapkan obejct pada variabel menggunakan tanda kurung kurawal '{}' */
// const user = {};
/*object berisi pasangan key dan value yang disebut properti seperti pada css 
let object = {key1 : "value1",
              key2 : "value2",
              "key ke3" : "value3"};
key harus berupa string tanpa menggunakan tanda petik kecuali key nya berupa angka atau key nya berupa lebih dari satu kata atau terdapat
spasi. satu object dapat berisi banyak properti.
*/
const sayaSendiri = {
  //pendeklarasian const variabel object dengan sayaSendiri dengan tipe data object
  firstName: "Abdullah",
  lastName: "Sholaxe",
  age: 21,
  isJedi: true,
  isMahasiswa: true,
  "Favorite Character": "Yae sakura, Kiana, Bronya, Raiden Mei",
};
console.log("");
console.log("pemanggilan object");
console.log(sayaSendiri); //print object sayaSendiri
/*selanjutnya pemanggilan object dengan diikuti nama properti dengan format
console.log(`${namaObject.namaProperties}`); */
console.log(`Perkenalkan saya adalah ${sayaSendiri.firstName} ${sayaSendiri.lastName}`);
/*selanjutnya pemanggilan key yang menggunakan spasi maka perlu menggunakan bracket [] 
object["properties"]*/
console.log(`Saya suka karakter ${sayaSendiri["Favorite Character"]}`);

console.log("");
console.log("modifikasi object");
/*value dari properti sebuah object yang dideklarasikan dengan const dapat dirubah karena kita tidak terikat didalamnya.
jadi kita bisa mengedit value dari object yang dideklarasikan dengan const, menggunakan assigment operator ("=")
dengan format penulisan
namaObject.namaKeyProperies = "Value baru"
namaObject["namaKeyProperies"] = angka &/ "Value baru"  */
const contohObject1 = {
  nama: "Buah",
  warna: "merah",
  jumlah: 14,
  "harga pasaran": "Rp. 14.000/kg",
};
console.log("data awal", contohObject1);
contohObject1.nama = "Apel";
contohObject1["harga pasaran"] = "Rp. 20.000/kg";
console.log("data akhir", contohObject1);

console.log("");
console.log("delete object");
//mwnggunakan keyword delete
delete contohObject1.jumlah; //format penulisan "delete namaObject.namaKeyProperties;"
console.log(contohObject1);

console.log("");
console.log("Array");
/* array adalah tipe data yang mengelompokkan lebih dari satu nilai dan menempatkannya dalam satu variabel
pada array data disusun secara berurutan dan diakses menggunakan index dan untuk mengakses nilai di array 
kita menggunakan [] yang berisi urutan datanya
dan index dimulai dari angka 0*/
let myArray2 = ["Reincarnation", 12, 20, 5.5, true, "Falsegod"];
console.log("Data didalam myArray2 ", myArray2);
console.log("Data ke enam atau terakhir dari myArray adalahh ", myArray2[5]);

console.log("");
console.log("Metode PUSH()");
console.log("tambah data ke array");
/* untuk menambah data ke array kita menggunakan metode "push()" dimana metode push akan menambah data diakhir array
format penulisan
namaArray.push("Nama data / nilai")*/
myArray2.push("The Lord");
console.log(myArray2);

console.log("");
console.log("Metode POP()");
console.log("mengeluarkan data dari array");
/*untuk mengeluarkan data atau nilai terakhir dari array kita bisa menggunakan moetode pop()
dengan format
namaArray.pop(); */
myArray2.pop();
console.log(myArray2);

console.log("");
console.log("Metode SHIFT() dan UNSHIFT()");
console.log("mengeluarkan dan menambahkan data diawal array");
/*untuk mengeluarkan data atau nilai pertama dari array kita bisa menggunakan moetode shift()
untuk menambahkan data atau nilai diawal array kita bisa menggunakan moetode unshift()
dengan format
namaArray.shift();
namaArray.unshift("nilai / variabel")*/
myArray2.shift(); //keluarkan index pertama
console.log("metode shift ", myArray2);
myArray2.unshift("The Lord"); //tambahkan data diawal array
console.log("metode unshift", myArray2);

console.log("");
console.log("Metode DELETE()");
console.log("menghapus data dari dari index array");
console.log("metode SPLICE()");
console.log("menghapus elemen array.");
/*pada metode delete data akan dihapus namun index elemen akan tetap ada dan kosong.
sedang pada metode slice data dan index elemen akan terhapus sehingga tidak ada data kosong
format
delete namaArray[index ke-n] 
namaArray.splice(index ke-n, jumlah data yang dihapus dihitung dari index ke-n)
*/
delete myArray2[1]; //hapus data index ke-n
console.log("metode delete ", myArray2);
console.log("");
myArray2.splice(1, 3); //hapus data dari index 1, sebanyak 3 index elemen dan nilanya
console.log("metode splice ", myArray2);
console.log("");
console.log("Metode slice untuk menambahkan data");
/* metode slice juga dapat digunakan untuk menambahkan data dengan memberi argumen ke-3 (atau selanjutnya)
sebagai nilai yang akan dimasukkan ke argumen
dengan format
namaArray.splice(index ke-n, jumlah data dari index-n, 'argumen/nilai')*/
myArray2.splice(2, 0, "wise"); //splice(index ke-2, o data dihapus, 'wise')
console.log(myArray2);

console.log("");
console.log("contoh lebih sederhana");
const myArray3 = [1, 2, 7]; //array dengan 3 elemen
myArray3.splice(1, 1, 2, 3, 4, 5, 6); //splice(index ke-1, 1 data dihapus dari index ke-1, masukkan 2,3,4,5,6)
console.log(myArray3);

console.log("");
console.log("Spread Operator");
/*digunakann untuk menyebarkan nilai array, spread operator dituliskan dengan tiga titik '...'.
spread operator bekerja seperti meleburkan beberapa nilai array menjadi beberapa elemen sesuai nilai indexnya*/
const makananFavorit1 = ["pecel", "soto", "rawon", "lontong", "mie ayam"];
const minumanFavorit1 = ["soda gembira", "rh susu", "es susu", "kopi hitam pahit"];
// console.log(makananFavorit1);
console.log(...makananFavorit1); //output diatas akan memiliki otput yang sama dengan dibawah
console.log(makananFavorit1[0], makananFavorit1[1], makananFavorit1[2]);

console.log("");
// const allFav1 = [makananFavorit1, minumanFavorit1];          //output akan membuat dua array & tidak jadi satu
const allFav1 = [...makananFavorit1, ...minumanFavorit1]; //output akan membuatnya jadi satu array
console.log(allFav1);

console.log("");
console.log("spread operator untuk object literals");
/*menggabungkan beberapa object {}*/

const sayaSendiri2 = { firstName: "Abd", age: 20 };
const sayaSendiri3 = { lastName: "Sholaxe", gender: "M" };
const sayaSendiri23 = { ...sayaSendiri2, ...sayaSendiri3 };
console.log(sayaSendiri23);

console.log("");
console.log("Destruction Object & Array");
/*iterasi object dan array adalah dua hal yang paling sering digunakan untuk mengolah data di
javascript dan JSON(javascript Object Notation) merupakan format dala paling populer yang digunakan dalam
transaksi data saat ini.
*/
/*const contohStrukturJson = {
                      "id": 001,
                      "title": "The Slayer"
                      "Weapon": "Hand", "Any object"
                    },
                    {
                      "id": 002,
                      "title": "The Massacre",
                      "weapon": "gun", "knife"
                    };
dapat dilihat bahwa struktur diatas dibangun dari array dan object.
Apa itu destruction? dalam javascript merupakan sintaks yang dapat mengeluarkan nilai dari array atau properties
dari sebuah object ke dalam satuan yang lebih kecil */
console.log("destruction object {}");
const myProfile1 = {
  alliases: "The Ferryman",
  armada: "oldHyperion",
  power: "super stamina, honkai energy invulnerability, can use all divine key weapons simultaneously, energy manipulation",
  TrueCaptain: true,
  Waifu: "Rita", //LOL
};
console.log(myProfile1);
/*format destruksi object
const {keyValue1, keyValue2, keyValue-n} = namaObjectYang ingin di destruksi.
keyValue yang tidak ingin didestruksi dapat tidak ditulis. jadi saat keyValue yang tidak ditulis dipanggil akan error*/
const { alliases, armada, power, waifu } = myProfile1; //KeyValue bisa tidak ditulis semuanya.
console.log("profile hyperion captain. alliases: ", alliases, "armada: ", armada, "power: ", power); //akan error ketika keyValue ditulis namun tidak di destruction sebelumnya

console.log("");
console.log("destructing assignment");
/*melakukan destruction pada variabel yang sudah dideklarasikan */
const myProfile2 = {
  //buat object dengan const
  alliases1: "The Captain",
  armada1: "newHyperion",
  power1: "super stamina, honkai energy invulnerability, can use all divine key weapons simultaneously, energy manipulation, etc",
  TrueCaptain: false,
  Waifu: "luna, kongming, rita etc", //LOL
};
let alliases1 = "OnlySpace"; //variabel let dengan nama yang sama dengan keyValue object
let armada1 = "Unknown"; //variabel let dengan nama yang sama dengan keyValue object
({ alliases1, armada1 } = myProfile2); //destruction variabel, disini kita bisa coba aktifkan non aktifkan
console.log(alliases1); //tampilkan variabel / value dari keyValue jika destruction variabel dah ada
console.log(armada1); //tampilkan variabel / value dari keyValue jika destruction variabel dah ada
let {alliases1 : nameMyProfile2 } = myProfile2;     //destructing alliases {properti : aliasProperti} = object
console.log("object properti alias \n",nameMyProfile2);                        //panggil allias
let captainHI3 = "Captain";
let [a1, a2, a3, a4, a5] = captainHI3;      //destructing captain menjadi a1 dst
console.log("string destructing\n", a1);
// Create an Array Destructuring
const fruits = ["Bananas", "Oranges", "Apples", "Mangos"];
let [fruit1, fruit2] = fruits;
/* Destructuring skipper*/
// let [fruit1,,,fruit2] = fruits;      //melakukan skipping ke 2 elemen setelah f1
/* Destructuring Array Position Values*/
// const {[0]:fruit1 ,[1]:fruit2} = fruits;
/**swapping Variabel */
let firstName43 = "John";
let lastName43 = "Doe";
[firstName43, lastName43] = [lastName43, firstName43];

console.log("");
console.log("Default Values");
/*ketika mendestruksikan object dan menetapkan nama dari yang bukan nama dari properti / keyValues object maka values tersebut akan menjadi "Undefinded"
 */
({ power1, capLike, capHates = true } = myProfile2); //destruksi object, dengan keyValue, falseKeyValue & assignmentFalseKeyValue(bisa diganti true / false)
console.log(power1); //panggil keyValue
console.log(capLike); //pangguil falseKeyValue tanpa tanda assignment
console.log(capHates); //panggil falseKeyValue dengan tanda assignment

console.log("");
console.log("assigning to different local variabel names");
/*disini kita mendestruksikan nama keyValue tanpa harus menyamakannya dengan keyValues object terkait
dengan format
const {keyValueObject1: keyValueDestruksi1, keyValueObject2: keyValueDestruksi2, keyValueObject3: keyValueDestruksi3} = namaObject; */
const likedCharHI3 = {
  name2: "Yae Sakura",
  gender: "Female",
  birthDay: "July 22",
  age: 500,
};
const { name2: CharName, gender: sex, birthDay: tanggalLahir, age: umur } = likedCharHI3;
console.log("Captain Love Character");
console.log(CharName);
console.log(sex);
console.log(tanggalLahir);
console.log(umur);

console.log("");
console.log("destructing array []");
/*destruction array menggunakan kurung siku "[]"
dan destrucition array bekerja berdasarkan urutan index array
dengan format 
penulisan constp[nameValue1, nameValue2, nameValue3, nameValue-n] = nameArray;  */
const genshinFav = ["Yae Miko", "Raiden Shogun", "Ayaka", "Ganyu", "Nahida", "Furina"];
const [firstWaifu, secondWaifu, thirdWaifu, fourthWaifu, , sixthWaifu] = genshinFav; //posisi penamaan berdasarkan posisi pendaklarasian di array
/*jika ingin mendestruksikan nilai index ke 2/3/4/-n kita bisa mengkosongkan nilainya, sesuai index yang tidak ingin ditampilkan*/
console.log(firstWaifu);
console.log(secondWaifu);
console.log(thirdWaifu);
console.log(fourthWaifu);
// console.log(fifththWaifu);    //akan error karena tidak ada index ke 5
console.log(sixthWaifu);

console.log("");
console.log("destructing assignment array");
/*destruksi asignment ke array agar keyValue yang di distruksi menjadi prioritas ketika dipanggil */
let myFirstWaifu1 = "None";
let mySecondWaifu1 = "None & nope";
[myFirstWaifu1, mySecondWaifu1] = genshinFav; //destruksi asignment ke array
console.log(myFirstWaifu1);
console.log(mySecondWaifu1);

console.log("");
console.log("default values");
/*kita bisa membuat nilai defult pada array jika variabel tidak dapat dijangkau array */
const food1 = ["rujak"]; //array 1 elemen

const [favFood1, FavDrink1 = "teh susu"] = food1; //destruksi array index0 dan destruksi array index1 dengan nilai default
console.log(favFood1);
console.log(FavDrink1);

console.log("");
console.log("tipe data Map");
/*map adalah tipe data seperti object dengan format key-value, namun pada map memperbolehkan key dengan tipe data apa pun, dibanding
object yang hanya key string / symbol 
format penulisan map
const namaMap = new Map ([
  ['key1', 'value1'],
  [key2, value2],
  [key3, value3],
]);
note, sintaks "new Map" merupakan standard penulisan konstruktor dalam javascript, dimana "new" wajib ditulis dan "Map" merupakan standar penulisan
agar javascript tahu kita membuat map & mempermudah pengembang lain untuk membaca kode
*/

const myMap1 = new Map([
  //definisikan map dengan konstrukor "new Map" | wajib sama
  ["1", "sebuah nilai string"], //key1 string dengan value1 string
  [1, "sebuah nilai number"], //key2 numgber dengan value2 string
  [true, true], //key3 boolean dengan value3 boolean
]);

console.log(myMap1);

console.log("");
console.log("Metode GET() & SET()");
/*metode Get() untuk mengambil nilai dengan keyValue tertentu 
metode Set() untuk menambahkan key-value
dengan format penulisan
console.log(namaMap.get('keyValue'));       //get() untuk mengambil nilai dari key1
namaMap.set('keyValue', 'value');          //set() untuk menambahkan key4 dengan value4
*/
const capital = new Map([
  ["Jakarta", "Indonesia"],
  ["London", "England"],
  ["Tokyo", "japan"],
  ["Moskow", "Russia"],
]);
console.log("Data capital", capital); //print map capital
console.log("jumlah key-value-", capital.size); //fungsi .size digunakan untuk menampilkan jumlah key-value pada map
console.log("Tampilkan ", capital.get("Jakarta")); //ambil data key Jakarta dari map capital
capital.set("Berlin", "German"); //tambahkan key Berlin dengan value German ke map capital

console.log("");
console.log("jumlah key-value-", capital.size); //tampilkan jumlah data sekarang
console.log("Tampilkan ", capital.get("Berlin")); //tampilkan data key Berlin dari map capital
console.log("Data capital", capital);

console.log("");
console.log("Metode HAS() & DELETE()");
/*metode has() untuk mengecek apakah sebuah key ada di map
metode delete() untuk menghapus key-value tertentu*/
const kotaMap = new Map(); //salah satu cara untuk mendelarasikan map namun cara tsb tidak sesuai standar
kotaMap["myKey1"] = "my Value"; //ketika menetapkan nilai map dengan cara ini maka data akan disimpan sebagai generic object. bukan map
console.log(kotaMap["myKey1"]); //tampilkan nilai dari key1
console.log(kotaMap.has("myKey1")); //maka hasilnya akan false karena data bukan map dan tidak bisa menggunakan fitur map .has()
console.log(kotaMap.delete("myKey1")); //maka hasilnya akan false karena data bukan map dan tidak bisa menggunakan fitur map .delete()

console.log("");
console.log("Struktur data Set");
/*set adalah kumpulan nilai (set of value), dalam set data tidak berurutan, tidak di index, bersifat unik dan tidak ada duplikasi */
const numberSet = new Set([1, 4, 6, 4, 1]); //definisikan set dengan konstruktor "new Set" | wajib sama
console.log("nilai set awal", numberSet);

console.log("add() untuk menambahkan nilai ke set");
/* fungsi add() hanya menerima satu argumen jika ingin memasukkan array maka nilai tersebut akan anggap satu elemen sendiri
format penulisan 
namaSet.add(nilai) */
numberSet.add(2); //tambahkan nilai ke set
numberSet.add(3);
numberSet.add(5);
numberSet.add(10);
numberSet.add(6); //nilai 6 tidak akan ditambahkan karena nilai 6 sudah ada di set
console.log("nilai set setelah ditambah", numberSet);

console.log("delete() untuk menghapus nilai dari set");
/*fungsi delete() untuk menghapus data berdasarkan nilainya, bukan urutan / index
format
namaSet.delete(nilai) */
numberSet.delete(10);
console.log("nilai set setelah dihapus", numberSet);

console.log("");
console.log("WeakMap & WeakSet");
console.log("WeakMap masih belum jelas dikit");
/*glosarium
Garbage Collection adaklah proses dimana interpreter JavaScript mengambil kembali memori yang tidak 
lagi "dapat dijangkau" dan tidak dapat digunakan oleh program 
WeakMap merupakan variabel dari map yang mendukung garbage collection
yang dimaksud weak dalam weakMap adalah referensi terhadap nilai yang disimpan. apabila nilai yang disimpan di weakMap sudah tidak bisa dijangkau / tidak bisa diakses
maka referensi di memorinya akan dihapus
hal pembeda antara map dan weakMap
1. key weakMap harus object / array. nilai primitif tidak bisa digunakan sebagai key karena tidak mendukung garbage collection
2. weakMap memiliki method get(), set(), has() & delete(). tapi weakMap tidak termasuk kategori iterable sehingga tidak punya method
   keys(), values() / forEach()
3. weakMap tidak memiliki properti size. kerena ukuran weakMap dapat berubah karena proses garbage collection
contoh map & weakMap*/

const visitCountMap = new Map(); //buat map untuk menghitung jumlah pengunjung
/**
 * 
 * @param {string} usera -parameter user
 */

function countUser(usera) {
  //fungsi untuk menghitung jumlah pengunjung
  let count = visitCountMap.get(usera) || 0; //mengambil nilai dari key user, jika tidak ada maka nilai 0
  visitCountMap.set(usera, count + 1); //menambahkan nilai key user dengan nilai count + 1
}

let jonas = { name: "Jonas-Red" }; //buat variabel jonas dengan object
countUser(jonas); //jalankan fungsi countUser dengan argumen jonas/ tambahkan jonas ke fungsi countUser

jonas = null; //hapus variabel jonas

setTimeout(function () {
  //setelah 5 detik
  console.log(visitCountMap); //tampilkan nilai dari visitCountMap
}, 1000);
const { log } = require("console");
const { json } = require("stream/consumers");
/*ketika reference jonas dihapus dengan "null" harusnya map tidak menyimpan data user (garbage collection) namun kenyataannya 
data jonas masih tersedia di map, sampai benar-benar dihapus user */

const { inspect } = require("util"); //import module util
const visitCountMap1 = new WeakMap(); //buat weakMap untuk menghitung jumlah pengunjung dengan konstruktor "new WeakMap"

function countUser1(userb) {
  //fungsi untuk menghitung jumlah pengunjung dengan argumen user
  let count = visitCountMap1.get(userb) || 0; //mengambil nilai dari key user, jika tidak ada maka nilai 0
  visitCountMap1.set(userb, count + 1); //menambahkan nilai key user dengan nilai count + 1
}
console.log("");
let jonas1 = { name: "Jonas-Blue" }; //buat variabel jonas dengan object
countUser1(jonas1); //jalankan fungsi countUser dengan argumen jonas/ tambahkan jonas ke fungsi countUser

jonas1 = null; //hapus variabel jonas

setTimeout(function () {
  //setelah  ms
  console.log("");
  console.log(inspect("fungsi weakMap memang agak lama \n", visitCountMap1, { showHidden: true })); //tampilkan nilai dari visitCountMap
}, 0);
/*Map Method and properties
Method	      Description
new Map()	    Creates a new Map object
clear()	      Removes all the elements from a Map
delete()	    Removes a Map element specified by a key
entries()	    Returns an iterator object with the [key, value] pairs in a Map
forEach()	    Invokes a callback for each key/value pair in a Map
get()	        Gets the value for a key in a Map
groupBy()	    Groups object elements according to returned callback values
has()	        Returns true if a key exists in a Map
keys()	      Returns an iterator object with the keys in a Map
set()	        Sets the value for a key in a Map
size	        Returns the number of Map elements
values()	    Returns an iterator object of the values in a Map
more info "https://www.w3schools.com/jsref/jsref_obj_map.asp"
*/

console.log("");
console.log("===Function===");
/* fungsi digunakan untuk menghasilkan output dari input tertentu, fungsi dapat digunakan untuk blok prosedural yang berulang.
struktur fungsi di javascript dideklarasikan dengan keyword "function" diikuti dengan nama fungsi, kemudian diikuti tanda kurung "()" / "parentheses" tanpa spasi,
terkadang terdapat informasi tambahan dalam tanda kurung yang disebut parameter.
kemudian terdapat kurung kurawal "{}" yang berisi logika fungsi tersebut
function namaFungsi(parameterA, parameterB) {
  blok logika fungsi
  return parameterA + parameterB;

parameter & argument
parameter adalah variabel input yang digunakan dalam deklarasi fungsi
function namaFungsi1(parameter1, paramter2) {
  return paremeter1 * paramter2;
}
argument adalah nilai atau expression yang dimasukkan saat pemanggilan fungsi
namaFungsi1(argument1, argument2);
+untuk tambahan variabel pada parameter tidak memperlukan tipe data
sebuah fungsi yang memiliki parameter ketika dipanggil parameter tersebut harus diisi dengen nilai argumen
+sebuah fungsi dapat menghasilkan output / mengembalikan sebuah nilai dengan fungsi "return"
};*/
function multiply(a1, b1) {
  //buat fungsi multiply dengan parameter a1 & b1
  return a1 * b1; //kembalikan nilai a1 * b1
}
let result1 = multiply(10, 2); //buat variabel result1 dengan nilai fungsi multiply dengan argumen 10 & 2
console.log("return", result1); //tampilkan nilai result1

console.log("");
console.log("expression function");
/*expression function merupakan cara lain menulis fungsi, expression adalah kode / inturuksi untuk mengembalikan nilai.
jadi expression function adalah fungsi yang disimpan dalam variabel.
pada expression function tidak perlu menuliskan fungsinya / anonymous function*/
const multiply1 = function (a2, b2) {
  //buat variabel multiply1 dengan nilai fungsi dengan parameter a2 & b2
  return a2 * b2; //kembalikan nilai a2 * b2
};
console.log("expression function", multiply1(30, 4)); //tampilkan nilai dari fungsi multiply1 dengan argumen 30 & 4

console.log("");
console.log("parameter function");
/*selain penjelasan sebelumnya parameter merupakan variabel yang di definisikan sebagai sebuah input dari fungsi yang dapat
berupa string, number, object dll. 
jika parameter terbuat dari object kita bisa memanfaatkan destruction object untuk mendapatkan nilainya*/
const user1 = {
  //object usert1
  id: 1, //keyValue id
  displayName: "Sholaxe", //keyValue displayName
  alliases: "Titik", //keyValue alliases
};

/* format penulisan destruksi objek
func namaFugnsi({keyValue1, keyValue2, keyValue-n}) {
  console.log(keyValue1, keyValue2, keyValue-n);
}
*/
function introduce({ displayName, alliases }) {
  console.log(`${displayName} is ${alliases}`);
}
introduce(user1); //panggil fungsi introduce dengan argumen user1

console.log("");
console.log("default parameter");
/*default parameter digunakan ketika ketika argumen tidak sesuai parameter, jadi kita bisa membuat nilai sendiri ke parameter yang kosong
degnan format
namaFungsi(parameter1 = nilaiDefault1, parameter2 = nilaiDefault2) 
*/
// function exponentFormula(baseNumber, exponent) {         //tanpa default parameter
function exponentFormula(baseNumber, exponent = 2) {
  //dengan default parameter
  const result = baseNumber ** exponent;
  console.log(`${baseNumber} pangkat ${exponent} adalah ${result}`);
}
exponentFormula(2, 3); //panggil fungsi exponentFormula dengan argumen 1 & 2
exponentFormula(3); //panggil fungsi exponentFormula dengan argumen 1

console.log("");
console.log("rest parameter");
/* pada spread operator (...)  digunakan untuk menyebarkan nilai array menjadi beberapa elemen berbeda, para rest elemen adalah kebalikannya.
pada rest elemen penulisan juga menggunakan consecutive dots(...). kita bisa menggabungkan beberapa elemen menjadi satu array, teknik ini bermanfaat
untuk membuat fungsi dengan parameter tidak pasti.
format penulisan
namaFungsi(...namaParameter) {
 */

function sum(...numbers) {
  //buiat fungsi sum dengan parameter numbers
  let result = 0; //buat variabel result dengan nilai 0
  for (let number of numbers) {
    //buat perulangan for of untuk setiap number di numbers
    result += number; //tambahkan nilai result dengan number
  }
  return result; //kembalikan nilai result
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

console.log("");
console.log("arrow function");
/* glosarium
fat arrow "=>" merupakan sintaks yang diperkenalkan pada ES6 untuk membuat fungsi dengan penulisan yang lebih singkat
arrow function mirip seprti regular fungction tapi menggunakan fat arrow jadi lebih singkat
perbedaan lainnya.
perbedaan sintaks, pada regular  function berupa function declaration dan function expression,
pada arrow function hanya berupa exprssion function. karena itu nama lengkap arrow function yaitu arrow function expression
*/
// contoh 1 *tanpa parameter
hello = () => {
  return "Hello World!";
}
// contoh 2 *tanpa parameter, mengembalikan 1 statement
hello = () => "Hello World!";

//contoh 3  *dengan parameter, mengembalikan statement & parameter
hello = (val) => "Hello " + val;

//contoh 4  *tanpa kurung () dengan 1 parameter
hello = val => "Hello " + val;

//dengan .this
/**keyword this di fungsi merepresentasikan object yang dipanggil fungsi, bia window, document, button */
//perbedaan penggunaan fungsi regular dengan .this & fungsi arrow .this

console.log("regular function dengan this")
//regular function tanpa this
console.log("anggal aja file html")
/**<button id="btn">Click Me!</button> */
console.log("anggap aja File script.js")
/*let hello = "";
hello = function() {
  document.getElementById("#").innerHTML += this;
}
//The window object calls the function:
window.addEventListener("#", hello);
//A button object calls the function:
document.getElementById("#").addEventListener("click", hello);
*/

console.log("arrow Function dengan this");
//anggap script.js
/**hello = () => {
  document.getElementById("demo").innerHTML += this;
}

// The window object calls the function:
window.addEventListener("load", hello);

// A button object calls the function:
document.getElementById("btn").addEventListener("click", hello);
 */


console.log("");
console.log("---regular function---");
/*regular function
//function declaration
format penulisan declaration function
function namaFungsi(parameter) {
  logika fungsi
} */
function sayHello(greet) {
  //buat fungsi sayHello dengan parameter greet
  console.log(`say apaa?? ${greet}!`); //print great
  return greet; //kembalikan nilai greet || jika return tidak ditulis maka fungsi akan mengembalikan nilai undefined
}
/*function expression
//format expression function
const namaFungsi = function(paramter) {
  logika fungsi
} */
const sayName = function (name) {
  //buat variabel sayName dengan nilai fungsi yang memiliki parameter name
  console.log(`Nama saya ${name}`); //print name
  return name; //kembalikan nilai name  || jika return tidak ditulis maka fungsi akan mengembalikan nilai undefined
};
console.log(sayHello("Omagad")); //panggil fungsi sayHello dengan argumen Omagad
console.log("");
console.log(sayName("Kamisato Ryu")); //panggil fungsi sayName dengan argumen Kamisato Ryu

console.log("");
console.log("---arrow function---");
/*arrow function
//function declaration
format penulisan
const namaFungsi = (parameter) => {
  logika fungsi
} */
const sayHelo1 = (greet) => {
  //buat variabel sayHello1 dengan nilai fungsi yang memiliki parameter greet
  console.log(`${greet}!`); //print greet
  return greet; //kembalikan nilai greet
};
//function expression
/*format penulisan
const namaFungsi = (parameter) => {
  logika fungsi
}  */
const sayName1 = (name) => {
  //baut variabel sayName1 dengan nilai fungsi yang memiliki parameter name
  console.log(`Nama saya ${name}`); //print name
  return name; //kembalikan nilai name
};
console.log(sayHelo1("Walaweee")); //panggil fungsi sayHello1 dengan argumen
console.log("");
console.log(sayName1("Ora ora ora")); //panggil fungsi sayName1 dengan argumen

console.log("");
console.log("penulisan arrow function dengan satu parameter ");
/* penulisan fungsi jika hanya memakai 1 parameter, bisa menghilangkan tanda kurung*/

const sayApa = (kalimat) => {
  return `Teriak "${kalimat}"`;
};
console.log(sayApa("pakek nanya"));

console.log("");
console.log("penulisan arrow function tanpa parameter");
/*penulisan fungsi jika tanpa menggunakan parameter */
const perkenalan = () => {
  return "Perkenalkan saya Kira Yoshikage";
};
console.log(perkenalan());

console.log("");
console.log("penulisan arrow function tanpa kurung kurawal {}");
/* penulisan ketika body dari function terdiri 1 baris bisa menghilangkan kurung kurawal {}*/
const punten = (hewan) => console.log(`punten ${hewan}`);
console.log(punten("Anjing"));

console.log("");
console.log("penulisan arrow function tanpa return meski perli dikembalikan");
/*penulisan ketika body dari function terdiri 1 baris dan mengembalikan nilai bisa menghilangkan kurung kurawal {} dan return*/
const multiply2 = (a, b) => a * b;
console.log(multiply2(2, 3));

console.log("");
console.log("===Variabel Scope===");
/*variabel scope (lingkup variabel) mengacu pada area / bagian dari kode dimana variabel tersebut dapat diakses / digunakan
variabel yang dapat diakses dari seluruh script disebut dengan "globally scoped". sedang variabel yang hanya dapat diakses pada fungsi-fungsi
tertentu disebut "locally scoped". variabel di javascript menggunakan fungsi untuk mengelola cakupannya.
jika variabel didefinisikan di luar fungsi maka variable bersifat global & jika variabel di definisikan di dalam fungsi maka
variabel hanya dapat diakses didalam fungsi & beserta turunannya */
//global variabel, dapat diakses pada parent() & child()

console.log("Scope*tambahan, JavaScript Scope");
/**scope (cangkupan) menentukan aksebilitas variabel
 * Variabel di js punya 3 scope
 * -block scope
 * -function scope
 * -global scope
 */
const a = "a"; //pendefinisian dengan const global variabel a

function parent() {
  //fungsi parent
  //local variabel, dapat diakses pada parent() & child(), tidak dapat diakse diluar funsi
  const b = "b"; //pendefinisan dengan const variabel b dalam fungsi parent()

  function child() {
    //local variabel, hanya dapat diakses didalam fungsi child()
    const c = "c"; //pendefinisian dengan const variabel c dalam fungsi child()
  }
}
/*contoh beberapa pendefinisian variabel yang tidak tepat */
function multiply3(num) {
  //fungsi multyply1 dengan parameter num
  total = num * num; //variabel total tidak didefinisikan dengan const, let, var. sehingga menjadi variabel global
  return total; //kembalikan nilai total
}
let total = 9; //buat varibel total 9
let number = multiply3(20); //panggil fungsi multiply1 dengan argumen 20
console.log(total); //tampilkan nilai total\
/*ketika buat variabel dalam fungsi gunakan selalu let, var, const agar variabel menjadi varibel locall, agar mengurangi tabrakan (collision) */

console.log("");
console.log("closure");
/* glosarium
-sebuah fungsi dapa didefinisikan secara global dan didalam fungsi lain (parent & child).
-lexical scope adalah tempat fungsi (child) didefinisikan di (parent), fungsi (child) memiliki akses terhadap variabel local milik fungsi (parent).
-closure adalah ketika sebuah fungsi (child) dapat mengakses variabel local milik fungsi (parent)*/
console.log("");
console.log("penggunaan closure 1");

function init() {
  // buat fungsi init
  const name = "Kiana"; // variabel local (parent)
  function greet1() {
    // fungsi local (child)
    console.log(`Halo, selamat pagi ${name}`); // tampilkan variabel local milik (parent)
  }
  greet1(); //panggil fungsi greet
}
init(); //panggil fungsi init

console.log("");
console.log("penggunaan closure 1.1");
/* disini merupakan contoh dari gpt */
function buatPenambahan(x) {
  //buat fungsi (parent) dengan parameter x
  return function (y) {
    //buat fungsi (child) mengembalikan nilai y
    return x + y; // x + y
  };
}
let tambah5 = buatPenambahan(5); // buat variabel dengan memanggil fungsi dengan argumen 5
console.log(tambah5(2)); // panggil variabel dengan argumen 2

let tambah10 = buatPenambahan(10); // buat variabel dengan memanggil fungsi dengan argumen 10
console.log(tambah10(2)); // panggil variabel dengan argumen 2

console.log("");
console.log("penggunaan closure 2");

function init1() {
  //fungsi init1 (parent)
  const name = "Mei"; //local variabel (parent)
  function greet() {
    //local function (child)
    console.log(`Ohayoo selamat pagi, ${name}`); //statement (child)
  }
  return greet; //kembalikan nilai greet ke outer function (parent)
}
const myGreet = init1(); //isisiasi variabel dari fungsi init1
myGreet(); //panggil variabel myGreet
/* breakdown function diatas
function diatas akan menghasilkan output yang sama dengan 1.1.
perbedaan adalah pada fungsi greet akan dikembalikan dari outer function sebelum dieksekusi, karena variabel name berada
dalam scope function (parent). maka umumnya variabel tersebut akan hilang ketika fungsinya selesai dijalankan.
namun fungsi diatas / fungsi init1 yang diakses melalui myGreet masih memiliki referensi / akses ke variabel name.
variabel pada mekanisme diatas sudah tertutup (closed covered), yang berarti variabel diatas berada didalam closure.*/

/*di javascript tidak bisa mendeklarasikan fungsi & variabel menjadi private seperti java, sehingga sebuah fungsi & variabel dapat
diakses dimanapun, kita perlu private methode untuk membatasi akses ke fungsi / variabel */
console.log("");
console.log("Akibat jika tidak ada private method.");

let counter = 0; //deklarasikan variabel let counter dengan nilai 0

const add = () => {
  //deklarasikan fungsi arrow add dengan paramter kosong
  return ++counter; //kembalikan nilai counter + 1
};
console.log(add()); //panggil fungsi add
console.log(add()); //panggil fungsi add lagi
counter = 23; //deklarasikan
console.log(add());
/*breakdown program diatas
nilai variabel counter akan bertambah ketika memanggil fungsi add(). 
kita juga bisa menambah nilai coounter secara langsung dengan assignment operator.
hal ini perlu dihindari karena perubahan secara langsung pada nilai counter dapat memunculkan bug.
closure memungkinkan kita membuat fungsi dan variabel seolah menjadi private. */
console.log("");
console.log("program dengan closure");

const add1 = () => {
  //buat arrow fungsi tanpa parameter
  let counter = 0; //deklarasikan variabel let dengan nilai 0
  return () => {
    //kembalikan paramter kosong
    return ++counter; //kembalikan nilai counter +1
  };
};

const addCounter1 = add1();
console.log(addCounter1());

console.log("");
console.log("===Object Oriented Programming===");
/*Object Oriented Programming merupakan Paradigma pemrograman yang banyak digunakan untuk membangun aplikasi,
paradigma ini memiliki konsep object yang mengandung dua hal yaitu Atribut dan Method & OOP dangat melekat dengan
konsep object blueprint yang biasa disebut class.
meski javascript tidak berbasis class seperti bahasa java tapi kita bisa menggunakan paradigma OOP.*/

console.log("");
console.log("OOP di Javascript");
/* OOP fokus pada pembuatan object dan interaksi dengan object tersebut.
di OOP, object merupakan entitas yang terdiri dari dua hal, yaitu properti & method.
-Properti, merupakan nilai didalam object yang menyimpan informasi object tersebut.
-Method merupakan fungsi yang meggambarkan aksi yang dapat dilakukan oleh object tersebut.

Paradigma OOP kerap digambarkan dalam kehidupan nyata. contoh
mobil dalam OOP, 
sebuah mobil seperti object OOP.
properti mobil seperti merk, warna, kecepatan & nomor rangka.
methode / kemampuan mobil seperti maju, mundur, belok.
bentuk tabel
object    | properti                              | method
mobil     | merk, warna, kecepatan, nomor sasis   | maju, munmdur, belok.
kemudian penerapan di javascript
*/
const car = {
  //buat object
  //properti
  brand: "Toyota", //property1 (keyValue : value)
  color: "white", //property2 (keyValue : value)
  maxSpeed: 360, //property3 (keyValue : value)
  chassisNumber: "sp-45", //property4 (keyValue : value)
  //methods
  drive: () => {
    //method1 drive
    console.log("driving");
  },
  reverse: () => {
    //method2 reverse
    console.log("reversing");
  },
  turn: () => {
    //method3 turn
    console.log("turning");
  },
};

console.log(car.brand); //panggil properti brand
console.log(car.color); //panggil properti color
console.log(car.maxSpeed); //pangguil properti maxSpeed
console.log(car.chassisNumber); //panggil properti chassisNumber
car.drive(); //panggil method drive
car.reverse(); //panggil method reverse
car.turn(); //panggil method turn

/* study kasus selanjutnya adalah jika kita ingin membuat object car lain seperti myCar, youCar akan membuat program tidak efsien
karena kita harus menulis ulang program diatas. di OOP ada namanya blueprint yang biasa disebut dengan "Class" yang berguna seperti 
cetakan atau template untuk membuat object yang sudah terdefinisikan variabel dan methodnya, sehingga kita hanya perlu memasukkan parameter & 
variabel kedalamnya  sesuai class 
object Blueprint (class)  >  objectA (instance)
                          >  objectB (instance)
                          >  objectC (instance)

kebanyakan paradigma OOP diterapkan pada "class-based programming language" serti java, c++, c# & python. & javasrcript bukan merupakan salah satunya.
karena dalam javascript tidak mengenal konsep "Class" tapi paradigma OOP tetap bisa diterapkan di Javascript.

Javascript merupakan bahasa "prototype-based language" artinya javascript menggunakan prototype sebagai template untuk membuat object.
disini kita akan fokus mempelajari cara membuat blueprint
*/
console.log("");
console.log("Constructor form");
/*constructor form merupakan cara untuk membuat blueprint dengan menggunakan fungsi constructor*/
/* dibawah akan merupakan contoh untuk membuat  object blueprint dari sebuah mobil.*/

//sytax untuk membuat class dengan constructor
/**
class ClassName {
  constructor() { ... }
  method_1() { ... }
  method_2() { ... }
  method_3() { ... }
}
 */

//constructor function Car
//format penulisan
// "function NamaConstructor(parameter1, paramter2, parameter3) {}"
function Car(brand, color, maxSpeed, chassisNumber) {
  //penulisan nama constructor function harus menggunakan huruf kapital untuk membedakan fungsi biasa dengan constructor function

  //properti this agar paramter dapat digunakan didalam constructor function
  //format penulisan
  // "this.parameter = parameter;"
  this.brand = brand; //this.brand merupakan properti dari parameter dari brand agar nilai dari parameter dapat digunakan didalam constructor function
  this.color = color; //this.color merupakan properti dari parameter dari color agar nilai dari parameter dapat digunakan didalam constructor function
  this.maxSpeed = maxSpeed; //this.maxSpeed merupakan properti dari parameter dari maxSpeed agar nilai dari parameter dapat digunakan didalam constructor function
  this.chassisNumber = chassisNumber; //this.chassisNumber merupakan properti dari parameter dari chassisNumber agar nilai dari parameter dapat digunakan didalam constructor function
}

//penulisan method dengan prototyope
//format penulisan
// "NamaConstructor.prototype.namaMethod = function() {}"
Car.prototype.drive = function () {
  //membuat method drive dengan prototype.
  //format penulisan console.log dibawah
  //console.log(`${this.parameter1} ${this.parameter2} is driving`)
  console.log(`${this.brand} ${this.color} is driving`);
};

Car.prototype.reverse = function () {
  //membuat method reverse dengan prototype.
  console.log(`${this.brand} ${this.color} is reversing`);
};

Car.prototype.turn = function () {
  //membuat method turn dengan prototype.
  console.log(`${this.brand} ${this.color} is turning`);
};

/*glosarium
-instance merupakan opbject yang dibuat dari sebuah class* di javascript instance dibuat dengan constructor function
membuat obcject mobil dengan instance dari constructor function Car */

//membuat object mobil dengan instance dari constructor function Car
//function Car (brand, color, maxSpeed, chassisNumber)
const car1 = new Car("Toyota", "White", 350, "sp-45");
const car2 = new Car("Honda", "Black", 300, "cv-30");
const car3 = new Car("Ford", "Yellow", 290, "cm-143");

//print object car ke console
console.log(car1);
console.log(car2);
console.log(car3);
console.log("");

//pangggil method car.drive
car1.drive();
car2.drive();
car3.drive();
console.log("");

//panggil method car.reverse
car1.reverse();
car2.reverse();
car3.reverse();

/*perbedaan constructor function dengan regular function
1. nama constructor form harus huruf kapital "Car", "User", "Character", "Valkrye", "Weapon" dll.
   untuk membedakannya dengan fungsi biasa.
2. penggunaan keyword "this" untuk mengakses parameter dari fungsi agar dapat digunakan didalam constructor function.
   "namaConstructor (parameter1, parameter2, parameter3) {
    this.parameter1 = parameter1;         //this.parameter1 merupakan properti dari parameter1. agar nilai dari parameter1 dapat digunakan didalam constructor function
    this.parameter2 = paramter2;
    this.parameter3 = paramter3;  
   }"
   setelah itu "this.namaParameter-n" dapat digunakan untuk membuat berbagai method yang diperlukan
3. constructor function memiliki internal function yang disebut "prototype". properi ini digunakan untuk mendefinisikan 
   method yang akan dimiliki object yang dibuat. alasa methode perlu didefinisikan di dalam protoype agar mudah untuk diwarisi 
   ketika melakukan pewarisan
4. untuk membuat object dengan instance dari constructor function dengan format
   //const namaObject = new NamaConstructor(argumen1, argumen2, argumen3)

note* constructor function hanya dapat digunakan degnan regular function, tidak bisa menggunakan arrow function. karena arrow function tidak bisa manggunakan keyword "new"    
*/

console.log("");
console.log(`sintaks "Class" di ES6`);
/*pada javascript ES6 pada pembuatan construction function kita bisa menggunakan keyword "Class". hal ini membuat Penerapan Paradigma OOP di javascript mirip seperti bahasa pemrograman berbasis Class. 
dibawah ditulis constructioon function Car dengan menggunakan class.*/

class CarClass {
  //buat class CarClass
  constructor(brand, color, maxSpeed, chassisNumber) {
    //buat constructor dengan parameter brand, color, maxSpeed, chassisNumber
    //properti this agar paramter dapat digunakan didalam constructor function
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.chassisNumber = chassisNumber;
  }

  //penulisan method dengan class
  drive() {
    //membuat method drive dengan class.
    console.log(`${this.brand} ${this.color} is driving`);
  }
  reverse() {
    //membuat method reverse dengan class.
    console.log(`${this.brand} ${this.color} is reversing`);
  }
  turn() {
    //membuat method turn dengan class.
    console.log(`${this.brand} ${this.color} is turning`);
  }
}

//buat object mobil dengan instance dari class CarClass
//format penulisan
//new NamaClass(argumen1, argumen2, argumen-n)
const carA1 = new CarClass("BMW", "Black", 300, "bm-23");
const carA2 = new CarClass("Mercedes", "White", 300, "mc-34s");
const carA3 = new CarClass("Audi", "Blue", 340, "ad-23");

//print object carA ke console
console.log("");
console.log("Penggunaan Class");
console.log(carA1);
console.log(carA2);
console.log(carA3);
console.log("");

//print method carA.drive
carA1.drive();
carA2.drive();
carA3.drive();
console.log("");

//print method carA.reverse
carA1.reverse();
carA2.reverse();
carA3.reverse();
console.log("");
/*meskipun di javascript sudah ada "Class" tapi itu tidak membuat javascript menjadi class-base language. faktanya penggunaan sintaks
"Class" di javascript hanyalah sebagai "Sintactic Sugar" atau cara alternatif dalam mendeskripsikan constructor function.
lakukan pengecekan dengan mengecek tipe Class yang telah dibuat */

class carClass {}
console.log("tipe dari class carClass adalah : ", typeof carClass);

console.log("");
console.log("===++++Properti dan Method++++===");
console.log("===properti===");
/* Properti merupakan bagian dari class yang mendefinisikan value(argumen) yang terkandung dalam instance class
seperti contoh pada class Car kita memiliki properties brand, color, maxSpeed, chassisNumber. dan kemudian pada contoh lain
seperi pada class Mail kita memiliki properties sender, receiver, subject, dan body.
value sebuah properties biasanya diambil dari argumen constructor ketika kita mendefinisikan variabel menggunakan class.
hal ini dilakukan agar setiap membuat instance value dapat bervariasi.
namun terkadang properti tidak diambil dari value(argumen) dalam instance class, tapi didefinisikan sendiri didalam class itu sendiri.
*/
class Motor {
  constructor(color, capacityMachine, type) {
    this.brand = "BMW"; //properti yang didefinisikan sendiri didalam class
    this.color = color; //properti yang diambil dari value (argumen) dalam instance class
    this.capacityMachine = capacityMachine;
    this.type = type;
    //fungsi math.random untuk menghasilkan nilai random dari 1 sampai 1000
    this.chassisNumber = `${this.brand} - ${Math.floor(Math.random() * 1000) + 1}`; //fungsi untuk menghasilkan random number
  }
}

/*breakdown fungsi math
-math.floor() berfungsi membulatkan bilangan bulat kebawah
-math.random() berfungsi menghasilkan nilai random dari 0 sampai 1
-* mengkalikan nilai math.random() dengan 1000
-+1 agar nilai random tidak 0
*/

const motor1 = new Motor("White", 1000, "Sport");
console.log(motor1);

console.log("");
console.log("--properti getter & setter--");
/*standarnya properti didalam sebuah instance class bersifat "mutable" artinya dapat dirubah nilainya, meski value properti tersebut telah ditetapkan
didalam class / sistem. namun hal ini akan menyebabkan bug pada program.
*/
console.log("properti dirubah");
motor1.chassisNumber = "BMW -S- 1000";
console.log(motor1);
/*untuk memberi proteksi pada properti yang didefinisikan didalam class tanpa mengambil dari value(argumen) instance class kita bisa menggunakan
properti getter & setter 
glosarium
terdapat dua jenis properti dalam sebuah class.
1. -data properti, merupakan properti yang langsung menyimpan nilai dari sebuah object.
    dari konteks constructor class, data properti adalah properti yang diambil dari value(argumen) instance class, properti yang telah diset didalam 
    constructor class / class. jadi sebelumnya kita telah menggunakan data properti.
2. -accessor properti, merupakan nilai yang diatur oleh getter dan setter. 
    value yang didapatkan dari properti tersebut dikontrol oleh method "get" dan 
    cara menetapkan value tersebut dikontrol oleh method "set".*/
console.log("accessor properties");

class Valkrye {
  //buat class
  constructor(firstName, lastName) {
    //buat constructor dengan parameter
    this.firstName = firstName; //buat data properti firstName dengan value ditetapkan via parameter
    this.lastName = lastName; //buat data properti lastName dengan value ditetapkan via parameter
  }

  //method getter dan setter dibawah merupakan accessor properties dan digunakan untuk mengakses properti fullName

  //method getter tidak tidak menerima argumen namun harus mengembalikan nilai dan nilai tersebut akan menjadi nilai properties
  get fullName() {
    //buat method getter fullName tanpa parameter
    return `${this.firstName} ${this.lastName}`; //kembalikan nilai dari this.firstName dan this.lastName
  }

  //method setter menerima argumen yang nilainya diambil dari operand ke dua ketika melakukan assignment operator
  set fullName(fullName) {
    //buat method setter fullName dengan parameter fullName
    const [firstName, lastName] = fullName.split(" "); //buat variabel firstName dan lastName dengan nilai fullName yang di split / dibagi dengan spasi
    this.firstName = firstName; //buat data properti this.firstName dengan value firstName dari const [firstName, lastName]
    this.lastName = lastName; //buat data properti this.lastName dengan value lastName dari const [firstName, lastName]
  }
}

const valkrye1 = new Valkrye("Kiana", "Kaslana"); //inisiasi variabel valkrye1 dengan instance dari class Valkrye berserta argumen
console.log(valkrye1); //print valkrye1
console.log(valkrye1.fullName); //print valkrye1.fullName | disini kita menggunakan method getter untuk mengakses properti fullName

//rubah nilai properti fullName dengan method setter
//format penulisan
//namaObject.namaMethodSetter = "value"
valkrye1.fullName = "Mei Raiden"; //set variabel valkrye.fullName dengan value "Mei Raiden" | disini kita menetapkan value fullName dengan method setter
console.log(valkrye1); //print nilai valkrye setelah method setter dijalankan
console.log(valkrye1.fullName); //print method getter untuk mengakses properti fullName

/* catatan
1. method getter harus mengembalikan "return" sebuah nilai & nilai tersebut akan menjadi nilai properti
2. method setter harus menerima satu argumen yang nilainya diambil dari operand ke dua ketika melakukan assignment operator 

*di javascript pola yang digunakan untuk memproteksi perubahan properti dengan penggunaan getter dan setter adalah dengan memanfaatkan getter sebagai "wrapper" dari properti aslinya. tujuannya
agar getter setter bisa mengontrol akses seperti mendapatkan dan menetapkan value properti.

untuk menerapkan pola tersebut, pertama kita perlu mengubah nama dari properti asli menjadi nama yang sedikit berbeda agar tidak ada konflik. disini kita akan menggunakan tanda underscrore "_" sebagai awalan nama properti asli.
*/
//disini kita kembali ke Class Waifu & merubah properti charFrom menjadi _charFrom

class Waifu {
  //buat class Waifu
  constructor(nameChar, ageChar, heightChar, hairColor) {
    //buat constructor dengan parameter
    this.nameChar = nameChar; //data properties nameChar
    this.ageChar = ageChar; //data properties ageChar
    this.heightChar = heightChar; //data properties heightChar
    this.hairColor = hairColor; //data properties hairColor
    this._charFrom = `Honkai Impact 3rd`; //data properties _charFrom yang telah berisi nilai default bertindak sebagai nilai asli. disini prioperti bersifat private
  }

  //method getter digunakan untuk mengembalikan value properti
  get charFrom() {
    //buat accessor properties dengan membuat method getter charFrom   | disini metdhod getter bertindak sebagai wrapper nilai aslinya
    return this._charFrom; //kemudian kembalikan nilai ke this._charFrom
  }

  //method setter disini berguna untuk memberi peringatan dan proteksi agar value properti tidak dapat diubah
  set charFrom(charFrom) {
    //buat accessor properties dengan membuat method setter charFrom dengan parameter charFrom
    console.log("you are not allowed to change this value"); //tampilkan pesan "you are not allowed to change this value"
  }
}

console.log("");
console.log("method getter & setter");
//inisiasi variabel waifu baru dengan instance class Waifu
//new Waifu *(nameChar, ageChar, heightChar, hairColor);
const waifu1st = new Waifu("Yae Sakura", 500, 170, "pink"); //isisiasi variabel baru | disini tidak mengisi properti charFrom karena properti tersebut sudah memiliki nilai derfault
console.log(waifu1st.charFrom); //print ke console data properties charFrom before  |disini kita memanggil method getter untuk mengakses properti _charFrom (berisi nilai default) yang akan ditampilkan ke console
//set value dari accessor value charFrom
waifu1st.charFrom = "Genshin Impact"; //disini kita mencoba merubah value dari properti charFrom dengan method setter | namun akan ada peringatan & proteksi
console.log(waifu1st.charFrom); //print ke console data properties charFrom after | kita panggil method getter lagi

/*note nilai dari charFrom dapat diganti secara langsung dengan mengakses langsung properti _charFrom. namun hal ini tidak direkomendasikan.
karena di komunitas javascript telah menyepakati bahwa properti dengan awalan underscore "_" merupakan properti yang bersifat private dan tidak boleh diakses secara langsung.
next ada provate identifier.
*/

console.log("");
console.log("===method===");
/*method merupakan fungsi yang berada didalam sebuah class dan dapat diakses melalui instance class tersebut. method biasanya mendindikasi hal yang dapat dilakukan oleh sebuah class.
sama seperti fungsi lainnya, di method juga menerima argumen, seperti pada method turn() di class Car.
selain argumen method juga memiliki akses ke nilai properti / method lainnya melalui keyword "this".

*note method hanya bisa dijalankan melalui instance dari class tersebut
dengan format
nameObjectClass.nameMethod("argumen jika diperlukan")
tambahan, didalam praktik nyatanya sebuah method biasa dibut ketika kita mencoba mengektraksi sebuah kode agar lebih mudah untuk dibaca & method ini hanya untuk kebutuhan internal.
contoh pada motor2 */

class Motor2 {
  constructor(color, capacityMachine, type) {
    this.brand = "Ducati"; //properti yang didefinisikan sendiri didalam class
    this.color = color; //properti yang diambil dari value (argumen) dalam instance class
    this.capacityMachine = capacityMachine;
    this.type = type;
    this._chassisNumber = this._generateChassisNumber();
  }

  //accessor properties dengan method get
  get chassisNumber() {
    return this._chassisNumber;
  }

  //method set untuk memberi proteksi agar value tidak bisa dirubah
  set chassisNumber(chassisNumber) {
    console.log("you are not allowed to change this value");
  }

  //method untuk menghasilkan random number
  _generateChassisNumber() {
    return `${this.brand} - ${Math.floor(Math.random() * 100) + 1}`;
  }
}

const motor1_2 = new Motor2("Black", 1000, "Sport");
console.log(motor1_2);

console.log("");
console.log("member visibility");
/*member visibility atau bisa disebut sebagai hak akses pada sebuah properti dan method didalam class. secara default semua properti dan method yang berada didalam
class bersifat public, yang dapat diakses diluar class via instance, sebelumnya kita menggunakan underscore "_" sebagai sebagai awalan nama properti dan method untuk penanda private
namun itu hanya sekedar penanda bukan asli bersifat private. 
*/
//contoh bahwa properti _chassisNumber pada class Motor2 dapat diakses secara languns
console.log("");
console.log("akses motor2._chassisNumber & _generateChassisNumber \n");
//panggil properti _chassisNumber
console.log("sebelum dirubah", motor1_2._chassisNumber, `\n`);
// rubah value properti _chassisNumber secara langsung
motor1_2._chassisNumber = "Ducati Monster - 1000";
//panggil properti _chassisNumber setelahnya
console.log("setelah dirubah", motor1_2._chassisNumber, `\n`);
//tampilkan hasil dari method _generateChassisNumber
console.log("method _generateChassisNumber", motor1_2._generateChassisNumber(), `\n`);

/* di javascript ES2022 diterapkan hak akses private properti & method dengan menggunakan tanda "#" pada awal penamaan properti & method */
console.log("penggunaan # pada properti & method");
class Wifi {
  //buat class Wifi
  // #regional = "Indonesia";
  #latensi = null; //private properti dideklarasikan di enclosing class
  // #region = "";                                     //private properti dideklarasikan di enclosing class    | gabisa memasukkan null jika ingin memasukkan nilai default
  // #region = "Indonesia";                         //private properti dideklarasikan di enclosing class    | gabisa memasukkan nilai default
  constructor(nameProvider, speed) {
    //constructor dengan parameter yang diperlukan
    this.nameProvider = nameProvider; //data properti nameProvider
    this.speed = speed; //data properti speed
    // this.#region = "Indonesia";                  //private properti dideklarasikan di constructor | GABISA dideklarasikan di constructor
    // this.#region = #region;                      //private properti dideklarasikan di constructor | GABISA dideklarasikan di constructor
    // this.#region = this.#setRegion();               //inisiasi private properti region dengan private method setRegion
    this.#latensi = this.#generateLatensi(); //inisiasi private properti latensi dengan private method generateLatensi
  }
  // #setRegion() {                                    //private method setRegion
  //   return "Indonesia";                             //private method untuk menghasilkan nilai default
  // }
  #generateLatensi() {
    //provate method generateLatensi
    return Math.floor(Math.random() * 100) + 1; //private method untuk menghasilkan random number
  }
}

const wifi1 = new Wifi("Indihome", 30000);
console.log(wifi1, `\n`); //print wifi1
// wifi1.#latensi = 100;                               //rubah value dari private properti latensi | akan error karena private properti tidak bisa diakses secara langsung

/*note
diatas merupakan pembuatan private method & private properties, disini aku ingin menambah private properties region = indonesia tapi gabisa karena metode diatas tidak benar-benar private */

console.log("===pewarisan===");
/*inheritance atau bisa disebut dengan pewarisan merupakan konsep dimana sebuah class dapat mewarisi sifat dan dan perilaku dari object dari kelas lain, object atau class yang melakukan pewarisan
disebut dengan "parent", dan object & class yang menerima warisan disebut sebagai "child" atau subclass. dengan membuat inheritance kita bisa menghindari membuat banyak class yang memiliki sifat
dan perilaku yang sama. 
semisal sebuah object emailService  dan whatsAppService merupakan layanan perpesanan, yang masing-masing memiliki properti yang sama seperti "sender" tapi perbedaannnyua adalah whatsAppService mengirim pesan
secara broadcase dan email mengirim pesan secara delay.
dari kasus diatas kita bisa membuat object tersebut dengan menggunakan dua class yaitu "EmailService" dan "WhatsAppService" */

//class WhatsAppService
class WhatsAppService {
  //buat class WhatsAppSevice
  constructor(sender) {
    //buat constructor dengan parameter sender
    this.sender = sender; //buat data properties sender
  }
  sendMessage(message, receiver) {
    //buat method sendMessage dengan parameter message dan receiver
    console.log(`${this.sender} is sent ${message} to ${receiver}`); //tampilkan pesan | pengirim ini mengirim pesan ini kepada penerima ini
  }

  sendBroadcastMessage(message, receivers) {
    //buat method sendBroadcastMessage dengan parameter message, receiver
    for (const receiver of receivers) {
      //buat perulangan untuk setiap recceiver. program dibaca | untuk setiap receiver dari receivers
      this.sendMessage(message, receiver); //panggil  method sendMessage dengan argumen message dan receiver
    }
  }
}

//class EmailService
class EmailServiceA {
  //buat class EmailService
  constructor(sender) {
    //buat constructor dengan parameter sender
    this.sender = sender; //data properties sender
  }

  sendMesssage(message, receiver) {
    //buat method sendMessage dengan parameter message, receiver
    setTimeout(() => {
      //buat fungsi setTimeout
      this.sendMessage(message, receiver); //panggil method sendMessage
    }, delay); //tambahkan delay
  }
}

/*breakdown aktifkan & nonaktifkan kedua class diatas
dari kedua class diatas terdapat beberapa duplikasi kode yaitu method sendMessage yang membuatnya tidak optimal 
next dibawah kita akan membuat satu class yang mencangkup semua kemampuan yang dimiliki oleh kedua object tersebut.
sehingga kita bisa membuat instance WhatsAppService dan EmailService dengan satu class*/

//buat class mailService
class MailServiceB {
  constructor(sender) {
    //buat consturctor dengan parameter sender
    this.sender = sender; //data properties sender
  }

  //buat method sendMessage dengan parameter message & receiver
  sendMessage(message, receiver) {
    console.log(`${this.sender} sent ${message} to ${receiver}`); //tampilkan pesan | pengirim ini mengirim pesan ini kepada penerima ini
  }

  //buat method sendDelayedMessage dengan parameter message, receiver & delay
  sendDelayedMessage(message, receiver, delay) {
    setTimeout(() => {
      //buat fungsi setTimeout
      this.sendMessage(message, receiver); //panggil method sendMessage beserta argumennya
    }, delay); //beri delay
  }

  //buat method sendBroadcastMessage dengan parameter message & receivers
  sendBroadcastMessage(message, receivers) {
    for (const receiver of receivers) {
      //buat perulangan untuk setiap receiver. program dibaca | untuk setiap receiver dari receivers
      this.sendMessage(message, receiver); //pasnggil method sendMessage beserta argumennya
    }
  }
}

//inisiasikan variabel whatsapp dan email dengan instance dari class MailService
const whatsapp = new MailServiceB("+6281453487467");
const email = new MailServiceB("omagad@mail.id");

//panggil method sendMessage
console.log("whatsapp");
//panggil method sendMessage
whatsapp.sendMessage("Punten, kumaha bujank", "+626748231234 \n");
//buat method sendBroadcastMessage dengan arguimen message dan receivers. isi arguimen receivers dengan array btw
whatsapp.sendBroadcastMessage("Punten, kumaha bujank", ["+626748231234", "+626748231235", "+626748231236 \n"]);

//panggil email
console.log("email");
//panggil method senDelayedMessage
// email.sendDelayedMessage("Gutten Morgen", "orang3rd@mail.uk", 50);    // | aktif / nonaktifkan pemanggilan method ini
//panggil method sendBroadcastMessage | pada argumen receiver isi dengan array btw
email.sendBroadcastMessage("Posisi semuanya", ["orang1st@ymail.us", "orang2sd@ymail.us", "orang3rd@ymail.us", "orang4rd@ymail.us"]);
console.log("");
//panggil method message
email.sendMessage("Ohayoooo", "Waifu@Tmail.com");

/*breakdown
class MailServie ditas memiliki method yang mencangkup semua kemampuan yang dimiliki object "WhatsAppService" dan "EmailService".
hal ini membuat object whatsapp & email akan memiliki kemampuan yang tidak dibutuhkan oleh object.
pada paradigma Object Oriented Object kita bisa mengatasi hal ini dengan membuat seluruh sifat-sifat yang sama dari object tersebut
menjadi satu class yang disebut (Superclass) kemudian dari sifat-sifat superclass kemudian akan diwariskan (Inheritance)
ke class dibawahnya (subclass), kemudian pada subclass kita menambahkan sifat-sifat dan kemampuan yanglebih spesifik.
contohnya Superclass MailService yang memiliki semua kemampuan WhatsAppService dan EmailService, kemudian subclass WhatsAppService 
dan EmailService memiliki kemampuan masing-masing yang lebih spesifik
*/

//superclass MalilService
class MailServiceC {
  //buat superclass MailService
  constructor(sender) {
    //consturctor dengan parameter utama sender
    this.sender = sender; //data properties yang dimiliki oleh semua subclass
  }

  sendMessage(message, receiver) {
    //method superclass yang dimiliki semua subclass
    console.log(`${this.sender} sent ${message} to ${receiver}`);
  }
}

//subclass WhatsAppService
class WhatsAppServiceC extends MailServiceC {
  //buat subclass yang mengextend superclass
  sendBroadcastMessage(message, receivers) {
    //buat method sendBroadcastMessage
    for (const receiver of receivers) {
      this.sendMessage(message, receiver); //panggil Method sendMessage dari superclass
    }
  }
}

//subclass EmailService
class EmailServiceC extends MailServiceC {
  //buat subclass yang mengextend superclass
  sendDelayedMessage(message, receiver, delay) {
    //buat method sendDelayedMessage
    setTimeout(() => {
      //buat fungsi setTimeout
      this.sendMessage(message, receiver); //panggil method sendMessage dari sueprclass
    }, delay); //beri delay
  }
}

/*breakdown, didalam subclass WhatsAppServiceC & EmailServiceC kita memiliki akses terhadap method dari superclass melalui
keyword this karena subclass mewarisi sifat dari superclass */

//isisiasi subclass WhatsAppServiceC & EmailServiceC
const whatsappC = new WhatsAppServiceC(`+621237481312`);
const emailC = new EmailServiceC(`feryman@hyperion.er`);

//pagggi merthod dari class whatsAppServiceC
whatsappC.sendMessage("punten, kumaha abang-abang teh", "+122346234"); //panggil method sendMessage milik superclass / parent
whatsappC.sendBroadcastMessage("SoS, tulong woee", ["+122346234", "+122346235", "+122346236"]); //panggil method whatsapp sendBroadcastMessage
// whatsappC.senDelayedMessage();      //coba panggil method milik email  | aktif non aktifkan
console.log("");

//panggil method dari class emailServiceC
emailC.sendMessage("Halo, selamat pagi dengan captain", "captain@hyperion.id"); //panggil method sendMessage milik superclass / parent
emailC.sendDelayedMessage("\n halo, bisa ingatkan aku untuk mengamgbil beberapa dokumen saat mau pulang nanti", "KianaNeko12@hyperion.id", 1000); //panggil method sendDelayedMessage milik emailServiceC
// emailC.sendBroadcastMessage();    //coba panggil method milik whatsapp    | aktif non aktifkan

console.log("");
console.log("===Pewarisan tanpa ES6 clas===");
/*sebelum ada sintaks class ES6 pewarisan menggunakan prototype inheritance seperti ini */

function MailServiceD(sender) {
  //buat contructor function MailSercviceD dengan parameter sender
  this.sender = sender; //buat data properties dari sender
}

//menambahkan method sendMessage ke protype MailServiceD.
/*dengan format penulisan
NamaConstructorFunction.'prototype'.NamaMethod = function(*parameter jika diiperlukan) {
  code
} 
*/
MailServiceD.prototype.sendMessage = function (message, receiver) {
  //tambah method sendMesage ke prototype MailServiceD dengan fungsi yang menerima parameter message & receiver
  console.log(`${this.sender} sent ${message} to ${receiver}`); //tampilkan pesan | pengirim ini mengirim pesan ini kepada penerima ini
};

//fungsi .call digunakan untuk memanggil method / properties dari parent class
function WhatsAppServiceD(sender) {
  //buat constuctor function WhatsAppServiceD dengan parameter sender
  MailServiceD.call(this, sender); //panggil constructor function MailServiceD dengan method .call(disini kita panggil properties this.sender, sender yang merujuk pada parameter sender dari contructor function WhatsAppServiceD)
}

// prortotype inheritance | membuat pewarisan dari MailServiceD ke WhatsAppServiceD

/*disini kita menggunakan keyword "object.create()" untuk membuat object baru yang memiliki prototype dari "MailServiceD.prototype". hal ini menciptakan hubungan pewarisan antara prototype "WhatasAppServiceD" dan "MailServiceD".
dengan kata lain "WhatsAppServiceD" mewarisi method dan properties dari "MailServiceD"*/
WhatsAppServiceD.prototype = Object.create(MailServiceD.prototype); //pewarisan prototype dari MailServiceD ke WhatsAppServiceD
/* menetapkan properti*/
WhatsAppServiceD.prototype.constructor = WhatsAppServiceD;

WhatsAppServiceD.prototype.sendBroadcastMessage = function (message, receivers) {
  for (const receiver of receivers) {
    this.sendMessage(message, receiver);
  }
};

function EmailServiceD(sender) {
  MailServiceD.call(this, sender);
}

//prototype inheritance
EmailServiceD.prototype = Object.create(MailServiceD.prototype);
EmailServiceD.prototype.constructor = EmailServiceD;

EmailServiceD.prototype.sendDelayedMessage = function (message, receiver, delay) {
  setTimeout(() => {
    this.sendMessage(message, receiver);
  }, delay);
};

//inisiasi prototype dari constructor function diatas
const whatsappD = new WhatsAppServiceD("+621237481312");
const emailD = new EmailServiceD("sayaka@mail.id");
whatsappD.sendMessage("testing whatsapp", "+122346234");
whatsappD.sendBroadcastMessage("testing broadcast whatsapp", ["+122346234", "+122346235", "+122346236"]);
emailD.sendMessage("testing email", "ayato@kamisa.id");
emailD.sendDelayedMessage("testing delayed email", "collei@sumeru.sm", 1000);

/*bisa dilihat pewarisan menggunakan keyword "function" lebih sulit dibaca, ini yang membuat sintaks class hadir pada ES6.
meski implementasi class dan function sangat berbeda namun implementasi keduanya sama-sama menggunakan prototype inheritance.
remember.
class hanyalah cara lain dalam membuat construcor function*/

console.log("Operator Insaceof");
/*
saat menulis code kita sering kali perlu mengecek jenis dari object tersebut, salah satu caranya adalah dengan mengecek rantai prototypenya, untuk
mengecek objek berdasarkan rantai prototypenya kita bisa menggunakan operator instanceof
format penulisan
namaObject instanceof namaClass/ConstructorFunction
*/

/* kita gunakan object ini
const whatsappD = new WhatsAppServiceD("+621237481312");
const emailD = new EmailServiceD("sayaka@mail.id");
*/

console.log(whatsappD instanceof WhatsAppServiceD); //cek apakah object whatsappD merupakan instance dari constructor function WhatsAppSercviceD | true
console.log(whatsappD instanceof EmailServiceD, "\n"); //cek apakah object whatsappD merupakan instance dari constructor function EmailServiceD    | False
//operator instanceof akan mengembalikan nilai boolean true / false
//jika object memiliki rantai prototype yang sama akan bernilai true, jika tidak memiliki rantai prototype yang sama akan bernilai false

/*operator instanceof juga mengecek prototype secara berantai, artinya instanceof juga mengecek hingga protoype yang diisi oleh object tersebut */

const whatsappE = new WhatsAppServiceD("+621237481312");
const emailE = new EmailServiceD("anjay@uwu.id");

console.log(whatsappE instanceof WhatsAppServiceD); //true
console.log(whatsappE instanceof EmailServiceD); //false
console.log(whatsappE instanceof Object, "\n"); //true

console.log(emailE instanceof EmailServiceD); //true
console.log(emailE instanceof WhatsAppServiceD); //false
console.log(emailE instanceof Object, "\n"); //true

console.log("===Overriding====");
/*
overriding merupakan konsep yang melekat pada konsep OOP, Overriding(mengesampingkan) dimana subclass/childClass dapat mendefinisikan sendiri untuk sebuah method
yang sebelumnya sudah di definisikan di superClass/parentClass, dengan kata lain childClass "mengganti" impelementasi method / properti yang sudah ada di superClass/parentClass */
//implementasi overriding

console.log("costructor overriding");
console.log("contoh kasus, jika error diaktifkan \n");
/*
contructor merupakan method  pada class yang akan dipanggil ketika membuat instance dari class tertentu.
pada contructor tidak perlu menggunakan 'return' untuk mengembalikan nilai karena sudah dilakukan secara implisit.
contoh kasus constructor overriding 
semisal pada sebuah subclass WhatsappService merupakan childclass dari MailService membutuhkan properti 'isBusiness' untuk menguidentifikasi bahwa akun bisnis atau bukan pada subclass, maka kita perlu
perlu melakukan contructor overriding
*/
class MailServiceOverriding {
  //buat superclass MailServiceOverriding
  constructor(sender) {
    //buat constructor  dengan parameter sender
    this.sender = sender; //data properties sender
  }
}

class WhatsAppServiceOverriding extends MailServiceOverriding {
  //buat subclass WhatsAppServieOverriding yang mengextends MailServiceOverriding
  constructor(sender, isBusiness) {
    //buat constructor dengan parameter sender & isBusiness || disini merupakan contructor overriding
    super(sender); //gunakan method super untuk memanggil constructor superclass                               | coba tukar command sintaks dengan bawahnya
    // this.sender = sender; //ketika menggunakan data properties untuk 'sender' maka akan menyebabkan 'ReferenceError'  | command sintaks
    this.isBusiness = isBusiness; //data properties isBusiness |disini merupakan constructor overriding
  }
}

const whatsappOverriding = new WhatsAppServiceOverriding("+08236232", true); //inisiasi variabel whatsappOverriding dengan instance dari class WhatsAppServiceOverriding

/*
note program diatas jika dijankan tidak akan muncul apa apa, jika tidak ada error, jadi hanya menampilkan pesan error jika sender dibuat data properties di childclass */

console.log("=method overriding=");
/*
konsep overriding pada method class digunakan untuk merubah method warisan dari superclass,
contoh kasus
pada superclass marilService terdapat method send() yang sudah didefinisikanm namun pada subclass WhatsappService kita perlu implementasi yang berbeda kita bisa mengoverride
method send().
*/

class MailServiceOverrideMethod {
  //buat superclass
  constructor(sender) {
    //buat constructor
    this.sender = sender; //data properties
  }

  sendMessage(message, receiver) {
    //method superclass
    console.log(`${this.sender} sent ${message} to ${receiver}`); //output
  }
}

class WhatsAppServiceOverrideMethod extends MailServiceOverrideMethod {
  //subclass extends dengan superclass
  constructor(sender, isBusiness) {
    //constructor overriding
    super(sender); //panggil constructor superclass dengan method super
    this.isBusiness = isBusiness; //data properties isBusiness
  }

  //override method
  sendMessage(message, receiver) {
    //method overriding
    console.log(`${this.sender} sent ${message} to ${receiver} via whatsapp \n`); //output | pengirim ini mengirim pesan ini kepada penerima ini via whatsapp

    //memanggil method send message pada superclass melalui keyword 'super'
    super.sendMessage(message, receiver);
    console.log("message sent via whatsapp"); //output
  }
}

const mailServiceOverrideMethod = new MailServiceOverrideMethod("someSender"); //inisiasi variabel dari intance class MailServiceOverrideMethod
const whatsappServiceOverrideMethod = new WhatsAppServiceOverrideMethod("+02856363342367", true); //inisiasi variabel dari instance class WhatsAppServiceOverrideMethod

mailServiceOverrideMethod.sendMessage("Haloo, kumaha anak ini ngabrit?", "randomPipel"); // panggil method sendMessage dari mailServiceOverrideMethod
whatsappServiceOverrideMethod.sendMessage("hallo, pye kabare  waamu?", "+26732429367"); // panggil method sendMessage dari whatsappServiceOverrideMethod
console.log("\n");

console.log("===object compsition===");
/* object compsition merupakan teknik untuk menggabungkan beberapa object menjadi satu fungsionalitasnya.
dalam suatu kasus terdapat superclass developer, dan subclass front-end, back-end, devOps. sedang terdapat object fullstack yang harus memiliki semua fungsi yang dimiliki semua
subclass, disini jika kita membuat subclass yang mengextend superclass kemudian harus menulis semua method milik subclas lain maka akan tidak efisien. disinilah object compsition
tampil, di object compsition kode distrukturkan berdasarkan kemampuan yang dapat dilakukan. seperti buildUI(), buildAPI(), deployApp().*/

//kasus object composition
class Developer {
  // buat class Developer
  constructor(name) {
    // buat constructor dengan parameter name
    this.name = name; //buat data properties name
  }
  commitChanges() {
    //buat method commitChanges
    console.log(`${this.name} is commiting changes`);
  }
}
// fungsi namaObjectComposition(namaClass)
function canBuildUI(developer) {
  // buat fungsi canBuildUI
  return {
    // kembalikan nilai
    buildUI: () => {
      // buat method buildUI
      console.log(`${developer.name} is building UI`);
    },
  };
}
function canBuildAPI(developer) {
  return {
    buildAPI: () => {
      console.log(`${developer.name} is building API`);
    },
  };
}
function canDeployApp(developer) {
  return {
    deployApp: () => {
      console.log(`${developer.name} is deploying app...`);
    },
  };
}
/* setelah membuat object composition kita bisa menggunakan "object.assign()" untuk membuat fungsi yang digunakan sebagai "object creator" dengan mengkomposisikan kemampuan
yang diperlukan agar lebih mudah untuk membuat instance object berdasar kemampuan
fungsi Object.assign() digunakan untuk menggabungkan nilai properti dari satu / ke lebih object
format penulisan
Object.assign(ObjectTarget, ObjectSource1, ObjectSource2, ...ObjectSourceN)*/
console.log("penggunaan Object.assign");
let target = {};
let source1 = { a: 1 };
let source2 = { b: 2 };
Object.assign(target, source1, source2);
console.log(target, "\n");

// buat fungsi untuk membuat "object create" dengan menggunakan "object.assign()"
function createFrontEndDeveloper(name) {
  //buat fungsi createFrontEndDeveloper dengan parameter name
  const developer = new Developer(name); //inisiasi developer dengan instance dari class Developer
  return Object.assign(developer, canBuildUI(developer)); //kembalikan nilai dengan object.assign() yang menggabungkan developer dengan canBuildUI(developer)
}
function createBackEndDeveloper(name) {
  const developer = new Developer(name);
  return Object.assign(developer, canBuildAPI(developer));
}
function createDevOps(name) {
  const developer = new Developer(name);
  return Object.assign(developer, canDeployApp(developer));
}
function createFullStackDeveloper(name) {
  const developer = new Developer(name);
  return Object.assign(developer, canBuildUI(developer), canBuildAPI(developer), canDeployApp(developer));
}

//inisiasi fungsi diatas
const frontEndDeveloper = createFrontEndDeveloper("Personal 1"); // inisiasi variabel dengan fungsi createFrontEndDeveloper(paramet1)
frontEndDeveloper.commitChanges(); //panggil method commitChanges
frontEndDeveloper.buildUI(); //panggil method buildUI
console.log(`is ${frontEndDeveloper.name} developer?`, frontEndDeveloper instanceof Developer, "\n"); //cek apakah benar personal 1 adalah developer

const backEndDeveloper = createBackEndDeveloper("Personal 2");
backEndDeveloper.commitChanges();
backEndDeveloper.buildAPI();
console.log(`is ${backEndDeveloper.name} developer?`, backEndDeveloper instanceof Developer, "\n");

const devOps = createDevOps("Personal 3");
devOps.commitChanges();
devOps.deployApp();
console.log(`is ${devOps.name} developer?`, devOps instanceof Developer, "\n");

const fullStackDeveloper = createFullStackDeveloper("Personal 4");
fullStackDeveloper.commitChanges();
fullStackDeveloper.buildUI();
fullStackDeveloper.buildAPI();
fullStackDeveloper.deployApp();
console.log(`is ${fullStackDeveloper.name} developer?`, fullStackDeveloper instanceof Developer, "\n");

console.log("Built-in Class di javascript");
/* di javascript terdapat beberapa buuilt-in class seperti date, object, array, math, string untuk berbagai kebutuhan*/
//class date untuk utilitas tanggal dan waktu di javascript
const date = new Date(); //inisiasi variabel date dengan instance dari class Date

const TimeInJakarta = date.toLocaleString("id-ID", {
  timeZone: "Asia/Jakarta",
}); //buat variabel TimeInJakarta dengan method toLocaleString() yang berisi timezone Asia/Jakarta

const timeInTokyo = date.toLocaleString("ja-JP", {
  timeZone: "Asia/Tokyo",
}); //buat variabel timeInTokyo dengan method toLocaleString() yang berisi timezone Asia/Tokyo

const timeInMakassar = date.toLocaleString("id-ID", {
  timeZone: "Asia/Makassar",
}); //buat variabel timeInMakassar dengan method toLocaleString() yang berisi timezone Asia/Makassar

console.log("built-in class Date");
console.log("Date & Time in Jakarta", TimeInJakarta); //print ke console
console.log("Date & Time in Tokyo", timeInTokyo); //print ke console
console.log("Date & Time in Makassar", timeInMakassar, "\n"); //print ke console

console.log("build-in class Array");
const myArray4 = new Array(1, 2, 3, 4, 5); //inisiasi variabel myArray3 dengan array
console.log(myArray4); //print array sebelum
/* dengan menggunakan class Array kita bisa menggunakan konsep pewarisan sehingga kita bisa membuat modifikasi sesuai kebutuhan, semisal kita ingin membuat
struktur data mirip array namun nilai tiap elemennya unik.*/

class UniqueArray extends Array {
  constructor(...args) {
    const uniqueValue = args.filter((item, index) => args.indexOf(item) === index); //buat variabel uniqueValue dengan value args yang telah di filter
    super(...uniqueValue); //panggil constructor superclass
  }
  push(item) {
    if (!this.includes(item)) {
      super.push(item);
    }
  }
}

const someArray = new UniqueArray("a", "b", "c", "a", "b", "c");
console.log(someArray);
someArray.push("d");
console.log(someArray);
someArray.push("a");
console.log(someArray);

console.log("\n =====Functional Programming====");
/* merupakan merupakan pendekatan pemrograman yang lebih mendalam dari object composition dan dan OOP
. paradigma Functional programming merupakan paradigma dimana proses komputasi didasarkan pada fungsi matematika murni dan 
menghindari perubahan status serta data yang berubah. Dalam javascript paradigma ini diterapkan melalui penggunaan fungsi sebagai
"first class citizen", artinya fungsi dapat disimpan sebagi variabel, dilewatkan sebagai argumen ke fungsi lain, dan dikembalikan dari fungsi lain
Functional Programming FP ditulis dengan gaya deklarasi yang berfokus pada "what to solve" dibanding "how to solve" yang dianut gaya imperatif.\
*/
// disini merupakan contoh penulisan kode imperatif
const names1 = ["Harry", "Ron", "Jeff", "Thomas"]; // deklarasi variabel
// console.log(names1);
const newNamesWithExcMark = []; // deklarasi variabel

for (let i = 0; i < names1.length; i++) {
  // buat looping. jan lupa program dibaca* untuk (inisiasi i = 0; cek kondisi i kurang dari panjang array names1; increment i/ tambahkan i dengan 1)
  newNamesWithExcMark.push(`${names1[i]}!`); // tambahkan nilai array newNamesWithExcMark dengan value dari array names1 yang telah ditambahkan tanda seru.
}
console.log(newNamesWithExcMark); // print ke console

console.log("\nbeberapa konsep utama dalam Functional Paradigm");
console.log("\n -pure function");
//hal yang harus diperhatikan
/* -function harus bersifat pure dimana dia akan menerima parameter sebagi input & mengembalikan nilai, tanpa menguban nilai dari variabel manapun
   -function tidak boleh menggunakan nilai dari variabel yang bukan sebagai parameter
   -function harus mengembalikan nilai dari setiap input. function yang mengembalikan nilai berbeda dengan setiap pemanggilan dengan nilai input yang sama tidak memenuhi prinsip Functional Paradigma
   */
console.log("\ncontoh Pure Functional");
//fungsi murni selalu memberikan ouput yang sama untuk input yang sama, tanpa menyebabkan side effect. fungsi murni tidak merubah variabel diluar lingkupnya dan tidak bergantung pada variabel/keadaan external.
const multiplyByTwo = (num) => {
  //multiplyByTwo menerima argumen num
  return num * 2; //nilai akan dikembalikan
};
//pada arrow function diatas menggunakan num untuk parameter kemudian diakses didalam fungsi
console.log(multiplyByTwo(5)); //nilai yang dikembalikan akan sama sesuai input argumen.

//impure function 1, akses luar variabel dari dari funtional scope
console.log("\nimpure function\n");
const name3 = "Jhonny";

const concatMe = () => {
  return name3 + " is you.";
};
//function diatas mengakses name3 dari luar fungsi tanpa menggunakan parameter function
console.log(concatMe());

//impure function 2, tidak mengembalikan nilai apapun
const divideByThree = (num) => {
  const result = num / 3;
};
//functuon diatas tidak menghasilkan output apapun
console.log(divideByThree()); //parameter kosong / terisi output tetap undefined

//impure function 3, bisa mengembalikan nilai yang berbeda meski memasukkan nilai yang sama
const addByRandom = (num) => {
  const randomNumber = Math.floor(Math.random() * 10);
  return num + randomNumber;
};
console.log(addByRandom(2));
console.log(addByRandom(2));
console.log(addByRandom(2));
//output akan berbeda-beda

console.log('\nFungsi Rekursif');
/**merupakan teknik dalam pemrograman dimana sebuah fungsi memanggil dirinya sendiri secara langsung / d tidak langsung untuk menyelesaikan suatu masalah, suatu fungsi rekursif
 * sangat berguna untuk memecahkan masalah menjadi submasalah yang lebih kecil yang serupa dengan masalah asli
 * dasar rekursif
 * 1. base case. dimana kondisi yang menhentikan rekursif. kasus sederhana yang dapat diselesaikan tanpa perlu memanggil fungsi rekursif lebih lanjut
 * 2. recursive case. bagian yang memanggil dirinya sendiri dengan versi lebih sederhana dari masalah awal
 * contoh rekursif pada faktorial, yang merupakan contoh klasik, dimana faktor dari 'n' ditulis sebagai n!. merupakan hasil perkalian dari semua bilanagan bilangan positf hingga 'n'*/
function faktorial(n) {
  if (n === 0 || n === 1) {
    return 1;   //base case
  } else {
    return n * faktorial(n - 1); //recursive case
  }
}
console.log('faktorial', faktorial(5));

function fibonacci(n) {
  if (n === 0) {
      return 0; // Base Case 1
  } else if (n === 1) {
      return 1; // Base Case 2
  } else {
      return fibonacci(n - 1) + fibonacci(n - 2); // Recursive Case
  }
}
console.log('fibonacci', fibonacci(6)); // Output: 8

console.log("\n -mutabilitY & ummutability");
/*immutability merupakan konsep dimana sebuah variable yang setelah didefinisikan & diassign dengan sebuah nilai, nilai tersebut
tidak boleh di diganti / dirubah untuk menghindari side-effect(dimana satu proses dapat mempengaruhi nilai variabel secara global & menyebabkan error). 
dalam javascript terdapat const agar nilai aman, tapi tidak untuk array & object karena terdapat push dimana merupakan proses yang mutable .*/

console.log("mutable variable");
var mutableNumber = 5;
mutableNumber = 7;
console.log(mutableNumber);

console.log("immutable variable");
const immutableNumber = 3;
// const immutableNumber = 7; //akan error jika diaktifkan
console.log(immutableNumber);

console.log("mutable array");
var mutableHobbies = ["Workout"];
mutableHobbies.push("Gaming");
console.log(mutableHobbies);
x;
console.log("immutable array dengan concat"); //e5 dengan concat
var immutableHobbies = ["DIY"];
var newUpdatedImmutableHobbies = immutableHobbies.concat("Gaming");
//immutableHobbies jadi imun & tidak bisa ditambah data, maka harus di buatkan array baru dengan berisi update an immutableHobbies
console.log(immutableHobbies);
console.log(newUpdatedImmutableHobbies);

console.log("immutable array dengan spread operator"); //es6
/*"..."/titik 3 merupakan spread operator, di javascript digunakan untuk mengambil / menyalin elemen dari tiap-tiap array / object kedalam object baru.
penggunaan var namaVar = [...namaVarLama, elemen1, n]; */
var newUpdatedImmutableHobbiesES6 = [...immutableHobbies, "menembak"];
console.log(newUpdatedImmutableHobbiesES6);

console.log("mutable object");
var myMutableObject = { name: "Abdoel", age: 20 };
//disini kita buat obect
myMutableObject.age = 18;
//kemudian kita update age dari object yang menyebabkan age object berubah
console.log(myMutableObject);

console.log("immutable object dengan object.assign");
var myImmutableObj = { name: "Sholum", age: 21 };
// buat obect baru
const newUpdateObES5 = Object.assign({}, myImmutableObj, { age: 19 });
// kemudian buat updateObjectBaru dari dengan fungsi Object.assign(target, source)
console.log(myImmutableObj);
console.log(newUpdateObES5);
console.log("immutable object ES6 using spread operator");
const newUpdateObES6 = { ...myImmutableObj, age: 17 };
console.log(myImmutableObj);
console.log(newUpdateObES6);

console.log("\n Higher-order Function");
/*high order function merupakan function yang menerima argumen atau parameter berupa function. 
sebelumya ada istilah 'callback'  dimana artinya function yang dikirimkan sebagai parameter ke dalam high-order function*/
//contoh 1
const isEven = (num) => {
  //fungsi isEven
  return num % 2 === 0; //kembalikan nilai sisa bagi 2 num & bandingkan dengan 0
  //remember === adalah operator perbandingan
  // % merupakan operator sisa bagi
};

const nums = [1, 2, 3, 4, 5, 6];

const evenNums = nums.filter(isEven);
// fungsi namaArray.filter(callback(elemen[, index[, array]])[, thisArg]) digunakan untuk membuat array baru yang berisi semua elemen dari array yang asli yang memenuhi kondisi yang ditentukan oleh sebuah fungsi callback
console.log(evenNums);

//contoh 2
const capitalizedWord = (word) => {
  return word[0].toUpperCase() + word.slice(1, word.length);
  //diatas merupakan fungsi untuk membuat kapital awal kata dari awal kalimat
};

const sentence = "Ahh, you are there. Its me!";
const uppercaseSentence = sentence.split(" ").map(capitalizedWord);
// fungsi diatas memecah kalimat menjadi array kata-kata
console.log(uppercaseSentence, "\n");

console.log("fungsi callback lebih lanjut");
/*fungsi callback merupakan fungsi yang dilewatkan sebagai argumen dari fungsi lain. jadi inisiasi fungsi dengan argumen fungsi. 'fungsi(fungsiCallback)'
fungsi callback digunakan untuk memastikan bahwa kode tertentu dijalankan setelah fungsi lain selesai, terutama untuk operasi asinkron seperti pengambilan data dari server, pembacaan file / penundaan waktu.
cara kerja
-fungsi utama menerima fungsi lain (callback sebagai parameter)
-fungsi utama menjalankan beberapa operasi
-pada titk tertentu fungsi utama memanggil fungsi callback untuk menyelesaikan tugas tertentu */
//contoh
function salam(nama, callback) {
  //fungsi ini menerima 2 parameter 'nama' & 'callback'
  console.log("halo, " + nama); //operasi
  callback(); //summon param callback
}
function selesai() {
  //fungsi callback
  console.log("Proses Selesai !"); //operasi
}
salam("Gwehj", selesai); //inisasi fungsi degnan param & callback

console.log("\nCurrying");
/*currying merupakan proses mengubah sebuah fungsi yang menerima beberapa argumen menjadi serangkaian fungsi yang masing-masing menerima satu argumen */
//contoh
const myWordOperation = (firstWord) => (secondWord) => (thirdWord) => {
  return firstWord + " " + secondWord + " " + thirdWord;
};
/*funsi diatas memiliki 3 parameter masukkan berupa kata1st,...kata3rd. */
console.log(myWordOperation("My")("Little")("Precious"));
//contoh lebih sederhana
//fungi add tanpa currying

function add2(a, b) {
  return a + b;
}
console.log("fungsi tanpa currying", add2(2, 3), "\n");

//funcsi add dengan currying
function add3(a) {
  return function (b) {
    return a + b;
  };
}

const addTwo = add3(2); //inisiasi
console.log(addTwo(3)); //panggil addTwo
console.log(add3(2)(3)); //panggil add3

console.log("\n Reusable Functuion");
/*merupakan fungsi yang dapat digunakan kembali, fungsi ini dirancang untuk dapat dipanggil dan digunakan diberbagai tempat dalam kode tanpa perlu mengulang / menulis logika yang sama.
karakteristik dari fungsi yang dapat digunakan kembali
1. modular : fungsi yang dirancang untuk melakukan satu tugas spesifik sehingga dapat diisolasi dan digunakan di berbagai tempat.
2. generik : fungsi yang dapat digunakan untuk berbagai jenis data / konteks, tidak terikat dengan satu kasus penggunaan tertentu.
3. mudah dipahami dan dipelihara : kode jelas dan terdokumentasi dengan baik.
4. teruji : kode telah teruji dengan serangkaian test untuk memastikan fungsi bekerja dengan baik. */
//contoh
function countElement(array) {
  return array.length;
}
//penggunaan
const number1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("reusable function countElement untuk menhitung elemen", countElement(number1));

//maybe nyambung ama dokumen index.html
//perbedaan 'document.getElemenById()' & 'document.querySelector()'
/* getElemenById() merupakan cara untuk menembak suatu elemen di dokumen html dengan id, hal ini membuat pemuatan lebih cepat namun tidak fleksibel karena hanya bisa 
mentargetkan elemen berdasarkan id */
// let btn1 = document.getElementById('button');

/*querrySelector menembak elemen dokumen berdasarkan selector css, hal ini membuatknya sangat fleksibel, karena bisa mentargetkn class ('.namaClass'), id ('#namaId'),
elemen ('namaElemen'), ditambah bisa melakukan berdasarkan kombinasi ('#parent .child'). kekurangan ya aagak lambat karena harus melakukan parsing */
// let btn2 = document.querySelector('button');

/* fungsi setAttribut digunakan untuk menambahkan / merubah atribut yang ada pada elemen. dengan sintaks
.element.setAttribut('nameAtributYangSudahAda/Belum', value);.
div.setAttribut('id', 'form');    //beri id   output | <div id='form'>
div.setAttribut('class', 'form2');  //ganti class   output  | <div class='form2'>
divValue.setAttribut('data-id', 123);   //tambah atribut data-id output  | <div data=id='123'></div>*/

// API
/*API : Application Programming Interface merupakan definisi & protokol yang memungkinkan antar aplikasi / layanan untuk berkomunikasi dengan aplikasi / layanan lainyya
*hmm berarti kek penerjemah /  translate.
langka-langkah umum penggunaan API di javascript
1. membuat permintaan / request. 
   menggunakan metode fetch(urlAPI) / XMLHttpRequest
2. menerima tanggapan (response)
   setelah permintaan dikirim akan menerima tanggapan berupa data dengan format JSON
3. Memproses data.
   kemudian data JSON tersebut akan kamu proses
4. Menampilkan hasil*/
//JSON
/*JSON : JavaScript Object Notation *bisa dibilang Jawa Script Object Notation. adalah format pertukaran data yang ringan dan mudah dibaca. JSON digunakan utnuk mempresentasikan data dalam bentuk Object yang terdiri dari pasangan Key Value.
JSON banyak digunakan untuk pertukaran data antara client & server dalam web karena strukturya yang sederhana & fleksibel. JSON berasalah dari JAWA namun saat ini sudah didukung bahasa pemrograman lain.*/
//contoh JSON sederhana
let JSONContoh = {
  Nama: "Sholum_Axe",
  Usia: 17,
  Alamat: "Earth",
  Hobb: ["arduio", "Komponen Listrik", "komponen mekanis", "Gaming", "dll"],
};
//penjelasan
/* 
1. object diapit kurung kurawal '{}'
2. Pasangan Key-Value, setiap elemen yang diapit titik dua ':'
3. Array daftar yang diapit kurung sikut '[]', yang bisa berisi berbagai tipe data */

console.log(JSONContoh);

//module. export/import pada node js
console.log("\nModule.export/import");
/*modul javascript mengijinkan untuk memecah kode kedalam berbagai file yang saling terhubung, sehingga kode akan menjadi terorganisir  serta lebih terstruktur.
- export digunakan untuk mengexpor fungsi, object, variabel ke suatu file .js agar bisa digunakan di file lain.
terdapat 2 cara menggunakan export*/
// - export 'export named'. disini bisa melakukan export beberapa hal dari 1 file dan masing2 memiliki nama tertentu
//code ada di file math.mjs

// - export default: disini hanya bisa melakukan 1 export secara default dari 1 file, ketika di import nama bisa ditentukan sesuai keinginan
//code ada di file greet.mjs

/*import diogunakan untuk mengambil fungsi, object, variabel yang telah di export dari file lain
cara melakukan import sesuai dengan export yang dilakukan */
//untuk file export ada di file export.mjs

/* *catatan
ketika menggunakan export & import harus menggunakan file dengan format .mjs
file mjs merupakan file javascript yang menggunakan modul ES (ECMAScript Module). extensi ini memastikan node js mengenali file berformat .mjs sebagai ES module dan memprosesnya
sesuai aturan modul ES seperti mendukung import & export secara langsung.
thats why I using mjs file*/
console.log("Import & export di react");
/*terdapat 2 cara untk melakukan export dan import komponen (fungsi) di react
1. pertama dengan menggunakan Default syntax dengan export statement "export default function functionName() {}" & import statement "import functionName from './nameFileComponent' "
2. kedua dengan menggunakan named sytanx dengan export statement "export function functionName() {}" & dengan import statement "import {functionName} from './nameFileComponent' " 
developer sering menggunkan  default export ketika file yang diexport  hanya memiliki 1 nama komponent, dan menggunakan named export ketika file yang diexport memiliki berbagai komponen dan values*/


console.log('Type Casting');
/*type casting, type conversion merupakan cara menguban tipe data menjadi tipe data lain. di js secara default melakukan konversi tipe data dalam beberapa kasus, namun pengguna taerkadang harus melakukan secara explisit
berikut beberapa caranya*/
//string ke number, 
  //menggunakan Number(), jika tidak bisa dirubah maka 'NaN' (Not a Number)
  let str = "1234";
  let str1 = "omagad"
  let num = Number(str);
  let str2 = Number(str1);
  console.log(str,'\n',num,'\n',str2);
  //menggunakan parseInt()*merubah string ke integer / parseFloat()*merubah string ke desimal.
  let strInt = "1214";
  let strFloat = "3.14"
  let intNum = parseInt(strInt);
  let floatNum = parseFloat(strFloat)
  console.log('\n',intNum);
  console.log(strFloat,'\n');

//number ke string
  //menggunakan String()
  let numStr = 1211213;
  let numStrCon = String(numStr);
  console.log(numStrCon,'\n');
  //menggunakan toString()
  let numToStr = 1214213432312343;
  let numToStrCon = numToStr.toString();
  console.log(numToStrCon,'\n');
//boolean ke string / number
    //boolean ke string
    let bool1 = true;
    let boolStr = String(bool1);
    console.log(boolStr);
    //boolean ke number
    let bool2 = false;
    let boolNum = Number(bool2);
    console.log(boolNum);
//string ke boolean
  let strBool1 = 'true';
  let strBool2 = 'false';
  let boolTrue = Boolean(strBool1);
  let boolFalse = Boolean(strBool2);
  console.log(boolTrue);
  console.log(boolFalse);
  /**string non-kosong berisi akan true & string kosong false */
//array ke string
  let arrStr = [9, 34, 45, 423];
  let arrStrCon = arrStr.join('|||||| ');  //merubah array menggunakan join denan memisahkan tiap elemen dengan separator '||||| ' yang ditentukan user
  console.log(arrStrCon);
//string ke array
  let strAr = "a<> b<> c<> d<> e<> e<> e";    //aku menggunakan separator <> karena gabut
  let strArCon = strAr.split('<>');           //disini merubah menjadi string berdasar separator, semisal separator string ',' kita menggunakan koma ','
  console.log(strArCon);
//object ke string
  //menggunakan 'JSON.stringify()' merubah object menjadi string json
  let obj = {name : "Jon Ep Kenedi", age: 20};
  let strObj = JSON.stringify(obj);
  console.log(strObj);
//String JSON ke Object
  let strObj1 = '{"name" : "Nero", "age": 21}';
  let objStr = JSON.parse(strObj1);
  console.log(objStr);

console.log('\n');
console.log('===function expression===');
/**merupakan cara mendefinisikan fungsi sebagai nilai yang dapat disimpan dalam variabel*/
//1. definisi function expression. mendefinisikan fungsi dan menyimpan dalam variabel
const greeting2 = function(name) {
  return `\n hello, ${name}`;
};
console.log('-function expression', greeting2('Alice'));

//anonymous function expression. fungsi tanpa nama yang didefinisikan
const add4 = function(a, b) {
  return a + b;
}
console.log('-anonymous function express\n', add(123, 2323));

//named function expression. fungsi dengan nama yang didefinisikan
const multiply5 = function multiplyNumber2(x, y) {
  return x*y;
}
console.log('-named function expression\n', multiply5(42, 1212));

//function expression dengan arrow function
const divide = (x, y) => x/y;
console/log('-function expression dengan arrow function\n', divide(1212, 344));

//function expression sebagai callback
function processData(data, callback) {
  console.log("-function expression sebagai callback\n. Processing data...");
  callback(data);
}
processData("Sample Data", function(data) {
  console.log("Data received:", data);
});

/*Perbedaan Utama:
 *Function declaration dapat dipanggil sebelum deklarasinya karena hoisting.
 *Function expression hanya dapat dipanggil setelah deklarasinya karena tidak di-hoist. */

console.log('\nRest Operator');
/*Rest parameter dalam fungsi digunakan untuk mengumpulkan elemen atau array yang tersisa menjadi satu variabel dalam bentuk array*/
function restNoParam(a, b, ...c) {
  console.log(`${a} ${b}`); //print a & b
  console.log(c);           //print c / jadi array
  console.log(c[0]);        //print c index 0
  console.log(c.length);    //print panjang array c
  console.log(c.indexOf('Lionel')); //print index dari n
}
restNoParam('Mukul', 'Latiyan', 'Lionel', 'Messi', 'Barcelona');

function restParam(...input) { //disini rest operator adalah titik tiga (...)
  let sum = 0;
  for (let i of input) {
    sum += i;
  }
  return sum;
}
// pada inisiasi fungsi diatas dapat menerima argumen tanpa limit jumlah
console.log('\n',restParam(1, 2, 4, 4)); 
console.log(restParam(1, 2, 4, 4, 32, 34, 3423));
//rest operator dalam destructing 
const [first, ...rest] = [1, 2, 3, 4, 5, 6];

console.log('rest operator dalam destructing \n',first); // Output: 1
console.log(rest);  // Output: [2, 3, 4, 5]

/*javascript flow control cara mengerahkan alur eksekusi alur program berdasarkam kondisi tertentu atau setruktur tertentu
, hal ini memungkinkan program untuk menjalankan kode yang berbeda berdasarkan hasil / kodisi keputusan
==Kondisi dan percabangan
  -if else
  -while
  -do..while
  -return
  -throw & try catch
==looping
  -for
  -while
  -do..while
==Kontrol alur dalam fungsi
  -return
  -throw & catch
==pengendalian alur dalam array
  -forEach
  -map, filter & reduce
==pengendalian alur dalam async code
  -async dan await
  -Pormise
*/

console.log('\nError handling');
/*penanganan error pada js memastikan aplikasi berjjalan dengan baik meski terjadi kesalaha. di js terdapat berbagai tool untuk menangani error yang memungkinkan identifikasi error
berikut metode-metode yang dipakai */
// try statement digunakan untuk mendefinisikan blok kode untuk beralan (to try)
// catch statement digunakan mendefinisikan blok kode untuk menangani segala error
// finally statement digunakan untuk menjalankan kode tanpa peduli hasilnya
// throw statement mendefinisikan custom error
/*ketika mengeksekusi kode error berbeda bisa terjadi.
error bisa teradi dari programmer, kesalahan input, dan hal tak terduga */
//try & catch
console.log('\nTry & catch')
try {           //di try berisi kode yang mungkin menimbulkan error
  let result3 = riskyFunction();        //fungsi disini tidak ada
  console.log(result3);   
} catch (error) {   //disini terdapat penanganan error
  console.log('Terjadi Error: ', error.message); //'error.message' merupakan properti untuk menampilkan error
  console.log('Terjadi Error: ', error.name); //'error.message' merupakan properti untuk menampilkan error
}
/*error name values
Error Name	    ||    Description
EvalError	      ||    An error has occurred in the eval() function
RangeError	    ||    A number "out of range" has occurred
ReferenceError	||    An illegal reference has occurred
SyntaxError	    ||    A syntax error has occurred
TypeError	      ||    A type error has occurred
URIError	      ||    An error in encodeURI() has occurred */
console.log('\nThrow');
/*throw statemen memungkinkan pengembang melemparkan error secara manual, berguna untuk memberi feedback ketika suatu kondisi tidak terpenuhi*/
function divide2(a, b) {
  if (b === 0) {
    throw new Error("Pembagian dengan nol tidak diperbolehkan");    //buat custom pesan error dengan 'throw new Error()'
  }
  return a / b;
}
try {   //coba summon fungsi
  console.log(divide2(10, 0));
} catch (error) {       //tangkap jika terjadi error
  console.error(error.message);     //tampilkan di terminal pesan error
} 

console.log('\nAsynchronous Process');
/**Asynchronous Process
 * fungsi yang berjalan paralel dengan fungsi lain disebut asynchronous. contoh simplenya di js adalah setTimeout()
 * di js terdapat beberapa mekanisme untuk menangani proses asinkron
 */
// Callback
/**sebelumnya callback merupakan fungsi yang digunakan sebagai argumen fungsi lain. *line 2124 mengeenai fungsi callback  */
function myDisplayer(something) {             //fungsi callback
  console.log('Output fungsi Callback', something);
}

function myCalculator(num1, num2, myCallback) {   //fungsi yang menggunakan callback sebagai argumen
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, myDisplayer);

/*setTimeout
 *di dunia nyata fungsi callback sering digunakan bersama fungsi asinkron
 * contohtipikal adalah seTimeout
 * ketika menggunakan setTimeout fungsi callBack dapat dieksekusi setelah waktu habis
*/
let testCallback = function(text) {     //inisaisi fungsi
  return`\nfungsi setTimeout ${text}`;
}

// setTimeout(testCallback('testing'), 3000);   //pada bagian ini akan error karena setTimeout memanggil fungsi secara langsung saat kode dieksekusi, bukan menunggu 3 detik
// versi benar
setTimeout(function(){
  console.log(testCallback('Dengan timeout 1000ms'));
}, 1000);

//versi lain
setTimeout(myFunction, 1300);   //inisiasi fungsi setTimeout dengan argumen summon fungsi & waktu

function myFunction() {         //inisiasi fungsi callback
  console.log('Timeout Delay 1300ms');
}

/**Catatan
Saat Anda meneruskan suatu fungsi sebagai argumen, ingatlah untuk tidak menggunakan tanda kurung.
benar: setTimeout(myFunction, 3000);
Salah:setTimeout(myFunction(), 3000); */

console.log('\nsetInterval.\nContoh ada di file index.html\n');
//contoh ada di file index.html
/**Alternatif callback
Dengan pemrograman asinkron, program JavaScript dapat memulai tugas yang berjalan lama, dan terus menjalankan tugas lain secara pararel.
Namun, program asinkron sulit ditulis dan sulit di-debug.
Oleh karena itu, sebagian besar metode JavaScript asinkron modern tidak menggunakan callback. Sebaliknya, dalam JavaScript, pemrograman asinkron diselesaikan menggunakan Promises . */

console.log('===Promises===');
/**Javascript promises object.
 * Sebuah promises menjanjikan hasil
 * "producing code" merupakan kode yang membutuhkan waktu
 * "consuming code" merupakan kode yang harus menunggu hasilnya
 * promises merupakan object yang menjadi penghubung antara producing code & consuming code
 * dikutip dari w3schools
 * Javascript promises object. promises memuat producing code & memanggil ke consuming code
 */
// sintaks
let myPromiseExamp = new Promise(function(myResolve, myReject) {
//"producing code" *mungkin membutuhkan waktu
  myResolve();  //ketika sukses
  myReject();   //ketika error
});
//"consuming code" *harus menunggu sampai janji terpenuhi
myPromiseExamp.then(           //callback untuk succes & failure optional. jadi bisa menambahkan salah satu aja
  function(value) {/* berisi kode ketika tidak ada error */},
  function(error) {/* berisi kode ketika terjadi error*/}
);
/**ketika producing code memperoleh hasil, ia kemudian harus memanggil salah satu callback
 * success  myResolve(resultValue)
 * error    myReject(errorValue)
 * Properti Promises mewakili penyelesaian (atau kegagalan) operasi asinkron. promises object memiliki 2 properties, yaitu: state & result
 * myPromise.state    ||    myPromises.result
 * -"pending"         ||    undenfined  *operasi belum selesai
 * -"fullfilled"      ||    a result value  *operasi selesai dengan sukses
 * -"rejected"        ||    an error object *operasi gagal
 * note. tidak bisa mengakses promises propertie state & result
 * Promises Handler methods
 * -.then()
 * -.catch()
 * -.finally()
  */

//producing code
let myPromiseTest = new Promise(function(myResolve, myReject) {       //inisiasi promise dengan menggunakan new Promise, kemudian didalamnya perlu fungsi callback. (function yang memiliki 2 argumen(argumen resolve, argumen reject)) || argumen resolve memberi tahu ketika operasi berhasil, argumen reject memberi tahu ketika operasi gagal dan mengembalikan alasannya
  let succes = true;                                                  //inisiasi variabel succes 
  if (succes) {                                 //jika succes true berarti Promise dianggap berhasil (fullfiled)
    myResolve("OK, data masuk");                // dan memanggil myResolve dengan argumen ("")
  } else {                                      //sebaliknya jika bernilai false maka dianggal gagal (reject)
    myReject("Error!!, data false");            // dan memanggil myReject dengan argumen ("")
  }
});

//consuming code
myPromiseTest.then(function(result) {   //setelah promise berhasil (fullfiled) nilai pada myResolve ditangkap oleh then() kemudian diteruskan ke fungsi dengan argumen result
  console.log(result);                  //print result
}).catch(function(error) {              //ketika gagal (reject) maka nilai myReject akan ditangkap oleh catch() kemudian diteruskan ke fungsi dengan argumen error
  console.error(error);                 //print error
});
//contoh promise lain di dokumen index.html / bisa akses "https://www.w3schools.com/js/js_promise.asp"

console.log('\nPenanganan bergaya synchronous dengan asyn-await');
/**merupakan cara menulis kode asinkron yang terlihat dan berperilaku seperti kode asinkron. hal ini membuat kode lebih mudah dibaca dan dikelola.
 * apa itu 'async' & 'await'. 'async' digunakan untuk mendefinisikan fungsi asinkron. fungsi yang di def dengan 'async' otomatis mengembalikan sebuah 'Promise'. dan kode didalam fungsi 'async' dapat menggunakan 'await' untuk menunggu hasil dari promise.
 * 'await' hanya dapat digunakan didalam 'async'. 'async' membuat JawaScript menunggu hingga promise yang diikutiinya selesai, dan kemudidan mengembalikan hasilnya. jika promise gagal maka 'await' menghasilkan error yang bisa ditangani dengan 'try...catch'
 * contoh penggunaan
 */
async function getData() {        //inisiasi fungsi asinkron dengan async, dimana akan mengembalikan promise.
  try {                           //try...catch digunakan untuk menangani kesalahan yang terjadi ketika proses 'await'
    let response = await (fetch('https://api.example.com/data')); //inisiasi dengan await. js akan menunggu hingga promise selesai menggunakan await
    let data = await response.json();                             //ubah data menjadi oject json
    console.log('data berhasil diambil', data);                   //ketika data berhasil diambil maka tampilkan
  } catch(error) {                                                //catch jika terjadi error, ketika await tidak menanggapi
    console.log('terjadi kesalahan', error);                      //tampilkan error
  }
}
// getData();
/**4. Keuntungan Menggunakan async-await
 * Lebih Mudah Dibaca: Kode yang menggunakan async-await terlihat seperti kode sinkron, yang membuatnya lebih mudah dipahami, terutama bagi yang baru memulai.
 * Penanganan Error yang Lebih Baik: Dengan try...catch, penanganan error menjadi lebih terstruktur dan lebih mudah dibandingkan dengan menggunakan .catch() pada Promise.
 * Menghindari Callback Hell: async-await membantu menghindari kode bertingkat yang sering terjadi dengan callback, membuat kode lebih terorganisir.
*/
//contoh lebih kompleks
async function prosesData() {
  try {
      let user = await ambilUser();
      let post = await ambilPost(user.id);
      console.log("Post berhasil diambil:", post);
  } catch (error) {
      console.error("Terjadi kesalahan saat memproses data:", error);
  }
} 
// prosesData();     //disable karena hasilnya adalah error
console.log('\n--Concurency dengan Promises--')
/**concurency dengan promises dalam javascript memungkinkan untuk menjalankan operasi asinkron secara bersamaan (concurrent) dan mengelola hasilnya secara efisien. hal ini berguna ketika mengelola beberapa tugas asinkron secara pararel.
 *beberapa cara yang bisa digunakan
 */
//menggunakan 'promise.all()'
console.log('-promise.all()');
/**merupakan metode yang paling umum untuk digunakan untuk menjalankan beberapa promise secara bersamaan. metode ini menerima array dari promise dan mengembalikan sebuah promises yang selesai (fullfilled) ketika promise dalam array selesai.
 * ketika salah satu promises gagal (rejected) maka promise yang dikembalikan oleh 'Promises.all()' juga akan gagal
sintaks*/
//buat fungsi asinkron untuk mengambil data dari API user
function ambilDataUser() {
  return fetch('https://api.example.com/user').then(response => response.json());     
}
//buat fungsi asinkron untuk mengambil data dari API post
function ambilDataPost() {
  return fetch('https://api.example.com/posts').then(response => response.json());
}

async function prosesDataUserPost() {         //buat fungsi asinkron dengan async agar bisa memakai await didalam fungsi
  try {                                       //try digunakan untuk menangani hasil dari proses await
    let [user, posts] = await Promise.all([ambilDataUser(), ambilDataPost()]);  //inisiasi untuk menjalankan kedua fungsi secara bersamaan dengan cara paralel dengan Promise.all(). tunggu sampai semua proses selesai dengan fungsi await
    //tampilkan data
    console.log("Data User:", user);          
    console.log("Data Posts", posts);
  } catch (error) {                                                             //catch digunakan ketika hasil akhir error
    console.log('terjadi kesalahan', error);
  }
}
// prosesDataUserPost();   //di command karena hasilnya error *tidak ada apinya
/**Keuntungan:
 * -Concurrency: Kedua operasi (meminta data user dan post) dilakukan secara bersamaan, sehingga lebih efisien daripada menjalankannya secara berurutan.
 * -Error Handling: Jika salah satu Promise gagal, Promise.all() akan segera mengembalikan Promise yang gagal, dan kita dapat menangani kesalahan tersebut di dalam blok catch. */
console.log('-promise.race()');
/**mengembalikan promises yang akan selesai (fullfilled) atau rejected dengan hasil dari promise pertama yang selesai diantara promises dialam array. hal ini berguna ketika hanya perlu hasil dari promises yang paling cepat */

function fetchDataFromServerA() {
  return fetch('https://api.serverA.com/data').then(response => response.json());
}
function fetchDataFromServerB() {
  return fetch('https://api.serverB.com/data').then(response => response.json());
}
async function prosesDataRace() {
  try {
      let data = await Promise.race([fetchDataFromServerA(), fetchDataFromServerB()]);      //menggunakan sintaks Promise.race()
      console.log("Data yang diterima:", data);
  } catch (error) {
      console.error("Terjadi kesalahan:", error);
  }
}
// prosesDataRace();        //di command karena hasilnya error *tidak ada apinya
console.log('-promise.allSettled()');
/** mengembalikan promise yang selesai setelah semua promise dalam array selesai, baik berhasil ataupun gagal. metode ini tidak akan berhenti pada kesalahan seperti promise.all(). tapi akan memberi status kesetiap promise*/
function ambilDataAPI1() {
  return fetch('https://api.example.com/data1').then(response => response.json());
}

function ambilDataAPI2() {
  return fetch('https://api.example.com/data2').then(response => response.json());
}
async function prosesDataAllSettled() {
  let hasil = await Promise.allSettled([ambilDataAPI1(), ambilDataAPI2()]);  //sintaks Promise.allSettled([arrFunc1, arrFunc2,...arrFunc-n]). tanpa response

  hasil.forEach((hasilItem) => {                    //buat perulangan sejumlah hasil. kemudian masukkan ke hasilItem
      if (hasilItem.status === "fulfilled") {       //buat percabangan jika status hasilItem fullfilled
          console.log("Data berhasil diambil:", hasilItem.value);     //tampilkan data
      } else {                                      //sebaliknya
          console.error("Terjadi kesalahan:", hasilItem.reason);
      }
  });
}
// prosesDataAllSettled();       //di command karena hasilnya error *tidak ada apinya
/**tambahan js merupakan bahasa yang weakly typed, berarti tipe data dapat otomatis dikonversi js ketika diperlukan 
contoh*/
let aNumb = 3;
let bStri = '10';
let cStri = aNumb + bStri; //hasil akan "310" (number + string = string)
console.log(cStri);
/**Type Coercion
Type coercion adalah proses di mana JavaScript secara otomatis mengubah tipe data satu variabel menjadi tipe lain saat diperlukan dalam operasi tertentu.
 */

/**JSDoc merupakan alat dokumentasi yang digunakan untuk menambah komentar pada kode js. menggunakan */
/**dokumentasi */
//contoh penggunaan
/**
 * 
 * @param {number} a -angka pertama
 * @param {number} b -angka kedua
 * @returns {number} hasil bagi
 */
function bagi(a, b) {
  return a / b;
}
console.log('\n', bagi(10, 2));

/**flow, type check library merupakan alat static type checker untuk javascript yang dikembangkan oleh facebook, flow membangu pengembang menangkap kesalahan tipe data dalam kode JS sebelum kode dijalankan,
 * dengan flow pengembang bisa menambahkan anotasi tipe data pada kode JS yang membuat kode lebih aman & lebih mudah dimengerti pengembang lain.
 * instalasi
 * -install 'npm install --global flow-bin //secara global
 * -npm install --save-dev flow-bin   //dependensi prioject
 * selanjutnya bisa tanya gpt
 * 
*/

console.log('\n===Typescript, Superset dari JavaScript');
let whatSuperset = 'pertama apa itu superset?.\nsuperset merupakan versi upgrade dari suatu bahasa dasar / alat yang memperluas fungsionalitas dari suatu bahasa lain, sambil mempertahankan kompabilitas dengan bahasa yang asli. \nsuperset mencangkup semua fitur dari bahasa dasarnya, tetapi menambahkan fitur tambahan yang tidak ada dimiliki oleh yang asli. \ncontoh superset \n-javascript memiliki superset TypeScript \n-CSS memiliki superset SASS';
console.log(whatSuperset);
console.log('Style Guide Javascript');
/**Style Guide dalam JavaScript adalah seperangkat aturan dan pedoman yang membantu pengembang menulis kode yang konsisten, bersih, dan mudah dipahami. Tujuan utama dari style guide adalah untuk memastikan bahwa kode yang ditulis oleh berbagai pengembang di proyek yang sama memiliki gaya penulisan yang seragam, 
 * sehingga lebih mudah untuk dipelihara dan dikembangkan. 
 * Contoh Populer Style Guide dalam JavaScript
 * -Airbnb JavaScript Style Guide:
 * -Google JavaScript Style Guide:
 * -StandardJS:*/

console.log('===DOM===');
/**DOM (Document Object Model) merupakan representasi struktur dari dokumen HTML / XML yang dimuat dalam memori komputer. dalam JS DOM memungkinkan developer mengakses & memanipulasi elemen-elemen pada halaman web,
 * saat laman web dimuat browser membuat DOM dari laman, HTML DOM model dibangun seperti struktur pohon Object. keyword 'HTML DOM Tree of Object'.
 * dengan model object JS memiliki kemampuan untuk membuat HTML dinamis
 * - Javascript bisa merubah semua elemen HTML di laman
 * - Javascript bisa merubah semua atribut HTML di laman
 * - Javascript bisa merubah semua style CSS di laman
 * - Javascript bisa menghapus elemen & atribut HTML yang ada di dokumen
 * - Javascript bisa menambah elemen & atribut HTML  
 * - Javascript bisa memberi reaksi ke semua event HTML di laman
 * - Javascript bisa membuat Event HTML di laman
 * W3Schools
 * What is the DOM?
The DOM is a W3C (World Wide Web Consortium) standard.
The DOM defines a standard for accessing documents:
"The W3C Document Object Model (DOM) is a platform and language-neutral interface that allows programs and scripts to dynamically access and update the content, structure, and style of a document."
The W3C DOM standard is separated into 3 different parts:
  -Core DOM - standard model for all document types
  -XML DOM - standard model for XML documents
  -HTML DOM - standard model for HTML documents
 */
console.log('--DOM method');
//*note file praktik ada di index.html & js ada di jsDOM.js
/**merupakan tindakan yang bekerja pada HTML event, properti merupakan value dari HTML elemen yang bisa dirubah / diset
 * HTML DOM bisa diakses dengan JS / bahasa Pemrograman lain.
 * -di DOM elemen HTML di definisikan sebagai object
 * -'Properti' untuk semua elemen HTML. merupakan value yang dapat diambil / di set (merubah, menghapus content HTML)
 * -'Method' untuk mengakses semua elemen HTML. merupakan aksi yang dapat dilakukan (menambah / menghapus elemen HTML)
 * -'event' untuk semua elemen HTML
 * 
 * ##Methode untuk menemukan Elemen HTML##
 *        method                                
 * -document.getElementById(id)                 --cari elemen dengan id 
 * -document.getElementsByTagName(name)         --cari elemen dengan tag name
 * -document.getElementsByClassName(name)       --cari elemen dengan class name
 * 
 * ##Cara merubah elemen HTML##
 *      properti
 * -element.innerHTML = new HTML content        --ganti inner html elemen
 * -element.attribute = new value               --ganti vilai atribut
 * -element.style.properti = new style          --ganti style (css) elemen
 *      method
 * -element.setAttribute(attribute, value)       --ubah nilai atribut elemen
 * 
 * ##Tambah dan Hapus elemen##
 *      method
 * -document.createElement(element)              --buat element
 * -document.removeChild(element)                --hapus child elemen
 * -document.appendChild(element)                --tambah child elemen
 * -document.replaceChild(element)               --ganti child elemen
 * -document.write(text)                         --menulis text secara langsung ke dokumen 
 * 
 * ##tambah event handler
 *     method
 * -document.getElementById(element).onclick=    --tambah event handler kemudian beri fungsi ketika event terpicu
 * function(){code}
 * 
 * document indexJS.html & jsDOM.js
 */

//validasi data
/**Data Validation
 * Data validation memastikan masukan user bersih, benar & berguna 3B njir
 * tugas umum validasi 
 * -cek apakah semua kolom dah diisi
 * -cek apakah tanggal valid
 * -cek apa pengguna memasukkan text di kolom numerik
 * Most often, the purpose of data validation is to ensure correct user input.
 * Validation can be defined by many different methods, and deployed in many different ways.
 * Server side validation is performed by a web server, after input has been sent to the server.
 * Client side validation is performed by a web browser, before input is sent to a web server.
 */

//HTML Constraint Validation
/**HTML memperkenalkan HTML validatio concep bernama HTML Constraint Validation,
 * didasarkan pada
 * -validai HTML input atribut
 * -validasi CSS pseudo selector
 * -DOM Properties & method
 * 
 * validai HTML input atribut 
 * -disable           --membuat elemen input spesifik disable
 * -max               --membuat nilai maximal input elemen
 * -min               --membuat nilai minimal input elemen
 * -pattern           --membuat nilai spesifik unutk masukan {1-9} *angka 1 / 9
 * -required          --harus diisi
 * -type              --input spesifik (url, email,dsb)
 * 
 * validasi CSS pseudo selector
 * -:disable      :pilih elemen dengan atribut disable
 * -:invalid      :pilih elemen dengan atribut invalid
 * -:optional     :pilih elemen dengan atribut optional
 * -:required     :pilih elemen dengan atribut required
 * -:valid        :pilih elemen dengan atribut disable
*/

function ee() {
  console.log('nya  nya nya nya nya nya nya nya nya  nya nya nya nya  nya nya nya nya  nya nya nya nya  nya nya nya nya  nya nya nya nya  nya nya nya' );
}
// setInterval(ee, 100);

//Event Handler
/** 'addEventListener()' method melampirkan event handler ke elemen spesifik
 * 'addEventListener()' method melampirkan event handler ke elemen lain tanpa menimpa event handler yang telah ada
 * dev bisa menambahkan banyak event handler ke satu elemen, dev bisa menambahkan beberapa evend handler ke satu tipe elemen contoh (click),
 * dev bisa bisa menambahkan event handel ke semua DOM object, tidak hanya elemen HTML, I.e window object
 * event handler membuat method lebih mudah memberi reaksi ke bubbling, hubungan parent child
 * ketika menggunakan method 'addEventListener' memisahkan js dengan html markup, untuk keleluasaan membaca dan memberi ijin utnk menambah event listener event kerika tidak melakukan control HTML markup
 * kemudahan menghilangkan event listenr dengan menggunakan 'removeEventListener()'
 * sintaks
 * element.addEventListener(event, function, useCapture);
 * penjelasan
 * -parameter pertama merupakan 'event' seperti (click, mousedown &/ HTML DOM event lainnya *https://www.w3schools.com/jsref/dom_obj_event.asp)
 * -parameter kedua merupakan fungsi yang akan di panggil ketika event terjadi / terpicu
 * -parameter ketiga merupakan nilai boolean yang menentukan apakah event akan menggunakan event bubbling / even captured. *parameter ini bersifat optional
 * addEventListener() memperbolehkan memberi banyak event ke elemen yang sama tanpa overwriting elemen yang telah ada.
 * ketika meneruskan nilai, gunakan "anonymous function" yang dipanggil spesifik fungsi dengan parameter, biasa digunakan untuk fungsi callback
 * sintaks
 * element.addEventListenr("click", function(){myFunction(p1, p2); });
 * ===event bubling atau event capturing===
 * ada dua cara penyebaran event (event propagation) dalam HTML DOM yaitu bubbling dan captured.
 * event propagation merupakan cara untuk mendefiniskan urutan elemen ketika suatu event terjadi, 
 * dalam suatu kasus, jika terdapat <p> didalam elemen <div>, kemudian jika pengguna  mengeklik di <p> mana elemen yang "click" terlebih dahulu.
 * di bubbling elemen didalam akan di handle pertama, kemudian elemen luar, <p> duluan kemudian <div>.
 * di capturing elemen luar akan di handle pertama, kemudian elemen daklam, <div> duluan lalu <p>,
 * dengan addEventListener() dev bisa spesifik memilih propagation menggunakan parameter "useCapture"
 * sintaks
 * addEventListener(event, function, useCapture)
 * nilai default false, yang akan menggunakan bubling propagation, kemudian jika event di set true maka event akan menggunakan capturing propagation
 * ===removeEventListener()
 * berfungsi untuk meremove event handler yang telah di lampirkan dengan addEventListener
 * untuk referensi DOM event object ada "https://www.w3schools.com/jsref/dom_obj_event.asp"
 */
console.log("==DOM Nodes==");
/** berdasarkan pada W3S DOM Standar semua didalam HTML documen adalah node
 * -semua elemen adalah elemen node
 * -text di html merupakan text node
 * -all conmment comment node
 * jadi dengan HTML DOM semua node tree bisa diakses dengan javascript
 * ==Hubungan Node
 * node didalam node tree memiliki hubungan hierarki satu sama lain
 * -di node tree bagian atas disebut root / root node
 * -setiap node memiliki 1 parent, kecuali root *no parent
 * -sebuah node bisa memiliki beberapa child
 * -saudara (brother / sister*) nodes memiliki parent yang sama
 * dalam HTML 
* <html>  = root node
* <html>  = has no parent
* <html>  = parent of <head> & <body>
* <head>  = is first child <html>
* <body>  = is last child <html>
and:

* <head> has one child: <title>
* <title> has one child (a text node): "DOM Tutorial"
* <body> has two children: <h1> and <p>
* <h1> has one child: "DOM Lesson one"
* <p> has one child: "Hello world!"
* <h1> and <p> are siblings

navigasi antara nodes
gunakan properti terkait untuk navigasi antara nodes dengan js
-parentNode
-childNodes[nodeNumber]
-firstChild
-lastChild
-nextSibling
-previousSibling
W3S *kesalahan umum error di DOM processing adalah berharap ada elemen node yang berisi text
contoh
<title id="demo">DOM Tutorial</title>
elemen title diatas tidak berisit text.
namun berisi text node yang memiliki value "DOM Tutorial"
value dari text node bisa diakses dengan node "innerHTML" properti

@myTitle = document.getElementById("demo").innerHTML;
akses properti innerHTML = mengakses properti nodeValue firstChild
@myTitle = document.getElementById("demo").firstChild.nodeValue;
mengakses firstChild juga dapat dilakukan seperti ini
@myTitle = document.getElementById("demo").childNodes[0].nodeValue;
innerHTML = digunakan untuk meng-set konten dalam HTML element
==DOM root nodes
terdapat dua nodes spesial yang mengizinkan akses penuh ke document
-document.body    = body document
@document.getElementById("demo").innerHTML = document.body.innerHTML;
-document.documenElement = full document
@document.getElementById("demo").innerHTML = document.documentElement.innerHTML;

=NodeName properti
nodeName properti menentukan nama spesifik suatu node
-nodeName is read-only
-nodeName dari elemen node yang memiliki nama yang sama dengan tag name
-nodeName dari atribut node 
-nodeName dari text node yang selalu #teks
-nodeName dari document node yang selalu #document
@indexJs
*Note: nodeName always contains the uppercase tag name of an HTML element.

//nodeValue properti
nodeValue spesifik terhadap value dari node
-nodeValue untuk elemen dengan null
-nodeValue untuk text nodes yang berisi teks itu sendiri
-nodeValue untuk atribut nodes dari atribut value
//nodeType properti hanya read only, dia mengembalikan tipe dari node
@indexJs
lainnya di "https://www.w3schools.com/js/js_htmldom_navigation.asp"
  */

console.log("Javascript HTML DOM elements (Nodes)");
/**menambah dan menghapus nodes
 * const para = document.createElement("p")
 * const node = document.createTextNode("ini text");
 * para.appendChild(node) 
 * methode appendChild, menjadikan suatu elemen child sebagai child dari elemen parent
 *remove elemen dengan .remove()
 @indexJs
 untuk beberapa browser lama yang tidak support 
 bisa menggunakan removeChild
 parent.removeChild(child);

//replace Element
menggunakan replaceChild(newChild, oldChild)
 */

console.log("===Javascript HTML DOM collections===");
/**methode getElementByTagName() mengembalikan sebuah HTMLCollection object.
 * HTMLCollectio object berbentuk array seperti list (collectio) dari HTML element
 *  @indexJs
 * An HTMLCollection is NOT an array!
An HTMLCollection may look like an array, but it is not.
You can loop through the list and refer to the elements with a number (just like an array).
However, you cannot use array methods like valueOf(), pop(), push(), or join() on an HTMLCollection.
 */

//perbedaan antara HTML collection & nodeList
/**HTMLCollection & nodeList  pada dasarnya sama
 * keduanya seperti array / colections (list) dari nodes(elements) yang di ekstrak dari document, nodes bisa diakses dengan nomor index dan dimulai dari 0
 * keduanya memiliki properti lenght yang mengembalikan jumlah element di collections
 * HTMLCollection adalah koleksi element dokumen
 * nodeList adalah koleksi dari document nodes (element nodes, attribute nodes, text nodes)
 * HTMLColections bisa diakses berdasarkan nama, id / nomor index
 * nodelist bisa diakses berdasar nomor index
 * HTMLCollection merupakan koleksi langsung / live collection
 * NodeList merupakan koleksi statis, tidak akan berubah semisal ditambah elemen bari di list DOM
 * getElementsByClassName() dan getElementsByTagName() method merupakan live return HTMLCollection
 * QuerrySelectorAll() method mengembalikan secara statis nodeList
 * childNodes properti mengembalikan live nodeLIst
 * 
 * Not an Array!
A NodeList may look like an array, but it is not.
You can loop through a NodeList and refer to its nodes by index.
But, you cannot use Array methods like push(), pop(), or join() on a NodeList.
*/ 

console.log("===JavaScript BOM (Browser Object Model)===");
/**JS BOM memungkinkan JavaScript "berkomunikasi" dengan browser */

console.log("WEB APIs");
/**API merupakan Application Programming Interface.
 * WEB API merupakan programming interface untuk web
 * dapat digunakan untuk memperluas fungsional web browser
 * server API dapat memperluas fungsional web server
 */

console.log("===AJAX===");
/**AJAX = Asynchronous JavaScript And XML.
 * AJAX bukan bahasa pemrograman
 * AJAX hanya digunakan dengan kombinasi
 * *sebuah browser dengan built in XMLHttpRequest object (untuk request data dari web server)
 * *JavaScript & HTML DOM (untuk menampilkan / menggunakan data)
 * AJAX merupakan teknik dalam pengembangan web yang memungkinkan halaman web untuk melakukan permintaan ke server secara asinkron (data bisa dimuat di latar belakang tanpa harus melakukan refresh seluruh halaman.)
 * dengan ajax dev bisa memperbaharui bagian dari halaman web seperti tabel data, formulir / konten lainnya tanpa harus melakukan refresh secara keseluruhan.
 * 
 */

console.log("===JSON *lanjutan===")
/**JSON = JavaScript Object Noation
 * JSON merupakan format text untuk menyimpan dan transportasi data yang ringan
 * JSON "self-describing" mudah dimengerti
 * JSON berfsifak independen
 * 
 * JavaScript memili fungsi untuk merubah string JSON menjadi JavaScript Objects
 * JSON.parse()
 * dan juga memiliki fungsi untuk mengconvert object menjadi JSON string
 * JSON.stringify()
 * 
 * ==JSON Syntax==
 * JSON Syntax Rules
 * -data dinamai dengan pasangan name/keys : value
 * -data dipisahkan dengan koma ","
 * -kurung kurawa "{}" digunakan untuk menyimpan object
 * -kurung siku "[]" digunakan untuk menyimpan array
 * -*JSON name memperlukan kutip ganda ("")
 * -keys harus string
 * #perbedaan JSON dengan JS Objects
 * JSON
 *  {"name":"Kebin"}        //di JSON harus menggunakan kutip ganda
 * JavaScript 
 *  {name:'kebin'}          //di JS object bisa menggunakan kutip
 * JSON Values
 * -a string
 * -a number
 * -an object
 * -an array
 * -a boolean
 * -null
 * JS Objects
 * -seperti diatas dengan tambahan js expression
 * -a function
 * -a date
 * -undefined
 */
//==pengakses an JS Object
person = {name:"John", age:31, city:"New York"};
//contoh 1
person.name;
// contoh 2
person["name"];

//==modifikasi object
// contoh 1
person.name = "Kebin";
// contoh 2
person["age"] = 26;

/**Tipe file untuk berkas JSON adalan ".json";
 * Tipe MIME untuk teks json adalah "application/json"
 */
console.log("JSON vs XML");
/*JSON dan XML sama-sama digunakan untuk menerima data dari web server */
/*contoh JSON */
// {"Employess":[
//   {"firstName":"John", "lastName":"Dony"},
//   {"firstName":"Anna", "lastName":"Belly"},
//   {"firstName":"Sutejo", "lastName":"Sutrisno"},
// ]}
/*contoh XML */
/*<employes>
  <employe>
    <firstName>John</firstName> <lastName>Doe</lastName>
  </employe>
  <employe>
    <firstName>Anna</firstName> <lastName>Bell</lastName>
  </employe>
  <employe>
    <firstName>Jhon</firstName> <lastName>Sutrisno</lastName>
  </employe>
</employes>*/
/**JSON seperti XML karena
 * -Keduanya bersifat "self describing" (human readable)
 * -bersifat hierarki (values didalam value)
 * -bisa diurai dan gunakan banyak pemrograman bahasa lain
 * -bisa di fetch dengan "XMLHttpsRequest"
 **JSON tidak seperti XML karena
 * -JSON tidak menggunakan end tag
 * -JSON lebih pendek
 * -Lebih cepat dibaca ditulis
 * -bisa menggunakan array
 * Perbedaan terbesarnya adalah:
 XML harus diurai dengan parser XML. JSON dapat diurai oleh fungsi JavaScript standar.
 **Untuk aplikasi AJAX, JSON lebih cepat dan lebih mudah daripada XML:
 * Menggunakan XML
 * -Ambil dokumen XML
 * -Gunakan XML DOM untuk mengulang dokumen
 * -Ekstrak nilai dan simpan dalam variabel
 * Menggunakan JSON
 * -Ambil string JSON
 * -Pelajari string JSON
 */

console.log("JavaScript / JQuerry");
/**JQuerry di ciptakan tahun 2006 oleh John Resig. di design digunakan untuk menangani ketidak cocokan browser dan mensederhanakan HTML DOM
 * Handling, Animation dan AJAX. lebih dari 10 tahun JQuerry menjadi library JavaScript paling populer di dunia.
 *@indexs .html  */

console.log("\n===Fungsi map()===");
/*berbeda denga fungsi "new Map()". "map()" merupakan methode dalam array dalam javascript, digunakan untuk pada array untuk membuat array baru dengan menetapkan fungsi tertentu pada
elemen dalam array tersebut. fungsi map() memetakan setiap elemen dalam array asli ke elemen baru berdasarkan fungsi yang diberikan, dan hasilnya adalah array baru dengan jumlah elemen yang sama dengan array asli
cara kerja
 *map() memanggil fungsi callback yang diberikan dev pada setiap elemen di array
 *fungsi callback menerima 3 argumen: nilai saat ini, index elemen & array asli
contoh*/
const mapExamp = [1, 2, 3, 4, 5];
const dobelMapExamp = mapExamp.map(function(mapExamp) {   /*inisiasi dengan menggunakan fungsi map pada array
  dengan parameter callback function yang memiliki parameter array */
  return mapExamp*2;       //kembalikan array x 2
});
console.log("penggunaan map\n", dobelMapExamp);
/*arrow function */
let myArray1s = ["Yae", "Sakura", "Ganyu", "Ayaka", "Raiden"];
const waifuMap = myArray1s.map(myArray1 => myArray1.length);           //digunakan untuk mengetahui panjang tiap elemen
console.log("array function pada map()\n", waifuMap);


console.log("===REACT Use function===\nPenggunaan useState dalam react");
/**glosarium
 * state: merupakan object / variabel yang nilainya berubah-ubah seiring waktu, state ibarat nilai yang berubah-ubah dan harus dirender setiap perubahan pada react.
 * senarai merupakan daftar / kumpulan data yang berurut,
 */
/*useStae merupakan hook / kait pada react yang digunakan untuk mengelola state pada komponen didalam react, 
sintaks
const [state, setState] = useState(initialValue);
state: merupakan nilai saat ini,
setState: fungsi yang digunakan untuk memperbaharui nilai dari state
initialValue: merupakan  nilai awal dari state, bisa berupa tipe data apa saja: string, number, array, object / function.
*/

