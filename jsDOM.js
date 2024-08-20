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

/**
 * 
 */
document.getElementById("frm1").addEventListener("submit", function(event) {    //get elemen dengan id 'frm'1, tambah event listener submit, buat fungsi dengan parameter event
    event.preventDefault();                             // Mencegah form dari submit dan refresh halaman
    const xStr4 = document.forms["frm1"];               // inisiasi dengan mengakses form kemudian simpan value ke object
    let text = "";                                      // inisasi string kosong
    for (let i = 0; i < xStr4.length; i++) {            // perulangan for dengan kondisi jika i kurang dari panjang xStr4; maka tambah 1
        text += xStr4.elements[i].name + ": " + xStr4.elements[i].value + "<br>";   //tambahkan text dengan name element xStr4 index [i] +str+ value elemen xStr index [i]
    }
    document.getElementById("demoObjectCollection").innerHTML = text;               //kemudian tambahkan text ke id demoObjectCollection
});

