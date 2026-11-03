/* ==========================================================================
   SANCKTUM ALKTAR - ALCHEMICAL COLOR ENGINE
   12 Sacred Chromatic Frequencies (Pure Liquid Glass & Dark Magic)
   ========================================================================== */

class AlchemicalColorEngine {
  constructor() {
    this.colors = [
      { id: 'white', name: 'Branco Celestial', hex: '#FFFFFF', glow: 'rgba(255, 255, 255, 0.90)', glowSoft: 'rgba(220, 230, 255, 0.45)' },
      { id: 'silver', name: 'Prata Astral', hex: '#CBD5E1', glow: 'rgba(203, 213, 225, 0.85)', glowSoft: 'rgba(148, 163, 184, 0.45)' },
      { id: 'gold', name: 'Ouro Alquímico', hex: '#E5C158', glow: 'rgba(229, 193, 88, 0.85)', glowSoft: 'rgba(212, 175, 55, 0.45)' },
      { id: 'amber', name: 'Âmbar Solar', hex: '#F59E0B', glow: 'rgba(245, 158, 11, 0.85)', glowSoft: 'rgba(217, 119, 6, 0.45)' },
      { id: 'ruby', name: 'Rubi Sagrado', hex: '#E11D48', glow: 'rgba(225, 29, 72, 0.85)', glowSoft: 'rgba(190, 18, 60, 0.45)' },
      { id: 'rose', name: 'Rosa Hermético', hex: '#EC4899', glow: 'rgba(236, 72, 153, 0.85)', glowSoft: 'rgba(219, 39, 119, 0.45)' },
      { id: 'amethyst', name: 'Ametista Oculta', hex: '#A855F7', glow: 'rgba(168, 85, 247, 0.85)', glowSoft: 'rgba(147, 51, 234, 0.45)' },
      { id: 'indigo', name: 'Índigo Astral', hex: '#6366F1', glow: 'rgba(99, 102, 241, 0.85)', glowSoft: 'rgba(79, 70, 229, 0.45)' },
      { id: 'sapphire', name: 'Safira Cósmica', hex: '#3B82F6', glow: 'rgba(59, 130, 246, 0.85)', glowSoft: 'rgba(37, 99, 235, 0.45)' },
      { id: 'cyan', name: 'Ciano Etéreo', hex: '#06B6D4', glow: 'rgba(6, 182, 212, 0.85)', glowSoft: 'rgba(8, 145, 178, 0.45)' },
      { id: 'emerald', name: 'Esmeralda Hermética', hex: '#10B981', glow: 'rgba(16, 185, 129, 0.85)', glowSoft: 'rgba(5, 150, 105, 0.45)' },
      { id: 'jade', name: 'Jade Alquímico', hex: '#84CC16', glow: 'rgba(132, 204, 22, 0.85)', glowSoft: 'rgba(101, 163, 13, 0.45)' }
    ];

    this.currentColorId = localStorage.getItem('sancktum_alktar_sigil_color_id') || 'white';
    this.cachedCanvas = document.createElement('canvas');
  }

  init() {
    this.renderSwatches();
    this.applyColor(this.currentColorId, false);
  }

  renderSwatches() {
    const container = document.getElementById('sigil-color-palette');
    if (!container) return;
    container.innerHTML = '';

    this.colors.forEach(col => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'color-swatch-btn' + (col.id === this.currentColorId ? ' is-selected' : '');
      btn.style.setProperty('--swatch-color', col.hex);
      btn.title = col.name;
      btn.setAttribute('aria-label', col.name);
      btn.addEventListener('click', () => {
        this.applyColor(col.id, true);
      });
      container.appendChild(btn);
    });
  }

  applyColor(colorId, userTriggered = false) {
    const found = this.colors.find(c => c.id === colorId) || this.colors[0];
    this.currentColorId = found.id;
    if (userTriggered) {
      localStorage.setItem('sancktum_alktar_sigil_color_id', found.id);
    }

    // 1. Atualizar label do nome da cor
    const label = document.getElementById('sigil-color-name');
    if (label) label.textContent = found.name;

    // 2. Atualizar estado visual dos botões
    const swatches = document.querySelectorAll('.color-swatch-btn');
    swatches.forEach((btn, idx) => {
      if (this.colors[idx] && this.colors[idx].id === found.id) {
        btn.classList.add('is-selected');
      } else {
        btn.classList.remove('is-selected');
      }
    });

    // 3. Atualizar variáveis CSS globais em :root
    document.documentElement.style.setProperty('--sigil-color', found.hex);
    document.documentElement.style.setProperty('--sigil-glow', found.glow);
    document.documentElement.style.setProperty('--sigil-glow-soft', found.glowSoft);

    // 4. Colorir as imagens dos sigilos ativos
    this.tintActiveSigils(found.hex);
  }

  tintActiveSigils(colorHex) {
    const sigilImgs = document.querySelectorAll('.central-sacred-sigil');
    if (sigilImgs.length === 0) return;

    // Se a cor for branco puro, usa a imagem original limpa
    let baseSrc = 'assets/images/sigils/sancktum_alktar_sigil.png';
    if (window.sigilChargerEngine && window.sigilChargerEngine.activeSigils && window.sigilChargerEngine.activeSigils[0]) {
      baseSrc = window.sigilChargerEngine.activeSigils[0].cleanUrl || window.sigilChargerEngine.activeSigils[0].url;
    }

    if (colorHex === '#FFFFFF' && baseSrc === 'assets/images/sigils/sancktum_alktar_sigil.png') {
      sigilImgs.forEach(s => {
        s.src = baseSrc;
      });
      return;
    }

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      this.cachedCanvas.width = img.width;
      this.cachedCanvas.height = img.height;
      const ctx = this.cachedCanvas.getContext('2d');
      ctx.clearRect(0, 0, img.width, img.height);
      ctx.drawImage(img, 0, 0);
      ctx.globalCompositeOperation = 'source-in';
      ctx.fillStyle = colorHex;
      ctx.fillRect(0, 0, img.width, img.height);

      const tintedDataUrl = this.cachedCanvas.toDataURL('image/png');
      sigilImgs.forEach(s => {
        s.src = tintedDataUrl;
      });
    };
    img.src = baseSrc;
  }
}

window.AlchemicalColorEngine = AlchemicalColorEngine;
