function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var popup = document.getElementById('popup');
    var popuptext = document.getElementById('popuptext');

    if (username === '' || password === '') {
        popuptext.textContent = 'Harap isi semua kolom';
        popup.style.display = 'block';
        setTimeout(function () {
            popup.style.display = 'none';
        }, 3000); // Menyembunyikan popup setelah 3 detik
    } else {
        popup.style.display = 'none';
        // Implementasi logika autentikasi atau pengiriman data ke server dapat ditambahkan di sini.
    }
}
