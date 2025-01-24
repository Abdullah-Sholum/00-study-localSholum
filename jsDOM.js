// const { EmitFlags } = require("typescript");   //kode ghoib njir

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

//frm1
document.getElementById("frm1").addEventListener("submit", function(event) {    //get elemen dengan id 'frm'1, tambah event listener submit, buat fungsi dengan parameter event
    event.preventDefault();                             // Mencegah form dari submit dan refresh halaman
    const xStr4 = document.forms["frm1"];               // inisiasi dengan mengakses form kemudian simpan value ke object
    let textFrm1 = "";                                      // inisasi string kosong
    for (let i = 0; i < xStr4.length ; i++) {                       // perulangan for dengan kondisi jika i kurang dari 2(karena form berisi 2 kolom masukan) maka tambah 1. *jika mengisi panjangng xStr4 maka atribut submit akan terpanggil
        textFrm1 += xStr4.elements[i].name + " : " + xStr4.elements[i].value + "<br>";   //tambahkan text dengan name element xStr4 index [i] +str+ value elemen xStr index [i]
    }
    document.getElementById("demoObjectCollection").innerHTML = textFrm1;               //kemudian tambahkan text ke id demoObjectCollection
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


//Javascript DOM events
/**JS dapat dieksekusi saat peristiwa terjadi, seperti pengguna mengeklik elemen HTML.  untuk melakukannya tambahkan js ke atribut event HTML
 * sintaks
 * /'onclick=javascript'
 * contoh peristiwa HTML
 * -ketika pengguna mengeklik mouse
 * -ketika laman dimuat
 * -ketika gambat dimuat
 * -ketika mouse mengarah ke dalam elemen
 * -ketika bidang masukan berubah
 * -ketika form HTML di kirimkan
 * -ketika pengguna mengeklik tombol
  */
/**
 * @param {string} id
 *  fungsi ubah teks
 * kemudian di dalam fungsi set teks baru, dan beri style baru ke @param id 
 */
 function ubahTeks1(id) {             
    id.innerHTML = "Berubah Teksnya";
    id.style.fontSize = '30px';
    id.style.fontFamily = 'Verdana';
    id.style.fontWeight = '600';
 }
/**
 * get elemen date2, kemudian set string didalamnya dengen menampilkan date
 */
function tampilkanDate() {
    document.getElementById('date2').innerHTML = Date();
}

/*logika dokumen ini benar, hanya tidak bisa di dokumen ini saja */
// document.getElementById("tampilkanDate3").onclick = tampilDate3;
// function tampilDate3() {
//     document.getElementById("date3").innerHTML = Date();
// }

//Onload & Unonload
/**event terjadi saat pengguna memasuki atau keluar dari laman
 * onload event bisa digunakan untuk mengecek tipe dan versi browser pengunjung dan memuat versi laman web yang tepat berdasarkan  informasi tersebut
 * onload & unload event dapat digunakan untuk menangani cookies
 */
function checkCookies() {                           //buat fungsi
    let text = "";                                  //inisiasi dengan string kosong
    if (navigator.cookieEnabled == true) {          //cek kondisi apakah cookie diaktifkan di browser, jika iya maka true
        text = "Cookies are enabled.";
    } else {                                        //sebaliknya
        text = "Cookies are not Enabled.";
    }
    document.getElementById("cekCookie").innerHTML = text;      // set elemen dengan teks
}

//Oninput event
/** merupakan event yang terjadi saat pengguna memasukkan data*/
function teksKapital() {
    const xStr5 = document.getElementById("onInput");       //get elemen id onInput
    xStr5.value = xStr5.value.toUpperCase();                //ubah semua value masukan menjadi kapital dengan fungsi bawaan js toUpperCase()
}

//Onchange Event
/**event ini sering digunakan bersamaan dengan kombinasi untuk validasi input */
function afterKapital() {
    const xStr6 = document.getElementById("onChange");
    xStr6.value = xStr6.value.toUpperCase();
}


//OnMouseOver & OnMouseOut Events
/**merupakan event ketika pengguna mengarahkan kursor masuk / keluar elemen*/
/**
 * @param {string} obj
 * buat fungsi untuk event mouse, kemudian set teks dengan innerHTML 
 */
function mOver(obj) {              
    obj.innerHTML = "Nyuwun Sewu";
    obj.style.backgroundColor = "rgb(19, 56, 190)";
    obj.style.color = "white";
}
function mOut(obj) {
    obj.innerHTML = "Kursor Here";
    obj.style.backgroundColor = "aquamarine";
    obj.style.color = "black";
}

//onmousedown, onmouseup & onclick events
/** event yang terjadi ketika  mouse mengeklik elemen, menahan klik, kemudian melepaskan kliknya di elemen yang dituju*/
function mDown(obj) {
    obj.style.backgroundColor = "rgb(19, 56, 190)";
    obj.style.color = 'white';
    obj.innerHTML = "coba jan ditekan";
    obj.style.borderRadius = "200px"
    obj.style.height = "400px";
    obj.style.width = "500px";
}
function mUp(obj) {
    obj.style.backgroundColor = "";         //gak dikasih properti karena biar kembali ke warna awal
    obj.style.color = 'black';
    obj.innerHTML = "Coba Klik Gwa bang";
    obj.style.borderRadius = "10px"
    obj.style.height = "400px";
    obj.style.width = "800px";
}

/**event2 lainnya bisa diliat di W3School */
//event handler
//pengunaan dengan "named" function
document.getElementById("buttonElement2").addEventListener("click", clickFunction);
function clickFunction() {
    alert('hello world pada "named" function');
};

//penggunaan beberapa event handler untuk satu elemen
var xMouse1 = document.getElementById("buttonWithManyEvent");
xMouse1.addEventListener("click", functionButtonWithManyEvent1);
xMouse1.addEventListener("click", functionButtonWithManyEvent2);

function functionButtonWithManyEvent1() {
    alert ("tombol dengan beberapa alert");
}

function functionButtonWithManyEvent2() {
    alert ("alert ke 2 bersama dengan event lain");
}

//penggunaan banyak event handler untuk satu elemen
var xMouse2 = document.getElementById("myBtnMouse");
xMouse2.addEventListener("mouseover", myFunction1);
xMouse2.addEventListener("click", mySecondFunction2);
xMouse2.addEventListener("mouseout", myThirdFunction3);
// penggunaan += untuk inner html bertujuan agar string selalu di tampilkan berkali mengikuti event yang terjadi, jadi tidak tampilkan kemudian hapus
function myFunction1() {
    document.getElementById("demoMouse").innerHTML = "Moused over!<br>";            //note. operator penugasan gabungan "+=" aku ganti ke "=" agar tidak memenuhi laman web 
}
function mySecondFunction2() {
    document.getElementById("demoMouse").innerHTML = "Clicked!<br>";
}
function myThirdFunction3() {
    document.getElementById("demoMouse").innerHTML = "Moused out!<br>";
}

// event handler ketika object window berubah
window.addEventListener("resize", function(){                               //"window" mewakili merupakan object Javascript yang mewakili jendela website tempat halaman ditampilkan. "resize" merupakan jenis event yang dipicu ketika pengguna merubah ukuran jendela browser
    document.getElementById("eventWindow").innerHTML = Math.random();
});

//propagation
document.getElementById("myP1").addEventListener("click", function() {
    alert("kau mengeklik <p> / elemen putih");
}, false);                                                                             //false
document.getElementById("propagation").addEventListener("click", function(){
    alert("kau mengeklik <div> / elemen orang");
}, false);                                                                             //false

document.getElementById("myP2").addEventListener("click", function(){
    alert("kau mengeklik <p> / elemen putih");
}, true);                                                                              //true
document.getElementById("capturing").addEventListener("click", function(){
    alert("kau mengeklik <div> / elemen orange");
}, true);                                                                              //true

//removeEventHandler()
document.getElementById("divRemoveEvent").addEventListener("mousemove", rmvEvent);
function rmvEvent() {
  document.getElementById("mathrandMouse").innerHTML = Math.random();
}

function removeHandler() {
    document.getElementById("divRemoveEvent").removeEventListener("mousemove", rmvEvent);
};

//nodeName properti
document.getElementById("id02").innerHTML = document.getElementById("id01").nodeName;

//nodeType properti
document.getElementById("id12").innerHTML = document.getElementById("id11").nodeType;

//remove element
function myFunctionHapusEle() {
    document.getElementById("p2").remove();
}

//HTML Collection
const myCollection = document.getElementsByTagName("p");
document.getElementById("demoCollect").innerHTML = "inner HTML dengan tag p ke 59: " + myCollection[59].innerHTML;

document.getElementById("demoCollectLenght").innerHTML = "This document punya panjang lebih dari " + myCollection.length + " paragraphs.";

//====JQuerry====
/*finding elemen dengan ID */
//jqeuryy 1                 *aktif kan salah satu agar tau perbedaanya
// $(document).ready(function() {
//     var myElement = $("#JQ01");
//     $("#demoJQ01").text("text dari JQ01 adalah : " + myElement[0].innerHTML);
// });
//jqeuryy 2
$(function() {                          //penggunaan $ untuk memperpendek sintakas "document."
    var myElement = $("#JQ01");         //penggunaan $ untuk memperpendek sintaks "document.getElemetnById("id")
    $("#demoJQ01").text("text dari JQ01 adalah : " + myElement[0].innerHTML);   /*penggunaan $ untuk memperpendek sintaks "document.getElementById", sintaks .text() berfungsi untuk mengatur / mengembalikan text dari elemen yang dipilih,
    jika argumen text() kosong akan mengembalikan nilai, jika diisi string akan mengganti text, kemudian penggunaajn .text() lebih aman dari innerHTML karen otomatis menghindari injeksi HTML / skrip berbahaya.
    kemudian di penggabungan JQuery dengan innerHTML, innerHTML digunakan untuk mengakses konten didalam elemen myElement, kemudian memasukkannya ke .text().*/
});
//javascript
// const jq01 = document.getElementById("JQ01");
// document.getElementById("demoJQ01").innerHTML = "text dari JQ01 adalah : " + jq01.innerHTML;

/*pencarian berdasarkan tag name */
$(function()  {                                     //buat fungsi anonim dengan shorthand JQuery
    let jQueryTagName = $("p");                     //inisiasi dengan shorthand JQuerry untuk mengakses semua elemen dengan tag <p>
    $("#demoJQ02").text("teks tag p ke ntah berapa adalahh : " + jQueryTagName[67].innerHTML);   /*akses elemen dengan id "demoJQ02" & akses teks jQuery[index] dengan innerHTML kemudian set text dengan fungsi .text() dari shorthand JQuery*/
});

/*pencarian berdasarkan class name */
$(function()  {
    let jQueryClassName = $(".JQ04")                //akses class JQ04
    $("#demoJQ03").text("jadi pencarian dengan class name : " + jQueryClassName[0].innerHTML);
});

/*pencarian berdasarkan CSS selector / querrt selector */
$(function() {
    let jQueryByQuery = $("p.JQ05");                //akses query selector dengan tag <p> dan class #JQ05
    $("#demoJQ04").text("Dalam query selector anda harus mencari p.JQ05 maka hasilnya adalah : " + jQueryByQuery[2].innerHTML);
});

//===JQuery HTML element
//set text content
$(function()  {
    let JQ06= $("#JQ06");
    $("#JQ06").text("Ini merupakan text baru menggunakan fungsi .text() JQuery");
})

//get text content
$(function() { 
    let getTextContent = $("p.JQ05").text();                //inisiasi dengan mengakses selector p.id JQ05. simpan nilai dengan .text();
    $("#demoJQ05").text(getTextContent);                    //akses id demoJQ05. set text dengan .text(text)
});

//set HTML content
$(function()  {
    $("#demoJQ07").html("<h1>Hello World, set text dengan JQuery</h1>"); /*fungi .html() digunakan unutk mendapatkan / mengetur konten html dari elemen.
    untuk kasus disini .html digunakan untuk merubah elemen div dengan id demoJQ07 menjadi <h1>*/
});

//get HTML content
$(function()  {
    var content = $("#demoJQ08").html();        //inisiasi dengan menyimpan html kontek demo
    $("#demoJQ09").html(content);               //set dengan html(content)
});

//===JQuery CSS style
// hiding HTML element 
$(function()  {
    $("#JQStyle03").hide();     //set dengan fungsi hide()
});
//show hiding HTML element
$(function()  {
    $("#JQStyle04").show();     //set dengan fungsi hide()
});
//change style element
$(function()  {
    // $("#JQStyle05").css("font-size", "40px");
    // $("#JQStyle05").css("font-weight", "800");
    // $("#JQStyle05").css("color", "red");
    // versi pendek
    $("#JQStyle05").css({
        "font-size": "40px",
        "font-weight": "800",
        "color": "red"
    });
});

//==JQuery HTML DOM
//removing HTML element
$(function()  {
    $("#JQDOM01").remove();
});
//get parent element
$(function()  {
    $("#demoJQ10").text($("#JQDOM02").parent().prop("nodeName"));   //fungsi parent digunakan untuk mengambil elemen induk dari JQDOM02, prop digunakan untuk mendapatkan atau menetapkan properti yang dipilih, nodeName merupakan properti yang mengembalikan nama tag dari elemen tersebut.
    /*fungsi diatas mencari elemen parent dari JDDOM02, kemudian mencari nama node parent tersebut yaitu body */
});
