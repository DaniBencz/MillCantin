(this.webpackJsonpmillcantin_backend=this.webpackJsonpmillcantin_backend||[]).push([[0],{10:function(e,i,c){},11:function(e,i,c){},12:function(e,i,c){"use strict";c.r(i);var t=c(0),n=c(1),b=c.n(n),l=c(3),a=c.n(l),p=(c(10),c(4)),d=c.p+"static/media/github.48b77377.png",g=(c(11),function(e){var i=e.details,c=i.price,n=i.soup,b=i.soup_allergenes,l=i.main,a=i.main_allergenes,p=i.letter;return Object(t.jsxs)("div",{id:"display",children:[Object(t.jsx)("h2",{children:"Menu ".concat(p)}),Object(t.jsx)("h2",{id:"price",children:c}),Object(t.jsx)("p",{children:"Soup: ".concat(n)}),Object(t.jsx)("p",{children:b.map((function(e,i){return Object(t.jsx)("img",{alt:"soup allergenes",src:e},i.toString())}))}),Object(t.jsx)("p",{children:"Main: ".concat(l)}),Object(t.jsx)("p",{children:a.map((function(e,i){return Object(t.jsx)("img",{alt:"main allergenes",src:e},i.toString())}))})]})}),j=function(){var e=Object(n.useState)(!1),i=Object(p.a)(e,2),c=i[0],b=i[1],l=function(e){fetch("http://localhost:4000/api/menus/".concat(e)).then((function(e){return e.json()})).then((function(e){b(e)}))};return Object(t.jsxs)("div",{className:"App",children:[Object(t.jsxs)("header",{className:"App-header",children:[Object(t.jsx)("div",{id:"repo",children:Object(t.jsx)("a",{href:"https://github.com/DaniBencz/MillCantin",rel:"noopener noreferrer",target:"_blank",children:Object(t.jsx)("img",{alt:"gitHub repo",src:d,width:"60",height:"60"})})}),Object(t.jsx)("div",{children:Object(t.jsx)("img",{alt:"Mill Cantin logo",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDQ5OThFQzM5QjU0MTFFQTgzNTI5MzgzMDhEQkQ3Q0QiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDQ5OThFQzQ5QjU0MTFFQTgzNTI5MzgzMDhEQkQ3Q0QiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowNDk5OEVDMTlCNTQxMUVBODM1MjkzODMwOERCRDdDRCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowNDk5OEVDMjlCNTQxMUVBODM1MjkzODMwOERCRDdDRCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pi2APNQAAB4SSURBVHja7D0HWFTH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",width:"60",height:"60"})})]}),Object(t.jsxs)("div",{id:"welcome",children:[Object(t.jsx)("h2",{children:"Mill Cantin totally fake clone site"}),Object(t.jsx)("h3",{children:"which menu are you interested in?"})]}),Object(t.jsxs)("div",{id:"buttons",children:[Object(t.jsx)("button",{onClick:function(){return l("a")},children:"Menu A"}),Object(t.jsx)("button",{onClick:function(){return l("b")},children:"Menu B"})]}),c?Object(t.jsx)(g,{details:c}):null]})},s=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,13)).then((function(i){var c=i.getCLS,t=i.getFID,n=i.getFCP,b=i.getLCP,l=i.getTTFB;c(e),t(e),n(e),b(e),l(e)}))};a.a.render(Object(t.jsx)(b.a.StrictMode,{children:Object(t.jsx)(j,{})}),document.getElementById("root")),s()}},[[12,1,2]]]);
//# sourceMappingURL=main.32c152f3.chunk.js.map