(self["webpackChunkhrmm"]=self["webpackChunkhrmm"]||[]).push([[289],{92289:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return m}});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.cityPositions["全国"]?n("div",{staticClass:"question"},[n("van-nav-bar",{scopedSlots:t._u([{key:"title",fn:function(){return[n("van-dropdown-menu",[n("van-dropdown-item",{ref:"dropdownRef",attrs:{"get-container":".question"},scopedSlots:t._u([{key:"title",fn:function(){return[t._v(" 面试宝典 "),n("span",{staticClass:"region"},[t._v(t._s(t.city))])]},proxy:!0}],null,!1,3908778756)},[n("van-index-bar",[t._l(t.citys,(function(e,i){return[n("van-index-anchor",{key:e.id,attrs:{index:e.key}}),t._l(e.children,(function(i,r){return n("van-cell",{key:i+e.id,attrs:{title:i},on:{click:function(e){return t.changeCity(i)}}})}))]}))],2)],1)],1)]},proxy:!0}],null,!1,3512096130)}),n("van-cell",{staticClass:"question-tabs",attrs:{border:!1}},[n("van-tabs",{attrs:{type:"card","title-active-color":"#fff","title-inactive-color":"#333","swipe-threshold":"0"},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},t._l(t.cityPositions[t.city],(function(t){return n("van-tab",{key:t.id,attrs:{title:t.name,name:t.id}})})),1)],1),t.bol?n("div",[n("div",{staticClass:"question-box"},[t._m(0),n("div",{staticClass:"middle"},[n("van-circle",{attrs:{rate:t.rate,speed:t.speed,color:t.gradientColor,"layer-color":"#FEEFF1"},model:{value:t.currentRate,callback:function(e){t.currentRate=e},expression:"currentRate"}},[n("div",{staticClass:"text"},[n("span",[t._v("顺序刷题")]),n("span",[t._v(t._s(t.currentQuestion)+"/"+t._s(t.total))])])])],1),t._m(1)]),n("div",{staticClass:"question-total"},[n("p",{staticClass:"text"},[t._v("累计收录")]),n("p",{staticClass:"count"},[t._v(t._s(t.total))])]),n("div",{staticClass:"question-interview"},[n("van-button",{attrs:{color:"#00B8D3",to:"/interview/"+t.active+"/"+t.city}},[t._v(" 模拟面试 ")])],1)]):t._e()],1):t._e()},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"left"},[n("div",{staticClass:"top failure"},[n("i",{staticClass:"iconfont icon-shitibaocuo"}),n("span",{staticClass:"icon-text"},[t._v("常错题库")])]),n("div",{staticClass:"bottom star"},[n("i",{staticClass:"iconfont icon-qiyeyewu"}),n("span",{staticClass:"icon-text"},[t._v("企业题库")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"right"},[n("div",{staticClass:"top balance"},[n("i",{staticClass:"iconfont icon-shitishoucang"}),n("span",{staticClass:"icon-text"},[t._v("收藏题库")])]),n("div",{staticClass:"bottom orders"},[n("i",{staticClass:"iconfont icon-bishitiku"}),n("span",{staticClass:"icon-text"},[t._v("已答题库")])])])}];function s(t){if(Array.isArray(t))return t}n(82526),n(41817),n(41539),n(32165),n(78783),n(33948);function a(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var i,r,s=[],a=!0,o=!1;try{for(n=n.call(t);!(a=(i=n.next()).done);a=!0)if(s.push(i.value),e&&s.length===e)break}catch(c){o=!0,r=c}finally{try{a||null==n["return"]||n["return"]()}finally{if(o)throw r}}return s}}n(47042),n(68309),n(91038),n(74916),n(77601);function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function c(t,e){if(t){if("string"===typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(t,e):void 0}}n(21703);function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(t,e){return s(t)||a(t,e)||c(t,e)||u()}var v=n(67906),f=n(16198),y=(n(38862),n(69826),n(69720),n(94612)),d={name:"question",data:function(){return{active:"",city:"",currentRate:0,gradientColor:{"0%":"rgba(228,1,55,0.70)","100%":"rgba(228,1,55,0.30)"},cityPositions:{},citys:[],total:0,currentQuestion:0,bol:!0,flashTime:1500,rate_total:0,rate_curQuestion:0}},computed:{rate:function(){return this.rate_curQuestion/this.rate_total*100},speed:function(){return this.rate/this.flashTime*1e3}},watch:{city:function(t){var e={active:this.active,city:t};sessionStorage.setItem("prevCategory",JSON.stringify(e)),this.getQuestionCount()},active:function(t){var e={active:t,city:this.city};sessionStorage.setItem("prevCategory",JSON.stringify(e)),this.getQuestionCount()}},methods:{changeCity:function(t){this.city=t,this.$refs.dropdownRef.toggle(),this.$nextTick((function(){}))},addCount:function(t,e,n){var i=this;!e&&(this[t]=0),setTimeout((function(){i[t]<e&&(i[t]++,i.addCount(t,e,n))}),n)},getQuestionCount:function(){var t=this;return(0,f.Z)((0,v.Z)().mark((function e(){var n,i,r,s;return(0,v.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.bol=!1,t.active&&t.city){e.next=3;break}return e.abrupt("return");case 3:return e.prev=3,e.next=6,(0,y.w)({type:t.active,city:t.city});case 6:i=e.sent,r=i.data,t.total=0,t.currentQuestion=0,t.rate_total=0,t.rate_total=r.length,s=JSON.parse(sessionStorage.getItem("answerList"))||[],t.rate_curQuestion=(null===(n=s.find((function(e){return+e.key.type===t.active&&e.key.city===t.city})))||void 0===n?void 0:n.value.length)||0,t.addCount("currentQuestion",t.rate_curQuestion,t.flashTime/50),t.addCount("total",t.rate_total,t.flashTime/r.length),e.next=20;break;case 18:e.prev=18,e.t0=e["catch"](3);case 20:t.bol=!0;case 21:case"end":return e.stop()}}),e,null,[[3,18]])})))()}},created:function(){var t=this;return(0,f.Z)((0,v.Z)().mark((function e(){var n,i,r,s,a,o,c,u,f,d,h,p;return(0,v.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.active=(null===(n=JSON.parse(sessionStorage.getItem("prevCategory")))||void 0===n?void 0:n.active)||"",t.city=(null===(i=JSON.parse(sessionStorage.getItem("prevCategory")))||void 0===i?void 0:i.city)||"全国",e.prev=2,!t.$store.getters.cityInfo.citys){e.next=7;break}return t.cityPositions=t.$store.getters.cityInfo.cityPositions,t.citys=t.$store.getters.cityInfo.citys,e.abrupt("return");case 7:return e.next=9,(0,y.c)();case 9:for(r=e.sent,s=r.data,a=[],o=0,c=0,u=Object.entries(s.citys);c<u.length;c++)f=l(u[c],2),d=f[0],h=f[1],a.push({id:o,key:d,children:h}),o++;t.cityPositions=s.cityPositions,t.citys=a,p={cityPositions:t.cityPositions,citys:t.citys},t.$store.dispatch("savaCityInfo",p),e.next=23;break;case 20:e.prev=20,e.t0=e["catch"](2),t.requestErr=!0;case 23:case"end":return e.stop()}}),e,null,[[2,20]])})))()},destroyed:function(){var t={active:this.active,city:this.city};sessionStorage.setItem("prevCategory",JSON.stringify(t))}},h=d,p=n(1001),g=(0,p.Z)(h,i,r,!1,null,"6e75a2b6",null),m=g.exports},44699:function(t,e,n){var i=n(19781),r=n(1702),s=n(81956),a=n(45656),o=n(55296).f,c=r(o),u=r([].push),l=function(t){return function(e){var n,r=a(e),o=s(r),l=o.length,v=0,f=[];while(l>v)n=o[v++],i&&!c(r,n)||u(f,t?[n,r[n]]:r[n]);return f}};t.exports={entries:l(!0),values:l(!1)}},91038:function(t,e,n){var i=n(82109),r=n(48457),s=n(17072),a=!s((function(t){Array.from(t)}));i({target:"Array",stat:!0,forced:a},{from:r})},69720:function(t,e,n){var i=n(82109),r=n(44699).entries;i({target:"Object",stat:!0},{entries:function(t){return r(t)}})},94612:function(t,e,n){"use strict";n.d(e,{c:function(){return r},w:function(){return s}});var i=n(25972),r=function(){return(0,i.Z)({url:"/interview/filters"})},s=function(t){return(0,i.Z)({url:"/interview/questions",params:t,needCancel:!0})}}}]);