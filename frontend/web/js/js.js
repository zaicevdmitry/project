/*! jQuery v1.8.3 jquery.com | jquery.org/license */
(function(e,t){function _(e){var t=M[e]={};return v.each(e.split(y),function(e,n){t[n]=!0}),t}function H(e,n,r){if(r===t&&e.nodeType===1){var i="data-"+n.replace(P,"-$1").toLowerCase();r=e.getAttribute(i);if(typeof r=="string"){try{r=r==="true"?!0:r==="false"?!1:r==="null"?null:+r+""===r?+r:D.test(r)?v.parseJSON(r):r}catch(s){}v.data(e,n,r)}else r=t}return r}function B(e){var t;for(t in e){if(t==="data"&&v.isEmptyObject(e[t]))continue;if(t!=="toJSON")return!1}return!0}function et(){return!1}function tt(){return!0}function ut(e){return!e||!e.parentNode||e.parentNode.nodeType===11}function at(e,t){do e=e[t];while(e&&e.nodeType!==1);return e}function ft(e,t,n){t=t||0;if(v.isFunction(t))return v.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return v.grep(e,function(e,r){return e===t===n});if(typeof t=="string"){var r=v.grep(e,function(e){return e.nodeType===1});if(it.test(t))return v.filter(t,r,!n);t=v.filter(t,r)}return v.grep(e,function(e,r){return v.inArray(e,t)>=0===n})}function lt(e){var t=ct.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function At(e,t){if(t.nodeType!==1||!v.hasData(e))return;var n,r,i,s=v._data(e),o=v._data(t,s),u=s.events;if(u){delete o.handle,o.events={};for(n in u)for(r=0,i=u[n].length;r<i;r++)v.event.add(t,n,u[n][r])}o.data&&(o.data=v.extend({},o.data))}function Ot(e,t){var n;if(t.nodeType!==1)return;t.clearAttributes&&t.clearAttributes(),t.mergeAttributes&&t.mergeAttributes(e),n=t.nodeName.toLowerCase(),n==="object"?(t.parentNode&&(t.outerHTML=e.outerHTML),v.support.html5Clone&&e.innerHTML&&!v.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):n==="input"&&Et.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):n==="option"?t.selected=e.defaultSelected:n==="input"||n==="textarea"?t.defaultValue=e.defaultValue:n==="script"&&t.text!==e.text&&(t.text=e.text),t.removeAttribute(v.expando)}function Mt(e){return typeof e.getElementsByTagName!="undefined"?e.getElementsByTagName("*"):typeof e.querySelectorAll!="undefined"?e.querySelectorAll("*"):[]}function _t(e){Et.test(e.type)&&(e.defaultChecked=e.checked)}function Qt(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Jt.length;while(i--){t=Jt[i]+n;if(t in e)return t}return r}function Gt(e,t){return e=t||e,v.css(e,"display")==="none"||!v.contains(e.ownerDocument,e)}function Yt(e,t){var n,r,i=[],s=0,o=e.length;for(;s<o;s++){n=e[s];if(!n.style)continue;i[s]=v._data(n,"olddisplay"),t?(!i[s]&&n.style.display==="none"&&(n.style.display=""),n.style.display===""&&Gt(n)&&(i[s]=v._data(n,"olddisplay",nn(n.nodeName)))):(r=Dt(n,"display"),!i[s]&&r!=="none"&&v._data(n,"olddisplay",r))}for(s=0;s<o;s++){n=e[s];if(!n.style)continue;if(!t||n.style.display==="none"||n.style.display==="")n.style.display=t?i[s]||"":"none"}return e}function Zt(e,t,n){var r=Rt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function en(e,t,n,r){var i=n===(r?"border":"content")?4:t==="width"?1:0,s=0;for(;i<4;i+=2)n==="margin"&&(s+=v.css(e,n+$t[i],!0)),r?(n==="content"&&(s-=parseFloat(Dt(e,"padding"+$t[i]))||0),n!=="margin"&&(s-=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0)):(s+=parseFloat(Dt(e,"padding"+$t[i]))||0,n!=="padding"&&(s+=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0));return s}function tn(e,t,n){var r=t==="width"?e.offsetWidth:e.offsetHeight,i=!0,s=v.support.boxSizing&&v.css(e,"boxSizing")==="border-box";if(r<=0||r==null){r=Dt(e,t);if(r<0||r==null)r=e.style[t];if(Ut.test(r))return r;i=s&&(v.support.boxSizingReliable||r===e.style[t]),r=parseFloat(r)||0}return r+en(e,t,n||(s?"border":"content"),i)+"px"}function nn(e){if(Wt[e])return Wt[e];var t=v("<"+e+">").appendTo(i.body),n=t.css("display");t.remove();if(n==="none"||n===""){Pt=i.body.appendChild(Pt||v.extend(i.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!Ht||!Pt.createElement)Ht=(Pt.contentWindow||Pt.contentDocument).document,Ht.write("<!doctype html><html><body>"),Ht.close();t=Ht.body.appendChild(Ht.createElement(e)),n=Dt(t,"display"),i.body.removeChild(Pt)}return Wt[e]=n,n}function fn(e,t,n,r){var i;if(v.isArray(t))v.each(t,function(t,i){n||sn.test(e)?r(e,i):fn(e+"["+(typeof i=="object"?t:"")+"]",i,n,r)});else if(!n&&v.type(t)==="object")for(i in t)fn(e+"["+i+"]",t[i],n,r);else r(e,t)}function Cn(e){return function(t,n){typeof t!="string"&&(n=t,t="*");var r,i,s,o=t.toLowerCase().split(y),u=0,a=o.length;if(v.isFunction(n))for(;u<a;u++)r=o[u],s=/^\+/.test(r),s&&(r=r.substr(1)||"*"),i=e[r]=e[r]||[],i[s?"unshift":"push"](n)}}function kn(e,n,r,i,s,o){s=s||n.dataTypes[0],o=o||{},o[s]=!0;var u,a=e[s],f=0,l=a?a.length:0,c=e===Sn;for(;f<l&&(c||!u);f++)u=a[f](n,r,i),typeof u=="string"&&(!c||o[u]?u=t:(n.dataTypes.unshift(u),u=kn(e,n,r,i,u,o)));return(c||!u)&&!o["*"]&&(u=kn(e,n,r,i,"*",o)),u}function Ln(e,n){var r,i,s=v.ajaxSettings.flatOptions||{};for(r in n)n[r]!==t&&((s[r]?e:i||(i={}))[r]=n[r]);i&&v.extend(!0,e,i)}function An(e,n,r){var i,s,o,u,a=e.contents,f=e.dataTypes,l=e.responseFields;for(s in l)s in r&&(n[l[s]]=r[s]);while(f[0]==="*")f.shift(),i===t&&(i=e.mimeType||n.getResponseHeader("content-type"));if(i)for(s in a)if(a[s]&&a[s].test(i)){f.unshift(s);break}if(f[0]in r)o=f[0];else{for(s in r){if(!f[0]||e.converters[s+" "+f[0]]){o=s;break}u||(u=s)}o=o||u}if(o)return o!==f[0]&&f.unshift(o),r[o]}function On(e,t){var n,r,i,s,o=e.dataTypes.slice(),u=o[0],a={},f=0;e.dataFilter&&(t=e.dataFilter(t,e.dataType));if(o[1])for(n in e.converters)a[n.toLowerCase()]=e.converters[n];for(;i=o[++f];)if(i!=="*"){if(u!=="*"&&u!==i){n=a[u+" "+i]||a["* "+i];if(!n)for(r in a){s=r.split(" ");if(s[1]===i){n=a[u+" "+s[0]]||a["* "+s[0]];if(n){n===!0?n=a[r]:a[r]!==!0&&(i=s[0],o.splice(f--,0,i));break}}}if(n!==!0)if(n&&e["throws"])t=n(t);else try{t=n(t)}catch(l){return{state:"parsererror",error:n?l:"No conversion from "+u+" to "+i}}}u=i}return{state:"success",data:t}}function Fn(){try{return new e.XMLHttpRequest}catch(t){}}function In(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}function $n(){return setTimeout(function(){qn=t},0),qn=v.now()}function Jn(e,t){v.each(t,function(t,n){var r=(Vn[t]||[]).concat(Vn["*"]),i=0,s=r.length;for(;i<s;i++)if(r[i].call(e,t,n))return})}function Kn(e,t,n){var r,i=0,s=0,o=Xn.length,u=v.Deferred().always(function(){delete a.elem}),a=function(){var t=qn||$n(),n=Math.max(0,f.startTime+f.duration-t),r=n/f.duration||0,i=1-r,s=0,o=f.tweens.length;for(;s<o;s++)f.tweens[s].run(i);return u.notifyWith(e,[f,i,n]),i<1&&o?n:(u.resolveWith(e,[f]),!1)},f=u.promise({elem:e,props:v.extend({},t),opts:v.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:qn||$n(),duration:n.duration,tweens:[],createTween:function(t,n,r){var i=v.Tween(e,f.opts,t,n,f.opts.specialEasing[t]||f.opts.easing);return f.tweens.push(i),i},stop:function(t){var n=0,r=t?f.tweens.length:0;for(;n<r;n++)f.tweens[n].run(1);return t?u.resolveWith(e,[f,t]):u.rejectWith(e,[f,t]),this}}),l=f.props;Qn(l,f.opts.specialEasing);for(;i<o;i++){r=Xn[i].call(f,e,l,f.opts);if(r)return r}return Jn(f,l),v.isFunction(f.opts.start)&&f.opts.start.call(e,f),v.fx.timer(v.extend(a,{anim:f,queue:f.opts.queue,elem:e})),f.progress(f.opts.progress).done(f.opts.done,f.opts.complete).fail(f.opts.fail).always(f.opts.always)}function Qn(e,t){var n,r,i,s,o;for(n in e){r=v.camelCase(n),i=t[r],s=e[n],v.isArray(s)&&(i=s[1],s=e[n]=s[0]),n!==r&&(e[r]=s,delete e[n]),o=v.cssHooks[r];if(o&&"expand"in o){s=o.expand(s),delete e[r];for(n in s)n in e||(e[n]=s[n],t[n]=i)}else t[r]=i}}function Gn(e,t,n){var r,i,s,o,u,a,f,l,c,h=this,p=e.style,d={},m=[],g=e.nodeType&&Gt(e);n.queue||(l=v._queueHooks(e,"fx"),l.unqueued==null&&(l.unqueued=0,c=l.empty.fire,l.empty.fire=function(){l.unqueued||c()}),l.unqueued++,h.always(function(){h.always(function(){l.unqueued--,v.queue(e,"fx").length||l.empty.fire()})})),e.nodeType===1&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],v.css(e,"display")==="inline"&&v.css(e,"float")==="none"&&(!v.support.inlineBlockNeedsLayout||nn(e.nodeName)==="inline"?p.display="inline-block":p.zoom=1)),n.overflow&&(p.overflow="hidden",v.support.shrinkWrapBlocks||h.done(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t){s=t[r];if(Un.exec(s)){delete t[r],a=a||s==="toggle";if(s===(g?"hide":"show"))continue;m.push(r)}}o=m.length;if(o){u=v._data(e,"fxshow")||v._data(e,"fxshow",{}),"hidden"in u&&(g=u.hidden),a&&(u.hidden=!g),g?v(e).show():h.done(function(){v(e).hide()}),h.done(function(){var t;v.removeData(e,"fxshow",!0);for(t in d)v.style(e,t,d[t])});for(r=0;r<o;r++)i=m[r],f=h.createTween(i,g?u[i]:0),d[i]=u[i]||v.style(e,i),i in u||(u[i]=f.start,g&&(f.end=f.start,f.start=i==="width"||i==="height"?1:0))}}function Yn(e,t,n,r,i){return new Yn.prototype.init(e,t,n,r,i)}function Zn(e,t){var n,r={height:e},i=0;t=t?1:0;for(;i<4;i+=2-t)n=$t[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function tr(e){return v.isWindow(e)?e:e.nodeType===9?e.defaultView||e.parentWindow:!1}var n,r,i=e.document,s=e.location,o=e.navigator,u=e.jQuery,a=e.$,f=Array.prototype.push,l=Array.prototype.slice,c=Array.prototype.indexOf,h=Object.prototype.toString,p=Object.prototype.hasOwnProperty,d=String.prototype.trim,v=function(e,t){return new v.fn.init(e,t,n)},m=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,g=/\S/,y=/\s+/,b=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,w=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,E=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,S=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,T=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,N=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,C=/^-ms-/,k=/-([\da-z])/gi,L=function(e,t){return(t+"").toUpperCase()},A=function(){i.addEventListener?(i.removeEventListener("DOMContentLoaded",A,!1),v.ready()):i.readyState==="complete"&&(i.detachEvent("onreadystatechange",A),v.ready())},O={};v.fn=v.prototype={constructor:v,init:function(e,n,r){var s,o,u,a;if(!e)return this;if(e.nodeType)return this.context=this[0]=e,this.length=1,this;if(typeof e=="string"){e.charAt(0)==="<"&&e.charAt(e.length-1)===">"&&e.length>=3?s=[null,e,null]:s=w.exec(e);if(s&&(s[1]||!n)){if(s[1])return n=n instanceof v?n[0]:n,a=n&&n.nodeType?n.ownerDocument||n:i,e=v.parseHTML(s[1],a,!0),E.test(s[1])&&v.isPlainObject(n)&&this.attr.call(e,n,!0),v.merge(this,e);o=i.getElementById(s[2]);if(o&&o.parentNode){if(o.id!==s[2])return r.find(e);this.length=1,this[0]=o}return this.context=i,this.selector=e,this}return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e)}return v.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),v.makeArray(e,this))},selector:"",jquery:"1.8.3",length:0,size:function(){return this.length},toArray:function(){return l.call(this)},get:function(e){return e==null?this.toArray():e<0?this[this.length+e]:this[e]},pushStack:function(e,t,n){var r=v.merge(this.constructor(),e);return r.prevObject=this,r.context=this.context,t==="find"?r.selector=this.selector+(this.selector?" ":"")+n:t&&(r.selector=this.selector+"."+t+"("+n+")"),r},each:function(e,t){return v.each(this,e,t)},ready:function(e){return v.ready.promise().done(e),this},eq:function(e){return e=+e,e===-1?this.slice(e):this.slice(e,e+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(l.apply(this,arguments),"slice",l.call(arguments).join(","))},map:function(e){return this.pushStack(v.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:[].sort,splice:[].splice},v.fn.init.prototype=v.fn,v.extend=v.fn.extend=function(){var e,n,r,i,s,o,u=arguments[0]||{},a=1,f=arguments.length,l=!1;typeof u=="boolean"&&(l=u,u=arguments[1]||{},a=2),typeof u!="object"&&!v.isFunction(u)&&(u={}),f===a&&(u=this,--a);for(;a<f;a++)if((e=arguments[a])!=null)for(n in e){r=u[n],i=e[n];if(u===i)continue;l&&i&&(v.isPlainObject(i)||(s=v.isArray(i)))?(s?(s=!1,o=r&&v.isArray(r)?r:[]):o=r&&v.isPlainObject(r)?r:{},u[n]=v.extend(l,o,i)):i!==t&&(u[n]=i)}return u},v.extend({noConflict:function(t){return e.$===v&&(e.$=a),t&&e.jQuery===v&&(e.jQuery=u),v},isReady:!1,readyWait:1,holdReady:function(e){e?v.readyWait++:v.ready(!0)},ready:function(e){if(e===!0?--v.readyWait:v.isReady)return;if(!i.body)return setTimeout(v.ready,1);v.isReady=!0;if(e!==!0&&--v.readyWait>0)return;r.resolveWith(i,[v]),v.fn.trigger&&v(i).trigger("ready").off("ready")},isFunction:function(e){return v.type(e)==="function"},isArray:Array.isArray||function(e){return v.type(e)==="array"},isWindow:function(e){return e!=null&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return e==null?String(e):O[h.call(e)]||"object"},isPlainObject:function(e){if(!e||v.type(e)!=="object"||e.nodeType||v.isWindow(e))return!1;try{if(e.constructor&&!p.call(e,"constructor")&&!p.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||p.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw new Error(e)},parseHTML:function(e,t,n){var r;return!e||typeof e!="string"?null:(typeof t=="boolean"&&(n=t,t=0),t=t||i,(r=E.exec(e))?[t.createElement(r[1])]:(r=v.buildFragment([e],t,n?null:[]),v.merge([],(r.cacheable?v.clone(r.fragment):r.fragment).childNodes)))},parseJSON:function(t){if(!t||typeof t!="string")return null;t=v.trim(t);if(e.JSON&&e.JSON.parse)return e.JSON.parse(t);if(S.test(t.replace(T,"@").replace(N,"]").replace(x,"")))return(new Function("return "+t))();v.error("Invalid JSON: "+t)},parseXML:function(n){var r,i;if(!n||typeof n!="string")return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(s){r=t}return(!r||!r.documentElement||r.getElementsByTagName("parsererror").length)&&v.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&g.test(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(C,"ms-").replace(k,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,n,r){var i,s=0,o=e.length,u=o===t||v.isFunction(e);if(r){if(u){for(i in e)if(n.apply(e[i],r)===!1)break}else for(;s<o;)if(n.apply(e[s++],r)===!1)break}else if(u){for(i in e)if(n.call(e[i],i,e[i])===!1)break}else for(;s<o;)if(n.call(e[s],s,e[s++])===!1)break;return e},trim:d&&!d.call("\ufeff\u00a0")?function(e){return e==null?"":d.call(e)}:function(e){return e==null?"":(e+"").replace(b,"")},makeArray:function(e,t){var n,r=t||[];return e!=null&&(n=v.type(e),e.length==null||n==="string"||n==="function"||n==="regexp"||v.isWindow(e)?f.call(r,e):v.merge(r,e)),r},inArray:function(e,t,n){var r;if(t){if(c)return c.call(t,e,n);r=t.length,n=n?n<0?Math.max(0,r+n):n:0;for(;n<r;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,s=0;if(typeof r=="number")for(;s<r;s++)e[i++]=n[s];else while(n[s]!==t)e[i++]=n[s++];return e.length=i,e},grep:function(e,t,n){var r,i=[],s=0,o=e.length;n=!!n;for(;s<o;s++)r=!!t(e[s],s),n!==r&&i.push(e[s]);return i},map:function(e,n,r){var i,s,o=[],u=0,a=e.length,f=e instanceof v||a!==t&&typeof a=="number"&&(a>0&&e[0]&&e[a-1]||a===0||v.isArray(e));if(f)for(;u<a;u++)i=n(e[u],u,r),i!=null&&(o[o.length]=i);else for(s in e)i=n(e[s],s,r),i!=null&&(o[o.length]=i);return o.concat.apply([],o)},guid:1,proxy:function(e,n){var r,i,s;return typeof n=="string"&&(r=e[n],n=e,e=r),v.isFunction(e)?(i=l.call(arguments,2),s=function(){return e.apply(n,i.concat(l.call(arguments)))},s.guid=e.guid=e.guid||v.guid++,s):t},access:function(e,n,r,i,s,o,u){var a,f=r==null,l=0,c=e.length;if(r&&typeof r=="object"){for(l in r)v.access(e,n,l,r[l],1,o,i);s=1}else if(i!==t){a=u===t&&v.isFunction(i),f&&(a?(a=n,n=function(e,t,n){return a.call(v(e),n)}):(n.call(e,i),n=null));if(n)for(;l<c;l++)n(e[l],r,a?i.call(e[l],l,n(e[l],r)):i,u);s=1}return s?e:f?n.call(e):c?n(e[0],r):o},now:function(){return(new Date).getTime()}}),v.ready.promise=function(t){if(!r){r=v.Deferred();if(i.readyState==="complete")setTimeout(v.ready,1);else if(i.addEventListener)i.addEventListener("DOMContentLoaded",A,!1),e.addEventListener("load",v.ready,!1);else{i.attachEvent("onreadystatechange",A),e.attachEvent("onload",v.ready);var n=!1;try{n=e.frameElement==null&&i.documentElement}catch(s){}n&&n.doScroll&&function o(){if(!v.isReady){try{n.doScroll("left")}catch(e){return setTimeout(o,50)}v.ready()}}()}}return r.promise(t)},v.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(e,t){O["[object "+t+"]"]=t.toLowerCase()}),n=v(i);var M={};v.Callbacks=function(e){e=typeof e=="string"?M[e]||_(e):v.extend({},e);var n,r,i,s,o,u,a=[],f=!e.once&&[],l=function(t){n=e.memory&&t,r=!0,u=s||0,s=0,o=a.length,i=!0;for(;a&&u<o;u++)if(a[u].apply(t[0],t[1])===!1&&e.stopOnFalse){n=!1;break}i=!1,a&&(f?f.length&&l(f.shift()):n?a=[]:c.disable())},c={add:function(){if(a){var t=a.length;(function r(t){v.each(t,function(t,n){var i=v.type(n);i==="function"?(!e.unique||!c.has(n))&&a.push(n):n&&n.length&&i!=="string"&&r(n)})})(arguments),i?o=a.length:n&&(s=t,l(n))}return this},remove:function(){return a&&v.each(arguments,function(e,t){var n;while((n=v.inArray(t,a,n))>-1)a.splice(n,1),i&&(n<=o&&o--,n<=u&&u--)}),this},has:function(e){return v.inArray(e,a)>-1},empty:function(){return a=[],this},disable:function(){return a=f=n=t,this},disabled:function(){return!a},lock:function(){return f=t,n||c.disable(),this},locked:function(){return!f},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],a&&(!r||f)&&(i?f.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!r}};return c},v.extend({Deferred:function(e){var t=[["resolve","done",v.Callbacks("once memory"),"resolved"],["reject","fail",v.Callbacks("once memory"),"rejected"],["notify","progress",v.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return v.Deferred(function(n){v.each(t,function(t,r){var s=r[0],o=e[t];i[r[1]](v.isFunction(o)?function(){var e=o.apply(this,arguments);e&&v.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===i?n:this,[e])}:n[s])}),e=null}).promise()},promise:function(e){return e!=null?v.extend(e,r):r}},i={};return r.pipe=r.then,v.each(t,function(e,s){var o=s[2],u=s[3];r[s[1]]=o.add,u&&o.add(function(){n=u},t[e^1][2].disable,t[2][2].lock),i[s[0]]=o.fire,i[s[0]+"With"]=o.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=l.call(arguments),r=n.length,i=r!==1||e&&v.isFunction(e.promise)?r:0,s=i===1?e:v.Deferred(),o=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?l.call(arguments):r,n===u?s.notifyWith(t,n):--i||s.resolveWith(t,n)}},u,a,f;if(r>1){u=new Array(r),a=new Array(r),f=new Array(r);for(;t<r;t++)n[t]&&v.isFunction(n[t].promise)?n[t].promise().done(o(t,f,n)).fail(s.reject).progress(o(t,a,u)):--i}return i||s.resolveWith(f,n),s.promise()}}),v.support=function(){var t,n,r,s,o,u,a,f,l,c,h,p=i.createElement("div");p.setAttribute("className","t"),p.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=p.getElementsByTagName("*"),r=p.getElementsByTagName("a")[0];if(!n||!r||!n.length)return{};s=i.createElement("select"),o=s.appendChild(i.createElement("option")),u=p.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={leadingWhitespace:p.firstChild.nodeType===3,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:r.getAttribute("href")==="/a",opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:u.value==="on",optSelected:o.selected,getSetAttribute:p.className!=="t",enctype:!!i.createElement("form").enctype,html5Clone:i.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:i.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},u.checked=!0,t.noCloneChecked=u.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!o.disabled;try{delete p.test}catch(d){t.deleteExpando=!1}!p.addEventListener&&p.attachEvent&&p.fireEvent&&(p.attachEvent("onclick",h=function(){t.noCloneEvent=!1}),p.cloneNode(!0).fireEvent("onclick"),p.detachEvent("onclick",h)),u=i.createElement("input"),u.value="t",u.setAttribute("type","radio"),t.radioValue=u.value==="t",u.setAttribute("checked","checked"),u.setAttribute("name","t"),p.appendChild(u),a=i.createDocumentFragment(),a.appendChild(p.lastChild),t.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,t.appendChecked=u.checked,a.removeChild(u),a.appendChild(p);if(p.attachEvent)for(l in{submit:!0,change:!0,focusin:!0})f="on"+l,c=f in p,c||(p.setAttribute(f,"return;"),c=typeof p[f]=="function"),t[l+"Bubbles"]=c;return v(function(){var n,r,s,o,u="padding:0;margin:0;border:0;display:block;overflow:hidden;",a=i.getElementsByTagName("body")[0];if(!a)return;n=i.createElement("div"),n.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",a.insertBefore(n,a.firstChild),r=i.createElement("div"),n.appendChild(r),r.innerHTML="<table><tr><td></td><td>t</td></tr></table>",s=r.getElementsByTagName("td"),s[0].style.cssText="padding:0;margin:0;border:0;display:none",c=s[0].offsetHeight===0,s[0].style.display="",s[1].style.display="none",t.reliableHiddenOffsets=c&&s[0].offsetHeight===0,r.innerHTML="",r.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=r.offsetWidth===4,t.doesNotIncludeMarginInBodyOffset=a.offsetTop!==1,e.getComputedStyle&&(t.pixelPosition=(e.getComputedStyle(r,null)||{}).top!=="1%",t.boxSizingReliable=(e.getComputedStyle(r,null)||{width:"4px"}).width==="4px",o=i.createElement("div"),o.style.cssText=r.style.cssText=u,o.style.marginRight=o.style.width="0",r.style.width="1px",r.appendChild(o),t.reliableMarginRight=!parseFloat((e.getComputedStyle(o,null)||{}).marginRight)),typeof r.style.zoom!="undefined"&&(r.innerHTML="",r.style.cssText=u+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=r.offsetWidth===3,r.style.display="block",r.style.overflow="visible",r.innerHTML="<div></div>",r.firstChild.style.width="5px",t.shrinkWrapBlocks=r.offsetWidth!==3,n.style.zoom=1),a.removeChild(n),n=r=s=o=null}),a.removeChild(p),n=r=s=o=u=a=p=null,t}();var D=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;v.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(v.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?v.cache[e[v.expando]]:e[v.expando],!!e&&!B(e)},data:function(e,n,r,i){if(!v.acceptData(e))return;var s,o,u=v.expando,a=typeof n=="string",f=e.nodeType,l=f?v.cache:e,c=f?e[u]:e[u]&&u;if((!c||!l[c]||!i&&!l[c].data)&&a&&r===t)return;c||(f?e[u]=c=v.deletedIds.pop()||v.guid++:c=u),l[c]||(l[c]={},f||(l[c].toJSON=v.noop));if(typeof n=="object"||typeof n=="function")i?l[c]=v.extend(l[c],n):l[c].data=v.extend(l[c].data,n);return s=l[c],i||(s.data||(s.data={}),s=s.data),r!==t&&(s[v.camelCase(n)]=r),a?(o=s[n],o==null&&(o=s[v.camelCase(n)])):o=s,o},removeData:function(e,t,n){if(!v.acceptData(e))return;var r,i,s,o=e.nodeType,u=o?v.cache:e,a=o?e[v.expando]:v.expando;if(!u[a])return;if(t){r=n?u[a]:u[a].data;if(r){v.isArray(t)||(t in r?t=[t]:(t=v.camelCase(t),t in r?t=[t]:t=t.split(" ")));for(i=0,s=t.length;i<s;i++)delete r[t[i]];if(!(n?B:v.isEmptyObject)(r))return}}if(!n){delete u[a].data;if(!B(u[a]))return}o?v.cleanData([e],!0):v.support.deleteExpando||u!=u.window?delete u[a]:u[a]=null},_data:function(e,t,n){return v.data(e,t,n,!0)},acceptData:function(e){var t=e.nodeName&&v.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),v.fn.extend({data:function(e,n){var r,i,s,o,u,a=this[0],f=0,l=null;if(e===t){if(this.length){l=v.data(a);if(a.nodeType===1&&!v._data(a,"parsedAttrs")){s=a.attributes;for(u=s.length;f<u;f++)o=s[f].name,o.indexOf("data-")||(o=v.camelCase(o.substring(5)),H(a,o,l[o]));v._data(a,"parsedAttrs",!0)}}return l}return typeof e=="object"?this.each(function(){v.data(this,e)}):(r=e.split(".",2),r[1]=r[1]?"."+r[1]:"",i=r[1]+"!",v.access(this,function(n){if(n===t)return l=this.triggerHandler("getData"+i,[r[0]]),l===t&&a&&(l=v.data(a,e),l=H(a,e,l)),l===t&&r[1]?this.data(r[0]):l;r[1]=n,this.each(function(){var t=v(this);t.triggerHandler("setData"+i,r),v.data(this,e,n),t.triggerHandler("changeData"+i,r)})},null,n,arguments.length>1,null,!1))},removeData:function(e){return this.each(function(){v.removeData(this,e)})}}),v.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=v._data(e,t),n&&(!r||v.isArray(n)?r=v._data(e,t,v.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=v.queue(e,t),r=n.length,i=n.shift(),s=v._queueHooks(e,t),o=function(){v.dequeue(e,t)};i==="inprogress"&&(i=n.shift(),r--),i&&(t==="fx"&&n.unshift("inprogress"),delete s.stop,i.call(e,o,s)),!r&&s&&s.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return v._data(e,n)||v._data(e,n,{empty:v.Callbacks("once memory").add(function(){v.removeData(e,t+"queue",!0),v.removeData(e,n,!0)})})}}),v.fn.extend({queue:function(e,n){var r=2;return typeof e!="string"&&(n=e,e="fx",r--),arguments.length<r?v.queue(this[0],e):n===t?this:this.each(function(){var t=v.queue(this,e,n);v._queueHooks(this,e),e==="fx"&&t[0]!=="inprogress"&&v.dequeue(this,e)})},dequeue:function(e){return this.each(function(){v.dequeue(this,e)})},delay:function(e,t){return e=v.fx?v.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,s=v.Deferred(),o=this,u=this.length,a=function(){--i||s.resolveWith(o,[o])};typeof e!="string"&&(n=e,e=t),e=e||"fx";while(u--)r=v._data(o[u],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(a));return a(),s.promise(n)}});var j,F,I,q=/[\t\r\n]/g,R=/\r/g,U=/^(?:button|input)$/i,z=/^(?:button|input|object|select|textarea)$/i,W=/^a(?:rea|)$/i,X=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,V=v.support.getSetAttribute;v.fn.extend({attr:function(e,t){return v.access(this,v.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){v.removeAttr(this,e)})},prop:function(e,t){return v.access(this,v.prop,e,t,arguments.length>1)},removeProp:function(e){return e=v.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,s,o,u;if(v.isFunction(e))return this.each(function(t){v(this).addClass(e.call(this,t,this.className))});if(e&&typeof e=="string"){t=e.split(y);for(n=0,r=this.length;n<r;n++){i=this[n];if(i.nodeType===1)if(!i.className&&t.length===1)i.className=e;else{s=" "+i.className+" ";for(o=0,u=t.length;o<u;o++)s.indexOf(" "+t[o]+" ")<0&&(s+=t[o]+" ");i.className=v.trim(s)}}}return this},removeClass:function(e){var n,r,i,s,o,u,a;if(v.isFunction(e))return this.each(function(t){v(this).removeClass(e.call(this,t,this.className))});if(e&&typeof e=="string"||e===t){n=(e||"").split(y);for(u=0,a=this.length;u<a;u++){i=this[u];if(i.nodeType===1&&i.className){r=(" "+i.className+" ").replace(q," ");for(s=0,o=n.length;s<o;s++)while(r.indexOf(" "+n[s]+" ")>=0)r=r.replace(" "+n[s]+" "," ");i.className=e?v.trim(r):""}}}return this},toggleClass:function(e,t){var n=typeof e,r=typeof t=="boolean";return v.isFunction(e)?this.each(function(n){v(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if(n==="string"){var i,s=0,o=v(this),u=t,a=e.split(y);while(i=a[s++])u=r?u:!o.hasClass(i),o[u?"addClass":"removeClass"](i)}else if(n==="undefined"||n==="boolean")this.className&&v._data(this,"__className__",this.className),this.className=this.className||e===!1?"":v._data(this,"__className__")||""})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;n<r;n++)if(this[n].nodeType===1&&(" "+this[n].className+" ").replace(q," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,s=this[0];if(!arguments.length){if(s)return n=v.valHooks[s.type]||v.valHooks[s.nodeName.toLowerCase()],n&&"get"in n&&(r=n.get(s,"value"))!==t?r:(r=s.value,typeof r=="string"?r.replace(R,""):r==null?"":r);return}return i=v.isFunction(e),this.each(function(r){var s,o=v(this);if(this.nodeType!==1)return;i?s=e.call(this,r,o.val()):s=e,s==null?s="":typeof s=="number"?s+="":v.isArray(s)&&(s=v.map(s,function(e){return e==null?"":e+""})),n=v.valHooks[this.type]||v.valHooks[this.nodeName.toLowerCase()];if(!n||!("set"in n)||n.set(this,s,"value")===t)this.value=s})}}),v.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,s=e.type==="select-one"||i<0,o=s?null:[],u=s?i+1:r.length,a=i<0?u:s?i:0;for(;a<u;a++){n=r[a];if((n.selected||a===i)&&(v.support.optDisabled?!n.disabled:n.getAttribute("disabled")===null)&&(!n.parentNode.disabled||!v.nodeName(n.parentNode,"optgroup"))){t=v(n).val();if(s)return t;o.push(t)}}return o},set:function(e,t){var n=v.makeArray(t);return v(e).find("option").each(function(){this.selected=v.inArray(v(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attrFn:{},attr:function(e,n,r,i){var s,o,u,a=e.nodeType;if(!e||a===3||a===8||a===2)return;if(i&&v.isFunction(v.fn[n]))return v(e)[n](r);if(typeof e.getAttribute=="undefined")return v.prop(e,n,r);u=a!==1||!v.isXMLDoc(e),u&&(n=n.toLowerCase(),o=v.attrHooks[n]||(X.test(n)?F:j));if(r!==t){if(r===null){v.removeAttr(e,n);return}return o&&"set"in o&&u&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r)}return o&&"get"in o&&u&&(s=o.get(e,n))!==null?s:(s=e.getAttribute(n),s===null?t:s)},removeAttr:function(e,t){var n,r,i,s,o=0;if(t&&e.nodeType===1){r=t.split(y);for(;o<r.length;o++)i=r[o],i&&(n=v.propFix[i]||i,s=X.test(i),s||v.attr(e,i,""),e.removeAttribute(V?i:n),s&&n in e&&(e[n]=!1))}},attrHooks:{type:{set:function(e,t){if(U.test(e.nodeName)&&e.parentNode)v.error("type property can't be changed");else if(!v.support.radioValue&&t==="radio"&&v.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}},value:{get:function(e,t){return j&&v.nodeName(e,"button")?j.get(e,t):t in e?e.value:null},set:function(e,t,n){if(j&&v.nodeName(e,"button"))return j.set(e,t,n);e.value=t}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,s,o,u=e.nodeType;if(!e||u===3||u===8||u===2)return;return o=u!==1||!v.isXMLDoc(e),o&&(n=v.propFix[n]||n,s=v.propHooks[n]),r!==t?s&&"set"in s&&(i=s.set(e,r,n))!==t?i:e[n]=r:s&&"get"in s&&(i=s.get(e,n))!==null?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):z.test(e.nodeName)||W.test(e.nodeName)&&e.href?0:t}}}}),F={get:function(e,n){var r,i=v.prop(e,n);return i===!0||typeof i!="boolean"&&(r=e.getAttributeNode(n))&&r.nodeValue!==!1?n.toLowerCase():t},set:function(e,t,n){var r;return t===!1?v.removeAttr(e,n):(r=v.propFix[n]||n,r in e&&(e[r]=!0),e.setAttribute(n,n.toLowerCase())),n}},V||(I={name:!0,id:!0,coords:!0},j=v.valHooks.button={get:function(e,n){var r;return r=e.getAttributeNode(n),r&&(I[n]?r.value!=="":r.specified)?r.value:t},set:function(e,t,n){var r=e.getAttributeNode(n);return r||(r=i.createAttribute(n),e.setAttributeNode(r)),r.value=t+""}},v.each(["width","height"],function(e,t){v.attrHooks[t]=v.extend(v.attrHooks[t],{set:function(e,n){if(n==="")return e.setAttribute(t,"auto"),n}})}),v.attrHooks.contenteditable={get:j.get,set:function(e,t,n){t===""&&(t="false"),j.set(e,t,n)}}),v.support.hrefNormalized||v.each(["href","src","width","height"],function(e,n){v.attrHooks[n]=v.extend(v.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return r===null?t:r}})}),v.support.style||(v.attrHooks.style={get:function(e){return e.style.cssText.toLowerCase()||t},set:function(e,t){return e.style.cssText=t+""}}),v.support.optSelected||(v.propHooks.selected=v.extend(v.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),v.support.enctype||(v.propFix.enctype="encoding"),v.support.checkOn||v.each(["radio","checkbox"],function(){v.valHooks[this]={get:function(e){return e.getAttribute("value")===null?"on":e.value}}}),v.each(["radio","checkbox"],function(){v.valHooks[this]=v.extend(v.valHooks[this],{set:function(e,t){if(v.isArray(t))return e.checked=v.inArray(v(e).val(),t)>=0}})});var $=/^(?:textarea|input|select)$/i,J=/^([^\.]*|)(?:\.(.+)|)$/,K=/(?:^|\s)hover(\.\S+|)\b/,Q=/^key/,G=/^(?:mouse|contextmenu)|click/,Y=/^(?:focusinfocus|focusoutblur)$/,Z=function(e){return v.event.special.hover?e:e.replace(K,"mouseenter$1 mouseleave$1")};v.event={add:function(e,n,r,i,s){var o,u,a,f,l,c,h,p,d,m,g;if(e.nodeType===3||e.nodeType===8||!n||!r||!(o=v._data(e)))return;r.handler&&(d=r,r=d.handler,s=d.selector),r.guid||(r.guid=v.guid++),a=o.events,a||(o.events=a={}),u=o.handle,u||(o.handle=u=function(e){return typeof v=="undefined"||!!e&&v.event.triggered===e.type?t:v.event.dispatch.apply(u.elem,arguments)},u.elem=e),n=v.trim(Z(n)).split(" ");for(f=0;f<n.length;f++){l=J.exec(n[f])||[],c=l[1],h=(l[2]||"").split(".").sort(),g=v.event.special[c]||{},c=(s?g.delegateType:g.bindType)||c,g=v.event.special[c]||{},p=v.extend({type:c,origType:l[1],data:i,handler:r,guid:r.guid,selector:s,needsContext:s&&v.expr.match.needsContext.test(s),namespace:h.join(".")},d),m=a[c];if(!m){m=a[c]=[],m.delegateCount=0;if(!g.setup||g.setup.call(e,i,h,u)===!1)e.addEventListener?e.addEventListener(c,u,!1):e.attachEvent&&e.attachEvent("on"+c,u)}g.add&&(g.add.call(e,p),p.handler.guid||(p.handler.guid=r.guid)),s?m.splice(m.delegateCount++,0,p):m.push(p),v.event.global[c]=!0}e=null},global:{},remove:function(e,t,n,r,i){var s,o,u,a,f,l,c,h,p,d,m,g=v.hasData(e)&&v._data(e);if(!g||!(h=g.events))return;t=v.trim(Z(t||"")).split(" ");for(s=0;s<t.length;s++){o=J.exec(t[s])||[],u=a=o[1],f=o[2];if(!u){for(u in h)v.event.remove(e,u+t[s],n,r,!0);continue}p=v.event.special[u]||{},u=(r?p.delegateType:p.bindType)||u,d=h[u]||[],l=d.length,f=f?new RegExp("(^|\\.)"+f.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(c=0;c<d.length;c++)m=d[c],(i||a===m.origType)&&(!n||n.guid===m.guid)&&(!f||f.test(m.namespace))&&(!r||r===m.selector||r==="**"&&m.selector)&&(d.splice(c--,1),m.selector&&d.delegateCount--,p.remove&&p.remove.call(e,m));d.length===0&&l!==d.length&&((!p.teardown||p.teardown.call(e,f,g.handle)===!1)&&v.removeEvent(e,u,g.handle),delete h[u])}v.isEmptyObject(h)&&(delete g.handle,v.removeData(e,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(n,r,s,o){if(!s||s.nodeType!==3&&s.nodeType!==8){var u,a,f,l,c,h,p,d,m,g,y=n.type||n,b=[];if(Y.test(y+v.event.triggered))return;y.indexOf("!")>=0&&(y=y.slice(0,-1),a=!0),y.indexOf(".")>=0&&(b=y.split("."),y=b.shift(),b.sort());if((!s||v.event.customEvent[y])&&!v.event.global[y])return;n=typeof n=="object"?n[v.expando]?n:new v.Event(y,n):new v.Event(y),n.type=y,n.isTrigger=!0,n.exclusive=a,n.namespace=b.join("."),n.namespace_re=n.namespace?new RegExp("(^|\\.)"+b.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,h=y.indexOf(":")<0?"on"+y:"";if(!s){u=v.cache;for(f in u)u[f].events&&u[f].events[y]&&v.event.trigger(n,r,u[f].handle.elem,!0);return}n.result=t,n.target||(n.target=s),r=r!=null?v.makeArray(r):[],r.unshift(n),p=v.event.special[y]||{};if(p.trigger&&p.trigger.apply(s,r)===!1)return;m=[[s,p.bindType||y]];if(!o&&!p.noBubble&&!v.isWindow(s)){g=p.delegateType||y,l=Y.test(g+y)?s:s.parentNode;for(c=s;l;l=l.parentNode)m.push([l,g]),c=l;c===(s.ownerDocument||i)&&m.push([c.defaultView||c.parentWindow||e,g])}for(f=0;f<m.length&&!n.isPropagationStopped();f++)l=m[f][0],n.type=m[f][1],d=(v._data(l,"events")||{})[n.type]&&v._data(l,"handle"),d&&d.apply(l,r),d=h&&l[h],d&&v.acceptData(l)&&d.apply&&d.apply(l,r)===!1&&n.preventDefault();return n.type=y,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(s.ownerDocument,r)===!1)&&(y!=="click"||!v.nodeName(s,"a"))&&v.acceptData(s)&&h&&s[y]&&(y!=="focus"&&y!=="blur"||n.target.offsetWidth!==0)&&!v.isWindow(s)&&(c=s[h],c&&(s[h]=null),v.event.triggered=y,s[y](),v.event.triggered=t,c&&(s[h]=c)),n.result}return},dispatch:function(n){n=v.event.fix(n||e.event);var r,i,s,o,u,a,f,c,h,p,d=(v._data(this,"events")||{})[n.type]||[],m=d.delegateCount,g=l.call(arguments),y=!n.exclusive&&!n.namespace,b=v.event.special[n.type]||{},w=[];g[0]=n,n.delegateTarget=this;if(b.preDispatch&&b.preDispatch.call(this,n)===!1)return;if(m&&(!n.button||n.type!=="click"))for(s=n.target;s!=this;s=s.parentNode||this)if(s.disabled!==!0||n.type!=="click"){u={},f=[];for(r=0;r<m;r++)c=d[r],h=c.selector,u[h]===t&&(u[h]=c.needsContext?v(h,this).index(s)>=0:v.find(h,this,null,[s]).length),u[h]&&f.push(c);f.length&&w.push({elem:s,matches:f})}d.length>m&&w.push({elem:this,matches:d.slice(m)});for(r=0;r<w.length&&!n.isPropagationStopped();r++){a=w[r],n.currentTarget=a.elem;for(i=0;i<a.matches.length&&!n.isImmediatePropagationStopped();i++){c=a.matches[i];if(y||!n.namespace&&!c.namespace||n.namespace_re&&n.namespace_re.test(c.namespace))n.data=c.data,n.handleObj=c,o=((v.event.special[c.origType]||{}).handle||c.handler).apply(a.elem,g),o!==t&&(n.result=o,o===!1&&(n.preventDefault(),n.stopPropagation()))}}return b.postDispatch&&b.postDispatch.call(this,n),n.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return e.which==null&&(e.which=t.charCode!=null?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,s,o,u=n.button,a=n.fromElement;return e.pageX==null&&n.clientX!=null&&(r=e.target.ownerDocument||i,s=r.documentElement,o=r.body,e.pageX=n.clientX+(s&&s.scrollLeft||o&&o.scrollLeft||0)-(s&&s.clientLeft||o&&o.clientLeft||0),e.pageY=n.clientY+(s&&s.scrollTop||o&&o.scrollTop||0)-(s&&s.clientTop||o&&o.clientTop||0)),!e.relatedTarget&&a&&(e.relatedTarget=a===e.target?n.toElement:a),!e.which&&u!==t&&(e.which=u&1?1:u&2?3:u&4?2:0),e}},fix:function(e){if(e[v.expando])return e;var t,n,r=e,s=v.event.fixHooks[e.type]||{},o=s.props?this.props.concat(s.props):this.props;e=v.Event(r);for(t=o.length;t;)n=o[--t],e[n]=r[n];return e.target||(e.target=r.srcElement||i),e.target.nodeType===3&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,r):e},special:{load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(e,t,n){v.isWindow(this)&&(this.onbeforeunload=n)},teardown:function(e,t){this.onbeforeunload===t&&(this.onbeforeunload=null)}}},simulate:function(e,t,n,r){var i=v.extend(new v.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?v.event.trigger(i,null,t):v.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},v.event.handle=v.event.dispatch,v.removeEvent=i.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]=="undefined"&&(e[r]=null),e.detachEvent(r,n))},v.Event=function(e,t){if(!(this instanceof v.Event))return new v.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?tt:et):this.type=e,t&&v.extend(this,t),this.timeStamp=e&&e.timeStamp||v.now(),this[v.expando]=!0},v.Event.prototype={preventDefault:function(){this.isDefaultPrevented=tt;var e=this.originalEvent;if(!e)return;e.preventDefault?e.preventDefault():e.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=tt;var e=this.originalEvent;if(!e)return;e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=tt,this.stopPropagation()},isDefaultPrevented:et,isPropagationStopped:et,isImmediatePropagationStopped:et},v.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){v.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,s=e.handleObj,o=s.selector;if(!i||i!==r&&!v.contains(r,i))e.type=s.origType,n=s.handler.apply(this,arguments),e.type=t;return n}}}),v.support.submitBubbles||(v.event.special.submit={setup:function(){if(v.nodeName(this,"form"))return!1;v.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=v.nodeName(n,"input")||v.nodeName(n,"button")?n.form:t;r&&!v._data(r,"_submit_attached")&&(v.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),v._data(r,"_submit_attached",!0))})},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&v.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){if(v.nodeName(this,"form"))return!1;v.event.remove(this,"._submit")}}),v.support.changeBubbles||(v.event.special.change={setup:function(){if($.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")v.event.add(this,"propertychange._change",function(e){e.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),v.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),v.event.simulate("change",this,e,!0)});return!1}v.event.add(this,"beforeactivate._change",function(e){var t=e.target;$.test(t.nodeName)&&!v._data(t,"_change_attached")&&(v.event.add(t,"change._change",function(e){this.parentNode&&!e.isSimulated&&!e.isTrigger&&v.event.simulate("change",this.parentNode,e,!0)}),v._data(t,"_change_attached",!0))})},handle:function(e){var t=e.target;if(this!==t||e.isSimulated||e.isTrigger||t.type!=="radio"&&t.type!=="checkbox")return e.handleObj.handler.apply(this,arguments)},teardown:function(){return v.event.remove(this,"._change"),!$.test(this.nodeName)}}),v.support.focusinBubbles||v.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){v.event.simulate(t,e.target,v.event.fix(e),!0)};v.event.special[t]={setup:function(){n++===0&&i.addEventListener(e,r,!0)},teardown:function(){--n===0&&i.removeEventListener(e,r,!0)}}}),v.fn.extend({on:function(e,n,r,i,s){var o,u;if(typeof e=="object"){typeof n!="string"&&(r=r||n,n=t);for(u in e)this.on(u,n,r,e[u],s);return this}r==null&&i==null?(i=n,r=n=t):i==null&&(typeof n=="string"?(i=r,r=t):(i=r,r=n,n=t));if(i===!1)i=et;else if(!i)return this;return s===1&&(o=i,i=function(e){return v().off(e),o.apply(this,arguments)},i.guid=o.guid||(o.guid=v.guid++)),this.each(function(){v.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,s;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,v(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if(typeof e=="object"){for(s in e)this.off(s,n,e[s]);return this}if(n===!1||typeof n=="function")r=n,n=t;return r===!1&&(r=et),this.each(function(){v.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},live:function(e,t,n){return v(this.context).on(e,this.selector,t,n),this},die:function(e,t){return v(this.context).off(e,this.selector||"**",t),this},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return arguments.length===1?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){v.event.trigger(e,t,this)})},triggerHandler:function(e,t){if(this[0])return v.event.trigger(e,t,this[0],!0)},toggle:function(e){var t=arguments,n=e.guid||v.guid++,r=0,i=function(n){var i=(v._data(this,"lastToggle"+e.guid)||0)%r;return v._data(this,"lastToggle"+e.guid,i+1),n.preventDefault(),t[i].apply(this,arguments)||!1};i.guid=n;while(r<t.length)t[r++].guid=n;return this.click(i)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),v.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){v.fn[t]=function(e,n){return n==null&&(n=e,e=null),arguments.length>0?this.on(t,null,e,n):this.trigger(t)},Q.test(t)&&(v.event.fixHooks[t]=v.event.keyHooks),G.test(t)&&(v.event.fixHooks[t]=v.event.mouseHooks)}),function(e,t){function nt(e,t,n,r){n=n||[],t=t||g;var i,s,a,f,l=t.nodeType;if(!e||typeof e!="string")return n;if(l!==1&&l!==9)return[];a=o(t);if(!a&&!r)if(i=R.exec(e))if(f=i[1]){if(l===9){s=t.getElementById(f);if(!s||!s.parentNode)return n;if(s.id===f)return n.push(s),n}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(f))&&u(t,s)&&s.id===f)return n.push(s),n}else{if(i[2])return S.apply(n,x.call(t.getElementsByTagName(e),0)),n;if((f=i[3])&&Z&&t.getElementsByClassName)return S.apply(n,x.call(t.getElementsByClassName(f),0)),n}return vt(e.replace(j,"$1"),t,n,r,a)}function rt(e){return function(t){var n=t.nodeName.toLowerCase();return n==="input"&&t.type===e}}function it(e){return function(t){var n=t.nodeName.toLowerCase();return(n==="input"||n==="button")&&t.type===e}}function st(e){return N(function(t){return t=+t,N(function(n,r){var i,s=e([],n.length,t),o=s.length;while(o--)n[i=s[o]]&&(n[i]=!(r[i]=n[i]))})})}function ot(e,t,n){if(e===t)return n;var r=e.nextSibling;while(r){if(r===t)return-1;r=r.nextSibling}return 1}function ut(e,t){var n,r,s,o,u,a,f,l=L[d][e+" "];if(l)return t?0:l.slice(0);u=e,a=[],f=i.preFilter;while(u){if(!n||(r=F.exec(u)))r&&(u=u.slice(r[0].length)||u),a.push(s=[]);n=!1;if(r=I.exec(u))s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=r[0].replace(j," ");for(o in i.filter)(r=J[o].exec(u))&&(!f[o]||(r=f[o](r)))&&(s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=o,n.matches=r);if(!n)break}return t?u.length:u?nt.error(e):L(e,a).slice(0)}function at(e,t,r){var i=t.dir,s=r&&t.dir==="parentNode",o=w++;return t.first?function(t,n,r){while(t=t[i])if(s||t.nodeType===1)return e(t,n,r)}:function(t,r,u){if(!u){var a,f=b+" "+o+" ",l=f+n;while(t=t[i])if(s||t.nodeType===1){if((a=t[d])===l)return t.sizset;if(typeof a=="string"&&a.indexOf(f)===0){if(t.sizset)return t}else{t[d]=l;if(e(t,r,u))return t.sizset=!0,t;t.sizset=!1}}}else while(t=t[i])if(s||t.nodeType===1)if(e(t,r,u))return t}}function ft(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function lt(e,t,n,r,i){var s,o=[],u=0,a=e.length,f=t!=null;for(;u<a;u++)if(s=e[u])if(!n||n(s,r,i))o.push(s),f&&t.push(u);return o}function ct(e,t,n,r,i,s){return r&&!r[d]&&(r=ct(r)),i&&!i[d]&&(i=ct(i,s)),N(function(s,o,u,a){var f,l,c,h=[],p=[],d=o.length,v=s||dt(t||"*",u.nodeType?[u]:u,[]),m=e&&(s||!t)?lt(v,h,e,u,a):v,g=n?i||(s?e:d||r)?[]:o:m;n&&n(m,g,u,a);if(r){f=lt(g,p),r(f,[],u,a),l=f.length;while(l--)if(c=f[l])g[p[l]]=!(m[p[l]]=c)}if(s){if(i||e){if(i){f=[],l=g.length;while(l--)(c=g[l])&&f.push(m[l]=c);i(null,g=[],f,a)}l=g.length;while(l--)(c=g[l])&&(f=i?T.call(s,c):h[l])>-1&&(s[f]=!(o[f]=c))}}else g=lt(g===o?g.splice(d,g.length):g),i?i(null,o,g,a):S.apply(o,g)})}function ht(e){var t,n,r,s=e.length,o=i.relative[e[0].type],u=o||i.relative[" "],a=o?1:0,f=at(function(e){return e===t},u,!0),l=at(function(e){return T.call(t,e)>-1},u,!0),h=[function(e,n,r){return!o&&(r||n!==c)||((t=n).nodeType?f(e,n,r):l(e,n,r))}];for(;a<s;a++)if(n=i.relative[e[a].type])h=[at(ft(h),n)];else{n=i.filter[e[a].type].apply(null,e[a].matches);if(n[d]){r=++a;for(;r<s;r++)if(i.relative[e[r].type])break;return ct(a>1&&ft(h),a>1&&e.slice(0,a-1).join("").replace(j,"$1"),n,a<r&&ht(e.slice(a,r)),r<s&&ht(e=e.slice(r)),r<s&&e.join(""))}h.push(n)}return ft(h)}function pt(e,t){var r=t.length>0,s=e.length>0,o=function(u,a,f,l,h){var p,d,v,m=[],y=0,w="0",x=u&&[],T=h!=null,N=c,C=u||s&&i.find.TAG("*",h&&a.parentNode||a),k=b+=N==null?1:Math.E;T&&(c=a!==g&&a,n=o.el);for(;(p=C[w])!=null;w++){if(s&&p){for(d=0;v=e[d];d++)if(v(p,a,f)){l.push(p);break}T&&(b=k,n=++o.el)}r&&((p=!v&&p)&&y--,u&&x.push(p))}y+=w;if(r&&w!==y){for(d=0;v=t[d];d++)v(x,m,a,f);if(u){if(y>0)while(w--)!x[w]&&!m[w]&&(m[w]=E.call(l));m=lt(m)}S.apply(l,m),T&&!u&&m.length>0&&y+t.length>1&&nt.uniqueSort(l)}return T&&(b=k,c=N),x};return o.el=0,r?N(o):o}function dt(e,t,n){var r=0,i=t.length;for(;r<i;r++)nt(e,t[r],n);return n}function vt(e,t,n,r,s){var o,u,f,l,c,h=ut(e),p=h.length;if(!r&&h.length===1){u=h[0]=h[0].slice(0);if(u.length>2&&(f=u[0]).type==="ID"&&t.nodeType===9&&!s&&i.relative[u[1].type]){t=i.find.ID(f.matches[0].replace($,""),t,s)[0];if(!t)return n;e=e.slice(u.shift().length)}for(o=J.POS.test(e)?-1:u.length-1;o>=0;o--){f=u[o];if(i.relative[l=f.type])break;if(c=i.find[l])if(r=c(f.matches[0].replace($,""),z.test(u[0].type)&&t.parentNode||t,s)){u.splice(o,1),e=r.length&&u.join("");if(!e)return S.apply(n,x.call(r,0)),n;break}}}return a(e,h)(r,t,s,n,z.test(e)),n}function mt(){}var n,r,i,s,o,u,a,f,l,c,h=!0,p="undefined",d=("sizcache"+Math.random()).replace(".",""),m=String,g=e.document,y=g.documentElement,b=0,w=0,E=[].pop,S=[].push,x=[].slice,T=[].indexOf||function(e){var t=0,n=this.length;for(;t<n;t++)if(this[t]===e)return t;return-1},N=function(e,t){return e[d]=t==null||t,e},C=function(){var e={},t=[];return N(function(n,r){return t.push(n)>i.cacheLength&&delete e[t.shift()],e[n+" "]=r},e)},k=C(),L=C(),A=C(),O="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",_=M.replace("w","w#"),D="([*^$|!~]?=)",P="\\["+O+"*("+M+")"+O+"*(?:"+D+O+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+_+")|)|)"+O+"*\\]",H=":("+M+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+P+")|[^:]|\\\\.)*|.*))\\)|)",B=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+O+"*((?:-\\d)?\\d*)"+O+"*\\)|)(?=[^-]|$)",j=new RegExp("^"+O+"+|((?:^|[^\\\\])(?:\\\\.)*)"+O+"+$","g"),F=new RegExp("^"+O+"*,"+O+"*"),I=new RegExp("^"+O+"*([\\x20\\t\\r\\n\\f>+~])"+O+"*"),q=new RegExp(H),R=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,U=/^:not/,z=/[\x20\t\r\n\f]*[+~]/,W=/:not\($/,X=/h\d/i,V=/input|select|textarea|button/i,$=/\\(?!\\)/g,J={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),NAME:new RegExp("^\\[name=['\"]?("+M+")['\"]?\\]"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+H),POS:new RegExp(B,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+O+"*(even|odd|(([+-]|)(\\d*)n|)"+O+"*(?:([+-]|)"+O+"*(\\d+)|))"+O+"*\\)|)","i"),needsContext:new RegExp("^"+O+"*[>+~]|"+B,"i")},K=function(e){var t=g.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}},Q=K(function(e){return e.appendChild(g.createComment("")),!e.getElementsByTagName("*").length}),G=K(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==p&&e.firstChild.getAttribute("href")==="#"}),Y=K(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return t!=="boolean"&&t!=="string"}),Z=K(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!e.getElementsByClassName||!e.getElementsByClassName("e").length?!1:(e.lastChild.className="e",e.getElementsByClassName("e").length===2)}),et=K(function(e){e.id=d+0,e.innerHTML="<a name='"+d+"'></a><div name='"+d+"'></div>",y.insertBefore(e,y.firstChild);var t=g.getElementsByName&&g.getElementsByName(d).length===2+g.getElementsByName(d+0).length;return r=!g.getElementById(d),y.removeChild(e),t});try{x.call(y.childNodes,0)[0].nodeType}catch(tt){x=function(e){var t,n=[];for(;t=this[e];e++)n.push(t);return n}}nt.matches=function(e,t){return nt(e,null,null,t)},nt.matchesSelector=function(e,t){return nt(t,null,null,[e]).length>0},s=nt.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(i===1||i===9||i===11){if(typeof e.textContent=="string")return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=s(e)}else if(i===3||i===4)return e.nodeValue}else for(;t=e[r];r++)n+=s(t);return n},o=nt.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?t.nodeName!=="HTML":!1},u=nt.contains=y.contains?function(e,t){var n=e.nodeType===9?e.documentElement:e,r=t&&t.parentNode;return e===r||!!(r&&r.nodeType===1&&n.contains&&n.contains(r))}:y.compareDocumentPosition?function(e,t){return t&&!!(e.compareDocumentPosition(t)&16)}:function(e,t){while(t=t.parentNode)if(t===e)return!0;return!1},nt.attr=function(e,t){var n,r=o(e);return r||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):r||Y?e.getAttribute(t):(n=e.getAttributeNode(t),n?typeof e[t]=="boolean"?e[t]?t:null:n.specified?n.value:null:null)},i=nt.selectors={cacheLength:50,createPseudo:N,match:J,attrHandle:G?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},find:{ID:r?function(e,t,n){if(typeof t.getElementById!==p&&!n){var r=t.getElementById(e);return r&&r.parentNode?[r]:[]}}:function(e,n,r){if(typeof n.getElementById!==p&&!r){var i=n.getElementById(e);return i?i.id===e||typeof i.getAttributeNode!==p&&i.getAttributeNode("id").value===e?[i]:t:[]}},TAG:Q?function(e,t){if(typeof t.getElementsByTagName!==p)return t.getElementsByTagName(e)}:function(e,t){var n=t.getElementsByTagName(e);if(e==="*"){var r,i=[],s=0;for(;r=n[s];s++)r.nodeType===1&&i.push(r);return i}return n},NAME:et&&function(e,t){if(typeof t.getElementsByName!==p)return t.getElementsByName(name)},CLASS:Z&&function(e,t,n){if(typeof t.getElementsByClassName!==p&&!n)return t.getElementsByClassName(e)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace($,""),e[3]=(e[4]||e[5]||"").replace($,""),e[2]==="~="&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),e[1]==="nth"?(e[2]||nt.error(e[0]),e[3]=+(e[3]?e[4]+(e[5]||1):2*(e[2]==="even"||e[2]==="odd")),e[4]=+(e[6]+e[7]||e[2]==="odd")):e[2]&&nt.error(e[0]),e},PSEUDO:function(e){var t,n;if(J.CHILD.test(e[0]))return null;if(e[3])e[2]=e[3];else if(t=e[4])q.test(t)&&(n=ut(t,!0))&&(n=t.indexOf(")",t.length-n)-t.length)&&(t=t.slice(0,n),e[0]=e[0].slice(0,n)),e[2]=t;return e.slice(0,3)}},filter:{ID:r?function(e){return e=e.replace($,""),function(t){return t.getAttribute("id")===e}}:function(e){return e=e.replace($,""),function(t){var n=typeof t.getAttributeNode!==p&&t.getAttributeNode("id");return n&&n.value===e}},TAG:function(e){return e==="*"?function(){return!0}:(e=e.replace($,"").toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[d][e+" "];return t||(t=new RegExp("(^|"+O+")"+e+"("+O+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==p&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r,i){var s=nt.attr(r,e);return s==null?t==="!=":t?(s+="",t==="="?s===n:t==="!="?s!==n:t==="^="?n&&s.indexOf(n)===0:t==="*="?n&&s.indexOf(n)>-1:t==="$="?n&&s.substr(s.length-n.length)===n:t==="~="?(" "+s+" ").indexOf(n)>-1:t==="|="?s===n||s.substr(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r){return e==="nth"?function(e){var t,i,s=e.parentNode;if(n===1&&r===0)return!0;if(s){i=0;for(t=s.firstChild;t;t=t.nextSibling)if(t.nodeType===1){i++;if(e===t)break}}return i-=r,i===n||i%n===0&&i/n>=0}:function(t){var n=t;switch(e){case"only":case"first":while(n=n.previousSibling)if(n.nodeType===1)return!1;if(e==="first")return!0;n=t;case"last":while(n=n.nextSibling)if(n.nodeType===1)return!1;return!0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||nt.error("unsupported pseudo: "+e);return r[d]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?N(function(e,n){var i,s=r(e,t),o=s.length;while(o--)i=T.call(e,s[o]),e[i]=!(n[i]=s[o])}):function(e){return r(e,0,n)}):r}},pseudos:{not:N(function(e){var t=[],n=[],r=a(e.replace(j,"$1"));return r[d]?N(function(e,t,n,i){var s,o=r(e,null,i,[]),u=e.length;while(u--)if(s=o[u])e[u]=!(t[u]=s)}):function(e,i,s){return t[0]=e,r(t,null,s,n),!n.pop()}}),has:N(function(e){return function(t){return nt(e,t).length>0}}),contains:N(function(e){return function(t){return(t.textContent||t.innerText||s(t)).indexOf(e)>-1}}),enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&!!e.checked||t==="option"&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},parent:function(e){return!i.pseudos.empty(e)},empty:function(e){var t;e=e.firstChild;while(e){if(e.nodeName>"@"||(t=e.nodeType)===3||t===4)return!1;e=e.nextSibling}return!0},header:function(e){return X.test(e.nodeName)},text:function(e){var t,n;return e.nodeName.toLowerCase()==="input"&&(t=e.type)==="text"&&((n=e.getAttribute("type"))==null||n.toLowerCase()===t)},radio:rt("radio"),checkbox:rt("checkbox"),file:rt("file"),password:rt("password"),image:rt("image"),submit:it("submit"),reset:it("reset"),button:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&e.type==="button"||t==="button"},input:function(e){return V.test(e.nodeName)},focus:function(e){var t=e.ownerDocument;return e===t.activeElement&&(!t.hasFocus||t.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},active:function(e){return e===e.ownerDocument.activeElement},first:st(function(){return[0]}),last:st(function(e,t){return[t-1]}),eq:st(function(e,t,n){return[n<0?n+t:n]}),even:st(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:st(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:st(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:st(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}},f=y.compareDocumentPosition?function(e,t){return e===t?(l=!0,0):(!e.compareDocumentPosition||!t.compareDocumentPosition?e.compareDocumentPosition:e.compareDocumentPosition(t)&4)?-1:1}:function(e,t){if(e===t)return l=!0,0;if(e.sourceIndex&&t.sourceIndex)return e.sourceIndex-t.sourceIndex;var n,r,i=[],s=[],o=e.parentNode,u=t.parentNode,a=o;if(o===u)return ot(e,t);if(!o)return-1;if(!u)return 1;while(a)i.unshift(a),a=a.parentNode;a=u;while(a)s.unshift(a),a=a.parentNode;n=i.length,r=s.length;for(var f=0;f<n&&f<r;f++)if(i[f]!==s[f])return ot(i[f],s[f]);return f===n?ot(e,s[f],-1):ot(i[f],t,1)},[0,0].sort(f),h=!l,nt.uniqueSort=function(e){var t,n=[],r=1,i=0;l=h,e.sort(f);if(l){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e},nt.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},a=nt.compile=function(e,t){var n,r=[],i=[],s=A[d][e+" "];if(!s){t||(t=ut(e)),n=t.length;while(n--)s=ht(t[n]),s[d]?r.push(s):i.push(s);s=A(e,pt(i,r))}return s},g.querySelectorAll&&function(){var e,t=vt,n=/'|\\/g,r=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,i=[":focus"],s=[":active"],u=y.matchesSelector||y.mozMatchesSelector||y.webkitMatchesSelector||y.oMatchesSelector||y.msMatchesSelector;K(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||i.push("\\["+O+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||i.push(":checked")}),K(function(e){e.innerHTML="<p test=''></p>",e.querySelectorAll("[test^='']").length&&i.push("[*^$]="+O+"*(?:\"\"|'')"),e.innerHTML="<input type='hidden'/>",e.querySelectorAll(":enabled").length||i.push(":enabled",":disabled")}),i=new RegExp(i.join("|")),vt=function(e,r,s,o,u){if(!o&&!u&&!i.test(e)){var a,f,l=!0,c=d,h=r,p=r.nodeType===9&&e;if(r.nodeType===1&&r.nodeName.toLowerCase()!=="object"){a=ut(e),(l=r.getAttribute("id"))?c=l.replace(n,"\\$&"):r.setAttribute("id",c),c="[id='"+c+"'] ",f=a.length;while(f--)a[f]=c+a[f].join("");h=z.test(e)&&r.parentNode||r,p=a.join(",")}if(p)try{return S.apply(s,x.call(h.querySelectorAll(p),0)),s}catch(v){}finally{l||r.removeAttribute("id")}}return t(e,r,s,o,u)},u&&(K(function(t){e=u.call(t,"div");try{u.call(t,"[test!='']:sizzle"),s.push("!=",H)}catch(n){}}),s=new RegExp(s.join("|")),nt.matchesSelector=function(t,n){n=n.replace(r,"='$1']");if(!o(t)&&!s.test(n)&&!i.test(n))try{var a=u.call(t,n);if(a||e||t.document&&t.document.nodeType!==11)return a}catch(f){}return nt(n,null,null,[t]).length>0})}(),i.pseudos.nth=i.pseudos.eq,i.filters=mt.prototype=i.pseudos,i.setFilters=new mt,nt.attr=v.attr,v.find=nt,v.expr=nt.selectors,v.expr[":"]=v.expr.pseudos,v.unique=nt.uniqueSort,v.text=nt.getText,v.isXMLDoc=nt.isXML,v.contains=nt.contains}(e);var nt=/Until$/,rt=/^(?:parents|prev(?:Until|All))/,it=/^.[^:#\[\.,]*$/,st=v.expr.match.needsContext,ot={children:!0,contents:!0,next:!0,prev:!0};v.fn.extend({find:function(e){var t,n,r,i,s,o,u=this;if(typeof e!="string")return v(e).filter(function(){for(t=0,n=u.length;t<n;t++)if(v.contains(u[t],this))return!0});o=this.pushStack("","find",e);for(t=0,n=this.length;t<n;t++){r=o.length,v.find(e,this[t],o);if(t>0)for(i=r;i<o.length;i++)for(s=0;s<r;s++)if(o[s]===o[i]){o.splice(i--,1);break}}return o},has:function(e){var t,n=v(e,this),r=n.length;return this.filter(function(){for(t=0;t<r;t++)if(v.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1),"not",e)},filter:function(e){return this.pushStack(ft(this,e,!0),"filter",e)},is:function(e){return!!e&&(typeof e=="string"?st.test(e)?v(e,this.context).index(this[0])>=0:v.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,s=[],o=st.test(e)||typeof e!="string"?v(e,t||this.context):0;for(;r<i;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&n.nodeType!==11){if(o?o.index(n)>-1:v.find.matchesSelector(n,e)){s.push(n);break}n=n.parentNode}}return s=s.length>1?v.unique(s):s,this.pushStack(s,"closest",e)},index:function(e){return e?typeof e=="string"?v.inArray(this[0],v(e)):v.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(e,t){var n=typeof e=="string"?v(e,t):v.makeArray(e&&e.nodeType?[e]:e),r=v.merge(this.get(),n);return this.pushStack(ut(n[0])||ut(r[0])?r:v.unique(r))},addBack:function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}}),v.fn.andSelf=v.fn.addBack,v.each({parent:function(e){var t=e.parentNode;return t&&t.nodeType!==11?t:null},parents:function(e){return v.dir(e,"parentNode")},parentsUntil:function(e,t,n){return v.dir(e,"parentNode",n)},next:function(e){return at(e,"nextSibling")},prev:function(e){return at(e,"previousSibling")},nextAll:function(e){return v.dir(e,"nextSibling")},prevAll:function(e){return v.dir(e,"previousSibling")},nextUntil:function(e,t,n){return v.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return v.dir(e,"previousSibling",n)},siblings:function(e){return v.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return v.sibling(e.firstChild)},contents:function(e){return v.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:v.merge([],e.childNodes)}},function(e,t){v.fn[e]=function(n,r){var i=v.map(this,t,n);return nt.test(e)||(r=n),r&&typeof r=="string"&&(i=v.filter(r,i)),i=this.length>1&&!ot[e]?v.unique(i):i,this.length>1&&rt.test(e)&&(i=i.reverse()),this.pushStack(i,e,l.call(arguments).join(","))}}),v.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),t.length===1?v.find.matchesSelector(t[0],e)?[t[0]]:[]:v.find.matches(e,t)},dir:function(e,n,r){var i=[],s=e[n];while(s&&s.nodeType!==9&&(r===t||s.nodeType!==1||!v(s).is(r)))s.nodeType===1&&i.push(s),s=s[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)e.nodeType===1&&e!==t&&n.push(e);return n}});var ct="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",ht=/ jQuery\d+="(?:null|\d+)"/g,pt=/^\s+/,dt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,vt=/<([\w:]+)/,mt=/<tbody/i,gt=/<|&#?\w+;/,yt=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,wt=new RegExp("<(?:"+ct+")[\\s/>]","i"),Et=/^(?:checkbox|radio)$/,St=/checked\s*(?:[^=]|=\s*.checked.)/i,xt=/\/(java|ecma)script/i,Tt=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,Nt={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},Ct=lt(i),kt=Ct.appendChild(i.createElement("div"));Nt.optgroup=Nt.option,Nt.tbody=Nt.tfoot=Nt.colgroup=Nt.caption=Nt.thead,Nt.th=Nt.td,v.support.htmlSerialize||(Nt._default=[1,"X<div>","</div>"]),v.fn.extend({text:function(e){return v.access(this,function(e){return e===t?v.text(this):this.empty().append((this[0]&&this[0].ownerDocument||i).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(v.isFunction(e))return this.each(function(t){v(this).wrapAll(e.call(this,t))});if(this[0]){var t=v(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&e.firstChild.nodeType===1)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return v.isFunction(e)?this.each(function(t){v(this).wrapInner(e.call(this,t))}):this.each(function(){var t=v(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=v.isFunction(e);return this.each(function(n){v(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){v.nodeName(this,"body")||v(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(e,this.firstChild)})},before:function(){if(!ut(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this)});if(arguments.length){var e=v.clean(arguments);return this.pushStack(v.merge(e,this),"before",this.selector)}},after:function(){if(!ut(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this.nextSibling)});if(arguments.length){var e=v.clean(arguments);return this.pushStack(v.merge(this,e),"after",this.selector)}},remove:function(e,t){var n,r=0;for(;(n=this[r])!=null;r++)if(!e||v.filter(e,[n]).length)!t&&n.nodeType===1&&(v.cleanData(n.getElementsByTagName("*")),v.cleanData([n])),n.parentNode&&n.parentNode.removeChild(n);return this},empty:function(){var e,t=0;for(;(e=this[t])!=null;t++){e.nodeType===1&&v.cleanData(e.getElementsByTagName("*"));while(e.firstChild)e.removeChild(e.firstChild)}return this},clone:function(e,t){return e=e==null?!1:e,t=t==null?e:t,this.map(function(){return v.clone(this,e,t)})},html:function(e){return v.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return n.nodeType===1?n.innerHTML.replace(ht,""):t;if(typeof e=="string"&&!yt.test(e)&&(v.support.htmlSerialize||!wt.test(e))&&(v.support.leadingWhitespace||!pt.test(e))&&!Nt[(vt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(dt,"<$1></$2>");try{for(;r<i;r++)n=this[r]||{},n.nodeType===1&&(v.cleanData(n.getElementsByTagName("*")),n.innerHTML=e);n=0}catch(s){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){return ut(this[0])?this.length?this.pushStack(v(v.isFunction(e)?e():e),"replaceWith",e):this:v.isFunction(e)?this.each(function(t){var n=v(this),r=n.html();n.replaceWith(e.call(this,t,r))}):(typeof e!="string"&&(e=v(e).detach()),this.each(function(){var t=this.nextSibling,n=this.parentNode;v(this).remove(),t?v(t).before(e):v(n).append(e)}))},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=[].concat.apply([],e);var i,s,o,u,a=0,f=e[0],l=[],c=this.length;if(!v.support.checkClone&&c>1&&typeof f=="string"&&St.test(f))return this.each(function(){v(this).domManip(e,n,r)});if(v.isFunction(f))return this.each(function(i){var s=v(this);e[0]=f.call(this,i,n?s.html():t),s.domManip(e,n,r)});if(this[0]){i=v.buildFragment(e,this,l),o=i.fragment,s=o.firstChild,o.childNodes.length===1&&(o=s);if(s){n=n&&v.nodeName(s,"tr");for(u=i.cacheable||c-1;a<c;a++)r.call(n&&v.nodeName(this[a],"table")?Lt(this[a],"tbody"):this[a],a===u?o:v.clone(o,!0,!0))}o=s=null,l.length&&v.each(l,function(e,t){t.src?v.ajax?v.ajax({url:t.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):v.error("no ajax"):v.globalEval((t.text||t.textContent||t.innerHTML||"").replace(Tt,"")),t.parentNode&&t.parentNode.removeChild(t)})}return this}}),v.buildFragment=function(e,n,r){var s,o,u,a=e[0];return n=n||i,n=!n.nodeType&&n[0]||n,n=n.ownerDocument||n,e.length===1&&typeof a=="string"&&a.length<512&&n===i&&a.charAt(0)==="<"&&!bt.test(a)&&(v.support.checkClone||!St.test(a))&&(v.support.html5Clone||!wt.test(a))&&(o=!0,s=v.fragments[a],u=s!==t),s||(s=n.createDocumentFragment(),v.clean(e,n,s,r),o&&(v.fragments[a]=u&&s)),{fragment:s,cacheable:o}},v.fragments={},v.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){v.fn[e]=function(n){var r,i=0,s=[],o=v(n),u=o.length,a=this.length===1&&this[0].parentNode;if((a==null||a&&a.nodeType===11&&a.childNodes.length===1)&&u===1)return o[t](this[0]),this;for(;i<u;i++)r=(i>0?this.clone(!0):this).get(),v(o[i])[t](r),s=s.concat(r);return this.pushStack(s,e,o.selector)}}),v.extend({clone:function(e,t,n){var r,i,s,o;v.support.html5Clone||v.isXMLDoc(e)||!wt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(kt.innerHTML=e.outerHTML,kt.removeChild(o=kt.firstChild));if((!v.support.noCloneEvent||!v.support.noCloneChecked)&&(e.nodeType===1||e.nodeType===11)&&!v.isXMLDoc(e)){Ot(e,o),r=Mt(e),i=Mt(o);for(s=0;r[s];++s)i[s]&&Ot(r[s],i[s])}if(t){At(e,o);if(n){r=Mt(e),i=Mt(o);for(s=0;r[s];++s)At(r[s],i[s])}}return r=i=null,o},clean:function(e,t,n,r){var s,o,u,a,f,l,c,h,p,d,m,g,y=t===i&&Ct,b=[];if(!t||typeof t.createDocumentFragment=="undefined")t=i;for(s=0;(u=e[s])!=null;s++){typeof u=="number"&&(u+="");if(!u)continue;if(typeof u=="string")if(!gt.test(u))u=t.createTextNode(u);else{y=y||lt(t),c=t.createElement("div"),y.appendChild(c),u=u.replace(dt,"<$1></$2>"),a=(vt.exec(u)||["",""])[1].toLowerCase(),f=Nt[a]||Nt._default,l=f[0],c.innerHTML=f[1]+u+f[2];while(l--)c=c.lastChild;if(!v.support.tbody){h=mt.test(u),p=a==="table"&&!h?c.firstChild&&c.firstChild.childNodes:f[1]==="<table>"&&!h?c.childNodes:[];for(o=p.length-1;o>=0;--o)v.nodeName(p[o],"tbody")&&!p[o].childNodes.length&&p[o].parentNode.removeChild(p[o])}!v.support.leadingWhitespace&&pt.test(u)&&c.insertBefore(t.createTextNode(pt.exec(u)[0]),c.firstChild),u=c.childNodes,c.parentNode.removeChild(c)}u.nodeType?b.push(u):v.merge(b,u)}c&&(u=c=y=null);if(!v.support.appendChecked)for(s=0;(u=b[s])!=null;s++)v.nodeName(u,"input")?_t(u):typeof u.getElementsByTagName!="undefined"&&v.grep(u.getElementsByTagName("input"),_t);if(n){m=function(e){if(!e.type||xt.test(e.type))return r?r.push(e.parentNode?e.parentNode.removeChild(e):e):n.appendChild(e)};for(s=0;(u=b[s])!=null;s++)if(!v.nodeName(u,"script")||!m(u))n.appendChild(u),typeof u.getElementsByTagName!="undefined"&&(g=v.grep(v.merge([],u.getElementsByTagName("script")),m),b.splice.apply(b,[s+1,0].concat(g)),s+=g.length)}return b},cleanData:function(e,t){var n,r,i,s,o=0,u=v.expando,a=v.cache,f=v.support.deleteExpando,l=v.event.special;for(;(i=e[o])!=null;o++)if(t||v.acceptData(i)){r=i[u],n=r&&a[r];if(n){if(n.events)for(s in n.events)l[s]?v.event.remove(i,s):v.removeEvent(i,s,n.handle);a[r]&&(delete a[r],f?delete i[u]:i.removeAttribute?i.removeAttribute(u):i[u]=null,v.deletedIds.push(r))}}}}),function(){var e,t;v.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e=v.uaMatch(o.userAgent),t={},e.browser&&(t[e.browser]=!0,t.version=e.version),t.chrome?t.webkit=!0:t.webkit&&(t.safari=!0),v.browser=t,v.sub=function(){function e(t,n){return new e.fn.init(t,n)}v.extend(!0,e,this),e.superclass=this,e.fn=e.prototype=this(),e.fn.constructor=e,e.sub=this.sub,e.fn.init=function(r,i){return i&&i instanceof v&&!(i instanceof e)&&(i=e(i)),v.fn.init.call(this,r,i,t)},e.fn.init.prototype=e.fn;var t=e(i);return e}}();var Dt,Pt,Ht,Bt=/alpha\([^)]*\)/i,jt=/opacity=([^)]*)/,Ft=/^(top|right|bottom|left)$/,It=/^(none|table(?!-c[ea]).+)/,qt=/^margin/,Rt=new RegExp("^("+m+")(.*)$","i"),Ut=new RegExp("^("+m+")(?!px)[a-z%]+$","i"),zt=new RegExp("^([-+])=("+m+")","i"),Wt={BODY:"block"},Xt={position:"absolute",visibility:"hidden",display:"block"},Vt={letterSpacing:0,fontWeight:400},$t=["Top","Right","Bottom","Left"],Jt=["Webkit","O","Moz","ms"],Kt=v.fn.toggle;v.fn.extend({css:function(e,n){return v.access(this,function(e,n,r){return r!==t?v.style(e,n,r):v.css(e,n)},e,n,arguments.length>1)},show:function(){return Yt(this,!0)},hide:function(){return Yt(this)},toggle:function(e,t){var n=typeof e=="boolean";return v.isFunction(e)&&v.isFunction(t)?Kt.apply(this,arguments):this.each(function(){(n?e:Gt(this))?v(this).show():v(this).hide()})}}),v.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Dt(e,"opacity");return n===""?"1":n}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":v.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(!e||e.nodeType===3||e.nodeType===8||!e.style)return;var s,o,u,a=v.camelCase(n),f=e.style;n=v.cssProps[a]||(v.cssProps[a]=Qt(f,a)),u=v.cssHooks[n]||v.cssHooks[a];if(r===t)return u&&"get"in u&&(s=u.get(e,!1,i))!==t?s:f[n];o=typeof r,o==="string"&&(s=zt.exec(r))&&(r=(s[1]+1)*s[2]+parseFloat(v.css(e,n)),o="number");if(r==null||o==="number"&&isNaN(r))return;o==="number"&&!v.cssNumber[a]&&(r+="px");if(!u||!("set"in u)||(r=u.set(e,r,i))!==t)try{f[n]=r}catch(l){}},css:function(e,n,r,i){var s,o,u,a=v.camelCase(n);return n=v.cssProps[a]||(v.cssProps[a]=Qt(e.style,a)),u=v.cssHooks[n]||v.cssHooks[a],u&&"get"in u&&(s=u.get(e,!0,i)),s===t&&(s=Dt(e,n)),s==="normal"&&n in Vt&&(s=Vt[n]),r||i!==t?(o=parseFloat(s),r||v.isNumeric(o)?o||0:s):s},swap:function(e,t,n){var r,i,s={};for(i in t)s[i]=e.style[i],e.style[i]=t[i];r=n.call(e);for(i in t)e.style[i]=s[i];return r}}),e.getComputedStyle?Dt=function(t,n){var r,i,s,o,u=e.getComputedStyle(t,null),a=t.style;return u&&(r=u.getPropertyValue(n)||u[n],r===""&&!v.contains(t.ownerDocument,t)&&(r=v.style(t,n)),Ut.test(r)&&qt.test(n)&&(i=a.width,s=a.minWidth,o=a.maxWidth,a.minWidth=a.maxWidth=a.width=r,r=u.width,a.width=i,a.minWidth=s,a.maxWidth=o)),r}:i.documentElement.currentStyle&&(Dt=function(e,t){var n,r,i=e.currentStyle&&e.currentStyle[t],s=e.style;return i==null&&s&&s[t]&&(i=s[t]),Ut.test(i)&&!Ft.test(t)&&(n=s.left,r=e.runtimeStyle&&e.runtimeStyle.left,r&&(e.runtimeStyle.left=e.currentStyle.left),s.left=t==="fontSize"?"1em":i,i=s.pixelLeft+"px",s.left=n,r&&(e.runtimeStyle.left=r)),i===""?"auto":i}),v.each(["height","width"],function(e,t){v.cssHooks[t]={get:function(e,n,r){if(n)return e.offsetWidth===0&&It.test(Dt(e,"display"))?v.swap(e,Xt,function(){return tn(e,t,r)}):tn(e,t,r)},set:function(e,n,r){return Zt(e,n,r?en(e,t,r,v.support.boxSizing&&v.css(e,"boxSizing")==="border-box"):0)}}}),v.support.opacity||(v.cssHooks.opacity={get:function(e,t){return jt.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=v.isNumeric(t)?"alpha(opacity="+t*100+")":"",s=r&&r.filter||n.filter||"";n.zoom=1;if(t>=1&&v.trim(s.replace(Bt,""))===""&&n.removeAttribute){n.removeAttribute("filter");if(r&&!r.filter)return}n.filter=Bt.test(s)?s.replace(Bt,i):s+" "+i}}),v(function(){v.support.reliableMarginRight||(v.cssHooks.marginRight={get:function(e,t){return v.swap(e,{display:"inline-block"},function(){if(t)return Dt(e,"marginRight")})}}),!v.support.pixelPosition&&v.fn.position&&v.each(["top","left"],function(e,t){v.cssHooks[t]={get:function(e,n){if(n){var r=Dt(e,t);return Ut.test(r)?v(e).position()[t]+"px":r}}}})}),v.expr&&v.expr.filters&&(v.expr.filters.hidden=function(e){return e.offsetWidth===0&&e.offsetHeight===0||!v.support.reliableHiddenOffsets&&(e.style&&e.style.display||Dt(e,"display"))==="none"},v.expr.filters.visible=function(e){return!v.expr.filters.hidden(e)}),v.each({margin:"",padding:"",border:"Width"},function(e,t){v.cssHooks[e+t]={expand:function(n){var r,i=typeof n=="string"?n.split(" "):[n],s={};for(r=0;r<4;r++)s[e+$t[r]+t]=i[r]||i[r-2]||i[0];return s}},qt.test(e)||(v.cssHooks[e+t].set=Zt)});var rn=/%20/g,sn=/\[\]$/,on=/\r?\n/g,un=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,an=/^(?:select|textarea)/i;v.fn.extend({serialize:function(){return v.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?v.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||an.test(this.nodeName)||un.test(this.type))}).map(function(e,t){var n=v(this).val();return n==null?null:v.isArray(n)?v.map(n,function(e,n){return{name:t.name,value:e.replace(on,"\r\n")}}):{name:t.name,value:n.replace(on,"\r\n")}}).get()}}),v.param=function(e,n){var r,i=[],s=function(e,t){t=v.isFunction(t)?t():t==null?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};n===t&&(n=v.ajaxSettings&&v.ajaxSettings.traditional);if(v.isArray(e)||e.jquery&&!v.isPlainObject(e))v.each(e,function(){s(this.name,this.value)});else for(r in e)fn(r,e[r],n,s);return i.join("&").replace(rn,"+")};var ln,cn,hn=/#.*$/,pn=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,dn=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,vn=/^(?:GET|HEAD)$/,mn=/^\/\//,gn=/\?/,yn=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bn=/([?&])_=[^&]*/,wn=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,En=v.fn.load,Sn={},xn={},Tn=["*/"]+["*"];try{cn=s.href}catch(Nn){cn=i.createElement("a"),cn.href="",cn=cn.href}ln=wn.exec(cn.toLowerCase())||[],v.fn.load=function(e,n,r){if(typeof e!="string"&&En)return En.apply(this,arguments);if(!this.length)return this;var i,s,o,u=this,a=e.indexOf(" ");return a>=0&&(i=e.slice(a,e.length),e=e.slice(0,a)),v.isFunction(n)?(r=n,n=t):n&&typeof n=="object"&&(s="POST"),v.ajax({url:e,type:s,dataType:"html",data:n,complete:function(e,t){r&&u.each(r,o||[e.responseText,t,e])}}).done(function(e){o=arguments,u.html(i?v("<div>").append(e.replace(yn,"")).find(i):e)}),this},v.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(e,t){v.fn[t]=function(e){return this.on(t,e)}}),v.each(["get","post"],function(e,n){v[n]=function(e,r,i,s){return v.isFunction(r)&&(s=s||i,i=r,r=t),v.ajax({type:n,url:e,data:r,success:i,dataType:s})}}),v.extend({getScript:function(e,n){return v.get(e,t,n,"script")},getJSON:function(e,t,n){return v.get(e,t,n,"json")},ajaxSetup:function(e,t){return t?Ln(e,v.ajaxSettings):(t=e,e=v.ajaxSettings),Ln(e,t),e},ajaxSettings:{url:cn,isLocal:dn.test(ln[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":Tn},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":v.parseJSON,"text xml":v.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:Cn(Sn),ajaxTransport:Cn(xn),ajax:function(e,n){function T(e,n,s,a){var l,y,b,w,S,T=n;if(E===2)return;E=2,u&&clearTimeout(u),o=t,i=a||"",x.readyState=e>0?4:0,s&&(w=An(c,x,s));if(e>=200&&e<300||e===304)c.ifModified&&(S=x.getResponseHeader("Last-Modified"),S&&(v.lastModified[r]=S),S=x.getResponseHeader("Etag"),S&&(v.etag[r]=S)),e===304?(T="notmodified",l=!0):(l=On(c,w),T=l.state,y=l.data,b=l.error,l=!b);else{b=T;if(!T||e)T="error",e<0&&(e=0)}x.status=e,x.statusText=(n||T)+"",l?d.resolveWith(h,[y,T,x]):d.rejectWith(h,[x,T,b]),x.statusCode(g),g=t,f&&p.trigger("ajax"+(l?"Success":"Error"),[x,c,l?y:b]),m.fireWith(h,[x,T]),f&&(p.trigger("ajaxComplete",[x,c]),--v.active||v.event.trigger("ajaxStop"))}typeof e=="object"&&(n=e,e=t),n=n||{};var r,i,s,o,u,a,f,l,c=v.ajaxSetup({},n),h=c.context||c,p=h!==c&&(h.nodeType||h instanceof v)?v(h):v.event,d=v.Deferred(),m=v.Callbacks("once memory"),g=c.statusCode||{},b={},w={},E=0,S="canceled",x={readyState:0,setRequestHeader:function(e,t){if(!E){var n=e.toLowerCase();e=w[n]=w[n]||e,b[e]=t}return this},getAllResponseHeaders:function(){return E===2?i:null},getResponseHeader:function(e){var n;if(E===2){if(!s){s={};while(n=pn.exec(i))s[n[1].toLowerCase()]=n[2]}n=s[e.toLowerCase()]}return n===t?null:n},overrideMimeType:function(e){return E||(c.mimeType=e),this},abort:function(e){return e=e||S,o&&o.abort(e),T(0,e),this}};d.promise(x),x.success=x.done,x.error=x.fail,x.complete=m.add,x.statusCode=function(e){if(e){var t;if(E<2)for(t in e)g[t]=[g[t],e[t]];else t=e[x.status],x.always(t)}return this},c.url=((e||c.url)+"").replace(hn,"").replace(mn,ln[1]+"//"),c.dataTypes=v.trim(c.dataType||"*").toLowerCase().split(y),c.crossDomain==null&&(a=wn.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===ln[1]&&a[2]===ln[2]&&(a[3]||(a[1]==="http:"?80:443))==(ln[3]||(ln[1]==="http:"?80:443)))),c.data&&c.processData&&typeof c.data!="string"&&(c.data=v.param(c.data,c.traditional)),kn(Sn,c,n,x);if(E===2)return x;f=c.global,c.type=c.type.toUpperCase(),c.hasContent=!vn.test(c.type),f&&v.active++===0&&v.event.trigger("ajaxStart");if(!c.hasContent){c.data&&(c.url+=(gn.test(c.url)?"&":"?")+c.data,delete c.data),r=c.url;if(c.cache===!1){var N=v.now(),C=c.url.replace(bn,"$1_="+N);c.url=C+(C===c.url?(gn.test(c.url)?"&":"?")+"_="+N:"")}}(c.data&&c.hasContent&&c.contentType!==!1||n.contentType)&&x.setRequestHeader("Content-Type",c.contentType),c.ifModified&&(r=r||c.url,v.lastModified[r]&&x.setRequestHeader("If-Modified-Since",v.lastModified[r]),v.etag[r]&&x.setRequestHeader("If-None-Match",v.etag[r])),x.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+(c.dataTypes[0]!=="*"?", "+Tn+"; q=0.01":""):c.accepts["*"]);for(l in c.headers)x.setRequestHeader(l,c.headers[l]);if(!c.beforeSend||c.beforeSend.call(h,x,c)!==!1&&E!==2){S="abort";for(l in{success:1,error:1,complete:1})x[l](c[l]);o=kn(xn,c,n,x);if(!o)T(-1,"No Transport");else{x.readyState=1,f&&p.trigger("ajaxSend",[x,c]),c.async&&c.timeout>0&&(u=setTimeout(function(){x.abort("timeout")},c.timeout));try{E=1,o.send(b,T)}catch(k){if(!(E<2))throw k;T(-1,k)}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var Mn=[],_n=/\?/,Dn=/(=)\?(?=&|$)|\?\?/,Pn=v.now();v.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Mn.pop()||v.expando+"_"+Pn++;return this[e]=!0,e}}),v.ajaxPrefilter("json jsonp",function(n,r,i){var s,o,u,a=n.data,f=n.url,l=n.jsonp!==!1,c=l&&Dn.test(f),h=l&&!c&&typeof a=="string"&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Dn.test(a);if(n.dataTypes[0]==="jsonp"||c||h)return s=n.jsonpCallback=v.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,o=e[s],c?n.url=f.replace(Dn,"$1"+s):h?n.data=a.replace(Dn,"$1"+s):l&&(n.url+=(_n.test(f)?"&":"?")+n.jsonp+"="+s),n.converters["script json"]=function(){return u||v.error(s+" was not called"),u[0]},n.dataTypes[0]="json",e[s]=function(){u=arguments},i.always(function(){e[s]=o,n[s]&&(n.jsonpCallback=r.jsonpCallback,Mn.push(s)),u&&v.isFunction(o)&&o(u[0]),u=o=t}),"script"}),v.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(e){return v.globalEval(e),e}}}),v.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),v.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=i.head||i.getElementsByTagName("head")[0]||i.documentElement;return{send:function(s,o){n=i.createElement("script"),n.async="async",e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,i){if(i||!n.readyState||/loaded|complete/.test(n.readyState))n.onload=n.onreadystatechange=null,r&&n.parentNode&&r.removeChild(n),n=t,i||o(200,"success")},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(0,1)}}}});var Hn,Bn=e.ActiveXObject?function(){for(var e in Hn)Hn[e](0,1)}:!1,jn=0;v.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&Fn()||In()}:Fn,function(e){v.extend(v.support,{ajax:!!e,cors:!!e&&"withCredentials"in e})}(v.ajaxSettings.xhr()),v.support.ajax&&v.ajaxTransport(function(n){if(!n.crossDomain||v.support.cors){var r;return{send:function(i,s){var o,u,a=n.xhr();n.username?a.open(n.type,n.url,n.async,n.username,n.password):a.open(n.type,n.url,n.async);if(n.xhrFields)for(u in n.xhrFields)a[u]=n.xhrFields[u];n.mimeType&&a.overrideMimeType&&a.overrideMimeType(n.mimeType),!n.crossDomain&&!i["X-Requested-With"]&&(i["X-Requested-With"]="XMLHttpRequest");try{for(u in i)a.setRequestHeader(u,i[u])}catch(f){}a.send(n.hasContent&&n.data||null),r=function(e,i){var u,f,l,c,h;try{if(r&&(i||a.readyState===4)){r=t,o&&(a.onreadystatechange=v.noop,Bn&&delete Hn[o]);if(i)a.readyState!==4&&a.abort();else{u=a.status,l=a.getAllResponseHeaders(),c={},h=a.responseXML,h&&h.documentElement&&(c.xml=h);try{c.text=a.responseText}catch(p){}try{f=a.statusText}catch(p){f=""}!u&&n.isLocal&&!n.crossDomain?u=c.text?200:404:u===1223&&(u=204)}}}catch(d){i||s(-1,d)}c&&s(u,f,c,l)},n.async?a.readyState===4?setTimeout(r,0):(o=++jn,Bn&&(Hn||(Hn={},v(e).unload(Bn)),Hn[o]=r),a.onreadystatechange=r):r()},abort:function(){r&&r(0,1)}}}});var qn,Rn,Un=/^(?:toggle|show|hide)$/,zn=new RegExp("^(?:([-+])=|)("+m+")([a-z%]*)$","i"),Wn=/queueHooks$/,Xn=[Gn],Vn={"*":[function(e,t){var n,r,i=this.createTween(e,t),s=zn.exec(t),o=i.cur(),u=+o||0,a=1,f=20;if(s){n=+s[2],r=s[3]||(v.cssNumber[e]?"":"px");if(r!=="px"&&u){u=v.css(i.elem,e,!0)||n||1;do a=a||".5",u/=a,v.style(i.elem,e,u+r);while(a!==(a=i.cur()/o)&&a!==1&&--f)}i.unit=r,i.start=u,i.end=s[1]?u+(s[1]+1)*n:n}return i}]};v.Animation=v.extend(Kn,{tweener:function(e,t){v.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;r<i;r++)n=e[r],Vn[n]=Vn[n]||[],Vn[n].unshift(t)},prefilter:function(e,t){t?Xn.unshift(e):Xn.push(e)}}),v.Tween=Yn,Yn.prototype={constructor:Yn,init:function(e,t,n,r,i,s){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=s||(v.cssNumber[n]?"":"px")},cur:function(){var e=Yn.propHooks[this.prop];return e&&e.get?e.get(this):Yn.propHooks._default.get(this)},run:function(e){var t,n=Yn.propHooks[this.prop];return this.options.duration?this.pos=t=v.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Yn.propHooks._default.set(this),this}},Yn.prototype.init.prototype=Yn.prototype,Yn.propHooks={_default:{get:function(e){var t;return e.elem[e.prop]==null||!!e.elem.style&&e.elem.style[e.prop]!=null?(t=v.css(e.elem,e.prop,!1,""),!t||t==="auto"?0:t):e.elem[e.prop]},set:function(e){v.fx.step[e.prop]?v.fx.step[e.prop](e):e.elem.style&&(e.elem.style[v.cssProps[e.prop]]!=null||v.cssHooks[e.prop])?v.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Yn.propHooks.scrollTop=Yn.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},v.each(["toggle","show","hide"],function(e,t){var n=v.fn[t];v.fn[t]=function(r,i,s){return r==null||typeof r=="boolean"||!e&&v.isFunction(r)&&v.isFunction(i)?n.apply(this,arguments):this.animate(Zn(t,!0),r,i,s)}}),v.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Gt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=v.isEmptyObject(e),s=v.speed(t,n,r),o=function(){var t=Kn(this,v.extend({},e),s);i&&t.stop(!0)};return i||s.queue===!1?this.each(o):this.queue(s.queue,o)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return typeof e!="string"&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=e!=null&&e+"queueHooks",s=v.timers,o=v._data(this);if(n)o[n]&&o[n].stop&&i(o[n]);else for(n in o)o[n]&&o[n].stop&&Wn.test(n)&&i(o[n]);for(n=s.length;n--;)s[n].elem===this&&(e==null||s[n].queue===e)&&(s[n].anim.stop(r),t=!1,s.splice(n,1));(t||!r)&&v.dequeue(this,e)})}}),v.each({slideDown:Zn("show"),slideUp:Zn("hide"),slideToggle:Zn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){v.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),v.speed=function(e,t,n){var r=e&&typeof e=="object"?v.extend({},e):{complete:n||!n&&t||v.isFunction(e)&&e,duration:e,easing:n&&t||t&&!v.isFunction(t)&&t};r.duration=v.fx.off?0:typeof r.duration=="number"?r.duration:r.duration in v.fx.speeds?v.fx.speeds[r.duration]:v.fx.speeds._default;if(r.queue==null||r.queue===!0)r.queue="fx";return r.old=r.complete,r.complete=function(){v.isFunction(r.old)&&r.old.call(this),r.queue&&v.dequeue(this,r.queue)},r},v.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},v.timers=[],v.fx=Yn.prototype.init,v.fx.tick=function(){var e,n=v.timers,r=0;qn=v.now();for(;r<n.length;r++)e=n[r],!e()&&n[r]===e&&n.splice(r--,1);n.length||v.fx.stop(),qn=t},v.fx.timer=function(e){e()&&v.timers.push(e)&&!Rn&&(Rn=setInterval(v.fx.tick,v.fx.interval))},v.fx.interval=13,v.fx.stop=function(){clearInterval(Rn),Rn=null},v.fx.speeds={slow:600,fast:200,_default:400},v.fx.step={},v.expr&&v.expr.filters&&(v.expr.filters.animated=function(e){return v.grep(v.timers,function(t){return e===t.elem}).length});var er=/^(?:body|html)$/i;v.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){v.offset.setOffset(this,e,t)});var n,r,i,s,o,u,a,f={top:0,left:0},l=this[0],c=l&&l.ownerDocument;if(!c)return;return(r=c.body)===l?v.offset.bodyOffset(l):(n=c.documentElement,v.contains(n,l)?(typeof l.getBoundingClientRect!="undefined"&&(f=l.getBoundingClientRect()),i=tr(c),s=n.clientTop||r.clientTop||0,o=n.clientLeft||r.clientLeft||0,u=i.pageYOffset||n.scrollTop,a=i.pageXOffset||n.scrollLeft,{top:f.top+u-s,left:f.left+a-o}):f)},v.offset={bodyOffset:function(e){var t=e.offsetTop,n=e.offsetLeft;return v.support.doesNotIncludeMarginInBodyOffset&&(t+=parseFloat(v.css(e,"marginTop"))||0,n+=parseFloat(v.css(e,"marginLeft"))||0),{top:t,left:n}},setOffset:function(e,t,n){var r=v.css(e,"position");r==="static"&&(e.style.position="relative");var i=v(e),s=i.offset(),o=v.css(e,"top"),u=v.css(e,"left"),a=(r==="absolute"||r==="fixed")&&v.inArray("auto",[o,u])>-1,f={},l={},c,h;a?(l=i.position(),c=l.top,h=l.left):(c=parseFloat(o)||0,h=parseFloat(u)||0),v.isFunction(t)&&(t=t.call(e,n,s)),t.top!=null&&(f.top=t.top-s.top+c),t.left!=null&&(f.left=t.left-s.left+h),"using"in t?t.using.call(e,f):i.css(f)}},v.fn.extend({position:function(){if(!this[0])return;var e=this[0],t=this.offsetParent(),n=this.offset(),r=er.test(t[0].nodeName)?{top:0,left:0}:t.offset();return n.top-=parseFloat(v.css(e,"marginTop"))||0,n.left-=parseFloat(v.css(e,"marginLeft"))||0,r.top+=parseFloat(v.css(t[0],"borderTopWidth"))||0,r.left+=parseFloat(v.css(t[0],"borderLeftWidth"))||0,{top:n.top-r.top,left:n.left-r.left}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||i.body;while(e&&!er.test(e.nodeName)&&v.css(e,"position")==="static")e=e.offsetParent;return e||i.body})}}),v.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);v.fn[e]=function(i){return v.access(this,function(e,i,s){var o=tr(e);if(s===t)return o?n in o?o[n]:o.document.documentElement[i]:e[i];o?o.scrollTo(r?v(o).scrollLeft():s,r?s:v(o).scrollTop()):e[i]=s},e,i,arguments.length,null)}}),v.each({Height:"height",Width:"width"},function(e,n){v.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){v.fn[i]=function(i,s){var o=arguments.length&&(r||typeof i!="boolean"),u=r||(i===!0||s===!0?"margin":"border");return v.access(this,function(n,r,i){var s;return v.isWindow(n)?n.document.documentElement["client"+e]:n.nodeType===9?(s=n.documentElement,Math.max(n.body["scroll"+e],s["scroll"+e],n.body["offset"+e],s["offset"+e],s["client"+e])):i===t?v.css(n,r,i,u):v.style(n,r,i,u)},n,o?i:t,o,null)}})}),e.jQuery=e.$=v,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return v})})(window);

/*
 *	jQuery carouFredSel 6.1.0
 *	Demo's and documentation:
 *	caroufredsel.frebsite.nl
 *
 *	Copyright (c) 2012 Fred Heusschen
 *	www.frebsite.nl
 *
 *	Dual licensed under the MIT and GPL licenses.
 *	http://en.wikipedia.org/wiki/MIT_License
 *	http://en.wikipedia.org/wiki/GNU_General_Public_License
 */


(function($) {


    //	LOCAL

    if ( $.fn.carouFredSel )
    {
        return;
    }

    $.fn.caroufredsel = $.fn.carouFredSel = function(options, configs)
    {

        //	no element
        if (this.length == 0)
        {
            debug( true, 'No element found for "' + this.selector + '".' );
            return this;
        }

        //	multiple elements
        if (this.length > 1)
        {
            return this.each(function() {
                $(this).carouFredSel(options, configs);
            });
        }


        var $cfs = this,
            $tt0 = this[0],
            starting_position = false;

        if ($cfs.data('_cfs_isCarousel'))
        {
            starting_position = $cfs.triggerHandler('_cfs_triggerEvent', 'currentPosition');
            $cfs.trigger('_cfs_triggerEvent', ['destroy', true]);
        }


        $cfs._cfs_init = function(o, setOrig, start)
        {
            o = go_getObject($tt0, o);

            o.items = go_getItemsObject($tt0, o.items);
            o.scroll = go_getScrollObject($tt0, o.scroll);
            o.auto = go_getAutoObject($tt0, o.auto);
            o.prev = go_getPrevNextObject($tt0, o.prev);
            o.next = go_getPrevNextObject($tt0, o.next);
            o.pagination = go_getPaginationObject($tt0, o.pagination);
            o.swipe = go_getSwipeObject($tt0, o.swipe);
            o.mousewheel = go_getMousewheelObject($tt0, o.mousewheel);

            if (setOrig)
            {
                opts_orig = $.extend(true, {}, $.fn.carouFredSel.defaults, o);
            }

            opts = $.extend(true, {}, $.fn.carouFredSel.defaults, o);
            opts.d = cf_getDimensions(opts);

            crsl.direction = (opts.direction == 'up' || opts.direction == 'left') ? 'next' : 'prev';

            var	a_itm = $cfs.children(),
                avail_primary = ms_getParentSize($wrp, opts, 'width');

            if (is_true(opts.cookie))
            {
                opts.cookie = 'caroufredsel_cookie_' + conf.serialNumber;
            }

            opts.maxDimension = ms_getMaxDimension(opts, avail_primary);

            //	complement items and sizes
            opts.items = in_complementItems(opts.items, opts, a_itm, start);
            opts[opts.d['width']] = in_complementPrimarySize(opts[opts.d['width']], opts, a_itm);
            opts[opts.d['height']] = in_complementSecondarySize(opts[opts.d['height']], opts, a_itm);

            //	primary size not set for a responsive carousel
            if (opts.responsive)
            {
                if (!is_percentage(opts[opts.d['width']]))
                {
                    opts[opts.d['width']] = '100%';
                }
            }

            //	primary size is percentage
            if (is_percentage(opts[opts.d['width']]))
            {
                crsl.upDateOnWindowResize = true;
                crsl.primarySizePercentage = opts[opts.d['width']];
                opts[opts.d['width']] = ms_getPercentage(avail_primary, crsl.primarySizePercentage);
                if (!opts.items.visible)
                {
                    opts.items.visibleConf.variable = true;
                }
            }

            if (opts.responsive)
            {
                opts.usePadding = false;
                opts.padding = [0, 0, 0, 0];
                opts.align = false;
                opts.items.visibleConf.variable = false;
            }
            else
            {
                //	visible-items not set
                if (!opts.items.visible)
                {
                    opts = in_complementVisibleItems(opts, avail_primary);
                }

                //	primary size not set -> calculate it or set to "variable"
                if (!opts[opts.d['width']])
                {
                    if (!opts.items.visibleConf.variable && is_number(opts.items[opts.d['width']]) && opts.items.filter == '*')
                    {
                        opts[opts.d['width']] = opts.items.visible * opts.items[opts.d['width']];
                        opts.align = false;
                    }
                    else
                    {
                        opts[opts.d['width']] = 'variable';
                    }
                }
                //	align not set -> set to center if primary size is number
                if (is_undefined(opts.align))
                {
                    opts.align = (is_number(opts[opts.d['width']]))
                        ? 'center'
                        : false;
                }
                //	set variabe visible-items
                if (opts.items.visibleConf.variable)
                {
                    opts.items.visible = gn_getVisibleItemsNext(a_itm, opts, 0);
                }
            }

            //	set visible items by filter
            if (opts.items.filter != '*' && !opts.items.visibleConf.variable)
            {
                opts.items.visibleConf.org = opts.items.visible;
                opts.items.visible = gn_getVisibleItemsNextFilter(a_itm, opts, 0);
            }

            opts.items.visible = cf_getItemsAdjust(opts.items.visible, opts, opts.items.visibleConf.adjust, $tt0);
            opts.items.visibleConf.old = opts.items.visible;

            if (opts.responsive)
            {
                if (!opts.items.visibleConf.min)
                {
                    opts.items.visibleConf.min = opts.items.visible;
                }
                if (!opts.items.visibleConf.max)
                {
                    opts.items.visibleConf.max = opts.items.visible;
                }
                opts = in_getResponsiveValues(opts, a_itm, avail_primary);
            }
            else
            {
                opts.padding = cf_getPadding(opts.padding);

                if (opts.align == 'top')
                {
                    opts.align = 'left';
                }
                else if (opts.align == 'bottom')
                {
                    opts.align = 'right';
                }

                switch (opts.align)
                {
                    //	align: center, left or right
                    case 'center':
                    case 'left':
                    case 'right':
                        if (opts[opts.d['width']] != 'variable')
                        {
                            opts = in_getAlignPadding(opts, a_itm);
                            opts.usePadding = true;
                        }
                        break;

                    //	padding
                    default:
                        opts.align = false;
                        opts.usePadding = (
                            opts.padding[0] == 0 &&
                                opts.padding[1] == 0 &&
                                opts.padding[2] == 0 &&
                                opts.padding[3] == 0
                            ) ? false : true;
                        break;
                }
            }

            if (!is_number(opts.scroll.duration))
            {
                opts.scroll.duration = 500;
            }
            if (is_undefined(opts.scroll.items))
            {
                opts.scroll.items = (opts.responsive || opts.items.visibleConf.variable || opts.items.filter != '*')
                    ? 'visible'
                    : opts.items.visible;
            }

            opts.auto = $.extend(true, {}, opts.scroll, opts.auto);
            opts.prev = $.extend(true, {}, opts.scroll, opts.prev);
            opts.next = $.extend(true, {}, opts.scroll, opts.next);
            opts.pagination = $.extend(true, {}, opts.scroll, opts.pagination);
            //	swipe and mousewheel extend later on, per direction

            opts.auto = go_complementAutoObject($tt0, opts.auto);
            opts.prev = go_complementPrevNextObject($tt0, opts.prev);
            opts.next = go_complementPrevNextObject($tt0, opts.next);
            opts.pagination = go_complementPaginationObject($tt0, opts.pagination);
            opts.swipe = go_complementSwipeObject($tt0, opts.swipe);
            opts.mousewheel = go_complementMousewheelObject($tt0, opts.mousewheel);

            if (opts.synchronise)
            {
                opts.synchronise = cf_getSynchArr(opts.synchronise);
            }


            //	DEPRECATED
            if (opts.auto.onPauseStart)
            {
                opts.auto.onTimeoutStart = opts.auto.onPauseStart;
                deprecated('auto.onPauseStart', 'auto.onTimeoutStart');
            }
            if (opts.auto.onPausePause)
            {
                opts.auto.onTimeoutPause = opts.auto.onPausePause;
                deprecated('auto.onPausePause', 'auto.onTimeoutPause');
            }
            if (opts.auto.onPauseEnd)
            {
                opts.auto.onTimeoutEnd = opts.auto.onPauseEnd;
                deprecated('auto.onPauseEnd', 'auto.onTimeoutEnd');
            }
            if (opts.auto.pauseDuration)
            {
                opts.auto.timeoutDuration = opts.auto.pauseDuration;
                deprecated('auto.pauseDuration', 'auto.timeoutDuration');
            }
            //	/DEPRECATED


        };	//	/init


        $cfs._cfs_build = function() {
            $cfs.data('_cfs_isCarousel', true);

            var a_itm = $cfs.children(),
                orgCSS = in_mapCss($cfs, ['textAlign', 'float', 'position', 'top', 'right', 'bottom', 'left', 'zIndex', 'width', 'height', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft']),
                newPosition = 'relative';

            switch (orgCSS.position)
            {
                case 'absolute':
                case 'fixed':
                    newPosition = orgCSS.position;
                    break;
            }

            $wrp.css(orgCSS).css({
                'overflow'		: 'hidden',
                'position'		: newPosition
            });

            $cfs.data('_cfs_origCss', orgCSS).css({
                'textAlign'		: 'left',
                'float'			: 'none',
                'position'		: 'absolute',
                'top'			: 0,
                'right'			: 'auto',
                'bottom'		: 'auto',
                'left'			: 0,
                'marginTop'		: 0,
                'marginRight'	: 0,
                'marginBottom'	: 0,
                'marginLeft'	: 0
            });

            sz_storeMargin(a_itm, opts);
            sz_storeSizes(a_itm, opts);
            if (opts.responsive)
            {
                sz_setResponsiveSizes(opts, a_itm);
            }

        };	//	/build


        $cfs._cfs_bind_events = function() {
            $cfs._cfs_unbind_events();


            //	stop event
            $cfs.bind(cf_e('stop', conf), function(e, imm) {
                e.stopPropagation();

                //	button
                if (!crsl.isStopped)
                {
                    if (opts.auto.button)
                    {
                        opts.auto.button.addClass(cf_c('stopped', conf));
                    }
                }

                //	set stopped
                crsl.isStopped = true;

                if (opts.auto.play)
                {
                    opts.auto.play = false;
                    $cfs.trigger(cf_e('pause', conf), imm);
                }
                return true;
            });


            //	finish event
            $cfs.bind(cf_e('finish', conf), function(e) {
                e.stopPropagation();
                if (crsl.isScrolling)
                {
                    sc_stopScroll(scrl);
                }
                return true;
            });


            //	pause event
            $cfs.bind(cf_e('pause', conf), function(e, imm, res) {
                e.stopPropagation();
                tmrs = sc_clearTimers(tmrs);

                //	immediately pause
                if (imm && crsl.isScrolling)
                {
                    scrl.isStopped = true;
                    var nst = getTime() - scrl.startTime;
                    scrl.duration -= nst;
                    if (scrl.pre)
                    {
                        scrl.pre.duration -= nst;
                    }
                    if (scrl.post)
                    {
                        scrl.post.duration -= nst;
                    }
                    sc_stopScroll(scrl, false);
                }

                //	update remaining pause-time
                if (!crsl.isPaused && !crsl.isScrolling)
                {
                    if (res)
                    {
                        tmrs.timePassed += getTime() - tmrs.startTime;
                    }
                }

                //	button
                if (!crsl.isPaused)
                {
                    if (opts.auto.button)
                    {
                        opts.auto.button.addClass(cf_c('paused', conf));
                    }
                }

                //	set paused
                crsl.isPaused = true;

                //	pause pause callback
                if (opts.auto.onTimeoutPause)
                {
                    var dur1 = opts.auto.timeoutDuration - tmrs.timePassed,
                        perc = 100 - Math.ceil( dur1 * 100 / opts.auto.timeoutDuration );

                    opts.auto.onTimeoutPause.call($tt0, perc, dur1);
                }
                return true;
            });


            //	play event
            $cfs.bind(cf_e('play', conf), function(e, dir, del, res) {
                e.stopPropagation();
                tmrs = sc_clearTimers(tmrs);

                //	sort params
                var v = [dir, del, res],
                    t = ['string', 'number', 'boolean'],
                    a = cf_sortParams(v, t);

                dir = a[0];
                del = a[1];
                res = a[2];

                if (dir != 'prev' && dir != 'next')
                {
                    dir = crsl.direction;
                }
                if (!is_number(del))
                {
                    del = 0;
                }
                if (!is_boolean(res))
                {
                    res = false;
                }

                //	stopped?
                if (res)
                {
                    crsl.isStopped = false;
                    opts.auto.play = true;
                }
                if (!opts.auto.play)
                {
                    e.stopImmediatePropagation();
                    return debug(conf, 'Carousel stopped: Not scrolling.');
                }

                //	button
                if (crsl.isPaused)
                {
                    if (opts.auto.button)
                    {
                        opts.auto.button.removeClass(cf_c('stopped', conf));
                        opts.auto.button.removeClass(cf_c('paused', conf));
                    }
                }

                //	set playing
                crsl.isPaused = false;
                tmrs.startTime = getTime();

                //	timeout the scrolling
                var dur1 = opts.auto.timeoutDuration + del;
                dur2 = dur1 - tmrs.timePassed;
                perc = 100 - Math.ceil(dur2 * 100 / dur1);

                if (opts.auto.progress)
                {
                    tmrs.progress = setInterval(function() {
                        var pasd = getTime() - tmrs.startTime + tmrs.timePassed,
                            perc = Math.ceil(pasd * 100 / dur1);
                        opts.auto.progress.updater.call(opts.auto.progress.bar[0], perc);
                    }, opts.auto.progress.interval);
                }

                tmrs.auto = setTimeout(function() {
                    if (opts.auto.progress)
                    {
                        opts.auto.progress.updater.call(opts.auto.progress.bar[0], 100);
                    }
                    if (opts.auto.onTimeoutEnd)
                    {
                        opts.auto.onTimeoutEnd.call($tt0, perc, dur2);
                    }
                    if (crsl.isScrolling)
                    {
                        $cfs.trigger(cf_e('play', conf), dir);
                    }
                    else
                    {
                        $cfs.trigger(cf_e(dir, conf), opts.auto);
                    }
                }, dur2);

                //	pause start callback
                if (opts.auto.onTimeoutStart)
                {
                    opts.auto.onTimeoutStart.call($tt0, perc, dur2);
                }

                return true;
            });


            //	resume event
            $cfs.bind(cf_e('resume', conf), function(e) {
                e.stopPropagation();
                if (scrl.isStopped)
                {
                    scrl.isStopped = false;
                    crsl.isPaused = false;
                    crsl.isScrolling = true;
                    scrl.startTime = getTime();
                    sc_startScroll(scrl);
                }
                else
                {
                    $cfs.trigger(cf_e('play', conf));
                }
                return true;
            });


            //	prev + next events
            $cfs.bind(cf_e('prev', conf)+' '+cf_e('next', conf), function(e, obj, num, clb, que) {
                e.stopPropagation();

                //	stopped or hidden carousel, don't scroll, don't queue
                if (crsl.isStopped || $cfs.is(':hidden'))
                {
                    e.stopImmediatePropagation();
                    return debug(conf, 'Carousel stopped or hidden: Not scrolling.');
                }

                //	not enough items
                var minimum = (is_number(opts.items.minimum)) ? opts.items.minimum : opts.items.visible + 1;
                if (minimum > itms.total)
                {
                    e.stopImmediatePropagation();
                    return debug(conf, 'Not enough items ('+itms.total+' total, '+minimum+' needed): Not scrolling.');
                }

                //	get config
                var v = [obj, num, clb, que],
                    t = ['object', 'number/string', 'function', 'boolean'],
                    a = cf_sortParams(v, t);

                obj = a[0];
                num = a[1];
                clb = a[2];
                que = a[3];

                var eType = e.type.slice(conf.events.prefix.length);

                if (!is_object(obj))
                {
                    obj = {};
                }
                if (is_function(clb))
                {
                    obj.onAfter = clb;
                }
                if (is_boolean(que))
                {
                    obj.queue = que;
                }
                obj = $.extend(true, {}, opts[eType], obj);

                //	test conditions callback
                if (obj.conditions && !obj.conditions.call($tt0, eType))
                {
                    e.stopImmediatePropagation();
                    return debug(conf, 'Callback "conditions" returned false.');
                }

                if (!is_number(num))
                {
                    if (opts.items.filter != '*')
                    {
                        num = 'visible';
                    }
                    else
                    {
                        var arr = [num, obj.items, opts[eType].items];
                        for (var a = 0, l = arr.length; a < l; a++)
                        {
                            if (is_number(arr[a]) || arr[a] == 'page' || arr[a] == 'visible') {
                                num = arr[a];
                                break;
                            }
                        }
                    }
                    switch(num) {
                        case 'page':
                            e.stopImmediatePropagation();
                            return $cfs.triggerHandler(cf_e(eType+'Page', conf), [obj, clb]);
                            break;

                        case 'visible':
                            if (!opts.items.visibleConf.variable && opts.items.filter == '*')
                            {
                                num = opts.items.visible;
                            }
                            break;
                    }
                }

                //	resume animation, add current to queue
                if (scrl.isStopped)
                {
                    $cfs.trigger(cf_e('resume', conf));
                    $cfs.trigger(cf_e('queue', conf), [eType, [obj, num, clb]]);
                    e.stopImmediatePropagation();
                    return debug(conf, 'Carousel resumed scrolling.');
                }

                //	queue if scrolling
                if (obj.duration > 0)
                {
                    if (crsl.isScrolling)
                    {
                        if (obj.queue)
                        {
                            if (obj.queue == 'last')
                            {
                                queu = [];
                            }
                            if (obj.queue != 'first' || queu.length == 0)
                            {
                                $cfs.trigger(cf_e('queue', conf), [eType, [obj, num, clb]]);
                            }
                        }
                        e.stopImmediatePropagation();
                        return debug(conf, 'Carousel currently scrolling.');
                    }
                }

                tmrs.timePassed = 0;
                $cfs.trigger(cf_e('slide_'+eType, conf), [obj, num]);

                //	synchronise
                if (opts.synchronise)
                {
                    var s = opts.synchronise,
                        c = [obj, num];

                    for (var j = 0, l = s.length; j < l; j++) {
                        var d = eType;
                        if (!s[j][2])
                        {
                            d = (d == 'prev') ? 'next' : 'prev';
                        }
                        if (!s[j][1])
                        {
                            c[0] = s[j][0].triggerHandler('_cfs_triggerEvent', ['configuration', d]);
                        }
                        c[1] = num + s[j][3];
                        s[j][0].trigger('_cfs_triggerEvent', ['slide_'+d, c]);
                    }
                }
                return true;
            });


            //	prev event
            $cfs.bind(cf_e('slide_prev', conf), function(e, sO, nI) {
                e.stopPropagation();
                var a_itm = $cfs.children();

                //	non-circular at start, scroll to end
                if (!opts.circular)
                {
                    if (itms.first == 0)
                    {
                        if (opts.infinite)
                        {
                            $cfs.trigger(cf_e('next', conf), itms.total-1);
                        }
                        return e.stopImmediatePropagation();
                    }
                }

                sz_resetMargin(a_itm, opts);

                //	find number of items to scroll
                if (!is_number(nI))
                {
                    if (opts.items.visibleConf.variable)
                    {
                        nI = gn_getVisibleItemsPrev(a_itm, opts, itms.total-1);
                    }
                    else if (opts.items.filter != '*')
                    {
                        var xI = (is_number(sO.items)) ? sO.items : gn_getVisibleOrg($cfs, opts);
                        nI = gn_getScrollItemsPrevFilter(a_itm, opts, itms.total-1, xI);
                    }
                    else
                    {
                        nI = opts.items.visible;
                    }
                    nI = cf_getAdjust(nI, opts, sO.items, $tt0);
                }

                //	prevent non-circular from scrolling to far
                if (!opts.circular)
                {
                    if (itms.total - nI < itms.first)
                    {
                        nI = itms.total - itms.first;
                    }
                }

                //	set new number of visible items
                opts.items.visibleConf.old = opts.items.visible;
                if (opts.items.visibleConf.variable)
                {
                    var vI = cf_getItemsAdjust(gn_getVisibleItemsNext(a_itm, opts, itms.total-nI), opts, opts.items.visibleConf.adjust, $tt0);
                    if (opts.items.visible+nI <= vI && nI < itms.total)
                    {
                        nI++;
                        vI = cf_getItemsAdjust(gn_getVisibleItemsNext(a_itm, opts, itms.total-nI), opts, opts.items.visibleConf.adjust, $tt0);
                    }
                    opts.items.visible = vI;
                }
                else if (opts.items.filter != '*')
                {
                    var vI = gn_getVisibleItemsNextFilter(a_itm, opts, itms.total-nI);
                    opts.items.visible = cf_getItemsAdjust(vI, opts, opts.items.visibleConf.adjust, $tt0);
                }

                sz_resetMargin(a_itm, opts, true);

                //	scroll 0, don't scroll
                if (nI == 0)
                {
                    e.stopImmediatePropagation();
                    return debug(conf, '0 items to scroll: Not scrolling.');
                }
                debug(conf, 'Scrolling '+nI+' items backward.');


                //	save new config
                itms.first += nI;
                while (itms.first >= itms.total)
                {
                    itms.first -= itms.total;
                }

                //	non-circular callback
                if (!opts.circular)
                {
                    if (itms.first == 0 && sO.onEnd)
                    {
                        sO.onEnd.call($tt0, 'prev');
                    }
                    if (!opts.infinite)
                    {
                        nv_enableNavi(opts, itms.first, conf);
                    }
                }

                //	rearrange items
                $cfs.children().slice(itms.total-nI, itms.total).prependTo($cfs);
                if (itms.total < opts.items.visible + nI)
                {
                    $cfs.children().slice(0, (opts.items.visible+nI)-itms.total).clone(true).appendTo($cfs);
                }

                //	the needed items
                var a_itm = $cfs.children(),
                    i_old = gi_getOldItemsPrev(a_itm, opts, nI),
                    i_new = gi_getNewItemsPrev(a_itm, opts),
                    i_cur_l = a_itm.eq(nI-1),
                    i_old_l = i_old.last(),
                    i_new_l = i_new.last();

                sz_resetMargin(a_itm, opts);

                var pL = 0,
                    pR = 0;

                if (opts.align)
                {
                    var p = cf_getAlignPadding(i_new, opts);
                    pL = p[0];
                    pR = p[1];
                }
                var oL = (pL < 0) ? opts.padding[opts.d[3]] : 0;

                //	hide items for fx directscroll
                var hiddenitems = false,
                    i_skp = $();
                if (opts.items.visible < nI)
                {
                    i_skp = a_itm.slice(opts.items.visibleConf.old, nI);
                    if (sO.fx == 'directscroll')
                    {
                        var orgW = opts.items[opts.d['width']];
                        hiddenitems = i_skp;
                        i_cur_l = i_new_l;
                        sc_hideHiddenItems(hiddenitems);
                        opts.items[opts.d['width']] = 'variable';
                    }
                }

                //	save new sizes
                var $cf2 = false,
                    i_siz = ms_getTotalSize(a_itm.slice(0, nI), opts, 'width'),
                    w_siz = cf_mapWrapperSizes(ms_getSizes(i_new, opts, true), opts, !opts.usePadding),
                    i_siz_vis = 0,
                    a_cfs = {},
                    a_wsz = {},
                    a_cur = {},
                    a_old = {},
                    a_new = {},
                    a_lef = {},
                    a_lef_vis = {},
                    a_dur = sc_getDuration(sO, opts, nI, i_siz);

                switch(sO.fx)
                {
                    case 'cover':
                    case 'cover-fade':
                        i_siz_vis = ms_getTotalSize(a_itm.slice(0, opts.items.visible), opts, 'width');
                        break;
                }

                if (hiddenitems)
                {
                    opts.items[opts.d['width']] = orgW;
                }

                sz_resetMargin(a_itm, opts, true);
                if (pR >= 0)
                {
                    sz_resetMargin(i_old_l, opts, opts.padding[opts.d[1]]);
                }
                if (pL >= 0)
                {
                    sz_resetMargin(i_cur_l, opts, opts.padding[opts.d[3]]);
                }

                if (opts.align)
                {
                    opts.padding[opts.d[1]] = pR;
                    opts.padding[opts.d[3]] = pL;
                }

                a_lef[opts.d['left']] = -(i_siz - oL);
                a_lef_vis[opts.d['left']] = -(i_siz_vis - oL);
                a_wsz[opts.d['left']] = w_siz[opts.d['width']];

                //	scrolling functions
                var _s_wrapper = function() {},
                    _a_wrapper = function() {},
                    _s_paddingold = function() {},
                    _a_paddingold = function() {},
                    _s_paddingnew = function() {},
                    _a_paddingnew = function() {},
                    _s_paddingcur = function() {},
                    _a_paddingcur = function() {},
                    _onafter = function() {},
                    _moveitems = function() {},
                    _position = function() {};

                //	clone carousel
                switch(sO.fx)
                {
                    case 'crossfade':
                    case 'cover':
                    case 'cover-fade':
                    case 'uncover':
                    case 'uncover-fade':
                        $cf2 = $cfs.clone(true).appendTo($wrp);
                        break;
                }
                switch(sO.fx)
                {
                    case 'crossfade':
                    case 'uncover':
                    case 'uncover-fade':
                        $cf2.children().slice(0, nI).remove();
                        $cf2.children().slice(opts.items.visibleConf.old).remove();
                        break;

                    case 'cover':
                    case 'cover-fade':
                        $cf2.children().slice(opts.items.visible).remove();
                        $cf2.css(a_lef_vis);
                        break;
                }

                $cfs.css(a_lef);

                //	reset all scrolls
                scrl = sc_setScroll(a_dur, sO.easing);

                //	animate / set carousel
                a_cfs[opts.d['left']] = (opts.usePadding) ? opts.padding[opts.d[3]] : 0;

                //	animate / set wrapper
                if (opts[opts.d['width']] == 'variable' || opts[opts.d['height']] == 'variable')
                {
                    _s_wrapper = function() {
                        $wrp.css(w_siz);
                    };
                    _a_wrapper = function() {
                        scrl.anims.push([$wrp, w_siz]);
                    };
                }

                //	animate / set items
                if (opts.usePadding)
                {
                    if (i_new_l.not(i_cur_l).length)
                    {
                        a_cur[opts.d['marginRight']] = i_cur_l.data('_cfs_origCssMargin');

                        if (pL < 0)
                        {
                            i_cur_l.css(a_cur);
                        }
                        else
                        {
                            _s_paddingcur = function() {
                                i_cur_l.css(a_cur);
                            };
                            _a_paddingcur = function() {
                                scrl.anims.push([i_cur_l, a_cur]);
                            };
                        }
                    }
                    switch(sO.fx)
                    {
                        case 'cover':
                        case 'cover-fade':
                            $cf2.children().eq(nI-1).css(a_cur);
                            break;
                    }

                    if (i_new_l.not(i_old_l).length)
                    {
                        a_old[opts.d['marginRight']] = i_old_l.data('_cfs_origCssMargin');
                        _s_paddingold = function() {
                            i_old_l.css(a_old);
                        };
                        _a_paddingold = function() {
                            scrl.anims.push([i_old_l, a_old]);
                        };
                    }

                    if (pR >= 0)
                    {
                        a_new[opts.d['marginRight']] = i_new_l.data('_cfs_origCssMargin') + opts.padding[opts.d[1]];
                        _s_paddingnew = function() {
                            i_new_l.css(a_new);
                        };
                        _a_paddingnew = function() {
                            scrl.anims.push([i_new_l, a_new]);
                        };
                    }
                }

                //	set position
                _position = function() {
                    $cfs.css(a_cfs);
                };


                var overFill = opts.items.visible+nI-itms.total;

                //	rearrange items
                _moveitems = function() {
                    if (overFill > 0)
                    {
                        $cfs.children().slice(itms.total).remove();
                        i_old = $( $cfs.children().slice(itms.total-(opts.items.visible-overFill)).get().concat( $cfs.children().slice(0, overFill).get() ) );
                    }
                    sc_showHiddenItems(hiddenitems);

                    if (opts.usePadding)
                    {
                        var l_itm = $cfs.children().eq(opts.items.visible+nI-1);
                        l_itm.css(opts.d['marginRight'], l_itm.data('_cfs_origCssMargin'));
                    }
                };


                var cb_arguments = sc_mapCallbackArguments(i_old, i_skp, i_new, nI, 'prev', a_dur, w_siz);

                //	fire onAfter callbacks
                _onafter = function() {
                    sc_afterScroll($cfs, $cf2, sO);
                    crsl.isScrolling = false;
                    clbk.onAfter = sc_fireCallbacks($tt0, sO, 'onAfter', cb_arguments, clbk);
                    queu = sc_fireQueue($cfs, queu, conf);

                    if (!crsl.isPaused)
                    {
                        $cfs.trigger(cf_e('play', conf));
                    }
                };

                //	fire onBefore callback
                crsl.isScrolling = true;
                tmrs = sc_clearTimers(tmrs);
                clbk.onBefore = sc_fireCallbacks($tt0, sO, 'onBefore', cb_arguments, clbk);

                switch(sO.fx)
                {
                    case 'none':
                        $cfs.css(a_cfs);
                        _s_wrapper();
                        _s_paddingold();
                        _s_paddingnew();
                        _s_paddingcur();
                        _position();
                        _moveitems();
                        _onafter();
                        break;

                    case 'fade':
                        scrl.anims.push([$cfs, { 'opacity': 0 }, function() {
                            _s_wrapper();
                            _s_paddingold();
                            _s_paddingnew();
                            _s_paddingcur();
                            _position();
                            _moveitems();
                            scrl = sc_setScroll(a_dur, sO.easing);
                            scrl.anims.push([$cfs, { 'opacity': 1 }, _onafter]);
                            sc_startScroll(scrl);
                        }]);
                        break;

                    case 'crossfade':
                        $cfs.css({ 'opacity': 0 });
                        scrl.anims.push([$cf2, { 'opacity': 0 }]);
                        scrl.anims.push([$cfs, { 'opacity': 1 }, _onafter]);
                        _a_wrapper();
                        _s_paddingold();
                        _s_paddingnew();
                        _s_paddingcur();
                        _position();
                        _moveitems();
                        break;

                    case 'cover':
                        scrl.anims.push([$cf2, a_cfs, function() {
                            _s_paddingold();
                            _s_paddingnew();
                            _s_paddingcur();
                            _position();
                            _moveitems();
                            _onafter();
                        }]);
                        _a_wrapper();
                        break;

                    case 'cover-fade':
                        scrl.anims.push([$cfs, { 'opacity': 0 }]);
                        scrl.anims.push([$cf2, a_cfs, function() {
                            $cfs.css({ 'opacity': 1 });
                            _s_paddingold();
                            _s_paddingnew();
                            _s_paddingcur();
                            _position();
                            _moveitems();
                            _onafter();
                        }]);
                        _a_wrapper();
                        break;

                    case 'uncover':
                        scrl.anims.push([$cf2, a_wsz, _onafter]);
                        _a_wrapper();
                        _s_paddingold();
                        _s_paddingnew();
                        _s_paddingcur();
                        _position();
                        _moveitems();
                        break;

                    case 'uncover-fade':
                        $cfs.css({ 'opacity': 0 });
                        scrl.anims.push([$cfs, { 'opacity': 1 }]);
                        scrl.anims.push([$cf2, a_wsz, _onafter]);
                        _a_wrapper();
                        _s_paddingold();
                        _s_paddingnew();
                        _s_paddingcur();
                        _position();
                        _moveitems();
                        break;

                    default:
                        scrl.anims.push([$cfs, a_cfs, function() {
                            _moveitems();
                            _onafter();
                        }]);
                        _a_wrapper();
                        _a_paddingold();
                        _a_paddingnew();
                        _a_paddingcur();
                        break;
                }

                sc_startScroll(scrl);
                cf_setCookie(opts.cookie, $cfs, conf);

                $cfs.trigger(cf_e('updatePageStatus', conf), [false, w_siz]);

                return true;
            });


            //	next event
            $cfs.bind(cf_e('slide_next', conf), function(e, sO, nI) {
                e.stopPropagation();
                var a_itm = $cfs.children();

                //	non-circular at end, scroll to start
                if (!opts.circular)
                {
                    if (itms.first == opts.items.visible)
                    {
                        if (opts.infinite)
                        {
                            $cfs.trigger(cf_e('prev', conf), itms.total-1);
                        }
                        return e.stopImmediatePropagation();
                    }
                }

                sz_resetMargin(a_itm, opts);

                //	find number of items to scroll
                if (!is_number(nI))
                {
                    if (opts.items.filter != '*')
                    {
                        var xI = (is_number(sO.items)) ? sO.items : gn_getVisibleOrg($cfs, opts);
                        nI = gn_getScrollItemsNextFilter(a_itm, opts, 0, xI);
                    }
                    else
                    {
                        nI = opts.items.visible;
                    }
                    nI = cf_getAdjust(nI, opts, sO.items, $tt0);
                }

                var lastItemNr = (itms.first == 0) ? itms.total : itms.first;

                //	prevent non-circular from scrolling to far
                if (!opts.circular)
                {
                    if (opts.items.visibleConf.variable)
                    {
                        var vI = gn_getVisibleItemsNext(a_itm, opts, nI),
                            xI = gn_getVisibleItemsPrev(a_itm, opts, lastItemNr-1);
                    }
                    else
                    {
                        var vI = opts.items.visible,
                            xI = opts.items.visible;
                    }

                    if (nI + vI > lastItemNr)
                    {
                        nI = lastItemNr - xI;
                    }
                }

                //	set new number of visible items
                opts.items.visibleConf.old = opts.items.visible;
                if (opts.items.visibleConf.variable)
                {
                    var vI = cf_getItemsAdjust(gn_getVisibleItemsNextTestCircular(a_itm, opts, nI, lastItemNr), opts, opts.items.visibleConf.adjust, $tt0);
                    while (opts.items.visible-nI >= vI && nI < itms.total)
                    {
                        nI++;
                        vI = cf_getItemsAdjust(gn_getVisibleItemsNextTestCircular(a_itm, opts, nI, lastItemNr), opts, opts.items.visibleConf.adjust, $tt0);
                    }
                    opts.items.visible = vI;
                }
                else if (opts.items.filter != '*')
                {
                    var vI = gn_getVisibleItemsNextFilter(a_itm, opts, nI);
                    opts.items.visible = cf_getItemsAdjust(vI, opts, opts.items.visibleConf.adjust, $tt0);
                }

                sz_resetMargin(a_itm, opts, true);

                //	scroll 0, don't scroll
                if (nI == 0)
                {
                    e.stopImmediatePropagation();
                    return debug(conf, '0 items to scroll: Not scrolling.');
                }
                debug(conf, 'Scrolling '+nI+' items forward.');


                //	save new config
                itms.first -= nI;
                while (itms.first < 0)
                {
                    itms.first += itms.total;
                }

                //	non-circular callback
                if (!opts.circular)
                {
                    if (itms.first == opts.items.visible && sO.onEnd)
                    {
                        sO.onEnd.call($tt0, 'next');
                    }
                    if (!opts.infinite)
                    {
                        nv_enableNavi(opts, itms.first, conf);
                    }
                }

                //	rearrange items
                if (itms.total < opts.items.visible+nI)
                {
                    $cfs.children().slice(0, (opts.items.visible+nI)-itms.total).clone(true).appendTo($cfs);
                }

                //	the needed items
                var a_itm = $cfs.children(),
                    i_old = gi_getOldItemsNext(a_itm, opts),
                    i_new = gi_getNewItemsNext(a_itm, opts, nI),
                    i_cur_l = a_itm.eq(nI-1),
                    i_old_l = i_old.last(),
                    i_new_l = i_new.last();

                sz_resetMargin(a_itm, opts);

                var pL = 0,
                    pR = 0;

                if (opts.align)
                {
                    var p = cf_getAlignPadding(i_new, opts);
                    pL = p[0];
                    pR = p[1];
                }

                //	hide items for fx directscroll
                var hiddenitems = false,
                    i_skp = $();
                if (opts.items.visibleConf.old < nI)
                {
                    i_skp = a_itm.slice(opts.items.visibleConf.old, nI);
                    if (sO.fx == 'directscroll')
                    {
                        var orgW = opts.items[opts.d['width']];
                        hiddenitems = i_skp;
                        i_cur_l = i_old_l;
                        sc_hideHiddenItems(hiddenitems);
                        opts.items[opts.d['width']] = 'variable';
                    }
                }

                //	save new sizes
                var $cf2 = false,
                    i_siz = ms_getTotalSize(a_itm.slice(0, nI), opts, 'width'),
                    w_siz = cf_mapWrapperSizes(ms_getSizes(i_new, opts, true), opts, !opts.usePadding),
                    i_siz_vis = 0,
                    a_cfs = {},
                    a_cfs_vis = {},
                    a_cur = {},
                    a_old = {},
                    a_lef = {},
                    a_dur = sc_getDuration(sO, opts, nI, i_siz);

                switch(sO.fx)
                {
                    case 'uncover':
                    case 'uncover-fade':
                        i_siz_vis = ms_getTotalSize(a_itm.slice(0, opts.items.visibleConf.old), opts, 'width');
                        break;
                }

                if (hiddenitems)
                {
                    opts.items[opts.d['width']] = orgW;
                }

                if (opts.align)
                {
                    if (opts.padding[opts.d[1]] < 0)
                    {
                        opts.padding[opts.d[1]] = 0;
                    }
                }
                sz_resetMargin(a_itm, opts, true);
                sz_resetMargin(i_old_l, opts, opts.padding[opts.d[1]]);

                if (opts.align)
                {
                    opts.padding[opts.d[1]] = pR;
                    opts.padding[opts.d[3]] = pL;
                }

                a_lef[opts.d['left']] = (opts.usePadding) ? opts.padding[opts.d[3]] : 0;

                //	scrolling functions
                var _s_wrapper = function() {},
                    _a_wrapper = function() {},
                    _s_paddingold = function() {},
                    _a_paddingold = function() {},
                    _s_paddingcur = function() {},
                    _a_paddingcur = function() {},
                    _onafter = function() {},
                    _moveitems = function() {},
                    _position = function() {};

                //	clone carousel
                switch(sO.fx)
                {
                    case 'crossfade':
                    case 'cover':
                    case 'cover-fade':
                    case 'uncover':
                    case 'uncover-fade':
                        $cf2 = $cfs.clone(true).appendTo($wrp);
                        $cf2.children().slice(opts.items.visibleConf.old).remove();
                        break;
                }
                switch(sO.fx)
                {
                    case 'crossfade':
                    case 'cover':
                    case 'cover-fade':
                        $cfs.css('zIndex', 1);
                        $cf2.css('zIndex', 0);
                        break;
                }

                //	reset all scrolls
                scrl = sc_setScroll(a_dur, sO.easing);

                //	animate / set carousel
                a_cfs[opts.d['left']] = -i_siz;
                a_cfs_vis[opts.d['left']] = -i_siz_vis;

                if (pL < 0)
                {
                    a_cfs[opts.d['left']] += pL;
                }

                //	animate / set wrapper
                if (opts[opts.d['width']] == 'variable' || opts[opts.d['height']] == 'variable')
                {
                    _s_wrapper = function() {
                        $wrp.css(w_siz);
                    };
                    _a_wrapper = function() {
                        scrl.anims.push([$wrp, w_siz]);
                    };
                }

                //	animate / set items
                if (opts.usePadding)
                {
                    var i_new_l_m = i_new_l.data('_cfs_origCssMargin');
                    if (pR >= 0)
                    {
                        i_new_l_m += opts.padding[opts.d[1]];
                    }
                    i_new_l.css(opts.d['marginRight'], i_new_l_m);

                    if (i_cur_l.not(i_old_l).length)
                    {
                        a_old[opts.d['marginRight']] = i_old_l.data('_cfs_origCssMargin');
                    }
                    _s_paddingold = function() {
                        i_old_l.css(a_old);
                    };
                    _a_paddingold = function() {
                        scrl.anims.push([i_old_l, a_old]);
                    };

                    var i_cur_l_m = i_cur_l.data('_cfs_origCssMargin');
                    if (pL > 0)
                    {
                        i_cur_l_m += opts.padding[opts.d[3]];
                    }
                    a_cur[opts.d['marginRight']] = i_cur_l_m;
                    _s_paddingcur = function() {
                        i_cur_l.css(a_cur);
                    };
                    _a_paddingcur = function() {
                        scrl.anims.push([i_cur_l, a_cur]);
                    };
                }

                //	set position
                _position = function() {
                    $cfs.css(a_lef);
                };


                var overFill = opts.items.visible+nI-itms.total;

                //	rearrange items
                _moveitems = function() {
                    if (overFill > 0)
                    {
                        $cfs.children().slice(itms.total).remove();
                    }
                    var l_itm = $cfs.children().slice(0, nI).appendTo($cfs).last();
                    if (overFill > 0)
                    {
                        i_new = gi_getCurrentItems(a_itm, opts);
                    }
                    sc_showHiddenItems(hiddenitems);

                    if (opts.usePadding)
                    {
                        if (itms.total < opts.items.visible+nI) {
                            var i_cur_l = $cfs.children().eq(opts.items.visible-1);
                            i_cur_l.css(opts.d['marginRight'], i_cur_l.data('_cfs_origCssMargin') + opts.padding[opts.d[3]]);
                        }
                        l_itm.css(opts.d['marginRight'], l_itm.data('_cfs_origCssMargin'));
                    }
                };


                var cb_arguments = sc_mapCallbackArguments(i_old, i_skp, i_new, nI, 'next', a_dur, w_siz);

                //	fire onAfter callbacks
                _onafter = function() {
                    $cfs.css('zIndex', $cfs.data('_cfs_origCss').zIndex);
                    sc_afterScroll($cfs, $cf2, sO);
                    crsl.isScrolling = false;
                    clbk.onAfter = sc_fireCallbacks($tt0, sO, 'onAfter', cb_arguments, clbk);
                    queu = sc_fireQueue($cfs, queu, conf);

                    if (!crsl.isPaused)
                    {
                        $cfs.trigger(cf_e('play', conf));
                    }
                };

                //	fire onBefore callbacks
                crsl.isScrolling = true;
                tmrs = sc_clearTimers(tmrs);
                clbk.onBefore = sc_fireCallbacks($tt0, sO, 'onBefore', cb_arguments, clbk);

                switch(sO.fx)
                {
                    case 'none':
                        $cfs.css(a_cfs);
                        _s_wrapper();
                        _s_paddingold();
                        _s_paddingcur();
                        _position();
                        _moveitems();
                        _onafter();
                        break;

                    case 'fade':
                        scrl.anims.push([$cfs, { 'opacity': 0 }, function() {
                            _s_wrapper();
                            _s_paddingold();
                            _s_paddingcur();
                            _position();
                            _moveitems();
                            scrl = sc_setScroll(a_dur, sO.easing);
                            scrl.anims.push([$cfs, { 'opacity': 1 }, _onafter]);
                            sc_startScroll(scrl);
                        }]);
                        break;

                    case 'crossfade':
                        $cfs.css({ 'opacity': 0 });
                        scrl.anims.push([$cf2, { 'opacity': 0 }]);
                        scrl.anims.push([$cfs, { 'opacity': 1 }, _onafter]);
                        _a_wrapper();
                        _s_paddingold();
                        _s_paddingcur();
                        _position();
                        _moveitems();
                        break;

                    case 'cover':
                        $cfs.css(opts.d['left'], $wrp[opts.d['width']]());
                        scrl.anims.push([$cfs, a_lef, _onafter]);
                        _a_wrapper();
                        _s_paddingold();
                        _s_paddingcur();
                        _moveitems();
                        break;

                    case 'cover-fade':
                        $cfs.css(opts.d['left'], $wrp[opts.d['width']]());
                        scrl.anims.push([$cf2, { 'opacity': 0 }]);
                        scrl.anims.push([$cfs, a_lef, _onafter]);
                        _a_wrapper();
                        _s_paddingold();
                        _s_paddingcur();
                        _moveitems();
                        break;

                    case 'uncover':
                        scrl.anims.push([$cf2, a_cfs_vis, _onafter]);
                        _a_wrapper();
                        _s_paddingold();
                        _s_paddingcur();
                        _position();
                        _moveitems();
                        break;

                    case 'uncover-fade':
                        $cfs.css({ 'opacity': 0 });
                        scrl.anims.push([$cfs, { 'opacity': 1 }]);
                        scrl.anims.push([$cf2, a_cfs_vis, _onafter]);
                        _a_wrapper();
                        _s_paddingold();
                        _s_paddingcur();
                        _position();
                        _moveitems();
                        break;

                    default:
                        scrl.anims.push([$cfs, a_cfs, function() {
                            _position();
                            _moveitems();
                            _onafter();
                        }]);
                        _a_wrapper();
                        _a_paddingold();
                        _a_paddingcur();
                        break;
                }

                sc_startScroll(scrl);
                cf_setCookie(opts.cookie, $cfs, conf);

                $cfs.trigger(cf_e('updatePageStatus', conf), [false, w_siz]);

                return true;
            });


            //	slideTo event
            $cfs.bind(cf_e('slideTo', conf), function(e, num, dev, org, obj, dir, clb) {
                e.stopPropagation();

                var v = [num, dev, org, obj, dir, clb],
                    t = ['string/number/object', 'number', 'boolean', 'object', 'string', 'function'],
                    a = cf_sortParams(v, t);

                obj = a[3];
                dir = a[4];
                clb = a[5];

                num = gn_getItemIndex(a[0], a[1], a[2], itms, $cfs);

                if (num == 0)
                {
                    return false;
                }
                if (!is_object(obj))
                {
                    obj = false;
                }

                /*
                 if (crsl.isScrolling)
                 {
                 if (!is_object(obj) || obj.duration > 0)
                 {
                 //						return false;
                 }
                 }
                 */

                if (dir != 'prev' && dir != 'next')
                {
                    if (opts.circular)
                    {
                        dir = (num <= itms.total / 2) ? 'next' : 'prev';
                    }
                    else
                    {
                        dir = (itms.first == 0 || itms.first > num) ? 'next' : 'prev';
                    }
                }

                if (dir == 'prev')
                {
                    num = itms.total-num;
                }
                $cfs.trigger(cf_e(dir, conf), [obj, num, clb]);

                return true;
            });


            //	prevPage event
            $cfs.bind(cf_e('prevPage', conf), function(e, obj, clb) {
                e.stopPropagation();
                var cur = $cfs.triggerHandler(cf_e('currentPage', conf));
                return $cfs.triggerHandler(cf_e('slideToPage', conf), [cur-1, obj, 'prev', clb]);
            });


            //	nextPage event
            $cfs.bind(cf_e('nextPage', conf), function(e, obj, clb) {
                e.stopPropagation();
                var cur = $cfs.triggerHandler(cf_e('currentPage', conf));
                return $cfs.triggerHandler(cf_e('slideToPage', conf), [cur+1, obj, 'next', clb]);
            });


            //	slideToPage event
            $cfs.bind(cf_e('slideToPage', conf), function(e, pag, obj, dir, clb) {
                e.stopPropagation();
                if (!is_number(pag))
                {
                    pag = $cfs.triggerHandler(cf_e('currentPage', conf));
                }
                var ipp = opts.pagination.items || opts.items.visible,
                    max = Math.ceil(itms.total / ipp)-1;

                if (pag < 0)
                {
                    pag = max;
                }
                if (pag > max)
                {
                    pag = 0;
                }
                return $cfs.triggerHandler(cf_e('slideTo', conf), [pag*ipp, 0, true, obj, dir, clb]);
            });

            //	jumpToStart event
            $cfs.bind(cf_e('jumpToStart', conf), function(e, s) {
                e.stopPropagation();
                if (s)
                {
                    s = gn_getItemIndex(s, 0, true, itms, $cfs);
                }
                else
                {
                    s = 0;
                }

                s += itms.first;
                if (s != 0)
                {
                    if (itms.total > 0)
                    {
                        while (s > itms.total)
                        {
                            s -= itms.total;
                        }
                    }
                    $cfs.prepend($cfs.children().slice(s, itms.total));
                }
                return true;
            });


            //	synchronise event
            $cfs.bind(cf_e('synchronise', conf), function(e, s) {
                e.stopPropagation();
                if (s)
                {
                    s = cf_getSynchArr(s);
                }
                else if (opts.synchronise)
                {
                    s = opts.synchronise;
                }
                else
                {
                    return debug(conf, 'No carousel to synchronise.');
                }

                var n = $cfs.triggerHandler(cf_e('currentPosition', conf)),
                    x = true;

                for (var j = 0, l = s.length; j < l; j++)
                {
                    if (!s[j][0].triggerHandler(cf_e('slideTo', conf), [n, s[j][3], true]))
                    {
                        x = false;
                    }
                }
                return x;
            });


            //	queue event
            $cfs.bind(cf_e('queue', conf), function(e, dir, opt) {
                e.stopPropagation();
                if (is_function(dir))
                {
                    dir.call($tt0, queu);
                }
                else if (is_array(dir))
                {
                    queu = dir;
                }
                else if (!is_undefined(dir))
                {
                    queu.push([dir, opt]);
                }
                return queu;
            });


            //	insertItem event
            $cfs.bind(cf_e('insertItem', conf), function(e, itm, num, org, dev) {
                e.stopPropagation();

                var v = [itm, num, org, dev],
                    t = ['string/object', 'string/number/object', 'boolean', 'number'],
                    a = cf_sortParams(v, t);

                itm = a[0];
                num = a[1];
                org = a[2];
                dev = a[3];

                if (is_object(itm) && !is_jquery(itm))
                {
                    itm = $(itm);
                }
                else if (is_string(itm))
                {
                    itm = $(itm);
                }
                if (!is_jquery(itm) || itm.length == 0)
                {
                    return debug(conf, 'Not a valid object.');
                }

                if (is_undefined(num))
                {
                    num = 'end';
                }

                sz_storeMargin(itm, opts);
                sz_storeSizes(itm, opts);

                var orgNum = num,
                    before = 'before';

                if (num == 'end')
                {
                    if (org)
                    {
                        if (itms.first == 0)
                        {
                            num = itms.total-1;
                            before = 'after';
                        }
                        else
                        {
                            num = itms.first;
                            itms.first += itm.length;
                        }
                        if (num < 0)
                        {
                            num = 0;
                        }
                    }
                    else
                    {
                        num = itms.total-1;
                        before = 'after';
                    }
                }
                else
                {
                    num = gn_getItemIndex(num, dev, org, itms, $cfs);
                }

                var $cit = $cfs.children().eq(num);
                if ($cit.length)
                {
                    $cit[before](itm);
                }
                else
                {
                    debug(conf, 'Correct insert-position not found! Appending item to the end.');
                    $cfs.append(itm);
                }

                if (orgNum != 'end' && !org)
                {
                    if (num < itms.first)
                    {
                        itms.first += itm.length;
                    }
                }
                itms.total = $cfs.children().length;
                if (itms.first >= itms.total)
                {
                    itms.first -= itms.total;
                }

                $cfs.trigger(cf_e('updateSizes', conf));
                $cfs.trigger(cf_e('linkAnchors', conf));

                return true;
            });


            //	removeItem event
            $cfs.bind(cf_e('removeItem', conf), function(e, num, org, dev) {
                e.stopPropagation();

                var v = [num, org, dev],
                    t = ['string/number/object', 'boolean', 'number'],
                    a = cf_sortParams(v, t);

                num = a[0];
                org = a[1];
                dev = a[2];

                var removed = false;
                if (num instanceof $ && num.length > 1)
                {
                    $removed = $();
                    num.each(function(i, el) {
                        var $rem = $cfs.trigger(cf_e('removeItem', conf), [$(this), org, dev]);
                        if ($rem) $removed = $removed.add($rem);
                    });
                    return $removed;
                }

                if (is_undefined(num) || num == 'end')
                {
                    $removed = $cfs.children().last();
                }
                else
                {
                    num = gn_getItemIndex(num, dev, org, itms, $cfs);
                    var $removed = $cfs.children().eq(num);
                    if ($removed.length){
                        if (num < itms.first) itms.first -= $removed.length;
                    }
                }
                if ($removed && $removed.length)
                {
                    $removed.detach();
                    itms.total = $cfs.children().length;
                    $cfs.trigger(cf_e('updateSizes', conf));
                }

                return $removed;
            });


            //	onBefore and onAfter event
            $cfs.bind(cf_e('onBefore', conf)+' '+cf_e('onAfter', conf), function(e, fn) {
                e.stopPropagation();
                var eType = e.type.slice(conf.events.prefix.length);
                if (is_array(fn))
                {
                    clbk[eType] = fn;
                }
                if (is_function(fn))
                {
                    clbk[eType].push(fn);
                }
                return clbk[eType];
            });


            //	currentPosition event
            $cfs.bind(cf_e('currentPosition', conf), function(e, fn) {
                e.stopPropagation();
                if (itms.first == 0)
                {
                    var val = 0;
                }
                else
                {
                    var val = itms.total - itms.first;
                }
                if (is_function(fn))
                {
                    fn.call($tt0, val);
                }
                return val;
            });


            //	currentPage event
            $cfs.bind(cf_e('currentPage', conf), function(e, fn) {
                e.stopPropagation();
                var ipp = opts.pagination.items || opts.items.visible,
                    max = Math.ceil(itms.total/ipp-1),
                    nr;
                if (itms.first == 0)
                {
                    nr = 0;
                }
                else if (itms.first < itms.total % ipp)
                {
                    nr = 0;
                }
                else if (itms.first == ipp && !opts.circular)
                {
                    nr = max;
                }
                else
                {
                    nr = Math.round((itms.total-itms.first)/ipp);
                }
                if (nr < 0)
                {
                    nr = 0;
                }
                if (nr > max)
                {
                    nr = max;
                }
                if (is_function(fn))
                {
                    fn.call($tt0, nr);
                }
                return nr;
            });


            //	currentVisible event
            $cfs.bind(cf_e('currentVisible', conf), function(e, fn) {
                e.stopPropagation();
                var $i = gi_getCurrentItems($cfs.children(), opts);
                if (is_function(fn))
                {
                    fn.call($tt0, $i);
                }
                return $i;
            });


            //	slice event
            $cfs.bind(cf_e('slice', conf), function(e, f, l, fn) {
                e.stopPropagation();

                if (itms.total == 0)
                {
                    return false;
                }

                var v = [f, l, fn],
                    t = ['number', 'number', 'function'],
                    a = cf_sortParams(v, t);

                f = (is_number(a[0])) ? a[0] : 0;
                l = (is_number(a[1])) ? a[1] : itms.total;
                fn = a[2];

                f += itms.first;
                l += itms.first;

                if (items.total > 0)
                {
                    while (f > itms.total)
                    {
                        f -= itms.total;
                    }
                    while (l > itms.total)
                    {
                        l -= itms.total;
                    }
                    while (f < 0)
                    {
                        f += itms.total;
                    }
                    while (l < 0)
                    {
                        l += itms.total;
                    }
                }
                var $iA = $cfs.children(),
                    $i;

                if (l > f)
                {
                    $i = $iA.slice(f, l);
                }
                else
                {
                    $i = $( $iA.slice(f, itms.total).get().concat( $iA.slice(0, l).get() ) );
                }

                if (is_function(fn))
                {
                    fn.call($tt0, $i);
                }
                return $i;
            });


            //	isPaused, isStopped and isScrolling events
            $cfs.bind(cf_e('isPaused', conf)+' '+cf_e('isStopped', conf)+' '+cf_e('isScrolling', conf), function(e, fn) {
                e.stopPropagation();
                var eType = e.type.slice(conf.events.prefix.length),
                    value = crsl[eType];
                if (is_function(fn))
                {
                    fn.call($tt0, value);
                }
                return value;
            });


            //	configuration event
            $cfs.bind(cf_e('configuration', conf), function(e, a, b, c) {
                e.stopPropagation();
                var reInit = false;

                //	return entire configuration-object
                if (is_function(a))
                {
                    a.call($tt0, opts);
                }
                //	set multiple options via object
                else if (is_object(a))
                {
                    opts_orig = $.extend(true, {}, opts_orig, a);
                    if (b !== false) reInit = true;
                    else opts = $.extend(true, {}, opts, a);

                }
                else if (!is_undefined(a))
                {

                    //	callback function for specific option
                    if (is_function(b))
                    {
                        var val = eval('opts.'+a);
                        if (is_undefined(val))
                        {
                            val = '';
                        }
                        b.call($tt0, val);
                    }
                    //	set individual option
                    else if (!is_undefined(b))
                    {
                        if (typeof c !== 'boolean') c = true;
                        eval('opts_orig.'+a+' = b');
                        if (c !== false) reInit = true;
                        else eval('opts.'+a+' = b');
                    }
                    //	return value for specific option
                    else
                    {
                        return eval('opts.'+a);
                    }
                }
                if (reInit)
                {
                    sz_resetMargin($cfs.children(), opts);
                    $cfs._cfs_init(opts_orig);
                    $cfs._cfs_bind_buttons();
                    var sz = sz_setSizes($cfs, opts);
                    $cfs.trigger(cf_e('updatePageStatus', conf), [true, sz]);
                }
                return opts;
            });


            //	linkAnchors event
            $cfs.bind(cf_e('linkAnchors', conf), function(e, $con, sel) {
                e.stopPropagation();

                if (is_undefined($con))
                {
                    $con = $('body');
                }
                else if (is_string($con))
                {
                    $con = $($con);
                }
                if (!is_jquery($con) || $con.length == 0)
                {
                    return debug(conf, 'Not a valid object.');
                }
                if (!is_string(sel))
                {
                    sel = 'a.caroufredsel';
                }

                $con.find(sel).each(function() {
                    var h = this.hash || '';
                    if (h.length > 0 && $cfs.children().index($(h)) != -1)
                    {
                        $(this).unbind('click').click(function(e) {
                            e.preventDefault();
                            $cfs.trigger(cf_e('slideTo', conf), h);
                        });
                    }
                });
                return true;
            });


            //	updatePageStatus event
            $cfs.bind(cf_e('updatePageStatus', conf), function(e, build, sizes) {
                e.stopPropagation();
                if (!opts.pagination.container)
                {
                    return;
                }

                var ipp = opts.pagination.items || opts.items.visible,
                    pgs = Math.ceil(itms.total/ipp);

                if (build)
                {
                    if (opts.pagination.anchorBuilder)
                    {
                        opts.pagination.container.children().remove();
                        opts.pagination.container.each(function() {
                            for (var a = 0; a < pgs; a++)
                            {
                                var i = $cfs.children().eq( gn_getItemIndex(a*ipp, 0, true, itms, $cfs) );
                                $(this).append(opts.pagination.anchorBuilder.call(i[0], a+1));
                            }
                        });
                    }
                    opts.pagination.container.each(function() {
                        $(this).children().unbind(opts.pagination.event).each(function(a) {
                            $(this).bind(opts.pagination.event, function(e) {
                                e.preventDefault();
                                $cfs.trigger(cf_e('slideTo', conf), [a*ipp, -opts.pagination.deviation, true, opts.pagination]);
                            });
                        });
                    });
                }

                var selected = $cfs.triggerHandler(cf_e('currentPage', conf)) + opts.pagination.deviation;
                if (selected >= pgs)
                {
                    selected = 0;
                }
                if (selected < 0)
                {
                    selected = pgs-1;
                }
                opts.pagination.container.each(function() {
                    $(this).children().removeClass(cf_c('selected', conf)).eq(selected).addClass(cf_c('selected', conf));
                });
                return true;
            });


            //	updateSizes event
            $cfs.bind(cf_e('updateSizes', conf), function(e) {
                var vI = opts.items.visible,
                    a_itm = $cfs.children(),
                    avail_primary = ms_getParentSize($wrp, opts, 'width');

                itms.total = a_itm.length;

                if (crsl.primarySizePercentage)
                {
                    opts.maxDimension = avail_primary;
                    opts[opts.d['width']] = ms_getPercentage(avail_primary, crsl.primarySizePercentage);
                }
                else
                {
                    opts.maxDimension = ms_getMaxDimension(opts, avail_primary);
                }

                if (opts.responsive)
                {
                    opts.items.width = opts.items.sizesConf.width;
                    opts.items.height = opts.items.sizesConf.height;
                    opts = in_getResponsiveValues(opts, a_itm, avail_primary);
                    vI = opts.items.visible;
                    sz_setResponsiveSizes(opts, a_itm);
                }
                else if (opts.items.visibleConf.variable)
                {
                    vI = gn_getVisibleItemsNext(a_itm, opts, 0);
                }
                else if (opts.items.filter != '*')
                {
                    vI = gn_getVisibleItemsNextFilter(a_itm, opts, 0);
                }

                if (!opts.circular && itms.first != 0 && vI > itms.first) {
                    if (opts.items.visibleConf.variable)
                    {
                        var nI = gn_getVisibleItemsPrev(a_itm, opts, itms.first) - itms.first;
                    }
                    else if (opts.items.filter != '*')
                    {
                        var nI = gn_getVisibleItemsPrevFilter(a_itm, opts, itms.first) - itms.first;
                    }
                    else
                    {
                        var nI = opts.items.visible - itms.first;
                    }
                    debug(conf, 'Preventing non-circular: sliding '+nI+' items backward.');
                    $cfs.trigger(cf_e('prev', conf), nI);
                }

                opts.items.visible = cf_getItemsAdjust(vI, opts, opts.items.visibleConf.adjust, $tt0);
                opts.items.visibleConf.old = opts.items.visible;
                opts = in_getAlignPadding(opts, a_itm);

                var sz = sz_setSizes($cfs, opts);
                $cfs.trigger(cf_e('updatePageStatus', conf), [true, sz]);
                nv_showNavi(opts, itms.total, conf);
                nv_enableNavi(opts, itms.first, conf);

                return sz;
            });


            //	destroy event
            $cfs.bind(cf_e('destroy', conf), function(e, orgOrder) {
                e.stopPropagation();
                tmrs = sc_clearTimers(tmrs);

                $cfs.data('_cfs_isCarousel', false);
                $cfs.trigger(cf_e('finish', conf));
                if (orgOrder)
                {
                    $cfs.trigger(cf_e('jumpToStart', conf));
                }
                sz_resetMargin($cfs.children(), opts);
                if (opts.responsive)
                {
                    $cfs.children().each(function() {
                        $(this).css($(this).data('_cfs_origCssSizes'));
                    });
                }

                $cfs.css($cfs.data('_cfs_origCss'));
                $cfs._cfs_unbind_events();
                $cfs._cfs_unbind_buttons();
                $wrp.replaceWith($cfs);

                return true;
            });


            //	debug event
            $cfs.bind(cf_e('debug', conf), function(e) {
                debug(conf, 'Carousel width: '+opts.width);
                debug(conf, 'Carousel height: '+opts.height);
                debug(conf, 'Item widths: '+opts.items.width);
                debug(conf, 'Item heights: '+opts.items.height);
                debug(conf, 'Number of items visible: '+opts.items.visible);
                if (opts.auto.play)
                {
                    debug(conf, 'Number of items scrolled automatically: '+opts.auto.items);
                }
                if (opts.prev.button)
                {
                    debug(conf, 'Number of items scrolled backward: '+opts.prev.items);
                }
                if (opts.next.button)
                {
                    debug(conf, 'Number of items scrolled forward: '+opts.next.items);
                }
                return conf.debug;
            });


            //	triggerEvent, making prefixed and namespaced events accessible from outside
            $cfs.bind('_cfs_triggerEvent', function(e, n, o) {
                e.stopPropagation();
                return $cfs.triggerHandler(cf_e(n, conf), o);
            });
        };	//	/bind_events


        $cfs._cfs_unbind_events = function() {
            $cfs.unbind(cf_e('', conf));
            $cfs.unbind(cf_e('', conf, false));
            $cfs.unbind('_cfs_triggerEvent');
        };	//	/unbind_events


        $cfs._cfs_bind_buttons = function() {
            $cfs._cfs_unbind_buttons();
            nv_showNavi(opts, itms.total, conf);
            nv_enableNavi(opts, itms.first, conf);

            if (opts.auto.pauseOnHover)
            {
                var pC = bt_pauseOnHoverConfig(opts.auto.pauseOnHover);
                $wrp.bind(cf_e('mouseenter', conf, false), function() { $cfs.trigger(cf_e('pause', conf), pC);	})
                    .bind(cf_e('mouseleave', conf, false), function() { $cfs.trigger(cf_e('resume', conf));		});
            }

            //	play button
            if (opts.auto.button)
            {
                opts.auto.button.bind(cf_e(opts.auto.event, conf, false), function(e) {
                    e.preventDefault();
                    var ev = false,
                        pC = null;

                    if (crsl.isPaused)
                    {
                        ev = 'play';
                    }
                    else if (opts.auto.pauseOnEvent)
                    {
                        ev = 'pause';
                        pC = bt_pauseOnHoverConfig(opts.auto.pauseOnEvent);
                    }
                    if (ev)
                    {
                        $cfs.trigger(cf_e(ev, conf), pC);
                    }
                });
            }

            //	prev button
            if (opts.prev.button)
            {
                opts.prev.button.bind(cf_e(opts.prev.event, conf, false), function(e) {
                    e.preventDefault();
                    $cfs.trigger(cf_e('prev', conf));
                });
                if (opts.prev.pauseOnHover)
                {
                    var pC = bt_pauseOnHoverConfig(opts.prev.pauseOnHover);
                    opts.prev.button.bind(cf_e('mouseenter', conf, false), function() { $cfs.trigger(cf_e('pause', conf), pC);	})
                        .bind(cf_e('mouseleave', conf, false), function() { $cfs.trigger(cf_e('resume', conf));		});
                }
            }

            //	next butotn
            if (opts.next.button)
            {
                opts.next.button.bind(cf_e(opts.next.event, conf, false), function(e) {
                    e.preventDefault();
                    $cfs.trigger(cf_e('next', conf));
                });
                if (opts.next.pauseOnHover)
                {
                    var pC = bt_pauseOnHoverConfig(opts.next.pauseOnHover);
                    opts.next.button.bind(cf_e('mouseenter', conf, false), function() { $cfs.trigger(cf_e('pause', conf), pC); 	})
                        .bind(cf_e('mouseleave', conf, false), function() { $cfs.trigger(cf_e('resume', conf));		});
                }
            }

            //	pagination
            if (opts.pagination.container)
            {
                if (opts.pagination.pauseOnHover)
                {
                    var pC = bt_pauseOnHoverConfig(opts.pagination.pauseOnHover);
                    opts.pagination.container.bind(cf_e('mouseenter', conf, false), function() { $cfs.trigger(cf_e('pause', conf), pC);	})
                        .bind(cf_e('mouseleave', conf, false), function() { $cfs.trigger(cf_e('resume', conf));	});
                }
            }

            //	prev/next keys
            if (opts.prev.key || opts.next.key)
            {
                $(document).bind(cf_e('keyup', conf, false, true, true), function(e) {
                    var k = e.keyCode;
                    if (k == opts.next.key)
                    {
                        e.preventDefault();
                        $cfs.trigger(cf_e('next', conf));
                    }
                    if (k == opts.prev.key)
                    {
                        e.preventDefault();
                        $cfs.trigger(cf_e('prev', conf));
                    }
                });
            }

            //	pagination keys
            if (opts.pagination.keys)
            {
                $(document).bind(cf_e('keyup', conf, false, true, true), function(e) {
                    var k = e.keyCode;
                    if (k >= 49 && k < 58)
                    {
                        k = (k-49) * opts.items.visible;
                        if (k <= itms.total)
                        {
                            e.preventDefault();
                            $cfs.trigger(cf_e('slideTo', conf), [k, 0, true, opts.pagination]);
                        }
                    }
                });
            }


            //	DEPRECATED
            if (opts.prev.wipe || opts.next.wipe)
            {
                deprecated( 'the touchwipe-plugin', 'the touchSwipe-plugin' );
                if ($.fn.touchwipe)
                {
                    var wP = (opts.prev.wipe) ? function() { $cfs.trigger(cf_e('prev', conf)) } : null,
                        wN = (opts.next.wipe) ? function() { $cfs.trigger(cf_e('next', conf)) } : null;

                    if (wN || wN)
                    {
                        if (!crsl.touchwipe)
                        {
                            crsl.touchwipe = true;
                            var twOps = {
                                'min_move_x': 30,
                                'min_move_y': 30,
                                'preventDefaultEvents': true
                            };
                            switch (opts.direction)
                            {
                                case 'up':
                                case 'down':
                                    twOps.wipeUp = wP;
                                    twOps.wipeDown = wN;
                                    break;
                                default:
                                    twOps.wipeLeft = wN;
                                    twOps.wipeRight = wP;
                            }
                            $wrp.touchwipe(twOps);
                        }
                    }
                }
            }
            //	/DEPRECATED


            //	swipe
            if ($.fn.swipe)
            {
                var isTouch = 'ontouchstart' in window;
                if ((isTouch && opts.swipe.onTouch) || (!isTouch && opts.swipe.onMouse))
                {
                    var scP = $.extend(true, {}, opts.prev, opts.swipe),
                        scN = $.extend(true, {}, opts.next, opts.swipe),
                        swP = function() { $cfs.trigger(cf_e('prev', conf), [scP]) },
                        swN = function() { $cfs.trigger(cf_e('next', conf), [scN]) };

                    switch (opts.direction)
                    {
                        case 'up':
                        case 'down':
                            opts.swipe.options.swipeUp = swN;
                            opts.swipe.options.swipeDown = swP;
                            break;
                        default:
                            opts.swipe.options.swipeLeft = swN;
                            opts.swipe.options.swipeRight = swP;
                    }
                    if (crsl.swipe)
                    {
                        $cfs.swipe('destroy');
                    }
                    $wrp.swipe(opts.swipe.options);
                    $wrp.css('cursor', 'move');
                    crsl.swipe = true;
                }
            }

            //	mousewheel
            if ($.fn.mousewheel)
            {


                //	DEPRECATED
                if (opts.prev.mousewheel)
                {
                    deprecated('The prev.mousewheel option', 'the mousewheel configuration object');
                    opts.prev.mousewheel = null;
                    opts.mousewheel = {
                        items: bt_mousesheelNumber(opts.prev.mousewheel)
                    };
                }
                if (opts.next.mousewheel)
                {
                    deprecated('The next.mousewheel option', 'the mousewheel configuration object');
                    opts.next.mousewheel = null;
                    opts.mousewheel = {
                        items: bt_mousesheelNumber(opts.next.mousewheel)
                    };
                }
                //	/DEPRECATED


                if (opts.mousewheel)
                {
                    var mcP = $.extend(true, {}, opts.prev, opts.mousewheel),
                        mcN = $.extend(true, {}, opts.next, opts.mousewheel);

                    if (crsl.mousewheel)
                    {
                        $wrp.unbind(cf_e('mousewheel', conf, false));
                    }
                    $wrp.bind(cf_e('mousewheel', conf, false), function(e, delta) {
                        e.preventDefault();
                        if (delta > 0)
                        {
                            $cfs.trigger(cf_e('prev', conf), [mcP]);
                        }
                        else
                        {
                            $cfs.trigger(cf_e('next', conf), [mcN]);
                        }
                    });
                    crsl.mousewheel = true;
                }
            }

            if (opts.auto.play)
            {
                $cfs.trigger(cf_e('play', conf), opts.auto.delay);
            }

            if (crsl.upDateOnWindowResize)
            {
                var resizeFn = function(e) {
                    $cfs.trigger(cf_e('finish', conf));
                    if (opts.auto.pauseOnResize && !crsl.isPaused)
                    {
                        $cfs.trigger(cf_e('play', conf));
                    }
                    sz_resetMargin($cfs.children(), opts);
                    $cfs.trigger(cf_e('updateSizes', conf));
                };

                var $w = $(window),
                    onResize = null;

                if ($.debounce && conf.onWindowResize == 'debounce')
                {
                    onResize = $.debounce(200, resizeFn);
                }
                else if ($.throttle && conf.onWindowResize == 'throttle')
                {
                    onResize = $.throttle(300, resizeFn);
                }
                else
                {
                    var _windowWidth = 0,
                        _windowHeight = 0;

                    onResize = function() {
                        var nw = $w.width(),
                            nh = $w.height();

                        if (nw != _windowWidth || nh != _windowHeight)
                        {
                            resizeFn();
                            _windowWidth = nw;
                            _windowHeight = nh;
                        }
                    };
                }
                $w.bind(cf_e('resize', conf, false, true, true), onResize);
            }
        };	//	/bind_buttons


        $cfs._cfs_unbind_buttons = function() {
            var ns1 = cf_e('', conf),
                ns2 = cf_e('', conf, false);
            ns3 = cf_e('', conf, false, true, true);

            $(document).unbind(ns3);
            $(window).unbind(ns3);
            $wrp.unbind(ns2);

            if (opts.auto.button)
            {
                opts.auto.button.unbind(ns2);
            }
            if (opts.prev.button)
            {
                opts.prev.button.unbind(ns2);
            }
            if (opts.next.button)
            {
                opts.next.button.unbind(ns2);
            }
            if (opts.pagination.container)
            {
                opts.pagination.container.unbind(ns2);
                if (opts.pagination.anchorBuilder)
                {
                    opts.pagination.container.children().remove();
                }
            }
            if (crsl.swipe)
            {
                $cfs.swipe('destroy');
                $wrp.css('cursor', 'default');
                crsl.swipe = false;
            }
            if (crsl.mousewheel)
            {
                crsl.mousewheel = false;
            }

            nv_showNavi(opts, 'hide', conf);
            nv_enableNavi(opts, 'removeClass', conf);

        };	//	/unbind_buttons



        //	START

        if (is_boolean(configs))
        {
            configs = {
                'debug': configs
            };
        }

        //	set vars
        var crsl = {
                'direction'		: 'next',
                'isPaused'		: true,
                'isScrolling'	: false,
                'isStopped'		: false,
                'mousewheel'	: false,
                'swipe'			: false
            },
            itms = {
                'total'			: $cfs.children().length,
                'first'			: 0
            },
            tmrs = {
                'auto'			: null,
                'progress'		: null,
                'startTime'		: getTime(),
                'timePassed'	: 0
            },
            scrl = {
                'isStopped'		: false,
                'duration'		: 0,
                'startTime'		: 0,
                'easing'		: '',
                'anims'			: []
            },
            clbk = {
                'onBefore'		: [],
                'onAfter'		: []
            },
            queu = [],
            conf = $.extend(true, {}, $.fn.carouFredSel.configs, configs),
            opts = {},
            opts_orig = $.extend(true, {}, options),
            $wrp = $cfs.wrap('<'+conf.wrapper.element+' class="'+conf.wrapper.classname+'" />').parent();


        conf.selector		= $cfs.selector;
        conf.serialNumber	= $.fn.carouFredSel.serialNumber++;


        //	create carousel
        $cfs._cfs_init(opts_orig, true, starting_position);
        $cfs._cfs_build();
        $cfs._cfs_bind_events();
        $cfs._cfs_bind_buttons();

        //	find item to start
        if (is_array(opts.items.start))
        {
            var start_arr = opts.items.start;
        }
        else
        {
            var start_arr = [];
            if (opts.items.start != 0)
            {
                start_arr.push(opts.items.start);
            }
        }
        if (opts.cookie)
        {
            start_arr.unshift(parseInt(cf_getCookie(opts.cookie), 10));
        }

        if (start_arr.length > 0)
        {
            for (var a = 0, l = start_arr.length; a < l; a++)
            {
                var s = start_arr[a];
                if (s == 0)
                {
                    continue;
                }
                if (s === true)
                {
                    s = window.location.hash;
                    if (s.length < 1)
                    {
                        continue;
                    }
                }
                else if (s === 'random')
                {
                    s = Math.floor(Math.random()*itms.total);
                }
                if ($cfs.triggerHandler(cf_e('slideTo', conf), [s, 0, true, { fx: 'none' }]))
                {
                    break;
                }
            }
        }
        var siz = sz_setSizes($cfs, opts),
            itm = gi_getCurrentItems($cfs.children(), opts);

        if (opts.onCreate)
        {
            opts.onCreate.call($tt0, {
                'width': siz.width,
                'height': siz.height,
                'items': itm
            });
        }

        $cfs.trigger(cf_e('updatePageStatus', conf), [true, siz]);
        $cfs.trigger(cf_e('linkAnchors', conf));

        if (conf.debug)
        {
            $cfs.trigger(cf_e('debug', conf));
        }

        return $cfs;
    };



    //	GLOBAL PUBLIC

    $.fn.carouFredSel.serialNumber = 1;
    $.fn.carouFredSel.defaults = {
        'synchronise'	: false,
        'infinite'		: true,
        'circular'		: true,
        'responsive'	: false,
        'direction'		: 'left',
        'items'			: {
            'start'			: 0
        },
        'scroll'		: {
            'easing'		: 'swing',
            'duration'		: 500,
            'pauseOnHover'	: false,
            'event'			: 'click',
            'queue'			: false
        }
    };
    $.fn.carouFredSel.configs = {
        'debug'			: false,
        'onWindowResize': 'throttle',
        'events'		: {
            'prefix'		: '',
            'namespace'		: 'cfs'
        },
        'wrapper'		: {
            'element'		: 'div',
            'classname'		: 'caroufredsel_wrapper'
        },
        'classnames'	: {}
    };
    $.fn.carouFredSel.pageAnchorBuilder = function(nr) {
        return '<a href="#"><span>'+nr+'</span></a>';
    };
    $.fn.carouFredSel.progressbarUpdater = function(perc) {
        $(this).css('width', perc+'%');
    };

    $.fn.carouFredSel.cookie = {
        get: function(n) {
            n += '=';
            var ca = document.cookie.split(';');
            for (var a = 0, l = ca.length; a < l; a++)
            {
                var c = ca[a];
                while (c.charAt(0) == ' ')
                {
                    c = c.slice(1);
                }
                if (c.indexOf(n) == 0)
                {
                    return c.slice(n.length);
                }
            }
            return 0;
        },
        set: function(n, v, d) {
            var e = "";
            if (d)
            {
                var date = new Date();
                date.setTime(date.getTime() + (d * 24 * 60 * 60 * 1000));
                e = "; expires=" + date.toGMTString();
            }
            document.cookie = n + '=' + v + e + '; path=/';
        },
        remove: function(n) {
            $.fn.carouFredSel.cookie.set(n, "", -1);
        }
    };


    //	GLOBAL PRIVATE

    //	scrolling functions
    function sc_setScroll(d, e) {
        return {
            anims: [],
            duration: d,
            orgDuration: d,
            easing: e,
            startTime: getTime()
        };
    }
    function sc_startScroll(s) {

        if (is_object(s.pre))
        {
            sc_startScroll(s.pre);
        }
        for (var a = 0, l = s.anims.length; a < l; a++)
        {
            var b = s.anims[a];
            if (!b)
            {
                continue;
            }
            if (b[3])
            {
                b[0].stop();
            }
            b[0].animate(b[1], {
                complete: b[2],
                duration: s.duration,
                easing: s.easing
            });
        }
        if (is_object(s.post))
        {
            sc_startScroll(s.post);
        }
    }
    function sc_stopScroll(s, finish) {
        if (!is_boolean(finish))
        {
            finish = true;
        }
        if (is_object(s.pre))
        {
            sc_stopScroll(s.pre, finish);
        }
        for (var a = 0, l = s.anims.length; a < l; a++)
        {
            var b = s.anims[a];
            b[0].stop(true);
            if (finish)
            {
                b[0].css(b[1]);
                if (is_function(b[2]))
                {
                    b[2]();
                }
            }
        }
        if (is_object(s.post))
        {
            sc_stopScroll(s.post, finish);
        }
    }
    function sc_afterScroll( $c, $c2, o ) {
        if ($c2)
        {
            $c2.remove();
        }

        switch(o.fx) {
            case 'fade':
            case 'crossfade':
            case 'cover-fade':
            case 'uncover-fade':
                $c.css('filter', '');
                break;
        }
    }
    function sc_fireCallbacks($t, o, b, a, c) {
        if (o[b])
        {
            o[b].call($t, a);
        }
        if (c[b].length)
        {
            for (var i = 0, l = c[b].length; i < l; i++)
            {
                c[b][i].call($t, a);
            }
        }
        return [];
    }
    function sc_fireQueue($c, q, c) {

        if (q.length)
        {
            $c.trigger(cf_e(q[0][0], c), q[0][1]);
            q.shift();
        }
        return q;
    }
    function sc_hideHiddenItems(hiddenitems) {
        hiddenitems.each(function() {
            var hi = $(this);
            hi.data('_cfs_isHidden', hi.is(':hidden')).hide();
        });
    }
    function sc_showHiddenItems(hiddenitems) {
        if (hiddenitems)
        {
            hiddenitems.each(function() {
                var hi = $(this);
                if (!hi.data('_cfs_isHidden'))
                {
                    hi.show();
                }
            });
        }
    }
    function sc_clearTimers(t) {
        if (t.auto)
        {
            clearTimeout(t.auto);
        }
        if (t.progress)
        {
            clearInterval(t.progress);
        }
        return t;
    }
    function sc_mapCallbackArguments(i_old, i_skp, i_new, s_itm, s_dir, s_dur, w_siz) {
        return {
            'width': w_siz.width,
            'height': w_siz.height,
            'items': {
                'old': i_old,
                'skipped': i_skp,
                'visible': i_new,

                //	DEPRECATED
                'new': i_new
                //	/DEPRECATED
            },
            'scroll': {
                'items': s_itm,
                'direction': s_dir,
                'duration': s_dur
            }
        };
    }
    function sc_getDuration( sO, o, nI, siz ) {
        var dur = sO.duration;
        if (sO.fx == 'none')
        {
            return 0;
        }
        if (dur == 'auto')
        {
            dur = o.scroll.duration / o.scroll.items * nI;
        }
        else if (dur < 10)
        {
            dur = siz / dur;
        }
        if (dur < 1)
        {
            return 0;
        }
        if (sO.fx == 'fade')
        {
            dur = dur / 2;
        }
        return Math.round(dur);
    }

    //	navigation functions
    function nv_showNavi(o, t, c) {
        var minimum = (is_number(o.items.minimum)) ? o.items.minimum : o.items.visible + 1;
        if (t == 'show' || t == 'hide')
        {
            var f = t;
        }
        else if (minimum > t)
        {
            debug(c, 'Not enough items ('+t+' total, '+minimum+' needed): Hiding navigation.');
            var f = 'hide';
        }
        else
        {
            var f = 'show';
        }
        var s = (f == 'show') ? 'removeClass' : 'addClass',
            h = cf_c('hidden', c);

        if (o.auto.button)
        {
            o.auto.button[f]()[s](h);
        }
        if (o.prev.button)
        {
            o.prev.button[f]()[s](h);
        }
        if (o.next.button)
        {
            o.next.button[f]()[s](h);
        }
        if (o.pagination.container)
        {
            o.pagination.container[f]()[s](h);
        }
    }
    function nv_enableNavi(o, f, c) {
        if (o.circular || o.infinite) return;
        var fx = (f == 'removeClass' || f == 'addClass') ? f : false,
            di = cf_c('disabled', c);

        if (o.auto.button && fx)
        {
            o.auto.button[fx](di);
        }
        if (o.prev.button)
        {
            var fn = fx || (f == 0) ? 'addClass' : 'removeClass';
            o.prev.button[fn](di);
        }
        if (o.next.button)
        {
            var fn = fx || (f == o.items.visible) ? 'addClass' : 'removeClass';
            o.next.button[fn](di);
        }
    }

    //	get object functions
    function go_getObject($tt, obj) {
        if (is_function(obj))
        {
            obj = obj.call($tt);
        }
        else if (is_undefined(obj))
        {
            obj = {};
        }
        return obj;
    }
    function go_getItemsObject($tt, obj) {
        obj = go_getObject($tt, obj);
        if (is_number(obj))
        {
            obj	= {
                'visible': obj
            };
        }
        else if (obj == 'variable')
        {
            obj = {
                'visible': obj,
                'width': obj,
                'height': obj
            };
        }
        else if (!is_object(obj))
        {
            obj = {};
        }
        return obj;
    }
    function go_getScrollObject($tt, obj) {
        obj = go_getObject($tt, obj);
        if (is_number(obj))
        {
            if (obj <= 50)
            {
                obj = {
                    'items': obj
                };
            }
            else
            {
                obj = {
                    'duration': obj
                };
            }
        }
        else if (is_string(obj))
        {
            obj = {
                'easing': obj
            };
        }
        else if (!is_object(obj))
        {
            obj = {};
        }
        return obj;
    }
    function go_getNaviObject($tt, obj) {
        obj = go_getObject($tt, obj);
        if (is_string(obj))
        {
            var temp = cf_getKeyCode(obj);
            if (temp == -1)
            {
                obj = $(obj);
            }
            else
            {
                obj = temp;
            }
        }
        return obj;
    }

    function go_getAutoObject($tt, obj) {
        obj = go_getNaviObject($tt, obj);
        if (is_jquery(obj))
        {
            obj = {
                'button': obj
            };
        }
        else if (is_boolean(obj))
        {
            obj = {
                'play': obj
            };
        }
        else if (is_number(obj))
        {
            obj = {
                'timeoutDuration': obj
            };
        }
        if (obj.progress)
        {
            if (is_string(obj.progress) || is_jquery(obj.progress))
            {
                obj.progress = {
                    'bar': obj.progress
                };
            }
        }
        return obj;
    }
    function go_complementAutoObject($tt, obj) {
        if (is_function(obj.button))
        {
            obj.button = obj.button.call($tt);
        }
        if (is_string(obj.button))
        {
            obj.button = $(obj.button);
        }
        if (!is_boolean(obj.play))
        {
            obj.play = true;
        }
        if (!is_number(obj.delay))
        {
            obj.delay = 0;
        }
        if (is_undefined(obj.pauseOnEvent))
        {
            obj.pauseOnEvent = true;
        }
        if (!is_boolean(obj.pauseOnResize))
        {
            obj.pauseOnResize = true;
        }
        if (!is_number(obj.timeoutDuration))
        {
            obj.timeoutDuration = (obj.duration < 10)
                ? 2500
                : obj.duration * 5;
        }
        if (obj.progress)
        {
            if (is_function(obj.progress.bar))
            {
                obj.progress.bar = obj.progress.bar.call($tt);
            }
            if (is_string(obj.progress.bar))
            {
                obj.progress.bar = $(obj.progress.bar);
            }
            if (obj.progress.bar)
            {
                if (!is_function(obj.progress.updater))
                {
                    obj.progress.updater = $.fn.carouFredSel.progressbarUpdater;
                }
                if (!is_number(obj.progress.interval))
                {
                    obj.progress.interval = 50;
                }
            }
            else
            {
                obj.progress = false;
            }
        }
        return obj;
    }

    function go_getPrevNextObject($tt, obj) {
        obj = go_getNaviObject($tt, obj);
        if (is_jquery(obj))
        {
            obj = {
                'button': obj
            };
        }
        else if (is_number(obj))
        {
            obj = {
                'key': obj
            };
        }
        return obj;
    }
    function go_complementPrevNextObject($tt, obj) {
        if (is_function(obj.button))
        {
            obj.button = obj.button.call($tt);
        }
        if (is_string(obj.button))
        {
            obj.button = $(obj.button);
        }
        if (is_string(obj.key))
        {
            obj.key = cf_getKeyCode(obj.key);
        }
        return obj;
    }

    function go_getPaginationObject($tt, obj) {
        obj = go_getNaviObject($tt, obj);
        if (is_jquery(obj))
        {
            obj = {
                'container': obj
            };
        }
        else if (is_boolean(obj))
        {
            obj = {
                'keys': obj
            };
        }
        return obj;
    }
    function go_complementPaginationObject($tt, obj) {
        if (is_function(obj.container))
        {
            obj.container = obj.container.call($tt);
        }
        if (is_string(obj.container))
        {
            obj.container = $(obj.container);
        }
        if (!is_number(obj.items))
        {
            obj.items = false;
        }
        if (!is_boolean(obj.keys))
        {
            obj.keys = false;
        }
        if (!is_function(obj.anchorBuilder) && !is_false(obj.anchorBuilder))
        {
            obj.anchorBuilder = $.fn.carouFredSel.pageAnchorBuilder;
        }
        if (!is_number(obj.deviation))
        {
            obj.deviation = 0;
        }
        return obj;
    }

    function go_getSwipeObject($tt, obj) {
        if (is_function(obj))
        {
            obj = obj.call($tt);
        }
        if (is_undefined(obj))
        {
            obj = {
                'onTouch': false
            };
        }
        if (is_true(obj))
        {
            obj = {
                'onTouch': obj
            };
        }
        else if (is_number(obj))
        {
            obj = {
                'items': obj
            };
        }
        return obj;
    }
    function go_complementSwipeObject($tt, obj) {
        if (!is_boolean(obj.onTouch))
        {
            obj.onTouch = true;
        }
        if (!is_boolean(obj.onMouse))
        {
            obj.onMouse = false;
        }
        if (!is_object(obj.options))
        {
            obj.options = {};
        }
        if (!is_boolean(obj.options.triggerOnTouchEnd))
        {
            obj.options.triggerOnTouchEnd = false;
        }
        return obj;
    }
    function go_getMousewheelObject($tt, obj) {
        if (is_function(obj))
        {
            obj = obj.call($tt);
        }
        if (is_true(obj))
        {
            obj = {};
        }
        else if (is_number(obj))
        {
            obj = {
                'items': obj
            };
        }
        else if (is_undefined(obj))
        {
            obj = false;
        }
        return obj;
    }
    function go_complementMousewheelObject($tt, obj) {
        return obj;
    }

    //	get number functions
    function gn_getItemIndex(num, dev, org, items, $cfs) {
        if (is_string(num))
        {
            num = $(num, $cfs);
        }

        if (is_object(num))
        {
            num = $(num, $cfs);
        }
        if (is_jquery(num))
        {
            num = $cfs.children().index(num);
            if (!is_boolean(org))
            {
                org = false;
            }
        }
        else
        {
            if (!is_boolean(org))
            {
                org = true;
            }
        }
        if (!is_number(num))
        {
            num = 0;
        }
        if (!is_number(dev))
        {
            dev = 0;
        }

        if (org)
        {
            num += items.first;
        }
        num += dev;
        if (items.total > 0)
        {
            while (num >= items.total)
            {
                num -= items.total;
            }
            while (num < 0)
            {
                num += items.total;
            }
        }
        return num;
    }

    //	items prev
    function gn_getVisibleItemsPrev(i, o, s) {
        var t = 0,
            x = 0;

        for (var a = s; a >= 0; a--)
        {
            var j = i.eq(a);
            t += (j.is(':visible')) ? j[o.d['outerWidth']](true) : 0;
            if (t > o.maxDimension)
            {
                return x;
            }
            if (a == 0)
            {
                a = i.length;
            }
            x++;
        }
    }
    function gn_getVisibleItemsPrevFilter(i, o, s) {
        return gn_getItemsPrevFilter(i, o.items.filter, o.items.visibleConf.org, s);
    }
    function gn_getScrollItemsPrevFilter(i, o, s, m) {
        return gn_getItemsPrevFilter(i, o.items.filter, m, s);
    }
    function gn_getItemsPrevFilter(i, f, m, s) {
        var t = 0,
            x = 0;

        for (var a = s, l = i.length; a >= 0; a--)
        {
            x++;
            if (x == l)
            {
                return x;
            }

            var j = i.eq(a);
            if (j.is(f))
            {
                t++;
                if (t == m)
                {
                    return x;
                }
            }
            if (a == 0)
            {
                a = l;
            }
        }
    }

    function gn_getVisibleOrg($c, o) {
        return o.items.visibleConf.org || $c.children().slice(0, o.items.visible).filter(o.items.filter).length;
    }

    //	items next
    function gn_getVisibleItemsNext(i, o, s) {
        var t = 0,
            x = 0;

        for (var a = s, l = i.length-1; a <= l; a++)
        {
            var j = i.eq(a);

            t += (j.is(':visible')) ? j[o.d['outerWidth']](true) : 0;
            if (t > o.maxDimension)
            {
                return x;
            }

            x++;
            if (x == l+1)
            {
                return x;
            }
            if (a == l)
            {
                a = -1;
            }
        }
    }
    function gn_getVisibleItemsNextTestCircular(i, o, s, l) {
        var v = gn_getVisibleItemsNext(i, o, s);
        if (!o.circular)
        {
            if (s + v > l)
            {
                v = l - s;
            }
        }
        return v;
    }
    function gn_getVisibleItemsNextFilter(i, o, s) {
        return gn_getItemsNextFilter(i, o.items.filter, o.items.visibleConf.org, s, o.circular);
    }
    function gn_getScrollItemsNextFilter(i, o, s, m) {
        return gn_getItemsNextFilter(i, o.items.filter, m+1, s, o.circular) - 1;
    }
    function gn_getItemsNextFilter(i, f, m, s, c) {
        var t = 0,
            x = 0;

        for (var a = s, l = i.length-1; a <= l; a++)
        {
            x++;
            if (x >= l)
            {
                return x;
            }

            var j = i.eq(a);
            if (j.is(f))
            {
                t++;
                if (t == m)
                {
                    return x;
                }
            }
            if (a == l)
            {
                a = -1;
            }
        }
    }

    //	get items functions
    function gi_getCurrentItems(i, o) {
        return i.slice(0, o.items.visible);
    }
    function gi_getOldItemsPrev(i, o, n) {
        return i.slice(n, o.items.visibleConf.old+n);
    }
    function gi_getNewItemsPrev(i, o) {
        return i.slice(0, o.items.visible);
    }
    function gi_getOldItemsNext(i, o) {
        return i.slice(0, o.items.visibleConf.old);
    }
    function gi_getNewItemsNext(i, o, n) {
        return i.slice(n, o.items.visible+n);
    }

    //	sizes functions
    function sz_storeMargin(i, o, d) {
        if (o.usePadding)
        {
            if (!is_string(d))
            {
                d = '_cfs_origCssMargin';
            }
            i.each(function() {
                var j = $(this),
                    m = parseInt(j.css(o.d['marginRight']), 10);
                if (!is_number(m))
                {
                    m = 0;
                }
                j.data(d, m);
            });
        }
    }
    function sz_resetMargin(i, o, m) {
        if (o.usePadding)
        {
            var x = (is_boolean(m)) ? m : false;
            if (!is_number(m))
            {
                m = 0;
            }
            sz_storeMargin(i, o, '_cfs_tempCssMargin');
            i.each(function() {
                var j = $(this);
                j.css(o.d['marginRight'], ((x) ? j.data('_cfs_tempCssMargin') : m + j.data('_cfs_origCssMargin')));
            });
        }
    }
    function sz_storeSizes(i, o) {
        if (o.responsive)
        {
            i.each(function() {
                var j = $(this),
                    s = in_mapCss(j, ['width', 'height']);
                j.data('_cfs_origCssSizes', s);
            });
        }
    }
    function sz_setResponsiveSizes(o, all) {
        var visb = o.items.visible,
            newS = o.items[o.d['width']],
            seco = o[o.d['height']],
            secp = is_percentage(seco);

        all.each(function() {
            var $t = $(this),
                nw = newS - ms_getPaddingBorderMargin($t, o, 'Width');

            $t[o.d['width']](nw);
            if (secp)
            {
                $t[o.d['height']](ms_getPercentage(nw, seco));
            }
        });
    }
    function sz_setSizes($c, o) {
        var $w = $c.parent(),
            $i = $c.children(),
            $v = gi_getCurrentItems($i, o),
            sz = cf_mapWrapperSizes(ms_getSizes($v, o, true), o, false);

        $w.css(sz);

        if (o.usePadding)
        {
            var p = o.padding,
                r = p[o.d[1]];

            if (o.align && r < 0)
            {
                r = 0;
            }
            var $l = $v.last();
            $l.css(o.d['marginRight'], $l.data('_cfs_origCssMargin') + r);
            $c.css(o.d['top'], p[o.d[0]]);
            $c.css(o.d['left'], p[o.d[3]]);
        }

        $c.css(o.d['width'], sz[o.d['width']]+(ms_getTotalSize($i, o, 'width')*2));
        $c.css(o.d['height'], ms_getLargestSize($i, o, 'height'));
        return sz;
    }

    //	measuring functions
    function ms_getSizes(i, o, wrapper) {
        return [ms_getTotalSize(i, o, 'width', wrapper), ms_getLargestSize(i, o, 'height', wrapper)];
    }
    function ms_getLargestSize(i, o, dim, wrapper) {
        if (!is_boolean(wrapper))
        {
            wrapper = false;
        }
        if (is_number(o[o.d[dim]]) && wrapper)
        {
            return o[o.d[dim]];
        }
        if (is_number(o.items[o.d[dim]]))
        {
            return o.items[o.d[dim]];
        }
        dim = (dim.toLowerCase().indexOf('width') > -1) ? 'outerWidth' : 'outerHeight';
        return ms_getTrueLargestSize(i, o, dim);
    }
    function ms_getTrueLargestSize(i, o, dim) {
        var s = 0;

        for (var a = 0, l = i.length; a < l; a++)
        {
            var j = i.eq(a);

            var m = (j.is(':visible')) ? j[o.d[dim]](true) : 0;
            if (s < m)
            {
                s = m;
            }
        }
        return s;
    }

    function ms_getTotalSize(i, o, dim, wrapper) {
        if (!is_boolean(wrapper))
        {
            wrapper = false;
        }
        if (is_number(o[o.d[dim]]) && wrapper)
        {
            return o[o.d[dim]];
        }
        if (is_number(o.items[o.d[dim]]))
        {
            return o.items[o.d[dim]] * i.length;
        }

        var d = (dim.toLowerCase().indexOf('width') > -1) ? 'outerWidth' : 'outerHeight',
            s = 0;

        for (var a = 0, l = i.length; a < l; a++)
        {
            var j = i.eq(a);
            s += (j.is(':visible')) ? j[o.d[d]](true) : 0;
        }
        return s;
    }
    function ms_getParentSize($w, o, d) {
        var isVisible = $w.is(':visible');
        if (isVisible)
        {
            $w.hide();
        }
        var s = $w.parent()[o.d[d]]();
        if (isVisible)
        {
            $w.show();
        }
        return s;
    }
    function ms_getMaxDimension(o, a) {
        return (is_number(o[o.d['width']])) ? o[o.d['width']] : a;
    }
    function ms_hasVariableSizes(i, o, dim) {
        var s = false,
            v = false;

        for (var a = 0, l = i.length; a < l; a++)
        {
            var j = i.eq(a);

            var c = (j.is(':visible')) ? j[o.d[dim]](true) : 0;
            if (s === false)
            {
                s = c;
            }
            else if (s != c)
            {
                v = true;
            }
            if (s == 0)
            {
                v = true;
            }
        }
        return v;
    }
    function ms_getPaddingBorderMargin(i, o, d) {
        return i[o.d['outer'+d]](true) - i[o.d[d.toLowerCase()]]();
    }
    function ms_getPercentage(s, o) {
        if (is_percentage(o))
        {
            o = parseInt( o.slice(0, -1), 10 );
            if (!is_number(o))
            {
                return s;
            }
            s *= o/100;
        }
        return s;
    }

    //	config functions
    function cf_e(n, c, pf, ns, rd) {
        if (!is_boolean(pf))
        {
            pf = true;
        }
        if (!is_boolean(ns))
        {
            ns = true;
        }
        if (!is_boolean(rd))
        {
            rd = false;
        }

        if (pf)
        {
            n = c.events.prefix + n;
        }
        if (ns)
        {
            n = n +'.'+ c.events.namespace;
        }
        if (ns && rd)
        {
            n += c.serialNumber;
        }

        return n;
    }
    function cf_c(n, c) {
        return (is_string(c.classnames[n])) ? c.classnames[n] : n;
    }
    function cf_mapWrapperSizes(ws, o, p) {
        if (!is_boolean(p))
        {
            p = true;
        }
        var pad = (o.usePadding && p) ? o.padding : [0, 0, 0, 0];
        var wra = {};

        wra[o.d['width']] = ws[0] + pad[1] + pad[3];
        wra[o.d['height']] = ws[1] + pad[0] + pad[2];

        return wra;
    }
    function cf_sortParams(vals, typs) {
        var arr = [];
        for (var a = 0, l1 = vals.length; a < l1; a++)
        {
            for (var b = 0, l2 = typs.length; b < l2; b++)
            {
                if (typs[b].indexOf(typeof vals[a]) > -1 && is_undefined(arr[b]))
                {
                    arr[b] = vals[a];
                    break;
                }
            }
        }
        return arr;
    }
    function cf_getPadding(p) {
        if (is_undefined(p))
        {
            return [0, 0, 0, 0];
        }
        if (is_number(p))
        {
            return [p, p, p, p];
        }
        if (is_string(p))
        {
            p = p.split('px').join('').split('em').join('').split(' ');
        }

        if (!is_array(p))
        {
            return [0, 0, 0, 0];
        }
        for (var i = 0; i < 4; i++)
        {
            p[i] = parseInt(p[i], 10);
        }
        switch (p.length)
        {
            case 0:
                return [0, 0, 0, 0];
            case 1:
                return [p[0], p[0], p[0], p[0]];
            case 2:
                return [p[0], p[1], p[0], p[1]];
            case 3:
                return [p[0], p[1], p[2], p[1]];
            default:
                return [p[0], p[1], p[2], p[3]];
        }
    }
    function cf_getAlignPadding(itm, o) {
        var x = (is_number(o[o.d['width']])) ? Math.ceil(o[o.d['width']] - ms_getTotalSize(itm, o, 'width')) : 0;
        switch (o.align)
        {
            case 'left':
                return [0, x];
            case 'right':
                return [x, 0];
            case 'center':
            default:
                return [Math.ceil(x/2), Math.floor(x/2)];
        }
    }
    function cf_getDimensions(o) {
        var dm = [
            ['width'	, 'innerWidth'	, 'outerWidth'	, 'height'	, 'innerHeight'	, 'outerHeight'	, 'left', 'top'	, 'marginRight'	, 0, 1, 2, 3],
            ['height'	, 'innerHeight'	, 'outerHeight'	, 'width'	, 'innerWidth'	, 'outerWidth'	, 'top'	, 'left', 'marginBottom', 3, 2, 1, 0]
        ];

        var dl = dm[0].length,
            dx = (o.direction == 'right' || o.direction == 'left') ? 0 : 1;

        var dimensions = {};
        for (var d = 0; d < dl; d++)
        {
            dimensions[dm[0][d]] = dm[dx][d];
        }
        return dimensions;
    }
    function cf_getAdjust(x, o, a, $t) {
        var v = x;
        if (is_function(a))
        {
            v = a.call($t, v);

        }
        else if (is_string(a))
        {
            var p = a.split('+'),
                m = a.split('-');

            if (m.length > p.length)
            {
                var neg = true,
                    sta = m[0],
                    adj = m[1];
            }
            else
            {
                var neg = false,
                    sta = p[0],
                    adj = p[1];
            }

            switch(sta)
            {
                case 'even':
                    v = (x % 2 == 1) ? x-1 : x;
                    break;
                case 'odd':
                    v = (x % 2 == 0) ? x-1 : x;
                    break;
                default:
                    v = x;
                    break;
            }
            adj = parseInt(adj, 10);
            if (is_number(adj))
            {
                if (neg)
                {
                    adj = -adj;
                }
                v += adj;
            }
        }
        if (!is_number(v) || v < 1)
        {
            v = 1;
        }
        return v;
    }
    function cf_getItemsAdjust(x, o, a, $t) {
        return cf_getItemAdjustMinMax(cf_getAdjust(x, o, a, $t), o.items.visibleConf);
    }
    function cf_getItemAdjustMinMax(v, i) {
        if (is_number(i.min) && v < i.min)
        {
            v = i.min;
        }
        if (is_number(i.max) && v > i.max)
        {
            v = i.max;
        }
        if (v < 1)
        {
            v = 1;
        }
        return v;
    }
    function cf_getSynchArr(s) {
        if (!is_array(s))
        {
            s = [[s]];
        }
        if (!is_array(s[0]))
        {
            s = [s];
        }
        for (var j = 0, l = s.length; j < l; j++)
        {
            if (is_string(s[j][0]))
            {
                s[j][0] = $(s[j][0]);
            }
            if (!is_boolean(s[j][1]))
            {
                s[j][1] = true;
            }
            if (!is_boolean(s[j][2]))
            {
                s[j][2] = true;
            }
            if (!is_number(s[j][3]))
            {
                s[j][3] = 0;
            }
        }
        return s;
    }
    function cf_getKeyCode(k) {
        if (k == 'right')
        {
            return 39;
        }
        if (k == 'left')
        {
            return 37;
        }
        if (k == 'up')
        {
            return 38;
        }
        if (k == 'down')
        {
            return 40;
        }
        return -1;
    }
    function cf_setCookie(n, $c, c) {
        if (n)
        {
            var v = $c.triggerHandler(cf_e('currentPosition', c));
            $.fn.carouFredSel.cookie.set(n, v);
        }
    }
    function cf_getCookie(n) {
        var c = $.fn.carouFredSel.cookie.get(n);
        return (c == '') ? 0 : c;
    }

    //	init function
    function in_mapCss($elem, props) {
        var css = {}, prop;
        for (var p = 0, l = props.length; p < l; p++)
        {
            prop = props[p];
            css[prop] = $elem.css(prop);
        }
        return css;
    }
    function in_complementItems(obj, opt, itm, sta) {
        if (!is_object(obj.visibleConf))
        {
            obj.visibleConf = {};
        }
        if (!is_object(obj.sizesConf))
        {
            obj.sizesConf = {};
        }

        if (obj.start == 0 && is_number(sta))
        {
            obj.start = sta;
        }

        //	visible items
        if (is_object(obj.visible))
        {
            obj.visibleConf.min = obj.visible.min;
            obj.visibleConf.max = obj.visible.max;
            obj.visible = false;
        }
        else if (is_string(obj.visible))
        {
            //	variable visible items
            if (obj.visible == 'variable')
            {
                obj.visibleConf.variable = true;
            }
            //	adjust string visible items
            else
            {
                obj.visibleConf.adjust = obj.visible;
            }
            obj.visible = false;
        }
        else if (is_function(obj.visible))
        {
            obj.visibleConf.adjust = obj.visible;
            obj.visible = false;
        }

        //	set items filter
        if (!is_string(obj.filter))
        {
            obj.filter = (itm.filter(':hidden').length > 0) ? ':visible' : '*';
        }

        //	primary item-size not set
        if (!obj[opt.d['width']])
        {
            //	responsive carousel -> set to largest
            if (opt.responsive)
            {
                debug(true, 'Set a '+opt.d['width']+' for the items!');
                obj[opt.d['width']] = ms_getTrueLargestSize(itm, opt, 'outerWidth');
            }
            //	 non-responsive -> measure it or set to "variable"
            else
            {
                obj[opt.d['width']] = (ms_hasVariableSizes(itm, opt, 'outerWidth'))
                    ? 'variable'
                    : itm[opt.d['outerWidth']](true);
            }
        }

        //	secondary item-size not set -> measure it or set to "variable"
        if (!obj[opt.d['height']])
        {
            obj[opt.d['height']] = (ms_hasVariableSizes(itm, opt, 'outerHeight'))
                ? 'variable'
                : itm[opt.d['outerHeight']](true);
        }

        obj.sizesConf.width = obj.width;
        obj.sizesConf.height = obj.height;
        return obj;
    }
    function in_complementVisibleItems(opt, avl) {
        //	primary item-size variable -> set visible items variable
        if (opt.items[opt.d['width']] == 'variable')
        {
            opt.items.visibleConf.variable = true;
        }
        if (!opt.items.visibleConf.variable) {
            //	primary size is number -> calculate visible-items
            if (is_number(opt[opt.d['width']]))
            {
                opt.items.visible = Math.floor(opt[opt.d['width']] / opt.items[opt.d['width']]);
            }
            //	measure and calculate primary size and visible-items
            else
            {
                opt.items.visible = Math.floor(avl / opt.items[opt.d['width']]);
                opt[opt.d['width']] = opt.items.visible * opt.items[opt.d['width']];
                if (!opt.items.visibleConf.adjust)
                {
                    opt.align = false;
                }
            }
            if (opt.items.visible == 'Infinity' || opt.items.visible < 1)
            {
                debug(true, 'Not a valid number of visible items: Set to "variable".');
                opt.items.visibleConf.variable = true;
            }
        }
        return opt;
    }
    function in_complementPrimarySize(obj, opt, all) {
        //	primary size set to auto -> measure largest item-size and set it
        if (obj == 'auto')
        {
            obj = ms_getTrueLargestSize(all, opt, 'outerWidth');
        }
        return obj;
    }
    function in_complementSecondarySize(obj, opt, all) {
        //	secondary size set to auto -> measure largest item-size and set it
        if (obj == 'auto')
        {
            obj = ms_getTrueLargestSize(all, opt, 'outerHeight');
        }
        //	secondary size not set -> set to secondary item-size
        if (!obj)
        {
            obj = opt.items[opt.d['height']];
        }
        return obj;
    }
    function in_getAlignPadding(o, all) {
        var p = cf_getAlignPadding(gi_getCurrentItems(all, o), o);
        o.padding[o.d[1]] = p[1];
        o.padding[o.d[3]] = p[0];
        return o;
    }
    function in_getResponsiveValues(o, all, avl) {

        var visb = cf_getItemAdjustMinMax(Math.ceil(o[o.d['width']] / o.items[o.d['width']]), o.items.visibleConf);
        if (visb > all.length)
        {
            visb = all.length;
        }

        var newS = Math.floor(o[o.d['width']]/visb);

        o.items.visible = visb;
        o.items[o.d['width']] = newS;
        o[o.d['width']] = visb * newS;
        return o;
    }


    //	buttons functions
    function bt_pauseOnHoverConfig(p) {
        if (is_string(p))
        {
            var i = (p.indexOf('immediate') > -1) ? true : false,
                r = (p.indexOf('resume') 	> -1) ? true : false;
        }
        else
        {
            var i = r = false;
        }
        return [i, r];
    }
    function bt_mousesheelNumber(mw) {
        return (is_number(mw)) ? mw : null
    }

    //	helper functions
    function is_null(a) {
        return (a === null);
    }
    function is_undefined(a) {
        return (is_null(a) || typeof a == 'undefined' || a === '' || a === 'undefined');
    }
    function is_array(a) {
        return (a instanceof Array);
    }
    function is_jquery(a) {
        return (a instanceof jQuery);
    }
    function is_object(a) {
        return ((a instanceof Object || typeof a == 'object') && !is_null(a) && !is_jquery(a) && !is_array(a));
    }
    function is_number(a) {
        return ((a instanceof Number || typeof a == 'number') && !isNaN(a));
    }
    function is_string(a) {
        return ((a instanceof String || typeof a == 'string') && !is_undefined(a) && !is_true(a) && !is_false(a));
    }
    function is_function(a) {
        return (a instanceof Function || typeof a == 'function');
    }
    function is_boolean(a) {
        return (a instanceof Boolean || typeof a == 'boolean' || is_true(a) || is_false(a));
    }
    function is_true(a) {
        return (a === true || a === 'true');
    }
    function is_false(a) {
        return (a === false || a === 'false');
    }
    function is_percentage(x) {
        return (is_string(x) && x.slice(-1) == '%');
    }


    function getTime() {
        return new Date().getTime();
    }

    function deprecated( o, n ) {
        debug(true, o+' is DEPRECATED, support for it will be removed. Use '+n+' instead.');
    }
    function debug(d, m) {
        if (is_object(d))
        {
            var s = ' ('+d.selector+')';
            d = d.debug;
        }
        else
        {
            var s = '';
        }
        if (!d)
        {
            return false;
        }

        if (is_string(m))
        {
            m = 'carouFredSel'+s+': ' + m;
        }
        else
        {
            m = ['carouFredSel'+s+':', m];
        }

        if (window.console && window.console.log)
        {
            window.console.log(m);
        }
        return false;
    }



    //	EASING FUNCTIONS

    $.extend($.easing, {
        'quadratic': function(t) {
            var t2 = t * t;
            return t * (-t2 * t + 4 * t2 - 6 * t + 4);
        },
        'cubic': function(t) {
            return t * (4 * t * t - 9 * t + 6);
        },
        'elastic': function(t) {
            var t2 = t * t;
            return t * (33 * t2 * t2 - 106 * t2 * t + 126 * t2 - 67 * t + 15);
        }
    });


})(jQuery);

(function( $, undefined ) {

    /*
     * Slider object.
     */
    $.Slider 				= function( options, element ) {

        this.$el	= $( element );

        this._init( options );

    };

    $.Slider.defaults 		= {
        current		: 0, 	// index of current slide
        bgincrement	: 50,	// increment the bg position (parallax effect) when sliding
        autoplay	: false,// slideshow on / off
        interval	: 4000  // time between transitions
    };

    $.Slider.prototype 	= {
        _init 				: function( options ) {

            this.options 		= $.extend( true, {}, $.Slider.defaults, options );

            this.$slides		= this.$el.children('div.da-slide');
            this.slidesCount	= this.$slides.length;

            this.current		= this.options.current;

            if( this.current < 0 || this.current >= this.slidesCount ) {

                this.current	= 0;

            }

            this.$slides.eq( this.current ).addClass( 'da-slide-current' );

            var $navigation		= $( '<nav class="da-dots"/>' );
            for( var i = 0; i < this.slidesCount; ++i ) {

                $navigation.append( '<span/>' );

            }
            $navigation.appendTo( this.$el );

            this.$pages			= this.$el.find('nav.da-dots > span');
            this.$navNext		= this.$el.find('span.da-arrows-next');
            this.$navPrev		= this.$el.find('span.da-arrows-prev');

            this.isAnimating	= false;

            this.bgpositer		= 0;

            this.cssAnimations	= Modernizr.cssanimations;
            this.cssTransitions	= Modernizr.csstransitions;

            if( !this.cssAnimations || !this.cssAnimations ) {

                this.$el.addClass( 'da-slider-fb' );

            }

            this._updatePage();

            // load the events
            this._loadEvents();

            // slideshow
            if( this.options.autoplay ) {

                this._startSlideshow();

            }

        },
        _navigate			: function( page, dir ) {

            var $current	= this.$slides.eq( this.current ), $next, _self = this;

            if( this.current === page || this.isAnimating ) return false;

            this.isAnimating	= true;

            // check dir
            var classTo, classFrom, d;

            if( !dir ) {

                ( page > this.current ) ? d = 'next' : d = 'prev';

            }
            else {

                d = dir;

            }

            if( this.cssAnimations && this.cssAnimations ) {

                if( d === 'next' ) {

                    classTo		= 'da-slide-toleft';
                    classFrom	= 'da-slide-fromright';
                    ++this.bgpositer;

                }
                else {

                    classTo		= 'da-slide-toright';
                    classFrom	= 'da-slide-fromleft';
                    --this.bgpositer;

                }

                this.$el.css( 'background-position' , this.bgpositer * this.options.bgincrement + '% 0%' );

            }

            this.current	= page;

            $next			= this.$slides.eq( this.current );

            if( this.cssAnimations && this.cssAnimations ) {

                var rmClasses	= 'da-slide-toleft da-slide-toright da-slide-fromleft da-slide-fromright';
                $current.removeClass( rmClasses );
                $next.removeClass( rmClasses );

                $current.addClass( classTo );
                $next.addClass( classFrom );

                $current.removeClass( 'da-slide-current' );
                $next.addClass( 'da-slide-current' );

            }

            // fallback
            if( !this.cssAnimations || !this.cssAnimations ) {

                $next.css( 'left', ( d === 'next' ) ? '100%' : '-100%' ).stop().animate( {
                    left : '0%'
                }, 1000, function() {
                    _self.isAnimating = false;
                });

                $current.stop().animate( {
                    left : ( d === 'next' ) ? '-100%' : '100%'
                }, 1000, function() {
                    $current.removeClass( 'da-slide-current' );
                });

            }

            this._updatePage();

        },
        _updatePage			: function() {

            this.$pages.removeClass( 'da-dots-current' );
            this.$pages.eq( this.current ).addClass( 'da-dots-current' );

        },
        _startSlideshow		: function() {

            var _self	= this;

            this.slideshow	= setTimeout( function() {

                var page = ( _self.current < _self.slidesCount - 1 ) ? page = _self.current + 1 : page = 0;
                _self._navigate( page, 'next' );

                if( _self.options.autoplay ) {

                    _self._startSlideshow();

                }

            }, this.options.interval );

        },
        page				: function( idx ) {

            if( idx >= this.slidesCount || idx < 0 ) {

                return false;

            }

            if( this.options.autoplay ) {

                clearTimeout( this.slideshow );
                this.options.autoplay	= false;

            }

            this._navigate( idx );

        },
        _loadEvents			: function() {

            var _self = this;

            this.$pages.on( 'click.cslider', function( event ) {

                _self.page( $(this).index() );
                return false;

            });

            this.$navNext.on( 'click.cslider', function( event ) {

                if( _self.options.autoplay ) {

                    clearTimeout( _self.slideshow );
                    _self.options.autoplay	= false;

                }

                var page = ( _self.current < _self.slidesCount - 1 ) ? page = _self.current + 1 : page = 0;
                _self._navigate( page, 'next' );
                return false;

            });

            this.$navPrev.on( 'click.cslider', function( event ) {

                if( _self.options.autoplay ) {

                    clearTimeout( _self.slideshow );
                    _self.options.autoplay	= false;

                }

                var page = ( _self.current > 0 ) ? page = _self.current - 1 : page = _self.slidesCount - 1;
                _self._navigate( page, 'prev' );
                return false;

            });

            if( this.cssTransitions ) {

                if( !this.options.bgincrement ) {

                    this.$el.on( 'webkitAnimationEnd.cslider animationend.cslider OAnimationEnd.cslider', function( event ) {

                        if( event.originalEvent.animationName === 'toRightAnim4' || event.originalEvent.animationName === 'toLeftAnim4' ) {

                            _self.isAnimating	= false;

                        }

                    });

                }
                else {

                    this.$el.on( 'webkitTransitionEnd.cslider transitionend.cslider OTransitionEnd.cslider', function( event ) {

                        if( event.target.id === _self.$el.attr( 'id' ) )
                            _self.isAnimating	= false;

                    });

                }

            }

        }
    };

    var logError 			= function( message ) {
        if ( this.console ) {
            console.error( message );
        }
    };

    $.fn.cslider			= function( options ) {

        if ( typeof options === 'string' ) {

            var args = Array.prototype.slice.call( arguments, 1 );

            this.each(function() {

                var instance = $.data( this, 'cslider' );

                if ( !instance ) {
                    logError( "cannot call methods on cslider prior to initialization; " +
                        "attempted to call method '" + options + "'" );
                    return;
                }

                if ( !$.isFunction( instance[options] ) || options.charAt(0) === "_" ) {
                    logError( "no such method '" + options + "' for cslider instance" );
                    return;
                }

                instance[ options ].apply( instance, args );

            });

        }
        else {

            this.each(function() {

                var instance = $.data( this, 'cslider' );
                if ( !instance ) {
                    $.data( this, 'cslider', new $.Slider( options, this ) );
                }
            });

        }

        return this;

    };

})( jQuery );

/* Modernizr 2.5.3 (Custom Build) | MIT & BSD
 * Build: http://www.modernizr.com/download/#-cssanimations-csstransitions-shiv-cssclasses-testprop-testallprops-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function x(a){j.cssText=a}function y(a,b){return x(prefixes.join(a+";")+(b||""))}function z(a,b){return typeof a===b}function A(a,b){return!!~(""+a).indexOf(b)}function B(a,b){for(var d in a)if(j[a[d]]!==c)return b=="pfx"?a[d]:!0;return!1}function C(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:z(f,"function")?f.bind(d||b):f}return!1}function D(a,b,c){var d=a.charAt(0).toUpperCase()+a.substr(1),e=(a+" "+n.join(d+" ")+d).split(" ");return z(b,"string")||z(b,"undefined")?B(e,b):(e=(a+" "+o.join(d+" ")+d).split(" "),C(e,b,c))}var d="2.5.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m="Webkit Moz O ms",n=m.split(" "),o=m.toLowerCase().split(" "),p={},q={},r={},s=[],t=s.slice,u,v={}.hasOwnProperty,w;!z(v,"undefined")&&!z(v.call,"undefined")?w=function(a,b){return v.call(a,b)}:w=function(a,b){return b in a&&z(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=t.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(t.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(t.call(arguments)))};return e}),p.cssanimations=function(){return D("animationName")},p.csstransitions=function(){return D("transition")};for(var E in p)w(p,E)&&(u=E.toLowerCase(),e[u]=p[E](),s.push((e[u]?"":"no-")+u));return x(""),i=k=null,function(a,b){function g(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function h(){var a=k.elements;return typeof a=="string"?a.split(" "):a}function i(a){var b={},c=a.createElement,e=a.createDocumentFragment,f=e();a.createElement=function(a){var e=(b[a]||(b[a]=c(a))).cloneNode();return k.shivMethods&&e.canHaveChildren&&!d.test(a)?f.appendChild(e):e},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+h().join().replace(/\w+/g,function(a){return b[a]=c(a),f.createElement(a),'c("'+a+'")'})+");return n}")(k,f)}function j(a){var b;return a.documentShived?a:(k.shivCSS&&!e&&(b=!!g(a,"article,aside,details,figcaption,figure,footer,header,hgroup,nav,section{display:block}audio{display:none}canvas,video{display:inline-block;*display:inline;*zoom:1}[hidden]{display:none}audio[controls]{display:inline-block;*display:inline;*zoom:1}mark{background:#FF0;color:#000}")),f||(b=!i(a)),b&&(a.documentShived=b),a)}var c=a.html5||{},d=/^<|^(?:button|form|map|select|textarea)$/i,e,f;(function(){var a=b.createElement("a");a.innerHTML="<xyz></xyz>",e="hidden"in a,f=a.childNodes.length==1||function(){try{b.createElement("a")}catch(a){return!0}var c=b.createDocumentFragment();return typeof c.cloneNode=="undefined"||typeof c.createDocumentFragment=="undefined"||typeof c.createElement=="undefined"}()})();var k={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:j};a.html5=k,j(b)}(this,b),e._version=d,e._domPrefixes=o,e._cssomPrefixes=n,e.testProp=function(a){return B([a])},e.testAllProps=D,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+s.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return o.call(a)=="[object Function]"}function e(a){return typeof a=="string"}function f(){}function g(a){return!a||a=="loaded"||a=="complete"||a=="uninitialized"}function h(){var a=p.shift();q=1,a?a.t?m(function(){(a.t=="c"?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){a!="img"&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l={},o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};y[c]===1&&(r=1,y[c]=[],l=b.createElement(a)),a=="object"?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),a!="img"&&(r||y[c]===2?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i(b=="c"?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),p.length==1&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&o.call(a.opera)=="[object Opera]",l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return o.call(a)=="[object Array]"},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,i){var j=b(a),l=j.autoCallback;j.url.split(".").pop().split("?").shift(),j.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]||h),j.instead?j.instead(a,e,f,g,i):(y[j.url]?j.noexec=!0:y[j.url]=1,f.load(j.url,j.forceCSS||!j.forceJS&&"css"==j.url.split(".").pop().split("?").shift()?"c":c,j.noexec,j.attrs,j.timeout),(d(e)||d(l))&&f.load(function(){k(),e&&e(j.origUrl,i,g),l&&l(j.origUrl,i,g),y[j.url]=2})))}function i(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var j,l,m=this.yepnope.loader;if(e(a))g(a,0,m,0);else if(w(a))for(j=0;j<a.length;j++)l=a[j],e(l)?g(l,0,m,0):w(l)?B(l):Object(l)===l&&i(l,m);else Object(a)===a&&i(a,m)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,b.readyState==null&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};

