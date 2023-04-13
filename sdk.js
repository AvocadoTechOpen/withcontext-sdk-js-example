var WithContextWidgetSDK = (function () {
    'use strict';

    /******************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (g && (g = 0, op[0] && (_ = 0)), _) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
            }
        }
        return to.concat(ar || Array.prototype.slice.call(from));
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    }

    var n$2,l$4,u$3,t$3,r$2,o$3,f$3,c$3={},s$4=[],a$3=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function h$1(n,l){for(var u in l)n[u]=l[u];return n}function v$3(n){var l=n.parentNode;l&&l.removeChild(n);}function y$1(l,u,i){var t,r,o,f={};for(o in u)"key"==o?t=u[o]:"ref"==o?r=u[o]:f[o]=u[o];if(arguments.length>2&&(f.children=arguments.length>3?n$2.call(arguments,2):i),"function"==typeof l&&null!=l.defaultProps)for(o in l.defaultProps)void 0===f[o]&&(f[o]=l.defaultProps[o]);return p$4(l,f,t,r,null)}function p$4(n,i,t,r,o){var f={type:n,props:i,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++u$3:o};return null==o&&null!=l$4.vnode&&l$4.vnode(f),f}function _$2(n){return n.children}function k$1(n,l){this.props=n,this.context=l;}function b$2(n,l){if(null==l)return n.__?b$2(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return "function"==typeof n.type?b$2(n):null}function g$3(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return g$3(n)}}function m$2(n){(!n.__d&&(n.__d=!0)&&t$3.push(n)&&!w$2.__r++||r$2!==l$4.debounceRendering)&&((r$2=l$4.debounceRendering)||o$3)(w$2);}function w$2(){var n,l,u,i,r,o,e,c;for(t$3.sort(f$3);n=t$3.shift();)n.__d&&(l=t$3.length,i=void 0,r=void 0,e=(o=(u=n).__v).__e,(c=u.__P)&&(i=[],(r=h$1({},o)).__v=o.__v+1,L(c,o,r,u.__n,void 0!==c.ownerSVGElement,null!=o.__h?[e]:null,i,null==e?b$2(o):e,o.__h),M(i,o),o.__e!=e&&g$3(o)),t$3.length>l&&t$3.sort(f$3));w$2.__r=0;}function x(n,l,u,i,t,r,o,f,e,a){var h,v,y,d,k,g,m,w=i&&i.__k||s$4,x=w.length;for(u.__k=[],h=0;h<l.length;h++)if(null!=(d=u.__k[h]=null==(d=l[h])||"boolean"==typeof d||"function"==typeof d?null:"string"==typeof d||"number"==typeof d||"bigint"==typeof d?p$4(null,d,null,null,d):Array.isArray(d)?p$4(_$2,{children:d},null,null,null):d.__b>0?p$4(d.type,d.props,d.key,d.ref?d.ref:null,d.__v):d)){if(d.__=u,d.__b=u.__b+1,null===(y=w[h])||y&&d.key==y.key&&d.type===y.type)w[h]=void 0;else for(v=0;v<x;v++){if((y=w[v])&&d.key==y.key&&d.type===y.type){w[v]=void 0;break}y=null;}L(n,d,y=y||c$3,t,r,o,f,e,a),k=d.__e,(v=d.ref)&&y.ref!=v&&(m||(m=[]),y.ref&&m.push(y.ref,null,d),m.push(v,d.__c||k,d)),null!=k?(null==g&&(g=k),"function"==typeof d.type&&d.__k===y.__k?d.__d=e=A(d,e,n):e=C(n,d,y,w,k,e),"function"==typeof u.type&&(u.__d=e)):e&&y.__e==e&&e.parentNode!=n&&(e=b$2(y));}for(u.__e=g,h=x;h--;)null!=w[h]&&("function"==typeof u.type&&null!=w[h].__e&&w[h].__e==u.__d&&(u.__d=$(i).nextSibling),S(w[h],w[h]));if(m)for(h=0;h<m.length;h++)O(m[h],m[++h],m[++h]);}function A(n,l,u){for(var i,t=n.__k,r=0;t&&r<t.length;r++)(i=t[r])&&(i.__=n,l="function"==typeof i.type?A(i,l,u):C(u,i,i,t,i.__e,l));return l}function C(n,l,u,i,t,r){var o,f,e;if(void 0!==l.__d)o=l.__d,l.__d=void 0;else if(null==u||t!=r||null==t.parentNode)n:if(null==r||r.parentNode!==n)n.appendChild(t),o=null;else {for(f=r,e=0;(f=f.nextSibling)&&e<i.length;e+=1)if(f==t)break n;n.insertBefore(t,r),o=r;}return void 0!==o?o:t.nextSibling}function $(n){var l,u,i;if(null==n.type||"string"==typeof n.type)return n.__e;if(n.__k)for(l=n.__k.length-1;l>=0;l--)if((u=n.__k[l])&&(i=$(u)))return i;return null}function H(n,l,u,i,t){var r;for(r in u)"children"===r||"key"===r||r in l||T(n,r,null,u[r],i);for(r in l)t&&"function"!=typeof l[r]||"children"===r||"key"===r||"value"===r||"checked"===r||u[r]===l[r]||T(n,r,l[r],u[r],i);}function I(n,l,u){"-"===l[0]?n.setProperty(l,null==u?"":u):n[l]=null==u?"":"number"!=typeof u||a$3.test(l)?u:u+"px";}function T(n,l,u,i,t){var r;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else {if("string"==typeof i&&(n.style.cssText=i=""),i)for(l in i)u&&l in u||I(n.style,l,"");if(u)for(l in u)i&&u[l]===i[l]||I(n.style,l,u[l]);}else if("o"===l[0]&&"n"===l[1])r=l!==(l=l.replace(/Capture$/,"")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+r]=u,u?i||n.addEventListener(l,r?z$1:j$2,r):n.removeEventListener(l,r?z$1:j$2,r);else if("dangerouslySetInnerHTML"!==l){if(t)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!==l&&"height"!==l&&"href"!==l&&"list"!==l&&"form"!==l&&"tabIndex"!==l&&"download"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null==u||!1===u&&"-"!==l[4]?n.removeAttribute(l):n.setAttribute(l,u));}}function j$2(n){return this.l[n.type+!1](l$4.event?l$4.event(n):n)}function z$1(n){return this.l[n.type+!0](l$4.event?l$4.event(n):n)}function L(n,u,i,t,r,o,f,e,c){var s,a,v,y,p,d,b,g,m,w,A,P,C,$,H,I=u.type;if(void 0!==u.constructor)return null;null!=i.__h&&(c=i.__h,e=u.__e=i.__e,u.__h=null,o=[e]),(s=l$4.__b)&&s(u);try{n:if("function"==typeof I){if(g=u.props,m=(s=I.contextType)&&t[s.__c],w=s?m?m.props.value:s.__:t,i.__c?b=(a=u.__c=i.__c).__=a.__E:("prototype"in I&&I.prototype.render?u.__c=a=new I(g,w):(u.__c=a=new k$1(g,w),a.constructor=I,a.render=q),m&&m.sub(a),a.props=g,a.state||(a.state={}),a.context=w,a.__n=t,v=a.__d=!0,a.__h=[],a._sb=[]),null==a.__s&&(a.__s=a.state),null!=I.getDerivedStateFromProps&&(a.__s==a.state&&(a.__s=h$1({},a.__s)),h$1(a.__s,I.getDerivedStateFromProps(g,a.__s))),y=a.props,p=a.state,a.__v=u,v)null==I.getDerivedStateFromProps&&null!=a.componentWillMount&&a.componentWillMount(),null!=a.componentDidMount&&a.__h.push(a.componentDidMount);else {if(null==I.getDerivedStateFromProps&&g!==y&&null!=a.componentWillReceiveProps&&a.componentWillReceiveProps(g,w),!a.__e&&null!=a.shouldComponentUpdate&&!1===a.shouldComponentUpdate(g,a.__s,w)||u.__v===i.__v){for(u.__v!==i.__v&&(a.props=g,a.state=a.__s,a.__d=!1),a.__e=!1,u.__e=i.__e,u.__k=i.__k,u.__k.forEach(function(n){n&&(n.__=u);}),A=0;A<a._sb.length;A++)a.__h.push(a._sb[A]);a._sb=[],a.__h.length&&f.push(a);break n}null!=a.componentWillUpdate&&a.componentWillUpdate(g,a.__s,w),null!=a.componentDidUpdate&&a.__h.push(function(){a.componentDidUpdate(y,p,d);});}if(a.context=w,a.props=g,a.__P=n,P=l$4.__r,C=0,"prototype"in I&&I.prototype.render){for(a.state=a.__s,a.__d=!1,P&&P(u),s=a.render(a.props,a.state,a.context),$=0;$<a._sb.length;$++)a.__h.push(a._sb[$]);a._sb=[];}else do{a.__d=!1,P&&P(u),s=a.render(a.props,a.state,a.context),a.state=a.__s;}while(a.__d&&++C<25);a.state=a.__s,null!=a.getChildContext&&(t=h$1(h$1({},t),a.getChildContext())),v||null==a.getSnapshotBeforeUpdate||(d=a.getSnapshotBeforeUpdate(y,p)),H=null!=s&&s.type===_$2&&null==s.key?s.props.children:s,x(n,Array.isArray(H)?H:[H],u,i,t,r,o,f,e,c),a.base=u.__e,u.__h=null,a.__h.length&&f.push(a),b&&(a.__E=a.__=null),a.__e=!1;}else null==o&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=N(i.__e,u,i,t,r,o,f,c);(s=l$4.diffed)&&s(u);}catch(n){u.__v=null,(c||null!=o)&&(u.__e=e,u.__h=!!c,o[o.indexOf(e)]=null),l$4.__e(n,u,i);}}function M(n,u){l$4.__c&&l$4.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u);});}catch(n){l$4.__e(n,u.__v);}});}function N(l,u,i,t,r,o,f,e){var s,a,h,y=i.props,p=u.props,d=u.type,_=0;if("svg"===d&&(r=!0),null!=o)for(;_<o.length;_++)if((s=o[_])&&"setAttribute"in s==!!d&&(d?s.localName===d:3===s.nodeType)){l=s,o[_]=null;break}if(null==l){if(null===d)return document.createTextNode(p);l=r?document.createElementNS("http://www.w3.org/2000/svg",d):document.createElement(d,p.is&&p),o=null,e=!1;}if(null===d)y===p||e&&l.data===p||(l.data=p);else {if(o=o&&n$2.call(l.childNodes),a=(y=i.props||c$3).dangerouslySetInnerHTML,h=p.dangerouslySetInnerHTML,!e){if(null!=o)for(y={},_=0;_<l.attributes.length;_++)y[l.attributes[_].name]=l.attributes[_].value;(h||a)&&(h&&(a&&h.__html==a.__html||h.__html===l.innerHTML)||(l.innerHTML=h&&h.__html||""));}if(H(l,p,y,r,e),h)u.__k=[];else if(_=u.props.children,x(l,Array.isArray(_)?_:[_],u,i,t,r&&"foreignObject"!==d,o,f,o?o[0]:i.__k&&b$2(i,0),e),null!=o)for(_=o.length;_--;)null!=o[_]&&v$3(o[_]);e||("value"in p&&void 0!==(_=p.value)&&(_!==l.value||"progress"===d&&!_||"option"===d&&_!==y.value)&&T(l,"value",_,y.value,!1),"checked"in p&&void 0!==(_=p.checked)&&_!==l.checked&&T(l,"checked",_,y.checked,!1));}return l}function O(n,u,i){try{"function"==typeof n?n(u):n.current=u;}catch(n){l$4.__e(n,i);}}function S(n,u,i){var t,r;if(l$4.unmount&&l$4.unmount(n),(t=n.ref)&&(t.current&&t.current!==n.__e||O(t,null,u)),null!=(t=n.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount();}catch(n){l$4.__e(n,u);}t.base=t.__P=null,n.__c=void 0;}if(t=n.__k)for(r=0;r<t.length;r++)t[r]&&S(t[r],u,i||"function"!=typeof n.type);i||null==n.__e||v$3(n.__e),n.__=n.__e=n.__d=void 0;}function q(n,l,u){return this.constructor(n,u)}function B$1(u,i,t){var r,o,f;l$4.__&&l$4.__(u,i),o=(r="function"==typeof t)?null:t&&t.__k||i.__k,f=[],L(i,u=(!r&&t||i).__k=y$1(_$2,null,[u]),o||c$3,c$3,void 0!==i.ownerSVGElement,!r&&t?[t]:o?null:i.firstChild?n$2.call(i.childNodes):null,f,!r&&t?t:o?o.__e:i.firstChild,r),M(f,u);}n$2=s$4.slice,l$4={__e:function(n,l,u,i){for(var t,r,o;l=l.__;)if((t=l.__c)&&!t.__)try{if((r=t.constructor)&&null!=r.getDerivedStateFromError&&(t.setState(r.getDerivedStateFromError(n)),o=t.__d),null!=t.componentDidCatch&&(t.componentDidCatch(n,i||{}),o=t.__d),o)return t.__E=t}catch(l){n=l;}throw n}},u$3=0,k$1.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=h$1({},this.state),"function"==typeof n&&(n=n(h$1({},u),this.props)),n&&h$1(u,n),null!=n&&this.__v&&(l&&this._sb.push(l),m$2(this));},k$1.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),m$2(this));},k$1.prototype.render=_$2,t$3=[],o$3="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,f$3=function(n,l){return n.__v.__b-l.__v.__b},w$2.__r=0;

    var t$2,r$1,u$2,i$2,o$2=0,f$2=[],c$2=[],e$2=l$4.__b,a$2=l$4.__r,v$2=l$4.diffed,l$3=l$4.__c,m$1=l$4.unmount;function d$3(t,u){l$4.__h&&l$4.__h(r$1,t,o$2||u),o$2=0;var i=r$1.__H||(r$1.__H={__:[],__h:[]});return t>=i.__.length&&i.__.push({__V:c$2}),i.__[t]}function h(n){return o$2=1,s$3(B,n)}function s$3(n,u,i){var o=d$3(t$2++,2);if(o.t=n,!o.__c&&(o.__=[i?i(u):B(void 0,u),function(n){var t=o.__N?o.__N[0]:o.__[0],r=o.t(t,n);t!==r&&(o.__N=[r,o.__[1]],o.__c.setState({}));}],o.__c=r$1,!r$1.u)){var f=function(n,t,r){if(!o.__c.__H)return !0;var u=o.__c.__H.__.filter(function(n){return n.__c});if(u.every(function(n){return !n.__N}))return !c||c.call(this,n,t,r);var i=!1;return u.forEach(function(n){if(n.__N){var t=n.__[0];n.__=n.__N,n.__N=void 0,t!==n.__[0]&&(i=!0);}}),!(!i&&o.__c.props===n)&&(!c||c.call(this,n,t,r))};r$1.u=!0;var c=r$1.shouldComponentUpdate,e=r$1.componentWillUpdate;r$1.componentWillUpdate=function(n,t,r){if(this.__e){var u=c;c=void 0,f(n,t,r),c=u;}e&&e.call(this,n,t,r);},r$1.shouldComponentUpdate=f;}return o.__N||o.__}function p$3(u,i){var o=d$3(t$2++,3);!l$4.__s&&z(o.__H,i)&&(o.__=u,o.i=i,r$1.__H.__h.push(o));}function _$1(n){return o$2=5,F(function(){return {current:n}},[])}function F(n,r){var u=d$3(t$2++,7);return z(u.__H,r)?(u.__V=n(),u.i=r,u.__h=n,u.__V):u.__}function b$1(){for(var t;t=f$2.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(k),t.__H.__h.forEach(w$1),t.__H.__h=[];}catch(r){t.__H.__h=[],l$4.__e(r,t.__v);}}l$4.__b=function(n){r$1=null,e$2&&e$2(n);},l$4.__r=function(n){a$2&&a$2(n),t$2=0;var i=(r$1=n.__c).__H;i&&(u$2===r$1?(i.__h=[],r$1.__h=[],i.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=c$2,n.__N=n.i=void 0;})):(i.__h.forEach(k),i.__h.forEach(w$1),i.__h=[])),u$2=r$1;},l$4.diffed=function(t){v$2&&v$2(t);var o=t.__c;o&&o.__H&&(o.__H.__h.length&&(1!==f$2.push(o)&&i$2===l$4.requestAnimationFrame||((i$2=l$4.requestAnimationFrame)||j$1)(b$1)),o.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==c$2&&(n.__=n.__V),n.i=void 0,n.__V=c$2;})),u$2=r$1=null;},l$4.__c=function(t,r){r.some(function(t){try{t.__h.forEach(k),t.__h=t.__h.filter(function(n){return !n.__||w$1(n)});}catch(u){r.some(function(n){n.__h&&(n.__h=[]);}),r=[],l$4.__e(u,t.__v);}}),l$3&&l$3(t,r);},l$4.unmount=function(t){m$1&&m$1(t);var r,u=t.__c;u&&u.__H&&(u.__H.__.forEach(function(n){try{k(n);}catch(n){r=n;}}),u.__H=void 0,r&&l$4.__e(r,u.__v));};var g$2="function"==typeof requestAnimationFrame;function j$1(n){var t,r=function(){clearTimeout(u),g$2&&cancelAnimationFrame(t),setTimeout(n);},u=setTimeout(r,100);g$2&&(t=requestAnimationFrame(r));}function k(n){var t=r$1,u=n.__c;"function"==typeof u&&(n.__c=void 0,u()),r$1=t;}function w$1(n){var t=r$1;n.__c=n.__(),r$1=t;}function z(n,t){return !n||n.length!==t.length||t.some(function(t,r){return t!==n[r]})}function B(n,t){return "function"==typeof t?t(n):t}

    let e$1={data:""},t$1=t=>"object"==typeof window?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||e$1,l$2=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,a$1=/\/\*[^]*?\*\/|  +/g,n$1=/\n+/g,o$1=(e,t)=>{let r="",l="",a="";for(let n in e){let c=e[n];"@"==n[0]?"i"==n[1]?r=n+" "+c+";":l+="f"==n[1]?o$1(c,n):n+"{"+o$1(c,"k"==n[1]?"":t)+"}":"object"==typeof c?l+=o$1(c,t?t.replace(/([^,])+/g,e=>n.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):n):null!=c&&(n=/^--/.test(n)?n:n.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=o$1.p?o$1.p(n,c):n+":"+c+";");}return r+(t&&a?t+"{"+a+"}":a)+l},c$1={},s$2=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+s$2(e[r]);return t}return e},i$1=(e,t,r,i,p)=>{let u=s$2(e),d=c$1[u]||(c$1[u]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return "go"+r})(u));if(!c$1[d]){let t=u!==e?e:(e=>{let t,r,o=[{}];for(;t=l$2.exec(e.replace(a$1,""));)t[4]?o.shift():t[3]?(r=t[3].replace(n$1," ").trim(),o.unshift(o[0][r]=o[0][r]||{})):o[0][t[1]]=t[2].replace(n$1," ").trim();return o[0]})(e);c$1[d]=o$1(p?{["@keyframes "+d]:t}:t,r?"":"."+d);}let f=r&&c$1.g?c$1.g:null;return r&&(c$1.g=c$1[d]),((e,t,r,l)=>{l?t.data=t.data.replace(l,e):-1===t.data.indexOf(e)&&(t.data=r?e+t.data:t.data+e);})(c$1[d],t,i,f),d},p$2=(e,t,r)=>e.reduce((e,l,a)=>{let n=t[a];if(n&&n.call){let e=n(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;n=t?"."+t:e&&"object"==typeof e?e.props?"":o$1(e,""):!1===e?"":e;}return e+l+(null==n?"":n)},"");function u$1(e){let r=this||{},l=e.call?e(r.p):e;return i$1(l.unshift?l.raw?p$2(l,[].slice.call(arguments,1),r.p):l.reduce((e,t)=>Object.assign(e,t&&t.call?t(r.p):t),{}):l,t$1(r.target),r.g,r.o,r.k)}let d$2,f$1,g$1;u$1.bind({g:1});u$1.bind({k:1});function m(e,t,r,l){o$1.p=t,d$2=e,f$1=r,g$1=l;}function j(e,t){let r=this||{};return function(){let l=arguments;function a(n,o){let c=Object.assign({},n),s=c.className||a.className;r.p=Object.assign({theme:f$1&&f$1()},c),r.o=/ *go\d+/.test(s),c.className=u$1.apply(r,l)+(s?" "+s:""),t&&(c.ref=o);let i=e;return e[0]&&(i=c.as||e,delete c.as),g$1&&i[0]&&g$1(c),d$2(i,c)}return t?t(a):a}}

    var logo = (y$1("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", style: { width: '24px', height: '24px' } },
        y$1("path", { fill: "currentColor", d: "m9.453 14.082 5.18 5.18a2.535 2.535 0 0 1 3.34.754 2.536 2.536 0 1 1-4.282.191L9 15.516a.4.4 0 0 0-.566 0l-1.801 1.8a.403.403 0 0 1-.278.114.403.403 0 0 1-.277-.114l-.39-.39a.403.403 0 0 1-.114-.278c0-.105.043-.203.114-.277l2.359-2.355c.375-.38.992-.348 1.406.066Zm5.586 6.531a1.202 1.202 0 1 0 1.702 1.7 1.202 1.202 0 0 0-1.702-1.7Zm-6.152-4.265 2.281 2.28a.667.667 0 1 1-.941.946L7.94 17.293a.676.676 0 0 1-.187-.652.679.679 0 0 1 .48-.48.676.676 0 0 1 .653.187ZM7.629 5.688l2.355 2.355c.38.379.348.996-.066 1.41l-5.18 5.18a2.536 2.536 0 0 1-.758 3.34 2.536 2.536 0 1 1-.188-4.281L8.485 9a.4.4 0 0 0 0-.566l-1.8-1.801a.387.387 0 0 1-.114-.278c0-.105.04-.203.114-.277l.39-.39a.394.394 0 0 1 .555 0Zm15.629.625c.894.902.984 2.324.215 3.332a2.534 2.534 0 0 1-3.266.664L15.516 15a.4.4 0 0 0 0 .566l1.8 1.801a.394.394 0 0 1 0 .555l-.39.387a.39.39 0 0 1-.278.117.39.39 0 0 1-.277-.117l-2.355-2.356c-.38-.375-.348-.992.066-1.406l5.18-5.18a2.538 2.538 0 0 1 3.996-3.055Zm-21.57 8.726a1.202 1.202 0 1 0 1.701 1.7 1.202 1.202 0 0 0-1.701-1.7Zm17.886-2.207a.667.667 0 0 1 0 .945L17.29 16.06a.665.665 0 0 1-.926-.016.67.67 0 0 1-.015-.93l2.28-2.281a.667.667 0 0 1 .946 0ZM7.652 7.942a.667.667 0 0 1 0 .945l-2.285 2.281a.667.667 0 0 1-.941-.945L6.707 7.94a.667.667 0 0 1 .945 0Zm2.25-7.2a2.53 2.53 0 0 1 .407 3.051L15 8.484a.4.4 0 0 0 .566 0l1.801-1.8a.394.394 0 0 1 .555 0l.387.39a.387.387 0 0 1 0 .555l-2.356 2.355c-.375.38-.992.348-1.406-.066l-5.18-5.18A2.536 2.536 0 1 1 9.902.742Zm10.711 6.52a1.2 1.2 0 1 0 1.681 1.715 1.2 1.2 0 0 0-1.68-1.715Zm-6.84-2.836 2.286 2.281a.676.676 0 0 1 .187.652.679.679 0 0 1-.48.48.676.676 0 0 1-.653-.187l-2.281-2.28a.667.667 0 0 1 .941-.946ZM7.262 1.687a1.202 1.202 0 1 0 1.701 1.7 1.202 1.202 0 0 0-1.701-1.7Zm0 0" })));
    var down = (y$1("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", "stroke-width": "1.5", stroke: "currentColor", style: { width: '24px', height: '24px' } },
        y$1("path", { "stroke-linecap": "round", "stroke-linejoin": "round", d: "M19.5 8.25l-7.5 7.5-7.5-7.5" })));
    var Button$1 = j('button')(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  color: white;\n  background-color: #00ab55;\n  border: none;\n  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\n  cursor: pointer;\n  transition: transform 200ms ease-in-out;\n  &:hover {\n    transform: scale(1.1);\n  }\n  &:active {\n    transform: scale(0.8);\n  }\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  color: white;\n  background-color: #00ab55;\n  border: none;\n  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\n  cursor: pointer;\n  transition: transform 200ms ease-in-out;\n  &:hover {\n    transform: scale(1.1);\n  }\n  &:active {\n    transform: scale(0.8);\n  }\n"])));
    function LauncherButton(_a) {
        var isOpen = _a.isOpen, onClick = _a.onClick;
        return y$1(Button$1, { onClick: onClick }, isOpen ? down : logo);
    }
    var templateObject_1$a;

    /**
     * Throw a given error.
     *
     * @param {Error|null|undefined} [error]
     *   Maybe error.
     * @returns {asserts error is null|undefined}
     */
    function bail(error) {
      if (error) {
        throw error
      }
    }

    /*!
     * Determine if an object is a Buffer
     *
     * @author   Feross Aboukhadijeh <https://feross.org>
     * @license  MIT
     */

    var isBuffer = function isBuffer (obj) {
      return obj != null && obj.constructor != null &&
        typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
    };

    var hasOwn = Object.prototype.hasOwnProperty;
    var toStr = Object.prototype.toString;
    var defineProperty = Object.defineProperty;
    var gOPD = Object.getOwnPropertyDescriptor;

    var isArray$1 = function isArray(arr) {
    	if (typeof Array.isArray === 'function') {
    		return Array.isArray(arr);
    	}

    	return toStr.call(arr) === '[object Array]';
    };

    var isPlainObject$1 = function isPlainObject(obj) {
    	if (!obj || toStr.call(obj) !== '[object Object]') {
    		return false;
    	}

    	var hasOwnConstructor = hasOwn.call(obj, 'constructor');
    	var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
    	// Not own constructor property must be Object
    	if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
    		return false;
    	}

    	// Own properties are enumerated firstly, so to speed up,
    	// if last one is own, then all properties are own.
    	var key;
    	for (key in obj) { /**/ }

    	return typeof key === 'undefined' || hasOwn.call(obj, key);
    };

    // If name is '__proto__', and Object.defineProperty is available, define __proto__ as an own property on target
    var setProperty = function setProperty(target, options) {
    	if (defineProperty && options.name === '__proto__') {
    		defineProperty(target, options.name, {
    			enumerable: true,
    			configurable: true,
    			value: options.newValue,
    			writable: true
    		});
    	} else {
    		target[options.name] = options.newValue;
    	}
    };

    // Return undefined instead of __proto__ if '__proto__' is not an own property
    var getProperty = function getProperty(obj, name) {
    	if (name === '__proto__') {
    		if (!hasOwn.call(obj, name)) {
    			return void 0;
    		} else if (gOPD) {
    			// In early versions of node, obj['__proto__'] is buggy when obj has
    			// __proto__ as an own property. Object.getOwnPropertyDescriptor() works.
    			return gOPD(obj, name).value;
    		}
    	}

    	return obj[name];
    };

    var extend = function extend() {
    	var options, name, src, copy, copyIsArray, clone;
    	var target = arguments[0];
    	var i = 1;
    	var length = arguments.length;
    	var deep = false;

    	// Handle a deep copy situation
    	if (typeof target === 'boolean') {
    		deep = target;
    		target = arguments[1] || {};
    		// skip the boolean and the target
    		i = 2;
    	}
    	if (target == null || (typeof target !== 'object' && typeof target !== 'function')) {
    		target = {};
    	}

    	for (; i < length; ++i) {
    		options = arguments[i];
    		// Only deal with non-null/undefined values
    		if (options != null) {
    			// Extend the base object
    			for (name in options) {
    				src = getProperty(target, name);
    				copy = getProperty(options, name);

    				// Prevent never-ending loop
    				if (target !== copy) {
    					// Recurse if we're merging plain objects or arrays
    					if (deep && copy && (isPlainObject$1(copy) || (copyIsArray = isArray$1(copy)))) {
    						if (copyIsArray) {
    							copyIsArray = false;
    							clone = src && isArray$1(src) ? src : [];
    						} else {
    							clone = src && isPlainObject$1(src) ? src : {};
    						}

    						// Never move original objects, clone them
    						setProperty(target, { name: name, newValue: extend(deep, clone, copy) });

    					// Don't bring in undefined values
    					} else if (typeof copy !== 'undefined') {
    						setProperty(target, { name: name, newValue: copy });
    					}
    				}
    			}
    		}
    	}

    	// Return the modified object
    	return target;
    };

    function isPlainObject(value) {
    	if (typeof value !== 'object' || value === null) {
    		return false;
    	}

    	const prototype = Object.getPrototypeOf(value);
    	return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in value) && !(Symbol.iterator in value);
    }

    /**
     * @typedef {(error?: Error|null|undefined, ...output: Array<any>) => void} Callback
     * @typedef {(...input: Array<any>) => any} Middleware
     *
     * @typedef {(...input: Array<any>) => void} Run
     *   Call all middleware.
     * @typedef {(fn: Middleware) => Pipeline} Use
     *   Add `fn` (middleware) to the list.
     * @typedef {{run: Run, use: Use}} Pipeline
     *   Middleware.
     */

    /**
     * Create new middleware.
     *
     * @returns {Pipeline}
     */
    function trough() {
      /** @type {Array<Middleware>} */
      const fns = [];
      /** @type {Pipeline} */
      const pipeline = {run, use};

      return pipeline

      /** @type {Run} */
      function run(...values) {
        let middlewareIndex = -1;
        /** @type {Callback} */
        const callback = values.pop();

        if (typeof callback !== 'function') {
          throw new TypeError('Expected function as last argument, not ' + callback)
        }

        next(null, ...values);

        /**
         * Run the next `fn`, or we’re done.
         *
         * @param {Error|null|undefined} error
         * @param {Array<any>} output
         */
        function next(error, ...output) {
          const fn = fns[++middlewareIndex];
          let index = -1;

          if (error) {
            callback(error);
            return
          }

          // Copy non-nullish input into values.
          while (++index < values.length) {
            if (output[index] === null || output[index] === undefined) {
              output[index] = values[index];
            }
          }

          // Save the newly created `output` for the next call.
          values = output;

          // Next or done.
          if (fn) {
            wrap$1(fn, next)(...output);
          } else {
            callback(null, ...output);
          }
        }
      }

      /** @type {Use} */
      function use(middelware) {
        if (typeof middelware !== 'function') {
          throw new TypeError(
            'Expected `middelware` to be a function, not ' + middelware
          )
        }

        fns.push(middelware);
        return pipeline
      }
    }

    /**
     * Wrap `middleware`.
     * Can be sync or async; return a promise, receive a callback, or return new
     * values and errors.
     *
     * @param {Middleware} middleware
     * @param {Callback} callback
     */
    function wrap$1(middleware, callback) {
      /** @type {boolean} */
      let called;

      return wrapped

      /**
       * Call `middleware`.
       * @this {any}
       * @param {Array<any>} parameters
       * @returns {void}
       */
      function wrapped(...parameters) {
        const fnExpectsCallback = middleware.length > parameters.length;
        /** @type {any} */
        let result;

        if (fnExpectsCallback) {
          parameters.push(done);
        }

        try {
          result = middleware.apply(this, parameters);
        } catch (error) {
          const exception = /** @type {Error} */ (error);

          // Well, this is quite the pickle.
          // `middleware` received a callback and called it synchronously, but that
          // threw an error.
          // The only thing left to do is to throw the thing instead.
          if (fnExpectsCallback && called) {
            throw exception
          }

          return done(exception)
        }

        if (!fnExpectsCallback) {
          if (result instanceof Promise) {
            result.then(then, done);
          } else if (result instanceof Error) {
            done(result);
          } else {
            then(result);
          }
        }
      }

      /**
       * Call `callback`, only once.
       * @type {Callback}
       */
      function done(error, ...output) {
        if (!called) {
          called = true;
          callback(error, ...output);
        }
      }

      /**
       * Call `done` with one value.
       *
       * @param {any} [value]
       */
      function then(value) {
        done(null, value);
      }
    }

    /**
     * @typedef {import('unist').Node} Node
     * @typedef {import('unist').Point} Point
     * @typedef {import('unist').Position} Position
     */

    /**
     * @typedef NodeLike
     * @property {string} type
     * @property {PositionLike | null | undefined} [position]
     *
     * @typedef PositionLike
     * @property {PointLike | null | undefined} [start]
     * @property {PointLike | null | undefined} [end]
     *
     * @typedef PointLike
     * @property {number | null | undefined} [line]
     * @property {number | null | undefined} [column]
     * @property {number | null | undefined} [offset]
     */

    /**
     * Serialize the positional info of a point, position (start and end points),
     * or node.
     *
     * @param {Node | NodeLike | Position | PositionLike | Point | PointLike | null | undefined} [value]
     *   Node, position, or point.
     * @returns {string}
     *   Pretty printed positional info of a node (`string`).
     *
     *   In the format of a range `ls:cs-le:ce` (when given `node` or `position`)
     *   or a point `l:c` (when given `point`), where `l` stands for line, `c` for
     *   column, `s` for `start`, and `e` for end.
     *   An empty string (`''`) is returned if the given value is neither `node`,
     *   `position`, nor `point`.
     */
    function stringifyPosition(value) {
      // Nothing.
      if (!value || typeof value !== 'object') {
        return ''
      }

      // Node.
      if ('position' in value || 'type' in value) {
        return position$1(value.position)
      }

      // Position.
      if ('start' in value || 'end' in value) {
        return position$1(value)
      }

      // Point.
      if ('line' in value || 'column' in value) {
        return point$2(value)
      }

      // ?
      return ''
    }

    /**
     * @param {Point | PointLike | null | undefined} point
     * @returns {string}
     */
    function point$2(point) {
      return index(point && point.line) + ':' + index(point && point.column)
    }

    /**
     * @param {Position | PositionLike | null | undefined} pos
     * @returns {string}
     */
    function position$1(pos) {
      return point$2(pos && pos.start) + '-' + point$2(pos && pos.end)
    }

    /**
     * @param {number | null | undefined} value
     * @returns {number}
     */
    function index(value) {
      return value && typeof value === 'number' ? value : 1
    }

    /**
     * @typedef {import('unist').Node} Node
     * @typedef {import('unist').Position} Position
     * @typedef {import('unist').Point} Point
     * @typedef {object & {type: string, position?: Position | undefined}} NodeLike
     */

    /**
     * Message.
     */
    class VFileMessage extends Error {
      /**
       * Create a message for `reason` at `place` from `origin`.
       *
       * When an error is passed in as `reason`, the `stack` is copied.
       *
       * @param {string | Error | VFileMessage} reason
       *   Reason for message, uses the stack and message of the error if given.
       *
       *   > 👉 **Note**: you should use markdown.
       * @param {Node | NodeLike | Position | Point | null | undefined} [place]
       *   Place in file where the message occurred.
       * @param {string | null | undefined} [origin]
       *   Place in code where the message originates (example:
       *   `'my-package:my-rule'` or `'my-rule'`).
       * @returns
       *   Instance of `VFileMessage`.
       */
      // To do: next major: expose `undefined` everywhere instead of `null`.
      constructor(reason, place, origin) {
        /** @type {[string | null, string | null]} */
        const parts = [null, null];
        /** @type {Position} */
        let position = {
          // @ts-expect-error: we always follows the structure of `position`.
          start: {line: null, column: null},
          // @ts-expect-error: "
          end: {line: null, column: null}
        };

        super();

        if (typeof place === 'string') {
          origin = place;
          place = undefined;
        }

        if (typeof origin === 'string') {
          const index = origin.indexOf(':');

          if (index === -1) {
            parts[1] = origin;
          } else {
            parts[0] = origin.slice(0, index);
            parts[1] = origin.slice(index + 1);
          }
        }

        if (place) {
          // Node.
          if ('type' in place || 'position' in place) {
            if (place.position) {
              // To do: next major: deep clone.
              // @ts-expect-error: looks like a position.
              position = place.position;
            }
          }
          // Position.
          else if ('start' in place || 'end' in place) {
            // @ts-expect-error: looks like a position.
            // To do: next major: deep clone.
            position = place;
          }
          // Point.
          else if ('line' in place || 'column' in place) {
            // To do: next major: deep clone.
            position.start = place;
          }
        }

        // Fields from `Error`.
        /**
         * Serialized positional info of error.
         *
         * On normal errors, this would be something like `ParseError`, buit in
         * `VFile` messages we use this space to show where an error happened.
         */
        this.name = stringifyPosition(place) || '1:1';

        /**
         * Reason for message.
         *
         * @type {string}
         */
        this.message = typeof reason === 'object' ? reason.message : reason;

        /**
         * Stack of message.
         *
         * This is used by normal errors to show where something happened in
         * programming code, irrelevant for `VFile` messages,
         *
         * @type {string}
         */
        this.stack = '';

        if (typeof reason === 'object' && reason.stack) {
          this.stack = reason.stack;
        }

        /**
         * Reason for message.
         *
         * > 👉 **Note**: you should use markdown.
         *
         * @type {string}
         */
        this.reason = this.message;

        /* eslint-disable no-unused-expressions */
        /**
         * State of problem.
         *
         * * `true` — marks associated file as no longer processable (error)
         * * `false` — necessitates a (potential) change (warning)
         * * `null | undefined` — for things that might not need changing (info)
         *
         * @type {boolean | null | undefined}
         */
        this.fatal;

        /**
         * Starting line of error.
         *
         * @type {number | null}
         */
        this.line = position.start.line;

        /**
         * Starting column of error.
         *
         * @type {number | null}
         */
        this.column = position.start.column;

        /**
         * Full unist position.
         *
         * @type {Position | null}
         */
        this.position = position;

        /**
         * Namespace of message (example: `'my-package'`).
         *
         * @type {string | null}
         */
        this.source = parts[0];

        /**
         * Category of message (example: `'my-rule'`).
         *
         * @type {string | null}
         */
        this.ruleId = parts[1];

        /**
         * Path of a file (used throughout the `VFile` ecosystem).
         *
         * @type {string | null}
         */
        this.file;

        // The following fields are “well known”.
        // Not standard.
        // Feel free to add other non-standard fields to your messages.

        /**
         * Specify the source value that’s being reported, which is deemed
         * incorrect.
         *
         * @type {string | null}
         */
        this.actual;

        /**
         * Suggest acceptable values that can be used instead of `actual`.
         *
         * @type {Array<string> | null}
         */
        this.expected;

        /**
         * Link to docs for the message.
         *
         * > 👉 **Note**: this must be an absolute URL that can be passed as `x`
         * > to `new URL(x)`.
         *
         * @type {string | null}
         */
        this.url;

        /**
         * Long form description of the message (you should use markdown).
         *
         * @type {string | null}
         */
        this.note;
        /* eslint-enable no-unused-expressions */
      }
    }

    VFileMessage.prototype.file = '';
    VFileMessage.prototype.name = '';
    VFileMessage.prototype.reason = '';
    VFileMessage.prototype.message = '';
    VFileMessage.prototype.stack = '';
    VFileMessage.prototype.fatal = null;
    VFileMessage.prototype.column = null;
    VFileMessage.prototype.line = null;
    VFileMessage.prototype.source = null;
    VFileMessage.prototype.ruleId = null;
    VFileMessage.prototype.position = null;

    // Copyright Joyent, Inc. and other Node contributors.
    //
    // Permission is hereby granted, free of charge, to any person obtaining a
    // copy of this software and associated documentation files (the
    // "Software"), to deal in the Software without restriction, including
    // without limitation the rights to use, copy, modify, merge, publish,
    // distribute, sublicense, and/or sell copies of the Software, and to permit
    // persons to whom the Software is furnished to do so, subject to the
    // following conditions:
    //
    // The above copyright notice and this permission notice shall be included
    // in all copies or substantial portions of the Software.
    //
    // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
    // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
    // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
    // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
    // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
    // USE OR OTHER DEALINGS IN THE SOFTWARE.

    // resolves . and .. elements in a path array with directory names there
    // must be no slashes, empty elements, or device names (c:\) in the array
    // (so also no leading and trailing slashes - it does not distinguish
    // relative and absolute paths)
    function normalizeArray(parts, allowAboveRoot) {
      // if the path tries to go above the root, `up` ends up > 0
      var up = 0;
      for (var i = parts.length - 1; i >= 0; i--) {
        var last = parts[i];
        if (last === '.') {
          parts.splice(i, 1);
        } else if (last === '..') {
          parts.splice(i, 1);
          up++;
        } else if (up) {
          parts.splice(i, 1);
          up--;
        }
      }

      // if the path is allowed to go above the root, restore leading ..s
      if (allowAboveRoot) {
        for (; up--; up) {
          parts.unshift('..');
        }
      }

      return parts;
    }

    // Split a filename into [root, dir, basename, ext], unix version
    // 'root' is just a slash, or nothing.
    var splitPathRe =
        /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
    var splitPath = function(filename) {
      return splitPathRe.exec(filename).slice(1);
    };

    // path.resolve([from ...], to)
    // posix version
    function resolve() {
      var resolvedPath = '',
          resolvedAbsolute = false;

      for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
        var path = (i >= 0) ? arguments[i] : '/';

        // Skip empty and invalid entries
        if (typeof path !== 'string') {
          throw new TypeError('Arguments to path.resolve must be strings');
        } else if (!path) {
          continue;
        }

        resolvedPath = path + '/' + resolvedPath;
        resolvedAbsolute = path.charAt(0) === '/';
      }

      // At this point the path should be resolved to a full absolute path, but
      // handle relative paths to be safe (might happen when process.cwd() fails)

      // Normalize the path
      resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
        return !!p;
      }), !resolvedAbsolute).join('/');

      return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
    }
    // path.normalize(path)
    // posix version
    function normalize$1(path) {
      var isPathAbsolute = isAbsolute(path),
          trailingSlash = substr(path, -1) === '/';

      // Normalize the path
      path = normalizeArray(filter(path.split('/'), function(p) {
        return !!p;
      }), !isPathAbsolute).join('/');

      if (!path && !isPathAbsolute) {
        path = '.';
      }
      if (path && trailingSlash) {
        path += '/';
      }

      return (isPathAbsolute ? '/' : '') + path;
    }
    // posix version
    function isAbsolute(path) {
      return path.charAt(0) === '/';
    }

    // posix version
    function join() {
      var paths = Array.prototype.slice.call(arguments, 0);
      return normalize$1(filter(paths, function(p, index) {
        if (typeof p !== 'string') {
          throw new TypeError('Arguments to path.join must be strings');
        }
        return p;
      }).join('/'));
    }


    // path.relative(from, to)
    // posix version
    function relative(from, to) {
      from = resolve(from).substr(1);
      to = resolve(to).substr(1);

      function trim(arr) {
        var start = 0;
        for (; start < arr.length; start++) {
          if (arr[start] !== '') break;
        }

        var end = arr.length - 1;
        for (; end >= 0; end--) {
          if (arr[end] !== '') break;
        }

        if (start > end) return [];
        return arr.slice(start, end - start + 1);
      }

      var fromParts = trim(from.split('/'));
      var toParts = trim(to.split('/'));

      var length = Math.min(fromParts.length, toParts.length);
      var samePartsLength = length;
      for (var i = 0; i < length; i++) {
        if (fromParts[i] !== toParts[i]) {
          samePartsLength = i;
          break;
        }
      }

      var outputParts = [];
      for (var i = samePartsLength; i < fromParts.length; i++) {
        outputParts.push('..');
      }

      outputParts = outputParts.concat(toParts.slice(samePartsLength));

      return outputParts.join('/');
    }

    var sep = '/';
    var delimiter$1 = ':';

    function dirname(path) {
      var result = splitPath(path),
          root = result[0],
          dir = result[1];

      if (!root && !dir) {
        // No dirname whatsoever
        return '.';
      }

      if (dir) {
        // It has a dirname, strip trailing slash
        dir = dir.substr(0, dir.length - 1);
      }

      return root + dir;
    }

    function basename(path, ext) {
      var f = splitPath(path)[2];
      // TODO: make this comparison case-insensitive on windows?
      if (ext && f.substr(-1 * ext.length) === ext) {
        f = f.substr(0, f.length - ext.length);
      }
      return f;
    }


    function extname(path) {
      return splitPath(path)[3];
    }
    var path = {
      extname: extname,
      basename: basename,
      dirname: dirname,
      sep: sep,
      delimiter: delimiter$1,
      relative: relative,
      join: join,
      isAbsolute: isAbsolute,
      normalize: normalize$1,
      resolve: resolve
    };
    function filter (xs, f) {
        if (xs.filter) return xs.filter(f);
        var res = [];
        for (var i = 0; i < xs.length; i++) {
            if (f(xs[i], i, xs)) res.push(xs[i]);
        }
        return res;
    }

    // String.prototype.substr - negative index don't work in IE8
    var substr = 'ab'.substr(-1) === 'b' ?
        function (str, start, len) { return str.substr(start, len) } :
        function (str, start, len) {
            if (start < 0) start = str.length + start;
            return str.substr(start, len);
        }
    ;

    var global$1 = (typeof global !== "undefined" ? global :
      typeof self !== "undefined" ? self :
      typeof window !== "undefined" ? window : {});

    // shim for using process in browser
    // based off https://github.com/defunctzombie/node-process/blob/master/browser.js

    function defaultSetTimout() {
        throw new Error('setTimeout has not been defined');
    }
    function defaultClearTimeout () {
        throw new Error('clearTimeout has not been defined');
    }
    var cachedSetTimeout = defaultSetTimout;
    var cachedClearTimeout = defaultClearTimeout;
    if (typeof global$1.setTimeout === 'function') {
        cachedSetTimeout = setTimeout;
    }
    if (typeof global$1.clearTimeout === 'function') {
        cachedClearTimeout = clearTimeout;
    }

    function runTimeout(fun) {
        if (cachedSetTimeout === setTimeout) {
            //normal enviroments in sane situations
            return setTimeout(fun, 0);
        }
        // if setTimeout wasn't available but was latter defined
        if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
            cachedSetTimeout = setTimeout;
            return setTimeout(fun, 0);
        }
        try {
            // when when somebody has screwed with setTimeout but no I.E. maddness
            return cachedSetTimeout(fun, 0);
        } catch(e){
            try {
                // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
                return cachedSetTimeout.call(null, fun, 0);
            } catch(e){
                // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
                return cachedSetTimeout.call(this, fun, 0);
            }
        }


    }
    function runClearTimeout(marker) {
        if (cachedClearTimeout === clearTimeout) {
            //normal enviroments in sane situations
            return clearTimeout(marker);
        }
        // if clearTimeout wasn't available but was latter defined
        if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
            cachedClearTimeout = clearTimeout;
            return clearTimeout(marker);
        }
        try {
            // when when somebody has screwed with setTimeout but no I.E. maddness
            return cachedClearTimeout(marker);
        } catch (e){
            try {
                // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
                return cachedClearTimeout.call(null, marker);
            } catch (e){
                // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
                // Some versions of I.E. have different rules for clearTimeout vs setTimeout
                return cachedClearTimeout.call(this, marker);
            }
        }



    }
    var queue = [];
    var draining = false;
    var currentQueue;
    var queueIndex = -1;

    function cleanUpNextTick() {
        if (!draining || !currentQueue) {
            return;
        }
        draining = false;
        if (currentQueue.length) {
            queue = currentQueue.concat(queue);
        } else {
            queueIndex = -1;
        }
        if (queue.length) {
            drainQueue();
        }
    }

    function drainQueue() {
        if (draining) {
            return;
        }
        var timeout = runTimeout(cleanUpNextTick);
        draining = true;

        var len = queue.length;
        while(len) {
            currentQueue = queue;
            queue = [];
            while (++queueIndex < len) {
                if (currentQueue) {
                    currentQueue[queueIndex].run();
                }
            }
            queueIndex = -1;
            len = queue.length;
        }
        currentQueue = null;
        draining = false;
        runClearTimeout(timeout);
    }
    function nextTick(fun) {
        var args = new Array(arguments.length - 1);
        if (arguments.length > 1) {
            for (var i = 1; i < arguments.length; i++) {
                args[i - 1] = arguments[i];
            }
        }
        queue.push(new Item(fun, args));
        if (queue.length === 1 && !draining) {
            runTimeout(drainQueue);
        }
    }
    // v8 likes predictible objects
    function Item(fun, array) {
        this.fun = fun;
        this.array = array;
    }
    Item.prototype.run = function () {
        this.fun.apply(null, this.array);
    };
    var title$1 = 'browser';
    var platform = 'browser';
    var browser = true;
    var env = {};
    var argv = [];
    var version = ''; // empty string to avoid regexp issues
    var versions = {};
    var release = {};
    var config = {};

    function noop() {}

    var on = noop;
    var addListener = noop;
    var once = noop;
    var off = noop;
    var removeListener = noop;
    var removeAllListeners = noop;
    var emit = noop;

    function binding(name) {
        throw new Error('process.binding is not supported');
    }

    function cwd () { return '/' }
    function chdir (dir) {
        throw new Error('process.chdir is not supported');
    }function umask() { return 0; }

    // from https://github.com/kumavis/browser-process-hrtime/blob/master/index.js
    var performance = global$1.performance || {};
    var performanceNow =
      performance.now        ||
      performance.mozNow     ||
      performance.msNow      ||
      performance.oNow       ||
      performance.webkitNow  ||
      function(){ return (new Date()).getTime() };

    // generate timestamp or delta
    // see http://nodejs.org/api/process.html#process_process_hrtime
    function hrtime(previousTimestamp){
      var clocktime = performanceNow.call(performance)*1e-3;
      var seconds = Math.floor(clocktime);
      var nanoseconds = Math.floor((clocktime%1)*1e9);
      if (previousTimestamp) {
        seconds = seconds - previousTimestamp[0];
        nanoseconds = nanoseconds - previousTimestamp[1];
        if (nanoseconds<0) {
          seconds--;
          nanoseconds += 1e9;
        }
      }
      return [seconds,nanoseconds]
    }

    var startTime = new Date();
    function uptime() {
      var currentTime = new Date();
      var dif = currentTime - startTime;
      return dif / 1000;
    }

    var browser$1 = {
      nextTick: nextTick,
      title: title$1,
      browser: browser,
      env: env,
      argv: argv,
      version: version,
      versions: versions,
      on: on,
      addListener: addListener,
      once: once,
      off: off,
      removeListener: removeListener,
      removeAllListeners: removeAllListeners,
      emit: emit,
      binding: binding,
      cwd: cwd,
      chdir: chdir,
      umask: umask,
      hrtime: hrtime,
      platform: platform,
      release: release,
      config: config,
      uptime: uptime
    };

    /*! https://mths.be/punycode v1.4.1 by @mathias */


    /** Highest positive signed 32-bit float value */
    var maxInt = 2147483647; // aka. 0x7FFFFFFF or 2^31-1

    /** Bootstring parameters */
    var base$1 = 36;
    var tMin = 1;
    var tMax = 26;
    var skew = 38;
    var damp = 700;
    var initialBias = 72;
    var initialN = 128; // 0x80
    var delimiter = '-'; // '\x2D'
    var regexNonASCII = /[^\x20-\x7E]/; // unprintable ASCII chars + non-ASCII chars
    var regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g; // RFC 3490 separators

    /** Error messages */
    var errors = {
      'overflow': 'Overflow: input needs wider integers to process',
      'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
      'invalid-input': 'Invalid input'
    };

    /** Convenience shortcuts */
    var baseMinusTMin = base$1 - tMin;
    var floor = Math.floor;
    var stringFromCharCode = String.fromCharCode;

    /*--------------------------------------------------------------------------*/

    /**
     * A generic error utility function.
     * @private
     * @param {String} type The error type.
     * @returns {Error} Throws a `RangeError` with the applicable error message.
     */
    function error(type) {
      throw new RangeError(errors[type]);
    }

    /**
     * A generic `Array#map` utility function.
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} callback The function that gets called for every array
     * item.
     * @returns {Array} A new array of values returned by the callback function.
     */
    function map$1(array, fn) {
      var length = array.length;
      var result = [];
      while (length--) {
        result[length] = fn(array[length]);
      }
      return result;
    }

    /**
     * A simple `Array#map`-like wrapper to work with domain name strings or email
     * addresses.
     * @private
     * @param {String} domain The domain name or email address.
     * @param {Function} callback The function that gets called for every
     * character.
     * @returns {Array} A new string of characters returned by the callback
     * function.
     */
    function mapDomain(string, fn) {
      var parts = string.split('@');
      var result = '';
      if (parts.length > 1) {
        // In email addresses, only the domain name should be punycoded. Leave
        // the local part (i.e. everything up to `@`) intact.
        result = parts[0] + '@';
        string = parts[1];
      }
      // Avoid `split(regex)` for IE8 compatibility. See #17.
      string = string.replace(regexSeparators, '\x2E');
      var labels = string.split('.');
      var encoded = map$1(labels, fn).join('.');
      return result + encoded;
    }

    /**
     * Creates an array containing the numeric code points of each Unicode
     * character in the string. While JavaScript uses UCS-2 internally,
     * this function will convert a pair of surrogate halves (each of which
     * UCS-2 exposes as separate characters) into a single code point,
     * matching UTF-16.
     * @see `punycode.ucs2.encode`
     * @see <https://mathiasbynens.be/notes/javascript-encoding>
     * @memberOf punycode.ucs2
     * @name decode
     * @param {String} string The Unicode input string (UCS-2).
     * @returns {Array} The new array of code points.
     */
    function ucs2decode(string) {
      var output = [],
        counter = 0,
        length = string.length,
        value,
        extra;
      while (counter < length) {
        value = string.charCodeAt(counter++);
        if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
          // high surrogate, and there is a next character
          extra = string.charCodeAt(counter++);
          if ((extra & 0xFC00) == 0xDC00) { // low surrogate
            output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
          } else {
            // unmatched surrogate; only append this code unit, in case the next
            // code unit is the high surrogate of a surrogate pair
            output.push(value);
            counter--;
          }
        } else {
          output.push(value);
        }
      }
      return output;
    }

    /**
     * Converts a digit/integer into a basic code point.
     * @see `basicToDigit()`
     * @private
     * @param {Number} digit The numeric value of a basic code point.
     * @returns {Number} The basic code point whose value (when used for
     * representing integers) is `digit`, which needs to be in the range
     * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
     * used; else, the lowercase form is used. The behavior is undefined
     * if `flag` is non-zero and `digit` has no uppercase form.
     */
    function digitToBasic(digit, flag) {
      //  0..25 map to ASCII a..z or A..Z
      // 26..35 map to ASCII 0..9
      return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
    }

    /**
     * Bias adaptation function as per section 3.4 of RFC 3492.
     * https://tools.ietf.org/html/rfc3492#section-3.4
     * @private
     */
    function adapt(delta, numPoints, firstTime) {
      var k = 0;
      delta = firstTime ? floor(delta / damp) : delta >> 1;
      delta += floor(delta / numPoints);
      for ( /* no initialization */ ; delta > baseMinusTMin * tMax >> 1; k += base$1) {
        delta = floor(delta / baseMinusTMin);
      }
      return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
    }

    /**
     * Converts a string of Unicode symbols (e.g. a domain name label) to a
     * Punycode string of ASCII-only symbols.
     * @memberOf punycode
     * @param {String} input The string of Unicode symbols.
     * @returns {String} The resulting Punycode string of ASCII-only symbols.
     */
    function encode(input) {
      var n,
        delta,
        handledCPCount,
        basicLength,
        bias,
        j,
        m,
        q,
        k,
        t,
        currentValue,
        output = [],
        /** `inputLength` will hold the number of code points in `input`. */
        inputLength,
        /** Cached calculation results */
        handledCPCountPlusOne,
        baseMinusT,
        qMinusT;

      // Convert the input in UCS-2 to Unicode
      input = ucs2decode(input);

      // Cache the length
      inputLength = input.length;

      // Initialize the state
      n = initialN;
      delta = 0;
      bias = initialBias;

      // Handle the basic code points
      for (j = 0; j < inputLength; ++j) {
        currentValue = input[j];
        if (currentValue < 0x80) {
          output.push(stringFromCharCode(currentValue));
        }
      }

      handledCPCount = basicLength = output.length;

      // `handledCPCount` is the number of code points that have been handled;
      // `basicLength` is the number of basic code points.

      // Finish the basic string - if it is not empty - with a delimiter
      if (basicLength) {
        output.push(delimiter);
      }

      // Main encoding loop:
      while (handledCPCount < inputLength) {

        // All non-basic code points < n have been handled already. Find the next
        // larger one:
        for (m = maxInt, j = 0; j < inputLength; ++j) {
          currentValue = input[j];
          if (currentValue >= n && currentValue < m) {
            m = currentValue;
          }
        }

        // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
        // but guard against overflow
        handledCPCountPlusOne = handledCPCount + 1;
        if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
          error('overflow');
        }

        delta += (m - n) * handledCPCountPlusOne;
        n = m;

        for (j = 0; j < inputLength; ++j) {
          currentValue = input[j];

          if (currentValue < n && ++delta > maxInt) {
            error('overflow');
          }

          if (currentValue == n) {
            // Represent delta as a generalized variable-length integer
            for (q = delta, k = base$1; /* no condition */ ; k += base$1) {
              t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
              if (q < t) {
                break;
              }
              qMinusT = q - t;
              baseMinusT = base$1 - t;
              output.push(
                stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
              );
              q = floor(qMinusT / baseMinusT);
            }

            output.push(stringFromCharCode(digitToBasic(q, 0)));
            bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
            delta = 0;
            ++handledCPCount;
          }
        }

        ++delta;
        ++n;

      }
      return output.join('');
    }

    /**
     * Converts a Unicode string representing a domain name or an email address to
     * Punycode. Only the non-ASCII parts of the domain name will be converted,
     * i.e. it doesn't matter if you call it with a domain that's already in
     * ASCII.
     * @memberOf punycode
     * @param {String} input The domain name or email address to convert, as a
     * Unicode string.
     * @returns {String} The Punycode representation of the given domain name or
     * email address.
     */
    function toASCII(input) {
      return mapDomain(input, function(string) {
        return regexNonASCII.test(string) ?
          'xn--' + encode(string) :
          string;
      });
    }

    function isNull(arg) {
      return arg === null;
    }

    function isNullOrUndefined(arg) {
      return arg == null;
    }

    function isString(arg) {
      return typeof arg === 'string';
    }

    function isObject(arg) {
      return typeof arg === 'object' && arg !== null;
    }

    // Copyright Joyent, Inc. and other Node contributors.
    //
    // Permission is hereby granted, free of charge, to any person obtaining a
    // copy of this software and associated documentation files (the
    // "Software"), to deal in the Software without restriction, including
    // without limitation the rights to use, copy, modify, merge, publish,
    // distribute, sublicense, and/or sell copies of the Software, and to permit
    // persons to whom the Software is furnished to do so, subject to the
    // following conditions:
    //
    // The above copyright notice and this permission notice shall be included
    // in all copies or substantial portions of the Software.
    //
    // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
    // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
    // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
    // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
    // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
    // USE OR OTHER DEALINGS IN THE SOFTWARE.


    // If obj.hasOwnProperty has been overridden, then calling
    // obj.hasOwnProperty(prop) will break.
    // See: https://github.com/joyent/node/issues/1707
    function hasOwnProperty$2(obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    }
    var isArray = Array.isArray || function (xs) {
      return Object.prototype.toString.call(xs) === '[object Array]';
    };
    function stringifyPrimitive(v) {
      switch (typeof v) {
        case 'string':
          return v;

        case 'boolean':
          return v ? 'true' : 'false';

        case 'number':
          return isFinite(v) ? v : '';

        default:
          return '';
      }
    }

    function stringify$2 (obj, sep, eq, name) {
      sep = sep || '&';
      eq = eq || '=';
      if (obj === null) {
        obj = undefined;
      }

      if (typeof obj === 'object') {
        return map(objectKeys(obj), function(k) {
          var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
          if (isArray(obj[k])) {
            return map(obj[k], function(v) {
              return ks + encodeURIComponent(stringifyPrimitive(v));
            }).join(sep);
          } else {
            return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
          }
        }).join(sep);

      }

      if (!name) return '';
      return encodeURIComponent(stringifyPrimitive(name)) + eq +
             encodeURIComponent(stringifyPrimitive(obj));
    }
    function map (xs, f) {
      if (xs.map) return xs.map(f);
      var res = [];
      for (var i = 0; i < xs.length; i++) {
        res.push(f(xs[i], i));
      }
      return res;
    }

    var objectKeys = Object.keys || function (obj) {
      var res = [];
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
      }
      return res;
    };

    function parse$2(qs, sep, eq, options) {
      sep = sep || '&';
      eq = eq || '=';
      var obj = {};

      if (typeof qs !== 'string' || qs.length === 0) {
        return obj;
      }

      var regexp = /\+/g;
      qs = qs.split(sep);

      var maxKeys = 1000;
      if (options && typeof options.maxKeys === 'number') {
        maxKeys = options.maxKeys;
      }

      var len = qs.length;
      // maxKeys <= 0 means that we should not limit keys count
      if (maxKeys > 0 && len > maxKeys) {
        len = maxKeys;
      }

      for (var i = 0; i < len; ++i) {
        var x = qs[i].replace(regexp, '%20'),
            idx = x.indexOf(eq),
            kstr, vstr, k, v;

        if (idx >= 0) {
          kstr = x.substr(0, idx);
          vstr = x.substr(idx + 1);
        } else {
          kstr = x;
          vstr = '';
        }

        k = decodeURIComponent(kstr);
        v = decodeURIComponent(vstr);

        if (!hasOwnProperty$2(obj, k)) {
          obj[k] = v;
        } else if (isArray(obj[k])) {
          obj[k].push(v);
        } else {
          obj[k] = [obj[k], v];
        }
      }

      return obj;
    }

    function Url() {
      this.protocol = null;
      this.slashes = null;
      this.auth = null;
      this.host = null;
      this.port = null;
      this.hostname = null;
      this.hash = null;
      this.search = null;
      this.query = null;
      this.pathname = null;
      this.path = null;
      this.href = null;
    }

    // Reference: RFC 3986, RFC 1808, RFC 2396

    // define these here so at least they only have to be
    // compiled once on the first module load.
    var protocolPattern = /^([a-z0-9.+-]+:)/i,
      portPattern = /:[0-9]*$/,

      // Special case for a simple path URL
      simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,

      // RFC 2396: characters reserved for delimiting URLs.
      // We actually just auto-escape these.
      delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],

      // RFC 2396: characters not allowed for various reasons.
      unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),

      // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
      autoEscape = ['\''].concat(unwise),
      // Characters that are never ever allowed in a hostname.
      // Note that any invalid chars are also handled, but these
      // are the ones that are *expected* to be seen, so we fast-path
      // them.
      nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
      hostEndingChars = ['/', '?', '#'],
      hostnameMaxLen = 255,
      hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
      hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
      // protocols that can allow "unsafe" and "unwise" chars.
      unsafeProtocol = {
        'javascript': true,
        'javascript:': true
      },
      // protocols that never have a hostname.
      hostlessProtocol = {
        'javascript': true,
        'javascript:': true
      },
      // protocols that always contain a // bit.
      slashedProtocol = {
        'http': true,
        'https': true,
        'ftp': true,
        'gopher': true,
        'file': true,
        'http:': true,
        'https:': true,
        'ftp:': true,
        'gopher:': true,
        'file:': true
      };

    function urlParse(url, parseQueryString, slashesDenoteHost) {
      if (url && isObject(url) && url instanceof Url) return url;

      var u = new Url;
      u.parse(url, parseQueryString, slashesDenoteHost);
      return u;
    }
    Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
      return parse$1(this, url, parseQueryString, slashesDenoteHost);
    };

    function parse$1(self, url, parseQueryString, slashesDenoteHost) {
      if (!isString(url)) {
        throw new TypeError('Parameter \'url\' must be a string, not ' + typeof url);
      }

      // Copy chrome, IE, opera backslash-handling behavior.
      // Back slashes before the query string get converted to forward slashes
      // See: https://code.google.com/p/chromium/issues/detail?id=25916
      var queryIndex = url.indexOf('?'),
        splitter =
        (queryIndex !== -1 && queryIndex < url.indexOf('#')) ? '?' : '#',
        uSplit = url.split(splitter),
        slashRegex = /\\/g;
      uSplit[0] = uSplit[0].replace(slashRegex, '/');
      url = uSplit.join(splitter);

      var rest = url;

      // trim before proceeding.
      // This is to support parse stuff like "  http://foo.com  \n"
      rest = rest.trim();

      if (!slashesDenoteHost && url.split('#').length === 1) {
        // Try fast path regexp
        var simplePath = simplePathPattern.exec(rest);
        if (simplePath) {
          self.path = rest;
          self.href = rest;
          self.pathname = simplePath[1];
          if (simplePath[2]) {
            self.search = simplePath[2];
            if (parseQueryString) {
              self.query = parse$2(self.search.substr(1));
            } else {
              self.query = self.search.substr(1);
            }
          } else if (parseQueryString) {
            self.search = '';
            self.query = {};
          }
          return self;
        }
      }

      var proto = protocolPattern.exec(rest);
      if (proto) {
        proto = proto[0];
        var lowerProto = proto.toLowerCase();
        self.protocol = lowerProto;
        rest = rest.substr(proto.length);
      }

      // figure out if it's got a host
      // user@server is *always* interpreted as a hostname, and url
      // resolution will treat //foo/bar as host=foo,path=bar because that's
      // how the browser resolves relative URLs.
      if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
        var slashes = rest.substr(0, 2) === '//';
        if (slashes && !(proto && hostlessProtocol[proto])) {
          rest = rest.substr(2);
          self.slashes = true;
        }
      }
      var i, hec, l, p;
      if (!hostlessProtocol[proto] &&
        (slashes || (proto && !slashedProtocol[proto]))) {

        // there's a hostname.
        // the first instance of /, ?, ;, or # ends the host.
        //
        // If there is an @ in the hostname, then non-host chars *are* allowed
        // to the left of the last @ sign, unless some host-ending character
        // comes *before* the @-sign.
        // URLs are obnoxious.
        //
        // ex:
        // http://a@b@c/ => user:a@b host:c
        // http://a@b?@c => user:a host:c path:/?@c

        // v0.12 TODO(isaacs): This is not quite how Chrome does things.
        // Review our test case against browsers more comprehensively.

        // find the first instance of any hostEndingChars
        var hostEnd = -1;
        for (i = 0; i < hostEndingChars.length; i++) {
          hec = rest.indexOf(hostEndingChars[i]);
          if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
            hostEnd = hec;
        }

        // at this point, either we have an explicit point where the
        // auth portion cannot go past, or the last @ char is the decider.
        var auth, atSign;
        if (hostEnd === -1) {
          // atSign can be anywhere.
          atSign = rest.lastIndexOf('@');
        } else {
          // atSign must be in auth portion.
          // http://a@b/c@d => host:b auth:a path:/c@d
          atSign = rest.lastIndexOf('@', hostEnd);
        }

        // Now we have a portion which is definitely the auth.
        // Pull that off.
        if (atSign !== -1) {
          auth = rest.slice(0, atSign);
          rest = rest.slice(atSign + 1);
          self.auth = decodeURIComponent(auth);
        }

        // the host is the remaining to the left of the first non-host char
        hostEnd = -1;
        for (i = 0; i < nonHostChars.length; i++) {
          hec = rest.indexOf(nonHostChars[i]);
          if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
            hostEnd = hec;
        }
        // if we still have not hit it, then the entire thing is a host.
        if (hostEnd === -1)
          hostEnd = rest.length;

        self.host = rest.slice(0, hostEnd);
        rest = rest.slice(hostEnd);

        // pull out port.
        parseHost(self);

        // we've indicated that there is a hostname,
        // so even if it's empty, it has to be present.
        self.hostname = self.hostname || '';

        // if hostname begins with [ and ends with ]
        // assume that it's an IPv6 address.
        var ipv6Hostname = self.hostname[0] === '[' &&
          self.hostname[self.hostname.length - 1] === ']';

        // validate a little.
        if (!ipv6Hostname) {
          var hostparts = self.hostname.split(/\./);
          for (i = 0, l = hostparts.length; i < l; i++) {
            var part = hostparts[i];
            if (!part) continue;
            if (!part.match(hostnamePartPattern)) {
              var newpart = '';
              for (var j = 0, k = part.length; j < k; j++) {
                if (part.charCodeAt(j) > 127) {
                  // we replace non-ASCII char with a temporary placeholder
                  // we need this to make sure size of hostname is not
                  // broken by replacing non-ASCII by nothing
                  newpart += 'x';
                } else {
                  newpart += part[j];
                }
              }
              // we test again with ASCII char only
              if (!newpart.match(hostnamePartPattern)) {
                var validParts = hostparts.slice(0, i);
                var notHost = hostparts.slice(i + 1);
                var bit = part.match(hostnamePartStart);
                if (bit) {
                  validParts.push(bit[1]);
                  notHost.unshift(bit[2]);
                }
                if (notHost.length) {
                  rest = '/' + notHost.join('.') + rest;
                }
                self.hostname = validParts.join('.');
                break;
              }
            }
          }
        }

        if (self.hostname.length > hostnameMaxLen) {
          self.hostname = '';
        } else {
          // hostnames are always lower case.
          self.hostname = self.hostname.toLowerCase();
        }

        if (!ipv6Hostname) {
          // IDNA Support: Returns a punycoded representation of "domain".
          // It only converts parts of the domain name that
          // have non-ASCII characters, i.e. it doesn't matter if
          // you call it with a domain that already is ASCII-only.
          self.hostname = toASCII(self.hostname);
        }

        p = self.port ? ':' + self.port : '';
        var h = self.hostname || '';
        self.host = h + p;
        self.href += self.host;

        // strip [ and ] from the hostname
        // the host field still retains them, though
        if (ipv6Hostname) {
          self.hostname = self.hostname.substr(1, self.hostname.length - 2);
          if (rest[0] !== '/') {
            rest = '/' + rest;
          }
        }
      }

      // now rest is set to the post-host stuff.
      // chop off any delim chars.
      if (!unsafeProtocol[lowerProto]) {

        // First, make 100% sure that any "autoEscape" chars get
        // escaped, even if encodeURIComponent doesn't think they
        // need to be.
        for (i = 0, l = autoEscape.length; i < l; i++) {
          var ae = autoEscape[i];
          if (rest.indexOf(ae) === -1)
            continue;
          var esc = encodeURIComponent(ae);
          if (esc === ae) {
            esc = escape(ae);
          }
          rest = rest.split(ae).join(esc);
        }
      }


      // chop off from the tail first.
      var hash = rest.indexOf('#');
      if (hash !== -1) {
        // got a fragment string.
        self.hash = rest.substr(hash);
        rest = rest.slice(0, hash);
      }
      var qm = rest.indexOf('?');
      if (qm !== -1) {
        self.search = rest.substr(qm);
        self.query = rest.substr(qm + 1);
        if (parseQueryString) {
          self.query = parse$2(self.query);
        }
        rest = rest.slice(0, qm);
      } else if (parseQueryString) {
        // no query string, but parseQueryString still requested
        self.search = '';
        self.query = {};
      }
      if (rest) self.pathname = rest;
      if (slashedProtocol[lowerProto] &&
        self.hostname && !self.pathname) {
        self.pathname = '/';
      }

      //to support http.request
      if (self.pathname || self.search) {
        p = self.pathname || '';
        var s = self.search || '';
        self.path = p + s;
      }

      // finally, reconstruct the href based on what has been validated.
      self.href = format(self);
      return self;
    }

    function urlFileURLToPath(path) {
      if (typeof path === 'string')
        path = new Url().parse(path);
      else if (!(path instanceof Url))
        throw new TypeError('The "path" argument must be of type string or an instance of URL. Received type ' + (typeof path) + String(path));
      if (path.protocol !== 'file:')
        throw new TypeError('The URL must be of scheme file');
      return getPathFromURLPosix(path);
    }

    function getPathFromURLPosix(url) {
      const pathname = url.pathname;
      for (let n = 0; n < pathname.length; n++) {
        if (pathname[n] === '%') {
          const third = pathname.codePointAt(n + 2) | 0x20;
          if (pathname[n + 1] === '2' && third === 102) {
            throw new TypeError(
              'must not include encoded / characters'
            );
          }
        }
      }
      return decodeURIComponent(pathname);
    }

    function format(self) {
      var auth = self.auth || '';
      if (auth) {
        auth = encodeURIComponent(auth);
        auth = auth.replace(/%3A/i, ':');
        auth += '@';
      }

      var protocol = self.protocol || '',
        pathname = self.pathname || '',
        hash = self.hash || '',
        host = false,
        query = '';

      if (self.host) {
        host = auth + self.host;
      } else if (self.hostname) {
        host = auth + (self.hostname.indexOf(':') === -1 ?
          self.hostname :
          '[' + this.hostname + ']');
        if (self.port) {
          host += ':' + self.port;
        }
      }

      if (self.query &&
        isObject(self.query) &&
        Object.keys(self.query).length) {
        query = stringify$2(self.query);
      }

      var search = self.search || (query && ('?' + query)) || '';

      if (protocol && protocol.substr(-1) !== ':') protocol += ':';

      // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
      // unless they had them to begin with.
      if (self.slashes ||
        (!protocol || slashedProtocol[protocol]) && host !== false) {
        host = '//' + (host || '');
        if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
      } else if (!host) {
        host = '';
      }

      if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
      if (search && search.charAt(0) !== '?') search = '?' + search;

      pathname = pathname.replace(/[?#]/g, function(match) {
        return encodeURIComponent(match);
      });
      search = search.replace('#', '%23');

      return protocol + host + pathname + search + hash;
    }

    Url.prototype.format = function() {
      return format(this);
    };

    Url.prototype.resolve = function(relative) {
      return this.resolveObject(urlParse(relative, false, true)).format();
    };

    Url.prototype.resolveObject = function(relative) {
      if (isString(relative)) {
        var rel = new Url();
        rel.parse(relative, false, true);
        relative = rel;
      }

      var result = new Url();
      var tkeys = Object.keys(this);
      for (var tk = 0; tk < tkeys.length; tk++) {
        var tkey = tkeys[tk];
        result[tkey] = this[tkey];
      }

      // hash is always overridden, no matter what.
      // even href="" will remove it.
      result.hash = relative.hash;

      // if the relative url is empty, then there's nothing left to do here.
      if (relative.href === '') {
        result.href = result.format();
        return result;
      }

      // hrefs like //foo/bar always cut to the protocol.
      if (relative.slashes && !relative.protocol) {
        // take everything except the protocol from relative
        var rkeys = Object.keys(relative);
        for (var rk = 0; rk < rkeys.length; rk++) {
          var rkey = rkeys[rk];
          if (rkey !== 'protocol')
            result[rkey] = relative[rkey];
        }

        //urlParse appends trailing / to urls like http://www.example.com
        if (slashedProtocol[result.protocol] &&
          result.hostname && !result.pathname) {
          result.path = result.pathname = '/';
        }

        result.href = result.format();
        return result;
      }
      var relPath;
      if (relative.protocol && relative.protocol !== result.protocol) {
        // if it's a known url protocol, then changing
        // the protocol does weird things
        // first, if it's not file:, then we MUST have a host,
        // and if there was a path
        // to begin with, then we MUST have a path.
        // if it is file:, then the host is dropped,
        // because that's known to be hostless.
        // anything else is assumed to be absolute.
        if (!slashedProtocol[relative.protocol]) {
          var keys = Object.keys(relative);
          for (var v = 0; v < keys.length; v++) {
            var k = keys[v];
            result[k] = relative[k];
          }
          result.href = result.format();
          return result;
        }

        result.protocol = relative.protocol;
        if (!relative.host && !hostlessProtocol[relative.protocol]) {
          relPath = (relative.pathname || '').split('/');
          while (relPath.length && !(relative.host = relPath.shift()));
          if (!relative.host) relative.host = '';
          if (!relative.hostname) relative.hostname = '';
          if (relPath[0] !== '') relPath.unshift('');
          if (relPath.length < 2) relPath.unshift('');
          result.pathname = relPath.join('/');
        } else {
          result.pathname = relative.pathname;
        }
        result.search = relative.search;
        result.query = relative.query;
        result.host = relative.host || '';
        result.auth = relative.auth;
        result.hostname = relative.hostname || relative.host;
        result.port = relative.port;
        // to support http.request
        if (result.pathname || result.search) {
          var p = result.pathname || '';
          var s = result.search || '';
          result.path = p + s;
        }
        result.slashes = result.slashes || relative.slashes;
        result.href = result.format();
        return result;
      }

      var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
        isRelAbs = (
          relative.host ||
          relative.pathname && relative.pathname.charAt(0) === '/'
        ),
        mustEndAbs = (isRelAbs || isSourceAbs ||
          (result.host && relative.pathname)),
        removeAllDots = mustEndAbs,
        srcPath = result.pathname && result.pathname.split('/') || [],
        psychotic = result.protocol && !slashedProtocol[result.protocol];
      relPath = relative.pathname && relative.pathname.split('/') || [];
      // if the url is a non-slashed url, then relative
      // links like ../.. should be able
      // to crawl up to the hostname, as well.  This is strange.
      // result.protocol has already been set by now.
      // Later on, put the first path part into the host field.
      if (psychotic) {
        result.hostname = '';
        result.port = null;
        if (result.host) {
          if (srcPath[0] === '') srcPath[0] = result.host;
          else srcPath.unshift(result.host);
        }
        result.host = '';
        if (relative.protocol) {
          relative.hostname = null;
          relative.port = null;
          if (relative.host) {
            if (relPath[0] === '') relPath[0] = relative.host;
            else relPath.unshift(relative.host);
          }
          relative.host = null;
        }
        mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
      }
      var authInHost;
      if (isRelAbs) {
        // it's absolute.
        result.host = (relative.host || relative.host === '') ?
          relative.host : result.host;
        result.hostname = (relative.hostname || relative.hostname === '') ?
          relative.hostname : result.hostname;
        result.search = relative.search;
        result.query = relative.query;
        srcPath = relPath;
        // fall through to the dot-handling below.
      } else if (relPath.length) {
        // it's relative
        // throw away the existing file, and take the new path instead.
        if (!srcPath) srcPath = [];
        srcPath.pop();
        srcPath = srcPath.concat(relPath);
        result.search = relative.search;
        result.query = relative.query;
      } else if (!isNullOrUndefined(relative.search)) {
        // just pull out the search.
        // like href='?foo'.
        // Put this after the other two cases because it simplifies the booleans
        if (psychotic) {
          result.hostname = result.host = srcPath.shift();
          //occationaly the auth can get stuck only in host
          //this especially happens in cases like
          //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
          authInHost = result.host && result.host.indexOf('@') > 0 ?
            result.host.split('@') : false;
          if (authInHost) {
            result.auth = authInHost.shift();
            result.host = result.hostname = authInHost.shift();
          }
        }
        result.search = relative.search;
        result.query = relative.query;
        //to support http.request
        if (!isNull(result.pathname) || !isNull(result.search)) {
          result.path = (result.pathname ? result.pathname : '') +
            (result.search ? result.search : '');
        }
        result.href = result.format();
        return result;
      }

      if (!srcPath.length) {
        // no path at all.  easy.
        // we've already handled the other stuff above.
        result.pathname = null;
        //to support http.request
        if (result.search) {
          result.path = '/' + result.search;
        } else {
          result.path = null;
        }
        result.href = result.format();
        return result;
      }

      // if a url ENDs in . or .., then it must get a trailing slash.
      // however, if it ends in anything else non-slashy,
      // then it must NOT get a trailing slash.
      var last = srcPath.slice(-1)[0];
      var hasTrailingSlash = (
        (result.host || relative.host || srcPath.length > 1) &&
        (last === '.' || last === '..') || last === '');

      // strip single dots, resolve double dots to parent dir
      // if the path tries to go above the root, `up` ends up > 0
      var up = 0;
      for (var i = srcPath.length; i >= 0; i--) {
        last = srcPath[i];
        if (last === '.') {
          srcPath.splice(i, 1);
        } else if (last === '..') {
          srcPath.splice(i, 1);
          up++;
        } else if (up) {
          srcPath.splice(i, 1);
          up--;
        }
      }

      // if the path is allowed to go above the root, restore leading ..s
      if (!mustEndAbs && !removeAllDots) {
        for (; up--; up) {
          srcPath.unshift('..');
        }
      }

      if (mustEndAbs && srcPath[0] !== '' &&
        (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
        srcPath.unshift('');
      }

      if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
        srcPath.push('');
      }

      var isAbsolute = srcPath[0] === '' ||
        (srcPath[0] && srcPath[0].charAt(0) === '/');

      // put the host back
      if (psychotic) {
        result.hostname = result.host = isAbsolute ? '' :
          srcPath.length ? srcPath.shift() : '';
        //occationaly the auth can get stuck only in host
        //this especially happens in cases like
        //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
        authInHost = result.host && result.host.indexOf('@') > 0 ?
          result.host.split('@') : false;
        if (authInHost) {
          result.auth = authInHost.shift();
          result.host = result.hostname = authInHost.shift();
        }
      }

      mustEndAbs = mustEndAbs || (result.host && srcPath.length);

      if (mustEndAbs && !isAbsolute) {
        srcPath.unshift('');
      }

      if (!srcPath.length) {
        result.pathname = null;
        result.path = null;
      } else {
        result.pathname = srcPath.join('/');
      }

      //to support request.http
      if (!isNull(result.pathname) || !isNull(result.search)) {
        result.path = (result.pathname ? result.pathname : '') +
          (result.search ? result.search : '');
      }
      result.auth = relative.auth || result.auth;
      result.slashes = result.slashes || relative.slashes;
      result.href = result.format();
      return result;
    };

    Url.prototype.parseHost = function() {
      return parseHost(this);
    };

    function parseHost(self) {
      var host = self.host;
      var port = portPattern.exec(host);
      if (port) {
        port = port[0];
        if (port !== ':') {
          self.port = port.substr(1);
        }
        host = host.substr(0, host.length - port.length);
      }
      if (host) self.hostname = host;
    }

    /**
     * @typedef URL
     * @property {string} hash
     * @property {string} host
     * @property {string} hostname
     * @property {string} href
     * @property {string} origin
     * @property {string} password
     * @property {string} pathname
     * @property {string} port
     * @property {string} protocol
     * @property {string} search
     * @property {any} searchParams
     * @property {string} username
     * @property {() => string} toString
     * @property {() => string} toJSON
     */

    /**
     * Check if `fileUrlOrPath` looks like a URL.
     *
     * @param {unknown} fileUrlOrPath
     *   File path or URL.
     * @returns {fileUrlOrPath is URL}
     *   Whether it’s a URL.
     */
    // From: <https://github.com/nodejs/node/blob/fcf8ba4/lib/internal/url.js#L1501>
    function isUrl(fileUrlOrPath) {
      return (
        fileUrlOrPath !== null &&
        typeof fileUrlOrPath === 'object' &&
        // @ts-expect-error: indexable.
        fileUrlOrPath.href &&
        // @ts-expect-error: indexable.
        fileUrlOrPath.origin
      )
    }

    /**
     * @typedef {import('unist').Node} Node
     * @typedef {import('unist').Position} Position
     * @typedef {import('unist').Point} Point
     * @typedef {import('./minurl.shared.js').URL} URL
     * @typedef {import('../index.js').Data} Data
     * @typedef {import('../index.js').Value} Value
     */

    /**
     * Order of setting (least specific to most), we need this because otherwise
     * `{stem: 'a', path: '~/b.js'}` would throw, as a path is needed before a
     * stem can be set.
     *
     * @type {Array<'basename' | 'dirname' | 'extname' | 'history' | 'path' | 'stem'>}
     */
    const order = ['history', 'path', 'basename', 'stem', 'extname', 'dirname'];

    class VFile {
      /**
       * Create a new virtual file.
       *
       * `options` is treated as:
       *
       * *   `string` or `Buffer` — `{value: options}`
       * *   `URL` — `{path: options}`
       * *   `VFile` — shallow copies its data over to the new file
       * *   `object` — all fields are shallow copied over to the new file
       *
       * Path related fields are set in the following order (least specific to
       * most specific): `history`, `path`, `basename`, `stem`, `extname`,
       * `dirname`.
       *
       * You cannot set `dirname` or `extname` without setting either `history`,
       * `path`, `basename`, or `stem` too.
       *
       * @param {Compatible | null | undefined} [value]
       *   File value.
       * @returns
       *   New instance.
       */
      constructor(value) {
        /** @type {Options | VFile} */
        let options;

        if (!value) {
          options = {};
        } else if (typeof value === 'string' || buffer(value)) {
          options = {value};
        } else if (isUrl(value)) {
          options = {path: value};
        } else {
          options = value;
        }

        /**
         * Place to store custom information (default: `{}`).
         *
         * It’s OK to store custom data directly on the file but moving it to
         * `data` is recommended.
         *
         * @type {Data}
         */
        this.data = {};

        /**
         * List of messages associated with the file.
         *
         * @type {Array<VFileMessage>}
         */
        this.messages = [];

        /**
         * List of filepaths the file moved between.
         *
         * The first is the original path and the last is the current path.
         *
         * @type {Array<string>}
         */
        this.history = [];

        /**
         * Base of `path` (default: `process.cwd()` or `'/'` in browsers).
         *
         * @type {string}
         */
        this.cwd = browser$1.cwd();

        /* eslint-disable no-unused-expressions */
        /**
         * Raw value.
         *
         * @type {Value}
         */
        this.value;

        // The below are non-standard, they are “well-known”.
        // As in, used in several tools.

        /**
         * Whether a file was saved to disk.
         *
         * This is used by vfile reporters.
         *
         * @type {boolean}
         */
        this.stored;

        /**
         * Custom, non-string, compiled, representation.
         *
         * This is used by unified to store non-string results.
         * One example is when turning markdown into React nodes.
         *
         * @type {unknown}
         */
        this.result;

        /**
         * Source map.
         *
         * This type is equivalent to the `RawSourceMap` type from the `source-map`
         * module.
         *
         * @type {Map | null | undefined}
         */
        this.map;
        /* eslint-enable no-unused-expressions */

        // Set path related properties in the correct order.
        let index = -1;

        while (++index < order.length) {
          const prop = order[index];

          // Note: we specifically use `in` instead of `hasOwnProperty` to accept
          // `vfile`s too.
          if (
            prop in options &&
            options[prop] !== undefined &&
            options[prop] !== null
          ) {
            // @ts-expect-error: TS doesn’t understand basic reality.
            this[prop] = prop === 'history' ? [...options[prop]] : options[prop];
          }
        }

        /** @type {string} */
        let prop;

        // Set non-path related properties.
        for (prop in options) {
          // @ts-expect-error: fine to set other things.
          if (!order.includes(prop)) {
            // @ts-expect-error: fine to set other things.
            this[prop] = options[prop];
          }
        }
      }

      /**
       * Get the full path (example: `'~/index.min.js'`).
       *
       * @returns {string}
       */
      get path() {
        return this.history[this.history.length - 1]
      }

      /**
       * Set the full path (example: `'~/index.min.js'`).
       *
       * Cannot be nullified.
       * You can set a file URL (a `URL` object with a `file:` protocol) which will
       * be turned into a path with `url.fileURLToPath`.
       *
       * @param {string | URL} path
       */
      set path(path) {
        if (isUrl(path)) {
          path = urlFileURLToPath(path);
        }

        assertNonEmpty(path, 'path');

        if (this.path !== path) {
          this.history.push(path);
        }
      }

      /**
       * Get the parent path (example: `'~'`).
       */
      get dirname() {
        return typeof this.path === 'string' ? path.dirname(this.path) : undefined
      }

      /**
       * Set the parent path (example: `'~'`).
       *
       * Cannot be set if there’s no `path` yet.
       */
      set dirname(dirname) {
        assertPath(this.basename, 'dirname');
        this.path = path.join(dirname || '', this.basename);
      }

      /**
       * Get the basename (including extname) (example: `'index.min.js'`).
       */
      get basename() {
        return typeof this.path === 'string' ? path.basename(this.path) : undefined
      }

      /**
       * Set basename (including extname) (`'index.min.js'`).
       *
       * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
       * on windows).
       * Cannot be nullified (use `file.path = file.dirname` instead).
       */
      set basename(basename) {
        assertNonEmpty(basename, 'basename');
        assertPart(basename, 'basename');
        this.path = path.join(this.dirname || '', basename);
      }

      /**
       * Get the extname (including dot) (example: `'.js'`).
       */
      get extname() {
        return typeof this.path === 'string' ? path.extname(this.path) : undefined
      }

      /**
       * Set the extname (including dot) (example: `'.js'`).
       *
       * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
       * on windows).
       * Cannot be set if there’s no `path` yet.
       */
      set extname(extname) {
        assertPart(extname, 'extname');
        assertPath(this.dirname, 'extname');

        if (extname) {
          if (extname.charCodeAt(0) !== 46 /* `.` */) {
            throw new Error('`extname` must start with `.`')
          }

          if (extname.includes('.', 1)) {
            throw new Error('`extname` cannot contain multiple dots')
          }
        }

        this.path = path.join(this.dirname, this.stem + (extname || ''));
      }

      /**
       * Get the stem (basename w/o extname) (example: `'index.min'`).
       */
      get stem() {
        return typeof this.path === 'string'
          ? path.basename(this.path, this.extname)
          : undefined
      }

      /**
       * Set the stem (basename w/o extname) (example: `'index.min'`).
       *
       * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
       * on windows).
       * Cannot be nullified (use `file.path = file.dirname` instead).
       */
      set stem(stem) {
        assertNonEmpty(stem, 'stem');
        assertPart(stem, 'stem');
        this.path = path.join(this.dirname || '', stem + (this.extname || ''));
      }

      /**
       * Serialize the file.
       *
       * @param {BufferEncoding | null | undefined} [encoding='utf8']
       *   Character encoding to understand `value` as when it’s a `Buffer`
       *   (default: `'utf8'`).
       * @returns {string}
       *   Serialized file.
       */
      toString(encoding) {
        return (this.value || '').toString(encoding || undefined)
      }

      /**
       * Create a warning message associated with the file.
       *
       * Its `fatal` is set to `false` and `file` is set to the current file path.
       * Its added to `file.messages`.
       *
       * @param {string | Error | VFileMessage} reason
       *   Reason for message, uses the stack and message of the error if given.
       * @param {Node | NodeLike | Position | Point | null | undefined} [place]
       *   Place in file where the message occurred.
       * @param {string | null | undefined} [origin]
       *   Place in code where the message originates (example:
       *   `'my-package:my-rule'` or `'my-rule'`).
       * @returns {VFileMessage}
       *   Message.
       */
      message(reason, place, origin) {
        const message = new VFileMessage(reason, place, origin);

        if (this.path) {
          message.name = this.path + ':' + message.name;
          message.file = this.path;
        }

        message.fatal = false;

        this.messages.push(message);

        return message
      }

      /**
       * Create an info message associated with the file.
       *
       * Its `fatal` is set to `null` and `file` is set to the current file path.
       * Its added to `file.messages`.
       *
       * @param {string | Error | VFileMessage} reason
       *   Reason for message, uses the stack and message of the error if given.
       * @param {Node | NodeLike | Position | Point | null | undefined} [place]
       *   Place in file where the message occurred.
       * @param {string | null | undefined} [origin]
       *   Place in code where the message originates (example:
       *   `'my-package:my-rule'` or `'my-rule'`).
       * @returns {VFileMessage}
       *   Message.
       */
      info(reason, place, origin) {
        const message = this.message(reason, place, origin);

        message.fatal = null;

        return message
      }

      /**
       * Create a fatal error associated with the file.
       *
       * Its `fatal` is set to `true` and `file` is set to the current file path.
       * Its added to `file.messages`.
       *
       * > 👉 **Note**: a fatal error means that a file is no longer processable.
       *
       * @param {string | Error | VFileMessage} reason
       *   Reason for message, uses the stack and message of the error if given.
       * @param {Node | NodeLike | Position | Point | null | undefined} [place]
       *   Place in file where the message occurred.
       * @param {string | null | undefined} [origin]
       *   Place in code where the message originates (example:
       *   `'my-package:my-rule'` or `'my-rule'`).
       * @returns {never}
       *   Message.
       * @throws {VFileMessage}
       *   Message.
       */
      fail(reason, place, origin) {
        const message = this.message(reason, place, origin);

        message.fatal = true;

        throw message
      }
    }

    /**
     * Assert that `part` is not a path (as in, does not contain `path.sep`).
     *
     * @param {string | null | undefined} part
     *   File path part.
     * @param {string} name
     *   Part name.
     * @returns {void}
     *   Nothing.
     */
    function assertPart(part, name) {
      if (part && part.includes(path.sep)) {
        throw new Error(
          '`' + name + '` cannot be a path: did not expect `' + path.sep + '`'
        )
      }
    }

    /**
     * Assert that `part` is not empty.
     *
     * @param {string | undefined} part
     *   Thing.
     * @param {string} name
     *   Part name.
     * @returns {asserts part is string}
     *   Nothing.
     */
    function assertNonEmpty(part, name) {
      if (!part) {
        throw new Error('`' + name + '` cannot be empty')
      }
    }

    /**
     * Assert `path` exists.
     *
     * @param {string | undefined} path
     *   Path.
     * @param {string} name
     *   Dependency name.
     * @returns {asserts path is string}
     *   Nothing.
     */
    function assertPath(path, name) {
      if (!path) {
        throw new Error('Setting `' + name + '` requires `path` to be set too')
      }
    }

    /**
     * Assert `value` is a buffer.
     *
     * @param {unknown} value
     *   thing.
     * @returns {value is Buffer}
     *   Whether `value` is a Node.js buffer.
     */
    function buffer(value) {
      return isBuffer(value)
    }

    /**
     * @typedef {import('unist').Node} Node
     * @typedef {import('vfile').VFileCompatible} VFileCompatible
     * @typedef {import('vfile').VFileValue} VFileValue
     * @typedef {import('..').Processor} Processor
     * @typedef {import('..').Plugin} Plugin
     * @typedef {import('..').Preset} Preset
     * @typedef {import('..').Pluggable} Pluggable
     * @typedef {import('..').PluggableList} PluggableList
     * @typedef {import('..').Transformer} Transformer
     * @typedef {import('..').Parser} Parser
     * @typedef {import('..').Compiler} Compiler
     * @typedef {import('..').RunCallback} RunCallback
     * @typedef {import('..').ProcessCallback} ProcessCallback
     *
     * @typedef Context
     * @property {Node} tree
     * @property {VFile} file
     */

    // Expose a frozen processor.
    const unified = base().freeze();

    const own$7 = {}.hasOwnProperty;

    // Function to create the first processor.
    /**
     * @returns {Processor}
     */
    function base() {
      const transformers = trough();
      /** @type {Processor['attachers']} */
      const attachers = [];
      /** @type {Record<string, unknown>} */
      let namespace = {};
      /** @type {boolean|undefined} */
      let frozen;
      let freezeIndex = -1;

      // Data management.
      // @ts-expect-error: overloads are handled.
      processor.data = data;
      processor.Parser = undefined;
      processor.Compiler = undefined;

      // Lock.
      processor.freeze = freeze;

      // Plugins.
      processor.attachers = attachers;
      // @ts-expect-error: overloads are handled.
      processor.use = use;

      // API.
      processor.parse = parse;
      processor.stringify = stringify;
      // @ts-expect-error: overloads are handled.
      processor.run = run;
      processor.runSync = runSync;
      // @ts-expect-error: overloads are handled.
      processor.process = process;
      processor.processSync = processSync;

      // Expose.
      return processor

      // Create a new processor based on the processor in the current scope.
      /** @type {Processor} */
      function processor() {
        const destination = base();
        let index = -1;

        while (++index < attachers.length) {
          destination.use(...attachers[index]);
        }

        destination.data(extend(true, {}, namespace));

        return destination
      }

      /**
       * @param {string|Record<string, unknown>} [key]
       * @param {unknown} [value]
       * @returns {unknown}
       */
      function data(key, value) {
        if (typeof key === 'string') {
          // Set `key`.
          if (arguments.length === 2) {
            assertUnfrozen('data', frozen);
            namespace[key] = value;
            return processor
          }

          // Get `key`.
          return (own$7.call(namespace, key) && namespace[key]) || null
        }

        // Set space.
        if (key) {
          assertUnfrozen('data', frozen);
          namespace = key;
          return processor
        }

        // Get space.
        return namespace
      }

      /** @type {Processor['freeze']} */
      function freeze() {
        if (frozen) {
          return processor
        }

        while (++freezeIndex < attachers.length) {
          const [attacher, ...options] = attachers[freezeIndex];

          if (options[0] === false) {
            continue
          }

          if (options[0] === true) {
            options[0] = undefined;
          }

          /** @type {Transformer|void} */
          const transformer = attacher.call(processor, ...options);

          if (typeof transformer === 'function') {
            transformers.use(transformer);
          }
        }

        frozen = true;
        freezeIndex = Number.POSITIVE_INFINITY;

        return processor
      }

      /**
       * @param {Pluggable|null|undefined} [value]
       * @param {...unknown} options
       * @returns {Processor}
       */
      function use(value, ...options) {
        /** @type {Record<string, unknown>|undefined} */
        let settings;

        assertUnfrozen('use', frozen);

        if (value === null || value === undefined) ; else if (typeof value === 'function') {
          addPlugin(value, ...options);
        } else if (typeof value === 'object') {
          if (Array.isArray(value)) {
            addList(value);
          } else {
            addPreset(value);
          }
        } else {
          throw new TypeError('Expected usable value, not `' + value + '`')
        }

        if (settings) {
          namespace.settings = Object.assign(namespace.settings || {}, settings);
        }

        return processor

        /**
         * @param {import('..').Pluggable<unknown[]>} value
         * @returns {void}
         */
        function add(value) {
          if (typeof value === 'function') {
            addPlugin(value);
          } else if (typeof value === 'object') {
            if (Array.isArray(value)) {
              const [plugin, ...options] = value;
              addPlugin(plugin, ...options);
            } else {
              addPreset(value);
            }
          } else {
            throw new TypeError('Expected usable value, not `' + value + '`')
          }
        }

        /**
         * @param {Preset} result
         * @returns {void}
         */
        function addPreset(result) {
          addList(result.plugins);

          if (result.settings) {
            settings = Object.assign(settings || {}, result.settings);
          }
        }

        /**
         * @param {PluggableList|null|undefined} [plugins]
         * @returns {void}
         */
        function addList(plugins) {
          let index = -1;

          if (plugins === null || plugins === undefined) ; else if (Array.isArray(plugins)) {
            while (++index < plugins.length) {
              const thing = plugins[index];
              add(thing);
            }
          } else {
            throw new TypeError('Expected a list of plugins, not `' + plugins + '`')
          }
        }

        /**
         * @param {Plugin} plugin
         * @param {...unknown} [value]
         * @returns {void}
         */
        function addPlugin(plugin, value) {
          let index = -1;
          /** @type {Processor['attachers'][number]|undefined} */
          let entry;

          while (++index < attachers.length) {
            if (attachers[index][0] === plugin) {
              entry = attachers[index];
              break
            }
          }

          if (entry) {
            if (isPlainObject(entry[1]) && isPlainObject(value)) {
              value = extend(true, entry[1], value);
            }

            entry[1] = value;
          } else {
            // @ts-expect-error: fine.
            attachers.push([...arguments]);
          }
        }
      }

      /** @type {Processor['parse']} */
      function parse(doc) {
        processor.freeze();
        const file = vfile(doc);
        const Parser = processor.Parser;
        assertParser('parse', Parser);

        if (newable(Parser, 'parse')) {
          // @ts-expect-error: `newable` checks this.
          return new Parser(String(file), file).parse()
        }

        // @ts-expect-error: `newable` checks this.
        return Parser(String(file), file) // eslint-disable-line new-cap
      }

      /** @type {Processor['stringify']} */
      function stringify(node, doc) {
        processor.freeze();
        const file = vfile(doc);
        const Compiler = processor.Compiler;
        assertCompiler('stringify', Compiler);
        assertNode(node);

        if (newable(Compiler, 'compile')) {
          // @ts-expect-error: `newable` checks this.
          return new Compiler(node, file).compile()
        }

        // @ts-expect-error: `newable` checks this.
        return Compiler(node, file) // eslint-disable-line new-cap
      }

      /**
       * @param {Node} node
       * @param {VFileCompatible|RunCallback} [doc]
       * @param {RunCallback} [callback]
       * @returns {Promise<Node>|void}
       */
      function run(node, doc, callback) {
        assertNode(node);
        processor.freeze();

        if (!callback && typeof doc === 'function') {
          callback = doc;
          doc = undefined;
        }

        if (!callback) {
          return new Promise(executor)
        }

        executor(null, callback);

        /**
         * @param {null|((node: Node) => void)} resolve
         * @param {(error: Error) => void} reject
         * @returns {void}
         */
        function executor(resolve, reject) {
          // @ts-expect-error: `doc` can’t be a callback anymore, we checked.
          transformers.run(node, vfile(doc), done);

          /**
           * @param {Error|null} error
           * @param {Node} tree
           * @param {VFile} file
           * @returns {void}
           */
          function done(error, tree, file) {
            tree = tree || node;
            if (error) {
              reject(error);
            } else if (resolve) {
              resolve(tree);
            } else {
              // @ts-expect-error: `callback` is defined if `resolve` is not.
              callback(null, tree, file);
            }
          }
        }
      }

      /** @type {Processor['runSync']} */
      function runSync(node, file) {
        /** @type {Node|undefined} */
        let result;
        /** @type {boolean|undefined} */
        let complete;

        processor.run(node, file, done);

        assertDone('runSync', 'run', complete);

        // @ts-expect-error: we either bailed on an error or have a tree.
        return result

        /**
         * @param {Error|null} [error]
         * @param {Node} [tree]
         * @returns {void}
         */
        function done(error, tree) {
          bail(error);
          result = tree;
          complete = true;
        }
      }

      /**
       * @param {VFileCompatible} doc
       * @param {ProcessCallback} [callback]
       * @returns {Promise<VFile>|undefined}
       */
      function process(doc, callback) {
        processor.freeze();
        assertParser('process', processor.Parser);
        assertCompiler('process', processor.Compiler);

        if (!callback) {
          return new Promise(executor)
        }

        executor(null, callback);

        /**
         * @param {null|((file: VFile) => void)} resolve
         * @param {(error?: Error|null|undefined) => void} reject
         * @returns {void}
         */
        function executor(resolve, reject) {
          const file = vfile(doc);

          processor.run(processor.parse(file), file, (error, tree, file) => {
            if (error || !tree || !file) {
              done(error);
            } else {
              /** @type {unknown} */
              const result = processor.stringify(tree, file);

              if (result === undefined || result === null) ; else if (looksLikeAVFileValue(result)) {
                file.value = result;
              } else {
                file.result = result;
              }

              done(error, file);
            }
          });

          /**
           * @param {Error|null|undefined} [error]
           * @param {VFile|undefined} [file]
           * @returns {void}
           */
          function done(error, file) {
            if (error || !file) {
              reject(error);
            } else if (resolve) {
              resolve(file);
            } else {
              // @ts-expect-error: `callback` is defined if `resolve` is not.
              callback(null, file);
            }
          }
        }
      }

      /** @type {Processor['processSync']} */
      function processSync(doc) {
        /** @type {boolean|undefined} */
        let complete;

        processor.freeze();
        assertParser('processSync', processor.Parser);
        assertCompiler('processSync', processor.Compiler);

        const file = vfile(doc);

        processor.process(file, done);

        assertDone('processSync', 'process', complete);

        return file

        /**
         * @param {Error|null|undefined} [error]
         * @returns {void}
         */
        function done(error) {
          complete = true;
          bail(error);
        }
      }
    }

    /**
     * Check if `value` is a constructor.
     *
     * @param {unknown} value
     * @param {string} name
     * @returns {boolean}
     */
    function newable(value, name) {
      return (
        typeof value === 'function' &&
        // Prototypes do exist.
        // type-coverage:ignore-next-line
        value.prototype &&
        // A function with keys in its prototype is probably a constructor.
        // Classes’ prototype methods are not enumerable, so we check if some value
        // exists in the prototype.
        // type-coverage:ignore-next-line
        (keys(value.prototype) || name in value.prototype)
      )
    }

    /**
     * Check if `value` is an object with keys.
     *
     * @param {Record<string, unknown>} value
     * @returns {boolean}
     */
    function keys(value) {
      /** @type {string} */
      let key;

      for (key in value) {
        if (own$7.call(value, key)) {
          return true
        }
      }

      return false
    }

    /**
     * Assert a parser is available.
     *
     * @param {string} name
     * @param {unknown} value
     * @returns {asserts value is Parser}
     */
    function assertParser(name, value) {
      if (typeof value !== 'function') {
        throw new TypeError('Cannot `' + name + '` without `Parser`')
      }
    }

    /**
     * Assert a compiler is available.
     *
     * @param {string} name
     * @param {unknown} value
     * @returns {asserts value is Compiler}
     */
    function assertCompiler(name, value) {
      if (typeof value !== 'function') {
        throw new TypeError('Cannot `' + name + '` without `Compiler`')
      }
    }

    /**
     * Assert the processor is not frozen.
     *
     * @param {string} name
     * @param {unknown} frozen
     * @returns {asserts frozen is false}
     */
    function assertUnfrozen(name, frozen) {
      if (frozen) {
        throw new Error(
          'Cannot call `' +
            name +
            '` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.'
        )
      }
    }

    /**
     * Assert `node` is a unist node.
     *
     * @param {unknown} node
     * @returns {asserts node is Node}
     */
    function assertNode(node) {
      // `isPlainObj` unfortunately uses `any` instead of `unknown`.
      // type-coverage:ignore-next-line
      if (!isPlainObject(node) || typeof node.type !== 'string') {
        throw new TypeError('Expected node, got `' + node + '`')
        // Fine.
      }
    }

    /**
     * Assert that `complete` is `true`.
     *
     * @param {string} name
     * @param {string} asyncName
     * @param {unknown} complete
     * @returns {asserts complete is true}
     */
    function assertDone(name, asyncName, complete) {
      if (!complete) {
        throw new Error(
          '`' + name + '` finished async. Use `' + asyncName + '` instead'
        )
      }
    }

    /**
     * @param {VFileCompatible} [value]
     * @returns {VFile}
     */
    function vfile(value) {
      return looksLikeAVFile(value) ? value : new VFile(value)
    }

    /**
     * @param {VFileCompatible} [value]
     * @returns {value is VFile}
     */
    function looksLikeAVFile(value) {
      return Boolean(
        value &&
          typeof value === 'object' &&
          'message' in value &&
          'messages' in value
      )
    }

    /**
     * @param {unknown} [value]
     * @returns {value is VFileValue}
     */
    function looksLikeAVFileValue(value) {
      return typeof value === 'string' || isBuffer(value)
    }

    /**
     * @typedef {import('mdast').Root|import('mdast').Content} Node
     *
     * @typedef Options
     *   Configuration (optional).
     * @property {boolean | null | undefined} [includeImageAlt=true]
     *   Whether to use `alt` for `image`s.
     * @property {boolean | null | undefined} [includeHtml=true]
     *   Whether to use `value` of HTML.
     */

    /** @type {Options} */
    const emptyOptions = {};

    /**
     * Get the text content of a node or list of nodes.
     *
     * Prefers the node’s plain-text fields, otherwise serializes its children,
     * and if the given value is an array, serialize the nodes in it.
     *
     * @param {unknown} value
     *   Thing to serialize, typically `Node`.
     * @param {Options | null | undefined} [options]
     *   Configuration (optional).
     * @returns {string}
     *   Serialized `value`.
     */
    function toString(value, options) {
      const settings = options || emptyOptions;
      const includeImageAlt =
        typeof settings.includeImageAlt === 'boolean'
          ? settings.includeImageAlt
          : true;
      const includeHtml =
        typeof settings.includeHtml === 'boolean' ? settings.includeHtml : true;

      return one$1(value, includeImageAlt, includeHtml)
    }

    /**
     * One node or several nodes.
     *
     * @param {unknown} value
     *   Thing to serialize.
     * @param {boolean} includeImageAlt
     *   Include image `alt`s.
     * @param {boolean} includeHtml
     *   Include HTML.
     * @returns {string}
     *   Serialized node.
     */
    function one$1(value, includeImageAlt, includeHtml) {
      if (node(value)) {
        if ('value' in value) {
          return value.type === 'html' && !includeHtml ? '' : value.value
        }

        if (includeImageAlt && 'alt' in value && value.alt) {
          return value.alt
        }

        if ('children' in value) {
          return all$1(value.children, includeImageAlt, includeHtml)
        }
      }

      if (Array.isArray(value)) {
        return all$1(value, includeImageAlt, includeHtml)
      }

      return ''
    }

    /**
     * Serialize a list of nodes.
     *
     * @param {Array<unknown>} values
     *   Thing to serialize.
     * @param {boolean} includeImageAlt
     *   Include image `alt`s.
     * @param {boolean} includeHtml
     *   Include HTML.
     * @returns {string}
     *   Serialized nodes.
     */
    function all$1(values, includeImageAlt, includeHtml) {
      /** @type {Array<string>} */
      const result = [];
      let index = -1;

      while (++index < values.length) {
        result[index] = one$1(values[index], includeImageAlt, includeHtml);
      }

      return result.join('')
    }

    /**
     * Check if `value` looks like a node.
     *
     * @param {unknown} value
     *   Thing.
     * @returns {value is Node}
     *   Whether `value` is a node.
     */
    function node(value) {
      return Boolean(value && typeof value === 'object')
    }

    /**
     * Like `Array#splice`, but smarter for giant arrays.
     *
     * `Array#splice` takes all items to be inserted as individual argument which
     * causes a stack overflow in V8 when trying to insert 100k items for instance.
     *
     * Otherwise, this does not return the removed items, and takes `items` as an
     * array instead of rest parameters.
     *
     * @template {unknown} T
     * @param {T[]} list
     * @param {number} start
     * @param {number} remove
     * @param {T[]} items
     * @returns {void}
     */
    function splice(list, start, remove, items) {
      const end = list.length;
      let chunkStart = 0;
      /** @type {unknown[]} */

      let parameters; // Make start between zero and `end` (included).

      if (start < 0) {
        start = -start > end ? 0 : end + start;
      } else {
        start = start > end ? end : start;
      }

      remove = remove > 0 ? remove : 0; // No need to chunk the items if there’s only a couple (10k) items.

      if (items.length < 10000) {
        parameters = Array.from(items);
        parameters.unshift(start, remove) // @ts-expect-error Hush, it’s fine.
        ;[].splice.apply(list, parameters);
      } else {
        // Delete `remove` items starting from `start`
        if (remove) [].splice.apply(list, [start, remove]); // Insert the items in chunks to not cause stack overflows.

        while (chunkStart < items.length) {
          parameters = items.slice(chunkStart, chunkStart + 10000);
          parameters.unshift(start, 0) // @ts-expect-error Hush, it’s fine.
          ;[].splice.apply(list, parameters);
          chunkStart += 10000;
          start += 10000;
        }
      }
    }
    /**
     * Append `items` (an array) at the end of `list` (another array).
     * When `list` was empty, returns `items` instead.
     *
     * This prevents a potentially expensive operation when `list` is empty,
     * and adds items in batches to prevent V8 from hanging.
     *
     * @template {unknown} T
     * @param {T[]} list
     * @param {T[]} items
     * @returns {T[]}
     */

    function push(list, items) {
      if (list.length > 0) {
        splice(list, list.length, 0, items);
        return list
      }

      return items
    }

    /**
     * @typedef {import('micromark-util-types').NormalizedExtension} NormalizedExtension
     * @typedef {import('micromark-util-types').Extension} Extension
     * @typedef {import('micromark-util-types').Construct} Construct
     * @typedef {import('micromark-util-types').HtmlExtension} HtmlExtension
     */

    const hasOwnProperty$1 = {}.hasOwnProperty;

    /**
     * Combine several syntax extensions into one.
     *
     * @param {Extension[]} extensions List of syntax extensions.
     * @returns {NormalizedExtension} A single combined extension.
     */
    function combineExtensions(extensions) {
      /** @type {NormalizedExtension} */
      const all = {};
      let index = -1;

      while (++index < extensions.length) {
        syntaxExtension(all, extensions[index]);
      }

      return all
    }

    /**
     * Merge `extension` into `all`.
     *
     * @param {NormalizedExtension} all Extension to merge into.
     * @param {Extension} extension Extension to merge.
     * @returns {void}
     */
    function syntaxExtension(all, extension) {
      /** @type {string} */
      let hook;

      for (hook in extension) {
        const maybe = hasOwnProperty$1.call(all, hook) ? all[hook] : undefined;
        const left = maybe || (all[hook] = {});
        const right = extension[hook];
        /** @type {string} */
        let code;

        for (code in right) {
          if (!hasOwnProperty$1.call(left, code)) left[code] = [];
          const value = right[code];
          constructs(
            // @ts-expect-error Looks like a list.
            left[code],
            Array.isArray(value) ? value : value ? [value] : []
          );
        }
      }
    }

    /**
     * Merge `list` into `existing` (both lists of constructs).
     * Mutates `existing`.
     *
     * @param {unknown[]} existing
     * @param {unknown[]} list
     * @returns {void}
     */
    function constructs(existing, list) {
      let index = -1;
      /** @type {unknown[]} */
      const before = [];

      while (++index < list.length) {
    (list[index].add === 'after' ? existing : before).push(list[index]);
      }

      splice(existing, 0, 0, before);
    }

    // This module is generated by `script/`.
    //
    // CommonMark handles attention (emphasis, strong) markers based on what comes
    // before or after them.
    // One such difference is if those characters are Unicode punctuation.
    // This script is generated from the Unicode data.
    const unicodePunctuationRegex =
      /[!-/:-@[-`{-~\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/;

    /**
     * @typedef {import('micromark-util-types').Code} Code
     */
    /**
     * Check whether the character code represents an ASCII alpha (`a` through `z`,
     * case insensitive).
     *
     * An **ASCII alpha** is an ASCII upper alpha or ASCII lower alpha.
     *
     * An **ASCII upper alpha** is a character in the inclusive range U+0041 (`A`)
     * to U+005A (`Z`).
     *
     * An **ASCII lower alpha** is a character in the inclusive range U+0061 (`a`)
     * to U+007A (`z`).
     */

    const asciiAlpha = regexCheck(/[A-Za-z]/);
    /**
     * Check whether the character code represents an ASCII digit (`0` through `9`).
     *
     * An **ASCII digit** is a character in the inclusive range U+0030 (`0`) to
     * U+0039 (`9`).
     */

    const asciiDigit = regexCheck(/\d/);
    /**
     * Check whether the character code represents an ASCII hex digit (`a` through
     * `f`, case insensitive, or `0` through `9`).
     *
     * An **ASCII hex digit** is an ASCII digit (see `asciiDigit`), ASCII upper hex
     * digit, or an ASCII lower hex digit.
     *
     * An **ASCII upper hex digit** is a character in the inclusive range U+0041
     * (`A`) to U+0046 (`F`).
     *
     * An **ASCII lower hex digit** is a character in the inclusive range U+0061
     * (`a`) to U+0066 (`f`).
     */

    const asciiHexDigit = regexCheck(/[\dA-Fa-f]/);
    /**
     * Check whether the character code represents an ASCII alphanumeric (`a`
     * through `z`, case insensitive, or `0` through `9`).
     *
     * An **ASCII alphanumeric** is an ASCII digit (see `asciiDigit`) or ASCII alpha
     * (see `asciiAlpha`).
     */

    const asciiAlphanumeric = regexCheck(/[\dA-Za-z]/);
    /**
     * Check whether the character code represents ASCII punctuation.
     *
     * An **ASCII punctuation** is a character in the inclusive ranges U+0021
     * EXCLAMATION MARK (`!`) to U+002F SLASH (`/`), U+003A COLON (`:`) to U+0040 AT
     * SIGN (`@`), U+005B LEFT SQUARE BRACKET (`[`) to U+0060 GRAVE ACCENT
     * (`` ` ``), or U+007B LEFT CURLY BRACE (`{`) to U+007E TILDE (`~`).
     */

    const asciiPunctuation = regexCheck(/[!-/:-@[-`{-~]/);
    /**
     * Check whether the character code represents an ASCII atext.
     *
     * atext is an ASCII alphanumeric (see `asciiAlphanumeric`), or a character in
     * the inclusive ranges U+0023 NUMBER SIGN (`#`) to U+0027 APOSTROPHE (`'`),
     * U+002A ASTERISK (`*`), U+002B PLUS SIGN (`+`), U+002D DASH (`-`), U+002F
     * SLASH (`/`), U+003D EQUALS TO (`=`), U+003F QUESTION MARK (`?`), U+005E
     * CARET (`^`) to U+0060 GRAVE ACCENT (`` ` ``), or U+007B LEFT CURLY BRACE
     * (`{`) to U+007E TILDE (`~`).
     *
     * See:
     * **\[RFC5322]**:
     * [Internet Message Format](https://tools.ietf.org/html/rfc5322).
     * P. Resnick.
     * IETF.
     */

    const asciiAtext = regexCheck(/[#-'*+\--9=?A-Z^-~]/);
    /**
     * Check whether a character code is an ASCII control character.
     *
     * An **ASCII control** is a character in the inclusive range U+0000 NULL (NUL)
     * to U+001F (US), or U+007F (DEL).
     *
     * @param {Code} code
     * @returns {code is number}
     */

    function asciiControl(code) {
      return (
        // Special whitespace codes (which have negative values), C0 and Control
        // character DEL
        code !== null && (code < 32 || code === 127)
      )
    }
    /**
     * Check whether a character code is a markdown line ending (see
     * `markdownLineEnding`) or markdown space (see `markdownSpace`).
     *
     * @param {Code} code
     * @returns {code is number}
     */

    function markdownLineEndingOrSpace(code) {
      return code !== null && (code < 0 || code === 32)
    }
    /**
     * Check whether a character code is a markdown line ending.
     *
     * A **markdown line ending** is the virtual characters M-0003 CARRIAGE RETURN
     * LINE FEED (CRLF), M-0004 LINE FEED (LF) and M-0005 CARRIAGE RETURN (CR).
     *
     * In micromark, the actual character U+000A LINE FEED (LF) and U+000D CARRIAGE
     * RETURN (CR) are replaced by these virtual characters depending on whether
     * they occurred together.
     *
     * @param {Code} code
     * @returns {code is number}
     */

    function markdownLineEnding(code) {
      return code !== null && code < -2
    }
    /**
     * Check whether a character code is a markdown space.
     *
     * A **markdown space** is the concrete character U+0020 SPACE (SP) and the
     * virtual characters M-0001 VIRTUAL SPACE (VS) and M-0002 HORIZONTAL TAB (HT).
     *
     * In micromark, the actual character U+0009 CHARACTER TABULATION (HT) is
     * replaced by one M-0002 HORIZONTAL TAB (HT) and between 0 and 3 M-0001 VIRTUAL
     * SPACE (VS) characters, depending on the column at which the tab occurred.
     *
     * @param {Code} code
     * @returns {code is number}
     */

    function markdownSpace(code) {
      return code === -2 || code === -1 || code === 32
    }
    /**
     * Check whether the character code represents Unicode whitespace.
     *
     * Note that this does handle micromark specific markdown whitespace characters.
     * See `markdownLineEndingOrSpace` to check that.
     *
     * A **Unicode whitespace** is a character in the Unicode `Zs` (Separator,
     * Space) category, or U+0009 CHARACTER TABULATION (HT), U+000A LINE FEED (LF),
     * U+000C (FF), or U+000D CARRIAGE RETURN (CR) (**\[UNICODE]**).
     *
     * See:
     * **\[UNICODE]**:
     * [The Unicode Standard](https://www.unicode.org/versions/).
     * Unicode Consortium.
     */

    const unicodeWhitespace = regexCheck(/\s/);
    /**
     * Check whether the character code represents Unicode punctuation.
     *
     * A **Unicode punctuation** is a character in the Unicode `Pc` (Punctuation,
     * Connector), `Pd` (Punctuation, Dash), `Pe` (Punctuation, Close), `Pf`
     * (Punctuation, Final quote), `Pi` (Punctuation, Initial quote), `Po`
     * (Punctuation, Other), or `Ps` (Punctuation, Open) categories, or an ASCII
     * punctuation (see `asciiPunctuation`).
     *
     * See:
     * **\[UNICODE]**:
     * [The Unicode Standard](https://www.unicode.org/versions/).
     * Unicode Consortium.
     */
    // Size note: removing ASCII from the regex and using `asciiPunctuation` here
    // In fact adds to the bundle size.

    const unicodePunctuation = regexCheck(unicodePunctuationRegex);
    /**
     * Create a code check from a regex.
     *
     * @param {RegExp} regex
     * @returns {(code: Code) => code is number}
     */

    function regexCheck(regex) {
      return check
      /**
       * Check whether a code matches the bound regex.
       *
       * @param {Code} code Character code
       * @returns {code is number} Whether the character code matches the bound regex
       */

      function check(code) {
        return code !== null && regex.test(String.fromCharCode(code))
      }
    }

    /**
     * @typedef {import('micromark-util-types').Effects} Effects
     * @typedef {import('micromark-util-types').State} State
     */
    /**
     * @param {Effects} effects
     * @param {State} ok
     * @param {string} type
     * @param {number} [max=Infinity]
     * @returns {State}
     */

    function factorySpace(effects, ok, type, max) {
      const limit = max ? max - 1 : Number.POSITIVE_INFINITY;
      let size = 0;
      return start
      /** @type {State} */

      function start(code) {
        if (markdownSpace(code)) {
          effects.enter(type);
          return prefix(code)
        }

        return ok(code)
      }
      /** @type {State} */

      function prefix(code) {
        if (markdownSpace(code) && size++ < limit) {
          effects.consume(code);
          return prefix
        }

        effects.exit(type);
        return ok(code)
      }
    }

    /**
     * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
     * @typedef {import('micromark-util-types').Initializer} Initializer
     * @typedef {import('micromark-util-types').Token} Token
     * @typedef {import('micromark-util-types').State} State
     */

    /** @type {InitialConstruct} */
    const content$1 = {
      tokenize: initializeContent
    };
    /** @type {Initializer} */

    function initializeContent(effects) {
      const contentStart = effects.attempt(
        this.parser.constructs.contentInitial,
        afterContentStartConstruct,
        paragraphInitial
      );
      /** @type {Token} */

      let previous;
      return contentStart
      /** @type {State} */

      function afterContentStartConstruct(code) {
        if (code === null) {
          effects.consume(code);
          return
        }

        effects.enter('lineEnding');
        effects.consume(code);
        effects.exit('lineEnding');
        return factorySpace(effects, contentStart, 'linePrefix')
      }
      /** @type {State} */

      function paragraphInitial(code) {
        effects.enter('paragraph');
        return lineStart(code)
      }
      /** @type {State} */

      function lineStart(code) {
        const token = effects.enter('chunkText', {
          contentType: 'text',
          previous
        });

        if (previous) {
          previous.next = token;
        }

        previous = token;
        return data(code)
      }
      /** @type {State} */

      function data(code) {
        if (code === null) {
          effects.exit('chunkText');
          effects.exit('paragraph');
          effects.consume(code);
          return
        }

        if (markdownLineEnding(code)) {
          effects.consume(code);
          effects.exit('chunkText');
          return lineStart
        } // Data.

        effects.consume(code);
        return data
      }
    }

    /**
     * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
     * @typedef {import('micromark-util-types').Initializer} Initializer
     * @typedef {import('micromark-util-types').Construct} Construct
     * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
     * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
     * @typedef {import('micromark-util-types').Token} Token
     * @typedef {import('micromark-util-types').State} State
     * @typedef {import('micromark-util-types').Point} Point
     */
    /** @type {InitialConstruct} */

    const document$2 = {
      tokenize: initializeDocument
    };
    /** @type {Construct} */

    const containerConstruct = {
      tokenize: tokenizeContainer
    };
    /** @type {Initializer} */

    function initializeDocument(effects) {
      const self = this;
      /** @type {Array<StackItem>} */

      const stack = [];
      let continued = 0;
      /** @type {TokenizeContext|undefined} */

      let childFlow;
      /** @type {Token|undefined} */

      let childToken;
      /** @type {number} */

      let lineStartOffset;
      return start
      /** @type {State} */

      function start(code) {
        // First we iterate through the open blocks, starting with the root
        // document, and descending through last children down to the last open
        // block.
        // Each block imposes a condition that the line must satisfy if the block is
        // to remain open.
        // For example, a block quote requires a `>` character.
        // A paragraph requires a non-blank line.
        // In this phase we may match all or just some of the open blocks.
        // But we cannot close unmatched blocks yet, because we may have a lazy
        // continuation line.
        if (continued < stack.length) {
          const item = stack[continued];
          self.containerState = item[1];
          return effects.attempt(
            item[0].continuation,
            documentContinue,
            checkNewContainers
          )(code)
        } // Done.

        return checkNewContainers(code)
      }
      /** @type {State} */

      function documentContinue(code) {
        continued++; // Note: this field is called `_closeFlow` but it also closes containers.
        // Perhaps a good idea to rename it but it’s already used in the wild by
        // extensions.

        if (self.containerState._closeFlow) {
          self.containerState._closeFlow = undefined;

          if (childFlow) {
            closeFlow();
          } // Note: this algorithm for moving events around is similar to the
          // algorithm when dealing with lazy lines in `writeToChild`.

          const indexBeforeExits = self.events.length;
          let indexBeforeFlow = indexBeforeExits;
          /** @type {Point|undefined} */

          let point; // Find the flow chunk.

          while (indexBeforeFlow--) {
            if (
              self.events[indexBeforeFlow][0] === 'exit' &&
              self.events[indexBeforeFlow][1].type === 'chunkFlow'
            ) {
              point = self.events[indexBeforeFlow][1].end;
              break
            }
          }

          exitContainers(continued); // Fix positions.

          let index = indexBeforeExits;

          while (index < self.events.length) {
            self.events[index][1].end = Object.assign({}, point);
            index++;
          } // Inject the exits earlier (they’re still also at the end).

          splice(
            self.events,
            indexBeforeFlow + 1,
            0,
            self.events.slice(indexBeforeExits)
          ); // Discard the duplicate exits.

          self.events.length = index;
          return checkNewContainers(code)
        }

        return start(code)
      }
      /** @type {State} */

      function checkNewContainers(code) {
        // Next, after consuming the continuation markers for existing blocks, we
        // look for new block starts (e.g. `>` for a block quote).
        // If we encounter a new block start, we close any blocks unmatched in
        // step 1 before creating the new block as a child of the last matched
        // block.
        if (continued === stack.length) {
          // No need to `check` whether there’s a container, of `exitContainers`
          // would be moot.
          // We can instead immediately `attempt` to parse one.
          if (!childFlow) {
            return documentContinued(code)
          } // If we have concrete content, such as block HTML or fenced code,
          // we can’t have containers “pierce” into them, so we can immediately
          // start.

          if (childFlow.currentConstruct && childFlow.currentConstruct.concrete) {
            return flowStart(code)
          } // If we do have flow, it could still be a blank line,
          // but we’d be interrupting it w/ a new container if there’s a current
          // construct.

          self.interrupt = Boolean(
            childFlow.currentConstruct && !childFlow._gfmTableDynamicInterruptHack
          );
        } // Check if there is a new container.

        self.containerState = {};
        return effects.check(
          containerConstruct,
          thereIsANewContainer,
          thereIsNoNewContainer
        )(code)
      }
      /** @type {State} */

      function thereIsANewContainer(code) {
        if (childFlow) closeFlow();
        exitContainers(continued);
        return documentContinued(code)
      }
      /** @type {State} */

      function thereIsNoNewContainer(code) {
        self.parser.lazy[self.now().line] = continued !== stack.length;
        lineStartOffset = self.now().offset;
        return flowStart(code)
      }
      /** @type {State} */

      function documentContinued(code) {
        // Try new containers.
        self.containerState = {};
        return effects.attempt(
          containerConstruct,
          containerContinue,
          flowStart
        )(code)
      }
      /** @type {State} */

      function containerContinue(code) {
        continued++;
        stack.push([self.currentConstruct, self.containerState]); // Try another.

        return documentContinued(code)
      }
      /** @type {State} */

      function flowStart(code) {
        if (code === null) {
          if (childFlow) closeFlow();
          exitContainers(0);
          effects.consume(code);
          return
        }

        childFlow = childFlow || self.parser.flow(self.now());
        effects.enter('chunkFlow', {
          contentType: 'flow',
          previous: childToken,
          _tokenizer: childFlow
        });
        return flowContinue(code)
      }
      /** @type {State} */

      function flowContinue(code) {
        if (code === null) {
          writeToChild(effects.exit('chunkFlow'), true);
          exitContainers(0);
          effects.consume(code);
          return
        }

        if (markdownLineEnding(code)) {
          effects.consume(code);
          writeToChild(effects.exit('chunkFlow')); // Get ready for the next line.

          continued = 0;
          self.interrupt = undefined;
          return start
        }

        effects.consume(code);
        return flowContinue
      }
      /**
       * @param {Token} token
       * @param {boolean} [eof]
       * @returns {void}
       */

      function writeToChild(token, eof) {
        const stream = self.sliceStream(token);
        if (eof) stream.push(null);
        token.previous = childToken;
        if (childToken) childToken.next = token;
        childToken = token;
        childFlow.defineSkip(token.start);
        childFlow.write(stream); // Alright, so we just added a lazy line:
        //
        // ```markdown
        // > a
        // b.
        //
        // Or:
        //
        // > ~~~c
        // d
        //
        // Or:
        //
        // > | e |
        // f
        // ```
        //
        // The construct in the second example (fenced code) does not accept lazy
        // lines, so it marked itself as done at the end of its first line, and
        // then the content construct parses `d`.
        // Most constructs in markdown match on the first line: if the first line
        // forms a construct, a non-lazy line can’t “unmake” it.
        //
        // The construct in the third example is potentially a GFM table, and
        // those are *weird*.
        // It *could* be a table, from the first line, if the following line
        // matches a condition.
        // In this case, that second line is lazy, which “unmakes” the first line
        // and turns the whole into one content block.
        //
        // We’ve now parsed the non-lazy and the lazy line, and can figure out
        // whether the lazy line started a new flow block.
        // If it did, we exit the current containers between the two flow blocks.

        if (self.parser.lazy[token.start.line]) {
          let index = childFlow.events.length;

          while (index--) {
            if (
              // The token starts before the line ending…
              childFlow.events[index][1].start.offset < lineStartOffset && // …and either is not ended yet…
              (!childFlow.events[index][1].end || // …or ends after it.
                childFlow.events[index][1].end.offset > lineStartOffset)
            ) {
              // Exit: there’s still something open, which means it’s a lazy line
              // part of something.
              return
            }
          } // Note: this algorithm for moving events around is similar to the
          // algorithm when closing flow in `documentContinue`.

          const indexBeforeExits = self.events.length;
          let indexBeforeFlow = indexBeforeExits;
          /** @type {boolean|undefined} */

          let seen;
          /** @type {Point|undefined} */

          let point; // Find the previous chunk (the one before the lazy line).

          while (indexBeforeFlow--) {
            if (
              self.events[indexBeforeFlow][0] === 'exit' &&
              self.events[indexBeforeFlow][1].type === 'chunkFlow'
            ) {
              if (seen) {
                point = self.events[indexBeforeFlow][1].end;
                break
              }

              seen = true;
            }
          }

          exitContainers(continued); // Fix positions.

          index = indexBeforeExits;

          while (index < self.events.length) {
            self.events[index][1].end = Object.assign({}, point);
            index++;
          } // Inject the exits earlier (they’re still also at the end).

          splice(
            self.events,
            indexBeforeFlow + 1,
            0,
            self.events.slice(indexBeforeExits)
          ); // Discard the duplicate exits.

          self.events.length = index;
        }
      }
      /**
       * @param {number} size
       * @returns {void}
       */

      function exitContainers(size) {
        let index = stack.length; // Exit open containers.

        while (index-- > size) {
          const entry = stack[index];
          self.containerState = entry[1];
          entry[0].exit.call(self, effects);
        }

        stack.length = size;
      }

      function closeFlow() {
        childFlow.write([null]);
        childToken = undefined;
        childFlow = undefined;
        self.containerState._closeFlow = undefined;
      }
    }
    /** @type {Tokenizer} */

    function tokenizeContainer(effects, ok, nok) {
      return factorySpace(
        effects,
        effects.attempt(this.parser.constructs.document, ok, nok),
        'linePrefix',
        this.parser.constructs.disable.null.includes('codeIndented') ? undefined : 4
      )
    }

    /**
     * @typedef {import('micromark-util-types').Code} Code
     */

    /**
     * Classify whether a character code represents whitespace, punctuation, or
     * something else.
     *
     * Used for attention (emphasis, strong), whose sequences can open or close
     * based on the class of surrounding characters.
     *
     * Note that eof (`null`) is seen as whitespace.
     *
     * @param {Code} code
     * @returns {number|undefined}
     */
    function classifyCharacter(code) {
      if (
        code === null ||
        markdownLineEndingOrSpace(code) ||
        unicodeWhitespace(code)
      ) {
        return 1
      }

      if (unicodePunctuation(code)) {
        return 2
      }
    }

    /**
     * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
     * @typedef {import('micromark-util-types').Event} Event
     * @typedef {import('micromark-util-types').Resolver} Resolver
     */

    /**
     * Call all `resolveAll`s.
     *
     * @param {{resolveAll?: Resolver}[]} constructs
     * @param {Event[]} events
     * @param {TokenizeContext} context
     * @returns {Event[]}
     */
    function resolveAll(constructs, events, context) {
      /** @type {Resolver[]} */
      const called = [];
      let index = -1;

      while (++index < constructs.length) {
        const resolve = constructs[index].resolveAll;

        if (resolve && !called.includes(resolve)) {
          events = resolve(events, context);
          called.push(resolve);
        }
      }

      return events
    }

    /**
     * @typedef {import('micromark-util-types').Construct} Construct
     * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
     * @typedef {import('micromark-util-types').Resolver} Resolver
     * @typedef {import('micromark-util-types').State} State
     * @typedef {import('micromark-util-types').Token} Token
     * @typedef {import('micromark-util-types').Event} Event
     * @typedef {import('micromark-util-types').Code} Code
     * @typedef {import('micromark-util-types').Point} Point
     */

    /** @type {Construct} */
    const attention = {
      name: 'attention',
      tokenize: tokenizeAttention,
      resolveAll: resolveAllAttention
    };
    /**
     * Take all events and resolve attention to emphasis or strong.
     *
     * @type {Resolver}
     */

    function resolveAllAttention(events, context) {
      let index = -1;
      /** @type {number} */

      let open;
      /** @type {Token} */

      let group;
      /** @type {Token} */

      let text;
      /** @type {Token} */

      let openingSequence;
      /** @type {Token} */

      let closingSequence;
      /** @type {number} */

      let use;
      /** @type {Event[]} */

      let nextEvents;
      /** @type {number} */

      let offset; // Walk through all events.
      //
      // Note: performance of this is fine on an mb of normal markdown, but it’s
      // a bottleneck for malicious stuff.

      while (++index < events.length) {
        // Find a token that can close.
        if (
          events[index][0] === 'enter' &&
          events[index][1].type === 'attentionSequence' &&
          events[index][1]._close
        ) {
          open = index; // Now walk back to find an opener.

          while (open--) {
            // Find a token that can open the closer.
            if (
              events[open][0] === 'exit' &&
              events[open][1].type === 'attentionSequence' &&
              events[open][1]._open && // If the markers are the same:
              context.sliceSerialize(events[open][1]).charCodeAt(0) ===
                context.sliceSerialize(events[index][1]).charCodeAt(0)
            ) {
              // If the opening can close or the closing can open,
              // and the close size *is not* a multiple of three,
              // but the sum of the opening and closing size *is* multiple of three,
              // then don’t match.
              if (
                (events[open][1]._close || events[index][1]._open) &&
                (events[index][1].end.offset - events[index][1].start.offset) % 3 &&
                !(
                  (events[open][1].end.offset -
                    events[open][1].start.offset +
                    events[index][1].end.offset -
                    events[index][1].start.offset) %
                  3
                )
              ) {
                continue
              } // Number of markers to use from the sequence.

              use =
                events[open][1].end.offset - events[open][1].start.offset > 1 &&
                events[index][1].end.offset - events[index][1].start.offset > 1
                  ? 2
                  : 1;
              const start = Object.assign({}, events[open][1].end);
              const end = Object.assign({}, events[index][1].start);
              movePoint(start, -use);
              movePoint(end, use);
              openingSequence = {
                type: use > 1 ? 'strongSequence' : 'emphasisSequence',
                start,
                end: Object.assign({}, events[open][1].end)
              };
              closingSequence = {
                type: use > 1 ? 'strongSequence' : 'emphasisSequence',
                start: Object.assign({}, events[index][1].start),
                end
              };
              text = {
                type: use > 1 ? 'strongText' : 'emphasisText',
                start: Object.assign({}, events[open][1].end),
                end: Object.assign({}, events[index][1].start)
              };
              group = {
                type: use > 1 ? 'strong' : 'emphasis',
                start: Object.assign({}, openingSequence.start),
                end: Object.assign({}, closingSequence.end)
              };
              events[open][1].end = Object.assign({}, openingSequence.start);
              events[index][1].start = Object.assign({}, closingSequence.end);
              nextEvents = []; // If there are more markers in the opening, add them before.

              if (events[open][1].end.offset - events[open][1].start.offset) {
                nextEvents = push(nextEvents, [
                  ['enter', events[open][1], context],
                  ['exit', events[open][1], context]
                ]);
              } // Opening.

              nextEvents = push(nextEvents, [
                ['enter', group, context],
                ['enter', openingSequence, context],
                ['exit', openingSequence, context],
                ['enter', text, context]
              ]); // Between.

              nextEvents = push(
                nextEvents,
                resolveAll(
                  context.parser.constructs.insideSpan.null,
                  events.slice(open + 1, index),
                  context
                )
              ); // Closing.

              nextEvents = push(nextEvents, [
                ['exit', text, context],
                ['enter', closingSequence, context],
                ['exit', closingSequence, context],
                ['exit', group, context]
              ]); // If there are more markers in the closing, add them after.

              if (events[index][1].end.offset - events[index][1].start.offset) {
                offset = 2;
                nextEvents = push(nextEvents, [
                  ['enter', events[index][1], context],
                  ['exit', events[index][1], context]
                ]);
              } else {
                offset = 0;
              }

              splice(events, open - 1, index - open + 3, nextEvents);
              index = open + nextEvents.length - offset - 2;
              break
            }
          }
        }
      } // Remove remaining sequences.

      index = -1;

      while (++index < events.length) {
        if (events[index][1].type === 'attentionSequence') {
          events[index][1].type = 'data';
        }
      }

      return events
    }
    /** @type {Tokenizer} */

    function tokenizeAttention(effects, ok) {
      const attentionMarkers = this.parser.constructs.attentionMarkers.null;
      const previous = this.previous;
      const before = classifyCharacter(previous);
      /** @type {NonNullable<Code>} */

      let marker;
      return start
      /** @type {State} */

      function start(code) {
        effects.enter('attentionSequence');
        marker = code;
        return sequence(code)
      }
      /** @type {State} */

      function sequence(code) {
        if (code === marker) {
          effects.consume(code);
          return sequence
        }

        const token = effects.exit('attentionSequence');
        const after = classifyCharacter(code);
        const open =
          !after || (after === 2 && before) || attentionMarkers.includes(code);
        const close =
          !before || (before === 2 && after) || attentionMarkers.includes(previous);
        token._open = Boolean(marker === 42 ? open : open && (before || !close));
        token._close = Boolean(marker === 42 ? close : close && (after || !open));
        return ok(code)
      }
    }
    /**
     * Move a point a bit.
     *
     * Note: `move` only works inside lines! It’s not possible to move past other
     * chunks (replacement characters, tabs, or line endings).
     *
     * @param {Point} point
     * @param {number} offset
     * @returns {void}
     */

    function movePoint(point, offset) {
      point.column += offset;
      point.offset += offset;
      point._bufferIndex += offset;
    }

    /**
     * @typedef {import('micromark-util-types').Construct} Construct
     * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
     * @typedef {import('micromark-util-types').State} State
     */

    /** @type {Construct} */
    const autolink = {
      name: 'autolink',
      tokenize: tokenizeAutolink
    };
    /** @type {Tokenizer} */

    function tokenizeAutolink(effects, ok, nok) {
      let size = 1;
      return start
      /** @type {State} */

      function start(code) {
        effects.enter('autolink');
        effects.enter('autolinkMarker');
        effects.consume(code);
        effects.exit('autolinkMarker');
        effects.enter('autolinkProtocol');
        return open
      }
      /** @type {State} */

      function open(code) {
        if (asciiAlpha(code)) {
          effects.consume(code);
          return schemeOrEmailAtext
        }

        return asciiAtext(code) ? emailAtext(code) : nok(code)
      }
      /** @type {State} */

      function schemeOrEmailAtext(code) {
        return code === 43 || code === 45 || code === 46 || asciiAlphanumeric(code)
          ? schemeInsideOrEmailAtext(code)
          : emailAtext(code)
      }
      /** @type {State} */

      function schemeInsideOrEmailAtext(code) {
        if (code === 58) {
          effects.consume(code);
          return urlInside
        }

        if (
          (code === 43 || code === 45 || code === 46 || asciiAlphanumeric(code)) &&
          size++ < 32
        ) {
          effects.consume(code);
          return schemeInsideOrEmailAtext
        }

        return emailAtext(code)
      }
      /** @type {State} */

      function urlInside(code) {
        if (code === 62) {
          effects.exit('autolinkProtocol');
          return end(code)
        }

        if (code === null || code === 32 || code === 60 || asciiControl(code)) {
          return nok(code)
        }

        effects.consume(code);
        return urlInside
      }
      /** @type {State} */

      function emailAtext(code) {
        if (code === 64) {
          effects.consume(code);
          size = 0;
          return emailAtSignOrDot
        }

        if (asciiAtext(code)) {
          effects.consume(code);
          return emailAtext
        }

        return nok(code)
      }
      /** @type {State} */

      function emailAtSignOrDot(code) {
        return asciiAlphanumeric(code) ? emailLabel(code) : nok(code)
      }
      /** @type {State} */

      function emailLabel(code) {
        if (code === 46) {
          effects.consume(code);
          size = 0;
          return emailAtSignOrDot
        }

        if (code === 62) {
          // Exit, then change the type.
          effects.exit('autolinkProtocol').type = 'autolinkEmail';
          return end(code)
        }

        return emailValue(code)
      }
      /** @type {State} */

      function emailValue(code) {
        if ((code === 45 || asciiAlphanumeric(code)) && size++ < 63) {
          effects.consume(code);
          return code === 45 ? emailValue : emailLabel
        }

        return nok(code)
      }
      /** @type {State} */

      function end(code) {
        effects.enter('autolinkMarker');
        effects.consume(code);
        effects.exit('autolinkMarker');
        effects.exit('autolink');
        return ok
      }
    }

    /**
     * @typedef {import('micromark-util-types').Construct} Construct
     * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
     * @typedef {import('micromark-util-types').State} State
     */

    /** @type {Construct} */
    const blankLine = {
      tokenize: tokenizeBlankLine,
      partial: true
    };
    /** @type {Tokenizer} */

    function tokenizeBlankLine(effects, ok, nok) {
      return factorySpace(effects, afterWhitespace, 'linePrefix')
      /** @type {State} */

      function afterWhitespace(code) {
        return code === null || markdownLineEnding(code) ? ok(code) : nok(code)
      }
    }

    /**
     * @typedef {import('micromark-util-types').Construct} Construct
     * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
     * @typedef {import('micromark-util-types').Exiter} Exiter
     * @typedef {import('micromark-util-types').State} State
     */

    /** @type {Construct} */
    const blockQuote = {
      name: 'blockQuote',
      tokenize: tokenizeBlockQuoteStart,
      continuation: {
        tokenize: tokenizeBlockQuoteContinuation
      },
      exit
    };
    /** @type {Tokenizer} */

    function tokenizeBlockQuoteStart(effects, ok, nok) {
      const self = this;
      return start
      /** @type {State} */

      function start(code) {
        if (code === 62) {
          const state = self.containerState;

          if (!state.open) {
            effects.enter('blockQuote', {
              _container: true
            });
            state.open = true;
          }

          effects.enter('blockQuotePrefix');
          effects.enter('blockQuoteMarker');
          effects.consume(code);
          effects.exit('blockQuoteMarker');
          return after
        }

        return nok(code)
      }
      /** @type {State} */

      function after(code) {
        if (markdownSpace(code)) {
          effects.enter('blockQuotePrefixWhitespace');
          effects.consume(code);
          effects.exit('blockQuotePrefixWhitespace');
          effects.exit('blockQuotePrefix');
          return ok
        }

        effects.exit('blockQuotePrefix');
        return ok(code)
      }
    }
    /** @type {Tokenizer} */

    function tokenizeBlockQuoteContinuation(effects, ok, nok) {
      return factorySpace(
        effects,
        effects.attempt(blockQuote, ok, nok),
        'linePrefix',
        this.parser.constructs.disable.null.includes('codeIndented') ? undefined : 4
      )
    }
    /** @type {Exiter} */

    function exit(effects) {
      effects.exit('blockQuote');
    }

    /**
     * @typedef {import('micromark-util-types').Construct} Construct
     * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
     * @typedef {import('micromark-util-types').State} State
     */

    /** @type {Construct} */
    const characterEscape = {
      name: 'characterEscape',
      tokenize: tokenizeCharacterEscape
    };
    /** @type {Tokenizer} */

    function tokenizeCharacterEscape(effects, ok, nok) {
      return start
      /** @type {State} */

      function start(code) {
        effects.enter('characterEscape');
        effects.enter('escapeMarker');
        effects.consume(code);
        effects.exit('escapeMarker');
        return open
      }
      /** @type {State} */

      function open(code) {
        if (asciiPunctuation(code)) {
          effects.enter('characterEscapeValue');
          effects.consume(code);
          effects.exit('characterEscapeValue');
          effects.exit('characterEscape');
          return ok
        }

        return nok(code)
      }
    }

    /**
     * Map of named character references.
     *
     * @type {Record<string, string>}
     */
    const characterEntities = {
      AElig: 'Æ',
      AMP: '&',
      Aacute: 'Á',
      Abreve: 'Ă',
      Acirc: 'Â',
      Acy: 'А',
      Afr: '𝔄',
      Agrave: 'À',
      Alpha: 'Α',
      Amacr: 'Ā',
      And: '⩓',
      Aogon: 'Ą',
      Aopf: '𝔸',
      ApplyFunction: '⁡',
      Aring: 'Å',
      Ascr: '𝒜',
      Assign: '≔',
      Atilde: 'Ã',
      Auml: 'Ä',
      Backslash: '∖',
      Barv: '⫧',
      Barwed: '⌆',
      Bcy: 'Б',
      Because: '∵',
      Bernoullis: 'ℬ',
      Beta: 'Β',
      Bfr: '𝔅',
      Bopf: '𝔹',
      Breve: '˘',
      Bscr: 'ℬ',
      Bumpeq: '≎',
      CHcy: 'Ч',
      COPY: '©',
      Cacute: 'Ć',
      Cap: '⋒',
      CapitalDifferentialD: 'ⅅ',
      Cayleys: 'ℭ',
      Ccaron: 'Č',
      Ccedil: 'Ç',
      Ccirc: 'Ĉ',
      Cconint: '∰',
      Cdot: 'Ċ',
      Cedilla: '¸',
      CenterDot: '·',
      Cfr: 'ℭ',
      Chi: 'Χ',
      CircleDot: '⊙',
      CircleMinus: '⊖',
      CirclePlus: '⊕',
      CircleTimes: '⊗',
      ClockwiseContourIntegral: '∲',
      CloseCurlyDoubleQuote: '”',
      CloseCurlyQuote: '’',
      Colon: '∷',
      Colone: '⩴',
      Congruent: '≡',
      Conint: '∯',
      ContourIntegral: '∮',
      Copf: 'ℂ',
      Coproduct: '∐',
      CounterClockwiseContourIntegral: '∳',
      Cross: '⨯',
      Cscr: '𝒞',
      Cup: '⋓',
      CupCap: '≍',
      DD: 'ⅅ',
      DDotrahd: '⤑',
      DJcy: 'Ђ',
      DScy: 'Ѕ',
      DZcy: 'Џ',
      Dagger: '‡',
      Darr: '↡',
      Dashv: '⫤',
      Dcaron: 'Ď',
      Dcy: 'Д',
      Del: '∇',
      Delta: 'Δ',
      Dfr: '𝔇',
      DiacriticalAcute: '´',
      DiacriticalDot: '˙',
      DiacriticalDoubleAcute: '˝',
      DiacriticalGrave: '`',
      DiacriticalTilde: '˜',
      Diamond: '⋄',
      DifferentialD: 'ⅆ',
      Dopf: '𝔻',
      Dot: '¨',
      DotDot: '⃜',
      DotEqual: '≐',
      DoubleContourIntegral: '∯',
      DoubleDot: '¨',
      DoubleDownArrow: '⇓',
      DoubleLeftArrow: '⇐',
      DoubleLeftRightArrow: '⇔',
      DoubleLeftTee: '⫤',
      DoubleLongLeftArrow: '⟸',
      DoubleLongLeftRightArrow: '⟺',
      DoubleLongRightArrow: '⟹',
      DoubleRightArrow: '⇒',
      DoubleRightTee: '⊨',
      DoubleUpArrow: '⇑',
      DoubleUpDownArrow: '⇕',
      DoubleVerticalBar: '∥',
      DownArrow: '↓',
      DownArrowBar: '⤓',
      DownArrowUpArrow: '⇵',
      DownBreve: '̑',
      DownLeftRightVector: '⥐',
      DownLeftTeeVector: '⥞',
      DownLeftVector: '↽',
      DownLeftVectorBar: '⥖',
      DownRightTeeVector: '⥟',
      DownRightVector: '⇁',
      DownRightVectorBar: '⥗',
      DownTee: '⊤',
      DownTeeArrow: '↧',
      Downarrow: '⇓',
      Dscr: '𝒟',
      Dstrok: 'Đ',
      ENG: 'Ŋ',
      ETH: 'Ð',
      Eacute: 'É',
      Ecaron: 'Ě',
      Ecirc: 'Ê',
      Ecy: 'Э',
      Edot: 'Ė',
      Efr: '𝔈',
      Egrave: 'È',
      Element: '∈',
      Emacr: 'Ē',
      EmptySmallSquare: '◻',
      EmptyVerySmallSquare: '▫',
      Eogon: 'Ę',
      Eopf: '𝔼',
      Epsilon: 'Ε',
      Equal: '⩵',
      EqualTilde: '≂',
      Equilibrium: '⇌',
      Escr: 'ℰ',
      Esim: '⩳',
      Eta: 'Η',
      Euml: 'Ë',
      Exists: '∃',
      ExponentialE: 'ⅇ',
      Fcy: 'Ф',
      Ffr: '𝔉',
      FilledSmallSquare: '◼',
      FilledVerySmallSquare: '▪',
      Fopf: '𝔽',
      ForAll: '∀',
      Fouriertrf: 'ℱ',
      Fscr: 'ℱ',
      GJcy: 'Ѓ',
      GT: '>',
      Gamma: 'Γ',
      Gammad: 'Ϝ',
      Gbreve: 'Ğ',
      Gcedil: 'Ģ',
      Gcirc: 'Ĝ',
      Gcy: 'Г',
      Gdot: 'Ġ',
      Gfr: '𝔊',
      Gg: '⋙',
      Gopf: '𝔾',
      GreaterEqual: '≥',
      GreaterEqualLess: '⋛',
      GreaterFullEqual: '≧',
      GreaterGreater: '⪢',
      GreaterLess: '≷',
      GreaterSlantEqual: '⩾',
      GreaterTilde: '≳',
      Gscr: '𝒢',
      Gt: '≫',
      HARDcy: 'Ъ',
      Hacek: 'ˇ',
      Hat: '^',
      Hcirc: 'Ĥ',
      Hfr: 'ℌ',
      HilbertSpace: 'ℋ',
      Hopf: 'ℍ',
      HorizontalLine: '─',
      Hscr: 'ℋ',
      Hstrok: 'Ħ',
      HumpDownHump: '≎',
      HumpEqual: '≏',
      IEcy: 'Е',
      IJlig: 'Ĳ',
      IOcy: 'Ё',
      Iacute: 'Í',
      Icirc: 'Î',
      Icy: 'И',
      Idot: 'İ',
      Ifr: 'ℑ',
      Igrave: 'Ì',
      Im: 'ℑ',
      Imacr: 'Ī',
      ImaginaryI: 'ⅈ',
      Implies: '⇒',
      Int: '∬',
      Integral: '∫',
      Intersection: '⋂',
      InvisibleComma: '⁣',
      InvisibleTimes: '⁢',
      Iogon: 'Į',
      Iopf: '𝕀',
      Iota: 'Ι',
      Iscr: 'ℐ',
      Itilde: 'Ĩ',
      Iukcy: 'І',
      Iuml: 'Ï',
      Jcirc: 'Ĵ',
      Jcy: 'Й',
      Jfr: '𝔍',
      Jopf: '𝕁',
      Jscr: '𝒥',
      Jsercy: 'Ј',
      Jukcy: 'Є',
      KHcy: 'Х',
      KJcy: 'Ќ',
      Kappa: 'Κ',
      Kcedil: 'Ķ',
      Kcy: 'К',
      Kfr: '𝔎',
      Kopf: '𝕂',
      Kscr: '𝒦',
      LJcy: 'Љ',
      LT: '<',
      Lacute: 'Ĺ',
      Lambda: 'Λ',
      Lang: '⟪',
      Laplacetrf: 'ℒ',
      Larr: '↞',
      Lcaron: 'Ľ',
      Lcedil: 'Ļ',
      Lcy: 'Л',
      LeftAngleBracket: '⟨',
      LeftArrow: '←',
      LeftArrowBar: '⇤',
      LeftArrowRightArrow: '⇆',
      LeftCeiling: '⌈',
      LeftDoubleBracket: '⟦',
      LeftDownTeeVector: '⥡',
      LeftDownVector: '⇃',
      LeftDownVectorBar: '⥙',
      LeftFloor: '⌊',
      LeftRightArrow: '↔',
      LeftRightVector: '⥎',
      LeftTee: '⊣',
      LeftTeeArrow: '↤',
      LeftTeeVector: '⥚',
      LeftTriangle: '⊲',
      LeftTriangleBar: '⧏',
      LeftTriangleEqual: '⊴',
      LeftUpDownVector: '⥑',
      LeftUpTeeVector: '⥠',
      LeftUpVector: '↿',
      LeftUpVectorBar: '⥘',
      LeftVector: '↼',
      LeftVectorBar: '⥒',
      Leftarrow: '⇐',
      Leftrightarrow: '⇔',
      LessEqualGreater: '⋚',
      LessFullEqual: '≦',
      LessGreater: '≶',
      LessLess: '⪡',
      LessSlantEqual: '⩽',
      LessTilde: '≲',
      Lfr: '𝔏',
      Ll: '⋘',
      Lleftarrow: '⇚',
      Lmidot: 'Ŀ',
      LongLeftArrow: '⟵',
      LongLeftRightArrow: '⟷',
      LongRightArrow: '⟶',
      Longleftarrow: '⟸',
      Longleftrightarrow: '⟺',
      Longrightarrow: '⟹',
      Lopf: '𝕃',
      LowerLeftArrow: '↙',
      LowerRightArrow: '↘',
      Lscr: 'ℒ',
      Lsh: '↰',
      Lstrok: 'Ł',
      Lt: '≪',
      Map: '⤅',
      Mcy: 'М',
      MediumSpace: ' ',
      Mellintrf: 'ℳ',
      Mfr: '𝔐',
      MinusPlus: '∓',
      Mopf: '𝕄',
      Mscr: 'ℳ',
      Mu: 'Μ',
      NJcy: 'Њ',
      Nacute: 'Ń',
      Ncaron: 'Ň',
      Ncedil: 'Ņ',
      Ncy: 'Н',
      NegativeMediumSpace: '​',
      NegativeThickSpace: '​',
      NegativeThinSpace: '​',
      NegativeVeryThinSpace: '​',
      NestedGreaterGreater: '≫',
      NestedLessLess: '≪',
      NewLine: '\n',
      Nfr: '𝔑',
      NoBreak: '⁠',
      NonBreakingSpace: ' ',
      Nopf: 'ℕ',
      Not: '⫬',
      NotCongruent: '≢',
      NotCupCap: '≭',
      NotDoubleVerticalBar: '∦',
      NotElement: '∉',
      NotEqual: '≠',
      NotEqualTilde: '≂̸',
      NotExists: '∄',
      NotGreater: '≯',
      NotGreaterEqual: '≱',
      NotGreaterFullEqual: '≧̸',
      NotGreaterGreater: '≫̸',
      NotGreaterLess: '≹',
      NotGreaterSlantEqual: '⩾̸',
      NotGreaterTilde: '≵',
      NotHumpDownHump: '≎̸',
      NotHumpEqual: '≏̸',
      NotLeftTriangle: '⋪',
      NotLeftTriangleBar: '⧏̸',
      NotLeftTriangleEqual: '⋬',
      NotLess: '≮',
      NotLessEqual: '≰',
      NotLessGreater: '≸',
      NotLessLess: '≪̸',
      NotLessSlantEqual: '⩽̸',
      NotLessTilde: '≴',
      NotNestedGreaterGreater: '⪢̸',
      NotNestedLessLess: '⪡̸',
      NotPrecedes: '⊀',
      NotPrecedesEqual: '⪯̸',
      NotPrecedesSlantEqual: '⋠',
      NotReverseElement: '∌',
      NotRightTriangle: '⋫',
      NotRightTriangleBar: '⧐̸',
      NotRightTriangleEqual: '⋭',
      NotSquareSubset: '⊏̸',
      NotSquareSubsetEqual: '⋢',
      NotSquareSuperset: '⊐̸',
      NotSquareSupersetEqual: '⋣',
      NotSubset: '⊂⃒',
      NotSubsetEqual: '⊈',
      NotSucceeds: '⊁',
      NotSucceedsEqual: '⪰̸',
      NotSucceedsSlantEqual: '⋡',
      NotSucceedsTilde: '≿̸',
      NotSuperset: '⊃⃒',
      NotSupersetEqual: '⊉',
      NotTilde: '≁',
      NotTildeEqual: '≄',
      NotTildeFullEqual: '≇',
      NotTildeTilde: '≉',
      NotVerticalBar: '∤',
      Nscr: '𝒩',
      Ntilde: 'Ñ',
      Nu: 'Ν',
      OElig: 'Œ',
      Oacute: 'Ó',
      Ocirc: 'Ô',
      Ocy: 'О',
      Odblac: 'Ő',
      Ofr: '𝔒',
      Ograve: 'Ò',
      Omacr: 'Ō',
      Omega: 'Ω',
      Omicron: 'Ο',
      Oopf: '𝕆',
      OpenCurlyDoubleQuote: '“',
      OpenCurlyQuote: '‘',
      Or: '⩔',
      Oscr: '𝒪',
      Oslash: 'Ø',
      Otilde: 'Õ',
      Otimes: '⨷',
      Ouml: 'Ö',
      OverBar: '‾',
      OverBrace: '⏞',
      OverBracket: '⎴',
      OverParenthesis: '⏜',
      PartialD: '∂',
      Pcy: 'П',
      Pfr: '𝔓',
      Phi: 'Φ',
      Pi: 'Π',
      PlusMinus: '±',
      Poincareplane: 'ℌ',
      Popf: 'ℙ',
      Pr: '⪻',
      Precedes: '≺',
      PrecedesEqual: '⪯',
      PrecedesSlantEqual: '≼',
      PrecedesTilde: '≾',
      Prime: '″',
      Product: '∏',
      Proportion: '∷',
      Proportional: '∝',
      Pscr: '𝒫',
      Psi: 'Ψ',
      QUOT: '"',
      Qfr: '𝔔',
      Qopf: 'ℚ',
      Qscr: '𝒬',
      RBarr: '⤐',
      REG: '®',
      Racute: 'Ŕ',
      Rang: '⟫',
      Rarr: '↠',
      Rarrtl: '⤖',
      Rcaron: 'Ř',
      Rcedil: 'Ŗ',
      Rcy: 'Р',
      Re: 'ℜ',
      ReverseElement: '∋',
      ReverseEquilibrium: '⇋',
      ReverseUpEquilibrium: '⥯',
      Rfr: 'ℜ',
      Rho: 'Ρ',
      RightAngleBracket: '⟩',
      RightArrow: '→',
      RightArrowBar: '⇥',
      RightArrowLeftArrow: '⇄',
      RightCeiling: '⌉',
      RightDoubleBracket: '⟧',
      RightDownTeeVector: '⥝',
      RightDownVector: '⇂',
      RightDownVectorBar: '⥕',
      RightFloor: '⌋',
      RightTee: '⊢',
      RightTeeArrow: '↦',
      RightTeeVector: '⥛',
      RightTriangle: '⊳',
      RightTriangleBar: '⧐',
      RightTriangleEqual: '⊵',
      RightUpDownVector: '⥏',
      RightUpTeeVector: '⥜',
      RightUpVector: '↾',
      RightUpVectorBar: '⥔',
      RightVector: '⇀',
      RightVectorBar: '⥓',
      Rightarrow: '⇒',
      Ropf: 'ℝ',
      RoundImplies: '⥰',
      Rrightarrow: '⇛',
      Rscr: 'ℛ',
      Rsh: '↱',
      RuleDelayed: '⧴',
      SHCHcy: 'Щ',
      SHcy: 'Ш',
      SOFTcy: 'Ь',
      Sacute: 'Ś',
      Sc: '⪼',
      Scaron: 'Š',
      Scedil: 'Ş',
      Scirc: 'Ŝ',
      Scy: 'С',
      Sfr: '𝔖',
      ShortDownArrow: '↓',
      ShortLeftArrow: '←',
      ShortRightArrow: '→',
      ShortUpArrow: '↑',
      Sigma: 'Σ',
      SmallCircle: '∘',
      Sopf: '𝕊',
      Sqrt: '√',
      Square: '□',
      SquareIntersection: '⊓',
      SquareSubset: '⊏',
      SquareSubsetEqual: '⊑',
      SquareSuperset: '⊐',
      SquareSupersetEqual: '⊒',
      SquareUnion: '⊔',
      Sscr: '𝒮',
      Star: '⋆',
      Sub: '⋐',
      Subset: '⋐',
      SubsetEqual: '⊆',
      Succeeds: '≻',
      SucceedsEqual: '⪰',
      SucceedsSlantEqual: '≽',
      SucceedsTilde: '≿',
      SuchThat: '∋',
      Sum: '∑',
      Sup: '⋑',
      Superset: '⊃',
      SupersetEqual: '⊇',
      Supset: '⋑',
      THORN: 'Þ',
      TRADE: '™',
      TSHcy: 'Ћ',
      TScy: 'Ц',
      Tab: '\t',
      Tau: 'Τ',
      Tcaron: 'Ť',
      Tcedil: 'Ţ',
      Tcy: 'Т',
      Tfr: '𝔗',
      Therefore: '∴',
      Theta: 'Θ',
      ThickSpace: '  ',
      ThinSpace: ' ',
      Tilde: '∼',
      TildeEqual: '≃',
      TildeFullEqual: '≅',
      TildeTilde: '≈',
      Topf: '𝕋',
      TripleDot: '⃛',
      Tscr: '𝒯',
      Tstrok: 'Ŧ',
      Uacute: 'Ú',
      Uarr: '↟',
      Uarrocir: '⥉',
      Ubrcy: 'Ў',
      Ubreve: 'Ŭ',
      Ucirc: 'Û',
      Ucy: 'У',
      Udblac: 'Ű',
      Ufr: '𝔘',
      Ugrave: 'Ù',
      Umacr: 'Ū',
      UnderBar: '_',
      UnderBrace: '⏟',
      UnderBracket: '⎵',
      UnderParenthesis: '⏝',
      Union: '⋃',
      UnionPlus: '⊎',
      Uogon: 'Ų',
      Uopf: '𝕌',
      UpArrow: '↑',
      UpArrowBar: '⤒',
      UpArrowDownArrow: '⇅',
      UpDownArrow: '↕',
      UpEquilibrium: '⥮',
      UpTee: '⊥',
      UpTeeArrow: '↥',
      Uparrow: '⇑',
      Updownarrow: '⇕',
      UpperLeftArrow: '↖',
      UpperRightArrow: '↗',
      Upsi: 'ϒ',
      Upsilon: 'Υ',
      Uring: 'Ů',
      Uscr: '𝒰',
      Utilde: 'Ũ',
      Uuml: 'Ü',
      VDash: '⊫',
      Vbar: '⫫',
      Vcy: 'В',
      Vdash: '⊩',
      Vdashl: '⫦',
      Vee: '⋁',
      Verbar: '‖',
      Vert: '‖',
      VerticalBar: '∣',
      VerticalLine: '|',
      VerticalSeparator: '❘',
      VerticalTilde: '≀',
      VeryThinSpace: ' ',
      Vfr: '𝔙',
      Vopf: '𝕍',
      Vscr: '𝒱',
      Vvdash: '⊪',
      Wcirc: 'Ŵ',
      Wedge: '⋀',
      Wfr: '𝔚',
      Wopf: '𝕎',
      Wscr: '𝒲',
      Xfr: '𝔛',
      Xi: 'Ξ',
      Xopf: '𝕏',
      Xscr: '𝒳',
      YAcy: 'Я',
      YIcy: 'Ї',
      YUcy: 'Ю',
      Yacute: 'Ý',
      Ycirc: 'Ŷ',
      Ycy: 'Ы',
      Yfr: '𝔜',
      Yopf: '𝕐',
      Yscr: '𝒴',
      Yuml: 'Ÿ',
      ZHcy: 'Ж',
      Zacute: 'Ź',
      Zcaron: 'Ž',
      Zcy: 'З',
      Zdot: 'Ż',
      ZeroWidthSpace: '​',
      Zeta: 'Ζ',
      Zfr: 'ℨ',
      Zopf: 'ℤ',
      Zscr: '𝒵',
      aacute: 'á',
      abreve: 'ă',
      ac: '∾',
      acE: '∾̳',
      acd: '∿',
      acirc: 'â',
      acute: '´',
      acy: 'а',
      aelig: 'æ',
      af: '⁡',
      afr: '𝔞',
      agrave: 'à',
      alefsym: 'ℵ',
      aleph: 'ℵ',
      alpha: 'α',
      amacr: 'ā',
      amalg: '⨿',
      amp: '&',
      and: '∧',
      andand: '⩕',
      andd: '⩜',
      andslope: '⩘',
      andv: '⩚',
      ang: '∠',
      ange: '⦤',
      angle: '∠',
      angmsd: '∡',
      angmsdaa: '⦨',
      angmsdab: '⦩',
      angmsdac: '⦪',
      angmsdad: '⦫',
      angmsdae: '⦬',
      angmsdaf: '⦭',
      angmsdag: '⦮',
      angmsdah: '⦯',
      angrt: '∟',
      angrtvb: '⊾',
      angrtvbd: '⦝',
      angsph: '∢',
      angst: 'Å',
      angzarr: '⍼',
      aogon: 'ą',
      aopf: '𝕒',
      ap: '≈',
      apE: '⩰',
      apacir: '⩯',
      ape: '≊',
      apid: '≋',
      apos: "'",
      approx: '≈',
      approxeq: '≊',
      aring: 'å',
      ascr: '𝒶',
      ast: '*',
      asymp: '≈',
      asympeq: '≍',
      atilde: 'ã',
      auml: 'ä',
      awconint: '∳',
      awint: '⨑',
      bNot: '⫭',
      backcong: '≌',
      backepsilon: '϶',
      backprime: '‵',
      backsim: '∽',
      backsimeq: '⋍',
      barvee: '⊽',
      barwed: '⌅',
      barwedge: '⌅',
      bbrk: '⎵',
      bbrktbrk: '⎶',
      bcong: '≌',
      bcy: 'б',
      bdquo: '„',
      becaus: '∵',
      because: '∵',
      bemptyv: '⦰',
      bepsi: '϶',
      bernou: 'ℬ',
      beta: 'β',
      beth: 'ℶ',
      between: '≬',
      bfr: '𝔟',
      bigcap: '⋂',
      bigcirc: '◯',
      bigcup: '⋃',
      bigodot: '⨀',
      bigoplus: '⨁',
      bigotimes: '⨂',
      bigsqcup: '⨆',
      bigstar: '★',
      bigtriangledown: '▽',
      bigtriangleup: '△',
      biguplus: '⨄',
      bigvee: '⋁',
      bigwedge: '⋀',
      bkarow: '⤍',
      blacklozenge: '⧫',
      blacksquare: '▪',
      blacktriangle: '▴',
      blacktriangledown: '▾',
      blacktriangleleft: '◂',
      blacktriangleright: '▸',
      blank: '␣',
      blk12: '▒',
      blk14: '░',
      blk34: '▓',
      block: '█',
      bne: '=⃥',
      bnequiv: '≡⃥',
      bnot: '⌐',
      bopf: '𝕓',
      bot: '⊥',
      bottom: '⊥',
      bowtie: '⋈',
      boxDL: '╗',
      boxDR: '╔',
      boxDl: '╖',
      boxDr: '╓',
      boxH: '═',
      boxHD: '╦',
      boxHU: '╩',
      boxHd: '╤',
      boxHu: '╧',
      boxUL: '╝',
      boxUR: '╚',
      boxUl: '╜',
      boxUr: '╙',
      boxV: '║',
      boxVH: '╬',
      boxVL: '╣',
      boxVR: '╠',
      boxVh: '╫',
      boxVl: '╢',
      boxVr: '╟',
      boxbox: '⧉',
      boxdL: '╕',
      boxdR: '╒',
      boxdl: '┐',
      boxdr: '┌',
      boxh: '─',
      boxhD: '╥',
      boxhU: '╨',
      boxhd: '┬',
      boxhu: '┴',
      boxminus: '⊟',
      boxplus: '⊞',
      boxtimes: '⊠',
      boxuL: '╛',
      boxuR: '╘',
      boxul: '┘',
      boxur: '└',
      boxv: '│',
      boxvH: '╪',
      boxvL: '╡',
      boxvR: '╞',
      boxvh: '┼',
      boxvl: '┤',
      boxvr: '├',
      bprime: '‵',
      breve: '˘',
      brvbar: '¦',
      bscr: '𝒷',
      bsemi: '⁏',
      bsim: '∽',
      bsime: '⋍',
      bsol: '\\',
      bsolb: '⧅',
      bsolhsub: '⟈',
      bull: '•',
      bullet: '•',
      bump: '≎',
      bumpE: '⪮',
      bumpe: '≏',
      bumpeq: '≏',
      cacute: 'ć',
      cap: '∩',
      capand: '⩄',
      capbrcup: '⩉',
      capcap: '⩋',
      capcup: '⩇',
      capdot: '⩀',
      caps: '∩︀',
      caret: '⁁',
      caron: 'ˇ',
      ccaps: '⩍',
      ccaron: 'č',
      ccedil: 'ç',
      ccirc: 'ĉ',
      ccups: '⩌',
      ccupssm: '⩐',
      cdot: 'ċ',
      cedil: '¸',
      cemptyv: '⦲',
      cent: '¢',
      centerdot: '·',
      cfr: '𝔠',
      chcy: 'ч',
      check: '✓',
      checkmark: '✓',
      chi: 'χ',
      cir: '○',
      cirE: '⧃',
      circ: 'ˆ',
      circeq: '≗',
      circlearrowleft: '↺',
      circlearrowright: '↻',
      circledR: '®',
      circledS: 'Ⓢ',
      circledast: '⊛',
      circledcirc: '⊚',
      circleddash: '⊝',
      cire: '≗',
      cirfnint: '⨐',
      cirmid: '⫯',
      cirscir: '⧂',
      clubs: '♣',
      clubsuit: '♣',
      colon: ':',
      colone: '≔',
      coloneq: '≔',
      comma: ',',
      commat: '@',
      comp: '∁',
      compfn: '∘',
      complement: '∁',
      complexes: 'ℂ',
      cong: '≅',
      congdot: '⩭',
      conint: '∮',
      copf: '𝕔',
      coprod: '∐',
      copy: '©',
      copysr: '℗',
      crarr: '↵',
      cross: '✗',
      cscr: '𝒸',
      csub: '⫏',
      csube: '⫑',
      csup: '⫐',
      csupe: '⫒',
      ctdot: '⋯',
      cudarrl: '⤸',
      cudarrr: '⤵',
      cuepr: '⋞',
      cuesc: '⋟',
      cularr: '↶',
      cularrp: '⤽',
      cup: '∪',
      cupbrcap: '⩈',
      cupcap: '⩆',
      cupcup: '⩊',
      cupdot: '⊍',
      cupor: '⩅',
      cups: '∪︀',
      curarr: '↷',
      curarrm: '⤼',
      curlyeqprec: '⋞',
      curlyeqsucc: '⋟',
      curlyvee: '⋎',
      curlywedge: '⋏',
      curren: '¤',
      curvearrowleft: '↶',
      curvearrowright: '↷',
      cuvee: '⋎',
      cuwed: '⋏',
      cwconint: '∲',
      cwint: '∱',
      cylcty: '⌭',
      dArr: '⇓',
      dHar: '⥥',
      dagger: '†',
      daleth: 'ℸ',
      darr: '↓',
      dash: '‐',
      dashv: '⊣',
      dbkarow: '⤏',
      dblac: '˝',
      dcaron: 'ď',
      dcy: 'д',
      dd: 'ⅆ',
      ddagger: '‡',
      ddarr: '⇊',
      ddotseq: '⩷',
      deg: '°',
      delta: 'δ',
      demptyv: '⦱',
      dfisht: '⥿',
      dfr: '𝔡',
      dharl: '⇃',
      dharr: '⇂',
      diam: '⋄',
      diamond: '⋄',
      diamondsuit: '♦',
      diams: '♦',
      die: '¨',
      digamma: 'ϝ',
      disin: '⋲',
      div: '÷',
      divide: '÷',
      divideontimes: '⋇',
      divonx: '⋇',
      djcy: 'ђ',
      dlcorn: '⌞',
      dlcrop: '⌍',
      dollar: '$',
      dopf: '𝕕',
      dot: '˙',
      doteq: '≐',
      doteqdot: '≑',
      dotminus: '∸',
      dotplus: '∔',
      dotsquare: '⊡',
      doublebarwedge: '⌆',
      downarrow: '↓',
      downdownarrows: '⇊',
      downharpoonleft: '⇃',
      downharpoonright: '⇂',
      drbkarow: '⤐',
      drcorn: '⌟',
      drcrop: '⌌',
      dscr: '𝒹',
      dscy: 'ѕ',
      dsol: '⧶',
      dstrok: 'đ',
      dtdot: '⋱',
      dtri: '▿',
      dtrif: '▾',
      duarr: '⇵',
      duhar: '⥯',
      dwangle: '⦦',
      dzcy: 'џ',
      dzigrarr: '⟿',
      eDDot: '⩷',
      eDot: '≑',
      eacute: 'é',
      easter: '⩮',
      ecaron: 'ě',
      ecir: '≖',
      ecirc: 'ê',
      ecolon: '≕',
      ecy: 'э',
      edot: 'ė',
      ee: 'ⅇ',
      efDot: '≒',
      efr: '𝔢',
      eg: '⪚',
      egrave: 'è',
      egs: '⪖',
      egsdot: '⪘',
      el: '⪙',
      elinters: '⏧',
      ell: 'ℓ',
      els: '⪕',
      elsdot: '⪗',
      emacr: 'ē',
      empty: '∅',
      emptyset: '∅',
      emptyv: '∅',
      emsp13: ' ',
      emsp14: ' ',
      emsp: ' ',
      eng: 'ŋ',
      ensp: ' ',
      eogon: 'ę',
      eopf: '𝕖',
      epar: '⋕',
      eparsl: '⧣',
      eplus: '⩱',
      epsi: 'ε',
      epsilon: 'ε',
      epsiv: 'ϵ',
      eqcirc: '≖',
      eqcolon: '≕',
      eqsim: '≂',
      eqslantgtr: '⪖',
      eqslantless: '⪕',
      equals: '=',
      equest: '≟',
      equiv: '≡',
      equivDD: '⩸',
      eqvparsl: '⧥',
      erDot: '≓',
      erarr: '⥱',
      escr: 'ℯ',
      esdot: '≐',
      esim: '≂',
      eta: 'η',
      eth: 'ð',
      euml: 'ë',
      euro: '€',
      excl: '!',
      exist: '∃',
      expectation: 'ℰ',
      exponentiale: 'ⅇ',
      fallingdotseq: '≒',
      fcy: 'ф',
      female: '♀',
      ffilig: 'ﬃ',
      fflig: 'ﬀ',
      ffllig: 'ﬄ',
      ffr: '𝔣',
      filig: 'ﬁ',
      fjlig: 'fj',
      flat: '♭',
      fllig: 'ﬂ',
      fltns: '▱',
      fnof: 'ƒ',
      fopf: '𝕗',
      forall: '∀',
      fork: '⋔',
      forkv: '⫙',
      fpartint: '⨍',
      frac12: '½',
      frac13: '⅓',
      frac14: '¼',
      frac15: '⅕',
      frac16: '⅙',
      frac18: '⅛',
      frac23: '⅔',
      frac25: '⅖',
      frac34: '¾',
      frac35: '⅗',
      frac38: '⅜',
      frac45: '⅘',
      frac56: '⅚',
      frac58: '⅝',
      frac78: '⅞',
      frasl: '⁄',
      frown: '⌢',
      fscr: '𝒻',
      gE: '≧',
      gEl: '⪌',
      gacute: 'ǵ',
      gamma: 'γ',
      gammad: 'ϝ',
      gap: '⪆',
      gbreve: 'ğ',
      gcirc: 'ĝ',
      gcy: 'г',
      gdot: 'ġ',
      ge: '≥',
      gel: '⋛',
      geq: '≥',
      geqq: '≧',
      geqslant: '⩾',
      ges: '⩾',
      gescc: '⪩',
      gesdot: '⪀',
      gesdoto: '⪂',
      gesdotol: '⪄',
      gesl: '⋛︀',
      gesles: '⪔',
      gfr: '𝔤',
      gg: '≫',
      ggg: '⋙',
      gimel: 'ℷ',
      gjcy: 'ѓ',
      gl: '≷',
      glE: '⪒',
      gla: '⪥',
      glj: '⪤',
      gnE: '≩',
      gnap: '⪊',
      gnapprox: '⪊',
      gne: '⪈',
      gneq: '⪈',
      gneqq: '≩',
      gnsim: '⋧',
      gopf: '𝕘',
      grave: '`',
      gscr: 'ℊ',
      gsim: '≳',
      gsime: '⪎',
      gsiml: '⪐',
      gt: '>',
      gtcc: '⪧',
      gtcir: '⩺',
      gtdot: '⋗',
      gtlPar: '⦕',
      gtquest: '⩼',
      gtrapprox: '⪆',
      gtrarr: '⥸',
      gtrdot: '⋗',
      gtreqless: '⋛',
      gtreqqless: '⪌',
      gtrless: '≷',
      gtrsim: '≳',
      gvertneqq: '≩︀',
      gvnE: '≩︀',
      hArr: '⇔',
      hairsp: ' ',
      half: '½',
      hamilt: 'ℋ',
      hardcy: 'ъ',
      harr: '↔',
      harrcir: '⥈',
      harrw: '↭',
      hbar: 'ℏ',
      hcirc: 'ĥ',
      hearts: '♥',
      heartsuit: '♥',
      hellip: '…',
      hercon: '⊹',
      hfr: '𝔥',
      hksearow: '⤥',
      hkswarow: '⤦',
      hoarr: '⇿',
      homtht: '∻',
      hookleftarrow: '↩',
      hookrightarrow: '↪',
      hopf: '𝕙',
      horbar: '―',
      hscr: '𝒽',
      hslash: 'ℏ',
      hstrok: 'ħ',
      hybull: '⁃',
      hyphen: '‐',
      iacute: 'í',
      ic: '⁣',
      icirc: 'î',
      icy: 'и',
      iecy: 'е',
      iexcl: '¡',
      iff: '⇔',
      ifr: '𝔦',
      igrave: 'ì',
      ii: 'ⅈ',
      iiiint: '⨌',
      iiint: '∭',
      iinfin: '⧜',
      iiota: '℩',
      ijlig: 'ĳ',
      imacr: 'ī',
      image: 'ℑ',
      imagline: 'ℐ',
      imagpart: 'ℑ',
      imath: 'ı',
      imof: '⊷',
      imped: 'Ƶ',
      in: '∈',
      incare: '℅',
      infin: '∞',
      infintie: '⧝',
      inodot: 'ı',
      int: '∫',
      intcal: '⊺',
      integers: 'ℤ',
      intercal: '⊺',
      intlarhk: '⨗',
      intprod: '⨼',
      iocy: 'ё',
      iogon: 'į',
      iopf: '𝕚',
      iota: 'ι',
      iprod: '⨼',
      iquest: '¿',
      iscr: '𝒾',
      isin: '∈',
      isinE: '⋹',
      isindot: '⋵',
      isins: '⋴',
      isinsv: '⋳',
      isinv: '∈',
      it: '⁢',
      itilde: 'ĩ',
      iukcy: 'і',
      iuml: 'ï',
      jcirc: 'ĵ',
      jcy: 'й',
      jfr: '𝔧',
      jmath: 'ȷ',
      jopf: '𝕛',
      jscr: '𝒿',
      jsercy: 'ј',
      jukcy: 'є',
      kappa: 'κ',
      kappav: 'ϰ',
      kcedil: 'ķ',
      kcy: 'к',
      kfr: '𝔨',
      kgreen: 'ĸ',
      khcy: 'х',
      kjcy: 'ќ',
      kopf: '𝕜',
      kscr: '𝓀',
      lAarr: '⇚',
      lArr: '⇐',
      lAtail: '⤛',
      lBarr: '⤎',
      lE: '≦',
      lEg: '⪋',
      lHar: '⥢',
      lacute: 'ĺ',
      laemptyv: '⦴',
      lagran: 'ℒ',
      lambda: 'λ',
      lang: '⟨',
      langd: '⦑',
      langle: '⟨',
      lap: '⪅',
      laquo: '«',
      larr: '←',
      larrb: '⇤',
      larrbfs: '⤟',
      larrfs: '⤝',
      larrhk: '↩',
      larrlp: '↫',
      larrpl: '⤹',
      larrsim: '⥳',
      larrtl: '↢',
      lat: '⪫',
      latail: '⤙',
      late: '⪭',
      lates: '⪭︀',
      lbarr: '⤌',
      lbbrk: '❲',
      lbrace: '{',
      lbrack: '[',
      lbrke: '⦋',
      lbrksld: '⦏',
      lbrkslu: '⦍',
      lcaron: 'ľ',
      lcedil: 'ļ',
      lceil: '⌈',
      lcub: '{',
      lcy: 'л',
      ldca: '⤶',
      ldquo: '“',
      ldquor: '„',
      ldrdhar: '⥧',
      ldrushar: '⥋',
      ldsh: '↲',
      le: '≤',
      leftarrow: '←',
      leftarrowtail: '↢',
      leftharpoondown: '↽',
      leftharpoonup: '↼',
      leftleftarrows: '⇇',
      leftrightarrow: '↔',
      leftrightarrows: '⇆',
      leftrightharpoons: '⇋',
      leftrightsquigarrow: '↭',
      leftthreetimes: '⋋',
      leg: '⋚',
      leq: '≤',
      leqq: '≦',
      leqslant: '⩽',
      les: '⩽',
      lescc: '⪨',
      lesdot: '⩿',
      lesdoto: '⪁',
      lesdotor: '⪃',
      lesg: '⋚︀',
      lesges: '⪓',
      lessapprox: '⪅',
      lessdot: '⋖',
      lesseqgtr: '⋚',
      lesseqqgtr: '⪋',
      lessgtr: '≶',
      lesssim: '≲',
      lfisht: '⥼',
      lfloor: '⌊',
      lfr: '𝔩',
      lg: '≶',
      lgE: '⪑',
      lhard: '↽',
      lharu: '↼',
      lharul: '⥪',
      lhblk: '▄',
      ljcy: 'љ',
      ll: '≪',
      llarr: '⇇',
      llcorner: '⌞',
      llhard: '⥫',
      lltri: '◺',
      lmidot: 'ŀ',
      lmoust: '⎰',
      lmoustache: '⎰',
      lnE: '≨',
      lnap: '⪉',
      lnapprox: '⪉',
      lne: '⪇',
      lneq: '⪇',
      lneqq: '≨',
      lnsim: '⋦',
      loang: '⟬',
      loarr: '⇽',
      lobrk: '⟦',
      longleftarrow: '⟵',
      longleftrightarrow: '⟷',
      longmapsto: '⟼',
      longrightarrow: '⟶',
      looparrowleft: '↫',
      looparrowright: '↬',
      lopar: '⦅',
      lopf: '𝕝',
      loplus: '⨭',
      lotimes: '⨴',
      lowast: '∗',
      lowbar: '_',
      loz: '◊',
      lozenge: '◊',
      lozf: '⧫',
      lpar: '(',
      lparlt: '⦓',
      lrarr: '⇆',
      lrcorner: '⌟',
      lrhar: '⇋',
      lrhard: '⥭',
      lrm: '‎',
      lrtri: '⊿',
      lsaquo: '‹',
      lscr: '𝓁',
      lsh: '↰',
      lsim: '≲',
      lsime: '⪍',
      lsimg: '⪏',
      lsqb: '[',
      lsquo: '‘',
      lsquor: '‚',
      lstrok: 'ł',
      lt: '<',
      ltcc: '⪦',
      ltcir: '⩹',
      ltdot: '⋖',
      lthree: '⋋',
      ltimes: '⋉',
      ltlarr: '⥶',
      ltquest: '⩻',
      ltrPar: '⦖',
      ltri: '◃',
      ltrie: '⊴',
      ltrif: '◂',
      lurdshar: '⥊',
      luruhar: '⥦',
      lvertneqq: '≨︀',
      lvnE: '≨︀',
      mDDot: '∺',
      macr: '¯',
      male: '♂',
      malt: '✠',
      maltese: '✠',
      map: '↦',
      mapsto: '↦',
      mapstodown: '↧',
      mapstoleft: '↤',
      mapstoup: '↥',
      marker: '▮',
      mcomma: '⨩',
      mcy: 'м',
      mdash: '—',
      measuredangle: '∡',
      mfr: '𝔪',
      mho: '℧',
      micro: 'µ',
      mid: '∣',
      midast: '*',
      midcir: '⫰',
      middot: '·',
      minus: '−',
      minusb: '⊟',
      minusd: '∸',
      minusdu: '⨪',
      mlcp: '⫛',
      mldr: '…',
      mnplus: '∓',
      models: '⊧',
      mopf: '𝕞',
      mp: '∓',
      mscr: '𝓂',
      mstpos: '∾',
      mu: 'μ',
      multimap: '⊸',
      mumap: '⊸',
      nGg: '⋙̸',
      nGt: '≫⃒',
      nGtv: '≫̸',
      nLeftarrow: '⇍',
      nLeftrightarrow: '⇎',
      nLl: '⋘̸',
      nLt: '≪⃒',
      nLtv: '≪̸',
      nRightarrow: '⇏',
      nVDash: '⊯',
      nVdash: '⊮',
      nabla: '∇',
      nacute: 'ń',
      nang: '∠⃒',
      nap: '≉',
      napE: '⩰̸',
      napid: '≋̸',
      napos: 'ŉ',
      napprox: '≉',
      natur: '♮',
      natural: '♮',
      naturals: 'ℕ',
      nbsp: ' ',
      nbump: '≎̸',
      nbumpe: '≏̸',
      ncap: '⩃',
      ncaron: 'ň',
      ncedil: 'ņ',
      ncong: '≇',
      ncongdot: '⩭̸',
      ncup: '⩂',
      ncy: 'н',
      ndash: '–',
      ne: '≠',
      neArr: '⇗',
      nearhk: '⤤',
      nearr: '↗',
      nearrow: '↗',
      nedot: '≐̸',
      nequiv: '≢',
      nesear: '⤨',
      nesim: '≂̸',
      nexist: '∄',
      nexists: '∄',
      nfr: '𝔫',
      ngE: '≧̸',
      nge: '≱',
      ngeq: '≱',
      ngeqq: '≧̸',
      ngeqslant: '⩾̸',
      nges: '⩾̸',
      ngsim: '≵',
      ngt: '≯',
      ngtr: '≯',
      nhArr: '⇎',
      nharr: '↮',
      nhpar: '⫲',
      ni: '∋',
      nis: '⋼',
      nisd: '⋺',
      niv: '∋',
      njcy: 'њ',
      nlArr: '⇍',
      nlE: '≦̸',
      nlarr: '↚',
      nldr: '‥',
      nle: '≰',
      nleftarrow: '↚',
      nleftrightarrow: '↮',
      nleq: '≰',
      nleqq: '≦̸',
      nleqslant: '⩽̸',
      nles: '⩽̸',
      nless: '≮',
      nlsim: '≴',
      nlt: '≮',
      nltri: '⋪',
      nltrie: '⋬',
      nmid: '∤',
      nopf: '𝕟',
      not: '¬',
      notin: '∉',
      notinE: '⋹̸',
      notindot: '⋵̸',
      notinva: '∉',
      notinvb: '⋷',
      notinvc: '⋶',
      notni: '∌',
      notniva: '∌',
      notnivb: '⋾',
      notnivc: '⋽',
      npar: '∦',
      nparallel: '∦',
      nparsl: '⫽⃥',
      npart: '∂̸',
      npolint: '⨔',
      npr: '⊀',
      nprcue: '⋠',
      npre: '⪯̸',
      nprec: '⊀',
      npreceq: '⪯̸',
      nrArr: '⇏',
      nrarr: '↛',
      nrarrc: '⤳̸',
      nrarrw: '↝̸',
      nrightarrow: '↛',
      nrtri: '⋫',
      nrtrie: '⋭',
      nsc: '⊁',
      nsccue: '⋡',
      nsce: '⪰̸',
      nscr: '𝓃',
      nshortmid: '∤',
      nshortparallel: '∦',
      nsim: '≁',
      nsime: '≄',
      nsimeq: '≄',
      nsmid: '∤',
      nspar: '∦',
      nsqsube: '⋢',
      nsqsupe: '⋣',
      nsub: '⊄',
      nsubE: '⫅̸',
      nsube: '⊈',
      nsubset: '⊂⃒',
      nsubseteq: '⊈',
      nsubseteqq: '⫅̸',
      nsucc: '⊁',
      nsucceq: '⪰̸',
      nsup: '⊅',
      nsupE: '⫆̸',
      nsupe: '⊉',
      nsupset: '⊃⃒',
      nsupseteq: '⊉',
      nsupseteqq: '⫆̸',
      ntgl: '≹',
      ntilde: 'ñ',
      ntlg: '≸',
      ntriangleleft: '⋪',
      ntrianglelefteq: '⋬',
      ntriangleright: '⋫',
      ntrianglerighteq: '⋭',
      nu: 'ν',
      num: '#',
      numero: '№',
      numsp: ' ',
      nvDash: '⊭',
      nvHarr: '⤄',
      nvap: '≍⃒',
      nvdash: '⊬',
      nvge: '≥⃒',
      nvgt: '>⃒',
      nvinfin: '⧞',
      nvlArr: '⤂',
      nvle: '≤⃒',
      nvlt: '<⃒',
      nvltrie: '⊴⃒',
      nvrArr: '⤃',
      nvrtrie: '⊵⃒',
      nvsim: '∼⃒',
      nwArr: '⇖',
      nwarhk: '⤣',
      nwarr: '↖',
      nwarrow: '↖',
      nwnear: '⤧',
      oS: 'Ⓢ',
      oacute: 'ó',
      oast: '⊛',
      ocir: '⊚',
      ocirc: 'ô',
      ocy: 'о',
      odash: '⊝',
      odblac: 'ő',
      odiv: '⨸',
      odot: '⊙',
      odsold: '⦼',
      oelig: 'œ',
      ofcir: '⦿',
      ofr: '𝔬',
      ogon: '˛',
      ograve: 'ò',
      ogt: '⧁',
      ohbar: '⦵',
      ohm: 'Ω',
      oint: '∮',
      olarr: '↺',
      olcir: '⦾',
      olcross: '⦻',
      oline: '‾',
      olt: '⧀',
      omacr: 'ō',
      omega: 'ω',
      omicron: 'ο',
      omid: '⦶',
      ominus: '⊖',
      oopf: '𝕠',
      opar: '⦷',
      operp: '⦹',
      oplus: '⊕',
      or: '∨',
      orarr: '↻',
      ord: '⩝',
      order: 'ℴ',
      orderof: 'ℴ',
      ordf: 'ª',
      ordm: 'º',
      origof: '⊶',
      oror: '⩖',
      orslope: '⩗',
      orv: '⩛',
      oscr: 'ℴ',
      oslash: 'ø',
      osol: '⊘',
      otilde: 'õ',
      otimes: '⊗',
      otimesas: '⨶',
      ouml: 'ö',
      ovbar: '⌽',
      par: '∥',
      para: '¶',
      parallel: '∥',
      parsim: '⫳',
      parsl: '⫽',
      part: '∂',
      pcy: 'п',
      percnt: '%',
      period: '.',
      permil: '‰',
      perp: '⊥',
      pertenk: '‱',
      pfr: '𝔭',
      phi: 'φ',
      phiv: 'ϕ',
      phmmat: 'ℳ',
      phone: '☎',
      pi: 'π',
      pitchfork: '⋔',
      piv: 'ϖ',
      planck: 'ℏ',
      planckh: 'ℎ',
      plankv: 'ℏ',
      plus: '+',
      plusacir: '⨣',
      plusb: '⊞',
      pluscir: '⨢',
      plusdo: '∔',
      plusdu: '⨥',
      pluse: '⩲',
      plusmn: '±',
      plussim: '⨦',
      plustwo: '⨧',
      pm: '±',
      pointint: '⨕',
      popf: '𝕡',
      pound: '£',
      pr: '≺',
      prE: '⪳',
      prap: '⪷',
      prcue: '≼',
      pre: '⪯',
      prec: '≺',
      precapprox: '⪷',
      preccurlyeq: '≼',
      preceq: '⪯',
      precnapprox: '⪹',
      precneqq: '⪵',
      precnsim: '⋨',
      precsim: '≾',
      prime: '′',
      primes: 'ℙ',
      prnE: '⪵',
      prnap: '⪹',
      prnsim: '⋨',
      prod: '∏',
      profalar: '⌮',
      profline: '⌒',
      profsurf: '⌓',
      prop: '∝',
      propto: '∝',
      prsim: '≾',
      prurel: '⊰',
      pscr: '𝓅',
      psi: 'ψ',
      puncsp: ' ',
      qfr: '𝔮',
      qint: '⨌',
      qopf: '𝕢',
      qprime: '⁗',
      qscr: '𝓆',
      quaternions: 'ℍ',
      quatint: '⨖',
      quest: '?',
      questeq: '≟',
      quot: '"',
      rAarr: '⇛',
      rArr: '⇒',
      rAtail: '⤜',
      rBarr: '⤏',
      rHar: '⥤',
      race: '∽̱',
      racute: 'ŕ',
      radic: '√',
      raemptyv: '⦳',
      rang: '⟩',
      rangd: '⦒',
      range: '⦥',
      rangle: '⟩',
      raquo: '»',
      rarr: '→',
      rarrap: '⥵',
      rarrb: '⇥',
      rarrbfs: '⤠',
      rarrc: '⤳',
      rarrfs: '⤞',
      rarrhk: '↪',
      rarrlp: '↬',
      rarrpl: '⥅',
      rarrsim: '⥴',
      rarrtl: '↣',
      rarrw: '↝',
      ratail: '⤚',
      ratio: '∶',
      rationals: 'ℚ',
      rbarr: '⤍',
      rbbrk: '❳',
      rbrace: '}',
      rbrack: ']',
      rbrke: '⦌',
      rbrksld: '⦎',
      rbrkslu: '⦐',
      rcaron: 'ř',
      rcedil: 'ŗ',
      rceil: '⌉',
      rcub: '}',
      rcy: 'р',
      rdca: '⤷',
      rdldhar: '⥩',
      rdquo: '”',
      rdquor: '”',
      rdsh: '↳',
      real: 'ℜ',
      realine: 'ℛ',
      realpart: 'ℜ',
      reals: 'ℝ',
      rect: '▭',
      reg: '®',
      rfisht: '⥽',
      rfloor: '⌋',
      rfr: '𝔯',
      rhard: '⇁',
      rharu: '⇀',
      rharul: '⥬',
      rho: 'ρ',
      rhov: 'ϱ',
      rightarrow: '→',
      rightarrowtail: '↣',
      rightharpoondown: '⇁',
      rightharpoonup: '⇀',
      rightleftarrows: '⇄',
      rightleftharpoons: '⇌',
      rightrightarrows: '⇉',
      rightsquigarrow: '↝',
      rightthreetimes: '⋌',
      ring: '˚',
      risingdotseq: '≓',
      rlarr: '⇄',
      rlhar: '⇌',
      rlm: '‏',
      rmoust: '⎱',
      rmoustache: '⎱',
      rnmid: '⫮',
      roang: '⟭',
      roarr: '⇾',
      robrk: '⟧',
      ropar: '⦆',
      ropf: '𝕣',
      roplus: '⨮',
      rotimes: '⨵',
      rpar: ')',
      rpargt: '⦔',
      rppolint: '⨒',
      rrarr: '⇉',
      rsaquo: '›',
      rscr: '𝓇',
      rsh: '↱',
      rsqb: ']',
      rsquo: '’',
      rsquor: '’',
      rthree: '⋌',
      rtimes: '⋊',
      rtri: '▹',
      rtrie: '⊵',
      rtrif: '▸',
      rtriltri: '⧎',
      ruluhar: '⥨',
      rx: '℞',
      sacute: 'ś',
      sbquo: '‚',
      sc: '≻',
      scE: '⪴',
      scap: '⪸',
      scaron: 'š',
      sccue: '≽',
      sce: '⪰',
      scedil: 'ş',
      scirc: 'ŝ',
      scnE: '⪶',
      scnap: '⪺',
      scnsim: '⋩',
      scpolint: '⨓',
      scsim: '≿',
      scy: 'с',
      sdot: '⋅',
      sdotb: '⊡',
      sdote: '⩦',
      seArr: '⇘',
      searhk: '⤥',
      searr: '↘',
      searrow: '↘',
      sect: '§',
      semi: ';',
      seswar: '⤩',
      setminus: '∖',
      setmn: '∖',
      sext: '✶',
      sfr: '𝔰',
      sfrown: '⌢',
      sharp: '♯',
      shchcy: 'щ',
      shcy: 'ш',
      shortmid: '∣',
      shortparallel: '∥',
      shy: '­',
      sigma: 'σ',
      sigmaf: 'ς',
      sigmav: 'ς',
      sim: '∼',
      simdot: '⩪',
      sime: '≃',
      simeq: '≃',
      simg: '⪞',
      simgE: '⪠',
      siml: '⪝',
      simlE: '⪟',
      simne: '≆',
      simplus: '⨤',
      simrarr: '⥲',
      slarr: '←',
      smallsetminus: '∖',
      smashp: '⨳',
      smeparsl: '⧤',
      smid: '∣',
      smile: '⌣',
      smt: '⪪',
      smte: '⪬',
      smtes: '⪬︀',
      softcy: 'ь',
      sol: '/',
      solb: '⧄',
      solbar: '⌿',
      sopf: '𝕤',
      spades: '♠',
      spadesuit: '♠',
      spar: '∥',
      sqcap: '⊓',
      sqcaps: '⊓︀',
      sqcup: '⊔',
      sqcups: '⊔︀',
      sqsub: '⊏',
      sqsube: '⊑',
      sqsubset: '⊏',
      sqsubseteq: '⊑',
      sqsup: '⊐',
      sqsupe: '⊒',
      sqsupset: '⊐',
      sqsupseteq: '⊒',
      squ: '□',
      square: '□',
      squarf: '▪',
      squf: '▪',
      srarr: '→',
      sscr: '𝓈',
      ssetmn: '∖',
      ssmile: '⌣',
      sstarf: '⋆',
      star: '☆',
      starf: '★',
      straightepsilon: 'ϵ',
      straightphi: 'ϕ',
      strns: '¯',
      sub: '⊂',
      subE: '⫅',
      subdot: '⪽',
      sube: '⊆',
      subedot: '⫃',
      submult: '⫁',
      subnE: '⫋',
      subne: '⊊',
      subplus: '⪿',
      subrarr: '⥹',
      subset: '⊂',
      subseteq: '⊆',
      subseteqq: '⫅',
      subsetneq: '⊊',
      subsetneqq: '⫋',
      subsim: '⫇',
      subsub: '⫕',
      subsup: '⫓',
      succ: '≻',
      succapprox: '⪸',
      succcurlyeq: '≽',
      succeq: '⪰',
      succnapprox: '⪺',
      succneqq: '⪶',
      succnsim: '⋩',
      succsim: '≿',
      sum: '∑',
      sung: '♪',
      sup1: '¹',
      sup2: '²',
      sup3: '³',
      sup: '⊃',
      supE: '⫆',
      supdot: '⪾',
      supdsub: '⫘',
      supe: '⊇',
      supedot: '⫄',
      suphsol: '⟉',
      suphsub: '⫗',
      suplarr: '⥻',
      supmult: '⫂',
      supnE: '⫌',
      supne: '⊋',
      supplus: '⫀',
      supset: '⊃',
      supseteq: '⊇',
      supseteqq: '⫆',
      supsetneq: '⊋',
      supsetneqq: '⫌',
      supsim: '⫈',
      supsub: '⫔',
      supsup: '⫖',
      swArr: '⇙',
      swarhk: '⤦',
      swarr: '↙',
      swarrow: '↙',
      swnwar: '⤪',
      szlig: 'ß',
      target: '⌖',
      tau: 'τ',
      tbrk: '⎴',
      tcaron: 'ť',
      tcedil: 'ţ',
      tcy: 'т',
      tdot: '⃛',
      telrec: '⌕',
      tfr: '𝔱',
      there4: '∴',
      therefore: '∴',
      theta: 'θ',
      thetasym: 'ϑ',
      thetav: 'ϑ',
      thickapprox: '≈',
      thicksim: '∼',
      thinsp: ' ',
      thkap: '≈',
      thksim: '∼',
      thorn: 'þ',
      tilde: '˜',
      times: '×',
      timesb: '⊠',
      timesbar: '⨱',
      timesd: '⨰',
      tint: '∭',
      toea: '⤨',
      top: '⊤',
      topbot: '⌶',
      topcir: '⫱',
      topf: '𝕥',
      topfork: '⫚',
      tosa: '⤩',
      tprime: '‴',
      trade: '™',
      triangle: '▵',
      triangledown: '▿',
      triangleleft: '◃',
      trianglelefteq: '⊴',
      triangleq: '≜',
      triangleright: '▹',
      trianglerighteq: '⊵',
      tridot: '◬',
      trie: '≜',
      triminus: '⨺',
      triplus: '⨹',
      trisb: '⧍',
      tritime: '⨻',
      trpezium: '⏢',
      tscr: '𝓉',
      tscy: 'ц',
      tshcy: 'ћ',
      tstrok: 'ŧ',
      twixt: '≬',
      twoheadleftarrow: '↞',
      twoheadrightarrow: '↠',
      uArr: '⇑',
      uHar: '⥣',
      uacute: 'ú',
      uarr: '↑',
      ubrcy: 'ў',
      ubreve: 'ŭ',
      ucirc: 'û',
      ucy: 'у',
      udarr: '⇅',
      udblac: 'ű',
      udhar: '⥮',
      ufisht: '⥾',
      ufr: '𝔲',
      ugrave: 'ù',
      uharl: '↿',
      uharr: '↾',
      uhblk: '▀',
      ulcorn: '⌜',
      ulcorner: '⌜',
      ulcrop: '⌏',
      ultri: '◸',
      umacr: 'ū',
      uml: '¨',
      uogon: 'ų',
      uopf: '𝕦',
      uparrow: '↑',
      updownarrow: '↕',
      upharpoonleft: '↿',
      upharpoonright: '↾',
      uplus: '⊎',
      upsi: 'υ',
      upsih: 'ϒ',
      upsilon: 'υ',
      upuparrows: '⇈',
      urcorn: '⌝',
      urcorner: '⌝',
      urcrop: '⌎',
      uring: 'ů',
      urtri: '◹',
      uscr: '𝓊',
      utdot: '⋰',
      utilde: 'ũ',
      utri: '▵',
      utrif: '▴',
      uuarr: '⇈',
      uuml: 'ü',
      uwangle: '⦧',
      vArr: '⇕',
      vBar: '⫨',
      vBarv: '⫩',
      vDash: '⊨',
      vangrt: '⦜',
      varepsilon: 'ϵ',
      varkappa: 'ϰ',
      varnothing: '∅',
      varphi: 'ϕ',
      varpi: 'ϖ',
      varpropto: '∝',
      varr: '↕',
      varrho: 'ϱ',
      varsigma: 'ς',
      varsubsetneq: '⊊︀',
      varsubsetneqq: '⫋︀',
      varsupsetneq: '⊋︀',
      varsupsetneqq: '⫌︀',
      vartheta: 'ϑ',
      vartriangleleft: '⊲',
      vartriangleright: '⊳',
      vcy: 'в',
      vdash: '⊢',
      vee: '∨',
      veebar: '⊻',
      veeeq: '≚',
      vellip: '⋮',
      verbar: '|',
      vert: '|',
      vfr: '𝔳',
      vltri: '⊲',
      vnsub: '⊂⃒',
      vnsup: '⊃⃒',
      vopf: '𝕧',
      vprop: '∝',
      vrtri: '⊳',
      vscr: '𝓋',
      vsubnE: '⫋︀',
      vsubne: '⊊︀',
      vsupnE: '⫌︀',
      vsupne: '⊋︀',
      vzigzag: '⦚',
      wcirc: 'ŵ',
      wedbar: '⩟',
      wedge: '∧',
      wedgeq: '≙',
      weierp: '℘',
      wfr: '𝔴',
      wopf: '𝕨',
      wp: '℘',
      wr: '≀',
      wreath: '≀',
      wscr: '𝓌',
      xcap: '⋂',
      xcirc: '◯',
      xcup: '⋃',
      xdtri: '▽',
      xfr: '𝔵',
      xhArr: '⟺',
      xharr: '⟷',
      xi: 'ξ',
      xlArr: '⟸',
      xlarr: '⟵',
      xmap: '⟼',
      xnis: '⋻',
      xodot: '⨀',
      xopf: '𝕩',
      xoplus: '⨁',
      xotime: '⨂',
      xrArr: '⟹',
      xrarr: '⟶',
      xscr: '𝓍',
      xsqcup: '⨆',
      xuplus: '⨄',
      xutri: '△',
      xvee: '⋁',
      xwedge: '⋀',
      yacute: 'ý',
      yacy: 'я',
      ycirc: 'ŷ',
      ycy: 'ы',
      yen: '¥',
      yfr: '𝔶',
      yicy: 'ї',
      yopf: '𝕪',
      yscr: '𝓎',
      yucy: 'ю',
      yuml: 'ÿ',
      zacute: 'ź',
      zcaron: 'ž',
      zcy: 'з',
      zdot: 'ż',
      zeetrf: 'ℨ',
      zeta: 'ζ',
      zfr: '𝔷',
      zhcy: 'ж',
      zigrarr: '⇝',
      zopf: '𝕫',
      zscr: '𝓏',
      zwj: '‍',
      zwnj: '‌'
    };

    const own$6 = {}.hasOwnProperty;

    /**
     * Decode a single character reference (without the `&` or `;`).
     * You probably only need this when you’re building parsers yourself that follow
     * different rules compared to HTML.
     * This is optimized to be tiny in browsers.
     *
     * @param {string} value
     *   `notin` (named), `#123` (deci), `#x123` (hexa).
     * @returns {string|false}
     *   Decoded reference.
     */
    function decodeNamedCharacterReference(value) {
      return own$6.call(characterEntities, value) ? characterEntities[value] : false
    }

    /**
     * @typedef {import('micromark-util-types').Construct} Construct
     * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
     * @typedef {import('micromark-util-types').Token} Token
     * @typedef {import('micromark-util-types').State} State
     * @typedef {import('micromark-util-types').Code} Code
     */

    /** @type {Construct} */
    const characterReference = {
      name: 'characterReference',
      tokenize: tokenizeCharacterReference
    };
    /** @type {Tokenizer} */

    function tokenizeCharacterReference(effects, ok, nok) {
      const self = this;
      let size = 0;
      /** @type {number} */

      let max;
      /** @type {(code: Code) => code is number} */

      let test;
      return start
      /** @type {State} */

      function start(code) {
        effects.enter('characterReference');
        effects.enter('characterReferenceMarker');
        effects.consume(code);
        effects.exit('characterReferenceMarker');
        return open
      }
      /** @type {State} */

      function open(code) {
        if (code === 35) {
          effects.enter('characterReferenceMarkerNumeric');
          effects.consume(code);
          effects.exit('characterReferenceMarkerNumeric');
          return numeric
        }

        effects.enter('characterReferenceValue');
        max = 31;
        test = asciiAlphanumeric;
        return value(code)
      }
      /** @type {State} */

      function numeric(code) {
        if (code === 88 || code === 120) {
          effects.enter('characterReferenceMarkerHexadecimal');
          effects.consume(code);
          effects.exit('characterReferenceMarkerHexadecimal');
          effects.enter('characterReferenceValue');
          max = 6;
          test = asciiHexDigit;
          return value
        }

        effects.enter('characterReferenceValue');
        max = 7;
        test = asciiDigit;
        return value(code)
      }
      /** @type {State} */

      function value(code) {
        /** @type {Token} */
        let token;

        if (code === 59 && size) {
          token = effects.exit('characterReferenceValue');

          if (
            test === asciiAlphanumeric &&
            !decodeNamedCharacterReference(self.sliceSerialize(token))
          ) {
            return nok(code)
          }

          effects.enter('characterReferenceMarker');
          effects.consume(code);
          effects.exit('characterReferenceMarker');
          effects.exit('characterReference');
          return ok
        }

        if (test(code) && size++ < max) {
          effects.consume(code);
          return value
        }

        return nok(code)
      }
    }

    /**
     * @typedef {import('micromark-util-types').Construct} Construct
     * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
     * @typedef {import('micromark-util-types').State} State
     * @typedef {import('micromark-util-types').Code} Code
     */

    /** @type {Construct} */
    const codeFenced = {
      name: 'codeFenced',
      tokenize: tokenizeCodeFenced,
      concrete: true
    };
    /** @type {Tokenizer} */

    function tokenizeCodeFenced(effects, ok, nok) {
      const self = this;
      /** @type {Construct} */

      const closingFenceConstruct = {
        tokenize: tokenizeClosingFence,
        partial: true
      };
      /** @type {Construct} */

      const nonLazyLine = {
        tokenize: tokenizeNonLazyLine,
        partial: true
      };
      const tail = this.events[this.events.length - 1];
      const initialPrefix =
        tail && tail[1].type === 'linePrefix'
          ? tail[2].sliceSerialize(tail[1], true).length
          : 0;
      let sizeOpen = 0;
      /** @type {NonNullable<Code>} */

      let marker;
      return start
      /** @type {State} */

      function start(code) {
        effects.enter('codeFenced');
        effects.enter('codeFencedFence');
        effects.enter('codeFencedFenceSequence');
        marker = code;
        return sequenceOpen(code)
      }
      /** @type {State} */

      function sequenceOpen(code) {
        if (code === marker) {
          effects.consume(code);
          sizeOpen++;
          return sequenceOpen
        }

        effects.exit('codeFencedFenceSequence');
        return sizeOpen < 3
          ? nok(code)
          : factorySpace(effects, infoOpen, 'whitespace')(code)
      }
      /** @type {State} */

      function infoOpen(code) {
        if (code === null || markdownLineEnding(code)) {
          return openAfter(code)
        }

        effects.enter('codeFencedFenceInfo');
        effects.enter('chunkString', {
          contentType: 'string'
        });
        return info(code)
      }
      /** @type {State} */

      function info(code) {
        if (code === null || markdownLineEndingOrSpace(code)) {
          effects.exit('chunkString');
          effects.exit('codeFencedFenceInfo');
          return factorySpace(effects, infoAfter, 'whitespace')(code)
        }

        if (code === 96 && code === marker) return nok(code)
        effects.consume(code);
        return info
      }
      /** @type {State} */

      function infoAfter(code) {
        if (code === null || markdownLineEnding(code)) {
          return openAfter(code)
        }

        effects.enter('codeFencedFenceMeta');
        effects.enter('chunkString', {
          contentType: 'string'
        });
        return meta(code)
      }
      /** @type {State} */

      function meta(code) {
        if (code === null || markdownLineEnding(code)) {
          effects.exit('chunkString');
          effects.exit('codeFencedFenceMeta');
          return openAfter(code)
        }

        if (code === 96 && code === marker) return nok(code)
        effects.consume(code);
        return meta
      }
      /** @type {State} */

      function openAfter(code) {
        effects.exit('codeFencedFence');
        return self.interrupt ? ok(code) : contentStart(code)
      }
      /** @type {State} */

      function contentStart(code) {
        if (code === null) {
          return after(code)
        }

        if (markdownLineEnding(code)) {
          return effects.attempt(
            nonLazyLine,
            effects.attempt(
              closingFenceConstruct,
              after,
              initialPrefix
                ? factorySpace(
                    effects,
                    contentStart,
                    'linePrefix',
                    initialPrefix + 1
                  )
                : contentStart
            ),
            after
          )(code)
        }

        effects.enter('codeFlowValue');
        return contentContinue(code)
      }
      /** @type {State} */

      function contentContinue(code) {
        if (code === null || markdownLineEnding(code)) {
          effects.exit('codeFlowValue');
          return contentStart(code)
        }

        effects.consume(code);
        return contentContinue
      }
      /** @type {State} */

      function after(code) {
        effects.exit('codeFenced');
        return ok(code)
      }
      /** @type {Tokenizer} */

      function tokenizeNonLazyLine(effects, ok, nok) {
        const self = this;
        return start
        /** @type {State} */

        function start(code) {
          effects.enter('lineEnding');
          effects.consume(code);
          effects.exit('lineEnding');
          return lineStart
        }
        /** @type {State} */

        function lineStart(code) {
          return self.parser.lazy[self.now().line] ? nok(code) : ok(code)
        }
      }
      /** @type {Tokenizer} */

      function tokenizeClosingFence(effects, ok, nok) {
        let size = 0;
        return factorySpace(
          effects,
          closingSequenceStart,
          'linePrefix',
          this.parser.constructs.disable.null.includes('codeIndented')
            ? undefined
            : 4
        )
        /** @type {State} */

        function closingSequenceStart(code) {
          effects.enter('codeFencedFence');
          effects.enter('codeFencedFenceSequence');
          return closingSequence(code)
        }
        /** @type {State} */

        function closingSequence(code) {
          if (code === marker) {
            effects.consume(code);
            size++;
            return closingSequence
          }

          if (size < sizeOpen) return nok(code)
          effects.exit('codeFencedFenceSequence');
          return factorySpace(effects, closingSequenceEnd, 'whitespace')(code)
        }
        /** @type {State} */

        function closingSequenceEnd(code) {
          if (code === null || markdownLineEnding(code)) {
            effects.exit('codeFencedFence');
            return ok(code)
          }

          return nok(code)
        }
      }
    }

    /**
     * @typedef {import('micromark-util-types').Construct} Construct
     * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
     * @typedef {import('micromark-util-types').Resolver} Resolver
     * @typedef {import('micromark-util-types').Token} Token
     * @typedef {import('micromark-util-types').State} State
     */

    /** @type {Construct} */
    const codeIndented = {
      name: 'codeIndented',
      tokenize: tokenizeCodeIndented
    };
    /** @type {Construct} */

    const indentedContent = {
      tokenize: tokenizeIndentedContent,
      partial: true
    };
    /** @type {Tokenizer} */

    function tokenizeCodeIndented(effects, ok, nok) {
      const self = this;
      return start
      /** @type {State} */

      function start(code) {
        effects.enter('codeIndented');
        return factorySpace(effects, afterStartPrefix, 'linePrefix', 4 + 1)(code)
      }
      /** @type {State} */

      function afterStartPrefix(code) {
        const tail = self.events[self.events.length - 1];
        return tail &&
          tail[1].type === 'linePrefix' &&
          tail[2].sliceSerialize(tail[1], true).length >= 4
          ? afterPrefix(code)
          : nok(code)
      }
      /** @type {State} */

      function afterPrefix(code) {
        if (code === null) {
          return after(code)
        }

        if (markdownLineEnding(code)) {
          return effects.attempt(indentedContent, afterPrefix, after)(code)
        }

        effects.enter('codeFlowValue');
        return content(code)
      }
      /** @type {State} */

      function content(code) {
        if (code === null || markdownLineEnding(code)) {
          effects.exit('codeFlowValue');
          return afterPrefix(code)
        }

        effects.consume(code);
        return content
      }
      /** @type {State} */

      function after(code) {
        effects.exit('codeIndented');
        return ok(code)
      }
    }
    /** @type {Tokenizer} */

    function tokenizeIndentedContent(effects, ok, nok) {
      const self = this;
      return start
      /** @type {State} */

      function start(code) {
        // If this is a lazy line, it can’t be code.
        if (self.parser.lazy[self.now().line]) {
          return nok(code)
        }

        if (markdownLineEnding(code)) {
          effects.enter('lineEnding');
          effects.consume(code);
          effects.exit('lineEnding');
          return start
        }

        return factorySpace(effects, afterPrefix, 'linePrefix', 4 + 1)(code)
      }
      /** @type {State} */

      function afterPrefix(code) {
        const tail = self.events[self.events.length - 1];
        return tail &&
          tail[1].type === 'linePrefix' &&
          tail[2].sliceSerialize(tail[1], true).length >= 4
          ? ok(code)
          : markdownLineEnding(code)
          ? start(code)
          : nok(code)
      }
    }

    /**
     * @typedef {import('micromark-util-types').Construct} Construct
     * @typedef {import('micromark-util-types').Resolver} Resolver
     * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
     * @typedef {import('micromark-util-types').Previous} Previous
     * @typedef {import('micromark-util-types').Token} Token
     * @typedef {import('micromark-util-types').State} State
     */

    /** @type {Construct} */
    const codeText = {
      name: 'codeText',
      tokenize: tokenizeCodeText,
      resolve: resolveCodeText,
      previous
    };
    /** @type {Resolver} */

    function resolveCodeText(events) {
      let tailExitIndex = events.length - 4;
      let headEnterIndex = 3;
      /** @type {number} */

      let index;
      /** @type {number|undefined} */

      let enter; // If we start and end with an EOL or a space.

      if (
        (events[headEnterIndex][1].type === 'lineEnding' ||
          events[headEnterIndex][1].type === 'space') &&
        (events[tailExitIndex][1].type === 'lineEnding' ||
          events[tailExitIndex][1].type === 'space')
      ) {
        index = headEnterIndex; // And we have data.

        while (++index < tailExitIndex) {
          if (events[index][1].type === 'codeTextData') {
            // Then we have padding.
            events[headEnterIndex][1].type = 'codeTextPadding';
            events[tailExitIndex][1].type = 'codeTextPadding';
            headEnterIndex += 2;
            tailExitIndex -= 2;
            break
          }
        }
      } // Merge adjacent spaces and data.

      index = headEnterIndex - 1;
      tailExitIndex++;

      while (++index <= tailExitIndex) {
        if (enter === undefined) {
          if (index !== tailExitIndex && events[index][1].type !== 'lineEnding') {
            enter = index;
          }
        } else if (
          index === tailExitIndex ||
          events[index][1].type === 'lineEnding'
        ) {
          events[enter][1].type = 'codeTextData';

          if (index !== enter + 2) {
            events[enter][1].end = events[index - 1][1].end;
            events.splice(enter + 2, index - enter - 2);
            tailExitIndex -= index - enter - 2;
            index = enter + 2;
          }

          enter = undefined;
        }
      }

      return events
    }
    /** @type {Previous} */

    function previous(code) {
      // If there is a previous code, there will always be a tail.
      return (
        code !== 96 ||
        this.events[this.events.length - 1][1].type === 'characterEscape'
      )
    }
    /** @type {Tokenizer} */

    function tokenizeCodeText(effects, ok, nok) {
      let sizeOpen = 0;
      /** @type {number} */

      let size;
      /** @type {Token} */

      let token;
      return start
      /** @type {State} */

      function start(code) {
        effects.enter('codeText');
        effects.enter('codeTextSequence');
        return openingSequence(code)
      }
      /** @type {State} */

      function openingSequence(code) {
        if (code === 96) {
          effects.consume(code);
          sizeOpen++;
          return openingSequence
        }

        effects.exit('codeTextSequence');
        return gap(code)
      }
      /** @type {State} */

      function gap(code) {
        // EOF.
        if (code === null) {
          return nok(code)
        } // Closing fence?
        // Could also be data.

        if (code === 96) {
          token = effects.enter('codeTextSequence');
          size = 0;
          return closingSequence(code)
        } // Tabs don’t work, and virtual spaces don’t make sense.

        if (code === 32) {
          effects.enter('space');
          effects.consume(code);
          effects.exit('space');
          return gap
        }

        if (markdownLineEnding(code)) {
          effects.enter('lineEnding');
          effects.consume(code);
          effects.exit('lineEnding');
          return gap
        } // Data.

        effects.enter('codeTextData');
        return data(code)
      } // In code.

      /** @type {State} */

      function data(code) {
        if (
          code === null ||
          code === 32 ||
          code === 96 ||
          markdownLineEnding(code)
        ) {
          effects.exit('codeTextData');
          return gap(code)
        }

        effects.consume(code);
        return data
      } // Closing fence.

      /** @type {State} */

      function closingSequence(code) {
        // More.
        if (code === 96) {
          effects.consume(code);
          size++;
          return closingSequence
        } // Done!

        if (size === sizeOpen) {
          effects.exit('codeTextSequence');
          effects.exit('codeText');
          return ok(code)
        } // More or less accents: mark as data.

        token.type = 'codeTextData';
        return data(code)
      }
    }

    /**
     * @typedef {import('micromark-util-types').Token} Token
     * @typedef {import('micromark-util-types').Chunk} Chunk
     * @typedef {import('micromark-util-types').Event} Event
     */

    /**
     * Tokenize subcontent.
     *
     * @param {Event[]} events
     * @returns {boolean}
     */
    function subtokenize(events) {
      /** @type {Record<string, number>} */
      const jumps = {};
      let index = -1;
      /** @type {Event} */

      let event;
      /** @type {number|undefined} */

      let lineIndex;
      /** @type {number} */

      let otherIndex;
      /** @type {Event} */

      let otherEvent;
      /** @type {Event[]} */

      let parameters;
      /** @type {Event[]} */

      let subevents;
      /** @type {boolean|undefined} */

      let more;

      while (++index < events.length) {
        while (index in jumps) {
          index = jumps[index];
        }

        event = events[index]; // Add a hook for the GFM tasklist extension, which needs to know if text
        // is in the first content of a list item.

        if (
          index &&
          event[1].type === 'chunkFlow' &&
          events[index - 1][1].type === 'listItemPrefix'
        ) {
          subevents = event[1]._tokenizer.events;
          otherIndex = 0;

          if (
            otherIndex < subevents.length &&
            subevents[otherIndex][1].type === 'lineEndingBlank'
          ) {
            otherIndex += 2;
          }

          if (
            otherIndex < subevents.length &&
            subevents[otherIndex][1].type === 'content'
          ) {
            while (++otherIndex < subevents.length) {
              if (subevents[otherIndex][1].type === 'content') {
                break
              }

              if (subevents[otherIndex][1].type === 'chunkText') {
                subevents[otherIndex][1]._isInFirstContentOfListItem = true;
                otherIndex++;
              }
            }
          }
        } // Enter.

        if (event[0] === 'enter') {
          if (event[1].contentType) {
            Object.assign(jumps, subcontent(events, index));
            index = jumps[index];
            more = true;
          }
        } // Exit.
        else if (event[1]._container) {
          otherIndex = index;
          lineIndex = undefined;

          while (otherIndex--) {
            otherEvent = events[otherIndex];

            if (
              otherEvent[1].type === 'lineEnding' ||
              otherEvent[1].type === 'lineEndingBlank'
            ) {
              if (otherEvent[0] === 'enter') {
                if (lineIndex) {
                  events[lineIndex][1].type = 'lineEndingBlank';
                }

                otherEvent[1].type = 'lineEnding';
                lineIndex = otherIndex;
              }
            } else {
              break
            }
          }

          if (lineIndex) {
            // Fix position.
            event[1].end = Object.assign({}, events[lineIndex][1].start); // Switch container exit w/ line endings.

            parameters = events.slice(lineIndex, index);
            parameters.unshift(event);
            splice(events, lineIndex, index - lineIndex + 1, parameters);
          }
        }
      }

      return !more
    }
    /**
     * Tokenize embedded tokens.
     *
     * @param {Event[]} events
     * @param {number} eventIndex
     * @returns {Record<string, number>}
     */

    function subcontent(events, eventIndex) {
      const token = events[eventIndex][1];
      const context = events[eventIndex][2];
      let startPosition = eventIndex - 1;
      /** @type {number[]} */

      const startPositions = [];
      const tokenizer =
        token._tokenizer || context.parser[token.contentType](token.start);
      const childEvents = tokenizer.events;
      /** @type {[number, number][]} */

      const jumps = [];
      /** @type {Record<string, number>} */

      const gaps = {};
      /** @type {Chunk[]} */

      let stream;
      /** @type {Token|undefined} */

      let previous;
      let index = -1;
      /** @type {Token|undefined} */

      let current = token;
      let adjust = 0;
      let start = 0;
      const breaks = [start]; // Loop forward through the linked tokens to pass them in order to the
      // subtokenizer.

      while (current) {
        // Find the position of the event for this token.
        while (events[++startPosition][1] !== current) {
          // Empty.
        }

        startPositions.push(startPosition);

        if (!current._tokenizer) {
          stream = context.sliceStream(current);

          if (!current.next) {
            stream.push(null);
          }

          if (previous) {
            tokenizer.defineSkip(current.start);
          }

          if (current._isInFirstContentOfListItem) {
            tokenizer._gfmTasklistFirstContentOfListItem = true;
          }

          tokenizer.write(stream);

          if (current._isInFirstContentOfListItem) {
            tokenizer._gfmTasklistFirstContentOfListItem = undefined;
          }
        } // Unravel the next token.

        previous = current;
        current = current.next;
      } // Now, loop back through all events (and linked tokens), to figure out which
      // parts belong where.

      current = token;

      while (++index < childEvents.length) {
        if (
          // Find a void token that includes a break.
          childEvents[index][0] === 'exit' &&
          childEvents[index - 1][0] === 'enter' &&
          childEvents[index][1].type === childEvents[index - 1][1].type &&
          childEvents[index][1].start.line !== childEvents[index][1].end.line
        ) {
          start = index + 1;
          breaks.push(start); // Help GC.

          current._tokenizer = undefined;
          current.previous = undefined;
          current = current.next;
        }
      } // Help GC.

      tokenizer.events = []; // If there’s one more token (which is the cases for lines that end in an
      // EOF), that’s perfect: the last point we found starts it.
      // If there isn’t then make sure any remaining content is added to it.

      if (current) {
        // Help GC.
        current._tokenizer = undefined;
        current.previous = undefined;
      } else {
        breaks.pop();
      } // Now splice the events from the subtokenizer into the current events,
      // moving back to front so that splice indices aren’t affected.

      index = breaks.length;

      while (index--) {
        const slice = childEvents.slice(breaks[index], breaks[index + 1]);
        const start = startPositions.pop();
        jumps.unshift([start, start + slice.length - 1]);
        splice(events, start, 2, slice);
      }

      index = -1;

      while (++index < jumps.length) {
        gaps[adjust + jumps[index][0]] = adjust + jumps[index][1];
        adjust += jumps[index][1] - jumps[index][0] - 1;
      }

      return gaps
    }

    /**
     * @typedef {import('micromark-util-types').Construct} Construct
     * @typedef {import('micromark-util-types').Resolver} Resolver
     * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
     * @typedef {import('micromark-util-types').Token} Token
     * @typedef {import('micromark-util-types').State} State
     */

    /**
     * No name because it must not be turned off.
     * @type {Construct}
     */
    const content = {
      tokenize: tokenizeContent,
      resolve: resolveContent
    };
    /** @type {Construct} */

    const continuationConstruct = {
      tokenize: tokenizeContinuation,
      partial: true
    };
    /**
     * Content is transparent: it’s parsed right now. That way, definitions are also
     * parsed right now: before text in paragraphs (specifically, media) are parsed.
     *
     * @type {Resolver}
     */

    function resolveContent(events) {
      subtokenize(events);
      return events
    }
    /** @type {Tokenizer} */

    function tokenizeContent(effects, ok) {
      /** @type {Token} */
      let previous;
      return start
      /** @type {State} */

      function start(code) {
        effects.enter('content');
        previous = effects.enter('chunkContent', {
          contentType: 'content'
        });
        return data(code)
      }
      /** @type {State} */

      function data(code) {
        if (code === null) {
          return contentEnd(code)
        }

        if (markdownLineEnding(code)) {
          return effects.check(
            continuationConstruct,
            contentContinue,
            contentEnd
          )(code)
        } // Data.

        effects.consume(code);
        return data
      }
      /** @type {State} */

      function contentEnd(code) {
        effects.exit('chunkContent');
        effects.exit('content');
        return ok(code)
      }
      /** @type {State} */

      function contentContinue(code) {
        effects.consume(code);
        effects.exit('chunkContent');
        previous.next = effects.enter('chunkContent', {
          contentType: 'content',
          previous
        });
        previous = previous.next;
        return data
      }
    }
    /** @type {Tokenizer} */

    function tokenizeContinuation(effects, ok, nok) {
      const self = this;
      return startLookahead
      /** @type {State} */

      function startLookahead(code) {
        effects.exit('chunkContent');
        effects.enter('lineEnding');
        effects.consume(code);
        effects.exit('lineEnding');
        return factorySpace(effects, prefixed, 'linePrefix')
      }
      /** @type {State} */

      function prefixed(code) {
        if (code === null || markdownLineEnding(code)) {
          return nok(code)
        }

        const tail = self.events[self.events.length - 1];

        if (
          !self.parser.constructs.disable.null.includes('codeIndented') &&
          tail &&
          tail[1].type === 'linePrefix' &&
          tail[2].sliceSerialize(tail[1], true).length >= 4
        ) {
          return ok(code)
        }

        return effects.interrupt(self.parser.constructs.flow, nok, ok)(code)
      }
    }

    /**
     * @typedef {import('micromark-util-types').Effects} Effects
     * @typedef {import('micromark-util-types').State} State
     */

    /**
     * @param {Effects} effects
     * @param {State} ok
     * @param {State} nok
     * @param {string} type
     * @param {string} literalType
     * @param {string} literalMarkerType
     * @param {string} rawType
     * @param {string} stringType
     * @param {number} [max=Infinity]
     * @returns {State}
     */
    // eslint-disable-next-line max-params
    function factoryDestination(
      effects,
      ok,
      nok,
      type,
      literalType,
      literalMarkerType,
      rawType,
      stringType,
      max
    ) {
      const limit = max || Number.POSITIVE_INFINITY;
      let balance = 0;
      return start
      /** @type {State} */

      function start(code) {
        if (code === 60) {
          effects.enter(type);
          effects.enter(literalType);
          effects.enter(literalMarkerType);
          effects.consume(code);
          effects.exit(literalMarkerType);
          return destinationEnclosedBefore
        }

        if (code === null || code === 41 || asciiControl(code)) {
          return nok(code)
        }

        effects.enter(type);
        effects.enter(rawType);
        effects.enter(stringType);
        effects.enter('chunkString', {
          contentType: 'string'
        });
        return destinationRaw(code)
      }
      /** @type {State} */

      function destinationEnclosedBefore(code) {
        if (code === 62) {
          effects.enter(literalMarkerType);
          effects.consume(code);
          effects.exit(literalMarkerType);
          effects.exit(literalType);
          effects.exit(type);
          return ok
        }

        effects.enter(stringType);
        effects.enter('chunkString', {
          contentType: 'string'
        });
        return destinationEnclosed(code)
      }
      /** @type {State} */

      function destinationEnclosed(code) {
        if (code === 62) {
          effects.exit('chunkString');
          effects.exit(stringType);
          return destinationEnclosedBefore(code)
        }

        if (code === null || code === 60 || markdownLineEnding(code)) {
          return nok(code)
        }

        effects.consume(code);
        return code === 92 ? destinationEnclosedEscape : destinationEnclosed
      }
      /** @type {State} */

      function destinationEnclosedEscape(code) {
        if (code === 60 || code === 62 || code === 92) {
          effects.consume(code);
          return destinationEnclosed
        }

        return destinationEnclosed(code)
      }
      /** @type {State} */

      function destinationRaw(code) {
        if (code === 40) {
          if (++balance > limit) return nok(code)
          effects.consume(code);
          return destinationRaw
        }

        if (code === 41) {
          if (!balance--) {
            effects.exit('chunkString');
            effects.exit(stringType);
            effects.exit(rawType);
            effects.exit(type);
            return ok(code)
          }

          effects.consume(code);
          return destinationRaw
        }

        if (code === null || markdownLineEndingOrSpace(code)) {
          if (balance) return nok(code)
          effects.exit('chunkString');
          effects.exit(stringType);
          effects.exit(rawType);
          effects.exit(type);
          return ok(code)
        }

        if (asciiControl(code)) return nok(code)
        effects.consume(code);
        return code === 92 ? destinationRawEscape : destinationRaw
      }
      /** @type {State} */

      function destinationRawEscape(code) {
        if (code === 40 || code === 41 || code === 92) {
          effects.consume(code);
          return destinationRaw
        }

        return destinationRaw(code)
      }
    }

    /**
     * @typedef {import('micromark-util-types').Effects} Effects
     * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
     * @typedef {import('micromark-util-types').State} State
     */

    /**
     * @this {TokenizeContext}
     * @param {Effects} effects
     * @param {State} ok
     * @param {State} nok
     * @param {string} type
     * @param {string} markerType
     * @param {string} stringType
     * @returns {State}
     */
    // eslint-disable-next-line max-params
    function factoryLabel(effects, ok, nok, type, markerType, stringType) {
      const self = this;
      let size = 0;
      /** @type {boolean} */

      let data;
      return start
      /** @type {State} */

      function start(code) {
        effects.enter(type);
        effects.enter(markerType);
        effects.consume(code);
        effects.exit(markerType);
        effects.enter(stringType);
        return atBreak
      }
      /** @type {State} */

      function atBreak(code) {
        if (
          code === null ||
          code === 91 ||
          (code === 93 && !data) ||
          /* To do: remove in the future once we’ve switched from
           * `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
           * which doesn’t need this */

          /* Hidden footnotes hook */

          /* c8 ignore next 3 */
          (code === 94 &&
            !size &&
            '_hiddenFootnoteSupport' in self.parser.constructs) ||
          size > 999
        ) {
          return nok(code)
        }

        if (code === 93) {
          effects.exit(stringType);
          effects.enter(markerType);
          effects.consume(code);
          effects.exit(markerType);
          effects.exit(type);
          return ok
        }

        if (markdownLineEnding(code)) {
          effects.enter('lineEnding');
          effects.consume(code);
          effects.exit('lineEnding');
          return atBreak
        }

        effects.enter('chunkString', {
          contentType: 'string'
        });
        return label(code)
      }
      /** @type {State} */

      function label(code) {
        if (
          code === null ||
          code === 91 ||
          code === 93 ||
          markdownLineEnding(code) ||
          size++ > 999
        ) {
          effects.exit('chunkString');
          return atBreak(code)
        }

        effects.consume(code);
        data = data || !markdownSpace(code);
        return code === 92 ? labelEscape : label
      }
      /** @type {State} */

      function labelEscape(code) {
        if (code === 91 || code === 92 || code === 93) {
          effects.consume(code);
          size++;
          return label
        }

        return label(code)
      }
    }

    /**
     * @typedef {import('micromark-util-types').Effects} Effects
     * @typedef {import('micromark-util-types').State} State
     * @typedef {import('micromark-util-types').Code} Code
     */

    /**
     * @param {Effects} effects
     * @param {State} ok
     * @param {State} nok
     * @param {string} type
     * @param {string} markerType
     * @param {string} stringType
     * @returns {State}
     */
    // eslint-disable-next-line max-params
    function factoryTitle(effects, ok, nok, type, markerType, stringType) {
      /** @type {NonNullable<Code>} */
      let marker;
      return start
      /** @type {State} */

      function start(code) {
        effects.enter(type);
        effects.enter(markerType);
        effects.consume(code);
        effects.exit(markerType);
        marker = code === 40 ? 41 : code;
        return atFirstTitleBreak
      }
      /** @type {State} */

      function atFirstTitleBreak(code) {
        if (code === marker) {
          effects.enter(markerType);
          effects.consume(code);
          effects.exit(markerType);
          effects.exit(type);
          return ok
        }

        effects.enter(stringType);
        return atTitleBreak(code)
      }
      /** @type {State} */

      function atTitleBreak(code) {
        if (code === marker) {
          effects.exit(stringType);
          return atFirstTitleBreak(marker)
        }

        if (code === null) {
          return nok(code)
        } // Note: blank lines can’t exist in content.

        if (markdownLineEnding(code)) {
          effects.enter('lineEnding');
          effects.consume(code);
          effects.exit('lineEnding');
          return factorySpace(effects, atTitleBreak, 'linePrefix')
        }

        effects.enter('chunkString', {
          contentType: 'string'
        });
        return title(code)
      }
      /** @type {State} */

      function title(code) {
        if (code === marker || code === null || markdownLineEnding(code)) {
          effects.exit('chunkString');
          return atTitleBreak(code)
        }

        effects.consume(code);
        return code === 92 ? titleEscape : title
      }
      /** @type {State} */

      function titleEscape(code) {
        if (code === marker || code === 92) {
          effects.consume(code);
          return title
        }

        return title(code)
      }
    }

    /**
     * @typedef {import('micromark-util-types').Effects} Effects
     * @typedef {import('micromark-util-types').State} State
     */

    /**
     * @param {Effects} effects
     * @param {State} ok
     */
    function factoryWhitespace(effects, ok) {
      /** @type {boolean} */
      let seen;
      return start
      /** @type {State} */

      function start(code) {
        if (markdownLineEnding(code)) {
          effects.enter('lineEnding');
          effects.consume(code);
          effects.exit('lineEnding');
          seen = true;
          return start
        }

        if (markdownSpace(code)) {
          return factorySpace(
            effects,
            start,
            seen ? 'linePrefix' : 'lineSuffix'
          )(code)
        }

        return ok(code)
      }
    }

    /**
     * Normalize an identifier (such as used in definitions).
     *
     * @param {string} value
     * @returns {string}
     */
    function normalizeIdentifier(value) {
      return (
        value // Collapse Markdown whitespace.
          .replace(/[\t\n\r ]+/g, ' ') // Trim.
          .replace(/^ | $/g, '') // Some characters are considered “uppercase”, but if their lowercase
          // counterpart is uppercased will result in a different uppercase
          // character.
          // Hence, to get that form, we perform both lower- and uppercase.
          // Upper case makes sure keys will not interact with default prototypal
          // methods: no method is uppercase.
          .toLowerCase()
          .toUpperCase()
      )
    }

    /**
     * @typedef {import('micromark-util-types').Construct} Construct
     * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
     * @typedef {import('micromark-util-types').State} State
     */

    /** @type {Construct} */
    const definition = {
      name: 'definition',
      tokenize: tokenizeDefinition
    };
    /** @type {Construct} */

    const titleConstruct = {
      tokenize: tokenizeTitle,
      partial: true
    };
    /** @type {Tokenizer} */

    function tokenizeDefinition(effects, ok, nok) {
      const self = this;
      /** @type {string} */

      let identifier;
      return start
      /** @type {State} */

      function start(code) {
        effects.enter('definition');
        return factoryLabel.call(
          self,
          effects,
          labelAfter,
          nok,
          'definitionLabel',
          'definitionLabelMarker',
          'definitionLabelString'
        )(code)
      }
      /** @type {State} */

      function labelAfter(code) {
        identifier = normalizeIdentifier(
          self.sliceSerialize(self.events[self.events.length - 1][1]).slice(1, -1)
        );

        if (code === 58) {
          effects.enter('definitionMarker');
          effects.consume(code);
          effects.exit('definitionMarker'); // Note: blank lines can’t exist in content.

          return factoryWhitespace(
            effects,
            factoryDestination(
              effects,
              effects.attempt(
                titleConstruct,
                factorySpace(effects, after, 'whitespace'),
                factorySpace(effects, after, 'whitespace')
              ),
              nok,
              'definitionDestination',
              'definitionDestinationLiteral',
              'definitionDestinationLiteralMarker',
              'definitionDestinationRaw',
              'definitionDestinationString'
            )
          )
        }

        return nok(code)
      }
      /** @type {State} */

      function after(code) {
        if (code === null || markdownLineEnding(code)) {
          effects.exit('definition');

          if (!self.parser.defined.includes(identifier)) {
            self.parser.defined.push(identifier);
          }

          return ok(code)
        }

        return nok(code)
      }
    }
    /** @type {Tokenizer} */

    function tokenizeTitle(effects, ok, nok) {
      return start
      /** @type {State} */

      function start(code) {
        return markdownLineEndingOrSpace(code)
          ? factoryWhitespace(effects, before)(code)
          : nok(code)
      }
      /** @type {State} */

      function before(code) {
        if (code === 34 || code === 39 || code === 40) {
          return factoryTitle(
            effects,
            factorySpace(effects, after, 'whitespace'),
            nok,
            'definitionTitle',
            'definitionTitleMarker',
            'definitionTitleString'
          )(code)
        }

        return nok(code)
      }
      /** @type {State} */

      function after(code) {
        return code === null || markdownLineEnding(code) ? ok(code) : nok(code)
      }
    }

    /**
     * @typedef {import('micromark-util-types').Construct} Construct
     * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
     * @typedef {import('micromark-util-types').State} State
     */

    /** @type {Construct} */
    const hardBreakEscape = {
      name: 'hardBreakEscape',
      tokenize: tokenizeHardBreakEscape
    };
    /** @type {Tokenizer} */

    function tokenizeHardBreakEscape(effects, ok, nok) {
      return start
      /** @type {State} */

      function start(code) {
        effects.enter('hardBreakEscape');
        effects.enter('escapeMarker');
        effects.consume(code);
        return open
      }
      /** @type {State} */

      function open(code) {
        if (markdownLineEnding(code)) {
          effects.exit('escapeMarker');
          effects.exit('hardBreakEscape');
          return ok(code)
        }

        return nok(code)
      }
    }

    /**
     * @typedef {import('micromark-util-types').Construct} Construct
     * @typedef {import('micromark-util-types').Resolver} Resolver
     * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
     * @typedef {import('micromark-util-types').Token} Token
     * @typedef {import('micromark-util-types').State} State
     */

    /** @type {Construct} */
    const headingAtx = {
      name: 'headingAtx',
      tokenize: tokenizeHeadingAtx,
      resolve: resolveHeadingAtx
    };
    /** @type {Resolver} */

    function resolveHeadingAtx(events, context) {
      let contentEnd = events.length - 2;
      let contentStart = 3;
      /** @type {Token} */

      let content;
      /** @type {Token} */

      let text; // Prefix whitespace, part of the opening.

      if (events[contentStart][1].type === 'whitespace') {
        contentStart += 2;
      } // Suffix whitespace, part of the closing.

      if (
        contentEnd - 2 > contentStart &&
        events[contentEnd][1].type === 'whitespace'
      ) {
        contentEnd -= 2;
      }

      if (
        events[contentEnd][1].type === 'atxHeadingSequence' &&
        (contentStart === contentEnd - 1 ||
          (contentEnd - 4 > contentStart &&
            events[contentEnd - 2][1].type === 'whitespace'))
      ) {
        contentEnd -= contentStart + 1 === contentEnd ? 2 : 4;
      }

      if (contentEnd > contentStart) {
        content = {
          type: 'atxHeadingText',
          start: events[contentStart][1].start,
          end: events[contentEnd][1].end
        };
        text = {
          type: 'chunkText',
          start: events[contentStart][1].start,
          end: events[contentEnd][1].end,
          // @ts-expect-error Constants are fine to assign.
          contentType: 'text'
        };
        splice(events, contentStart, contentEnd - contentStart + 1, [
          ['enter', content, context],
          ['enter', text, context],
          ['exit', text, context],
          ['exit', content, context]
        ]);
      }

      return events
    }
    /** @type {Tokenizer} */

    function tokenizeHeadingAtx(effects, ok, nok) {
      const self = this;
      let size = 0;
      return start
      /** @type {State} */

      function start(code) {
        effects.enter('atxHeading');
        effects.enter('atxHeadingSequence');
        return fenceOpenInside(code)
      }
      /** @type {State} */

      function fenceOpenInside(code) {
        if (code === 35 && size++ < 6) {
          effects.consume(code);
          return fenceOpenInside
        }

        if (code === null || markdownLineEndingOrSpace(code)) {
          effects.exit('atxHeadingSequence');
          return self.interrupt ? ok(code) : headingBreak(code)
        }

        return nok(code)
      }
      /** @type {State} */

      function headingBreak(code) {
        if (code === 35) {
          effects.enter('atxHeadingSequence');
          return sequence(code)
        }

        if (code === null || markdownLineEnding(code)) {
          effects.exit('atxHeading');
          return ok(code)
        }

        if (markdownSpace(code)) {
          return factorySpace(effects, headingBreak, 'whitespace')(code)
        }

        effects.enter('atxHeadingText');
        return data(code)
      }
      /** @type {State} */

      function sequence(code) {
        if (code === 35) {
          effects.consume(code);
          return sequence
        }

        effects.exit('atxHeadingSequence');
        return headingBreak(code)
      }
      /** @type {State} */

      function data(code) {
        if (code === null || code === 35 || markdownLineEndingOrSpace(code)) {
          effects.exit('atxHeadingText');
          return headingBreak(code)
        }

        effects.consume(code);
        return data
      }
    }

    /**
     * List of lowercase HTML tag names which when parsing HTML (flow), result
     * in more relaxed rules (condition 6): because they are known blocks, the
     * HTML-like syntax doesn’t have to be strictly parsed.
     * For tag names not in this list, a more strict algorithm (condition 7) is used
     * to detect whether the HTML-like syntax is seen as HTML (flow) or not.
     *
     * This is copied from:
     * <https://spec.commonmark.org/0.30/#html-blocks>.
     */
    const htmlBlockNames = [
      'address',
      'article',
      'aside',
      'base',
      'basefont',
      'blockquote',
      'body',
      'caption',
      'center',
      'col',
      'colgroup',
      'dd',
      'details',
      'dialog',
      'dir',
      'div',
      'dl',
      'dt',
      'fieldset',
      'figcaption',
      'figure',
      'footer',
      'form',
      'frame',
      'frameset',
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'head',
      'header',
      'hr',
      'html',
      'iframe',
      'legend',
      'li',
      'link',
      'main',
      'menu',
      'menuitem',
      'nav',
      'noframes',
      'ol',
      'optgroup',
      'option',
      'p',
      'param',
      'section',
      'summary',
      'table',
      'tbody',
      'td',
      'tfoot',
      'th',
      'thead',
      'title',
      'tr',
      'track',
      'ul'
    ];

    /**
     * List of lowercase HTML tag names which when parsing HTML (flow), result in
     * HTML that can include lines w/o exiting, until a closing tag also in this
     * list is found (condition 1).
     *
     * This module is copied from:
     * <https://spec.commonmark.org/0.30/#html-blocks>.
     *
     * Note that `textarea` was added in `CommonMark@0.30`.
     */
    const htmlRawNames = ['pre', 'script', 'style', 'textarea'];

    /**
     * @typedef {import('micromark-util-types').Construct} Construct
     * @typedef {import('micromark-util-types').Resolver} Resolver
     * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
     * @typedef {import('micromark-util-types').State} State
     * @typedef {import('micromark-util-types').Code} Code
     */
    /** @type {Construct} */

    const htmlFlow = {
      name: 'htmlFlow',
      tokenize: tokenizeHtmlFlow,
      resolveTo: resolveToHtmlFlow,
      concrete: true
    };
    /** @type {Construct} */

    const nextBlankConstruct = {
      tokenize: tokenizeNextBlank,
      partial: true
    };
    /** @type {Resolver} */

    function resolveToHtmlFlow(events) {
      let index = events.length;

      while (index--) {
        if (events[index][0] === 'enter' && events[index][1].type === 'htmlFlow') {
          break
        }
      }

      if (index > 1 && events[index - 2][1].type === 'linePrefix') {
        // Add the prefix start to the HTML token.
        events[index][1].start = events[index - 2][1].start; // Add the prefix start to the HTML line token.

        events[index + 1][1].start = events[index - 2][1].start; // Remove the line prefix.

        events.splice(index - 2, 2);
      }

      return events
    }
    /** @type {Tokenizer} */

    function tokenizeHtmlFlow(effects, ok, nok) {
      const self = this;
      /** @type {number} */

      let kind;
      /** @type {boolean} */

      let startTag;
      /** @type {string} */

      let buffer;
      /** @type {number} */

      let index;
      /** @type {Code} */

      let marker;
      return start
      /** @type {State} */

      function start(code) {
        effects.enter('htmlFlow');
        effects.enter('htmlFlowData');
        effects.consume(code);
        return open
      }
      /** @type {State} */

      function open(code) {
        if (code === 33) {
          effects.consume(code);
          return declarationStart
        }

        if (code === 47) {
          effects.consume(code);
          return tagCloseStart
        }

        if (code === 63) {
          effects.consume(code);
          kind = 3; // While we’re in an instruction instead of a declaration, we’re on a `?`
          // right now, so we do need to search for `>`, similar to declarations.

          return self.interrupt ? ok : continuationDeclarationInside
        }

        if (asciiAlpha(code)) {
          effects.consume(code);
          buffer = String.fromCharCode(code);
          startTag = true;
          return tagName
        }

        return nok(code)
      }
      /** @type {State} */

      function declarationStart(code) {
        if (code === 45) {
          effects.consume(code);
          kind = 2;
          return commentOpenInside
        }

        if (code === 91) {
          effects.consume(code);
          kind = 5;
          buffer = 'CDATA[';
          index = 0;
          return cdataOpenInside
        }

        if (asciiAlpha(code)) {
          effects.consume(code);
          kind = 4;
          return self.interrupt ? ok : continuationDeclarationInside
        }

        return nok(code)
      }
      /** @type {State} */

      function commentOpenInside(code) {
        if (code === 45) {
          effects.consume(code);
          return self.interrupt ? ok : continuationDeclarationInside
        }

        return nok(code)
      }
      /** @type {State} */

      function cdataOpenInside(code) {
        if (code === buffer.charCodeAt(index++)) {
          effects.consume(code);
          return index === buffer.length
            ? self.interrupt
              ? ok
              : continuation
            : cdataOpenInside
        }

        return nok(code)
      }
      /** @type {State} */

      function tagCloseStart(code) {
        if (asciiAlpha(code)) {
          effects.consume(code);
          buffer = String.fromCharCode(code);
          return tagName
        }

        return nok(code)
      }
      /** @type {State} */

      function tagName(code) {
        if (
          code === null ||
          code === 47 ||
          code === 62 ||
          markdownLineEndingOrSpace(code)
        ) {
          if (
            code !== 47 &&
            startTag &&
            htmlRawNames.includes(buffer.toLowerCase())
          ) {
            kind = 1;
            return self.interrupt ? ok(code) : continuation(code)
          }

          if (htmlBlockNames.includes(buffer.toLowerCase())) {
            kind = 6;

            if (code === 47) {
              effects.consume(code);
              return basicSelfClosing
            }

            return self.interrupt ? ok(code) : continuation(code)
          }

          kind = 7; // Do not support complete HTML when interrupting

          return self.interrupt && !self.parser.lazy[self.now().line]
            ? nok(code)
            : startTag
            ? completeAttributeNameBefore(code)
            : completeClosingTagAfter(code)
        }

        if (code === 45 || asciiAlphanumeric(code)) {
          effects.consume(code);
          buffer += String.fromCharCode(code);
          return tagName
        }

        return nok(code)
      }
      /** @type {State} */

      function basicSelfClosing(code) {
        if (code === 62) {
          effects.consume(code);
          return self.interrupt ? ok : continuation
        }

        return nok(code)
      }
      /** @type {State} */

      function completeClosingTagAfter(code) {
        if (markdownSpace(code)) {
          effects.consume(code);
          return completeClosingTagAfter
        }

        return completeEnd(code)
      }
      /** @type {State} */

      function completeAttributeNameBefore(code) {
        if (code === 47) {
          effects.consume(code);
          return completeEnd
        }

        if (code === 58 || code === 95 || asciiAlpha(code)) {
          effects.consume(code);
          return completeAttributeName
        }

        if (markdownSpace(code)) {
          effects.consume(code);
          return completeAttributeNameBefore
        }

        return completeEnd(code)
      }
      /** @type {State} */

      function completeAttributeName(code) {
        if (
          code === 45 ||
          code === 46 ||
          code === 58 ||
          code === 95 ||
          asciiAlphanumeric(code)
        ) {
          effects.consume(code);
          return completeAttributeName
        }

        return completeAttributeNameAfter(code)
      }
      /** @type {State} */

      function completeAttributeNameAfter(code) {
        if (code === 61) {
          effects.consume(code);
          return completeAttributeValueBefore
        }

        if (markdownSpace(code)) {
          effects.consume(code);
          return completeAttributeNameAfter
        }

        return completeAttributeNameBefore(code)
      }
      /** @type {State} */

      function completeAttributeValueBefore(code) {
        if (
          code === null ||
          code === 60 ||
          code === 61 ||
          code === 62 ||
          code === 96
        ) {
          return nok(code)
        }

        if (code === 34 || code === 39) {
          effects.consume(code);
          marker = code;
          return completeAttributeValueQuoted
        }

        if (markdownSpace(code)) {
          effects.consume(code);
          return completeAttributeValueBefore
        }

        marker = null;
        return completeAttributeValueUnquoted(code)
      }
      /** @type {State} */

      function completeAttributeValueQuoted(code) {
        if (code === null || markdownLineEnding(code)) {
          return nok(code)
        }

        if (code === marker) {
          effects.consume(code);
          return completeAttributeValueQuotedAfter
        }

        effects.consume(code);
        return completeAttributeValueQuoted
      }
      /** @type {State} */

      function completeAttributeValueUnquoted(code) {
        if (
          code === null ||
          code === 34 ||
          code === 39 ||
          code === 60 ||
          code === 61 ||
          code === 62 ||
          code === 96 ||
          markdownLineEndingOrSpace(code)
        ) {
          return completeAttributeNameAfter(code)
        }

        effects.consume(code);
        return completeAttributeValueUnquoted
      }
      /** @type {State} */

      function completeAttributeValueQuotedAfter(code) {
        if (code === 47 || code === 62 || markdownSpace(code)) {
          return completeAttributeNameBefore(code)
        }

        return nok(code)
      }
      /** @type {State} */

      function completeEnd(code) {
        if (code === 62) {
          effects.consume(code);
          return completeAfter
        }

        return nok(code)
      }
      /** @type {State} */

      function completeAfter(code) {
        if (markdownSpace(code)) {
          effects.consume(code);
          return completeAfter
        }

        return code === null || markdownLineEnding(code)
          ? continuation(code)
          : nok(code)
      }
      /** @type {State} */

      function continuation(code) {
        if (code === 45 && kind === 2) {
          effects.consume(code);
          return continuationCommentInside
        }

        if (code === 60 && kind === 1) {
          effects.consume(code);
          return continuationRawTagOpen
        }

        if (code === 62 && kind === 4) {
          effects.consume(code);
          return continuationClose
        }

        if (code === 63 && kind === 3) {
          effects.consume(code);
          return continuationDeclarationInside
        }

        if (code === 93 && kind === 5) {
          effects.consume(code);
          return continuationCharacterDataInside
        }

        if (markdownLineEnding(code) && (kind === 6 || kind === 7)) {
          return effects.check(
            nextBlankConstruct,
            continuationClose,
            continuationAtLineEnding
          )(code)
        }

        if (code === null || markdownLineEnding(code)) {
          return continuationAtLineEnding(code)
        }

        effects.consume(code);
        return continuation
      }
      /** @type {State} */

      function continuationAtLineEnding(code) {
        effects.exit('htmlFlowData');
        return htmlContinueStart(code)
      }
      /** @type {State} */

      function htmlContinueStart(code) {
        if (code === null) {
          return done(code)
        }

        if (markdownLineEnding(code)) {
          return effects.attempt(
            {
              tokenize: htmlLineEnd,
              partial: true
            },
            htmlContinueStart,
            done
          )(code)
        }

        effects.enter('htmlFlowData');
        return continuation(code)
      }
      /** @type {Tokenizer} */

      function htmlLineEnd(effects, ok, nok) {
        return start
        /** @type {State} */

        function start(code) {
          effects.enter('lineEnding');
          effects.consume(code);
          effects.exit('lineEnding');
          return lineStart
        }
        /** @type {State} */

        function lineStart(code) {
          return self.parser.lazy[self.now().line] ? nok(code) : ok(code)
        }
      }
      /** @type {State} */

      function continuationCommentInside(code) {
        if (code === 45) {
          effects.consume(code);
          return continuationDeclarationInside
        }

        return continuation(code)
      }
      /** @type {State} */

      function continuationRawTagOpen(code) {
        if (code === 47) {
          effects.consume(code);
          buffer = '';
          return continuationRawEndTag
        }

        return continuation(code)
      }
      /** @type {State} */

      function continuationRawEndTag(code) {
        if (code === 62 && htmlRawNames.includes(buffer.toLowerCase())) {
          effects.consume(code);
          return continuationClose
        }

        if (asciiAlpha(code) && buffer.length < 8) {
          effects.consume(code);
          buffer += String.fromCharCode(code);
          return continuationRawEndTag
        }

        return continuation(code)
      }
      /** @type {State} */

      function continuationCharacterDataInside(code) {
        if (code === 93) {
          effects.consume(code);
          return continuationDeclarationInside
        }

        return continuation(code)
      }
      /** @type {State} */

      function continuationDeclarationInside(code) {
        if (code === 62) {
          effects.consume(code);
          return continuationClose
        } // More dashes.

        if (code === 45 && kind === 2) {
          effects.consume(code);
          return continuationDeclarationInside
        }

        return continuation(code)
      }
      /** @type {State} */

      function continuationClose(code) {
        if (code === null || markdownLineEnding(code)) {
          effects.exit('htmlFlowData');
          return done(code)
        }

        effects.consume(code);
        return continuationClose
      }
      /** @type {State} */

      function done(code) {
        effects.exit('htmlFlow');
        return ok(code)
      }
    }
    /** @type {Tokenizer} */

    function tokenizeNextBlank(effects, ok, nok) {
      return start
      /** @type {State} */

      function start(code) {
        effects.exit('htmlFlowData');
        effects.enter('lineEndingBlank');
        effects.consume(code);
        effects.exit('lineEndingBlank');
        return effects.attempt(blankLine, ok, nok)
      }
    }

    /**
     * @typedef {import('micromark-util-types').Construct} Construct
     * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
     * @typedef {import('micromark-util-types').State} State
     * @typedef {import('micromark-util-types').Code} Code
     */

    /** @type {Construct} */
    const htmlText = {
      name: 'htmlText',
      tokenize: tokenizeHtmlText
    };
    /** @type {Tokenizer} */

    function tokenizeHtmlText(effects, ok, nok) {
      const self = this;
      /** @type {NonNullable<Code>|undefined} */

      let marker;
      /** @type {string} */

      let buffer;
      /** @type {number} */

      let index;
      /** @type {State} */

      let returnState;
      return start
      /** @type {State} */

      function start(code) {
        effects.enter('htmlText');
        effects.enter('htmlTextData');
        effects.consume(code);
        return open
      }
      /** @type {State} */

      function open(code) {
        if (code === 33) {
          effects.consume(code);
          return declarationOpen
        }

        if (code === 47) {
          effects.consume(code);
          return tagCloseStart
        }

        if (code === 63) {
          effects.consume(code);
          return instruction
        }

        if (asciiAlpha(code)) {
          effects.consume(code);
          return tagOpen
        }

        return nok(code)
      }
      /** @type {State} */

      function declarationOpen(code) {
        if (code === 45) {
          effects.consume(code);
          return commentOpen
        }

        if (code === 91) {
          effects.consume(code);
          buffer = 'CDATA[';
          index = 0;
          return cdataOpen
        }

        if (asciiAlpha(code)) {
          effects.consume(code);
          return declaration
        }

        return nok(code)
      }
      /** @type {State} */

      function commentOpen(code) {
        if (code === 45) {
          effects.consume(code);
          return commentStart
        }

        return nok(code)
      }
      /** @type {State} */

      function commentStart(code) {
        if (code === null || code === 62) {
          return nok(code)
        }

        if (code === 45) {
          effects.consume(code);
          return commentStartDash
        }

        return comment(code)
      }
      /** @type {State} */

      function commentStartDash(code) {
        if (code === null || code === 62) {
          return nok(code)
        }

        return comment(code)
      }
      /** @type {State} */

      function comment(code) {
        if (code === null) {
          return nok(code)
        }

        if (code === 45) {
          effects.consume(code);
          return commentClose
        }

        if (markdownLineEnding(code)) {
          returnState = comment;
          return atLineEnding(code)
        }

        effects.consume(code);
        return comment
      }
      /** @type {State} */

      function commentClose(code) {
        if (code === 45) {
          effects.consume(code);
          return end
        }

        return comment(code)
      }
      /** @type {State} */

      function cdataOpen(code) {
        if (code === buffer.charCodeAt(index++)) {
          effects.consume(code);
          return index === buffer.length ? cdata : cdataOpen
        }

        return nok(code)
      }
      /** @type {State} */

      function cdata(code) {
        if (code === null) {
          return nok(code)
        }

        if (code === 93) {
          effects.consume(code);
          return cdataClose
        }

        if (markdownLineEnding(code)) {
          returnState = cdata;
          return atLineEnding(code)
        }

        effects.consume(code);
        return cdata
      }
      /** @type {State} */

      function cdataClose(code) {
        if (code === 93) {
          effects.consume(code);
          return cdataEnd
        }

        return cdata(code)
      }
      /** @type {State} */

      function cdataEnd(code) {
        if (code === 62) {
          return end(code)
        }

        if (code === 93) {
          effects.consume(code);
          return cdataEnd
        }

        return cdata(code)
      }
      /** @type {State} */

      function declaration(code) {
        if (code === null || code === 62) {
          return end(code)
        }

        if (markdownLineEnding(code)) {
          returnState = declaration;
          return atLineEnding(code)
        }

        effects.consume(code);
        return declaration
      }
      /** @type {State} */

      function instruction(code) {
        if (code === null) {
          return nok(code)
        }

        if (code === 63) {
          effects.consume(code);
          return instructionClose
        }

        if (markdownLineEnding(code)) {
          returnState = instruction;
          return atLineEnding(code)
        }

        effects.consume(code);
        return instruction
      }
      /** @type {State} */

      function instructionClose(code) {
        return code === 62 ? end(code) : instruction(code)
      }
      /** @type {State} */

      function tagCloseStart(code) {
        if (asciiAlpha(code)) {
          effects.consume(code);
          return tagClose
        }

        return nok(code)
      }
      /** @type {State} */

      function tagClose(code) {
        if (code === 45 || asciiAlphanumeric(code)) {
          effects.consume(code);
          return tagClose
        }

        return tagCloseBetween(code)
      }
      /** @type {State} */

      function tagCloseBetween(code) {
        if (markdownLineEnding(code)) {
          returnState = tagCloseBetween;
          return atLineEnding(code)
        }

        if (markdownSpace(code)) {
          effects.consume(code);
          return tagCloseBetween
        }

        return end(code)
      }
      /** @type {State} */

      function tagOpen(code) {
        if (code === 45 || asciiAlphanumeric(code)) {
          effects.consume(code);
          return tagOpen
        }

        if (code === 47 || code === 62 || markdownLineEndingOrSpace(code)) {
          return tagOpenBetween(code)
        }

        return nok(code)
      }
      /** @type {State} */

      function tagOpenBetween(code) {
        if (code === 47) {
          effects.consume(code);
          return end
        }

        if (code === 58 || code === 95 || asciiAlpha(code)) {
          effects.consume(code);
          return tagOpenAttributeName
        }

        if (markdownLineEnding(code)) {
          returnState = tagOpenBetween;
          return atLineEnding(code)
        }

        if (markdownSpace(code)) {
          effects.consume(code);
          return tagOpenBetween
        }

        return end(code)
      }
      /** @type {State} */

      function tagOpenAttributeName(code) {
        if (
          code === 45 ||
          code === 46 ||
          code === 58 ||
          code === 95 ||
          asciiAlphanumeric(code)
        ) {
          effects.consume(code);
          return tagOpenAttributeName
        }

        return tagOpenAttributeNameAfter(code)
      }
      /** @type {State} */

      function tagOpenAttributeNameAfter(code) {
        if (code === 61) {
          effects.consume(code);
          return tagOpenAttributeValueBefore
        }

        if (markdownLineEnding(code)) {
          returnState = tagOpenAttributeNameAfter;
          return atLineEnding(code)
        }

        if (markdownSpace(code)) {
          effects.consume(code);
          return tagOpenAttributeNameAfter
        }

        return tagOpenBetween(code)
      }
      /** @type {State} */

      function tagOpenAttributeValueBefore(code) {
        if (
          code === null ||
          code === 60 ||
          code === 61 ||
          code === 62 ||
          code === 96
        ) {
          return nok(code)
        }

        if (code === 34 || code === 39) {
          effects.consume(code);
          marker = code;
          return tagOpenAttributeValueQuoted
        }

        if (markdownLineEnding(code)) {
          returnState = tagOpenAttributeValueBefore;
          return atLineEnding(code)
        }

        if (markdownSpace(code)) {
          effects.consume(code);
          return tagOpenAttributeValueBefore
        }

        effects.consume(code);
        marker = undefined;
        return tagOpenAttributeValueUnquoted
      }
      /** @type {State} */

      function tagOpenAttributeValueQuoted(code) {
        if (code === marker) {
          effects.consume(code);
          return tagOpenAttributeValueQuotedAfter
        }

        if (code === null) {
          return nok(code)
        }

        if (markdownLineEnding(code)) {
          returnState = tagOpenAttributeValueQuoted;
          return atLineEnding(code)
        }

        effects.consume(code);
        return tagOpenAttributeValueQuoted
      }
      /** @type {State} */

      function tagOpenAttributeValueQuotedAfter(code) {
        if (code === 62 || code === 47 || markdownLineEndingOrSpace(code)) {
          return tagOpenBetween(code)
        }

        return nok(code)
      }
      /** @type {State} */

      function tagOpenAttributeValueUnquoted(code) {
        if (
          code === null ||
          code === 34 ||
          code === 39 ||
          code === 60 ||
          code === 61 ||
          code === 96
        ) {
          return nok(code)
        }

        if (code === 62 || markdownLineEndingOrSpace(code)) {
          return tagOpenBetween(code)
        }

        effects.consume(code);
        return tagOpenAttributeValueUnquoted
      } // We can’t have blank lines in content, so no need to worry about empty
      // tokens.

      /** @type {State} */

      function atLineEnding(code) {
        effects.exit('htmlTextData');
        effects.enter('lineEnding');
        effects.consume(code);
        effects.exit('lineEnding');
        return factorySpace(
          effects,
          afterPrefix,
          'linePrefix',
          self.parser.constructs.disable.null.includes('codeIndented')
            ? undefined
            : 4
        )
      }
      /** @type {State} */

      function afterPrefix(code) {
        effects.enter('htmlTextData');
        return returnState(code)
      }
      /** @type {State} */

      function end(code) {
        if (code === 62) {
          effects.consume(code);
          effects.exit('htmlTextData');
          effects.exit('htmlText');
          return ok
        }

        return nok(code)
      }
    }

    /**
     * @typedef {import('micromark-util-types').Construct} Construct
     * @typedef {import('micromark-util-types').Resolver} Resolver
     * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
     * @typedef {import('micromark-util-types').Event} Event
     * @typedef {import('micromark-util-types').Token} Token
     * @typedef {import('micromark-util-types').State} State
     * @typedef {import('micromark-util-types').Code} Code
     */

    /** @type {Construct} */
    const labelEnd = {
      name: 'labelEnd',
      tokenize: tokenizeLabelEnd,
      resolveTo: resolveToLabelEnd,
      resolveAll: resolveAllLabelEnd
    };
    /** @type {Construct} */

    const resourceConstruct = {
      tokenize: tokenizeResource
    };
    /** @type {Construct} */

    const fullReferenceConstruct = {
      tokenize: tokenizeFullReference
    };
    /** @type {Construct} */

    const collapsedReferenceConstruct = {
      tokenize: tokenizeCollapsedReference
    };
    /** @type {Resolver} */

    function resolveAllLabelEnd(events) {
      let index = -1;
      /** @type {Token} */

      let token;

      while (++index < events.length) {
        token = events[index][1];

        if (
          token.type === 'labelImage' ||
          token.type === 'labelLink' ||
          token.type === 'labelEnd'
        ) {
          // Remove the marker.
          events.splice(index + 1, token.type === 'labelImage' ? 4 : 2);
          token.type = 'data';
          index++;
        }
      }

      return events
    }
    /** @type {Resolver} */

    function resolveToLabelEnd(events, context) {
      let index = events.length;
      let offset = 0;
      /** @type {Token} */

      let token;
      /** @type {number|undefined} */

      let open;
      /** @type {number|undefined} */

      let close;
      /** @type {Event[]} */

      let media; // Find an opening.

      while (index--) {
        token = events[index][1];

        if (open) {
          // If we see another link, or inactive link label, we’ve been here before.
          if (
            token.type === 'link' ||
            (token.type === 'labelLink' && token._inactive)
          ) {
            break
          } // Mark other link openings as inactive, as we can’t have links in
          // links.

          if (events[index][0] === 'enter' && token.type === 'labelLink') {
            token._inactive = true;
          }
        } else if (close) {
          if (
            events[index][0] === 'enter' &&
            (token.type === 'labelImage' || token.type === 'labelLink') &&
            !token._balanced
          ) {
            open = index;

            if (token.type !== 'labelLink') {
              offset = 2;
              break
            }
          }
        } else if (token.type === 'labelEnd') {
          close = index;
        }
      }

      const group = {
        type: events[open][1].type === 'labelLink' ? 'link' : 'image',
        start: Object.assign({}, events[open][1].start),
        end: Object.assign({}, events[events.length - 1][1].end)
      };
      const label = {
        type: 'label',
        start: Object.assign({}, events[open][1].start),
        end: Object.assign({}, events[close][1].end)
      };
      const text = {
        type: 'labelText',
        start: Object.assign({}, events[open + offset + 2][1].end),
        end: Object.assign({}, events[close - 2][1].start)
      };
      media = [
        ['enter', group, context],
        ['enter', label, context]
      ]; // Opening marker.

      media = push(media, events.slice(open + 1, open + offset + 3)); // Text open.

      media = push(media, [['enter', text, context]]); // Between.

      media = push(
        media,
        resolveAll(
          context.parser.constructs.insideSpan.null,
          events.slice(open + offset + 4, close - 3),
          context
        )
      ); // Text close, marker close, label close.

      media = push(media, [
        ['exit', text, context],
        events[close - 2],
        events[close - 1],
        ['exit', label, context]
      ]); // Reference, resource, or so.

      media = push(media, events.slice(close + 1)); // Media close.

      media = push(media, [['exit', group, context]]);
      splice(events, open, events.length, media);
      return events
    }
    /** @type {Tokenizer} */

    function tokenizeLabelEnd(effects, ok, nok) {
      const self = this;
      let index = self.events.length;
      /** @type {Token} */

      let labelStart;
      /** @type {boolean} */

      let defined; // Find an opening.

      while (index--) {
        if (
          (self.events[index][1].type === 'labelImage' ||
            self.events[index][1].type === 'labelLink') &&
          !self.events[index][1]._balanced
        ) {
          labelStart = self.events[index][1];
          break
        }
      }

      return start
      /** @type {State} */

      function start(code) {
        if (!labelStart) {
          return nok(code)
        } // It’s a balanced bracket, but contains a link.

        if (labelStart._inactive) return balanced(code)
        defined = self.parser.defined.includes(
          normalizeIdentifier(
            self.sliceSerialize({
              start: labelStart.end,
              end: self.now()
            })
          )
        );
        effects.enter('labelEnd');
        effects.enter('labelMarker');
        effects.consume(code);
        effects.exit('labelMarker');
        effects.exit('labelEnd');
        return afterLabelEnd
      }
      /** @type {State} */

      function afterLabelEnd(code) {
        // Resource: `[asd](fgh)`.
        if (code === 40) {
          return effects.attempt(
            resourceConstruct,
            ok,
            defined ? ok : balanced
          )(code)
        } // Collapsed (`[asd][]`) or full (`[asd][fgh]`) reference?

        if (code === 91) {
          return effects.attempt(
            fullReferenceConstruct,
            ok,
            defined
              ? effects.attempt(collapsedReferenceConstruct, ok, balanced)
              : balanced
          )(code)
        } // Shortcut reference: `[asd]`?

        return defined ? ok(code) : balanced(code)
      }
      /** @type {State} */

      function balanced(code) {
        labelStart._balanced = true;
        return nok(code)
      }
    }
    /** @type {Tokenizer} */

    function tokenizeResource(effects, ok, nok) {
      return start
      /** @type {State} */

      function start(code) {
        effects.enter('resource');
        effects.enter('resourceMarker');
        effects.consume(code);
        effects.exit('resourceMarker');
        return factoryWhitespace(effects, open)
      }
      /** @type {State} */

      function open(code) {
        if (code === 41) {
          return end(code)
        }

        return factoryDestination(
          effects,
          destinationAfter,
          nok,
          'resourceDestination',
          'resourceDestinationLiteral',
          'resourceDestinationLiteralMarker',
          'resourceDestinationRaw',
          'resourceDestinationString',
          32
        )(code)
      }
      /** @type {State} */

      function destinationAfter(code) {
        return markdownLineEndingOrSpace(code)
          ? factoryWhitespace(effects, between)(code)
          : end(code)
      }
      /** @type {State} */

      function between(code) {
        if (code === 34 || code === 39 || code === 40) {
          return factoryTitle(
            effects,
            factoryWhitespace(effects, end),
            nok,
            'resourceTitle',
            'resourceTitleMarker',
            'resourceTitleString'
          )(code)
        }

        return end(code)
      }
      /** @type {State} */

      function end(code) {
        if (code === 41) {
          effects.enter('resourceMarker');
          effects.consume(code);
          effects.exit('resourceMarker');
          effects.exit('resource');
          return ok
        }

        return nok(code)
      }
    }
    /** @type {Tokenizer} */

    function tokenizeFullReference(effects, ok, nok) {
      const self = this;
      return start
      /** @type {State} */

      function start(code) {
        return factoryLabel.call(
          self,
          effects,
          afterLabel,
          nok,
          'reference',
          'referenceMarker',
          'referenceString'
        )(code)
      }
      /** @type {State} */

      function afterLabel(code) {
        return self.parser.defined.includes(
          normalizeIdentifier(
            self.sliceSerialize(self.events[self.events.length - 1][1]).slice(1, -1)
          )
        )
          ? ok(code)
          : nok(code)
      }
    }
    /** @type {Tokenizer} */

    function tokenizeCollapsedReference(effects, ok, nok) {
      return start
      /** @type {State} */

      function start(code) {
        effects.enter('reference');
        effects.enter('referenceMarker');
        effects.consume(code);
        effects.exit('referenceMarker');
        return open
      }
      /** @type {State} */

      function open(code) {
        if (code === 93) {
          effects.enter('referenceMarker');
          effects.consume(code);
          effects.exit('referenceMarker');
          effects.exit('reference');
          return ok
        }

        return nok(code)
      }
    }

    /**
     * @typedef {import('micromark-util-types').Construct} Construct
     * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
     * @typedef {import('micromark-util-types').State} State
     */
    /** @type {Construct} */

    const labelStartImage = {
      name: 'labelStartImage',
      tokenize: tokenizeLabelStartImage,
      resolveAll: labelEnd.resolveAll
    };
    /** @type {Tokenizer} */

    function tokenizeLabelStartImage(effects, ok, nok) {
      const self = this;
      return start
      /** @type {State} */

      function start(code) {
        effects.enter('labelImage');
        effects.enter('labelImageMarker');
        effects.consume(code);
        effects.exit('labelImageMarker');
        return open
      }
      /** @type {State} */

      function open(code) {
        if (code === 91) {
          effects.enter('labelMarker');
          effects.consume(code);
          effects.exit('labelMarker');
          effects.exit('labelImage');
          return after
        }

        return nok(code)
      }
      /** @type {State} */

      function after(code) {
        /* To do: remove in the future once we’ve switched from
         * `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
         * which doesn’t need this */

        /* Hidden footnotes hook */

        /* c8 ignore next 3 */
        return code === 94 && '_hiddenFootnoteSupport' in self.parser.constructs
          ? nok(code)
          : ok(code)
      }
    }

    /**
     * @typedef {import('micromark-util-types').Construct} Construct
     * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
     * @typedef {import('micromark-util-types').State} State
     */
    /** @type {Construct} */

    const labelStartLink = {
      name: 'labelStartLink',
      tokenize: tokenizeLabelStartLink,
      resolveAll: labelEnd.resolveAll
    };
    /** @type {Tokenizer} */

    function tokenizeLabelStartLink(effects, ok, nok) {
      const self = this;
      return start
      /** @type {State} */

      function start(code) {
        effects.enter('labelLink');
        effects.enter('labelMarker');
        effects.consume(code);
        effects.exit('labelMarker');
        effects.exit('labelLink');
        return after
      }
      /** @type {State} */

      function after(code) {
        /* To do: remove in the future once we’ve switched from
         * `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
         * which doesn’t need this */

        /* Hidden footnotes hook. */

        /* c8 ignore next 3 */
        return code === 94 && '_hiddenFootnoteSupport' in self.parser.constructs
          ? nok(code)
          : ok(code)
      }
    }

    /**
     * @typedef {import('micromark-util-types').Construct} Construct
     * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
     * @typedef {import('micromark-util-types').State} State
     */

    /** @type {Construct} */
    const lineEnding = {
      name: 'lineEnding',
      tokenize: tokenizeLineEnding
    };
    /** @type {Tokenizer} */

    function tokenizeLineEnding(effects, ok) {
      return start
      /** @type {State} */

      function start(code) {
        effects.enter('lineEnding');
        effects.consume(code);
        effects.exit('lineEnding');
        return factorySpace(effects, ok, 'linePrefix')
      }
    }

    /**
     * @typedef {import('micromark-util-types').Construct} Construct
     * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
     * @typedef {import('micromark-util-types').State} State
     * @typedef {import('micromark-util-types').Code} Code
     */

    /** @type {Construct} */
    const thematicBreak$1 = {
      name: 'thematicBreak',
      tokenize: tokenizeThematicBreak
    };
    /** @type {Tokenizer} */

    function tokenizeThematicBreak(effects, ok, nok) {
      let size = 0;
      /** @type {NonNullable<Code>} */

      let marker;
      return start
      /** @type {State} */

      function start(code) {
        effects.enter('thematicBreak');
        marker = code;
        return atBreak(code)
      }
      /** @type {State} */

      function atBreak(code) {
        if (code === marker) {
          effects.enter('thematicBreakSequence');
          return sequence(code)
        }

        if (markdownSpace(code)) {
          return factorySpace(effects, atBreak, 'whitespace')(code)
        }

        if (size < 3 || (code !== null && !markdownLineEnding(code))) {
          return nok(code)
        }

        effects.exit('thematicBreak');
        return ok(code)
      }
      /** @type {State} */

      function sequence(code) {
        if (code === marker) {
          effects.consume(code);
          size++;
          return sequence
        }

        effects.exit('thematicBreakSequence');
        return atBreak(code)
      }
    }

    /**
     * @typedef {import('micromark-util-types').Construct} Construct
     * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
     * @typedef {import('micromark-util-types').Exiter} Exiter
     * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
     * @typedef {import('micromark-util-types').State} State
     * @typedef {import('micromark-util-types').Code} Code
     */
    /** @type {Construct} */

    const list$1 = {
      name: 'list',
      tokenize: tokenizeListStart,
      continuation: {
        tokenize: tokenizeListContinuation
      },
      exit: tokenizeListEnd
    };
    /** @type {Construct} */

    const listItemPrefixWhitespaceConstruct = {
      tokenize: tokenizeListItemPrefixWhitespace,
      partial: true
    };
    /** @type {Construct} */

    const indentConstruct = {
      tokenize: tokenizeIndent,
      partial: true
    };
    /**
     * @type {Tokenizer}
     * @this {TokenizeContextWithState}
     */

    function tokenizeListStart(effects, ok, nok) {
      const self = this;
      const tail = self.events[self.events.length - 1];
      let initialSize =
        tail && tail[1].type === 'linePrefix'
          ? tail[2].sliceSerialize(tail[1], true).length
          : 0;
      let size = 0;
      return start
      /** @type {State} */

      function start(code) {
        const kind =
          self.containerState.type ||
          (code === 42 || code === 43 || code === 45
            ? 'listUnordered'
            : 'listOrdered');

        if (
          kind === 'listUnordered'
            ? !self.containerState.marker || code === self.containerState.marker
            : asciiDigit(code)
        ) {
          if (!self.containerState.type) {
            self.containerState.type = kind;
            effects.enter(kind, {
              _container: true
            });
          }

          if (kind === 'listUnordered') {
            effects.enter('listItemPrefix');
            return code === 42 || code === 45
              ? effects.check(thematicBreak$1, nok, atMarker)(code)
              : atMarker(code)
          }

          if (!self.interrupt || code === 49) {
            effects.enter('listItemPrefix');
            effects.enter('listItemValue');
            return inside(code)
          }
        }

        return nok(code)
      }
      /** @type {State} */

      function inside(code) {
        if (asciiDigit(code) && ++size < 10) {
          effects.consume(code);
          return inside
        }

        if (
          (!self.interrupt || size < 2) &&
          (self.containerState.marker
            ? code === self.containerState.marker
            : code === 41 || code === 46)
        ) {
          effects.exit('listItemValue');
          return atMarker(code)
        }

        return nok(code)
      }
      /**
       * @type {State}
       **/

      function atMarker(code) {
        effects.enter('listItemMarker');
        effects.consume(code);
        effects.exit('listItemMarker');
        self.containerState.marker = self.containerState.marker || code;
        return effects.check(
          blankLine, // Can’t be empty when interrupting.
          self.interrupt ? nok : onBlank,
          effects.attempt(
            listItemPrefixWhitespaceConstruct,
            endOfPrefix,
            otherPrefix
          )
        )
      }
      /** @type {State} */

      function onBlank(code) {
        self.containerState.initialBlankLine = true;
        initialSize++;
        return endOfPrefix(code)
      }
      /** @type {State} */

      function otherPrefix(code) {
        if (markdownSpace(code)) {
          effects.enter('listItemPrefixWhitespace');
          effects.consume(code);
          effects.exit('listItemPrefixWhitespace');
          return endOfPrefix
        }

        return nok(code)
      }
      /** @type {State} */

      function endOfPrefix(code) {
        self.containerState.size =
          initialSize +
          self.sliceSerialize(effects.exit('listItemPrefix'), true).length;
        return ok(code)
      }
    }
    /**
     * @type {Tokenizer}
     * @this {TokenizeContextWithState}
     */

    function tokenizeListContinuation(effects, ok, nok) {
      const self = this;
      self.containerState._closeFlow = undefined;
      return effects.check(blankLine, onBlank, notBlank)
      /** @type {State} */

      function onBlank(code) {
        self.containerState.furtherBlankLines =
          self.containerState.furtherBlankLines ||
          self.containerState.initialBlankLine; // We have a blank line.
        // Still, try to consume at most the items size.

        return factorySpace(
          effects,
          ok,
          'listItemIndent',
          self.containerState.size + 1
        )(code)
      }
      /** @type {State} */

      function notBlank(code) {
        if (self.containerState.furtherBlankLines || !markdownSpace(code)) {
          self.containerState.furtherBlankLines = undefined;
          self.containerState.initialBlankLine = undefined;
          return notInCurrentItem(code)
        }

        self.containerState.furtherBlankLines = undefined;
        self.containerState.initialBlankLine = undefined;
        return effects.attempt(indentConstruct, ok, notInCurrentItem)(code)
      }
      /** @type {State} */

      function notInCurrentItem(code) {
        // While we do continue, we signal that the flow should be closed.
        self.containerState._closeFlow = true; // As we’re closing flow, we’re no longer interrupting.

        self.interrupt = undefined;
        return factorySpace(
          effects,
          effects.attempt(list$1, ok, nok),
          'linePrefix',
          self.parser.constructs.disable.null.includes('codeIndented')
            ? undefined
            : 4
        )(code)
      }
    }
    /**
     * @type {Tokenizer}
     * @this {TokenizeContextWithState}
     */

    function tokenizeIndent(effects, ok, nok) {
      const self = this;
      return factorySpace(
        effects,
        afterPrefix,
        'listItemIndent',
        self.containerState.size + 1
      )
      /** @type {State} */

      function afterPrefix(code) {
        const tail = self.events[self.events.length - 1];
        return tail &&
          tail[1].type === 'listItemIndent' &&
          tail[2].sliceSerialize(tail[1], true).length === self.containerState.size
          ? ok(code)
          : nok(code)
      }
    }
    /**
     * @type {Exiter}
     * @this {TokenizeContextWithState}
     */

    function tokenizeListEnd(effects) {
      effects.exit(this.containerState.type);
    }
    /**
     * @type {Tokenizer}
     * @this {TokenizeContextWithState}
     */

    function tokenizeListItemPrefixWhitespace(effects, ok, nok) {
      const self = this;
      return factorySpace(
        effects,
        afterPrefix,
        'listItemPrefixWhitespace',
        self.parser.constructs.disable.null.includes('codeIndented')
          ? undefined
          : 4 + 1
      )
      /** @type {State} */

      function afterPrefix(code) {
        const tail = self.events[self.events.length - 1];
        return !markdownSpace(code) &&
          tail &&
          tail[1].type === 'listItemPrefixWhitespace'
          ? ok(code)
          : nok(code)
      }
    }

    /**
     * @typedef {import('micromark-util-types').Construct} Construct
     * @typedef {import('micromark-util-types').Resolver} Resolver
     * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
     * @typedef {import('micromark-util-types').State} State
     * @typedef {import('micromark-util-types').Code} Code
     */

    /** @type {Construct} */
    const setextUnderline = {
      name: 'setextUnderline',
      tokenize: tokenizeSetextUnderline,
      resolveTo: resolveToSetextUnderline
    };
    /** @type {Resolver} */

    function resolveToSetextUnderline(events, context) {
      let index = events.length;
      /** @type {number|undefined} */

      let content;
      /** @type {number|undefined} */

      let text;
      /** @type {number|undefined} */

      let definition; // Find the opening of the content.
      // It’ll always exist: we don’t tokenize if it isn’t there.

      while (index--) {
        if (events[index][0] === 'enter') {
          if (events[index][1].type === 'content') {
            content = index;
            break
          }

          if (events[index][1].type === 'paragraph') {
            text = index;
          }
        } // Exit
        else {
          if (events[index][1].type === 'content') {
            // Remove the content end (if needed we’ll add it later)
            events.splice(index, 1);
          }

          if (!definition && events[index][1].type === 'definition') {
            definition = index;
          }
        }
      }

      const heading = {
        type: 'setextHeading',
        start: Object.assign({}, events[text][1].start),
        end: Object.assign({}, events[events.length - 1][1].end)
      }; // Change the paragraph to setext heading text.

      events[text][1].type = 'setextHeadingText'; // If we have definitions in the content, we’ll keep on having content,
      // but we need move it.

      if (definition) {
        events.splice(text, 0, ['enter', heading, context]);
        events.splice(definition + 1, 0, ['exit', events[content][1], context]);
        events[content][1].end = Object.assign({}, events[definition][1].end);
      } else {
        events[content][1] = heading;
      } // Add the heading exit at the end.

      events.push(['exit', heading, context]);
      return events
    }
    /** @type {Tokenizer} */

    function tokenizeSetextUnderline(effects, ok, nok) {
      const self = this;
      let index = self.events.length;
      /** @type {NonNullable<Code>} */

      let marker;
      /** @type {boolean} */

      let paragraph; // Find an opening.

      while (index--) {
        // Skip enter/exit of line ending, line prefix, and content.
        // We can now either have a definition or a paragraph.
        if (
          self.events[index][1].type !== 'lineEnding' &&
          self.events[index][1].type !== 'linePrefix' &&
          self.events[index][1].type !== 'content'
        ) {
          paragraph = self.events[index][1].type === 'paragraph';
          break
        }
      }

      return start
      /** @type {State} */

      function start(code) {
        if (!self.parser.lazy[self.now().line] && (self.interrupt || paragraph)) {
          effects.enter('setextHeadingLine');
          effects.enter('setextHeadingLineSequence');
          marker = code;
          return closingSequence(code)
        }

        return nok(code)
      }
      /** @type {State} */

      function closingSequence(code) {
        if (code === marker) {
          effects.consume(code);
          return closingSequence
        }

        effects.exit('setextHeadingLineSequence');
        return factorySpace(effects, closingSequenceEnd, 'lineSuffix')(code)
      }
      /** @type {State} */

      function closingSequenceEnd(code) {
        if (code === null || markdownLineEnding(code)) {
          effects.exit('setextHeadingLine');
          return ok(code)
        }

        return nok(code)
      }
    }

    /**
     * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
     * @typedef {import('micromark-util-types').Initializer} Initializer
     * @typedef {import('micromark-util-types').State} State
     */

    /** @type {InitialConstruct} */
    const flow$1 = {
      tokenize: initializeFlow
    };
    /** @type {Initializer} */

    function initializeFlow(effects) {
      const self = this;
      const initial = effects.attempt(
        // Try to parse a blank line.
        blankLine,
        atBlankEnding, // Try to parse initial flow (essentially, only code).
        effects.attempt(
          this.parser.constructs.flowInitial,
          afterConstruct,
          factorySpace(
            effects,
            effects.attempt(
              this.parser.constructs.flow,
              afterConstruct,
              effects.attempt(content, afterConstruct)
            ),
            'linePrefix'
          )
        )
      );
      return initial
      /** @type {State} */

      function atBlankEnding(code) {
        if (code === null) {
          effects.consume(code);
          return
        }

        effects.enter('lineEndingBlank');
        effects.consume(code);
        effects.exit('lineEndingBlank');
        self.currentConstruct = undefined;
        return initial
      }
      /** @type {State} */

      function afterConstruct(code) {
        if (code === null) {
          effects.consume(code);
          return
        }

        effects.enter('lineEnding');
        effects.consume(code);
        effects.exit('lineEnding');
        self.currentConstruct = undefined;
        return initial
      }
    }

    /**
     * @typedef {import('micromark-util-types').Resolver} Resolver
     * @typedef {import('micromark-util-types').Initializer} Initializer
     * @typedef {import('micromark-util-types').Construct} Construct
     * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
     * @typedef {import('micromark-util-types').State} State
     * @typedef {import('micromark-util-types').Code} Code
     */
    const resolver = {
      resolveAll: createResolver()
    };
    const string$1 = initializeFactory('string');
    const text$2 = initializeFactory('text');
    /**
     * @param {'string'|'text'} field
     * @returns {InitialConstruct}
     */

    function initializeFactory(field) {
      return {
        tokenize: initializeText,
        resolveAll: createResolver(
          field === 'text' ? resolveAllLineSuffixes : undefined
        )
      }
      /** @type {Initializer} */

      function initializeText(effects) {
        const self = this;
        const constructs = this.parser.constructs[field];
        const text = effects.attempt(constructs, start, notText);
        return start
        /** @type {State} */

        function start(code) {
          return atBreak(code) ? text(code) : notText(code)
        }
        /** @type {State} */

        function notText(code) {
          if (code === null) {
            effects.consume(code);
            return
          }

          effects.enter('data');
          effects.consume(code);
          return data
        }
        /** @type {State} */

        function data(code) {
          if (atBreak(code)) {
            effects.exit('data');
            return text(code)
          } // Data.

          effects.consume(code);
          return data
        }
        /**
         * @param {Code} code
         * @returns {boolean}
         */

        function atBreak(code) {
          if (code === null) {
            return true
          }

          const list = constructs[code];
          let index = -1;

          if (list) {
            while (++index < list.length) {
              const item = list[index];

              if (!item.previous || item.previous.call(self, self.previous)) {
                return true
              }
            }
          }

          return false
        }
      }
    }
    /**
     * @param {Resolver} [extraResolver]
     * @returns {Resolver}
     */

    function createResolver(extraResolver) {
      return resolveAllText
      /** @type {Resolver} */

      function resolveAllText(events, context) {
        let index = -1;
        /** @type {number|undefined} */

        let enter; // A rather boring computation (to merge adjacent `data` events) which
        // improves mm performance by 29%.

        while (++index <= events.length) {
          if (enter === undefined) {
            if (events[index] && events[index][1].type === 'data') {
              enter = index;
              index++;
            }
          } else if (!events[index] || events[index][1].type !== 'data') {
            // Don’t do anything if there is one data token.
            if (index !== enter + 2) {
              events[enter][1].end = events[index - 1][1].end;
              events.splice(enter + 2, index - enter - 2);
              index = enter + 2;
            }

            enter = undefined;
          }
        }

        return extraResolver ? extraResolver(events, context) : events
      }
    }
    /**
     * A rather ugly set of instructions which again looks at chunks in the input
     * stream.
     * The reason to do this here is that it is *much* faster to parse in reverse.
     * And that we can’t hook into `null` to split the line suffix before an EOF.
     * To do: figure out if we can make this into a clean utility, or even in core.
     * As it will be useful for GFMs literal autolink extension (and maybe even
     * tables?)
     *
     * @type {Resolver}
     */

    function resolveAllLineSuffixes(events, context) {
      let eventIndex = 0; // Skip first.

      while (++eventIndex <= events.length) {
        if (
          (eventIndex === events.length ||
            events[eventIndex][1].type === 'lineEnding') &&
          events[eventIndex - 1][1].type === 'data'
        ) {
          const data = events[eventIndex - 1][1];
          const chunks = context.sliceStream(data);
          let index = chunks.length;
          let bufferIndex = -1;
          let size = 0;
          /** @type {boolean|undefined} */

          let tabs;

          while (index--) {
            const chunk = chunks[index];

            if (typeof chunk === 'string') {
              bufferIndex = chunk.length;

              while (chunk.charCodeAt(bufferIndex - 1) === 32) {
                size++;
                bufferIndex--;
              }

              if (bufferIndex) break
              bufferIndex = -1;
            } // Number
            else if (chunk === -2) {
              tabs = true;
              size++;
            } else if (chunk === -1) ; else {
              // Replacement character, exit.
              index++;
              break
            }
          }

          if (size) {
            const token = {
              type:
                eventIndex === events.length || tabs || size < 2
                  ? 'lineSuffix'
                  : 'hardBreakTrailing',
              start: {
                line: data.end.line,
                column: data.end.column - size,
                offset: data.end.offset - size,
                _index: data.start._index + index,
                _bufferIndex: index
                  ? bufferIndex
                  : data.start._bufferIndex + bufferIndex
              },
              end: Object.assign({}, data.end)
            };
            data.end = Object.assign({}, token.start);

            if (data.start.offset === data.end.offset) {
              Object.assign(data, token);
            } else {
              events.splice(
                eventIndex,
                0,
                ['enter', token, context],
                ['exit', token, context]
              );
              eventIndex += 2;
            }
          }

          eventIndex++;
        }
      }

      return events
    }

    /**
     * @typedef {import('micromark-util-types').Code} Code
     * @typedef {import('micromark-util-types').Chunk} Chunk
     * @typedef {import('micromark-util-types').Point} Point
     * @typedef {import('micromark-util-types').Token} Token
     * @typedef {import('micromark-util-types').Effects} Effects
     * @typedef {import('micromark-util-types').State} State
     * @typedef {import('micromark-util-types').Construct} Construct
     * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
     * @typedef {import('micromark-util-types').ConstructRecord} ConstructRecord
     * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
     * @typedef {import('micromark-util-types').ParseContext} ParseContext
     */

    /**
     * Create a tokenizer.
     * Tokenizers deal with one type of data (e.g., containers, flow, text).
     * The parser is the object dealing with it all.
     * `initialize` works like other constructs, except that only its `tokenize`
     * function is used, in which case it doesn’t receive an `ok` or `nok`.
     * `from` can be given to set the point before the first character, although
     * when further lines are indented, they must be set with `defineSkip`.
     *
     * @param {ParseContext} parser
     * @param {InitialConstruct} initialize
     * @param {Omit<Point, '_index'|'_bufferIndex'>} [from]
     * @returns {TokenizeContext}
     */
    function createTokenizer(parser, initialize, from) {
      /** @type {Point} */
      let point = Object.assign(
        from
          ? Object.assign({}, from)
          : {
              line: 1,
              column: 1,
              offset: 0
            },
        {
          _index: 0,
          _bufferIndex: -1
        }
      );
      /** @type {Record<string, number>} */

      const columnStart = {};
      /** @type {Array<Construct>} */

      const resolveAllConstructs = [];
      /** @type {Array<Chunk>} */

      let chunks = [];
      /** @type {Array<Token>} */

      let stack = [];
      /**
       * Tools used for tokenizing.
       *
       * @type {Effects}
       */

      const effects = {
        consume,
        enter,
        exit,
        attempt: constructFactory(onsuccessfulconstruct),
        check: constructFactory(onsuccessfulcheck),
        interrupt: constructFactory(onsuccessfulcheck, {
          interrupt: true
        })
      };
      /**
       * State and tools for resolving and serializing.
       *
       * @type {TokenizeContext}
       */

      const context = {
        previous: null,
        code: null,
        containerState: {},
        events: [],
        parser,
        sliceStream,
        sliceSerialize,
        now,
        defineSkip,
        write
      };
      /**
       * The state function.
       *
       * @type {State|void}
       */

      let state = initialize.tokenize.call(context, effects);

      if (initialize.resolveAll) {
        resolveAllConstructs.push(initialize);
      }

      return context
      /** @type {TokenizeContext['write']} */

      function write(slice) {
        chunks = push(chunks, slice);
        main(); // Exit if we’re not done, resolve might change stuff.

        if (chunks[chunks.length - 1] !== null) {
          return []
        }

        addResult(initialize, 0); // Otherwise, resolve, and exit.

        context.events = resolveAll(resolveAllConstructs, context.events, context);
        return context.events
      } //
      // Tools.
      //

      /** @type {TokenizeContext['sliceSerialize']} */

      function sliceSerialize(token, expandTabs) {
        return serializeChunks(sliceStream(token), expandTabs)
      }
      /** @type {TokenizeContext['sliceStream']} */

      function sliceStream(token) {
        return sliceChunks(chunks, token)
      }
      /** @type {TokenizeContext['now']} */

      function now() {
        return Object.assign({}, point)
      }
      /** @type {TokenizeContext['defineSkip']} */

      function defineSkip(value) {
        columnStart[value.line] = value.column;
        accountForPotentialSkip();
      } //
      // State management.
      //

      /**
       * Main loop (note that `_index` and `_bufferIndex` in `point` are modified by
       * `consume`).
       * Here is where we walk through the chunks, which either include strings of
       * several characters, or numerical character codes.
       * The reason to do this in a loop instead of a call is so the stack can
       * drain.
       *
       * @returns {void}
       */

      function main() {
        /** @type {number} */
        let chunkIndex;

        while (point._index < chunks.length) {
          const chunk = chunks[point._index]; // If we’re in a buffer chunk, loop through it.

          if (typeof chunk === 'string') {
            chunkIndex = point._index;

            if (point._bufferIndex < 0) {
              point._bufferIndex = 0;
            }

            while (
              point._index === chunkIndex &&
              point._bufferIndex < chunk.length
            ) {
              go(chunk.charCodeAt(point._bufferIndex));
            }
          } else {
            go(chunk);
          }
        }
      }
      /**
       * Deal with one code.
       *
       * @param {Code} code
       * @returns {void}
       */

      function go(code) {
        state = state(code);
      }
      /** @type {Effects['consume']} */

      function consume(code) {
        if (markdownLineEnding(code)) {
          point.line++;
          point.column = 1;
          point.offset += code === -3 ? 2 : 1;
          accountForPotentialSkip();
        } else if (code !== -1) {
          point.column++;
          point.offset++;
        } // Not in a string chunk.

        if (point._bufferIndex < 0) {
          point._index++;
        } else {
          point._bufferIndex++; // At end of string chunk.
          // @ts-expect-error Points w/ non-negative `_bufferIndex` reference
          // strings.

          if (point._bufferIndex === chunks[point._index].length) {
            point._bufferIndex = -1;
            point._index++;
          }
        } // Expose the previous character.

        context.previous = code; // Mark as consumed.
      }
      /** @type {Effects['enter']} */

      function enter(type, fields) {
        /** @type {Token} */
        // @ts-expect-error Patch instead of assign required fields to help GC.
        const token = fields || {};
        token.type = type;
        token.start = now();
        context.events.push(['enter', token, context]);
        stack.push(token);
        return token
      }
      /** @type {Effects['exit']} */

      function exit(type) {
        const token = stack.pop();
        token.end = now();
        context.events.push(['exit', token, context]);
        return token
      }
      /**
       * Use results.
       *
       * @type {ReturnHandle}
       */

      function onsuccessfulconstruct(construct, info) {
        addResult(construct, info.from);
      }
      /**
       * Discard results.
       *
       * @type {ReturnHandle}
       */

      function onsuccessfulcheck(_, info) {
        info.restore();
      }
      /**
       * Factory to attempt/check/interrupt.
       *
       * @param {ReturnHandle} onreturn
       * @param {Record<string, unknown>} [fields]
       */

      function constructFactory(onreturn, fields) {
        return hook
        /**
         * Handle either an object mapping codes to constructs, a list of
         * constructs, or a single construct.
         *
         * @param {Construct|Array<Construct>|ConstructRecord} constructs
         * @param {State} returnState
         * @param {State} [bogusState]
         * @returns {State}
         */

        function hook(constructs, returnState, bogusState) {
          /** @type {Array<Construct>} */
          let listOfConstructs;
          /** @type {number} */

          let constructIndex;
          /** @type {Construct} */

          let currentConstruct;
          /** @type {Info} */

          let info;
          return Array.isArray(constructs)
            ? /* c8 ignore next 1 */
              handleListOfConstructs(constructs)
            : 'tokenize' in constructs // @ts-expect-error Looks like a construct.
            ? handleListOfConstructs([constructs])
            : handleMapOfConstructs(constructs)
          /**
           * Handle a list of construct.
           *
           * @param {ConstructRecord} map
           * @returns {State}
           */

          function handleMapOfConstructs(map) {
            return start
            /** @type {State} */

            function start(code) {
              const def = code !== null && map[code];
              const all = code !== null && map.null;
              const list = [
                // To do: add more extension tests.

                /* c8 ignore next 2 */
                ...(Array.isArray(def) ? def : def ? [def] : []),
                ...(Array.isArray(all) ? all : all ? [all] : [])
              ];
              return handleListOfConstructs(list)(code)
            }
          }
          /**
           * Handle a list of construct.
           *
           * @param {Array<Construct>} list
           * @returns {State}
           */

          function handleListOfConstructs(list) {
            listOfConstructs = list;
            constructIndex = 0;

            if (list.length === 0) {
              return bogusState
            }

            return handleConstruct(list[constructIndex])
          }
          /**
           * Handle a single construct.
           *
           * @param {Construct} construct
           * @returns {State}
           */

          function handleConstruct(construct) {
            return start
            /** @type {State} */

            function start(code) {
              // To do: not needed to store if there is no bogus state, probably?
              // Currently doesn’t work because `inspect` in document does a check
              // w/o a bogus, which doesn’t make sense. But it does seem to help perf
              // by not storing.
              info = store();
              currentConstruct = construct;

              if (!construct.partial) {
                context.currentConstruct = construct;
              }

              if (
                construct.name &&
                context.parser.constructs.disable.null.includes(construct.name)
              ) {
                return nok()
              }

              return construct.tokenize.call(
                // If we do have fields, create an object w/ `context` as its
                // prototype.
                // This allows a “live binding”, which is needed for `interrupt`.
                fields ? Object.assign(Object.create(context), fields) : context,
                effects,
                ok,
                nok
              )(code)
            }
          }
          /** @type {State} */

          function ok(code) {
            onreturn(currentConstruct, info);
            return returnState
          }
          /** @type {State} */

          function nok(code) {
            info.restore();

            if (++constructIndex < listOfConstructs.length) {
              return handleConstruct(listOfConstructs[constructIndex])
            }

            return bogusState
          }
        }
      }
      /**
       * @param {Construct} construct
       * @param {number} from
       * @returns {void}
       */

      function addResult(construct, from) {
        if (construct.resolveAll && !resolveAllConstructs.includes(construct)) {
          resolveAllConstructs.push(construct);
        }

        if (construct.resolve) {
          splice(
            context.events,
            from,
            context.events.length - from,
            construct.resolve(context.events.slice(from), context)
          );
        }

        if (construct.resolveTo) {
          context.events = construct.resolveTo(context.events, context);
        }
      }
      /**
       * Store state.
       *
       * @returns {Info}
       */

      function store() {
        const startPoint = now();
        const startPrevious = context.previous;
        const startCurrentConstruct = context.currentConstruct;
        const startEventsIndex = context.events.length;
        const startStack = Array.from(stack);
        return {
          restore,
          from: startEventsIndex
        }
        /**
         * Restore state.
         *
         * @returns {void}
         */

        function restore() {
          point = startPoint;
          context.previous = startPrevious;
          context.currentConstruct = startCurrentConstruct;
          context.events.length = startEventsIndex;
          stack = startStack;
          accountForPotentialSkip();
        }
      }
      /**
       * Move the current point a bit forward in the line when it’s on a column
       * skip.
       *
       * @returns {void}
       */

      function accountForPotentialSkip() {
        if (point.line in columnStart && point.column < 2) {
          point.column = columnStart[point.line];
          point.offset += columnStart[point.line] - 1;
        }
      }
    }
    /**
     * Get the chunks from a slice of chunks in the range of a token.
     *
     * @param {Array<Chunk>} chunks
     * @param {Pick<Token, 'start'|'end'>} token
     * @returns {Array<Chunk>}
     */

    function sliceChunks(chunks, token) {
      const startIndex = token.start._index;
      const startBufferIndex = token.start._bufferIndex;
      const endIndex = token.end._index;
      const endBufferIndex = token.end._bufferIndex;
      /** @type {Array<Chunk>} */

      let view;

      if (startIndex === endIndex) {
        // @ts-expect-error `_bufferIndex` is used on string chunks.
        view = [chunks[startIndex].slice(startBufferIndex, endBufferIndex)];
      } else {
        view = chunks.slice(startIndex, endIndex);

        if (startBufferIndex > -1) {
          // @ts-expect-error `_bufferIndex` is used on string chunks.
          view[0] = view[0].slice(startBufferIndex);
        }

        if (endBufferIndex > 0) {
          // @ts-expect-error `_bufferIndex` is used on string chunks.
          view.push(chunks[endIndex].slice(0, endBufferIndex));
        }
      }

      return view
    }
    /**
     * Get the string value of a slice of chunks.
     *
     * @param {Array<Chunk>} chunks
     * @param {boolean} [expandTabs=false]
     * @returns {string}
     */

    function serializeChunks(chunks, expandTabs) {
      let index = -1;
      /** @type {Array<string>} */

      const result = [];
      /** @type {boolean|undefined} */

      let atTab;

      while (++index < chunks.length) {
        const chunk = chunks[index];
        /** @type {string} */

        let value;

        if (typeof chunk === 'string') {
          value = chunk;
        } else
          switch (chunk) {
            case -5: {
              value = '\r';
              break
            }

            case -4: {
              value = '\n';
              break
            }

            case -3: {
              value = '\r' + '\n';
              break
            }

            case -2: {
              value = expandTabs ? ' ' : '\t';
              break
            }

            case -1: {
              if (!expandTabs && atTab) continue
              value = ' ';
              break
            }

            default: {
              // Currently only replacement character.
              value = String.fromCharCode(chunk);
            }
          }

        atTab = chunk === -2;
        result.push(value);
      }

      return result.join('')
    }

    /**
     * @typedef {import('micromark-util-types').Extension} Extension
     */
    /** @type {Extension['document']} */

    const document$1 = {
      [42]: list$1,
      [43]: list$1,
      [45]: list$1,
      [48]: list$1,
      [49]: list$1,
      [50]: list$1,
      [51]: list$1,
      [52]: list$1,
      [53]: list$1,
      [54]: list$1,
      [55]: list$1,
      [56]: list$1,
      [57]: list$1,
      [62]: blockQuote
    };
    /** @type {Extension['contentInitial']} */

    const contentInitial = {
      [91]: definition
    };
    /** @type {Extension['flowInitial']} */

    const flowInitial = {
      [-2]: codeIndented,
      [-1]: codeIndented,
      [32]: codeIndented
    };
    /** @type {Extension['flow']} */

    const flow = {
      [35]: headingAtx,
      [42]: thematicBreak$1,
      [45]: [setextUnderline, thematicBreak$1],
      [60]: htmlFlow,
      [61]: setextUnderline,
      [95]: thematicBreak$1,
      [96]: codeFenced,
      [126]: codeFenced
    };
    /** @type {Extension['string']} */

    const string = {
      [38]: characterReference,
      [92]: characterEscape
    };
    /** @type {Extension['text']} */

    const text$1 = {
      [-5]: lineEnding,
      [-4]: lineEnding,
      [-3]: lineEnding,
      [33]: labelStartImage,
      [38]: characterReference,
      [42]: attention,
      [60]: [autolink, htmlText],
      [91]: labelStartLink,
      [92]: [hardBreakEscape, characterEscape],
      [93]: labelEnd,
      [95]: attention,
      [96]: codeText
    };
    /** @type {Extension['insideSpan']} */

    const insideSpan = {
      null: [attention, resolver]
    };
    /** @type {Extension['attentionMarkers']} */

    const attentionMarkers = {
      null: [42, 95]
    };
    /** @type {Extension['disable']} */

    const disable = {
      null: []
    };

    var defaultConstructs = /*#__PURE__*/Object.freeze({
        __proto__: null,
        attentionMarkers: attentionMarkers,
        contentInitial: contentInitial,
        disable: disable,
        document: document$1,
        flow: flow,
        flowInitial: flowInitial,
        insideSpan: insideSpan,
        string: string,
        text: text$1
    });

    /**
     * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
     * @typedef {import('micromark-util-types').FullNormalizedExtension} FullNormalizedExtension
     * @typedef {import('micromark-util-types').ParseOptions} ParseOptions
     * @typedef {import('micromark-util-types').ParseContext} ParseContext
     * @typedef {import('micromark-util-types').Create} Create
     */
    /**
     * @param {ParseOptions} [options]
     * @returns {ParseContext}
     */

    function parse(options = {}) {
      /** @type {FullNormalizedExtension} */
      // @ts-expect-error `defaultConstructs` is full, so the result will be too.
      const constructs = combineExtensions(
        // @ts-expect-error Same as above.
        [defaultConstructs].concat(options.extensions || [])
      );
      /** @type {ParseContext} */

      const parser = {
        defined: [],
        lazy: {},
        constructs,
        content: create(content$1),
        document: create(document$2),
        flow: create(flow$1),
        string: create(string$1),
        text: create(text$2)
      };
      return parser
      /**
       * @param {InitialConstruct} initial
       */

      function create(initial) {
        return creator
        /** @type {Create} */

        function creator(from) {
          return createTokenizer(parser, initial, from)
        }
      }
    }

    /**
     * @typedef {import('micromark-util-types').Encoding} Encoding
     * @typedef {import('micromark-util-types').Value} Value
     * @typedef {import('micromark-util-types').Chunk} Chunk
     * @typedef {import('micromark-util-types').Code} Code
     */

    /**
     * @callback Preprocessor
     * @param {Value} value
     * @param {Encoding} [encoding]
     * @param {boolean} [end=false]
     * @returns {Array<Chunk>}
     */
    const search = /[\0\t\n\r]/g;
    /**
     * @returns {Preprocessor}
     */

    function preprocess() {
      let column = 1;
      let buffer = '';
      /** @type {boolean|undefined} */

      let start = true;
      /** @type {boolean|undefined} */

      let atCarriageReturn;
      return preprocessor
      /** @type {Preprocessor} */

      function preprocessor(value, encoding, end) {
        /** @type {Array<Chunk>} */
        const chunks = [];
        /** @type {RegExpMatchArray|null} */

        let match;
        /** @type {number} */

        let next;
        /** @type {number} */

        let startPosition;
        /** @type {number} */

        let endPosition;
        /** @type {Code} */

        let code; // @ts-expect-error `Buffer` does allow an encoding.

        value = buffer + value.toString(encoding);
        startPosition = 0;
        buffer = '';

        if (start) {
          if (value.charCodeAt(0) === 65279) {
            startPosition++;
          }

          start = undefined;
        }

        while (startPosition < value.length) {
          search.lastIndex = startPosition;
          match = search.exec(value);
          endPosition =
            match && match.index !== undefined ? match.index : value.length;
          code = value.charCodeAt(endPosition);

          if (!match) {
            buffer = value.slice(startPosition);
            break
          }

          if (code === 10 && startPosition === endPosition && atCarriageReturn) {
            chunks.push(-3);
            atCarriageReturn = undefined;
          } else {
            if (atCarriageReturn) {
              chunks.push(-5);
              atCarriageReturn = undefined;
            }

            if (startPosition < endPosition) {
              chunks.push(value.slice(startPosition, endPosition));
              column += endPosition - startPosition;
            }

            switch (code) {
              case 0: {
                chunks.push(65533);
                column++;
                break
              }

              case 9: {
                next = Math.ceil(column / 4) * 4;
                chunks.push(-2);

                while (column++ < next) chunks.push(-1);

                break
              }

              case 10: {
                chunks.push(-4);
                column = 1;
                break
              }

              default: {
                atCarriageReturn = true;
                column = 1;
              }
            }
          }

          startPosition = endPosition + 1;
        }

        if (end) {
          if (atCarriageReturn) chunks.push(-5);
          if (buffer) chunks.push(buffer);
          chunks.push(null);
        }

        return chunks
      }
    }

    /**
     * @typedef {import('micromark-util-types').Event} Event
     */
    /**
     * @param {Array<Event>} events
     * @returns {Array<Event>}
     */

    function postprocess(events) {
      while (!subtokenize(events)) {
        // Empty
      }

      return events
    }

    /**
     * Turn the number (in string form as either hexa- or plain decimal) coming from
     * a numeric character reference into a character.
     *
     * @param {string} value
     *   Value to decode.
     * @param {number} base
     *   Numeric base.
     * @returns {string}
     */
    function decodeNumericCharacterReference(value, base) {
      const code = Number.parseInt(value, base);

      if (
        // C0 except for HT, LF, FF, CR, space
        code < 9 ||
        code === 11 ||
        (code > 13 && code < 32) || // Control character (DEL) of the basic block and C1 controls.
        (code > 126 && code < 160) || // Lone high surrogates and low surrogates.
        (code > 55295 && code < 57344) || // Noncharacters.
        (code > 64975 && code < 65008) ||
        (code & 65535) === 65535 ||
        (code & 65535) === 65534 || // Out of range
        code > 1114111
      ) {
        return '\uFFFD'
      }

      return String.fromCharCode(code)
    }

    const characterEscapeOrReference =
      /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
    /**
     * Utility to decode markdown strings (which occur in places such as fenced
     * code info strings, destinations, labels, and titles).
     * The “string” content type allows character escapes and -references.
     * This decodes those.
     *
     * @param {string} value
     * @returns {string}
     */

    function decodeString(value) {
      return value.replace(characterEscapeOrReference, decode)
    }
    /**
     * @param {string} $0
     * @param {string} $1
     * @param {string} $2
     * @returns {string}
     */

    function decode($0, $1, $2) {
      if ($1) {
        // Escape.
        return $1
      } // Reference.

      const head = $2.charCodeAt(0);

      if (head === 35) {
        const head = $2.charCodeAt(1);
        const hex = head === 120 || head === 88;
        return decodeNumericCharacterReference($2.slice(hex ? 2 : 1), hex ? 16 : 10)
      }

      return decodeNamedCharacterReference($2) || $0
    }

    /**
     * @typedef {import('micromark-util-types').Encoding} Encoding
     * @typedef {import('micromark-util-types').Event} Event
     * @typedef {import('micromark-util-types').ParseOptions} ParseOptions
     * @typedef {import('micromark-util-types').Token} Token
     * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
     * @typedef {import('micromark-util-types').Value} Value
     *
     * @typedef {import('unist').Parent} UnistParent
     * @typedef {import('unist').Point} Point
     *
     * @typedef {import('mdast').PhrasingContent} PhrasingContent
     * @typedef {import('mdast').StaticPhrasingContent} StaticPhrasingContent
     * @typedef {import('mdast').Content} Content
     * @typedef {import('mdast').Break} Break
     * @typedef {import('mdast').Blockquote} Blockquote
     * @typedef {import('mdast').Code} Code
     * @typedef {import('mdast').Definition} Definition
     * @typedef {import('mdast').Emphasis} Emphasis
     * @typedef {import('mdast').Heading} Heading
     * @typedef {import('mdast').HTML} HTML
     * @typedef {import('mdast').Image} Image
     * @typedef {import('mdast').ImageReference} ImageReference
     * @typedef {import('mdast').InlineCode} InlineCode
     * @typedef {import('mdast').Link} Link
     * @typedef {import('mdast').LinkReference} LinkReference
     * @typedef {import('mdast').List} List
     * @typedef {import('mdast').ListItem} ListItem
     * @typedef {import('mdast').Paragraph} Paragraph
     * @typedef {import('mdast').Root} Root
     * @typedef {import('mdast').Strong} Strong
     * @typedef {import('mdast').Text} Text
     * @typedef {import('mdast').ThematicBreak} ThematicBreak
     * @typedef {import('mdast').ReferenceType} ReferenceType
     * @typedef {import('../index.js').CompileData} CompileData
     */
    const own$5 = {}.hasOwnProperty;

    /**
     * @param value
     *   Markdown to parse.
     * @param encoding
     *   Character encoding for when `value` is `Buffer`.
     * @param options
     *   Configuration.
     * @returns
     *   mdast tree.
     */
    const fromMarkdown =
      /**
       * @type {(
       *   ((value: Value, encoding: Encoding, options?: Options | null | undefined) => Root) &
       *   ((value: Value, options?: Options | null | undefined) => Root)
       * )}
       */

      /**
       * @param {Value} value
       * @param {Encoding | Options | null | undefined} [encoding]
       * @param {Options | null | undefined} [options]
       * @returns {Root}
       */
      function (value, encoding, options) {
        if (typeof encoding !== 'string') {
          options = encoding;
          encoding = undefined;
        }
        return compiler(options)(
          postprocess(
            // @ts-expect-error: micromark types need to accept `null`.
            parse(options).document().write(preprocess()(value, encoding, true))
          )
        )
      };

    /**
     * Note this compiler only understand complete buffering, not streaming.
     *
     * @param {Options | null | undefined} [options]
     */
    function compiler(options) {
      /** @type {Config} */
      const config = {
        transforms: [],
        canContainEols: ['emphasis', 'fragment', 'heading', 'paragraph', 'strong'],
        enter: {
          autolink: opener(link),
          autolinkProtocol: onenterdata,
          autolinkEmail: onenterdata,
          atxHeading: opener(heading),
          blockQuote: opener(blockQuote),
          characterEscape: onenterdata,
          characterReference: onenterdata,
          codeFenced: opener(codeFlow),
          codeFencedFenceInfo: buffer,
          codeFencedFenceMeta: buffer,
          codeIndented: opener(codeFlow, buffer),
          codeText: opener(codeText, buffer),
          codeTextData: onenterdata,
          data: onenterdata,
          codeFlowValue: onenterdata,
          definition: opener(definition),
          definitionDestinationString: buffer,
          definitionLabelString: buffer,
          definitionTitleString: buffer,
          emphasis: opener(emphasis),
          hardBreakEscape: opener(hardBreak),
          hardBreakTrailing: opener(hardBreak),
          htmlFlow: opener(html, buffer),
          htmlFlowData: onenterdata,
          htmlText: opener(html, buffer),
          htmlTextData: onenterdata,
          image: opener(image),
          label: buffer,
          link: opener(link),
          listItem: opener(listItem),
          listItemValue: onenterlistitemvalue,
          listOrdered: opener(list, onenterlistordered),
          listUnordered: opener(list),
          paragraph: opener(paragraph),
          reference: onenterreference,
          referenceString: buffer,
          resourceDestinationString: buffer,
          resourceTitleString: buffer,
          setextHeading: opener(heading),
          strong: opener(strong),
          thematicBreak: opener(thematicBreak)
        },
        exit: {
          atxHeading: closer(),
          atxHeadingSequence: onexitatxheadingsequence,
          autolink: closer(),
          autolinkEmail: onexitautolinkemail,
          autolinkProtocol: onexitautolinkprotocol,
          blockQuote: closer(),
          characterEscapeValue: onexitdata,
          characterReferenceMarkerHexadecimal: onexitcharacterreferencemarker,
          characterReferenceMarkerNumeric: onexitcharacterreferencemarker,
          characterReferenceValue: onexitcharacterreferencevalue,
          codeFenced: closer(onexitcodefenced),
          codeFencedFence: onexitcodefencedfence,
          codeFencedFenceInfo: onexitcodefencedfenceinfo,
          codeFencedFenceMeta: onexitcodefencedfencemeta,
          codeFlowValue: onexitdata,
          codeIndented: closer(onexitcodeindented),
          codeText: closer(onexitcodetext),
          codeTextData: onexitdata,
          data: onexitdata,
          definition: closer(),
          definitionDestinationString: onexitdefinitiondestinationstring,
          definitionLabelString: onexitdefinitionlabelstring,
          definitionTitleString: onexitdefinitiontitlestring,
          emphasis: closer(),
          hardBreakEscape: closer(onexithardbreak),
          hardBreakTrailing: closer(onexithardbreak),
          htmlFlow: closer(onexithtmlflow),
          htmlFlowData: onexitdata,
          htmlText: closer(onexithtmltext),
          htmlTextData: onexitdata,
          image: closer(onexitimage),
          label: onexitlabel,
          labelText: onexitlabeltext,
          lineEnding: onexitlineending,
          link: closer(onexitlink),
          listItem: closer(),
          listOrdered: closer(),
          listUnordered: closer(),
          paragraph: closer(),
          referenceString: onexitreferencestring,
          resourceDestinationString: onexitresourcedestinationstring,
          resourceTitleString: onexitresourcetitlestring,
          resource: onexitresource,
          setextHeading: closer(onexitsetextheading),
          setextHeadingLineSequence: onexitsetextheadinglinesequence,
          setextHeadingText: onexitsetextheadingtext,
          strong: closer(),
          thematicBreak: closer()
        }
      };
      configure(config, (options || {}).mdastExtensions || []);

      /** @type {CompileData} */
      const data = {};
      return compile

      /**
       * Turn micromark events into an mdast tree.
       *
       * @param {Array<Event>} events
       *   Events.
       * @returns {Root}
       *   mdast tree.
       */
      function compile(events) {
        /** @type {Root} */
        let tree = {
          type: 'root',
          children: []
        };
        /** @type {Omit<CompileContext, 'sliceSerialize'>} */
        const context = {
          stack: [tree],
          tokenStack: [],
          config,
          enter,
          exit,
          buffer,
          resume,
          setData,
          getData
        };
        /** @type {Array<number>} */
        const listStack = [];
        let index = -1;
        while (++index < events.length) {
          // We preprocess lists to add `listItem` tokens, and to infer whether
          // items the list itself are spread out.
          if (
            events[index][1].type === 'listOrdered' ||
            events[index][1].type === 'listUnordered'
          ) {
            if (events[index][0] === 'enter') {
              listStack.push(index);
            } else {
              const tail = listStack.pop();
              index = prepareList(events, tail, index);
            }
          }
        }
        index = -1;
        while (++index < events.length) {
          const handler = config[events[index][0]];
          if (own$5.call(handler, events[index][1].type)) {
            handler[events[index][1].type].call(
              Object.assign(
                {
                  sliceSerialize: events[index][2].sliceSerialize
                },
                context
              ),
              events[index][1]
            );
          }
        }

        // Handle tokens still being open.
        if (context.tokenStack.length > 0) {
          const tail = context.tokenStack[context.tokenStack.length - 1];
          const handler = tail[1] || defaultOnError;
          handler.call(context, undefined, tail[0]);
        }

        // Figure out `root` position.
        tree.position = {
          start: point$1(
            events.length > 0
              ? events[0][1].start
              : {
                  line: 1,
                  column: 1,
                  offset: 0
                }
          ),
          end: point$1(
            events.length > 0
              ? events[events.length - 2][1].end
              : {
                  line: 1,
                  column: 1,
                  offset: 0
                }
          )
        };

        // Call transforms.
        index = -1;
        while (++index < config.transforms.length) {
          tree = config.transforms[index](tree) || tree;
        }
        return tree
      }

      /**
       * @param {Array<Event>} events
       * @param {number} start
       * @param {number} length
       * @returns {number}
       */
      function prepareList(events, start, length) {
        let index = start - 1;
        let containerBalance = -1;
        let listSpread = false;
        /** @type {Token | undefined} */
        let listItem;
        /** @type {number | undefined} */
        let lineIndex;
        /** @type {number | undefined} */
        let firstBlankLineIndex;
        /** @type {boolean | undefined} */
        let atMarker;
        while (++index <= length) {
          const event = events[index];
          if (
            event[1].type === 'listUnordered' ||
            event[1].type === 'listOrdered' ||
            event[1].type === 'blockQuote'
          ) {
            if (event[0] === 'enter') {
              containerBalance++;
            } else {
              containerBalance--;
            }
            atMarker = undefined;
          } else if (event[1].type === 'lineEndingBlank') {
            if (event[0] === 'enter') {
              if (
                listItem &&
                !atMarker &&
                !containerBalance &&
                !firstBlankLineIndex
              ) {
                firstBlankLineIndex = index;
              }
              atMarker = undefined;
            }
          } else if (
            event[1].type === 'linePrefix' ||
            event[1].type === 'listItemValue' ||
            event[1].type === 'listItemMarker' ||
            event[1].type === 'listItemPrefix' ||
            event[1].type === 'listItemPrefixWhitespace'
          ) ; else {
            atMarker = undefined;
          }
          if (
            (!containerBalance &&
              event[0] === 'enter' &&
              event[1].type === 'listItemPrefix') ||
            (containerBalance === -1 &&
              event[0] === 'exit' &&
              (event[1].type === 'listUnordered' ||
                event[1].type === 'listOrdered'))
          ) {
            if (listItem) {
              let tailIndex = index;
              lineIndex = undefined;
              while (tailIndex--) {
                const tailEvent = events[tailIndex];
                if (
                  tailEvent[1].type === 'lineEnding' ||
                  tailEvent[1].type === 'lineEndingBlank'
                ) {
                  if (tailEvent[0] === 'exit') continue
                  if (lineIndex) {
                    events[lineIndex][1].type = 'lineEndingBlank';
                    listSpread = true;
                  }
                  tailEvent[1].type = 'lineEnding';
                  lineIndex = tailIndex;
                } else if (
                  tailEvent[1].type === 'linePrefix' ||
                  tailEvent[1].type === 'blockQuotePrefix' ||
                  tailEvent[1].type === 'blockQuotePrefixWhitespace' ||
                  tailEvent[1].type === 'blockQuoteMarker' ||
                  tailEvent[1].type === 'listItemIndent'
                ) ; else {
                  break
                }
              }
              if (
                firstBlankLineIndex &&
                (!lineIndex || firstBlankLineIndex < lineIndex)
              ) {
                // @ts-expect-error Patched.
                listItem._spread = true;
              }

              // Fix position.
              listItem.end = Object.assign(
                {},
                lineIndex ? events[lineIndex][1].start : event[1].end
              );
              events.splice(lineIndex || index, 0, ['exit', listItem, event[2]]);
              index++;
              length++;
            }

            // Create a new list item.
            if (event[1].type === 'listItemPrefix') {
              listItem = {
                type: 'listItem',
                // @ts-expect-error Patched
                _spread: false,
                start: Object.assign({}, event[1].start)
              };
              // @ts-expect-error: `listItem` is most definitely defined, TS...
              events.splice(index, 0, ['enter', listItem, event[2]]);
              index++;
              length++;
              firstBlankLineIndex = undefined;
              atMarker = true;
            }
          }
        }

        // @ts-expect-error Patched.
        events[start][1]._spread = listSpread;
        return length
      }

      /**
       * Set data.
       *
       * @template {keyof CompileData} Key
       *   Field type.
       * @param {Key} key
       *   Key of field.
       * @param {CompileData[Key]} [value]
       *   New value.
       * @returns {void}
       *   Nothing.
       */
      function setData(key, value) {
        data[key] = value;
      }

      /**
       * Get data.
       *
       * @template {keyof CompileData} Key
       *   Field type.
       * @param {Key} key
       *   Key of field.
       * @returns {CompileData[Key]}
       *   Value.
       */
      function getData(key) {
        return data[key]
      }

      /**
       * Create an opener handle.
       *
       * @param {(token: Token) => Node} create
       *   Create a node.
       * @param {Handle} [and]
       *   Optional function to also run.
       * @returns {Handle}
       *   Handle.
       */
      function opener(create, and) {
        return open

        /**
         * @this {CompileContext}
         * @param {Token} token
         * @returns {void}
         */
        function open(token) {
          enter.call(this, create(token), token);
          if (and) and.call(this, token);
        }
      }

      /**
       * @this {CompileContext}
       * @returns {void}
       */
      function buffer() {
        this.stack.push({
          type: 'fragment',
          children: []
        });
      }

      /**
       * @template {Node} Kind
       *   Node type.
       * @this {CompileContext}
       *   Context.
       * @param {Kind} node
       *   Node to enter.
       * @param {Token} token
       *   Corresponding token.
       * @param {OnEnterError | undefined} [errorHandler]
       *   Handle the case where this token is open, but it is closed by something else.
       * @returns {Kind}
       *   The given node.
       */
      function enter(node, token, errorHandler) {
        const parent = this.stack[this.stack.length - 1];
        // @ts-expect-error: Assume `Node` can exist as a child of `parent`.
        parent.children.push(node);
        this.stack.push(node);
        this.tokenStack.push([token, errorHandler]);
        // @ts-expect-error: `end` will be patched later.
        node.position = {
          start: point$1(token.start)
        };
        return node
      }

      /**
       * Create a closer handle.
       *
       * @param {Handle} [and]
       *   Optional function to also run.
       * @returns {Handle}
       *   Handle.
       */
      function closer(and) {
        return close

        /**
         * @this {CompileContext}
         * @param {Token} token
         * @returns {void}
         */
        function close(token) {
          if (and) and.call(this, token);
          exit.call(this, token);
        }
      }

      /**
       * @this {CompileContext}
       *   Context.
       * @param {Token} token
       *   Corresponding token.
       * @param {OnExitError | undefined} [onExitError]
       *   Handle the case where another token is open.
       * @returns {Node}
       *   The closed node.
       */
      function exit(token, onExitError) {
        const node = this.stack.pop();
        const open = this.tokenStack.pop();
        if (!open) {
          throw new Error(
            'Cannot close `' +
              token.type +
              '` (' +
              stringifyPosition({
                start: token.start,
                end: token.end
              }) +
              '): it’s not open'
          )
        } else if (open[0].type !== token.type) {
          if (onExitError) {
            onExitError.call(this, token, open[0]);
          } else {
            const handler = open[1] || defaultOnError;
            handler.call(this, token, open[0]);
          }
        }
        node.position.end = point$1(token.end);
        return node
      }

      /**
       * @this {CompileContext}
       * @returns {string}
       */
      function resume() {
        return toString(this.stack.pop())
      }

      //
      // Handlers.
      //

      /**
       * @this {CompileContext}
       * @type {Handle}
       */
      function onenterlistordered() {
        setData('expectingFirstListItemValue', true);
      }

      /**
       * @this {CompileContext}
       * @type {Handle}
       */
      function onenterlistitemvalue(token) {
        if (getData('expectingFirstListItemValue')) {
          const ancestor = this.stack[this.stack.length - 2];
          ancestor.start = Number.parseInt(this.sliceSerialize(token), 10);
          setData('expectingFirstListItemValue');
        }
      }

      /**
       * @this {CompileContext}
       * @type {Handle}
       */
      function onexitcodefencedfenceinfo() {
        const data = this.resume();
        const node = this.stack[this.stack.length - 1];
        node.lang = data;
      }

      /**
       * @this {CompileContext}
       * @type {Handle}
       */
      function onexitcodefencedfencemeta() {
        const data = this.resume();
        const node = this.stack[this.stack.length - 1];
        node.meta = data;
      }

      /**
       * @this {CompileContext}
       * @type {Handle}
       */
      function onexitcodefencedfence() {
        // Exit if this is the closing fence.
        if (getData('flowCodeInside')) return
        this.buffer();
        setData('flowCodeInside', true);
      }

      /**
       * @this {CompileContext}
       * @type {Handle}
       */
      function onexitcodefenced() {
        const data = this.resume();
        const node = this.stack[this.stack.length - 1];
        node.value = data.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, '');
        setData('flowCodeInside');
      }

      /**
       * @this {CompileContext}
       * @type {Handle}
       */
      function onexitcodeindented() {
        const data = this.resume();
        const node = this.stack[this.stack.length - 1];
        node.value = data.replace(/(\r?\n|\r)$/g, '');
      }

      /**
       * @this {CompileContext}
       * @type {Handle}
       */
      function onexitdefinitionlabelstring(token) {
        const label = this.resume();
        const node = this.stack[this.stack.length - 1];
        node.label = label;
        node.identifier = normalizeIdentifier(
          this.sliceSerialize(token)
        ).toLowerCase();
      }

      /**
       * @this {CompileContext}
       * @type {Handle}
       */
      function onexitdefinitiontitlestring() {
        const data = this.resume();
        const node = this.stack[this.stack.length - 1];
        node.title = data;
      }

      /**
       * @this {CompileContext}
       * @type {Handle}
       */
      function onexitdefinitiondestinationstring() {
        const data = this.resume();
        const node = this.stack[this.stack.length - 1];
        node.url = data;
      }

      /**
       * @this {CompileContext}
       * @type {Handle}
       */
      function onexitatxheadingsequence(token) {
        const node = this.stack[this.stack.length - 1];
        if (!node.depth) {
          const depth = this.sliceSerialize(token).length;
          node.depth = depth;
        }
      }

      /**
       * @this {CompileContext}
       * @type {Handle}
       */
      function onexitsetextheadingtext() {
        setData('setextHeadingSlurpLineEnding', true);
      }

      /**
       * @this {CompileContext}
       * @type {Handle}
       */
      function onexitsetextheadinglinesequence(token) {
        const node = this.stack[this.stack.length - 1];
        node.depth = this.sliceSerialize(token).charCodeAt(0) === 61 ? 1 : 2;
      }

      /**
       * @this {CompileContext}
       * @type {Handle}
       */
      function onexitsetextheading() {
        setData('setextHeadingSlurpLineEnding');
      }

      /**
       * @this {CompileContext}
       * @type {Handle}
       */

      function onenterdata(token) {
        const node = this.stack[this.stack.length - 1];
        let tail = node.children[node.children.length - 1];
        if (!tail || tail.type !== 'text') {
          // Add a new text node.
          tail = text();
          // @ts-expect-error: we’ll add `end` later.
          tail.position = {
            start: point$1(token.start)
          };
          // @ts-expect-error: Assume `parent` accepts `text`.
          node.children.push(tail);
        }
        this.stack.push(tail);
      }

      /**
       * @this {CompileContext}
       * @type {Handle}
       */

      function onexitdata(token) {
        const tail = this.stack.pop();
        tail.value += this.sliceSerialize(token);
        tail.position.end = point$1(token.end);
      }

      /**
       * @this {CompileContext}
       * @type {Handle}
       */

      function onexitlineending(token) {
        const context = this.stack[this.stack.length - 1];
        // If we’re at a hard break, include the line ending in there.
        if (getData('atHardBreak')) {
          const tail = context.children[context.children.length - 1];
          tail.position.end = point$1(token.end);
          setData('atHardBreak');
          return
        }
        if (
          !getData('setextHeadingSlurpLineEnding') &&
          config.canContainEols.includes(context.type)
        ) {
          onenterdata.call(this, token);
          onexitdata.call(this, token);
        }
      }

      /**
       * @this {CompileContext}
       * @type {Handle}
       */

      function onexithardbreak() {
        setData('atHardBreak', true);
      }

      /**
       * @this {CompileContext}
       * @type {Handle}
       */

      function onexithtmlflow() {
        const data = this.resume();
        const node = this.stack[this.stack.length - 1];
        node.value = data;
      }

      /**
       * @this {CompileContext}
       * @type {Handle}
       */

      function onexithtmltext() {
        const data = this.resume();
        const node = this.stack[this.stack.length - 1];
        node.value = data;
      }

      /**
       * @this {CompileContext}
       * @type {Handle}
       */

      function onexitcodetext() {
        const data = this.resume();
        const node = this.stack[this.stack.length - 1];
        node.value = data;
      }

      /**
       * @this {CompileContext}
       * @type {Handle}
       */

      function onexitlink() {
        const node = this.stack[this.stack.length - 1];
        // Note: there are also `identifier` and `label` fields on this link node!
        // These are used / cleaned here.

        // To do: clean.
        if (getData('inReference')) {
          /** @type {ReferenceType} */
          const referenceType = getData('referenceType') || 'shortcut';
          node.type += 'Reference';
          // @ts-expect-error: mutate.
          node.referenceType = referenceType;
          // @ts-expect-error: mutate.
          delete node.url;
          delete node.title;
        } else {
          // @ts-expect-error: mutate.
          delete node.identifier;
          // @ts-expect-error: mutate.
          delete node.label;
        }
        setData('referenceType');
      }

      /**
       * @this {CompileContext}
       * @type {Handle}
       */

      function onexitimage() {
        const node = this.stack[this.stack.length - 1];
        // Note: there are also `identifier` and `label` fields on this link node!
        // These are used / cleaned here.

        // To do: clean.
        if (getData('inReference')) {
          /** @type {ReferenceType} */
          const referenceType = getData('referenceType') || 'shortcut';
          node.type += 'Reference';
          // @ts-expect-error: mutate.
          node.referenceType = referenceType;
          // @ts-expect-error: mutate.
          delete node.url;
          delete node.title;
        } else {
          // @ts-expect-error: mutate.
          delete node.identifier;
          // @ts-expect-error: mutate.
          delete node.label;
        }
        setData('referenceType');
      }

      /**
       * @this {CompileContext}
       * @type {Handle}
       */

      function onexitlabeltext(token) {
        const string = this.sliceSerialize(token);
        const ancestor = this.stack[this.stack.length - 2];
        // @ts-expect-error: stash this on the node, as it might become a reference
        // later.
        ancestor.label = decodeString(string);
        // @ts-expect-error: same as above.
        ancestor.identifier = normalizeIdentifier(string).toLowerCase();
      }

      /**
       * @this {CompileContext}
       * @type {Handle}
       */

      function onexitlabel() {
        const fragment = this.stack[this.stack.length - 1];
        const value = this.resume();
        const node = this.stack[this.stack.length - 1];
        // Assume a reference.
        setData('inReference', true);
        if (node.type === 'link') {
          /** @type {Array<StaticPhrasingContent>} */
          // @ts-expect-error: Assume static phrasing content.
          const children = fragment.children;
          node.children = children;
        } else {
          node.alt = value;
        }
      }

      /**
       * @this {CompileContext}
       * @type {Handle}
       */

      function onexitresourcedestinationstring() {
        const data = this.resume();
        const node = this.stack[this.stack.length - 1];
        node.url = data;
      }

      /**
       * @this {CompileContext}
       * @type {Handle}
       */

      function onexitresourcetitlestring() {
        const data = this.resume();
        const node = this.stack[this.stack.length - 1];
        node.title = data;
      }

      /**
       * @this {CompileContext}
       * @type {Handle}
       */

      function onexitresource() {
        setData('inReference');
      }

      /**
       * @this {CompileContext}
       * @type {Handle}
       */

      function onenterreference() {
        setData('referenceType', 'collapsed');
      }

      /**
       * @this {CompileContext}
       * @type {Handle}
       */

      function onexitreferencestring(token) {
        const label = this.resume();
        const node = this.stack[this.stack.length - 1];
        // @ts-expect-error: stash this on the node, as it might become a reference
        // later.
        node.label = label;
        // @ts-expect-error: same as above.
        node.identifier = normalizeIdentifier(
          this.sliceSerialize(token)
        ).toLowerCase();
        setData('referenceType', 'full');
      }

      /**
       * @this {CompileContext}
       * @type {Handle}
       */

      function onexitcharacterreferencemarker(token) {
        setData('characterReferenceType', token.type);
      }

      /**
       * @this {CompileContext}
       * @type {Handle}
       */
      function onexitcharacterreferencevalue(token) {
        const data = this.sliceSerialize(token);
        const type = getData('characterReferenceType');
        /** @type {string} */
        let value;
        if (type) {
          value = decodeNumericCharacterReference(
            data,
            type === 'characterReferenceMarkerNumeric' ? 10 : 16
          );
          setData('characterReferenceType');
        } else {
          const result = decodeNamedCharacterReference(data);
          value = result;
        }
        const tail = this.stack.pop();
        tail.value += value;
        tail.position.end = point$1(token.end);
      }

      /**
       * @this {CompileContext}
       * @type {Handle}
       */
      function onexitautolinkprotocol(token) {
        onexitdata.call(this, token);
        const node = this.stack[this.stack.length - 1];
        node.url = this.sliceSerialize(token);
      }

      /**
       * @this {CompileContext}
       * @type {Handle}
       */
      function onexitautolinkemail(token) {
        onexitdata.call(this, token);
        const node = this.stack[this.stack.length - 1];
        node.url = 'mailto:' + this.sliceSerialize(token);
      }

      //
      // Creaters.
      //

      /** @returns {Blockquote} */
      function blockQuote() {
        return {
          type: 'blockquote',
          children: []
        }
      }

      /** @returns {Code} */
      function codeFlow() {
        return {
          type: 'code',
          lang: null,
          meta: null,
          value: ''
        }
      }

      /** @returns {InlineCode} */
      function codeText() {
        return {
          type: 'inlineCode',
          value: ''
        }
      }

      /** @returns {Definition} */
      function definition() {
        return {
          type: 'definition',
          identifier: '',
          label: null,
          title: null,
          url: ''
        }
      }

      /** @returns {Emphasis} */
      function emphasis() {
        return {
          type: 'emphasis',
          children: []
        }
      }

      /** @returns {Heading} */
      function heading() {
        // @ts-expect-error `depth` will be set later.
        return {
          type: 'heading',
          depth: undefined,
          children: []
        }
      }

      /** @returns {Break} */
      function hardBreak() {
        return {
          type: 'break'
        }
      }

      /** @returns {HTML} */
      function html() {
        return {
          type: 'html',
          value: ''
        }
      }

      /** @returns {Image} */
      function image() {
        return {
          type: 'image',
          title: null,
          url: '',
          alt: null
        }
      }

      /** @returns {Link} */
      function link() {
        return {
          type: 'link',
          title: null,
          url: '',
          children: []
        }
      }

      /**
       * @param {Token} token
       * @returns {List}
       */
      function list(token) {
        return {
          type: 'list',
          ordered: token.type === 'listOrdered',
          start: null,
          // @ts-expect-error Patched.
          spread: token._spread,
          children: []
        }
      }

      /**
       * @param {Token} token
       * @returns {ListItem}
       */
      function listItem(token) {
        return {
          type: 'listItem',
          // @ts-expect-error Patched.
          spread: token._spread,
          checked: null,
          children: []
        }
      }

      /** @returns {Paragraph} */
      function paragraph() {
        return {
          type: 'paragraph',
          children: []
        }
      }

      /** @returns {Strong} */
      function strong() {
        return {
          type: 'strong',
          children: []
        }
      }

      /** @returns {Text} */
      function text() {
        return {
          type: 'text',
          value: ''
        }
      }

      /** @returns {ThematicBreak} */
      function thematicBreak() {
        return {
          type: 'thematicBreak'
        }
      }
    }

    /**
     * Copy a point-like value.
     *
     * @param {Point} d
     *   Point-like value.
     * @returns {Point}
     *   unist point.
     */
    function point$1(d) {
      return {
        line: d.line,
        column: d.column,
        offset: d.offset
      }
    }

    /**
     * @param {Config} combined
     * @param {Array<Extension | Array<Extension>>} extensions
     * @returns {void}
     */
    function configure(combined, extensions) {
      let index = -1;
      while (++index < extensions.length) {
        const value = extensions[index];
        if (Array.isArray(value)) {
          configure(combined, value);
        } else {
          extension(combined, value);
        }
      }
    }

    /**
     * @param {Config} combined
     * @param {Extension} extension
     * @returns {void}
     */
    function extension(combined, extension) {
      /** @type {keyof Extension} */
      let key;
      for (key in extension) {
        if (own$5.call(extension, key)) {
          if (key === 'canContainEols') {
            const right = extension[key];
            if (right) {
              combined[key].push(...right);
            }
          } else if (key === 'transforms') {
            const right = extension[key];
            if (right) {
              combined[key].push(...right);
            }
          } else if (key === 'enter' || key === 'exit') {
            const right = extension[key];
            if (right) {
              Object.assign(combined[key], right);
            }
          }
        }
      }
    }

    /** @type {OnEnterError} */
    function defaultOnError(left, right) {
      if (left) {
        throw new Error(
          'Cannot close `' +
            left.type +
            '` (' +
            stringifyPosition({
              start: left.start,
              end: left.end
            }) +
            '): a different token (`' +
            right.type +
            '`, ' +
            stringifyPosition({
              start: right.start,
              end: right.end
            }) +
            ') is open'
        )
      } else {
        throw new Error(
          'Cannot close document, a token (`' +
            right.type +
            '`, ' +
            stringifyPosition({
              start: right.start,
              end: right.end
            }) +
            ') is still open'
        )
      }
    }

    /**
     * @typedef {import('mdast').Root} Root
     * @typedef {import('mdast-util-from-markdown').Options} Options
     */

    /** @type {import('unified').Plugin<[Options?] | void[], string, Root>} */
    function remarkParse(options) {
      /** @type {import('unified').ParserFunction<Root>} */
      const parser = (doc) => {
        // Assume options.
        const settings = /** @type {Options} */ (this.data('settings'));

        return fromMarkdown(
          doc,
          Object.assign({}, settings, options, {
            // Note: these options are not in the readme.
            // The goal is for them to be set by plugins on `data` instead of being
            // passed by users.
            extensions: this.data('micromarkExtensions') || [],
            mdastExtensions: this.data('fromMarkdownExtensions') || []
          })
        )
      };

      Object.assign(this, {Parser: parser});
    }

    /**
     * @typedef {import('hast').Element} Element
     * @typedef {import('mdast').Blockquote} Blockquote
     * @typedef {import('../state.js').State} State
     */

    /**
     * Turn an mdast `blockquote` node into hast.
     *
     * @param {State} state
     *   Info passed around.
     * @param {Blockquote} node
     *   mdast node.
     * @returns {Element}
     *   hast node.
     */
    function blockquote(state, node) {
      /** @type {Element} */
      const result = {
        type: 'element',
        tagName: 'blockquote',
        properties: {},
        children: state.wrap(state.all(node), true)
      };
      state.patch(node, result);
      return state.applyData(node, result)
    }

    /**
     * @typedef {import('hast').Element} Element
     * @typedef {import('hast').Text} Text
     * @typedef {import('mdast').Break} Break
     * @typedef {import('../state.js').State} State
     */

    /**
     * Turn an mdast `break` node into hast.
     *
     * @param {State} state
     *   Info passed around.
     * @param {Break} node
     *   mdast node.
     * @returns {Array<Element | Text>}
     *   hast element content.
     */
    function hardBreak(state, node) {
      /** @type {Element} */
      const result = {type: 'element', tagName: 'br', properties: {}, children: []};
      state.patch(node, result);
      return [state.applyData(node, result), {type: 'text', value: '\n'}]
    }

    /**
     * @typedef {import('hast').Element} Element
     * @typedef {import('hast').Properties} Properties
     * @typedef {import('mdast').Code} Code
     * @typedef {import('../state.js').State} State

     */

    /**
     * Turn an mdast `code` node into hast.
     *
     * @param {State} state
     *   Info passed around.
     * @param {Code} node
     *   mdast node.
     * @returns {Element}
     *   hast node.
     */
    function code(state, node) {
      const value = node.value ? node.value + '\n' : '';
      // To do: next major, use `node.lang` w/o regex, the splitting’s been going
      // on for years in remark now.
      const lang = node.lang ? node.lang.match(/^[^ \t]+(?=[ \t]|$)/) : null;
      /** @type {Properties} */
      const properties = {};

      if (lang) {
        properties.className = ['language-' + lang];
      }

      // Create `<code>`.
      /** @type {Element} */
      let result = {
        type: 'element',
        tagName: 'code',
        properties,
        children: [{type: 'text', value}]
      };

      if (node.meta) {
        result.data = {meta: node.meta};
      }

      state.patch(node, result);
      result = state.applyData(node, result);

      // Create `<pre>`.
      result = {type: 'element', tagName: 'pre', properties: {}, children: [result]};
      state.patch(node, result);
      return result
    }

    /**
     * @typedef {import('hast').Element} Element
     * @typedef {import('mdast').Delete} Delete
     * @typedef {import('../state.js').State} State

     */

    /**
     * Turn an mdast `delete` node into hast.
     *
     * @param {State} state
     *   Info passed around.
     * @param {Delete} node
     *   mdast node.
     * @returns {Element}
     *   hast node.
     */
    function strikethrough(state, node) {
      /** @type {Element} */
      const result = {
        type: 'element',
        tagName: 'del',
        properties: {},
        children: state.all(node)
      };
      state.patch(node, result);
      return state.applyData(node, result)
    }

    /**
     * @typedef {import('hast').Element} Element
     * @typedef {import('mdast').Emphasis} Emphasis
     * @typedef {import('../state.js').State} State
     */

    /**
     * Turn an mdast `emphasis` node into hast.
     *
     * @param {State} state
     *   Info passed around.
     * @param {Emphasis} node
     *   mdast node.
     * @returns {Element}
     *   hast node.
     */
    function emphasis(state, node) {
      /** @type {Element} */
      const result = {
        type: 'element',
        tagName: 'em',
        properties: {},
        children: state.all(node)
      };
      state.patch(node, result);
      return state.applyData(node, result)
    }

    /**
     * Normalize a URL (such as used in definitions).
     *
     * Encode unsafe characters with percent-encoding, skipping already encoded
     * sequences.
     *
     * @param {string} value
     * @returns {string}
     */

    function normalizeUri(value) {
      /** @type {Array<string>} */
      const result = [];
      let index = -1;
      let start = 0;
      let skip = 0;

      while (++index < value.length) {
        const code = value.charCodeAt(index);
        /** @type {string} */

        let replace = ''; // A correct percent encoded value.

        if (
          code === 37 &&
          asciiAlphanumeric(value.charCodeAt(index + 1)) &&
          asciiAlphanumeric(value.charCodeAt(index + 2))
        ) {
          skip = 2;
        } // ASCII.
        else if (code < 128) {
          if (!/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(code))) {
            replace = String.fromCharCode(code);
          }
        } // Astral.
        else if (code > 55295 && code < 57344) {
          const next = value.charCodeAt(index + 1); // A correct surrogate pair.

          if (code < 56320 && next > 56319 && next < 57344) {
            replace = String.fromCharCode(code, next);
            skip = 1;
          } // Lone surrogate.
          else {
            replace = '\uFFFD';
          }
        } // Unicode.
        else {
          replace = String.fromCharCode(code);
        }

        if (replace) {
          result.push(value.slice(start, index), encodeURIComponent(replace));
          start = index + skip + 1;
          replace = '';
        }

        if (skip) {
          index += skip;
          skip = 0;
        }
      }

      return result.join('') + value.slice(start)
    }

    /**
     * @typedef {import('mdast').FootnoteReference} FootnoteReference
     * @typedef {import('hast').Element} Element
     * @typedef {import('../state.js').State} State
     */

    /**
     * Turn an mdast `footnoteReference` node into hast.
     *
     * @param {State} state
     *   Info passed around.
     * @param {FootnoteReference} node
     *   mdast node.
     * @returns {Element}
     *   hast node.
     */
    function footnoteReference(state, node) {
      const id = String(node.identifier).toUpperCase();
      const safeId = normalizeUri(id.toLowerCase());
      const index = state.footnoteOrder.indexOf(id);
      /** @type {number} */
      let counter;

      if (index === -1) {
        state.footnoteOrder.push(id);
        state.footnoteCounts[id] = 1;
        counter = state.footnoteOrder.length;
      } else {
        state.footnoteCounts[id]++;
        counter = index + 1;
      }

      const reuseCounter = state.footnoteCounts[id];

      /** @type {Element} */
      const link = {
        type: 'element',
        tagName: 'a',
        properties: {
          href: '#' + state.clobberPrefix + 'fn-' + safeId,
          id:
            state.clobberPrefix +
            'fnref-' +
            safeId +
            (reuseCounter > 1 ? '-' + reuseCounter : ''),
          dataFootnoteRef: true,
          ariaDescribedBy: ['footnote-label']
        },
        children: [{type: 'text', value: String(counter)}]
      };
      state.patch(node, link);

      /** @type {Element} */
      const sup = {
        type: 'element',
        tagName: 'sup',
        properties: {},
        children: [link]
      };
      state.patch(node, sup);
      return state.applyData(node, sup)
    }

    /**
     * @typedef {import('hast').Element} Element
     * @typedef {import('mdast').Footnote} Footnote
     * @typedef {import('../state.js').State} State
     */

    // To do: when both:
    // * <https://github.com/micromark/micromark-extension-footnote>
    // * <https://github.com/syntax-tree/mdast-util-footnote>
    // …are archived, remove this (also from mdast).
    // These inline notes are not used in GFM.

    /**
     * Turn an mdast `footnote` node into hast.
     *
     * @param {State} state
     *   Info passed around.
     * @param {Footnote} node
     *   mdast node.
     * @returns {Element}
     *   hast node.
     */
    function footnote(state, node) {
      const footnoteById = state.footnoteById;
      let no = 1;

      while (no in footnoteById) no++;

      const identifier = String(no);

      footnoteById[identifier] = {
        type: 'footnoteDefinition',
        identifier,
        children: [{type: 'paragraph', children: node.children}],
        position: node.position
      };

      return footnoteReference(state, {
        type: 'footnoteReference',
        identifier,
        position: node.position
      })
    }

    /**
     * @typedef {import('hast').Element} Element
     * @typedef {import('mdast').Heading} Heading
     * @typedef {import('../state.js').State} State
     */

    /**
     * Turn an mdast `heading` node into hast.
     *
     * @param {State} state
     *   Info passed around.
     * @param {Heading} node
     *   mdast node.
     * @returns {Element}
     *   hast node.
     */
    function heading(state, node) {
      /** @type {Element} */
      const result = {
        type: 'element',
        tagName: 'h' + node.depth,
        properties: {},
        children: state.all(node)
      };
      state.patch(node, result);
      return state.applyData(node, result)
    }

    /**
     * @typedef {import('hast').Element} Element
     * @typedef {import('mdast').HTML} Html
     * @typedef {import('../state.js').State} State
     * @typedef {import('../../index.js').Raw} Raw
     */

    /**
     * Turn an mdast `html` node into hast (`raw` node in dangerous mode, otherwise
     * nothing).
     *
     * @param {State} state
     *   Info passed around.
     * @param {Html} node
     *   mdast node.
     * @returns {Raw | Element | null}
     *   hast node.
     */
    function html$2(state, node) {
      if (state.dangerous) {
        /** @type {Raw} */
        const result = {type: 'raw', value: node.value};
        state.patch(node, result);
        return state.applyData(node, result)
      }

      // To do: next major: return `undefined`.
      return null
    }

    /**
     * @typedef {import('hast').ElementContent} ElementContent
     *
     * @typedef {import('mdast').Content} Content
     * @typedef {import('mdast').Reference} Reference
     * @typedef {import('mdast').Root} Root
     *
     * @typedef {import('./state.js').State} State
     */

    /**
     * @typedef {Root | Content} Nodes
     * @typedef {Extract<Nodes, Reference>} References
     */

    // To do: next major: always return array.

    /**
     * Return the content of a reference without definition as plain text.
     *
     * @param {State} state
     *   Info passed around.
     * @param {References} node
     *   Reference node (image, link).
     * @returns {ElementContent | Array<ElementContent>}
     *   hast content.
     */
    function revert(state, node) {
      const subtype = node.referenceType;
      let suffix = ']';

      if (subtype === 'collapsed') {
        suffix += '[]';
      } else if (subtype === 'full') {
        suffix += '[' + (node.label || node.identifier) + ']';
      }

      if (node.type === 'imageReference') {
        return {type: 'text', value: '![' + node.alt + suffix}
      }

      const contents = state.all(node);
      const head = contents[0];

      if (head && head.type === 'text') {
        head.value = '[' + head.value;
      } else {
        contents.unshift({type: 'text', value: '['});
      }

      const tail = contents[contents.length - 1];

      if (tail && tail.type === 'text') {
        tail.value += suffix;
      } else {
        contents.push({type: 'text', value: suffix});
      }

      return contents
    }

    /**
     * @typedef {import('hast').ElementContent} ElementContent
     * @typedef {import('hast').Element} Element
     * @typedef {import('hast').Properties} Properties
     * @typedef {import('mdast').ImageReference} ImageReference
     * @typedef {import('../state.js').State} State
     */

    /**
     * Turn an mdast `imageReference` node into hast.
     *
     * @param {State} state
     *   Info passed around.
     * @param {ImageReference} node
     *   mdast node.
     * @returns {ElementContent | Array<ElementContent>}
     *   hast node.
     */
    function imageReference(state, node) {
      const def = state.definition(node.identifier);

      if (!def) {
        return revert(state, node)
      }

      /** @type {Properties} */
      const properties = {src: normalizeUri(def.url || ''), alt: node.alt};

      if (def.title !== null && def.title !== undefined) {
        properties.title = def.title;
      }

      /** @type {Element} */
      const result = {type: 'element', tagName: 'img', properties, children: []};
      state.patch(node, result);
      return state.applyData(node, result)
    }

    /**
     * @typedef {import('hast').Element} Element
     * @typedef {import('hast').Properties} Properties
     * @typedef {import('mdast').Image} Image
     * @typedef {import('../state.js').State} State
     */

    /**
     * Turn an mdast `image` node into hast.
     *
     * @param {State} state
     *   Info passed around.
     * @param {Image} node
     *   mdast node.
     * @returns {Element}
     *   hast node.
     */
    function image(state, node) {
      /** @type {Properties} */
      const properties = {src: normalizeUri(node.url)};

      if (node.alt !== null && node.alt !== undefined) {
        properties.alt = node.alt;
      }

      if (node.title !== null && node.title !== undefined) {
        properties.title = node.title;
      }

      /** @type {Element} */
      const result = {type: 'element', tagName: 'img', properties, children: []};
      state.patch(node, result);
      return state.applyData(node, result)
    }

    /**
     * @typedef {import('hast').Element} Element
     * @typedef {import('hast').Text} Text
     * @typedef {import('mdast').InlineCode} InlineCode
     * @typedef {import('../state.js').State} State
     */

    /**
     * Turn an mdast `inlineCode` node into hast.
     *
     * @param {State} state
     *   Info passed around.
     * @param {InlineCode} node
     *   mdast node.
     * @returns {Element}
     *   hast node.
     */
    function inlineCode(state, node) {
      /** @type {Text} */
      const text = {type: 'text', value: node.value.replace(/\r?\n|\r/g, ' ')};
      state.patch(node, text);

      /** @type {Element} */
      const result = {
        type: 'element',
        tagName: 'code',
        properties: {},
        children: [text]
      };
      state.patch(node, result);
      return state.applyData(node, result)
    }

    /**
     * @typedef {import('hast').Element} Element
     * @typedef {import('hast').ElementContent} ElementContent
     * @typedef {import('hast').Properties} Properties
     * @typedef {import('mdast').LinkReference} LinkReference
     * @typedef {import('../state.js').State} State
     */

    /**
     * Turn an mdast `linkReference` node into hast.
     *
     * @param {State} state
     *   Info passed around.
     * @param {LinkReference} node
     *   mdast node.
     * @returns {ElementContent | Array<ElementContent>}
     *   hast node.
     */
    function linkReference(state, node) {
      const def = state.definition(node.identifier);

      if (!def) {
        return revert(state, node)
      }

      /** @type {Properties} */
      const properties = {href: normalizeUri(def.url || '')};

      if (def.title !== null && def.title !== undefined) {
        properties.title = def.title;
      }

      /** @type {Element} */
      const result = {
        type: 'element',
        tagName: 'a',
        properties,
        children: state.all(node)
      };
      state.patch(node, result);
      return state.applyData(node, result)
    }

    /**
     * @typedef {import('hast').Element} Element
     * @typedef {import('hast').Properties} Properties
     * @typedef {import('mdast').Link} Link
     * @typedef {import('../state.js').State} State
     */

    /**
     * Turn an mdast `link` node into hast.
     *
     * @param {State} state
     *   Info passed around.
     * @param {Link} node
     *   mdast node.
     * @returns {Element}
     *   hast node.
     */
    function link(state, node) {
      /** @type {Properties} */
      const properties = {href: normalizeUri(node.url)};

      if (node.title !== null && node.title !== undefined) {
        properties.title = node.title;
      }

      /** @type {Element} */
      const result = {
        type: 'element',
        tagName: 'a',
        properties,
        children: state.all(node)
      };
      state.patch(node, result);
      return state.applyData(node, result)
    }

    /**
     * @typedef {import('hast').Element} Element
     * @typedef {import('hast').ElementContent} ElementContent
     * @typedef {import('hast').Properties} Properties
     * @typedef {import('mdast').Content} Content
     * @typedef {import('mdast').ListItem} ListItem
     * @typedef {import('mdast').Parent} Parent
     * @typedef {import('mdast').Root} Root
     * @typedef {import('../state.js').State} State
     */

    /**
     * @typedef {Root | Content} Nodes
     * @typedef {Extract<Nodes, Parent>} Parents
     */

    /**
     * Turn an mdast `listItem` node into hast.
     *
     * @param {State} state
     *   Info passed around.
     * @param {ListItem} node
     *   mdast node.
     * @param {Parents | null | undefined} parent
     *   Parent of `node`.
     * @returns {Element}
     *   hast node.
     */
    function listItem(state, node, parent) {
      const results = state.all(node);
      const loose = parent ? listLoose(parent) : listItemLoose(node);
      /** @type {Properties} */
      const properties = {};
      /** @type {Array<ElementContent>} */
      const children = [];

      if (typeof node.checked === 'boolean') {
        const head = results[0];
        /** @type {Element} */
        let paragraph;

        if (head && head.type === 'element' && head.tagName === 'p') {
          paragraph = head;
        } else {
          paragraph = {type: 'element', tagName: 'p', properties: {}, children: []};
          results.unshift(paragraph);
        }

        if (paragraph.children.length > 0) {
          paragraph.children.unshift({type: 'text', value: ' '});
        }

        paragraph.children.unshift({
          type: 'element',
          tagName: 'input',
          properties: {type: 'checkbox', checked: node.checked, disabled: true},
          children: []
        });

        // According to github-markdown-css, this class hides bullet.
        // See: <https://github.com/sindresorhus/github-markdown-css>.
        properties.className = ['task-list-item'];
      }

      let index = -1;

      while (++index < results.length) {
        const child = results[index];

        // Add eols before nodes, except if this is a loose, first paragraph.
        if (
          loose ||
          index !== 0 ||
          child.type !== 'element' ||
          child.tagName !== 'p'
        ) {
          children.push({type: 'text', value: '\n'});
        }

        if (child.type === 'element' && child.tagName === 'p' && !loose) {
          children.push(...child.children);
        } else {
          children.push(child);
        }
      }

      const tail = results[results.length - 1];

      // Add a final eol.
      if (tail && (loose || tail.type !== 'element' || tail.tagName !== 'p')) {
        children.push({type: 'text', value: '\n'});
      }

      /** @type {Element} */
      const result = {type: 'element', tagName: 'li', properties, children};
      state.patch(node, result);
      return state.applyData(node, result)
    }

    /**
     * @param {Parents} node
     * @return {Boolean}
     */
    function listLoose(node) {
      let loose = false;
      if (node.type === 'list') {
        loose = node.spread || false;
        const children = node.children;
        let index = -1;

        while (!loose && ++index < children.length) {
          loose = listItemLoose(children[index]);
        }
      }

      return loose
    }

    /**
     * @param {ListItem} node
     * @return {Boolean}
     */
    function listItemLoose(node) {
      const spread = node.spread;

      return spread === undefined || spread === null
        ? node.children.length > 1
        : spread
    }

    /**
     * @typedef {import('hast').Element} Element
     * @typedef {import('hast').Properties} Properties
     * @typedef {import('mdast').List} List
     * @typedef {import('../state.js').State} State
     */

    /**
     * Turn an mdast `list` node into hast.
     *
     * @param {State} state
     *   Info passed around.
     * @param {List} node
     *   mdast node.
     * @returns {Element}
     *   hast node.
     */
    function list(state, node) {
      /** @type {Properties} */
      const properties = {};
      const results = state.all(node);
      let index = -1;

      if (typeof node.start === 'number' && node.start !== 1) {
        properties.start = node.start;
      }

      // Like GitHub, add a class for custom styling.
      while (++index < results.length) {
        const child = results[index];

        if (
          child.type === 'element' &&
          child.tagName === 'li' &&
          child.properties &&
          Array.isArray(child.properties.className) &&
          child.properties.className.includes('task-list-item')
        ) {
          properties.className = ['contains-task-list'];
          break
        }
      }

      /** @type {Element} */
      const result = {
        type: 'element',
        tagName: node.ordered ? 'ol' : 'ul',
        properties,
        children: state.wrap(results, true)
      };
      state.patch(node, result);
      return state.applyData(node, result)
    }

    /**
     * @typedef {import('hast').Element} Element
     * @typedef {import('mdast').Paragraph} Paragraph
     * @typedef {import('../state.js').State} State
     */

    /**
     * Turn an mdast `paragraph` node into hast.
     *
     * @param {State} state
     *   Info passed around.
     * @param {Paragraph} node
     *   mdast node.
     * @returns {Element}
     *   hast node.
     */
    function paragraph(state, node) {
      /** @type {Element} */
      const result = {
        type: 'element',
        tagName: 'p',
        properties: {},
        children: state.all(node)
      };
      state.patch(node, result);
      return state.applyData(node, result)
    }

    /**
     * @typedef {import('hast').Root} HastRoot
     * @typedef {import('hast').Element} HastElement
     * @typedef {import('mdast').Root} MdastRoot
     * @typedef {import('../state.js').State} State
     */

    /**
     * Turn an mdast `root` node into hast.
     *
     * @param {State} state
     *   Info passed around.
     * @param {MdastRoot} node
     *   mdast node.
     * @returns {HastRoot | HastElement}
     *   hast node.
     */
    function root(state, node) {
      /** @type {HastRoot} */
      const result = {type: 'root', children: state.wrap(state.all(node))};
      state.patch(node, result);
      return state.applyData(node, result)
    }

    /**
     * @typedef {import('hast').Element} Element
     * @typedef {import('mdast').Strong} Strong
     * @typedef {import('../state.js').State} State
     */

    /**
     * Turn an mdast `strong` node into hast.
     *
     * @param {State} state
     *   Info passed around.
     * @param {Strong} node
     *   mdast node.
     * @returns {Element}
     *   hast node.
     */
    function strong(state, node) {
      /** @type {Element} */
      const result = {
        type: 'element',
        tagName: 'strong',
        properties: {},
        children: state.all(node)
      };
      state.patch(node, result);
      return state.applyData(node, result)
    }

    /**
     * @typedef {import('unist').Position} Position
     * @typedef {import('unist').Node} Node
     * @typedef {import('unist').Point} Point
     */

    /**
     * @typedef NodeLike
     * @property {string} type
     * @property {PositionLike | null | undefined} [position]
     *
     * @typedef PositionLike
     * @property {PointLike | null | undefined} [start]
     * @property {PointLike | null | undefined} [end]
     *
     * @typedef PointLike
     * @property {number | null | undefined} [line]
     * @property {number | null | undefined} [column]
     * @property {number | null | undefined} [offset]
     */

    /**
     * Get the starting point of `node`.
     *
     * @param node
     *   Node.
     * @returns
     *   Point.
     */
    const pointStart = point('start');

    /**
     * Get the ending point of `node`.
     *
     * @param node
     *   Node.
     * @returns
     *   Point.
     */
    const pointEnd = point('end');

    /**
     * Get the positional info of `node`.
     *
     * @param {NodeLike | Node | null | undefined} [node]
     *   Node.
     * @returns {Position}
     *   Position.
     */
    function position(node) {
      return {start: pointStart(node), end: pointEnd(node)}
    }

    /**
     * Get the positional info of `node`.
     *
     * @param {'start' | 'end'} type
     *   Side.
     * @returns
     *   Getter.
     */
    function point(type) {
      return point

      /**
       * Get the point info of `node` at a bound side.
       *
       * @param {NodeLike | Node | null | undefined} [node]
       * @returns {Point}
       */
      function point(node) {
        const point = (node && node.position && node.position[type]) || {};

        // To do: next major: don’t return points when invalid.
        return {
          // @ts-expect-error: in practice, null is allowed.
          line: point.line || null,
          // @ts-expect-error: in practice, null is allowed.
          column: point.column || null,
          // @ts-expect-error: in practice, null is allowed.
          offset: point.offset > -1 ? point.offset : null
        }
      }
    }

    /**
     * @typedef {import('hast').Element} Element
     * @typedef {import('mdast').Table} Table
     * @typedef {import('../state.js').State} State
     */

    /**
     * Turn an mdast `table` node into hast.
     *
     * @param {State} state
     *   Info passed around.
     * @param {Table} node
     *   mdast node.
     * @returns {Element}
     *   hast node.
     */
    function table(state, node) {
      const rows = state.all(node);
      const firstRow = rows.shift();
      /** @type {Array<Element>} */
      const tableContent = [];

      if (firstRow) {
        /** @type {Element} */
        const head = {
          type: 'element',
          tagName: 'thead',
          properties: {},
          children: state.wrap([firstRow], true)
        };
        state.patch(node.children[0], head);
        tableContent.push(head);
      }

      if (rows.length > 0) {
        /** @type {Element} */
        const body = {
          type: 'element',
          tagName: 'tbody',
          properties: {},
          children: state.wrap(rows, true)
        };

        const start = pointStart(node.children[1]);
        const end = pointEnd(node.children[node.children.length - 1]);
        if (start.line && end.line) body.position = {start, end};
        tableContent.push(body);
      }

      /** @type {Element} */
      const result = {
        type: 'element',
        tagName: 'table',
        properties: {},
        children: state.wrap(tableContent, true)
      };
      state.patch(node, result);
      return state.applyData(node, result)
    }

    /**
     * @typedef {import('hast').Properties} Properties
     * @typedef {import('hast').Element} Element
     * @typedef {import('hast').ElementContent} ElementContent
     * @typedef {import('mdast').Content} Content
     * @typedef {import('mdast').Parent} Parent
     * @typedef {import('mdast').Root} Root
     * @typedef {import('mdast').TableRow} TableRow
     * @typedef {import('../state.js').State} State
     */

    /**
     * @typedef {Root | Content} Nodes
     * @typedef {Extract<Nodes, Parent>} Parents
     */

    /**
     * Turn an mdast `tableRow` node into hast.
     *
     * @param {State} state
     *   Info passed around.
     * @param {TableRow} node
     *   mdast node.
     * @param {Parents | null | undefined} parent
     *   Parent of `node`.
     * @returns {Element}
     *   hast node.
     */
    function tableRow(state, node, parent) {
      const siblings = parent ? parent.children : undefined;
      // Generate a body row when without parent.
      const rowIndex = siblings ? siblings.indexOf(node) : 1;
      const tagName = rowIndex === 0 ? 'th' : 'td';
      const align = parent && parent.type === 'table' ? parent.align : undefined;
      const length = align ? align.length : node.children.length;
      let cellIndex = -1;
      /** @type {Array<ElementContent>} */
      const cells = [];

      while (++cellIndex < length) {
        // Note: can also be undefined.
        const cell = node.children[cellIndex];
        /** @type {Properties} */
        const properties = {};
        const alignValue = align ? align[cellIndex] : undefined;

        if (alignValue) {
          properties.align = alignValue;
        }

        /** @type {Element} */
        let result = {type: 'element', tagName, properties, children: []};

        if (cell) {
          result.children = state.all(cell);
          state.patch(cell, result);
          result = state.applyData(node, result);
        }

        cells.push(result);
      }

      /** @type {Element} */
      const result = {
        type: 'element',
        tagName: 'tr',
        properties: {},
        children: state.wrap(cells, true)
      };
      state.patch(node, result);
      return state.applyData(node, result)
    }

    /**
     * @typedef {import('hast').Element} Element
     * @typedef {import('mdast').TableCell} TableCell
     * @typedef {import('../state.js').State} State
     */

    /**
     * Turn an mdast `tableCell` node into hast.
     *
     * @param {State} state
     *   Info passed around.
     * @param {TableCell} node
     *   mdast node.
     * @returns {Element}
     *   hast node.
     */
    function tableCell(state, node) {
      // Note: this function is normally not called: see `table-row` for how rows
      // and their cells are compiled.
      /** @type {Element} */
      const result = {
        type: 'element',
        tagName: 'td', // Assume body cell.
        properties: {},
        children: state.all(node)
      };
      state.patch(node, result);
      return state.applyData(node, result)
    }

    const tab = 9; /* `\t` */
    const space = 32; /* ` ` */

    /**
     * Remove initial and final spaces and tabs at the line breaks in `value`.
     * Does not trim initial and final spaces and tabs of the value itself.
     *
     * @param {string} value
     *   Value to trim.
     * @returns {string}
     *   Trimmed value.
     */
    function trimLines(value) {
      const source = String(value);
      const search = /\r?\n|\r/g;
      let match = search.exec(source);
      let last = 0;
      /** @type {Array<string>} */
      const lines = [];

      while (match) {
        lines.push(
          trimLine(source.slice(last, match.index), last > 0, true),
          match[0]
        );

        last = match.index + match[0].length;
        match = search.exec(source);
      }

      lines.push(trimLine(source.slice(last), last > 0, false));

      return lines.join('')
    }

    /**
     * @param {string} value
     *   Line to trim.
     * @param {boolean} start
     *   Whether to trim the start of the line.
     * @param {boolean} end
     *   Whether to trim the end of the line.
     * @returns {string}
     *   Trimmed line.
     */
    function trimLine(value, start, end) {
      let startIndex = 0;
      let endIndex = value.length;

      if (start) {
        let code = value.codePointAt(startIndex);

        while (code === tab || code === space) {
          startIndex++;
          code = value.codePointAt(startIndex);
        }
      }

      if (end) {
        let code = value.codePointAt(endIndex - 1);

        while (code === tab || code === space) {
          endIndex--;
          code = value.codePointAt(endIndex - 1);
        }
      }

      return endIndex > startIndex ? value.slice(startIndex, endIndex) : ''
    }

    /**
     * @typedef {import('hast').Element} HastElement
     * @typedef {import('hast').Text} HastText
     * @typedef {import('mdast').Text} MdastText
     * @typedef {import('../state.js').State} State
     */

    /**
     * Turn an mdast `text` node into hast.
     *
     * @param {State} state
     *   Info passed around.
     * @param {MdastText} node
     *   mdast node.
     * @returns {HastText | HastElement}
     *   hast node.
     */
    function text(state, node) {
      /** @type {HastText} */
      const result = {type: 'text', value: trimLines(String(node.value))};
      state.patch(node, result);
      return state.applyData(node, result)
    }

    /**
     * @typedef {import('hast').Element} Element
     * @typedef {import('mdast').ThematicBreak} ThematicBreak
     * @typedef {import('../state.js').State} State
     */

    /**
     * Turn an mdast `thematicBreak` node into hast.
     *
     * @param {State} state
     *   Info passed around.
     * @param {ThematicBreak} node
     *   mdast node.
     * @returns {Element}
     *   hast node.
     */
    function thematicBreak(state, node) {
      /** @type {Element} */
      const result = {
        type: 'element',
        tagName: 'hr',
        properties: {},
        children: []
      };
      state.patch(node, result);
      return state.applyData(node, result)
    }

    /**
     * Default handlers for nodes.
     */
    const handlers = {
      blockquote,
      break: hardBreak,
      code,
      delete: strikethrough,
      emphasis,
      footnoteReference,
      footnote,
      heading,
      html: html$2,
      imageReference,
      image,
      inlineCode,
      linkReference,
      link,
      listItem,
      list,
      paragraph,
      root,
      strong,
      table,
      tableCell,
      tableRow,
      text,
      thematicBreak,
      toml: ignore,
      yaml: ignore,
      definition: ignore,
      footnoteDefinition: ignore
    };

    // Return nothing for nodes that are ignored.
    function ignore() {
      // To do: next major: return `undefined`.
      return null
    }

    /**
     * @typedef {import('unist').Node} Node
     * @typedef {import('unist').Parent} Parent
     */

    /**
     * Generate an assertion from a test.
     *
     * Useful if you’re going to test many nodes, for example when creating a
     * utility where something else passes a compatible test.
     *
     * The created function is a bit faster because it expects valid input only:
     * a `node`, `index`, and `parent`.
     *
     * @param test
     *   *   when nullish, checks if `node` is a `Node`.
     *   *   when `string`, works like passing `(node) => node.type === test`.
     *   *   when `function` checks if function passed the node is true.
     *   *   when `object`, checks that all keys in test are in node, and that they have (strictly) equal values.
     *   *   when `array`, checks if any one of the subtests pass.
     * @returns
     *   An assertion.
     */
    const convert$1 =
      /**
       * @type {(
       *   (<Kind extends Node>(test: PredicateTest<Kind>) => AssertPredicate<Kind>) &
       *   ((test?: Test) => AssertAnything)
       * )}
       */
      (
        /**
         * @param {Test} [test]
         * @returns {AssertAnything}
         */
        function (test) {
          if (test === undefined || test === null) {
            return ok$1
          }

          if (typeof test === 'string') {
            return typeFactory$1(test)
          }

          if (typeof test === 'object') {
            return Array.isArray(test) ? anyFactory$1(test) : propsFactory(test)
          }

          if (typeof test === 'function') {
            return castFactory(test)
          }

          throw new Error('Expected function, string, or object as test')
        }
      );

    /**
     * @param {Array<string | Props | TestFunctionAnything>} tests
     * @returns {AssertAnything}
     */
    function anyFactory$1(tests) {
      /** @type {Array<AssertAnything>} */
      const checks = [];
      let index = -1;

      while (++index < tests.length) {
        checks[index] = convert$1(tests[index]);
      }

      return castFactory(any)

      /**
       * @this {unknown}
       * @param {Array<unknown>} parameters
       * @returns {boolean}
       */
      function any(...parameters) {
        let index = -1;

        while (++index < checks.length) {
          if (checks[index].call(this, ...parameters)) return true
        }

        return false
      }
    }

    /**
     * Turn an object into a test for a node with a certain fields.
     *
     * @param {Props} check
     * @returns {AssertAnything}
     */
    function propsFactory(check) {
      return castFactory(all)

      /**
       * @param {Node} node
       * @returns {boolean}
       */
      function all(node) {
        /** @type {string} */
        let key;

        for (key in check) {
          // @ts-expect-error: hush, it sure works as an index.
          if (node[key] !== check[key]) return false
        }

        return true
      }
    }

    /**
     * Turn a string into a test for a node with a certain type.
     *
     * @param {string} check
     * @returns {AssertAnything}
     */
    function typeFactory$1(check) {
      return castFactory(type)

      /**
       * @param {Node} node
       */
      function type(node) {
        return node && node.type === check
      }
    }

    /**
     * Turn a custom test into a test for a node that passes that test.
     *
     * @param {TestFunctionAnything} check
     * @returns {AssertAnything}
     */
    function castFactory(check) {
      return assertion

      /**
       * @this {unknown}
       * @param {unknown} node
       * @param {Array<unknown>} parameters
       * @returns {boolean}
       */
      function assertion(node, ...parameters) {
        return Boolean(
          node &&
            typeof node === 'object' &&
            'type' in node &&
            // @ts-expect-error: fine.
            Boolean(check.call(this, node, ...parameters))
        )
      }
    }

    function ok$1() {
      return true
    }

    /**
     * @param {string} d
     * @returns {string}
     */
    function color(d) {
      return '\u001B[33m' + d + '\u001B[39m'
    }

    /**
     * @typedef {import('unist').Node} Node
     * @typedef {import('unist').Parent} Parent
     * @typedef {import('unist-util-is').Test} Test
     */

    /**
     * Continue traversing as normal.
     */
    const CONTINUE$2 = true;

    /**
     * Stop traversing immediately.
     */
    const EXIT$2 = false;

    /**
     * Do not traverse this node’s children.
     */
    const SKIP$2 = 'skip';

    /**
     * Visit nodes, with ancestral information.
     *
     * This algorithm performs *depth-first* *tree traversal* in *preorder*
     * (**NLR**) or if `reverse` is given, in *reverse preorder* (**NRL**).
     *
     * You can choose for which nodes `visitor` is called by passing a `test`.
     * For complex tests, you should test yourself in `visitor`, as it will be
     * faster and will have improved type information.
     *
     * Walking the tree is an intensive task.
     * Make use of the return values of the visitor when possible.
     * Instead of walking a tree multiple times, walk it once, use `unist-util-is`
     * to check if a node matches, and then perform different operations.
     *
     * You can change the tree.
     * See `Visitor` for more info.
     *
     * @param tree
     *   Tree to traverse.
     * @param test
     *   `unist-util-is`-compatible test
     * @param visitor
     *   Handle each node.
     * @param reverse
     *   Traverse in reverse preorder (NRL) instead of the default preorder (NLR).
     * @returns
     *   Nothing.
     */
    const visitParents$1 =
      /**
       * @type {(
       *   (<Tree extends Node, Check extends Test>(tree: Tree, test: Check, visitor: BuildVisitor<Tree, Check>, reverse?: boolean | null | undefined) => void) &
       *   (<Tree extends Node>(tree: Tree, visitor: BuildVisitor<Tree>, reverse?: boolean | null | undefined) => void)
       * )}
       */
      (
        /**
         * @param {Node} tree
         * @param {Test} test
         * @param {Visitor<Node>} visitor
         * @param {boolean | null | undefined} [reverse]
         * @returns {void}
         */
        function (tree, test, visitor, reverse) {
          if (typeof test === 'function' && typeof visitor !== 'function') {
            reverse = visitor;
            // @ts-expect-error no visitor given, so `visitor` is test.
            visitor = test;
            test = null;
          }

          const is = convert$1(test);
          const step = reverse ? -1 : 1;

          factory(tree, undefined, [])();

          /**
           * @param {Node} node
           * @param {number | undefined} index
           * @param {Array<Parent>} parents
           */
          function factory(node, index, parents) {
            /** @type {Record<string, unknown>} */
            // @ts-expect-error: hush
            const value = node && typeof node === 'object' ? node : {};

            if (typeof value.type === 'string') {
              const name =
                // `hast`
                typeof value.tagName === 'string'
                  ? value.tagName
                  : // `xast`
                  typeof value.name === 'string'
                  ? value.name
                  : undefined;

              Object.defineProperty(visit, 'name', {
                value:
                  'node (' + color(node.type + (name ? '<' + name + '>' : '')) + ')'
              });
            }

            return visit

            function visit() {
              /** @type {ActionTuple} */
              let result = [];
              /** @type {ActionTuple} */
              let subresult;
              /** @type {number} */
              let offset;
              /** @type {Array<Parent>} */
              let grandparents;

              if (!test || is(node, index, parents[parents.length - 1] || null)) {
                result = toResult$1(visitor(node, parents));

                if (result[0] === EXIT$2) {
                  return result
                }
              }

              // @ts-expect-error looks like a parent.
              if (node.children && result[0] !== SKIP$2) {
                // @ts-expect-error looks like a parent.
                offset = (reverse ? node.children.length : -1) + step;
                // @ts-expect-error looks like a parent.
                grandparents = parents.concat(node);

                // @ts-expect-error looks like a parent.
                while (offset > -1 && offset < node.children.length) {
                  // @ts-expect-error looks like a parent.
                  subresult = factory(node.children[offset], offset, grandparents)();

                  if (subresult[0] === EXIT$2) {
                    return subresult
                  }

                  offset =
                    typeof subresult[1] === 'number' ? subresult[1] : offset + step;
                }
              }

              return result
            }
          }
        }
      );

    /**
     * Turn a return value into a clean result.
     *
     * @param {VisitorResult} value
     *   Valid return values from visitors.
     * @returns {ActionTuple}
     *   Clean result.
     */
    function toResult$1(value) {
      if (Array.isArray(value)) {
        return value
      }

      if (typeof value === 'number') {
        return [CONTINUE$2, value]
      }

      return [value]
    }

    /**
     * @typedef {import('unist').Node} Node
     * @typedef {import('unist').Parent} Parent
     * @typedef {import('unist-util-is').Test} Test
     * @typedef {import('unist-util-visit-parents').VisitorResult} VisitorResult
     */

    /**
     * Visit nodes.
     *
     * This algorithm performs *depth-first* *tree traversal* in *preorder*
     * (**NLR**) or if `reverse` is given, in *reverse preorder* (**NRL**).
     *
     * You can choose for which nodes `visitor` is called by passing a `test`.
     * For complex tests, you should test yourself in `visitor`, as it will be
     * faster and will have improved type information.
     *
     * Walking the tree is an intensive task.
     * Make use of the return values of the visitor when possible.
     * Instead of walking a tree multiple times, walk it once, use `unist-util-is`
     * to check if a node matches, and then perform different operations.
     *
     * You can change the tree.
     * See `Visitor` for more info.
     *
     * @param tree
     *   Tree to traverse.
     * @param test
     *   `unist-util-is`-compatible test
     * @param visitor
     *   Handle each node.
     * @param reverse
     *   Traverse in reverse preorder (NRL) instead of the default preorder (NLR).
     * @returns
     *   Nothing.
     */
    const visit$1 =
      /**
       * @type {(
       *   (<Tree extends Node, Check extends Test>(tree: Tree, test: Check, visitor: BuildVisitor<Tree, Check>, reverse?: boolean | null | undefined) => void) &
       *   (<Tree extends Node>(tree: Tree, visitor: BuildVisitor<Tree>, reverse?: boolean | null | undefined) => void)
       * )}
       */
      (
        /**
         * @param {Node} tree
         * @param {Test} test
         * @param {Visitor} visitor
         * @param {boolean | null | undefined} [reverse]
         * @returns {void}
         */
        function (tree, test, visitor, reverse) {
          if (typeof test === 'function' && typeof visitor !== 'function') {
            reverse = visitor;
            visitor = test;
            test = null;
          }

          visitParents$1(tree, test, overload, reverse);

          /**
           * @param {Node} node
           * @param {Array<Parent>} parents
           */
          function overload(node, parents) {
            const parent = parents[parents.length - 1];
            return visitor(
              node,
              parent ? parent.children.indexOf(node) : null,
              parent
            )
          }
        }
      );

    /**
     * @typedef PointLike
     * @property {number | null | undefined} [line]
     * @property {number | null | undefined} [column]
     * @property {number | null | undefined} [offset]
     *
     * @typedef PositionLike
     * @property {PointLike | null | undefined} [start]
     * @property {PointLike | null | undefined} [end]
     *
     * @typedef NodeLike
     * @property {PositionLike | null | undefined} [position]
     */

    /**
     * Check if `node` is generated.
     *
     * @param {NodeLike | null | undefined} [node]
     *   Node to check.
     * @returns {boolean}
     *   Whether `node` is generated (does not have positional info).
     */
    function generated(node) {
      return (
        !node ||
        !node.position ||
        !node.position.start ||
        !node.position.start.line ||
        !node.position.start.column ||
        !node.position.end ||
        !node.position.end.line ||
        !node.position.end.column
      )
    }

    /**
     * @typedef {import('mdast').Root} Root
     * @typedef {import('mdast').Content} Content
     * @typedef {import('mdast').Definition} Definition
     */

    const own$4 = {}.hasOwnProperty;

    /**
     * Find definitions in `tree`.
     *
     * Uses CommonMark precedence, which means that earlier definitions are
     * preferred over duplicate later definitions.
     *
     * @param {Node} tree
     *   Tree to check.
     * @returns {GetDefinition}
     *   Getter.
     */
    function definitions(tree) {
      /** @type {Record<string, Definition>} */
      const cache = Object.create(null);

      if (!tree || !tree.type) {
        throw new Error('mdast-util-definitions expected node')
      }

      visit$1(tree, 'definition', (definition) => {
        const id = clean(definition.identifier);
        if (id && !own$4.call(cache, id)) {
          cache[id] = definition;
        }
      });

      return definition

      /** @type {GetDefinition} */
      function definition(identifier) {
        const id = clean(identifier);
        // To do: next major: return `undefined` when not found.
        return id && own$4.call(cache, id) ? cache[id] : null
      }
    }

    /**
     * @param {string | null | undefined} [value]
     * @returns {string}
     */
    function clean(value) {
      return String(value || '').toUpperCase()
    }

    /**
     * @typedef {import('hast').Content} HastContent
     * @typedef {import('hast').Element} HastElement
     * @typedef {import('hast').ElementContent} HastElementContent
     * @typedef {import('hast').Properties} HastProperties
     * @typedef {import('hast').Root} HastRoot
     * @typedef {import('hast').Text} HastText
     *
     * @typedef {import('mdast').Content} MdastContent
     * @typedef {import('mdast').Definition} MdastDefinition
     * @typedef {import('mdast').FootnoteDefinition} MdastFootnoteDefinition
     * @typedef {import('mdast').Parent} MdastParent
     * @typedef {import('mdast').Root} MdastRoot
     */

    const own$3 = {}.hasOwnProperty;

    /**
     * Create `state` from an mdast tree.
     *
     * @param {MdastNodes} tree
     *   mdast node to transform.
     * @param {Options | null | undefined} [options]
     *   Configuration.
     * @returns {State}
     *   `state` function.
     */
    function createState(tree, options) {
      const settings = options || {};
      const dangerous = settings.allowDangerousHtml || false;
      /** @type {Record<string, MdastFootnoteDefinition>} */
      const footnoteById = {};

      // To do: next major: add `options` to state, remove:
      // `dangerous`, `clobberPrefix`, `footnoteLabel`, `footnoteLabelTagName`,
      // `footnoteLabelProperties`, `footnoteBackLabel`, `passThrough`,
      // `unknownHandler`.

      // To do: next major: move to `state.options.allowDangerousHtml`.
      state.dangerous = dangerous;
      // To do: next major: move to `state.options`.
      state.clobberPrefix =
        settings.clobberPrefix === undefined || settings.clobberPrefix === null
          ? 'user-content-'
          : settings.clobberPrefix;
      // To do: next major: move to `state.options`.
      state.footnoteLabel = settings.footnoteLabel || 'Footnotes';
      // To do: next major: move to `state.options`.
      state.footnoteLabelTagName = settings.footnoteLabelTagName || 'h2';
      // To do: next major: move to `state.options`.
      state.footnoteLabelProperties = settings.footnoteLabelProperties || {
        className: ['sr-only']
      };
      // To do: next major: move to `state.options`.
      state.footnoteBackLabel = settings.footnoteBackLabel || 'Back to content';
      // To do: next major: move to `state.options`.
      state.unknownHandler = settings.unknownHandler;
      // To do: next major: move to `state.options`.
      state.passThrough = settings.passThrough;

      state.handlers = {...handlers, ...settings.handlers};

      // To do: next major: replace utility with `definitionById` object, so we
      // only walk once (as we need footnotes too).
      state.definition = definitions(tree);
      state.footnoteById = footnoteById;
      /** @type {Array<string>} */
      state.footnoteOrder = [];
      /** @type {Record<string, number>} */
      state.footnoteCounts = {};

      state.patch = patch;
      state.applyData = applyData;
      state.one = oneBound;
      state.all = allBound;
      state.wrap = wrap;
      // To do: next major: remove `augment`.
      state.augment = augment;

      visit$1(tree, 'footnoteDefinition', (definition) => {
        const id = String(definition.identifier).toUpperCase();

        // Mimick CM behavior of link definitions.
        // See: <https://github.com/syntax-tree/mdast-util-definitions/blob/8290999/index.js#L26>.
        if (!own$3.call(footnoteById, id)) {
          footnoteById[id] = definition;
        }
      });

      // @ts-expect-error Hush, it’s fine!
      return state

      /**
       * Finalise the created `right`, a hast node, from `left`, an mdast node.
       *
       * @param {MdastNodeWithData | PositionLike | null | undefined} left
       * @param {HastElementContent} right
       * @returns {HastElementContent}
       */
      /* c8 ignore start */
      // To do: next major: remove.
      function augment(left, right) {
        // Handle `data.hName`, `data.hProperties, `data.hChildren`.
        if (left && 'data' in left && left.data) {
          /** @type {MdastData} */
          const data = left.data;

          if (data.hName) {
            if (right.type !== 'element') {
              right = {
                type: 'element',
                tagName: '',
                properties: {},
                children: []
              };
            }

            right.tagName = data.hName;
          }

          if (right.type === 'element' && data.hProperties) {
            right.properties = {...right.properties, ...data.hProperties};
          }

          if ('children' in right && right.children && data.hChildren) {
            right.children = data.hChildren;
          }
        }

        if (left) {
          const ctx = 'type' in left ? left : {position: left};

          if (!generated(ctx)) {
            // @ts-expect-error: fine.
            right.position = {start: pointStart(ctx), end: pointEnd(ctx)};
          }
        }

        return right
      }
      /* c8 ignore stop */

      /**
       * Create an element for `node`.
       *
       * @type {HFunctionProps}
       */
      /* c8 ignore start */
      // To do: next major: remove.
      function state(node, tagName, props, children) {
        if (Array.isArray(props)) {
          children = props;
          props = {};
        }

        // @ts-expect-error augmenting an element yields an element.
        return augment(node, {
          type: 'element',
          tagName,
          properties: props || {},
          children: children || []
        })
      }
      /* c8 ignore stop */

      /**
       * Transform an mdast node into a hast node.
       *
       * @param {MdastNodes} node
       *   mdast node.
       * @param {MdastParents | null | undefined} [parent]
       *   Parent of `node`.
       * @returns {HastElementContent | Array<HastElementContent> | null | undefined}
       *   Resulting hast node.
       */
      function oneBound(node, parent) {
        // @ts-expect-error: that’s a state :)
        return one(state, node, parent)
      }

      /**
       * Transform the children of an mdast node into hast nodes.
       *
       * @param {MdastNodes} parent
       *   mdast node to compile
       * @returns {Array<HastElementContent>}
       *   Resulting hast nodes.
       */
      function allBound(parent) {
        // @ts-expect-error: that’s a state :)
        return all(state, parent)
      }
    }

    /**
     * Copy a node’s positional info.
     *
     * @param {MdastNodes} from
     *   mdast node to copy from.
     * @param {HastNodes} to
     *   hast node to copy into.
     * @returns {void}
     *   Nothing.
     */
    function patch(from, to) {
      if (from.position) to.position = position(from);
    }

    /**
     * Honor the `data` of `from` and maybe generate an element instead of `to`.
     *
     * @template {HastNodes} Type
     *   Node type.
     * @param {MdastNodes} from
     *   mdast node to use data from.
     * @param {Type} to
     *   hast node to change.
     * @returns {Type | HastElement}
     *   Nothing.
     */
    function applyData(from, to) {
      /** @type {Type | HastElement} */
      let result = to;

      // Handle `data.hName`, `data.hProperties, `data.hChildren`.
      if (from && from.data) {
        const hName = from.data.hName;
        const hChildren = from.data.hChildren;
        const hProperties = from.data.hProperties;

        if (typeof hName === 'string') {
          // Transforming the node resulted in an element with a different name
          // than wanted:
          if (result.type === 'element') {
            result.tagName = hName;
          }
          // Transforming the node resulted in a non-element, which happens for
          // raw, text, and root nodes (unless custom handlers are passed).
          // The intent is likely to keep the content around (otherwise: pass
          // `hChildren`).
          else {
            result = {
              type: 'element',
              tagName: hName,
              properties: {},
              children: []
            };

            // To do: next major: take the children from the `root`, or inject the
            // raw/text/comment or so into the element?
            // if ('children' in node) {
            //   // @ts-expect-error: assume `children` are allowed in elements.
            //   result.children = node.children
            // } else {
            //   // @ts-expect-error: assume `node` is allowed in elements.
            //   result.children.push(node)
            // }
          }
        }

        if (result.type === 'element' && hProperties) {
          result.properties = {...result.properties, ...hProperties};
        }

        if (
          'children' in result &&
          result.children &&
          hChildren !== null &&
          hChildren !== undefined
        ) {
          // @ts-expect-error: assume valid children are defined.
          result.children = hChildren;
        }
      }

      return result
    }

    /**
     * Transform an mdast node into a hast node.
     *
     * @param {State} state
     *   Info passed around.
     * @param {MdastNodes} node
     *   mdast node.
     * @param {MdastParents | null | undefined} [parent]
     *   Parent of `node`.
     * @returns {HastElementContent | Array<HastElementContent> | null | undefined}
     *   Resulting hast node.
     */
    // To do: next major: do not expose, keep bound.
    function one(state, node, parent) {
      const type = node && node.type;

      // Fail on non-nodes.
      if (!type) {
        throw new Error('Expected node, got `' + node + '`')
      }

      if (own$3.call(state.handlers, type)) {
        return state.handlers[type](state, node, parent)
      }

      if (state.passThrough && state.passThrough.includes(type)) {
        // To do: next major: deep clone.
        // @ts-expect-error: types of passed through nodes are expected to be added manually.
        return 'children' in node ? {...node, children: all(state, node)} : node
      }

      if (state.unknownHandler) {
        return state.unknownHandler(state, node, parent)
      }

      return defaultUnknownHandler(state, node)
    }

    /**
     * Transform the children of an mdast node into hast nodes.
     *
     * @param {State} state
     *   Info passed around.
     * @param {MdastNodes} parent
     *   mdast node to compile
     * @returns {Array<HastElementContent>}
     *   Resulting hast nodes.
     */
    // To do: next major: do not expose, keep bound.
    function all(state, parent) {
      /** @type {Array<HastElementContent>} */
      const values = [];

      if ('children' in parent) {
        const nodes = parent.children;
        let index = -1;
        while (++index < nodes.length) {
          const result = one(state, nodes[index], parent);

          // To do: see if we van clean this? Can we merge texts?
          if (result) {
            if (index && nodes[index - 1].type === 'break') {
              if (!Array.isArray(result) && result.type === 'text') {
                result.value = result.value.replace(/^\s+/, '');
              }

              if (!Array.isArray(result) && result.type === 'element') {
                const head = result.children[0];

                if (head && head.type === 'text') {
                  head.value = head.value.replace(/^\s+/, '');
                }
              }
            }

            if (Array.isArray(result)) {
              values.push(...result);
            } else {
              values.push(result);
            }
          }
        }
      }

      return values
    }

    /**
     * Transform an unknown node.
     *
     * @param {State} state
     *   Info passed around.
     * @param {MdastNodes} node
     *   Unknown mdast node.
     * @returns {HastText | HastElement}
     *   Resulting hast node.
     */
    function defaultUnknownHandler(state, node) {
      const data = node.data || {};
      /** @type {HastText | HastElement} */
      const result =
        'value' in node &&
        !(own$3.call(data, 'hProperties') || own$3.call(data, 'hChildren'))
          ? {type: 'text', value: node.value}
          : {
              type: 'element',
              tagName: 'div',
              properties: {},
              children: all(state, node)
            };

      state.patch(node, result);
      return state.applyData(node, result)
    }

    /**
     * Wrap `nodes` with line endings between each node.
     *
     * @template {HastContent} Type
     *   Node type.
     * @param {Array<Type>} nodes
     *   List of nodes to wrap.
     * @param {boolean | null | undefined} [loose=false]
     *   Whether to add line endings at start and end.
     * @returns {Array<Type | HastText>}
     *   Wrapped nodes.
     */
    function wrap(nodes, loose) {
      /** @type {Array<Type | HastText>} */
      const result = [];
      let index = -1;

      if (loose) {
        result.push({type: 'text', value: '\n'});
      }

      while (++index < nodes.length) {
        if (index) result.push({type: 'text', value: '\n'});
        result.push(nodes[index]);
      }

      if (loose && nodes.length > 0) {
        result.push({type: 'text', value: '\n'});
      }

      return result
    }

    /**
     * @typedef {import('hast').Element} Element
     * @typedef {import('hast').ElementContent} ElementContent
     *
     * @typedef {import('./state.js').State} State
     */

    /**
     * Generate a hast footer for called footnote definitions.
     *
     * @param {State} state
     *   Info passed around.
     * @returns {Element | undefined}
     *   `section` element or `undefined`.
     */
    function footer(state) {
      /** @type {Array<ElementContent>} */
      const listItems = [];
      let index = -1;

      while (++index < state.footnoteOrder.length) {
        const def = state.footnoteById[state.footnoteOrder[index]];

        if (!def) {
          continue
        }

        const content = state.all(def);
        const id = String(def.identifier).toUpperCase();
        const safeId = normalizeUri(id.toLowerCase());
        let referenceIndex = 0;
        /** @type {Array<ElementContent>} */
        const backReferences = [];

        while (++referenceIndex <= state.footnoteCounts[id]) {
          /** @type {Element} */
          const backReference = {
            type: 'element',
            tagName: 'a',
            properties: {
              href:
                '#' +
                state.clobberPrefix +
                'fnref-' +
                safeId +
                (referenceIndex > 1 ? '-' + referenceIndex : ''),
              dataFootnoteBackref: true,
              className: ['data-footnote-backref'],
              ariaLabel: state.footnoteBackLabel
            },
            children: [{type: 'text', value: '↩'}]
          };

          if (referenceIndex > 1) {
            backReference.children.push({
              type: 'element',
              tagName: 'sup',
              children: [{type: 'text', value: String(referenceIndex)}]
            });
          }

          if (backReferences.length > 0) {
            backReferences.push({type: 'text', value: ' '});
          }

          backReferences.push(backReference);
        }

        const tail = content[content.length - 1];

        if (tail && tail.type === 'element' && tail.tagName === 'p') {
          const tailTail = tail.children[tail.children.length - 1];
          if (tailTail && tailTail.type === 'text') {
            tailTail.value += ' ';
          } else {
            tail.children.push({type: 'text', value: ' '});
          }

          tail.children.push(...backReferences);
        } else {
          content.push(...backReferences);
        }

        /** @type {Element} */
        const listItem = {
          type: 'element',
          tagName: 'li',
          properties: {id: state.clobberPrefix + 'fn-' + safeId},
          children: state.wrap(content, true)
        };

        state.patch(def, listItem);

        listItems.push(listItem);
      }

      if (listItems.length === 0) {
        return
      }

      return {
        type: 'element',
        tagName: 'section',
        properties: {dataFootnotes: true, className: ['footnotes']},
        children: [
          {
            type: 'element',
            tagName: state.footnoteLabelTagName,
            properties: {
              // To do: use structured clone.
              ...JSON.parse(JSON.stringify(state.footnoteLabelProperties)),
              id: 'footnote-label'
            },
            children: [{type: 'text', value: state.footnoteLabel}]
          },
          {type: 'text', value: '\n'},
          {
            type: 'element',
            tagName: 'ol',
            properties: {},
            children: state.wrap(listItems, true)
          },
          {type: 'text', value: '\n'}
        ]
      }
    }

    /**
     * @typedef {import('hast').Content} HastContent
     * @typedef {import('hast').Root} HastRoot
     *
     * @typedef {import('mdast').Content} MdastContent
     * @typedef {import('mdast').Root} MdastRoot
     *
     * @typedef {import('./state.js').Options} Options
     */

    /**
     * Transform mdast to hast.
     *
     * ##### Notes
     *
     * ###### HTML
     *
     * Raw HTML is available in mdast as `html` nodes and can be embedded in hast
     * as semistandard `raw` nodes.
     * Most utilities ignore `raw` nodes but two notable ones don’t:
     *
     * *   `hast-util-to-html` also has an option `allowDangerousHtml` which will
     *     output the raw HTML.
     *     This is typically discouraged as noted by the option name but is useful
     *     if you completely trust authors
     * *   `hast-util-raw` can handle the raw embedded HTML strings by parsing them
     *     into standard hast nodes (`element`, `text`, etc).
     *     This is a heavy task as it needs a full HTML parser, but it is the only
     *     way to support untrusted content
     *
     * ###### Footnotes
     *
     * Many options supported here relate to footnotes.
     * Footnotes are not specified by CommonMark, which we follow by default.
     * They are supported by GitHub, so footnotes can be enabled in markdown with
     * `mdast-util-gfm`.
     *
     * The options `footnoteBackLabel` and `footnoteLabel` define natural language
     * that explains footnotes, which is hidden for sighted users but shown to
     * assistive technology.
     * When your page is not in English, you must define translated values.
     *
     * Back references use ARIA attributes, but the section label itself uses a
     * heading that is hidden with an `sr-only` class.
     * To show it to sighted users, define different attributes in
     * `footnoteLabelProperties`.
     *
     * ###### Clobbering
     *
     * Footnotes introduces a problem, as it links footnote calls to footnote
     * definitions on the page through `id` attributes generated from user content,
     * which results in DOM clobbering.
     *
     * DOM clobbering is this:
     *
     * ```html
     * <p id=x></p>
     * <script>alert(x) // `x` now refers to the DOM `p#x` element</script>
     * ```
     *
     * Elements by their ID are made available by browsers on the `window` object,
     * which is a security risk.
     * Using a prefix solves this problem.
     *
     * More information on how to handle clobbering and the prefix is explained in
     * Example: headings (DOM clobbering) in `rehype-sanitize`.
     *
     * ###### Unknown nodes
     *
     * Unknown nodes are nodes with a type that isn’t in `handlers` or `passThrough`.
     * The default behavior for unknown nodes is:
     *
     * *   when the node has a `value` (and doesn’t have `data.hName`,
     *     `data.hProperties`, or `data.hChildren`, see later), create a hast `text`
     *     node
     * *   otherwise, create a `<div>` element (which could be changed with
     *     `data.hName`), with its children mapped from mdast to hast as well
     *
     * This behavior can be changed by passing an `unknownHandler`.
     *
     * @param {MdastNodes} tree
     *   mdast tree.
     * @param {Options | null | undefined} [options]
     *   Configuration.
     * @returns {HastNodes | null | undefined}
     *   hast tree.
     */
    // To do: next major: always return a single `root`.
    function toHast(tree, options) {
      const state = createState(tree, options);
      const node = state.one(tree, null);
      const foot = footer(state);

      if (foot) {
        // @ts-expect-error If there’s a footer, there were definitions, meaning block
        // content.
        // So assume `node` is a parent node.
        node.children.push({type: 'text', value: '\n'}, foot);
      }

      // To do: next major: always return root?
      return Array.isArray(node) ? {type: 'root', children: node} : node
    }

    /**
     * @typedef {import('hast').Root} HastRoot
     * @typedef {import('mdast').Root} MdastRoot
     * @typedef {import('mdast-util-to-hast').Options} Options
     * @typedef {import('unified').Processor<any, any, any, any>} Processor
     *
     * @typedef {import('mdast-util-to-hast')} DoNotTouchAsThisImportIncludesRawInTree
     */

    // Note: the `<MdastRoot, HastRoot>` overload doesn’t seem to work :'(

    /**
     * Plugin that turns markdown into HTML to support rehype.
     *
     * *   If a destination processor is given, that processor runs with a new HTML
     *     (hast) tree (bridge-mode).
     *     As the given processor runs with a hast tree, and rehype plugins support
     *     hast, that means rehype plugins can be used with the given processor.
     *     The hast tree is discarded in the end.
     *     It’s highly unlikely that you want to do this.
     * *   The common case is to not pass a destination processor, in which case the
     *     current processor continues running with a new HTML (hast) tree
     *     (mutate-mode).
     *     As the current processor continues with a hast tree, and rehype plugins
     *     support hast, that means rehype plugins can be used after
     *     `remark-rehype`.
     *     It’s likely that this is what you want to do.
     *
     * @param destination
     *   Optional unified processor.
     * @param options
     *   Options passed to `mdast-util-to-hast`.
     */
    const remarkRehype =
      /** @type {(import('unified').Plugin<[Processor, Options?]|[null|undefined, Options?]|[Options]|[], MdastRoot>)} */
      (
        function (destination, options) {
          return destination && 'run' in destination
            ? bridge(destination, options)
            : mutate(destination || options)
        }
      );

    var remarkRehype$1 = remarkRehype;

    /**
     * Bridge-mode.
     * Runs the destination with the new hast tree.
     *
     * @type {import('unified').Plugin<[Processor, Options?], MdastRoot>}
     */
    function bridge(destination, options) {
      return (node, file, next) => {
        destination.run(toHast(node, options), file, (error) => {
          next(error);
        });
      }
    }

    /**
     * Mutate-mode.
     * Further plugins run on the hast tree.
     *
     * @type {import('unified').Plugin<[Options?]|void[], MdastRoot, HastRoot>}
     */
    function mutate(options) {
      // @ts-expect-error: assume a corresponding node is returned by `toHast`.
      return (node) => toHast(node, options)
    }

    /**
     * @typedef {import('./info.js').Info} Info
     * @typedef {Record<string, Info>} Properties
     * @typedef {Record<string, string>} Normal
     */

    class Schema {
      /**
       * @constructor
       * @param {Properties} property
       * @param {Normal} normal
       * @param {string} [space]
       */
      constructor(property, normal, space) {
        this.property = property;
        this.normal = normal;
        if (space) {
          this.space = space;
        }
      }
    }

    /** @type {Properties} */
    Schema.prototype.property = {};
    /** @type {Normal} */
    Schema.prototype.normal = {};
    /** @type {string|null} */
    Schema.prototype.space = null;

    /**
     * @typedef {import('./schema.js').Properties} Properties
     * @typedef {import('./schema.js').Normal} Normal
     */

    /**
     * @param {Schema[]} definitions
     * @param {string} [space]
     * @returns {Schema}
     */
    function merge(definitions, space) {
      /** @type {Properties} */
      const property = {};
      /** @type {Normal} */
      const normal = {};
      let index = -1;

      while (++index < definitions.length) {
        Object.assign(property, definitions[index].property);
        Object.assign(normal, definitions[index].normal);
      }

      return new Schema(property, normal, space)
    }

    /**
     * @param {string} value
     * @returns {string}
     */
    function normalize(value) {
      return value.toLowerCase()
    }

    class Info {
      /**
       * @constructor
       * @param {string} property
       * @param {string} attribute
       */
      constructor(property, attribute) {
        /** @type {string} */
        this.property = property;
        /** @type {string} */
        this.attribute = attribute;
      }
    }

    /** @type {string|null} */
    Info.prototype.space = null;
    Info.prototype.boolean = false;
    Info.prototype.booleanish = false;
    Info.prototype.overloadedBoolean = false;
    Info.prototype.number = false;
    Info.prototype.commaSeparated = false;
    Info.prototype.spaceSeparated = false;
    Info.prototype.commaOrSpaceSeparated = false;
    Info.prototype.mustUseProperty = false;
    Info.prototype.defined = false;

    let powers = 0;

    const boolean = increment();
    const booleanish = increment();
    const overloadedBoolean = increment();
    const number = increment();
    const spaceSeparated = increment();
    const commaSeparated = increment();
    const commaOrSpaceSeparated = increment();

    function increment() {
      return 2 ** ++powers
    }

    var types = /*#__PURE__*/Object.freeze({
        __proto__: null,
        boolean: boolean,
        booleanish: booleanish,
        commaOrSpaceSeparated: commaOrSpaceSeparated,
        commaSeparated: commaSeparated,
        number: number,
        overloadedBoolean: overloadedBoolean,
        spaceSeparated: spaceSeparated
    });

    /** @type {Array<keyof types>} */
    // @ts-expect-error: hush.
    const checks = Object.keys(types);

    class DefinedInfo extends Info {
      /**
       * @constructor
       * @param {string} property
       * @param {string} attribute
       * @param {number|null} [mask]
       * @param {string} [space]
       */
      constructor(property, attribute, mask, space) {
        let index = -1;

        super(property, attribute);

        mark(this, 'space', space);

        if (typeof mask === 'number') {
          while (++index < checks.length) {
            const check = checks[index];
            mark(this, checks[index], (mask & types[check]) === types[check]);
          }
        }
      }
    }

    DefinedInfo.prototype.defined = true;

    /**
     * @param {DefinedInfo} values
     * @param {string} key
     * @param {unknown} value
     */
    function mark(values, key, value) {
      if (value) {
        // @ts-expect-error: assume `value` matches the expected value of `key`.
        values[key] = value;
      }
    }

    /**
     * @typedef {import('./schema.js').Properties} Properties
     * @typedef {import('./schema.js').Normal} Normal
     *
     * @typedef {Record<string, string>} Attributes
     *
     * @typedef {Object} Definition
     * @property {Record<string, number|null>} properties
     * @property {(attributes: Attributes, property: string) => string} transform
     * @property {string} [space]
     * @property {Attributes} [attributes]
     * @property {Array<string>} [mustUseProperty]
     */

    const own$2 = {}.hasOwnProperty;

    /**
     * @param {Definition} definition
     * @returns {Schema}
     */
    function create(definition) {
      /** @type {Properties} */
      const property = {};
      /** @type {Normal} */
      const normal = {};
      /** @type {string} */
      let prop;

      for (prop in definition.properties) {
        if (own$2.call(definition.properties, prop)) {
          const value = definition.properties[prop];
          const info = new DefinedInfo(
            prop,
            definition.transform(definition.attributes || {}, prop),
            value,
            definition.space
          );

          if (
            definition.mustUseProperty &&
            definition.mustUseProperty.includes(prop)
          ) {
            info.mustUseProperty = true;
          }

          property[prop] = info;

          normal[normalize(prop)] = prop;
          normal[normalize(info.attribute)] = prop;
        }
      }

      return new Schema(property, normal, definition.space)
    }

    const xlink = create({
      space: 'xlink',
      transform(_, prop) {
        return 'xlink:' + prop.slice(5).toLowerCase()
      },
      properties: {
        xLinkActuate: null,
        xLinkArcRole: null,
        xLinkHref: null,
        xLinkRole: null,
        xLinkShow: null,
        xLinkTitle: null,
        xLinkType: null
      }
    });

    const xml = create({
      space: 'xml',
      transform(_, prop) {
        return 'xml:' + prop.slice(3).toLowerCase()
      },
      properties: {xmlLang: null, xmlBase: null, xmlSpace: null}
    });

    /**
     * @param {Record<string, string>} attributes
     * @param {string} attribute
     * @returns {string}
     */
    function caseSensitiveTransform(attributes, attribute) {
      return attribute in attributes ? attributes[attribute] : attribute
    }

    /**
     * @param {Record<string, string>} attributes
     * @param {string} property
     * @returns {string}
     */
    function caseInsensitiveTransform(attributes, property) {
      return caseSensitiveTransform(attributes, property.toLowerCase())
    }

    const xmlns = create({
      space: 'xmlns',
      attributes: {xmlnsxlink: 'xmlns:xlink'},
      transform: caseInsensitiveTransform,
      properties: {xmlns: null, xmlnsXLink: null}
    });

    const aria = create({
      transform(_, prop) {
        return prop === 'role' ? prop : 'aria-' + prop.slice(4).toLowerCase()
      },
      properties: {
        ariaActiveDescendant: null,
        ariaAtomic: booleanish,
        ariaAutoComplete: null,
        ariaBusy: booleanish,
        ariaChecked: booleanish,
        ariaColCount: number,
        ariaColIndex: number,
        ariaColSpan: number,
        ariaControls: spaceSeparated,
        ariaCurrent: null,
        ariaDescribedBy: spaceSeparated,
        ariaDetails: null,
        ariaDisabled: booleanish,
        ariaDropEffect: spaceSeparated,
        ariaErrorMessage: null,
        ariaExpanded: booleanish,
        ariaFlowTo: spaceSeparated,
        ariaGrabbed: booleanish,
        ariaHasPopup: null,
        ariaHidden: booleanish,
        ariaInvalid: null,
        ariaKeyShortcuts: null,
        ariaLabel: null,
        ariaLabelledBy: spaceSeparated,
        ariaLevel: number,
        ariaLive: null,
        ariaModal: booleanish,
        ariaMultiLine: booleanish,
        ariaMultiSelectable: booleanish,
        ariaOrientation: null,
        ariaOwns: spaceSeparated,
        ariaPlaceholder: null,
        ariaPosInSet: number,
        ariaPressed: booleanish,
        ariaReadOnly: booleanish,
        ariaRelevant: null,
        ariaRequired: booleanish,
        ariaRoleDescription: spaceSeparated,
        ariaRowCount: number,
        ariaRowIndex: number,
        ariaRowSpan: number,
        ariaSelected: booleanish,
        ariaSetSize: number,
        ariaSort: null,
        ariaValueMax: number,
        ariaValueMin: number,
        ariaValueNow: number,
        ariaValueText: null,
        role: null
      }
    });

    const html$1 = create({
      space: 'html',
      attributes: {
        acceptcharset: 'accept-charset',
        classname: 'class',
        htmlfor: 'for',
        httpequiv: 'http-equiv'
      },
      transform: caseInsensitiveTransform,
      mustUseProperty: ['checked', 'multiple', 'muted', 'selected'],
      properties: {
        // Standard Properties.
        abbr: null,
        accept: commaSeparated,
        acceptCharset: spaceSeparated,
        accessKey: spaceSeparated,
        action: null,
        allow: null,
        allowFullScreen: boolean,
        allowPaymentRequest: boolean,
        allowUserMedia: boolean,
        alt: null,
        as: null,
        async: boolean,
        autoCapitalize: null,
        autoComplete: spaceSeparated,
        autoFocus: boolean,
        autoPlay: boolean,
        capture: boolean,
        charSet: null,
        checked: boolean,
        cite: null,
        className: spaceSeparated,
        cols: number,
        colSpan: null,
        content: null,
        contentEditable: booleanish,
        controls: boolean,
        controlsList: spaceSeparated,
        coords: number | commaSeparated,
        crossOrigin: null,
        data: null,
        dateTime: null,
        decoding: null,
        default: boolean,
        defer: boolean,
        dir: null,
        dirName: null,
        disabled: boolean,
        download: overloadedBoolean,
        draggable: booleanish,
        encType: null,
        enterKeyHint: null,
        form: null,
        formAction: null,
        formEncType: null,
        formMethod: null,
        formNoValidate: boolean,
        formTarget: null,
        headers: spaceSeparated,
        height: number,
        hidden: boolean,
        high: number,
        href: null,
        hrefLang: null,
        htmlFor: spaceSeparated,
        httpEquiv: spaceSeparated,
        id: null,
        imageSizes: null,
        imageSrcSet: null,
        inputMode: null,
        integrity: null,
        is: null,
        isMap: boolean,
        itemId: null,
        itemProp: spaceSeparated,
        itemRef: spaceSeparated,
        itemScope: boolean,
        itemType: spaceSeparated,
        kind: null,
        label: null,
        lang: null,
        language: null,
        list: null,
        loading: null,
        loop: boolean,
        low: number,
        manifest: null,
        max: null,
        maxLength: number,
        media: null,
        method: null,
        min: null,
        minLength: number,
        multiple: boolean,
        muted: boolean,
        name: null,
        nonce: null,
        noModule: boolean,
        noValidate: boolean,
        onAbort: null,
        onAfterPrint: null,
        onAuxClick: null,
        onBeforeMatch: null,
        onBeforePrint: null,
        onBeforeUnload: null,
        onBlur: null,
        onCancel: null,
        onCanPlay: null,
        onCanPlayThrough: null,
        onChange: null,
        onClick: null,
        onClose: null,
        onContextLost: null,
        onContextMenu: null,
        onContextRestored: null,
        onCopy: null,
        onCueChange: null,
        onCut: null,
        onDblClick: null,
        onDrag: null,
        onDragEnd: null,
        onDragEnter: null,
        onDragExit: null,
        onDragLeave: null,
        onDragOver: null,
        onDragStart: null,
        onDrop: null,
        onDurationChange: null,
        onEmptied: null,
        onEnded: null,
        onError: null,
        onFocus: null,
        onFormData: null,
        onHashChange: null,
        onInput: null,
        onInvalid: null,
        onKeyDown: null,
        onKeyPress: null,
        onKeyUp: null,
        onLanguageChange: null,
        onLoad: null,
        onLoadedData: null,
        onLoadedMetadata: null,
        onLoadEnd: null,
        onLoadStart: null,
        onMessage: null,
        onMessageError: null,
        onMouseDown: null,
        onMouseEnter: null,
        onMouseLeave: null,
        onMouseMove: null,
        onMouseOut: null,
        onMouseOver: null,
        onMouseUp: null,
        onOffline: null,
        onOnline: null,
        onPageHide: null,
        onPageShow: null,
        onPaste: null,
        onPause: null,
        onPlay: null,
        onPlaying: null,
        onPopState: null,
        onProgress: null,
        onRateChange: null,
        onRejectionHandled: null,
        onReset: null,
        onResize: null,
        onScroll: null,
        onScrollEnd: null,
        onSecurityPolicyViolation: null,
        onSeeked: null,
        onSeeking: null,
        onSelect: null,
        onSlotChange: null,
        onStalled: null,
        onStorage: null,
        onSubmit: null,
        onSuspend: null,
        onTimeUpdate: null,
        onToggle: null,
        onUnhandledRejection: null,
        onUnload: null,
        onVolumeChange: null,
        onWaiting: null,
        onWheel: null,
        open: boolean,
        optimum: number,
        pattern: null,
        ping: spaceSeparated,
        placeholder: null,
        playsInline: boolean,
        poster: null,
        preload: null,
        readOnly: boolean,
        referrerPolicy: null,
        rel: spaceSeparated,
        required: boolean,
        reversed: boolean,
        rows: number,
        rowSpan: number,
        sandbox: spaceSeparated,
        scope: null,
        scoped: boolean,
        seamless: boolean,
        selected: boolean,
        shape: null,
        size: number,
        sizes: null,
        slot: null,
        span: number,
        spellCheck: booleanish,
        src: null,
        srcDoc: null,
        srcLang: null,
        srcSet: null,
        start: number,
        step: null,
        style: null,
        tabIndex: number,
        target: null,
        title: null,
        translate: null,
        type: null,
        typeMustMatch: boolean,
        useMap: null,
        value: booleanish,
        width: number,
        wrap: null,

        // Legacy.
        // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
        align: null, // Several. Use CSS `text-align` instead,
        aLink: null, // `<body>`. Use CSS `a:active {color}` instead
        archive: spaceSeparated, // `<object>`. List of URIs to archives
        axis: null, // `<td>` and `<th>`. Use `scope` on `<th>`
        background: null, // `<body>`. Use CSS `background-image` instead
        bgColor: null, // `<body>` and table elements. Use CSS `background-color` instead
        border: number, // `<table>`. Use CSS `border-width` instead,
        borderColor: null, // `<table>`. Use CSS `border-color` instead,
        bottomMargin: number, // `<body>`
        cellPadding: null, // `<table>`
        cellSpacing: null, // `<table>`
        char: null, // Several table elements. When `align=char`, sets the character to align on
        charOff: null, // Several table elements. When `char`, offsets the alignment
        classId: null, // `<object>`
        clear: null, // `<br>`. Use CSS `clear` instead
        code: null, // `<object>`
        codeBase: null, // `<object>`
        codeType: null, // `<object>`
        color: null, // `<font>` and `<hr>`. Use CSS instead
        compact: boolean, // Lists. Use CSS to reduce space between items instead
        declare: boolean, // `<object>`
        event: null, // `<script>`
        face: null, // `<font>`. Use CSS instead
        frame: null, // `<table>`
        frameBorder: null, // `<iframe>`. Use CSS `border` instead
        hSpace: number, // `<img>` and `<object>`
        leftMargin: number, // `<body>`
        link: null, // `<body>`. Use CSS `a:link {color: *}` instead
        longDesc: null, // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
        lowSrc: null, // `<img>`. Use a `<picture>`
        marginHeight: number, // `<body>`
        marginWidth: number, // `<body>`
        noResize: boolean, // `<frame>`
        noHref: boolean, // `<area>`. Use no href instead of an explicit `nohref`
        noShade: boolean, // `<hr>`. Use background-color and height instead of borders
        noWrap: boolean, // `<td>` and `<th>`
        object: null, // `<applet>`
        profile: null, // `<head>`
        prompt: null, // `<isindex>`
        rev: null, // `<link>`
        rightMargin: number, // `<body>`
        rules: null, // `<table>`
        scheme: null, // `<meta>`
        scrolling: booleanish, // `<frame>`. Use overflow in the child context
        standby: null, // `<object>`
        summary: null, // `<table>`
        text: null, // `<body>`. Use CSS `color` instead
        topMargin: number, // `<body>`
        valueType: null, // `<param>`
        version: null, // `<html>`. Use a doctype.
        vAlign: null, // Several. Use CSS `vertical-align` instead
        vLink: null, // `<body>`. Use CSS `a:visited {color}` instead
        vSpace: number, // `<img>` and `<object>`

        // Non-standard Properties.
        allowTransparency: null,
        autoCorrect: null,
        autoSave: null,
        disablePictureInPicture: boolean,
        disableRemotePlayback: boolean,
        prefix: null,
        property: null,
        results: number,
        security: null,
        unselectable: null
      }
    });

    const svg$1 = create({
      space: 'svg',
      attributes: {
        accentHeight: 'accent-height',
        alignmentBaseline: 'alignment-baseline',
        arabicForm: 'arabic-form',
        baselineShift: 'baseline-shift',
        capHeight: 'cap-height',
        className: 'class',
        clipPath: 'clip-path',
        clipRule: 'clip-rule',
        colorInterpolation: 'color-interpolation',
        colorInterpolationFilters: 'color-interpolation-filters',
        colorProfile: 'color-profile',
        colorRendering: 'color-rendering',
        crossOrigin: 'crossorigin',
        dataType: 'datatype',
        dominantBaseline: 'dominant-baseline',
        enableBackground: 'enable-background',
        fillOpacity: 'fill-opacity',
        fillRule: 'fill-rule',
        floodColor: 'flood-color',
        floodOpacity: 'flood-opacity',
        fontFamily: 'font-family',
        fontSize: 'font-size',
        fontSizeAdjust: 'font-size-adjust',
        fontStretch: 'font-stretch',
        fontStyle: 'font-style',
        fontVariant: 'font-variant',
        fontWeight: 'font-weight',
        glyphName: 'glyph-name',
        glyphOrientationHorizontal: 'glyph-orientation-horizontal',
        glyphOrientationVertical: 'glyph-orientation-vertical',
        hrefLang: 'hreflang',
        horizAdvX: 'horiz-adv-x',
        horizOriginX: 'horiz-origin-x',
        horizOriginY: 'horiz-origin-y',
        imageRendering: 'image-rendering',
        letterSpacing: 'letter-spacing',
        lightingColor: 'lighting-color',
        markerEnd: 'marker-end',
        markerMid: 'marker-mid',
        markerStart: 'marker-start',
        navDown: 'nav-down',
        navDownLeft: 'nav-down-left',
        navDownRight: 'nav-down-right',
        navLeft: 'nav-left',
        navNext: 'nav-next',
        navPrev: 'nav-prev',
        navRight: 'nav-right',
        navUp: 'nav-up',
        navUpLeft: 'nav-up-left',
        navUpRight: 'nav-up-right',
        onAbort: 'onabort',
        onActivate: 'onactivate',
        onAfterPrint: 'onafterprint',
        onBeforePrint: 'onbeforeprint',
        onBegin: 'onbegin',
        onCancel: 'oncancel',
        onCanPlay: 'oncanplay',
        onCanPlayThrough: 'oncanplaythrough',
        onChange: 'onchange',
        onClick: 'onclick',
        onClose: 'onclose',
        onCopy: 'oncopy',
        onCueChange: 'oncuechange',
        onCut: 'oncut',
        onDblClick: 'ondblclick',
        onDrag: 'ondrag',
        onDragEnd: 'ondragend',
        onDragEnter: 'ondragenter',
        onDragExit: 'ondragexit',
        onDragLeave: 'ondragleave',
        onDragOver: 'ondragover',
        onDragStart: 'ondragstart',
        onDrop: 'ondrop',
        onDurationChange: 'ondurationchange',
        onEmptied: 'onemptied',
        onEnd: 'onend',
        onEnded: 'onended',
        onError: 'onerror',
        onFocus: 'onfocus',
        onFocusIn: 'onfocusin',
        onFocusOut: 'onfocusout',
        onHashChange: 'onhashchange',
        onInput: 'oninput',
        onInvalid: 'oninvalid',
        onKeyDown: 'onkeydown',
        onKeyPress: 'onkeypress',
        onKeyUp: 'onkeyup',
        onLoad: 'onload',
        onLoadedData: 'onloadeddata',
        onLoadedMetadata: 'onloadedmetadata',
        onLoadStart: 'onloadstart',
        onMessage: 'onmessage',
        onMouseDown: 'onmousedown',
        onMouseEnter: 'onmouseenter',
        onMouseLeave: 'onmouseleave',
        onMouseMove: 'onmousemove',
        onMouseOut: 'onmouseout',
        onMouseOver: 'onmouseover',
        onMouseUp: 'onmouseup',
        onMouseWheel: 'onmousewheel',
        onOffline: 'onoffline',
        onOnline: 'ononline',
        onPageHide: 'onpagehide',
        onPageShow: 'onpageshow',
        onPaste: 'onpaste',
        onPause: 'onpause',
        onPlay: 'onplay',
        onPlaying: 'onplaying',
        onPopState: 'onpopstate',
        onProgress: 'onprogress',
        onRateChange: 'onratechange',
        onRepeat: 'onrepeat',
        onReset: 'onreset',
        onResize: 'onresize',
        onScroll: 'onscroll',
        onSeeked: 'onseeked',
        onSeeking: 'onseeking',
        onSelect: 'onselect',
        onShow: 'onshow',
        onStalled: 'onstalled',
        onStorage: 'onstorage',
        onSubmit: 'onsubmit',
        onSuspend: 'onsuspend',
        onTimeUpdate: 'ontimeupdate',
        onToggle: 'ontoggle',
        onUnload: 'onunload',
        onVolumeChange: 'onvolumechange',
        onWaiting: 'onwaiting',
        onZoom: 'onzoom',
        overlinePosition: 'overline-position',
        overlineThickness: 'overline-thickness',
        paintOrder: 'paint-order',
        panose1: 'panose-1',
        pointerEvents: 'pointer-events',
        referrerPolicy: 'referrerpolicy',
        renderingIntent: 'rendering-intent',
        shapeRendering: 'shape-rendering',
        stopColor: 'stop-color',
        stopOpacity: 'stop-opacity',
        strikethroughPosition: 'strikethrough-position',
        strikethroughThickness: 'strikethrough-thickness',
        strokeDashArray: 'stroke-dasharray',
        strokeDashOffset: 'stroke-dashoffset',
        strokeLineCap: 'stroke-linecap',
        strokeLineJoin: 'stroke-linejoin',
        strokeMiterLimit: 'stroke-miterlimit',
        strokeOpacity: 'stroke-opacity',
        strokeWidth: 'stroke-width',
        tabIndex: 'tabindex',
        textAnchor: 'text-anchor',
        textDecoration: 'text-decoration',
        textRendering: 'text-rendering',
        typeOf: 'typeof',
        underlinePosition: 'underline-position',
        underlineThickness: 'underline-thickness',
        unicodeBidi: 'unicode-bidi',
        unicodeRange: 'unicode-range',
        unitsPerEm: 'units-per-em',
        vAlphabetic: 'v-alphabetic',
        vHanging: 'v-hanging',
        vIdeographic: 'v-ideographic',
        vMathematical: 'v-mathematical',
        vectorEffect: 'vector-effect',
        vertAdvY: 'vert-adv-y',
        vertOriginX: 'vert-origin-x',
        vertOriginY: 'vert-origin-y',
        wordSpacing: 'word-spacing',
        writingMode: 'writing-mode',
        xHeight: 'x-height',
        // These were camelcased in Tiny. Now lowercased in SVG 2
        playbackOrder: 'playbackorder',
        timelineBegin: 'timelinebegin'
      },
      transform: caseSensitiveTransform,
      properties: {
        about: commaOrSpaceSeparated,
        accentHeight: number,
        accumulate: null,
        additive: null,
        alignmentBaseline: null,
        alphabetic: number,
        amplitude: number,
        arabicForm: null,
        ascent: number,
        attributeName: null,
        attributeType: null,
        azimuth: number,
        bandwidth: null,
        baselineShift: null,
        baseFrequency: null,
        baseProfile: null,
        bbox: null,
        begin: null,
        bias: number,
        by: null,
        calcMode: null,
        capHeight: number,
        className: spaceSeparated,
        clip: null,
        clipPath: null,
        clipPathUnits: null,
        clipRule: null,
        color: null,
        colorInterpolation: null,
        colorInterpolationFilters: null,
        colorProfile: null,
        colorRendering: null,
        content: null,
        contentScriptType: null,
        contentStyleType: null,
        crossOrigin: null,
        cursor: null,
        cx: null,
        cy: null,
        d: null,
        dataType: null,
        defaultAction: null,
        descent: number,
        diffuseConstant: number,
        direction: null,
        display: null,
        dur: null,
        divisor: number,
        dominantBaseline: null,
        download: boolean,
        dx: null,
        dy: null,
        edgeMode: null,
        editable: null,
        elevation: number,
        enableBackground: null,
        end: null,
        event: null,
        exponent: number,
        externalResourcesRequired: null,
        fill: null,
        fillOpacity: number,
        fillRule: null,
        filter: null,
        filterRes: null,
        filterUnits: null,
        floodColor: null,
        floodOpacity: null,
        focusable: null,
        focusHighlight: null,
        fontFamily: null,
        fontSize: null,
        fontSizeAdjust: null,
        fontStretch: null,
        fontStyle: null,
        fontVariant: null,
        fontWeight: null,
        format: null,
        fr: null,
        from: null,
        fx: null,
        fy: null,
        g1: commaSeparated,
        g2: commaSeparated,
        glyphName: commaSeparated,
        glyphOrientationHorizontal: null,
        glyphOrientationVertical: null,
        glyphRef: null,
        gradientTransform: null,
        gradientUnits: null,
        handler: null,
        hanging: number,
        hatchContentUnits: null,
        hatchUnits: null,
        height: null,
        href: null,
        hrefLang: null,
        horizAdvX: number,
        horizOriginX: number,
        horizOriginY: number,
        id: null,
        ideographic: number,
        imageRendering: null,
        initialVisibility: null,
        in: null,
        in2: null,
        intercept: number,
        k: number,
        k1: number,
        k2: number,
        k3: number,
        k4: number,
        kernelMatrix: commaOrSpaceSeparated,
        kernelUnitLength: null,
        keyPoints: null, // SEMI_COLON_SEPARATED
        keySplines: null, // SEMI_COLON_SEPARATED
        keyTimes: null, // SEMI_COLON_SEPARATED
        kerning: null,
        lang: null,
        lengthAdjust: null,
        letterSpacing: null,
        lightingColor: null,
        limitingConeAngle: number,
        local: null,
        markerEnd: null,
        markerMid: null,
        markerStart: null,
        markerHeight: null,
        markerUnits: null,
        markerWidth: null,
        mask: null,
        maskContentUnits: null,
        maskUnits: null,
        mathematical: null,
        max: null,
        media: null,
        mediaCharacterEncoding: null,
        mediaContentEncodings: null,
        mediaSize: number,
        mediaTime: null,
        method: null,
        min: null,
        mode: null,
        name: null,
        navDown: null,
        navDownLeft: null,
        navDownRight: null,
        navLeft: null,
        navNext: null,
        navPrev: null,
        navRight: null,
        navUp: null,
        navUpLeft: null,
        navUpRight: null,
        numOctaves: null,
        observer: null,
        offset: null,
        onAbort: null,
        onActivate: null,
        onAfterPrint: null,
        onBeforePrint: null,
        onBegin: null,
        onCancel: null,
        onCanPlay: null,
        onCanPlayThrough: null,
        onChange: null,
        onClick: null,
        onClose: null,
        onCopy: null,
        onCueChange: null,
        onCut: null,
        onDblClick: null,
        onDrag: null,
        onDragEnd: null,
        onDragEnter: null,
        onDragExit: null,
        onDragLeave: null,
        onDragOver: null,
        onDragStart: null,
        onDrop: null,
        onDurationChange: null,
        onEmptied: null,
        onEnd: null,
        onEnded: null,
        onError: null,
        onFocus: null,
        onFocusIn: null,
        onFocusOut: null,
        onHashChange: null,
        onInput: null,
        onInvalid: null,
        onKeyDown: null,
        onKeyPress: null,
        onKeyUp: null,
        onLoad: null,
        onLoadedData: null,
        onLoadedMetadata: null,
        onLoadStart: null,
        onMessage: null,
        onMouseDown: null,
        onMouseEnter: null,
        onMouseLeave: null,
        onMouseMove: null,
        onMouseOut: null,
        onMouseOver: null,
        onMouseUp: null,
        onMouseWheel: null,
        onOffline: null,
        onOnline: null,
        onPageHide: null,
        onPageShow: null,
        onPaste: null,
        onPause: null,
        onPlay: null,
        onPlaying: null,
        onPopState: null,
        onProgress: null,
        onRateChange: null,
        onRepeat: null,
        onReset: null,
        onResize: null,
        onScroll: null,
        onSeeked: null,
        onSeeking: null,
        onSelect: null,
        onShow: null,
        onStalled: null,
        onStorage: null,
        onSubmit: null,
        onSuspend: null,
        onTimeUpdate: null,
        onToggle: null,
        onUnload: null,
        onVolumeChange: null,
        onWaiting: null,
        onZoom: null,
        opacity: null,
        operator: null,
        order: null,
        orient: null,
        orientation: null,
        origin: null,
        overflow: null,
        overlay: null,
        overlinePosition: number,
        overlineThickness: number,
        paintOrder: null,
        panose1: null,
        path: null,
        pathLength: number,
        patternContentUnits: null,
        patternTransform: null,
        patternUnits: null,
        phase: null,
        ping: spaceSeparated,
        pitch: null,
        playbackOrder: null,
        pointerEvents: null,
        points: null,
        pointsAtX: number,
        pointsAtY: number,
        pointsAtZ: number,
        preserveAlpha: null,
        preserveAspectRatio: null,
        primitiveUnits: null,
        propagate: null,
        property: commaOrSpaceSeparated,
        r: null,
        radius: null,
        referrerPolicy: null,
        refX: null,
        refY: null,
        rel: commaOrSpaceSeparated,
        rev: commaOrSpaceSeparated,
        renderingIntent: null,
        repeatCount: null,
        repeatDur: null,
        requiredExtensions: commaOrSpaceSeparated,
        requiredFeatures: commaOrSpaceSeparated,
        requiredFonts: commaOrSpaceSeparated,
        requiredFormats: commaOrSpaceSeparated,
        resource: null,
        restart: null,
        result: null,
        rotate: null,
        rx: null,
        ry: null,
        scale: null,
        seed: null,
        shapeRendering: null,
        side: null,
        slope: null,
        snapshotTime: null,
        specularConstant: number,
        specularExponent: number,
        spreadMethod: null,
        spacing: null,
        startOffset: null,
        stdDeviation: null,
        stemh: null,
        stemv: null,
        stitchTiles: null,
        stopColor: null,
        stopOpacity: null,
        strikethroughPosition: number,
        strikethroughThickness: number,
        string: null,
        stroke: null,
        strokeDashArray: commaOrSpaceSeparated,
        strokeDashOffset: null,
        strokeLineCap: null,
        strokeLineJoin: null,
        strokeMiterLimit: number,
        strokeOpacity: number,
        strokeWidth: null,
        style: null,
        surfaceScale: number,
        syncBehavior: null,
        syncBehaviorDefault: null,
        syncMaster: null,
        syncTolerance: null,
        syncToleranceDefault: null,
        systemLanguage: commaOrSpaceSeparated,
        tabIndex: number,
        tableValues: null,
        target: null,
        targetX: number,
        targetY: number,
        textAnchor: null,
        textDecoration: null,
        textRendering: null,
        textLength: null,
        timelineBegin: null,
        title: null,
        transformBehavior: null,
        type: null,
        typeOf: commaOrSpaceSeparated,
        to: null,
        transform: null,
        u1: null,
        u2: null,
        underlinePosition: number,
        underlineThickness: number,
        unicode: null,
        unicodeBidi: null,
        unicodeRange: null,
        unitsPerEm: number,
        values: null,
        vAlphabetic: number,
        vMathematical: number,
        vectorEffect: null,
        vHanging: number,
        vIdeographic: number,
        version: null,
        vertAdvY: number,
        vertOriginX: number,
        vertOriginY: number,
        viewBox: null,
        viewTarget: null,
        visibility: null,
        width: null,
        widths: null,
        wordSpacing: null,
        writingMode: null,
        x: null,
        x1: null,
        x2: null,
        xChannelSelector: null,
        xHeight: number,
        y: null,
        y1: null,
        y2: null,
        yChannelSelector: null,
        z: null,
        zoomAndPan: null
      }
    });

    /**
     * @typedef {import('./util/schema.js').Schema} Schema
     */

    const valid = /^data[-\w.:]+$/i;
    const dash = /-[a-z]/g;
    const cap = /[A-Z]/g;

    /**
     * @param {Schema} schema
     * @param {string} value
     * @returns {Info}
     */
    function find(schema, value) {
      const normal = normalize(value);
      let prop = value;
      let Type = Info;

      if (normal in schema.normal) {
        return schema.property[schema.normal[normal]]
      }

      if (normal.length > 4 && normal.slice(0, 4) === 'data' && valid.test(value)) {
        // Attribute or property.
        if (value.charAt(4) === '-') {
          // Turn it into a property.
          const rest = value.slice(5).replace(dash, camelcase);
          prop = 'data' + rest.charAt(0).toUpperCase() + rest.slice(1);
        } else {
          // Turn it into an attribute.
          const rest = value.slice(4);

          if (!dash.test(rest)) {
            let dashes = rest.replace(cap, kebab);

            if (dashes.charAt(0) !== '-') {
              dashes = '-' + dashes;
            }

            value = 'data' + dashes;
          }
        }

        Type = DefinedInfo;
      }

      return new Type(prop, value)
    }

    /**
     * @param {string} $0
     * @returns {string}
     */
    function kebab($0) {
      return '-' + $0.toLowerCase()
    }

    /**
     * @param {string} $0
     * @returns {string}
     */
    function camelcase($0) {
      return $0.charAt(1).toUpperCase()
    }

    /**
     * `hast` is close to `React`, but differs in a couple of cases.
     *
     * To get a React property from a hast property, check if it is in
     * `hastToReact`, if it is, then use the corresponding value,
     * otherwise, use the hast property.
     *
     * @type {Record<string, string>}
     */
    const hastToReact = {
      classId: 'classID',
      dataType: 'datatype',
      itemId: 'itemID',
      strokeDashArray: 'strokeDasharray',
      strokeDashOffset: 'strokeDashoffset',
      strokeLineCap: 'strokeLinecap',
      strokeLineJoin: 'strokeLinejoin',
      strokeMiterLimit: 'strokeMiterlimit',
      typeOf: 'typeof',
      xLinkActuate: 'xlinkActuate',
      xLinkArcRole: 'xlinkArcrole',
      xLinkHref: 'xlinkHref',
      xLinkRole: 'xlinkRole',
      xLinkShow: 'xlinkShow',
      xLinkTitle: 'xlinkTitle',
      xLinkType: 'xlinkType',
      xmlnsXLink: 'xmlnsXlink'
    };

    /**
     * @typedef {import('./lib/util/info.js').Info} Info
     * @typedef {import('./lib/util/schema.js').Schema} Schema
     */
    const html = merge([xml, xlink, xmlns, aria, html$1], 'html');
    const svg = merge([xml, xlink, xmlns, aria, svg$1], 'svg');

    /**
     * Parse space-separated tokens to an array of strings.
     *
     * @param {string} value
     *   Space-separated tokens.
     * @returns {Array<string>}
     *   List of tokens.
     */

    /**
     * Serialize an array of strings as space separated-tokens.
     *
     * @param {Array<string|number>} values
     *   List of tokens.
     * @returns {string}
     *   Space-separated tokens.
     */
    function stringify$1(values) {
      return values.join(' ').trim()
    }

    /**
     * @typedef Options
     *   Configuration for `stringify`.
     * @property {boolean} [padLeft=true]
     *   Whether to pad a space before a token.
     * @property {boolean} [padRight=false]
     *   Whether to pad a space after a token.
     */

    /**
     * Serialize an array of strings or numbers to comma-separated tokens.
     *
     * @param {Array<string|number>} values
     *   List of tokens.
     * @param {Options} [options]
     *   Configuration for `stringify` (optional).
     * @returns {string}
     *   Comma-separated tokens.
     */
    function stringify(values, options) {
      const settings = options || {};

      // Ensure the last empty entry is seen.
      const input = values[values.length - 1] === '' ? [...values, ''] : values;

      return input
        .join(
          (settings.padRight ? ' ' : '') +
            ',' +
            (settings.padLeft === false ? '' : ' ')
        )
        .trim()
    }

    // http://www.w3.org/TR/CSS21/grammar.html
    // https://github.com/visionmedia/css-parse/pull/49#issuecomment-30088027
    var COMMENT_REGEX = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;

    var NEWLINE_REGEX = /\n/g;
    var WHITESPACE_REGEX = /^\s*/;

    // declaration
    var PROPERTY_REGEX = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/;
    var COLON_REGEX = /^:\s*/;
    var VALUE_REGEX = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/;
    var SEMICOLON_REGEX = /^[;\s]*/;

    // https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/Trim#Polyfill
    var TRIM_REGEX = /^\s+|\s+$/g;

    // strings
    var NEWLINE = '\n';
    var FORWARD_SLASH = '/';
    var ASTERISK = '*';
    var EMPTY_STRING = '';

    // types
    var TYPE_COMMENT = 'comment';
    var TYPE_DECLARATION = 'declaration';

    /**
     * @param {String} style
     * @param {Object} [options]
     * @return {Object[]}
     * @throws {TypeError}
     * @throws {Error}
     */
    var inlineStyleParser = function(style, options) {
      if (typeof style !== 'string') {
        throw new TypeError('First argument must be a string');
      }

      if (!style) return [];

      options = options || {};

      /**
       * Positional.
       */
      var lineno = 1;
      var column = 1;

      /**
       * Update lineno and column based on `str`.
       *
       * @param {String} str
       */
      function updatePosition(str) {
        var lines = str.match(NEWLINE_REGEX);
        if (lines) lineno += lines.length;
        var i = str.lastIndexOf(NEWLINE);
        column = ~i ? str.length - i : column + str.length;
      }

      /**
       * Mark position and patch `node.position`.
       *
       * @return {Function}
       */
      function position() {
        var start = { line: lineno, column: column };
        return function(node) {
          node.position = new Position(start);
          whitespace();
          return node;
        };
      }

      /**
       * Store position information for a node.
       *
       * @constructor
       * @property {Object} start
       * @property {Object} end
       * @property {undefined|String} source
       */
      function Position(start) {
        this.start = start;
        this.end = { line: lineno, column: column };
        this.source = options.source;
      }

      /**
       * Non-enumerable source string.
       */
      Position.prototype.content = style;

      /**
       * Error `msg`.
       *
       * @param {String} msg
       * @throws {Error}
       */
      function error(msg) {
        var err = new Error(
          options.source + ':' + lineno + ':' + column + ': ' + msg
        );
        err.reason = msg;
        err.filename = options.source;
        err.line = lineno;
        err.column = column;
        err.source = style;

        if (options.silent) ; else {
          throw err;
        }
      }

      /**
       * Match `re` and return captures.
       *
       * @param {RegExp} re
       * @return {undefined|Array}
       */
      function match(re) {
        var m = re.exec(style);
        if (!m) return;
        var str = m[0];
        updatePosition(str);
        style = style.slice(str.length);
        return m;
      }

      /**
       * Parse whitespace.
       */
      function whitespace() {
        match(WHITESPACE_REGEX);
      }

      /**
       * Parse comments.
       *
       * @param {Object[]} [rules]
       * @return {Object[]}
       */
      function comments(rules) {
        var c;
        rules = rules || [];
        while ((c = comment())) {
          if (c !== false) {
            rules.push(c);
          }
        }
        return rules;
      }

      /**
       * Parse comment.
       *
       * @return {Object}
       * @throws {Error}
       */
      function comment() {
        var pos = position();
        if (FORWARD_SLASH != style.charAt(0) || ASTERISK != style.charAt(1)) return;

        var i = 2;
        while (
          EMPTY_STRING != style.charAt(i) &&
          (ASTERISK != style.charAt(i) || FORWARD_SLASH != style.charAt(i + 1))
        ) {
          ++i;
        }
        i += 2;

        if (EMPTY_STRING === style.charAt(i - 1)) {
          return error('End of comment missing');
        }

        var str = style.slice(2, i - 2);
        column += 2;
        updatePosition(str);
        style = style.slice(i);
        column += 2;

        return pos({
          type: TYPE_COMMENT,
          comment: str
        });
      }

      /**
       * Parse declaration.
       *
       * @return {Object}
       * @throws {Error}
       */
      function declaration() {
        var pos = position();

        // prop
        var prop = match(PROPERTY_REGEX);
        if (!prop) return;
        comment();

        // :
        if (!match(COLON_REGEX)) return error("property missing ':'");

        // val
        var val = match(VALUE_REGEX);

        var ret = pos({
          type: TYPE_DECLARATION,
          property: trim(prop[0].replace(COMMENT_REGEX, EMPTY_STRING)),
          value: val
            ? trim(val[0].replace(COMMENT_REGEX, EMPTY_STRING))
            : EMPTY_STRING
        });

        // ;
        match(SEMICOLON_REGEX);

        return ret;
      }

      /**
       * Parse declarations.
       *
       * @return {Object[]}
       */
      function declarations() {
        var decls = [];

        comments(decls);

        // declarations
        var decl;
        while ((decl = declaration())) {
          if (decl !== false) {
            decls.push(decl);
            comments(decls);
          }
        }

        return decls;
      }

      whitespace();
      return declarations();
    };

    /**
     * Trim `str`.
     *
     * @param {String} str
     * @return {String}
     */
    function trim(str) {
      return str ? str.replace(TRIM_REGEX, EMPTY_STRING) : EMPTY_STRING;
    }

    /**
     * Parses inline style to object.
     *
     * @example
     * // returns { 'line-height': '42' }
     * StyleToObject('line-height: 42;');
     *
     * @param  {String}      style      - The inline style.
     * @param  {Function}    [iterator] - The iterator function.
     * @return {null|Object}
     */
    function StyleToObject(style, iterator) {
      var output = null;
      if (!style || typeof style !== 'string') {
        return output;
      }

      var declaration;
      var declarations = inlineStyleParser(style);
      var hasIterator = typeof iterator === 'function';
      var property;
      var value;

      for (var i = 0, len = declarations.length; i < len; i++) {
        declaration = declarations[i];
        property = declaration.property;
        value = declaration.value;

        if (hasIterator) {
          iterator(property, value, declaration);
        } else if (value) {
          output || (output = {});
          output[property] = value;
        }
      }

      return output;
    }

    var styleToObject = StyleToObject;
    var default_1 = StyleToObject; // ESM support
    styleToObject.default = default_1;

    /**
     * Map of web namespaces.
     *
     * @type {Record<string, string>}
     */
    const webNamespaces = {
      html: 'http://www.w3.org/1999/xhtml',
      mathml: 'http://www.w3.org/1998/Math/MathML',
      svg: 'http://www.w3.org/2000/svg',
      xlink: 'http://www.w3.org/1999/xlink',
      xml: 'http://www.w3.org/XML/1998/namespace',
      xmlns: 'http://www.w3.org/2000/xmlns/'
    };

    /**
     * @typedef {import('property-information').Schema} Schema
     * @typedef {import('hast').Content} Content
     * @typedef {import('hast').Element} Element
     * @typedef {import('hast').Root} Root
     */

    const own$1 = {}.hasOwnProperty;

    /**
     * @template {CreateElementLike} H
     *   Type of hyperscript function.
     * @param {H} h
     *   HyperScript function.
     * @param {Node} tree
     *   Tree to transform.
     * @param {string | boolean | Options | null | undefined} [options]
     *   Configuration (optional).
     * @returns {ReturnType<H>}
     *   Return type of the hyperscript function.
     */
    // eslint-disable-next-line complexity
    function toH(h, tree, options) {
      if (typeof h !== 'function') {
        throw new TypeError('h is not a function')
      }

      const r = react(h);
      const v = vue(h);
      const vd = vdom(h);
      /** @type {string|boolean|null|undefined} */
      let prefix;
      /** @type {Element} */
      let node;

      if (typeof options === 'string' || typeof options === 'boolean') {
        prefix = options;
        options = {};
      } else {
        if (!options) options = {};
        prefix = options.prefix;
      }

      if (tree && tree.type === 'root') {
        const head = tree.children[0];
        // @ts-expect-error Allow `doctypes` in there, we’ll filter them out later.
        node =
          tree.children.length === 1 && head.type === 'element'
            ? head
            : {
                type: 'element',
                tagName: 'div',
                properties: {},
                children: tree.children
              };
      } else if (tree && tree.type === 'element') {
        node = tree;
      } else {
        throw new Error(
          'Expected root or element, not `' + ((tree && tree.type) || tree) + '`'
        )
      }

      return transform(h, node, {
        schema: options.space === 'svg' ? svg : html,
        prefix:
          prefix === undefined || prefix === null
            ? r || v || vd
              ? 'h-'
              : undefined
            : typeof prefix === 'string'
            ? prefix
            : prefix
            ? 'h-'
            : undefined,
        key: 0,
        react: r,
        vue: v,
        vdom: vd,
        hyperscript: hyperscript(h)
      })
    }

    /**
     * Transform a hast node through a hyperscript interface to *anything*!
     *
     * @template {CreateElementLike} H
     *   Type of hyperscript function.
     * @param {H} h
     *   HyperScript function.
     * @param {Element} node
     *   Node to transform.
     * @param {State} state
     *   Info passed around.
     * @returns {ReturnType<H>}
     *   Return type of the hyperscript function.
     */
    function transform(h, node, state) {
      const parentSchema = state.schema;
      let schema = parentSchema;
      let name = node.tagName;
      /** @type {Record<string, unknown>} */
      const attributes = {};
      /** @type {Array<ReturnType<H>|string>} */
      const nodes = [];
      let index = -1;
      /** @type {string} */
      let key;

      if (parentSchema.space === 'html' && name.toLowerCase() === 'svg') {
        schema = svg;
        state.schema = schema;
      }

      for (key in node.properties) {
        if (node.properties && own$1.call(node.properties, key)) {
          addAttribute(attributes, key, node.properties[key], state, name);
        }
      }

      if (state.vdom) {
        if (schema.space === 'html') {
          name = name.toUpperCase();
        } else if (schema.space) {
          attributes.namespace = webNamespaces[schema.space];
        }
      }

      if (state.prefix) {
        state.key++;
        attributes.key = state.prefix + state.key;
      }

      if (node.children) {
        while (++index < node.children.length) {
          const value = node.children[index];

          if (value.type === 'element') {
            nodes.push(transform(h, value, state));
          } else if (value.type === 'text') {
            nodes.push(value.value);
          }
        }
      }

      // Restore parent schema.
      state.schema = parentSchema;

      // Ensure no React warnings are triggered for void elements having children
      // passed in.
      return nodes.length > 0
        ? h.call(node, name, attributes, nodes)
        : h.call(node, name, attributes)
    }

    /**
     * Add an attribute to `props`.
     *
     * @param {Record<string, unknown>} props
     *   Map.
     * @param {string} prop
     *   Key.
     * @param {unknown} value
     *   Value.
     * @param {State} state
     *   Info passed around.
     * @param {string} name
     *   Element name.
     * @returns {void}
     *   Nothing.
     */
    // eslint-disable-next-line complexity, max-params
    function addAttribute(props, prop, value, state, name) {
      const info = find(state.schema, prop);
      /** @type {string | undefined} */
      let subprop;

      // Ignore nullish and `NaN` values.
      // Ignore `false` and falsey known booleans for hyperlike DSLs.
      if (
        value === undefined ||
        value === null ||
        (typeof value === 'number' && Number.isNaN(value)) ||
        (value === false && (state.vue || state.vdom || state.hyperscript)) ||
        (!value && info.boolean && (state.vue || state.vdom || state.hyperscript))
      ) {
        return
      }

      if (Array.isArray(value)) {
        // Accept `array`.
        // Most props are space-separated.
        value = info.commaSeparated ? stringify(value) : stringify$1(value);
      }

      // Treat `true` and truthy known booleans.
      if (info.boolean && state.hyperscript) {
        value = '';
      }

      // VDOM, Vue, and React accept `style` as object.
      if (
        info.property === 'style' &&
        typeof value === 'string' &&
        (state.react || state.vue || state.vdom)
      ) {
        value = parseStyle(value, name);
      }

      // Vue 3 (used in our tests) doesn’t need this anymore.
      // Some major in the future we can drop Vue 2 support.
      /* c8 ignore next 2 */
      if (state.vue) {
        if (info.property !== 'style') subprop = 'attrs';
      } else if (!info.mustUseProperty) {
        if (state.vdom) {
          if (info.property !== 'style') subprop = 'attributes';
        } else if (state.hyperscript) {
          subprop = 'attrs';
        }
      }

      if (subprop) {
        props[subprop] = Object.assign(props[subprop] || {}, {
          [info.attribute]: value
        });
      } else if (info.space && state.react) {
        props[hastToReact[info.property] || info.property] = value;
      } else {
        props[info.attribute] = value;
      }
    }

    /**
     * Check if `h` is `react.createElement`.
     *
     * @param {CreateElementLike} h
     *   HyperScript function.
     * @returns {boolean}
     *   Looks like React.
     */
    function react(h) {
      const node = /** @type {unknown} */ (h('div', {}));
      return Boolean(
        node &&
          // @ts-expect-error Looks like a React node.
          ('_owner' in node || '_store' in node) &&
          // @ts-expect-error Looks like a React node.
          (node.key === undefined || node.key === null)
      )
    }

    /**
     * Check if `h` is `hyperscript`.
     *
     * @param {CreateElementLike} h
     *   HyperScript function.
     * @returns {boolean}
     *   Looks like `hyperscript`.
     */
    function hyperscript(h) {
      return 'context' in h && 'cleanup' in h
    }

    /**
     * Check if `h` is `virtual-dom/h`.
     *
     * @param {CreateElementLike} h
     *   HyperScript function.
     * @returns {boolean}
     *   Looks like `virtual-dom`
     */
    function vdom(h) {
      const node = /** @type {unknown} */ (h('div', {}));
      // @ts-expect-error Looks like a vnode.
      return node.type === 'VirtualNode'
    }

    /**
     * Check if `h` is Vue.
     *
     * @param {CreateElementLike} h
     *   HyperScript function.
     * @returns {boolean}
     *   Looks like Vue.
     */
    function vue(h) {
      // Vue 3 (used in our tests) doesn’t need this anymore.
      // Some major in the future we can drop Vue 2 support.
      /* c8 ignore next 3 */
      const node = /** @type {unknown} */ (h('div', {}));
      // @ts-expect-error Looks like a Vue node.
      return Boolean(node && node.context && node.context._isVue)
    }

    /**
     * Parse a declaration into an object.
     *
     * @param {string} value
     *   CSS declarations.
     * @param {string} tagName
     *   Tag name.
     * @returns {Record<string, string>}
     *   Properties.
     */
    function parseStyle(value, tagName) {
      /** @type {Record<string, string>} */
      const result = {};

      try {
        styleToObject(value, (name, value) => {
          if (name.slice(0, 4) === '-ms-') name = 'ms-' + name.slice(4);

          result[
            name.replace(
              /-([a-z])/g,
              /**
               * @param {string} _
               * @param {string} $1
               * @returns {string}
               */
              (_, $1) => $1.toUpperCase()
            )
          ] = value;
        });
      } catch (error_) {
        const error = /** @type {Error} */ (error_);
        error.message =
          tagName + '[style]' + error.message.slice('undefined'.length);
        throw error
      }

      return result
    }

    var convert_1 = convert;

    function convert(test) {
      if (typeof test === 'string') {
        return typeFactory(test)
      }

      if (test === null || test === undefined) {
        return ok
      }

      if (typeof test === 'object') {
        return ('length' in test ? anyFactory : matchesFactory)(test)
      }

      if (typeof test === 'function') {
        return test
      }

      throw new Error('Expected function, string, or object as test')
    }

    function convertAll(tests) {
      var results = [];
      var length = tests.length;
      var index = -1;

      while (++index < length) {
        results[index] = convert(tests[index]);
      }

      return results
    }

    // Utility assert each property in `test` is represented in `node`, and each
    // values are strictly equal.
    function matchesFactory(test) {
      return matches

      function matches(node) {
        var key;

        for (key in test) {
          if (node[key] !== test[key]) {
            return false
          }
        }

        return true
      }
    }

    function anyFactory(tests) {
      var checks = convertAll(tests);
      var length = checks.length;

      return matches

      function matches() {
        var index = -1;

        while (++index < length) {
          if (checks[index].apply(this, arguments)) {
            return true
          }
        }

        return false
      }
    }

    // Utility to convert a string into a function which checks a given node’s type
    // for said string.
    function typeFactory(test) {
      return type

      function type(node) {
        return Boolean(node && node.type === test)
      }
    }

    // Utility to return true.
    function ok() {
      return true
    }

    var unistUtilVisitParents = visitParents;



    var CONTINUE$1 = true;
    var SKIP$1 = 'skip';
    var EXIT$1 = false;

    visitParents.CONTINUE = CONTINUE$1;
    visitParents.SKIP = SKIP$1;
    visitParents.EXIT = EXIT$1;

    function visitParents(tree, test, visitor, reverse) {
      var is;

      if (typeof test === 'function' && typeof visitor !== 'function') {
        reverse = visitor;
        visitor = test;
        test = null;
      }

      is = convert_1(test);

      one(tree, null, []);

      // Visit a single node.
      function one(node, index, parents) {
        var result = [];
        var subresult;

        if (!test || is(node, index, parents[parents.length - 1] || null)) {
          result = toResult(visitor(node, parents));

          if (result[0] === EXIT$1) {
            return result
          }
        }

        if (node.children && result[0] !== SKIP$1) {
          subresult = toResult(all(node.children, parents.concat(node)));
          return subresult[0] === EXIT$1 ? subresult : result
        }

        return result
      }

      // Visit children in `parent`.
      function all(children, parents) {
        var min = -1;
        var step = reverse ? -1 : 1;
        var index = (reverse ? children.length : min) + step;
        var result;

        while (index > min && index < children.length) {
          result = one(children[index], index, parents);

          if (result[0] === EXIT$1) {
            return result
          }

          index = typeof result[1] === 'number' ? result[1] : index + step;
        }
      }
    }

    function toResult(value) {
      if (value !== null && typeof value === 'object' && 'length' in value) {
        return value
      }

      if (typeof value === 'number') {
        return [CONTINUE$1, value]
      }

      return [value]
    }

    var unistUtilVisit = visit;



    var CONTINUE = unistUtilVisitParents.CONTINUE;
    var SKIP = unistUtilVisitParents.SKIP;
    var EXIT = unistUtilVisitParents.EXIT;

    visit.CONTINUE = CONTINUE;
    visit.SKIP = SKIP;
    visit.EXIT = EXIT;

    function visit(tree, test, visitor, reverse) {
      if (typeof test === 'function' && typeof visitor !== 'function') {
        reverse = visitor;
        visitor = test;
        test = null;
      }

      unistUtilVisitParents(tree, test, overload, reverse);

      function overload(node, parents) {
        var parent = parents[parents.length - 1];
        var index = parent ? parent.children.indexOf(node) : null;
        return visitor(node, index, parent)
      }
    }

    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var hastCssPropertyMap = {
      align: 'text-align',
      valign: 'vertical-align',
      height: 'height',
      width: 'width',
    };

    var hastUtilTableCellStyle = function tableCellStyle(node) {
      unistUtilVisit(node, 'element', visitor);
      return node;
    };

    function visitor(node) {
      if (node.tagName !== 'tr' && node.tagName !== 'td' && node.tagName !== 'th') {
        return;
      }

      var hastName;
      var cssName;
      for (hastName in hastCssPropertyMap) {
        if (
          !hasOwnProperty.call(hastCssPropertyMap, hastName) ||
          node.properties[hastName] === undefined
        ) {
          continue;
        }
        cssName = hastCssPropertyMap[hastName];
        appendStyle(node, cssName, node.properties[hastName]);
        delete node.properties[hastName];
      }
    }

    function appendStyle(node, property, value) {
      var prevStyle = (node.properties.style || '').trim();
      if (prevStyle && !/;\s*/.test(prevStyle)) {
        prevStyle += ';';
      }
      if (prevStyle) {
        prevStyle += ' ';
      }
      var nextStyle = prevStyle + property + ': ' + value + ';';
      node.properties.style = nextStyle;
    }

    var tableCellStyle = hastUtilTableCellStyle;

    /**
     * Check if the given value is *inter-element whitespace*.
     *
     * @param {unknown} thing
     *   Thing to check (typically `Node` or `string`).
     * @returns {boolean}
     *   Whether the `value` is inter-element whitespace (`boolean`): consisting of
     *   zero or more of space, tab (`\t`), line feed (`\n`), carriage return
     *   (`\r`), or form feed (`\f`).
     *   If a node is passed it must be a `Text` node, whose `value` field is
     *   checked.
     */
    function whitespace(thing) {
      /** @type {string} */
      const value =
        // @ts-expect-error looks like a node.
        thing && typeof thing === 'object' && thing.type === 'text'
          ? // @ts-expect-error looks like a text.
            thing.value || ''
          : thing;

      // HTML whitespace expression.
      // See <https://infra.spec.whatwg.org/#ascii-whitespace>.
      return typeof value === 'string' && value.replace(/[ \t\n\f\r]/g, '') === ''
    }

    /**
     * @typedef {import('hast').Root} Root
     * @typedef {import('react').ReactNode} ReactNode
     * @typedef {import('react').ReactElement<unknown>} ReactElement
     *
     * @callback CreateElementLike
     * @param {any} name
     * @param {any} props
     * @param {...ReactNode} children
     * @returns {ReactNode}
     *
     * @typedef SharedOptions
     *   Base configuration (without `components`).
     * @property {CreateElementLike} createElement
     *   How to create elements or components.
     *   You should typically pass `React.createElement`.
     * @property {((props: any) => ReactNode)|undefined} [Fragment]
     *   Create fragments instead of an outer `<div>` if available.
     *   You should typically pass `React.Fragment`.
     * @property {string|undefined} [prefix='h-']
     *   React key prefix.
     *
     * @typedef {SharedOptions & (import('./complex-types').ComponentsWithNodeOptions|import('./complex-types').ComponentsWithoutNodeOptions)} Options
     *   Configuration.
     */

    const own = {}.hasOwnProperty;
    const tableElements = new Set(['table', 'thead', 'tbody', 'tfoot', 'tr']);

    /**
     * Compile HTML to React nodes.
     *
     * > 👉 **Note**: this compiler returns a React node where compilers typically
     * > return `string`.
     * > When using `.stringify`, the result is such a React node.
     * > When using `.process` (or `.processSync`), the result is available at
     * > `file.result`.
     *
     * @this {import('unified').Processor}
     * @type {import('unified').Plugin<[Options], Root, ReactElement>}
     */
    function rehypeReact(options) {
      if (!options || typeof options.createElement !== 'function') {
        throw new TypeError('createElement is not a function')
      }

      const createElement = options.createElement;

      Object.assign(this, {Compiler: compiler});

      /** @type {import('unified').CompilerFunction<Root, ReactNode>} */
      function compiler(node) {
        /** @type {ReactNode} */
        // @ts-expect-error: assume `name` is a known element.
        let result = toH(h, tableCellStyle(node), options.prefix);

        if (node.type === 'root') {
          // Invert <https://github.com/syntax-tree/hast-to-hyperscript/blob/d227372/index.js#L46-L56>.
          result =
            result &&
            typeof result === 'object' &&
            'type' in result &&
            'props' in result &&
            result.type === 'div' &&
            (node.children.length !== 1 || node.children[0].type !== 'element')
              ? // `children` does exist.
                // type-coverage:ignore-next-line
                result.props.children
              : [result];

          return createElement(options.Fragment || 'div', {}, result)
        }

        return result
      }

      /**
       * @param {keyof JSX.IntrinsicElements} name
       * @param {Record<string, unknown>} props
       * @param {Array<ReactNode>} [children]
       * @returns {ReactNode}
       */
      function h(name, props, children) {
        // Currently, a warning is triggered by react for *any* white space in
        // tables.
        // So we remove the pretty lines for now.
        // See: <https://github.com/facebook/react/pull/7081>.
        // See: <https://github.com/facebook/react/pull/7515>.
        // See: <https://github.com/remarkjs/remark-react/issues/64>.
        // See: <https://github.com/rehypejs/rehype-react/pull/29>.
        // See: <https://github.com/rehypejs/rehype-react/pull/32>.
        // See: <https://github.com/rehypejs/rehype-react/pull/45>.
        if (children && tableElements.has(name)) {
          children = children.filter((child) => !whitespace(child));
        }

        if (options.components && own.call(options.components, name)) {
          const component = options.components[name];

          if (options.passNode && typeof component === 'function') {
            // @ts-expect-error: `toH` passes the current node.
            // type-coverage:ignore-next-line
            props = Object.assign({node: this}, props);
          }

          return createElement(component, props, children)
        }

        return createElement(name, props, children)
      }
    }

    function uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (Math.random() * 16) | 0, v = c === 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    }

    function getBearerToken() {
        var token = localStorage.getItem('withcontext_widget_bearer_token');
        if (token)
            return token;
        var newToken = uuidv4();
        localStorage.setItem('withcontext_widget_bearer_token', newToken);
        return newToken;
    }

    function PDFLink(_a) {
        var token = _a.token, page = _a.page;
        var _b = h(''), link = _b[0], setLink = _b[1];
        p$3(function () {
            function fetchLink() {
                return __awaiter(this, void 0, void 0, function () {
                    var response, linkDetail, error_1;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 3, , 4]);
                                return [4 /*yield*/, fetch("https://chat-api.withcontext.ai/v1/chat/model/index/".concat(token), {
                                        headers: {
                                            'Content-Type': 'application/json',
                                            Authorization: "Bearer ".concat(getBearerToken()),
                                        },
                                    })];
                            case 1:
                                response = _a.sent();
                                return [4 /*yield*/, response.json()];
                            case 2:
                                linkDetail = _a.sent();
                                console.log('linkDetail:', linkDetail);
                                setLink(linkDetail === null || linkDetail === void 0 ? void 0 : linkDetail.link);
                                return [3 /*break*/, 4];
                            case 3:
                                error_1 = _a.sent();
                                console.error(error_1);
                                return [3 /*break*/, 4];
                            case 4: return [2 /*return*/];
                        }
                    });
                });
            }
            fetchLink();
        }, [token]);
        return (y$1("a", { href: "".concat(link, "#page=").concat(page), target: "_blank", rel: "noopener noreferrer" }, page));
    }

    async function getBytes(stream, onChunk) {
        const reader = stream.getReader();
        let result;
        while (!(result = await reader.read()).done) {
            onChunk(result.value);
        }
    }
    function getLines(onLine) {
        let buffer;
        let position;
        let fieldLength;
        let discardTrailingNewline = false;
        return function onChunk(arr) {
            if (buffer === undefined) {
                buffer = arr;
                position = 0;
                fieldLength = -1;
            }
            else {
                buffer = concat(buffer, arr);
            }
            const bufLength = buffer.length;
            let lineStart = 0;
            while (position < bufLength) {
                if (discardTrailingNewline) {
                    if (buffer[position] === 10) {
                        lineStart = ++position;
                    }
                    discardTrailingNewline = false;
                }
                let lineEnd = -1;
                for (; position < bufLength && lineEnd === -1; ++position) {
                    switch (buffer[position]) {
                        case 58:
                            if (fieldLength === -1) {
                                fieldLength = position - lineStart;
                            }
                            break;
                        case 13:
                            discardTrailingNewline = true;
                        case 10:
                            lineEnd = position;
                            break;
                    }
                }
                if (lineEnd === -1) {
                    break;
                }
                onLine(buffer.subarray(lineStart, lineEnd), fieldLength);
                lineStart = position;
                fieldLength = -1;
            }
            if (lineStart === bufLength) {
                buffer = undefined;
            }
            else if (lineStart !== 0) {
                buffer = buffer.subarray(lineStart);
                position -= lineStart;
            }
        };
    }
    function getMessages(onId, onRetry, onMessage) {
        let message = newMessage();
        const decoder = new TextDecoder();
        return function onLine(line, fieldLength) {
            if (line.length === 0) {
                onMessage === null || onMessage === void 0 ? void 0 : onMessage(message);
                message = newMessage();
            }
            else if (fieldLength > 0) {
                const field = decoder.decode(line.subarray(0, fieldLength));
                const valueOffset = fieldLength + (line[fieldLength + 1] === 32 ? 2 : 1);
                const value = decoder.decode(line.subarray(valueOffset));
                switch (field) {
                    case 'data':
                        message.data = message.data
                            ? message.data + '\n' + value
                            : value;
                        break;
                    case 'event':
                        message.event = value;
                        break;
                    case 'id':
                        onId(message.id = value);
                        break;
                    case 'retry':
                        const retry = parseInt(value, 10);
                        if (!isNaN(retry)) {
                            onRetry(message.retry = retry);
                        }
                        break;
                }
            }
        };
    }
    function concat(a, b) {
        const res = new Uint8Array(a.length + b.length);
        res.set(a);
        res.set(b, a.length);
        return res;
    }
    function newMessage() {
        return {
            data: '',
            event: '',
            id: '',
            retry: undefined,
        };
    }

    var __rest = (undefined && undefined.__rest) || function (s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    };
    const EventStreamContentType = 'text/event-stream';
    const DefaultRetryInterval = 1000;
    const LastEventId = 'last-event-id';
    function fetchEventSource(input, _a) {
        var { signal: inputSignal, headers: inputHeaders, onopen: inputOnOpen, onmessage, onclose, onerror, openWhenHidden, fetch: inputFetch } = _a, rest = __rest(_a, ["signal", "headers", "onopen", "onmessage", "onclose", "onerror", "openWhenHidden", "fetch"]);
        return new Promise((resolve, reject) => {
            const headers = Object.assign({}, inputHeaders);
            if (!headers.accept) {
                headers.accept = EventStreamContentType;
            }
            let curRequestController;
            function onVisibilityChange() {
                curRequestController.abort();
                if (!document.hidden) {
                    create();
                }
            }
            if (!openWhenHidden) {
                document.addEventListener('visibilitychange', onVisibilityChange);
            }
            let retryInterval = DefaultRetryInterval;
            let retryTimer = 0;
            function dispose() {
                document.removeEventListener('visibilitychange', onVisibilityChange);
                window.clearTimeout(retryTimer);
                curRequestController.abort();
            }
            inputSignal === null || inputSignal === void 0 ? void 0 : inputSignal.addEventListener('abort', () => {
                dispose();
                resolve();
            });
            const fetch = inputFetch !== null && inputFetch !== void 0 ? inputFetch : window.fetch;
            const onopen = inputOnOpen !== null && inputOnOpen !== void 0 ? inputOnOpen : defaultOnOpen;
            async function create() {
                var _a;
                curRequestController = new AbortController();
                try {
                    const response = await fetch(input, Object.assign(Object.assign({}, rest), { headers, signal: curRequestController.signal }));
                    await onopen(response);
                    await getBytes(response.body, getLines(getMessages(id => {
                        if (id) {
                            headers[LastEventId] = id;
                        }
                        else {
                            delete headers[LastEventId];
                        }
                    }, retry => {
                        retryInterval = retry;
                    }, onmessage)));
                    onclose === null || onclose === void 0 ? void 0 : onclose();
                    dispose();
                    resolve();
                }
                catch (err) {
                    if (!curRequestController.signal.aborted) {
                        try {
                            const interval = (_a = onerror === null || onerror === void 0 ? void 0 : onerror(err)) !== null && _a !== void 0 ? _a : retryInterval;
                            window.clearTimeout(retryTimer);
                            retryTimer = window.setTimeout(create, interval);
                        }
                        catch (innerErr) {
                            dispose();
                            reject(innerErr);
                        }
                    }
                }
            }
            create();
        });
    }
    function defaultOnOpen(response) {
        const contentType = response.headers.get('content-type');
        if (!(contentType === null || contentType === void 0 ? void 0 : contentType.startsWith(EventStreamContentType))) {
            throw new Error(`Expected content-type to be ${EventStreamContentType}, Actual: ${contentType}`);
        }
    }

    function i(){throw new Error("Cycle detected")}function t(){if(!(s$1>1)){var i,t=!1;while(void 0!==r){var h=r;r=void 0;n++;while(void 0!==h){var o=h.o;h.o=void 0;h.f&=-3;if(!(8&h.f)&&d$1(h))try{h.c();}catch(h){if(!t){i=h;t=!0;}}h=o;}}n=0;s$1--;if(t)throw i}else s$1--;}var o=void 0,r=void 0,s$1=0,n=0,f=0;function v$1(i){if(void 0!==o){var t=i.n;if(void 0===t||t.t!==o){t={i:0,S:i,p:o.s,n:void 0,t:o,e:void 0,x:void 0,r:t};if(void 0!==o.s)o.s.n=t;o.s=t;i.n=t;if(32&o.f)i.S(t);return t}else if(-1===t.i){t.i=0;if(void 0!==t.n){t.n.p=t.p;if(void 0!==t.p)t.p.n=t.n;t.p=o.s;t.n=void 0;o.s.n=t;o.s=t;}return t}}}function e(i){this.v=i;this.i=0;this.n=void 0;this.t=void 0;}e.prototype.h=function(){return !0};e.prototype.S=function(i){if(this.t!==i&&void 0===i.e){i.x=this.t;if(void 0!==this.t)this.t.e=i;this.t=i;}};e.prototype.U=function(i){if(void 0!==this.t){var t=i.e,h=i.x;if(void 0!==t){t.x=h;i.e=void 0;}if(void 0!==h){h.e=t;i.x=void 0;}if(i===this.t)this.t=h;}};e.prototype.subscribe=function(i){var t=this;return p$1(function(){var h=t.value,o=32&this.f;this.f&=-33;try{i(h);}finally{this.f|=o;}})};e.prototype.valueOf=function(){return this.value};e.prototype.toString=function(){return this.value+""};e.prototype.peek=function(){return this.v};Object.defineProperty(e.prototype,"value",{get:function(){var i=v$1(this);if(void 0!==i)i.i=this.i;return this.v},set:function(h){if(h!==this.v){if(n>100)i();this.v=h;this.i++;f++;s$1++;try{for(var o=this.t;void 0!==o;o=o.x)o.t.N();}finally{t();}}}});function u(i){return new e(i)}function d$1(i){for(var t=i.s;void 0!==t;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return !0;return !1}function c(i){for(var t=i.s;void 0!==t;t=t.n){var h=t.S.n;if(void 0!==h)t.r=h;t.S.n=t;t.i=-1;if(void 0===t.n){i.s=t;break}}}function a(i){var t=i.s,h=void 0;while(void 0!==t){var o=t.p;if(-1===t.i){t.S.U(t);if(void 0!==o)o.n=t.n;if(void 0!==t.n)t.n.p=o;}else h=t;t.S.n=t.r;if(void 0!==t.r)t.r=void 0;t=o;}i.s=h;}function l$1(i){e.call(this,void 0);this.x=i;this.s=void 0;this.g=f-1;this.f=4;}(l$1.prototype=new e).h=function(){this.f&=-3;if(1&this.f)return !1;if(32==(36&this.f))return !0;this.f&=-5;if(this.g===f)return !0;this.g=f;this.f|=1;if(this.i>0&&!d$1(this)){this.f&=-2;return !0}var i=o;try{c(this);o=this;var t=this.x();if(16&this.f||this.v!==t||0===this.i){this.v=t;this.f&=-17;this.i++;}}catch(i){this.v=i;this.f|=16;this.i++;}o=i;a(this);this.f&=-2;return !0};l$1.prototype.S=function(i){if(void 0===this.t){this.f|=36;for(var t=this.s;void 0!==t;t=t.n)t.S.S(t);}e.prototype.S.call(this,i);};l$1.prototype.U=function(i){if(void 0!==this.t){e.prototype.U.call(this,i);if(void 0===this.t){this.f&=-33;for(var t=this.s;void 0!==t;t=t.n)t.S.U(t);}}};l$1.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var i=this.t;void 0!==i;i=i.x)i.t.N();}};l$1.prototype.peek=function(){if(!this.h())i();if(16&this.f)throw this.v;return this.v};Object.defineProperty(l$1.prototype,"value",{get:function(){if(1&this.f)i();var t=v$1(this);this.h();if(void 0!==t)t.i=this.i;if(16&this.f)throw this.v;return this.v}});function w(i){return new l$1(i)}function y(i){var h=i.u;i.u=void 0;if("function"==typeof h){s$1++;var r=o;o=void 0;try{h();}catch(t){i.f&=-2;i.f|=8;_(i);throw t}finally{o=r;t();}}}function _(i){for(var t=i.s;void 0!==t;t=t.n)t.S.U(t);i.x=void 0;i.s=void 0;y(i);}function g(i){if(o!==this)throw new Error("Out-of-order effect");a(this);o=i;this.f&=-2;if(8&this.f)_(this);t();}function b(i){this.x=i;this.u=void 0;this.s=void 0;this.o=void 0;this.f=32;}b.prototype.c=function(){var i=this.S();try{if(!(8&this.f)&&void 0!==this.x)this.u=this.x();}finally{i();}};b.prototype.S=function(){if(1&this.f)i();this.f|=1;this.f&=-9;y(this);c(this);s$1++;var t=o;o=this;return g.bind(this,t)};b.prototype.N=function(){if(!(2&this.f)){this.f|=2;this.o=r;r=this;}};b.prototype.d=function(){this.f|=8;if(!(1&this.f))_(this);};function p$1(i){var t=new b(i);try{t.c();}catch(i){t.d();throw i}return t.d.bind(t)}

    var v;function s(n,i){l$4[n]=i.bind(null,l$4[n]||function(){});}function l(n){if(v)v();v=n&&n.S();}function d(n){var r=this,t=n.data,f=useSignal(t);f.value=t;var o=F(function(){var n=r.__v;while(n=n.__)if(n.__c){n.__c.__$f|=4;break}r.__$u.c=function(){r.base.data=o.peek();};return w(function(){var n=f.value.value;return 0===n?0:!0===n?"":n||""})},[]);return o.value}d.displayName="_st";Object.defineProperties(e.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:d},props:{configurable:!0,get:function(){return {data:this}}},__b:{configurable:!0,value:1}});s("__b",function(n,r){if("string"==typeof r.type){var i,t=r.props;for(var f in t)if("children"!==f){var e$1=t[f];if(e$1 instanceof e){if(!i)r.__np=i={};i[f]=e$1;t[f]=e$1.peek();}}}n(r);});s("__r",function(n,r){l();var i,t=r.__c;if(t){t.__$f&=-2;if(void 0===(i=t.__$u))t.__$u=i=function(n){var r;p$1(function(){r=this;});r.c=function(){t.__$f|=1;t.setState({});};return r}();}l(i);n(r);});s("__e",function(n,r,i,t){l();n(r,i,t);});s("diffed",function(n,r){l();var i;if("string"==typeof r.type&&(i=r.__e)){var t=r.__np,f=r.props;if(t){var o=i.U;if(o)for(var e in o){var u=o[e];if(void 0!==u&&!(e in t)){u.d();o[e]=void 0;}}else i.U=o={};for(var a in t){var v=o[a],s=t[a];if(void 0===v){v=p(i,a,s,f);o[a]=v;}else v.o(s,f);}}}n(r);});function p(n,r,i,t){var f=r in n&&void 0===n.ownerSVGElement,o=u(i);return {o:function(n,r){o.value=n;t=r;},d:p$1(function(){var i=o.value.value;if(t[r]!==i){t[r]=i;if(f)n[r]=i;else if(i)n.setAttribute(r,i);else n.removeAttribute(r);}})}}s("unmount",function(n,r){if("string"==typeof r.type){var i=r.__e;if(i){var t=i.U;if(t){i.U=void 0;for(var f in t){var o=t[f];if(o)o.d();}}}}else {var e=r.__c;if(e){var u=e.__$u;if(u){e.__$u=void 0;u.d();}}}n(r);});s("__h",function(n,r,i,t){if(t<3)r.__$f|=2;n(r,i,t);});k$1.prototype.shouldComponentUpdate=function(n,r){var i=this.__$u;if(!(i&&void 0!==i.s||4&this.__$f))return !0;if(3&this.__$f)return !0;for(var t in r)return !0;for(var f in n)if("__source"!==f&&n[f]!==this.props[f])return !0;for(var o in this.props)if(!(o in n))return !0;return !1};function useSignal(n){return F(function(){return u(n)},[])}

    var appId = u('');
    var isPrivateApp = u(false);
    var chatId = u('');
    var modelId = u('');
    var modelName = u('');
    var modelAvatarUrl = u('');
    var modelCreatedAt = u(Date.now());
    var modelIndexStatus = u(0); // 1: indexing, 2: indexed, 3: index failed
    var summaryMessages = u([]);
    var chatList = u([]);
    var latestChatMessage = u('');
    var isWaitingAnswer = u(false);
    var isAnswering = u(false);
    var canSendMessage = w(function () {
        return !isWaitingAnswer.value && !isAnswering.value && modelIndexStatus.value === 2;
    });
    var canTypeMessage = w(function () {
        return [0, 2].includes(modelIndexStatus.value);
    });
    var latestMyMessageId = u('');
    var isAppInitialized = w(function () { return !!modelName.value; });

    function sendMessage(message) {
        if (!canSendMessage.value)
            return;
        if (message) {
            // 发送问题
            chatList.value = __spreadArray(__spreadArray([], chatList.value, true), [
                { id: uuidv4(), sender: 'me', message: message, createdAt: Date.now() },
            ], false);
        }
        else {
            // 重试问题
            chatList.value = chatList.value.slice(0, -1);
        }
        isWaitingAnswer.value = true;
        fetchEventSource("https://chat-api.withcontext.ai/v1/widget/".concat(chatId.value, "/msg/stream"), {
            method: 'POST',
            openWhenHidden: true,
            headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(getBearerToken()),
            },
            body: JSON.stringify({
                text: message,
                parent_msg_id: message ? '' : latestMyMessageId.value,
                appid: appId.value,
            }),
            onmessage: function (ev) {
                isWaitingAnswer.value = false;
                var data = JSON.parse(ev === null || ev === void 0 ? void 0 : ev.data);
                var id = data.reply.id;
                var message = data.reply.text;
                var createdAt = new Date(data.reply.created_at).getTime();
                var isFinish = data.is_finish;
                var lastUserMsgId = data.last_user_msg_id;
                console.log('data:', data);
                if (isFinish) {
                    isAnswering.value = false;
                    latestChatMessage.value = '';
                    chatList.value = __spreadArray(__spreadArray([], chatList.value, true), [{ id: id, sender: 'ai', message: message, createdAt: createdAt }], false);
                    latestMyMessageId.value = lastUserMsgId;
                }
                else {
                    isAnswering.value = true;
                    latestChatMessage.value = message + '...';
                }
            },
        });
    }

    var Link$1 = j('div')(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\n  margin: 6px 0px;\n  color: #00ab55;\n  cursor: pointer;\n  &:hover {\n    text-decoration: underline;\n  }\n"], ["\n  margin: 6px 0px;\n  color: #00ab55;\n  cursor: pointer;\n  &:hover {\n    text-decoration: underline;\n  }\n"])));
    function QuestionLink(_a) {
        var question = _a.question;
        function handleClick(e) {
            e.preventDefault();
            sendMessage(question);
        }
        return (y$1(Link$1, { onClick: handleClick },
            y$1("img", { alt: "Question:", src: "https://withcontext.blob.core.windows.net/web/assets/ic_send.svg", width: "12px", height: "12px" }),
            y$1("span", { style: { marginLeft: '4px' } }, question)));
    }
    var templateObject_1$9;

    function Link(_a) {
        var href = _a.href, children = _a.children;
        var isQuestion = href.includes('question::');
        var isPDF = href.includes('pdf:');
        if (isQuestion) {
            var q = href.replace('question::', '');
            var question = decodeURIComponent(q);
            return y$1(QuestionLink, { question: question });
        }
        if (isPDF) {
            var _b = href.match(/pdf:\/\/(\w+)\/(\d+)/) || [], token = _b[1], page = _b[2];
            return y$1(PDFLink, { token: token, page: page });
        }
        return (y$1("a", { href: href, target: "_blank", rel: "noopener noreferrer" }, children));
    }

    var Theme = j("div")(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n  color: #212B36;\n\n  & h3 {\n    margin: 0px;\n    margin-bottom: 6px;\n    font-size: 18px;\n    line-height: 28px;\n    color: inherit;\n  }\n\n  & p {\n    margin: 6px 0px;\n    font-size: 14px;\n    line-height: 22px;\n    color: inherit;\n\n    &:first-child {\n      margin-top: 0px;\n    }\n    &:last-child {\n      margin-bottom: 0px;\n    }\n  }\n\n  & ol, & ul {\n    margin: 6px 0px;\n\n    &:first-child {\n      margin-top: 0px;\n    }\n    &:last-child {\n      margin-bottom: 0px;\n    }\n  }\n"], ["\n  color: #212B36;\n\n  & h3 {\n    margin: 0px;\n    margin-bottom: 6px;\n    font-size: 18px;\n    line-height: 28px;\n    color: inherit;\n  }\n\n  & p {\n    margin: 6px 0px;\n    font-size: 14px;\n    line-height: 22px;\n    color: inherit;\n\n    &:first-child {\n      margin-top: 0px;\n    }\n    &:last-child {\n      margin-bottom: 0px;\n    }\n  }\n\n  & ol, & ul {\n    margin: 6px 0px;\n\n    &:first-child {\n      margin-top: 0px;\n    }\n    &:last-child {\n      margin-bottom: 0px;\n    }\n  }\n"])));
    var templateObject_1$8;

    var MarkdownRenderer = function (props) {
        var processor = unified()
            .use(remarkParse)
            .use(remarkRehype$1)
            .use(rehypeReact, {
            createElement: y$1,
            components: {
                a: Link,
            },
        });
        // @ts-ignore
        return y$1(Theme, null, processor.processSync(props.markdown).result);
    };

    function formatRelativeTime(timestamp) {
        var now = new Date().getTime();
        var secondsDiff = Math.floor((now - timestamp) / 1000);
        var interval;
        interval = Math.floor(secondsDiff / 60);
        if (interval < 1) {
            return 'just now';
        }
        if (interval < 60) {
            return interval + (interval === 1 ? ' minute ago' : ' minutes ago');
        }
        interval = Math.floor(secondsDiff / 3600);
        if (interval < 24) {
            return interval + (interval === 1 ? ' hour ago' : ' hours ago');
        }
        interval = Math.floor(secondsDiff / (3600 * 24));
        if (interval < 30) {
            return interval + (interval === 1 ? ' day ago' : ' days ago');
        }
        interval = Math.floor(secondsDiff / (3600 * 24 * 30));
        if (interval < 12) {
            return interval + (interval === 1 ? ' month ago' : ' months ago');
        }
        interval = Math.floor(secondsDiff / (3600 * 24 * 365));
        return interval + (interval === 1 ? ' year ago' : ' years ago');
    }

    function djb2HashCode(str) {
        var hash = 5381;
        for (var i = 0; i < str.length; i += 1) {
            hash = hash * 33 + str.charCodeAt(i);
        }
        return (hash % 5) + 1;
    }

    function getAvatarUrl(url, id) {
        if (url)
            return url;
        return "https://webcdn.withcontext.ai/web/assets/tu".concat(djb2HashCode(id), ".png");
    }

    var Avatar = j('img')(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n  border-radius: 50%;\n  object-fit: cover;\n"], ["\n  border-radius: 50%;\n  object-fit: cover;\n"])));
    function ModelAvatar(_a) {
        var _b = _a.size, size = _b === void 0 ? 'md' : _b;
        if (!modelAvatarUrl.value && !modelId.value)
            return null;
        var src = getAvatarUrl(modelAvatarUrl.value, modelId.value);
        var width = F(function () { return size === 'sm' ? '20px' : '40px'; }, [size]);
        return (y$1(Avatar, { src: src, alt: "Model avatar", width: width, height: width }));
    }
    var templateObject_1$7;

    var Wrapper$1 = j('div')(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  padding: 16px 0px;\n\n  &:first-child {\n    padding-top: 0;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  padding: 16px 0px;\n\n  &:first-child {\n    padding-top: 0;\n  }\n"])));
    var Meta = j('div')(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  align-self: ", ";\n  display: flex;\n  align-items: center;\n\n  & > :not([hidden]) ~ :not([hidden]) {\n    margin-left: 8px;\n  }\n"], ["\n  align-self: ", ";\n  display: flex;\n  align-items: center;\n\n  & > :not([hidden]) ~ :not([hidden]) {\n    margin-left: 8px;\n  }\n"])), function (props) { return (props.isMe ? 'flex-end' : 'flex-start'); });
    var Time = j('div')(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  font-size: 12px;\n  line-height: 18px;\n  color: #919eab;\n"], ["\n  font-size: 12px;\n  line-height: 18px;\n  color: #919eab;\n"])));
    var Message = j('div')(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n  align-self: ", ";\n  margin-top: 8px;\n  padding: 12px;\n  font-size: 14px;\n  line-height: 22px;\n  color: #212b36;\n  background-color: ", ";\n  border-radius: 8px;\n  word-break: break-word;\n"], ["\n  align-self: ", ";\n  margin-top: 8px;\n  padding: 12px;\n  font-size: 14px;\n  line-height: 22px;\n  color: #212b36;\n  background-color: ", ";\n  border-radius: 8px;\n  word-break: break-word;\n"])), function (props) { return (props.isMe ? 'self-end' : 'self-start'); }, function (props) { return (props.isMe ? '#C8FACD' : '#F4F6F8'); });
    var Label = j('div')(templateObject_5$1 || (templateObject_5$1 = __makeTemplateObject(["\n  padding: 4px 8px;\n  color: white;\n  font-size: 12px;\n  background-color: #0aaeff;\n  border-radius: 6px;\n"], ["\n  padding: 4px 8px;\n  color: white;\n  font-size: 12px;\n  background-color: #0aaeff;\n  border-radius: 6px;\n"])));
    function ChatItem(_a) {
        var children = _a.children, _b = _a.isMe, isMe = _b === void 0 ? false : _b, timestamp = _a.timestamp;
        return (y$1(Wrapper$1, null,
            y$1(Meta, { isMe: isMe },
                !isMe && y$1(ModelAvatar, { size: "sm" }),
                timestamp && timestamp > 0 && (y$1(Time, null, formatRelativeTime(timestamp))),
                !isMe && y$1(Label, null, "AI")),
            y$1(Message, { isMe: isMe },
                y$1(MarkdownRenderer, { markdown: children }))));
    }
    var templateObject_1$6, templateObject_2$2, templateObject_3$1, templateObject_4$1, templateObject_5$1;

    function initApp(appid) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
        return __awaiter(this, void 0, void 0, function () {
            var response, appInfo, chatHistory, message, error_1;
            return __generator(this, function (_s) {
                switch (_s.label) {
                    case 0:
                        _s.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, fetch('https://chat-api.withcontext.ai/v1/widget/init', {
                                method: 'POST',
                                body: JSON.stringify({ appid: appid }),
                                headers: {
                                    'Content-Type': 'application/json',
                                    Authorization: "Bearer ".concat(getBearerToken()),
                                },
                            })];
                    case 1:
                        response = _s.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        appInfo = _s.sent();
                        console.log('appInfo:', appInfo);
                        if (appInfo.code === 403) {
                            isPrivateApp.value = true;
                            return [2 /*return*/];
                        }
                        // 设置 chat 相关
                        chatId.value = (_a = appInfo.chat) === null || _a === void 0 ? void 0 : _a.chat_id;
                        // 设置 model 相关
                        modelId.value = (_b = appInfo.model) === null || _b === void 0 ? void 0 : _b.model_id;
                        modelName.value = (_c = appInfo.model) === null || _c === void 0 ? void 0 : _c.name;
                        modelCreatedAt.value = new Date((_d = appInfo.model) === null || _d === void 0 ? void 0 : _d.created_at).getTime();
                        modelAvatarUrl.value = (_e = appInfo.model) === null || _e === void 0 ? void 0 : _e.avatar_url;
                        modelIndexStatus.value = ((_h = (_g = (_f = appInfo.model) === null || _f === void 0 ? void 0 : _f.resource) === null || _g === void 0 ? void 0 : _g.documents) === null || _h === void 0 ? void 0 : _h.some(function (_a) {
                            var indexStatus = _a.indexStatus;
                            return indexStatus !== 2;
                        }))
                            ? 1
                            : 2;
                        summaryMessages.value =
                            ((_m = (_l = (_k = (_j = appInfo.model) === null || _j === void 0 ? void 0 : _j.resource) === null || _k === void 0 ? void 0 : _k.documents) === null || _l === void 0 ? void 0 : _l.filter(function (_a) {
                                var indexStatus = _a.indexStatus;
                                return indexStatus === 2;
                            })) === null || _m === void 0 ? void 0 : _m.map(function (_a) {
                                var name = _a.name, _b = _a.summary, questions = _b.questions, summary = _b.summary;
                                var message = "### ".concat(name, "\n").concat(summary, "\nHere are three example questions you may have about this file:\n").concat(questions
                                    .map(function (q) { return "[".concat(q, "](question::").concat(encodeURIComponent(q), ")"); })
                                    .join('\n'));
                                return {
                                    id: uuidv4(),
                                    sender: 'ai',
                                    message: message,
                                };
                            })) || [];
                        if (((_o = appInfo === null || appInfo === void 0 ? void 0 : appInfo.messages) === null || _o === void 0 ? void 0 : _o.length) > 0) {
                            chatHistory = ((_p = appInfo === null || appInfo === void 0 ? void 0 : appInfo.message) === null || _p === void 0 ? void 0 : _p.map(function (_a) {
                                var id = _a.id, sender_type = _a.sender_type, text = _a.text, created_at = _a.created_at;
                                return ({
                                    id: id,
                                    sender: sender_type === 'model' ? 'ai' : 'user',
                                    message: text,
                                    createdAt: new Date(created_at).getTime(),
                                });
                            })) || [];
                            chatList.value = chatHistory;
                        }
                        if ((_q = appInfo.model) === null || _q === void 0 ? void 0 : _q.greeting) {
                            message = (_r = appInfo.model) === null || _r === void 0 ? void 0 : _r.greeting;
                            chatList.value = __spreadArray(__spreadArray([], chatList.value, true), [
                                { id: uuidv4(), sender: 'ai', message: message, createdAt: Date.now() },
                            ], false);
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _s.sent();
                        console.log('initApp error:', error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    }

    var Button = j('button')(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  min-width: 64px;\n  height: 30px;\n  padding: 4px 10px;\n  font-size: 14px;\n  font-weight: 600;\n  color: white;\n  background-color: #00ab55;\n  border: 0;\n  border-radius: 8px;\n  outline: none;\n  transition: background-color 0.2s ease-in-out;\n  cursor: pointer;\n\n  &:hover:enabled {\n    background-color: #009a4d;\n  }\n\n  &:disabled {\n    cursor: not-allowed;\n    color: rgba(0, 0, 0, 0.25);\n    background-color: rgba(0, 0, 0, 0.04);\n  }\n"], ["\n  min-width: 64px;\n  height: 30px;\n  padding: 4px 10px;\n  font-size: 14px;\n  font-weight: 600;\n  color: white;\n  background-color: #00ab55;\n  border: 0;\n  border-radius: 8px;\n  outline: none;\n  transition: background-color 0.2s ease-in-out;\n  cursor: pointer;\n\n  &:hover:enabled {\n    background-color: #009a4d;\n  }\n\n  &:disabled {\n    cursor: not-allowed;\n    color: rgba(0, 0, 0, 0.25);\n    background-color: rgba(0, 0, 0, 0.04);\n  }\n"])));
    var templateObject_1$5;

    var IconButton = j('button')(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  outline: 0;\n  border: 0;\n  margin: 0;\n  padding: 0;\n  width: 40px;\n  height: 40px;\n  color: #637381;\n  background-color: transparent;\n  border-radius: 50%;\n  cursor: pointer;\n  user-select: none;\n  vertical-align: middle;\n  text-align: center;\n  text-decoration: none;\n  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n\n  &:hover {\n    background-color: rgba(99, 115, 129, 0.08);\n  }\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  outline: 0;\n  border: 0;\n  margin: 0;\n  padding: 0;\n  width: 40px;\n  height: 40px;\n  color: #637381;\n  background-color: transparent;\n  border-radius: 50%;\n  cursor: pointer;\n  user-select: none;\n  vertical-align: middle;\n  text-align: center;\n  text-decoration: none;\n  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n\n  &:hover {\n    background-color: rgba(99, 115, 129, 0.08);\n  }\n"])));
    var templateObject_1$4;

    var STAR_LABEL_ID_MAP = {
        1: '01GTRNT0B4QYG97NMV2CWBBK53',
        2: '01GTRNW0DA1RQY3JCX5YEWAEWA',
        3: '01GTRP34FS3T7JBMN050HSWJ2W',
        4: '01GTRPTF806RG8E4BDECCTDA45',
        5: '01GTRPTSGPZM5R6XZZBT1RZ6TM',
    };

    var Layout = j('div')(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  display: flex;\n  & > :not([hidden]) ~ :not([hidden]) {\n    margin-left: 8px;\n  }\n"], ["\n  display: flex;\n  & > :not([hidden]) ~ :not([hidden]) {\n    margin-left: 8px;\n  }\n"])));
    var ThumbIcon = function (_a) {
        var _b = _a.isUp, isUp = _b === void 0 ? false : _b, _c = _a.isActive, isActive = _c === void 0 ? false : _c;
        var fillUp = isActive ? '#36B37E' : 'currentColor';
        var fillDown = isActive ? '#FFAB00' : 'currentColor';
        // return (
        //   <svg
        //     xmlns="http://www.w3.org/2000/svg"
        //     viewBox="0 0 24 24"
        //     fill={isUp ? fillUp : fillDown}
        //     width="24px"
        //     height="24px"
        //     style={{ ...(!isUp && { transform: 'rotateX(180deg)' }) }}
        //   >
        //     <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
        //   </svg>
        // )
        return (y$1("svg", { xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true", role: "img", width: "24px", height: "24px", viewBox: "0 0 24 24", style: __assign({}, (!isUp && { transform: 'rotateX(180deg)' })) },
            y$1("path", { fill: isUp ? fillUp : fillDown, d: "M23 10a2 2 0 0 0-2-2h-6.32l.96-4.57c.02-.1.03-.21.03-.32c0-.41-.17-.79-.44-1.06L14.17 1L7.59 7.58C7.22 7.95 7 8.45 7 9v10a2 2 0 0 0 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2M1 21h4V9H1v12Z" })));
    };
    var RefreshIcon = function () { return (y$1("svg", { xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true", role: "img", width: "24px", height: "24px", viewBox: "0 0 24 24" },
        y$1("path", { fill: "none", stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", d: "M10 16H5v5m9-13h5V3M4.583 9.003a8 8 0 0 1 14.331-1.027m.504 7.021a8 8 0 0 1-14.332 1.027" }))); };
    function FeedbackButtons(_a) {
        var _this = this;
        var messageId = _a.messageId;
        var _b = h(0), activeId = _b[0], setActiveId = _b[1];
        var latestActiveId = _$1(0);
        var putLabel = function (id) { return function () { return __awaiter(_this, void 0, void 0, function () {
            var labelId, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        latestActiveId.current = activeId;
                        setActiveId(id);
                        labelId = id === 1 ? STAR_LABEL_ID_MAP[5] : STAR_LABEL_ID_MAP[1];
                        data = {
                            message_id: messageId,
                            label_ids: [labelId],
                            feedback_text: '',
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, fetch('https://chat-api.withcontext.ai/v1/chat/message/label', {
                                method: 'PUT',
                                body: JSON.stringify(data),
                                headers: {
                                    'Content-Type': 'application/json',
                                    Authorization: "Bearer ".concat(getBearerToken()),
                                },
                            })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        _a.sent();
                        setActiveId(latestActiveId.current);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); }; };
        return (y$1(Layout, null,
            y$1(IconButton, { onClick: putLabel(1) },
                y$1(ThumbIcon, { isUp: true, isActive: activeId === 1 })),
            y$1(IconButton, { onClick: putLabel(2) },
                y$1(ThumbIcon, { isActive: activeId === 2 })),
            latestMyMessageId.value && (y$1(IconButton, { onClick: function () { return sendMessage(''); } },
                y$1(RefreshIcon, null)))));
    }
    var templateObject_1$3;

    function Loading(_a) {
        var _b = _a.width, width = _b === void 0 ? 50 : _b;
        return (y$1("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 40 10", width: width },
            y$1("circle", { fill: "currentColor", cx: "5", cy: "5", r: "4" },
                y$1("animate", { attributeName: "opacity", dur: "1s", values: "0;1;0", repeatCount: "indefinite", begin: ".1" })),
            y$1("circle", { fill: "currentColor", cx: "20", cy: "5", r: "4" },
                y$1("animate", { attributeName: "opacity", dur: "1s", values: "0;0.6;0", repeatCount: "indefinite", begin: ".2" })),
            y$1("circle", { fill: "currentColor", cx: "35", cy: "5", r: "4" },
                y$1("animate", { attributeName: "opacity", dur: "1s", values: "0;0.2;0", repeatCount: "indefinite", begin: ".3" }))));
    }

    var Wrapper = j('div')(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])));
    var Text = j('div')(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  margin-left: 4px;\n  font-size: 12px;\n"], ["\n  margin-left: 4px;\n  font-size: 12px;\n"])));
    function IndexStatus(_a) {
        var value = _a.value;
        if (value === 1) {
            return (y$1(Wrapper, { style: { color: '#212b36' } },
                y$1("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24" },
                    y$1("path", { fill: "currentColor", d: "M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z", opacity: ".5" }),
                    y$1("path", { fill: "currentColor", d: "M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z" },
                        y$1("animateTransform", { attributeName: "transform", dur: "1s", from: "0 12 12", repeatCount: "indefinite", to: "360 12 12", type: "rotate" }))),
                y$1(Text, null, "Indexing")));
        }
        if (value === 2) {
            return (y$1(Wrapper, { style: { color: '#00AB55' } },
                y$1("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24" },
                    y$1("path", { fill: "currentColor", d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zM9.29 16.29L5.7 12.7a.996.996 0 1 1 1.41-1.41L10 14.17l6.88-6.88a.996.996 0 1 1 1.41 1.41l-7.59 7.59a.996.996 0 0 1-1.41 0z" })),
                y$1(Text, null, "Indexed")));
        }
        if (value === 3) {
            return (y$1(Wrapper, { style: { color: '#FF5630' } },
                y$1("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24" },
                    y$1("path", { fill: "currentColor", d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" })),
                y$1(Text, null, "Failed")));
        }
        return null;
    }
    var templateObject_1$2, templateObject_2$1;

    var chatBox = u$1(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  height: inherit;\n  min-height: inherit;\n  max-height: inherit;\n"], ["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  height: inherit;\n  min-height: inherit;\n  max-height: inherit;\n"])));
    var header = u$1(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px 8px 16px 16px;\n  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px 8px 16px 16px;\n  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n"])));
    var leftHeader = u$1(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n"], ["\n  display: flex;\n  align-items: center;\n"])));
    var title = u$1(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  margin-left: 8px;\n"], ["\n  margin-left: 8px;\n"])));
    var chatContainer = u$1(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  padding: 24px;\n  overflow-y: auto;\n"], ["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  padding: 24px;\n  overflow-y: auto;\n"])));
    var leftMessage = u$1(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  align-self: flex-start;\n"], ["\n  align-self: flex-start;\n"])));
    var rightMessage = u$1(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  align-self: flex-end;\n"], ["\n  align-self: flex-end;\n"])));
    var inputContainer = u$1(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  height: 56px;\n  padding: 0px 8px;\n  box-shadow: 0 -4px 4px -4px rgb(0 0 0 / 0.05);\n"], ["\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  height: 56px;\n  padding: 0px 8px;\n  box-shadow: 0 -4px 4px -4px rgb(0 0 0 / 0.05);\n"])));
    var input = u$1(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  flex-grow: 1;\n  font-size: 16px;\n  color: rgb(31 41 55);\n  border: 0;\n  outline: none;\n\n  &:disabled {\n    background-color: inherit;\n  }\n"], ["\n  flex-grow: 1;\n  font-size: 16px;\n  color: rgb(31 41 55);\n  border: 0;\n  outline: none;\n\n  &:disabled {\n    background-color: inherit;\n  }\n"])));
    var Private = j('div')(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 18px;\n"], ["\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 18px;\n"])));
    function Chat() {
        var inputRef = _$1(null);
        var chatContainerRef = _$1(null);
        p$3(function () {
            var _a;
            scrollToBottom();
            (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        }, [chatList.value, latestChatMessage.value]);
        var scrollToBottom = function () {
            if (chatContainerRef.current) {
                chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
            }
        };
        var handleSend = function () {
            if (canSendMessage.value && inputRef.current) {
                var text = inputRef.current.value.trim();
                if (text) {
                    inputRef.current.value = '';
                    sendMessage(text);
                }
            }
        };
        var handleKeyPress = function (event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                handleSend();
            }
        };
        p$3(function () {
            if (appId.value)
                initApp(appId.value);
        }, [appId.value]);
        if (isPrivateApp.value) {
            return y$1(Private, null, "This model is not allowed to share.");
        }
        return (y$1("div", { class: chatBox },
            isAppInitialized.value && (y$1("div", { class: header },
                y$1("div", { class: leftHeader },
                    y$1(ModelAvatar, null),
                    y$1("div", { class: title }, modelName.value)),
                [1, 3].includes(modelIndexStatus.value) && (y$1(IndexStatus, { value: modelIndexStatus.value })))),
            y$1("div", { class: chatContainer, ref: chatContainerRef }, isAppInitialized.value ? (y$1(_$2, null,
                summaryMessages.value.map(function (_a, idx) {
                    var message = _a.message;
                    return (y$1(ChatItem, { key: idx, timestamp: modelCreatedAt.value }, message));
                }),
                chatList.value.map(function (_a, idx) {
                    var id = _a.id, sender = _a.sender, message = _a.message, createdAt = _a.createdAt;
                    return (y$1("div", { key: id, class: "".concat(sender === 'me' ? rightMessage : leftMessage) },
                        y$1(ChatItem, { isMe: sender === 'me', timestamp: createdAt }, message),
                        chatList.value.length === idx + 1 && sender === 'ai' && (y$1(FeedbackButtons, { messageId: id }))));
                }),
                latestChatMessage.value && (y$1("div", null,
                    y$1(ChatItem, { timestamp: Date.now() }, latestChatMessage.value))),
                isWaitingAnswer.value && (y$1("div", { style: { color: '#00AB55' } },
                    y$1(Loading, null))))) : (y$1("div", { style: {
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: '#00AB55',
                } },
                y$1(Loading, null)))),
            y$1("div", { class: inputContainer },
                y$1("input", { class: input, type: "text", ref: inputRef, placeholder: canTypeMessage.value
                        ? 'Type a message'
                        : 'This model has not indexed yet', onKeyPress: handleKeyPress, disabled: !canTypeMessage.value }),
                y$1("div", null,
                    y$1(Button, { onClick: handleSend, disabled: !canSendMessage.value }, "Send")))));
    }
    var templateObject_1$1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10;

    m(y$1);
    var WithContextWidgetSDK = {
        init: function (id) {
            var container = document.createElement('div');
            container.style.position = 'fixed';
            container.style.right = '20px';
            container.style.bottom = '20px';
            container.style.zIndex = '999';
            document.body.appendChild(container);
            console.log('init appId:', id);
            appId.value = id;
            B$1(y$1(App, null), container);
        },
    };
    function App() {
        var _a = h(false), showPopover = _a[0], setShowPopover = _a[1];
        return (y$1(_$2, null,
            y$1(LauncherButton, { isOpen: showPopover, onClick: function () { return setShowPopover(!showPopover); } }),
            showPopover && (y$1(Popover, null,
                y$1(Chat, null)))));
    }
    var Popover = j('div')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  right: 0;\n  bottom: 64px;\n  background-color: white;\n  border-radius: 12px;\n  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\n  overflow: hidden;\n  width: 400px;\n  min-height: 400px;\n  max-height: 80vh;\n  animation: slide-in ease 0.3s;\n\n  @keyframes slide-in {\n    from {\n      opacity: 0;\n      transform: translateY(20px);\n    }\n\n    to {\n      opacity: 1;\n      transform: translateY(0px);\n    }\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  right: 0;\n  bottom: 64px;\n  background-color: white;\n  border-radius: 12px;\n  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\n  overflow: hidden;\n  width: 400px;\n  min-height: 400px;\n  max-height: 80vh;\n  animation: slide-in ease 0.3s;\n\n  @keyframes slide-in {\n    from {\n      opacity: 0;\n      transform: translateY(20px);\n    }\n\n    to {\n      opacity: 1;\n      transform: translateY(0px);\n    }\n  }\n"])));
    var templateObject_1;

    return WithContextWidgetSDK;

})();
