---
title: "Shortcodes"
date: 2024-01-27T00:06:30+01:00
draft: true
tags: ["shortcodes", "reference"]
categories: ["reference"]
---

<hr>

## subtitle

Code:

```go
{{</* subtitle */>}}Subtitle{{</* /subtitle */>}}

// <p class="subtitle">{{ .Inner | markdownify }}</p>
```

Example:

<div class="example">
  <p class="subtitle">Subtitle</p>
</div>

Parameters:

| key   | value                   | doc                |
| :---- | :---------------------- | :----------------- |
| align | left \| right \| center | align the subtitle |

<hr>

## newthought

Code:

```go
{{</* newthought */>}}As I was saying,{{</* /newthought */>}}
this is a newthought.

// <span class="newthought">{{ .Inner | markdownify }}</span>
```

Example:

<div class="example">
  <span class="newthought">As I was saying,</span> this is a newthought.
</div>

Parameters:

| key  | value                     | doc                |
| :--- | :------------------------ | :----------------- |
| font | jost \| et-book (default) | Font of newthought |

<hr>

## sidenote, sidenode-label

Code:

```go
In his later notes{{</* sidenote-label in-his-later */>}},
// <label for="sn-{{ .Get 0 }}" class="margin-toggle sidenote-number"></label>

{{</* sidenote in-his-later */>}} [*Beautiful Evidence*](...) {{</* /sidenote */>}}
// <input type="checkbox" id="sn-{{ .Get 0 }}" class="margin-toggle">
// <span class="sidenote">{{ .Inner | markdownify }}</span>
```

Example:

<div class="example">
In his later notes<label for="sn-in-his-later" class="margin-toggle sidenote-number"></label>,
<input type="checkbox" id="sn-in-his-later" class="margin-toggle">
<span class="sidenote"><a href="..."><em>Beautiful Evidence</em></a></span>
</div>

Parameters:

| key   | value          | doc                             |
| :---- | :------------- | :------------------------------ |
| label | id of sidenote | necessary to align the sidenote |

<hr>

## marginnote, marginnote-label

Code:

```go
This is the anchor{{</* margin-label in-his-later */>}}.
// <label for="mn-{{ .Get 0 }}" class="margin-toggle"></label>

{{</* marginnote in-his-later */>}} This is the note {{</* /marginnote */>}}
// <input type="checkbox" id="mn-{{ .Get 0 }}" class="margin-toggle">
// <span class="marginnote">{{ .Inner | markdownify }}</span>
```

Example:

<div class="example">
  This is the anchor<label for="mn-in-his-later" class="margin-toggle"></label>.
  <input type="checkbox" id="mn-in-his-later" class="margin-toggle">
  <span class="marginnote">This is the note</span>
</div>

Parameters:

| key   | value          | doc                             |
| :---- | :------------- | :------------------------------ |
| label | id of sidenote | necessary to align the sidenote |

<hr>

## figure

### default

Code:

```go
{{</* figure label="exports"
src="img/exports-imports.png"
alt="Exports and Imports to and from Denmark &amp; Norway from 1700 to 1780" */>}}
From Edward Tufte, <em>Visual Display of Quantitative Information</em>, page 92.
{{</* /figure */>}}

// <figure class="">
//   <label for="mn-exports" class="margin-toggle">⊕</label><input type="checkbox" id="mn-exports" class="margin-toggle">
//   <span class="marginnote">
// From Edward Tufte, <em>Visual Display of
// Quantitative Information</em>, page 92.
//   </span>
//   <img src="img/exports-imports.png" alt="Exports and Imports to and from Denmark &amp;amp; Norway from 1700 to 1780">
// </figure>

```

<figure class="">
  <label for="mn-exports" class="margin-toggle">⊕</label><input type="checkbox" id="mn-exports" class="margin-toggle">
  <span class="marginnote"> From Edward Tufte, <em>Visual Display of Quantitative Information</em>, page 92. </span>
  <img src="../tufte/img/exports-imports.png" alt="Exports and Imports to and from Denmark &amp;amp; Norway from 1700 to 1780">
</figure>

### fullwidth

```go
{{</* figure label="napoleons-march"
class="fullwidth"
src="img/napoleons-march.png"
alt="Figurative map of the successive losses of the French Army in the Russian campaign, 1812-1813" */>}}
{{</* /figure /*>}}

// <figure class="fullwidth">
//   <label for="mn-napoleons-march" class="margin-toggle">⊕</label><input type="checkbox" id="mn-napoleons-march" class="margin-toggle">
//   <span class="marginnote"> </span>
//   <img src="img/napoleons-march.png" alt="Figurative map of the successive losses of the French Army in the Russian campaign, 1812-1813">
// </figure>
```

Example:

<figure class="fullwidth">
  <label for="mn-napoleons-march" class="margin-toggle">⊕</label><input type="checkbox" id="mn-napoleons-march" class="margin-toggle">
  <span class="marginnote"> </span>
  <img src="../tufte/img/napoleons-march.png" alt="Figurative map of the successive losses of the French Army in the Russian campaign, 1812-1813">
</figure>

Parameters:

| key   | value             | doc   |
| :---- | :---------------- | :---- |
| class | "" \| "fullwidth" | width |

<hr>

## latex, latex-sub, latex-sup

Code:

Uses `{{- "" -}}` to terminate without newline.

```go
{{< latex >}} L{{< latex-sup >}}a{{< /latex-sup >}}T{{< latex-sub >}}e{{< /latex-sub >}}X {{< /latex >}}

// <span class="latex">{{ .Inner | markdownify }}</span>{{- "" -}}
// <span class="latex-sup">{{ .Get 0 }}</span>{{- "" -}}
// <span class="latex-sub">{{ .Get 0 }}</span>{{- "" -}}
```

Example:

<div class="example"><p>
<span class="latex">L<span class="latex-sup">a</span>T<span class="latex-sub">e</span>X</span>
</p></div>

<hr>

## iframe

<hr>

## footer

Code:

```go
{{</* footer */>}}footer{{</* /footer */>}}

// <footer>footer</footer>
```

Example:

<div class="example">
<footer>footer</footer>
</div>

<hr>

## example

Code:

```go
{{</* example */>}}example{{</* /example */>}}

// <div class="example">example</div>
```

Example:

<div class="example">
  <div class="example"> example </div>
</div>
