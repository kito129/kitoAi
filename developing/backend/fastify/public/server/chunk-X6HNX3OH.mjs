import './polyfills.server.mjs';
var s=Object.defineProperty,t=Object.defineProperties;var u=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var l=(b,a)=>{if(a=Symbol[b])return a;throw Error("Symbol."+b+" is not defined")};var p=(b,a,c)=>a in b?s(b,a,{enumerable:!0,configurable:!0,writable:!0,value:c}):b[a]=c,x=(b,a)=>{for(var c in a||={})v.call(a,c)&&p(b,c,a[c]);if(o)for(var c of o(a))w.call(a,c)&&p(b,c,a[c]);return b},y=(b,a)=>t(b,u(a));var z=(b=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(b,{get:(a,c)=>(typeof require<"u"?require:a)[c]}):b)(function(b){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+b+'" is not supported')});var A=(b,a)=>()=>(a||b((a={exports:{}}).exports,a),a.exports);var B=(b,a,c)=>new Promise((i,g)=>{var e=d=>{try{h(c.next(d))}catch(j){g(j)}},f=d=>{try{h(c.throw(d))}catch(j){g(j)}},h=d=>d.done?i(d.value):Promise.resolve(d.value).then(e,f);h((c=c.apply(b,a)).next())}),q=function(b,a){this[0]=b,this[1]=a},C=(b,a,c)=>{var i=(f,h,d,j)=>{try{var m=c[f](h),n=(h=m.value)instanceof q,r=m.done;Promise.resolve(n?h[0]:h).then(k=>n?i(f==="return"?f:"next",h[1]?{done:k.done,value:k.value}:k,d,j):d({value:k,done:r})).catch(k=>i("throw",k,d,j))}catch(k){j(k)}},g=f=>e[f]=h=>new Promise((d,j)=>i(f,h,d,j)),e={};return c=c.apply(b,a),e[Symbol.asyncIterator]=()=>e,g("next"),g("throw"),g("return"),e},D=b=>{var a=b[l("asyncIterator")],c=!1,i,g={};return a==null?(a=b[l("iterator")](),i=e=>g[e]=f=>a[e](f)):(a=a.call(b),i=e=>g[e]=f=>{if(c){if(c=!1,e==="throw")throw f;return f}return c=!0,{done:!1,value:new q(new Promise(h=>{var d=a[e](f);if(!(d instanceof Object))throw TypeError("Object expected");h(d)}),1)}}),g[l("iterator")]=()=>g,i("next"),"throw"in a?i("throw"):g.throw=e=>{throw e},"return"in a&&i("return"),g};export{x as a,y as b,z as c,A as d,B as e,q as f,C as g,D as h};
