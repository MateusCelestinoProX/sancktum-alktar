# Graph Report - sancktum-alktar  (2026-11-03)

## Corpus Check
- 12 files · ~785,262 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 766 nodes · 2141 edges · 67 communities (43 shown, 23 thin omitted)
- Extraction: 95% EXTRACTED · 5% INFERRED · 0% AMBIGUOUS · INFERRED: 111 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `ca3c3f23`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- v2
- prefixed
- tailwindcss.js
- gsap.min.js
- stringify
- push
- r
- sort
- remove
- decl
- constructor
- cb
- .walk
- r
- BackgroundEngine
- process
- SigilChargerEngine
- oldWebkit
- Ht
- error
- _deleteIfExpired
- t
- _d
- Ub
- replace
- package.json
- HypnoticStageEngine
- ja
- convertDirection
- qr
- $p
- SANCKTUM ALKTAR
- vercel.json
- AmbientSoundEngine
- AlchemicalColorEngine
- ul
- k2
- Vb
- Ak
- async
- Sh
- ES
- Pa
- Gy
- ja
- bo
- checkMissedSemicolon
- cm
- gk
- hk
- gR
- ro
- I2
- Ma
- mS
- Ba
- bk
- Ck
- nS
- mg
- Ph
- qa
- sS
- Vn
- OC
- zk

## God Nodes (most connected - your core abstractions)
1. `push()` - 67 edges
2. `add()` - 63 edges
3. `replace()` - 47 edges
4. `has()` - 40 edges
5. `remove()` - 40 edges
6. `get()` - 37 edges
7. `clone()` - 30 edges
8. `some()` - 28 edges
9. `i()` - 27 edges
10. `t()` - 25 edges

## Surprising Connections (you probably didn't know these)
- `append()` --indirect_call--> `t()`  [INFERRED]
  assets/js/vendor/tailwindcss.js → assets/js/vendor/gsap.min.js
- `decl()` --indirect_call--> `t()`  [INFERRED]
  assets/js/vendor/tailwindcss.js → assets/js/vendor/gsap.min.js
- `i()` --indirect_call--> `t()`  [INFERRED]
  assets/js/vendor/tailwindcss.js → assets/js/vendor/gsap.min.js
- `E()` --indirect_call--> `t()`  [INFERRED]
  assets/js/vendor/tailwindcss.js → assets/js/vendor/gsap.min.js
- `gk()` --indirect_call--> `t()`  [INFERRED]
  assets/js/vendor/tailwindcss.js → assets/js/vendor/gsap.min.js

## Import Cycles
- None detected.

## Communities (67 total, 23 thin omitted)

### Community 0 - "v2"
Cohesion: 0.14
Nodes (14): aa(), ac(), b2(), bx(), Cl(), nn(), ol(), Sg() (+6 more)

### Community 1 - "prefixed"
Cohesion: 0.23
Nodes (12): check(), isHack(), isStretch(), _moveToRecent(), old(), prefixed(), prefixer(), regexp() (+4 more)

### Community 2 - "tailwindcss.js"
Cohesion: 0.03
Nodes (23): applyParallelOffset(), Bh(), c(), clear(), cloneAfter(), displayType(), Hf(), isAlready() (+15 more)

### Community 3 - "gsap.min.js"
Cohesion: 0.06
Nodes (16): Kd(), la(), Ld(), ma(), Md(), na(), Od(), Q() (+8 more)

### Community 4 - "stringify"
Cohesion: 0.10
Nodes (30): ca(), clean(), content(), css(), div(), dp(), Eh(), getAsyncError() (+22 more)

### Community 5 - "push"
Cohesion: 0.06
Nodes (107): ee(), Jd(), _a(), add(), l(), o(), already(), arbitraryProperty() (+99 more)

### Community 6 - "r"
Cohesion: 0.07
Nodes (44): _2(), Ae(), ax(), Bf(), cx(), dx(), ec(), every() (+36 more)

### Community 7 - "sort"
Cohesion: 0.15
Nodes (14): applyVariantOffset(), compare(), dm(), eE(), hm(), Lh(), qh(), QS() (+6 more)

### Community 8 - "remove"
Cohesion: 0.06
Nodes (58): after(), append(), BC(), before(), beforeAfter(), block(), body(), calcBefore() (+50 more)

### Community 9 - "decl"
Cohesion: 0.10
Nodes (28): An(), atrule(), comment(), decl(), emptyRule(), end(), endFile(), freeSemicolon() (+20 more)

### Community 10 - "constructor"
Cohesion: 0.20
Nodes (12): constructor(), createTokenizer(), da(), mapResolve(), positionBy(), positionInside(), possible(), prefixeds() (+4 more)

### Community 11 - "cb"
Cohesion: 0.29
Nodes (7): Ab(), Bb(), cb(), Context(), Ew(), fb(), zb()

### Community 12 - ".walk"
Cohesion: 0.17
Nodes (11): addToError(), Nt(), rawBeforeClose(), rawBeforeComment(), rawBeforeOpen(), rawBeforeRule(), rawEmptyBody(), rawIndent() (+3 more)

### Community 13 - "r"
Cohesion: 0.15
Nodes (20): _a(), ac(), Bo(), db(), ea(), eb(), ga(), gb() (+12 more)

### Community 15 - "process"
Cohesion: 0.15
Nodes (14): Cc(), cleanBrackets(), group(), normalize(), normalizeUnit(), otherPrefixes(), parentPrefix(), prefixes() (+6 more)

### Community 17 - "oldWebkit"
Cohesion: 0.67
Nodes (4): cloneDiv(), colorStops(), oldDirection(), oldWebkit()

### Community 18 - "Ht"
Cohesion: 0.67
Nodes (3): go(), Ht(), sr()

### Community 19 - "error"
Cohesion: 0.13
Nodes (18): ao(), cy(), Dl(), dy(), error(), fromOffset(), fy(), G2() (+10 more)

### Community 20 - "_deleteIfExpired"
Cohesion: 0.29
Nodes (7): _deleteIfExpired(), _emitEvictions(), _entriesAscending(), entriesDescending(), _getOrDeleteIfExpired(), resize(), [Symbol.iterator]()

### Community 21 - "t"
Cohesion: 0.15
Nodes (17): _assertThisInitialized(), Ec(), Fc(), gc(), ka(), qa(), t(), tb() (+9 more)

### Community 22 - "_d"
Cohesion: 0.29
Nodes (10): be(), _d(), fa(), ia(), ie(), je(), ke(), le() (+2 more)

### Community 24 - "replace"
Cohesion: 0.27
Nodes (11): $d(), Jn(), Md(), rawBeforeDecl(), rawColon(), replace(), replaceValues(), walkDecls() (+3 more)

### Community 25 - "package.json"
Cohesion: 0.22
Nodes (8): author, description, keywords, license, name, scripts, dev, version

### Community 26 - "HypnoticStageEngine"
Cohesion: 0.17
Nodes (3): AsciiSphereEngine, ChaosphereParticleEngine, HypnoticStageEngine

### Community 27 - "ja"
Cohesion: 0.28
Nodes (9): Aa(), Animation(), ha(), ja(), Jc(), Lc(), Ra(), Sa() (+1 more)

### Community 28 - "convertDirection"
Cohesion: 0.25
Nodes (8): convertDirection(), fixAngle(), fixDirection(), fixRadial(), isRadial(), newDirection(), revertDirection(), roundFloat()

### Community 29 - "qr"
Cohesion: 0.33
Nodes (6): blueGray(), coolGray(), lightBlue(), qr(), trueGray(), warmGray()

### Community 30 - "$p"
Cohesion: 0.33
Nodes (6): hh(), Kn(), $p(), V1(), Xn(), z1()

### Community 31 - "SANCKTUM ALKTAR"
Cohesion: 0.33
Nodes (5): Deploy na Vercel, Estrutura do Projeto, Estética Sagrada, SANCKTUM ALKTAR, Sigilo Central

### Community 32 - "vercel.json"
Cohesion: 0.29
Nodes (6): cleanUrls, headers, outputDirectory, rewrites, $schema, trailingSlash

### Community 35 - "ul"
Cohesion: 0.29
Nodes (8): br(), comma(), ly(), mt(), pm(), ul(), uy(), zl()

### Community 36 - "k2"
Cohesion: 0.33
Nodes (6): Ig(), k2(), Ne(), qg(), Rl(), Y2()

### Community 39 - "async"
Cohesion: 0.67
Nodes (4): async(), catch(), finally(), then()

### Community 40 - "Sh"
Cohesion: 0.70
Nodes (5): Ah(), g_(), jo(), Sh(), y_()

### Community 42 - "Pa"
Cohesion: 0.67
Nodes (3): OA(), Pa(), wk()

### Community 44 - "ja"
Cohesion: 0.67
Nodes (3): bd(), ja(), Jk()

### Community 45 - "bo"
Cohesion: 0.67
Nodes (3): bo(), TC(), Ue()

### Community 46 - "checkMissedSemicolon"
Cohesion: 0.67
Nodes (3): checkMissedSemicolon(), colon(), doubleColon()

### Community 47 - "cm"
Cohesion: 0.67
Nodes (3): cm(), mm(), rE()

### Community 48 - "gk"
Cohesion: 0.67
Nodes (3): gk(), Np(), yk()

### Community 50 - "gR"
Cohesion: 1.00
Nodes (3): gR(), M0(), Yu()

### Community 51 - "ro"
Cohesion: 0.67
Nodes (3): LS(), ro(), To()

### Community 59 - "mg"
Cohesion: 0.40
Nodes (5): c2(), f2(), gg(), mg(), nm()

## Knowledge Gaps
- **17 isolated node(s):** `name`, `version`, `description`, `dev`, `keywords` (+12 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 109 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **23 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `t()` connect `t` to `prefixed`, `tailwindcss.js`, `gsap.min.js`, `stringify`, `push`, `r`, `zk`, `remove`, `decl`, `cb`, `r`, `process`, `gk`?**
  _High betweenness centrality (0.161) - this node is a cross-community bridge._
- **Why does `dr()` connect `push` to `tailwindcss.js`, `gsap.min.js`, `remove`, `_d`, `replace`?**
  _High betweenness centrality (0.018) - this node is a cross-community bridge._
- **Why does `J()` connect `push` to `tailwindcss.js`, `r`?**
  _High betweenness centrality (0.010) - this node is a cross-community bridge._
- **Are the 4 inferred relationships involving `add()` (e.g. with `l()` and `i()`) actually correct?**
  _`add()` has 4 INFERRED edges - model-reasoned connections that need verification._
- **What connects `name`, `version`, `description` to the rest of the system?**
  _17 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `v2` be split into smaller, more focused modules?**
  _Cohesion score 0.14285714285714285 - nodes in this community are weakly interconnected._
- **Should `tailwindcss.js` be split into smaller, more focused modules?**
  _Cohesion score 0.02666666666666667 - nodes in this community are weakly interconnected._