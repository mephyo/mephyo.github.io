(function(t){function e(e){for(var r,i,a=e[0],c=e[1],l=e[2],d=0,u=[];d<a.length;d++)i=a[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&u.push(s[i][0]),s[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);h&&h(e);while(u.length)u.shift()();return n.push.apply(n,l||[]),o()}function o(){for(var t,e=0;e<n.length;e++){for(var o=n[e],r=!0,a=1;a<o.length;a++){var c=o[a];0!==s[c]&&(r=!1)}r&&(n.splice(e--,1),t=i(i.s=o[0]))}return t}var r={},s={app:0},n=[];function i(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=r,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(o,r,function(e){return t[e]}.bind(null,r));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var h=c;n.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"0142":function(t,e,o){"use strict";var r=o("a7da"),s=o.n(r);s.a},"024d":function(t,e,o){"use strict";var r=o("e6ce"),s=o.n(r);s.a},"04ee":function(t,e,o){},"0f89":function(t,e,o){"use strict";var r=o("271b"),s=o.n(r);s.a},1:function(t,e){},"20bd":function(t,e,o){},"23f4":function(t,e,o){},"271b":function(t,e,o){},"3c33":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);var r=o("2b0e"),s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("div",{staticClass:"main-wrapper"},[o("div",{staticClass:"pip-boy"},[o("pip-screen"),o("pip-control")],1)])])},n=[],i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"pip-screen"},[t._m(0),o("div",{staticClass:"page-ghost",class:{show:t.superVision,through:t.screenshotMode}},[o("div",{staticClass:"capture-content",attrs:{id:"capture"}},[o("PipScreenContent")],1)]),o("div",{staticClass:"pip-screen-title"},[o("Wirbel"),o("div",{staticClass:"pip-screen-refresher",on:{click:t.convertDOM}},[o("div",{staticClass:"pip-screen-refresher-base"}),o("transition",{attrs:{name:"fade"}},[t.lightOn?o("div",{staticClass:"pip-screen-refresher-green"}):t._e()])],1)],1)])},a=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"page-representation"},[o("canvas",{attrs:{id:"canvas",height:"320",width:"320"}})])}],c=o("c0e9"),l=o.n(c);function h(){this.phosphor_bleed=1,this.phosphor_bloom=[],this.phosphor_bloom_linspace=[],this.scale_add=1,this.scale_times=1,this.scan_lower_limit=0,this.scan_range=[],this.scan_upper_limit=1}function d(t){this.width=t.width,this.height=t.height,this.data=t.data,this.imageData=t}h.prototype={initialize:function(){var t=0;for(t=0;t<256;t++)this.phosphor_bloom_linspace[t]=t/255;for(t=0;t<256;t++)this.phosphor_bloom[t]=(this.scale_times*this.phosphor_bloom_linspace[t]^1/2.2)+this.scale_add;var e=this.scan_lower_limit,o=(this.scan_upper_limit-this.scan_lower_limit)/256;for(t=0;t<256;t++)e+=o,this.scan_range[t]=e},filter:function(t,e,o){var r,s,n,i,a,c,l;for(i=0;i<e;i++)for(n=0;n<o;n++)r=t.getPixel(n,i),i%2==0?(a=r[1],n%2==1&&(s=t.getPixel(n-1,i),s[1]>0&&(a=s[1]*this.phosphor_bleed*this.phosphor_bloom[s[1]])),c=r[2],r[2]>0&&(c=r[2]/2+r[2]/2*this.phosphor_bleed*this.phosphor_bloom[r[2]]),l=r[3],n%2==1&&(l=r[3]*this.phosphor_bleed*this.phosphor_bloom[s[3]]),t.setPixel(n,i,[r[0],a,c,l])):(s=t.getPixel(n,i-1),a=this.scan_range[s[1]]*s[1],c=this.scan_range[s[2]]*s[2],l=this.scan_range[s[3]]*s[3],t.setPixel(n,i,[r[0],a,c,l]))}},d.prototype={convertCoordsToIndex:function(t,e){if(t<0||t>this.width||e<0||e>this.height)throw CoordinateError;return e*this.width*4+4*t},getPixel:function(t,e){var o;try{return o=this.convertCoordsToIndex(t,e),[this.imageData.data[o],this.imageData.data[o+1],this.imageData.data[o+2],this.imageData.data[o+3]]}catch(r){return!1}},setPixel:function(t,e,o){var r;try{r=this.convertCoordsToIndex(t,e)}catch(s){return!1}this.imageData.data[r]=o[0],this.imageData.data[r+1]=o[1],this.imageData.data[r+2]=o[2],this.imageData.data[r+3]=o[3]}};var u=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"screen"},[r("div",{staticClass:"screen-top"},[r("div",{staticClass:"screen-title"},[t._v(t._s(t.displayTitle))]),r("div",{staticClass:"screen-section"},[t._v(t._s(t.displayDesc))])]),r("div",{staticClass:"screen-main"},["gallery"===t.mode?r("Gallery"):t._e(),"project"===t.mode?r("Project"):t._e(),"info"===t.mode?r("Info"):t._e()],1),r("PipScreenControl"),t.caught?r("img",{staticClass:"no-signal",attrs:{src:o("7ed4"),alt:"No Signal"}}):t._e()],1)},p=[],g=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"screen-control"},["gallery"===t.mode?[o("div",{staticClass:"screen-control-button active",on:{click:t.changeProject}},[o("PipButton",{attrs:{alpha:"A",active:!0}}),o("span",[t._v("VIEW")])],1),o("div",{staticClass:"screen-control-button active",on:{click:t.goInfo}},[o("PipButton",{attrs:{alpha:"B",active:!0}}),o("span",[t._v("INFO")])],1),o("div",{staticClass:"screen-control-button",class:{active:t.canGoPrevGallery},on:{click:t.goPrevGallery}},[o("PipButton",{attrs:{alpha:"Y",active:t.canGoPrevGallery}}),o("span",[t._v("PREV")])],1),o("div",{staticClass:"screen-control-button",class:{active:t.canGoNextGallery},on:{click:t.goNextGallery}},[o("PipButton",{attrs:{alpha:"X",active:t.canGoNextGallery}}),o("span",[t._v("NEXT")])],1)]:t._e(),"project"===t.mode?[o("div",{staticClass:"screen-control-button active",on:{click:t.goGallery}},[o("PipButton",{attrs:{alpha:"B",active:!0}}),o("span",[t._v("BACK")])],1),o("div",{staticClass:"screen-control-button",class:{active:t.canGoPrevPhoto},on:{click:t.goPrevPhoto}},[o("PipButton",{attrs:{alpha:"Y",active:t.canGoPrevPhoto}}),o("span",[t._v("PREV")])],1),o("div",{staticClass:"screen-control-button",class:{active:t.canGoNextPhoto},on:{click:t.goNextPhoto}},[o("PipButton",{attrs:{alpha:"X",active:t.canGoNextPhoto}}),o("span",[t._v("NEXT")])],1)]:t._e(),"info"===t.mode?[o("div",{staticClass:"screen-control-button active",on:{click:t.goGallery}},[o("PipButton",{attrs:{alpha:"B",active:!0}}),o("span",[t._v("BACK")])],1)]:t._e()],2)},A=[],m=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("svg",{staticClass:"pip-button",attrs:{xmlns:"http://www.w3.org/2000/svg",version:"1.1",width:"24",height:"24",viewBox:"0 0 24 24",fill:t.fillColor}},["A"===t.alpha?o("path",{attrs:{d:"M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,7A2,2 0 0,0 9,9V17H11V13H13V17H15V9A2,2 0 0,0 13,7H11M11,9H13V11H11V9Z"}}):t._e(),"B"===t.alpha?o("path",{attrs:{d:"M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M15,10.5V9A2,2 0 0,0 13,7H9V17H13A2,2 0 0,0 15,15V13.5C15,12.7 14.3,12 13.5,12C14.3,12 15,11.3 15,10.5M13,15H11V13H13V15M13,11H11V9H13V11Z"}}):t._e(),"X"===t.alpha?o("path",{attrs:{d:"M9,7L11,12L9,17H11L12,14.5L13,17H15L13,12L15,7H13L12,9.5L11,7H9M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z"}}):t._e(),"Y"===t.alpha?o("path",{attrs:{d:"M9,7L11,13V17H13V13L15,7H13L12,10L11,7H9M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z"}}):t._e()])},v=[],f={name:"PipButton",props:{alpha:String,active:Boolean},computed:{fillColor(){return this.active?"#eee":"#999"}}},w=f,C=(o("f6da"),o("2877")),y=Object(C["a"])(w,m,v,!1,null,null,null),I=y.exports,P={name:"PipScreenControl",components:{PipButton:I},computed:{mode(){return this.$store.state.mode},nowPage(){return this.$store.state.galleryPageIndex+1},canGoPrevGallery(){return this.nowPage>1},canGoNextGallery(){return this.nowPage<this.$store.state.galleryGroups.length},nowPhoto(){return this.$store.state.projectIndex+1},canGoPrevPhoto(){return this.nowPhoto>1},canGoNextPhoto(){return this.nowPhoto<this.$store.state.nowProject.photos.length}},methods:{goPrevGallery(){this.canGoPrevGallery&&this.$store.commit("goPrevGallery")},goNextGallery(){this.canGoNextGallery&&this.$store.commit("goNextGallery")},goPrevPhoto(){this.canGoPrevPhoto&&this.$store.commit("goPrevPhoto")},goNextPhoto(){this.canGoNextPhoto&&this.$store.commit("goNextPhoto")},goGallery(){this.$store.commit("goGallery")},goInfo(){this.$store.commit("goInfo")},changeProject(){const t=this.$store.getters.gallery[this.$store.state.gallerySelectedIndex];this.$store.commit("changeProject",t)}}},b=P,M=(o("e97f"),Object(C["a"])(b,g,A,!1,null,null,null)),x=M.exports,j=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ul",{staticClass:"gallery-list"},t._l(t.gallery,(function(e,r){return o("li",{key:e.codeName,staticClass:"gallery-list-item",class:{selected:r===t.gallerySelectedIndex},on:{click:function(o){return t.go(e,r)}}},[o("div",{staticClass:"selector tl"}),o("div",{staticClass:"selector tr"}),o("div",{staticClass:"selector bl"}),o("div",{staticClass:"selector br"}),o("stack",{attrs:{photoset:e.cover,title:e.name,date:e.date}})],1)})),0)},G=[],S=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"stack"},[o("div",{staticClass:"stack-wrapper"},t._l(t.randomPhotoset,(function(t){return o("stack-photo",{key:t.codename,staticClass:"stack-photo",attrs:{src:t.src.thumb}})})),1),t.title?o("div",{staticClass:"stack-meta"},[o("h2",[t._v(t._s(t.title))])]):t._e()])},Q=[],B=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("img",{ref:"photo",staticClass:"stack-photo",style:t.photoStyle,attrs:{src:t.src},on:{load:t.imageReady}})},E=[],_={name:"StackPhoto",props:{src:String},data(){return{photoStyle:{marginTop:0,marginLeft:0,opacity:0,transform:"rotate(0deg) translateZ(0)"},photoOffset:{}}},methods:{calcPosition(){this.photoOffset=this.$refs.photo.getBoundingClientRect(),this.photoStyle.marginTop=this.photoOffset.height/-2+"px",this.photoStyle.marginLeft=this.photoOffset.width/-2+"px"},calcAngle(){const t=Math.floor(24*Math.random())-12;this.photoStyle.transform="rotate("+t+"deg) translateZ(0)"},imageReady(){this.calcPosition(),this.photoStyle.opacity=1,this.calcAngle(),this.$store.commit("reRender")}}},V=_,N=Object(C["a"])(V,B,E,!1,null,null,null),Z=N.exports,O={name:"Stack",components:{StackPhoto:Z},props:{photoset:Array,title:String,date:String},data(){return{margin1:0,margin2:0}},computed:{randomPhotoset(){return this.shuffle(this.photoset)}},methods:{shuffle(t){for(let e=t.length-1;e>0;e--){const o=Math.floor(Math.random()*(e+1));[t[e],t[o]]=[t[o],t[e]]}return t}}},k=O,H=(o("e668"),Object(C["a"])(k,S,Q,!1,null,null,null)),D=H.exports,R={name:"Gallery",components:{Stack:D},data(){return{nowProject:{}}},computed:{gallery(){return this.$store.getters.gallery},gallerySelectedIndex(){return this.$store.state.gallerySelectedIndex}},methods:{go(t,e){e===this.gallerySelectedIndex?this.$store.commit("changeProject",t):(this.$store.commit("changeGallerySelectedIndex",e),setTimeout(()=>{this.$store.commit("reRender")},100))}}},T=R,z=(o("0142"),Object(C["a"])(T,j,G,!1,null,null,null)),L=z.exports,F=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"project"},[o("img",{staticClass:"project-photo",attrs:{src:t.photo.src.jpg,alt:t.photo.codename},on:{load:t.photoReady}}),o("div",{staticClass:"project-wrapper"},[o("div",{staticClass:"project-roller left",on:{click:t.goPrevPhoto}}),o("div",{staticClass:"project-roller right",on:{click:t.goNextPhoto}})])])},Y=[],X={name:"Project",computed:{project(){return this.$store.state.nowProject},projectIndex(){return this.$store.state.projectIndex},photo(){return this.project.photos[this.projectIndex]}},methods:{photoReady(){this.$store.commit("reRender")},goNextPhoto(){this.$store.commit("goNextPhoto")},goPrevPhoto(){this.$store.commit("goPrevPhoto")}},mounted(){this.$store.commit("reRender")},destroyed(){this.$store.commit("resetProjectIndex")}},U=X,W=(o("f362"),Object(C["a"])(U,F,Y,!1,null,null,null)),J=W.exports,$=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},K=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"info-wrapper"},[o("p",{attrs:{lang:"en"}},[t._v("All rights reserved, Please respect the model")]),o("p",{attrs:{lang:"ja"}},[t._v("全著作権所有, モードを尊重してください")]),o("p",{attrs:{lang:"cmn"}},[t._v("版权所有, 请尊重模特")])])}],q={name:"Info",mounted(){setTimeout(()=>{this.$store.commit("reRender")},100)}},tt=q,et=(o("0f89"),Object(C["a"])(tt,$,K,!1,null,null,null)),ot=et.exports,rt={name:"PipScreenContent",components:{Gallery:L,Project:J,Info:ot,PipScreenControl:x},computed:{mode(){return this.$store.state.mode},caught(){return this.$store.state.caught},displayTitle(){return"project"===this.mode?this.$store.state.nowProject.name:"ワーベルウィンド"},displayDesc(){return"gallery"===this.mode?"Page "+(this.$store.state.galleryPageIndex+1)+" / "+this.$store.state.galleryGroups.length:"project"===this.mode?"Photo "+(this.$store.state.projectIndex+1)+" / "+this.$store.state.nowProject.photos.length:"Wirbelwind"}},watch:{caught(){setTimeout(()=>{this.$store.commit("reRender")},100)}}},st=rt,nt=(o("d5c6"),Object(C["a"])(st,u,p,!1,null,null,null)),it=nt.exports,at=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("svg",{staticClass:"wirbel",attrs:{width:"50",height:"16",viewBox:"0 0 50 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[o("g",{staticClass:"wbwd"},[o("rect",{attrs:{x:"18",width:"6",height:"2"}}),o("rect",{attrs:{x:"18",y:"4",width:"6",height:"2"}}),o("rect",{attrs:{x:"44",width:"6",height:"2"}}),o("rect",{attrs:{x:"44",y:"4",width:"6",height:"2"}}),o("path",{attrs:{d:"M42 0H40V16H42V10C44.2091 10 46 11.7909 46 14H48C48 10.6863 45.3137 8 42 8V0Z"}}),o("path",{attrs:{d:"M12 2C12 8.62741 6.62742 14 0 14V12C5.52285 12 10 7.52284 10 2H2V4H0V0H12V2Z"}}),o("path",{attrs:{d:"M38 4C38 10.6274 32.6274 16 26 16V14C31.5228 14 36 9.52284 36 4H28V6H26V2H31V0H33V2H38V4Z"}}),o("path",{attrs:{d:"M10 16C12.1826 16 14.0929 13.6693 15.1429 10.1844C16.5427 13.6693 19.0899 16 22 16H24V14H22C18.6863 14 16 9.52284 16 4V2H14V4C14 9.52284 12.2091 14 10 14V16Z"}})])])},ct=[],lt={name:"Wirbel"},ht=lt,dt=(o("be78"),Object(C["a"])(ht,at,ct,!1,null,null,null)),ut=dt.exports,pt={name:"PipScreen",components:{PipScreenContent:it,Wirbel:ut},data(){return{lightOn:!1}},computed:{renderStat(){return this.$store.state.renderStat},superVision(){return this.$store.state.superVision},screenshotMode(){return this.$store.state.screenshotMode}},methods:{convertDOM(){let t=document.getElementById("canvas").getContext("2d");l()(document.querySelector("#capture"),{logging:!1,useCORS:!0,scale:1,width:320,height:320,backgroundColor:"#000000"}).then(e=>{t.drawImage(e,0,0),this.renderCRT()})},renderCRT(){let t=document.getElementById("canvas").getContext("2d"),e=new h;const o=320,r=320;let s=new d(t.getImageData(0,0,r,o));e.initialize(),e.filter(s,r,o),t.putImageData(s.imageData,0,0)}},mounted(){this.convertDOM()},watch:{renderStat(){this.convertDOM(),this.lightOn=!0,setTimeout(()=>{this.lightOn=!1},500)}}},gt=pt,At=(o("024d"),Object(C["a"])(gt,i,a,!1,null,null,null)),mt=At.exports,vt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"pip-control"},[o("div",{staticClass:"pip-control-widget-wrapper"},[o("Switcher",{attrs:{turned:t.superVision},nativeOn:{click:function(e){return t.switchSuperVision(e)}}}),o("div",{staticClass:"pip-control-widget-label",class:{turned:t.superVision},on:{click:t.switchSuperVision}},[t._v("CLEAR VISION™")])],1),o("div",{staticClass:"pip-control-widget-wrapper"},[o("Switcher",{attrs:{turned:t.screenshotMode},nativeOn:{click:function(e){return t.switchScreenshotMode(e)}}}),o("div",{staticClass:"pip-control-widget-label",class:{turned:t.screenshotMode},on:{click:t.switchScreenshotMode}},[t._v("Screenshoot Mode")])],1),o("div",{staticClass:"pip-control-widget-wrapper"},[o("Switcher",{attrs:{turned:t.caught},nativeOn:{click:function(e){return t.cutSignal(e)}}}),o("div",{staticClass:"pip-control-widget-label",class:{turned:t.caught},on:{click:t.cutSignal}},[t._v("Cut Signal!")])],1)]),o("div",{staticClass:"copyright"},[t.screenshotMode?o("div",{attrs:{lang:"cmn"}},[t._v(t._s(t.screenshotModeDesc))]):t._e(),t._m(0),o("div",{attrs:{lang:"cmn"}},[t._v("如果觉得卡卡的是正常现象")])])])},ft=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("span",{attrs:{lang:"ja"}},[t._v("ワベウド")]),t._v("(beta)")])}],wt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"switcher",style:t.switcherOuterStyle},[o("div",{staticClass:"switcher-inner",style:t.switcherInnerStyle})])},Ct=[],yt={name:"Switcher",props:{turned:Boolean},computed:{switcherOuterStyle(){return this.turned?{background:"#0c0",boxShadow:"0 0 8px #0c0"}:{background:"#333",boxShadow:"none"}},switcherInnerStyle(){return this.turned?{marginLeft:"12px"}:{marginLeft:"2px"}}}},It=yt,Pt=(o("6969"),Object(C["a"])(It,wt,Ct,!1,null,null,null)),bt=Pt.exports,Mt=o("2d30"),xt=o.n(Mt),jt={name:"PipControl",components:{Switcher:bt},computed:{superVision(){return this.$store.state.superVision},screenshotMode(){return this.$store.state.screenshotMode},caught(){return this.$store.state.caught},screenshotModeDesc(){return xt()()?"现在你或许可以长按保存上面的屏幕截图了，或许不可以，视你的浏览器和系统而定，总之欢迎来到90年代。":"现在你可以右键保存上面的屏幕截图了，欢迎来到90年代。"}},methods:{switchSuperVision(){this.$store.commit("switchSuperVision")},switchScreenshotMode(){this.$store.commit("switchScreenshotMode")},cutSignal(){this.$store.commit("cutSignal")}}},Gt=jt,St=(o("9568"),Object(C["a"])(Gt,vt,ft,!1,null,null,null)),Qt=St.exports,Bt={name:"app",components:{PipScreen:mt,PipControl:Qt},mounted(){this.$store.dispatch("getGallery"),this.$store.dispatch("init")}},Et=Bt,_t=Object(C["a"])(Et,s,n,!1,null,null,null),Vt=_t.exports,Nt=o("2f62"),Zt=o("28dd");r["a"].use(Nt["a"]),r["a"].use(Zt["a"]),r["a"].http.options.root="https://camera-dev-cavallo.herokuapp.com/",r["a"].http.options.emulateJSON=!0;var Ot=new Nt["a"].Store({state:{timerOff:!0,chunk:0,renderStat:!1,viewTimes:0,location:"",mode:"gallery",galleryAll:[],galleryGroups:[],galleryPageIndex:0,gallerySelectedIndex:0,nowProject:{},projectIndex:0,superVision:!1,screenshotMode:!1,caught:!1},getters:{gallery:t=>t.galleryGroups[t.galleryPageIndex],viewerInfo(t){return{model:navigator.userAgent,viewTimes:t.viewTimes,lastLocation:t.location,navigator:{language:navigator.language,width:window.innerWidth,height:window.innerHeight,url:window.location.href}}}},mutations:{reRender(t){t.timerOff?(t.renderStat=!t.renderStat,t.chunk=0,console.log("Instant render!")):t.chunk++;const e=t.chunk;t.timerOff=!1,setTimeout(()=>{if(e===t.chunk&&e>0){t.renderStat=!t.renderStat;const e=t.chunk>=10?"Good job!":"";console.log("Debounced render after "+t.chunk+" blocked! "+e),t.chunk=0}t.timerOff=!0},250)},setGallery(t,e){t.galleryAll=e;const o=6;while(t.galleryAll.length>0)t.galleryGroups.push(t.galleryAll.splice(0,o))},detVisitor(t){let e=localStorage.getItem("viewTimes");e?e++:e=1,localStorage.setItem("viewTimes",e),t.viewTimes=e},detLocation(t){let e=localStorage.getItem("lastLocation");e||(e="Not Applied."),t.location=e},goPrevGallery(t){t.galleryPageIndex--,t.gallerySelectedIndex=5},goNextGallery(t){t.galleryPageIndex++,t.gallerySelectedIndex=0},changeProject(t,e){t.nowProject=e,t.mode="project"},changeGallerySelectedIndex(t,e){t.gallerySelectedIndex=e},goNextPhoto(t){t.projectIndex+1<t.nowProject.photos.length&&t.projectIndex++},goPrevPhoto(t){t.projectIndex>0&&t.projectIndex--},resetProjectIndex(t){t.projectIndex=0},goGallery(t){t.mode="gallery"},goInfo(t){t.mode="info"},switchSuperVision(t){t.superVision=!t.superVision,t.superVision&&(t.screenshotMode=!1)},switchScreenshotMode(t){t.screenshotMode=!t.screenshotMode,t.screenshotMode&&(t.superVision=!1)},cutSignal(t){t.caught=!t.caught}},actions:{init(t){t.commit("detVisitor"),t.commit("detLocation"),r["a"].http.post("newViewer",t.getters.viewerInfo)},getGallery:function(t){let e="/json/gallery.json";return new Promise((o,s)=>{r["a"].http.get(e).then(e=>{const r=e.body.prefix;let s=e.body.gallery.reverse();s.forEach(t=>{t.cover=[],t.photos=[];for(let e=1;e<=t.photoIds;e++){const o={src:{jpg:r+"c_limit,h_320,q_90:420,w_320/"+t.codeName+"-"+e+".jpg",thumb:r+"c_limit,h_68,q_90:420,w_68/"+t.codeName+"-"+e+".jpg"},codeName:t.codeName+"-"+e};t.photos.push(o)}for(let e=0;e<t.coverIds.length;e++){const o=t.coverIds[e],r=t.photos[o-1];t.cover.push(r),r.codeName=t.codeName,r.title=t.name}}),t.commit("setGallery",s),o()},t=>{console.error("Get gallery failed."),s()})})}}});o("20bd");r["a"].config.productionTip=!1,new r["a"]({store:Ot,render:function(t){return t(Vt)}}).$mount("#app")},6969:function(t,e,o){"use strict";var r=o("f208"),s=o.n(r);s.a},"7ed4":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAAFACAMAAAD6TlWYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkY5Q0Y0MTE1NjMzRTExRUFCQzE4RTA4NEU0MDcyNjUyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkY5Q0Y0MTE2NjMzRTExRUFCQzE4RTA4NEU0MDcyNjUyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjlDRjQxMTM2MzNFMTFFQUJDMThFMDg0RTQwNzI2NTIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjlDRjQxMTQ2MzNFMTFFQUJDMThFMDg0RTQwNzI2NTIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz54UGBgAAAAtFBMVEX//////8z/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"},8302:function(t,e,o){},9568:function(t,e,o){"use strict";var r=o("23f4"),s=o.n(r);s.a},a5b0:function(t,e,o){},a7da:function(t,e,o){},be78:function(t,e,o){"use strict";var r=o("3c33"),s=o.n(r);s.a},d5c6:function(t,e,o){"use strict";var r=o("d936"),s=o.n(r);s.a},d936:function(t,e,o){},e668:function(t,e,o){"use strict";var r=o("e8e6"),s=o.n(r);s.a},e6ce:function(t,e,o){},e8e6:function(t,e,o){},e97f:function(t,e,o){"use strict";var r=o("a5b0"),s=o.n(r);s.a},f208:function(t,e,o){},f362:function(t,e,o){"use strict";var r=o("04ee"),s=o.n(r);s.a},f6da:function(t,e,o){"use strict";var r=o("8302"),s=o.n(r);s.a}});