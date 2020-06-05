# [universal-tilt.js](https://github.com/universal-tilt-js/universal-tilt.js)

[![NPM version](http://img.shields.io/npm/v/universal-tilt.js.svg?style=flat-square)](https://www.npmjs.com/package/universal-tilt.js)
[![NPM downloads](http://img.shields.io/npm/dm/universal-tilt.js.svg?style=flat-square)](https://www.npmjs.com/package/universal-tilt.js)

## About
JavaScript & jQuery elements movement library based on:

**[Tilt.js](https://gijsroge.github.io/tilt.js/)** by **[Gijs Rogé](https://twitter.com/GijsRoge)** and **[vanilla-tilt.js](https://micku7zu.github.io/vanilla-tilt.js/index.html)** by **[Șandor Sergiu](https://github.com/micku7zu)**

**universal-tilt.js** contains additional functions for **mobile devices with gyroscope**, new **Position Base option** and more!

### Demo
**[See plugin in action](https://universal-tilt-js.github.io/universal-tilt.js/)**

### React plugin
If you use React, install component with the implementation of the universal-tilt.js library!
**[More here](https://github.com/universal-tilt-js/react-universal-tilt/)**

## How to Install
First, install the library in your project by npm:
```sh
$ npm install universal-tilt.js
```

Or Yarn:
```sh
$ yarn add universal-tilt.js
```

**You can also connect script via one of CDNs:**<br>
bundle.run: `https://bundle.run/universal-tilt.js`<br>
jsDelivr: `https://cdn.jsdelivr.net/npm/universal-tilt.js/`<br>
unpkg: `https://unpkg.com/universal-tilt.js/`

## Getting Started
**Connect libary with project using script tag in HTML:**
```html
<script src="/path/to/universal-tilt.js"></script>
```

**ES6 import:**
```js
import UniversalTilt from 'universal-tilt.js';
```

**Or CommonJS:**
```js
const UniversalTilt = require('universal-tilt.js');
```

Next use library with:

**&bull; Vanilla JavaScript e.g:**
```js
const elems = document.querySelectorAll('.tilt');

const tilt = UniversalTilt.init({
  elements: elems,
  settings: {
    // options...
  },
  callbacks: {
    // callbacks...
  }
});
```

**&bull; or jQuery e.g:**

*Connect jQuery in HTML*
```html
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
```

*Or include via command line and CommonJS*
```sh
$ npm install jquery
$ yarn add jquery
$ bower install jquery
```

```js
const jQuery = require('jquery');
```

*And call plugin on element*
```js
$('.tilt').universalTilt({
  settings: {
    // options...
  },
  callbacks: {
    // callbacks...
  }
});
```

**&bull; Plugin supports autoinit**

To use it, add `data-tilt` to html element e.g:
```html
<div data-tilt></div>
```

## Methods
**&bull; Destroy method**
```js
elems.universalTilt.destroy();
```

**&bull; Get values method**
```js
elems.universalTilt.getValues();
```

**&bull; Reset method**
```js
elems.universalTilt.reset();
```

## Options
### Settings
Name | Type | Default | Description | Available options
-|-|-|-|-
**axis** | string | `null` | Disable axis | `X` or `Y`
**easing** | string | `cubic-bezier(.03, .98, .52, .99)` | Transition easing | `cubic-bezier`/`ease`/`linear`/etc.
**exclude** | RegExp | `null` | Disable tilt effect on selected user agents | e.g: <code>/(Firefox&#124;iPad)/</code>
**gyroscope** | | | |
**gyroscopeMinAngleX** | | | |
**gyroscopeMaxAngleX** | | | |
**gyroscopeMinAngleY** | | | |
**gyroscopeMaxAngleY** | | | |
**gyroscopeSamples** | | | |
**listener** | DOM element | `this.element` | The surface from which the location of the mouse is captured | e.g: `document.querySelector("#my-element");`
**max** | number | `35` | Max tilt value | e.g: `28`
**perspective** | number | `1000` | Tilt effect perspective | e.g: `700`
**parallax-children-shine** | | | |
**parallax-children-disable** | | | |
**parallax-children-invert** | | | |
**reset** | boolean | `true` | Enable/disable element position reset after mouseout | `true` *(enable)*, `false` *(disable)*
**reverse** | boolean | `false` | Reverse tilt effect directory | `true` *(reverse directory)*, `false` *(standard directory)*
**scale** | number | `1.0` | Element scale on mouseover | `0.9`/`1.3`/etc.
**shine** | boolean | `false` | Add/remove shine effect on mouseover | `true` *(add)*, `false` *(remove)*
**max-shine** | | | |
**shine-opacity**<sup>1</sup> | number | `0` | Add/remove shine effect on mouseover | values >= `0`  and <= `1`
**shine-prerender** | boolean | `false` | Disable/enable `.shine` & `.shine-inner` auto rendering | `false` *(enable)*, `true` - *(disable)*
**shine-save**<sup>1</sup> | boolean | `false` | Save/reset shine effect on mouseout | `true` *(save)*, `false` *(reset)*
**speed** | number | `300` | Transition speed (ms) | e.g: `500`
**startX** | number | `0` | Tilt element startup horizontal value | e.g: `20`
**startY** | number | `0` | Tilt element startup vertical value | e.g: `30`

### Callbacks
Name | Description | Available options
-|-|-
**onDestroy** | Callback on plugin destroy | `el => { /* code */ }`
**onDeviceMove**<sup>2</sup> | Callback on device move | `el => { /* code */ }`
**onInit** | Callback on plugin init | `el => { /* code */ }`
**onMouseEnter** | Callback on mouse enter | `el => { /* code */ }`
**onMouseLeave** | Callback on mouse leave | `el => { /* code */ }`
**onMouseMove** | Callback on mouse move | `el => { /* code */ }`

<sup>1</sup> *shine value must be true*<br>
<sup>2</sup> *only for devices supported device motion*

## Event
`tiltChange` event will output the x, y & angle of tilting

## License
This project is licensed under the MIT License © 2018-present Jakub Biesiada
