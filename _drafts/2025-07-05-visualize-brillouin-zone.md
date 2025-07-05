---
layout: post
title: "Let's visualize Brillouin zone with VESTA"
date: 2025-07-05
description: "Script to visualize Brillouin zone with VESTA."
tags: physics python script Japanese English visualization
categories: script
#thumbnail: assets/img/podcast-thumbnail.jpg 
---
*English Follows Japanese*

---
ブリルアンゾーン可視化のためのcifファイルを、実格子のcifまたはPOSCARファイルから生成するPythonスクリプトを作りました。
使い方も含め[bzvis.py](https://github.com/suguru-y/bzvis)をご参照ください。
生成したcifファイルを、[VESTA](https://jp-minerals.org/vesta/en/)などの結晶構造可視化ソフトウェアで開いて多面体表示することで、ブリルアンゾーンに対応する凸包が現れます。

<div class="row">
  <div class="col-sm-6">
    {% include figure.liquid path="assets/img/blog/BZ_vis/bz_Fm3m.png" caption="空間群<i>Fm</i><span style='text-decoration: overline;'>3</span><i>m</i>に属する結晶の第一ブリルアンゾーン。" %}
  </div>
  <div class="col-sm-6">
    {% include figure.liquid path="assets/img/blog/BZ_vis/bz_I4mmm.png" caption="空間群<i>I</i>4/<i>mmm</i>に属する結晶の第一ブリルアンゾーン。いずれも描画にVESTAを使用。" %}
  </div>
</div>


皆さま御存知の通り、ブリルアンゾーンは固体化学・固体物理の教科書に必ず出てきて、非常に魅力的な形をしています。
とはいえ、紙面で目にすることがほとんどで、PC上で描画してクルクル回転させてみたい！と以前から感じていました。
ポスドク時代に作った簡易スクリプトをChatGPTの力を借りてキレイにしたので、この度公開することにしました。
作った当時は[こちら](https://qiita.com/skotaro/items/dec1e31364f317a53a19)を参考にしました
(というか、この記事が素晴らしいので、私のスクリプトは些末な応用にすぎません...)。
最近、有償ソフトウェア[SingleCrystal](https://crystalmaker.com/singlecrystal/)で類似の機能が実装されているのですが、本スクリプトを使えば全てフリーソフトで完結するので、まだ価値はあると考えています...)
研究はもちろん、授業などでも何かの助けになれば嬉しく思います。
例えば、<i>Pm</i><span style='text-decoration: overline;'>3</span><i>m</i>構造のペロブスカイト物質で
R点のフォノン凍結が起こると、超格子形成を伴い<i>R</i><span style='text-decoration: overline;'>3</span><i>c</i>構造に構造相転移しますが、
このとき逆格子は小さくなり、
<i>Pm</i><span style='text-decoration: overline;'>3</span><i>m</i>構造の
R点は<i>R</i><span style='text-decoration: overline;'>3</span><i>c</i>構造の&Gamma;点に折り畳まれます。
このようなバンドフォールディングの様子も可視化できたりします。色々使えそうじゃないですか？

<div class="row">
  <div class="col-sm-6">
    {% include figure.liquid path="assets/img/blog/BZ_vis/bz_folding.png"
    caption="" %}
  </div>
  <div class="col-sm-6">
  </div>
</div>

今の実装がベストだとは思っていません。私の力不足ゆえに不具合・バグなどもちろんあるはずです。
改良点など、お気づきの点があれば[吉田まで](https://x.com/Suguru_SgY)お知らせください。

---

I wrote a Python script that generates a cif file for visualizing the Brillouin zone using either a POSCAR or cif file as input. 
Please refer to [bzvis.py](https://github.com/suguru-y/bzvis) for download and usage instructions.
The generated cif can be opened in crystal visualization software like [VESTA](https://jp-minerals.org/vesta/en/) and, 
when displayed in polyhedral style, represents the convex hull corresponding to the Brillouin zone.

<div class="row">
  <div class="col-sm-6">
    {% include figure.liquid path="assets/img/blog/BZ_vis/bz_Fm3m.png"
    caption="The first Brillouin zone of a crystal with <i>Fm</i><span style='text-decoration: overline;'>3</span><i>m</i> space-group symmetry." %}
  </div>
  <div class="col-sm-6">
    {% include figure.liquid path="assets/img/blog/BZ_vis/bz_I4mmm.png"
    caption="The first Brillouin zone of a crystal with <i>I</i>4/<i>mmm</i> space-group symmetry. Visualized by VESTA." %}
  </div>
</div>

As you know, Brillouin zones can be found in all of the solid-state physics and chemistry textbooks, and their shapes are beautiful. 
But, we usually only see them in static figures.
I've long wanted to rotate and explore them interactively on my laptop. 
This script is a cleaned-up version (with the aid of ChatGPT) of one I originally drafted during my postdoc. 
Actually, a similar function has recently been implemented in the commercial software 
[SingleCrystal](https://crystalmaker.com/singlecrystal/);
with this script, you can achieve a similar result entirely using free tools. 
So, I believe it is still useful.


I hope this tool will be useful not only for research but also for teaching. 
For instance, when a phonon condensation occurs at the R point of a <i>Pm</i><span style='text-decoration: overline;'>3</span><i>m</i> perovskite,
it leads to a structural phase transition to <i>R</i><span style='text-decoration: overline;'>3</span><i>c</i> with a superstructure (enlarged unitcell).
At the same time, the reciprocal lattice shrinks, and the original R point folds back to the &Gamma; point in the <i>R</i><span style='text-decoration: overline;'>3</span><i>c</i> Brillouin zone.
Such band folding can also be visualized.
Pretty neat, right?

<div class="row">
  <div class="col-sm-6">
    {% include figure.liquid path="assets/img/blog/BZ_vis/bz_folding.png"
    caption="" %}
  </div>
  <div class="col-sm-6">
  </div>
</div>

This is by no means a complete implementation.
There are surely bugs and limitations, mostly due to my own shortcomings.
If you notice anything that could be improved,
I'd really appreciate it if you could [let me know](https://x.com/Suguru_SgY).




