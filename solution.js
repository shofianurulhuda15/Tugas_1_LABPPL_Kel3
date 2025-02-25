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
 */
function isPrima(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

/**
 * Mengembalikan hasil dari a modulus b.
 */
function modulus(a, b) {
    return a % b;
}

/**
 * Mengembalikan nilai absolut dari sebuah angka.
 */
function absolut(a) {
    return Math.abs(a);
}

/**
 * Mengembalikan nilai terbesar dari dua angka.
 */
function maksimum(a, b) {
    return Math.max(a, b);
}

/**
 * Mengembalikan nilai terkecil dari dua angka.
 */
function minimum(a, b) {
    return Math.min(a, b);
}

/**
 * Mengembalikan hasil dari a dibulatkan ke bilangan bulat terdekat.
 */
function bulatkan(a) {
    return Math.round(a);
}

// Export hasil akhir
module.exports = {
    tambah,
    kurang,
    kali,
    bagi,
    pangkat,
    faktorial,
    isPrima,
    modulus,
    absolut,
    maksimum,
    minimum,
    bulatkan
};
