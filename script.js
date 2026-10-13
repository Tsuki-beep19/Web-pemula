// Mengambil elemen tombol berdasarkan ID
const tombol = document.getElementById("sapaBtn");

// Menambahkan pendengar event (event listener) saat tombol diklik
tombol.addEventListener("click", function() {
    alert("Halo! Terima kasih sudah mampir ke profil web pertamaku.");

    const judul = document.querySelector("header h1");
    judul.style.color = "#2563eb";
    judul.innerText = "Halo, Pengunjung Keren!";
});

// 1. Ambil elemen dari HTML
const Hitung = document.getElementById("hitungBtn");
const Angka = document.getElementById("angka");

// 2. Variabel penyimpan jumlah klik
let counter = 0;

// 3. Membuat sebuah FUNGSI khusus untuk menangani logika klik
function tambahDanCek() {
    counter = counter + 1; // Tambah angka klik
    Angka.innerText = counter; // Tampilkan ke layar

    // 4. Menggunakan KONDISI (if / else) untuk membuat keputusan
    if (counter === 5) {
        alert("Hebat! Kamu sudah klik tombol sebanyak 5 kali!");
    } else if (counter === 10) {
        alert("Luar biasa! Angkanya sudah mencapai 10 kali!");
        // Kamu juga bisa mereset angkanya kembali ke 0 jika mau:
        // counter = 0; 
    }
}

// 5. Hubungkan fungsi ke event listener tombol
Hitung.addEventListener("click", tambahDanCek);
