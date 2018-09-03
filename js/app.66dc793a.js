(function(e){function t(t){for(var n,i,s=t[0],r=t[1],c=t[2],p=0,h=[];p<s.length;p++)i=s[p],o[i]&&h.push(o[i][0]),o[i]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);u&&u(t);while(h.length)h.shift()();return l.push.apply(l,c||[]),a()}function a(){for(var e,t=0;t<l.length;t++){for(var a=l[t],n=!0,s=1;s<a.length;s++){var r=a[s];0!==o[r]&&(n=!1)}n&&(l.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},o={app:0},l=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],r=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=r;l.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0c58":function(e,t,a){"use strict";var n=a("0e83"),o=a.n(n);o.a},"0e83":function(e,t,a){},1114:function(e,t,a){"use strict";var n=a("8ad9"),o=a.n(n);o.a},"14ed":function(e,t,a){"use strict";var n=a("cbc5"),o=a.n(n);o.a},"15c5":function(e,t,a){},"18ab":function(e,t,a){},19:function(e,t){},"1cff":function(e,t,a){"use strict";var n=a("1f51"),o=a.n(n);o.a},"1eb6":function(e,t,a){},"1f51":function(e,t,a){},"2a9f":function(e,t,a){"use strict";var n=a("69c3"),o=a.n(n);o.a},"2f40":function(e,t,a){"use strict";var n=a("a555"),o=a.n(n);o.a},3052:function(e,t,a){},"35dd":function(e,t,a){"use strict";var n=a("ef4a"),o=a.n(n);o.a},"4a87":function(e,t,a){"use strict";var n=a("66f7"),o=a.n(n);o.a},"4f2d":function(e,t,a){"use strict";var n=a("ef93"),o=a.n(n);o.a},5313:function(e,t,a){"use strict";var n=a("1eb6"),o=a.n(n);o.a},"56d7":function(e,t,a){"use strict";a.r(t);var n=a("2b0e"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app",lang:e.language}},[a("router-view")],1)},l=[],i={name:"App",computed:{language(){const e=this.$store.state.language;switch(e){case"cn":return"zh-cn";default:return"en"}}},mounted(){localStorage.removeItem("likedPhotos"),this.$store.dispatch("getGallery"),this.$store.dispatch("init")}},s=i,r=a("2877"),c=Object(r["a"])(s,o,l,!1,null,null,null);c.options.__file="App.vue";var u=c.exports,p=a("8c4f"),h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("main",{staticClass:"home-wrapper"},[a("navigator",{attrs:{shah:""}}),a("ul",{staticClass:"home-gallery-list"},e._l(e.gallery,function(e,t){return a("li",{key:t+1+"-"+e.codeName},[a("router-link",{attrs:{to:{name:"Project",params:{id:e.codeName}}}},[a("home-slider",{attrs:{gallery:e.cover,name:e.name}})],1)],1)})),a("router-link",{attrs:{to:"/gallery"}},[a("dyn-btn",[a("international",{attrs:{langSet:e.moreBtn}})],1)],1)],1)},d=[],m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",{staticClass:"nav",class:{"nav-indie":e.indieMode,shah:e.shah}},[a("div",{staticClass:"nav-inner"},[a("div",{staticClass:"nav-logo-wrapper",on:{click:function(t){t.stopPropagation(),e.go("/")}}},[a("dyn-logo")],1),a("ul",{staticClass:"nav-links"},e._l(e.links,function(t){return a("li",{key:t.path,staticClass:"nav-links-item",on:{click:function(a){a.stopPropagation(),e.go(t.path)}}},[a("div",{staticClass:"nav-links-item-inner"},[a("international",{attrs:{langSet:t.name}})],1),t.selected?a("div",{staticClass:"nav-links-item-indicator"}):e._e()])})),a("div",{staticClass:"nav-btn",on:{click:function(t){t.stopPropagation(),e.go("/apply")}}},[a("international",{attrs:{langSet:e.applyBtn}})],1)])])},v=[],f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("svg",{staticClass:"dyn-logo",attrs:{viewBox:"0 0 7 7"}},[a("path",{attrs:{d:"M3.5 0C1.6 0 0 1.6 0 3.5S1.6 7 3.5 7 7 5.4 7 3.5 5.4 0 3.5 0zm1.9 5.2l-.8.6-1.1-1.5-1.1 1.5-.8-.6 1.1-1.4L1 3.2l.3-.9 1.7.5V1h1v1.8l1.7-.6.3 1-1.7.6 1.1 1.4z"}})])},g=[],y={name:"DynLogo"},_=y,k=(a("1cff"),Object(r["a"])(_,f,g,!1,null,null,null));k.options.__file="DynLogo.vue";var b=k.exports,C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"int"},[a("div",{staticClass:"txt-main",attrs:{lang:e.lang}},[e._v(e._s(e.localLangSet.main))]),a("div",{staticClass:"txt-secondary"},e._l(e.localLangSet.secondary,function(t,n){return a("span",{key:n,attrs:{lang:n}},[e._v(e._s(t))])}))])},w=[],j={name:"International",props:{langSet:Object},data(){return{localLangSet:{}}},computed:{lang(){return this.$store.state.lang}},mounted(){const e=this.$store.state.lang;let t={main:{},secondary:this.langSet};t.main=this.langSet[e],delete t.secondary[e],this.localLangSet=t}},x=j,L=(a("8cbd"),Object(r["a"])(x,C,w,!1,null,null,null));L.options.__file="International.vue";var z=L.exports,S={name:"Navigator",components:{DynLogo:b,International:z},props:{selected:Number,shah:Boolean},data(){return{indieMode:!0,navLinks:[{name:{en:"Gallery",ja:"ぎやらりい",cmn:"画廊"},path:"/gallery"},{name:{en:"About",ja:"約",cmn:"关于"},path:"/about"},{name:{en:"Gojūon",ja:"ごじゅうおん",cmn:"五十音"},path:"/gojuon"}],applyBtn:{en:"Apply",ja:"申し込む",cmn:"申请"}}},computed:{links(){let e=this.navLinks.slice();return this.selected&&(e[this.selected-1].selected=!0),e}},methods:{handleScroll(e){const t=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop;this.indieMode&&t>16?this.indieMode=!1:!this.indieMode&&t<16&&(this.indieMode=!0)},go(e){this.$router.push({path:e})}},created(){window.addEventListener("scroll",this.handleScroll)},destroyed(){window.removeEventListener("scroll",this.handleScroll)}},V=S,M=(a("5313"),Object(r["a"])(V,m,v,!1,null,null,null));M.options.__file="Navigator.vue";var P=M.exports,$=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"slider-wrapper"},[a("transition-group",{attrs:{name:"slide",mode:"out-in"}},e._l(e.gallery,function(t,n){return n===e.coverIndex?a("div",{key:n,staticClass:"slider-cover-wrapper"},[a("img",{staticClass:"slider-cover",attrs:{src:t.src.thumb,alt:e.name+"Cover-"+(n+1)}})]):e._e()})),a("div",{staticClass:"slider-title-wrapper"},[a("h2",[e._v(e._s(e.name))])])],1)},N=[],O={name:"HomeSlider",props:{gallery:Array,name:String},data(){return{coverIndex:0,timer:""}},methods:{changeCover(){this.coverIndex=2===this.coverIndex?0:this.coverIndex+1}},mounted(){for(let t=0;t<this.gallery.length;t++){const e=new Image;e.src=this.gallery[t]}const e=2e3*Math.random()+5e3;this.timer=setInterval(()=>{this.changeCover()},e)},beforeDestroy(){clearInterval(this.timer)}},H=O,E=(a("8dad"),Object(r["a"])(H,$,N,!1,null,null,null));E.options.__file="HomeSlider.vue";var T=E.exports,A=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dyn-btn"},[e._t("default")],2)},I=[],D={name:"DynBtn"},B=D,G=(a("a344"),Object(r["a"])(B,A,I,!1,null,null,null));G.options.__file="DynBtn.vue";var K=G.exports,q={name:"Home",components:{Navigator:P,HomeSlider:T,DynBtn:K,International:z},data(){return{moreBtn:{en:"More",ja:"もっと見る",cmn:"更多"}}},computed:{gallery(){const e=this.$store.state.gallery;return e.slice(0,5)}},methods:{go(e){this.$router.push({name:"Project",params:{id:e}})}}},J=q,R=(a("de16"),Object(r["a"])(J,h,d,!1,null,null,null));R.options.__file="Home.vue";var U=R.exports,Z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("main",{staticClass:"gallery-main"},[a("navigator",{attrs:{selected:1}}),a("ul",{staticClass:"gallery-list"},e._l(e.gallery,function(t){return a("li",{key:t.codeName,on:{click:function(a){e.go(t.codeName)}}},[a("stack",{attrs:{photoset:t.cover,title:t.name}})],1)}))],1)},W=[],Y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"stack"},[e._l(e.randomPhotoset,function(e){return a("stack-photo",{key:e.codename,staticClass:"stack-photo",attrs:{src:e.src.thumb}})}),a("h2",{staticClass:"stack-name"},[e._v(e._s(e.title))])],2)},F=[],Q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("img",{ref:"photo",staticClass:"stack-photo",style:e.photoStyle,attrs:{src:e.src},on:{load:e.imageReady}})},X=[],ee={name:"StackPhoto",props:{src:String},data(){return{photoStyle:{marginTop:"0px",marginLeft:"0px",transform:"rotate(0deg) translateZ(0)",opacity:0}}},methods:{calcPosition(){const e=this.$refs.photo;this.photoStyle.marginTop=e.offsetHeight/-2+"px",this.photoStyle.marginLeft=e.offsetWidth/-2+"px"},calcAngle(){const e=Math.floor(30*Math.random())-15;this.photoStyle.transform="rotate("+e+"deg) translateZ(0)"},imageReady(){this.calcPosition(),this.calcAngle(),this.photoStyle.opacity=1}}},te=ee,ae=(a("35dd"),Object(r["a"])(te,Q,X,!1,null,null,null));ae.options.__file="StackPhoto.vue";var ne=ae.exports,oe={name:"Stack",components:{StackPhoto:ne},props:{photoset:Array,title:String},computed:{randomPhotoset(){return this.shuffle(this.photoset)}},methods:{shuffle(e){for(let a=e.length-1;a>0;a--){const n=Math.floor(Math.random()*(a+1));var t=[e[n],e[a]];e[a]=t[0],e[n]=t[1]}return e}}},le=oe,ie=(a("e668"),Object(r["a"])(le,Y,F,!1,null,null,null));ie.options.__file="Stack.vue";var se=ie.exports,re={name:"Gallery",components:{Navigator:P,Stack:se},computed:{gallery(){return this.$store.state.gallery}},methods:{go(e){this.$router.push({name:"Project",params:{id:e}})}}},ce=re,ue=(a("7a2a"),Object(r["a"])(ce,Z,W,!1,null,null,null));ue.options.__file="Gallery.vue";var pe=ue.exports,he=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("main",{staticClass:"project-main"},[a("navigator"),a("div",{staticClass:"project-content"},[a("h2",[e._v(e._s(e.project.name))]),a("ul",{staticClass:"photo-list"},e._l(e.project.photos,function(t,n){return a("li",{key:t.codename},[a("photo",{attrs:{src:t.src,alt:t.codeName}}),a("div",{staticClass:"watermark-wrapper"},[a("span",{staticClass:"watermark"},[e._v(e._s(e.project.name)+" "+e._s(n+1))])])],1)})),a("div",{staticClass:"project-navigator"},[a("div",{staticClass:"proj-nav-btn",class:{faded:!e.prevProjectCodeName},on:{click:function(t){e.goProject(e.prevProjectCodeName)}}},[a("dyn-icon",{attrs:{paths:["M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"]}})],1),a("div",{staticClass:"proj-nav-btn",class:{faded:!e.nextProjectCodeName},on:{click:function(t){e.goProject(e.nextProjectCodeName)}}},[a("dyn-icon",{attrs:{paths:["M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"]}})],1)])])],1)},de=[],me=(a("ac6a"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"basic-picture"},[a("img",{staticClass:"basic-picture-img",attrs:{src:e.src.jpg,alt:e.alt}}),a("div",{staticClass:"basic-picture-scrim"})])}),ve=[],fe={name:"Photo",props:{src:Object,alt:String}},ge=fe,ye=(a("2f40"),Object(r["a"])(ge,me,ve,!1,null,null,null));ye.options.__file="Photo.vue";var _e=ye.exports,ke=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("svg",{staticClass:"icon",attrs:{viewBox:"0 0 24 24"}},e._l(e.paths,function(e,t){return a("path",{key:t,attrs:{d:e}})}))},be=[],Ce={name:"DynIcon",props:{paths:Array}},we=Ce,je=(a("1114"),Object(r["a"])(we,ke,be,!1,null,null,null));je.options.__file="DynIcon.vue";var xe=je.exports,Le={name:"Project",components:{Photo:_e,Navigator:P,DynIcon:xe},data(){return{project:{},prevProjectCodeName:"",nextProjectCodeName:""}},methods:{indexing(){this.prevProjectCodeName="",this.nextProjectCodeName="";const e=this.$route.params.id,t=this.$store.state.gallery;e&&t.length?t.forEach(a=>{for(let n=0;n<t.length;n++){const a=t[n];a.codeName===e&&(this.project=a,n>0&&(this.prevProjectCodeName=t[n-1].codeName),t[n+1]&&(this.nextProjectCodeName=t[n+1].codeName))}}):setTimeout(()=>{this.indexing()},500)},goProject(e){this.$router.push({name:"Project",params:{id:e}})}},mounted(){this.indexing()},watch:{$route(){this.indexing()}}},ze=Le,Se=(a("14ed"),Object(r["a"])(ze,he,de,!1,null,null,null));Se.options.__file="Project.vue";var Ve=Se.exports,Me=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("main",{staticClass:"about-wrapper"},[a("navigator",{attrs:{selected:2}}),e._m(0)],1)},Pe=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("article",{staticClass:"about-main"},[a("p",[e._v("不像其他那些「独立摄影师」的所谓「个人项目」，这个网站纯粹是用来把从2014年开始我拍过的东西展示出来，它甚至都没有名字，logo 来自我高中一直想办但一直也没办成的一本杂志。这里的一切内容（除了我做出来给自己学日语那个页面，希望也能对你有用），都是为了找到更多"),a("del",[e._v("喜欢我照片的人")]),e._v("愿意暴露在我的镜头前的人。")])])}],$e={name:"About",components:{Navigator:P}},Ne=$e,Oe=(a("5795"),Object(r["a"])(Ne,Me,Pe,!1,null,null,null));Oe.options.__file="About.vue";var He=Oe.exports,Ee=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("main",{staticClass:"apply_form",attrs:{lang:"zh-CN"}},[a("navigator",{attrs:{shah:""}}),a("div",{staticClass:"apply-content"},[a("div",{staticClass:"block-btn",on:{click:e.wishYouWereHere}},[e._v(e._s(e.locationLabel))]),a("p",[e._v("获取坐标并不是必须的，你也可以选择手动填写地址。")]),a("ul",{staticClass:"apply-list"},e._l(e.model,function(t,n){return a("apply-spetsnaz",{key:n,attrs:{q:n,value:t,schema:e.schema},on:{input:e.callMe}})})),a("div",{staticClass:"block-btn",on:{click:e.submitData}},[e._v(e._s(e.submitLabel))])]),e.submitSuccess?a("dyn-card",[a("p",[e._v("谢谢你的喜欢")]),a("p",[e._v("我将很快联系你")])]):e._e()],1)},Te=[],Ae=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"spetsnaz"},[a("div",{staticClass:"spetsnaz_head"},[a("span",{staticClass:"spetsnaz_label"},[e._v(e._s(e.model.label))]),e.model.hint?a("span",{staticClass:"spetsnaz_hint"},[e._v("("+e._s(e.model.hint)+")")]):e._e()]),"input"===e.model.type?a("div",{staticClass:"spetsnaz_field"},[a("div",{staticClass:"spetsnaz_inputz"},["checkbox"===e.model.inputType?a("input",{directives:[{name:"model",rawName:"v-model",value:e.localValue,expression:"localValue"}],staticClass:"spetsnaz_input",attrs:{placeholder:e.model.placeholder,type:"checkbox"},domProps:{checked:Array.isArray(e.localValue)?e._i(e.localValue,null)>-1:e.localValue},on:{change:function(t){var a=e.localValue,n=t.target,o=!!n.checked;if(Array.isArray(a)){var l=null,i=e._i(a,l);n.checked?i<0&&(e.localValue=a.concat([l])):i>-1&&(e.localValue=a.slice(0,i).concat(a.slice(i+1)))}else e.localValue=o}}}):"radio"===e.model.inputType?a("input",{directives:[{name:"model",rawName:"v-model",value:e.localValue,expression:"localValue"}],staticClass:"spetsnaz_input",attrs:{placeholder:e.model.placeholder,type:"radio"},domProps:{checked:e._q(e.localValue,null)},on:{change:function(t){e.localValue=null}}}):a("input",{directives:[{name:"model",rawName:"v-model",value:e.localValue,expression:"localValue"}],staticClass:"spetsnaz_input",attrs:{placeholder:e.model.placeholder,type:e.model.inputType},domProps:{value:e.localValue},on:{input:function(t){t.target.composing||(e.localValue=t.target.value)}}})])]):e._e(),"select"===e.model.type?a("div",{staticClass:"spetsnaz_field"},[a("div",{staticClass:"spetsnaz_boxy"},e._l(e.model.values,function(t){return a("div",{key:t.id,staticClass:"spetsnaz_box",class:{selected:t.selected},on:{click:function(a){e.selectOne(t.id)}}},[t.icon?a("dyn-icon",{attrs:{paths:t.icon}}):e._e(),a("div",[e._v(e._s(t.name))])],1)}))]):e._e(),"checklist"===e.model.type?a("div",{staticClass:"spetsnaz_field"},[a("div",{staticClass:"spetsnaz_boxz"},e._l(e.model.values,function(t){return a("div",{key:t.id,staticClass:"spetsnaz_box",class:{selected:t.selected},on:{click:function(a){e.checkOne(t.id)}}},[t.icon?a("dyn-icon",{attrs:{paths:t.icon}}):e._e(),a("div",[e._v(e._s(t.name))])],1)}))]):e._e(),"checkbox"===e.model.type?a("div",{staticClass:"spetsnaz_field"},[a("div",{staticClass:"spetsnaz_checker",on:{click:e.switchCheck}},[e.localValue?a("dyn-icon",{attrs:{paths:["M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"]}}):e._e()],1)]):e._e()])},Ie=[],De={name:"ApplySpetsnaz",components:{DynIcon:xe},props:{q:String,value:[String,Array,Boolean],schema:Array},data(){return{model:{},localValue:"",bougie:3}},methods:{callDaddy(){this.$emit("input",this.q,this.localValue)},selectOne(e){this.model.values.forEach(t=>{t.id===e?(t.selected=!0,this.localValue=t.id):t.selected=!1}),this.$forceUpdate()},checkOne(e){this.model.values.forEach(t=>{if(t.id===e)if(!1===t.selected)t.selected=!0,this.localValue.push(e);else{t.selected=!1;for(var a=this.localValue.length-1;a>=0;a--)this.localValue[a]===e&&this.localValue.splice(a,1)}}),this.$forceUpdate()},switchCheck(){this.localValue=!this.localValue}},mounted(){switch(this.schema.forEach(e=>{e.model===this.q&&(this.model=e)}),this.localValue=this.value,this.model.type){case"select":this.model.values.forEach(e=>{this.value===e.id?e.selected=!0:e.selected=!1});break;case"checklist":this.model.values.forEach(e=>{this.value.includes(e.id)?e.selected=!0:e.selected=!1});break;default:break}},watch:{localValue(){this.bougie>3&&this.callDaddy(),this.bougie++}}},Be=De,Ge=(a("0c58"),Object(r["a"])(Be,Ae,Ie,!1,null,null,null));Ge.options.__file="ApplySpetsnaz.vue";var Ke=Ge.exports,qe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dyn-card-wrapper"},[a("div",{staticClass:"dyn-card-scrim",class:{show:e.show}}),a("div",{staticClass:"dyn-card",class:{show:e.show}},[e._t("default"),a("router-link",{attrs:{to:"/"}},[a("dyn-btn",[a("div",[e._v("去首页看看")])])],1)],2)])},Je=[],Re={name:"DynCard",components:{DynBtn:K},data(){return{show:!1}},mounted(){setTimeout(()=>{this.show=!0},50)}},Ue=Re,Ze=(a("2a9f"),Object(r["a"])(Ue,qe,Je,!1,null,null,null));Ze.options.__file="DynCard.vue";var We=Ze.exports,Ye={name:"Apply",components:{ApplySpetsnaz:Ke,Navigator:P,DynCard:We},data(){return{submitLabel:"提交",locationLabel:"点击获取坐标",submitSuccess:!1,model:{call:"",age:"",gender:"female",contact:"",location:"",whereToSee:"",place:["hotel"],placeMore:"",time:["afternoon"],cloth:["nude","underwear"],clothMore:"",costume:"",style:"myIdea",styleMore:"",emotion:"excellent",pose:"good",phyLimit:"4",limit:"3",copyright:"2",special:"",note:"",contract:!1},schema:[{type:"input",inputType:"text",label:"称呼",model:"call",placeholder:"不一定是真实姓名"},{type:"input",inputType:"number",label:"年龄",model:"age",placeholder:"可不填"},{type:"select",label:"性别",model:"gender",values:[{icon:["M15 2c-3.9 0-7 3.1-7 7 0 1.8.6 3.4 1.7 4.6l-3.3 3.3-3.5-3.8-.7.7 3.5 3.8-3.5 3.5.7.7 3.5-3.5 3.3 3.5.7-.7-3.3-3.5 3.4-3.4c1.2 1.1 2.8 1.7 4.6 1.7 3.9 0 7-3.1 7-7S18.9 2 15 2zm0 13c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"],id:"female",name:"女"},{icon:["M14 2v1h6.3l-6.7 6.7C12.4 8.6 10.8 8 9 8c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7c0-1.8-.6-3.4-1.7-4.6L21 3.7V10h1V2h-8zM9 21c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"],id:"male",name:"男"},{icon:["M19 12c0-1.8-.6-3.4-1.7-4.6l3.6-3.6-.7-.7-3.6 3.6C15.4 5.6 13.8 5 12 5s-3.4.6-4.6 1.7L3.9 3.1l-.8.8 3.6 3.6C5.6 8.6 5 10.2 5 12s.6 3.4 1.7 4.6l-3.3 3.3.7.7 3.3-3.3C8.6 18.4 10.2 19 12 19s3.4-.6 4.6-1.7l3.6 3.6.7-.7-3.6-3.6c1.1-1.2 1.7-2.8 1.7-4.6zm-1 0c0 1.5-.5 2.8-1.4 3.9L12.7 12l3.9-3.9c.9 1.1 1.4 2.4 1.4 3.9zm-6-6c1.5 0 2.8.5 3.9 1.4L12 11.3 8.1 7.4C9.2 6.5 10.5 6 12 6zm-6 6c0-1.5.5-2.8 1.4-3.9l3.9 3.9-3.9 3.9C6.5 14.8 6 13.5 6 12zm6 6c-1.5 0-2.8-.5-3.9-1.4l3.9-3.9 3.9 3.9c-1.1.9-2.4 1.4-3.9 1.4z"],id:"futa",name:"保密"}]},{type:"input",inputType:"text",label:"联系方式",model:"contact",placeholder:"通讯工具 | 用户名"},{type:"input",inputType:"text",label:"你在哪里",model:"location",placeholder:"写城市就好"},{type:"input",inputType:"text",label:"可以看到你照片的地方",model:"whereToSee",placeholder:"平台 | 用户名"},{type:"checklist",label:"拍摄地点",model:"place",values:[{id:"outdoor",name:"室外",icon:["M19 19.5h-1v-4.8l-2.1 2.1-.7-.7 2.9-2.9v-2.6L16 12.7l-.7-.7L18 9.3V6.7l-2.1 2.1-.7-.7 3.4-3.4L22 8.1l-.7.7L19 6.7v2.6l2.9 2.9-.7.7-2.2-2.2v2.6l2.9 2.9-.7.7-2.2-2.2v4.8zm-12 0H6v-4.8l-2.1 2.1-.7-.7L6 13.3v-2.6l-2.1 2.1-.7-.7L6 9.3V6.7L3.9 8.9l-.8-.8 3.4-3.4 3.4 3.4-.8.8L7 6.7v2.6l2.9 2.9-.7.7L7 10.7v2.6l2.9 2.9-.7.7L7 14.7v4.8zm6-2h-1v-4.8l-2.1 2.1-.7-.7 2.9-2.9V8.7L10 10.8l-.7-.7L12 7.3V4.7L9.9 6.9l-.8-.8 3.4-3.4 3.4 3.4-.7.7L13 4.7v2.6l2.9 2.9-.7.7L13 8.7v2.6l2.9 2.9-.7.7-2.2-2.2v4.8z"]},{id:"public",name:"公共场所",icon:["M21 9h1v4h-1z","M21 14h-1V5H4v9H1v1h2v6h1v-1h16v1h1v-6h2v-1h-2zm-4-8h2v8h-2V6zm-3 0h2v8h-2V6zm-3 0h2v8h-2V6zM8 6h2v8H8V6zM5 6h2v8H5V6zm15 13H4v-4h16v4z","M2 9h1v4H2z"]},{id:"hotel",name:"酒店",icon:["M21 10V2H3v8l-2 4v6h3v3h1v-3h14v3h1v-3h3v-6l-2-4zM4 3h16v6h-1V7h-6v2h-2V7H5v2H4V3zm14 7h-4V8h4v2zm-8 0H6V8h4v2zm-6.1.5l.1-.3V10h1v1h6v-1h2v1h6v-1h1v.2l.1.2 1.8 3.5H2.1l1.8-3.4zM22 19H2v-4h20v4z"]},{id:"home",name:"住处",icon:["M20 9V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v4c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h1v2h1v-2h12v2h1v-2h1c1.1 0 2-.9 2-2v-7c0-1.1-.9-2-2-2zM5 5c0-.6.4-1 1-1h12c.6 0 1 .4 1 1v4.3c-.6.3-1 1-1 1.7v2H6v-2c0-.7-.4-1.4-1-1.7V5zm13 9v1H6v-1h12zM4 19c-.6 0-1-.4-1-1v-7c0-.6.4-1 1-1s1 .4 1 1v8H4zm2 0v-3h12v3H6zm15-1c0 .6-.4 1-1 1h-1v-8c0-.6.4-1 1-1s1 .4 1 1v7z"]},{id:"other",name:"其他",icon:["M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 3c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zM18 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 3c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zM12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 3c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z"]}]},{type:"input",inputType:"text",label:"拍摄地点的补充说明",model:"placeMore",placeholder:"你有什么特别的地点？"},{type:"checklist",label:"拍摄时间",model:"time",values:[{id:"dawn",name:"凌晨"},{id:"morning",name:"上午"},{id:"afternoon",name:"下午"},{id:"evening",name:"晚上"}]},{type:"select",label:"拍摄风格",model:"style",values:[{id:"myIdea",name:"我有特别的想法"},{id:"yourIdea",name:"全部按你的风格来"}]},{type:"input",inputType:"text",label:"拍摄风格的补充说明",model:"styleMore",placeholder:"你有什么特别的想法？"},{type:"checklist",label:"服装",model:"cloth",values:[{id:"nude",name:"裸体"},{id:"underwear",name:"内衣"},{id:"casual",name:"常服"},{id:"other",name:"其他"}]},{type:"input",inputType:"text",label:"服装的补充说明",model:"clothMore",placeholder:"你有什么特别的服装？"},{type:"input",inputType:"text",label:"道具",model:"costume",placeholder:"蜡烛，纱，丝袜之类的"},{type:"select",label:"你拍照时的表情",model:"emotion",values:[{id:"excellent",name:"我很会做表情"},{id:"good",name:"我拍照只有一种表情"},{id:"poor",name:"我不会做表情"},{id:"none",name:"我不拍脸"}]},{type:"select",label:"你拍照时的姿势",model:"pose",values:[{id:"excellent",name:"我很会摆 pose"},{id:"good",name:"我会一点"},{id:"poor",name:"请教教我"}]},{type:"select",label:"物理尺度",model:"phyLimit",values:[{id:"4",name:"全裸并露点"},{id:"3",name:"全裸然而不露点"},{id:"2",name:"半裸"},{id:"1",name:"内衣"}]},{type:"select",label:"心理尺度",model:"limit",values:[{id:"4",name:"色情又变态"},{id:"3",name:"有欲望但不色情"},{id:"2",name:"没有欲望的美好肉体"},{id:"1",name:"性冷淡"}]},{type:"select",label:"版权",model:"copyright",values:[{id:"1",name:"禁止在任何地方发布"},{id:"2",name:"可以在我的网站发布不露脸的照片"},{id:"3",name:"可以在我的网站发布所有照片"},{id:"4",name:"可以在我的网站和其他平台发布不露脸的照片"},{id:"5",name:"可以在我的网站和其他平台发布所有照片"}]},{type:"input",inputType:"text",label:"特殊要求",model:"special",placeholder:"例：我要和我的宠物一起拍照！"},{type:"input",inputType:"text",label:"备注",model:"note",placeholder:"还有什么没有提到的？"},{type:"checkbox",label:"需要纸质合同",hint:"自己打印",model:"contract"}]}},methods:{wishYouWereHere(){let e=this;function t(t){const a={lat:t.coords.latitude,lon:t.coords.longitude};e.locationLabel="已得到位置",localStorage.setItem("lastLocation",JSON.stringify(a)),e.$store.dispatch("newLocation",JSON.stringify(a)),delete e.model.location}function a(){console.warn("FATAL ERROR: GPS fail, we are lost!")}navigator.geolocation.getCurrentPosition(t,a)},submitData(){this.submitLabel="稍等",this.$http.post("newApplier",this.model).then(e=>{this.submitLabel="提交成功",this.submitSuccess=!0},e=>{alert("似乎失去连接"),this.submitLabel="请再试一次"})},callMe(e,t){this.model[e]=t}}},Fe=Ye,Qe=(a("df63"),Object(r["a"])(Fe,Ee,Te,!1,null,null,null));Qe.options.__file="Apply.vue";var Xe=Qe.exports,et=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("main",{staticClass:"gojuon"},[a("navigator",{attrs:{selected:3}}),a("div",{staticClass:"gojuon-wrapper"},[a("div",{staticClass:"gojuon-config",attrs:{lang:"cmn"}},[a("dyn-chk",{attrs:{active:e.showHira},nativeOn:{click:function(t){return e.switchHira(t)}}},[e._v("平假名")]),a("dyn-chk",{attrs:{active:e.showKana},nativeOn:{click:function(t){return e.switchKana(t)}}},[e._v("片假名")])],1),a("table",{staticClass:"gojuon-table"},e._l(e.gojuon,function(t,n){return a("tr",{key:n},e._l(t,function(t,n){return a("td",{key:n,on:{click:function(a){e.giveMe(t)}}},[a("div",{staticClass:"gojuon-card"},[e.showHira?a("div",{directives:[{name:"show",rawName:"v-show",value:t.active,expression:"col.active"}],attrs:{lang:"ja-Hira"}},[e._v(e._s(t.hira))]):e._e(),e.showKana?a("div",{directives:[{name:"show",rawName:"v-show",value:t.active,expression:"col.active"}],attrs:{lang:"ja-Kana"}},[e._v(e._s(t.kana))]):e._e(),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.active,expression:"!col.active"}],attrs:{lang:"en"}},[e._v(e._s(t.pro))])]),a("div",{staticClass:"gojuon-marker",class:{selected:t.highlighted},on:{click:function(a){a.stopPropagation(),e.highMe(t)}}})])}))}))])],1)},tt=[],at=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dyn-chk"},[a("div",{staticClass:"dyn-chk-inner",class:{active:e.active}},[e._t("default")],2)])},nt=[],ot={name:"DynChk",props:{active:Boolean}},lt=ot,it=(a("4f2d"),Object(r["a"])(lt,at,nt,!1,null,null,null));it.options.__file="DynChk.vue";var st=it.exports,rt={name:"Gojuon",components:{Navigator:P,DynChk:st},data(){return{gojuon:[[{hira:"あ",kana:"ア",pro:"a"},{hira:"い",kana:"イ",pro:"i"},{hira:"う",kana:"ウ",pro:"u"},{hira:"え",kana:"エ",pro:"e"},{hira:"お",kana:"オ",pro:"o"}],[{hira:"か",kana:"カ",pro:"ka"},{hira:"き",kana:"キ",pro:"ki"},{hira:"く",kana:"ク",pro:"ku"},{hira:"け",kana:"ケ",pro:"ke"},{hira:"こ",kana:"コ",pro:"ko"}],[{hira:"さ",kana:"サ",pro:"sa"},{hira:"し",kana:"シ",pro:"shi"},{hira:"す",kana:"ス",pro:"su"},{hira:"せ",kana:"セ",pro:"se"},{hira:"そ",kana:"ソ",pro:"so"}],[{hira:"た",kana:"タ",pro:"ta"},{hira:"ち",kana:"チ",pro:"chi"},{hira:"つ",kana:"ツ",pro:"tsu"},{hira:"て",kana:"テ",pro:"te"},{hira:"と",kana:"ト",pro:"to"}],[{hira:"な",kana:"ナ",pro:"na"},{hira:"に",kana:"ニ",pro:"ni"},{hira:"ぬ",kana:"ヌ",pro:"nu"},{hira:"ね",kana:"ネ",pro:"ne"},{hira:"の",kana:"ノ",pro:"no"}],[{hira:"は",kana:"ハ",pro:"ha"},{hira:"ひ",kana:"ヒ",pro:"hi"},{hira:"ふ",kana:"フ",pro:"fu"},{hira:"へ",kana:"ヘ",pro:"he"},{hira:"ほ",kana:"ホ",pro:"ho"}],[{hira:"ま",kana:"マ",pro:"ma"},{hira:"み",kana:"ミ",pro:"mi"},{hira:"む",kana:"ム",pro:"mu"},{hira:"め",kana:"メ",pro:"me"},{hira:"も",kana:"モ",pro:"mo"}],[{hira:"ら",kana:"ラ",pro:"ra"},{hira:"り",kana:"リ",pro:"ri"},{hira:"る",kana:"ル",pro:"ru"},{hira:"れ",kana:"レ",pro:"re"},{hira:"ろ",kana:"ロ",pro:"ro"}],[{hira:"が",kana:"ガ",pro:"ga"},{hira:"ぎ",kana:"ギ",pro:"gi"},{hira:"ぐ",kana:"グ",pro:"gu"},{hira:"げ",kana:"ゲ",pro:"ge"},{hira:"ご",kana:"ゴ",pro:"go"}],[{hira:"ざ",kana:"ザ",pro:"za"},{hira:"じ",kana:"ジ",pro:"ji"},{hira:"ず",kana:"ズ",pro:"zu"},{hira:"ぜ",kana:"ゼ",pro:"ze"},{hira:"ぞ",kana:"ｿﾞ",pro:"zo"}]],showHira:!0,showKana:!1}},methods:{giveMe(e){e.active=!0,this.$forceUpdate(),setTimeout(()=>{e.active=!1,this.$forceUpdate()},3e3)},highMe(e){e.highlighted=!e.highlighted,this.$forceUpdate()},switchHira(){this.showHira=!this.showHira},switchKana(){this.showKana=!this.showKana}},mounted(){this.gojuon.forEach(e=>{e.forEach(e=>{e.active=!1,e.highlighted=!1})})}},ct=rt,ut=(a("4a87"),Object(r["a"])(ct,et,tt,!1,null,null,null));ut.options.__file="Gojuon.vue";var pt=ut.exports;n["a"].use(p["a"]);var ht=new p["a"]({routes:[{path:"/",name:"Home",component:U},{path:"/gallery",name:"Gallery",component:pe},{path:"/project/:id",name:"Project",component:Ve},{path:"/about",name:"About",component:He},{path:"/apply",name:"Apply",component:Xe},{path:"/gojuon",name:"Gojuon",component:pt}],scrollBehavior(e,t,a){return{x:0,y:0}}}),dt=a("2f62"),mt=a("28dd");n["a"].use(dt["a"]),n["a"].use(mt["a"]),n["a"].http.options.root="https://camera-dev-cavallo.herokuapp.com/",n["a"].http.options.emulateJSON=!0;var vt=new dt["a"].Store({state:{lang:"en",viewTimes:0,location:"",gallery:[]},getters:{viewerInfo(e){return{model:navigator.userAgent,viewTimes:e.viewTimes,lastLocation:e.location,navigator:{language:navigator.language,width:window.innerWidth,height:window.innerHeight}}}},mutations:{detLang(e){const t=navigator.language;t.includes("zh")?e.lang="cmn":t.includes("ja")?e.lang="ja":e.lang="en"},setGallery(e,t){e.gallery=t},detVisitor(e){let t=localStorage.getItem("viewTimes");t?t++:t=1,localStorage.setItem("viewTimes",t),e.viewTimes=t},detLocation(e){let t=localStorage.getItem("lastLocation");t||(t="Not Applied."),e.location=t}},actions:{init(e){e.commit("detLang"),e.commit("detVisitor"),e.commit("detLocation"),n["a"].http.post("newViewer",e.getters.viewerInfo)},getGallery:function(e){let t="/json/gallery.json";return new Promise((a,o)=>{n["a"].http.get(t).then(t=>{const n=t.body.prefix;let o=t.body.gallery.reverse();o.forEach(e=>{e.cover=[],e.photos=[];for(let t=1;t<=e.photoIds;t++){const a={src:{jpg:n+e.codeName+"-"+t+".jpg",thumb:n+"c_limit,h_400,q_90:420,w_400/"+e.codeName+"-"+t+".jpg"},codeName:e.codeName+"-"+t};e.photos.push(a)}for(let t=0;t<e.coverIds.length;t++){const a=e.coverIds[t];e.cover.push(e.photos[a-1])}}),e.commit("setGallery",o),a()},e=>{console.error("Get gallery failed."),o()})})},newLocation(e,t){n["a"].http.post("newLocation",{position:t})}}});a("e29a");n["a"].config.productionTip=!1,new n["a"]({router:ht,store:vt,render:e=>e(u)}).$mount("#app")},5795:function(e,t,a){"use strict";var n=a("93ff"),o=a.n(n);o.a},"66f7":function(e,t,a){},"69c3":function(e,t,a){},"7a2a":function(e,t,a){"use strict";var n=a("3052"),o=a.n(n);o.a},"7c66":function(e,t,a){},"8ad9":function(e,t,a){},"8cbd":function(e,t,a){"use strict";var n=a("18ab"),o=a.n(n);o.a},"8dad":function(e,t,a){"use strict";var n=a("7c66"),o=a.n(n);o.a},"91fd":function(e,t,a){},"93ff":function(e,t,a){},"9de7":function(e,t,a){},a344:function(e,t,a){"use strict";var n=a("debf"),o=a.n(n);o.a},a555:function(e,t,a){},cbc5:function(e,t,a){},de16:function(e,t,a){"use strict";var n=a("15c5"),o=a.n(n);o.a},debf:function(e,t,a){},df63:function(e,t,a){"use strict";var n=a("91fd"),o=a.n(n);o.a},e29a:function(e,t,a){},e668:function(e,t,a){"use strict";var n=a("9de7"),o=a.n(n);o.a},ef4a:function(e,t,a){},ef93:function(e,t,a){}});