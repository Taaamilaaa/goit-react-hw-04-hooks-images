(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{28:function(e,t,n){e.exports={loader:"Loader_loader__25NS9"}},35:function(e,t,n){},36:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(8),o=n.n(r),i=(n(35),n(10)),s=n(4),u=(n(36),n(23)),l=(n(12),n(13),n(1));function j(e){var t=Object(c.useState)(""),n=Object(s.a)(t,2),a=n[0],r=n[1];return Object(l.jsx)("header",{className:"Searchbar",children:Object(l.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),""===a.trim())return Object(u.alert)({text:"Please, enter your query!"});e.onSubmit(a),r("")},className:"SearchForm",children:[Object(l.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(l.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(l.jsx)("input",{className:"SearchForm-input",type:"text",value:a,name:"value",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:function(e){r(e.currentTarget.value.toLowerCase())}})]})})}var b=function(e){var t=e.imgS,n=e.imgL,c=e.onClick;return Object(l.jsx)("li",{className:"ImageGalleryItem",children:Object(l.jsx)("img",{src:t,alt:"",onClick:function(){return c(n)},className:"ImageGalleryItem-image"})})},m=function(e){var t=e.images,n=e.onClick;return Object(l.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){var t=e.id,c=e.webformatURL,a=e.largeImageURL;return Object(l.jsx)(b,{imgL:a,imgS:c,onClick:n},t)}))})},h=n(24),O=n.n(h),d=function(e,t){var n="".concat("https://pixabay.com/api/","?q=").concat(e,"&page=").concat(t,"&key=").concat("23114127-913a50287ab6c0ea340feb686","&image_type=photo&orientation=horizontal&per_page=12");return O.a.get(n).then((function(e){return e.data.hits}))},f=function(e){var t=e.text,n=e.onClick;return Object(l.jsx)("button",{className:"Button",onClick:n,children:t})},g=document.querySelector("#portal");function p(e){var t=e.showModal,n=e.children,a=function e(n){"Escape"===n.code&&(t(),window.removeEventListener("keydown",e))};return Object(c.useEffect)((function(){window.addEventListener("keydown",a)}),[]),Object(r.createPortal)(Object(l.jsx)("div",{className:"Overlay",onClick:function(e){e.currentTarget===e.target&&t()},children:Object(l.jsx)("div",{className:"Modal",children:n})}),g)}n(22);var x=n(25),v=n(26),S=n(30),y=n(29),k=n(27),w=n.n(k),N=n(28),C=n.n(N),F=function(e){Object(S.a)(n,e);var t=Object(y.a)(n);function n(){return Object(x.a)(this,n),t.apply(this,arguments)}return Object(v.a)(n,[{key:"render",value:function(){return Object(l.jsx)(w.a,{type:"Oval",color:"#00BFFF",height:80,width:80,className:C.a.loader})}}]),n}(a.a.Component);var L=function(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(1),o=Object(s.a)(r,2),u=o[0],b=o[1],h=Object(c.useState)([]),O=Object(s.a)(h,2),g=O[0],x=O[1],v=Object(c.useState)(""),S=Object(s.a)(v,2),y=S[0],k=S[1],w=Object(c.useState)(!1),N=Object(s.a)(w,2),C=N[0],L=N[1],E=Object(c.useState)(!1),I=Object(s.a)(E,2),_=I[0],M=I[1];Object(c.useEffect)((function(){g&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}),[g]);var T=function(e){k(e),q()},q=function(){M(!_)};return Object(l.jsxs)("div",{className:"Container",children:[Object(l.jsx)(j,{onSubmit:function(e){a(e),b(1),x([]),L(!0),d(e,u).then((function(e){x(Object(i.a)(e))})).catch((function(e){return e("There are no images!!!")})).finally((function(){return L(!1)}))}}),C&&Object(l.jsx)(F,{}),Object(l.jsx)(m,{images:g,onClick:T}),g.length>0&&Object(l.jsx)(f,{text:"load more",onClick:function(){L(!C),d(n,u).then((function(e){x((function(t){return[].concat(Object(i.a)(t),Object(i.a)(e))})),b((function(e){return e+1}))})).catch((function(e){return e({text:"No image!",delay:1e3})})).finally((function(){return L(!C)}))}}),_&&Object(l.jsx)(p,{showModal:T,modalState:_,children:Object(l.jsx)("img",{src:y,alt:""})})]})};o.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(L,{})}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.e1cb2eaa.chunk.js.map