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
let meSholum: {
    name: string;
    age: number;
    gender: string;
    college: boolean;
    hobby: string[];
} = {
    name: 'Abdullah Sholum',
    age: 20,
    gender: 'male',
    college: true,
    hobby: ['DIY', 'electoric', 'gaming', 'watch anime', 'reading manga']
};
console.log(meSholum);
// variabel explicit assignment
let firstName1: string = "Abdullah";
let lastName1: string = "Sholum";
console.log(firstName1 +" "+ lastName1);
console.log(typeof firstName1);
//re assign explicit *hapus command untuk test
// let firstName1 = 23;
// console.log(firstName1);
//implicit assignment
let nameMe = "Abdullah Sholum";
console.log(typeof nameMe);
//re assignm *error, coba hapus command
// let nameMe = 23;
// console.log(nameMe);
/**TS tidak selalu menyimpulkan jenis variabel, dalam kasus ini terkadang ts menetapkan "any" untuk menghindari type checking
 * example*/
const testJSON = JSON.parse("55");          //disini string, karena fungsi JSON.parse tidak tau data yang di return
console.log(typeof testJSON);               //disini output number
/*perilaku ini dapat di disable dengan "noImplyciyAny" dalam file "tsconfig.json"
*note beberapa tipe data primitf ditulis kapital sperti "Boolean", sebenarnya penulisan "boolean" sudah cukup, namun penggunaan huruf
besar bisa digunakan untuk keadaan sangat spesifik */

console.log("\n===TypeScript special type. Type:any===");
/*digunakan untuk melakukan disable pengecekan type tipe data */
let u = true;
// u = "string";        //error re assign, karena merubah ke string
// u.runANonExistentMethod();       //error Property 'runANonExistentMethod' does not exist on type 'true'.
// console.log(Math.round(u));      //error Argument of type 'boolean' is not assignable to parameter of type 'number'.
let v: any = true;  //gunakan type any
v = "string";       //tidak error 
console.log(Math.round(v));     //tidak error, namun menghasilkan NaN (Not a Number)
/*Type:unknown 
seperti any tapi lebih aman. karena mencegah tipe digunakan*/
let w:unknown = 1;
w = "string";

/*runANonExistentMethod merupakan fungsi yang tidak di definisikan*/
w = {                                       //inisaiasi w dengan object "{}" yang memiliki 1 properti berupa fungsi yaitu "runANonExistentMethod"
    runANonExistentMethod: () => {          //buat arrow fungsi tanpa parameter 
        console.log("aku pikir aku ada");   //statement
    }
} as { runANonExistentMethod: () => void }  /*beri object w denan type assertion "as" yang menegarskan bahwa w memimiliki properti "runANonExistentMethod"
yang bertipe "() => void*, yaitu fungsi tanpa nilai parameter & return*/
if(typeof w === 'object' && w !== null) {                   //cek kondisi apakah type w merupakan object dan w tidak null
    (w as { runANonExistentMethod: Function }).runANonExistentMethod();     //statement jalankan w sebagai properti didalamnya yaitu fungsinya || w as { runANonExistentMethod: Function menegaskan didalam w ada fungsi 
} 
/*casting merupakan saat dev menggunakan "as" untuk menyatakan variabel / properti bertipe cast*/
/*type:never
membuat error meskipun itu didenisikan * uncommand untuk melihat*/
// let x:never = true;
/*type:undefined, type:null */
let y:undefined = undefined;
console.log(typeof y);
let z:null = null;
console.log(typeof z);

console.log("\n==array==");
const names: string[] = [];
names.push("Dylan");
// names.push(1212); //error
names.push("Me");
console.log(names);
console.log("\nReadonly");
const names1: readonly string[] = ["Dylan"];
// names1.push("Jack"); // Error: Property 'push' does not exist on type 'readonly string[]'.
// try removing the readonly modifier and see if it works?
console.log(names1);

console.log("\nType Inference");
const numbers = [1, 2, 3]; // inferred to type number[]
numbers.push(4); // no error
// numbers.push("2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
console.log(numbers);
let head: number = numbers[3]; // no error
console.log(head);

console.log("===Tuple===");
/*merupakah tipe array yang sudah di predefined-length dan tipe untuk tiap index. 
tupel sangat bagus karena memungkinkan tiap elemen didalam array tau tipe nilainya.
untuk mendefinisikan tupel, pertama harus mendefinisikan tiap tipe elemen di array
struktur
tuple:[nama:tipeData, nama:tipedata] = [value]*/
let urTuple: readonly [nomor:number, teks:string, boolean:boolean];      //add readonly agar tidak bisa di push
urTuple = [123, "testing", true];
// urTuple = ["testing", 123, 12];         //error
console.log(urTuple);
/*destruksi tupel 
memecah value dari tuple*/
console.log("destruksi tuple");
let [nomor, teks, boolean] = urTuple;
console.log("nomor dari urTuple", nomor);
console.log("teks dari urTuple : ", teks);

console.log("\n===TypeScript Object Types===");
/*struktur
const namaObject:{nameValue: tipe, namaValue: tipe, namaValue: tipe} = {
    namaValue: "value",
    namaValue: value,
    namaValue: value,
};
example*/
const car: { type: string, model: string, year: number , turbo?: string} = {
    // penggunaan tanda tanya "?" digunakan sebagai opsional, nilai boleh ada atau tidak
    type: "Toyota",
    model: "Corolla",
    year: 2009,
    // turbo: "ada kayak e",
};
console.log(car);
/*type inference, mencari berdasarkan keyvalue */
/*index signatures digunakna*/
const nameAgeMap: {[index: string]: number} = {};
nameAgeMap.Jack = 25;
// nameAgeMap.Mark = "duapuluh";
console.log("\n===Enums===");
/*merupakan spesial "class" yang merepresentasikan grup of constant (tidak bisa dirubah), "Enums" memiliki 2 jenis untuk "string" & "numeric"
Numeric Enums-default, dengan default nilai yang diinisiasi pertama bernilia 0, dan bertambah 1 selanjutnya setiap nilai*/
enum CardinalDirections {
    /*versi tidak diinisiasi */
    // North,       //versi memiliki nilai diawali edngan 0, karena tidak ada inisiasi pada value
    // East,
    // South,
    // West
    /*versi diinisiasi awal value */
    // North = 10,              //setelah 10 maka value selanjutnya 11, 12 dst
    // East,
    // South,
    // West    //14
    /*versi diinisiasi semuanya */
    // North = 1023,
    // East = 23,
    // South =23,
    // West = 12    //14
    /*versi menggunakan string */
    North = 'Ngalor',
    East = "Ngetan",
    South = "Ngidul",
    West = "Ngulon"
}
/**secara teknis dev bisa mencampur penggunaan string dan numeric, namin hal ini tidak direkomendasikan */
let currentDirection = CardinalDirections.North;            //panggil niali Norh
console.log(currentDirection);          //output
// currentDirection = 'North';          //akan error
console.log(CardinalDirections.West);

console.log("\n===Aliasses  & interfaces===");
/*type aliasses memungkinkan pendefinisian tipe dengan nama custom (sebuah alias). bisa digunakan unutk primitif seperti string / complex seperti object & array*/
//bat new car
type CarYear = number;              //set alias CarYear dengan number
type CarType = string;              //set alias CarString dengan string
type CarModel = string;             //set alias CarModel dengan string
type Car = {                        // iniasiasi Car dengan object
    year: CarYear,                  // set properti year dengan allias CarYear
    type: CarType,                  // set properti type dengan allias CarTypr
    model: CarModel                 // set properti model dengan allias CarModel
};

//inisiasi variabel dengen set aliasses & value
const carYear: CarYear = 2001                   
const carType: CarType = "Toyota"
const carModel: CarModel = "Hilux"
//inisiasi car2 yang bertipe Car, beserta properti didalamnya dengan variabel yang di definisikan sebelumnya
const car2: Car = {
    year: carYear,
    type: carType,
    model: carModel
};

console.log("type Aliasses", car2);
/*interfaces hampir sama dengan aliasses namum dia hanya digunakan di object types*/
interface Rectangel {   //definisikan interface Rectangel, digunakan untuk mendefinisikan struktur object Rectangel
    height: number,     //properti  height bertipe number
    width: number       //properti width bertipe number
};

const rectangel: Rectangel = {      //inisiasi rectangel bertipe Rectangel yang merupakan object
    height: 20,                     //isi properti height dengan value
    width: 15                       //isi properti width dengan value
};
console.log("interfaces, example rectangel ", rectangel);
/*extends interfaces. buat interface baru yang memiliki properti sama dengan original + properti baru menggunakan sintaks "extends"*/
interface ColoredRectangel extends Rectangel {      //extend interface baru dengan interface diatasnya
    color: string                                   //properti color bertipe string
}
const coloredRectangel: ColoredRectangel = {
    height: 30,
    width: 20,
    color: "Blue Marine"    
}
console.log("Extend Interface", coloredRectangel);

console.log("\n===Unions Types===");
/*digunakan ketika sebuah value bisa menggunakan lebih dari 1 type, seperti sebuah properti yang bisa menggunakn string atau number 
Union | (OR)*/
function printStatusCode(code: string | number) {
    console.log(`status kodeku ${code}`);
}
printStatusCode("Ini merupakans string");
printStatusCode(1212);

/*TS Function
-return type
 '// the `: number` here specifies that this function returns a number
function getTime(): number {
  return new Date().getTime();
}'
-Void Return Type
'function printHello(): void {
  console.log('Hello!');
}'
-Parameters
'function multiply(a: number, b: number) {
  return a * b;
}'
-Optional Parameters
'// the `?` operator here marks parameter `c` as optional
function add(a: number, b: number, c?: number) {
  return a + b + (c || 0);
}'
-Default Parameters
'function pow(value: number, exponent: number = 10) {
  return value ** exponent;
}'
-Named Parameters
'function divide({ dividend, divisor }: { dividend: number, divisor: number }) {
  return dividend / divisor;
}'
-Rest Parameters
'function add(a: number, b: number, ...rest: number[]) {
  return a + b + rest.reduce((p, c) => p + c, 0);
}'
-Type Alias
'type Negate = (value: number) => number;
// in this function, the parameter `value` automatically gets assigned the type `number` from the type `Negate`
const negateFunction: Negate = (value) => value * -1;'
-
*/

console.log("\n===casting===");
/*casting merupakan cara mengubah tipe suatu nilai ke tipe lain yang lebih spesifik, hal ini terjadi ketika dev yakin suatu nilai memilikin kondisi tertentu
dengan sintaks "as" */
let x: unknown = 'hello';
// let x: unknown = 5;  //undefined karena number tidak punya panjang
console.log((x as string).length);
/*casting dengan <> */
console.log((<string>x).length);        //tidak akan bekerja di TSX
/*force casting
untuk melakukan overriding tipe error yang dilakukan ts ketika melakukan casting, pertama cast ke unknown, lalu ke target tipe */
let x1 = 'hello';
// console.log(((x1 as unknown) as number).lenght);         Property 'lenght' does not exist on type 'number'.

console.log("\n===Class===");
class Person {                      //buat class Person 
    private readonly name: string;           //atur name sebagai string & visibility private

    public constructor(name: string) {      //definisikan public constructor dengan parameter name bertipe string
        this.name = name;                   //this.name merupakan properti yang merepresentasikan parameter name constructor
    }
    public getName(): string {              //definisikan buat public method getName string
        return this.name;                   //kembalikan this.name
    }
}
const personA = new Person("Kebin");        //buat instance baru dari class Person dengan argimen"kebin"
console.log(personA.getName());             //panggil method getName dari personA

console.log("inheritance: Implements");
interface Shape {                       //buat interface Shape
    getArea: () => number;              //buat arrow method yang mengembalikan number
} 
class Rectangle implements Shape {      //buat class Rectangle yang mengimplementasikan interface shape
    public constructor(protected readonly width: number, protected readonly height: number) {}  /*buat contructor public
    dengan parameter width bertipe number, height bertipe number yang protected & readonly */
    public getArea(): number {          //buat method public getArea yang mengembalikan nilai number
      return this.width * this.height;  //kembalikan nilai width * height
    }
    //Override 1.1
    public toString(): string {         //buat public method yang mengembalikan string
        return `Rectangle[width=${this.width}, height=${this.height}]`;
        /*kembalikan string dengan mengakses width & height */
    }

}
//inheritance: extends
class Square extends Rectangle {                //class extends diatas           
    public constructor(width: number) {         //constructor
        super(width, width);                    //atur properti super
    }  
    // getArea gets inherited from Rectangle

    //Override 1.2
    public override toString(): string {        //override method dengan visibilats public, beserta mengembalikan string
        return `Square[width=${this.width}]`;   //kembalikan string baru yang berbeda dengan original one
    }
}

const myRect = new Rectangle(10,20);    //buat instace baru dengan class beserta argumen
console.log(myRect.getArea());          //panggil method dari istance sebelumnya

const mySq = new Square(20);            //buat instance baru dari class Square yang mengExtendes class rectangel
console.log("inheritance: extends\n", mySq.getArea());  //panggil method instance
//Override 2.1  
console.log("Override\n",mySq.toString());              //panggil method instance yang telah di overriode di class sebelumnya

//abstact Class
/*class dapat ditulis dengan cara menjadi dasar untuk class lain tanpa mengimplementasikan anggotanya  */
abstract class Polygon {                    //buat abstract class
    public abstract getArea(): number;      //buat method abstact yang mengembalikan number

    public toString(): string {             //buat method 
        return `Polygon[area=${this.getArea()}]`;
    }
}
class RectangleAbs extends Polygon {        //class yang mengextend class abstact
    public constructor(protected readonly width: number, protected readonly height: number) {
        super();
    }
    public getArea(): number {              //method berbeda milik class ini
      return this.width * this.height;
    }
}  
const myRectAbs = new RectangleAbs(10,20);
console.log("Abstarct class\n",myRectAbs.getArea());
/*Kelas abstrak tidak dapat langsung diwujudkan, karena tidak semua anggotanya diimplementasikan. */

console.log("\n===Basic Generic===");
/*generic memungkinkan dev membuat komponen yang dapat bekerja dengan berbagai tipe data, namun menjaga tipe data tersebut konsisten.
generic memungkinkan membuat tipe variabel yang bisa digunakan untuk untuk class, fungsi, type aliasses tanpa mendefinisikan tipe data secara eplicit.
generic membuat penulisan kode mudah digunakan lagi*/
// fungsi
function createPair<S, T>(v1: S, v2: T) : [S, T] {  /*buat fungsi, tambah generic parameter "<>" digunakan untuk mendefinisikan T, S yang mewakili tipe data yang digunakan saat fungsi dipanggil.
    didalam parameter set tipe data dengan definisi dari T & S. bagian :[] mendeklarasikan bahwa return akan berbentuk tuple*/
    return[v1, v2];                             //statement
}
console.log("Generic in Function\n", createPair<string, number>("hello", 42));       //panggil fungsi dengan generic parameter string & number, beserta parameter string & number
/*classes 
digunakan untuk generalized classes*/
class NamedValue<T> {                   //buat class dengan generic properties T
    private _value:T | undefined;       //buat private value dengan tipe data T | undefined (jika belum diinisiasi)

    constructor(private name:string) {} //buat constructor dengan parameter name private bertipe string
    public setValue(value: T) {         //buat method parameter value typeData T
        this._value = value;            //properties _values dari value
    }
    public getValue(): T | undefined {  //method getValue mengembalikan T | undefined
        return this._value;             //kembalikan
    }
    public toString(): string {         //method public mengembalikan string
        return `${this.name}: ${this._value}`;  //kembalikan
    }
}
const value = new NamedValue<number>('myNumber');       //buat instance dari class dengan paramter generic number, parameter string
value.setValue(10);                                     //panggil method dengan parameter 10
console.log("generic in class\n", value.toString());    //panggil method toString
/*type aliasses
memungkinkan tipe lebih reusable
example*/
type Wrapped<T> = { value: T };
const wrappedValue: Wrapped<number> = { value: 10 };

/*default value
example*/
// class NamedValue<T = string> {
//     private _value: T | undefined;

//     constructor(private name: string) {}

//     public setValue(value: T) {
//     this._value = value;
//     }

//     public getValue(): T | undefined {
//     return this._value;
//     }

//     public toString(): string {
//     return `${this.name}: ${this._value}`;
//     }
// }

// let value = new NamedValue('myNumber');
// value.setValue('myValue');
// console.log(value.toString()); // myNumber: myValue
/*extends
example */
function createLoggedPair<S extends string | number, T extends string | number>(v1: S, v2: T): [S, T] {
    console.log(`creating pair: v1='${v1}', v2='${v2}'`);
    return [v1, v2];
}
console.log("\n===Utility Types===");
/*built-in types ts, dirancang untuk memodifikasi dan mengubah tipe data yang sudah ada */
/*partial
merubah semua properti di sebuah object menjadi optional */
interface Point {               //buat interface Point
    x: number,                  //x type number
    y: number                   //x type number
}
let poinPart: Partial<Point> = {};      //inisiasi dengan mengeset interface Point dengan Partial kemudian jadikan object
poinPart.x = 10;                    //set pointPart.x 10 || disini tidak perlu memasukkan semua properti
console.log("partial\n", poinPart);              //print
/*required
merubah semua properti object menjadi required */
interface CarInter {
    make: string;
    model: string;
    mileage?: number;       //"?" membuat opsional
}
let myCar: Required<CarInter> = {                       //required
    make: 'Ford',
    model: 'Focus',
    mileage: 12000 // `Required` forces mileage to be defined
};
console.log(myCar);
/*record 
definisi tipe properti object*/
const nameAgeMap2: Record<string, number> = {       //record<tipe data>
    //key string : value number
    'Alice': 22,            
    'Mulyono': 50
}
console.log("Record\n", nameAgeMap2);
/*omit, menghapus key dari object
 */
interface Manungso {
    name: string;
    age: number;
    location?: string;
}
/*struktur
Omit<namaObjt, properti1, properti-n> = {} */
const bob: Omit<Manungso, 'age' | 'location'> = {       //hapus key age / location
    name: 'Bob'
    // `Omit` has removed age and location from the type and they can't be defined here
};
console.log("Omit\n", bob);
/*Pick
menghapus semua kecuali key spesifik object*/
const sadino: Pick<Manungso, 'name'> = {
    name: "Sadino"       // `Pick` has only kept name, so age and location were removed from the type and they can't be defined here
}
console.log("Pick\n", sadino);
/*exclude
hapus tipe dari union */
type PrimitiveOld = string | number | boolean;

/**aktifkan salah satu */
const valueExlu: Exclude<PrimitiveOld, string> = true;
// const valueExlu: PrimitiveOld = 12;
console.log("Exclude\n", typeof valueExlu);
/*return type
ekstrak return type dari fungsi */
// type PointGenerator = () => { x: number; y: number; };
// const point: ReturnType<PointGenerator> = {
//     x: 10,
//     y: 20
// };
// console.log("Exclude\n", point);
/*Parameter 
extract paramter sebagai array*/
// type PointPrinter = (p: { x: number; y: number; }) => void;

// const point: Parameters<PointPrinter>[0] = {
//   x: 10,
//   y: 20
// };
/*Readonly
membuat tipe baru dimana semua properti readonly */
console.log("\n===Keyof===");
/*merupakan keyword ts yang digunakan untuk mengekstrak key type dari object type */
interface PersonWong {              //buat object
    jeneng: string;                 //properti keyValue
    age: number;                    //properti keyValue
}
function printPersonProperty(personWong: PersonWong, property: keyof PersonWong) {          //keyof here 
    console.log(`Printing person property ${property}: "${personWong[property]}"`);
}
let personWong = {
    jeneng: "Max Sutrisno",
    age: 27
};

printPersonProperty(personWong, "jeneng"); // Printing person property name: "Max"s
interface House {
  sqft: number;
  yard?: {
    sqft: number;
  };
}
            
function printYardSize(house: House) {
  const yardSize = house.yard?.sqft;

  if (yardSize === undefined) {
    console.log('No yard');
  } else {
    console.log(`Yard is ${yardSize} sqft`);
  }
}
            
let home: House = {
    sqft: 500};            
printYardSize(home); // Prints 'No yard'
/*Nullish Coalescence */
function printMileage(mileage: number | null | undefined) {
    console.log(`Mileage: ${mileage ?? 'Not Available'}`);          //It can be used with the ?? operator in an expression, similar to using the && operator.
}              
printMileage(null); // Prints 'Mileage: Not Available' 
printMileage(0); // Prints 'Mileage: 0'
/*Null Assertion */
function getValue(): string | undefined {
    return 'hello';
}
            
let valueAw = getValue();
console.log('value length: ' + valueAw!.length);        //TypeScript also provides the ! operator as a convenient shortcut.
/*Array bounds handling 
Even with strictNullChecks enabled, by default TypeScript will assume array access will never return undefined (unless undefined is part of the array type).
The config noUncheckedIndexedAccess can be used to change this behavior.*/
// function getValueSaa(): string | undefined {
//     return 'hello';
// }
            
// let valueSaa = getValueSaa();
// console.log('value length: ' + valueSaa.length);         //maybe error.cek dokumentasi
