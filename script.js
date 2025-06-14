// === Form Pencarian Tiket ===
document.querySelector(".search-section form").addEventListener("submit", function(event) {
  event.preventDefault(); // Mencegah reload halaman

  const dari = document.getElementById("from").value.trim();
  const ke = document.getElementById("to").value.trim();
  const tanggal = document.getElementById("date").value;

  if (dari === "" || ke === "" || tanggal === "") {
    alert("Mohon lengkapi semua field pencarian!");
    return;
  }

  // Menampilkan hasil pencarian dummy
  const hasil = document.createElement("div");
  hasil.classList.add("hasil-pencarian");
  hasil.innerHTML = `
    <p><strong>Hasil Pencarian:</strong></p>
    <p>Penerbangan dari <b>${dari}</b> ke <b>${ke}</b> pada <b>${tanggal}</b> tersedia!</p>
  `;
  this.parentElement.appendChild(hasil);
});

// === Form Newsletter ===
document.querySelector(".newsletter form").addEventListener("submit", function(event) {
  event.preventDefault();

  const emailInput = this.querySelector("input[type='email']");
  const email = emailInput.value.trim();

  if (!validEmail(email)) {
    alert("Email tidak valid. Coba lagi.");
    return;
  }

  // Tampilkan pesan sukses
  this.innerHTML = `<p>Terima kasih, <b>${email}</b> sudah berlangganan!</p>`;
});

// === Fungsi Validasi Email ===
function validEmail(email) {
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  return pattern.test(email);
}

function tampilkanHasilPencarian(dari, ke, tanggal) {
  // Hapus hasil sebelumnya jika ada
  const hasilLama = document.querySelector(".hasil-pencarian");
  if (hasilLama) {
    hasilLama.remove();
  }

  // Buat elemen hasil baru
  const hasil = document.createElement("div");
  hasil.className = "hasil-pencarian";
  hasil.innerHTML = `
    <p><strong>Hasil Pencarian:</strong></p>
    <p>Tiket dari <b>${dari}</b> ke <b>${ke}</b> pada <b>${tanggal}</b> tersedia.</p>
  `;
  document.querySelector(".search-section").appendChild(hasil);
}
