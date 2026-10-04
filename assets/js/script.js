document.addEventListener('DOMContentLoaded', () => {
  const config = window.portfolioConfig || {};
  const currentYear = document.getElementById('year');

  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  const navMenu = document.getElementById('nav-menu');
  const navToggle = document.getElementById('nav-toggle');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    navMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const themeToggle = document.getElementById('theme-toggle');
  const getSystemTheme = () => window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';

  const applyTheme = (theme) => {
    const resolvedTheme = theme || 'dark';
    document.body.dataset.theme = resolvedTheme;

    if (themeToggle) {
      themeToggle.textContent = resolvedTheme === 'dark' ? 'Light mode' : 'Dark mode';
      themeToggle.setAttribute('aria-label', resolvedTheme === 'dark' ? 'Activer le mode clair' : 'Activer le mode sombre');
    }

    localStorage.setItem('theme', resolvedTheme);
  };

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    applyTheme(savedTheme);
  } else {
    applyTheme(getSystemTheme());
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const nextTheme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
      applyTheme(nextTheme);
    });
  }

  const renderProjects = () => {
    const grid = document.getElementById('projects-grid');
    if (!grid || !Array.isArray(config.projects)) return;

    grid.innerHTML = config.projects
      .map((project) => {
        const liveDemoHref = project.liveDemo && project.liveDemo.startsWith('http') ? project.liveDemo : '#TODO-CONFIGURE-LIVE-DEMO';
        const githubHref = project.github && project.github.startsWith('http') ? project.github : '#TODO-CONFIGURE-GITHUB';

        return `
          <article class="project-card reveal">
            <div class="project-visual">
              <img src="${project.image || 'assets/images/projects/project-placeholder.svg'}" alt="${project.title} preview" loading="lazy">
            </div>
            <div class="project-content">
              <p class="project-type">${project.type || 'Project'}</p>
              <h3>${project.title}</h3>
              <p>${project.description}</p>
              <div class="project-tech">
                ${(project.technologies || []).map((tech) => `<span>${tech}</span>`).join('')}
              </div>
              <div class="project-links">
                <a href="${liveDemoHref}" target="${project.liveDemo && project.liveDemo.startsWith('http') ? '_blank' : '_self'}" rel="noopener noreferrer">${project.liveDemo || 'LIVE_DEMO_URL'}</a>
                <a href="${githubHref}" target="${project.github && project.github.startsWith('http') ? '_blank' : '_self'}" rel="noopener noreferrer">${project.github || 'GITHUB_URL'}</a>
              </div>
            </div>
          </article>
        `;
      })
      .join('');
  };

  const renderGallery = () => {
    const gallery = document.getElementById('creative-gallery');
    if (!gallery || !Array.isArray(config.photographyGallery)) return;

    gallery.innerHTML = config.photographyGallery
      .map(
        (item) => `
          <div class="gallery-item reveal">
            <img src="${item.image}" alt="${item.title}" loading="lazy">
            <span>${item.title}</span>
          </div>
        `
      )
      .join('');
  };

  const renderSkills = () => {
    const sections = [
      { id: 'frontend-skills', items: config.skills?.frontend || [] },
      { id: 'backend-skills', items: config.skills?.backend || [] },
      { id: 'database-skills', items: config.skills?.database || [] },
      { id: 'creative-skills', items: config.skills?.creative || [] },
      { id: 'software-skills', items: config.skills?.software || [] }
    ];

    sections.forEach(({ id, items }) => {
      const el = document.getElementById(id);
      if (!el) return;
      el.innerHTML = items.map((skill) => `<span class="skill-badge">${skill}</span>`).join('');
    });
  };

  const renderServices = () => {
    const list = document.getElementById('services-list');
    if (!list || !Array.isArray(config.services)) return;

    list.innerHTML = config.services
      .map((service) => `
        <article class="service-card reveal">
          <h3>${service}</h3>
          <p>Solution professionnelle, alignée sur un besoin technique et créatif.</p>
        </article>
      `)
      .join('');
  };

  const renderLanguages = () => {
    const list = document.getElementById('languages-list');
    if (!list || !Array.isArray(config.languages)) return;

    list.innerHTML = config.languages
      .map(
        (language) => `
          <article class="language-card reveal">
            <h3>${language.name}</h3>
            <p>${language.level}</p>
          </article>
        `
      )
      .join('');
  };

  renderProjects();
  renderGallery();
  renderSkills();
  renderServices();
  renderLanguages();

  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const formData = new FormData(contactForm);
      const name = (formData.get('name') || '').toString().trim();
      const email = (formData.get('email') || '').toString().trim();
      const message = (formData.get('message') || '').toString().trim();

      const subject = encodeURIComponent(`Portfolio contact - ${name || 'Nouveau message'}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
      );

      window.location.href = `mailto:${config.email || 'ghanoguitt730@gmail.com'}?subject=${subject}&body=${body}`;
      contactForm.reset();
    });
  }

  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  }
});
