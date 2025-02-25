/**
 * Mengembalikan hasil penjumlahan dua angka.
 */
function tambah(a, b) {
    return a + b;
}

/**
 * Mengembalikan hasil pengurangan dua angka.
 */
function kurang(a, b) {
    return a - b;
}

/**
 * Mengembalikan hasil perkalian dua angka.
 */
function kali(a, b) {
    return a * b;
}


/**
 * Mengembalikan hasil pembagian dua angka.
 */
function bagi(a, b) {
    return b !== 0 ? a / b : "Pembagian oleh nol tidak diperbolehkan";
}

/**
 * Mengembalikan hasil pangkat dari dua angka.
 */
function pangkat(a, b) {
    return Math.pow(a, b);
}

/**
 * Mengembalikan faktorial dari sebuah angka.
 */
function faktorial(n) {
    if (n < 0) return "Error: Faktorial tidak terdefinisi untuk bilangan negatif";
    let hasil = 1;
    for (let i = 1; i <= n; i++) {
        hasil *= i;
    }
    return hasil;
}


/**
 * Mengembalikan true jika angka adalah bilangan prima, false jika tidak.
 * @param {number} n 
 * @returns {boolean}
 */
function isPrima(n) {
}

/**
 * Mengembalikan hasil dari a modulus b.
 * modulus adalah sisa pembagian a dengan b.
 * contoh 10 mod 3 = 1, karena 10 dibagi 3 adalah 3 sisa 1.
 * 10 / 3 = 3 sisa 1. dan 1 adalah jawabannya
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function modulus(a, b) {
}

/**
 * Mengembalikan nilai absolut dari sebuah angka.
 * @param {number} a 
 * @returns {number}
 */
function absolut(a) {
}


/**
 * Mengembalikan nilai terbesar dari dua angka.
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function maksimum(a, b) {
}

/**
 * Mengembalikan nilai terkecil dari dua angka.
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function minimum(a, b) {
}

/**
 * Mengembalikan hasil dari a dibulatkan ke bilangan bulat terdekat.
 * @param {number} a 
 * @returns {number}
 */
function bulatkan(a) {
}

// Export hasil akhir
module.exports = {
    tambah,
    kurang,
    kali,
    bagi,
    pangkat,
    faktorial,
};
