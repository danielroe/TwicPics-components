// /(\b)__COVER_NAME__(\b)/gm => "nuxt-cover"
// /(\b)__FRAMEWORK_NAME__(\b)/gm => "Nuxt3"
// /(\b)__FRAMEWORK_URL__(\b)/gm => "https://nuxtjs.org/"
// /(\b)__INTERCOM_TERM__(\b)/gm => "nuxt"
#include "src/_documentation/common/vue/_replacerRules.md"
#include "src/_documentation/common/_cover.md"

#include "src/_documentation/common/_tableOfContents.md"

## Overview

#include "src/_documentation/common/_whatIsTwicPics.md"

#include "src/_documentation/common/_whatIsTwicPicsComponents.md"

Discover our demonstrations and integration examples [in our online demo project](https://twicpics-nuxt3-demo.netlify.app//?utm_source=github&utm_campaign=components&utm_medium=organic).

#include "src/_documentation/common/_installation.md"

<div id='setup'/>

## Setup

<div id='setting-up-your-project'/>

### Setting-up TwicPics Components into your `Nuxt3` project

TwicPics components for `Nuxt3` comes as an `Nuxt3 Module` and is configured as [such](https://v3.nuxtjs.org/guide/features/modules#modules).

#include "src/_documentation/common/_requirement.md"

#### `nuxt.config.ts`

Add `@twicpics/components/nuxt3` to the modules section

With your twicpics configuration

```ts
export default defineNuxtConfig( {
    "modules": [ 
        `@twicpics/components/nuxt3`
    ],
    "twicpics": {
        "domain": `https://<your-domain>.twic.pics`,
    },
} );
```

```ts
// here is an example of a `nuxt.config.ts` configured with TwicPics.
export default defineNuxtConfig( {
    "modules":[
        `@twicpics/components/nuxt3`
    ] ,
    "twicpics": {
        "domain": `https://<your-domain>.twic.pics`,
        "anticipation": 0.5,
        "step": 50,
    },
} );

```

#include "src/_documentation/common/_setupOptions.md"

<div id='usage'/>

## Usage

`TwicImg` and `TwicVideo` are available in your templates as long as you have [configured the TwicPics Nuxt3 Module](#setting-up-your-project).

Just use them in your template files in place of `img` or `video` tags (see [Components Properties](#components)).

```html
<template>
  <main>
    <TwicImg src="path/to/your/image"/>
  </main>
</template>
```

<div id='basic-usage'/>

### Basic usage

```html
<!-- component.vue -->
<template>
  <main>
    <TwicImg src="path/to/your/image"/>
  </main>
</template>
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/TwicPics/components-demo-nuxt3?file=pages%2Fbasic-grid.vue&initialpath=basic-grid)

#include "src/_documentation/common/_bulkLoading.md"

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/TwicPics/components-demo-nuxt3?file=pages%2Fbulk-loading.vue&initialpath=bulk-loading)

#include "src/_documentation/common/_zoomFeature.md"

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/TwicPics/components-demo-nuxt3?file=pages%2Fzoom.vue&initialpath=zoom)

#include "src/_documentation/common/vue/_lifeCycle.md"

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/TwicPics/components-demo-nuxt3?file=pages%2Fstate.vue&initialpath=state)

#include "src/_documentation/common/_refitFeature.md"

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/TwicPics/components-demo-nuxt3?file=pages%2Frefit.vue&initialpath=refit)


<div id='style-driven-approach'/>

### Style-Driven Approach

You can set up components using pure CSS and the power of [CSS variables](#css-variables)

```html
<!-- component.vue -->
<template>
  <main>
    <div class="twic-item landscape">
      <TwicImg src="path/to/your/image"></TwicImg>
    </div>
    <div class="twic-item square">
      <TwicImg src="path/to/your/image"></TwicImg>
    </div>
    <div class="twic-item portrait">
      <TwicImg src="path/to/your/image"></TwicImg>
    </div>
    <div class="twic-item contain left">
      <TwicImg src="path/to/your/image" ratio="16/9"></TwicImg>
    </div>
    <div class="twic-item contain right">
      <TwicImg src="path/to/your/image" ratio="16/9"></TwicImg>
    </div>
    <div class="twic-item lg">
      <TwicImg src="path/to/your/image"></TwicImg>
    </div>
    <div class="twic-item md">
      <TwicImg src="path/to/your/image"></TwicImg>
    </div>
    <div class="twic-item sm">
      <TwicImg src="path/to/your/image"></TwicImg>
    </div>
    <!---
    Attributes take precedence over CSS.
    In the next example, ratio will 16/9 AND NOT 1 as defined in square css class 
--->
    <div class="cover square">
      <TwicImg src="path/to/your/image" ratio="16/9"></TwicImg>
    </div>
  </main>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
.landscape {
  --twic-ratio: calc(4 / 3);
}
.portrait {
  --twic-ratio: calc(3 / 4);
}
.square {
  --twic-ratio: calc(1);
}

.lg {
  width: 300px;
}

.md {
  width: 150px;
}

.sm {
  width: 100px;
}
</style>
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/TwicPics/components-demo-nuxt3?file=pages%2Fstyle-driven.vue&initialpath=style-driven)

<div id='responsive-example'/>

### Responsive Example

Setting up components using CSS and [CSS variables](#css-variables) enables hassle-free responsive designs.

```html
<!-- component.vue -->
<template>
  <main>
    <div class="style-driven-responsive">
      <TwicImg src="path/to/your/image"></TwicImg>
    </div>
  </main>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
.style-driven-responsive {
  --twic-ratio: calc(2 / 3);
  --twic-mode: cover;
  margin: auto;
}

@media (min-width: 640px) {
  .style-driven-responsive {
    --twic-ratio: calc(1);
  }
}

@media (min-width: 768px) {
  .style-driven-responsive {
    --twic-ratio: calc(4 / 3);
  }
}

@media (min-width: 1024px) {
  .style-driven-responsive {
    --twic-ratio: calc(16 / 9);
  }
}

@media (min-width: 1280px) {
  .style-driven-responsive {
    --twic-ratio: calc(1.85);
  }
}

@media (min-width: 1536px) {
  .style-driven-responsive {
    --twic-ratio: calc(21 / 9);
  }
}
</style>
```

Your template features a single component that will follow your CSS directives and behave responsively.
 
[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/TwicPics/components-demo-nuxt3?file=pages%2Fart-directions.vue&initialpath=art-directions)

<div id='ratio-none'/>

### Working with ratio="none"

Particularly useful when creating hero banner, you can specify the height of your image while respecting its natural aspect ratio and optimizing your _Cumulative Layout Shift_ (CLS) metric.

```html
<!-- component.vue -->  
<template>
  <TwicImg
    src="path/to/your/image"
    class="hero-image"
    ratio="none"
  ></TwicImg>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
  /* You are responsible for properly sizing the component. */
  .hero-image {
    height:500px;
  }

  @media (min-width: 1024px) {
    .hero-image {
      height:300px;
      width:100%;
    }
  }
</style>
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/TwicPics/components-demo-nuxt3?file=pages%2Fhero.vue&initialpath=hero)

#include "src/_documentation/common/_componentsProps.md"

#include "src/_documentation/common/vue/_stateType.md"

#include "src/_documentation/common/_cssVariables.md"

<div id='example'/>

## Examples

You can find usage examples [in our sample project](https://twicpics-nuxt3-demo.netlify.app/).

#include "src/_documentation/common/_gettingHelp.md"

#include "src/_documentation/common/_otherFrameworks.md"

#include "src/_documentation/common/_licence.md"