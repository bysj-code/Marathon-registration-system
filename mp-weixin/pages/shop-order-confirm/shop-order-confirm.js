(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shop-order-confirm/shop-order-confirm"],{"929c":function(e,t,r){"use strict";var o=r("cea2"),a=r.n(o);a.a},9947:function(e,t,r){"use strict";r.r(t);var o=r("bb11"),a=r.n(o);for(var s in o)"default"!==s&&function(e){r.d(t,e,(function(){return o[e]}))}(s);t["default"]=a.a},"9c51":function(e,t,r){"use strict";var o,a=function(){var e=this,t=e.$createElement;e._self._c},s=[];r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return s})),r.d(t,"a",(function(){return o}))},"9e03":function(e,t,r){"use strict";r.r(t);var o=r("9c51"),a=r("9947");for(var s in a)"default"!==s&&function(e){r.d(t,e,(function(){return a[e]}))}(s);r("929c");var n,d=r("f0c5"),i=Object(d["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],n);t["default"]=i.exports},bb11:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(r("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function s(e,t,r,o,a,s,n){try{var d=e[s](n),i=d.value}catch(u){return void r(u)}d.done?t(i):Promise.resolve(i).then(o,a)}function n(e){return function(){var t=this,r=arguments;return new Promise((function(o,a){var n=e.apply(t,r);function d(e){s(n,o,a,d,i,"next",e)}function i(e){s(n,o,a,d,i,"throw",e)}d(void 0)}))}}var d={data:function(){return{user:{},orderGoods:{},address:{},total:0,type:1,seat:0}},onLoad:function(){var t=n(o.default.mark((function t(r){var a;return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.type=r.type,this.seat=r.seat,this.orderGoods=e.getStorageSync("orderGoods"),1!=this.seat)for(a=0;a<this.orderGoods.length;a++)0==this.total?this.total=parseFloat(this.orderGoods[a].price)*this.orderGoods[a].buynumber:this.total=parseFloat(this.total)+parseFloat(this.orderGoods[a].price)*this.orderGoods[a].buynumber;else this.total=parseFloat(this.orderGoods[0].total),this.address=this.orderGoods[0].address;this.total=this.total.toFixed(2);case 5:case"end":return t.stop()}}),t,this)})));function r(e){return t.apply(this,arguments)}return r}(),onShow:function(){var t=n(o.default.mark((function t(){var r,a,s;return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.getStorageSync("nowTable"),t.next=3,this.$api.session(r);case 3:if(a=t.sent,this.user=a.data,1==this.seat){t.next=15;break}if(s=e.getStorageSync("address"),!s||this.user.id!=s.userid){t.next=11;break}this.address=e.getStorageSync("address"),t.next=15;break;case 11:return t.next=13,this.$api.defaultAddress(this.user.id);case 13:a=t.sent,this.address=a.data;case 15:case"end":return t.stop()}}),t,this)})));function r(){return t.apply(this,arguments)}return r}(),methods:{onSubmitTap:function(){var t=n(o.default.mark((function t(){var r,a;return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=this,1==r.seat||r.address){t.next=4;break}return r.$utils.msg("请选择地址"),t.abrupt("return");case 4:a=e.getStorageSync("nowTable"),e.showModal({title:"提示",content:"是否确认支付",success:function(){var t=n(o.default.mark((function t(s){var n,d,i,u,c,l,f;return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!s.confirm){t.next=58;break}if(n=r.type,d=!0,i="已支付",1!=n){t.next=8;break}r.user.money-r.total<0&&(r.$utils.msg("余额不足，请先充值"),d=!1,i="未支付"),t.next=13;break;case 8:if(2!=n){t.next=13;break}if(!(r.user.jifen-r.total<0)){t.next=13;break}return r.$utils.msg("积分不足，兑换商品失败"),d=!1,t.abrupt("return");case 13:u=0;case 14:if(!(u<r.orderGoods.length)){t.next=44;break}if("huodongshangchang"!=r.orderGoods[u].tablename){t.next=33;break}return t.next=18,r.$api.info("huodongshangchang",r.orderGoods[u].goodid);case 18:if(c=t.sent,!(c.data.onelimittimes>0)){t.next=24;break}if(!(r.orderGoods[u].buynumber>c.data.onelimittimes)){t.next=24;break}return r.$utils.msg("".concat(r.orderGoods[u].goodname,"超过可购买数量")),d=!1,t.abrupt("break",44);case 24:if(!(c.data.alllimittimes<r.orderGoods[u].buynumber)){t.next=30;break}return r.$utils.msg("".concat(r.orderGoods[u].goodname,"已售罄")),d=!1,t.abrupt("break",44);case 30:return 1!=r.seat?c.data.alllimittimes=c.data.alllimittimes-r.orderGoods[u].buynumber:c.data.selected=c.data.selected+","+r.orderGoods[u].activeSeat,t.next=33,r.$api.update("huodongshangchang",c.data);case 33:return l={orderid:r.$utils.genTradeNo(),tablename:r.orderGoods[u].tablename,userid:r.user.id,goodid:r.orderGoods[u].goodid,goodname:r.orderGoods[u].goodname,picture:r.orderGoods[u].picture,buynumber:r.orderGoods[u].buynumber,discountprice:r.orderGoods[u].price,price:r.orderGoods[u].price,total:r.orderGoods[u].price*r.orderGoods[u].buynumber,discounttotal:r.orderGoods[u].price*r.orderGoods[u].buynumber,type:n,address:r.address.address,tel:r.address.phone,consignee:r.address.name,status:i},1==r.seat&&(l["address"]=r.address,f=r.address.split(",").length,l["buynumber"]=f,l["total"]=r.orderGoods[u].price*f,l["discounttotal"]=r.orderGoods[u].price*f),t.next=37,r.$api.add("orders",l);case 37:if(!r.orderGoods[u].id){t.next=41;break}return t.next=40,r.$api.del("cart",JSON.stringify([r.orderGoods[u].id]));case 40:e.removeStorageSync("cart".concat(r.orderGoods[u].goodid).concat(r.user.id));case 41:u++,t.next=14;break;case 44:if(!d){t.next=58;break}if(1!=n){t.next=53;break}return r.$utils.msgBack("支付成功"),r.user.money=r.user.money-r.total,(r.user.jifen||0==r.user.jifen)&&(r.user.jifen=parseFloat(r.user.jifen)+parseFloat(r.total)),t.next=51,r.$api.update(a,r.user);case 51:t.next=58;break;case 53:if(2!=n){t.next=58;break}return r.$utils.msgBack("兑换成功"),r.user.jifen=r.user.jifen-r.total,t.next=58,r.$api.update(a,r.user);case 58:case"end":return t.stop()}}),t)})));function s(e){return t.apply(this,arguments)}return s}()});case 6:case"end":return t.stop()}}),t,this)})));function r(){return t.apply(this,arguments)}return r}(),onAddressTap:function(){this.$utils.jump("../shop-address/shop-address")}}};t.default=d}).call(this,r("543d")["default"])},cea2:function(e,t,r){},f196:function(e,t,r){"use strict";(function(e){r("279d"),r("921b");o(r("66fd"));var t=o(r("9e03"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,r("543d")["createPage"])}},[["f196","common/runtime","common/vendor"]]]);