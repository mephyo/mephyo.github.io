(function(t){function e(e){for(var n,s,l=e[0],r=e[1],c=e[2],h=0,d=[];h<l.length;h++)s=l[h],o[s]&&d.push(o[s][0]),o[s]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,l=1;l<a.length;l++){var r=a[l];0!==o[r]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},o={app:0},i=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=r;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"01da":function(t,e,a){"use strict";var n=a("c7fa"),o=a.n(n);o.a},"0e33":function(t,e,a){"use strict";var n=a("23a9"),o=a.n(n);o.a},1114:function(t,e,a){"use strict";var n=a("8ad9"),o=a.n(n);o.a},"12e2":function(t,e,a){},"14ed":function(t,e,a){"use strict";var n=a("cbc5"),o=a.n(n);o.a},"15c5":function(t,e,a){},"18ab":function(t,e,a){},"1c08":function(t,e,a){},"1eb6":function(t,e,a){},22:function(t,e){},"23a9":function(t,e,a){},"2a9f":function(t,e,a){"use strict";var n=a("69c3"),o=a.n(n);o.a},"2f40":function(t,e,a){"use strict";var n=a("a555"),o=a.n(n);o.a},3052:function(t,e,a){},"35dd":function(t,e,a){"use strict";var n=a("ef4a"),o=a.n(n);o.a},"4a87":function(t,e,a){"use strict";var n=a("66f7"),o=a.n(n);o.a},"4f2d":function(t,e,a){"use strict";var n=a("ef93"),o=a.n(n);o.a},5313:function(t,e,a){"use strict";var n=a("1eb6"),o=a.n(n);o.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var n=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app",lang:t.language}},[a("router-view")],1)},i=[],s={name:"App",computed:{language:function(){var t=this.$store.state.language;switch(t){case"cn":return"zh-cn";default:return"en"}}},mounted:function(){localStorage.removeItem("likedPhotos"),this.$store.dispatch("getGallery"),this.$store.dispatch("init")}},l=s,r=a("2877"),c=Object(r["a"])(l,o,i,!1,null,null,null);c.options.__file="App.vue";var u=c.exports,h=a("8c4f"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",[a("navigator"),a("ul",{staticClass:"home-gallery-list"},t._l(t.gallery,function(t,e){return a("li",{key:e+1+"-"+t.codeName},[a("router-link",{attrs:{to:{name:"Project",params:{id:t.codeName}}}},[a("home-slider",{attrs:{gallery:t.cover,name:t.name,full:0===e}})],1)],1)})),a("router-link",{attrs:{to:"/gallery"}},[a("dyn-btn",[a("international",{attrs:{langSet:t.moreBtn}})],1)],1),a("tail")],1)},p=[],m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"nav",class:{shah:t.shah}},[a("div",{staticClass:"nav-logo-wrapper",on:{click:function(e){e.stopPropagation(),t.go("/")}}},[a("dyn-icon",{attrs:{paths:["M12 0C5.373 0 0 5.373 0 12c0 6.006 4.412 10.982 10.173 11.861a35.448 35.448 0 0 0-.377-2.834l3.524-.476a119.13 119.13 0 0 0-.139 3.391C19.254 23.35 24 18.23 24 12c0-6.627-5.373-12-12-12zm4.74 11.388c-1.069 0-2.15-.046-3.242-.14l-.106.352c2.573 2.126 3.86 3.524 3.86 4.194 0 .481-.26.96-.776 1.436-.517.475-1.028.713-1.533.713-.963 0-1.856-1.836-2.678-5.603h-.406c-1.292 3.397-2.36 5.093-3.206 5.093-.494 0-1.011-.21-1.551-.626-.54-.417-.81-.866-.81-1.348 0-.846 1.503-2.168 4.51-3.965l-.105-.405c-1.316-.106-3.043-.347-5.181-.722-.458-.153-.687-.588-.687-1.305 0-.563.135-1.086.405-1.568.27-.481.646-.722 1.128-.722.681 0 2.296 1.016 4.846 3.048l.317-.211c-.6-2.632-.899-4.346-.899-5.145 0-.364.203-.661.608-.89a2.76 2.76 0 0 1 1.383-.344c1.163 0 1.745.411 1.745 1.234 0 .928-.494 2.666-1.48 5.215l.282.282c2.572-1.644 4.21-2.467 4.915-2.467.447 0 .832.27 1.155.81.323.541.484 1.058.484 1.552 0 1.021-.992 1.532-2.978 1.532z"]}})],1),a("ul",{staticClass:"nav-links"},t._l(t.links,function(e){return a("li",{key:e.path,staticClass:"nav-links-item",on:{click:function(a){a.stopPropagation(),t.go(e.path)}}},[a("div",{staticClass:"nav-links-item-inner"},[a("international",{attrs:{langSet:e.name}})],1),e.selected?a("div",{staticClass:"nav-links-item-indicator"}):t._e()])})),a("div",{staticClass:"nav-btn",on:{click:function(e){e.stopPropagation(),t.go("/apply")}}},[a("international",{attrs:{langSet:t.applyBtn}})],1)])},v=[],f=(a("c5f6"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("svg",{staticClass:"icon",attrs:{viewBox:"0 0 24 24"}},t._l(t.paths,function(t,e){return a("path",{key:e,attrs:{d:t}})}))}),g=[],y={name:"DynIcon",props:{paths:Array}},_=y,w=(a("1114"),Object(r["a"])(_,f,g,!1,null,null,null));w.options.__file="DynIcon.vue";var b=w.exports,k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"int"},[a("div",{staticClass:"txt-main",attrs:{lang:t.lang}},[t._v(t._s(t.localLangSet.main))]),a("div",{staticClass:"txt-secondary"},t._l(t.localLangSet.secondary,function(e,n){return a("span",{key:n,attrs:{lang:n}},[t._v(t._s(e))])}))])},j=[],C={name:"International",props:{langSet:Object},data:function(){return{localLangSet:{}}},computed:{lang:function(){return this.$store.state.lang}},mounted:function(){var t=this.$store.state.lang,e={main:{},secondary:this.langSet};e.main=this.langSet[t],delete e.secondary[t],this.localLangSet=e}},x=C,L=(a("8cbd"),Object(r["a"])(x,k,j,!1,null,null,null));L.options.__file="International.vue";var P=L.exports,S={name:"Navigator",components:{DynIcon:b,International:P},props:{selected:Number,shah:Boolean},data:function(){return{navLinks:[{name:{en:"Gallery",ja:"ぎやらりい",cmn:"画廊"},path:"/gallery"},{name:{en:"About",ja:"約",cmn:"关于"},path:"/about"},{name:{en:"Gojūon",ja:"ごじゅうおん",cmn:"五十音"},path:"/gojuon"}],applyBtn:{en:"Apply",ja:"申し込む",cmn:"申请"}}},computed:{links:function(){var t=this.navLinks.slice();return this.selected&&(t[this.selected-1].selected=!0),t}},methods:{go:function(t){this.$router.push({path:t})}}},V=S,M=(a("5313"),Object(r["a"])(V,m,v,!1,null,null,null));M.options.__file="Navigator.vue";var $=M.exports,N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",t._l(t.footers,function(e){return a("section",{key:e.lang,attrs:{lang:e.lang}},t._l(e.strings,function(e,n){return a("p",{key:n},[t._v(t._s(e))])}))}))},z=[],O={name:"Tail",data:function(){return{footers:[{lang:"en",strings:["All rights reserved","Please respect the model"]},{lang:"ja",strings:["全著作権所有","モードを尊重してください"]},{lang:"cmn",strings:["版权所有","请尊重模特"]}]}}},T=O,H=(a("01da"),Object(r["a"])(T,N,z,!1,null,null,null));H.options.__file="Tail.vue";var E=H.exports,A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"slider-wrapper"},[a("transition-group",{attrs:{name:"slide",mode:"out-in"}},t._l(t.gallery,function(e,n){return n===t.coverIndex?a("div",{key:n,staticClass:"slider-cover-wrapper"},[t.full?a("img",{staticClass:"slider-cover",attrs:{src:e.src.jpg,alt:t.name+"Cover-"+(n+1)}}):a("img",{staticClass:"slider-cover",attrs:{src:e.src.thumb,alt:t.name+"Cover-"+(n+1)}})]):t._e()})),a("div",{staticClass:"slider-title-wrapper"},[a("h2",[t._v(t._s(t.name))])])],1)},I=[],J={name:"HomeSlider",props:{gallery:Array,name:String,full:Boolean},data:function(){return{coverIndex:0,timer:""}},methods:{changeCover:function(){this.coverIndex=2===this.coverIndex?0:this.coverIndex+1}},mounted:function(){for(var t=this,e=0;e<this.gallery.length;e++){var a=new Image;a.src=this.gallery[e]}var n=2e3*Math.random()+5e3;this.timer=setInterval(function(){t.changeCover()},n)},beforeDestroy:function(){clearInterval(this.timer)}},D=J,X=(a("8dad"),Object(r["a"])(D,A,I,!1,null,null,null));X.options.__file="HomeSlider.vue";var B=X.exports,G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dyn-btn"},[t._t("default")],2)},W=[],K={name:"DynBtn"},R=K,q=(a("a344"),Object(r["a"])(R,G,W,!1,null,null,null));q.options.__file="DynBtn.vue";var Z=q.exports,U={name:"Home",components:{Navigator:$,Tail:E,HomeSlider:B,DynBtn:Z,International:P},data:function(){return{moreBtn:{en:"More",ja:"もっと見る",cmn:"更多"}}},computed:{gallery:function(){var t=this.$store.state.gallery;return t.slice(0,5)}},methods:{go:function(t){this.$router.push({name:"Project",params:{id:t}})}}},Y=U,F=(a("de16"),Object(r["a"])(Y,d,p,!1,null,null,null));F.options.__file="Home.vue";var Q=F.exports,tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",[a("navigator",{attrs:{selected:1}}),a("ul",{staticClass:"gallery-list"},t._l(t.gallery,function(e){return a("li",{key:e.codeName,on:{click:function(a){t.go(e.codeName)}}},[a("stack",{attrs:{photoset:e.cover,title:e.name}})],1)})),a("tail")],1)},et=[],at=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"stack"},[t._l(t.randomPhotoset,function(t){return a("stack-photo",{key:t.codename,staticClass:"stack-photo",attrs:{src:t.src.thumb}})}),a("h2",{staticClass:"stack-name"},[t._v(t._s(t.title))])],2)},nt=[],ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("img",{ref:"photo",staticClass:"stack-photo",style:t.photoStyle,attrs:{src:t.src},on:{load:t.imageReady}})},it=[],st={name:"StackPhoto",props:{src:String},data:function(){return{photoStyle:{marginTop:"0px",marginLeft:"0px",transform:"rotate(0deg) translateZ(0)",opacity:0}}},methods:{calcPosition:function(){var t=this.$refs.photo;this.photoStyle.marginTop=t.offsetHeight/-2+"px",this.photoStyle.marginLeft=t.offsetWidth/-2+"px"},calcAngle:function(){var t=Math.floor(30*Math.random())-15;this.photoStyle.transform="rotate("+t+"deg) translateZ(0)"},imageReady:function(){this.calcPosition(),this.calcAngle(),this.photoStyle.opacity=1}}},lt=st,rt=(a("35dd"),Object(r["a"])(lt,ot,it,!1,null,null,null));rt.options.__file="StackPhoto.vue";var ct=rt.exports,ut={name:"Stack",components:{StackPhoto:ct},props:{photoset:Array,title:String},computed:{randomPhotoset:function(){return this.shuffle(this.photoset)}},methods:{shuffle:function(t){for(var e=t.length-1;e>0;e--){var a=Math.floor(Math.random()*(e+1)),n=[t[a],t[e]];t[e]=n[0],t[a]=n[1]}return t}}},ht=ut,dt=(a("e668"),Object(r["a"])(ht,at,nt,!1,null,null,null));dt.options.__file="Stack.vue";var pt=dt.exports,mt={name:"Gallery",components:{Navigator:$,Stack:pt,Tail:E},computed:{gallery:function(){return this.$store.state.gallery}},methods:{go:function(t){this.$router.push({name:"Project",params:{id:t}})}}},vt=mt,ft=(a("7a2a"),Object(r["a"])(vt,tt,et,!1,null,null,null));ft.options.__file="Gallery.vue";var gt=ft.exports,yt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",[a("navigator"),a("div",{staticClass:"project-content"},[a("h2",[t._v(t._s(t.project.name))]),a("ul",{staticClass:"photo-list"},t._l(t.project.photos,function(e,n){return a("li",{key:e.codename},[a("photo",{attrs:{src:e.src,alt:e.codeName},nativeOn:{click:function(e){t.showSlider(n)}}}),a("div",{staticClass:"watermark-wrapper"},[a("span",{staticClass:"watermark"},[t._v(t._s(t.project.name)+" "+t._s(n+1))])])],1)})),a("div",{staticClass:"project-navigator"},[a("div",{staticClass:"proj-nav-btn",class:{faded:!t.prevProjectCodeName},on:{click:function(e){t.goProject(t.prevProjectCodeName)}}},[a("dyn-icon",{attrs:{paths:["M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"]}})],1),a("div",{staticClass:"proj-nav-btn",class:{faded:!t.nextProjectCodeName},on:{click:function(e){t.goProject(t.nextProjectCodeName)}}},[a("dyn-icon",{attrs:{paths:["M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"]}})],1)])]),t.sliderVisible?a("slider",{attrs:{photos:t.project.photos,now:t.nowPhoto,total:t.project.photos.length},on:{killMe:function(e){t.sliderVisible=!1},changeNow:t.changeNow}}):t._e(),a("tail")],1)},_t=[],wt=(a("ac6a"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"basic-picture"},[a("img",{staticClass:"basic-picture-img",attrs:{src:t.src.jpg,alt:t.alt}}),a("div",{staticClass:"basic-picture-scrim"})])}),bt=[],kt={name:"Photo",props:{src:Object,alt:String}},jt=kt,Ct=(a("2f40"),Object(r["a"])(jt,wt,bt,!1,null,null,null));Ct.options.__file="Photo.vue";var xt=Ct.exports,Lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"slider-main"},[t.prevPhoto?a("div",{staticClass:"wrapper-prev",class:t.wrapperClass,style:t.wrapperStyle},[a("slider-photo",{attrs:{src:t.prevPhoto.src,alt:t.prevPhoto.codeName}})],1):t._e(),a("div",{staticClass:"wrapper-now",class:t.wrapperClass,style:t.wrapperStyle},[a("slider-photo",{attrs:{src:t.nowPhoto.src,alt:t.nowPhoto.codeName},on:{moved:t.doMove,movEnd:t.doEnd}})],1),t.nextPhoto?a("div",{staticClass:"wrapper-next",class:t.wrapperClass,style:t.wrapperStyle},[a("slider-photo",{attrs:{src:t.nextPhoto.src,alt:t.nextPhoto.codeName}})],1):t._e(),a("div",{staticClass:"slider-index"},[t._v(t._s(t.now+1)+" / "+t._s(t.total))]),a("div",{staticClass:"slider-kill",on:{click:t.killMe}},[a("dyn-icon",{attrs:{paths:["M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"]}})],1)])},Pt=[],St=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"silder-photo-wrapper",on:{touchstart:t.startTouch,touchmove:t.moveTouch,touchend:t.endTouch}},[a("img",{staticClass:"slider-photo",attrs:{src:t.src.jpg,alt:t.alt}})])},Vt=[],Mt={name:"SliderPhoto",props:{src:Object,alt:String},data:function(){return{startX:0,disX:0}},methods:{startTouch:function(t){t.preventDefault();var e=t.changedTouches[0].clientX;this.startX=e},moveTouch:function(t){t.preventDefault();var e=t.changedTouches[0].clientX;this.disX=e-this.startX,this.$emit("moved",this.disX)},endTouch:function(){this.$emit("movEnd",this.disX),this.startX=0,this.disX=0}}},$t=Mt,Nt=(a("0e33"),Object(r["a"])($t,St,Vt,!1,null,null,null));Nt.options.__file="SliderPhoto.vue";var zt=Nt.exports,Ot={name:"Slider",components:{SliderPhoto:zt,DynIcon:b},props:{photos:Array,now:Number,total:Number},data:function(){return{disX:0,aniOn:!1}},computed:{nowPhoto:function(){return this.photos[this.now]},prevPhoto:function(){return this.photos[this.now-1]},nextPhoto:function(){return this.photos[this.now+1]},wrapperStyle:function(){return{transform:"translateX("+this.disX+"px)"}},wrapperClass:function(){return{"wrapper-moving":this.aniOn}}},methods:{killMe:function(){this.$emit("killMe")},doMove:function(t){this.disX=t},doEnd:function(t){var e=this;Math.abs(t)>30&&(this.aniOn=!0,t>0&&this.prevPhoto?this.disX=window.innerWidth:t<0&&this.nextPhoto?this.disX=-window.innerWidth:this.disX=0,setTimeout(function(){e.$emit("changeNow",t),e.aniOn=!1,e.disX=0},250))}},created:function(){document.body.style.overflow="hidden"},destroyed:function(){document.body.style.overflow="auto"}},Tt=Ot,Ht=(a("c362"),Object(r["a"])(Tt,Lt,Pt,!1,null,null,null));Ht.options.__file="Slider.vue";var Et=Ht.exports,At={name:"Project",components:{Photo:xt,Navigator:$,Tail:E,DynIcon:b,Slider:Et},data:function(){return{project:{},prevProjectCodeName:"",nextProjectCodeName:"",nowPhoto:0,sliderVisible:!1}},methods:{indexing:function(){var t=this;this.prevProjectCodeName="",this.nextProjectCodeName="";var e=this.$route.params.id,a=this.$store.state.gallery;e&&a.length?a.forEach(function(n){for(var o=0;o<a.length;o++){var i=a[o];i.codeName===e&&(t.project=i,o>0&&(t.prevProjectCodeName=a[o-1].codeName),a[o+1]&&(t.nextProjectCodeName=a[o+1].codeName))}}):setTimeout(function(){t.indexing()},500)},goProject:function(t){this.project="",this.$router.push({name:"Project",params:{id:t}})},showSlider:function(t){this.nowPhoto=t,this.sliderVisible=!0},changeNow:function(t){t<0&&this.project.photos[this.nowPhoto+1]?this.nowPhoto=this.nowPhoto+1:t>0&&this.project.photos[this.nowPhoto-1]&&(this.nowPhoto=this.nowPhoto-1)}},mounted:function(){this.indexing()},watch:{$route:function(){this.indexing()}}},It=At,Jt=(a("14ed"),Object(r["a"])(It,yt,_t,!1,null,null,null));Jt.options.__file="Project.vue";var Dt=Jt.exports,Xt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"about-wrapper"},[a("navigator",{attrs:{selected:2}}),t._m(0)],1)},Bt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",{staticClass:"about-main"},[a("section",[a("p",{attrs:{lang:"en"}},[a("del",[t._v("Sorry, there is no about page yet.")])]),a("p",{attrs:{lang:"ja"}},[a("del",[t._v("申し訳ありませんが、ページはまだありません。")])]),a("p",{attrs:{lang:"cmn"}},[a("del",[t._v("不好，现在还没有关于页面。")])])]),a("section",[a("p",[t._v("不像其他那些「独立摄影师」的所谓「个人项目」，这个网站纯粹是用来把从2014年开始我拍过的东西展示出来。")]),a("p",[t._v("如果你是因为想做我的模特而来到这里，希望你能花点时间填一下申请，这样能帮助我了解你想拍什么样的照片。")])])])}],Gt={name:"About",components:{Navigator:$}},Wt=Gt,Kt=(a("5795"),Object(r["a"])(Wt,Xt,Bt,!1,null,null,null));Kt.options.__file="About.vue";var Rt=Kt.exports,qt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"apply-form",attrs:{lang:"zh-CN"}},[a("navigator",{attrs:{shah:""}}),a("div",{staticClass:"apply-content"},[a("div",{staticClass:"block-btn",on:{click:t.wishYouWereHere}},[t._v(t._s(t.locationLabel))]),a("p",[t._v("获取坐标并不是必须的，你也可以选择手动填写地址。")]),a("ul",{staticClass:"apply-list"},t._l(t.model,function(e,n){return a("apply-widget",{key:n,attrs:{q:n,value:e,schema:t.schema},on:{input:t.callMe}})})),a("div",{staticClass:"block-btn",on:{click:t.submitData}},[t._v(t._s(t.submitLabel))])]),t.submitSuccess?a("dyn-card",[a("p",[t._v("谢谢你的喜欢")]),a("p",[t._v("我将很快联系你")])]):t._e()],1)},Zt=[],Ut=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"widget"},[a("div",{staticClass:"widget-head"},[a("span",{staticClass:"widget-label"},[t._v(t._s(t.model.label))]),t.model.hint?a("span",{staticClass:"widget-hint"},[t._v("("+t._s(t.model.hint)+")")]):t._e()]),"input"===t.model.type?a("div",{staticClass:"widget-field"},[a("div",{staticClass:"widget-inputz"},["checkbox"===t.model.inputType?a("input",{directives:[{name:"model",rawName:"v-model",value:t.localValue,expression:"localValue"}],staticClass:"widget-input",attrs:{placeholder:t.model.placeholder,type:"checkbox"},domProps:{checked:Array.isArray(t.localValue)?t._i(t.localValue,null)>-1:t.localValue},on:{change:function(e){var a=t.localValue,n=e.target,o=!!n.checked;if(Array.isArray(a)){var i=null,s=t._i(a,i);n.checked?s<0&&(t.localValue=a.concat([i])):s>-1&&(t.localValue=a.slice(0,s).concat(a.slice(s+1)))}else t.localValue=o}}}):"radio"===t.model.inputType?a("input",{directives:[{name:"model",rawName:"v-model",value:t.localValue,expression:"localValue"}],staticClass:"widget-input",attrs:{placeholder:t.model.placeholder,type:"radio"},domProps:{checked:t._q(t.localValue,null)},on:{change:function(e){t.localValue=null}}}):a("input",{directives:[{name:"model",rawName:"v-model",value:t.localValue,expression:"localValue"}],staticClass:"widget-input",attrs:{placeholder:t.model.placeholder,type:t.model.inputType},domProps:{value:t.localValue},on:{input:function(e){e.target.composing||(t.localValue=e.target.value)}}})])]):t._e(),"select"===t.model.type?a("div",{staticClass:"widget-field"},[a("div",{staticClass:"widget-boxy"},t._l(t.model.values,function(e){return a("div",{key:e.id,staticClass:"widget-box",class:{selected:e.selected},on:{click:function(a){t.selectOne(e.id)}}},[e.icon?a("dyn-icon",{attrs:{paths:e.icon}}):t._e(),a("div",[t._v(t._s(e.name))])],1)}))]):t._e(),"checklist"===t.model.type?a("div",{staticClass:"widget-field"},[a("div",{staticClass:"widget-boxz"},t._l(t.model.values,function(e){return a("div",{key:e.id,staticClass:"widget-box",class:{selected:e.selected},on:{click:function(a){t.checkOne(e.id)}}},[e.icon?a("dyn-icon",{attrs:{paths:e.icon}}):t._e(),a("div",[t._v(t._s(e.name))])],1)}))]):t._e(),"checkbox"===t.model.type?a("div",{staticClass:"widget-field"},[a("div",{staticClass:"widget-checker",on:{click:t.switchCheck}},[t.localValue?a("dyn-icon",{attrs:{paths:["M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"]}}):t._e()],1)]):t._e()])},Yt=[],Ft=(a("6762"),a("2fdb"),{name:"ApplyWidget",components:{DynIcon:b},props:{q:String,value:[String,Array,Boolean],schema:Array},data:function(){return{model:{},localValue:"",bougie:3}},methods:{callDaddy:function(){this.$emit("input",this.q,this.localValue)},selectOne:function(t){var e=this;this.model.values.forEach(function(a){a.id===t?(a.selected=!0,e.localValue=a.id):a.selected=!1}),this.$forceUpdate()},checkOne:function(t){var e=this;this.model.values.forEach(function(a){if(a.id===t)if(!1===a.selected)a.selected=!0,e.localValue.push(t);else{a.selected=!1;for(var n=e.localValue.length-1;n>=0;n--)e.localValue[n]===t&&e.localValue.splice(n,1)}}),this.$forceUpdate()},switchCheck:function(){this.localValue=!this.localValue}},mounted:function(){var t=this;switch(this.schema.forEach(function(e){e.model===t.q&&(t.model=e)}),this.localValue=this.value,this.model.type){case"select":this.model.values.forEach(function(e){t.value===e.id?e.selected=!0:e.selected=!1});break;case"checklist":this.model.values.forEach(function(e){t.value.includes(e.id)?e.selected=!0:e.selected=!1});break;default:break}},watch:{localValue:function(){this.bougie>3&&this.callDaddy(),this.bougie++}}}),Qt=Ft,te=(a("f778"),Object(r["a"])(Qt,Ut,Yt,!1,null,null,null));te.options.__file="ApplyWidget.vue";var ee=te.exports,ae=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dyn-card-wrapper"},[a("div",{staticClass:"dyn-card-scrim",class:{show:t.show}}),a("div",{staticClass:"dyn-card",class:{show:t.show}},[t._t("default"),a("router-link",{attrs:{to:"/"}},[a("dyn-btn",[a("div",[t._v("去首页看看")])])],1)],2)])},ne=[],oe={name:"DynCard",components:{DynBtn:Z},data:function(){return{show:!1}},mounted:function(){var t=this;setTimeout(function(){t.show=!0},50)},created:function(){document.body.style.overflow="hidden"},destroyed:function(){document.body.style.overflow="auto"}},ie=oe,se=(a("2a9f"),Object(r["a"])(ie,ae,ne,!1,null,null,null));se.options.__file="DynCard.vue";var le=se.exports,re={name:"Apply",components:{ApplyWidget:ee,Navigator:$,DynCard:le},data:function(){return{submitLabel:"提交",locationLabel:"点击获取坐标",submitSuccess:!1,model:{call:"",age:"",gender:"female",contact:"",location:"",whereToSee:"",place:["hotel"],placeMore:"",time:["afternoon"],cloth:["nude","underwear"],clothMore:"",costume:"",style:"myIdea",styleMore:"",emotion:"excellent",pose:"good",phyLimit:"4",limit:"3",copyright:"2",special:"",note:"",contract:!1},schema:[{type:"input",inputType:"text",label:"称呼",model:"call",placeholder:"不一定是真实姓名"},{type:"input",inputType:"number",label:"年龄",model:"age",placeholder:"可不填"},{type:"select",label:"性别",model:"gender",values:[{icon:["M15 2c-3.9 0-7 3.1-7 7 0 1.8.6 3.4 1.7 4.6l-3.3 3.3-3.5-3.8-.7.7 3.5 3.8-3.5 3.5.7.7 3.5-3.5 3.3 3.5.7-.7-3.3-3.5 3.4-3.4c1.2 1.1 2.8 1.7 4.6 1.7 3.9 0 7-3.1 7-7S18.9 2 15 2zm0 13c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"],id:"female",name:"女"},{icon:["M14 2v1h6.3l-6.7 6.7C12.4 8.6 10.8 8 9 8c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7c0-1.8-.6-3.4-1.7-4.6L21 3.7V10h1V2h-8zM9 21c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"],id:"male",name:"男"},{icon:["M19 12c0-1.8-.6-3.4-1.7-4.6l3.6-3.6-.7-.7-3.6 3.6C15.4 5.6 13.8 5 12 5s-3.4.6-4.6 1.7L3.9 3.1l-.8.8 3.6 3.6C5.6 8.6 5 10.2 5 12s.6 3.4 1.7 4.6l-3.3 3.3.7.7 3.3-3.3C8.6 18.4 10.2 19 12 19s3.4-.6 4.6-1.7l3.6 3.6.7-.7-3.6-3.6c1.1-1.2 1.7-2.8 1.7-4.6zm-1 0c0 1.5-.5 2.8-1.4 3.9L12.7 12l3.9-3.9c.9 1.1 1.4 2.4 1.4 3.9zm-6-6c1.5 0 2.8.5 3.9 1.4L12 11.3 8.1 7.4C9.2 6.5 10.5 6 12 6zm-6 6c0-1.5.5-2.8 1.4-3.9l3.9 3.9-3.9 3.9C6.5 14.8 6 13.5 6 12zm6 6c-1.5 0-2.8-.5-3.9-1.4l3.9-3.9 3.9 3.9c-1.1.9-2.4 1.4-3.9 1.4z"],id:"futa",name:"保密"}]},{type:"input",inputType:"text",label:"联系方式",model:"contact",placeholder:"通讯工具 | 用户名"},{type:"input",inputType:"text",label:"你在哪里",model:"location",placeholder:"写城市就好"},{type:"input",inputType:"text",label:"可以看到你照片的地方",model:"whereToSee",placeholder:"平台 | 用户名"},{type:"checklist",label:"拍摄地点",model:"place",values:[{id:"outdoor",name:"室外",icon:["M19 19.5h-1v-4.8l-2.1 2.1-.7-.7 2.9-2.9v-2.6L16 12.7l-.7-.7L18 9.3V6.7l-2.1 2.1-.7-.7 3.4-3.4L22 8.1l-.7.7L19 6.7v2.6l2.9 2.9-.7.7-2.2-2.2v2.6l2.9 2.9-.7.7-2.2-2.2v4.8zm-12 0H6v-4.8l-2.1 2.1-.7-.7L6 13.3v-2.6l-2.1 2.1-.7-.7L6 9.3V6.7L3.9 8.9l-.8-.8 3.4-3.4 3.4 3.4-.8.8L7 6.7v2.6l2.9 2.9-.7.7L7 10.7v2.6l2.9 2.9-.7.7L7 14.7v4.8zm6-2h-1v-4.8l-2.1 2.1-.7-.7 2.9-2.9V8.7L10 10.8l-.7-.7L12 7.3V4.7L9.9 6.9l-.8-.8 3.4-3.4 3.4 3.4-.7.7L13 4.7v2.6l2.9 2.9-.7.7L13 8.7v2.6l2.9 2.9-.7.7-2.2-2.2v4.8z"]},{id:"public",name:"公共场所",icon:["M21 9h1v4h-1z","M21 14h-1V5H4v9H1v1h2v6h1v-1h16v1h1v-6h2v-1h-2zm-4-8h2v8h-2V6zm-3 0h2v8h-2V6zm-3 0h2v8h-2V6zM8 6h2v8H8V6zM5 6h2v8H5V6zm15 13H4v-4h16v4z","M2 9h1v4H2z"]},{id:"hotel",name:"酒店",icon:["M21 10V2H3v8l-2 4v6h3v3h1v-3h14v3h1v-3h3v-6l-2-4zM4 3h16v6h-1V7h-6v2h-2V7H5v2H4V3zm14 7h-4V8h4v2zm-8 0H6V8h4v2zm-6.1.5l.1-.3V10h1v1h6v-1h2v1h6v-1h1v.2l.1.2 1.8 3.5H2.1l1.8-3.4zM22 19H2v-4h20v4z"]},{id:"home",name:"住处",icon:["M20 9V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v4c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h1v2h1v-2h12v2h1v-2h1c1.1 0 2-.9 2-2v-7c0-1.1-.9-2-2-2zM5 5c0-.6.4-1 1-1h12c.6 0 1 .4 1 1v4.3c-.6.3-1 1-1 1.7v2H6v-2c0-.7-.4-1.4-1-1.7V5zm13 9v1H6v-1h12zM4 19c-.6 0-1-.4-1-1v-7c0-.6.4-1 1-1s1 .4 1 1v8H4zm2 0v-3h12v3H6zm15-1c0 .6-.4 1-1 1h-1v-8c0-.6.4-1 1-1s1 .4 1 1v7z"]},{id:"other",name:"其他",icon:["M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 3c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zM18 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 3c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zM12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 3c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z"]}]},{type:"input",inputType:"text",label:"拍摄地点的补充说明",model:"placeMore",placeholder:"你有什么特别的地点？"},{type:"checklist",label:"拍摄时间",model:"time",values:[{id:"dawn",name:"凌晨"},{id:"morning",name:"上午"},{id:"afternoon",name:"下午"},{id:"evening",name:"晚上"}]},{type:"select",label:"拍摄风格",model:"style",values:[{id:"myIdea",name:"我有特别的想法"},{id:"yourIdea",name:"全部按你的风格来"}]},{type:"input",inputType:"text",label:"拍摄风格的补充说明",model:"styleMore",placeholder:"你有什么特别的想法？"},{type:"checklist",label:"服装",model:"cloth",values:[{id:"nude",name:"裸体"},{id:"underwear",name:"内衣"},{id:"casual",name:"常服"},{id:"other",name:"其他"}]},{type:"input",inputType:"text",label:"服装的补充说明",model:"clothMore",placeholder:"你有什么特别的服装？"},{type:"input",inputType:"text",label:"道具",model:"costume",placeholder:"蜡烛，纱，丝袜之类的"},{type:"select",label:"你拍照时的表情",model:"emotion",values:[{id:"excellent",name:"我很会做表情"},{id:"good",name:"我拍照只有一种表情"},{id:"poor",name:"我不会做表情"},{id:"none",name:"我不拍脸"}]},{type:"select",label:"你拍照时的姿势",model:"pose",values:[{id:"excellent",name:"我很会摆 pose"},{id:"good",name:"我会一点"},{id:"poor",name:"请教教我"}]},{type:"select",label:"物理尺度",model:"phyLimit",values:[{id:"4",name:"全裸并露点"},{id:"3",name:"全裸然而不露点"},{id:"2",name:"半裸"},{id:"1",name:"内衣"}]},{type:"select",label:"心理尺度",model:"limit",values:[{id:"4",name:"色情又变态"},{id:"3",name:"有欲望但不色情"},{id:"2",name:"没有欲望的美好肉体"},{id:"1",name:"性冷淡"}]},{type:"select",label:"版权",model:"copyright",values:[{id:"1",name:"禁止在任何地方发布"},{id:"2",name:"可以在我的网站发布不露脸的照片"},{id:"3",name:"可以在我的网站发布所有照片"},{id:"4",name:"可以在我的网站和其他平台发布不露脸的照片"},{id:"5",name:"可以在我的网站和其他平台发布所有照片"}]},{type:"input",inputType:"text",label:"特殊要求",model:"special",placeholder:"例：我要和我的宠物一起拍照！"},{type:"input",inputType:"text",label:"备注",model:"note",placeholder:"还有什么没有提到的？"},{type:"checkbox",label:"需要纸质合同",hint:"自己打印",model:"contract"}]}},methods:{wishYouWereHere:function(){var t=this;function e(e){var a={lat:e.coords.latitude,lon:e.coords.longitude};t.locationLabel="已得到位置",localStorage.setItem("lastLocation",JSON.stringify(a)),t.$store.dispatch("newLocation",JSON.stringify(a)),delete t.model.location}function a(){console.warn("FATAL ERROR: GPS fail, we are lost!")}navigator.geolocation.getCurrentPosition(e,a)},submitData:function(){var t=this;this.submitLabel="稍等",this.$http.post("newApplier",this.model).then(function(e){t.submitLabel="提交成功",t.submitSuccess=!0},function(e){alert("似乎失去连接"),t.submitLabel="请再试一次"})},callMe:function(t,e){this.model[t]=e}}},ce=re,ue=(a("df63"),Object(r["a"])(ce,qt,Zt,!1,null,null,null));ue.options.__file="Apply.vue";var he=ue.exports,de=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"gojuon"},[a("navigator",{attrs:{selected:3}}),a("div",{staticClass:"gojuon-wrapper"},[a("div",{staticClass:"gojuon-config",attrs:{lang:"cmn"}},[a("dyn-chk",{attrs:{active:t.showHira},nativeOn:{click:function(e){return t.switchHira(e)}}},[t._v("平假名")]),a("dyn-chk",{attrs:{active:t.showKana},nativeOn:{click:function(e){return t.switchKana(e)}}},[t._v("片假名")])],1),a("table",{staticClass:"gojuon-table"},t._l(t.gojuon,function(e,n){return a("tr",{key:n},t._l(e,function(e,n){return a("td",{key:n,on:{click:function(a){t.giveMe(e)}}},[a("div",{staticClass:"gojuon-card"},[t.showHira?a("div",{directives:[{name:"show",rawName:"v-show",value:e.active,expression:"col.active"}],attrs:{lang:"ja-Hira"}},[t._v(t._s(e.hira))]):t._e(),t.showKana?a("div",{directives:[{name:"show",rawName:"v-show",value:e.active,expression:"col.active"}],attrs:{lang:"ja-Kana"}},[t._v(t._s(e.kana))]):t._e(),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.active,expression:"!col.active"}],attrs:{lang:"en"}},[t._v(t._s(e.pro))])]),a("div",{staticClass:"gojuon-marker",class:{selected:e.highlighted},on:{click:function(a){a.stopPropagation(),t.highMe(e)}}})])}))}))])],1)},pe=[],me=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dyn-chk"},[a("div",{staticClass:"dyn-chk-inner",class:{active:t.active}},[t._t("default")],2)])},ve=[],fe={name:"DynChk",props:{active:Boolean}},ge=fe,ye=(a("4f2d"),Object(r["a"])(ge,me,ve,!1,null,null,null));ye.options.__file="DynChk.vue";var _e=ye.exports,we={name:"Gojuon",components:{Navigator:$,DynChk:_e},data:function(){return{gojuon:[[{hira:"あ",kana:"ア",pro:"a"},{hira:"い",kana:"イ",pro:"i"},{hira:"う",kana:"ウ",pro:"u"},{hira:"え",kana:"エ",pro:"e"},{hira:"お",kana:"オ",pro:"o"}],[{hira:"か",kana:"カ",pro:"ka"},{hira:"き",kana:"キ",pro:"ki"},{hira:"く",kana:"ク",pro:"ku"},{hira:"け",kana:"ケ",pro:"ke"},{hira:"こ",kana:"コ",pro:"ko"}],[{hira:"さ",kana:"サ",pro:"sa"},{hira:"し",kana:"シ",pro:"shi"},{hira:"す",kana:"ス",pro:"su"},{hira:"せ",kana:"セ",pro:"se"},{hira:"そ",kana:"ソ",pro:"so"}],[{hira:"た",kana:"タ",pro:"ta"},{hira:"ち",kana:"チ",pro:"chi"},{hira:"つ",kana:"ツ",pro:"tsu"},{hira:"て",kana:"テ",pro:"te"},{hira:"と",kana:"ト",pro:"to"}],[{hira:"な",kana:"ナ",pro:"na"},{hira:"に",kana:"ニ",pro:"ni"},{hira:"ぬ",kana:"ヌ",pro:"nu"},{hira:"ね",kana:"ネ",pro:"ne"},{hira:"の",kana:"ノ",pro:"no"}],[{hira:"は",kana:"ハ",pro:"ha"},{hira:"ひ",kana:"ヒ",pro:"hi"},{hira:"ふ",kana:"フ",pro:"fu"},{hira:"へ",kana:"ヘ",pro:"he"},{hira:"ほ",kana:"ホ",pro:"ho"}],[{hira:"ま",kana:"マ",pro:"ma"},{hira:"み",kana:"ミ",pro:"mi"},{hira:"む",kana:"ム",pro:"mu"},{hira:"め",kana:"メ",pro:"me"},{hira:"も",kana:"モ",pro:"mo"}],[{hira:"ら",kana:"ラ",pro:"ra"},{hira:"り",kana:"リ",pro:"ri"},{hira:"る",kana:"ル",pro:"ru"},{hira:"れ",kana:"レ",pro:"re"},{hira:"ろ",kana:"ロ",pro:"ro"}],[{hira:"が",kana:"ガ",pro:"ga"},{hira:"ぎ",kana:"ギ",pro:"gi"},{hira:"ぐ",kana:"グ",pro:"gu"},{hira:"げ",kana:"ゲ",pro:"ge"},{hira:"ご",kana:"ゴ",pro:"go"}],[{hira:"ざ",kana:"ザ",pro:"za"},{hira:"じ",kana:"ジ",pro:"ji"},{hira:"ず",kana:"ズ",pro:"zu"},{hira:"ぜ",kana:"ゼ",pro:"ze"},{hira:"ぞ",kana:"ｿﾞ",pro:"zo"}]],showHira:!0,showKana:!1}},methods:{giveMe:function(t){var e=this;t.active=!0,this.$forceUpdate(),setTimeout(function(){t.active=!1,e.$forceUpdate()},3e3)},highMe:function(t){t.highlighted=!t.highlighted,this.$forceUpdate()},switchHira:function(){this.showHira=!this.showHira},switchKana:function(){this.showKana=!this.showKana}},mounted:function(){this.gojuon.forEach(function(t){t.forEach(function(t){t.active=!1,t.highlighted=!1})})}},be=we,ke=(a("4a87"),Object(r["a"])(be,de,pe,!1,null,null,null));ke.options.__file="Gojuon.vue";var je=ke.exports,Ce=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"judy-juice"},[a("h1",{staticClass:"judy-title"},[t._v(t._s(t.project.title))]),t.galleryReady?a("ul",{staticClass:"pal-list"},t._l(t.project.gallery,function(e){return a("li",{key:e.id,staticClass:"pal-list-item"},[t._l(e.set,function(t){return a("img",{key:t.src,staticClass:"pal-list-img",style:{width:t.width+"px",height:t.height+"px"},attrs:{src:t.src,alt:t.alt}})}),a("div",{staticClass:"pal-list-label"},[t._v(t._s(e.id))])],2)})):t._e()])},xe=[],Le={name:"Home",data:function(){return{pageWidth:375,galleryReady:!1,project:{title:"8",gallery:[{id:1,set:[{src:"https://res.cloudinary.com/mephyo/image/upload/Judy-2018-9-28-1.jpg",width:640,height:960},{src:"https://res.cloudinary.com/mephyo/image/upload/Judy-2018-9-28-2.jpg",width:640,height:960}]},{id:2,set:[{src:"https://res.cloudinary.com/mephyo/image/upload/Judy-2018-9-28-3.jpg",width:960,height:640},{src:"https://res.cloudinary.com/mephyo/image/upload/Judy-2018-9-28-4.jpg",width:640,height:960}]},{id:3,set:[{src:"https://res.cloudinary.com/mephyo/image/upload/Judy-2018-9-28-5.jpg",width:960,height:640},{src:"https://res.cloudinary.com/mephyo/image/upload/Judy-2018-9-28-6.jpg",width:640,height:960}]},{id:4,set:[{src:"https://res.cloudinary.com/mephyo/image/upload/Judy-2018-9-28-7.jpg",width:640,height:960},{src:"https://res.cloudinary.com/mephyo/image/upload/Judy-2018-9-28-9.jpg",width:640,height:960}]},{id:5,set:[{src:"https://res.cloudinary.com/mephyo/image/upload/Judy-2018-9-28-8.jpg",width:640,height:960},{src:"https://res.cloudinary.com/mephyo/image/upload/Judy-2018-9-28-10.jpg",width:640,height:960}]},{id:6,set:[{src:"https://res.cloudinary.com/mephyo/image/upload/Judy-2018-9-28-11.jpg",width:640,height:960},{src:"https://res.cloudinary.com/mephyo/image/upload/Judy-2018-9-28-17.jpg",width:640,height:960}]},{id:7,set:[{src:"https://res.cloudinary.com/mephyo/image/upload/Judy-2018-9-28-12.jpg",width:639,height:960},{src:"https://res.cloudinary.com/mephyo/image/upload/Judy-2018-9-28-15.jpg",width:640,height:960}]},{id:8,set:[{src:"https://res.cloudinary.com/mephyo/image/upload/Judy-2018-9-28-13.jpg",width:640,height:960},{src:"https://res.cloudinary.com/mephyo/image/upload/Judy-2018-9-28-14.jpg",width:640,height:960}]},{id:9,set:[{src:"https://res.cloudinary.com/mephyo/image/upload/Judy-2018-9-28-19.jpg",width:960,height:640},{src:"https://res.cloudinary.com/mephyo/image/upload/Judy-2018-9-28-18.jpg",width:640,height:960}]},{id:10,set:[{src:"https://res.cloudinary.com/mephyo/image/upload/Judy-2018-9-28-20.jpg",width:640,height:960},{src:"https://res.cloudinary.com/mephyo/image/upload/Judy-2018-9-28-25.jpg",width:640,height:960}]},{id:11,set:[{src:"https://res.cloudinary.com/mephyo/image/upload/Judy-2018-9-28-21.jpg",width:640,height:960},{src:"https://res.cloudinary.com/mephyo/image/upload/Judy-2018-9-28-22.jpg",width:640,height:960}]},{id:12,set:[{src:"https://res.cloudinary.com/mephyo/image/upload/Judy-2018-9-28-23.jpg",width:640,height:960},{src:"https://res.cloudinary.com/mephyo/image/upload/Judy-2018-9-28-24.jpg",width:640,height:960}]}]}}},methods:{back:function(){this.$router.back()}},mounted:function(){var t=this;this.pageWidth=window.innerWidth,this.project.gallery.forEach(function(e){var a=e.set[0].width,n=e.set[0].height,o=e.set[1].width,i=e.set[1].height,s=i/n*a,l=i,r=(t.pageWidth-2)/(s+o);e.set[0].width=r*s,e.set[0].height=r*l,e.set[1].width=r*o,e.set[1].height=r*i,t.galleryReady=!0})}},Pe=Le,Se=(a("8431"),Object(r["a"])(Pe,Ce,xe,!1,null,null,null));Se.options.__file="Judy.vue";var Ve=Se.exports;n["a"].use(h["a"]);var Me=new h["a"]({routes:[{path:"/",name:"Home",component:Q},{path:"/gallery",name:"Gallery",component:gt},{path:"/project/:id",name:"Project",component:Dt},{path:"/about",alias:"/copyright",name:"About",component:Rt},{path:"/apply",name:"Apply",component:he},{path:"/gojuon",name:"Gojuon",component:je},{path:"/8",name:"Judy",component:Ve}],scrollBehavior:function(t,e,a){return{x:0,y:0}}}),$e=a("2f62"),Ne=a("28dd");n["a"].use($e["a"]),n["a"].use(Ne["a"]),n["a"].http.options.root="https://camera-dev-cavallo.herokuapp.com/",n["a"].http.options.emulateJSON=!0;var ze=new $e["a"].Store({state:{lang:"en",viewTimes:0,location:"",gallery:[]},getters:{viewerInfo:function(t){return{model:navigator.userAgent,viewTimes:t.viewTimes,lastLocation:t.location,navigator:{language:navigator.language,width:window.innerWidth,height:window.innerHeight}}}},mutations:{detLang:function(t){var e=navigator.language;e.includes("zh")?t.lang="cmn":e.includes("ja")?t.lang="ja":t.lang="en"},setGallery:function(t,e){t.gallery=e},detVisitor:function(t){var e=localStorage.getItem("viewTimes");e?e++:e=1,localStorage.setItem("viewTimes",e),t.viewTimes=e},detLocation:function(t){var e=localStorage.getItem("lastLocation");e||(e="Not Applied."),t.location=e}},actions:{init:function(t){t.commit("detLang"),t.commit("detVisitor"),t.commit("detLocation"),n["a"].http.post("newViewer",t.getters.viewerInfo)},getGallery:function(t){var e="/json/gallery.json";return new Promise(function(a,o){n["a"].http.get(e).then(function(e){var n=e.body.prefix,o=e.body.gallery.reverse();o.forEach(function(t){t.cover=[],t.photos=[];for(var e=1;e<=t.photoIds;e++){var a={src:{jpg:n+t.codeName+"-"+e+".jpg",thumb:n+"c_limit,h_400,q_90:420,w_400/"+t.codeName+"-"+e+".jpg"},codeName:t.codeName+"-"+e};t.photos.push(a)}for(var o=0;o<t.coverIds.length;o++){var i=t.coverIds[o];t.cover.push(t.photos[i-1])}}),t.commit("setGallery",o),a()},function(t){console.error("Get gallery failed."),o()})})},newLocation:function(t,e){n["a"].http.post("newLocation",{position:e})}}});a("e29a");n["a"].config.productionTip=!1,new n["a"]({router:Me,store:ze,render:function(t){return t(u)}}).$mount("#app")},5795:function(t,e,a){"use strict";var n=a("93ff"),o=a.n(n);o.a},"66f7":function(t,e,a){},"69c3":function(t,e,a){},"7a2a":function(t,e,a){"use strict";var n=a("3052"),o=a.n(n);o.a},"7c66":function(t,e,a){},8431:function(t,e,a){"use strict";var n=a("1c08"),o=a.n(n);o.a},"8ad9":function(t,e,a){},"8cbd":function(t,e,a){"use strict";var n=a("18ab"),o=a.n(n);o.a},"8dad":function(t,e,a){"use strict";var n=a("7c66"),o=a.n(n);o.a},"91fd":function(t,e,a){},"93ff":function(t,e,a){},"9de7":function(t,e,a){},a344:function(t,e,a){"use strict";var n=a("debf"),o=a.n(n);o.a},a555:function(t,e,a){},bc9d:function(t,e,a){},c362:function(t,e,a){"use strict";var n=a("12e2"),o=a.n(n);o.a},c7fa:function(t,e,a){},cbc5:function(t,e,a){},de16:function(t,e,a){"use strict";var n=a("15c5"),o=a.n(n);o.a},debf:function(t,e,a){},df63:function(t,e,a){"use strict";var n=a("91fd"),o=a.n(n);o.a},e29a:function(t,e,a){},e668:function(t,e,a){"use strict";var n=a("9de7"),o=a.n(n);o.a},ef4a:function(t,e,a){},ef93:function(t,e,a){},f778:function(t,e,a){"use strict";var n=a("bc9d"),o=a.n(n);o.a}});