# SANCKTUM ALKTAR

> Altar Digital & Energizador de Sigilos em Puro Vidro e Magia.

Hospedado na **Vercel**, **SANCKTUM ALKTAR** é uma versão minimalista e cinematográfica clonada e purificada da base do MAGICK AI. O sistema removeu toda sobrecarga oracular e manteve com precisão cirúrgica apenas dois motores essenciais:

1. **Engine de Backgrounds Dinâmicos**: Transições cinematográficas de 3 segundos em camadas A/B com suporte a categorias (Caosfera, Celestial, Abissal, Arcano), escurecimento e desfoque óptico ajustáveis.
2. **Sistema Energizador de Sigilos**: Suporte a shaders WebGL de transe e portais hipnóticos com purificação automática de imagem por contraste luminoso.

---

## Estética Sagrada

- **Sem Emojis**: Tipografia e ícones estritamente geométricos e minimalistas.
- **Sem Cores Neon**: Paleta construída em vidro obsidiana, prata lunar, alabastro e reflexos etéreos translúcidos.
- **Apenas Vidro e Magia**: Blur líquido, anéis de refração e halo sagrado no centro da tela.
- **Hero Cinemático**: Na inicialização ou recarga da página, o nome *SANCKTUM ALKTAR* surge com luminescência sagrada e dissolve suavemente, revelando o Altar com o sigilo central.

---

## Sigilo Central

O sigilo central do Altar foi vetorizado e extraído em altíssima definição (PNG Alpha Transparente 4x e SVG) a partir da arte original do portal, posicionado no ponto focal do altar para meditação, foco e energização de gnose.

---

## Estrutura do Projeto

```
sancktum-alktar/
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── data/
│   │   └── backgrounds.json
│   ├── images/
│   │   └── sigils/
│   │       ├── sancktum_alktar_sigil.png
│   │       ├── sancktum_alktar_sigil.svg
│   │       └── sancktum_alktar_original.png
│   └── js/
│       ├── background_engine.js
│       ├── hypnotic_canvas.js
│       └── sigil_charger.js
├── backgrounds/
│   ├── caosphere/
│   ├── celestial/
│   ├── horror/
│   └── satanic/
├── index.html
├── package.json
└── vercel.json
```

---

## Deploy na Vercel

O projeto está pronto para deploy instantâneo na Vercel:
- Rotas limpas configuradas via `vercel.json`.
- Cabeçalhos de cache estático com expiração longa para assets e backgrounds.
