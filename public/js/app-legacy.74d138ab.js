(function(){"use strict";var t={5418:function(t,n,e){e.r(n)},7378:function(t,n,e){e(6992),e(8674),e(9601),e(7727);var o=e(8935),r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("div",t._l(t.messages,(function(n,o){return e("div",{key:o,staticClass:"bg-green-200 text-sm w-2/3 m-2 p-2 rounded"},[e("h6",{staticClass:"font-semibold"},[t._v(t._s(n.username))]),e("p",[t._v(t._s(n.msg))])])})),0),e("div",{staticClass:"w-full flex justify-center items-center fixed bottom-0"},[e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.msg,expression:"msg",modifiers:{trim:!0}}],staticClass:"w-4/5 h-12 border-t-2 border-gray-600 p-2 text-xs outline-none",attrs:{type:"text"},domProps:{value:t.msg},on:{keyup:function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"enter",13,n.key,"Enter")?null:t.send.apply(null,arguments)},input:function(n){n.target.composing||(t.msg=n.target.value.trim())},blur:function(n){return t.$forceUpdate()}}}),e("button",{staticClass:"w-1/5 h-12 bg-gray-800 text-white font-semibold",on:{click:t.send}},[t._v(" send ")])])])},i=[],s={name:"App",data:function(){return{messages:[],msg:""}},methods:{incoming:function(t){this.messages.push(t)},send:function(){this.$socket.client.emit("chat message",this.msg),this.msg=""}},sockets:{connect:function(){console.log("socket connected")}},mounted:function(){this.$socket.client.on("chat message",this.incoming)}},u=s,c=e(1001),a=(0,c.Z)(u,r,i,!1,null,null,null),f=a.exports,l=e(3853),d=e(4041);e(5418),o.Z.config.productionTip=!1;var m=(0,d.io)("ws://23.88.47.125:4000",{transports:["websocket"]});o.Z.use(l.Z,m),new o.Z({render:function(t){return t(f)}}).$mount("#app")}},n={};function e(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={exports:{}};return t[o](i,i.exports,e),i.exports}e.m=t,function(){var t=[];e.O=function(n,o,r,i){if(!o){var s=1/0;for(f=0;f<t.length;f++){o=t[f][0],r=t[f][1],i=t[f][2];for(var u=!0,c=0;c<o.length;c++)(!1&i||s>=i)&&Object.keys(e.O).every((function(t){return e.O[t](o[c])}))?o.splice(c--,1):(u=!1,i<s&&(s=i));if(u){t.splice(f--,1);var a=r();void 0!==a&&(n=a)}}return n}i=i||0;for(var f=t.length;f>0&&t[f-1][2]>i;f--)t[f]=t[f-1];t[f]=[o,r,i]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};e.O.j=function(n){return 0===t[n]};var n=function(n,o){var r,i,s=o[0],u=o[1],c=o[2],a=0;if(s.some((function(n){return 0!==t[n]}))){for(r in u)e.o(u,r)&&(e.m[r]=u[r]);if(c)var f=c(e)}for(n&&n(o);a<s.length;a++)i=s[a],e.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return e.O(f)},o=self["webpackChunksample"]=self["webpackChunksample"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=e.O(void 0,[998],(function(){return e(7378)}));o=e.O(o)})();
//# sourceMappingURL=app-legacy.74d138ab.js.map