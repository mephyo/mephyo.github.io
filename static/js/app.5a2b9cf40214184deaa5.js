webpackJsonp([1],{0:function(t,e){},Fa5D:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("7+uW"),o={name:"Navigator",props:{gallery:Object},computed:{noLimits:function(){return this.$store.state.showPrivate},noSecrets:function(){return this.$store.state.onlyForLisa},scenes:function(){return this.$route.name},galleryName:function(){if(this.$store.state.nowGallery)return this.$store.state.nowGallery.name},havePrevious:function(){if(this.$store.state.nowPhoto.src)return this.$store.state.nowPhotoIndex>0},haveNext:function(){if(this.$store.state.nowPhoto.src)return this.$store.state.nowPhotoIndex+1<this.$store.state.nowGallery.photos.length}},methods:{goHome:function(){this.noSecrets?this.$router.push({path:"/18x"}):this.noLimits?this.$router.push({path:"/nlm"}):this.$router.push({path:"/"})},goGallery:function(){this.$router.push({name:"SingleGallery",params:{galleryId:this.$store.state.nowGallery.codeName}})},goPrevious:function(){if(!this.havePrevious)return"No more";var t=this.$store.state.nowGallery.photos[this.$store.state.nowPhotoIndex-1].codeName;this.$router.push({name:"SinglePhoto",params:{photoId:t}})},goNext:function(){if(!this.haveNext)return"No more";var t=this.$store.state.nowGallery.photos[this.$store.state.nowPhotoIndex+1].codeName;this.$router.push({name:"SinglePhoto",params:{photoId:t}})}}},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return"Overtune"!==t.scenes?n("nav",{staticClass:"navigator"},["SingleGallery"===t.scenes?n("div",{staticClass:"navigator_content_wrapper"},[n("div",{staticClass:"navs",on:{click:t.goHome}},[n("div",{staticClass:"icon icon_left"}),t._v(" "),n("div",{staticClass:"logo"})])]):t._e(),t._v(" "),"SinglePhoto"===t.scenes?n("div",{staticClass:"navigator_content_wrapper"},[n("div",{staticClass:"navs",on:{click:t.goGallery}},[n("div",{staticClass:"icon icon_left"}),t._v(" "),n("div",{staticClass:"gallery-name"},[t._v(t._s(t.galleryName))])]),t._v(" "),n("div",{staticClass:"tools"})]):t._e()]):t._e()},staticRenderFns:[]},a={name:"app",components:{Navigator:n("VU/8")(o,i,!1,null,null,null).exports},data:function(){return{galleryLoaded:!1}},methods:{indexing:function(){this.galleryLoaded=!0;var t=this.$route.params.galleryId,e=this.$route.params.photoId;t&&this.$store.commit("changeGallery",t),e&&this.$store.commit("changePhoto",e)}},mounted:function(){var t=this;this.$store.dispatch("getGallery").then(function(){return t.indexing()})},watch:{$route:function(){this.indexing()}}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("main",{attrs:{id:"app"}},[this.galleryLoaded?e("router-view"):this._e(),this._v(" "),e("navigator")],1)},staticRenderFns:[]},l=n("VU/8")(a,r,!1,null,null,null).exports,c=n("/ocq"),h={name:"Stark",props:{gallery:Array},data:function(){return{revenge:0}},computed:{robb:function(){return{transform:"rotate("+12*this.revenge+"deg) translateX("+48*this.revenge+"px) translateZ(0)"}},bran:function(){return{transform:"rotate("+-6*this.revenge+"deg) translateX("+-48*this.revenge+"px) translateZ(0)"}},rickon:function(){this.revenge;return{transform:"translateY("+-4*this.revenge+"px) translateZ(0)"}}},methods:{northenInvading:function(){var t=window.innerHeight/2,e=this.$refs.stark.getBoundingClientRect().y+100;e<0?e=0:e>window.innerHeight&&(e=window.innerHeight);var n=Math.abs(t-e);this.revenge=1-n/t}},created:function(){window.addEventListener("scroll",this.northenInvading)},destroyed:function(){window.removeEventListener("scroll",this.northenInvading)},mounted:function(){var t=this;setTimeout(function(){t.northenInvading()},1e3)}},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{ref:"stark",staticClass:"king-in-the-north"},[e("img",{staticClass:"stark",style:this.robb,attrs:{src:this.gallery[2]}}),this._v(" "),e("img",{staticClass:"stark",style:this.bran,attrs:{src:this.gallery[1]}}),this._v(" "),e("img",{staticClass:"stark",style:this.rickon,attrs:{src:this.gallery[0]}})])},staticRenderFns:[]},A={name:"Alien",data:function(){return{rawKeys:[{id:1,icon:"icon_airplane"},{id:2,icon:"icon_heart"},{id:3,icon:"icon_cat"},{id:4,icon:"icon_ghost"},{id:5,icon:"icon_cake"},{id:6,icon:"icon_iris"},{id:7,icon:"icon_dna"},{id:8,icon:"icon_duck"},{id:9,icon:"icon_run"}],keys:[],keyword:""}},methods:{shuffle:function(t){for(var e,n,s=t.length;0!==s;)n=Math.floor(Math.random()*s),e=t[s-=1],t[s]=t[n],t[n]=e;return t},enter:function(t){8===t?this.keyword="":this.keyword+=t,"33333"===this.keyword&&this.$emit("unlocked")}},mounted:function(){this.keys=this.shuffle(this.rawKeys)}},g={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"alien"},[n("div",{staticClass:"keyboard"},t._l(t.keys,function(e){return n("div",{key:e.id,staticClass:"key"},[n("div",{staticClass:"icon",class:e.icon,on:{click:function(n){t.enter(e.id)}}})])}))])},staticRenderFns:[]},d={name:"Overtune",components:{Stark:n("VU/8")(h,u,!1,null,null,null).exports,Alien:n("VU/8")(A,g,!1,null,null,null).exports},data:function(){return{gallery:{},locked:!0,log:0}},computed:{noLimits:function(){return this.$store.state.showPrivate},noSecrets:function(){return this.$store.state.onlyForLisa},hackMode:function(){return this.$store.state.hackMode},secretFilter:function(){return this.$store.state.gallery.filter(function(t){if(!0===t.private&&!1===t.secret)return t})},badFilter:function(){return this.$store.state.gallery.filter(function(t){if(!0===t.private)return t})},goodFilter:function(){return this.$store.state.gallery.filter(function(t){if(!1===t.private)return t})}},methods:{rebelion:function(){var t=sessionStorage.getItem("locked"),e=this.$route.path;t&&(this.locked=!1),"/nlm"===e?(this.$store.commit("getMeOut"),this.gallery=this.badFilter):"/18x"===e?(this.$store.commit("myBaby"),this.gallery=this.secretFilter):(this.locked=!1,this.gallery=this.goodFilter)},unlock:function(){this.locked=!1,sessionStorage.setItem("locked",!1)},launchHackMode:function(){this.log>=7?this.$store.commit("hackModeEnabled"):this.log++}},mounted:function(){this.rebelion()}},v={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"overtune"},[n("transition",{attrs:{name:"trans_blur"}},[t.locked?n("alien",{on:{unlocked:t.unlock}}):n("div",[n("div",{staticClass:"logo main-logo",class:{invert:t.hackMode},on:{click:t.launchHackMode}}),t._v(" "),n("h1",[t._v("Camera del Cavallo\n                "),t.noLimits||t.noSecrets?n("span",[t._v(" 🔞")]):t._e()]),t._v(" "),n("ul",{staticClass:"gallery-list"},t._l(t.gallery,function(e){return n("li",{key:e.codeName},[n("router-link",{attrs:{to:{name:"SingleGallery",params:{galleryId:e.codeName}}}},[n("stark",{attrs:{gallery:e.cover}}),t._v(" "),n("div",{staticClass:"title"},[t._v(t._s(e.name))])],1)],1)}))])],1)],1)},staticRenderFns:[]},p=n("VU/8")(d,v,!1,null,null,null).exports,y={name:"Apply",data:function(){return{haveClicked:!1,haveApply:!1,haveLocation:!1,ourDistance:NaN,haveSent:!1}},methods:{wishYouWereHere:function(){function t(){setTimeout(function(){e.haveApply=!0,document.body.scrollTop=document.body.scrollHeight},2e3)}var e=this;if(e.haveClicked=!0,!navigator.geolocation)return t(),void console.log("您的浏览器不支持地理位置");var n={latitude:31.330824,longitude:120.643594};navigator.geolocation.getCurrentPosition(function(s){var o=s.coords.latitude;!function(n,s,o,i){void 0===Number.prototype.toRad&&(Number.prototype.toRad=function(){return this*Math.PI/180});var a=(i-s).toRad(),r=(o-n).toRad(),l=Math.sin(a/2)*Math.sin(a/2)+Math.cos(s.toRad())*Math.cos(i.toRad())*Math.sin(r/2)*Math.sin(r/2),c=2*Math.atan2(Math.sqrt(l),Math.sqrt(1-l))*6371;e.ourDistance=c,t()}(s.coords.longitude,o,n.longitude,n.latitude),e.haveLocation=!0},function(){t(),console.log("无法获取您的位置")})},sendMail:function(){var t=this;setTimeout(function(){t.haveSent=!0},1e3)}}},m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"apply_wrapper"},[this.haveApply?this._e():e("a",{staticClass:"apply_button apply_yellow",class:{apply_crazy:this.haveClicked},on:{click:this.wishYouWereHere}},[this.haveClicked?e("span",[this._v("…稍等…")]):e("span",[this._v("我也想拍")])]),this._v(" "),this.haveApply?e("div",{staticClass:"apply_content"},[e("div",{staticClass:"apply_content_inner"},[e("p",[this._v("谢谢你喜欢我的照片，我也很想拍你哦。")]),this._v(" "),this.haveLocation?[this.ourDistance<200?e("p",[this._v("我可以来你的城市找你拍照。")]):e("p",[this._v("我可以给你拍照，但是你必须来苏州找我。")])]:this._e()],2)]):this._e(),this._v(" "),this.haveApply?e("a",{staticClass:"apply_button apply_blue",attrs:{href:"mailto:hergloves@gmail.com?subject='想要和你拍照'"},on:{click:this.sendMail}},[this._v("给我发邮件吧")]):this._e(),this._v(" "),this.haveApply?e("div",{staticClass:"apply_memo"},[e("p",[this._v("请不要更改邮件标题，可能会影响自动回复")]),this._v(" "),this.haveLocation?this._e():e("p",[this._v("请在邮件里告诉我所在的城市")]),this._v(" "),this.haveSent?e("p",[this._v("如果邮件客户端没有启动，请手动发送邮件到\n            "),e("strong",[this._v("hergloves@gmail.com")])]):this._e()]):this._e()])},staticRenderFns:[]},f={name:"SingleGallery",components:{Apply:n("VU/8")(y,m,!1,null,null,null).exports},computed:{gallery:function(){return this.$store.state.nowGallery},hackMode:function(){return this.$store.state.hackMode}}},C={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"single-gallery"},[s("h1",[t._v(t._s(t.gallery.name))]),t._v(" "),s("ul",t._l(t.gallery.photos,function(e,o){return s("li",{key:e.codeName},[s("router-link",{attrs:{to:{name:"SinglePhoto",params:{photoId:e.codeName}}}},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.src,expression:"photo.src"}],staticClass:"photo"}),t._v(" "),t.hackMode?t._e():s("img",{staticClass:"caught",attrs:{src:n("v6aj")}})]),t._v(" "),s("div",{staticClass:"photo_title"},[t._v(t._s(o+1+" / "+t.gallery.photos.length))])],1)})),t._v(" "),s("apply")],1)},staticRenderFns:[]},I=n("VU/8")(f,C,!1,null,null,null).exports,_={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"single_photo"},[t.galleryReady?s("agile",{attrs:{options:t.agileOpts}},t._l(t.gallery.photos,function(e){return s("div",{key:e.codeName,staticClass:"single_slide"},[s("div",{staticClass:"photo_wrapper"},[s("img",{staticClass:"photo",attrs:{src:e.src}}),t._v(" "),t.hackMode?t._e():s("img",{staticClass:"caught",attrs:{src:n("v6aj")}})]),t._v(" "),e.desc?s("p",[t._v(t._s(e.desc))]):t._e()])})):t._e()],1)},staticRenderFns:[]},k=n("VU/8")({name:"SinglePhoto",data:function(){return{agileOpts:{arrows:!1,dots:!1,infinite:!1,speed:600}}},computed:{gallery:function(){return this.$store.state.nowGallery},photo:function(){return this.$store.state.nowPhoto},galleryReady:function(){if(this.$store.state.nowGallery.photos)return!0},hackMode:function(){return this.$store.state.hackMode}}},_,!1,null,null,null).exports;s.a.use(c.a);var E=new c.a({routes:[{path:"/",alias:["/nlm","18x"],name:"Overtune",component:p},{path:"/gallery/:galleryId",name:"SingleGallery",component:I},{path:"/gallery/:galleryId/photo/:photoId",name:"SinglePhoto",component:k}],scrollBehavior:function(t,e,n){return{x:0,y:0}}}),R=n("//Fk"),w=n.n(R),B=n("NYxO"),$=n("8+8L");s.a.use(B.a),s.a.use($.a);var Q=new B.a.Store({state:{showPrivate:!1,onlyForLisa:!1,hackMode:!1,gallery:[],nowGalleryIndex:0,nowGallery:{},nowPhotoIndex:0,nowPhoto:{}},mutations:{getMeOut:function(t){t.showPrivate=!0},myBaby:function(t){t.onlyForLisa=!0},hackModeEnabled:function(t){t.hackMode=!0},setGallery:function(t,e){t.gallery=e.body.gallery.reverse()},changeGallery:function(t,e){var n=t.gallery.map(function(t){return t.codeName}).indexOf(e);t.nowGalleryIndex=n,t.nowGallery=t.gallery[n]},changePhoto:function(t,e){var n=t.nowGallery.photos.map(function(t){return t.codeName}).indexOf(e);t.nowPhotoIndex=n,t.nowPhoto=t.nowGallery.photos[n]}},actions:{getGallery:function(t){return new w.a(function(e,n){s.a.http.get("/static/Gallery.json").then(function(n){t.commit("setGallery",n),e()},function(t){console.error("I'm totally fucked.")})})}}}),x=n("cTzj"),b=n.n(x),M=n("nav3"),S=n.n(M);n("Fa5D");s.a.config.productionTip=!1,s.a.use(b.a,{preLoad:1.5,attempt:2,listenEvents:["scroll"]}),s.a.use(S.a),new s.a({el:"#app",router:E,store:Q,template:"<App/>",components:{App:l}})},v6aj:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQCAMAAAC3Ycb+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAZQTFRFAAAA////pdmf3QAABMVJREFUeNrs3Y1u2jAUgNHr93/paasKxD+xnQDD5HwSQ2shmJwm0BRMJH1UYRUAERAgAgJEQIAICBABERAgAgJEQIAICBABERAgAgJEQIAICBABERAgAgJEQIAICBABERAgAgJEQIAICBABERAgAgJEQIAICBABERAgAgJEQIAICBABERAgAgJEQIAICBABERAgAgJEQIAICBABERAgAgJEQIAICBABASIgAgJEQIAICBABASIgAgJEQIAICBABASIgAgJEQIAICBABASIgAgJEQIAIyMVBQqeyhdhlCQgQAQEiIAICRECACAgQAQEiIAICRECACAgQAQEiIAICRECACAgQAQEiIAICRECA7N7iz3tS//5ze3Pq7SvDy+h9ofH10duIuAzILwSQDwb52Whu7+d+OH/8b7pfJL/o9iyVV3jcLlNtIVFcbXvLV91CilMuVz9VFrB/heapNqBvB/ndHvogkdIxkGjx759iu8u6CsjoFpIe9ixTIJt9z21lRw8khwRSfCfyVTIIkqqCvS0mhwSy8/gxt8uqA6T+4weQ+wPLdtfRfZZVvejss6yH/xe7rMs8yzqt+ZJVEB+zHoCkyQmtgDiWJSACAkRAgAgIEAEBIiACAkRALg4y/XEZT7nFsa+fG1uUf79cAOTAB5i8DeTk2JYEuQ32jSKjIGfHtjZI+mCQdEmQ+n67/dFM5eXS5lUntdWQL6W6jKmx5XAz318DJFtnzQ/Lqlxu+8LqaK/PcuFjII3L95bX+v4SIK2frpHz+/3e/4nvnR8f27Hb+V6QxjKAPOUxZB6k93z1LEhvbLNjX+0x5DhIvAikM7bZsS+yy5p6zIjaneyt4JFlnB0bECD/H6S1nBmQsV8MgawGkr4Q5OhP2bldVmsZE2OLo0/Vlzi4OH2n4gkgvS1mdwzFO6PXBkntQyJdiOZhj9aHkk8eOhkZ297tLnnopLxbgyC7Bwb7B7NGDi6OjG17ldFfHNMngwgIEAEBIiACAkRAgAgIEAEBIiACAkTvBhn6K9rQ39lmZ4TPJig9fsOti77jXS+vABkY+WtABq4VccEtJJvCNTUnz0/ltNKRv+6jdtX81fHZhOFRnx72/t3HIf17J0p16dmwUmMq/2VA9iaUTvX1OTxFf3fR+zMub6/Xu5VydMW8w18JUsy8/y6QlLoT9Ef7Ut8KUpl5v/jIg3glSH2y/nKXdRmQcub9ctWm9MotpD74yEZ3mV1WOfN+BaS96OwZ7yGQ6cePVUBqT5jq8+ynYib8yGfEz69a+7ikzfsCmxP7ly+mfhCK2PsMk7Qzlb/f1J+3ITt0AgSIY1kCAkRAgAiIgAARECACAkRAgAgIEKsAiIAAERAgAgJEQIAIiIAAERAgAgJEQIBoNZDQqWwhdlkCAkRAgAiIgAARECACAkRAgAiIgAARECACAkRAgAiIgAARECACAkRAgAiIgAARECACAkRAgAgIEAERECACAkRAgAgIEAERECACAkRAgAgIEAERECACAkRAgAgIEAERECACAkRAgAgIEAERECACAkRAgAgIEAERECACAkRAgAgIEAERECACAkRAgAgIEAERECACAkRAgAgIEAERECACAkRAgAgIEAEBYhV8Vn8EGACid2JXDLnGHQAAAABJRU5ErkJggg=="}},["NHnr"]);
//# sourceMappingURL=app.5a2b9cf40214184deaa5.js.map