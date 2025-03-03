const readline = require("readline");
const math = require("./solution");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function tampilkanMenu() {
    console.log("\n=== Kalkulator Sederhana ===");
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
}

function jalankanKalkulator() {
    tampilkanMenu();
    rl.question("Pilih operasi (0-12): ", (pilihan) => {
        if (pilihan === "0") {
            console.log("Terima kasih telah menggunakan kalkulator!");
            rl.close();
            return;
        }

        rl.question("Masukkan angka pertama: ", (angka1) => {
            let a = parseFloat(angka1);

            if (["6", "7"].includes(pilihan)) { // Faktorial atau Cek Prima
                if (pilihan === "6") {
                    console.log(Hasil faktorial dari ${a}: ${math.faktorial(a)});
                } else if (pilihan === "7") {
                    console.log(${a} adalah bilangan prima? ${math.isPrima(a)});
                }
                return jalankanKalkulator();
            }

            rl.question("Masukkan angka kedua: ", (angka2) => {
                let b = parseFloat(angka2);
                let hasil;

                switch (pilihan) {
                    case "1": hasil = math.tambah(a, b); break;
                    case "2": hasil = math.kurang(a, b); break;
                    case "3": hasil = math.kali(a, b); break;
                    case "4": hasil = math.bagi(a, b); break;
                    case "5": hasil = math.pangkat(a, b); break;
                    case "8": hasil = math.modulus(a, b); break;
                    case "9": hasil = math.absolut(a); break;
                    case "10": hasil = math.maksimum(a, b); break;
                    case "11": hasil = math.minimum(a, b); break;
                    case "12": hasil = math.bulatkan(a); break;
                    default: console.log("Pilihan tidak valid!"); return jalankanKalkulator();
                }

                console.log(Hasil: ${hasil});
                jalankanKalkulator();
            });
        });
    });
}

jalankanKalkulator();
