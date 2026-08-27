const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('enquiryForm');
const note = document.getElementById('formNote');

form?.addEventListener('submit', (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const get = (key) => (data.get(key) || '').toString().trim();

  const lines = [
    "Hi Karen! I'd like to make an enquiry with Everything Enchanted ✨",
    "",
    `Name: ${get('name')}`,
    get('phone') ? `Phone: ${get('phone')}` : "",
    `Email: ${get('email')}`,
    `Occasion: ${get('occasion')}`,
    get('date') ? `Event date: ${get('date')}` : "",
    get('location') ? `Location: ${get('location')}` : "",
    `Interested in: ${get('service')}`,
    get('theme') ? `Colour/theme: ${get('theme')}` : "",
    get('budget') ? `Approx. budget: ${get('budget')}` : "",
    "",
    "What I have in mind:",
    get('message')
  ].filter(Boolean);

  const message = encodeURIComponent(lines.join('\n'));
  const whatsappUrl = `https://wa.me/353851599788?text=${message}`;

  note.textContent = "Opening WhatsApp with your enquiry...";
  window.open(whatsappUrl, '_blank', 'noopener');
});
