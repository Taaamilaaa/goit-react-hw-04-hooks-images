(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{28:function(e,t,c){e.exports={loader:"Loader_loader__25NS9"}},35:function(e,t,c){},36:function(e,t,c){},77:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),o=c(8),r=c.n(o),i=(c(35),c(11)),s=c(4),u=(c(36),c(23)),l=(c(12),c(13),c(1));function j(e){var t=Object(n.useState)(""),c=Object(s.a)(t,2),a=c[0],o=c[1];return Object(l.jsx)("header",{className:"Searchbar",children:Object(l.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),""===a.trim())return Object(u.alert)({text:"Please, enter your query!"});e.onSubmit(a),o("")},className:"SearchForm",children:[Object(l.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(l.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(l.jsx)("input",{className:"SearchForm-input",type:"text",value:a,name:"value",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:function(e){o(e.currentTarget.value.toLowerCase())}})]})})}var b=function(e){var t=e.imgS,c=e.imgL,n=e.onClick;return Object(l.jsx)("li",{className:"ImageGalleryItem",children:Object(l.jsx)("img",{src:t,alt:"",onClick:function(){return n(c)},className:"ImageGalleryItem-image"})})},m=function(e){var t=e.images,c=e.onClick;return Object(l.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){var t=e.id,n=e.webformatURL,a=e.largeImageURL;return Object(l.jsx)(b,{imgL:a,imgS:n,onClick:c},t)}))})},h=c(24),O=c.n(h),d=function(e){var t=e.text,c=e.onClick;return Object(l.jsx)("button",{className:"Button",onClick:c,children:t})},f=document.querySelector("#portal");function g(e){var t=e.showModal,c=e.children,a=function e(c){"Escape"===c.code&&(t(),window.removeEventListener("keydown",e))};return Object(n.useEffect)((function(){window.addEventListener("keydown",a)}),[]),Object(o.createPortal)(Object(l.jsx)("div",{className:"Overlay",onClick:function(e){e.currentTarget===e.target&&t()},children:Object(l.jsx)("div",{className:"Modal",children:c})}),f)}c(22);var p=c(25),x=c(26),v=c(30),S=c(29),y=c(27),k=c.n(y),w=c(28),N=c.n(w),C=function(e){Object(v.a)(c,e);var t=Object(S.a)(c);function c(){return Object(p.a)(this,c),t.apply(this,arguments)}return Object(x.a)(c,[{key:"render",value:function(){return Object(l.jsx)(k.a,{type:"Oval",color:"#00BFFF",height:80,width:80,className:N.a.loader})}}]),c}(a.a.Component);var E=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),c=t[0],a=t[1],o=Object(n.useState)(1),r=Object(s.a)(o,2),u=r[0],b=r[1],h=Object(n.useState)([]),f=Object(s.a)(h,2),p=f[0],x=f[1],v=Object(n.useState)(""),S=Object(s.a)(v,2),y=S[0],k=S[1],w=Object(n.useState)(!1),N=Object(s.a)(w,2),E=N[0],F=N[1],L=Object(n.useState)(!1),I=Object(s.a)(L,2),_=I[0],M=I[1];Object(n.useEffect)((function(){c&&(F(!0),function(e,t){var c="".concat("https://pixabay.com/api/","?q=").concat(e,"&page=").concat(t,"&key=").concat("23114127-913a50287ab6c0ea340feb686","&image_type=photo&orientation=horizontal&per_page=12");return O.a.get(c).then((function(e){return e.data.hits}))}(c,u).then((function(e){x([].concat(Object(i.a)(p),Object(i.a)(e))),console.log(u)})).catch((function(e){return e({text:"No image!",delay:1e3})})).finally((function(){return F(!1)})))}),[u,c]),Object(n.useEffect)((function(){p.length>12&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}),[p]);var q=function(e){k(e),B()},B=function(){M(!_)};return Object(l.jsxs)("div",{className:"Container",children:[Object(l.jsx)(j,{onSubmit:function(e){a(e),x([]),b(1)}}),E&&Object(l.jsx)(C,{}),Object(l.jsx)(m,{images:p,onClick:q}),p.length>0&&Object(l.jsx)(d,{text:"load more",onClick:function(){b(u+1)}}),_&&Object(l.jsx)(g,{showModal:q,modalState:_,children:Object(l.jsx)("img",{src:y,alt:""})})]})};r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(E,{})}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.a53c5a8b.chunk.js.map