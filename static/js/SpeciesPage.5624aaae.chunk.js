(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{54:function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return s}),n.d(e,"c",function(){return i}),n.d(e,"d",function(){return r}),n.d(e,"e",function(){return l}),n.d(e,"f",function(){return u});n(58);var c="https://swapi.dev/api/",a=function(){return fetch("".concat(c,"films"))},s=function(){return fetch("".concat(c,"people").replace("http","https"))},i=function(){return fetch("".concat(c,"planets").replace("http","https"))},r=function(){return fetch("".concat(c,"species").replace("http","https"))},l=function(){return fetch("".concat(c,"starships").replace("http","https"))},u=function(){return fetch("".concat(c,"vehicles").replace("http","https"))}},55:function(t,e,n){t.exports={list:"style_list__2RxpR",list__item:"style_list__item__2PSep",list__btn:"style_list__btn__3hf7H",list__title:"style_list__title__11Djc"}},99:function(t,e,n){"use strict";n.r(e);var c=n(56),a=n(0),s=n.n(a),i=n(57),r=n.n(i),l=n(54),u=n(55),o=n.n(u);e.default=function(t){var e=Object(a.useState)([]),n=Object(c.a)(e,2),i=n[0],u=n[1];Object(a.useEffect)(function(){_()},[]);var _=function(){return Object(l.d)().then(function(t){var e=t.data;return u(e.results)})};return s.a.createElement("ul",{className:o.a.list},i.map(function(t){var e=t.name,n=t.classification,c=t.language,a=t.skin_colors;return s.a.createElement("li",{className:o.a.list__item,key:r()()},s.a.createElement("h2",{className:o.a.list__title},e),s.a.createElement("span",{className:o.a.list__date},"Classification: ",n),s.a.createElement("p",{className:o.a.list__hair_color},"Language: ",c),s.a.createElement("p",{className:o.a.list__height},"Skin colors: ",a))}))}}}]);
//# sourceMappingURL=SpeciesPage.5624aaae.chunk.js.map