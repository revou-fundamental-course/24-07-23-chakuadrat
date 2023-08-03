const navLinks = document.querySelectorAll('nav a');

function smoothScroll(target) {
  const element = document.querySelector(target);
  const offsetTop = element.offsetTop;
  window.scroll({
    top: offsetTop,
    behavior: 'smooth'
  });
}

navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const target = event.target.getAttribute('href');
    smoothScroll(target);
  });
});


let slideIndex = 1;

function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    slides[slideIndex - 1].style.display = 'block';
}

function changeSlide(n) {
    showSlide(slideIndex += n);
}

// Show the first slide when the page loads
showSlide(slideIndex);

function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const telepon = document.getElementById("telepon").value.trim();
  const combobox = document.getElementById("combobox").value;
  if (name.length < 3) {
      alert("Nama harus terdiri dari minimal 3 karakter");
      return false;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
      alert("Format email tidak valid");
      return false;
  }
  const teleponRegex = /^[0-9+-]+$/;
  if (!teleponRegex.test(telepon)) {
    alert("Nomor telepon hanya boleh berisi angka, '-' atau '+'");
    return false;
  }
  if (combobox === "") {
      alert("Harap pilih layanan yang diinginkan");
      return false;
  }
  alert("Terimakasih telah mengisi, kami akan menghubungi anda 1x24 jam melalui Whatsapp");
  return true;
}




