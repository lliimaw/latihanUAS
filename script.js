// ==== UTILITAS ====
function isEmailValid(email) {
  // Regex sederhana untuk validasi email
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}


// ==== FITUR BERANDA KECE ====
let pilihanUser = null;

document.querySelectorAll('.fitur-item').forEach(item => {
  item.addEventListener('click', () => {
    // Ambil target dari data attribute
    pilihanUser = item.getAttribute('data-target');

    // Opsional: Tambah highlight visual
    document.querySelectorAll('.fitur-item').forEach(el => el.classList.remove('aktif'));
    item.classList.add('aktif');
  });
});

document.querySelector('.cta-button[href="#pesawat"]').addEventListener('click', function (e) {
  e.preventDefault();

  let targetId = pilihanUser || 'pesawat'; // Default ke pesawat jika belum pilih
  let targetSection = document.getElementById(targetId);

  if (targetSection) {
    targetSection.scrollIntoView({ behavior: 'smooth' });
  }
});


// ==== PESAWAT ====
const formPesawat = document.getElementById("form-pesawat");
const hasilPesawat = document.getElementById("hasil-pesawat");

formPesawat.addEventListener("submit", function (e) {
  e.preventDefault();

  const asal = document.getElementById("kota-asal").value;
  const tujuan = document.getElementById("kota-tujuan").value;
  const tanggal = document.getElementById("tanggal-berangkat").value;
  const penumpang = document.getElementById("jumlah-penumpang").value;

  hasilPesawat.style.display = "block";
  hasilPesawat.innerHTML = `
    <strong>Hasil Pencarian:</strong><br>
    Dari <b>${asal}</b> ke <b>${tujuan}</b><br>
    Tanggal: ${tanggal} | Jumlah Penumpang: ${penumpang}<br>
    <em>(Hasil dummy – belum terhubung ke API)</em>
  `;
});


// ==== HOTEL ====
const formHotel = document.getElementById("form-hotel");
const hasilHotel = document.getElementById("hasil-hotel");

formHotel.addEventListener("submit", function (e) {
  e.preventDefault();

  const lokasi = document.getElementById("lokasi-hotel").value;
  const tipe = document.querySelector('input[name="tipe-hotel"]:checked').value;
  const malam = document.getElementById("lama-inap").value;

  hasilHotel.style.display = "block";
  hasilHotel.innerHTML = `
    <strong>Hasil Pemesanan:</strong><br>
    Lokasi: <b>${lokasi}</b><br>
    Tipe Hotel: ${tipe}<br>
    Lama Menginap: ${malam} malam<br>
    <em>(Hasil dummy – belum terhubung ke sistem)</em>
  `;
});


// ==== KONTAK ====
const formKontak = document.getElementById("form-kontak");
const hasilKontak = document.getElementById("hasil-kontak");

formKontak.addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value.trim();
  const email = document.getElementById("email-kontak").value.trim();
  const pesan = document.getElementById("pesan").value.trim();

  if (!isEmailValid(email)) {
    alert("Email tidak valid. Silakan masukkan email yang benar.");
    return;
  }

  hasilKontak.style.display = "block";
  hasilKontak.innerHTML = `
    <strong>Pesan terkirim!</strong><br>
    Terima kasih <b>${nama}</b>, kami akan menghubungi Anda ke email: ${email}.<br>
    <em>Pesan Anda: "${pesan}"</em>
  `;

  formKontak.reset();
});


// ==== NEWSLETTER ====
const formNewsletter = document.getElementById("form-newsletter");
if (formNewsletter) {
  formNewsletter.addEventListener("submit", function (e) {
    e.preventDefault();
    const emailInput = formNewsletter.querySelector('input[type="email"]');
    const email = emailInput.value.trim();

    if (!isEmailValid(email)) {
      alert("Email tidak valid. Silakan masukkan email yang benar.");
      return;
    }

    alert(`Terima kasih telah berlangganan! Info akan dikirim ke ${email}`);
    emailInput.value = "";
  });
}
