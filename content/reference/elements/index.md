---
title: "Elements"
date: 2024-01-27T16:19:33+01:00
draft: true
---

Index of all the CSS elements that appear on the site.

Basic structure of each page (home, single, list):

```text
- html
  - body
    - nav
    - article
      - aside-container
      - Content
    - footer
```

<hr>

## variables

Define only 4 colors:

1. color-background
2. color-foreground
3. color-muted-background
4. color-alert

All of them are easy to switch based on preferred colorscheme. However, note
that for code syntax, we have to switch colors using javascript.

```css
:root {
  --color-background: #fffff8;
  --color-foreground: #111111;
  --color-muted-background: #eeeee8;
  --color-alert: #dd5555;

  --font-heavy: 800;
  --font-medium: 600;
  --font-regular: 400;
  --font-light: 200;
}

@media (prefers-color-scheme: dark) {
  :root {
    --color-background: #151515;
    --color-foreground: #dddddd;
    --color-muted-background: #252525;
    --color-alert: #bb5555;
  }
}
```

<hr>

## body

Make sure body is full width, and assign background-color and color which all
elements will inherit.

```css
html {
  font-size: 15px;
}

body {
  width: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  color: var(--color-foreground);
  background-color: var(--color-background);
}
```

<hr>

## nav

Navbar is made up of 3 elements:

1. Title, which serves as link to homepage.
2. Links to main pages.
3. Links to social pages.

The nested structure is:

```text
- nav
  - .horizontal-container
    - span.nav-title
    - .menus-main
      - span.nav-main > a
      - span.nav-main > a
      - span.nav-main > a
    - .menus-social
      - span.nav-social > a
      - span.nav-social > a
      - span.nav-social > a
```

For responsiveness, on large screens, `nav-title`, `menus-main` and
`menus-social` are all part of one horizontal-container, and each of them are
horizontal-containers themselves. On small width screens, `.menus-main` and
`.menus-social` become vertical-containers.

```css
body > nav {
  font-size: 1.5rem;
  font-family: Jost;
  font-weight: var(--font-regular);
  margin-left: auto;
  margin-right: auto;
  padding: 0.5rem;
}

body > nav .nav-title {
  font-weight: var(--font-heavy);
  margin-left: 1rem;
  margin-right: 1rem;
}

.horizontal-container {
  display: flex;
  flex-direction: row;
}

body > nav .menus-main {
  flex-grow: 1;
}

body > nav .menus-social {
  margin-right: 1rem;
}

body > nav .nav-main {
  display: block;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}

body > nav .nav-social {
  display: block;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}

@media (max-width: 500px) {
  .menus-main {
    flex-direction: column;
  }
  .menus-social {
    flex-direction: column;
  }
  body > nav {
    text-align: center;
    border-bottom: 1px solid var(--color-foreground);
  }
}
```

TODO: There is loads of redundancy here.

<hr>

## article

This is everything except the navbar.

The nested structure is:

```text
- article
  - section.aside-container
    - ...
  - content
  - p
  - h1
  - div
  - ...
```

The first element is always a container for the table of contents. The rest are
simple elements of the content and can be of any type.

There are 5 main elements defined here:

1. Position is `relative` for later use.
2. Widths are limited.
3. Margin ensures centering, sane margin and paddings.
4. Font for almost all inherited elements.
5. Sidenote numbering mechanism

```css
article {
  position: relative;

  width: 87.5%;
  max-width: 1400px;

  padding-left: 5%;
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;

  font-family: et-book, Palatino, "Palatino Linotype", "Palatino LT STD",
    "Book Antiqua", Georgia, serif;

  counter-reset: sidenote-counter;
}
```

<hr>

## breadcrumbs

Clickable ancestors.

```css
/* Breadcrumbs */
.breadcrumbs {
  border-bottom: 0.25rem solid var(--color-muted-background);
  padding-right: 1rem;
  width: max-content;
}

.breadcrumb {
  font-family: Jost;
  font-size: 1.2rem;
  margin-left: 1rem;
}

.breadcrumb-spacer {
  font-size: 1.2rem;
  margin-left: 1rem;
}
```

<hr>

## section

Supposed to contain the ugly table of contents.

```text
- section.aside-container
  - .vertical-container
    - .breadcrumbs.horizontal-container
    - h1
  - aside#sidebar
    - details#sidebar-details
      - summary
      - nav#TableOfContents
        - ul
          - li > a
          - ...
```

Seems super complicated, am sure it can be cleaned up. We can float it right
the same way sidenotes are done.

```css
.aside-container {
  width: 87.5%;
  display: flex;
}

.aside-container > h1 {
  z-index: 100;
  flex-grow: 1;
  position: relative;
}

aside {
  z-index: 100;
  position: absolute;
  top: 6rem;
  right: 1rem;
  width: 25%;
  background-color: var(--color-background);
}

aside > details {
  z-index: 100;
  margin-top: 0;
  margin-left: 0.5%;
  border-radius: 1rem;
  border: 0.25rem solid var(--color-muted-background);
}

.table-of-contents {
  border: 0.25rem solid var(--color-muted-background);
  border-radius: 1rem;
}

aside > details > summary {
  list-style-type: "";
}

summary {
  cursor: pointer;
  margin-left: 1rem;
  border: none;
  border-radius: 1rem;
  font-family: Jost;
  font-weight: 600;
  font-size: 1.8rem;
}

#TableOfContents {
  margin-top: 1rem;
  margin-left: 1rem;
}

#TableOfContents li {
  font-family: Jost;
  font-size: 1.2rem;
}

#TableOfContents a {
  background: unset;
  text-shadow: unset;
}
```

<hr>

## headers

```css
h1 {
  font-family: Jost;
  font-weight: var(--font-heavy);
  margin-top: 4rem;
  margin-bottom: 1.5rem;
  font-size: 3.2rem;
  line-height: 1;
}

h2 {
  font-style: italic;
  font-weight: var(--font-regular);
  margin-top: 2.1rem;
  margin-bottom: 1.4rem;
  font-size: 2.2rem;
  line-height: 1;
}

h3 {
  font-style: italic;
  font-weight: var(--font-regular);
  font-size: 1.7rem;
  margin-top: 2rem;
  margin-bottom: 1.4rem;
  line-height: 1;
}
```

<hr>

## separator

```css
hr {
  display: block;
  height: 1px;
  width: 70%;
  border: 0;
  border-top: 0.25rem solid var(--color-muted-background);
  margin: 1em 0;
  padding: 0;
}
```

## subtitle

```css
p.subtitle {
  font-style: italic;
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: 1.8rem;
  display: block;
  line-height: 1;
}
```

## paragraph

```css
p,
dl,
ol,
ul {
  font-size: 1.4rem;
  line-height: 2rem;
}

p {
  margin-top: 1.4rem;
  margin-bottom: 1.4rem;
  padding-right: 0;
  vertical-align: baseline;
}
```

## lists

Need to make this better.

```css
ul {
  list-style-type: none;
  padding-left: 0;
  margin-top: 0;
}

ul > li {
  position: relative;
  padding-left: 0rem;
}

ul ul > li {
  position: relative;
  padding-left: 1rem;
}

li {
  line-height: 1.5;
}
```

## epigraph

Damn, this is different from blockquote.

```css
div.epigraph {
  margin: 5em 0;
}

div.epigraph > blockquote {
  margin-top: 3em;
  margin-bottom: 3em;
}

div.epigraph > blockquote,
div.epigraph > blockquote > p {
  font-style: italic;
}

div.epigraph > blockquote > footer {
  font-style: normal;
}

div.epigraph > blockquote > footer > cite {
  font-style: italic;
}
```

## blockquote

```css
blockquote {
  font-size: 1.4rem;
}

blockquote p {
  width: 70%;
  margin-right: 40px;
}

blockquote footer {
  width: 70%;
  font-size: 1.1rem;
  text-align: right;
}
```

## article children

Need to set proper widths for direct children only, so nesting is not affected.

TODO: Understand the calculation

```css
/* Children of article */
article > div,
article > p,
article > footer,
article > table {
  width: 70%;
}

/* 50 + 5 == 70, to be the same width as paragraph */
article > dl,
article > ol,
article > ul {
  width: 50%;
  -webkit-padding-start: 5%;
}
```

## first elements

```css
dt:not(:first-child),
li:not(:first-child) {
  margin-top: 0.25rem;
}
```

## sidenote, marginnote

```css
img {
  max-width: 100%;
}

.sidenote,
.marginnote {
  float: right;
  clear: right;
  margin-right: -40%;
  width: 35%;
  margin-top: 0.3rem;
  margin-bottom: 0;
  font-size: 1.1rem;
  line-height: 1.3;
  vertical-align: baseline;
  position: relative;
}

.sidenote-number {
  counter-increment: sidenote-counter;
}

.sidenote-number:after,
.sidenote:before {
  font-family: et-book-roman-old-style;
  position: relative;
  vertical-align: baseline;
}

.sidenote-number:after {
  content: counter(sidenote-counter);
  font-size: 1rem;
  top: -0.5rem;
  left: 0.1rem;
}

.sidenote:before {
  content: counter(sidenote-counter) " ";
  font-size: 1rem;
  top: -0.5rem;
}

blockquote .sidenote,
blockquote .marginnote {
  margin-right: -82%;
  min-width: 59%;
  text-align: left;
}

input.margin-toggle {
  display: none;
}

label.sidenote-number {
  display: inline-block;
  max-height: 2rem; /* should be less than or equal to paragraph line-height */
}

label.margin-toggle:not(.sidenote-number) {
  display: none;
}
```

<hr>

## code

```css
span.line {
  flex-grow: 1;
}

.highlight > pre {
  border-radius: 0.25rem;
  padding-top: 1rem;
}

.highlight > pre > code {
  width: 95%;
  padding-bottom: 1rem;
}

.codeblock {
  border: 1px solid var(--color-muted-background);
  position: relative;
}

.codeblock-button-wrapper {
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  opacity: 0.6;
  background-color: var(--color-background);
}

.copy-cmd {
  width: 2rem;
  height: 2rem;
  background-color: var(--color-background);
  border: none;
}

.copy-cmd > svg {
  z-index: 100;
  fill: var(--color-foreground);
}

.copy-cmd:hover > svg {
  fill: var(--color-alert);
}

.copied {
  border-bottom: 0.25rem solid var(--color-alert);
}

.codeblock:hover .codeblock-button-wrapper {
  display: block;
}

code,
pre > code {
  font-family: Consolas, "Liberation Mono", Menlo, Courier, monospace;
  font-size: 1rem;
  line-height: 1.42;
  -webkit-text-size-adjust: 100%; /* Prevent adjustments of font size after orientation changes in iOS. See https://github.com/edwardtufte/tufte-css/issues/81#issuecomment-261953409 */
}

.sans > code {
  font-size: 1.2rem;
}

h1 > code,
h2 > code,
h3 > code {
  font-size: 0.8em;
}

.marginnote > code,
.sidenote > code {
  font-size: 1rem;
}

pre > code {
  font-size: 0.9rem;
  width: 52.5%;
  margin-left: 2.5%;
  overflow-x: auto;
  display: block;
}

pre.fullwidth > code {
  width: 90%;
}
```

<hr>

## figures

```css
img {
  max-width: 100%;
}

figure {
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  max-width: 70%;
  -webkit-margin-start: 0;
  -webkit-margin-end: 0;
  margin: 0 0 3em 0;
}

figcaption {
  float: right;
  clear: right;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1.1rem;
  line-height: 1.6;
  vertical-align: baseline;
  position: relative;
  max-width: 40%;
}

figure.fullwidth figcaption {
  margin-right: 24%;
}
```

<hr>

## links

This is some fucked up shite. Fucks up hover and select colors as well. Will
remove it. Some ugly links are fine...

```css
a:link,
a:visited {
  color: inherit;
}

.no-tufte-underline:link {
  background: unset;
  text-shadow: unset;
}

a:link,
.tufte-underline,
.hover-tufte-underline:hover {
  text-decoration: none;
  background:
    -webkit-linear-gradient(var(--color-background), var(--color-background)),
    -webkit-linear-gradient(var(--color-background), var(--color-background)),
    -webkit-linear-gradient(currentColor, currentColor);
  background: linear-gradient(var(--color-background), var(--color-background)),
    linear-gradient(var(--color-background), var(--color-background)),
    linear-gradient(currentColor, currentColor);
  -webkit-background-size:
    0.05em 1px,
    0.05em 1px,
    1px 1px;
  -moz-background-size:
    0.05em 1px,
    0.05em 1px,
    1px 1px;
  background-size:
    0.05em 1px,
    0.05em 1px,
    1px 1px;
  background-repeat: no-repeat, no-repeat, repeat-x;
  text-shadow:
    0.03em 0 var(--color-background),
    -0.03em 0 var(--color-background),
    0 0.03em var(--color-background),
    0 -0.03em var(--color-background),
    0.06em 0 var(--color-background),
    -0.06em 0 var(--color-background),
    0.09em 0 var(--color-background),
    -0.09em 0 var(--color-background),
    0.12em 0 var(--color-background),
    -0.12em 0 var(--color-background),
    0.15em 0 var(--color-background),
    -0.15em 0 var(--color-background);
  background-position:
    0% 93%,
    100% 93%,
    0% 93%;
}

@media screen and (-webkit-min-device-pixel-ratio: 0) {
  a:link,
  .tufte-underline,
  .hover-tufte-underline:hover {
    background-position-y: 87%, 87%, 87%;
  }
}

a:link::selection,
a:link::-moz-selection {
  text-shadow:
    0.03em 0 #b4d5fe,
    -0.03em 0 #b4d5fe,
    0 0.03em #b4d5fe,
    0 -0.03em #b4d5fe,
    0.06em 0 #b4d5fe,
    -0.06em 0 #b4d5fe,
    0.09em 0 #b4d5fe,
    -0.09em 0 #b4d5fe,
    0.12em 0 #b4d5fe,
    -0.12em 0 #b4d5fe,
    0.15em 0 #b4d5fe,
    -0.15em 0 #b4d5fe;
  background: #b4d5fe;
}
```

<hr>

## utilities

TODO: rename .jost to .sans

```css
.danger {
  color: var(--color-alert);
}

.center {
  width: 100%;
  text-align: center;
}

.jost {
  font-family: Jost;
}

.sans {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, sans-serif;
  letter-spacing: 0.03em;
}

.bold {
  font-weight: var(--font-heavy);
}
```

Fullwidth:

```css
div.fullwidth,
table.fullwidth {
  width: 100%;
}

div.table-wrapper {
  overflow-x: auto;
  font-family: "Trebuchet MS", "Gill Sans", "Gill Sans MT", sans-serif;
}

.fullwidth {
  max-width: 90%;
  clear: both;
}
```

Newthought:

```css
span.newthought {
  font-variant: small-caps;
  font-size: 1.2em;
}
```

## iframe

```css
.iframe-wrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  padding-top: 25px;
  height: 0;
}

.iframe-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
```

## typography

From the whole file, absolutely all over the place.

Unique:

1. 15px - `html`
2. 0.8em - h1 > code, h2 > code, h3 > code
3. 0.9rem - pre > code
4. 1rem - .sidenote-number:after,before, code, pre > code, .marginnote > code, .sidenote > code
5. 1.1rem - blockquote footer, figcaption, .sidenote, .marginnote
6. 1.2rem - .breadcrumb, .breadcrumb-spacer, #TableOfContents li, .sans > code, span.newthought
7. 1.4rem - p, dl, ol, ul, blockquote
8. 1.5rem - body > nav
9. 1.7rem - h3
10. 1.8rem - p.subtitle
11. 2.2rem - h2
12. 3.2rem - h1
13. 100% - figure

## geometry 
( margin, padding, border, outline, width, height )
