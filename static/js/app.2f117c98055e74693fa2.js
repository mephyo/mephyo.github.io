webpackJsonp([1],{0:function(e,t){},Fa5D:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("7+uW"),a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"guider_wrapper"},[t("div",{staticClass:"icon icon_left"}),this._v(" "),t("div",{staticClass:"guider_content"},[this._t("default")],2)])},staticRenderFns:[]},s={name:"Navigator",components:{Guider:n("VU/8")({name:"Guider"},a,!1,null,null,null).exports},props:{gallery:Object},computed:{noLimits:function(){return this.$store.state.showPrivate},scenes:function(){return this.$route.name}},methods:{goHome:function(){this.noLimits?this.$router.push({path:"/nlm"}):this.$router.push({path:"/"})}}},o={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return"Overtune"!==e.scenes?n("nav",{staticClass:"navigator"},["SingleGallery"===e.scenes?n("div",{staticClass:"navigator_content_wrapper"},[n("guider",{nativeOn:{click:function(t){e.goHome(t)}}},[n("div",{staticClass:"logo"})])],1):e._e()]):e._e()},staticRenderFns:[]},l={name:"app",components:{Navigator:n("VU/8")(s,o,!1,null,null,null).exports},data:function(){return{galleryLoaded:!1}},methods:{identifier:function(){var e=this,t=localStorage.getItem("viewTimes"),n=localStorage.getItem("lastLocation");t?(t++,localStorage.setItem("viewTimes",t)):(t=1,localStorage.setItem("viewTimes",1)),n||(n="Not Applied.");var i={model:navigator.userAgent,viewTimes:t,lastLocation:n};setTimeout(function(){e.$store.dispatch("newViewer",i)},2e3)},indexing:function(){this.galleryLoaded=!0;var e=this.$route.params.galleryId;e&&this.$store.commit("changeGallery",e)}},mounted:function(){var e=this;this.$store.dispatch("getGallery").then(function(){return e.indexing()}),this.identifier(),console.log("%c开发者，如果您要保存图片，请仅用于个人欣赏，谢谢。","font-size: 16px;")},watch:{$route:function(){this.indexing()}}},r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("main",{attrs:{id:"app"}},[this.galleryLoaded?t("router-view"):this._e(),this._v(" "),t("navigator")],1)},staticRenderFns:[]},c=n("VU/8")(l,r,!1,null,null,null).exports,h=n("/ocq"),d={name:"Stark",props:{gallery:Array,name:String},data:function(){return{revenge:0}},computed:{robb:function(){return{transform:"rotate("+12*this.revenge+"deg) translateX("+48*this.revenge+"px) translateZ(0)"}},bran:function(){return{transform:"rotate("+-6*this.revenge+"deg) translateX("+-48*this.revenge+"px) translateZ(0)"}},rickon:function(){return{transform:"translateY("+-4*this.revenge+"px) translateZ(0)"}},katherine:function(){return{opacity:.75-this.revenge,transform:"translateY("+4*this.revenge+"px) translateZ(0)"}}},methods:{northenInvading:function(){var e=window.innerHeight/2,t=this.$refs.stark.getBoundingClientRect().y+100;t<0?t=0:t>window.innerHeight&&(t=window.innerHeight);var n=Math.abs(e-t);this.revenge=1-n/e}},created:function(){window.addEventListener("scroll",this.northenInvading)},destroyed:function(){window.removeEventListener("scroll",this.northenInvading)},mounted:function(){var e=this;setTimeout(function(){e.northenInvading()},1e3)}},u={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{ref:"stark",staticClass:"king-in-the-north"},[t("img",{staticClass:"stark",style:this.robb,attrs:{src:this.gallery[2]}}),this._v(" "),t("img",{staticClass:"stark",style:this.bran,attrs:{src:this.gallery[1]}}),this._v(" "),t("img",{staticClass:"stark",style:this.rickon,attrs:{src:this.gallery[0]}}),this._v(" "),t("h3",{staticClass:"tully",style:this.katherine},[this._v(this._s(this.name))])])},staticRenderFns:[]},p=n("VU/8")(d,u,!1,null,null,null).exports,m={name:"Alien",data:function(){return{rawKeys:[{id:1,icon:"airplane"},{id:2,icon:"heart"},{id:3,icon:"cat"},{id:4,icon:"ghost"},{id:5,icon:"cake"},{id:6,icon:"iris"},{id:7,icon:"dna"},{id:8,icon:"duck"},{id:9,icon:"run"}],keys:[],keyword:""}},methods:{shuffle:function(e){for(var t,n,i=e.length;0!==i;)n=Math.floor(Math.random()*i),t=e[i-=1],e[i]=e[n],e[n]=t;return e},enter:function(e){8===e?this.keyword="":this.keyword+=e,"33333"===this.keyword&&this.$emit("unlocked")}},mounted:function(){this.keys=this.shuffle(this.rawKeys)}},v={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"alien"},[n("div",{staticClass:"keyboard"},e._l(e.keys,function(t){return n("div",{key:t.id,staticClass:"key"},[n("div",{staticClass:"key_icon",class:t.icon,on:{click:function(n){e.enter(t.id)}}},["airplane"===t.icon?n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M21,16V14L13,9V3.5A1.5,1.5 0 0,0 11.5,2A1.5,1.5 0 0,0 10,3.5V9L2,14V16L10,13.5V19L8,20.5V22L11.5,21L15,22V20.5L13,19V13.5L21,16Z"}})]):e._e(),e._v(" "),"cake"===t.icon?n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M21,21V17C21,15.89 20.1,15 19,15H18V12C18,10.89 17.1,10 16,10H13V8H11V10H8C6.89,10 6,10.89 6,12V15H5C3.89,15 3,15.89 3,17V21H1V23H23V21M12,7A2,2 0 0,0 14,5C14,4.62 13.9,4.27 13.71,3.97L12,1L10.28,3.97C10.1,4.27 10,4.62 10,5A2,2 0 0,0 12,7Z"}})]):e._e(),e._v(" "),"iris"===t.icon?n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M13.73,15L9.83,21.76C10.53,21.91 11.25,22 12,22C14.4,22 16.6,21.15 18.32,19.75L14.66,13.4M2.46,15C3.38,17.92 5.61,20.26 8.45,21.34L12.12,15M8.54,12L4.64,5.25C3,7 2,9.39 2,12C2,12.68 2.07,13.35 2.2,14H9.69M21.8,10H14.31L14.6,10.5L19.36,18.75C21,16.97 22,14.6 22,12C22,11.31 21.93,10.64 21.8,10M21.54,9C20.62,6.07 18.39,3.74 15.55,2.66L11.88,9M9.4,10.5L14.17,2.24C13.47,2.09 12.75,2 12,2C9.6,2 7.4,2.84 5.68,4.25L9.34,10.6L9.4,10.5Z"}})]):e._e(),e._v(" "),"cat"===t.icon?n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M12,8L10.67,8.09C9.81,7.07 7.4,4.5 5,4.5C5,4.5 3.03,7.46 4.96,11.41C4.41,12.24 4.07,12.67 4,13.66L2.07,13.95L2.28,14.93L4.04,14.67L4.18,15.38L2.61,16.32L3.08,17.21L4.53,16.32C5.68,18.76 8.59,20 12,20C15.41,20 18.32,18.76 19.47,16.32L20.92,17.21L21.39,16.32L19.82,15.38L19.96,14.67L21.72,14.93L21.93,13.95L20,13.66C19.93,12.67 19.59,12.24 19.04,11.41C20.97,7.46 19,4.5 19,4.5C16.6,4.5 14.19,7.07 13.33,8.09L12,8M9,11A1,1 0 0,1 10,12A1,1 0 0,1 9,13A1,1 0 0,1 8,12A1,1 0 0,1 9,11M15,11A1,1 0 0,1 16,12A1,1 0 0,1 15,13A1,1 0 0,1 14,12A1,1 0 0,1 15,11M11,14H13L12.3,15.39C12.5,16.03 13.06,16.5 13.75,16.5A1.5,1.5 0 0,0 15.25,15H15.75A2,2 0 0,1 13.75,17C13,17 12.35,16.59 12,16V16H12C11.65,16.59 11,17 10.25,17A2,2 0 0,1 8.25,15H8.75A1.5,1.5 0 0,0 10.25,16.5C10.94,16.5 11.5,16.03 11.7,15.39L11,14Z"}})]):e._e(),e._v(" "),"dna"===t.icon?n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M4,2H6V4C6,5.44 6.68,6.61 7.88,7.78C8.74,8.61 9.89,9.41 11.09,10.2L9.26,11.39C8.27,10.72 7.31,10 6.5,9.21C5.07,7.82 4,6.1 4,4V2M18,2H20V4C20,6.1 18.93,7.82 17.5,9.21C16.09,10.59 14.29,11.73 12.54,12.84C10.79,13.96 9.09,15.05 7.88,16.22C6.68,17.39 6,18.56 6,20V22H4V20C4,17.9 5.07,16.18 6.5,14.79C7.91,13.41 9.71,12.27 11.46,11.16C13.21,10.04 14.91,8.95 16.12,7.78C17.32,6.61 18,5.44 18,4V2M14.74,12.61C15.73,13.28 16.69,14 17.5,14.79C18.93,16.18 20,17.9 20,20V22H18V20C18,18.56 17.32,17.39 16.12,16.22C15.26,15.39 14.11,14.59 12.91,13.8L14.74,12.61M7,3H17V4L16.94,4.5H7.06L7,4V3M7.68,6H16.32C16.08,6.34 15.8,6.69 15.42,7.06L14.91,7.5H9.07L8.58,7.06C8.2,6.69 7.92,6.34 7.68,6M9.09,16.5H14.93L15.42,16.94C15.8,17.31 16.08,17.66 16.32,18H7.68C7.92,17.66 8.2,17.31 8.58,16.94L9.09,16.5M7.06,19.5H16.94L17,20V21H7V20L7.06,19.5Z"}})]):e._e(),e._v(" "),"duck"===t.icon?n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M8.5,5A1.5,1.5 0 0,0 7,6.5A1.5,1.5 0 0,0 8.5,8A1.5,1.5 0 0,0 10,6.5A1.5,1.5 0 0,0 8.5,5M10,2A5,5 0 0,1 15,7C15,8.7 14.15,10.2 12.86,11.1C14.44,11.25 16.22,11.61 18,12.5C21,14 22,12 22,12C22,12 21,21 15,21H9C9,21 4,21 4,16C4,13 7,12 6,10C2,10 2,6.5 2,6.5C3,7 4.24,7 5,6.65C5.19,4.05 7.36,2 10,2Z"}})]):e._e(),e._v(" "),"ghost"===t.icon?n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M12,2A9,9 0 0,0 3,11V22L6,19L9,22L12,19L15,22L18,19L21,22V11A9,9 0 0,0 12,2M9,8A2,2 0 0,1 11,10A2,2 0 0,1 9,12A2,2 0 0,1 7,10A2,2 0 0,1 9,8M15,8A2,2 0 0,1 17,10A2,2 0 0,1 15,12A2,2 0 0,1 13,10A2,2 0 0,1 15,8Z"}})]):e._e(),e._v(" "),"heart"===t.icon?n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"}})]):e._e(),e._v(" "),"run"===t.icon?n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M13.5,5.5C14.59,5.5 15.5,4.58 15.5,3.5C15.5,2.38 14.59,1.5 13.5,1.5C12.39,1.5 11.5,2.38 11.5,3.5C11.5,4.58 12.39,5.5 13.5,5.5M9.89,19.38L10.89,15L13,17V23H15V15.5L12.89,13.5L13.5,10.5C14.79,12 16.79,13 19,13V11C17.09,11 15.5,10 14.69,8.58L13.69,7C13.29,6.38 12.69,6 12,6C11.69,6 11.5,6.08 11.19,6.08L6,8.28V13H8V9.58L9.79,8.88L8.19,17L3.29,16L2.89,18L9.89,19.38Z"}})]):e._e()])])}))])},staticRenderFns:[]},g=n("VU/8")(m,v,!1,null,null,null).exports,w={name:"Wirbelwind",data:function(){return{hobbit:!1}},methods:{showOff:function(){var e=this;this.hobbit=!0,setTimeout(function(){e.hobbit=!1},2e3)}}},f={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"ww_wrapper",on:{click:this.showOff}},[t("div",{staticClass:"ww_text"},[this._v("Wirbel")]),this._v(" "),t("div",{staticClass:"ww_logo",class:{rotating:this.hobbit}}),this._v(" "),t("div",{staticClass:"ww_text"},[this._v("Wind")])])},staticRenderFns:[]},_=n("VU/8")(w,f,!1,null,null,null).exports,y={name:"Overtune",components:{Stark:p,Alien:g,Wirbelwind:_},data:function(){return{gallery:{},locked:!0,log:0}},computed:{noLimits:function(){return this.$store.state.showPrivate},hackMode:function(){return this.$store.state.hackMode},badFilter:function(){return this.$store.state.gallery},goodFilter:function(){return this.$store.state.gallery.filter(function(e){if(!1===e.private)return e})}},methods:{rebelion:function(){var e=sessionStorage.getItem("locked"),t=this.$route.path;e&&(this.locked=!1),"/nlm"===t?(this.$store.commit("getMeOut"),this.gallery=this.badFilter):(this.locked=!1,this.gallery=this.goodFilter)},unlock:function(){this.locked=!1,sessionStorage.setItem("locked",!1)},launchHackMode:function(){this.log>=7?this.$store.commit("hackModeEnabled"):this.log++},remix:function(){var e=this,t=JSON.parse(localStorage.getItem("likedPhotos"));if(t&&t.length){var n={name:"❤",codeName:"favourites",cover:[],private:!1,photos:[]};t.forEach(function(t){e.gallery.forEach(function(e){"favourites"!==e.codeName&&e.photos.forEach(function(e){e.codeName===t&&(n.photos.push(e),n.cover.unshift(e.src))})})}),"favourites"===this.gallery[0].codeName?this.gallery[0]=n:this.gallery.unshift(n),this.$store.commit("setGallery",this.gallery)}}},mounted:function(){this.rebelion(),this.remix()}},C={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"overtune"},[t("transition",{attrs:{name:"trans_blur"}},[this.locked?t("alien",{on:{unlocked:this.unlock}}):t("div",[t("div",{staticClass:"logo main-logo",class:{invert:this.hackMode},on:{click:this.launchHackMode}}),this._v(" "),t("h1",[this._v("Camera del Cavallo\n                "),this.noLimits?t("span",[this._v(" 🔞")]):this._e()]),this._v(" "),t("ul",{staticClass:"gallery-list"},this._l(this.gallery,function(e){return t("li",{key:e.codeName},[t("router-link",{attrs:{to:{name:"SingleGallery",params:{galleryId:e.codeName}}}},[t("stark",{attrs:{gallery:e.cover,name:e.name}})],1)],1)})),this._v(" "),t("wirbelwind")],1)],1)],1)},staticRenderFns:[]},k=n("VU/8")(y,C,!1,null,null,null).exports,x=n("mvHQ"),L=n.n(x),b={render:function(){this.$createElement;this._self._c;return this._m(0,!1,!1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"introduction"},[t("p",[this._v("mephyo 是有0.25年从业经验和10+年业余经验的资深摄影师。")]),this._v(" "),t("p",[this._v("但是从来没有获得任何国际或地区性的奖项。")]),this._v(" "),t("p",[this._v("因为 mephyo 从不把照片发到别的地方去。")]),this._v(" "),t("p",[this._v("mephyo 是好摄影师。")]),this._v(" "),t("p",[this._v("学习 mephyo。")])])}]},V={name:"Apply",components:{Introduction:n("VU/8")({name:"Introduction"},b,!1,null,null,null).exports},data:function(){return{showIntroduction:!1,haveClicked:!1,haveApply:!1,haveLocation:!1,ourDistance:NaN}},methods:{wishYouWereHere:function(){function e(){setTimeout(function(){t.haveApply=!0,document.body.scrollTop=document.body.scrollHeight},2e3)}var t=this;if(t.haveClicked=!0,!navigator.geolocation)return e(),void console.warn("您的浏览器不支持地理位置");var n={latitude:31.330824,longitude:120.643594};navigator.geolocation.getCurrentPosition(function(i){var a={lat:i.coords.latitude,lon:i.coords.longitude};!function(n,i,a,s){void 0===Number.prototype.toRad&&(Number.prototype.toRad=function(){return this*Math.PI/180});var o=(s-i).toRad(),l=(a-n).toRad(),r=Math.sin(o/2)*Math.sin(o/2)+Math.cos(i.toRad())*Math.cos(s.toRad())*Math.sin(l/2)*Math.sin(l/2),c=2*Math.atan2(Math.sqrt(r),Math.sqrt(1-r))*6371;t.ourDistance=c,e()}(a.lon,a.lat,n.longitude,n.latitude),t.haveLocation=!0,localStorage.setItem("lastLocation",L()(a)),t.$store.dispatch("newLocation",L()(a))},function(){e(),console.warn("无法获取您的位置")})},goApply:function(){this.$router.push({path:"/Apply"})}}},M={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"apply_wrapper",attrs:{lang:"zh-CN"}},[e.haveApply?e._e():n("a",{staticClass:"apply_button apply_yellow",class:{apply_crazy:e.haveClicked},on:{click:e.wishYouWereHere}},[e.haveClicked?n("span",[e._v("…稍等…")]):n("span",[e._v("我也想拍")])]),e._v(" "),e.haveApply?n("div",{staticClass:"apply_content"},[n("div",{staticClass:"apply_content_inner"},[n("p",[e._v("谢谢你喜欢我的照片，我也很想拍你哦。")]),e._v(" "),e.haveLocation?[e.ourDistance<50?n("p",[e._v("我们之间的距离近到不可思议，请务必马上来找我拍照。")]):e.ourDistance<200?n("p",[e._v("我们之间的距离很近，我可以来找你拍照。")]):n("p",[e._v("我可以给你拍照，但是你必须来苏州找我。")])]:e._e(),e._v(" "),e.showIntroduction?n("introduction"):n("div",{staticClass:"show_introduction",on:{click:function(t){e.showIntroduction=!0}}},[n("span",[e._v("在与我联系之前，或许你可以先了解一下我")])])],2)]):e._e(),e._v(" "),e.haveApply?n("a",{staticClass:"apply_button apply_blue",on:{click:e.goApply}},[e._v("来拍照吧")]):e._e()])},staticRenderFns:[]},A=n("VU/8")(V,M,!1,null,null,null).exports,$={name:"SinglePhoto",props:{photo:Object,index:Number,total:Number},data:function(){return{isLiked:!1}},computed:{hackMode:function(){return this.$store.state.hackMode}},methods:{likeMe:function(){var e=this,t=JSON.parse(localStorage.getItem("likedPhotos"));this.isLiked?(this.isLiked=!1,t?(t=t.filter(function(t){return t!==e.photo.codeName}),localStorage.setItem("likedPhotos",L()(t))):localStorage.setItem("likedPhotos",L()([]))):(this.isLiked=!0,t?(t.push(this.photo.codeName),localStorage.setItem("likedPhotos",L()(t))):localStorage.setItem("likedPhotos",L()([this.photo.codeName])))}},mounted:function(){var e=this,t=JSON.parse(localStorage.getItem("likedPhotos"));t&&t.forEach(function(t){t===e.photo.codeName&&(e.isLiked=!0)})}},H={render:function(){var e=this.$createElement,t=this._self._c||e;return t("li",{staticClass:"single-photo"},[t("img",{staticClass:"photo",class:{untouchable:!this.hackMode},attrs:{src:this.photo.src}}),this._v(" "),t("div",{staticClass:"scrim",on:{dblclick:this.likeMe}}),this._v(" "),t("div",{staticClass:"photo_toolbar"},[t("div",{staticClass:"photo_index"},[this._v(this._s(this.index+1+" / "+this.total))]),this._v(" "),t("div",{staticClass:"photo_like",on:{click:this.likeMe}},[t("svg",{staticClass:"like_icon",class:{liked:this.isLiked},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",width:"24",height:"24",viewBox:"0 0 24 24"}},[t("path",{attrs:{d:"M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"}})])])])])},staticRenderFns:[]},S={name:"SingleGallery",components:{Apply:A,SinglePhoto:n("VU/8")($,H,!1,null,null,null).exports,Wirbelwind:_},computed:{gallery:function(){return this.$store.state.nowGallery}},mounted:function(){window.scrollTo(0,0)}},I={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"single-gallery"},[n("h1",[e._v(e._s(e.gallery.name))]),e._v(" "),n("ul",e._l(e.gallery.photos,function(t,i){return n("single-photo",{key:t.codeName,attrs:{photo:t,index:i,total:e.gallery.photos.length}})})),e._v(" "),n("apply"),e._v(" "),n("wirbelwind")],1)},staticRenderFns:[]},N=n("VU/8")(S,I,!1,null,null,null).exports,E={name:"Spetsnaz",props:{q:String,value:[String,Array,Boolean],schema:Array},data:function(){return{model:{},localValue:"",bougie:3}},methods:{callDaddy:function(){this.$emit("input",this.q,this.localValue)},selectOne:function(e){var t=this;this.model.values.forEach(function(n){n.id===e?(n.selected=!0,t.localValue=n.id):n.selected=!1}),this.$forceUpdate()},checkOne:function(e){var t=this;this.model.values.forEach(function(n){if(n.id===e)if(!1===n.selected)n.selected=!0,t.localValue.push(e);else{n.selected=!1;for(var i=t.localValue.length-1;i>=0;i--)t.localValue[i]===e&&t.localValue.splice(i,1)}}),this.$forceUpdate()},switchChick:function(){!0===this.localValue?this.localValue=!1:this.localValue=!0}},mounted:function(){var e=this;switch(this.schema.forEach(function(t){t.model===e.q&&(e.model=t)}),this.localValue=this.value,this.model.type){case"select":this.model.values.forEach(function(t){e.value===t.id?t.selected=!0:t.selected=!1});break;case"checklist":this.model.values.forEach(function(t){e.value.includes(t.id)?t.selected=!0:t.selected=!1})}},watch:{localValue:function(){this.bougie>3&&this.callDaddy(),this.bougie++}}},T={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"spetsnaz"},[n("div",{staticClass:"spetsnaz_head"},[n("span",{staticClass:"spetsnaz_label"},[e._v(e._s(e.model.label))]),e._v(" "),e.model.hint?n("span",{staticClass:"spetsnaz_hint"},[e._v("("+e._s(e.model.hint)+")")]):e._e()]),e._v(" "),"input"===e.model.type?n("div",{staticClass:"spetsnaz_field"},[n("div",{staticClass:"spetsnaz_inputz"},["checkbox"===e.model.inputType?n("input",{directives:[{name:"model",rawName:"v-model",value:e.localValue,expression:"localValue"}],staticClass:"spetsnaz_input",attrs:{placeholder:e.model.placeholder,type:"checkbox"},domProps:{checked:Array.isArray(e.localValue)?e._i(e.localValue,null)>-1:e.localValue},on:{change:function(t){var n=e.localValue,i=t.target,a=!!i.checked;if(Array.isArray(n)){var s=e._i(n,null);i.checked?s<0&&(e.localValue=n.concat([null])):s>-1&&(e.localValue=n.slice(0,s).concat(n.slice(s+1)))}else e.localValue=a}}}):"radio"===e.model.inputType?n("input",{directives:[{name:"model",rawName:"v-model",value:e.localValue,expression:"localValue"}],staticClass:"spetsnaz_input",attrs:{placeholder:e.model.placeholder,type:"radio"},domProps:{checked:e._q(e.localValue,null)},on:{change:function(t){e.localValue=null}}}):n("input",{directives:[{name:"model",rawName:"v-model",value:e.localValue,expression:"localValue"}],staticClass:"spetsnaz_input",attrs:{placeholder:e.model.placeholder,type:e.model.inputType},domProps:{value:e.localValue},on:{input:function(t){t.target.composing||(e.localValue=t.target.value)}}})])]):e._e(),e._v(" "),"select"===e.model.type?n("div",{staticClass:"spetsnaz_field"},[n("div",{staticClass:"spetsnaz_boxy"},e._l(e.model.values,function(t){return n("div",{key:t.id,staticClass:"spetsnaz_box",class:{selected:t.selected},on:{click:function(n){e.selectOne(t.id)}}},[t.icon?n("div",{staticClass:"icon",class:"icon_"+t.icon}):e._e(),e._v(" "),n("div",[e._v(e._s(t.name))])])}))]):e._e(),e._v(" "),"checklist"===e.model.type?n("div",{staticClass:"spetsnaz_field"},[n("div",{staticClass:"spetsnaz_boxz"},e._l(e.model.values,function(t){return n("div",{key:t.id,staticClass:"spetsnaz_box",class:{selected:t.selected},on:{click:function(n){e.checkOne(t.id)}}},[t.icon?n("div",{staticClass:"icon",class:"icon_"+t.icon}):e._e(),e._v(" "),n("div",[e._v(e._s(t.name))])])}))]):e._e(),e._v(" "),"checkbox"===e.model.type?n("div",{staticClass:"spetsnaz_field"},[n("div",{staticClass:"spetsnaz_checker",on:{click:e.switchChick}},[!0===e.localValue?n("svg",{staticStyle:{width:"24px",height:"24px"},attrs:{viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}})]):e._e()])]):e._e()])},staticRenderFns:[]},z={name:"boncka",components:{Spetsnaz:n("VU/8")(E,T,!1,null,null,null).exports},data:function(){return{submitLabel:"提交",model:{call:"",age:"",gender:"female",contact:"",whereToSee:"",place:["hotel"],placeMore:"",time:["afternoon"],cloth:["nude","underwear"],clothMore:"",style:"myIdea",styleMore:"",emotion:"excellent",pose:"good",limit:"3",copyright:"2",note:"",contract:!1},schema:[{type:"input",inputType:"text",label:"称呼",model:"call",placeholder:"不一定是真实姓名"},{type:"input",inputType:"number",label:"年龄",model:"age",placeholder:"可不填"},{type:"select",label:"性别",model:"gender",values:[{icon:"female",id:"female",name:"女"},{icon:"male",id:"male",name:"男"},{icon:"unknown",id:"futa",name:"保密"}]},{type:"input",inputType:"text",label:"联系方式",model:"contact",placeholder:"通讯工具 | 用户名"},{type:"input",inputType:"text",label:"可以看到你照片的地方",model:"whereToSee",placeholder:"平台 | 用户名"},{type:"checklist",label:"拍摄地点",model:"place",values:[{id:"outdoor",name:"室外",icon:"forest"},{id:"public",name:"公共场所",icon:"bench"},{id:"hotel",name:"酒店",icon:"bed"},{id:"home",name:"住处",icon:"sofa"},{id:"other",name:"其他",icon:"other"}]},{type:"input",inputType:"text",label:"拍摄地点的补充说明",model:"placeMore",placeholder:"你有什么特别的地点？"},{type:"checklist",label:"拍摄时间",model:"time",values:[{id:"dawn",name:"凌晨"},{id:"morning",name:"上午"},{id:"afternoon",name:"下午"},{id:"evening",name:"晚上"}]},{type:"select",label:"拍摄风格",model:"style",values:[{id:"myIdea",name:"我有特别的想法"},{id:"yourIdea",name:"全部按你的风格来"}]},{type:"input",inputType:"text",label:"拍摄风格的补充说明",model:"styleMore",placeholder:"你有什么特别的想法？"},{type:"checklist",label:"服装",model:"cloth",values:[{id:"nude",name:"裸体"},{id:"underwear",name:"内衣"},{id:"casual",name:"常服"},{id:"other",name:"其他"}]},{type:"input",inputType:"text",label:"服装的补充说明",model:"clothMore",placeholder:"你有什么特别的服装？"},{type:"select",label:"你拍照时的表情",model:"emotion",values:[{id:"excellent",name:"我很会做表情"},{id:"good",name:"我拍照只有一种表情"},{id:"poor",name:"我不会做表情"},{id:"none",name:"我不拍脸"}]},{type:"select",label:"你拍照时的姿势",model:"pose",values:[{id:"excellent",name:"我很会摆 pose"},{id:"good",name:"我会一点"},{id:"poor",name:"请教教我"}]},{type:"select",label:"尺度",model:"limit",values:[{id:"4",name:"色情又变态"},{id:"3",name:"有欲望但不色情"},{id:"2",name:"没有欲望的美好肉体"},{id:"1",name:"不穿衣服的性冷淡"}]},{type:"select",label:"版权",model:"copyright",values:[{id:"1",name:"禁止在任何地方发布"},{id:"2",name:"可以在我的网站发布不露脸的照片"},{id:"3",name:"可以在我的网站发布所有照片"},{id:"4",name:"可以在我的网站和其他平台发布不露脸的照片"},{id:"5",name:"可以在我的网站和其他平台发布所有照片"}]},{type:"input",inputType:"text",label:"备注",model:"note",placeholder:"还有什么没有提到的？"},{type:"checkbox",label:"需要纸质合同",hint:"自己打印",model:"contract"}]}},methods:{submitData:function(){var e=this;this.submitLabel="稍等",this.$http.post("newApplier",this.model).then(function(t){e.submitLabel="提交成功",alert("提交成功"),e.$router.push({path:"/"})},function(t){alert("服务器发生了一个严重错误"),e.submitLabel="Don't Panic!"})},callMe:function(e,t){this.model[e]=t}},mounted:function(){window.scrollTo(0,0)}},R={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"boncka",attrs:{lang:"zh-CN"}},[n("ul",{staticClass:"boncka_list"},e._l(e.model,function(t,i){return n("spetsnaz",{key:i,attrs:{q:i,value:t,schema:e.schema},on:{input:e.callMe}})})),e._v(" "),n("div",{staticClass:"submit_button",on:{click:e.submitData}},[e._v(e._s(e.submitLabel))])])},staticRenderFns:[]},O=n("VU/8")(z,R,!1,null,null,null).exports;i.a.use(h.a);var P=new h.a({routes:[{path:"/",alias:"/nlm",name:"Overtune",component:k},{path:"/Apply",name:"Boncka",component:O},{path:"/gallery/:galleryId",name:"SingleGallery",component:N}]}),F=n("//Fk"),G=n.n(F),U=n("NYxO"),Z=n("8+8L");i.a.use(U.a),i.a.use(Z.a),i.a.http.options.root="https://camera-dev-cavallo.herokuapp.com/",i.a.http.options.emulateJSON=!0;var B=new U.a.Store({state:{showPrivate:!1,hackMode:!1,gallery:[],nowGalleryIndex:0,nowGallery:{},nowPhotoIndex:0,nowPhoto:{}},mutations:{getMeOut:function(e){e.showPrivate=!0},hackModeEnabled:function(e){e.hackMode=!0},setGallery:function(e,t){e.gallery=t},changeGallery:function(e,t){var n=e.gallery.map(function(e){return e.codeName}).indexOf(t);e.nowGalleryIndex=n,e.nowGallery=e.gallery[n]}},actions:{getGallery:function(e){var t="/static/json/gallery.json";return new G.a(function(n,a){i.a.http.get(t).then(function(t){e.commit("setGallery",t.body.gallery.reverse()),n()},function(e){console.error("FATAL ERROR: cannot load gallery, it's been totally fucked.")})})},newViewer:function(e,t){i.a.http.post("newViewer",{model:t.model,viewTimes:t.viewTimes,lastLocation:t.lastLocation})},newLocation:function(e,t){i.a.http.post("newLocation",{position:t})}}});n("Fa5D");i.a.config.productionTip=!1,new i.a({el:"#app",router:P,store:B,template:"<App/>",components:{App:c}})}},["NHnr"]);