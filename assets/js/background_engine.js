/* ==========================================================================
   SANCKTUM ALKTAR - CINEMATIC BACKGROUND ENGINE (DESATIVADO)
   A tela de fundo do Sancktum Alktar é 100% exclusivamente o Energizador Content em Full Screen.
   ========================================================================== */

class BackgroundEngine {
  constructor() {
    this.categories = {};
    this.currentCategory = '';
    this.currentImages = [];
    this.currentIndex = 0;
    this.slideshowInterval = null;
  }
  initDOM() {}
  loadBackgroundsData() {}
  setCategory() {}
  startSlideshow() {}
  pauseSlideshow() {}
  resumeSlideshow() {}
  showNextImage() {}
  setDimOpacity() {}
  setBlurAmount() {}
  populateCategoryOptions() {}
  initEvents() {}
}

window.BackgroundEngine = BackgroundEngine;
