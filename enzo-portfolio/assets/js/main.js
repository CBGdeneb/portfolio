
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
    link.classList.add('active');
  });
});

const sections = [...document.querySelectorAll('section[id], main[id]')];
const navLinks = [...document.querySelectorAll('.nav-links a')];

window.addEventListener('scroll', () => {
  const y = window.scrollY + 120;
  let current = sections[0]?.id || '';
  sections.forEach(sec => { if (sec.offsetTop <= y) current = sec.id; });
  navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current));
});
