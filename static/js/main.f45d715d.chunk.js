(this.webpackJsonpdocs=this.webpackJsonpdocs||[]).push([[0],{11:function(e,t,n){e.exports={explorer:"PlacesExplorer_explorer__2SQiA",openedMobile:"PlacesExplorer_openedMobile__3L8kc",menuOpenButtonWrapper:"PlacesExplorer_menuOpenButtonWrapper__X7jgQ",menuOpened:"PlacesExplorer_menuOpened__4Nd4H",menuCloseButtonWrapper:"PlacesExplorer_menuCloseButtonWrapper__35Q09",explorerHeader:"PlacesExplorer_explorerHeader__2yFiQ",explorerBody:"PlacesExplorer_explorerBody__ArcXN",placesTree:"PlacesExplorer_placesTree__kuQ1H",spinnerWrapper:"PlacesExplorer_spinnerWrapper__2k5vr"}},13:function(e,t,n){e.exports={viewComponent:"MainView_viewComponent__jPp2U",modalOpened:"MainView_modalOpened__2sRQb",info:"MainView_info__3LFY5",inventoryListWrapper:"MainView_inventoryListWrapper__19dof",sectionTopRow:"MainView_sectionTopRow__2HwGN",inventoryListHeader:"MainView_inventoryListHeader__1EHNZ",inventoryList:"MainView_inventoryList__U92cL"}},21:function(e,t,n){e.exports={inventoryListItemWrapper:"InventoryListItem_inventoryListItemWrapper__QBSkm",inventoryListItem:"InventoryListItem_inventoryListItem__3YmUJ",iconWrapper:"InventoryListItem_iconWrapper__gOOhw",spinnerWrapper:"InventoryListItem_spinnerWrapper__2Zmel"}},25:function(e,t,n){e.exports={modalWrapper:"AddItemModal_modalWrapper__2m9yD",modal:"AddItemModal_modal__2QLio",spinnerWrapper:"AddItemModal_spinnerWrapper__2HpYO"}},31:function(e,t,n){e.exports={loaderWrapper:"Spinner_loaderWrapper__2y39y"}},33:function(e,t,n){e.exports={icon:"InventoryActionButton_icon__3H3id"}},40:function(e,t,n){},46:function(e,t,n){},5:function(e,t,n){e.exports={nodeLi:"RecrusiveTree_nodeLi__2FBsy",treeLi:"RecrusiveTree_treeLi__18et9",name:"RecrusiveTree_name__1pEIx",selected:"RecrusiveTree_selected__TeRY7",filled:"RecrusiveTree_filled__3uOCt",iconWrapper:"RecrusiveTree_iconWrapper__2Z6Oa",arrowIcon:"RecrusiveTree_arrowIcon__1zb4k",opened:"RecrusiveTree_opened__Al9Sf",detailsWrapper:"RecrusiveTree_detailsWrapper__2vdYu",closed:"RecrusiveTree_closed__37Ehs",detailsWrapperAnimated:"RecrusiveTree_detailsWrapperAnimated__3pWpT"}},52:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(2),r=n.n(c),i=n(23),o=n.n(i),s=(n(40),n(14)),l=(n(46),n(4)),d=n(11),p=n.n(d),u=n(5),m=n.n(u),j=n.p+"static/media/angle-arrow-down.a8dbb320.svg",v=function e(t){var n="".concat(m.a.detailsWrapper),r="".concat(m.a.detailsWrapper," ").concat(m.a.detailsWrapperAnimated),i="".concat(m.a.detailsWrapper," ").concat(m.a.closed),o="".concat(m.a.arrowIcon),s="".concat(m.a.arrowIcon," ").concat(m.a.opened),d="".concat(m.a.selected),p=Object(c.useState)(!1),u=Object(l.a)(p,2),v=u[0],f=u[1],b=Object(c.useState)(i),_=Object(l.a)(b,2),O=_[0],x=_[1],h=Object(c.useState)(o),y=Object(l.a)(h,2),I=y[0],P=y[1];function T(){f(!0),t.setSelectedPlaceAction(t.place)}var g=Object(c.useRef)(!0);function W(n){return n.parts?Object(a.jsx)(e,{place:n,selectedPlace:t.selectedPlace,setSelectedPlaceAction:t.setSelectedPlaceAction,children:n.parts.map((function(e){return W(e)}))},n.id):Object(a.jsx)(e,{setSelectedPlaceAction:t.setSelectedPlaceAction,selectedPlace:t.selectedPlace,place:n},n.id)}return Object(c.useEffect)((function(){g.current?g.current=!1:(v||(P(o),x(n),setTimeout((function(){x(i)}),150)),v&&(P(s),x(n),setTimeout((function(){x(r)}),150)))}),[!v]),t.place.parts?Object(a.jsxs)("div",{className:"".concat(m.a.treeLi," ").concat(m.a.nodeLi),children:[Object(a.jsx)("span",{className:m.a.iconWrapper,onClick:function(){f(!v)},children:Object(a.jsx)("img",{src:j,className:I,alt:"arrow"})}),Object(a.jsxs)("span",{className:"".concat(m.a.name," ").concat(t.selectedPlace.id===t.place.id?d:""),onClick:T,children:[t.place.name,t.place.isFilled&&Object(a.jsx)("span",{className:m.a.filled})]}),Object(a.jsx)("div",{className:O,children:t.place.parts.map((function(e){return W(e)}))})]}):Object(a.jsx)("div",{className:m.a.treeLi,children:Object(a.jsxs)("span",{className:"".concat(m.a.name," ").concat(t.selectedPlace.id===t.place.id?d:""," "),onClick:T,children:[t.place.name,t.place.isFilled&&Object(a.jsx)("span",{className:m.a.filled})]})})},f=r.a.memo(v),b=n(31),_=n.n(b),O=n.p+"static/media/Blocks-1s-207px.3d4370cf.svg",x=function(e){return Object(a.jsx)("div",{className:_.a.loaderWrapper,children:Object(a.jsx)("img",{src:O,width:e.width,className:_.a.loader})})},h=n.p+"static/media/clear-cross.e4e5d624.svg",y=n.p+"static/media/burger-menu.69877d2f.svg",I=function(e){var t=Object(c.useState)(!1),n=Object(l.a)(t,2),r=n[0],i=n[1];function o(){i(!r)}return Object(a.jsxs)("div",{className:"".concat(p.a.explorer," ").concat(r&&p.a.openedMobile),children:[Object(a.jsx)("div",{className:p.a.explorerHeader,children:Object(a.jsx)("h1",{children:"\u041f\u043e\u043c\u0435\u0449\u0435\u043d\u0438\u044f"})}),Object(a.jsx)("div",{className:p.a.explorerBody,children:e.placesTree.length?Object(a.jsx)("div",{className:p.a.placesTree,children:e.placesTree.map((function(t){return Object(a.jsx)(f,{setSelectedPlaceAction:e.setSelectedPlaceAction,selectedPlace:e.selectedPlace,place:t},t.id)}))}):Object(a.jsx)("div",{className:p.a.spinnerWrapper,children:Object(a.jsx)(x,{width:150})})}),Object(a.jsx)("div",{onClick:o,className:p.a.menuCloseButtonWrapper,children:Object(a.jsx)("img",{src:h,alt:"close-menu",width:"40"})}),Object(a.jsx)("div",{onClick:o,className:"".concat(p.a.menuOpenButtonWrapper," ").concat(r&&p.a.menuOpened),children:Object(a.jsx)("img",{src:y,alt:"open-menu",width:"40"})})]})},P=n(8),T=n.n(P),g=n(19),W=n(26),N=n(10),S=n(12),w=(n(48),{apiKey:"AIzaSyD6DnGbVfdJlDJ_pEOUfDfTDJrA8j3lIs8",authDomain:"dv-inventory.firebaseapp.com",databaseURL:"https://dv-inventory.firebaseio.com",projectId:"dv-inventory",storageBucket:"dv-inventory.appspot.com",messagingSenderId:"130062240176",appId:"1:130062240176:web:ecbca5d29b37d25c6cee75"});function E(){return S.a.firestore().collection("inventory").get().then((function(e){return e.docs.filter((function(e){return void 0!==e.data().place})).map((function(e){var t,n;return{id:e.id,name:null===(t=e.data())||void 0===t?void 0:t.name,count:null===(n=e.data())||void 0===n?void 0:n.count,placeId:e.data().place.id}}))}))}function k(e){return S.a.firestore().collection("inventory").doc(e).delete().then((function(){}))}function L(e,t,n){return S.a.firestore().collection("inventory").doc().set({name:e,count:n,place:S.a.firestore().collection("places").doc(t)}).then((function(){}))}function F(e,t,n,a){return S.a.firestore().collection("inventory").doc(e).set({name:t,count:n,place:S.a.firestore().collection("places").doc(a)}).then((function(){}))}var A=n(17);function C(e,t,n){var a=Object(A.cloneDeep)(e),c=[];return a.map((function(e){e.parts||t.map((function(t){t.placeId!==e.id||e.isFilled||(e.isFilled=!0,c.push(e))}))})),c.map((function(e){var t;null===(t=e.path)||void 0===t||t.map((function(e){a.map((function(t){if(t.id===e&&!t.isFilled)return t.isFilled=!0,t}))}))})),a}function B(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return e.map((function(a){if(a.id!==t)return n;n.unshift(a.id),B(e,a.parent,n)})),n}function M(e){var t=Object(A.cloneDeep)(e);return t.filter((function(e){return e.parts})).map((function(e){!function(e){var n;null===(n=e.parts)||void 0===n||n.map((function(n){var a,c;a=e.id,c=n,t.map((function(e){e.id===c&&(e.parent=a)}))}))}(e)})),t.map((function(e){e.path=B(t,e.id)})),t}function R(e){var t=Object(A.cloneDeep)(e),n=t.filter((function(e){return!e.parent}));return function e(n){n.map((function(n){var a;n.parts&&(null===(a=n.parts)||void 0===a||a.map((function(a,c){"string"===typeof a&&(t.map((function(e){var t;e.id===a&&e&&(null===(t=n.parts)||void 0===t||t.splice(c,1,e))})),n.parts&&e(n.parts))})))}))}(n),n}var H="SET_INVENTORY_DATA",D="SET_PLACES_TREE_DATA",V="SET_PLACES_FLATTEN_DATA",U="SET_SELECTED_PLACE",Q="SET_PENDING_STATUS",J={placesTree:[],placesFlat:[],inventory:[],selectedPlace:{},isPending:!1},Y=function(){return function(){var e=Object(g.a)(T.a.mark((function e(t){var n,a;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E();case 2:return n=e.sent,t(Z(n)),e.next=6,S.a.firestore().collection("places").get().then((function(e){return e.docs.map((function(e){var t;return{id:e.id,name:null===(t=e.data())||void 0===t?void 0:t.name,parts:e.data().parts&&e.data().parts.map((function(e){return e.id}))}}))}));case 6:a=e.sent,t(X(M(a))),t(G(R(C(M(a),n))));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},z=function(e){return function(){var t=Object(g.a)(T.a.mark((function t(n){var a;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E();case 2:a=t.sent,n(Z(a)),e&&n(G(R(C(e,a))));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},G=function(e){return{type:D,data:e}},X=function(e){return{type:V,data:e}},Z=function(e){return{type:H,data:e}},K=function(e){return{type:Q,status:e}},$=Object(s.b)((function(e){return{placesTree:e.fireBase.placesTree,selectedPlace:e.fireBase.selectedPlace}}),{setSelectedPlaceAction:function(e){return{type:U,place:e}}})((function(e){return Object(a.jsx)(I,{placesTree:e.placesTree,selectedPlace:e.selectedPlace,setSelectedPlaceAction:e.setSelectedPlaceAction})})),q=n(13),ee=n.n(q),te=n.p+"static/media/add.975f2872.svg",ne=n(21),ae=n.n(ne),ce=n.p+"static/media/edit.31d9b074.svg",re=n.p+"static/media/delete.838f7bdf.svg",ie=n(6),oe=n.n(ie),se=function(e){var t,n,r=Object(c.useState)(""),i=Object(l.a)(r,2),o=i[0],s=i[1],d=Object(c.useState)(""),p=Object(l.a)(d,2),u=p[0],m=p[1],j=Object(c.useState)("default"),v=Object(l.a)(j,2),f=v[0],b=v[1],_=Object(c.useState)("default"),O=Object(l.a)(_,2),x=O[0],h=O[1],y=Object(c.useState)(oe.a.form),I=Object(l.a)(y,2),P=I[0],T=I[1];function g(e){return e.trim()&&e.match(/[a-z\u0430-\u044f\u0451]/i)?"valid":"notValid"}function W(e){return e.match(/^[1-9]\d*$/)?"valid":"notValid"}function N(e){"name"===e.currentTarget.name&&(s(e.currentTarget.value),b(g(e.currentTarget.value))),"count"===e.currentTarget.name&&(m(e.currentTarget.value),h(W(e.currentTarget.value)))}return Object(c.useEffect)((function(){"listItem"===e.role&&"undefined"!==typeof e.inventory&&(s(e.inventory.name),m("".concat(e.inventory.count)),T("".concat(oe.a.form," ").concat(oe.a.listItemParamsWrapper))),"modal"===e.role&&T("".concat(oe.a.form," ").concat(oe.a.modalWrapper))}),[e.editMode,null===(t=e.inventory)||void 0===t?void 0:t.name,null===(n=e.inventory)||void 0===n?void 0:n.count]),Object(a.jsxs)("form",{className:P,onSubmit:function(t){var n;t.preventDefault(),b(g(o)),h(W(u)),"notValid"===f&&s(""),"notValid"===x&&m(""),"modal"===e.role&&e.addInventoryItem&&e.selectedPlaceId&&e.placesFlat&&"valid"===x&&"valid"===f&&(e.addInventoryItem(o,e.selectedPlaceId,u,e.placesFlat),m(""),s("")),"listItem"===e.role&&e.inventory&&e.path&&e.setPendingStatus&&e.editInventoryItem&&e.setEditMode&&("valid"===x||"default"===x&&"valid"===f||"default"===f)&&(e.setPendingStatus(!0),e.editInventoryItem(e.inventory.id,o,u,null===(n=e.path)||void 0===n?void 0:n.join("/")),e.setEditMode(!0))},children:[Object(a.jsxs)("div",{className:"".concat(oe.a.inputWrapper," ").concat("notValid"===f&&oe.a.error),children:[Object(a.jsx)("label",{children:"\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435"}),Object(a.jsxs)("div",{className:"".concat(oe.a.textWrapper," ").concat(e.editMode&&oe.a.disabled),children:[Object(a.jsx)("input",{type:"text",name:"name",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435",onChange:N,onBlur:N,value:o,autoComplete:"off",disabled:e.editMode}),e.editMode&&Object(a.jsx)("div",{className:oe.a.fullText,children:o})]})]}),Object(a.jsxs)("div",{className:"".concat(oe.a.inputWrapper," ").concat("notValid"===x&&oe.a.error),children:[Object(a.jsx)("label",{children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e"}),Object(a.jsx)("input",{type:"text",name:"count",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0447\u0438\u0441\u043b\u043e",onChange:N,onBlur:N,value:u,autoComplete:"off",disabled:e.editMode})]}),Object(a.jsxs)("div",{className:oe.a.buttonsWrapper,children:[!e.editMode&&Object(a.jsx)("button",{type:"submit",className:"".concat(oe.a.formButton," ").concat(oe.a.submit," "),children:"\u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c"}),!e.editMode&&"listItem"===e.role&&Object(a.jsx)("button",{type:"button",onClick:function(){b("default"),h("default"),e.setEditMode&&e.setEditMode(!0)},className:"".concat(oe.a.formButton," ").concat(oe.a.cancel),children:"\u043e\u0442\u043c\u0435\u043d\u0438\u0442\u044c"})]})]})},le=n(33),de=n.n(le),pe=function(e){return Object(a.jsx)("div",{onClick:function(){e.btnClickHandler(e.role)},className:"".concat(de.a.icon),children:Object(a.jsx)("img",{src:e.icon,alt:"".concat(e.icon)})})},ue=function(e){var t=Object(c.useState)(!0),n=Object(l.a)(t,2),r=n[0],i=n[1],o=Object(c.useState)(!1),s=Object(l.a)(o,2),d=s[0],p=s[1];function u(t){"edit"===t&&i(!r),"delete"===t&&(p(!0),e.btnClickHandler(t,e.inventory.id))}return Object(c.useEffect)((function(){e.isPending||p(!1)}),[e.isPending]),Object(a.jsxs)("li",{className:ae.a.inventoryListItemWrapper,children:[Object(a.jsxs)("div",{className:ae.a.inventoryListItem,children:[Object(a.jsx)(se,{role:"listItem",editInventoryItem:e.editInventoryItem,inventory:e.inventory,path:e.selectedPlace.path,editMode:r,setEditMode:i,isPending:e.isPending,setPendingStatus:p}),!e.selectedPlace.parts&&Object(a.jsxs)("div",{className:ae.a.iconWrapper,children:[Object(a.jsx)(pe,{role:"edit",icon:ce,btnClickHandler:u}),Object(a.jsx)(pe,{role:"delete",icon:re,btnClickHandler:u})]})]}),d&&Object(a.jsx)("div",{className:ae.a.spinnerWrapper,children:Object(a.jsx)(x,{width:80})})]})},me=n(25),je=n.n(me),ve=function(e){return Object(a.jsx)("div",{className:je.a.modalWrapper,onClick:function(t){t.target===t.currentTarget&&e.modalToggle()},children:Object(a.jsxs)("div",{className:je.a.modal,children:[e.isPending&&Object(a.jsx)("div",{className:je.a.spinnerWrapper,children:Object(a.jsx)(x,{width:100})}),Object(a.jsx)("h4",{children:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u044f"}),Object(a.jsx)(se,{role:"modal",selectedPlaceId:e.selectedPlaceId,addInventoryItem:e.addInventoryItem,placesFlat:e.placesFlat})]})})},fe=function(e){var t=Object(c.useState)(!1),n=Object(l.a)(t,2),r=n[0],i=n[1],o=Object(c.useState)(""),s=Object(l.a)(o,2),d=s[0],p=s[1];function u(){i(!r)}function m(e){p(e)}function j(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";switch(t){case"edit":m(n);break;case"delete":e.deleteInventoryItem(n,e.placesFlat);break;case"add":u();break;default:return}}return Object(a.jsxs)("div",{className:"".concat(ee.a.viewComponent," ").concat(r&&ee.a.modalOpened),children:[Object(a.jsx)("h1",{children:"\u0421\u043f\u0438\u0441\u043e\u043a \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u044f"}),Object(a.jsx)("hr",{}),!e.selectedPlace.id&&Object(a.jsx)("span",{className:ee.a.info,children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u043e\u043c\u0435\u0449\u0435\u043d\u0438\u0435 \u0432 \u043c\u0435\u043d\u044e \u0441\u043b\u0435\u0432\u0430, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u0441\u043f\u043e\u0442\u0440\u0435\u0442\u044c \u0438\u043c\u0435\u044e\u0449\u0435\u0435\u0441\u044f \u0432 \u043d\u0435\u0439 \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u0435"}),e.selectedPlace.id&&Object(a.jsxs)("section",{className:ee.a.inventoryListWrapper,children:[Object(a.jsxs)("div",{className:ee.a.sectionTopRow,children:[Object(a.jsx)("div",{className:"".concat(ee.a.inventoryListHeader," ").concat(ee.a.inventoryListItem),children:Object(a.jsx)("h4",{children:e.selectedPlace.name})}),e.selectedPlace.id&&!e.selectedPlace.parts&&Object(a.jsx)(pe,{icon:te,role:"add",btnClickHandler:j})]}),Object(a.jsx)("ul",{className:ee.a.inventoryList,children:e.inventory.map((function(t){if(e.selectedPlace.id)return Object(a.jsx)(ue,{editInventoryItem:e.editInventoryItem,btnClickHandler:j,inventory:t,selectedPlace:e.selectedPlace,editModeId:d,isPending:e.isPending},t.id)}))})]}),r&&Object(a.jsx)(ve,{modalToggle:u,addInventoryItem:e.addInventoryItem,selectedPlaceId:e.selectedPlace.id,isPending:e.isPending,placesFlat:e.placesFlat})]})},be=r.a.memo(fe);var _e=Object(s.b)((function(e){return{inventory:e.fireBase.inventory,selectedPlace:e.fireBase.selectedPlace,placesFlat:e.fireBase.placesFlat,isPending:e.fireBase.isPending}}),{editInventoryItemThunk:function(e,t,n,a){return function(){var c=Object(g.a)(T.a.mark((function c(r){return T.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return r(K(!0)),c.next=3,F(e,t,n,a);case 3:return c.next=5,r(Y());case 5:r(K(!1));case 6:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}()},deleteInventoryItemThunk:function(e,t){return function(){var n=Object(g.a)(T.a.mark((function n(a){return T.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(K(!0)),n.next=3,k(e);case 3:return n.next=5,a(z(t));case 5:a(K(!1));case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},addInventoryItemThunk:function(e,t,n,a){return function(){var c=Object(g.a)(T.a.mark((function c(r){return T.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return r(K(!0)),c.next=3,L(e,t,n);case 3:return c.next=5,r(z(a));case 5:r(K(!1));case 6:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}()}})((function(e){var t=Object(c.useState)([]),n=Object(l.a)(t,2),r=n[0],i=n[1];Object(c.useEffect)((function(){i((function(){var t=[];return e.inventory.map((function(n){e.selectedPlace.parts?o(e.selectedPlace.parts).map((function(e){e.id===n.placeId&&t.push(n)})):n.placeId===e.selectedPlace.id&&t.push(n)})),t}))}),[e.selectedPlace,e.inventory]);var o=Object(c.useCallback)((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return e.map((function(e){e.parts||t.push(e),e.parts&&o(e.parts,t)})),t}),[]);return Object(a.jsx)(be,{inventory:r,selectedPlace:e.selectedPlace,isPending:e.isPending,placesFlat:e.placesFlat,editInventoryItem:e.editInventoryItemThunk,deleteInventoryItem:e.deleteInventoryItemThunk,addInventoryItem:e.addInventoryItemThunk})})),Oe=Object(s.b)((function(){return{}}),{dataInit:Y})((function(e){return Object(c.useEffect)((function(){S.a.apps.length||S.a.initializeApp(w),e.dataInit()}),[]),Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)($,{}),Object(a.jsx)(_e,{})]})})),xe=n(18),he=n(34),ye=Object(xe.c)({fireBase:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:return Object(N.a)(Object(N.a)({},e),{},{placesTree:Object(W.a)(t.data.map((function(e){return e})))});case V:return Object(N.a)(Object(N.a)({},e),{},{placesFlat:Object(W.a)(t.data.map((function(e){return e})))});case H:return Object(N.a)(Object(N.a)({},e),{},{inventory:Object(W.a)(t.data.map((function(e){return e})))});case U:return Object(N.a)(Object(N.a)({},e),{},{selectedPlace:t.place});case Q:return Object(N.a)(Object(N.a)({},e),{},{isPending:t.status});default:return e}}}),Ie=Object(xe.d)(ye,Object(xe.a)(he.a));o.a.render(Object(a.jsx)(s.a,{store:Ie,children:Object(a.jsx)(Oe,{})}),document.getElementById("root"))},6:function(e,t,n){e.exports={form:"InventoryForm_form__2U266",modalWrapper:"InventoryForm_modalWrapper__23J_Q",inputWrapper:"InventoryForm_inputWrapper__3aldT",error:"InventoryForm_error__39Omt",buttonsWrapper:"InventoryForm_buttonsWrapper__JP-US",listItemParamsWrapper:"InventoryForm_listItemParamsWrapper__3xySU",textWrapper:"InventoryForm_textWrapper__3rok5",disabled:"InventoryForm_disabled__19t2Q",fullText:"InventoryForm_fullText__ze19X",formButton:"InventoryForm_formButton__C3Wa-",submit:"InventoryForm_submit__3UuNU",cancel:"InventoryForm_cancel__3W87D"}}},[[52,1,2]]]);
//# sourceMappingURL=main.f45d715d.chunk.js.map