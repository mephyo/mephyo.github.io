webpackJsonp([1],{"/XxO":function(t,e){},0:function(t,e){},"24zP":function(t,e){},Fa5D:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"guider_wrapper"},[e("div",{staticClass:"icon icon_left"}),this._v(" "),e("div",{staticClass:"guider_content"},[this._t("default")],2)])},staticRenderFns:[]},s={name:"Navigator",components:{Guider:n("VU/8")({name:"Guider"},i,!1,null,null,null).exports},props:{gallery:Object},computed:{noLimits:function(){return this.$store.state.showPrivate},noSecrets:function(){return this.$store.state.onlyForLisa},scenes:function(){return this.$route.name},galleryName:function(){if(this.$store.state.nowGallery)return this.$store.state.nowGallery.name},havePrevious:function(){if(this.$store.state.nowPhoto.src)return this.$store.state.nowPhotoIndex>0},haveNext:function(){if(this.$store.state.nowPhoto.src)return this.$store.state.nowPhotoIndex+1<this.$store.state.nowGallery.photos.length}},methods:{goHome:function(){this.noSecrets?this.$router.push({path:"/18x"}):this.noLimits?this.$router.push({path:"/nlm"}):this.$router.push({path:"/"})},goGallery:function(){this.$router.push({name:"SingleGallery",params:{galleryId:this.$store.state.nowGallery.codeName}})},goPrevious:function(){if(!this.havePrevious)return"No more";var t=this.$store.state.nowGallery.photos[this.$store.state.nowPhotoIndex-1].codeName;this.$router.push({name:"SinglePhoto",params:{photoId:t}})},goNext:function(){if(!this.haveNext)return"No more";var t=this.$store.state.nowGallery.photos[this.$store.state.nowPhotoIndex+1].codeName;this.$router.push({name:"SinglePhoto",params:{photoId:t}})}}},o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return"Overtune"!==t.scenes?n("nav",{staticClass:"navigator"},["SingleGallery"===t.scenes?n("div",{staticClass:"navigator_content_wrapper"},[n("guider",{nativeOn:{click:function(e){t.goHome(e)}}},[n("div",{staticClass:"logo"})])],1):t._e(),t._v(" "),"SinglePhoto"===t.scenes?n("div",{staticClass:"navigator_content_wrapper"},[n("guider",{nativeOn:{click:function(e){t.goGallery(e)}}},[n("div",{staticClass:"gallery-name"},[t._v(t._s(t.galleryName))])]),t._v(" "),n("div",{staticClass:"tools"})],1):t._e()]):t._e()},staticRenderFns:[]},l={name:"app",components:{Navigator:n("VU/8")(s,o,!1,null,null,null).exports},data:function(){return{galleryLoaded:!1}},methods:{identifier:function(){var t=this,e=localStorage.getItem("viewTimes"),n=localStorage.getItem("lastLocation");e?(e++,localStorage.setItem("viewTimes",e)):(e=1,localStorage.setItem("viewTimes",1)),n||(n="Not Applied.");var a={model:navigator.userAgent,viewTimes:e,lastLocation:n};setTimeout(function(){t.$store.dispatch("newViewer",a)},2e3)},indexing:function(){this.galleryLoaded=!0;var t=this.$route.params.galleryId,e=this.$route.params.photoId;t&&this.$store.commit("changeGallery",t),e&&this.$store.commit("changePhoto",e)}},mounted:function(){var t=this;this.$store.dispatch("getGallery").then(function(){return t.indexing()}),this.identifier()},watch:{$route:function(){this.indexing()}}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("main",{attrs:{id:"app"}},[this.galleryLoaded?e("router-view"):this._e(),this._v(" "),e("navigator")],1)},staticRenderFns:[]},c=n("VU/8")(l,r,!1,null,null,null).exports,h=n("/ocq"),d={name:"Stark",props:{gallery:Array,name:String},data:function(){return{revenge:0}},computed:{robb:function(){return{transform:"rotate("+12*this.revenge+"deg) translateX("+48*this.revenge+"px) translateZ(0)"}},bran:function(){return{transform:"rotate("+-6*this.revenge+"deg) translateX("+-48*this.revenge+"px) translateZ(0)"}},rickon:function(){return{transform:"translateY("+-4*this.revenge+"px) translateZ(0)"}},katherine:function(){return{opacity:.75-this.revenge,transform:"translateY("+4*this.revenge+"px) translateZ(0)"}}},methods:{northenInvading:function(){var t=window.innerHeight/2,e=this.$refs.stark.getBoundingClientRect().y+100;e<0?e=0:e>window.innerHeight&&(e=window.innerHeight);var n=Math.abs(t-e);this.revenge=1-n/t}},created:function(){window.addEventListener("scroll",this.northenInvading)},destroyed:function(){window.removeEventListener("scroll",this.northenInvading)},mounted:function(){var t=this;setTimeout(function(){t.northenInvading()},1e3)}},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{ref:"stark",staticClass:"king-in-the-north"},[e("img",{staticClass:"stark",style:this.robb,attrs:{src:this.gallery[2]}}),this._v(" "),e("img",{staticClass:"stark",style:this.bran,attrs:{src:this.gallery[1]}}),this._v(" "),e("img",{staticClass:"stark",style:this.rickon,attrs:{src:this.gallery[0]}}),this._v(" "),e("h3",{staticClass:"tully",style:this.katherine},[this._v(this._s(this.name))])])},staticRenderFns:[]},p=n("VU/8")(d,u,!1,null,null,null).exports,m={name:"Alien",data:function(){return{rawKeys:[{id:1,icon:"airplane"},{id:2,icon:"heart"},{id:3,icon:"cat"},{id:4,icon:"ghost"},{id:5,icon:"cake"},{id:6,icon:"iris"},{id:7,icon:"dna"},{id:8,icon:"duck"},{id:9,icon:"run"}],keys:[],keyword:""}},methods:{shuffle:function(t){for(var e,n,a=t.length;0!==a;)n=Math.floor(Math.random()*a),e=t[a-=1],t[a]=t[n],t[n]=e;return t},enter:function(t){8===t?this.keyword="":this.keyword+=t,"33333"===this.keyword&&this.$emit("unlocked")}},mounted:function(){this.keys=this.shuffle(this.rawKeys)}},v={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"alien"},[n("div",{staticClass:"keyboard"},t._l(t.keys,function(e){return n("div",{key:e.id,staticClass:"key"},[n("div",{staticClass:"key_icon",class:e.icon,on:{click:function(n){t.enter(e.id)}}},["airplane"===e.icon?n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M21,16V14L13,9V3.5A1.5,1.5 0 0,0 11.5,2A1.5,1.5 0 0,0 10,3.5V9L2,14V16L10,13.5V19L8,20.5V22L11.5,21L15,22V20.5L13,19V13.5L21,16Z"}})]):t._e(),t._v(" "),"cake"===e.icon?n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M21,21V17C21,15.89 20.1,15 19,15H18V12C18,10.89 17.1,10 16,10H13V8H11V10H8C6.89,10 6,10.89 6,12V15H5C3.89,15 3,15.89 3,17V21H1V23H23V21M12,7A2,2 0 0,0 14,5C14,4.62 13.9,4.27 13.71,3.97L12,1L10.28,3.97C10.1,4.27 10,4.62 10,5A2,2 0 0,0 12,7Z"}})]):t._e(),t._v(" "),"iris"===e.icon?n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M13.73,15L9.83,21.76C10.53,21.91 11.25,22 12,22C14.4,22 16.6,21.15 18.32,19.75L14.66,13.4M2.46,15C3.38,17.92 5.61,20.26 8.45,21.34L12.12,15M8.54,12L4.64,5.25C3,7 2,9.39 2,12C2,12.68 2.07,13.35 2.2,14H9.69M21.8,10H14.31L14.6,10.5L19.36,18.75C21,16.97 22,14.6 22,12C22,11.31 21.93,10.64 21.8,10M21.54,9C20.62,6.07 18.39,3.74 15.55,2.66L11.88,9M9.4,10.5L14.17,2.24C13.47,2.09 12.75,2 12,2C9.6,2 7.4,2.84 5.68,4.25L9.34,10.6L9.4,10.5Z"}})]):t._e(),t._v(" "),"cat"===e.icon?n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M12,8L10.67,8.09C9.81,7.07 7.4,4.5 5,4.5C5,4.5 3.03,7.46 4.96,11.41C4.41,12.24 4.07,12.67 4,13.66L2.07,13.95L2.28,14.93L4.04,14.67L4.18,15.38L2.61,16.32L3.08,17.21L4.53,16.32C5.68,18.76 8.59,20 12,20C15.41,20 18.32,18.76 19.47,16.32L20.92,17.21L21.39,16.32L19.82,15.38L19.96,14.67L21.72,14.93L21.93,13.95L20,13.66C19.93,12.67 19.59,12.24 19.04,11.41C20.97,7.46 19,4.5 19,4.5C16.6,4.5 14.19,7.07 13.33,8.09L12,8M9,11A1,1 0 0,1 10,12A1,1 0 0,1 9,13A1,1 0 0,1 8,12A1,1 0 0,1 9,11M15,11A1,1 0 0,1 16,12A1,1 0 0,1 15,13A1,1 0 0,1 14,12A1,1 0 0,1 15,11M11,14H13L12.3,15.39C12.5,16.03 13.06,16.5 13.75,16.5A1.5,1.5 0 0,0 15.25,15H15.75A2,2 0 0,1 13.75,17C13,17 12.35,16.59 12,16V16H12C11.65,16.59 11,17 10.25,17A2,2 0 0,1 8.25,15H8.75A1.5,1.5 0 0,0 10.25,16.5C10.94,16.5 11.5,16.03 11.7,15.39L11,14Z"}})]):t._e(),t._v(" "),"dna"===e.icon?n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M4,2H6V4C6,5.44 6.68,6.61 7.88,7.78C8.74,8.61 9.89,9.41 11.09,10.2L9.26,11.39C8.27,10.72 7.31,10 6.5,9.21C5.07,7.82 4,6.1 4,4V2M18,2H20V4C20,6.1 18.93,7.82 17.5,9.21C16.09,10.59 14.29,11.73 12.54,12.84C10.79,13.96 9.09,15.05 7.88,16.22C6.68,17.39 6,18.56 6,20V22H4V20C4,17.9 5.07,16.18 6.5,14.79C7.91,13.41 9.71,12.27 11.46,11.16C13.21,10.04 14.91,8.95 16.12,7.78C17.32,6.61 18,5.44 18,4V2M14.74,12.61C15.73,13.28 16.69,14 17.5,14.79C18.93,16.18 20,17.9 20,20V22H18V20C18,18.56 17.32,17.39 16.12,16.22C15.26,15.39 14.11,14.59 12.91,13.8L14.74,12.61M7,3H17V4L16.94,4.5H7.06L7,4V3M7.68,6H16.32C16.08,6.34 15.8,6.69 15.42,7.06L14.91,7.5H9.07L8.58,7.06C8.2,6.69 7.92,6.34 7.68,6M9.09,16.5H14.93L15.42,16.94C15.8,17.31 16.08,17.66 16.32,18H7.68C7.92,17.66 8.2,17.31 8.58,16.94L9.09,16.5M7.06,19.5H16.94L17,20V21H7V20L7.06,19.5Z"}})]):t._e(),t._v(" "),"duck"===e.icon?n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M8.5,5A1.5,1.5 0 0,0 7,6.5A1.5,1.5 0 0,0 8.5,8A1.5,1.5 0 0,0 10,6.5A1.5,1.5 0 0,0 8.5,5M10,2A5,5 0 0,1 15,7C15,8.7 14.15,10.2 12.86,11.1C14.44,11.25 16.22,11.61 18,12.5C21,14 22,12 22,12C22,12 21,21 15,21H9C9,21 4,21 4,16C4,13 7,12 6,10C2,10 2,6.5 2,6.5C3,7 4.24,7 5,6.65C5.19,4.05 7.36,2 10,2Z"}})]):t._e(),t._v(" "),"ghost"===e.icon?n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M12,2A9,9 0 0,0 3,11V22L6,19L9,22L12,19L15,22L18,19L21,22V11A9,9 0 0,0 12,2M9,8A2,2 0 0,1 11,10A2,2 0 0,1 9,12A2,2 0 0,1 7,10A2,2 0 0,1 9,8M15,8A2,2 0 0,1 17,10A2,2 0 0,1 15,12A2,2 0 0,1 13,10A2,2 0 0,1 15,8Z"}})]):t._e(),t._v(" "),"heart"===e.icon?n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"}})]):t._e(),t._v(" "),"run"===e.icon?n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M13.5,5.5C14.59,5.5 15.5,4.58 15.5,3.5C15.5,2.38 14.59,1.5 13.5,1.5C12.39,1.5 11.5,2.38 11.5,3.5C11.5,4.58 12.39,5.5 13.5,5.5M9.89,19.38L10.89,15L13,17V23H15V15.5L12.89,13.5L13.5,10.5C14.79,12 16.79,13 19,13V11C17.09,11 15.5,10 14.69,8.58L13.69,7C13.29,6.38 12.69,6 12,6C11.69,6 11.5,6.08 11.19,6.08L6,8.28V13H8V9.58L9.79,8.88L8.19,17L3.29,16L2.89,18L9.89,19.38Z"}})]):t._e()])])}))])},staticRenderFns:[]},g=n("VU/8")(m,v,!1,null,null,null).exports,A={name:"Wirbelwind",data:function(){return{hobbit:!1}},methods:{showOff:function(){var t=this;this.hobbit=!0,setTimeout(function(){t.hobbit=!1},2e3)}}},f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ww_wrapper",on:{click:this.showOff}},[e("div",{staticClass:"ww_text"},[this._v("Wirbel")]),this._v(" "),e("div",{staticClass:"ww_logo",class:{rotating:this.hobbit}}),this._v(" "),e("div",{staticClass:"ww_text"},[this._v("Wind")])])},staticRenderFns:[]},w=n("VU/8")(A,f,!1,null,null,null).exports,y={name:"Overtune",components:{Stark:p,Alien:g,Wirbelwind:w},data:function(){return{gallery:{},locked:!0,log:0}},computed:{noLimits:function(){return this.$store.state.showPrivate},noSecrets:function(){return this.$store.state.onlyForLisa},hackMode:function(){return this.$store.state.hackMode},secretFilter:function(){return this.$store.state.gallery.filter(function(t){if(!1===t.secret)return t})},badFilter:function(){return this.$store.state.gallery},goodFilter:function(){return this.$store.state.gallery.filter(function(t){if(!1===t.private)return t})}},methods:{rebelion:function(){var t=sessionStorage.getItem("locked"),e=this.$route.path;t&&(this.locked=!1),"/nlm"===e?(this.$store.commit("getMeOut"),this.gallery=this.badFilter):"/18x"===e?(this.$store.commit("lisaIsWatching"),this.gallery=this.secretFilter):(this.locked=!1,this.gallery=this.goodFilter)},unlock:function(){this.locked=!1,sessionStorage.setItem("locked",!1)},launchHackMode:function(){this.log>=7?this.$store.commit("hackModeEnabled"):this.log++}},mounted:function(){this.rebelion()}},C={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"overtune"},[e("transition",{attrs:{name:"trans_blur"}},[this.locked?e("alien",{on:{unlocked:this.unlock}}):e("div",[e("div",{staticClass:"logo main-logo",class:{invert:this.hackMode},on:{click:this.launchHackMode}}),this._v(" "),e("h1",[this._v("Camera del Cavallo\n                "),this.noLimits||this.noSecrets?e("span",[this._v(" 🔞")]):this._e()]),this._v(" "),e("ul",{staticClass:"gallery-list"},this._l(this.gallery,function(t){return e("li",{key:t.codeName},[e("router-link",{attrs:{to:{name:"SingleGallery",params:{galleryId:t.codeName}}}},[e("stark",{attrs:{gallery:t.cover,name:t.name}})],1)],1)})),this._v(" "),e("wirbelwind")],1)],1)],1)},staticRenderFns:[]},_=n("VU/8")(y,C,!1,null,null,null).exports,k=n("mvHQ"),x=n.n(k),L={name:"Apply",data:function(){return{haveClicked:!1,haveApply:!1,haveLocation:!1,ourDistance:NaN}},computed:{inSinglePage:function(){return"/apply"===this.$route.path}},methods:{wishYouWereHere:function(){function t(){setTimeout(function(){e.haveApply=!0,document.body.scrollTop=document.body.scrollHeight},2e3)}var e=this;if(e.haveClicked=!0,!navigator.geolocation)return t(),void console.warn("您的浏览器不支持地理位置");var n={latitude:31.330824,longitude:120.643594};navigator.geolocation.getCurrentPosition(function(a){var i={lat:a.coords.latitude,lon:a.coords.longitude};!function(n,a,i,s){void 0===Number.prototype.toRad&&(Number.prototype.toRad=function(){return this*Math.PI/180});var o=(s-a).toRad(),l=(i-n).toRad(),r=Math.sin(o/2)*Math.sin(o/2)+Math.cos(a.toRad())*Math.cos(s.toRad())*Math.sin(l/2)*Math.sin(l/2),c=2*Math.atan2(Math.sqrt(r),Math.sqrt(1-r))*6371;e.ourDistance=c,t()}(i.lon,i.lat,n.longitude,n.latitude),e.haveLocation=!0,localStorage.setItem("lastLocation",x()(i)),e.$store.dispatch("newLocation",x()(i))},function(){t(),console.warn("无法获取您的位置")})},goApply:function(){this.$router.push({path:"/Apply"})}}},I={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"apply_wrapper"},[this.haveApply?this._e():e("a",{staticClass:"apply_button apply_yellow",class:{apply_crazy:this.haveClicked},on:{click:this.wishYouWereHere}},[this.haveClicked?e("span",[this._v("…稍等…")]):e("span",[this.inSinglePage?[this._v("点我")]:[this._v("我也想拍")]],2)]),this._v(" "),this.haveApply?e("div",{staticClass:"apply_content"},[e("div",{staticClass:"apply_content_inner"},[e("p",[this._v("谢谢你喜欢我的照片，我也很想拍你哦。")]),this._v(" "),this.haveLocation?[this.ourDistance<200?e("p",[this._v("我可以来你的城市找你拍照。")]):e("p",[this._v("我可以给你拍照，但是你必须来苏州找我。")])]:this._e()],2)]):this._e(),this._v(" "),this.haveApply?e("a",{staticClass:"apply_button apply_blue",on:{click:this.goApply}},[this._v("来拍照吧")]):this._e()])},staticRenderFns:[]},E={name:"SingleGallery",components:{Apply:n("VU/8")(L,I,!1,null,null,null).exports,Wirbelwind:w},computed:{gallery:function(){return this.$store.state.nowGallery},hackMode:function(){return this.$store.state.hackMode}}},b={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"single-gallery"},[a("h1",[t._v(t._s(t.gallery.name))]),t._v(" "),a("ul",t._l(t.gallery.photos,function(e,i){return a("li",{key:e.codeName},[a("router-link",{attrs:{to:{name:"SinglePhoto",params:{photoId:e.codeName}}}},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.src,expression:"photo.src"}],staticClass:"photo"}),t._v(" "),t.hackMode?t._e():a("img",{staticClass:"caught",attrs:{src:n("v6aj")}})]),t._v(" "),a("div",{staticClass:"photo_title"},[t._v(t._s(i+1+" / "+t.gallery.photos.length))])],1)})),t._v(" "),a("apply"),t._v(" "),a("wirbelwind")],1)},staticRenderFns:[]},V=n("VU/8")(E,b,!1,null,null,null).exports,R={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"single_photo"},[t.galleryReady?a("agile",{attrs:{options:t.agileOpts}},t._l(t.gallery.photos,function(e){return a("div",{key:e.codeName,staticClass:"single_slide"},[a("div",{staticClass:"photo_wrapper"},[a("img",{staticClass:"photo",attrs:{src:e.src}}),t._v(" "),t.hackMode?t._e():a("img",{staticClass:"caught",attrs:{src:n("v6aj")}})]),t._v(" "),e.desc?a("p",[t._v(t._s(e.desc))]):t._e()])})):t._e()],1)},staticRenderFns:[]},M=n("VU/8")({name:"SinglePhoto",data:function(){return{agileOpts:{arrows:!1,dots:!1,infinite:!1,speed:600}}},computed:{gallery:function(){return this.$store.state.nowGallery},photo:function(){return this.$store.state.nowPhoto},galleryReady:function(){if(this.$store.state.nowGallery.photos)return!0},hackMode:function(){return this.$store.state.hackMode}}},R,!1,null,null,null).exports,B={name:"Spetsnaz",props:{q:String,value:[String,Array,Boolean],schema:Array},data:function(){return{model:{},localValue:"",bougie:3}},methods:{callDaddy:function(){this.$emit("input",this.q,this.localValue)},selectOne:function(t){var e=this;this.model.values.forEach(function(n){n.id===t?(n.selected=!0,e.localValue=n.id):n.selected=!1}),this.$forceUpdate()},checkOne:function(t){var e=this;this.model.values.forEach(function(n){if(n.id===t)if(!1===n.selected)n.selected=!0,e.localValue.push(t);else{n.selected=!1;for(var a=e.localValue.length-1;a>=0;a--)e.localValue[a]===t&&e.localValue.splice(a,1)}}),this.$forceUpdate()},switchChick:function(){!0===this.localValue?this.localValue=!1:this.localValue=!0}},mounted:function(){var t=this;switch(this.schema.forEach(function(e){e.model===t.q&&(t.model=e)}),this.localValue=this.value,this.model.type){case"select":this.model.values.forEach(function(e){t.value===e.id?e.selected=!0:e.selected=!1});break;case"checklist":this.model.values.forEach(function(e){t.value.includes(e.id)?e.selected=!0:e.selected=!1})}},watch:{localValue:function(){this.bougie>3&&this.callDaddy(),this.bougie++}}},$={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"spetsnaz"},[n("div",{staticClass:"spetsnaz_head"},[n("span",{staticClass:"spetsnaz_label"},[t._v(t._s(t.model.label))]),t._v(" "),t.model.hint?n("span",{staticClass:"spetsnaz_hint"},[t._v("("+t._s(t.model.hint)+")")]):t._e()]),t._v(" "),"input"===t.model.type?n("div",{staticClass:"spetsnaz_field"},[n("div",{staticClass:"spetsnaz_inputz"},["checkbox"===t.model.inputType?n("input",{directives:[{name:"model",rawName:"v-model",value:t.localValue,expression:"localValue"}],staticClass:"spetsnaz_input",attrs:{placeholder:t.model.placeholder,type:"checkbox"},domProps:{checked:Array.isArray(t.localValue)?t._i(t.localValue,null)>-1:t.localValue},on:{change:function(e){var n=t.localValue,a=e.target,i=!!a.checked;if(Array.isArray(n)){var s=t._i(n,null);a.checked?s<0&&(t.localValue=n.concat([null])):s>-1&&(t.localValue=n.slice(0,s).concat(n.slice(s+1)))}else t.localValue=i}}}):"radio"===t.model.inputType?n("input",{directives:[{name:"model",rawName:"v-model",value:t.localValue,expression:"localValue"}],staticClass:"spetsnaz_input",attrs:{placeholder:t.model.placeholder,type:"radio"},domProps:{checked:t._q(t.localValue,null)},on:{change:function(e){t.localValue=null}}}):n("input",{directives:[{name:"model",rawName:"v-model",value:t.localValue,expression:"localValue"}],staticClass:"spetsnaz_input",attrs:{placeholder:t.model.placeholder,type:t.model.inputType},domProps:{value:t.localValue},on:{input:function(e){e.target.composing||(t.localValue=e.target.value)}}})])]):t._e(),t._v(" "),"select"===t.model.type?n("div",{staticClass:"spetsnaz_field"},[n("div",{staticClass:"spetsnaz_boxy"},t._l(t.model.values,function(e){return n("div",{key:e.id,staticClass:"spetsnaz_box",class:{selected:e.selected},on:{click:function(n){t.selectOne(e.id)}}},[n("span",[t._v(t._s(e.name))])])}))]):t._e(),t._v(" "),"checklist"===t.model.type?n("div",{staticClass:"spetsnaz_field"},[n("div",{staticClass:"spetsnaz_boxz"},t._l(t.model.values,function(e){return n("div",{key:e.id,staticClass:"spetsnaz_box",class:{selected:e.selected},on:{click:function(n){t.checkOne(e.id)}}},[n("span",[t._v(t._s(e.name))])])}))]):t._e(),t._v(" "),"checkbox"===t.model.type?n("div",{staticClass:"spetsnaz_field"},[n("div",{staticClass:"spetsnaz_checker",on:{click:t.switchChick}},[!0===t.localValue?n("svg",{staticStyle:{width:"24px",height:"24px"},attrs:{viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}})]):t._e()])]):t._e()])},staticRenderFns:[]},H={name:"boncka",components:{Spetsnaz:n("VU/8")(B,$,!1,function(t){n("24zP")},null,null).exports},data:function(){return{submitLabel:"提交",model:{call:"",age:"",gender:"female",contact:"",whereToSee:"",place:["hotel"],placeMore:"",time:["afternoon"],style:"myIdea",styleMore:"",cloth:["nude","underwear"],clothMore:"",emotion:"excellent",pose:"good",limit:"3",copyright:"2",contract:!1},schema:[{type:"input",inputType:"text",label:"称呼",model:"call",placeholder:"不一定是真实姓名"},{type:"input",inputType:"number",label:"年龄",model:"age",min:14,max:100,placeholder:"可不填"},{type:"select",label:"性别",model:"gender",values:[{id:"female",name:"女"},{id:"male",name:"男"},{id:"futa",name:"保密"}]},{type:"input",inputType:"text",label:"联系方式",model:"contact",placeholder:"通讯工具 | 用户名"},{type:"input",inputType:"text",label:"可以看到你照片的地方",model:"whereToSee",placeholder:"平台 | 用户名"},{type:"checklist",label:"拍摄地点",model:"place",values:[{id:"outdoor",name:"野外"},{id:"public",name:"公共场所"},{id:"hotel",name:"酒店"},{id:"home",name:"住处"},{id:"other",name:"其他"}]},{type:"input",inputType:"text",label:"拍摄地点的补充说明",model:"placeMore",placeholder:"你有什么特别的地点？"},{type:"checklist",label:"拍摄时间",model:"time",values:[{id:"morning",name:"上午"},{id:"afternoon",name:"下午"},{id:"evening",name:"晚上"}]},{type:"select",label:"拍摄风格",model:"style",values:[{id:"myIdea",name:"我有特别的想法"},{id:"yourIdea",name:"按你的一贯的风格来"}]},{type:"input",inputType:"text",label:"拍摄风格的补充说明",model:"styleMore",placeholder:"你有什么特别的想法？"},{type:"checklist",label:"服装",model:"cloth",values:[{id:"nude",name:"裸体"},{id:"underwear",name:"内衣"},{id:"other",name:"其他"}]},{type:"input",inputType:"text",label:"服装的补充说明",model:"clothMore",placeholder:"你有什么特别的服装？"},{type:"select",label:"你拍照时的表情",model:"emotion",values:[{id:"excellent",name:"我很会做表情"},{id:"good",name:"我拍照只有一种表情"},{id:"poor",name:"我不会做表情"},{id:"none",name:"我不拍脸"}]},{type:"select",label:"你拍照时的姿势",model:"pose",values:[{id:"excellent",name:"我很会摆 pose"},{id:"good",name:"我会一点"},{id:"poor",name:"请教教我"}]},{type:"select",label:"尺度",model:"limit",hint:"选3是要加钱的",values:[{id:"4",name:"A片那种"},{id:"3",name:"有欲望但不色情"},{id:"2",name:"没有欲望的美好肉体"},{id:"1",name:"不穿衣服的性冷淡"}]},{type:"select",label:"版权",model:"copyright",required:!0,values:[{id:"1",name:"禁止在任何地方发布"},{id:"2",name:"可以在我的网站发布不露脸的照片"},{id:"3",name:"可以在我的网站发布所有照片"},{id:"4",name:"可以在我的网站和其他平台发布不露脸的照片"},{id:"5",name:"可以在我的网站和其他平台发布所有照片"}]},{type:"checkbox",label:"需要签订隐私合同（自己打印）",model:"contract"}]}},methods:{submitData:function(){var t=this;this.submitLabel="稍微等等哟",this.$http.post("newApplier",this.model).then(function(e){t.submitLabel="提交成功",alert("提交成功"),t.$router.push({path:"/"})},function(e){alert("FATAL ERROR"),t.submitLabel="服务器可能挂了"})},callMe:function(t,e){this.model[t]=e}}},S={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"boncka",attrs:{lang:"zh-CN"}},[n("ul",{staticClass:"boncka_list"},t._l(t.model,function(e,a){return n("spetsnaz",{key:a,attrs:{q:a,value:e,schema:t.schema},on:{input:t.callMe}})})),t._v(" "),n("div",{staticClass:"submit_button",on:{click:t.submitData}},[t._v("提交")])])},staticRenderFns:[]},Q=n("VU/8")(H,S,!1,function(t){n("/XxO")},null,null).exports,z={name:"Admin",components:{Alien:g},data:function(){return{locked:!0,viewers:[],locations:[]}},methods:{getViewers:function(){var t=this;this.$http.get("listViewer").then(function(e){t.viewers=e.body.reverse()})},getLocations:function(){var t=this;this.$http.get("listLocation").then(function(e){t.locations=e.body.reverse()})}},mounted:function(){this.getViewers()}},P={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"admin"},[t.locked?n("alien",{on:{unlocked:function(e){t.locked=!1}}}):n("div",[t.viewers.length?n("ol",t._l(t.viewers,function(e){return n("li",{key:e._id},[n("dl",[n("dt",[t._v("Time")]),t._v(" "),n("dd",[t._v(t._s(e.time))])]),t._v(" "),n("dl",[n("dt",[t._v("Model")]),t._v(" "),n("dd",[t._v(t._s(e.model))])]),t._v(" "),n("dl",[n("dt",[t._v("View Times")]),t._v(" "),n("dd",[t._v(t._s(e.viewTimes))])]),t._v(" "),n("dl",[n("dt",[t._v("Last Location")]),t._v(" "),n("dd",[e.map?n("a",{attrs:{href:e.map,target:"_blank"}},[t._v("Open Map")]):n("span",[t._v("Did not Catch")])])])])})):t._e(),t._v(" "),n("button",{on:{click:t.getLocations}},[t._v("Get Locations")]),t._v(" "),t.locations.length?n("ol",t._l(t.locations,function(e){return n("li",{key:e._id},[n("dl",[n("dt",[t._v("Time")]),t._v(" "),n("dd",[t._v(t._s(e.time))])]),t._v(" "),n("dl",[n("dt",[t._v("Location")]),t._v(" "),n("dd",[e.map?n("a",{attrs:{href:e.map,target:"_blank"}},[t._v("Open Map")]):n("span",[t._v("Did not Catch")])])])])})):t._e()])],1)},staticRenderFns:[]},T=n("VU/8")(z,P,!1,function(t){n("kUU3")},null,null).exports;a.a.use(h.a);var F=new h.a({routes:[{path:"/",alias:["/nlm","/18x"],name:"Overtune",component:_},{path:"/Apply",name:"Boncka",component:Q},{path:"/Admin",name:"Admin",component:T},{path:"/gallery/:galleryId",name:"SingleGallery",component:V},{path:"/gallery/:galleryId/photo/:photoId",name:"SinglePhoto",component:M}],scrollBehavior:function(t,e,n){return{x:0,y:0}}}),N=n("//Fk"),G=n.n(N),O=n("NYxO"),J=n("8+8L");a.a.use(O.a),a.a.use(J.a),a.a.http.options.root="https://camera-dev-cavallo.herokuapp.com/",a.a.http.options.emulateJSON=!0;var U=new O.a.Store({state:{showPrivate:!1,onlyForLisa:!1,hackMode:!1,gallery:[],nowGalleryIndex:0,nowGallery:{},nowPhotoIndex:0,nowPhoto:{}},mutations:{getMeOut:function(t){t.showPrivate=!0},lisaIsWatching:function(t){t.onlyForLisa=!0},hackModeEnabled:function(t){t.hackMode=!0},setGallery:function(t,e){t.gallery=e.body.gallery.reverse()},changeGallery:function(t,e){var n=t.gallery.map(function(t){return t.codeName}).indexOf(e);t.nowGalleryIndex=n,t.nowGallery=t.gallery[n]},changePhoto:function(t,e){var n=t.nowGallery.photos.map(function(t){return t.codeName}).indexOf(e);t.nowPhotoIndex=n,t.nowPhoto=t.nowGallery.photos[n]}},actions:{getGallery:function(t){var e="/static/json/gallery.json";return new G.a(function(n,i){a.a.http.get(e).then(function(e){t.commit("setGallery",e),n()},function(t){console.error("FATAL ERROR: cannot load gallery, it's been totally fucked.")})})},newViewer:function(t,e){a.a.http.post("newViewer",{model:e.model,viewTimes:e.viewTimes,lastLocation:e.lastLocation})},newLocation:function(t,e){a.a.http.post("newLocation",{position:e})}}}),Z=n("cTzj"),j=n.n(Z),D=n("nav3"),q=n.n(D);n("uMhA"),n("Fa5D");a.a.config.productionTip=!1,a.a.use(j.a,{preLoad:1.5,attempt:2,listenEvents:["scroll"]}),a.a.use(q.a),new a.a({el:"#app",router:F,store:U,template:"<App/>",components:{App:c}})},kUU3:function(t,e){},uMhA:function(t,e){},v6aj:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQCAMAAAC3Ycb+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAZQTFRFAAAA////pdmf3QAABMVJREFUeNrs3Y1u2jAUgNHr93/paasKxD+xnQDD5HwSQ2shmJwm0BRMJH1UYRUAERAgAgJEQIAICBABERAgAgJEQIAICBABERAgAgJEQIAICBABERAgAgJEQIAICBABERAgAgJEQIAICBABERAgAgJEQIAICBABERAgAgJEQIAICBABERAgAgJEQIAICBABERAgAgJEQIAICBABERAgAgJEQIAICBABASIgAgJEQIAICBABASIgAgJEQIAICBABASIgAgJEQIAICBABASIgAgJEQIAIyMVBQqeyhdhlCQgQAQEiIAICRECACAgQAQEiIAICRECACAgQAQEiIAICRECACAgQAQEiIAICRECA7N7iz3tS//5ze3Pq7SvDy+h9ofH10duIuAzILwSQDwb52Whu7+d+OH/8b7pfJL/o9iyVV3jcLlNtIVFcbXvLV91CilMuVz9VFrB/heapNqBvB/ndHvogkdIxkGjx759iu8u6CsjoFpIe9ixTIJt9z21lRw8khwRSfCfyVTIIkqqCvS0mhwSy8/gxt8uqA6T+4weQ+wPLdtfRfZZVvejss6yH/xe7rMs8yzqt+ZJVEB+zHoCkyQmtgDiWJSACAkRAgAgIEAEBIiACAkRALg4y/XEZT7nFsa+fG1uUf79cAOTAB5i8DeTk2JYEuQ32jSKjIGfHtjZI+mCQdEmQ+n67/dFM5eXS5lUntdWQL6W6jKmx5XAz318DJFtnzQ/Lqlxu+8LqaK/PcuFjII3L95bX+v4SIK2frpHz+/3e/4nvnR8f27Hb+V6QxjKAPOUxZB6k93z1LEhvbLNjX+0x5DhIvAikM7bZsS+yy5p6zIjaneyt4JFlnB0bECD/H6S1nBmQsV8MgawGkr4Q5OhP2bldVmsZE2OLo0/Vlzi4OH2n4gkgvS1mdwzFO6PXBkntQyJdiOZhj9aHkk8eOhkZ297tLnnopLxbgyC7Bwb7B7NGDi6OjG17ldFfHNMngwgIEAEBIiACAkRAgAgIEAEBIiACAkTvBhn6K9rQ39lmZ4TPJig9fsOti77jXS+vABkY+WtABq4VccEtJJvCNTUnz0/ltNKRv+6jdtX81fHZhOFRnx72/t3HIf17J0p16dmwUmMq/2VA9iaUTvX1OTxFf3fR+zMub6/Xu5VydMW8w18JUsy8/y6QlLoT9Ef7Ut8KUpl5v/jIg3glSH2y/nKXdRmQcub9ctWm9MotpD74yEZ3mV1WOfN+BaS96OwZ7yGQ6cePVUBqT5jq8+ynYib8yGfEz69a+7ikzfsCmxP7ly+mfhCK2PsMk7Qzlb/f1J+3ITt0AgSIY1kCAkRAgAiIgAARECACAkRAgAgIEKsAiIAAERAgAgJEQIAIiIAAERAgAgJEQIBoNZDQqWwhdlkCAkRAgAiIgAARECACAkRAgAiIgAARECACAkRAgAiIgAARECACAkRAgAiIgAARECACAkRAgAgIEAERECACAkRAgAgIEAERECACAkRAgAgIEAERECACAkRAgAgIEAERECACAkRAgAgIEAERECACAkRAgAgIEAERECACAkRAgAgIEAERECACAkRAgAgIEAERECACAkRAgAgIEAERECACAkRAgAgIEAEBYhV8Vn8EGACid2JXDLnGHQAAAABJRU5ErkJggg=="}},["NHnr"]);