# Tugas Praktikum: Implementasi Fungsi Matematika dalam Node.js

## **Anggota Kelompok**
1. **Shofia Nurul Huda  2208107010015**
2. **Nisa Rianti        2208107010016**
3. **Jihan Nabilah      2208107010035**

## **Deskripsi Tugas**
Praktikan diharapkan membaca README ini dengan saksama sebelum mengerjakan tugas.

Terdapat file `solution.js` yang berisi beberapa fungsi matematika yang belum lengkap. Setiap fungsi harus diimplementasikan agar dapat berjalan sesuai dengan deskripsi yang diberikan.

### **Fungsi yang Harus Diimplementasikan:**
1. **tambah(a, b)** → Menjumlahkan dua angka
2. **kurang(a, b)** → Mengurangkan dua angka
3. **kali(a, b)** → Mengalikan dua angka
4. **bagi(a, b)** → Membagi dua angka (pastikan tidak membagi dengan nol)
5. **pangkat(a, b)** → Menghitung hasil pangkat dari dua angka
6. **faktorial(n)** → Menghitung faktorial dari angka `n`
7. **isPrima(n)** → Mengecek apakah angka `n` adalah bilangan prima
8. **modulus(a, b)** → Mengembalikan sisa hasil bagi `a` dengan `b`
9. **absolut(n)** → Mengembalikan nilai absolut dari `n`
10. **maksimum(a, b)** → Mengembalikan angka terbesar dari `a` dan `b`
11. **minimum(a, b)** → Mengembalikan angka terkecil dari `a` dan `b`
12. **bulatkan(n)** → Membulatkan angka `n` ke bilangan bulat terdekat

---

## **Cara Menjalankan Tes**
Setelah menyelesaikan semua fungsi dalam `solution.js`, praktikan dapat menjalankan perintah berikut untuk menguji kebenaran implementasi:

```bash
npm run test
```

Jika semua fungsi telah diimplementasikan dengan benar, seluruh pengujian akan lulus.

---

## **Hasil Menjalankan Tes**

Berikut hasil menjalankan `npm run test`:

```bash
> tugas1@1.0.0 test
> node test/test.js

Tes fungsi tambah selesai: Semua benar
Tes fungsi kurang selesai: Semua benar
Tes fungsi kali selesai: Semua benar
Tes fungsi bagi selesai: Semua benar
Tes fungsi pangkat selesai: Semua benar
Tes fungsi faktorial selesai: Semua benar
Tes fungsi isPrima selesai: Semua benar
Tes fungsi modulus selesai: Semua benar
Tes fungsi absolut selesai: Semua benar
Tes fungsi maksimum selesai: Semua benar
Tes fungsi minimum selesai: Semua benar
Tes fungsi bulatkan selesai: Semua benar

Hasil akhir:
Jumlah tes yang benar: 24
Jumlah tes yang salah: 0
Jumlah fungsi yang benar (semua tes berhasil): 12
Jumlah fungsi yang salah (ada tes yang gagal): 0
Semua tes selesai.
```

---

## **Tugas Utama: Membuat Kalkulator Sederhana**
Selain melengkapi `solution.js`, praktikan juga diminta untuk membuat sebuah **program kalkulator sederhana** dengan memanfaatkan minimal 5 fungsi dari `solution.js`.

- Terdapat file `index.js` yang berisi deskripsi tugas ini.
- Praktikan harus membuat program kalkulator yang dapat melakukan minimal **5 operasi** dari `solution.js`.
- Jika kalkulator dapat menyediakan **5 fungsi**, nilai yang diperoleh adalah **90**.
- Jika kalkulator dapat menyediakan **12 fungsi**, nilai yang diperoleh adalah **100**.

---

## **Cara Menjalankan Program Kalkulator**
1. Pastikan semua fungsi telah diimplementasikan dalam `solution.js`.
2. Buat program kalkulator di dalam file `index.js`.
3. Jalankan program kalkulator dengan perintah berikut:

   ```bash
   node index.js
   ```

4. Ikuti petunjuk interaksi yang muncul di terminal untuk menggunakan kalkulator.

---

## **Hasil Pembangunan Kalkulator Sederhana**

Berikut tampilan CLI kalkulator Sederhana yang berhasil kami bangun yang menyediakan 12 fungsi:

```bash
=====================================
         KALKULATOR SEDERHANA       
=====================================
1. Penjumlahan
2. Pengurangan
3. Perkalian
4. Pembagian
5. Pangkat
6. Faktorial
7. Cek Bilangan Prima
8. Modulus
9. Nilai Absolut
10. Nilai Maksimum
11. Nilai Minimum
12. Pembulatan
0. Keluar
=====================================
Pilih operasi (0-12):
```

user dapat memilih salah satu operasi dari 12 operasi yang tersedia

---

## **Instruksi Pengumpulan**
1. Pastikan semua fungsi telah diimplementasikan dengan benar dalam `solution.js`.
2. Pastikan kalkulator dalam `index.js` dapat berjalan sesuai kriteria minimal.
3. Jalankan tes dengan `npm run test` untuk memastikan semua fungsi bekerja dengan baik.
4. Kumpulkan file `solution.js` dan `index.js` sesuai instruksi pengumpulan tugas.

Selamat mengerjakan! 🚀

