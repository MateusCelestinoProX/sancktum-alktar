# Graph Report - sancktum-alktar  (2026-11-04)

## Corpus Check
- 23 files · ~799,176 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 808 nodes · 2184 edges · 74 communities (62 shown, 5 thin omitted)
- Extraction: 95% EXTRACTED · 5% INFERRED · 0% AMBIGUOUS · INFERRED: 111 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `80b57e92`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- has
- ExampleInstrumentedTest.java
- tailwindcss.js
- gsap.min.js
- sync
- push
- K
- hx
- add
- parse
- clone
- cb
- MainActivity.java
- r
- BackgroundEngine
- prefixes
- SigilChargerEngine
- normalize
- Ht
- error
- _entriesAscending
- t
- _d
- replace
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
- i
- k2
- Vb
- Pl
- async
- Sh
- some
- gradlew
- J
- ja
- bo
- checkMissedSemicolon
- cm
- gk
- ka
- gR
- ro
- xe
- remove
- get
- _t
- stringify
- decl
- applyVariantOffset
- rule
- raw
- v2
- _deleteIfExpired
- create
- Ts
- rangeBy
- fS

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
- `gk()` --indirect_call--> `t()`  [INFERRED]
  assets/js/vendor/tailwindcss.js → assets/js/vendor/gsap.min.js
- `Hs()` --indirect_call--> `t()`  [INFERRED]
  assets/js/vendor/tailwindcss.js → assets/js/vendor/gsap.min.js

## Import Cycles
- None detected.

## Communities (74 total, 5 thin omitted)

### Community 0 - "has"
Cohesion: 0.16
Nodes (14): ca(), cs(), has(), Hf(), hk(), jh(), Mp(), pd() (+6 more)

### Community 1 - "ExampleInstrumentedTest.java"
Cohesion: 0.33
Nodes (5): ExampleInstrumentedTest, ExampleUnitTest, androidx.test.ext.junit.runners.AndroidJUnit4, org.junit.runner.RunWith, org.junit.Test

### Community 2 - "tailwindcss.js"
Cohesion: 0.03
Nodes (34): Ak(), ao(), Ba(), bk(), Bp(), Ck(), ES(), gg() (+26 more)

### Community 3 - "gsap.min.js"
Cohesion: 0.06
Nodes (16): Ec(), ee(), Fc(), Kd(), la(), Ld(), ma(), Md() (+8 more)

### Community 4 - "sync"
Cohesion: 0.19
Nodes (18): dp(), getAsyncError(), getIterator(), getProxyProcessor(), handleError(), messages(), pp(), prepareVisitors() (+10 more)

### Community 5 - "push"
Cohesion: 0.08
Nodes (37): BC(), br(), c2(), cloneDiv(), colorStops(), comma(), d2(), El() (+29 more)

### Community 6 - "K"
Cohesion: 0.19
Nodes (20): Ae(), ax(), Bf(), every(), ex(), Ff(), Gs(), a() (+12 more)

### Community 7 - "hx"
Cohesion: 0.10
Nodes (25): cx(), dm(), dx(), ec(), eE(), Fh(), fx(), gx() (+17 more)

### Community 8 - "add"
Cohesion: 0.10
Nodes (33): add(), already(), au(), checkForWarning(), cleanFromUnprefixed(), cleanOtherPrefixes(), cloneBefore(), contain3d() (+25 more)

### Community 9 - "parse"
Cohesion: 0.18
Nodes (16): An(), atrule(), comment(), emptyRule(), end(), endFile(), freeSemicolon(), getPosition() (+8 more)

### Community 10 - "clone"
Cohesion: 0.12
Nodes (27): _a(), applyParallelOffset(), clone(), cloneAfter(), constructor(), createTokenizer(), $d(), da() (+19 more)

### Community 11 - "cb"
Cohesion: 0.29
Nodes (7): Ab(), Bb(), cb(), Context(), Ew(), fb(), zb()

### Community 12 - "MainActivity.java"
Cohesion: 0.47
Nodes (4): MainActivity, android.os.Bundle, com.getcapacitor.BridgeActivity, Override

### Community 13 - "r"
Cohesion: 0.16
Nodes (18): _a(), ac(), Bo(), db(), eb(), ga(), gb(), hb() (+10 more)

### Community 15 - "prefixes"
Cohesion: 0.50
Nodes (4): otherPrefixes(), parentPrefix(), prefixes(), withPrefix()

### Community 17 - "normalize"
Cohesion: 0.14
Nodes (21): Jd(), append(), Cc(), index(), insertAfter(), insertBefore(), jC(), Ld() (+13 more)

### Community 18 - "Ht"
Cohesion: 0.67
Nodes (3): go(), Ht(), sr()

### Community 19 - "error"
Cohesion: 0.17
Nodes (15): before(), dy(), error(), fromOffset(), Hl(), il(), J2(), ky() (+7 more)

### Community 20 - "_entriesAscending"
Cohesion: 0.67
Nodes (3): _emitEvictions(), _entriesAscending(), resize()

### Community 21 - "t"
Cohesion: 0.21
Nodes (14): _assertThisInitialized(), gc(), qa(), t(), Timeline(), Tween(), ua(), va() (+6 more)

### Community 22 - "_d"
Cohesion: 0.25
Nodes (11): be(), _d(), ea(), fa(), ia(), ie(), je(), ke() (+3 more)

### Community 23 - "replace"
Cohesion: 0.15
Nodes (18): addToError(), cy(), G2(), Md(), mh(), Nt(), rawBeforeClose(), rawBeforeOpen() (+10 more)

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

### Community 35 - "i"
Cohesion: 0.16
Nodes (16): cleanBrackets(), i(), ei(), group(), isStretch(), old(), prefixed(), prefixer() (+8 more)

### Community 36 - "k2"
Cohesion: 0.33
Nodes (6): Ig(), k2(), Ne(), qg(), Rl(), Y2()

### Community 38 - "Pl"
Cohesion: 0.18
Nodes (14): _2(), as(), E2(), Pl(), qh(), QS(), recalculateVariantOffsets(), remapArbitraryVariantOffsets() (+6 more)

### Community 39 - "async"
Cohesion: 0.67
Nodes (4): async(), catch(), finally(), then()

### Community 40 - "Sh"
Cohesion: 0.70
Nodes (5): Ah(), g_(), jo(), Sh(), y_()

### Community 41 - "some"
Cohesion: 0.21
Nodes (14): l(), o(), c(), clear(), keys(), no(), Pf(), some() (+6 more)

### Community 42 - "gradlew"
Cohesion: 0.83
Nodes (3): gradlew script, die(), warn()

### Community 43 - "J"
Cohesion: 0.21
Nodes (13): Bh(), cr(), dr(), J(), o(), jt(), $o(), Qn() (+5 more)

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

### Community 53 - "remove"
Cohesion: 0.19
Nodes (13): check(), isHack(), isNot(), isOr(), isProp(), Jn(), rawBeforeDecl(), rawColon() (+5 more)

### Community 54 - "get"
Cohesion: 0.24
Nodes (11): DC(), get(), _getItemValue(), _getOrDeleteIfExpired(), jg(), L2(), _moveToRecent(), O2() (+3 more)

### Community 55 - "_t"
Cohesion: 0.24
Nodes (9): ea(), lx(), negative(), qe(), sx(), _t(), tn(), xt() (+1 more)

### Community 56 - "stringify"
Cohesion: 0.18
Nodes (11): clean(), content(), css(), div(), Eh(), map(), Oh(), prefixName() (+3 more)

### Community 57 - "decl"
Cohesion: 0.24
Nodes (10): decl(), l1(), load(), other(), precheckMissedSemicolon(), preprocess(), spacesFromEnd(), stringFrom() (+2 more)

### Community 58 - "applyVariantOffset"
Cohesion: 0.67
Nodes (3): applyVariantOffset(), compare(), Lh()

### Community 59 - "rule"
Cohesion: 0.32
Nodes (8): after(), Co(), Gd(), Hn(), Io(), prev(), rule(), spacesAndCommentsFromEnd()

### Community 60 - "raw"
Cohesion: 0.17
Nodes (13): beforeAfter(), block(), body(), calcBefore(), document(), maxPrefixed(), raw(), rawBeforeComment() (+5 more)

### Community 61 - "v2"
Cohesion: 0.33
Nodes (6): b2(), Cl(), Sg(), v2(), Wi(), xg()

### Community 62 - "_deleteIfExpired"
Cohesion: 0.40
Nodes (6): delete(), _deleteIfExpired(), entriesDescending(), h_(), [Symbol.iterator](), Uh()

### Community 64 - "create"
Cohesion: 0.40
Nodes (5): arbitraryProperty(), create(), forVariant(), recordVariant(), recordVariants()

### Community 71 - "Ts"
Cohesion: 0.40
Nodes (5): Dl(), Gl(), Os(), Ts(), Wl()

### Community 72 - "rangeBy"
Cohesion: 0.83
Nodes (4): positionBy(), positionInside(), rangeBy(), Wr()

### Community 73 - "fS"
Cohesion: 0.67
Nodes (3): F_(), fS(), Va()

## Knowledge Gaps
- **32 isolated node(s):** `name`, `version`, `description`, `dev`, `build` (+27 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 131 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `t()` connect `t` to `tailwindcss.js`, `gsap.min.js`, `i`, `sync`, `K`, `hx`, `cb`, `r`, `gk`, `ka`, `normalize`, `error`, `_t`, `decl`, `rule`?**
  _High betweenness centrality (0.144) - this node is a cross-community bridge._
- **Why does `dr()` connect `J` to `tailwindcss.js`, `gsap.min.js`, `i`, `add`, `some`, `clone`, `normalize`, `xe`, `_d`, `replace`?**
  _High betweenness centrality (0.016) - this node is a cross-community bridge._
- **Why does `J()` connect `J` to `create`, `has`, `tailwindcss.js`, `gsap.min.js`, `push`, `K`, `add`, `some`, `get`, `_t`?**
  _High betweenness centrality (0.009) - this node is a cross-community bridge._
- **Are the 4 inferred relationships involving `add()` (e.g. with `l()` and `i()`) actually correct?**
  _`add()` has 4 INFERRED edges - model-reasoned connections that need verification._
- **What connects `name`, `version`, `description` to the rest of the system?**
  _32 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `tailwindcss.js` be split into smaller, more focused modules?**
  _Cohesion score 0.027800053461641272 - nodes in this community are weakly interconnected._
- **Should `gsap.min.js` be split into smaller, more focused modules?**
  _Cohesion score 0.05807200929152149 - nodes in this community are weakly interconnected._