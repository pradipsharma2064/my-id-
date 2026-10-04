const themeToggle = document.querySelector('.theme-toggle');
const root = document.documentElement;

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    root.classList.toggle('light');
  });
}

const typedText = document.querySelector('.typed-text');
const phrases = [
  'Artificial Intelligence & Data Science',
  'Aspiring AI Engineer',
  'Future Data Scientist',
  'Python Developer',
  'Machine Learning Enthusiast'
];

let phraseIndex = 0;
let charIndex = 0;
let deleting = false;

function typeLoop() {
  if (!typedText) return;

  const activePhrase = phrases[phraseIndex];

  if (!deleting) {
    charIndex += 1;
    typedText.textContent = activePhrase.slice(0, charIndex);
    if (charIndex === activePhrase.length) {
      deleting = true;
      setTimeout(typeLoop, 1200);
      return;
    }
  } else {
    charIndex -= 1;
    typedText.textContent = activePhrase.slice(0, charIndex);
    if (charIndex === 0) {
      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
  }

  const speed = deleting ? 45 : 85;
  setTimeout(typeLoop, speed);
}

typeLoop();

const form = document.getElementById('contactForm');
const feedback = document.querySelector('.form-feedback');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const subject = String(formData.get('subject') || '').trim();
    const message = String(formData.get('message') || '').trim();

    if (!name || !email || !subject || !message) {
      if (feedback) {
        feedback.textContent = 'Please fill in all fields before sending your message.';
        feedback.style.color = '#ffb4b4';
      }
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      if (feedback) {
        feedback.textContent = 'Please enter a valid email address.';
        feedback.style.color = '#ffb4b4';
      }
      return;
    }

    if (feedback) {
      feedback.textContent = 'Demo form received — connect this to a real backend or email service to send messages.';
      feedback.style.color = '#77ffb1';
    }

    form.reset();
  });
}
