# Graph Report - sancktum-alktar  (2026-11-03)

## Corpus Check
- 12 files · ~783,711 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 754 nodes · 2120 edges · 63 communities (51 shown, 11 thin omitted)
- Extraction: 95% EXTRACTED · 5% INFERRED · 0% AMBIGUOUS · INFERRED: 111 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `c0862d5e`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- aa
- i
- tailwindcss.js
- gsap.min.js
- stringify
- has
- Pf
- Pl
- remove
- decl
- push
- t
- replace
- r
- BackgroundEngine
- group
- SigilChargerEngine
- add
- J
- .toString
- _deleteIfExpired
- Tween
- _d
- each
- S
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
- Wa
- dr
- async
- Sh
- prefixQuery
- some
- cleanFromUnprefixed
- ja
- bo
- checkMissedSemicolon
- cm
- gk
- X
- gR
- ro
- jC
- rangeBy
- applyVariantOffset
- Ba
- bk
- Ck
- gg
- OC
- r
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

## Communities (63 total, 11 thin omitted)

### Community 0 - "aa"
Cohesion: 0.40
Nodes (5): aa(), ac(), bx(), sn(), wx()

### Community 1 - "i"
Cohesion: 0.09
Nodes (37): y(), ax(), B(), comma(), d2(), i(), E(), ea() (+29 more)

### Community 2 - "tailwindcss.js"
Cohesion: 0.03
Nodes (21): Ak(), ao(), ES(), go(), Gy(), Ht(), jp(), Ma() (+13 more)

### Community 3 - "gsap.min.js"
Cohesion: 0.06
Nodes (8): la(), ma(), na(), Q(), Ub(), Vb(), ve(), wd()

### Community 4 - "stringify"
Cohesion: 0.16
Nodes (21): content(), css(), dp(), getAsyncError(), getIterator(), getProxyProcessor(), handleError(), map() (+13 more)

### Community 5 - "has"
Cohesion: 0.06
Nodes (64): _a(), applyParallelOffset(), as(), b2(), Bf(), ca(), Cl(), cs() (+56 more)

### Community 6 - "Pf"
Cohesion: 0.12
Nodes (21): clear(), cx(), dx(), ec(), fx(), gx(), Hs(), hx() (+13 more)

### Community 7 - "Pl"
Cohesion: 0.20
Nodes (12): _2(), E2(), O2(), Pl(), qh(), QS(), recalculateVariantOffsets(), remapArbitraryVariantOffsets() (+4 more)

### Community 8 - "remove"
Cohesion: 0.18
Nodes (17): before(), check(), Gl(), Hl(), isHack(), isNot(), isOr(), isProp() (+9 more)

### Community 9 - "decl"
Cohesion: 0.07
Nodes (43): An(), atrule(), beforeAfter(), block(), body(), calcBefore(), cleanBrackets(), comment() (+35 more)

### Community 10 - "push"
Cohesion: 0.09
Nodes (37): after(), append(), BC(), c2(), Cc(), clone(), cloneAfter(), cloneDiv() (+29 more)

### Community 11 - "t"
Cohesion: 0.16
Nodes (15): Ab(), Bb(), cb(), Context(), Ec(), Ew(), fb(), Fc() (+7 more)

### Community 12 - "replace"
Cohesion: 0.13
Nodes (18): addToError(), isStretch(), Md(), possible(), prefixeds(), rawBeforeClose(), rawBeforeComment(), rawBeforeOpen() (+10 more)

### Community 13 - "r"
Cohesion: 0.23
Nodes (13): _a(), ac(), Bo(), db(), ea(), eb(), ga(), r() (+5 more)

### Community 15 - "group"
Cohesion: 0.33
Nodes (6): group(), otherPrefixes(), parentPrefix(), prefixes(), unprefixed(), withPrefix()

### Community 17 - "add"
Cohesion: 0.18
Nodes (19): add(), already(), checkForWarning(), cloneBefore(), contain3d(), disabled(), disabledDecl(), disabledValue() (+11 more)

### Community 18 - "J"
Cohesion: 0.14
Nodes (17): arbitraryProperty(), Bh(), cr(), create(), Eh(), forVariant(), J(), o() (+9 more)

### Community 19 - ".toString"
Cohesion: 0.18
Nodes (14): cy(), dy(), error(), fromOffset(), fy(), G2(), mh(), Nt() (+6 more)

### Community 20 - "_deleteIfExpired"
Cohesion: 0.22
Nodes (9): _deleteIfExpired(), _emitEvictions(), _entriesAscending(), entriesDescending(), _getOrDeleteIfExpired(), _moveToRecent(), resize(), _set() (+1 more)

### Community 21 - "Tween"
Cohesion: 0.27
Nodes (10): _assertThisInitialized(), gc(), qa(), Timeline(), Tween(), ua(), va(), w() (+2 more)

### Community 22 - "_d"
Cohesion: 0.29
Nodes (10): be(), _d(), fa(), ia(), ie(), je(), ke(), le() (+2 more)

### Community 23 - "each"
Cohesion: 0.26
Nodes (12): each(), index(), insertAfter(), insertBefore(), IS(), markDirty(), pr(), Qt() (+4 more)

### Community 24 - "S"
Cohesion: 0.18
Nodes (10): $d(), Jn(), nd(), Qf(), rawBeforeDecl(), rawColon(), replaceWith(), S() (+2 more)

### Community 25 - "package.json"
Cohesion: 0.22
Nodes (8): author, description, keywords, license, name, scripts, dev, version

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
Cohesion: 0.40
Nodes (6): br(), ly(), pm(), ul(), uy(), zl()

### Community 36 - "k2"
Cohesion: 0.33
Nodes (6): Ig(), k2(), Ne(), qg(), Rl(), Y2()

### Community 37 - "Wa"
Cohesion: 0.40
Nodes (5): hb(), lb(), oa(), ob(), Wa()

### Community 38 - "dr"
Cohesion: 0.14
Nodes (15): ee(), Jd(), Kd(), Ld(), Md(), Od(), Sd(), Td() (+7 more)

### Community 39 - "async"
Cohesion: 0.67
Nodes (4): async(), catch(), finally(), then()

### Community 40 - "Sh"
Cohesion: 0.70
Nodes (5): Ah(), g_(), jo(), Sh(), y_()

### Community 41 - "prefixQuery"
Cohesion: 0.50
Nodes (4): clean(), div(), prefixName(), prefixQuery()

### Community 42 - "some"
Cohesion: 0.14
Nodes (20): l(), o(), au(), c(), Fg(), jg(), L2(), Mo() (+12 more)

### Community 43 - "cleanFromUnprefixed"
Cohesion: 0.67
Nodes (4): cleanFromUnprefixed(), cleanOtherPrefixes(), findProp(), prefix()

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

### Community 49 - "X"
Cohesion: 0.50
Nodes (4): dm(), eE(), hm(), X()

### Community 50 - "gR"
Cohesion: 1.00
Nodes (3): gR(), M0(), Yu()

### Community 51 - "ro"
Cohesion: 0.67
Nodes (3): LS(), ro(), To()

### Community 52 - "jC"
Cohesion: 0.50
Nodes (4): jC(), NC(), Once(), removeAll()

### Community 53 - "rangeBy"
Cohesion: 0.83
Nodes (4): positionBy(), positionInside(), rangeBy(), Wr()

### Community 54 - "applyVariantOffset"
Cohesion: 0.67
Nodes (3): applyVariantOffset(), compare(), Lh()

### Community 66 - "r"
Cohesion: 0.23
Nodes (12): Ae(), Dl(), Gs(), a(), Je(), Os(), $r(), Rf() (+4 more)

## Knowledge Gaps
- **17 isolated node(s):** `name`, `version`, `description`, `dev`, `keywords` (+12 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 108 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **11 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `t()` connect `t` to `i`, `tailwindcss.js`, `gsap.min.js`, `r`, `has`, `Pf`, `stringify`, `zk`, `decl`, `push`, `gk`, `Tween`?**
  _High betweenness centrality (0.166) - this node is a cross-community bridge._
- **Why does `dr()` connect `dr` to `i`, `tailwindcss.js`, `has`, `some`, `replace`, `add`, `J`, `_d`, `each`, `S`?**
  _High betweenness centrality (0.019) - this node is a cross-community bridge._
- **Why does `J()` connect `J` to `i`, `tailwindcss.js`, `r`, `has`, `dr`, `Pf`, `some`, `push`, `add`?**
  _High betweenness centrality (0.010) - this node is a cross-community bridge._
- **Are the 4 inferred relationships involving `add()` (e.g. with `l()` and `i()`) actually correct?**
  _`add()` has 4 INFERRED edges - model-reasoned connections that need verification._
- **What connects `name`, `version`, `description` to the rest of the system?**
  _17 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `i` be split into smaller, more focused modules?**
  _Cohesion score 0.09041835357624832 - nodes in this community are weakly interconnected._
- **Should `tailwindcss.js` be split into smaller, more focused modules?**
  _Cohesion score 0.031469825990373936 - nodes in this community are weakly interconnected._