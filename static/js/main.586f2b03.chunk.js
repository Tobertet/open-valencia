(this["webpackJsonpopen-pros-cons"]=this["webpackJsonpopen-pros-cons"]||[]).push([[1],{43:function(e,n,t){var r={"./ion-action-sheet.entry.js":[62,5],"./ion-alert.entry.js":[63,6],"./ion-app_8.entry.js":[64,7],"./ion-avatar_3.entry.js":[65,17],"./ion-back-button.entry.js":[66,18],"./ion-backdrop.entry.js":[67,44],"./ion-button_2.entry.js":[68,19],"./ion-card_5.entry.js":[69,20],"./ion-checkbox.entry.js":[70,21],"./ion-chip.entry.js":[71,22],"./ion-col_3.entry.js":[72,45],"./ion-datetime_3.entry.js":[73,10],"./ion-fab_3.entry.js":[74,23],"./ion-img.entry.js":[75,46],"./ion-infinite-scroll_2.entry.js":[76,47],"./ion-input.entry.js":[77,24],"./ion-item-option_3.entry.js":[78,25],"./ion-item_8.entry.js":[79,26],"./ion-loading.entry.js":[80,27],"./ion-menu_3.entry.js":[81,28],"./ion-modal.entry.js":[82,8],"./ion-nav_2.entry.js":[83,14],"./ion-popover.entry.js":[84,9],"./ion-progress-bar.entry.js":[85,29],"./ion-radio_2.entry.js":[86,30],"./ion-range.entry.js":[87,31],"./ion-refresher_2.entry.js":[88,11],"./ion-reorder_2.entry.js":[89,16],"./ion-ripple-effect.entry.js":[90,48],"./ion-route_4.entry.js":[91,32],"./ion-searchbar.entry.js":[92,33],"./ion-segment_2.entry.js":[93,34],"./ion-select_3.entry.js":[94,35],"./ion-slide_2.entry.js":[95,49],"./ion-spinner.entry.js":[96,13],"./ion-split-pane.entry.js":[97,50],"./ion-tab-bar_2.entry.js":[98,36],"./ion-tab_2.entry.js":[99,15],"./ion-text.entry.js":[100,37],"./ion-textarea.entry.js":[101,38],"./ion-toast.entry.js":[102,39],"./ion-toggle.entry.js":[103,12],"./ion-virtual-scroll.entry.js":[104,51]};function o(e){if(!t.o(r,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=r[e],o=n[0];return t.e(n[1]).then((function(){return t(o)}))}o.keys=function(){return Object.keys(r)},o.id=43,e.exports=o},45:function(e,n,t){var r={"./ion-icon.entry.js":[105,57]};function o(e){if(!t.o(r,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=r[e],o=n[0];return t.e(n[1]).then((function(){return t(o)}))}o.keys=function(){return Object.keys(r)},o.id=45,e.exports=o},47:function(e,n,t){},48:function(e,n,t){},59:function(e,n,t){},60:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),s=t(23),i=t.n(s),c=t(6),a=t(11),j=t(19),d=t(27),l=t(2),u=function(e){var n=e.onCreate,t=Object(d.b)({mode:"onChange"}),r=t.handleSubmit,o=t.control,s=Object(d.c)({control:o}).errors;return Object(l.jsxs)("form",{onSubmit:r((function(e){n(e.reasonText)})),children:[Object(l.jsxs)(c.g,{children:[Object(l.jsx)(c.h,{position:"floating",children:"Reason"}),Object(l.jsx)(d.a,{control:o,name:"reasonText",render:function(e){var n=e.field,t=n.onChange,r=n.value;return Object(l.jsx)(c.n,{"data-testid":"new-reason-form-text-area",onIonChange:function(e){return t(e.detail.value)},value:r})},rules:{required:{value:!0,message:"This field cannot be empty."}}})]}),function(e){var n;return s[e]&&Object(l.jsx)(c.m,{"data-testid":"form-error-message-text",style:{color:"red",padding:5,paddingLeft:12,fontSize:"smaller",marginTop:0},children:null===(n=s[e])||void 0===n?void 0:n.message})}("reasonText"),Object(l.jsx)(c.c,{"data-testid":"new-reason-form-submit",type:"submit",children:"Save"})]})},b=(t(47),function(e){var n=e.title,t=e.reasons,o=e.onAddReason,s=Object(r.useState)(!1),i=Object(j.a)(s,2),a=i[0],d=i[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)(c.i,{"data-testid":"reasons-list",children:[Object(l.jsx)(c.j,{class:"ion-no-padding",children:Object(l.jsxs)(c.g,{class:"reason-list-header",children:[Object(l.jsx)(c.h,{children:n}),Object(l.jsx)(c.b,{slot:"end","data-testid":"reasons-count",children:t.length})]})}),t.map((function(e,n){return Object(l.jsx)(c.g,{"data-testid":"reason",detail:!1,children:Object(l.jsx)(c.h,{className:"ion-text-wrap",children:Object(l.jsx)("h2",{children:e.text})})},n)}))]}),Object(l.jsx)(c.c,{"data-testid":"add-reason-button",onClick:function(){d(!0)},children:"Add"}),Object(l.jsx)(c.k,{isOpen:a,"data-testid":"new-reason-modal",backdropDismiss:!1,children:Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(c.f,{children:Object(l.jsxs)(c.p,{children:[Object(l.jsx)(c.o,{children:"Reason detail"}),Object(l.jsx)(c.d,{slot:"end",children:Object(l.jsx)(c.c,{"data-testid":"new-reason-modal-close-button",onClick:function(){return d(!1)},children:"Close"})})]})}),Object(l.jsx)(c.e,{children:Object(l.jsx)(u,{onCreate:function(e){d(!1),o({text:e})}})})]})})]})}),h=(t(48),function(){var e=Object(r.useState)([]),n=Object(j.a)(e,2),t=n[0],o=n[1],s=Object(r.useState)([]),i=Object(j.a)(s,2),d=i[0],u=i[1];return Object(l.jsxs)(c.l,{id:"home-page",children:[Object(l.jsx)(c.f,{children:Object(l.jsx)(c.p,{children:Object(l.jsx)(c.o,{children:"Pros & Cons"})})}),Object(l.jsx)(c.e,{fullscreen:!0,children:Object(l.jsxs)("div",{className:"pros-and-cons-grid",children:[Object(l.jsx)("div",{"data-testid":"pros-list",children:Object(l.jsx)(b,{title:"Pros",reasons:t,onAddReason:function(e){o([].concat(Object(a.a)(t),[e]))}})}),Object(l.jsx)("div",{"data-testid":"cons-list",children:Object(l.jsx)(b,{title:"Cons",reasons:d,onAddReason:function(e){u([].concat(Object(a.a)(d),[e]))}})})]})})]})}),O=(t(49),t(50),t(51),t(52),t(53),t(54),t(55),t(56),t(57),t(58),t(59),function(){return Object(l.jsx)(c.a,{children:Object(l.jsx)(h,{})})});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var f=function(e){e&&e instanceof Function&&t.e(58).then(t.bind(null,123)).then((function(n){var t=n.getCLS,r=n.getFID,o=n.getFCP,s=n.getLCP,i=n.getTTFB;t(e),r(e),o(e),s(e),i(e)}))};i.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(O,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),f()}},[[60,3,4]]]);
//# sourceMappingURL=main.586f2b03.chunk.js.map