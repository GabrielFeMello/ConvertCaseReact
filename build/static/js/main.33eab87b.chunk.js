(this["webpackJsonpconvert-case-react"]=this["webpackJsonpconvert-case-react"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(6),i=n.n(r),s=(n(12),n(13),n(14),n(0));var o=function(){return Object(s.jsx)("header",{className:"App-header",children:Object(s.jsx)("a",{children:"Formatador"})})},l=n(7),u=n(4);n(16);var j=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),i=Object(u.a)(r,2),o=i[0],j=i[1],d=Object(c.useState)([]),b=Object(u.a)(d,2),p=b[0],h=b[1];function f(e){p.includes(e)?h(p.filter((function(t){return t!==e}))):h([].concat(Object(l.a)(p),[e]))}var v={capitalize:"Primeira Mai\xfascula",uppercase:"Tudo mai\xfasculo",lowercase:"Tudo min\xfasculo",alternatetext:"TeXtO aLtErNaDo"};return Object(s.jsxs)("div",{class:"container",children:[Object(s.jsx)("textarea",{className:"textareaInput ".concat(o," ").concat(p.join(" ")),value:n,onChange:function(e){var t=e.target.value;a(t)},placeholder:"Digite seu texto aqui"}),Object(s.jsx)("p",{children:"Formata\xe7\xe3o"}),Object(s.jsxs)("div",{class:"btnGroup",children:[Object(s.jsx)("button",{onClick:function(){n.split("\n").map((function(e){return function(e){return e.split(".").map((function(e){return""})).join(".")}(e)})).join("\n"),j("phraseStart")},className:"phraseStart"===o?"activeClass":"",children:"Come\xe7o de frase."}),["capitalize","uppercase","lowercase","alternatetext"].map((function(e){return Object(s.jsx)("button",{onClick:function(){return"alternatetext"!==e?(t=e,a((function(e){return e.toLowerCase()})),void j(t)):(a((function(e){return e.split("").map((function(e,t){return function(e,t){return t%2==0?e.toUpperCase():e.toLowerCase()}(e,t)})).join("")})),void j("alternatetext"));var t},className:o===e?"activeClass":"",children:v[e]})}))]}),Object(s.jsxs)("div",{class:"btnGroup",children:[Object(s.jsx)("button",{onClick:function(){return f("underline")},className:"underline ".concat(p.includes("underline")?"activeClass":""),children:"sublinar"}),Object(s.jsx)("button",{onClick:function(){return f("overline")},className:"overline ".concat(p.includes("overline")?"activeClass":""),children:"sublinar"}),Object(s.jsx)("button",{onClick:function(){return f("line-through")},className:"line-through ".concat(p.includes("line-through")?"activeClass":""),children:"sublinar"}),Object(s.jsx)("button",{onClick:function(){return f("italic")},className:"italic ".concat(p.includes("italic")?"activeClass":""),children:"It\xe1lico"}),Object(s.jsx)("button",{onClick:function(){return f("bold")},className:"bold ".concat(p.includes("bold")?"activeClass":""),children:"Negrito"})]})]})};var d=function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(o,{}),Object(s.jsx)(j,{})]})};i.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(d,{})}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.33eab87b.chunk.js.map