module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = { exports: {} }; __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); if(typeof m.exports === "object") { Object.keys(m.exports).forEach(function(k) { __MODS__[modId].m.exports[k] = m.exports[k]; }); if(m.exports.__esModule) Object.defineProperty(__MODS__[modId].m.exports, "__esModule", { value: true }); } else { __MODS__[modId].m.exports = m.exports; } } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1546031961945, function(require, module, exports) {
'use strict';var _typeof='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&'function'==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?'symbol':typeof a},promisify=function(a){return function(b){for(var c=arguments.length,d=Array(1<c?c-1:0),e=1;e<c;e++)d[e-1]=arguments[e];return new Promise(function(f,g){a.apply(void 0,[Object.assign({},b,{success:f,fail:g})].concat(d)),Promise.prototype.finally=function(h){var j=this.constructor;return this.then(function(k){return j.resolve(h()).then(function(){return k})},function(k){return j.resolve(h()).then(function(){throw k})})}})}};wx.pro={};var wxPromise=function(){for(var a in wx)wx.hasOwnProperty(a)&&(wx.pro[a]=/^on|^create|Sync$|Manager$|^pause/.test(a)&&'createBLEConnection'!=a||'stopRecord'==a||'stopVoice'==a||'stopBackgroundAudio'==a||'stopPullDownRefresh'==a||'hideKeyboard'==a||'hideToast'==a||'hideLoading'==a||'showNavigationBarLoading'==a||'hideNavigationBarLoading'==a||'canIUse'==a||'navigateBack'==a||'closeSocket'==a||'closeSocket'==a||'pageScrollTo'==a||'drawCanvas'==a?wx[a]:promisify(wx[a]));wx.pro.match=function(a,b){var c='';return'chinese'===a?c=/[\u4e00-\u9fa5]/gm:'email'===a?c=/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/:'url'===a?c=/^https?:\/\/(([a-zA-Z0-9_-])+(\.)?)*(:\d+)?(\/((\.)?(\?)?=?&?[a-zA-Z0-9_-](\?)?)*)*$/i:'phoneNumber'===a?c=/^(0|86|17951)?(13[0-9]|14[579]|15[012356789]|16[56]|17[1235678]|18[0-9]|19[89])\s{0,1}[0-9]{4}\s{0,1}[0-9]{4}$/:'cardid'===a?c=/^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/:'mail'===a&&(c=/^[1-9]\d{5}(?!\d)$/),!!c.test(b)},wx.pro.showTopTips=function(a,b){return new Promise(function(c,d){a||d('\u7F3A\u5C11\u914D\u7F6E\u9879\uFF01'),a.content||d('option.content\u5C5E\u6027\u662F\u5FC5\u987B\u7684');var e=b.data.topTips||{};e.timeout&&(clearTimeout(e.timeout),e.timeout=0),a.duration===void 0&&(a.duration=3e3);var f=setTimeout(function(){b.setData({"topTips.show":!1,"topTips.timeout":0},function(){c()})},a.duration);b.setData({topTips:{show:!0,content:a.content,timeout:f}})})},wx.pro.initChart=function(a,b){return function(c,d,e){var f=b.init(c,null,{width:d,height:e});return c.setChart(f),f.setOption(a),f}},wx.pro.lazyInitChart=function(a,b,c,d){return new Promise(function(e){d.selectComponent(c).init(function(k,l,m){var n=b.init(k,null,{width:l,height:m});n.setOption(a),d.chart=n,e(n)})})},wx.pro.updateChart=function(a,b){a.clear(),a.setOption(b)},wx.pro.saveImageToPhotosAlbum=function(a){return new Promise(function(b,c){wx.getSetting({success:function success(d){d.authSetting['scope.writePhotosAlbum']?wx.saveImageToPhotosAlbum({filePath:a,success:function success(e){b(e)},fail:function fail(e){c(e)}}):wx.authorize({scope:'scope.writePhotosAlbum',success:function success(){wx.saveImageToPhotosAlbum({filePath:a,success:function success(e){b(e)},fail:function fail(e){c(e)}})},fail:function fail(){wx.hideLoading(),wx.pro.showModal({title:'\u6E29\u99A8\u63D0\u793A',content:'\u8BF7\u6388\u6743\u7CFB\u7EDF\u4F7F\u7528\u4FDD\u5B58\u56FE\u7247\u63A5\u53E3',confirmText:'\u77E5\u9053\u4E86',showCancel:!1}).then(function(){wx.openSetting()})}})},fail:function fail(d){c(d)}})})},wx.pro.canvasToTempFilePath=function(a){return new Promise(function(b,c){a.draw(!0,function(){wx.canvasToTempFilePath({canvasId:'card',success:function success(d){b(d)},fail:function fail(d){c(d)}})})})}};wxPromise(),!function(a){'use strict';function b(I,J,K,L){var M=J&&J.prototype instanceof d?J:d,N=Object.create(M.prototype),O=new n(L||[]);return N._invoke=j(I,K,O),N}function c(I,J,K){try{return{type:'normal',arg:I.call(J,K)}}catch(L){return{type:'throw',arg:L}}}function d(){}function e(){}function f(){}function g(I){['next','throw','return'].forEach(function(J){I[J]=function(K){return this._invoke(J,K)}})}function h(I){function J(M,N,O,Q){var R=c(I[M],I,N);if('throw'===R.type)Q(R.arg);else{var S=R.arg,T=S.value;return T&&'object'===('undefined'==typeof T?'undefined':_typeof(T))&&r.call(T,'__await')?Promise.resolve(T.__await).then(function(U){J('next',U,O,Q)},function(U){J('throw',U,O,Q)}):Promise.resolve(T).then(function(U){S.value=U,O(S)},Q)}}var L;this._invoke=function(M,N){function O(){return new Promise(function(Q,R){J(M,N,Q,R)})}return L=L?L.then(O,O):O()}}function j(I,J,K){var L=z;return function(N,O){if(L==B)throw new Error('Generator is already running');if(L==C){if('throw'===N)throw O;return p()}for(K.method=N,K.arg=O;;){var Q=K.delegate;if(Q){var R=k(Q,K);if(R){if(R===D)continue;return R}}if('next'===K.method)K.sent=K._sent=K.arg;else if('throw'===K.method){if(L==z)throw L=C,K.arg;K.dispatchException(K.arg)}else'return'===K.method&&K.abrupt('return',K.arg);L=B;var S=c(I,J,K);if('normal'===S.type){if(L=K.done?C:A,S.arg===D)continue;return{value:S.arg,done:K.done}}'throw'===S.type&&(L=C,K.method='throw',K.arg=S.arg)}}}function k(I,J){var K=I.iterator[J.method];if(K===s){if(J.delegate=null,'throw'===J.method){if(I.iterator.return&&(J.method='return',J.arg=s,k(I,J),'throw'===J.method))return D;J.method='throw',J.arg=new TypeError('The iterator does not provide a \'throw\' method')}return D}var L=c(K,I.iterator,J.arg);if('throw'===L.type)return J.method='throw',J.arg=L.arg,J.delegate=null,D;var M=L.arg;if(!M)return J.method='throw',J.arg=new TypeError('iterator result is not an object'),J.delegate=null,D;if(M.done)J[I.resultName]=M.value,J.next=I.nextLoc,'return'!==J.method&&(J.method='next',J.arg=s);else return M;return J.delegate=null,D}function l(I){var J={tryLoc:I[0]};1 in I&&(J.catchLoc=I[1]),2 in I&&(J.finallyLoc=I[2],J.afterLoc=I[3]),this.tryEntries.push(J)}function m(I){var J=I.completion||{};J.type='normal',delete J.arg,I.completion=J}function n(I){this.tryEntries=[{tryLoc:'root'}],I.forEach(l,this),this.reset(!0)}function o(I){if(I){var J=I[u];if(J)return J.call(I);if('function'==typeof I.next)return I;if(!isNaN(I.length)){var K=-1,L=function M(){for(;++K<I.length;)if(r.call(I,K))return M.value=I[K],M.done=!1,M;return M.value=s,M.done=!0,M};return L.next=L}}return{next:p}}function p(){return{value:s,done:!0}}var q=Object.prototype,r=q.hasOwnProperty,s,t='function'==typeof Symbol?Symbol:{},u=t.iterator||'@@iterator',v=t.asyncIterator||'@@asyncIterator',w=t.toStringTag||'@@toStringTag',x='object'===('undefined'==typeof module?'undefined':_typeof(module)),y=a.regeneratorRuntime;if(y)return void(x&&(module.exports=y));y=a.regeneratorRuntime=x?module.exports:{},y.wrap=b;var z='suspendedStart',A='suspendedYield',B='executing',C='completed',D={},E={};E[u]=function(){return this};var F=Object.getPrototypeOf,G=F&&F(F(o([])));G&&G!==q&&r.call(G,u)&&(E=G);var H=f.prototype=d.prototype=Object.create(E);e.prototype=H.constructor=f,f.constructor=e,f[w]=e.displayName='GeneratorFunction',y.isGeneratorFunction=function(I){var J='function'==typeof I&&I.constructor;return!!J&&(J===e||'GeneratorFunction'===(J.displayName||J.name))},y.mark=function(I){return Object.setPrototypeOf?Object.setPrototypeOf(I,f):(I.__proto__=f,!(w in I)&&(I[w]='GeneratorFunction')),I.prototype=Object.create(H),I},y.awrap=function(I){return{__await:I}},g(h.prototype),h.prototype[v]=function(){return this},y.AsyncIterator=h,y.async=function(I,J,K,L){var M=new h(b(I,J,K,L));return y.isGeneratorFunction(J)?M:M.next().then(function(N){return N.done?N.value:M.next()})},g(H),H[w]='Generator',H[u]=function(){return this},H.toString=function(){return'[object Generator]'},y.keys=function(I){var J=[];for(var K in I)J.push(K);return J.reverse(),function L(){for(;J.length;){var M=J.pop();if(M in I)return L.value=M,L.done=!1,L}return L.done=!0,L}},y.values=o,n.prototype={constructor:n,reset:function reset(I){if(this.prev=0,this.next=0,this.sent=this._sent=s,this.done=!1,this.delegate=null,this.method='next',this.arg=s,this.tryEntries.forEach(m),!I)for(var J in this)'t'===J.charAt(0)&&r.call(this,J)&&!isNaN(+J.slice(1))&&(this[J]=s)},stop:function stop(){this.done=!0;var I=this.tryEntries[0],J=I.completion;if('throw'===J.type)throw J.arg;return this.rval},dispatchException:function dispatchException(I){function J(R,S){return N.type='throw',N.arg=I,K.next=R,S&&(K.method='next',K.arg=s),!!S}if(this.done)throw I;for(var K=this,L=this.tryEntries.length-1;0<=L;--L){var M=this.tryEntries[L],N=M.completion;if('root'===M.tryLoc)return J('end');if(M.tryLoc<=this.prev){var O=r.call(M,'catchLoc'),Q=r.call(M,'finallyLoc');if(O&&Q){if(this.prev<M.catchLoc)return J(M.catchLoc,!0);if(this.prev<M.finallyLoc)return J(M.finallyLoc)}else if(O){if(this.prev<M.catchLoc)return J(M.catchLoc,!0);}else if(!Q)throw new Error('try statement without catch or finally');else if(this.prev<M.finallyLoc)return J(M.finallyLoc)}}},abrupt:function abrupt(I,J){for(var L,K=this.tryEntries.length-1;0<=K;--K)if(L=this.tryEntries[K],L.tryLoc<=this.prev&&r.call(L,'finallyLoc')&&this.prev<L.finallyLoc){var M=L;break}M&&('break'===I||'continue'===I)&&M.tryLoc<=J&&J<=M.finallyLoc&&(M=null);var N=M?M.completion:{};return N.type=I,N.arg=J,M?(this.method='next',this.next=M.finallyLoc,D):this.complete(N)},complete:function complete(I,J){if('throw'===I.type)throw I.arg;return'break'===I.type||'continue'===I.type?this.next=I.arg:'return'===I.type?(this.rval=this.arg=I.arg,this.method='return',this.next='end'):'normal'===I.type&&J&&(this.next=J),D},finish:function finish(I){for(var K,J=this.tryEntries.length-1;0<=J;--J)if(K=this.tryEntries[J],K.finallyLoc===I)return this.complete(K.completion,K.afterLoc),m(K),D},catch:function _catch(I){for(var K,J=this.tryEntries.length-1;0<=J;--J)if(K=this.tryEntries[J],K.tryLoc===I){var L=K.completion;if('throw'===L.type){var M=L.arg;m(K)}return M}throw new Error('illegal catch attempt')},delegateYield:function delegateYield(I,J,K){return this.delegate={iterator:o(I),resultName:J,nextLoc:K},'next'===this.method&&(this.arg=s),D}}}(function(){return this}()||Function('return this')());

}, function(modId) {var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1546031961945);
})()
//# sourceMappingURL=index.js.map