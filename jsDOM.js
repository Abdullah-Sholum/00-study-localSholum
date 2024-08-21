const { EmitFlags } = require("typescript");

/**akses dokumen, kemudian ambil elemen dengan id "methodDOM" ||  getElementById() merupakan method
 * setelahnya set string dengan innerHTML ||  innerHTML merupakan properti
 */
document.getElementById("methodDOM").innerHTML = "Method DOM js";

/**inisiasi e1 dengan ambil elemen id introFindId.
 * ambil elemen id demoFindId. set string '...' dengan innerHTML + set string e1 */
const element1 = document.getElementById("introFindId");
document.getElementById("demoFindId").innerHTML = "#Text sebelum ini adalah " + element1.innerHTML;

/**inisiasi e1 dengan mengambil elemen dengan tag name <p> (paragraf)
 * kemudian ambil elemen id 'demoFindByTagName' & set string '...' dengan innerHTML + set e2 index [3]
 */
const element2 = document.getElementsByTagName("p");
document.getElementById("demoFindByTagName").innerHTML = "#Text tag P dari index ke 3 adalah " + element2[3].innerHTML;

/**inisasi x dengan ambil elemen id main
 * inisiasi y dengan ambil elemen p dari x
 * kemudian get demoGetElementByIdDiv set string
 */
const xStr = document.getElementById("idDiv");
const yStr = xStr.getElementsByTagName("p");
document.getElementById("demoGetElementByIdDiv").innerHTML = 
'#paragraf pertama dari (index 0) dalam "idDiv" adalah :' + yStr[0].innerHTML;

/**insiasi dengan mengambil semua class name intro
 * get id. kemudian masukkan string + xStr [0]
 */
const xStr2 = document.getElementsByClassName("intro");
document.getElementById("demoGetElementByClassName").innerHTML = '#Paragraf 1 dari id name intro adalah '+xStr2[0].innerHTML;

/**ambil semua elemen dengan querry
 * tambah string elemen + string xStr3[0]
 */
const xStr3= document.querySelectorAll("p.introQuerry")           //ambil elemen dengan selector p class='introQerry'
document.getElementById("demoQuerrySelector").innerHTML = '#paragraf pertama querrySelector '+xStr3[0].innerHTML;


document.getElementById("frm1").addEventListener("submit", function(event) {    //get elemen dengan id 'frm'1, tambah event listener submit, buat fungsi dengan parameter event
    event.preventDefault();                             // Mencegah form dari submit dan refresh halaman
    const xStr4 = document.forms["frm1"];               // inisiasi dengan mengakses form kemudian simpan value ke object
    let text = "";                                      // inisasi string kosong
    for (let i = 0; i < 2; i++) {                       // perulangan for dengan kondisi jika i kurang dari 2(karena form berisi 2 kolom masukan) maka tambah 1. *jika mengisi panjangng xStr4 maka atribut submit akan terpanggil
        text += xStr4.elements[i].name + " : " + xStr4.elements[i].value + "<br>";   //tambahkan text dengan name element xStr4 index [i] +str+ value elemen xStr index [i]
    }
    document.getElementById("demoObjectCollection").innerHTML = text;               //kemudian tambahkan text ke id demoObjectCollection
});

//rubah text dengan innerHTML
// document.getElementById("changeEle").innerHTML = 'after berubah';

/**rubah atribur 'src' dari elemen id 'img1' dengan 'src' */
// document.getElementById('img1').src = '/img/GI2.png';

/**set waktu id date dengan innerHTML & fungsi Date */
document.getElementById("date").innerHTML = "Date : "+Date("jakarta");

function validateFrm2() {
    let x = document.forms["frm2"]["fname"].value;      //panggil form yang memiliki name=frm2, kemudian akses input dengan name=fname & simpan value
    if (x == "") {
        alert("Name must be filled out");
        return false;                           //atur halaman tidak di refresh
    } else {
        return false;
    }
}

//merubah style css
//sintaks 'document.getElementById(id).style.property = new style'

/**dibawah merubah style dari elemen <p> */
document.getElementById("changeCSS1").style.color = "blue";             //get id ubah color style biru
document.getElementById("changeCSS2").style.fontFamily = "Arial";       //get id ubah style font arial
document.getElementById("changeCSS2").style.fontSize = "larger";        //get font size larger

//JS DOM Animation
/**animasi js dilakukan dedngan memprogram perubawah bertahap dalam suatu gaya elemen, perubahan diatur oleh pengatur waktu, */
// remember tidak ada event handler, karena fungsi dipanggil ketika tombol diketan lewat onclick
function animaMove() {
    let id = null;                                      //inisiasi dengan null
    const elem = document.getElementById('animate');    //get id animate
    let pos = 0;                                        //inisaisi position 0
    id = setInterval(frame, 0.7)                        //setInterval digunakan untuk menjalankan kode secara berulang pada interval tertentu, sintaks 'setInterval(fungsi, interval(ms))'
    function frame() {                                  //fungsi
        if (pos == 350) {                               //cek apakah pos 350
            clearInterval(id);                          //clearInterval digunakan untuk menghentikan eksekusi interval yang telah ditetapkan sebelumnya. sintaks clearInterval(id)
        } else {                                        //sebaliknya
            pos++;                                      //tambah pos 1
            elem.style.top = pos + "px";                //beri style top elem dengan pos + "px"
            elem.style.left = pos + "px";               //beri style left elem dengan pos + "px"
        }
    }
}