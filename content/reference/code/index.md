---
title: "Code"
date: 2024-01-27T20:01:21+01:00
draft: true
---

Examples of codeblocks. Hover over to reveal copy button.

<hr>

## Basic

```
ls -R /
```

<hr>

## Specify language for chroma highlights

Copy button is ugly, but works for now.

## Language

```bash
ls -R /
```

<hr>

## Long line

How to show the hovering thin scroll bar to indicate something exists?

```bash
ls -R / | xargs -I{} echo {} | xargs -I{} echo {} | xargs -I{} echo {} | xargs -I{} echo {}  | xargs -I{} echo {} | xargs -I{} echo {} | xargs -I{} echo {} | xargs -I{} echo {}
```

<hr>

## Few lines

```bash
ls -R / | \
    xargs -I{} echo {} | \
    xargs -I{} echo {} | \
    xargs -I{} echo {} | \
    xargs -I{} echo {} | \
    xargs -I{} echo {}
```

<hr>

## Many lines

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
