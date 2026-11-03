/* ==========================================================================
   SANCKTUM ALKTAR - SIGIL ENERGIZING ENGINE
   Pure Liquid Glass & Sacred Magic (No Emojis, No Neon Colors)
   ========================================================================== */

class SigilChargerEngine {
  constructor() {
    this.defaultSigil = {
      id: 'sancktum_alktar_primary',
      name: 'Sancktum Alktar',
      url: 'assets/images/sigils/sancktum_alktar_sigil.png',
      cleanUrl: 'assets/images/sigils/sancktum_alktar_sigil.png',
      originalUrl: 'assets/images/sigils/sancktum_alktar_original.png',
      isDefault: true
    };

    this.activeSigils = [this.defaultSigil];
    this.hypnoticEngine = null;
    this.isCharging = false;

    // 9 Vídeos Hipnóticos de Gnose do YouTube
    this.ytVideos = {
      yt_1: '4m58zTmoqkw',
      yt_2: 'wx1zn2BzJXA',
      yt_3: '4ZiTrVxEQ-U',
      yt_4: 'MagELQywiGI',
      yt_5: 'M5vi8vNKq0E',
      yt_6: 'wjQq0nSGS28',
      yt_7: 'hOgVAYpHPCc',
      yt_8: 'uP2W7trXBPQ',
      yt_9: 'XrDUTpeGW0A'
    };

    this.initElements();
    this.bindEvents();
    this.renderStageOverlay();
  }

  initElements() {
    this.stageContainer = document.getElementById('altar-stage-container');
    this.stageOverlay = document.getElementById('sigils-overlay-layer');
    this.stageCanvas = document.getElementById('hypnotic-stage-canvas');
    this.ytIframe = document.getElementById('hypnotic-yt-iframe');

    this.toggleChargeBtn = document.getElementById('toggle-charge-btn');
    this.fullscreenBtn = document.getElementById('btn-fullscreen-top');
    this.patternSelect = document.getElementById('hypnotic-pattern-select');

    this.dropzone = document.getElementById('sigil-dropzone');
    this.fileInput = document.getElementById('sigil-file-input');
    this.resetSigilBtn = document.getElementById('reset-sigil-btn');

    this.dockEnergizerBtn = document.getElementById('dock-btn-energizer');

    try {
      this.hypnoticEngine = new HypnoticStageEngine('hypnotic-stage-canvas');
    } catch (err) {
      console.warn('HypnoticStageEngine init warning:', err);
    }
  }

  bindEvents() {
    if (this.toggleChargeBtn) {
      this.toggleChargeBtn.addEventListener('click', () => this.toggleCharging());
    }

    if (this.patternSelect) {
      this.patternSelect.addEventListener('change', (e) => {
        if (this.isCharging) {
          this.applyPattern(e.target.value);
        }
      });
    }

    if (this.dropzone && this.fileInput) {
      this.dropzone.addEventListener('click', () => this.fileInput.click());
      this.fileInput.addEventListener('change', (e) => this.handleFileUpload(e.target.files));

      this.dropzone.addEventListener('dragover', (e) => {
        e.preventDefault();
        this.dropzone.classList.add('drag-active');
      });

      this.dropzone.addEventListener('dragleave', () => {
        this.dropzone.classList.remove('drag-active');
      });

      this.dropzone.addEventListener('drop', (e) => {
        e.preventDefault();
        this.dropzone.classList.remove('drag-active');
        if (e.dataTransfer.files.length) {
          this.handleFileUpload(e.dataTransfer.files);
        }
      });
    }

    if (this.resetSigilBtn) {
      this.resetSigilBtn.addEventListener('click', () => {
        this.activeSigils = [this.defaultSigil];
        this.renderStageOverlay();
      });
    }
  }

  renderStageOverlay() {
    if (!this.stageOverlay) return;
    this.stageOverlay.innerHTML = '';

    if (this.activeSigils.length === 0) {
      this.activeSigils = [this.defaultSigil];
    }

    this.activeSigils.forEach(s => {
      const wrapper = document.createElement('div');
      wrapper.className = 'sancktum-sigil-halo';
      if (this.isCharging) {
        wrapper.classList.add('is-energized');
      }

      const img = document.createElement('img');
      img.className = 'central-sacred-sigil';
      img.src = s.cleanUrl || s.url;
      img.alt = s.name;
      img.title = s.name;

      wrapper.appendChild(img);
      this.stageOverlay.appendChild(wrapper);
    });
  }

  toggleCharging() {
    this.isCharging = !this.isCharging;

    const altarHalo = document.querySelector('.sancktum-sigil-halo');
    const pattern = this.patternSelect ? this.patternSelect.value : 'balatro';

    if (this.isCharging) {
      this.applyPattern(pattern);
      if (this.toggleChargeBtn) {
        this.toggleChargeBtn.textContent = 'Pausar Energização';
        this.toggleChargeBtn.classList.add('is-active-charging');
      }
      if (this.dockEnergizerBtn) {
        this.dockEnergizerBtn.classList.add('is-active-btn');
      }
      if (altarHalo) {
        altarHalo.classList.add('is-energized');
      }
      if (this.stageContainer) {
        this.stageContainer.classList.add('stage-energized');
      }
    } else {
      if (this.hypnoticEngine) this.hypnoticEngine.stop();
      if (this.ytIframe) {
        this.ytIframe.style.display = 'none';
        this.ytIframe.src = '';
      }
      if (this.toggleChargeBtn) {
        this.toggleChargeBtn.textContent = 'Iniciar Energização';
        this.toggleChargeBtn.classList.remove('is-active-charging');
      }
      if (this.dockEnergizerBtn) {
        this.dockEnergizerBtn.classList.remove('is-active-btn');
      }
      if (altarHalo) {
        altarHalo.classList.remove('is-energized');
      }
      if (this.stageContainer) {
        this.stageContainer.classList.remove('stage-energized');
      }
    }
  }

  applyPattern(pattern) {
    if (pattern.startsWith('yt_')) {
      const videoId = this.ytVideos[pattern] || '4m58zTmoqkw';
      if (this.hypnoticEngine) this.hypnoticEngine.stop();
      if (this.ytIframe) {
        this.ytIframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&autohide=1`;
        this.ytIframe.style.display = 'block';
      }
    } else {
      if (this.ytIframe) {
        this.ytIframe.style.display = 'none';
        this.ytIframe.src = '';
      }
      if (this.hypnoticEngine) this.hypnoticEngine.start(pattern);
    }
  }

  async processImageToSigilMask(file) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onerror = () => resolve({ originalUrl: '', cleanUrl: '' });
      reader.onload = (e) => {
        const originalDataUrl = e.target.result;
        const img = new Image();
        img.onerror = () => resolve({ originalUrl: originalDataUrl, cleanUrl: originalDataUrl });
        img.onload = () => {
          try {
            const maxDimension = 1000;
            let w = img.naturalWidth || img.width || 300;
            let h = img.naturalHeight || img.height || 300;
            if (w > maxDimension || h > maxDimension) {
              if (w >= h) {
                h = Math.round((h * maxDimension) / w);
                w = maxDimension;
              } else {
                w = Math.round((w * maxDimension) / h);
                h = maxDimension;
              }
            }

            const canvas = document.createElement('canvas');
            canvas.width = w;
            canvas.height = h;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, w, h);

            const imgData = ctx.getImageData(0, 0, w, h);
            const d = imgData.data;

            let borderSum = 0;
            let borderCount = 0;
            for (let x = 0; x < w; x += 4) {
              const topIdx = (x) * 4;
              const botIdx = ((h - 1) * w + x) * 4;
              borderSum += 0.299 * d[topIdx] + 0.587 * d[topIdx + 1] + 0.114 * d[topIdx + 2];
              borderSum += 0.299 * d[botIdx] + 0.587 * d[botIdx + 1] + 0.114 * d[botIdx + 2];
              borderCount += 2;
            }
            const borderLum = borderSum / (borderCount || 1);
            const isLightBg = borderLum >= 120;

            for (let i = 0; i < d.length; i += 4) {
              const lum = 0.299 * d[i] + 0.587 * d[i + 1] + 0.114 * d[i + 2];
              let alpha = 0;
              if (isLightBg) {
                alpha = lum >= 210 ? 0 : Math.round(255 * (1.0 - lum / 210));
              } else {
                alpha = lum <= 30 ? 0 : Math.round(255 * (lum / 255));
              }
              d[i] = 255;
              d[i + 1] = 255;
              d[i + 2] = 255;
              d[i + 3] = alpha;
            }

            ctx.putImageData(imgData, 0, 0);
            resolve({
              originalUrl: originalDataUrl,
              cleanUrl: canvas.toDataURL('image/png')
            });
          } catch (err) {
            resolve({ originalUrl: originalDataUrl, cleanUrl: originalDataUrl });
          }
        };
        img.src = originalDataUrl;
      };
      reader.readAsDataURL(file);
    });
  }

  async handleFileUpload(files) {
    const file = Array.from(files).find(f => f.type.startsWith('image/'));
    if (!file) return;

    try {
      const res = await this.processImageToSigilMask(file);
      this.activeSigils = [{
        id: 'custom_' + Date.now(),
        name: file.name.replace(/\.[^/.]+$/, ''),
        url: res.cleanUrl,
        cleanUrl: res.cleanUrl,
        originalUrl: res.originalUrl,
        isDefault: false
      }];
      this.renderStageOverlay();
    } catch (e) {
      console.warn('Erro ao carregar sigilo:', e);
    } finally {
      if (this.fileInput) this.fileInput.value = '';
    }
  }
}

window.SigilChargerEngine = SigilChargerEngine;
