(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,a,l){},24:function(e,a,l){},25:function(e,a,l){"use strict";l.r(a);var t=l(0),n=l.n(t),c=l(8),r=l.n(c),s=(l(14),l(2)),m=l.n(s),i=function(){return n.a.createElement("header",null,n.a.createElement("div",{className:"primary"},n.a.createElement("a",{href:"https://github.com/JB1905/universal-tilt.js"},n.a.createElement(m.a,{settings:{shadow:!0,shine:!0,"shine-opacity":.5,"shine-save":!1,max:12,perspective:500,scale:1.08}},n.a.createElement("h1",null,"universal-tilt.js",n.a.createElement("span",null,"See on GitHub"))))),n.a.createElement("div",{className:"secondary"},n.a.createElement("h3",{className:"idea"},"Based on:"),n.a.createElement("div",{className:"split"},n.a.createElement("div",null,n.a.createElement("a",{href:"https://gijsroge.github.io/tilt.js/"},n.a.createElement(m.a,{settings:{shadow:!0,shine:!0,"shine-opacity":.5,"shine-save":!1,max:15,perspective:500,scale:1.1}},n.a.createElement("h2",null,"tilt.js",n.a.createElement("span",null,"by Gijs Rog\xe9"))))),n.a.createElement("div",null,n.a.createElement("a",{href:"https://micku7zu.github.io/vanilla-tilt.js/index.html"},n.a.createElement(m.a,{settings:{shadow:!0,shine:!0,"shine-opacity":.5,"shine-save":!1,max:15,perspective:500,scale:1.1}},n.a.createElement("h2",null,"vanilla-tilt.js",n.a.createElement("span",null,"by \u0218andor Sergiu"))))))))},o=l(4),u=l(5),E=(l(23),{onMouseEnter:function(e){e.style.boxShadow="0 45px 100px rgba(255, 255, 255, 0.3)"},onMouseLeave:function(e){e.style.boxShadow="0 45px 100px rgba(255, 255, 255, 0)"},onDeviceMove:function(e){e.style.boxShadow="0 45px 100px rgba(255, 255, 255, 0.3)"}}),d=function(){return n.a.createElement("main",null,n.a.createElement("section",{className:"content"},n.a.createElement("h3",null,n.a.createElement(u.a,{icon:o.a}),"How to Install"),n.a.createElement("p",null,"npm / Yarn:"),n.a.createElement("pre",{className:"language-javascript"},n.a.createElement("code",null,"$ npm install universal-tilt.js"),n.a.createElement("br",null),n.a.createElement("code",null,"$ yarn add universal-tilt.js")),n.a.createElement("p",null,"HTML script tag:"),n.a.createElement("pre",{className:"language-html"},n.a.createElement("code",null,'<script src="/path/to/universal-tilt.js"><\/script>'))),n.a.createElement("section",{className:"content"},n.a.createElement("h3",null,n.a.createElement(u.a,{icon:o.c}),"Getting Started"),n.a.createElement("p",null,"ES6+:"),n.a.createElement("pre",{className:"language-javascript"},n.a.createElement("code",null,"import UniversalTilt from 'universal-tilt.js';")),n.a.createElement("p",null,"CommonJS:"),n.a.createElement("pre",{className:"language-javascript"},n.a.createElement("code",null,"const UniversalTilt = require('universal-tilt.js');")),n.a.createElement("br",null),n.a.createElement("p",null,"JavaScript / TypeScript:"),n.a.createElement("pre",{className:"language-javascript"},n.a.createElement("code",null,"const elems = document.querySelectorAll('.tilt');"),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("code",null,"//"," v2"),n.a.createElement("br",null),n.a.createElement("code",null,"const universalTilt = UniversalTilt.init({"),n.a.createElement("br",null),n.a.createElement("code",null,"  ","elements: elems,"),n.a.createElement("br",null),n.a.createElement("code",null,"  ","settings: {"),n.a.createElement("br",null),n.a.createElement("code",null,"    //"," options..."),n.a.createElement("br",null),n.a.createElement("code",null,"  ","},"),n.a.createElement("br",null),n.a.createElement("code",null,"  ","callbacks: {"),n.a.createElement("br",null),n.a.createElement("code",null,"    //"," callbacks..."),n.a.createElement("br",null),n.a.createElement("code",null,"  ","}"),n.a.createElement("br",null),n.a.createElement("code",null,"});"),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("code",null,"//"," v1"),n.a.createElement("br",null),n.a.createElement("code",null,"const universalTilt = new UniversalTilt(elems, {"),n.a.createElement("br",null),n.a.createElement("code",null,"  //"," options..."),n.a.createElement("br",null),n.a.createElement("code",null,"});")),n.a.createElement("p",null,"jQuery:"),n.a.createElement("pre",{className:"language-html"},n.a.createElement("code",null,'<script src="https://code.jquery.com/jquery-3.4.1.min.js"><\/script>')),n.a.createElement("pre",{className:"language-javascript"},n.a.createElement("code",null,"$ npm install jquery"),n.a.createElement("br",null),n.a.createElement("code",null,"$ yarn add jquery"),n.a.createElement("br",null),n.a.createElement("code",null,"$ bower install jquery")),n.a.createElement("pre",{className:"language-javascript"},n.a.createElement("code",null,"const jQuery = require('jquery');")),n.a.createElement("pre",{className:"language-javascript"},n.a.createElement("code",null,"//"," v2"),n.a.createElement("br",null),n.a.createElement("code",null,"$('.tilt').universalTilt({"),n.a.createElement("br",null),n.a.createElement("code",null,"  ","settings: {"),n.a.createElement("br",null),n.a.createElement("code",null,"    //"," options..."),n.a.createElement("br",null),n.a.createElement("code",null,"  ","},"),n.a.createElement("br",null),n.a.createElement("code",null,"  ","callbacks: {"),n.a.createElement("br",null),n.a.createElement("code",null,"    //"," callbacks..."),n.a.createElement("br",null),n.a.createElement("code",null,"  ","}"),n.a.createElement("br",null),n.a.createElement("code",null,"});"),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("code",null,"//"," v1"),n.a.createElement("br",null),n.a.createElement("code",null,"$('.tilt').universalTilt({"),n.a.createElement("br",null),n.a.createElement("code",null,"  //"," options..."),n.a.createElement("br",null),n.a.createElement("code",null,"});"))),n.a.createElement("section",{className:"content"},n.a.createElement("h3",null,n.a.createElement(u.a,{icon:o.d}),"Autoinit"),n.a.createElement("p",null,"To use it, add ",n.a.createElement("code",null,"data-tilt")," to html element e.g:"),n.a.createElement("pre",{className:"language-html"},n.a.createElement("code",null,"<div data-tilt></div>"))),n.a.createElement("section",{className:"content"},n.a.createElement("h3",null,n.a.createElement(u.a,{icon:o.b}),"Methods"),n.a.createElement("p",null,"Destroy method (v2+)"),n.a.createElement("pre",{className:"language-javascript"},n.a.createElement("code",null,"elems.universalTilt.destroy();"))),n.a.createElement("section",{className:"example"},n.a.createElement("div",{className:"primary"},n.a.createElement(m.a,{callbacks:E,settings:{shine:!0,"shine-save":!0,"shine-opacity":.5}})),n.a.createElement("div",{className:"secondary"},n.a.createElement("h3",null,"Shine"),n.a.createElement("p",null,"To add shine to single element use following code in div tag:"),n.a.createElement("pre",{className:"language-html"},n.a.createElement("code",null,'<div data-shine="true" data-shine-opacity="0.5" data-shine-save="true">')),n.a.createElement("p",null,"To add shine to all elements place in JavaScript (or jQuery) options:"),n.a.createElement("pre",{className:"language-javascript"},n.a.createElement("code",null,"shine: true,"),n.a.createElement("br",null),n.a.createElement("code",null,"'shine-opacity': 0.5,"),n.a.createElement("br",null),n.a.createElement("code",null,"'shine-save': true")))),n.a.createElement("section",{className:"example"},n.a.createElement("div",{className:"primary"},n.a.createElement(m.a,{callbacks:E,settings:{scale:1.2}})),n.a.createElement("div",{className:"secondary"},n.a.createElement("h3",null,"Scale"),n.a.createElement("p",null,"To add scale to single element use following code in div tag:"),n.a.createElement("pre",{className:"language-html"},n.a.createElement("code",null,'<div data-scale="1.2">')),n.a.createElement("p",null,"To add scale to all elements place in JavaScript (or jQuery) options:"),n.a.createElement("pre",{className:"language-javascript"},n.a.createElement("code",null,"scale: 1.2")))),n.a.createElement("section",{className:"example"},n.a.createElement("div",{className:"primary"},n.a.createElement(m.a,{callbacks:E},n.a.createElement("div",{className:"tilt-inner"}))),n.a.createElement("div",{className:"secondary"},n.a.createElement("h3",null,"Parallax"),n.a.createElement("p",null,"Add to your tilt element:"),n.a.createElement("pre",{className:"language-css"},n.a.createElement("code",null,"transform-style: preserve-3d")),n.a.createElement("p",null,"Add to your inner elements that have to pop out:"),n.a.createElement("pre",{className:"language-css"},n.a.createElement("code",null,"transform: translateZ(20px)")))),n.a.createElement("section",{className:"example"},n.a.createElement("div",{className:"primary"},n.a.createElement(m.a,{callbacks:E,settings:{max:40,perspective:500,disabled:"X"}})),n.a.createElement("div",{className:"secondary"},n.a.createElement("h3",null,"Disable X"),n.a.createElement("p",null,"To disable X-axis of single element use:"),n.a.createElement("pre",{className:"language-html"},n.a.createElement("code",null,'<div data-disabled="x">')),n.a.createElement("p",null,"To disable X-axis of all elements place in JavaScript (or jQuery) options:"),n.a.createElement("pre",{className:"language-javascript"},n.a.createElement("code",null,"disabled: 'X'")))),n.a.createElement("section",{className:"example"},n.a.createElement("div",{className:"primary"},n.a.createElement(m.a,{callbacks:E,settings:{max:40,perspective:500,disabled:"Y"}})),n.a.createElement("div",{className:"secondary"},n.a.createElement("h3",null,"Disable Y"),n.a.createElement("p",null,"To disable Y-axis of single element use:"),n.a.createElement("pre",{className:"language-html"},n.a.createElement("code",null,'<div data-disabled="y">')),n.a.createElement("p",null,"To disable Y-axis of all elements place in JavaScript (or jQuery) options:"),n.a.createElement("pre",{className:"language-javascript"},n.a.createElement("code",null,"disabled: 'Y'")))),n.a.createElement("section",{className:"example"},n.a.createElement("div",{className:"primary"},n.a.createElement(m.a,{callbacks:E,settings:{reset:!1}})),n.a.createElement("div",{className:"secondary"},n.a.createElement("h3",null,"Reset (Only desktop)"),n.a.createElement("p",null,"To disable reset single element move on mouse out use:"),n.a.createElement("pre",{className:"language-html"},n.a.createElement("code",null,'<div data-reset="false">')),n.a.createElement("p",null,"To disable reset all elements move place in JavaScript (or jQuery) options:"),n.a.createElement("pre",{className:"language-javascript"},n.a.createElement("code",null,"reset: false")))),n.a.createElement("section",{className:"example"},n.a.createElement("div",{className:"primary"},n.a.createElement(m.a,{callbacks:E,settings:{reverse:!0}})),n.a.createElement("div",{className:"secondary"},n.a.createElement("h3",null,"Reverse"),n.a.createElement("p",null,"To reverse single element move use:"),n.a.createElement("pre",{className:"language-html"},n.a.createElement("code",null,'<div data-reverse="true">')),n.a.createElement("p",null,"To reverse all elements move place in JavaScript (or jQuery) options:"),n.a.createElement("pre",{className:"language-javascript"},n.a.createElement("code",null,"reverse: true")))),n.a.createElement("section",{className:"example"},n.a.createElement("div",{className:"primary"},n.a.createElement(m.a,{settings:{base:"window"}})),n.a.createElement("div",{className:"secondary"},n.a.createElement("h3",null,"Base (Only desktop)"),n.a.createElement("p",null,"To set base on cursor position over tilt element or window for single element use:"),n.a.createElement("pre",{className:"language-html"},n.a.createElement("code",null,'<div data-base="window">')),n.a.createElement("p",null,"To set base on cursor position over tilt element or window for all elements use:"),n.a.createElement("pre",{className:"language-javascript"},n.a.createElement("code",null,"base: 'window'")))),n.a.createElement("section",{className:"example"},n.a.createElement("div",{className:"primary"},n.a.createElement(m.a,{callbacks:E,settings:{exclude:/(iPod|iPhone|iPad|Android)/i}})),n.a.createElement("div",{className:"secondary"},n.a.createElement("h3",null,"Exclude user agents"),n.a.createElement("p",null,"To disable tilt on selected user agents for single element use:"),n.a.createElement("pre",{className:"language-html"},n.a.createElement("code",null,'<div data-exclude="/(iPod|iPhone|iPad|Android)/">')),n.a.createElement("p",null,"To disable tilt on selected user agents for all elements use:"),n.a.createElement("pre",{className:"language-javascript"},n.a.createElement("code",null,"exclude: /(iPod|iPhone|iPad|Android)/")))),n.a.createElement("section",{className:"example"},n.a.createElement("div",{className:"primary"},n.a.createElement(m.a,{callbacks:E,tiltChange:function(e){var a=document.createElement("li");a.innerHTML="<strong>X</strong>: ".concat(e.tiltX," | <strong>Y</strong>: ").concat(e.tiltY," | <strong>Angle</strong>: ").concat(e.angle),document.querySelector(".output").insertBefore(a,document.querySelector(".output").firstChild)}})),n.a.createElement("div",{className:"secondary"},n.a.createElement("h3",null,"Change event"),n.a.createElement("p",null,"Change event will output the x & y of tilting"),n.a.createElement("pre",{className:"language-javascript"},n.a.createElement("ul",{className:"output"})))))};l(24),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(function(){return n.a.createElement("div",{className:"wrap"},n.a.createElement(i,null),n.a.createElement(d,null))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,a,l){e.exports=l(25)}},[[9,1,2]]]);