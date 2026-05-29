const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let cur = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 130) cur = s.id; });
  navItems.forEach(a => { a.classList.remove('active'); if (a.getAttribute('href') === '#' + cur) a.classList.add('active'); });
  document.getElementById('scrollTop').classList.toggle('show', window.scrollY > 400);
});

const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      e.target.querySelectorAll('.skill-fill').forEach(f => f.style.width = f.dataset.w + '%');
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));

function submitForm() {
  const n = document.getElementById('fname').value.trim();
  const e = document.getElementById('femail').value.trim();
  const m = document.getElementById('fmessage').value.trim();
  if (!n || !e || !m) { alert('Please fill in your name, email, and message.'); return; }
  ['fname','lname','femail','fsubject','fmessage'].forEach(id => document.getElementById(id).value = '');
  const s = document.getElementById('formStatus');
  s.classList.add('show');
  setTimeout(() => s.classList.remove('show'), 5000);
}