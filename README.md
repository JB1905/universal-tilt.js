# [universal-tilt.js](https://github.com/jb1905/universal-tilt.js)

[![NPM version](http://img.shields.io/npm/v/universal-tilt.js.svg?style=flat-square)](https://www.npmjs.com/package/universal-tilt.js)
[![NPM downloads](http://img.shields.io/npm/dm/universal-tilt.js.svg?style=flat-square)](https://www.npmjs.com/package/universal-tilt.js)

JavaScript & jQuery elements movement library based on:

**[Tilt.js](https://gijsroge.github.io/tilt.js/)** by **[Gijs Rogé](https://twitter.com/GijsRoge)** and **[vanilla-tilt.js](https://micku7zu.github.io/vanilla-tilt.js/index.html)** by **[Șandor Sergiu](https://github.com/micku7zu)**

**universal-tilt.js** contains additional functions for **mobile devices with gyroscope**, new **Position Base option** and more!

## Demo
**[See plugin in action](https://jb1905.github.io/universal-tilt.js/)**

## React plugin
If You use React, install component, with the implementation of the universal-tilt.js library!
**[More here](https://github.com/JB1905/react-universal-tilt/)**

## How to Install
At the beginning install the library in Your project via npm or Yarn:
```sh
$ npm install universal-tilt.js
$ yarn add universal-tilt.js
```

## Getting Started
**Connect using script tag in HTML:**
```html
<script src="/directory/to/library/folder/universal-tilt.js"></script>
```

**Or CommonJS/ES6 import:**
```js
const UniversalTilt = require('universal-tilt.js'); // CommonJS
import UniversalTilt from 'universal-tilt.js'; // ES6
```

Next use library with:

**&bull; Vanilla JavaScript e.g:**
```js
const elems = document.querySelectorAll('.tilt');
const universalTilt = new UniversalTilt(elems, {
  // options...
});
```

**&bull; or jQuery e.g:**

*Connect jQuery in HTML*
```html
<script src="https://code.jquery.com/jquery-3.4.0.min.js"></script>
```

*or include via command line and CommonJS*
```sh
$ npm install jquery
$ yarn add jquery
$ bower install jquery
```

```js
const jQuery = require('jquery');
```

*and call plugin on element*
```js
$('.tilt').universalTilt({
  // options...
});
```

**&bull; Plugin supports autoinit**

To use it, add `data-tilt` to html element e.g:
```html
<div data-tilt></div>
```

## Options
Name | Type | Default | Description | Available options
-|-|-|-|-
**position-base** | string | `element` | The surface from which the location of the mouse is captured | `element` or `window`
**reset** | boolean | `true` | Enable/disable element position reset after mouseout | `true` *(enable)*, `false` *(disable)*
**exclude** | RegExp | `null` | Disable tilt effect on selected user agents | e.g: <code>/(Mozilla&#124;iPad)/</code>
**shine** | boolean | `false` | Add/remove shine effect on mouseover | `true` *(add)*, `false` *(remove)*
**shine-opacity**<sup>1</sup> | number | `0` | Add/remove shine effect on mouseover | values >= `0`  and <= `1`
**shine-save**<sup>1</sup> | boolean | `false` | Save/reset shine effect on mouseout | `true` *(save)*, `false` *(reset)*
**max** | number | `35` | Max tilt value | e.g: `28`
**perspective** | number | `1000` | Tilt effect perspective | e.g: `700`
**scale** | number | `1.0` | Element scale on mouseover | `0.9`/`1.3`/etc.
**disabled** | string | `null` | Disable axis | `x` or `y`
**reverse** | boolean | `false` | Reverse tilt effect directory | `true` *(reverse directory)*, `false` *(standard directory)*
**speed** | number | `300` | Transition speed (ms) | e.g: `500`
**easing** | string | `cubic-bezier(.03, .98, .52, .99)` | Transition easing | `cubic-bezier`/`ease`/`linear`/etc.
**onMouseEnter** | function | `null` | Callback on mouse enter | `el => { // code }`
**onMouseMove** | function | `null` | Callback on mouse move | `el => { // code }`
**onMouseLeave** | function | `null` | Callback on mouse leave | `el => { // code }`
**onDeviceMove**<sup>2</sup> | function | `null` | Callback on device move | `el => { // code }`

<sup>1</sup> *shine value must be true*<br>
<sup>2</sup> *only for devices supported device motion*

## Event
`tiltChange` event will output the x, y & angle of tilting

## License
This project is licensed under the MIT License © 2018-present Jakub Biesiada
