# Graph Report - sancktum-alktar  (2026-11-06)

## Corpus Check
- 23 files · ~798,344 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 807 nodes · 2170 edges · 75 communities (43 shown, 25 thin omitted)
- Extraction: 95% EXTRACTED · 5% INFERRED · 0% AMBIGUOUS · INFERRED: 111 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `548e68ce`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- has
- ExampleInstrumentedTest.java
- tailwindcss.js
- gsap.min.js
- stringify
- ul
- K
- i
- push
- decl
- oldWebkit
- cb
- MainActivity.java
- r
- BackgroundEngine
- Ub
- SigilChargerEngine
- Ak
- Ht
- ao
- _entriesAscending
- Tween
- _d
- .walk
- aa
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
- Ba
- k2
- Vb
- sort
- async
- Sh
- bk
- gradlew
- Ck
- ja
- bo
- checkMissedSemicolon
- cm
- gk
- ka
- gR
- ro
- xe
- ES
- gg
- xt
- prefixQuery
- Gy
- Ma
- mS
- calcBefore
- nS
- OC
- Ph
- qa
- Rf
- sS
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
- `gk()` --indirect_call--> `t()`  [INFERRED]
  assets/js/vendor/tailwindcss.js → assets/js/vendor/gsap.min.js
- `normalize()` --indirect_call--> `t()`  [INFERRED]
  assets/js/vendor/tailwindcss.js → assets/js/vendor/gsap.min.js
- `prepend()` --indirect_call--> `t()`  [INFERRED]
  assets/js/vendor/tailwindcss.js → assets/js/vendor/gsap.min.js

## Import Cycles
- None detected.

## Communities (75 total, 25 thin omitted)

### Community 0 - "has"
Cohesion: 0.06
Nodes (51): _2(), b2(), ca(), Cl(), cs(), DC(), delete(), _deleteIfExpired() (+43 more)

### Community 1 - "ExampleInstrumentedTest.java"
Cohesion: 0.33
Nodes (5): ExampleInstrumentedTest, ExampleUnitTest, androidx.test.ext.junit.runners.AndroidJUnit4, org.junit.runner.RunWith, org.junit.Test

### Community 2 - "tailwindcss.js"
Cohesion: 0.03
Nodes (24): Cc(), cleanBrackets(), clear(), cloneAfter(), contain3d(), displayType(), H5(), isAlready() (+16 more)

### Community 3 - "gsap.min.js"
Cohesion: 0.06
Nodes (15): Ec(), Fc(), Jd(), Kd(), la(), Ld(), ma(), Md() (+7 more)

### Community 4 - "stringify"
Cohesion: 0.11
Nodes (28): content(), css(), dp(), Eh(), getAsyncError(), getIterator(), getProxyProcessor(), handleError() (+20 more)

### Community 5 - "ul"
Cohesion: 0.40
Nodes (6): br(), ly(), pm(), ul(), uy(), zl()

### Community 6 - "K"
Cohesion: 0.11
Nodes (31): _a(), Ae(), applyParallelOffset(), ax(), Bf(), en(), every(), ex() (+23 more)

### Community 7 - "i"
Cohesion: 0.05
Nodes (71): ee(), t(), y(), l(), o(), arbitraryProperty(), B(), Bh() (+63 more)

### Community 8 - "push"
Cohesion: 0.05
Nodes (105): add(), after(), already(), append(), as(), au(), BC(), before() (+97 more)

### Community 9 - "decl"
Cohesion: 0.08
Nodes (39): An(), atrule(), beforeAfter(), block(), body(), comment(), decl(), document() (+31 more)

### Community 10 - "oldWebkit"
Cohesion: 0.67
Nodes (4): cloneDiv(), colorStops(), oldDirection(), oldWebkit()

### Community 11 - "cb"
Cohesion: 0.29
Nodes (7): Ab(), Bb(), cb(), Context(), Ew(), fb(), zb()

### Community 12 - "MainActivity.java"
Cohesion: 0.47
Nodes (4): MainActivity, android.os.Bundle, com.getcapacitor.BridgeActivity, Override

### Community 13 - "r"
Cohesion: 0.16
Nodes (19): _a(), ac(), Bo(), db(), ea(), eb(), ga(), gb() (+11 more)

### Community 18 - "Ht"
Cohesion: 0.67
Nodes (3): go(), Ht(), sr()

### Community 20 - "_entriesAscending"
Cohesion: 0.67
Nodes (3): _emitEvictions(), _entriesAscending(), resize()

### Community 21 - "Tween"
Cohesion: 0.27
Nodes (10): _assertThisInitialized(), gc(), qa(), Timeline(), Tween(), ua(), va(), w() (+2 more)

### Community 22 - "_d"
Cohesion: 0.29
Nodes (10): be(), _d(), fa(), ia(), ie(), je(), ke(), le() (+2 more)

### Community 23 - ".walk"
Cohesion: 0.08
Nodes (30): addToError(), cy(), Dl(), dy(), error(), fromOffset(), fy(), G2() (+22 more)

### Community 24 - "aa"
Cohesion: 0.40
Nodes (5): aa(), ac(), bx(), sn(), wx()

### Community 25 - "package.json"
Cohesion: 0.08
Nodes (24): author, dependencies, @capacitor/android, @capacitor/app, @capacitor/cli, @capacitor/core, @capacitor/splash-screen, @capacitor/status-bar (+16 more)

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

### Community 36 - "k2"
Cohesion: 0.33
Nodes (6): Ig(), k2(), Ne(), qg(), Rl(), Y2()

### Community 38 - "sort"
Cohesion: 0.11
Nodes (19): applyVariantOffset(), compare(), dm(), eE(), hm(), Lh(), otherPrefixes(), parentPrefix() (+11 more)

### Community 39 - "async"
Cohesion: 0.67
Nodes (4): async(), catch(), finally(), then()

### Community 40 - "Sh"
Cohesion: 0.70
Nodes (5): Ah(), g_(), jo(), Sh(), y_()

### Community 42 - "gradlew"
Cohesion: 0.83
Nodes (3): gradlew script, die(), warn()

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

### Community 49 - "ka"
Cohesion: 0.50
Nodes (4): ka(), tb(), xa(), za()

### Community 50 - "gR"
Cohesion: 1.00
Nodes (3): gR(), M0(), Yu()

### Community 51 - "ro"
Cohesion: 0.67
Nodes (3): LS(), ro(), To()

### Community 52 - "xe"
Cohesion: 0.50
Nodes (4): Ud(), vd(), we(), xe()

### Community 56 - "prefixQuery"
Cohesion: 0.50
Nodes (4): clean(), div(), prefixName(), prefixQuery()

## Knowledge Gaps
- **32 isolated node(s):** `name`, `version`, `description`, `dev`, `build` (+27 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 142 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **25 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `t()` connect `i` to `tailwindcss.js`, `gsap.min.js`, `stringify`, `K`, `push`, `decl`, `zk`, `cb`, `r`, `gk`, `ka`, `Tween`?**
  _High betweenness centrality (0.145) - this node is a cross-community bridge._
- **Why does `dr()` connect `i` to `tailwindcss.js`, `gsap.min.js`, `push`, `xe`, `_d`?**
  _High betweenness centrality (0.016) - this node is a cross-community bridge._
- **Why does `J()` connect `i` to `push`, `has`, `tailwindcss.js`, `K`?**
  _High betweenness centrality (0.009) - this node is a cross-community bridge._
- **Are the 4 inferred relationships involving `add()` (e.g. with `l()` and `i()`) actually correct?**
  _`add()` has 4 INFERRED edges - model-reasoned connections that need verification._
- **What connects `name`, `version`, `description` to the rest of the system?**
  _32 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `has` be split into smaller, more focused modules?**
  _Cohesion score 0.0611764705882353 - nodes in this community are weakly interconnected._
- **Should `tailwindcss.js` be split into smaller, more focused modules?**
  _Cohesion score 0.02631578947368421 - nodes in this community are weakly interconnected._