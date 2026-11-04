/* ==========================================================================
   SANCKTUM ALKTAR - CINEMATIC BACKGROUND ENGINE
   Pure Liquid Glass & Dark Magic (No Emojis, No Neon Colors)
   ========================================================================== */

class BackgroundEngine {
  constructor() {
    this.categories = {};
    this.currentCategory = '';
    this.currentImages = [];
    this.currentIndex = 0;
    this.slideshowInterval = null;
    this.displayDuration = 3000; // 3 segundos por imagem

    this.dimOpacity = 0.52; // Escurecimento padrão para contraste sagrado
    this.blurAmount = 0; // Blur padrão

    this.container = null;
    this.layerA = null;
    this.layerB = null;
    this.dimOverlay = null;
    this.activeLayer = 'A';

    this.initDOM();
    this.loadBackgroundsData();
    this.initEvents();
  }

  initDOM() {
    this.container = document.getElementById('cinematic-bg-container');
    if (!this.container) {
      this.container = document.createElement('div');
      this.container.id = 'cinematic-bg-container';
      document.body.prepend(this.container);
    }

    this.container.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      z-index: 0;
      overflow: hidden;
      pointer-events: none;
    `;

    this.container.innerHTML = `
      <div id="bg-layer-a" class="bg-cinematic-layer"></div>
      <div id="bg-layer-b" class="bg-cinematic-layer"></div>
      <div id="bg-dim-overlay"></div>
    `;

    this.layerA = document.getElementById('bg-layer-a');
    this.layerB = document.getElementById('bg-layer-b');
    this.dimOverlay = document.getElementById('bg-dim-overlay');
    this.updateDimOverlay();
  }

  updateDimOverlay() {
    if (this.dimOverlay) {
      const alpha = this.dimOpacity;
      const alphaEdge = Math.min(0.98, alpha + 0.35);
      this.dimOverlay.style.background = `radial-gradient(circle at center, rgba(4, 4, 6, ${alpha * 0.7}) 0%, rgba(4, 4, 6, ${alpha}) 65%, rgba(2, 2, 4, ${alphaEdge}) 100%)`;
    }
  }

  async loadBackgroundsData() {
    try {
      const response = await fetch('assets/data/backgrounds.json');
      const data = await response.json();
      this.categories = data.categories || {};

      const catNames = Object.keys(this.categories);
      if (catNames.length === 0) return;

      // Inicia com uma categoria aleatória
      const randomCat = catNames[Math.floor(Math.random() * catNames.length)];
      this.setCategory(randomCat);
      this.populateCategoryOptions(catNames);
    } catch (e) {
      console.warn('Carregamento de backgrounds:', e);
    }
  }

  setCategory(categoryName) {
    if (!this.categories[categoryName] || this.categories[categoryName].length === 0) return;

    this.currentCategory = categoryName;
    this.currentImages = this.categories[categoryName];
    this.currentIndex = 0;

    const select = document.getElementById('bg-category-select');
    if (select && select.value !== categoryName) {
      select.value = categoryName;
    }

    this.startSlideshow();
  }

  startSlideshow() {
    if (this.slideshowInterval) {
      clearInterval(this.slideshowInterval);
    }

    this.showNextImage();

    this.slideshowInterval = setInterval(() => {
      this.showNextImage();
    }, this.displayDuration);
  }

  pauseSlideshow() {
    if (this.slideshowInterval) {
      clearInterval(this.slideshowInterval);
      this.slideshowInterval = null;
    }
  }

  resumeSlideshow() {
    if (!this.slideshowInterval) {
      this.startSlideshow();
    }
  }

  showNextImage() {
    if (!this.currentImages || !this.currentImages.length) return;

    const imgUrl = this.currentImages[this.currentIndex];
    this.currentIndex = (this.currentIndex + 1) % this.currentImages.length;

    if (this.activeLayer === 'A') {
      this.layerB.style.backgroundImage = `url('${imgUrl}')`;
      this.layerB.style.filter = `blur(${this.blurAmount}px)`;
      this.layerB.style.opacity = '1';
      this.layerA.style.opacity = '0';
      this.activeLayer = 'B';
    } else {
      this.layerA.style.backgroundImage = `url('${imgUrl}')`;
      this.layerA.style.filter = `blur(${this.blurAmount}px)`;
      this.layerA.style.opacity = '1';
      this.layerB.style.opacity = '0';
      this.activeLayer = 'A';
    }
  }

  setDimOpacity(val) {
    this.dimOpacity = parseFloat(val);
    this.updateDimOverlay();
  }

  setBlurAmount(val) {
    this.blurAmount = parseFloat(val);
    if (this.layerA) this.layerA.style.filter = `blur(${this.blurAmount}px)`;
    if (this.layerB) this.layerB.style.filter = `blur(${this.blurAmount}px)`;
  }

  populateCategoryOptions(catNames) {
    const select = document.getElementById('bg-category-select');
    if (!select) return;

    const labels = {
      caosphere: 'Caosfera',
      celestial: 'Celestial',
      horror: 'Abissal',
      satanic: 'Arcano'
    };

    select.innerHTML = '';
    catNames.forEach(cat => {
      const opt = document.createElement('option');
      opt.value = cat;
      opt.textContent = labels[cat] || cat.toUpperCase();
      if (cat === this.currentCategory) opt.selected = true;
      select.appendChild(opt);
    });

    select.addEventListener('change', (e) => {
      this.setCategory(e.target.value);
    });
  }

  initEvents() {
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        if (this.slideshowInterval) {
          clearInterval(this.slideshowInterval);
          this.slideshowInterval = null;
        }
      } else {
        if (!this.slideshowInterval && this.currentImages && this.currentImages.length > 0) {
          this.startSlideshow();
        }
      }
    });

    const dimSlider = document.getElementById('bg-dim-slider');
    const dimValText = document.getElementById('bg-dim-val');
    if (dimSlider) {
      dimSlider.addEventListener('input', (e) => {
        const val = parseFloat(e.target.value);
        this.setDimOpacity(val);
        if (dimValText) dimValText.textContent = `${Math.round(val * 100)}%`;
      });
    }

    const blurSlider = document.getElementById('bg-blur-slider');
    const blurValText = document.getElementById('bg-blur-val');
    if (blurSlider) {
      blurSlider.addEventListener('input', (e) => {
        const val = parseFloat(e.target.value);
        this.setBlurAmount(val);
        if (blurValText) blurValText.textContent = `${val}px`;
      });
    }
  }
}

window.BackgroundEngine = BackgroundEngine;
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.backgroundEngine = new BackgroundEngine();
  });
} else {
  window.backgroundEngine = new BackgroundEngine();
}
