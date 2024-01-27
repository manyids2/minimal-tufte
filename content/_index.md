---
title: "minimal-tufte"
date: 2023-01-01T08:00:00-07:00
draft: false
---

<section>

Hugo theme with [tufte-css](https://github.com/edwardtufte/tufte-css.git).

{{< example >}}

{{< figure label="minimal-tufte"
src="/screenshot.png"
alt="Screenshot: minimal-tufte" >}}
Screenshot of this theme.
{{< /figure >}}

{{< /example >}}

<hr>
</section>
<section>

## Features

### Navbar

- responsive navbar

### Table of contents

- right top

### Shortcodes

- subtitle
- newthought
- sidenote, sidenote-label
- marginnote, marginnote-label
- latex, latex-sub, latex-sup
- figure
- iframe
- footer
- example

### Nested structures

- list pages have links to children by default.

<hr>
</section>
<section>

## Installation

If from start,

```bash
hugo new site my-site
cd my-site
```

Add theme.

```bash
# Use submodules
git submodule add https://github.com/manyids2/minimal-tufte themes/minimal-tufte

# Or clone and remove git to fully customize if submodules are tedious
# git clone https://github.com/manyids2/minimal-tufte themes/minimal-tufte
# rm -rf themes/minimal-tufte/.git

# Set theme in hugo
echo "theme = 'minimal-tufte'" >> hugo.toml

# Ignore theme
echo "themes/minimal-tufte" >> .gitignore

# Yaml headers
echo "---
title: '{{ replace .File.ContentBaseName "-" " " | title }}'
date: {{ .Date }}
draft: true
---
" > archetypes/default.md

# Remove demo content from themes
rm -r themes/minimal-tufte/content/*

# Create various subfolders ( default: projects, software, reference )
hugo new content projects/_index.md
hugo new content software/_index.md
hugo new content reference/_index.md

# Set the corresponding options in hugo.toml
# $EDITOR hugo.toml # Manually edit

# Populate and then edit ( lower the weight, lefter it is )

# Main -> links on left
echo "[[menus.main]]
name = 'Projects'
url = '/projects'
weight = 10
">>hugo.toml

# Social -> links on right with pre
echo "[[menus.social]]
name = "Music"
pre = '🎶'
url = "https://manyids2.bandcamp.com/track/high-tide"
weight = 30
">>hugo.toml

# Serve and check
hugo server -D
```

<hr>
</section>
<section>

## Configuration

<hr>
</section>
<section>

## Todos

1. Code blocks are ugly, dont support light, dark mode

[example](https://discourse.gohugo.io/t/documentation-for-code-block-render-hooks/37610/2)

```go
{{ $class := .Attributes.class | default ""    }}
{{ $lang  := .Attributes.lang  | default .Type }}
{{ if transform.CanHighlight $lang }}
<div class="{{ $class }}">{{ highlight .Inner $lang }}</div>
{{else}}
<pre><code class="{{ $class }}">{{.Inner}}</code></pre>
{{end}}
```

2. Decide how to show table of contents, current is ugly
3. Option to show custom table of contents if it is there
4. Navbar design can be cleaned up
5. Render entire thing as grid rather than use margin-auto
6. Extract sass from `tufte.css`
7. Copy code
