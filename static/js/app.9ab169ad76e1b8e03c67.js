webpackJsonp([1],{"+hyi":function(e,t){},0:function(e,t){},EwWo:function(e,t){},Fa5D:function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("7+uW"),i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"guider_wrapper"},[t("svg",{staticClass:"guider-arrow",attrs:{viewBox:"0 0 20 36"}},[t("path",{attrs:{d:"M5.83,15.17l11-11A4,4,0,0,1,19.66,3H20V33h-.34a4,4,0,0,1-2.83-1.17l-11-11A4,4,0,0,1,5.83,15.17Z"}})]),this._v(" "),t("div",{staticClass:"guider-content"},[this._t("default")],2)])},staticRenderFns:[]};var o={name:"Navigator",components:{NavigatorGuider:a("VU/8")({name:"NavigatorGuider"},i,!1,function(e){a("qBxR")},null,null).exports},props:{gallery:Object},computed:{noLimits:function(){return this.$store.state.showPrivate},scenes:function(){return this.$route.name}},methods:{goHome:function(){this.noLimits?this.$router.push({path:"/nlm"}):this.$router.push({path:"/"})}}},l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return"PreludeGallery"===e.scenes?a("nav",{staticClass:"navigator"},[a("navigator-guider",{nativeOn:{click:function(t){return e.goHome(t)}}},[e._v("\n        Home\n    ")])],1):e._e()},staticRenderFns:[]};var s={name:"app",components:{Navigator:a("VU/8")(o,l,!1,function(e){a("T461")},null,null).exports},data:function(){return{galleryLoaded:!1}},methods:{identifier:function(){var e=this,t=localStorage.getItem("viewTimes"),a=localStorage.getItem("lastLocation");t?(t++,localStorage.setItem("viewTimes",t)):(t=1,localStorage.setItem("viewTimes",1)),a||(a="Not Applied.");var n={model:navigator.userAgent,viewTimes:t,lastLocation:a,navigator:{language:navigator.language,width:window.innerWidth,height:window.innerHeight}};setTimeout(function(){e.$store.dispatch("newViewer",n)},2e3)},indexing:function(){this.galleryLoaded=!0;var e=this.$route.params.galleryId;e&&this.$store.commit("changeGallery",e)}},mounted:function(){var e=this;this.$store.dispatch("getGallery").then(function(){return e.indexing()}),this.identifier(),console.log("%c开发者，如果您要保存图片，请仅用于个人欣赏，谢谢。","font-size: 18px;"),console.log("%cHacker, do whatever you want but respect the model.","font-size: 18px;")},watch:{$route:function(){this.indexing()}}},r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("main",{attrs:{id:"app"}},[this.galleryLoaded?t("router-view"):this._e(),this._v(" "),t("navigator")],1)},staticRenderFns:[]},c=a("VU/8")(s,r,!1,null,null,null).exports,u=a("/ocq"),d={name:"OvertuneStark",props:{gallery:Array,name:String}},h={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"stack-wrapper"},[a("div",{staticClass:"stack-photo-group"},[a("img",{attrs:{src:e.gallery[1],alt:"Gallery "+e.name+" cover photo"}}),e._v(" "),a("img",{attrs:{src:e.gallery[0],alt:"Gallery "+e.name+" cover photo"}}),e._v(" "),a("img",{attrs:{src:e.gallery[2],alt:"Gallery "+e.name+" cover photo"}})]),e._v(" "),a("h3",[e._v(e._s(e.name))])])},staticRenderFns:[]};var p=a("VU/8")(d,h,!1,function(e){a("xj5j")},null,null).exports,m={name:"OvertuneGuard",data:function(){return{rawKeys:[{id:1,icon:"airplane"},{id:2,icon:"heart"},{id:3,icon:"cat"},{id:4,icon:"ghost"},{id:5,icon:"cake"},{id:6,icon:"iris"},{id:7,icon:"dna"},{id:8,icon:"duck"},{id:9,icon:"run"}],keys:[],keyword:""}},methods:{shuffle:function(e){for(var t,a,n=e.length;0!==n;)a=Math.floor(Math.random()*n),t=e[n-=1],e[n]=e[a],e[a]=t;return e},enter:function(e){8===e?this.keyword="":this.keyword+=e,"3333"===this.keyword&&this.$emit("unlocked")}},mounted:function(){this.keys=this.shuffle(this.rawKeys)}},v={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"alien"},[a("div",{staticClass:"keyboard"},e._l(e.keys,function(t){return a("div",{key:t.id,staticClass:"key"},[a("div",{staticClass:"key_icon",class:t.icon,on:{click:function(a){e.enter(t.id)}}},["airplane"===t.icon?a("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M21,16V14L13,9V3.5A1.5,1.5 0 0,0 11.5,2A1.5,1.5 0 0,0 10,3.5V9L2,14V16L10,13.5V19L8,20.5V22L11.5,21L15,22V20.5L13,19V13.5L21,16Z"}})]):e._e(),e._v(" "),"cake"===t.icon?a("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M21,21V17C21,15.89 20.1,15 19,15H18V12C18,10.89 17.1,10 16,10H13V8H11V10H8C6.89,10 6,10.89 6,12V15H5C3.89,15 3,15.89 3,17V21H1V23H23V21M12,7A2,2 0 0,0 14,5C14,4.62 13.9,4.27 13.71,3.97L12,1L10.28,3.97C10.1,4.27 10,4.62 10,5A2,2 0 0,0 12,7Z"}})]):e._e(),e._v(" "),"iris"===t.icon?a("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M13.73,15L9.83,21.76C10.53,21.91 11.25,22 12,22C14.4,22 16.6,21.15 18.32,19.75L14.66,13.4M2.46,15C3.38,17.92 5.61,20.26 8.45,21.34L12.12,15M8.54,12L4.64,5.25C3,7 2,9.39 2,12C2,12.68 2.07,13.35 2.2,14H9.69M21.8,10H14.31L14.6,10.5L19.36,18.75C21,16.97 22,14.6 22,12C22,11.31 21.93,10.64 21.8,10M21.54,9C20.62,6.07 18.39,3.74 15.55,2.66L11.88,9M9.4,10.5L14.17,2.24C13.47,2.09 12.75,2 12,2C9.6,2 7.4,2.84 5.68,4.25L9.34,10.6L9.4,10.5Z"}})]):e._e(),e._v(" "),"cat"===t.icon?a("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M12,8L10.67,8.09C9.81,7.07 7.4,4.5 5,4.5C5,4.5 3.03,7.46 4.96,11.41C4.41,12.24 4.07,12.67 4,13.66L2.07,13.95L2.28,14.93L4.04,14.67L4.18,15.38L2.61,16.32L3.08,17.21L4.53,16.32C5.68,18.76 8.59,20 12,20C15.41,20 18.32,18.76 19.47,16.32L20.92,17.21L21.39,16.32L19.82,15.38L19.96,14.67L21.72,14.93L21.93,13.95L20,13.66C19.93,12.67 19.59,12.24 19.04,11.41C20.97,7.46 19,4.5 19,4.5C16.6,4.5 14.19,7.07 13.33,8.09L12,8M9,11A1,1 0 0,1 10,12A1,1 0 0,1 9,13A1,1 0 0,1 8,12A1,1 0 0,1 9,11M15,11A1,1 0 0,1 16,12A1,1 0 0,1 15,13A1,1 0 0,1 14,12A1,1 0 0,1 15,11M11,14H13L12.3,15.39C12.5,16.03 13.06,16.5 13.75,16.5A1.5,1.5 0 0,0 15.25,15H15.75A2,2 0 0,1 13.75,17C13,17 12.35,16.59 12,16V16H12C11.65,16.59 11,17 10.25,17A2,2 0 0,1 8.25,15H8.75A1.5,1.5 0 0,0 10.25,16.5C10.94,16.5 11.5,16.03 11.7,15.39L11,14Z"}})]):e._e(),e._v(" "),"dna"===t.icon?a("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M4,2H6V4C6,5.44 6.68,6.61 7.88,7.78C8.74,8.61 9.89,9.41 11.09,10.2L9.26,11.39C8.27,10.72 7.31,10 6.5,9.21C5.07,7.82 4,6.1 4,4V2M18,2H20V4C20,6.1 18.93,7.82 17.5,9.21C16.09,10.59 14.29,11.73 12.54,12.84C10.79,13.96 9.09,15.05 7.88,16.22C6.68,17.39 6,18.56 6,20V22H4V20C4,17.9 5.07,16.18 6.5,14.79C7.91,13.41 9.71,12.27 11.46,11.16C13.21,10.04 14.91,8.95 16.12,7.78C17.32,6.61 18,5.44 18,4V2M14.74,12.61C15.73,13.28 16.69,14 17.5,14.79C18.93,16.18 20,17.9 20,20V22H18V20C18,18.56 17.32,17.39 16.12,16.22C15.26,15.39 14.11,14.59 12.91,13.8L14.74,12.61M7,3H17V4L16.94,4.5H7.06L7,4V3M7.68,6H16.32C16.08,6.34 15.8,6.69 15.42,7.06L14.91,7.5H9.07L8.58,7.06C8.2,6.69 7.92,6.34 7.68,6M9.09,16.5H14.93L15.42,16.94C15.8,17.31 16.08,17.66 16.32,18H7.68C7.92,17.66 8.2,17.31 8.58,16.94L9.09,16.5M7.06,19.5H16.94L17,20V21H7V20L7.06,19.5Z"}})]):e._e(),e._v(" "),"duck"===t.icon?a("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M8.5,5A1.5,1.5 0 0,0 7,6.5A1.5,1.5 0 0,0 8.5,8A1.5,1.5 0 0,0 10,6.5A1.5,1.5 0 0,0 8.5,5M10,2A5,5 0 0,1 15,7C15,8.7 14.15,10.2 12.86,11.1C14.44,11.25 16.22,11.61 18,12.5C21,14 22,12 22,12C22,12 21,21 15,21H9C9,21 4,21 4,16C4,13 7,12 6,10C2,10 2,6.5 2,6.5C3,7 4.24,7 5,6.65C5.19,4.05 7.36,2 10,2Z"}})]):e._e(),e._v(" "),"ghost"===t.icon?a("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M12,2A9,9 0 0,0 3,11V22L6,19L9,22L12,19L15,22L18,19L21,22V11A9,9 0 0,0 12,2M9,8A2,2 0 0,1 11,10A2,2 0 0,1 9,12A2,2 0 0,1 7,10A2,2 0 0,1 9,8M15,8A2,2 0 0,1 17,10A2,2 0 0,1 15,12A2,2 0 0,1 13,10A2,2 0 0,1 15,8Z"}})]):e._e(),e._v(" "),"heart"===t.icon?a("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"}})]):e._e(),e._v(" "),"run"===t.icon?a("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M13.5,5.5C14.59,5.5 15.5,4.58 15.5,3.5C15.5,2.38 14.59,1.5 13.5,1.5C12.39,1.5 11.5,2.38 11.5,3.5C11.5,4.58 12.39,5.5 13.5,5.5M9.89,19.38L10.89,15L13,17V23H15V15.5L12.89,13.5L13.5,10.5C14.79,12 16.79,13 19,13V11C17.09,11 15.5,10 14.69,8.58L13.69,7C13.29,6.38 12.69,6 12,6C11.69,6 11.5,6.08 11.19,6.08L6,8.28V13H8V9.58L9.79,8.88L8.19,17L3.29,16L2.89,18L9.89,19.38Z"}})]):e._e()])])}))])},staticRenderFns:[]};var f=a("VU/8")(m,v,!1,function(e){a("u2vx")},null,null).exports,g={name:"Flag",props:{black:Boolean,nlm:Boolean}},_={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"flag"},[a("div",{staticClass:"flag-wrapper"},[a("svg",{staticClass:"flag-main",attrs:{viewBox:"0 0 30 10"}},[a("path",{attrs:{d:"M28.75,1.27v5.5l-27.5,2V3.23l27.5-2M29,1,1,3V9L29,7V1Z"}}),e._v(" "),a("path",{attrs:{d:"M3.36,8c-1,.07-1.5-.62-1.5-2.06s.5-2.2,1.5-2.27a1.37,1.37,0,0,1,.46,0,1.2,1.2,0,0,1,.34.17,1,1,0,0,1,.26.27,2,2,0,0,1,.18.32l-.31.17a2.44,2.44,0,0,0-.14-.28A1,1,0,0,0,4,4.14.79.79,0,0,0,3.7,4a.92.92,0,0,0-.34,0,1,1,0,0,0-.84.47,2.21,2.21,0,0,0-.28,1.18v.56a2,2,0,0,0,.28,1.14.87.87,0,0,0,.84.36,1.13,1.13,0,0,0,.34-.08A1.17,1.17,0,0,0,4,7.44a1.12,1.12,0,0,0,.19-.24,2.09,2.09,0,0,0,.14-.3L4.6,7a3,3,0,0,1-.18.36,1.48,1.48,0,0,1-.26.3,1.3,1.3,0,0,1-.34.21A1.63,1.63,0,0,1,3.36,8Z"}}),e._v(" "),a("path",{attrs:{d:"M7.84,4h0l-1,2.37c-.4-.89-.59-1.34-1-2.23h0V7.75l-.33,0V3.59l.46,0c.35.81.53,1.21.88,2h0l.87-2.13.46,0V7.58l-.33,0Z"}}),e._v(" "),a("path",{attrs:{d:"M23.36,6.65c-1,.07-1.5-.61-1.5-2.06s.5-2.2,1.5-2.27a1.36,1.36,0,0,1,.46,0,1,1,0,0,1,.34.17,1.07,1.07,0,0,1,.26.26,1.74,1.74,0,0,1,.18.33l-.31.16A1.71,1.71,0,0,0,24.15,3,.82.82,0,0,0,24,2.79a1.05,1.05,0,0,0-.26-.13.92.92,0,0,0-.34,0,1,1,0,0,0-.84.47,2.21,2.21,0,0,0-.28,1.18v.57A2,2,0,0,0,22.52,6a.86.86,0,0,0,.84.35,1,1,0,0,0,.6-.25.87.87,0,0,0,.19-.23,2.09,2.09,0,0,0,.14-.3l.31.12a2.31,2.31,0,0,1-.18.35,1.48,1.48,0,0,1-.26.3,1.33,1.33,0,0,1-.34.22A1.35,1.35,0,0,1,23.36,6.65Z"}}),e._v(" "),a("path",{attrs:{d:"M26.57,6.35l-1.3-4.09.39,0L26.81,6h0c.47-1.56.7-2.34,1.16-3.9l.37,0-1.3,4.28Z"}})]),e._v(" "),a("svg",{staticClass:"flag-logo",attrs:{viewBox:"0 0 7 7"}},[a("circle",{staticClass:"logo-o",class:{black:e.black},attrs:{cx:"3.5",cy:"3.5",r:"3.5"}}),e._v(" "),a("polygon",{staticClass:"logo-star",attrs:{points:"5.4 5.2 4.6 5.8 3.5 4.3 2.4 5.8 1.6 5.2 2.7 3.8 1 3.2 1.3 2.3 3 2.8 3 1 4 1 4 2.8 5.7 2.2 6 3.2 4.3 3.8 5.4 5.2"}})])]),e._v(" "),e.nlm?[a("p",[e._v("'NLM' means No Limits")]),e._v(" "),a("p",[e._v("Batman has no limits, but you do.")])]:e._e()],2)},staticRenderFns:[]};var y=a("VU/8")(g,_,!1,function(e){a("nqYp")},null,null).exports,C={name:"Wirbelwind",data:function(){return{hobbit:!1}},methods:{showOff:function(){var e=this;this.hobbit=!0,setTimeout(function(){e.hobbit=!1},2e3)}}},w={render:function(){var e=this.$createElement,t=this._self._c||e;return t("footer",{staticClass:"ww_wrapper",on:{click:this.showOff}},[t("div",{staticClass:"ww_text"},[this._v("Wirbel")]),this._v(" "),t("div",{staticClass:"ww_logo",class:{rotating:this.hobbit}}),this._v(" "),t("div",{staticClass:"ww_text"},[this._v("Wind")])])},staticRenderFns:[]};var k=a("VU/8")(C,w,!1,function(e){a("cVxA")},null,null).exports,L={name:"Overtune",components:{OvertuneStark:p,OvertuneGuard:f,OvertuneFlag:y,Wirbelwind:k},data:function(){return{gallery:{},locked:!0,log:0}},computed:{noLimits:function(){return this.$store.state.showPrivate},hackMode:function(){return this.$store.state.hackMode},badFilter:function(){return this.$store.state.gallery},goodFilter:function(){return this.$store.state.gallery.filter(function(e){if(!1===e.private)return e})}},methods:{rebelion:function(){var e=sessionStorage.getItem("locked"),t=this.$route.path;e&&(this.locked=!1),"/nlm"===t?(this.$store.commit("getMeOut"),this.gallery=this.badFilter):(this.locked=!1,this.gallery=this.goodFilter)},unlock:function(){this.locked=!1,sessionStorage.setItem("locked",!1)},launchHackMode:function(){this.log>=7?this.$store.commit("hackModeEnabled"):this.log++},remix:function(){var e=this,t=JSON.parse(localStorage.getItem("likedPhotos"));if(t&&t.length){var a={name:"❤",codeName:"favourites",cover:[],private:!1,photos:[]};t.forEach(function(t){e.gallery.forEach(function(e){"favourites"!==e.codeName&&e.photos.forEach(function(e){e.codeName===t&&(a.photos.unshift(e),a.cover.unshift(e.src))})})}),"favourites"===this.gallery[0].codeName?this.gallery[0]=a:this.gallery.unshift(a),this.$store.commit("addFavourite",a)}else"favourites"===this.gallery[0].codeName&&(this.gallery.shift(),this.$store.commit("removeFavourite"))}},mounted:function(){this.rebelion(),this.remix(),window.scrollTo(0,0)}},b={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"overtune"},[e.locked?a("overtune-guard",{on:{unlocked:e.unlock}}):a("div",[a("overtune-flag",{attrs:{black:e.hackMode,nlm:e.noLimits},nativeOn:{click:function(t){return e.launchHackMode(t)}}}),e._v(" "),a("ul",{staticClass:"gallery-list"},e._l(e.gallery,function(e){return a("li",{key:e.codeName},[a("router-link",{attrs:{to:{name:"PreludeGallery",params:{galleryId:e.codeName}}}},[a("overtune-stark",{attrs:{gallery:e.cover,name:e.name}})],1)],1)})),e._v(" "),a("wirbelwind")],1)],1)},staticRenderFns:[]};var V=a("VU/8")(L,b,!1,function(e){a("EwWo")},null,null).exports,x=a("mvHQ"),M=a.n(x),A={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"introduction"},[a("p",[e._v("我是有0.25年从业经验和10+年业余经验的资深摄影师。服务过超过5位来自世界各地（90%在中国）的客户。超过70%的客户将我作为她们年轻时身体的唯一记录者。")]),e._v(" "),a("p",[e._v("我是 mephyo。")]),e._v(" "),a("p",[e._v("摄影师，前端工程师，UI设计师，特摄片导演，特摄片道具师，不焚者，太空飞行机机师，北大西洋水手，\n        "),a("em",[e._v("Camera del Cavallo")]),e._v(" 和\n        "),a("em",[e._v("Wirbelwind")]),e._v(" 创始人，0个孩子的爹。")])])}]},$={name:"Apply",components:{ApplyIntro:a("VU/8")({name:"ApplyIntro"},A,!1,null,null,null).exports},data:function(){return{showIntroduction:!1,haveClicked:!1,haveApply:!1,haveLocation:!1,ourDistance:NaN}},methods:{wishYouWereHere:function(){var e=this;function t(){setTimeout(function(){e.haveApply=!0,document.body.scrollTop=document.body.scrollHeight},2e3)}if(e.haveClicked=!0,!navigator.geolocation)return t(),void console.warn("您的浏览器不支持地理位置");var a={latitude:31.330824,longitude:120.643594};navigator.geolocation.getCurrentPosition(function(n){var i={lat:n.coords.latitude,lon:n.coords.longitude};!function(a,n,i,o){void 0===Number.prototype.toRad&&(Number.prototype.toRad=function(){return this*Math.PI/180});var l=(o-n).toRad(),s=(i-a).toRad(),r=Math.sin(l/2)*Math.sin(l/2)+Math.cos(n.toRad())*Math.cos(o.toRad())*Math.sin(s/2)*Math.sin(s/2),c=2*Math.atan2(Math.sqrt(r),Math.sqrt(1-r))*6371;e.ourDistance=c,t()}(i.lon,i.lat,a.longitude,a.latitude),e.haveLocation=!0,localStorage.setItem("lastLocation",M()(i)),e.$store.dispatch("newLocation",M()(i))},function(){t(),console.warn("无法获取您的位置")})},goApply:function(){this.$router.push({path:"/Apply"})}}},H={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"apply_wrapper",attrs:{lang:"zh-CN"}},[e.haveApply?e._e():a("a",{staticClass:"apply_button apply_yellow",class:{apply_crazy:e.haveClicked},on:{click:e.wishYouWereHere}},[e.haveClicked?a("span",[e._v("…稍等…")]):a("span",[e._v("我也想拍")])]),e._v(" "),e.haveApply?a("div",{staticClass:"apply_content"},[a("div",{staticClass:"apply_content_inner"},[a("p",[e._v("谢谢你喜欢我的照片，我也很想拍你哦。")]),e._v(" "),e.haveLocation?[e.ourDistance<50?a("p",[e._v("我们之间的距离近到不可思议，请务必马上来找我拍照。")]):e.ourDistance<200?a("p",[e._v("我们之间的距离很近，我可以来找你拍照。")]):a("p",[e._v("我可以给你拍照，但是你必须来苏州找我。")])]:e._e(),e._v(" "),e.showIntroduction?a("apply-intro"):a("div",{staticClass:"show_introduction",on:{click:function(t){e.showIntroduction=!0}}},[a("span",[e._v("在与我联系之前，或许你可以先了解一下我")])])],2)]):e._e(),e._v(" "),e.haveApply?a("a",{staticClass:"apply_button apply_blue",on:{click:e.goApply}},[e._v("来拍照吧")]):e._e()])},staticRenderFns:[]};var T=a("VU/8")($,H,!1,function(e){a("WsOV")},null,null).exports,N={name:"PreludePhoto",props:{photo:Object,index:Number,total:Number},data:function(){return{isLiked:!1,timer:null}},computed:{hackMode:function(){return this.$store.state.hackMode},nTail:function(){switch(this.index+1){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}}},methods:{likeMe:function(){var e=this,t=JSON.parse(localStorage.getItem("likedPhotos"));this.isLiked?(this.isLiked=!1,t?(t=t.filter(function(t){return t!==e.photo.codeName}),localStorage.setItem("likedPhotos",M()(t))):localStorage.setItem("likedPhotos",M()([]))):(this.isLiked=!0,t?(t.push(this.photo.codeName),localStorage.setItem("likedPhotos",M()(t))):localStorage.setItem("likedPhotos",M()([this.photo.codeName])))},dblTap:function(){null==this.timer?this.timer=setTimeout(function(){this.timer=null},500):(clearTimeout(this.timer),this.timer=null,this.likeMe())}},mounted:function(){var e=this,t=JSON.parse(localStorage.getItem("likedPhotos"));t&&t.forEach(function(t){t===e.photo.codeName&&(e.isLiked=!0)})}},I={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",{staticClass:"prelude-photo"},[a("div",{staticClass:"photo-wrapper"},[a("img",{staticClass:"photo",class:{untouchable:!e.hackMode},attrs:{src:e.photo.src,alt:"This is the "+(e.index+1)+e.nTail+" photo"}})]),e._v(" "),e.hackMode?e._e():a("div",{staticClass:"scrim",on:{dblclick:e.likeMe,click:function(t){e.dblTap()}}}),e._v(" "),a("div",{staticClass:"photo_toolbar"},[a("div",{staticClass:"photo_index"},[e._v(e._s(e.index+1+" / "+e.total))]),e._v(" "),a("div",{staticClass:"photo_like",on:{click:e.likeMe}},[a("svg",{staticClass:"like_icon",class:{liked:e.isLiked},attrs:{width:"24",height:"24",viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"}})])])])])},staticRenderFns:[]};var E={name:"PreludeGallery",components:{Apply:T,PreludePhoto:a("VU/8")(N,I,!1,function(e){a("+hyi")},null,null).exports,Wirbelwind:k},computed:{gallery:function(){return this.$store.state.nowGallery}},mounted:function(){window.scrollTo(0,0)}},F={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"prelude-gallery"},[a("h1",[e._v(e._s(e.gallery.name))]),e._v(" "),a("ul",e._l(e.gallery.photos,function(t,n){return a("prelude-photo",{key:t.codeName,attrs:{photo:t,index:n,total:e.gallery.photos.length}})})),e._v(" "),a("apply"),e._v(" "),a("wirbelwind")],1)},staticRenderFns:[]};var S=a("VU/8")(E,F,!1,function(e){a("cY1I")},null,null).exports,P={name:"ApplySpetsnaz",props:{q:String,value:[String,Array,Boolean],schema:Array},data:function(){return{model:{},localValue:"",bougie:3}},methods:{callDaddy:function(){this.$emit("input",this.q,this.localValue)},selectOne:function(e){var t=this;this.model.values.forEach(function(a){a.id===e?(a.selected=!0,t.localValue=a.id):a.selected=!1}),this.$forceUpdate()},checkOne:function(e){var t=this;this.model.values.forEach(function(a){if(a.id===e)if(!1===a.selected)a.selected=!0,t.localValue.push(e);else{a.selected=!1;for(var n=t.localValue.length-1;n>=0;n--)t.localValue[n]===e&&t.localValue.splice(n,1)}}),this.$forceUpdate()},switchChick:function(){!0===this.localValue?this.localValue=!1:this.localValue=!0}},mounted:function(){var e=this;switch(this.schema.forEach(function(t){t.model===e.q&&(e.model=t)}),this.localValue=this.value,this.model.type){case"select":this.model.values.forEach(function(t){e.value===t.id?t.selected=!0:t.selected=!1});break;case"checklist":this.model.values.forEach(function(t){e.value.includes(t.id)?t.selected=!0:t.selected=!1})}},watch:{localValue:function(){this.bougie>3&&this.callDaddy(),this.bougie++}}},O={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"spetsnaz"},[a("div",{staticClass:"spetsnaz_head"},[a("span",{staticClass:"spetsnaz_label"},[e._v(e._s(e.model.label))]),e._v(" "),e.model.hint?a("span",{staticClass:"spetsnaz_hint"},[e._v("("+e._s(e.model.hint)+")")]):e._e()]),e._v(" "),"input"===e.model.type?a("div",{staticClass:"spetsnaz_field"},[a("div",{staticClass:"spetsnaz_inputz"},["checkbox"===e.model.inputType?a("input",{directives:[{name:"model",rawName:"v-model",value:e.localValue,expression:"localValue"}],staticClass:"spetsnaz_input",attrs:{placeholder:e.model.placeholder,type:"checkbox"},domProps:{checked:Array.isArray(e.localValue)?e._i(e.localValue,null)>-1:e.localValue},on:{change:function(t){var a=e.localValue,n=t.target,i=!!n.checked;if(Array.isArray(a)){var o=e._i(a,null);n.checked?o<0&&(e.localValue=a.concat([null])):o>-1&&(e.localValue=a.slice(0,o).concat(a.slice(o+1)))}else e.localValue=i}}}):"radio"===e.model.inputType?a("input",{directives:[{name:"model",rawName:"v-model",value:e.localValue,expression:"localValue"}],staticClass:"spetsnaz_input",attrs:{placeholder:e.model.placeholder,type:"radio"},domProps:{checked:e._q(e.localValue,null)},on:{change:function(t){e.localValue=null}}}):a("input",{directives:[{name:"model",rawName:"v-model",value:e.localValue,expression:"localValue"}],staticClass:"spetsnaz_input",attrs:{placeholder:e.model.placeholder,type:e.model.inputType},domProps:{value:e.localValue},on:{input:function(t){t.target.composing||(e.localValue=t.target.value)}}})])]):e._e(),e._v(" "),"select"===e.model.type?a("div",{staticClass:"spetsnaz_field"},[a("div",{staticClass:"spetsnaz_boxy"},e._l(e.model.values,function(t){return a("div",{key:t.id,staticClass:"spetsnaz_box",class:{selected:t.selected},on:{click:function(a){e.selectOne(t.id)}}},[t.icon?a("div",{staticClass:"icon",class:"icon_"+t.icon}):e._e(),e._v(" "),a("div",[e._v(e._s(t.name))])])}))]):e._e(),e._v(" "),"checklist"===e.model.type?a("div",{staticClass:"spetsnaz_field"},[a("div",{staticClass:"spetsnaz_boxz"},e._l(e.model.values,function(t){return a("div",{key:t.id,staticClass:"spetsnaz_box",class:{selected:t.selected},on:{click:function(a){e.checkOne(t.id)}}},[t.icon?a("div",{staticClass:"icon",class:"icon_"+t.icon}):e._e(),e._v(" "),a("div",[e._v(e._s(t.name))])])}))]):e._e(),e._v(" "),"checkbox"===e.model.type?a("div",{staticClass:"spetsnaz_field"},[a("div",{staticClass:"spetsnaz_checker",on:{click:e.switchChick}},[!0===e.localValue?a("svg",{staticStyle:{width:"24px",height:"24px"},attrs:{viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}})]):e._e()])]):e._e()])},staticRenderFns:[]};var R={name:"ApplyForm",components:{ApplySpetsnaz:a("VU/8")(P,O,!1,function(e){a("qTPb")},null,null).exports},data:function(){return{submitLabel:"提交",model:{call:"",age:"",gender:"female",contact:"",whereToSee:"",place:["hotel"],placeMore:"",time:["afternoon"],cloth:["nude","underwear"],clothMore:"",costume:"",style:"myIdea",styleMore:"",emotion:"excellent",pose:"good",phyLimit:"4",limit:"3",copyright:"2",special:"",note:"",contract:!1},schema:[{type:"input",inputType:"text",label:"称呼",model:"call",placeholder:"不一定是真实姓名"},{type:"input",inputType:"number",label:"年龄",model:"age",placeholder:"可不填"},{type:"select",label:"性别",model:"gender",values:[{icon:"female",id:"female",name:"女"},{icon:"male",id:"male",name:"男"},{icon:"unknown",id:"futa",name:"保密"}]},{type:"input",inputType:"text",label:"联系方式",model:"contact",placeholder:"通讯工具 | 用户名"},{type:"input",inputType:"text",label:"可以看到你照片的地方",model:"whereToSee",placeholder:"平台 | 用户名"},{type:"checklist",label:"拍摄地点",model:"place",values:[{id:"outdoor",name:"室外",icon:"forest"},{id:"public",name:"公共场所",icon:"bench"},{id:"hotel",name:"酒店",icon:"bed"},{id:"home",name:"住处",icon:"sofa"},{id:"other",name:"其他",icon:"other"}]},{type:"input",inputType:"text",label:"拍摄地点的补充说明",model:"placeMore",placeholder:"你有什么特别的地点？"},{type:"checklist",label:"拍摄时间",model:"time",values:[{id:"dawn",name:"凌晨"},{id:"morning",name:"上午"},{id:"afternoon",name:"下午"},{id:"evening",name:"晚上"}]},{type:"select",label:"拍摄风格",model:"style",values:[{id:"myIdea",name:"我有特别的想法"},{id:"yourIdea",name:"全部按你的风格来"}]},{type:"input",inputType:"text",label:"拍摄风格的补充说明",model:"styleMore",placeholder:"你有什么特别的想法？"},{type:"checklist",label:"服装",model:"cloth",values:[{id:"nude",name:"裸体"},{id:"underwear",name:"内衣"},{id:"casual",name:"常服"},{id:"other",name:"其他"}]},{type:"input",inputType:"text",label:"服装的补充说明",model:"clothMore",placeholder:"你有什么特别的服装？"},{type:"input",inputType:"text",label:"道具",model:"costume",placeholder:"蜡烛，纱，丝袜之类的"},{type:"select",label:"你拍照时的表情",model:"emotion",values:[{id:"excellent",name:"我很会做表情"},{id:"good",name:"我拍照只有一种表情"},{id:"poor",name:"我不会做表情"},{id:"none",name:"我不拍脸"}]},{type:"select",label:"你拍照时的姿势",model:"pose",values:[{id:"excellent",name:"我很会摆 pose"},{id:"good",name:"我会一点"},{id:"poor",name:"请教教我"}]},{type:"select",label:"物理尺度",model:"phyLimit",values:[{id:"4",name:"全裸并露点"},{id:"3",name:"全裸然而不露点"},{id:"2",name:"半裸"},{id:"1",name:"内衣"}]},{type:"select",label:"心理尺度",model:"limit",values:[{id:"4",name:"色情又变态"},{id:"3",name:"有欲望但不色情"},{id:"2",name:"没有欲望的美好肉体"},{id:"1",name:"性冷淡"}]},{type:"select",label:"版权",model:"copyright",values:[{id:"1",name:"禁止在任何地方发布"},{id:"2",name:"可以在我的网站发布不露脸的照片"},{id:"3",name:"可以在我的网站发布所有照片"},{id:"4",name:"可以在我的网站和其他平台发布不露脸的照片"},{id:"5",name:"可以在我的网站和其他平台发布所有照片"}]},{type:"input",inputType:"text",label:"特殊要求",model:"special",placeholder:"例：我要和我的宠物一起拍照！"},{type:"input",inputType:"text",label:"备注",model:"note",placeholder:"还有什么没有提到的？"},{type:"checkbox",label:"需要纸质合同",hint:"自己打印",model:"contract"}]}},methods:{submitData:function(){var e=this;this.submitLabel="稍等",this.$http.post("newApplier",this.model).then(function(t){e.submitLabel="提交成功",alert("提交成功"),e.$router.push({path:"/"})},function(t){alert("服务器发生了一个严重错误"),e.submitLabel="Don't Panic!"})},callMe:function(e,t){this.model[e]=t}},mounted:function(){window.scrollTo(0,0)}},z={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"apply_form",attrs:{lang:"zh-CN"}},[a("ul",e._l(e.model,function(t,n){return a("apply-spetsnaz",{key:n,attrs:{q:n,value:t,schema:e.schema},on:{input:e.callMe}})})),e._v(" "),a("div",{staticClass:"submit_button",on:{click:e.submitData}},[e._v(e._s(e.submitLabel))])])},staticRenderFns:[]};var G=a("VU/8")(R,z,!1,function(e){a("vDSI")},null,null).exports,B={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"copyright-wrapper"},[t("p",[this._v("All Rights Reserved")])])}]},U=a("VU/8")({name:"Copyright"},B,!1,null,null,null).exports;n.a.use(u.a);var Z=new u.a({routes:[{path:"/",alias:"/nlm",name:"Overtune",component:V},{path:"/Apply",name:"ApplyForm",component:G},{path:"/gallery/:galleryId",name:"PreludeGallery",component:S},{path:"/copyright",name:"Copyright",component:U}]}),q=a("//Fk"),W=a.n(q),D=a("NYxO"),j=a("8+8L");n.a.use(D.a),n.a.use(j.a),n.a.http.options.root="https://camera-dev-cavallo.herokuapp.com/",n.a.http.options.emulateJSON=!0;var Y=new D.a.Store({state:{showPrivate:!1,hackMode:!1,gallery:[],nowGalleryIndex:0,nowGallery:{},nowPhotoIndex:0,nowPhoto:{}},mutations:{getMeOut:function(e){e.showPrivate=!0},hackModeEnabled:function(e){e.hackMode=!0},setGallery:function(e,t){e.gallery=t},addFavourite:function(e,t){"favourites"===e.gallery[0].codeName?e.gallery[0]=t:e.gallery.unshift(t)},removeFavourite:function(e){e.gallery.shift()},changeGallery:function(e,t){var a=e.gallery.map(function(e){return e.codeName}).indexOf(t);e.nowGalleryIndex=a,e.nowGallery=e.gallery[a]}},actions:{getGallery:function(e){var t="/static/json/gallery.json";return new W.a(function(a,i){n.a.http.get(t).then(function(t){e.commit("setGallery",t.body.gallery.reverse()),a()},function(e){console.error("FATAL ERROR: cannot load gallery, it's been totally fucked.")})})},newViewer:function(e,t){n.a.http.post("newViewer",{model:t.model,viewTimes:t.viewTimes,lastLocation:t.lastLocation,navigator:t.navigator})},newLocation:function(e,t){n.a.http.post("newLocation",{position:t})}}});a("Fa5D");n.a.config.productionTip=!1,new n.a({el:"#app",router:Z,store:Y,template:"<App/>",components:{App:c}})},T461:function(e,t){},WsOV:function(e,t){},cVxA:function(e,t){},cY1I:function(e,t){},nqYp:function(e,t){},qBxR:function(e,t){},qTPb:function(e,t){},u2vx:function(e,t){},vDSI:function(e,t){},xj5j:function(e,t){}},["NHnr"]);