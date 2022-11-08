var client;(()=>{"use strict";var e={4637:function(e,t){var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},i=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var i,r=0,o=t.length;r<o;r++)!i&&r in t||(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e){if(e&&"object"!==typeof e)throw new Error("Invalid Options");this.options=e,this.Events={},this.peer={type:"IFRAME"},e.type&&(this.peer.type=e.type.toUpperCase())}return e.prototype.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.options&&this.options.debug&&console.log.apply(console,e)},e.prototype.initiate=function(e,t){var n=this;if(!e||!t)throw new Error("Invalid Connection initiation arguments");if("IFRAME"===this.peer.type)throw new Error("Expect IFRAME to <listen> and WINDOW to <initiate> a connection");return this.peer.source=e,this.peer.origin=t,window.addEventListener("message",(function(e){var t=e.origin,i=e.data,r=e.source;if(t===n.peer.origin&&r&&"object"===typeof i&&i.hasOwnProperty("_event")){var o=i,a=o._event,s=o.payload,c=o.callback;if(n.debug("[".concat(n.peer.type,"] Message: ").concat(a),s||""),"pong"==a)return n.trigger("connect"),n.debug("[".concat(n.peer.type,"] connected"));n.trigger(a,s,c)}}),!1),this.debug("[".concat(this.peer.type,"] Initiate connection: IFrame origin <").concat(t,">")),this.emit("ping"),this},e.prototype.listen=function(e){var t=this;return this.peer.type="IFRAME",this.debug("[".concat(this.peer.type,"] Listening to connect").concat(e?": Host <".concat(e,">"):"")),window.addEventListener("message",(function(i){var r=i.origin,o=i.data,a=i.source;if(e&&e!==r)throw new Error("Invalid Event Origin");if(a&&"object"===typeof o&&o.hasOwnProperty("_event")){if(t.peer.source){if(r!==t.peer.origin)throw new Error("Invalid Origin")}else t.peer=n(n({},t.peer),{source:a,origin:r}),t.debug("[".concat(t.peer.type,"] Connect to ").concat(r));var s=o._event,c=o.payload,h=o.callback;if(t.debug("[".concat(t.peer.type,"] Message: ").concat(s),c||""),"ping"==s)return t.emit("pong"),t.trigger("connect"),t.debug("[".concat(t.peer.type,"] connected"));t.trigger(s,c,h)}}),!1),this},e.prototype.trigger=function(e,t,n){var i=this;if(!this.Events[e]&&!this.Events[e+"--@once"])return this.debug("[".concat(this.peer.type,"] No <").concat(e,"> listener defined"));var r=n?function(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];i.emit(e+"--@callback",{error:t||!1,args:n})}:void 0,o=[];this.Events[e+"--@once"]?(e+="--@once",o=this.Events[e],delete this.Events[e]):o=this.Events[e],o.map((function(e){return t?e(t,r):e(r)}))},e.prototype.emit=function(e,t,n){if(!this.peer.source)throw new Error("No Connection initiated");"function"==typeof t&&(n=t,t=null);var r,o=!1;if("function"===typeof n){var a=n;this.once(e+"--@callback",(function(e){var t=e.error,n=e.args;return a.apply(void 0,i([t],n,!1))})),o=!0}return this.peer.source.postMessage((r={_event:e,payload:t,callback:o},JSON.parse(JSON.stringify(r))),this.peer.origin),this},e.prototype.on=function(e,t){return this.Events[e]||(this.Events[e]=[]),this.Events[e].push(t),this.debug("[".concat(this.peer.type,"] New <").concat(e,"> listener on")),this},e.prototype.once=function(e,t){return e+="--@once",this.Events[e]||(this.Events[e]=[]),this.Events[e].push(t),this.debug("[".concat(this.peer.type,"] New <").concat(e," once> listener on")),this},e.prototype.off=function(e,t){return delete this.Events[e],"function"==typeof t&&t(),this.debug("[".concat(this.peer.type,"] <").concat(e,"> listener off")),this},e.prototype.removeListeners=function(e){return this.Events={},"function"==typeof e&&e(),this.debug("[".concat(this.peer.type,"] All listeners removed")),this},e}();t.default=r}},t={};function n(i){var r=t[i];if(void 0!==r)return r.exports;var o=t[i]={exports:{}};return e[i].call(o.exports,o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};(()=>{n.r(i),n.d(i,{Gateway:()=>a,default:()=>s});var e=n(4637),t=n.n(e);const r=["allow-scripts","allow-same-origin"],o=["geolocation"];class a{constructor(e){if(!e)throw new Error("Undefined Configuration");if(!e.clientId)throw new Error("Invalid credentials. <clientId> expected");if(!e.clientSecret)throw new Error("Invalid credentials. <clientSecret> expected");if(!e.container)throw new Error("Undefined HTML Element Container ID");this.payload=e.payload,this.clientId=e.clientId,this.clientSecret=e.clientSecret,this.readyCallback=e.ready,this.errorCallback=e.error,this.failedCallback=e.failed,this.doneCallback=e.done,this.isDev=e.dev||!1,this.baseURL=e.dev?"http://remote.wigo.com:9009":"https://remote.wigo.one",this.chn=!1,this.isConnected=!1;const t=document.getElementById(e.container);if(!t)throw new Error(`HTML Element Container <#${e.container}> Not Found`);t.innerHTML=`<iframe id="wigo-sdk-pgateway"\n                                    src="${this.baseURL}/p-gateway"\n                                    style="width:100%;height:100%;border:none;"\n                                    title="Wigo Gateway"\n                                    importance="high"\n                                    referrerpolicy="origin"\n                                    allow="${o.join()}"\n                                    sandbox="${r.join(" ")}"></iframe>`,document.getElementById("wigo-sdk-pgateway").onload=this.onload.bind(this)}onload(e){this.chn&&this.chn.removeListeners(),this.chn=new(t())({type:"window",debug:this.isDev}),this.chn.initiate(e.target.contentWindow,this.baseURL),this.chn.once("connect",()=>{this.chn.emit("auth:init",{id:this.clientId,token:this.clientSecret}),this.chn.emit("auth:info",(e,t)=>{if(e){if("function"==typeof this.errorCallback)return this.errorCallback(e);throw new Error(e.message)}this.isConnected=!0,this.payload&&this.setPayload(this.payload),"function"==typeof this.readyCallback&&this.readyCallback(t)})}).on("payment:failed",e=>{"function"==typeof this.failedCallback&&this.failedCallback(e)}).on("payment:done",e=>{"function"==typeof this.doneCallback&&this.doneCallback(e)})}isReady(){return this.chn&&this.isConnected}ready(e){return this.readyCallback=e,this}error(e){return this.errorCallback=e,this}failed(e){return this.failedCallback=e,this}done(e){return this.doneCallback=e,this}setPayload(e){this.isReady()&&(e={...e||{},...this.payload},this.chn.emit("payment:payload",e))}open(e){this.isReady()&&this.chn.emit("payment:goto",e)}}const s=window.WigoSDK={Gateway:a}})(),client=i})();
//# sourceMappingURL=gateway.511b644c.js.map