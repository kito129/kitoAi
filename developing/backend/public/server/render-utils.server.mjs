import './polyfills.server.mjs';
import{Oa as u,Pa as g,Qa as h,Ra as y,Sa as C,Ta as E,qb as w,rb as P,tb as N,ub as A,vb as I,yb as S,zb as T}from"./chunk-NZKVMRRG.mjs";import{f as l,g as d,h as c}from"./chunk-X6HNX3OH.mjs";function f(e,n,i,o=""){return d(this,null,function*(){for(let r of e){let{path:t,redirectTo:a,loadChildren:R,children:m}=r;if(t===void 0)continue;let s=x(o,t);if(a!==void 0){yield{route:s,success:!1,redirect:!0};continue}if(/[:*]/.test(t)){yield{route:s,success:!1,redirect:!1};continue}if(yield{route:s,success:!0,redirect:!1},m?.length&&(yield*c(f(m,n,i,s))),R){let p=yield new l(S(r,n,i).toPromise());if(p){let{routes:_,injector:L=i}=p;yield*c(f(_,n,L,s))}}}})}function v(e,n){return d(this,null,function*(){let i=h(E,"server",[{provide:w,useValue:{document:n,url:""}},{provide:u,useFactory:()=>{class o extends u{ignoredLogs=new Set(["Angular is running in development mode."]);log(t){this.ignoredLogs.has(t)||super.log(t)}}return new o}},...P])();try{let o;V(e)?o=yield new l(e()):o=(yield new l(i.bootstrapModule(e))).injector.get(y),yield new l(C(o));let r=o.injector,t=r.get(T),a=r.get(g);yield*c(f(t.config,a,r))}finally{i.destroy()}})}function V(e){return typeof e=="function"&&!("\u0275mod"in e)}function x(...e){return e.filter(Boolean).join("/")}export{v as extractRoutes,I as renderApplication,A as renderModule,u as \u0275Console,N as \u0275SERVER_CONTEXT};
