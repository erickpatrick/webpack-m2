# Webpack Magento 2
Magento 2 module integrating Webpack into the frontend workflow

## Motivation
For some people, Magento's default frontend workflow and choices are not the best ones for the current web development world. As such, they need/want a up to date workflow and set of tools matching their expectations. This repository aims to improve this situation by completely replacing Knockout and Less by Webpack, Vue.js and Sass.

## Working with Webpack Magento 2
Install this module into your Magento 2 code base through composer (further installation instructions still missing as there's no composer package published yet, though one can still install it through direct configuration of this repository to be used). It will be base point of your frontend development.

You should still create your CSS/Scss and JavaScript as advised by Magento, i.e, each module will have their own JS/CSS code and entries points. However, the default placement of files is a little bit different (if not odd, for some). One will put everything inside the path `<path-to-module>/view/frontend/web/js/src`.

The reason for this is that it is following the base structure that the [Vue.js Webpack template uses](https://github.com/vuejs-templates/webpack), which we find good enough to structure the code. So, in other words, the structure will be like:

```bash
<path-to-module>
- view/frontend/web/js
  - src
    - main.js
  - static
  - test
  - README.md (optional)
```

The only required file is `<path-to-module>/view/frontend/web/js/src/main.js` which is the entry point. In there you can import your JavaScript modules, Vue.js components or Scss with `import` and they will be linted and converted using the appropiated loader (`sass-loader`, `babel-loader`, `vue-loader`, etc).

> For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

Inside `src`, `static` and `test`, any substructure is allowed. For example, for Scss files, we normally create a folder under `<path-to-module>/view/frontend/web/js/src/scss` and create a file `main.scss` there that will be imported in `main.js`.

## Compilation/Build phase

First, run Magento's `php bin/magento setup:static-content:deploy` to deploy this code to Magento's public path, and inside the folder `pub/static/frontend/<VENDOR>/<THEME>/<I18N>/ErickPatrick_Webpack/js`, run `npm install` or `yarn` to install all dependencies. After that, run one of the following

```bash
# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

This will look for all folders following that specific structure pictured above, grab their contents and compiled/build them. When the build is finished, it will also create a new `default_head_blocks.xml` inside `<path-to-webpack-magento-2>/view/frontend/layout` which will be responsible to load the newly generated build files.
