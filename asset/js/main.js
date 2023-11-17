// script.js

// Contoh fungsi JavaScript
function welcomeMessage() {
    alert('Selamat datang di SMK Pencetak Wirausaha!');
}

// Panggil fungsi saat halaman dimuat
document.addEventListener('DOMContentLoaded', function () {
    welcomeMessage();
    
    // Contoh logika interaktif
    let button = document.getElementById('myButton');
    
    button.addEventListener('click', function () {
        alert('Tombol ditekan!');
    });
});