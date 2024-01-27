---
title: "Code"
date: 2024-01-27T20:01:21+01:00
draft: true
---

<section>

<div class="danger bold">
I dont understand the copy code yet, so for some reason inserts newlines
everywhere while copying.
</div>


Examples of code

<hr>
</section>
<section>

## Basic

```
ls -R /
```

<hr>
</section>
<section>

## Specify language for chroma highlights

Copy button is ugly, but works for now.

## Language

```bash
ls -R /
```

<hr>
</section>
<section>

## Long line

```bash
ls -R / | xargs -I{} echo {} | xargs -I{} echo {} | xargs -I{} echo {} | xargs -I{} echo {}  | xargs -I{} echo {} | xargs -I{} echo {} | xargs -I{} echo {} | xargs -I{} echo {}
```

<hr>
</section>
<section>

## Few lines

<div class="danger">
For some reason inserts newlines everywhere while copying.
</div>

```bash
ls -R / | \
    xargs -I{} echo {} | \
    xargs -I{} echo {} | \
    xargs -I{} echo {} | \
    xargs -I{} echo {} | \
    xargs -I{} echo {}
```

<hr>
</section>
<section>

## Many lines

<div class="danger">
For some reason inserts newlines everywhere while copying.
</div>

```c
#include "app.h"
#include "keys.h"
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>

// Initialize app
static slide_t slide = {0};
static world_t world = {0};
static view_t view = {0};
static tiles_t tiles = {.threadDied = PTHREAD_COND_INITIALIZER,
                        .threadMutex = PTHREAD_MUTEX_INITIALIZER};

static app_t app = {
    .slide = &slide,
    .world = &world,
    .view = &view,
    .tiles = &tiles,
    .debug = DEBUG_NONE,
    .thumb = 1,
    .last_pressed = INIT,
};

int main(int argc, char **argv) {
  if (argc != 2) {
    printf("Usage: wsi-tvx path/to/slide \n");
    return 1;
  }

  // Get path to slide
  char *slidepath = argv[1];
  // printf("slidepath: %s\r\n", slidepath);

  // Full screen terminal
  setup_term();

  // Initialize slide, world, view
  app_init(&app, slidepath);

  while (1) {
    // Get single keypress
    int c = parse_input();

    // Handle it
    handle_keypress(&app, c);

    // Render info
    app_draw_debug(&app);
    app_draw_statusline(&app);
  }

  // Free memory
  app_free(&app);

  // Exit successfully
  return EXIT_SUCCESS;
}

```

<hr>
</section>
<section>