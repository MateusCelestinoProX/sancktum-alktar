/* ==========================================================================
   SANCKTUM ALKTAR - AMBIENT SOUND ENGINE (MCP SUBLIMINAL)
   Track: Grandrocêta Morphic (Binaural Pro) • 432Hz/528Hz/111Hz
   ========================================================================== */

class AmbientSoundEngine {
  constructor() {
    this.audio = new Audio('assets/audio/mcp-subliminal.mp3');
    this.audio.loop = true;
    this.audio.preload = 'auto';
    this.audio.volume = 0;

    this.isPlaying = false;
    this.fadeInterval = null;
    this.targetVolume = 0.85;

    this.initEvents();
  }

  initEvents() {
    this.audio.addEventListener('play', () => {
      this.isPlaying = true;
      this.updateUI(true);
    });

    this.audio.addEventListener('pause', () => {
      if (this.audio.volume === 0) {
        this.isPlaying = false;
        this.updateUI(false);
      }
    });

    this.audio.addEventListener('error', (e) => {
      console.warn('Altar Ambient Audio Error:', e);
      this.updateUI(false);
    });
  }

  toggle() {
    if (this.isPlaying) {
      this.fadeOut();
    } else {
      this.fadeIn();
    }
  }

  fadeIn() {
    if (this.fadeInterval) clearInterval(this.fadeInterval);

    this.audio.play().then(() => {
      this.isPlaying = true;
      this.updateUI(true);

      const step = 0.05;
      this.fadeInterval = setInterval(() => {
        if (this.audio.volume < this.targetVolume - step) {
          this.audio.volume = Math.min(1, this.audio.volume + step);
        } else {
          this.audio.volume = this.targetVolume;
          clearInterval(this.fadeInterval);
        }
      }, 35);
    }).catch(err => {
      console.warn('Reprodução de áudio requer interação do usuário:', err);
      this.updateUI(false);
    });
  }

  fadeOut() {
    if (this.fadeInterval) clearInterval(this.fadeInterval);

    this.isPlaying = false;
    this.updateUI(false);

    const step = 0.07;
    this.fadeInterval = setInterval(() => {
      if (this.audio.volume > step) {
        this.audio.volume = Math.max(0, this.audio.volume - step);
      } else {
        this.audio.volume = 0;
        this.audio.pause();
        clearInterval(this.fadeInterval);
      }
    }, 35);
  }

  updateUI(active) {
    const topBtn = document.getElementById('btn-sound-top');
    if (topBtn) {
      if (active) topBtn.classList.add('is-active');
      else topBtn.classList.remove('is-active');
    }

    const modalBtn = document.getElementById('modal-sound-toggle-btn');
    if (modalBtn) {
      modalBtn.textContent = active ? 'Pausar MCP Subliminal' : 'Ativar MCP Subliminal';
      if (active) modalBtn.classList.add('is-active-btn');
      else modalBtn.classList.remove('is-active-btn');
    }

    const statusLabel = document.getElementById('sound-status-label');
    if (statusLabel) {
      statusLabel.textContent = active ? 'Ativado' : 'Desativado';
    }
  }
}

window.AmbientSoundEngine = AmbientSoundEngine;
