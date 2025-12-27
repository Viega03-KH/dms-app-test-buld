import{k as f,P as u}from"./index-BtXiaCr0.js";/**
 * @license lucide-vue-next v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=f("square-pen",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]]);/**
 * @license lucide-vue-next v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=f("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function y(c={},n={}){const s=u({...c}),e=u({});return{form:s,errors:e,validate:()=>{let t=!0;for(const a in n){const r=s[a],o=n[a];if(e[a]="",o.required&&(!r||r.toString().trim()==="")&&(e[a]=o.message||"Majburiy maydon",t=!1),o.custom&&typeof o.custom=="function"){const i=o.custom(r,s);i&&(e[a]=i,t=!1)}}return t},resetForm:()=>{Object.assign(s,c),Object.keys(e).forEach(t=>e[t]="")}}}export{p as S,v as X,y as u};
