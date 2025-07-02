// Fill message box when user clicks a service card
const serviceCards = document.querySelectorAll('.service-option');
const messageBox = document.getElementById('message');
const contactSection = document.getElementById('contact');

serviceCards.forEach(card => {
  card.addEventListener('click', () => {
    const service = card.getAttribute('data-service');
    if (messageBox) {
      messageBox.value = `Hi Nova, I am interested in ${service}.`;
      messageBox.focus();
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Close announcement box
const announcementBox = document.getElementById('announcementBox');
const closeBtn = document.getElementById('closeAnnouncement');

if (closeBtn) {
  closeBtn.addEventListener('click', () => {
    announcementBox.style.display = 'none';
  });
}

// Show thank you popup on form submit
const contactForm = document.querySelector('.contact-form');
const thankYouPopup = document.getElementById('thankYouPopup');

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    if (thankYouPopup) {
      thankYouPopup.style.display = 'flex';
      setTimeout(() => {
        thankYouPopup.style.display = 'none';
      }, 3000);
    }
    this.reset();
  });
}

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const nav = document.getElementById('primary-navigation');

if (hamburger && nav) {
  hamburger.addEventListener('click', () => {
    nav.classList.toggle('show');
  });

  // Auto-close menu when a nav link is clicked (good for mobile UX)
  const navLinks = nav.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (nav.classList.contains('show')) {
        nav.classList.remove('show');
      }
    });
  });
}
