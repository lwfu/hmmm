"use strict";(self["webpackChunkhrmm"]=self["webpackChunkhrmm"]||[]).push([[687],{29687:function(n,t,r){r.r(t),r.d(t,{default:function(){return h}});var e=function(){var n=this,t=n.$createElement,r=n._self._c||t;return n.technic.id?r("div",{staticClass:"technic"},[r("van-nav-bar",{attrs:{fixed:"",placeholder:"","left-arrow":""},on:{"click-left":function(t){"/findlist"===n.$route.meta.fromPath?n.$router.push("/findlist"):n.$router.push("/find")}}}),r("div",{staticClass:"content"},[r("header",[r("h2",[n._v(n._s(n.technic.title))])]),r("div",{staticClass:"time"},[r("span",[n._v(n._s(n._f("formatTime")(n.technic.updated_at)))]),r("div",{staticClass:"info"},[r("span",[r("van-icon",{attrs:{name:"eye-o"}}),n._v(n._s(n.technic.read))],1),r("span",[r("van-icon",{attrs:{name:"good-job-o"}}),n._v(n._s(n.technic.star))],1)])]),r("div",{domProps:{innerHTML:n._s(n.technic.content)}})])],1):n._e()},c=[],i=r(67906),a=r(16198),u=r(70346),o={name:"Technic",data:function(){return{technic:{}}},created:function(){var n=this;return(0,a.Z)((0,i.Z)().mark((function t(){var r;return(0,i.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,u.A9)(n.$route.params.id);case 2:r=t.sent,n.technic=r.data;case 4:case"end":return t.stop()}}),t)})))()}},s=o,l=r(1001),f=(0,l.Z)(s,e,c,!1,null,"7130748c",null),h=f.exports},70346:function(n,t,r){r.d(t,{A9:function(){return i},Ai:function(){return o},Cz:function(){return u},E2:function(){return h},Fy:function(){return m},Jy:function(){return s},PF:function(){return d},VG:function(){return c},oJ:function(){return l},ot:function(){return f},xq:function(){return a}});var e=r(25972),c=function(n){return(0,e.Z)({url:"/articles/technic",params:n,noToken:!0})},i=function(n){return(0,e.Z)({url:"/articles/technic/"+n,noToken:!0})},a=function(){return(0,e.Z)({url:"/articles/technicTopSearch",noToken:!0})},u=function(n){return(0,e.Z)({url:"/articles/share",params:n,noToken:!0})},o=function(n){return(0,e.Z)({url:"/articles/share/"+n,noToken:!0})},s=function(){return(0,e.Z)({url:"/articles/shareTopSearch",noToken:!0})},l=function(n){return(0,e.Z)({url:"/articles/comments/"+n.id,params:n,noToken:!0})},f=function(n){return(0,e.Z)({url:"/articles/comments",method:"POST",data:n})},h=function(n){return(0,e.Z)({url:"/articles/star",method:"POST",data:n})},d=function(n){return(0,e.Z)({url:"/articles/collect",method:"POST",data:n})};function m(n){return(0,e.Z)({url:"/articles/shareImg",method:"post",data:n})}}}]);