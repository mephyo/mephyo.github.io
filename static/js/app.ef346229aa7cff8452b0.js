webpackJsonp([1],{Fa5D:function(e,o){},NHnr:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var s=t("7+uW"),a={name:"Navigator",props:{gallery:Object},computed:{status:function(){switch(this.$route.name){case"Overtune":return 0;case"SingleGallery":return 1;case"SinglePhoto":return 2;default:return 0}},galleryName:function(){if(this.$store.state.nowGallery)return this.$store.state.nowGallery.name},havePrevious:function(){if(this.$store.state.nowPhoto)return this.$store.state.nowPhotoIndex>0},haveNext:function(){if(this.$store.state.nowPhoto)return this.$store.state.nowPhotoIndex+1<this.$store.state.nowGallery.photos.length}},methods:{goPrevious:function(){if(this.havePrevious){var e=this.$store.state.nowGallery.photos[this.$store.state.nowPhotoIndex-1].codeName;this.$router.push({name:"SinglePhoto",params:{photoId:e}})}},goNext:function(){if(this.haveNext){var e=this.$store.state.nowGallery.photos[this.$store.state.nowPhotoIndex+1].codeName;this.$router.push({name:"SinglePhoto",params:{photoId:e}})}},goGallery:function(){this.$router.push({name:"SingleGallery",params:{galleryId:this.$store.state.nowGallery.codeName}})},goHome:function(){this.$router.push({name:"Overtune"})},goBack:function(){switch(this.status){case 1:this.goHome();break;case 2:this.goGallery()}}}},r={render:function(){var e=this,o=e.$createElement,t=e._self._c||o;return 0!==this.status?t("nav",{staticClass:"navigator"},[t("div",{staticClass:"navs",on:{click:e.goBack}},[t("div",{staticClass:"icon icon_left"}),e._v(" "),1===this.status?t("div",{staticClass:"logo"}):e._e(),e._v(" "),2===this.status?t("div",{staticClass:"gallery-name"},[e._v(e._s(this.galleryName))]):e._e()]),e._v(" "),2===this.status?t("div",{staticClass:"tools"},[t("div",{staticClass:"icon icon_back",class:{disabled:!e.havePrevious},on:{click:e.goPrevious}}),e._v(" "),t("div",{staticClass:"icon icon_forward",class:{disabled:!e.haveNext},on:{click:e.goNext}})]):e._e()]):e._e()},staticRenderFns:[]},l={name:"app",components:{Navigator:t("VU/8")(a,r,!1,null,null,null).exports},methods:{indexing:function(){var e=this.$route.params.galleryId,o=this.$route.params.photoId;e&&this.$store.commit("changeGallery",e),o&&this.$store.commit("changePhoto",o)}},mounted:function(){this.indexing()},watch:{$route:function(){this.indexing()}}},i={render:function(){var e=this.$createElement,o=this._self._c||e;return o("div",{attrs:{id:"app"}},[o("router-view"),this._v(" "),o("navigator")],1)},staticRenderFns:[]},h=t("VU/8")(l,i,!1,null,null,null).exports,n=t("/ocq"),p={render:function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"overtune"},[t("h1",[e._v("Camera del Cavallo")]),e._v(" "),t("ul",{staticClass:"gallery-list"},e._l(e.gallery,function(o){return t("li",{key:o.codeName},[t("router-link",{attrs:{to:o.codeName}},[e._v(e._s(o.name))])],1)}))])},staticRenderFns:[]},g=t("VU/8")({name:"Overtune",computed:{gallery:function(){return this.$store.state.gallery}}},p,!1,null,null,null).exports,m={render:function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"single-gallery"},[t("h1",[e._v(e._s(e.gallery.name))]),e._v(" "),t("ul",e._l(e.gallery.photos,function(o){return t("li",{key:o.codeName},[t("a",{on:{click:function(t){e.goPhoto(o.codeName)}}},[t("img",{staticClass:"photo",attrs:{src:o.src}})])])}))])},staticRenderFns:[]},c=t("VU/8")({name:"SingleGallery",computed:{gallery:function(){return this.$store.state.nowGallery}},methods:{goPhoto:function(e){this.$router.push({name:"SinglePhoto",params:{photoId:e}})}}},m,!1,null,null,null).exports,y={render:function(){var e=this.$createElement,o=this._self._c||e;return o("div",{staticClass:"single-photo"},[o("img",{staticClass:"photo",attrs:{src:this.photo.src}}),this._v(" "),this.photo.desc?o("p",[this._v(this._s(this.photo.desc))]):this._e()])},staticRenderFns:[]},u=t("VU/8")({name:"SinglePhoto",computed:{photo:function(){return this.$store.state.nowPhoto}}},y,!1,null,null,null).exports;s.a.use(n.a);var d=new n.a({routes:[{path:"/",name:"Overtune",component:g},{path:"/:galleryId",name:"SingleGallery",component:c},{path:"/:galleryId/:photoId",name:"SinglePhoto",component:u}]}),b=t("NYxO");s.a.use(b.a);var N=new b.a.Store({state:{gallery:[{name:"Lemon in April",codeName:"lemon",photos:[{src:"https://mephyo.github.io/gallery/lemon/1.jpg",codeName:"lemon-1"},{src:"https://mephyo.github.io/gallery/lemon/2.jpg",codeName:"lemon-2"},{src:"https://mephyo.github.io/gallery/lemon/3.jpg",codeName:"lemon-3"},{src:"https://mephyo.github.io/gallery/lemon/4.jpg",codeName:"lemon-4"},{src:"https://mephyo.github.io/gallery/lemon/5.jpg",codeName:"lemon-5"},{src:"https://mephyo.github.io/gallery/lemon/6.jpg",codeName:"lemon-6"},{src:"https://mephyo.github.io/gallery/lemon/7.jpg",codeName:"lemon-7"},{src:"https://mephyo.github.io/gallery/lemon/9.jpg",codeName:"lemon-8"}]},{name:"Elapse",codeName:"elapse",photos:[{src:"https://mephyo.github.io/gallery/elapse/1.jpg",codeName:"elapse-1"},{src:"https://mephyo.github.io/gallery/elapse/2.jpg",codeName:"elapse-2"},{src:"https://mephyo.github.io/gallery/elapse/3.jpg",codeName:"elapse-3"},{src:"https://mephyo.github.io/gallery/elapse/4.jpg",codeName:"elapse-4"},{src:"https://mephyo.github.io/gallery/elapse/8.jpg",codeName:"elapse-5"},{src:"https://mephyo.github.io/gallery/elapse/9.jpg",codeName:"elapse-6"},{src:"https://mephyo.github.io/gallery/elapse/10.jpg",codeName:"elapse-7"},{src:"https://mephyo.github.io/gallery/elapse/11.jpg",codeName:"elapse-8"},{src:"https://mephyo.github.io/gallery/elapse/13.jpg",codeName:"elapse-9"},{src:"https://mephyo.github.io/gallery/elapse/15.jpg",codeName:"elapse-10"},{src:"https://mephyo.github.io/gallery/elapse/16.jpg",codeName:"elapse-11"}]},{name:"Lemon in November",codeName:"afternoon",photos:[{src:"https://mephyo.github.io/gallery/afternoon/1.jpg",codeName:"november-1"},{src:"https://mephyo.github.io/gallery/afternoon/2.jpg",codeName:"november-2"},{src:"https://mephyo.github.io/gallery/afternoon/3.jpg",codeName:"november-3"},{src:"https://mephyo.github.io/gallery/afternoon/4.jpg",codeName:"november-4"},{src:"https://mephyo.github.io/gallery/afternoon/5.jpg",codeName:"november-5"},{src:"https://mephyo.github.io/gallery/afternoon/6.jpg",codeName:"november-6"},{src:"https://mephyo.github.io/gallery/afternoon/7.jpg",codeName:"november-7"},{src:"https://mephyo.github.io/gallery/afternoon/8.jpg",codeName:"november-8"},{src:"https://mephyo.github.io/gallery/afternoon/9.jpg",codeName:"november-9"},{src:"https://mephyo.github.io/gallery/afternoon/10.jpg",codeName:"november-10"},{src:"https://mephyo.github.io/gallery/afternoon/11.jpg",codeName:"november-11"},{src:"https://mephyo.github.io/gallery/afternoon/12.jpg",codeName:"november-12"},{src:"https://mephyo.github.io/gallery/afternoon/13.jpg",codeName:"november-13"},{src:"https://mephyo.github.io/gallery/afternoon/14.jpg",codeName:"november-14"},{src:"https://mephyo.github.io/gallery/afternoon/15.jpg",codeName:"november-15"},{src:"https://mephyo.github.io/gallery/afternoon/16.jpg",codeName:"november-16"},{src:"https://mephyo.github.io/gallery/afternoon/17.jpg",codeName:"november-17"},{src:"https://mephyo.github.io/gallery/afternoon/18.jpg",codeName:"november-18"},{src:"https://mephyo.github.io/gallery/afternoon/19.jpg",codeName:"november-19"},{src:"https://mephyo.github.io/gallery/afternoon/20.jpg",codeName:"november-20"},{src:"https://mephyo.github.io/gallery/afternoon/21.jpg",codeName:"november-21"},{src:"https://mephyo.github.io/gallery/afternoon/22.jpg",codeName:"november-22"},{src:"https://mephyo.github.io/gallery/afternoon/23.jpg",codeName:"november-23"},{src:"https://mephyo.github.io/gallery/afternoon/24.jpg",codeName:"november-24"},{src:"https://mephyo.github.io/gallery/afternoon/25.jpg",codeName:"november-25"},{src:"https://mephyo.github.io/gallery/afternoon/26.jpg",codeName:"november-26"},{src:"https://mephyo.github.io/gallery/afternoon/27.jpg",codeName:"november-27"},{src:"https://mephyo.github.io/gallery/afternoon/28.jpg",codeName:"november-28"},{src:"https://mephyo.github.io/gallery/afternoon/29.jpg",codeName:"november-29"},{src:"https://mephyo.github.io/gallery/afternoon/30.jpg",codeName:"november-30"},{src:"https://mephyo.github.io/gallery/afternoon/31.jpg",codeName:"november-31"},{src:"https://mephyo.github.io/gallery/afternoon/32.jpg",codeName:"november-32"},{src:"https://mephyo.github.io/gallery/afternoon/33.jpg",codeName:"november-33"},{src:"https://mephyo.github.io/gallery/afternoon/34.jpg",codeName:"november-34"},{src:"https://mephyo.github.io/gallery/afternoon/35.jpg",codeName:"november-35"},{src:"https://mephyo.github.io/gallery/afternoon/36.jpg",codeName:"november-36"},{src:"https://mephyo.github.io/gallery/afternoon/37.jpg",codeName:"november-37"},{src:"https://mephyo.github.io/gallery/afternoon/38.jpg",codeName:"november-38"},{src:"https://mephyo.github.io/gallery/afternoon/39.jpg",codeName:"november-39"},{src:"https://mephyo.github.io/gallery/afternoon/40.jpg",codeName:"november-40"},{src:"https://mephyo.github.io/gallery/afternoon/41.jpg",codeName:"november-41"},{src:"https://mephyo.github.io/gallery/afternoon/42.jpg",codeName:"november-42"}]},{name:"Lemon",codeName:"lemoninspring",photos:[{src:"https://mephyo.github.io/gallery/lemoninspring/1.jpg",codeName:"spring-1"},{src:"https://mephyo.github.io/gallery/lemoninspring/2.jpg",codeName:"spring-2"},{src:"https://mephyo.github.io/gallery/lemoninspring/3.jpg",codeName:"spring-3"},{src:"https://mephyo.github.io/gallery/lemoninspring/4.jpg",codeName:"spring-4"},{src:"https://mephyo.github.io/gallery/lemoninspring/5.jpg",codeName:"spring-5"},{src:"https://mephyo.github.io/gallery/lemoninspring/6.jpg",codeName:"spring-6"},{src:"https://mephyo.github.io/gallery/lemoninspring/7.jpg",codeName:"spring-7"}]},{name:"Lemon",codeName:"lemoninsummer",photos:[{src:"https://mephyo.github.io/gallery/lemoninsummer/1.jpg",codeName:"summer-1"},{src:"https://mephyo.github.io/gallery/lemoninsummer/2.jpg",codeName:"summer-2"},{src:"https://mephyo.github.io/gallery/lemoninsummer/3.jpg",codeName:"summer-3"},{src:"https://mephyo.github.io/gallery/lemoninsummer/4.jpg",codeName:"summer-4"},{src:"https://mephyo.github.io/gallery/lemoninsummer/5.jpg",codeName:"summer-5"},{src:"https://mephyo.github.io/gallery/lemoninsummer/6.jpg",codeName:"summer-6"},{src:"https://mephyo.github.io/gallery/lemoninsummer/7.jpg",codeName:"summer-7"}]},{name:"Lisa",codeName:"lisa",photos:[{src:"https://mephyo.github.io/gallery/lisa/1.jpg",codeName:"lisa-1"},{src:"https://mephyo.github.io/gallery/lisa/2.jpg",codeName:"lisa-2"},{src:"https://mephyo.github.io/gallery/lisa/3.jpg",codeName:"lisa-3"},{src:"https://mephyo.github.io/gallery/lisa/4.jpg",codeName:"lisa-4"},{src:"https://mephyo.github.io/gallery/lisa/5.jpg",codeName:"lisa-5"},{src:"https://mephyo.github.io/gallery/lisa/6.jpg",codeName:"lisa-6"},{src:"https://mephyo.github.io/gallery/lisa/7.jpg",codeName:"lisa-7"},{src:"https://mephyo.github.io/gallery/lisa/8.jpg",codeName:"lisa-8"},{src:"https://mephyo.github.io/gallery/lisa/9.jpg",codeName:"lisa-9"},{src:"https://mephyo.github.io/gallery/lisa/10.jpg",codeName:"lisa-10"},{src:"https://mephyo.github.io/gallery/lisa/11.jpg",codeName:"lisa-11"},{src:"https://mephyo.github.io/gallery/lisa/12.jpg",codeName:"lisa-12"},{src:"https://mephyo.github.io/gallery/lisa/13.jpg",codeName:"lisa-13"},{src:"https://mephyo.github.io/gallery/lisa/14.jpg",codeName:"lisa-14"},{src:"https://mephyo.github.io/gallery/lisa/15.jpg",codeName:"lisa-15"},{src:"https://mephyo.github.io/gallery/lisa/16.jpg",codeName:"lisa-16"},{src:"https://mephyo.github.io/gallery/lisa/17.jpg",codeName:"lisa-17"},{src:"https://mephyo.github.io/gallery/lisa/18.jpg",codeName:"lisa-18"},{src:"https://mephyo.github.io/gallery/lisa/19.jpg",codeName:"lisa-19"},{src:"https://mephyo.github.io/gallery/lisa/20.jpg",codeName:"lisa-20"},{src:"https://mephyo.github.io/gallery/lisa/21.jpg",codeName:"lisa-21"},{src:"https://mephyo.github.io/gallery/lisa/22.jpg",codeName:"lisa-22"},{src:"https://mephyo.github.io/gallery/lisa/23.jpg",codeName:"lisa-23"},{src:"https://mephyo.github.io/gallery/lisa/24.jpg",codeName:"lisa-24"},{src:"https://mephyo.github.io/gallery/lisa/25.jpg",codeName:"lisa-25"},{src:"https://mephyo.github.io/gallery/lisa/26.jpg",codeName:"lisa-26"}]},{name:"Lisa Naked",codeName:"lisaundressed",photos:[{src:"https://mephyo.github.io/gallery/lisaundressed/1.jpg",codeName:"night-1"},{src:"https://mephyo.github.io/gallery/lisaundressed/2.jpg",codeName:"night-2"},{src:"https://mephyo.github.io/gallery/lisaundressed/3.jpg",codeName:"night-3"},{src:"https://mephyo.github.io/gallery/lisaundressed/4.jpg",codeName:"night-4"},{src:"https://mephyo.github.io/gallery/lisaundressed/5.jpg",codeName:"night-5"},{src:"https://mephyo.github.io/gallery/lisaundressed/6.jpg",codeName:"night-6"},{src:"https://mephyo.github.io/gallery/lisaundressed/7.jpg",codeName:"night-7"},{src:"https://mephyo.github.io/gallery/lisaundressed/8.jpg",codeName:"night-8"}]}],nowGalleryIndex:0,nowGallery:"",nowPhotoIndex:0,nowPhoto:""},mutations:{changeGallery:function(e,o){var t=e.gallery.map(function(e){return e.codeName}).indexOf(o);e.nowGalleryIndex=t,e.nowGallery=e.gallery[t]},changePhoto:function(e,o){var t=e.nowGallery.photos.map(function(e){return e.codeName}).indexOf(o);e.nowPhotoIndex=t,e.nowPhoto=e.nowGallery.photos[t]}}});t("Fa5D");s.a.config.productionTip=!1,new s.a({el:"#app",router:d,store:N,template:"<App/>",components:{App:h}})}},["NHnr"]);
//# sourceMappingURL=app.ef346229aa7cff8452b0.js.map