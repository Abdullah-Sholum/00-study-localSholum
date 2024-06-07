let firstName = 'John';
let lastName = 'Doe';
let age = 25;
let isMarried = true;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof age);
console.log(typeof isMarried);
let score = 85; // Anda dapat mengganti nilai score sesuai keinginan Anda

let result;

if (score >= 90) {
    result = 'Selamat! Anda mendapatkan nilai A.';
} else if (score >= 80 && score <= 89) {
    result = 'Anda mendapatkan nilai B.';
} else if (score >= 70 && score <= 79) {
    result = 'Anda mendapatkan nilai C.';
} else if (score >= 60 && score <= 69) {
    result = 'Anda mendapatkan nilai D.';
} else {
    result = 'Anda mendapatkan nilai E.';
}
console.log(result);

// 1. Membuat objek restaurant
const restaurant = {
    nama: "Bakso Mang Dicoding",
    city: "Bandung",
    "favorite drink": "Es Teh",  // Menggunakan tanda kutip karena ada spasi dalam namanya
    "favorite food": "Bakso",    // Menggunakan tanda kutip karena ada spasi dalam namanya
    isVegan: false
};

// 2. Mendapatkan nilai name dari properti object restaurant
const nama = restaurant.nama;

// 3. Mendapatkan nilai "favorite drink" dari properti object restaurant
const favoriteDrink = restaurant["favorite drink"];

console.log(nama);           // Output: Bakso Mang Dicoding
console.log(favoriteDrink);  // Output: Es Teh
// Membuat array untuk menampung bilangan genap
let evenNumber = [];

// Mengisi array dengan bilangan genap dari 1 hingga 100
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) { // Memeriksa apakah bilangan i adalah bilangan genap
        evenNumber.push(i);
    }
}

console.log(evenNumber); // Output: Array yang berisi bilangan genap dari 1 hingga 100


const priceInJPY = 5000;
const currency = new Map([
    ["USD", 14000],
    ["JPY", 131],
    ["SGD", 11000],
    ["MYR", 3500]
]);

// 2. Menghitung priceInIDR berdasarkan priceInJPY dan nilai kurs JPY
const priceInIDR = priceInJPY * currency.get("JPY");

console.log(priceInIDR); 

function minimal(a, b) {
    return (a <= b) ? a : b;
}

// Contoh penggunaan:
console.log(minimal(1, 4)); // Output: 1
console.log(minimal(3, 2)); // Output: 2
console.log(minimal(3, 3)); // Output: 3
function findIndex(arr, angka) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === angka) {
            return i; // Mengembalikan indeks jika angka ditemukan
        }
    }
    return -1; // Mengembalikan -1 jika angka tidak ditemukan
}

// Contoh penggunaan:
console.log(findIndex([1, 2, 3, 4, 5], 3)); // Output: 2
console.log(findIndex([1, 2, 3, 4, 5], 6)); // Output: -1
console.log(findIndex([1, 2, 3, 4, 5], 5)); // Output: 4

class User {
    constructor(firstName, lastName) {
     this.firstName = firstName;
     this.lastName = lastName;
   }
   
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
   
    set fullName(fullName) {
      const [firstName, lastName] = fullName.split(' ');
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }
   
  const user = new User('John', 'Doe');
  console.log(user);
  console.log(user.fullName);
   
  user.fullName = 'Fulan Fulanah';
  console.log(user);
  console.log(user.fullName);
   

/*
1. Buatlah class bernama Animal dengan ketentuan:
 *    - Memiliki properti:
 *      - name: string
 *      - age: int
 *      - isMammal: boolean
 *    - Memiliki constructor untuk menginisialisasi properti:
 *      - name
 *      - age
 *      - isMammal
 * 2. Buatlah class bernama Rabbit dengan ketentuan:
 *    - Merupakan turunan dari class Animal
 *    - Memiliki method:
 *      - eat yang mengembalikan nilai string `${this.name} sedang makan!`
 *    - Ketika diinstansiasi, properti isMammal harus bernilai true
 * 3. Buatlah class bernama Eagle dengan ketentuan:
 *    - Merupakan turunan dari class Animal
 *    - Memiliki method:
 *      - fly yang mengembalikan nilai string `${this.name} sedang terbang!`
 *    - Ketika diinstansiasi, properti isMammal harus bernilai false
 * 4. Buatlah instance dari class Rabbit bernama "myRabbit" dengan ketentuan:
 *    - properti name bernilai: "Labi"
 *    - properti age bernilai: 2
 * 5. Buatlah instance dari class Eagle bernama "myEagle" dengan ketentuan:
 *    - properti name bernilai: "Elo"
 *    - properti age bernilai: 4
 */

// Definisikan class Animal
class Animal {
    constructor(name, age, isMammal) {
      this.name = name;
      this.age = age;
      this.isMammal = isMammal;
    }
  }
  
  // Turunan class Rabbit dari Animal
  class Rabbit extends Animal {
    constructor(name, age) {
      super(name, age, true); // Panggil constructor parent dengan super()
    }
  
    eat() {
      return `${this.name} sedang makan!`;
    }
  }
  
  // Turunan class Eagle dari Animal
  class Eagle extends Animal {
    constructor(name, age) {
      super(name, age, false); // Panggil constructor parent dengan super()
    }
  
    fly() {
      return `${this.name} sedang terbang!`;
    }
  }
  
  // Buat instance dari class Rabbit
  let myRabbit = new Rabbit("Labi", 2);
  
  // Buat instance dari class Eagle
  let myEagle = new Eagle("Elo", 4);
  
  // Cetak hasil
  console.log(myRabbit);
  console.log(myRabbit.eat()); // Output: Labi sedang makan!
  
  console.log(myEagle);
  console.log(myEagle.fly()); // Output: Elo sedang terbang!
