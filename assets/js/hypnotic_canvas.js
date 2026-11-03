/* ==========================================================================
   SANCKTUM ALKTAR - HYPNOTIC CANVAS SHADER ENGINE
   Liquid Glass & Sacred Ethereal Magic (No Neon Colors, Pure Obsidian Glass)
   ========================================================================== */

class HypnoticStageEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.gl = this.canvas.getContext('webgl', { alpha: true, antialias: true, premultipliedAlpha: false });
    this.program = null;
    this.animFrameId = null;
    this.startTime = performance.now();
    this.currentMode = 'balatro';
    this.mousePos = [0.5, 0.5];
    this.isActiveView = true;

    this.initCanvas();
  }

  initCanvas() {
    if (!this.gl) return;
    this.resize();
    window.addEventListener('resize', () => this.resize());

    const updateMouse = (clientX, clientY) => {
      const rect = this.canvas.getBoundingClientRect();
      const x = (clientX - rect.left) / (rect.width || 1);
      const y = 1.0 - (clientY - rect.top) / (rect.height || 1);
      this.mousePos = [Math.max(0, Math.min(1, x)), Math.max(0, Math.min(1, y))];
    };

    window.addEventListener('mousemove', (e) => updateMouse(e.clientX, e.clientY));
    window.addEventListener('touchmove', (e) => {
      if (e.touches.length > 0) updateMouse(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: true });
  }

  resize() {
    if (!this.canvas || !this.gl) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const w = Math.floor((this.canvas.clientWidth || window.innerWidth) * dpr);
    const h = Math.floor((this.canvas.clientHeight || window.innerHeight) * dpr);
    if (this.canvas.width !== w || this.canvas.height !== h) {
      this.canvas.width = w;
      this.canvas.height = h;
      this.gl.viewport(0, 0, w, h);
    }
  }

  start(mode = 'balatro') {
    this.currentMode = mode;
    this.stop();
    this.resize();
    this.initShaderProgram(mode);
    this.startTime = performance.now();
    this.loop();
  }

  stop() {
    if (this.animFrameId) {
      cancelAnimationFrame(this.animFrameId);
      this.animFrameId = null;
    }
    if (this.gl) {
      this.gl.clearColor(0, 0, 0, 0);
      this.gl.clear(this.gl.COLOR_BUFFER_BIT);
    }
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
      // Ethereal Mist & Liquid Silver Glass Balatro
      fsSource = `
        precision highp float;
        uniform float iTime;
        uniform vec3 iResolution;
        uniform vec2 uMouse;
        varying vec2 vUv;

        vec4 effect(vec2 screenSize, vec2 screen_coords) {
            float pixelFilter = 800.0;
            float pixel_size = length(screenSize.xy) / pixelFilter;
            vec2 uv = (floor(screen_coords.xy * (1.0 / pixel_size)) * pixel_size - 0.5 * screenSize.xy) / length(screenSize.xy);
            float uv_len = length(uv);
            
            float speed = iTime * -0.3 + 302.2 + (uMouse.x * 2.0 - 1.0) * 0.1;
            float new_pixel_angle = atan(uv.y, uv.x) + speed - 16.0 * (0.25 * uv_len + 0.75);
            vec2 mid = (screenSize.xy / length(screenSize.xy)) / 2.0;
            uv = (vec2(uv_len * cos(new_pixel_angle) + mid.x, uv_len * sin(new_pixel_angle) + mid.y) - mid);
            uv *= 26.0;
            float baseSpeed = iTime * 4.0;
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
            
            // Sacred Liquid Glass Palette: Obsidian, Astral Silver, Pure Moonlight
            vec4 col1 = vec4(0.92, 0.94, 0.98, 0.85); // Prata Alabastro
            vec4 col2 = vec4(0.55, 0.58, 0.68, 0.65); // Vidro Fumê Esmaltado
            vec4 col3 = vec4(0.05, 0.05, 0.08, 0.4);  // Vácuo Obsidiana
            
            return col1 * c1p + col2 * c2p + vec4(c3p * col3.rgb, c3p * 0.3);
        }

        void main() {
            vec2 uv = vUv * iResolution.xy;
            gl_FragColor = effect(iResolution.xy, uv);
        }
      `;
    } else if (mode === 'ferrofluid') {
      // Magnetic Obsidian & Astral Mercury Ripples
      fsSource = `
        precision highp float;
        uniform vec3 iResolution;
        uniform vec2 iMouse;
        uniform float iTime;
        varying vec2 vUv;

        void main() {
          vec2 p = (gl_FragCoord.xy - 0.5 * iResolution.xy) / iResolution.y;
          float t = iTime * 0.45;
          float d = length(p);
          float angle = atan(p.y, p.x);
          
          float wave = sin(d * 18.0 - t * 3.0 + sin(angle * 6.0 + t));
          float rim = smoothstep(0.0, 0.08, abs(wave) - 0.04);
          
          // Ethereal Monochrome Glass
          vec3 col = mix(vec3(0.95, 0.96, 1.0), vec3(0.4, 0.45, 0.55), sin(t + d * 4.0) * 0.5 + 0.5);
          float alpha = (1.0 - rim) * 0.75;
          gl_FragColor = vec4(col * (1.0 - rim), alpha);
        }
      `;
    } else if (mode === 'metaballs') {
      // Mercury Liquid Glass Droplets
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
          vec2 p = (gl_FragCoord.xy - 0.5 * iResolution.xy) / iResolution.y * 28.0;
          vec2 m = (iMouse - 0.5) * 28.0;
          float t = iTime * 0.7;
          
          float mb = 0.0;
          for (int i = 0; i < 7; i++) {
            float fi = float(i);
            vec2 pos = vec2(cos(t + fi * 0.8) * 9.0, sin(t * 1.1 + fi * 0.9) * 7.0);
            mb += getMetaBall(p, pos, 2.4);
          }
          mb += getMetaBall(p, m, 3.2);
          
          float f = smoothstep(0.9, 1.15, mb);
          vec3 col = mix(vec3(0.98, 0.98, 1.0), vec3(0.45, 0.48, 0.58), mb * 0.2);
          gl_FragColor = vec4(col * f, f * 0.75);
        }
      `;
    } else if (mode === 'splashcursor') {
      // Subtle Sacred Water Dispersion
      fsSource = `
        precision highp float;
        uniform vec2 iResolution;
        uniform float iTime;
        uniform vec2 uMouse;
        varying vec2 vUv;

        void main() {
          vec2 p = vUv;
          vec2 m = uMouse;
          float d = length(p - m);
          float wave = sin(d * 32.0 - iTime * 4.5) * exp(-d * 4.0);
          vec3 col = mix(vec3(1.0, 1.0, 1.0), vec3(0.5, 0.55, 0.65), wave * 0.5 + 0.5);
          float alpha = max(0.0, (1.0 - d * 1.4)) * 0.7;
          gl_FragColor = vec4(col * (1.0 - d * 0.8), alpha);
        }
      `;
    } else if (mode === 'prismaticburst') {
      // Crystalline Radiance
      fsSource = `
        precision highp float;
        uniform vec2 iResolution;
        uniform float iTime;
        uniform vec2 uMouse;
        varying vec2 vUv;

        void main() {
          vec2 p = (gl_FragCoord.xy - 0.5 * iResolution.xy) / iResolution.y;
          float t = iTime * 0.6;
          float angle = atan(p.y, p.x);
          float dist = length(p);
          
          float rays = sin(angle * 12.0 + t) * sin(dist * 16.0 - t * 1.8);
          vec3 col = mix(vec3(0.95, 0.98, 1.0), vec3(0.6, 0.65, 0.75), rays * 0.5 + 0.5);
          float mask = smoothstep(0.7, 0.0, dist);
          gl_FragColor = vec4(col * mask, mask * 0.7);
        }
      `;
    } else { // plasma - Sacred Ethereal Mist
      fsSource = `
        precision highp float;
        uniform vec2 iResolution;
        uniform float iTime;
        uniform vec2 uMouse;
        varying vec2 vUv;

        void main() {
          vec2 p = (gl_FragCoord.xy - 0.5 * iResolution.xy) / iResolution.y;
          float t = iTime * 0.45;
          
          float v1 = sin(p.x * 8.0 + t);
          float v2 = sin(8.0 * (p.x * sin(t / 2.0) + p.y * cos(t / 3.0)) + t);
          float cx = p.x + 0.5 * sin(t / 5.0);
          float cy = p.y + 0.5 * cos(t / 3.0);
          float v3 = sin(sqrt(64.0 * (cx * cx + cy * cy) + 1.0) + t);
          
          float v = (v1 + v2 + v3) / 3.0;
          float lum = smoothstep(-1.0, 1.0, v);
          vec3 col = mix(vec3(0.1, 0.12, 0.18), vec3(0.95, 0.98, 1.0), lum);
          
          gl_FragColor = vec4(col, 0.65);
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

  loop() {
    if (!this.gl || !this.program) return;
    const gl = this.gl;
    const elapsed = (performance.now() - this.startTime) * 0.001;

    gl.useProgram(this.program);

    const timeLoc = gl.getUniformLocation(this.program, 'iTime');
    if (timeLoc) gl.uniform1f(timeLoc, elapsed);

    const resLoc = gl.getUniformLocation(this.program, 'iResolution');
    if (resLoc) gl.uniform3f(resLoc, this.canvas.width, this.canvas.height, 1.0);

    const mouseLoc = gl.getUniformLocation(this.program, 'uMouse');
    if (mouseLoc) gl.uniform2f(mouseLoc, this.mousePos[0], this.mousePos[1]);

    const iMouseLoc = gl.getUniformLocation(this.program, 'iMouse');
    if (iMouseLoc) gl.uniform2f(iMouseLoc, this.mousePos[0] * this.canvas.width, this.mousePos[1] * this.canvas.height);

    gl.drawArrays(gl.TRIANGLES, 0, 6);

    this.animFrameId = requestAnimationFrame(() => this.loop());
  }
}

window.HypnoticStageEngine = HypnoticStageEngine;
