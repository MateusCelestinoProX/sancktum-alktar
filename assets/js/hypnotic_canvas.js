/* ==========================================================================
   SANCKTUM ALKTAR - HYPNOTIC CANVAS SHADER & GEOMETRIC ENGINE
   Liquid Glass & Sacred Ethereal Magic (No Emojis, No Neon Colors)
   Includes:
   - 12 WebGL Shaders (Balatro, Ferrofluid, MetaBalls, Plasma, Splash, Prism,
                       Aurora, Ether, DarkVeil, LightTunnel, GalaxyBits, GhostFibers)
   - 2 Geometric Canvas Engines (Caosphere 8-Arrow Vortex, ASCII 3D Sphere)
   - Atmosphere Bridging (Caosphere, Celestial, Abyssal, Arcane)
   ========================================================================== */

class ChaosphereParticleEngine {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.particles = [];
    this.angle = 0;
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.init();
  }

  init() {
    this.resize();
    this.particles = [];
    const count = Math.min(80, Math.floor((this.width * this.height) / 14000));
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        radius: Math.random() * 2.2 + 0.8,
        color: Math.random() > 0.5 ? 'rgba(212, 175, 55, ' : 'rgba(235, 235, 245, ',
        alpha: Math.random() * 0.5 + 0.15,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35
      });
    }
  }

  resize() {
    if (!this.canvas) return;
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
  }

  draw() {
    const ctx = this.ctx;
    if (!ctx) return;
    ctx.clearRect(0, 0, this.width, this.height);

    for (let p of this.particles) {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = this.width;
      if (p.x > this.width) p.x = 0;
      if (p.y < 0) p.y = this.height;
      if (p.y > this.height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color + p.alpha + ')';
      ctx.fill();
    }

    const cx = this.width / 2;
    const cy = this.height / 2;
    const radius = Math.min(this.width, this.height) * 0.22;

    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(this.angle * 0.15);

    // Anel externo sagrado
    ctx.beginPath();
    ctx.arc(0, 0, radius * 1.25, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(212, 175, 55, 0.28)';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // 8 Raios Sagrados com pontas de flecha
    const arrowCount = 8;
    for (let i = 0; i < arrowCount; i++) {
      const a = (i * Math.PI * 2) / arrowCount;
      ctx.save();
      ctx.rotate(a);

      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(0, -radius);
      ctx.strokeStyle = 'rgba(240, 240, 250, 0.45)';
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(-10, -radius + 15);
      ctx.lineTo(0, -radius - 8);
      ctx.lineTo(10, -radius + 15);
      ctx.fillStyle = 'rgba(212, 175, 55, 0.85)';
      ctx.fill();

      ctx.restore();
    }

    ctx.restore();
    this.angle += 0.005;
  }
}

class AsciiSphereEngine {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.chars = [];
    this.maxChars = 160;
    this.separation = 1.0;
    this.camera = { x: 0, y: 0, z: 2.1 };
    this.time = 0;
    this.init();
  }

  init() {
    this.resize();
    this.chars = [];
    const glyphs = '0123456789ABCDEFΣΨΩ⚡✦✧⚚⛧☽☾☼';
    for (let i = 0; i < this.maxChars; i++) {
      const char = glyphs.charAt(Math.floor(Math.random() * glyphs.length));
      this.chars.push({
        letter: char,
        x: (Math.random() - 0.5) * 2 * this.separation,
        y: (Math.random() - 0.5) * 2 * this.separation,
        z: (Math.random() - 0.5) * 2 * this.separation
      });
    }
  }

  resize() {
    if (!this.canvas) return;
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
  }

  rotate(pos, dir, ang) {
    const sin = Math.sin(ang), cos = Math.cos(ang);
    if (dir === 'x') {
      const y = pos.y * cos - pos.z * sin;
      const z = pos.y * sin + pos.z * cos;
      pos.y = y; pos.z = z;
    } else if (dir === 'y') {
      const x = pos.x * cos - pos.z * sin;
      const z = pos.x * sin + pos.z * cos;
      pos.x = x; pos.z = z;
    }
  }

  draw() {
    const ctx = this.ctx;
    if (!ctx) return;
    ctx.clearRect(0, 0, this.width, this.height);
    const ww = this.width, wh = this.height;
    const dx = 0.004 * Math.sin(this.time * 0.001);
    const dy = 0.004 * Math.cos(this.time * 0.001);

    for (let c of this.chars) {
      this.rotate(c, 'x', dx);
      this.rotate(c, 'y', dy);

      const zp = c.z + this.camera.z;
      const div = zp / wh;
      const xp = (c.x + this.camera.x) / div + ww / 2;
      const yp = (c.y + this.camera.y) / div + wh / 2;

      const size = Math.max(8, Math.min(32, Math.floor((1 / zp) * 42)));
      const brightness = Math.max(0.15, Math.min(0.9, size / 32));

      ctx.beginPath();
      ctx.fillStyle = `rgba(212, 175, 55, ${brightness * 0.8})`;
      ctx.font = `${size}px monospace`;
      ctx.fillText(c.letter, xp, yp);
      ctx.closePath();
    }
    this.time++;
  }
}

class HypnoticStageEngine {
  constructor(webglCanvasId, canvas2dId = 'hypnotic-2d-canvas') {
    this.canvasWebGL = document.getElementById(webglCanvasId);
    this.canvas2D = document.getElementById(canvas2dId);

    this.gl = this.canvasWebGL ? this.canvasWebGL.getContext('webgl', { alpha: true, antialias: true, premultipliedAlpha: false }) : null;
    this.program = null;
    this.animFrameId = null;
    this.startTime = performance.now();
    this.currentMode = 'balatro';
    this.mousePos = [0.5, 0.5];
    this.isActive = false;

    this.chaosphereEngine = this.canvas2D ? new ChaosphereParticleEngine(this.canvas2D) : null;
    this.asciiEngine = this.canvas2D ? new AsciiSphereEngine(this.canvas2D) : null;

    this.initListeners();
  }

  initListeners() {
    window.addEventListener('resize', () => this.resize());
    window.addEventListener('orientationchange', () => setTimeout(() => this.resize(), 120));

    const updateMouse = (clientX, clientY) => {
      const rect = (this.canvasWebGL || this.canvas2D).getBoundingClientRect();
      const x = (clientX - rect.left) / (rect.width || 1);
      const y = 1.0 - (clientY - rect.top) / (rect.height || 1);
      this.mousePos = [Math.max(0, Math.min(1, x)), Math.max(0, Math.min(1, y))];
    };

    window.addEventListener('mousemove', (e) => updateMouse(e.clientX, e.clientY));
    window.addEventListener('touchmove', (e) => {
      if (e.touches && e.touches[0]) updateMouse(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: true });
  }

  resize() {
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const maxDpr = isMobile ? 1.25 : 1.5;
    const dpr = Math.min(window.devicePixelRatio || 1, maxDpr);
    const w = Math.floor(window.innerWidth * dpr);
    const h = Math.floor(window.innerHeight * dpr);

    if (this.canvasWebGL && this.gl) {
      if (this.canvasWebGL.width !== w || this.canvasWebGL.height !== h) {
        this.canvasWebGL.width = w;
        this.canvasWebGL.height = h;
        this.gl.viewport(0, 0, w, h);
      }
    }

    if (this.canvas2D) {
      if (this.canvas2D.width !== window.innerWidth || this.canvas2D.height !== window.innerHeight) {
        this.canvas2D.width = window.innerWidth;
        this.canvas2D.height = window.innerHeight;
      }
      if (this.chaosphereEngine) this.chaosphereEngine.resize();
      if (this.asciiEngine) this.asciiEngine.resize();
    }
  }

  start(mode = 'balatro') {
    this.currentMode = mode;
    this.isActive = true;
    this.stop();
    this.resize();

    // 1. Coleções de Fotos de Atmosfera Hipnótica
    if (mode.startsWith('bg_')) {
      const cat = mode.replace('bg_', '');
      if (this.canvasWebGL) this.canvasWebGL.style.display = 'none';
      if (this.canvas2D) this.canvas2D.style.display = 'none';
      if (window.backgroundEngine && typeof window.backgroundEngine.setCategory === 'function') {
        window.backgroundEngine.setCategory(cat);
        window.backgroundEngine.resumeSlideshow();
      }
      return;
    }

    // 2. Motores Geométricos 2D & 3D
    if (mode === 'caosphere_vortex' || mode === 'ascii_sphere') {
      if (this.canvasWebGL) this.canvasWebGL.style.display = 'none';
      if (this.canvas2D) {
        this.canvas2D.style.display = 'block';
        this.canvas2D.style.opacity = '1';
      }
      this.loop2D();
      return;
    }

    // 3. Shaders WebGL
    if (this.canvas2D) this.canvas2D.style.display = 'none';
    if (this.canvasWebGL) {
      this.canvasWebGL.style.display = 'block';
      this.canvasWebGL.style.opacity = '1';
    }
    this.initShaderProgram(mode);
    this.startTime = performance.now();
    this.loopWebGL();
  }

  stop() {
    this.isActive = false;
    if (this.animFrameId) {
      cancelAnimationFrame(this.animFrameId);
      this.animFrameId = null;
    }

    if (this.gl) {
      this.gl.clearColor(0, 0, 0, 0);
      this.gl.clear(this.gl.COLOR_BUFFER_BIT);
    }

    if (this.canvas2D) {
      const ctx = this.canvas2D.getContext('2d');
      if (ctx) ctx.clearRect(0, 0, this.canvas2D.width, this.canvas2D.height);
      this.canvas2D.style.display = 'none';
    }

    if (this.canvasWebGL) {
      this.canvasWebGL.style.display = 'none';
    }
  }

  loop2D() {
    if (!this.isActive) return;

    if (this.currentMode === 'caosphere_vortex' && this.chaosphereEngine) {
      this.chaosphereEngine.draw();
    } else if (this.currentMode === 'ascii_sphere' && this.asciiEngine) {
      this.asciiEngine.draw();
    }

    this.animFrameId = requestAnimationFrame(() => this.loop2D());
  }

  initShaderProgram(mode) {
    const gl = this.gl;
    if (!gl) return;

    const vsSource = `
      attribute vec2 position;
      varying vec2 vUv;
      void main() {
        vUv = position * 0.5 + 0.5;
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    let fsSource = '';

    if (mode === 'balatro') {
      fsSource = `
        precision highp float;
        uniform float iTime;
        uniform vec3 iResolution;
        uniform vec2 uMouse;
        varying vec2 vUv;

        vec4 effect(vec2 screenSize, vec2 screen_coords) {
            float pixelFilter = 745.0;
            float pixel_size = length(screenSize.xy) / pixelFilter;
            vec2 uv = (floor(screen_coords.xy * (1.0 / pixel_size)) * pixel_size - 0.5 * screenSize.xy) / length(screenSize.xy);
            float uv_len = length(uv);
            
            float speed = iTime * -0.4 + 302.2 + (uMouse.x * 2.0 - 1.0) * 0.1;
            float new_pixel_angle = atan(uv.y, uv.x) + speed - 20.0 * (0.25 * uv_len + 0.75);
            vec2 mid = (screenSize.xy / length(screenSize.xy)) / 2.0;
            uv = (vec2(uv_len * cos(new_pixel_angle) + mid.x, uv_len * sin(new_pixel_angle) + mid.y) - mid);
            uv *= 30.0;
            float baseSpeed = iTime * 7.0;
            speed = baseSpeed + (uMouse.x * 2.0 - 1.0) * 2.0;
            
            vec2 uv2 = vec2(uv.x + uv.y);
            for(int i = 0; i < 5; i++) {
                uv2 += sin(max(uv.x, uv.y)) + uv;
                uv += 0.5 * vec2(cos(5.1123 + 0.353 * uv2.y + speed * 0.1311), sin(uv2.x - 0.113 * speed));
                uv -= cos(uv.x + uv.y) - sin(uv.x * 0.711 - uv.y);
            }
            
            float contrast_mod = (0.25 * 3.5 + 0.5 * 0.25 + 1.2);
            float paint_res = min(2.0, max(0.0, length(uv) * 0.035 * contrast_mod));
            float c1p = max(0.0, 1.0 - contrast_mod * abs(1.0 - paint_res));
            float c2p = max(0.0, 1.0 - contrast_mod * abs(paint_res));
            float c3p = 1.0 - min(1.0, c1p + c2p);
            
            vec4 col1 = vec4(0.85, 0.7, 0.3, 0.85); // Ouro Alquímico
            vec4 col2 = vec4(0.55, 0.58, 0.7, 0.75); // Vidro Astral
            vec4 col3 = vec4(0.05, 0.05, 0.09, 0.4);  // Vácuo Obsidiana
            
            return col1 * c1p + col2 * c2p + vec4(c3p * col3.rgb, c3p * 0.35);
        }

        void main() {
            vec2 uv = vUv * iResolution.xy;
            gl_FragColor = effect(iResolution.xy, uv);
        }
      `;
    } else if (mode === 'ferrofluid') {
      fsSource = `
        precision highp float;
        uniform vec3 iResolution;
        uniform vec2 iMouse;
        uniform float iTime;
        varying vec2 vUv;

        void main() {
          vec2 p = (gl_FragCoord.xy - 0.5 * iResolution.xy) / iResolution.y;
          float t = iTime * 0.5;
          float d = length(p);
          float angle = atan(p.y, p.x);
          
          float wave = sin(d * 22.0 - t * 4.0 + sin(angle * 6.0 + t));
          float rim = smoothstep(0.0, 0.1, abs(wave) - 0.05);
          
          vec3 col = mix(vec3(0.9, 0.75, 0.35), vec3(0.45, 0.5, 0.65), sin(t + d * 5.0) * 0.5 + 0.5);
          gl_FragColor = vec4(col * (1.0 - rim), 0.75);
        }
      `;
    } else if (mode === 'metaballs') {
      fsSource = `
        precision highp float;
        uniform vec3 iResolution;
        uniform vec2 iMouse;
        uniform float iTime;
        varying vec2 vUv;

        float getMetaBall(vec2 p, vec2 center, float r) {
          vec2 d = p - center;
          return (r * r) / dot(d, d);
        }

        void main() {
          vec2 p = (gl_FragCoord.xy - 0.5 * iResolution.xy) / iResolution.y * 30.0;
          vec2 m = (iMouse - 0.5) * 30.0;
          float t = iTime * 0.8;
          
          float mb = 0.0;
          for (int i = 0; i < 8; i++) {
            float fi = float(i);
            vec2 pos = vec2(cos(t + fi * 0.8) * 10.0, sin(t * 1.2 + fi * 0.9) * 8.0);
            mb += getMetaBall(p, pos, 2.5);
          }
          mb += getMetaBall(p, m, 3.5);
          
          float f = smoothstep(0.9, 1.1, mb);
          vec3 col = mix(vec3(0.95, 0.8, 0.4), vec3(0.5, 0.55, 0.7), mb * 0.25);
          gl_FragColor = vec4(col * f, f * 0.8);
        }
      `;
    } else if (mode === 'splashcursor') {
      fsSource = `
        precision highp float;
        uniform vec3 iResolution;
        uniform float iTime;
        uniform vec2 uMouse;
        varying vec2 vUv;

        void main() {
          vec2 p = vUv;
          vec2 m = uMouse;
          float d = length(p - m);
          float wave = sin(d * 40.0 - iTime * 6.0) * exp(-d * 5.0);
          vec3 col = mix(vec3(0.9, 0.8, 0.4), vec3(0.5, 0.6, 0.75), wave * 0.5 + 0.5);
          float alpha = max(0.0, (1.0 - d * 1.3)) * 0.8;
          gl_FragColor = vec4(col * (1.0 - d), alpha);
        }
      `;
    } else if (mode === 'prismaticburst') {
      fsSource = `
        precision highp float;
        uniform vec3 iResolution;
        uniform float iTime;
        uniform vec2 uMouse;
        varying vec2 vUv;

        void main() {
          vec2 p = (gl_FragCoord.xy - 0.5 * iResolution.xy) / iResolution.y;
          float t = iTime * 0.8;
          float angle = atan(p.y, p.x);
          float dist = length(p);
          
          float rays = sin(angle * 16.0 + t) * sin(dist * 20.0 - t * 2.0);
          vec3 col = mix(vec3(0.95, 0.85, 0.4), vec3(0.5, 0.6, 0.75), rays * 0.5 + 0.5);
          float mask = smoothstep(0.8, 0.0, dist);
          gl_FragColor = vec4(col * mask, mask * 0.85);
        }
      `;
    } else if (mode === 'aurora') {
      fsSource = `
        precision highp float;
        uniform vec3 iResolution;
        uniform float iTime;
        uniform vec2 uMouse;
        varying vec2 vUv;

        void main() {
          vec2 p = (gl_FragCoord.xy - 0.5 * iResolution.xy) / iResolution.y;
          float t = iTime * 0.4;
          vec3 col = vec3(0.0);
          for (float i = 1.0; i < 4.0; i++) {
            float wave = sin(p.x * 3.0 * i + t * 1.5 + sin(p.y * 2.0 + t)) * 0.25;
            float dist = abs(p.y - wave);
            float glow = 0.04 / (dist + 0.02);
            vec3 ribbon = mix(vec3(0.3, 0.8, 0.9), vec3(0.7, 0.3, 0.9), sin(t + i) * 0.5 + 0.5);
            col += ribbon * glow * 0.4;
          }
          gl_FragColor = vec4(col, clamp(length(col) * 0.8, 0.0, 0.85));
        }
      `;
    } else if (mode === 'liquidether') {
      fsSource = `
        precision highp float;
        uniform vec3 iResolution;
        uniform float iTime;
        uniform vec2 uMouse;
        varying vec2 vUv;

        void main() {
          vec2 p = (gl_FragCoord.xy - 0.5 * iResolution.xy) / iResolution.y * 3.0;
          float t = iTime * 0.3;
          for (int i = 1; i < 5; i++) {
            float fi = float(i);
            p.x += 0.3 / fi * sin(fi * 2.0 * p.y + t + fi);
            p.y += 0.3 / fi * cos(fi * 2.0 * p.x + t + fi);
          }
          float d = sin(p.x) * cos(p.y);
          vec3 col = mix(vec3(0.9, 0.92, 1.0), vec3(0.4, 0.5, 0.65), d * 0.5 + 0.5);
          gl_FragColor = vec4(col * (d * 0.5 + 0.5), 0.7);
        }
      `;
    } else if (mode === 'darkveil') {
      fsSource = `
        precision highp float;
        uniform vec3 iResolution;
        uniform float iTime;
        uniform vec2 uMouse;
        varying vec2 vUv;

        void main() {
          vec2 p = (gl_FragCoord.xy - 0.5 * iResolution.xy) / iResolution.y * 2.5;
          float t = iTime * 0.35;
          float v = sin(p.x * 2.0 + t) + cos(p.y * 2.0 - t);
          v += sin(length(p) * 4.0 - t * 2.0);
          float mask = smoothstep(-1.5, 1.5, v);
          vec3 col = mix(vec3(0.02, 0.02, 0.05), vec3(0.7, 0.75, 0.85), mask);
          gl_FragColor = vec4(col, mask * 0.75);
        }
      `;
    } else if (mode === 'lighttunnel') {
      fsSource = `
        precision highp float;
        uniform vec3 iResolution;
        uniform float iTime;
        uniform vec2 uMouse;
        varying vec2 vUv;

        void main() {
          vec2 p = (gl_FragCoord.xy - 0.5 * iResolution.xy) / iResolution.y;
          float a = atan(p.y, p.x);
          float r = length(p);
          float t = iTime * 0.8;
          vec2 uv = vec2(0.2 / r + t, a / 3.14159265);
          float pattern = sin(uv.x * 12.0) * sin(uv.y * 8.0);
          float fade = smoothstep(0.0, 0.5, r);
          vec3 col = mix(vec3(0.95, 0.95, 1.0), vec3(0.5, 0.55, 0.7), pattern * 0.5 + 0.5);
          gl_FragColor = vec4(col * fade, fade * 0.8);
        }
      `;
    } else if (mode === 'galaxybits') {
      fsSource = `
        precision highp float;
        uniform vec3 iResolution;
        uniform float iTime;
        uniform vec2 uMouse;
        varying vec2 vUv;

        void main() {
          vec2 p = (gl_FragCoord.xy - 0.5 * iResolution.xy) / iResolution.y * 4.0;
          float t = iTime * 0.25;
          float grid = sin(p.x * 6.0 + sin(p.y * 3.0 + t)) * cos(p.y * 6.0 + cos(p.x * 3.0 - t));
          float d = length(p);
          float glow = 1.0 / (d * 1.5 + 0.5);
          vec3 col = mix(vec3(0.85, 0.9, 1.0), vec3(0.3, 0.4, 0.6), grid * 0.5 + 0.5) * glow;
          gl_FragColor = vec4(col, clamp(length(col) * 0.7, 0.0, 0.8));
        }
      `;
    } else if (mode === 'ghostfibers') {
      fsSource = `
        precision highp float;
        uniform vec3 iResolution;
        uniform float iTime;
        uniform vec2 uMouse;
        varying vec2 vUv;

        void main() {
          vec2 p = (gl_FragCoord.xy - 0.5 * iResolution.xy) / iResolution.y;
          float t = iTime * 0.5;
          float fiber = sin(p.x * 20.0 + sin(p.y * 10.0 + t) * 4.0);
          fiber *= sin(p.y * 18.0 + cos(p.x * 8.0 - t) * 3.0);
          float mask = smoothstep(0.0, 0.8, abs(fiber));
          vec3 col = mix(vec3(0.95, 0.98, 1.0), vec3(0.4, 0.45, 0.55), mask);
          gl_FragColor = vec4(col * (1.0 - mask), (1.0 - mask) * 0.75);
        }
      `;
    } else { // plasma
      fsSource = `
        precision highp float;
        uniform vec3 iResolution;
        uniform float iTime;
        uniform vec2 uMouse;
        varying vec2 vUv;

        void main() {
          vec2 p = (gl_FragCoord.xy - 0.5 * iResolution.xy) / iResolution.y;
          float t = iTime * 0.6;
          
          float v1 = sin(p.x * 10.0 + t);
          float v2 = sin(10.0 * (p.x * sin(t / 2.0) + p.y * cos(t / 3.0)) + t);
          float cx = p.x + 0.5 * sin(t / 5.0);
          float cy = p.y + 0.5 * cos(t / 3.0);
          float v3 = sin(sqrt(100.0 * (cx * cx + cy * cy) + 1.0) + t);
          
          float v = v1 + v2 + v3;
          vec3 col = vec3(sin(v * 3.14159), cos(v * 3.14159), -sin(v * 3.14159));
          col = col * 0.5 + 0.5;
          col = mix(vec3(0.9, 0.75, 0.35), vec3(0.4, 0.5, 0.7), col.r);
          gl_FragColor = vec4(col, 0.8);
        }
      `;
    }

    const vs = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vs, vsSource);
    gl.compileShader(vs);

    const fs = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fs, fsSource);
    gl.compileShader(fs);

    this.program = gl.createProgram();
    gl.attachShader(this.program, vs);
    gl.attachShader(this.program, fs);
    gl.linkProgram(this.program);
    gl.useProgram(this.program);

    const vertices = new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const posAttr = gl.getAttribLocation(this.program, 'position');
    gl.enableVertexAttribArray(posAttr);
    gl.vertexAttribPointer(posAttr, 2, gl.FLOAT, false, 0, 0);
  }

  loopWebGL() {
    if (!this.isActive || !this.gl || !this.program) return;
    const gl = this.gl;
    const elapsed = (performance.now() - this.startTime) * 0.001;

    gl.useProgram(this.program);

    const timeLoc = gl.getUniformLocation(this.program, 'iTime');
    if (timeLoc) gl.uniform1f(timeLoc, elapsed);

    const resLoc = gl.getUniformLocation(this.program, 'iResolution');
    if (resLoc) gl.uniform3f(resLoc, this.canvasWebGL.width, this.canvasWebGL.height, 1.0);

    const mouseLoc = gl.getUniformLocation(this.program, 'uMouse');
    if (mouseLoc) gl.uniform2f(mouseLoc, this.mousePos[0], this.mousePos[1]);

    const iMouseLoc = gl.getUniformLocation(this.program, 'iMouse');
    if (iMouseLoc) gl.uniform2f(iMouseLoc, this.mousePos[0] * this.canvasWebGL.width, this.mousePos[1] * this.canvasWebGL.height);

    gl.drawArrays(gl.TRIANGLES, 0, 6);

    this.animFrameId = requestAnimationFrame(() => this.loopWebGL());
  }
}

window.HypnoticStageEngine = HypnoticStageEngine;
