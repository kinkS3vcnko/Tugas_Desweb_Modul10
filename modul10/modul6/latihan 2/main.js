
// Mengambil elemen HTML
const teks1 = document.getElementById("teks1");
const teks2 = document.getElementById("teks2");
const tombol = document.getElementById("tombol");

// Menyimpan status highlight
let highlightAktif = false;

// Fungsi untuk mengaktifkan dan menghilangkan highlight
function ubahHighlight() {
    if (highlightAktif === false) {
        // Mengaktifkan highlight
        teks1.classList.add("highlight");
        teks2.classList.add("highlight");
        teks3.classList.add("highlight");
        
        
        tombol.textContent = "Hilangkan Highlight";

        highlightAktif = true;
    } else {
        // Menghilangkan highlight
        teks1.classList.remove("highlight");
        teks2.classList.remove("highlight");
        teks3.classList.remove("highlight");

        tombol.textContent = "Aktifkan Highlight";

        highlightAktif = false;
    }
}

// Menjalankan fungsi ketika tombol diklik
tombol.addEventListener("click", ubahHighlight);

