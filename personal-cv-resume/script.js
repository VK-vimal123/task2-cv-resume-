/**
 * VIMALKUMAR M - PERSONAL CV / RESUME CARD WEBSITE
 * Vanilla JavaScript (No Frameworks, No Dependencies)
 */

document.addEventListener('DOMContentLoaded', () => {

  // =========================================================================
  // 1. DYNAMIC CURRENT YEAR IN FOOTER
  // =========================================================================
  const currentYearEl = document.getElementById('currentYear');
  if (currentYearEl) {
    currentYearEl.textContent = new Date().getFullYear();
  }

  // =========================================================================
  // 2. TOAST NOTIFICATION SYSTEM
  // =========================================================================
  const toastContainer = document.getElementById('toastContainer');

  function showToast(message, iconClass = 'fa-solid fa-circle-check') {
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="${iconClass} toast-icon"></i><span>${message}</span>`;
    
    toastContainer.appendChild(toast);

    // Trigger animation
    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    // Auto remove after 3.2 seconds
    setTimeout(() => {
      toast.classList.remove('show');
      toast.addEventListener('transitionend', () => {
        toast.remove();
      });
    }, 3200);
  }

  // =========================================================================
  // 3. MOBILE NAVIGATION MENU TOGGLE
  // =========================================================================
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  function closeMobileMenu() {
    if (mobileMenu && mobileMenu.classList.contains('open')) {
      mobileMenu.classList.remove('open');
      if (menuToggle) {
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
      }
    }
  }

  function openMobileMenu() {
    if (mobileMenu) {
      mobileMenu.classList.add('open');
      if (menuToggle) {
        menuToggle.setAttribute('aria-expanded', 'true');
        menuToggle.innerHTML = '<i class="fa-solid fa-xmark"></i>';
      }
    }
  }

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = mobileMenu.classList.contains('open');
      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    // Close when clicking outside of mobile menu & toggle
    document.addEventListener('click', (e) => {
      if (!mobileMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        closeMobileMenu();
      }
    });
  }

  // =========================================================================
  // 4. SMOOTH SCROLLING WITH STICKY HEADER OFFSET
  // =========================================================================
  const navLinks = document.querySelectorAll('a[href^="#"]');
  const topNav = document.getElementById('topNav');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId === '#') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();

        // Close mobile drawer if opened
        closeMobileMenu();

        // Calculate offset accounting for sticky navigation
        const navHeight = topNav ? topNav.offsetHeight : 0;
        const targetPosition = targetEl.getBoundingClientRect().top + window.pageYOffset - navHeight - 16;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });

        // Update URL hash without jumping
        history.pushState(null, '', targetId);
      }
    });
  });

  // =========================================================================
  // 5. INTERACTIVE NAVIGATION (SCROLLSPY)
  // =========================================================================
  const sections = document.querySelectorAll('.section-card');
  const desktopLinks = document.querySelectorAll('.desktop-menu .nav-link');
  const mobileLinks = document.querySelectorAll('.mobile-menu .mobile-nav-link');

  function updateActiveNavLink() {
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop - 100;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        // Desktop
        desktopLinks.forEach(item => {
          if (item.getAttribute('href') === `#${id}`) {
            item.classList.add('active');
          } else {
            item.classList.remove('active');
          }
        });

        // Mobile
        mobileLinks.forEach(item => {
          if (item.getAttribute('href') === `#${id}`) {
            item.classList.add('active');
          } else {
            item.classList.remove('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNavLink, { passive: true });
  updateActiveNavLink();

  // =========================================================================
  // 6. BACK TO TOP BUTTON
  // =========================================================================
  const backToTopBtn = document.getElementById('backToTop');

  function toggleBackToTop() {
    if (!backToTopBtn) return;
    if (window.scrollY > 320) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }

  window.addEventListener('scroll', toggleBackToTop, { passive: true });
  toggleBackToTop();

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // =========================================================================
  // 7. DOWNLOAD RESUME BUTTON HANDLERS
  // =========================================================================
  const downloadButtons = document.querySelectorAll('a[download]');
  downloadButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      showToast('Downloading Vimalkumar M Resume (PDF)...', 'fa-solid fa-file-arrow-down');
    });
  });

  // =========================================================================
  // 8. COPY TO CLIPBOARD FUNCTIONALITY
  // =========================================================================
  const copyButtons = document.querySelectorAll('.btn-copy');

  copyButtons.forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      const textToCopy = btn.getAttribute('data-copy');
      if (!textToCopy) return;

      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(textToCopy);
        } else {
          // Fallback for older browser contexts
          const tempInput = document.createElement('textarea');
          tempInput.value = textToCopy;
          document.body.appendChild(tempInput);
          tempInput.select();
          document.execCommand('copy');
          document.body.removeChild(tempInput);
        }

        // Visual icon feedback on the button
        const originalIcon = btn.innerHTML;
        btn.innerHTML = '<i class="fa-solid fa-check" style="color: #10b981;"></i>';
        setTimeout(() => {
          btn.innerHTML = originalIcon;
        }, 1800);

        showToast(`Copied to clipboard: ${textToCopy}`);
      } catch (err) {
        showToast('Failed to copy to clipboard', 'fa-solid fa-circle-exclamation');
      }
    });
  });

  // =========================================================================
  // 9. PROFILE PHOTO UPLOAD & LOCAL STORAGE INTEGRATION
  // =========================================================================
  const photoUploadInput = document.getElementById('photoUploadInput');
  const profileAvatar = document.getElementById('profileAvatar');
  const photoControls = document.getElementById('photoControls');
  const resetPhotoBtn = document.getElementById('resetPhotoBtn');
  const STORAGE_KEY = 'vimalkumar_cv_custom_avatar';

  // Restore saved photo if present
  try {
    const savedPhoto = localStorage.getItem(STORAGE_KEY);
    if (savedPhoto && profileAvatar) {
      profileAvatar.src = savedPhoto;
      if (photoControls) photoControls.style.display = 'block';
    }
  } catch (err) {
    console.warn('LocalStorage unavailable for custom photo restoration.');
  }

  // Handle new photo selection
  if (photoUploadInput && profileAvatar) {
    photoUploadInput.addEventListener('change', (e) => {
      const file = e.target.files && e.target.files[0];
      if (!file) return;

      if (!file.type.startsWith('image/')) {
        showToast('Please select a valid image file (JPG, PNG, WebP).', 'fa-solid fa-circle-exclamation');
        return;
      }

      // Max size: 5MB
      if (file.size > 5 * 1024 * 1024) {
        showToast('Image size should be less than 5MB.', 'fa-solid fa-circle-exclamation');
        return;
      }

      const reader = new FileReader();
      reader.onload = (loadEvent) => {
        const dataUrl = loadEvent.target.result;
        profileAvatar.src = dataUrl;

        try {
          localStorage.setItem(STORAGE_KEY, dataUrl);
        } catch (storageErr) {
          console.warn('Could not persist to LocalStorage (possibly exceeded quota).');
        }

        if (photoControls) photoControls.style.display = 'block';
        showToast('Profile photo updated successfully!');
      };

      reader.readAsDataURL(file);
    });
  }

  // Reset to default photo
  if (resetPhotoBtn && profileAvatar) {
    resetPhotoBtn.addEventListener('click', () => {
      profileAvatar.src = 'assets/vk .jpg';
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch (e) {}

      if (photoControls) photoControls.style.display = 'none';
      if (photoUploadInput) photoUploadInput.value = '';
      showToast('Reset to default profile photo.');
    });
  }

});

