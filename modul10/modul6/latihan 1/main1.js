
// Mengambil elemen HTML
const angka1 = document.getElementById("angka1");
const angka2 = document.getElementById("angka2");
const hasil = document.getElementById("hasil");

// Fungsi untuk melakukan perhitungan
function hitung(operasi) {
    // Memeriksa apakah kedua input sudah diisi
    if (angka1.value === "" || angka2.value === "") {
        hasil.textContent = "Masukkan kedua angka terlebih dahulu!";
        return;
    }

    // Mengubah input menjadi angka
    const a = Number(angka1.value);
    const b = Number(angka2.value);

    let hasilPerhitungan;
    let simbol;

    // Menentukan operasi matematika
    switch (operasi) {
        case "tambah":
            hasilPerhitungan = a + b;
            simbol = "+";
            break;

        case "kurang":
            hasilPerhitungan = a - b;
            simbol = "-";
            break;

        case "kali":
            hasilPerhitungan = a * b;
            simbol = "*";
            break;

        case "bagi":
            if (b === 0) {
                hasil.textContent =
                    "Error: Tidak dapat membagi dengan nol!";
                return;
            }

            hasilPerhitungan = a / b;
            simbol = "/";
            break;
    }

    // Menampilkan hasil perhitungan
    hasil.textContent =
        "Hasil: " + a + " " + simbol + " " + b +
        " = " + hasilPerhitungan;
}

// Menghubungkan tombol dengan fungsi
document.getElementById("tambah").addEventListener("click", function () {
    hitung("tambah");
});

document.getElementById("kurang").addEventListener("click", function () {
    hitung("kurang");
});

document.getElementById("kali").addEventListener("click", function () {
    hitung("kali");
});

document.getElementById("bagi").addEventListener("click", function () {
    hitung("bagi");
});

