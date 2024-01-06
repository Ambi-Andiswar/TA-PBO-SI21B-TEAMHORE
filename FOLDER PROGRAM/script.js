function submitForm() {
  const memberNumber = document.getElementById('memberNumber').value;
  const studentName = document.getElementById('studentName').value;
  const studentClass = document.getElementById('class').value;
  const selectedSubject = document.getElementById('subject');
  const subject = selectedSubject.options[selectedSubject.selectedIndex].text;

  if (memberNumber && studentName && studentClass && subject) {
    alert(`Buku berhasil dipinjam oleh ${studentName} dari kelas ${studentClass} untuk mata pelajaran ${subject}. Peminjaman Buku Sukses!`);
    // Lakukan operasi lain sesuai kebutuhan

    // Jika ingin mengatur ulang formulir setelah peminjaman berhasil, tambahkan baris berikut:
    document.getElementById('bookForm').reset();
  } else {
    alert('Harap isi semua kolom.');
  }
}
