const readline = require("readline");
const math = require("./solution");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function tampilkanMenu() {
    console.log("\n=====================================");
    console.log("         KALKULATOR SEDERHANA       ");
    console.log("=====================================");
    console.log("1. Penjumlahan");
    console.log("2. Pengurangan");
    console.log("3. Perkalian");
    console.log("4. Pembagian");
    console.log("5. Pangkat");
    console.log("6. Faktorial");
    console.log("7. Cek Bilangan Prima");
    console.log("8. Modulus");
    console.log("9. Nilai Absolut");
    console.log("10. Nilai Maksimum");
    console.log("11. Nilai Minimum");
    console.log("12. Pembulatan");
    console.log("0. Keluar");
    console.log("=====================================");
}

function jalankanKalkulator() {
    tampilkanMenu();
    rl.question("Pilih operasi (0-12): ", (pilihan) => {
        if (pilihan === "0") {
            console.log("Terima kasih telah menggunakan kalkulator!");
            rl.close();
            return;
        }

        if (![...Array(13).keys()].map(String).includes(pilihan)) {
            console.log("Pilihan tidak valid! Silakan pilih kembali.");
            return jalankanKalkulator();
        }

        rl.question("Masukkan angka pertama: ", (angka1) => {
            let a = parseFloat(angka1);
            if (isNaN(a)) {
                console.log("Input tidak valid! Masukkan angka yang benar.");
                return jalankanKalkulator();
            }

            if (pilihan === "6") { // Faktorial
                if (a < 0 || !Number.isInteger(a)) {
                    console.log("Faktorial hanya bisa dihitung untuk bilangan bulat positif.");
                } else {
                    console.log(Hasil faktorial dari ${a}: ${math.faktorial(a)});
                }
                return jalankanKalkulator();
            }

            if (pilihan === "7") { // Cek bilangan prima
                console.log(${a} adalah bilangan prima? ${math.isPrima(a)});
                return jalankanKalkulator();
            }

            rl.question("Masukkan angka kedua: ", (angka2) => {
                let b = parseFloat(angka2);
                if (isNaN(b)) {
                    console.log("Input tidak valid! Masukkan angka yang benar.");
                    return jalankanKalkulator();
                }

                let hasil;
                switch (pilihan) {
                    case "1": hasil = math.tambah(a, b); break;
                    case "2": hasil = math.kurang(a, b); break;
                    case "3": hasil = math.kali(a, b); break;
                    case "4": hasil = b !== 0 ? math.bagi(a, b) : "Error: Pembagian dengan nol!"; break;
                    case "5": hasil = math.pangkat(a, b); break;
                    case "8": hasil = math.modulus(a, b); break;
                    case "9": hasil = math.absolut(a); break;
                    case "10": hasil = math.maksimum(a, b); break;
                    case "11": hasil = math.minimum(a, b); break;
                    case "12": hasil = math.bulatkan(a); break;
                }

                console.log(Hasil: ${hasil});
                jalankanKalkulator();
            });
        });
    });
}

jalankanKalkulator();
