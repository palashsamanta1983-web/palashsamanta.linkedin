// Palash Samanta Portfolio Interactive Script
document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    document.querySelectorAll('.mobile-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // Interactive Before/After Toggle in Demo
  const btnBefore = document.getElementById('btn-show-before');
  const btnAfter = document.getElementById('btn-show-after');
  const beforeFlow = document.getElementById('flow-before');
  const afterFlow = document.getElementById('flow-after');

  if (btnBefore && btnAfter && beforeFlow && afterFlow) {
    btnBefore.addEventListener('click', () => {
      beforeFlow.classList.remove('hidden');
      afterFlow.classList.add('hidden');
      btnBefore.classList.add('active');
      btnAfter.classList.remove('active');
    });

    btnAfter.addEventListener('click', () => {
      afterFlow.classList.remove('hidden');
      beforeFlow.classList.add('hidden');
      btnAfter.classList.add('active');
      btnBefore.classList.remove('active');
    });
  }
});
