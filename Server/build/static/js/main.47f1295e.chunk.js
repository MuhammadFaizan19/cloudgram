(this.webpackJsonpcloudgram=this.webpackJsonpcloudgram||[]).push([[0],{148:function(e,t,n){e.exports={Name:"LandingIntro_Name__H6N1E",Intro:"LandingIntro_Intro__Jtn76"}},150:function(e,t,n){e.exports={ImageGrid:"ImageGrid_ImageGrid__1cSAf",Image:"ImageGrid_Image__-_SGB"}},228:function(e,t,n){e.exports={App:"App_App__1VHv9",H3:"App_H3__rRqoP"}},229:function(e,t,n){e.exports={BackgroundImage:"BackgroundImage_BackgroundImage__rUsbM"}},231:function(e,t,n){e.exports={Signin:"Signin_Signin__kDmPZ"}},232:function(e,t,n){e.exports={Button:"Button_Button__GP3H5"}},233:function(e,t,n){e.exports={Input:"Input_Input__2RQo4"}},234:function(e,t,n){e.exports={Signup:"Signup_Signup__24YIz"}},236:function(e,t,n){e.exports={Cloudgram:"Cloudgram_Cloudgram__1dutN"}},243:function(e,t,n){},28:function(e,t,n){e.exports={Modal:"ModalDelete_Modal__2v0uz",ModalSharing:"ModalDelete_ModalSharing__u4f0S",selectedImage:"ModalDelete_selectedImage__24uHH",Controls:"ModalDelete_Controls__PPUyy",button:"ModalDelete_button__vOdZs",Modimg:"ModalDelete_Modimg__YBwAg"}},29:function(e,t,n){e.exports={Modal:"ModalSharing_Modal__1AqvJ",ModalSharing:"ModalSharing_ModalSharing__2KWx6",selectedImage:"ModalSharing_selectedImage__qiW1F",Controls:"ModalSharing_Controls__25brp",button:"ModalSharing_button__1MI4k",Modimg:"ModalSharing_Modimg__1w691"}},34:function(e,t,n){e.exports={imageInput:"UploadImage_imageInput__2-Juj",upload:"UploadImage_upload__3Tk5n",progress:"UploadImage_progress__282oP",button:"UploadImage_button__3O0Yw"}},447:function(e,t,n){"use strict";n.r(t);var a=n(4),r=n(2),c=n(1),s=n.n(c),i=n(95),o=n.n(i),u=(n(243),n(228)),l=n.n(u),d=n(229),g=n.n(d),j=function(){return Object(r.jsx)("div",{className:g.a.BackgroundImage})},m=n(7),b=n(45),O=n.n(b),_=n(12),h=n(36),f=Object(_.b)((function(e){var t;return{isLoggedIn:e.firebase.auth.uid,name:null===(t=e.auth.userData)||void 0===t?void 0:t.name}}),(function(e){return{signOut:function(){return e((function(e,t,n){(0,n.getFirebase)().auth().signOut().then((function(){e({type:"SIGNOUT_SUCCESS"})}))}))}}}))((function(e){var t=e.isLoggedIn,n=e.name,a=e.signOut,s=Object(c.useState)(null),i=Object(m.a)(s,2),o=i[0],u=i[1];return n&&o!==n&&u(n),Object(r.jsxs)("header",{className:O.a.Header,children:[Object(r.jsx)("h2",{children:Object(r.jsx)(h.b,{className:O.a.NavLink,to:"/cloudgram",id:"cloudgram",children:"Cloudgram"})}),Object(r.jsx)("nav",{children:Object(r.jsxs)("ul",{children:[!t&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("li",{children:Object(r.jsx)(h.b,{to:"/login",id:"login",className:O.a.NavLink,children:"Login"})}),Object(r.jsx)("li",{children:Object(r.jsx)(h.b,{to:"/signup",id:"signup",className:O.a.NavLink,children:"Signup"})})]}),t&&Object(r.jsxs)(r.Fragment,{children:[o&&Object(r.jsx)("li",{className:O.a.NavLink,children:o.toUpperCase()}),Object(r.jsxs)("li",{children:[" ",Object(r.jsx)(h.b,{to:"/login",id:"logout",onClick:function(){return a()},className:O.a.NavLink,children:"Logout"})]})]})]})})]})})),p=n(9),S=n(56),E=n(231),I=n.n(E),x=n(232),C=n.n(x),v=function(e){return Object(r.jsx)("button",{className:C.a.Button,type:e.type,onClick:function(t){return e.onClick(t)},children:e.children})},R=n(233),A=n.n(R),N=function(e){return Object(r.jsx)("input",{className:A.a.Input,type:e.type,onChange:e.onChange,id:e.name,name:e.name,placeholder:e.name})},G=Object(_.b)((function(e){return{authError:e.auth.authError}}),(function(e){return{signIn:function(t){return e(function(e){return function(t,n,a){var r=(0,a.getFirebase)();r.auth().signInWithEmailAndPassword(e.email,e.password).then((function(e){r.firestore().collection("users").doc(e.user.uid).get().then((function(e){return t({type:"SIGN_IN_SUCCESS",data:e.data()})})).catch((function(e){return console.log(e)}))})).catch((function(e){t({type:"SIGN_IN_ERROR",err:e})}))}}(t))},googleSignIn:function(){return e((function(e,t,n){var a=(0,n.getFirebase)(),r=a.auth(),c=a.firestore(),s=new a.auth.GoogleAuthProvider;r.signInWithPopup(s).then((function(t){var n=t.user.uid,a={email:t.user.email,name:t.user.displayName};c.collection("users").doc(t.user.uid).get().then((function(t){t.data()?e({type:"GOOGLE_LOGIN_SUCCESS",data:t.data()}):(r.sendPasswordResetEmail(a.email),c.collection("users").doc(n).set(a).then((function(t){e({type:"GOOGLE_LOGIN_SUCCESS",data:a})})))}))})).catch((function(t){e({type:"GOOGLE_LOGIN_ERROR",err:t})}))}))}}}))((function(e){var t=e.authError,n=e.signIn,s=e.googleSignIn,i=Object(c.useState)({email:"",password:""}),o=Object(m.a)(i,2),u=o[0],l=o[1],d=function(e){l(Object(a.a)(Object(a.a)({},u),{},Object(S.a)({},e.target.id,e.target.value)))};return Object(r.jsxs)("div",{className:I.a.Signin,children:[Object(r.jsx)("h3",{children:"Sign in to Your Account"}),Object(r.jsxs)("form",{children:[Object(r.jsx)(N,{type:"email",name:"email",onChange:d}),Object(r.jsx)(N,{type:"password",name:"password",onChange:d}),Object(r.jsx)(v,{type:"submit",onClick:function(e){e.preventDefault(),n(u)},children:"Signin"}),t?Object(r.jsx)("p",{children:t}):null]}),Object(r.jsx)("p",{children:"OR"}),Object(r.jsx)(v,{onClick:function(){return s()},children:"Sign In With Google"})]})})),y=n(234),U=n.n(y),M=Object(_.b)((function(e){return{signupError:e.auth.signupError}}),(function(e){return{signUp:function(t){return e((n=t,function(e,t,a){var r=(0,a.getFirebase)();r.auth().createUserWithEmailAndPassword(n.email,n.password).then((function(t){r.firestore().collection("users").doc(t.user.uid).set({name:n.fullname,email:n.email}).then((function(t){e({type:"SIGNUP_SUCCESS",data:{name:n.name,email:n.email}})})).catch((function(e){console.log(e)}))})).catch((function(t){console.log(t.message),e({type:"SIGNUP_ERROR",err:t})}))}));var n}}}))((function(e){var t=e.signUp,n=e.signupError,s=Object(c.useState)({email:"",password:"",fullname:""}),i=Object(m.a)(s,2),o=i[0],u=i[1],l=Object(c.useState)(null),d=Object(m.a)(l,2),g=d[0],j=d[1],b=function(e){u(Object(a.a)(Object(a.a)({},o),{},Object(S.a)({},e.target.name,e.target.value)))};return Object(r.jsxs)("div",{className:U.a.Signup,children:[Object(r.jsx)("h3",{children:"Create an Account"}),Object(r.jsxs)("form",{children:[Object(r.jsx)(N,{type:"text",name:"fullname",onChange:b}),Object(r.jsx)(N,{type:"email",name:"email",onChange:b}),Object(r.jsx)(N,{type:"password",name:"password",onChange:b}),Object(r.jsx)(v,{type:"submit",onClick:function(e){e.preventDefault();for(var n=Object.values(o),a=!0,r=0;r<n.length;r++)n[r]||(a=!1);a&&j(null),a&&t(o),!a&&j("Form not filled")},children:"Signup"}),n&&Object(r.jsx)("p",{children:n}),g?Object(r.jsx)("p",{children:g}):null]})]})})),P=n(148),L=n.n(P),T=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:L.a.Name,children:[Object(r.jsx)("h1",{children:"CLOUDGRAM"}),Object(r.jsx)("h4",{children:"In these moments, time stood still....."})]}),Object(r.jsxs)("div",{className:L.a.Intro,children:[Object(r.jsx)("p",{children:"Save your captured moments"}),Object(r.jsx)("p",{children:"Share pictures with your friends"}),Object(r.jsx)("p",{children:"Upload unlimited pictures"}),Object(r.jsx)("p",{children:"Caption your photos"})]})]})},D=n(28),k=n.n(D),F=n(149),w=n.n(F),B=n(235),H=n(71),W=n.n(H),K=Object(_.b)((function(e){return{currentUser:e.firebase.auth.email}}),(function(e){return{deleteImage:function(t){return e(function(e){return function(t,n){W.a.delete("https://cloudgram.herokuapp.com/api/images/"+e).then((function(){var a=n().image.images;a=a.filter((function(t){return t._id!==e})),t({type:"DELETE_IMAGE_SUCCESS",images:a})})).catch((function(e){t({type:"DELETE_IMAGE_ERROR"})}))}}(t))}}}))((function(e){var t=e.setDeleting,n=e.images,a=e.deleteImage,s=Object(c.useState)(null),i=Object(m.a)(s,2),o=i[0],u=i[1],l=Object(c.useState)("Select An Image From Below"),d=Object(m.a)(l,2),g=d[0],j=d[1],b=function(e){if(o){var t=document.getElementsByClassName(k.a.selectedImage);if(t[0]&&t[0].classList.remove(k.a.selectedImage),e._id===o._id)return!0}};return Object(r.jsx)("div",{className:k.a.Modal,onClick:function(e){e.target.classList.contains(k.a.Modal)&&t(!1)},children:Object(r.jsxs)("div",{id:"modalSharing",className:k.a.ModalSharing,children:[Object(r.jsx)("p",{children:g}),Object(r.jsx)("div",{className:k.a.Controls,children:Object(r.jsx)("button",{onClick:function(){o?(a(o._id),setTimeout((function(){t(!1)}),1e3)):j("Please Select An Image To Delete")},className:k.a.button,children:"Delete"})}),Object(r.jsx)("div",{className:k.a.Modimg,children:n&&n.map((function(e,t){return Object(r.jsx)("img",{src:e.imageUrl,className:b(e)&&k.a.selectedImage,onClick:function(){return u(e)},alt:""},t)}))})]})})})),z=n(97),J=n.n(z),Y=function(e){document.getElementById("root").style.opacity="0.8";return Object(r.jsx)("div",{className:J.a.ModalGallery,onClick:function(t){t.target.classList.contains(J.a.ModalGallery)&&(e.setSelectedImage(null),document.getElementById("root").style.opacity="1")},children:Object(r.jsx)("div",{className:J.a.Container,children:Object(r.jsx)("img",{src:e.selectedImage.imageUrl,alt:""})})})},q=n(29),V=n.n(q),Q=Object(_.b)((function(e){return{users:e.user.users,currentUser:e.firebase.auth.email}}),(function(e){return{getUsers:function(){return e((function(e,t,n){(0,n.getFirebase)().firestore().collection("users").get().then((function(t){var n=t.docs.map((function(e){return e.data()}));n=n.map((function(e){return e.email})),e({type:"GET_USERS_SUCCESS",users:n})})).catch((function(t){console.log(t),e({type:"GET_USERS_ERROR",err:t})}))}))},shareImage:function(t){return e(function(e){return function(t,n){W.a.post("https://cloudgram.herokuapp.com/api/images",e).then((function(e){t({type:"IMAGE_SHARE_SUCCESS"})})).catch((function(e){t({type:"IMAGE_SHARE_ERROR",err:e})}))}}(t))}}}))((function(e){var t=e.setSharing,n=e.images,a=e.currentUser,s=e.users,i=e.getUsers,o=e.shareImage,u=Object(c.useState)(null),l=Object(m.a)(u,2),d=l[0],g=l[1],j=Object(c.useState)(null),b=Object(m.a)(j,2),O=b[0],_=b[1],h=Object(c.useState)("Select An Image To Share"),f=Object(m.a)(h,2),p=f[0],S=f[1];Object(c.useEffect)((function(){i()}),[]);var E=function(e){if(d){var t=document.getElementsByClassName(V.a.selectedImage);if(t[0]&&t[0].classList.remove(V.a.selectedImage),e._id===d._id)return!0}};return Object(r.jsx)("div",{className:V.a.Modal,onClick:function(e){e.target.classList.contains(V.a.Modal)&&t(!1)},children:Object(r.jsxs)("div",{id:"modalSharing",className:V.a.ModalSharing,children:[Object(r.jsx)("p",{children:p}),Object(r.jsxs)("div",{className:V.a.Controls,children:[Object(r.jsx)(N,{onChange:function(e){_(e.target.value)},name:"Email"}),Object(r.jsx)("button",{onClick:function(){if(d)if(O!==a)if(s.includes(O)){var e={imageUrl:d.imageUrl,userEmail:O,shared:!0};o(e),setTimeout((function(){t(!1)}),1e3)}else S("User does not exist!");else S("Sharing not allowed");else S("Please select an Image!")},className:V.a.button,children:"Share"})]}),Object(r.jsx)("div",{className:V.a.Modimg,children:n&&n.map((function(e,t){return Object(r.jsx)("img",{src:e.imageUrl,className:E(e)&&V.a.selectedImage,onClick:function(){return g(e)},alt:""},t)}))})]})})})),Z=n(34),X=n.n(Z),$=Object(_.b)((function(e){return{uploadError:e.image.err}}),(function(e){return{upload:function(t,n){return e(function(e,t){return function(n,a,r){var c=(0,r.getFirebase)(),s=a().firebase.auth.email,i=c.storage().ref(e.name+Math.random()+ +e.lastModified);i.put(e).on("state_changed",(function(e){var n=e.bytesTransferred/e.totalBytes*100;null===t||void 0===t||t(n)}),(function(e){n({type:"IMAGE_UPLOAD_ERROR",err:e})}),Object(B.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.getDownloadURL();case 2:t=e.sent,W.a.post("https://cloudgram.herokuapp.com/api/images",{imageUrl:t,userEmail:s,shared:!1}).then((function(e){var t=a().image.images;t=[e.data].concat(t),n({type:"IMAGE_UPLOAD_SUCCESS",images:t})})).catch((function(e){n({type:"IMAGE_UPLOAD_ERROR",err:e})}));case 4:case"end":return e.stop()}}),e)}))))}}(t,n))}}}))((function(e){var t=e.upload,n=e.setDeleting,a=e.title,s=e.uploadError,i=e.setSharing,o=Object(c.useState)(null),u=Object(m.a)(o,2),l=u[0],d=u[1],g=Object(c.useState)(null),j=Object(m.a)(g,2),b=j[0],O=j[1],_=Object(c.useState)(!1),h=Object(m.a)(_,2),f=h[0],p=h[1];b&&(document.getElementsByClassName(X.a.progress)[0].style.width=b+"vw"),100===b&&(document.getElementsByClassName(X.a.progress)[0].style.width="0"),Object(c.useEffect)((function(){p("Show My Images"===a)}),[a]);return Object(c.useEffect)((function(){l&&t(l,O)}),[l]),Object(r.jsxs)("div",{className:X.a.upload,children:[Object(r.jsxs)("div",{children:[!f&&Object(r.jsxs)("button",{className:X.a.button,onClick:function(){document.getElementById("upload").click()},children:["Upload",Object(r.jsx)("input",{id:"upload",type:"file",accept:"image/jpeg,image/png",className:X.a.imageInput,onChange:function(e){d(e.target.files[0])}})]}),Object(r.jsx)("button",{onClick:function(){i(!0)},className:X.a.button,children:"Share"}),Object(r.jsx)("button",{onClick:function(){n(!0)},className:X.a.button,children:"Delete"})]}),s&&Object(r.jsx)("p",{children:s}),Object(r.jsx)("p",{className:X.a.progress})]})})),ee=n(150),te=n.n(ee),ne=function(e){var t=e.images,n=e.title,a=Object(c.useState)(!1),s=Object(m.a)(a,2),i=s[0],o=s[1],u=Object(c.useState)(!1),l=Object(m.a)(u,2),d=l[0],g=l[1],j=Object(c.useState)(null),b=Object(m.a)(j,2),O=b[0],_=b[1];return Object(r.jsxs)("div",{className:te.a.ImageGrid,children:[Object(r.jsx)($,{setDeleting:g,title:n,sharing:i,setSharing:o}),i&&Object(r.jsx)(Q,{images:t,setSharing:o}),O&&Object(r.jsx)(Y,{selectedImage:O,setSelectedImage:_}),d&&Object(r.jsx)(K,{setDeleting:g,images:t,selectedImage:O,setSelectedImage:_}),Object(r.jsx)("div",{children:t&&t.map((function(e,t){return Object(r.jsx)("img",{src:e.imageUrl,alt:"",className:te.a.Image,onClick:function(){return _(e)}},t)}))})]})},ae=n(236),re=n.n(ae),ce=Object(_.b)((function(e){return{images:e.image.images}}),(function(e){return{getImages:function(t){return e(function(e){return function(t,n){var a=n().firebase.auth.email;W.a.get("https://cloudgram.herokuapp.com/api/images").then((function(n){var r=n.data;r=e?r.filter((function(e){return e.userEmail===a&&!0===e.shared})):r.filter((function(e){return e.userEmail===a&&!1===e.shared})),t({type:"GET_IMAGES_SUCCESS",images:r})})).catch((function(e){t({type:"GET_IMAGES_ERROR",err:e})}))}}(t))},getProfile:function(){return e((function(e,t,n){var a=(0,n.getFirebase)(),r=t().firebase.auth.uid;a.firestore().collection("users").doc(r).get().then((function(t){e({type:"GET_PROFILE_SUCCESS",data:t.data()})})).catch((function(t){e({type:"GET_PROFILE_ERROR"})}))}))}}}))((function(e){var t=e.images,n=e.getImages,a=e.getProfile,s=Object(c.useState)(""),i=Object(m.a)(s,2),o=i[0],u=i[1],l=Object(c.useState)(!0),d=Object(m.a)(l,2),g=d[0],j=d[1];return Object(c.useEffect)((function(){n(!1),a()}),[]),Object(c.useEffect)((function(){g?(u("Show Shared Images"),n(!1)):(u("Show My Images"),n(!0))}),[g]),Object(r.jsxs)("div",{className:re.a.Cloudgram,children:[Object(r.jsx)(v,{onClick:function(){j(!g)},id:"controlImages",children:o}),Object(r.jsx)("hr",{}),Object(r.jsx)(ne,{title:o,images:t})]})})),se=Object(_.b)((function(e){return{isLoggedIn:e.firebase.auth.uid}}),null)(Object(p.g)((function(e){var t=e.isLoggedIn;return Object(r.jsxs)("div",{className:l.a.App,children:[Object(r.jsx)(f,{}),Object(r.jsx)(j,{}),!t&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(T,{}),Object(r.jsxs)(p.d,{children:[Object(r.jsx)(p.b,{path:"/login",exact:!0,component:G}),Object(r.jsx)(p.b,{path:"/signup",exact:!0,component:M}),Object(r.jsx)(p.a,{from:"/",to:"/cloudgram"})]})]}),t&&Object(r.jsxs)(p.d,{children:[Object(r.jsx)(p.b,{path:"/home",exact:!0,component:ce}),Object(r.jsx)(p.a,{from:"/",to:"/home"})]})]})}))),ie=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,450)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))},oe=n(35),ue={authError:null,userData:null,signupError:null},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GOOGLE_LOGIN_ERROR":return Object(a.a)(Object(a.a)({},e),{},{authError:t.err.message});case"GOOGLE_LOGIN_SUCCESS":case"SIGN_IN_SUCCESS":return Object(a.a)(Object(a.a)({},e),{},{authError:null,userData:t.data});case"SIGN_IN_ERROR":return Object(a.a)(Object(a.a)({},e),{},{authError:t.err.message});case"SIGNOUT_SUCCESS":return Object(a.a)(Object(a.a)({},e),{},{userData:null});case"SIGNUP_SUCCESS":return Object(a.a)(Object(a.a)({},e),{},{authError:null,userData:t.data});case"SIGNUP_ERROR":return Object(a.a)(Object(a.a)({},e),{},{signupError:t.err.message});case"GET_PROFILE_SUCCESS":return Object(a.a)(Object(a.a)({},e),{},{userData:t.data});case"GET_PROFILE_ERROR":default:return e}},de=n(70),ge=n(57),je={images:[]},me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"IMAGE_UPLOAD_ERROR":return Object(a.a)({},e);case"IMAGE_UPLOAD_SUCCESS":case"GET_IMAGES_SUCCESS":return Object(a.a)(Object(a.a)({},e),{},{images:t.images});case"GET_IMAGES_ERROR":case"IMAGE_SHARE_SUCCESS":case"IMAGE_SHARE_ERROR":return Object(a.a)({},e);case"DELETE_IMAGE_SUCCESS":return Object(a.a)(Object(a.a)({},e),{},{images:t.images});case"DELETE_IMAGE_ERROR":return Object(a.a)({},e);default:return e}},be={users:[]},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_USERS_SUCCESS":return Object(a.a)(Object(a.a)({},e),{},{users:t.users});case"GET_USERS_ERROR":return Object(a.a)(Object(a.a)({},e),{},{err:"Error retrieving users"});default:return e}},_e=Object(oe.c)({auth:le,image:me,user:Oe,firestore:de.firestoreReducer,firebase:ge.firebaseReducer}),he=n(237),fe=n(37),pe=(n(448),n(449),n(445),{apiKey:"AIzaSyCEHF8KCmv2Q9wNZBAzCIAchsVW13eqt34",authDomain:"cloudgram-v2.firebaseapp.com",projectId:"cloudgram-v2",storageBucket:"cloudgram-v2.appspot.com",messagingSenderId:"363404342754",appId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyCEHF8KCmv2Q9wNZBAzCIAchsVW13eqt34",REACT_APP_FIREBASE_APP_ID:"1:363404342754:web:2496e7b8d95bf5cb5975bb",REACT_APP_FIREBASE_AUTH_DOMAIN:"cloudgram-v2.firebaseapp.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"363404342754",REACT_APP_FIREBASE_PROJECT_ID:"cloudgram-v2",REACT_APP_FIREBASE_STORAGE_BUCKET:"cloudgram-v2.appspot.com"}).REACT_APP_FIREBASE_API_ID});fe.a.initializeApp(pe),fe.a.firestore().settings({timestampsInSnapshots:!0});fe.a.storage(),fe.a.firestore.FieldValue.serverTimestamp;var Se=fe.a,Ee=Object(oe.e)(_e,Object(oe.d)(Object(oe.a)(he.a.withExtraArgument({getFirebase:ge.getFirebase,getFirestore:de.getFirestore,getStorage:Se.storage()})),Object(de.reduxFirestore)(Se))),Ie={firebase:fe.a,config:pe,dispatch:Ee.dispatch};o.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(_.a,{store:Ee,children:Object(r.jsx)(ge.ReactReduxFirebaseProvider,Object(a.a)(Object(a.a)({},Ie),{},{children:Object(r.jsx)(h.a,{children:Object(r.jsx)(se,{})})}))})}),document.getElementById("root")),ie()},45:function(e,t,n){e.exports={Header:"Toolbar_Header__BO0BE",NavLink:"Toolbar_NavLink__1WtYe",active:"Toolbar_active__2s3M8"}},97:function(e,t,n){e.exports={ModalGallery:"ModalGallery_ModalGallery__3mQN5",Container:"ModalGallery_Container__30GTU"}}},[[447,1,2]]]);
//# sourceMappingURL=main.47f1295e.chunk.js.map