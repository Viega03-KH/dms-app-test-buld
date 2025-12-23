import{k as u,N as f}from"./index-CkYps7b0.js";/**
 * @license lucide-vue-next v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=u("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function b(a={},n={}){const r=f({...a}),t=f({});return{form:r,errors:t,validate:()=>{let e=!0;for(const o in n){const c=r[o],s=n[o];if(t[o]="",s.required&&(!c||c.toString().trim()==="")&&(t[o]=s.message||"Majburiy maydon",e=!1),s.custom&&typeof s.custom=="function"){const i=s.custom(c,r);i&&(t[o]=i,e=!1)}}return e},resetForm:()=>{Object.assign(r,a),Object.keys(t).forEach(e=>t[e]="")}}}export{y as X,b as u};
