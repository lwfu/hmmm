"use strict";(self["webpackChunkhrmm"]=self["webpackChunkhrmm"]||[]).push([[920],{4920:function(t,e,n){n.r(e),n.d(e,{default:function(){return h}});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-nav-bar",{attrs:{title:"编辑资料","left-arrow":""},on:{"click-left":function(e){return t.$router.push("/my")}}}),n("div",[n("div",{staticClass:"avatar-box",on:{click:function(e){return t.$router.push("/photo")}}},[n("p",[t._v("头像")]),n("div",{staticClass:"imss"},[n("img",{attrs:{src:t.pic}})])]),n("van-cell-group",[n("van-cell",{attrs:{title:"名称",value:t.name,"is-link":""},on:{click:function(e){t.nameShow=!0}}}),n("van-cell",{attrs:{title:"性别",value:0===t.userInfo.gender?"女":"男","is-link":""},on:{click:function(e){t.genderShow=!0}}}),n("van-cell",{attrs:{title:"地区",value:t.area,"is-link":""},on:{click:function(e){t.areaShow=!0}}}),n("van-cell",{attrs:{title:"个人简历",value:t.intro,"is-link":""},on:{click:function(e){t.resumeShow=!0}}})],1)],1),n("div",{staticClass:"exit"},[n("van-button",{on:{click:t.exitLout}},[t._v("退出登录")])],1),n("van-popup",{model:{value:t.nameShow,callback:function(e){t.nameShow=e},expression:"nameShow"}},[n("h1",[t._v("修改姓名")]),n("van-field",{model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),n("van-button",{on:{click:function(e){t.nameShow=!1}}},[t._v("取消")]),n("van-button",{on:{click:t.xiugai}},[t._v("确认")])],1),n("div",{staticClass:"popupShow"},[n("van-popup",{attrs:{position:"bottom"},model:{value:t.genderShow,callback:function(e){t.genderShow=e},expression:"genderShow"}},[n("van-nav-bar",{attrs:{title:"修改性别","left-text":"取消"},on:{"click-left":function(e){t.genderShow=!1}}}),n("van-cell",{attrs:{title:"男"},on:{click:function(e){return t.genderSubmit(1)}}}),n("van-cell",{attrs:{title:"女"},on:{click:function(e){return t.genderSubmit(0)}}})],1)],1),n("van-popup",{model:{value:t.areaShow,callback:function(e){t.areaShow=e},expression:"areaShow"}},[n("h1",[t._v("修改地区")]),n("van-field",{model:{value:t.area,callback:function(e){t.area=e},expression:"area"}}),n("van-button",{on:{click:function(e){t.areaShow=!1}}},[t._v("取消")]),n("van-button",{on:{click:t.areaEdit}},[t._v("确认")])],1),n("van-popup",{model:{value:t.resumeShow,callback:function(e){t.resumeShow=e},expression:"resumeShow"}},[n("h1",[t._v("个人简历")]),n("van-field",{model:{value:t.intro,callback:function(e){t.intro=e},expression:"intro"}}),n("van-button",{on:{click:function(e){t.resumeShow=!1}}},[t._v("取消")]),n("van-button",{on:{click:t.resume}},[t._v("确认")])],1)],1)},i=[],s=n(6165),o=n(4665),r={data(){return{nameShow:!1,name:this.$store.state.userInfo.nickname,genderShow:!1,area:this.$store.state.userInfo.area,areaShow:!1,intro:this.$store.state.userInfo.intro,resumeShow:!1,pic:""}},computed:{...(0,o.Se)(["userInfo"])},methods:{async xiugai(){""!==this.name&&this.name!==this.userInfo.nickname?(await(0,s.dz)({nickname:this.name}),this.$toast.success("修改成功"),this.nameShow=!1,this.$store.commit("SET_USERINFO",{...this.userInfo,name:this.name})):this.$toast.fail("请修改后再提交")},async genderSubmit(t){this.userInfo.gender!==t?(await(0,s.dz)({gender:t}),this.$store.commit("SET_USERINFO",{...this.userInfo,gender:t}),this.$toast.success("修改成功"),this.genderShow=!1):this.$toast.fail("请修改后再提交")},async areaEdit(){""!==this.area&&this.area!==this.userInfo.area?(await(0,s.dz)({area:this.area}),this.$toast.success("修改成功"),this.areaShow=!1,this.$store.commit("SET_USERINFO",{...this.userInfo,area:this.area})):this.$toast.fail("请修改后再提交")},async resume(){""!==this.intro&&this.intro!==this.userInfo.intro?(await(0,s.dz)({intro:this.intro}),this.$toast.success("修改成功"),this.resumeShow=!1,this.$store.commit("SET_USERINFO",{...this.userInfo,intro:this.intro})):this.$toast.fail("请修改后再提交")},exitLout(){this.$dialog.confirm({title:"确认退出登录？"}).then((()=>{this.$store.dispatch("logout","/login"),this.$toast.success({message:"退出登录成功",duration:300})})).catch((t=>t))}},created(){this.pic=`http://hmmm.zllhyy.cn${this.$store.getters.userInfo.avatar}`}},c=r,l=n(1001),u=(0,l.Z)(c,a,i,!1,null,"00e8d7e4",null),h=u.exports}}]);