## Requirements

- Node >= 14.2.0

## Installation

_install all project dependencies_

```bash
yarn
```

## Setup

**All scripts should be run from the project root**

_compiles the vitepress client and serves for development_

```bash
yarn home:dev
```

_compiles the vitepress client for production_

```bash
yarn home:build
```

_builds the ui lib into standalone pkg_

```bash
yarn lib:build
```

<!-- *For application l8r -->
<!-- _compiles and minifies the client and sever for production_

```bash
yarn build
```

_start the server for production_

```bash
yarn serve
``` -->

## Commit messages

**Prefixed emoji signify the current state of the project within that commit as a verb**

_ie. `:hammer: shop listings`_

- upgrade = :arrow_up:
- wip = :hammer:
- built = :heavy_check_mark:
- fix = :bug:
- done = :100:
- add = :heavy_plus_sign:
- remove = :scissors:
- change = :nut_and_bolt:
- refactor = :pencil:
- chore = :wrench:
- document = :book:
- styles = :art:
- cleanup = :broom:

# UI Library

_Vue 3 components based on tailwind inspired by [tails](https://devdojo.com/tailwindcss/components)._

## Usage

```js
import { createApp } from 'vue'
import Lib from '../../lib'
import App from './App'
import './assets/tailwind.css'

createApp(App)
  .use(Lib)
  .mount('#app')
```

This package requires tailwind to be [installed](https://tailwindcss.com/docs/installation) separately.

## Examples

Check the [docs](https://breezy.vercel.app) to see example components.
