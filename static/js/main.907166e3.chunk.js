(this["webpackJsonpopen-pros-cons"]=this["webpackJsonpopen-pros-cons"]||[]).push([[1],{43:function(e,n,t){var o={"./ion-action-sheet.entry.js":[64,5],"./ion-alert.entry.js":[65,6],"./ion-app_8.entry.js":[66,7],"./ion-avatar_3.entry.js":[67,17],"./ion-back-button.entry.js":[68,18],"./ion-backdrop.entry.js":[69,44],"./ion-button_2.entry.js":[70,19],"./ion-card_5.entry.js":[71,20],"./ion-checkbox.entry.js":[72,21],"./ion-chip.entry.js":[73,22],"./ion-col_3.entry.js":[74,45],"./ion-datetime_3.entry.js":[75,10],"./ion-fab_3.entry.js":[76,23],"./ion-img.entry.js":[77,46],"./ion-infinite-scroll_2.entry.js":[78,47],"./ion-input.entry.js":[79,24],"./ion-item-option_3.entry.js":[80,25],"./ion-item_8.entry.js":[81,26],"./ion-loading.entry.js":[82,27],"./ion-menu_3.entry.js":[83,28],"./ion-modal.entry.js":[84,8],"./ion-nav_2.entry.js":[85,14],"./ion-popover.entry.js":[86,9],"./ion-progress-bar.entry.js":[87,29],"./ion-radio_2.entry.js":[88,30],"./ion-range.entry.js":[89,31],"./ion-refresher_2.entry.js":[90,11],"./ion-reorder_2.entry.js":[91,16],"./ion-ripple-effect.entry.js":[92,48],"./ion-route_4.entry.js":[93,32],"./ion-searchbar.entry.js":[94,33],"./ion-segment_2.entry.js":[95,34],"./ion-select_3.entry.js":[96,35],"./ion-slide_2.entry.js":[97,49],"./ion-spinner.entry.js":[98,13],"./ion-split-pane.entry.js":[99,50],"./ion-tab-bar_2.entry.js":[100,36],"./ion-tab_2.entry.js":[101,15],"./ion-text.entry.js":[102,37],"./ion-textarea.entry.js":[103,38],"./ion-toast.entry.js":[104,39],"./ion-toggle.entry.js":[105,12],"./ion-virtual-scroll.entry.js":[106,51]};function s(e){if(!t.o(o,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=o[e],s=n[0];return t.e(n[1]).then((function(){return t(s)}))}s.keys=function(){return Object.keys(o)},s.id=43,e.exports=s},45:function(e,n,t){var o={"./ion-icon.entry.js":[107,57]};function s(e){if(!t.o(o,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=o[e],s=n[0];return t.e(n[1]).then((function(){return t(s)}))}s.keys=function(){return Object.keys(o)},s.id=45,e.exports=s},46:function(e,n,t){},48:function(e,n,t){},49:function(e,n,t){},60:function(e,n,t){},61:function(e,n,t){},62:function(e,n,t){"use strict";t.r(n);var o=t(0),s=t.n(o),r=t(23),i=t.n(r),c=t(5),a=t(10),j=t(19),l=t(27),d=(t(46),t(2)),u=function(e){var n=e.onCreate,t=Object(l.b)({mode:"onChange"}),o=t.handleSubmit,s=t.control,r=Object(l.c)({control:s}).errors;return Object(d.jsxs)("form",{onSubmit:o((function(e){n(e.reasonText)})),className:"add-reason-form",children:[Object(d.jsxs)(c.k,{children:[Object(d.jsx)(c.l,{position:"floating",children:"Reason"}),Object(d.jsx)(l.a,{control:s,name:"reasonText",render:function(e){var n=e.field,t=n.onChange,o=n.value;return Object(d.jsx)(c.j,{type:"text",autoCapitalize:"sentences","data-testid":"new-reason-form-text-area",onIonChange:function(e){return t(e.detail.value)},value:o})},rules:{required:{value:!0,message:"This field cannot be empty."}}})]}),function(e){var n;return r[e]&&Object(d.jsx)(c.s,{"data-testid":"form-error-message-text",style:{color:"red",padding:5,paddingLeft:12,fontSize:"smaller",marginTop:0,display:"block"},children:null===(n=r[e])||void 0===n?void 0:n.message})}("reasonText"),Object(d.jsx)(c.c,{"data-testid":"new-reason-form-submit",className:"submit-button",type:"submit",children:"Save"})]})},b=(t(48),t(18)),h=function(e){var n=e.title,t=e.reasons,s=e.onAddReason,r=e.onMoveReason,i=Object(o.useState)(!1),a=Object(j.a)(i,2),l=a[0],h=a[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)(c.m,{"data-testid":"reasons-list",class:"reasons-list",children:[Object(d.jsx)(c.n,{class:"ion-no-padding",children:Object(d.jsxs)(c.k,{class:"reason-list-header",children:[Object(d.jsx)(c.l,{children:n}),Object(d.jsx)(c.b,{slot:"end","data-testid":"reasons-count",children:t.length})]})}),Object(d.jsx)(c.r,{disabled:!1,onIonItemReorder:function(e){e.detail.complete(),r(e.detail.from,e.detail.to)},children:t.map((function(e,n){return Object(d.jsx)(c.e,{"data-testid":"reason",className:"reason",children:Object(d.jsxs)(c.f,{style:{display:"flex",alignItems:"center"},children:[Object(d.jsx)(c.q,{}),Object(d.jsx)(c.s,{style:{width:"100%"},children:e.text}),Object(d.jsx)(c.c,{size:"small",color:"danger",onClick:function(){console.log("asd")},children:Object(d.jsx)(c.i,{icon:b.n})})]})},e.text)}))})]}),Object(d.jsx)(c.c,{"data-testid":"add-reason-button",class:"add-reason-button",shape:"round",onClick:function(){h(!0)},children:"+"}),Object(d.jsx)(c.o,{isOpen:l,"data-testid":"new-reason-modal",backdropDismiss:!1,children:Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(c.h,{children:Object(d.jsxs)(c.u,{children:[Object(d.jsx)(c.t,{children:"Reason detail"}),Object(d.jsx)(c.d,{slot:"end",children:Object(d.jsx)(c.c,{"data-testid":"new-reason-modal-close-button",onClick:function(){return h(!1)},children:"Close"})})]})}),Object(d.jsx)(c.g,{children:Object(d.jsx)(u,{onCreate:function(e){h(!1),s({text:e})}})})]})})]})},O=(t(49),function(){var e=Object(o.useState)([]),n=Object(j.a)(e,2),t=n[0],s=n[1],r=Object(o.useState)([]),i=Object(j.a)(r,2),l=i[0],u=i[1];return Object(d.jsxs)(c.p,{id:"home-page",children:[Object(d.jsx)(c.h,{children:Object(d.jsx)(c.u,{children:Object(d.jsx)(c.t,{children:"Pros & Cons"})})}),Object(d.jsx)(c.g,{fullscreen:!0,children:Object(d.jsxs)("div",{className:"pros-and-cons-grid",children:[Object(d.jsx)("div",{className:"pros-list","data-testid":"pros-list",children:Object(d.jsx)(h,{title:"Pros",reasons:t,onAddReason:function(e){s([].concat(Object(a.a)(t),[e]))},onMoveReason:function(e,n){var o=Object(a.a)(t),r=o.splice(e,1)[0];o.splice(n,0,r),s(o)}})}),Object(d.jsx)("div",{className:"cons-list","data-testid":"cons-list",children:Object(d.jsx)(h,{title:"Cons",reasons:l,onAddReason:function(e){u([].concat(Object(a.a)(l),[e]))},onMoveReason:function(e,n){var t=Object(a.a)(l),o=t.splice(e,1)[0];t.splice(n,0,o),u(t)}})})]})})]})}),f=(t(50),t(51),t(52),t(53),t(54),t(55),t(56),t(57),t(58),t(59),t(60),t(61),function(){return Object(d.jsx)(c.a,{children:Object(d.jsx)(O,{})})});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var x=function(e){e&&e instanceof Function&&t.e(58).then(t.bind(null,125)).then((function(n){var t=n.getCLS,o=n.getFID,s=n.getFCP,r=n.getLCP,i=n.getTTFB;t(e),o(e),s(e),r(e),i(e)}))};i.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),x()}},[[62,3,4]]]);
//# sourceMappingURL=main.907166e3.chunk.js.map