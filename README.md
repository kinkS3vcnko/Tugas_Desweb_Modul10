# 📂 Arsip Tugas Praktikum Desain Web

## 👨‍🎓 Profil Mahasiswa

| Informasi       | Detail                                      |
|-----------------|---------------------------------------------|
| Nama Lengkap    | Sheva Jalu Atmaja                           |
| NIM             | K3525073                                    |
| Kelas           | C                                           |
| Program Studi   | Pendidikan Teknik Informatika dan Komputer  |
| Perguruan Tinggi| Universitas Sebelas Maret                   |
| Mata Kuliah     | Desain Web                                  |
| Akun GitHub     | kinkS3vcnko                                 |

## 📖 Gambaran Umum

Repositori ini menghimpun seluruh berkas laporan praktikum untuk mata kuliah Desain Web mulai dari Modul 2 hingga Modul 9. Penyusunan repositori ini merupakan bagian dari pemenuhan tugas **Modul 10: Git**, yang berfokus pada pembuatan repositori lokal, pencatatan riwayat perubahan berkas memakai Git, serta pengunggahan proyek ke repositori daring di GitHub.

Pada dasarnya, Git berfungsi sebagai sistem kontrol versi (*version control system*) yang membantu pengembang mengelola pembaruan kode sumber maupun mempermudah kerja sama tim. Melalui Git, seluruh riwayat modifikasi mulai dari detail perubahan, waktu pelaksanaan, hingga pihak yang melakukannya dapat terekam secara sistematis.

## 🎯 Sasaran Pembelajaran

- ✅ Memahami konsep dan penerapan kontrol versi menggunakan Git.
- ✅ Menguasai alur kerja kolaboratif dalam pengembangan proyek berbasis tim dengan Git.
- ✅ Mampu menerapkan Git dalam proses pembangunan perangkat lunak.

## 🗂️ Susunan Berkas Repositori

```
Kumpulan-Karya
├── asset
├── Modul 2
├── Modul 3
├── Modul 4
├── Modul 5
├── Modul 6
├── Modul 8
├── Modul 9
└── README.md
```

| Nama Berkas | Deskripsi Isi                     |
|-------------|-----------------------------------|
| Modul 2.pdf | Dokumen laporan praktikum Modul 2 |
| Modul 3.pdf | Dokumen laporan praktikum Modul 3 |
| Modul 4.pdf | Dokumen laporan praktikum Modul 4 |
| Modul 5.pdf | Dokumen laporan praktikum Modul 5 |
| Modul 6.pdf | Dokumen laporan praktikum Modul 6 |
| Modul 8.pdf | Dokumen laporan praktikum Modul 8 |
| Modul 9.pdf | Dokumen laporan praktikum Modul 9 |
| README.md   | Berkas informasi dan panduan repositori |

## 🛠️ Perangkat Lunak Pendukung

| Perangkat       | Kegunaan                                             |
|-----------------|------------------------------------------------------|
| Git for Windows | Perangkat lunak sistem kontrol versi                 |
| Git CMD         | Antarmuka baris perintah untuk mengeksekusi Git      |
| GitHub          | Layanan penyimpanan repositori daring (*remote*)     |
| File Explorer   | Pengelola berkas untuk memindahkan laporan ke direktori kerja |

## 💻 Tahapan Pelaksanaan Praktikum Git

### 🆕 Inisialisasi Repositori Baru
Jalankan Git CMD, siapkan direktori proyek, kemudian lakukan inisialisasi Git:
```
git init
```

### 🔍 Kloning Repositori
Menggandakan repositori dari direktori lokal:
```
git clone /jalur/ke/repositori
```
Jika mengambil dari peladen jarak jauh (*remote server*):
```
git clone namapengguna@host:/jalur/ke/repositori
```

### ➕ Penambahan dan Komit Berkas
Pindahkan seluruh berkas laporan PDF ke dalam direktori proyek, lalu jalankan perintah berikut:
```
git status
git add <namaberkas>
git add *
git commit -m "Upload Kumpulan Karya"
```

### 🚀 Unggah ke Repositori Daring
```
git remote add origin [https://github.com/kinkS3vcnko/Tugas_Desweb_Modul10.git]
(https://github.com/kinkS3vcnko/Tugas_Desweb_Modul10.git)
git branch -M main
git push origin main
```

### 🌿 Manajemen Cabang (*Branching*)
```
git checkout -b fitur_x
git checkout main
git branch -d fitur_x
git push origin <cabang>
```

### 🔄 Sinkronisasi dan Penggabungan (*Merging*)
```
git pull
git fetch
git merge <cabang>
git add <namaberkas>
git diff <cabang_asal> <cabang_tujuan>
git reflog
git reflog --relative-date
```

### 🏷️ Penandaan Versi (*Tagging*)
```
git tag 1.0.0 8577b56
git tag
```

### 📜 Penelusuran Riwayat (*Log*)
```
git log
git log --author=kinkS3vcnko
git log --pretty=oneline
git log --graph --oneline --decorate --all
git log --name-status
```

### ⏪ Pemulihan Perubahan Lokal
```
git checkout -- <namaberkas>
git fetch origin
git reset --hard origin/main
```

### 💡 Konfigurasi dan Fitur Tambahan
```
gitk
git config color.ui true
git config format.pretty oneline
git add -i
```

### 🔑 Pembuatan Kunci SSH (RSA Key)
```
ssh-keygen -t rsa
```
Tekan tombol Enter untuk menyetujui lokasi penyimpanan standar serta *passphrase*. Kunci privat akan tersimpan pada `.ssh/id_rsa`, sedangkan kunci publik berada di `.ssh/id_rsa.pub`.

## 🌐 Tautan Repositori Daring

Seluruh berkas repositori ini dapat diakses melalui tautan berikut:

👉 **https://github.com/kinkS3vcnko/Tugas_Desweb_Modul10.git**

## 🏁 Penutup
=======

