(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{30:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),c=n.n(r),s=n(18),o=n.n(s),i=n(8),u=(n(30),n(22)),l=n(2),d=n(3),p=n.p+"static/media/logo.c2821b38.svg";var j=function(e){var t=e.email,n=e.signOut,r=e.loggedIn,c=e.currURL,s=e.changeCurrUrl;return Object(a.jsxs)("header",{className:"header",children:[Object(a.jsx)("img",{src:p,className:"header__logo",alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u041c\u0435\u0441\u0442\u043e"}),Object(a.jsx)("span",{className:"header__email",children:r&&t}),r?"":"/sign-up"===c?Object(a.jsx)(i.b,{to:"/sign-in",onClick:function(){return s("/sign-in")},className:"header__link",children:"\u0412\u043e\u0439\u0442\u0438"}):Object(a.jsx)(i.b,{to:"/sign-up",onClick:function(){return s("/sign-up")},className:"header__link",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),r?Object(a.jsx)(i.b,{to:"/",onClick:n,className:"header__link",children:"\u0412\u044b\u0439\u0442\u0438"}):""]})},m=c.a.createContext();var b=function(e){var t=e.card,n=e.onCardClick,r=e.onCardLike,s=e.onCardDelete,o=c.a.useContext(m),i=o._id===t.owner._id,u="grid-card__del ".concat(i&&"grid-card__del_active"),l=t.likes.some((function(e){return e._id===o._id})),d="grid-card__like ".concat(l&&"grid-card__like_active");return Object(a.jsxs)("article",{className:"grid-card",children:[Object(a.jsx)("img",{className:"grid-card__img",src:t.link,alt:t.name,onClick:function(){return n(t)}}),Object(a.jsxs)("div",{className:"grid-card__wrapper",children:[Object(a.jsx)("h3",{className:"grid-card__text",children:t.name}),Object(a.jsxs)("div",{className:"grid-card__likes",children:[Object(a.jsx)("button",{type:"button",className:d,onClick:function(){return r(t)}}),Object(a.jsx)("span",{className:"grid-card__likes-count",children:t.likes.length})]})]}),Object(a.jsx)("button",{type:"button",className:u,onClick:function(){return s(t)}})]})},h=Object(r.memo)((function(e){var t=e.onEditAvatar,n=e.onEditProfile,c=e.onAddPlace,s=e.cards,o=e.onCardClick,i=e.onCardLike,u=e.onCardDelete,l=Object(r.useContext)(m);return Object(a.jsxs)("main",{className:"content",children:[Object(a.jsxs)("section",{className:"profile",children:[Object(a.jsxs)("div",{className:"profile__wrapper",children:[Object(a.jsx)("button",{className:"profile__avatar",onClick:t,style:{backgroundImage:"url(".concat(l.avatar,")")}}),Object(a.jsxs)("div",{className:"profile__form",children:[Object(a.jsx)("h1",{className:"profile__name",children:l.name}),Object(a.jsx)("button",{className:"profile__button-edit",onClick:n,type:"button"}),Object(a.jsx)("p",{className:"profile__interst",children:l.about})]})]}),Object(a.jsx)("button",{className:"profile__button-add",type:"button",onClick:c})]}),Object(a.jsx)("section",{className:"cards-container",children:s.map((function(e){return Object(a.jsx)(b,{card:e,onCardClick:o,onCardLike:i,onCardDelete:u},e._id)}))})]})}));var f=function(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("p",{className:"footer__copyright",children:"\xa9 2020 Mesto Russia"})})};var _=function(e){var t=e.name,n=e.title,r=e.btnName,c=e.isOpen,s=e.onClose,o=e.onSubmit,i=e.children;return Object(a.jsx)("div",{className:"popup popup__".concat(t," ").concat(c?"popup_opened":""),children:Object(a.jsx)("div",{className:"popup__container",children:Object(a.jsxs)("form",{className:"form",name:"popup__form_".concat(t),noValidate:!0,onSubmit:o,children:[Object(a.jsx)("h2",{className:"form__title",children:n}),i,"(",Object(a.jsx)("button",{type:"submit",className:"form__submit",children:r}),Object(a.jsx)("button",{type:"button",className:"popup__close-button",onClick:s}),")"]})})})};var O=function(e){var t=e.card,n=e.onClose;return Object(a.jsx)("div",{className:"popup popup_big-pic ".concat(Object.keys(t).length&&"popup_opened"),children:Object(a.jsxs)("div",{className:"popup__container popup__container_background",children:[Object(a.jsx)("img",{className:"popup__img-big",src:t.link,alt:t.name}),Object(a.jsx)("h2",{className:"popup__title",children:t.name}),Object(a.jsx)("button",{type:"button",className:"popup__close-button",onClick:n})]})})};function g(e){var t=e.onChange,n=e.avatarRef;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("input",{type:"url",id:"link-input",name:"link",className:"form__input form__input_link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",required:!0,ref:n,onChange:t}),Object(a.jsx)("span",{className:"popup__input-error",id:"link-input-error"})]})}function v(e){var t=e.inputName,n=e.inputAbout,r=e.onChange;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("input",{type:"text",id:"name-input",name:"name",className:"form__input form__contact-name",placeholder:"\u0418\u043c\u044f",minLength:"2",maxLength:"40",required:!0,value:t||"",onChange:r}),Object(a.jsx)("span",{className:"popup__input-error",id:"name-input-error"}),Object(a.jsx)("input",{type:"text",id:"interst-input",name:"about",placeholder:"\u041e \u0441\u0435\u0431\u0435",className:"form__input form__contact-interst",minLength:"2",maxLength:"200",required:!0,value:n||"",onChange:r}),Object(a.jsx)("span",{className:"popup__input-error",id:"interst-input-error"})]})}function x(e){var t=e.onChange,n=e.place,r=e.link;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("input",{type:"text",id:"title-input",name:"name",className:"form__input form__item-name",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"1",maxLength:"30",required:!0,onChange:t,value:n}),Object(a.jsx)("span",{className:"popup__input-error",id:"title-input-error"}),Object(a.jsx)("input",{type:"url",id:"link-input",name:"link",className:"form__input form__link-img",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,onChange:t,value:r}),Object(a.jsx)("span",{className:"popup__input-error",id:"link-input-error"})]})}var C=function(e){var t=e.isOpen,n=e.onClose,r=e.onUpdateUser,s=c.a.useContext(m),o=c.a.useState(""),i=Object(l.a)(o,2),u=i[0],d=i[1],p=c.a.useState(""),j=Object(l.a)(p,2),b=j[0],h=j[1];return c.a.useEffect((function(){d(s.name),h(s.about)}),[s]),Object(a.jsx)(_,{name:"edit-profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",btnName:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),r({name:u,about:b})},children:Object(a.jsx)(v,{inputName:u,inputAbout:b,onChange:function(e){"name"===e.target.name?d(e.target.value):h(e.target.value)}})})};var N=function(e){var t=e.isOpen,n=e.onClose,r=e.onUpdateAvatar,s=c.a.useRef();return Object(a.jsx)(_,{name:"edit-avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",btnName:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),r({link:s.current.value}),e.target.reset()},children:Object(a.jsx)(g,{avatarRef:s})})};var k=function(e){var t=e.isOpen,n=e.onClose,r=e.onAddPlace,s=c.a.useState(""),o=Object(l.a)(s,2),i=o[0],u=o[1],d=c.a.useState(""),p=Object(l.a)(d,2),j=p[0],m=p[1];return Object(a.jsx)(_,{name:"add-card",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",btnName:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),r({name:i,link:j})},children:Object(a.jsx)(x,{onChange:function(e){"name"===e.target.name?u(e.target.value):m(e.target.value)}})})},S=n.p+"static/media/ok.a9eb6caf.svg",y=n.p+"static/media/error.d0f413bf.svg",E=Object(r.memo)((function(e){var t=e.isOpen,n=e.onClose;return Object(a.jsx)("div",{className:"popup ".concat(t.isOpen&&"popup_opened"),children:Object(a.jsxs)("form",{className:"popup__container",name:"popup__image",noValidate:!0,children:[Object(a.jsx)("div",{className:"popup__logo",style:"ok"===t.status?{backgroundImage:"url(".concat(S,")")}:{backgroundImage:"url(".concat(y,")")}}),Object(a.jsx)("h2",{className:"popup__message",children:t.message}),Object(a.jsx)("button",{type:"button",className:"popup__btn-close",onClick:n})]})})})),P=Object(r.memo)((function(e){var t=e.name,n=e.title,r=e.onSubmit,c=e.onChange,s=e.isInvalid,o=e.btnName,u=e.changeCurrUrl,l=e.inputPass,d=e.inputEmail;return Object(a.jsxs)("form",{className:"form-auth",name:"form_".concat(t),noValidate:!0,onSubmit:r,children:[Object(a.jsx)("h2",{className:"form-auth__title",children:n}),Object(a.jsx)("label",{className:"form-auth__field",children:Object(a.jsx)("input",{type:"text",className:"form-auth__input",id:"form-email-".concat(t),name:"email",placeholder:"Email",minLength:"1",maxLength:"30",onChange:c,value:d})}),Object(a.jsx)("label",{className:"form-auth__field",children:Object(a.jsx)("input",{type:"password",className:"form-auth__input",id:"form-password-".concat(t),name:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",onChange:c,value:l})}),Object(a.jsx)("button",{type:"submit",className:"form-auth__btn ".concat(s?"form__btn_disabled":""),disabled:s,children:o}),"sign-up"===t&&Object(a.jsxs)("p",{className:"form-auth__text",children:["\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? ",Object(a.jsx)(i.b,{to:"/sign-in",onClick:function(){return u("/sign-in")},className:"form-auth__link",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})})),U=Object(r.memo)((function(e){var t=e.changeCurrUrl,n=e.authRegister,c=e.inputPass,s=Object(r.useState)(""),o=Object(l.a)(s,2),i=o[0],u=o[1],p=Object(r.useState)(""),j=Object(l.a)(p,2),m=j[0],b=j[1];Object(d.g)();return Object(a.jsx)(P,{name:"sign-up",title:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",btnName:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",onChange:function(e){var t=e.target,n=t.name,a=t.value;"email"===n?u(a):b(a)},onSubmit:function(e){e.preventDefault(),n(i,m)},changeCurrUrl:t,inputPass:c})})),L=Object(r.memo)((function(e){var t=e.authLogin,n=e.inputPass,c=Object(r.useState)(""),s=Object(l.a)(c,2),o=s[0],i=s[1],u=Object(r.useState)(""),d=Object(l.a)(u,2),p=d[0],j=d[1];return Object(a.jsx)(P,{name:"sign-in",title:"\u0412\u0445\u043e\u0434",btnName:"\u0412\u043e\u0439\u0442\u0438",onChange:function(e){var t=e.target,n=t.name,a=t.value;"email"===n?i(a):j(a)},onSubmit:function(e){e.preventDefault(),o&&p&&t(o,p).then((function(){i(""),j("")}))},inputPass:n})})),T=n(23),D=n(24),I=function(e){var t=e.component,n=Object(D.a)(e,["component"]);return Object(a.jsx)(d.b,{children:function(){return n.loggedIn?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(t,Object(T.a)({},n))," "]}):Object(a.jsx)(d.a,{to:"./sign-in"})}})},A=n(20),w=n(21),R=new(function(){function e(t){var n=t.baseUrl,a=t.headers;Object(A.a)(this,e),this._baseUrl=n,this._headers=a,this._errorServer=document.querySelector(".error-server")}return Object(w.a)(e,[{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject(new Error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status)))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then((function(t){return e._getResponseData(t)}))}},{key:"saveCardToServer",value:function(e){var t=this,n=e.name,a=e.link;return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers,method:"POST",body:JSON.stringify({name:n,link:a})}).then((function(e){return t._getResponseData(e)}))}},{key:"deleteCardToServer",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e._id),{headers:this._headers,method:"DELETE"})}},{key:"changeLikeCardStatus",value:function(e,t){var n=this,a=t?"DELETE":"PUT";return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e._id),{headers:this._headers,method:a}).then((function(e){return n._getResponseData(e)}))}},{key:"saveAvatarToServer",value:function(e){var t=this,n=e.link;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{headers:this._headers,method:"PATCH",body:JSON.stringify({avatar:n})}).then((function(e){return t._getResponseData(e)}))}},{key:"getUserInfoFromServer",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then((function(t){return e._getResponseData(t)}))}},{key:"saveUserInfoToServer",value:function(e){var t=this,n=e.name,a=e.about;return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers,method:"PATCH",body:JSON.stringify({name:n,about:a})}).then((function(e){return t._getResponseData(e)}))}},{key:"setErrorServer",value:function(e){var t=this;this._errorServer.textContent="\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c: ".concat(e,". \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c \u043f\u043e\u0437\u0436\u0435"),this._errorServer.classList.add("error-server_active"),setTimeout((function(){t._errorServer.classList.remove("error-server_active")}),8e3)}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-17",headers:{authorization:"691998da-b477-4262-8750-23151b55d1d5","Content-Type":"application/json"}}),F="https://auth.nomoreparties.co",J=c.a.createContext();var q=function(){var e=Object(d.g)(),t=Object(d.h)(),n=c.a.useState({}),s=Object(l.a)(n,2),o=s[0],i=s[1],p=Object(r.useState)(""),b=Object(l.a)(p,2),g=b[0],v=b[1],x=Object(r.useState)(!1),S=Object(l.a)(x,2),y=S[0],P=S[1],T=Object(r.useState)(""),D=Object(l.a)(T,2),A=D[0],w=D[1],q=c.a.useState(!1),B=Object(l.a)(q,2),V=B[0],z=B[1],H=c.a.useState(!1),M=Object(l.a)(H,2),G=M[0],K=M[1],Q=c.a.useState(!1),W=Object(l.a)(Q,2),X=W[0],Y=W[1],Z=c.a.useState(!1),$=Object(l.a)(Z,2),ee=$[0],te=($[1],c.a.useState({})),ne=Object(l.a)(te,2),ae=ne[0],re=ne[1],ce=Object(r.useState)({isOpen:!1,message:"",status:""}),se=Object(l.a)(ce,2),oe=se[0],ie=se[1],ue=c.a.useState([]),le=Object(l.a)(ue,2),de=le[0],pe=le[1];function je(e){var t=e.likes.some((function(e){return e._id===o._id}));R.changeLikeCardStatus(e,t).then((function(t){var n=de.map((function(n){return n._id===e._id?t:n}));pe(n)})).catch((function(e){R.setErrorServer(e)}))}function me(e){R.deleteCardToServer(e).then((function(){var t=de.filter((function(t){return t._id!==e._id&&t}));pe(t)})).catch((function(e){R.setErrorServer(e)}))}function be(){z(!0)}function he(){K(!0)}function fe(){Y(!0)}function _e(e){re(e)}function Oe(e,t){ie({isOpen:!0,message:e,status:t})}function ge(){z(!1),K(!1),Y(!1),re({}),ie(!1)}function ve(e){P(!0),v(e)}function xe(){var t,n=localStorage.getItem("jwt");n&&(t=n,fetch("".concat(F,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then((function(e){return e.json()})).then((function(e){return e}))).then((function(t){t&&(P(!0),v(t.data.email),e.push("/"))}))}function Ce(e){w(e)}Object(r.useEffect)((function(){y&&Promise.all([R.getUserInfoFromServer(),R.getInitialCards()]).then((function(e){var t=Object(l.a)(e,2),n=t[0],a=t[1];i(n),pe(a)})).catch((function(e){R.setErrorServer(e)}))}),[y]),Object(r.useEffect)((function(){w(t.pathname)}),[t.pathname,A]),Object(r.useEffect)((function(){xe()}),[]);var Ne={isEditProfilePopupOpen:G,isEditAvatarPopupOpen:V,isAddPlacePopupOpen:X};return Object(a.jsx)(J.Provider,{value:Ne,children:Object(a.jsx)(m.Provider,{value:o,children:Object(a.jsxs)("div",{className:"page",children:[Object(a.jsx)(j,{email:g,signOut:function(){localStorage.removeItem("jwt"),P(!1),e.push("/sign-in")},loggedIn:y,currURL:A,changeCurrUrl:Ce}),Object(a.jsxs)(d.d,{children:[Object(a.jsx)(I,{exact:!0,path:"/",loggedIn:y,component:function(){return Object(a.jsx)(h,{onEditProfile:he,onEditAvatar:be,onAddPlace:fe,onCardClick:_e,cards:de,onCardLike:je,onCardDelete:me})}}),Object(a.jsx)(d.b,{path:"/sign-up",children:Object(a.jsx)(U,{changeCurrUrl:Ce,authRegister:function(t,n){(function(e,t){return fetch("".concat(F,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:t,email:e})}).then((function(e){return e.ok?e.json():Promise.reject(new Error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status)))}))})(t,n).then((function(t){return 201===t.status?(Oe("\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!","ok"),e.push("/sign-in"),void Ce("/sign-in")):(Oe("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437.","error"),t)})).catch((function(e){Oe("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437.","error"),console.log(e)}))}})}),Object(a.jsx)(d.b,{path:"/sign-in",children:Object(a.jsx)(L,{handleLogin:ve,authLogin:function(t,n){return function(e,t){return fetch("".concat(F,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then((function(e){return e.json()})).then((function(e){if(e.token)return localStorage.setItem("jwt",e.token),e})).catch((function(e){return console.log(e)}))}(t,n).then((function(n){n&&(ve(t),e.push("/"))})).catch((function(e){return console.log(e)}))}})}),Object(a.jsx)(d.b,{children:y?Object(a.jsx)(d.a,{to:"/"}):Object(a.jsx)(d.a,{to:"/sign-in"})})]}),Object(a.jsx)(N,{isOpen:V,onClose:ge,onUpdateAvatar:function(e){R.saveAvatarToServer(e).then((function(e){i(e),ge()})).catch((function(e){R.setErrorServer(e)}))}}),Object(a.jsx)(C,{isOpen:G,onClose:ge,onUpdateUser:function(e){R.saveUserInfoToServer(e).then((function(e){ge(),i(e)})).catch((function(e){R.setErrorServer(e)}))}}),Object(a.jsx)(k,{isOpen:X,onClose:ge,onAddPlace:function(e){R.saveCardToServer(e).then((function(e){pe([e].concat(Object(u.a)(de))),ge()})).catch((function(e){R.setErrorServer(e)}))}}),Object(a.jsx)(_,{name:"confirm-delete",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",btnName:"\u0414\u0430",isOpen:ee,onClose:ge}),Object(a.jsx)(O,{card:ae,onClose:ge}),Object(a.jsx)(E,{isOpen:oe,onClose:ge}),y&&Object(a.jsx)(f,{})]})})})},B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};o.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(i.a,{children:Object(a.jsx)(q,{})})}),document.getElementById("root")),B()}},[[36,1,2]]]);
//# sourceMappingURL=main.c356f578.chunk.js.map