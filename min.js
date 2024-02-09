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
   