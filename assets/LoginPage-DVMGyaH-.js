import{u as Rt,d as Bt,r as Dt,c as j,t as S,o as pt,i as Pe,a as O,w as se,b as xt,e as Y,f as Ce,n as ee,g as zt,h as Lt,p as gt,s as $t,j as Wt,k as Ze,_ as qt,l as Gt,m as he,q as we,v as Ht,x as Kt,V as Yt,F as Zt,y as Jt,z as Xt,A as Qt,B as er,C as tr}from"./index-CPpwfb8n.js";import{V as at}from"./VTextField-C-ijNeJR.js";const rr="/gilash/assets/capaUserForm-CMrtsgy1.png",nr="/gilash/assets/LogoGiHonorato-DebZZ3-7.png",ir=Rt(),ar=Bt("user",{state:()=>({user:{name:"",email:"",password:"",securityPhrase:""}}),actions:{createUser(){},loginUser(e){if(e.email==="admin@gmail.com"&&e.password==="Troca@2023")this.user={...this.user,email:e.email,password:e.password,name:"Admin"},this.setDataUser(),Dt.push("/home");else return ir.IncorrectPassword(),!1},updateUser(){},setDataUser(){localStorage.setItem("userData",JSON.stringify(this.user))},getDataUser(){let e=localStorage.getItem("userData");e&&(this.user=JSON.parse(e))}}});/**
  * vee-validate v4.13.2
  * (c) 2024 Abdelrahman Awad
  * @license MIT
  */function z(e){return typeof e=="function"}function yt(e){return e==null}const ce=e=>e!==null&&!!e&&typeof e=="object"&&!Array.isArray(e);function Je(e){return Number(e)>=0}function lr(e){const t=parseFloat(e);return isNaN(t)?e:t}function or(e){return typeof e=="object"&&e!==null}function ur(e){return e==null?e===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}function lt(e){if(!or(e)||ur(e)!=="[object Object]")return!1;if(Object.getPrototypeOf(e)===null)return!0;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function Oe(e,t){return Object.keys(t).forEach(r=>{if(lt(t[r])&&lt(e[r])){e[r]||(e[r]={}),Oe(e[r],t[r]);return}e[r]=t[r]}),e}function Ve(e){const t=e.split(".");if(!t.length)return"";let r=String(t[0]);for(let a=1;a<t.length;a++){if(Je(t[a])){r+=`[${t[a]}]`;continue}r+=`.${t[a]}`}return r}const sr={};function cr(e){return sr[e]}function ot(e,t,r){typeof r.value=="object"&&(r.value=w(r.value)),!r.enumerable||r.get||r.set||!r.configurable||!r.writable||t==="__proto__"?Object.defineProperty(e,t,r):e[t]=r.value}function w(e){if(typeof e!="object")return e;var t=0,r,a,o,l=Object.prototype.toString.call(e);if(l==="[object Object]"?o=Object.create(e.__proto__||null):l==="[object Array]"?o=Array(e.length):l==="[object Set]"?(o=new Set,e.forEach(function(m){o.add(w(m))})):l==="[object Map]"?(o=new Map,e.forEach(function(m,f){o.set(w(f),w(m))})):l==="[object Date]"?o=new Date(+e):l==="[object RegExp]"?o=new RegExp(e.source,e.flags):l==="[object DataView]"?o=new e.constructor(w(e.buffer)):l==="[object ArrayBuffer]"?o=e.slice(0):l.slice(-6)==="Array]"&&(o=new e.constructor(e)),o){for(a=Object.getOwnPropertySymbols(e);t<a.length;t++)ot(o,a[t],Object.getOwnPropertyDescriptor(e,a[t]));for(t=0,a=Object.getOwnPropertyNames(e);t<a.length;t++)Object.hasOwnProperty.call(o,r=a[t])&&o[r]===e[r]||ot(o,r,Object.getOwnPropertyDescriptor(e,r))}return o||e}const Xe=Symbol("vee-validate-form"),dr=Symbol("vee-validate-field-instance"),ut=Symbol("Default empty value"),fr=typeof window<"u";function He(e){return z(e)&&!!e.__locatorRef}function Z(e){return!!e&&z(e.parse)&&e.__type==="VVTypedSchema"}function Ne(e){return!!e&&z(e.validate)}function bt(e){return e==="checkbox"||e==="radio"}function vr(e){return ce(e)||Array.isArray(e)}function mr(e){return Array.isArray(e)?e.length===0:ce(e)&&Object.keys(e).length===0}function Me(e){return/^\[.+\]$/i.test(e)}function hr(e){return Vt(e)&&e.multiple}function Vt(e){return e.tagName==="SELECT"}function pr(e){return _t(e)&&e.target&&"submit"in e.target}function _t(e){return e?!!(typeof Event<"u"&&z(Event)&&e instanceof Event||e&&e.srcElement):!1}function B(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var r,a,o;if(Array.isArray(e)){if(r=e.length,r!=t.length)return!1;for(a=r;a--!==0;)if(!B(e[a],t[a]))return!1;return!0}if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(a of e.entries())if(!t.has(a[0]))return!1;for(a of e.entries())if(!B(a[1],t.get(a[0])))return!1;return!0}if(st(e)&&st(t))return!(e.size!==t.size||e.name!==t.name||e.lastModified!==t.lastModified||e.type!==t.type);if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(a of e.entries())if(!t.has(a[0]))return!1;return!0}if(ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(r=e.length,r!=t.length)return!1;for(a=r;a--!==0;)if(e[a]!==t[a])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();for(o=Object.keys(e),r=o.length,a=r;a--!==0;){var l=o[a];if(!B(e[l],t[l]))return!1}return!0}return e!==e&&t!==t}function st(e){return fr?e instanceof File:!1}function Qe(e){return Me(e)?e.replace(/\[|\]/gi,""):e}function L(e,t,r){return e?Me(t)?e[Qe(t)]:(t||"").split(/\.|\[(\d+)\]/).filter(Boolean).reduce((o,l)=>vr(o)&&l in o?o[l]:r,e):r}function ie(e,t,r){if(Me(t)){e[Qe(t)]=r;return}const a=t.split(/\.|\[(\d+)\]/).filter(Boolean);let o=e;for(let l=0;l<a.length;l++){if(l===a.length-1){o[a[l]]=r;return}(!(a[l]in o)||yt(o[a[l]]))&&(o[a[l]]=Je(a[l+1])?[]:{}),o=o[a[l]]}}function qe(e,t){if(Array.isArray(e)&&Je(t)){e.splice(Number(t),1);return}ce(e)&&delete e[t]}function ct(e,t){if(Me(t)){delete e[Qe(t)];return}const r=t.split(/\.|\[(\d+)\]/).filter(Boolean);let a=e;for(let l=0;l<r.length;l++){if(l===r.length-1){qe(a,r[l]);break}if(!(r[l]in a)||yt(a[r[l]]))break;a=a[r[l]]}const o=r.map((l,m)=>L(e,r.slice(0,m).join(".")));for(let l=o.length-1;l>=0;l--)if(mr(o[l])){if(l===0){qe(e,r[0]);continue}qe(o[l-1],r[l-1])}}function W(e){return Object.keys(e)}function Ot(e,t=void 0){const r=Ze();return(r==null?void 0:r.provides[e])||Wt(e,t)}function gr(e,t,r){if(Array.isArray(e)){const a=[...e],o=a.findIndex(l=>B(l,t));return o>=0?a.splice(o,1):a.push(t),a}return B(e,t)?r:t}function dt(e,t=0){let r=null,a=[];return function(...o){return r&&clearTimeout(r),r=setTimeout(()=>{const l=e(...o);a.forEach(m=>m(l)),a=[]},t),new Promise(l=>a.push(l))}}function yr(e,t){return ce(t)&&t.number?lr(e):e}function Ke(e,t){let r;return async function(...o){const l=e(...o);r=l;const m=await l;return l!==r?m:(r=void 0,t(m,o))}}function Ye(e){return Array.isArray(e)?e:e?[e]:[]}function Ie(e,t){const r={};for(const a in e)t.includes(a)||(r[a]=e[a]);return r}function br(e){let t=null,r=[];return function(...a){const o=ee(()=>{if(t!==o)return;const l=e(...a);r.forEach(m=>m(l)),r=[],t=null});return t=o,new Promise(l=>r.push(l))}}function Ge(e){if(St(e))return e._value}function St(e){return"_value"in e}function Vr(e){return e.type==="number"||e.type==="range"?Number.isNaN(e.valueAsNumber)?e.value:e.valueAsNumber:e.value}function Te(e){if(!_t(e))return e;const t=e.target;if(bt(t.type)&&St(t))return Ge(t);if(t.type==="file"&&t.files){const r=Array.from(t.files);return t.multiple?r:r[0]}if(hr(t))return Array.from(t.options).filter(r=>r.selected&&!r.disabled).map(Ge);if(Vt(t)){const r=Array.from(t.options).find(a=>a.selected);return r?Ge(r):t.value}return Vr(t)}function At(e){const t={};return Object.defineProperty(t,"_$$isNormalized",{value:!0,writable:!1,enumerable:!1,configurable:!1}),e?ce(e)&&e._$$isNormalized?e:ce(e)?Object.keys(e).reduce((r,a)=>{const o=_r(e[a]);return e[a]!==!1&&(r[a]=ft(o)),r},t):typeof e!="string"?t:e.split("|").reduce((r,a)=>{const o=Or(a);return o.name&&(r[o.name]=ft(o.params)),r},t):t}function _r(e){return e===!0?[]:Array.isArray(e)||ce(e)?e:[e]}function ft(e){const t=r=>typeof r=="string"&&r[0]==="@"?Sr(r.slice(1)):r;return Array.isArray(e)?e.map(t):e instanceof RegExp?[e]:Object.keys(e).reduce((r,a)=>(r[a]=t(e[a]),r),{})}const Or=e=>{let t=[];const r=e.split(":")[0];return e.includes(":")&&(t=e.split(":").slice(1).join(":").split(",")),{name:r,params:t}};function Sr(e){const t=r=>L(r,e)||r[e];return t.__locatorRef=e,t}function Ar(e){return Array.isArray(e)?e.filter(He):W(e).filter(t=>He(e[t])).map(t=>e[t])}const Er={generateMessage:({field:e})=>`${e} is not valid.`,bails:!0,validateOnBlur:!0,validateOnChange:!0,validateOnInput:!1,validateOnModelUpdate:!0};let jr=Object.assign({},Er);const _e=()=>jr;async function Et(e,t,r={}){const a=r==null?void 0:r.bails,o={name:(r==null?void 0:r.name)||"{field}",rules:t,label:r==null?void 0:r.label,bails:a??!0,formData:(r==null?void 0:r.values)||{}},l=await wr(o,e);return Object.assign(Object.assign({},l),{valid:!l.errors.length})}async function wr(e,t){const r=e.rules;if(Z(r)||Ne(r))return Fr(t,Object.assign(Object.assign({},e),{rules:r}));if(z(r)||Array.isArray(r)){const f={field:e.label||e.name,name:e.name,label:e.label,form:e.formData,value:t},s=Array.isArray(r)?r:[r],c=s.length,A=[];for(let b=0;b<c;b++){const F=s[b],g=await F(t,f);if(!(typeof g!="string"&&!Array.isArray(g)&&g)){if(Array.isArray(g))A.push(...g);else{const J=typeof g=="string"?g:wt(f);A.push(J)}if(e.bails)return{errors:A}}}return{errors:A}}const a=Object.assign(Object.assign({},e),{rules:At(r)}),o=[],l=Object.keys(a.rules),m=l.length;for(let f=0;f<m;f++){const s=l[f],c=await Pr(a,t,{name:s,params:a.rules[s]});if(c.error&&(o.push(c.error),e.bails))return{errors:o}}return{errors:o}}function Ir(e){return!!e&&e.name==="ValidationError"}function jt(e){return{__type:"VVTypedSchema",async parse(r,a){var o;try{return{output:await e.validate(r,{abortEarly:!1,context:(a==null?void 0:a.formData)||{}}),errors:[]}}catch(l){if(!Ir(l))throw l;if(!(!((o=l.inner)===null||o===void 0)&&o.length)&&l.errors.length)return{errors:[{path:l.path,errors:l.errors}]};const m=l.inner.reduce((f,s)=>{const c=s.path||"";return f[c]||(f[c]={errors:[],path:c}),f[c].errors.push(...s.errors),f},{});return{errors:Object.values(m)}}}}}async function Fr(e,t){const a=await(Z(t.rules)?t.rules:jt(t.rules)).parse(e,{formData:t.formData}),o=[];for(const l of a.errors)l.errors.length&&o.push(...l.errors);return{value:a.value,errors:o}}async function Pr(e,t,r){const a=cr(r.name);if(!a)throw new Error(`No such validator '${r.name}' exists.`);const o=Cr(r.params,e.formData),l={field:e.label||e.name,name:e.name,label:e.label,value:t,form:e.formData,rule:Object.assign(Object.assign({},r),{params:o})},m=await a(t,o,l);return typeof m=="string"?{error:m}:{error:m?void 0:wt(l)}}function wt(e){const t=_e().generateMessage;return t?t(e):"Field is invalid"}function Cr(e,t){const r=a=>He(a)?a(t):a;return Array.isArray(e)?e.map(r):Object.keys(e).reduce((a,o)=>(a[o]=r(e[o]),a),{})}async function Nr(e,t){const a=await(Z(e)?e:jt(e)).parse(w(t)),o={},l={};for(const m of a.errors){const f=m.errors,s=(m.path||"").replace(/\["(\d+)"\]/g,(c,A)=>`[${A}]`);o[s]={valid:!f.length,errors:f},f.length&&(l[s]=f[0])}return{valid:!a.errors.length,results:o,errors:l,values:a.value,source:"schema"}}async function Tr(e,t,r){const o=W(e).map(async c=>{var A,b,F;const g=(A=r==null?void 0:r.names)===null||A===void 0?void 0:A[c],T=await Et(L(t,c),e[c],{name:(g==null?void 0:g.name)||c,label:g==null?void 0:g.label,values:t,bails:(F=(b=r==null?void 0:r.bailsMap)===null||b===void 0?void 0:b[c])!==null&&F!==void 0?F:!0});return Object.assign(Object.assign({},T),{path:c})});let l=!0;const m=await Promise.all(o),f={},s={};for(const c of m)f[c.path]={valid:c.valid,errors:c.errors},c.valid||(l=!1,s[c.path]=c.errors[0]);return{valid:l,results:f,errors:s,source:"schema"}}let vt=0;function Mr(e,t){const{value:r,initialValue:a,setInitialValue:o}=Ur(e,t.modelValue,t.form);if(!t.form){let s=function(g){var T;"value"in g&&(r.value=g.value),"errors"in g&&A(g.errors),"touched"in g&&(F.touched=(T=g.touched)!==null&&T!==void 0?T:F.touched),"initialValue"in g&&o(g.initialValue)};const{errors:c,setErrors:A}=Br(),b=vt>=Number.MAX_SAFE_INTEGER?0:++vt,F=Rr(r,a,c,t.schema);return{id:b,path:e,value:r,initialValue:a,meta:F,flags:{pendingUnmount:{[b]:!1},pendingReset:!1},errors:c,setState:s}}const l=t.form.createPathState(e,{bails:t.bails,label:t.label,type:t.type,validate:t.validate,schema:t.schema}),m=j(()=>l.errors);function f(s){var c,A,b;"value"in s&&(r.value=s.value),"errors"in s&&((c=t.form)===null||c===void 0||c.setFieldError(O(e),s.errors)),"touched"in s&&((A=t.form)===null||A===void 0||A.setFieldTouched(O(e),(b=s.touched)!==null&&b!==void 0?b:!1)),"initialValue"in s&&o(s.initialValue)}return{id:Array.isArray(l.id)?l.id[l.id.length-1]:l.id,path:e,value:r,errors:m,meta:l,initialValue:a,flags:l.__flags,setState:f}}function Ur(e,t,r){const a=Y(O(t));function o(){return r?L(r.initialValues.value,O(e),O(a)):O(a)}function l(c){if(!r){a.value=c;return}r.setFieldInitialValue(O(e),c,!0)}const m=j(o);if(!r)return{value:Y(o()),initialValue:m,setInitialValue:l};const f=kr(t,r,m,e);return r.stageInitialValue(O(e),f,!0),{value:j({get(){return L(r.values,O(e))},set(c){r.setFieldValue(O(e),c,!1)}}),initialValue:m,setInitialValue:l}}function kr(e,t,r,a){return Pe(e)?O(e):e!==void 0?e:L(t.values,O(a),O(r))}function Rr(e,t,r,a){const o=j(()=>{var m,f,s;return(s=(f=(m=S(a))===null||m===void 0?void 0:m.describe)===null||f===void 0?void 0:f.call(m).required)!==null&&s!==void 0?s:!1}),l=Ce({touched:!1,pending:!1,valid:!0,required:o,validated:!!O(r).length,initialValue:j(()=>O(t)),dirty:j(()=>!B(O(e),O(t)))});return se(r,m=>{l.valid=!m.length},{immediate:!0,flush:"sync"}),l}function Br(){const e=Y([]);return{errors:e,setErrors:t=>{e.value=Ye(t)}}}function mt(e,t,r){return bt(void 0)?xr(e,t):It(e,t)}function It(e,t,r){const{initialValue:a,validateOnMount:o,bails:l,type:m,checkedValue:f,label:s,validateOnValueUpdate:c,uncheckedValue:A,controlled:b,keepValueOnUnmount:F,syncVModel:g,form:T}=Dr(),J=b?Ot(Xe):void 0,_=T||J,X=j(()=>Ve(S(e))),H=j(()=>{if(S(_==null?void 0:_.schema))return;const V=O(t);return Ne(V)||Z(V)||z(V)||Array.isArray(V)?V:At(V)}),Se=!z(H.value)&&Z(S(t)),{id:pe,value:Q,initialValue:ae,meta:D,setState:de,errors:ge,flags:R}=Mr(X,{modelValue:a,form:_,bails:l,label:s,type:m,validate:H.value?M:void 0,schema:Se?t:void 0}),fe=j(()=>ge.value[0]);g&&zr({value:Q,prop:g,handleChange:Ee,shouldValidate:()=>c&&!R.pendingReset});const Ue=(v,V=!1)=>{D.touched=!0,V&&te()};async function Ae(v){var V,N;if(_!=null&&_.validateSchema){const{results:E}=await _.validateSchema(v);return(V=E[S(X)])!==null&&V!==void 0?V:{valid:!0,errors:[]}}return H.value?Et(Q.value,H.value,{name:S(X),label:S(s),values:(N=_==null?void 0:_.values)!==null&&N!==void 0?N:{},bails:l}):{valid:!0,errors:[]}}const te=Ke(async()=>(D.pending=!0,D.validated=!0,Ae("validated-only")),v=>(R.pendingUnmount[$.id]||(de({errors:v.errors}),D.pending=!1,D.valid=v.valid),v)),q=Ke(async()=>Ae("silent"),v=>(D.valid=v.valid,v));function M(v){return(v==null?void 0:v.mode)==="silent"?q():te()}function Ee(v,V=!0){const N=Te(v);ve(N,V)}pt(()=>{if(o)return te();(!_||!_.validateSchema)&&q()});function le(v){D.touched=v}function oe(v){var V;const N=v&&"value"in v?v.value:ae.value;de({value:w(N),initialValue:w(N),touched:(V=v==null?void 0:v.touched)!==null&&V!==void 0?V:!1,errors:(v==null?void 0:v.errors)||[]}),D.pending=!1,D.validated=!1,q()}const je=Ze();function ve(v,V=!0){Q.value=je&&g?yr(v,je.props.modelModifiers):v,(V?te:q)()}function tt(v){de({errors:Array.isArray(v)?v:[v]})}const ye=j({get(){return Q.value},set(v){ve(v,c)}}),$={id:pe,name:X,label:s,value:ye,meta:D,errors:ge,errorMessage:fe,type:m,checkedValue:f,uncheckedValue:A,bails:l,keepValueOnUnmount:F,resetField:oe,handleReset:()=>oe(),validate:M,handleChange:Ee,handleBlur:Ue,setState:de,setTouched:le,setErrors:tt,setValue:ve};if(gt(dr,$),Pe(t)&&typeof O(t)!="function"&&se(t,(v,V)=>{B(v,V)||(D.validated?te():q())},{deep:!0}),!_)return $;const ke=j(()=>{const v=H.value;return!v||z(v)||Ne(v)||Z(v)||Array.isArray(v)?{}:Object.keys(v).reduce((V,N)=>{const E=Ar(v[N]).map(re=>re.__locatorRef).reduce((re,K)=>{const ne=L(_.values,K)||_.values[K];return ne!==void 0&&(re[K]=ne),re},{});return Object.assign(V,E),V},{})});return se(ke,(v,V)=>{if(!Object.keys(v).length)return;!B(v,V)&&(D.validated?te():q())}),xt(()=>{var v;const V=(v=S($.keepValueOnUnmount))!==null&&v!==void 0?v:S(_.keepValuesOnUnmount),N=S(X);if(V||!_||R.pendingUnmount[$.id]){_==null||_.removePathState(N,pe);return}R.pendingUnmount[$.id]=!0;const E=_.getPathState(N);if(Array.isArray(E==null?void 0:E.id)&&(E!=null&&E.multiple)?E!=null&&E.id.includes($.id):(E==null?void 0:E.id)===$.id){if(E!=null&&E.multiple&&Array.isArray(E.value)){const K=E.value.findIndex(ne=>B(ne,S($.checkedValue)));if(K>-1){const ne=[...E.value];ne.splice(K,1),_.setFieldValue(N,ne)}Array.isArray(E.id)&&E.id.splice(E.id.indexOf($.id),1)}else _.unsetPathValue(S(X));_.removePathState(N,pe)}}),$}function Dr(e){return Object.assign(Object.assign({},{initialValue:void 0,validateOnMount:!1,bails:!0,label:void 0,validateOnValueUpdate:!0,keepValueOnUnmount:void 0,syncVModel:!1,controlled:!0}),{initialValue:void 0})}function xr(e,t,r){const a=Ot(Xe),o=void 0,l=void 0;function m(f){const s=f.handleChange,c=j(()=>{const b=S(f.value),F=S(o);return Array.isArray(b)?b.findIndex(g=>B(g,F))>=0:B(F,b)});function A(b,F=!0){var g,T;if(c.value===((g=b==null?void 0:b.target)===null||g===void 0?void 0:g.checked)){F&&f.validate();return}const J=S(e),_=a==null?void 0:a.getPathState(J),X=Te(b);let H=(T=S(o))!==null&&T!==void 0?T:X;a&&(_!=null&&_.multiple)&&_.type==="checkbox"&&(H=gr(L(a.values,J)||[],H,void 0)),s(H,F)}return Object.assign(Object.assign({},f),{checked:c,checkedValue:o,uncheckedValue:l,handleChange:A})}return m(It(e,t))}function zr({prop:e,value:t,handleChange:r,shouldValidate:a}){const o=Ze();if(!o||!e)return;const l=typeof e=="string"?e:"modelValue",m=`update:${l}`;l in o.props&&(se(t,f=>{B(f,ht(o,l))||o.emit(m,f)}),se(()=>ht(o,l),f=>{if(f===ut&&t.value===void 0)return;const s=f===ut?void 0:f;B(s,t.value)||r(s,a())}))}function ht(e,t){if(e)return e.props[t]}let Lr=0;const Fe=["bails","fieldsCount","id","multiple","type","validate"];function Ft(e){const t=(e==null?void 0:e.initialValues)||{},r=Object.assign({},S(t)),a=O(e==null?void 0:e.validationSchema);return a&&Z(a)&&z(a.cast)?w(a.cast(r)||{}):w(r)}function $r(e){var t;const r=Lr++;let a=0;const o=Y(!1),l=Y(!1),m=Y(0),f=[],s=Ce(Ft(e)),c=Y([]),A=Y({}),b=Y({}),F=br(()=>{b.value=c.value.reduce((i,n)=>(i[Ve(S(n.path))]=n,i),{})});function g(i,n){const u=M(i);if(!u){typeof i=="string"&&(A.value[Ve(i)]=Ye(n));return}if(typeof i=="string"){const d=Ve(i);A.value[d]&&delete A.value[d]}u.errors=Ye(n),u.valid=!u.errors.length}function T(i){W(i).forEach(n=>{g(n,i[n])})}e!=null&&e.initialErrors&&T(e.initialErrors);const J=j(()=>{const i=c.value.reduce((n,u)=>(u.errors.length&&(n[u.path]=u.errors),n),{});return Object.assign(Object.assign({},A.value),i)}),_=j(()=>W(J.value).reduce((i,n)=>{const u=J.value[n];return u!=null&&u.length&&(i[n]=u[0]),i},{})),X=j(()=>c.value.reduce((i,n)=>(i[n.path]={name:n.path||"",label:n.label||""},i),{})),H=j(()=>c.value.reduce((i,n)=>{var u;return i[n.path]=(u=n.bails)!==null&&u!==void 0?u:!0,i},{})),Se=Object.assign({},(e==null?void 0:e.initialErrors)||{}),pe=(t=e==null?void 0:e.keepValuesOnUnmount)!==null&&t!==void 0?t:!1,{initialValues:Q,originalInitialValues:ae,setInitialValues:D}=qr(c,s,e),de=Wr(c,s,ae,_),ge=j(()=>c.value.reduce((i,n)=>{const u=L(s,n.path);return ie(i,n.path,u),i},{})),R=e==null?void 0:e.validationSchema;function fe(i,n){var u,d;const p=j(()=>L(Q.value,S(i))),y=b.value[S(i)],h=(n==null?void 0:n.type)==="checkbox"||(n==null?void 0:n.type)==="radio";if(y&&h){y.multiple=!0;const G=a++;return Array.isArray(y.id)?y.id.push(G):y.id=[y.id,G],y.fieldsCount++,y.__flags.pendingUnmount[G]=!1,y}const P=j(()=>L(s,S(i))),C=S(i),U=le.findIndex(G=>G===C);U!==-1&&le.splice(U,1);const I=j(()=>{var G,be,ze,Le;const $e=S(R);if(Z($e))return(be=(G=$e.describe)===null||G===void 0?void 0:G.call($e,S(i)).required)!==null&&be!==void 0?be:!1;const We=S(n==null?void 0:n.schema);return Z(We)&&(Le=(ze=We.describe)===null||ze===void 0?void 0:ze.call(We).required)!==null&&Le!==void 0?Le:!1}),k=a++,x=Ce({id:k,path:i,touched:!1,pending:!1,valid:!0,validated:!!(!((u=Se[C])===null||u===void 0)&&u.length),required:I,initialValue:p,errors:$t([]),bails:(d=n==null?void 0:n.bails)!==null&&d!==void 0?d:!1,label:n==null?void 0:n.label,type:(n==null?void 0:n.type)||"default",value:P,multiple:!1,__flags:{pendingUnmount:{[k]:!1},pendingReset:!1},fieldsCount:1,validate:n==null?void 0:n.validate,dirty:j(()=>!B(O(P),O(p)))});return c.value.push(x),b.value[C]=x,F(),_.value[C]&&!Se[C]&&ee(()=>{ue(C,{mode:"silent"})}),Pe(i)&&se(i,G=>{F();const be=w(P.value);b.value[G]=x,ee(()=>{ie(s,G,be)})}),x}const Ue=dt(it,5),Ae=dt(it,5),te=Ke(async i=>await(i==="silent"?Ue():Ae()),(i,[n])=>{const u=W(v.errorBag.value),p=[...new Set([...W(i.results),...c.value.map(y=>y.path),...u])].sort().reduce((y,h)=>{var P;const C=h,U=M(C)||Ee(C),I=((P=i.results[C])===null||P===void 0?void 0:P.errors)||[],k=S(U==null?void 0:U.path)||C,x=Gr({errors:I,valid:!I.length},y.results[k]);return y.results[k]=x,x.valid||(y.errors[k]=x.errors[0]),U&&A.value[k]&&delete A.value[k],U?(U.valid=x.valid,n==="silent"||n==="validated-only"&&!U.validated||g(U,x.errors),y):(g(k,I),y)},{valid:i.valid,results:{},errors:{},source:i.source});return i.values&&(p.values=i.values,p.source=i.source),W(p.results).forEach(y=>{var h;const P=M(y);P&&n!=="silent"&&(n==="validated-only"&&!P.validated||g(P,(h=p.results[y])===null||h===void 0?void 0:h.errors))}),p});function q(i){c.value.forEach(i)}function M(i){const n=typeof i=="string"?Ve(i):i;return typeof n=="string"?b.value[n]:n}function Ee(i){return c.value.filter(u=>i.startsWith(u.path)).reduce((u,d)=>u?d.path.length>u.path.length?d:u:d,void 0)}let le=[],oe;function je(i){return le.push(i),oe||(oe=ee(()=>{[...le].sort().reverse().forEach(u=>{ct(s,u)}),le=[],oe=null})),oe}function ve(i){return function(u,d){return function(y){return y instanceof Event&&(y.preventDefault(),y.stopPropagation()),q(h=>h.touched=!0),o.value=!0,m.value++,me().then(h=>{const P=w(s);if(h.valid&&typeof u=="function"){const C=w(ge.value);let U=i?C:P;return h.values&&(U=h.source==="schema"?h.values:Object.assign({},U,h.values)),u(U,{evt:y,controlledValues:C,setErrors:T,setFieldError:g,setTouched:Re,setFieldTouched:K,setValues:E,setFieldValue:V,resetForm:Be,resetField:rt})}!h.valid&&typeof d=="function"&&d({values:P,evt:y,errors:h.errors,results:h.results})}).then(h=>(o.value=!1,h),h=>{throw o.value=!1,h})}}}const ye=ve(!1);ye.withControlled=ve(!0);function $(i,n){const u=c.value.findIndex(p=>p.path===i&&(Array.isArray(p.id)?p.id.includes(n):p.id===n)),d=c.value[u];if(!(u===-1||!d)){if(ee(()=>{ue(i,{mode:"silent",warn:!1})}),d.multiple&&d.fieldsCount&&d.fieldsCount--,Array.isArray(d.id)){const p=d.id.indexOf(n);p>=0&&d.id.splice(p,1),delete d.__flags.pendingUnmount[n]}(!d.multiple||d.fieldsCount<=0)&&(c.value.splice(u,1),nt(i),F(),delete b.value[i])}}function ke(i){W(b.value).forEach(n=>{n.startsWith(i)&&delete b.value[n]}),c.value=c.value.filter(n=>!n.path.startsWith(i)),ee(()=>{F()})}const v={formId:r,values:s,controlledValues:ge,errorBag:J,errors:_,schema:R,submitCount:m,meta:de,isSubmitting:o,isValidating:l,fieldArrays:f,keepValuesOnUnmount:pe,validateSchema:O(R)?te:void 0,validate:me,setFieldError:g,validateField:ue,setFieldValue:V,setValues:E,setErrors:T,setFieldTouched:K,setTouched:Re,resetForm:Be,resetField:rt,handleSubmit:ye,useFieldModel:Mt,defineInputBinds:Ut,defineComponentBinds:kt,defineField:xe,stageInitialValue:Nt,unsetInitialValue:nt,setFieldInitialValue:De,createPathState:fe,getPathState:M,unsetPathValue:je,removePathState:$,initialValues:Q,getAllPathStates:()=>c.value,destroyPath:ke,isFieldTouched:ne,isFieldDirty:Pt,isFieldValid:Ct};function V(i,n,u=!0){const d=w(n),p=typeof i=="string"?i:i.path;M(p)||fe(p),ie(s,p,d),u&&ue(p)}function N(i,n=!0){W(s).forEach(u=>{delete s[u]}),W(i).forEach(u=>{V(u,i[u],!1)}),n&&me()}function E(i,n=!0){Oe(s,i),f.forEach(u=>u&&u.reset()),n&&me()}function re(i,n){const u=M(S(i))||fe(i);return j({get(){return u.value},set(d){var p;const y=S(i);V(y,d,(p=S(n))!==null&&p!==void 0?p:!1)}})}function K(i,n){const u=M(i);u&&(u.touched=n)}function ne(i){const n=M(i);return n?n.touched:c.value.filter(u=>u.path.startsWith(i)).some(u=>u.touched)}function Pt(i){const n=M(i);return n?n.dirty:c.value.filter(u=>u.path.startsWith(i)).some(u=>u.dirty)}function Ct(i){const n=M(i);return n?n.valid:c.value.filter(u=>u.path.startsWith(i)).every(u=>u.valid)}function Re(i){if(typeof i=="boolean"){q(n=>{n.touched=i});return}W(i).forEach(n=>{K(n,!!i[n])})}function rt(i,n){var u;const d=n&&"value"in n?n.value:L(Q.value,i),p=M(i);p&&(p.__flags.pendingReset=!0),De(i,w(d),!0),V(i,d,!1),K(i,(u=n==null?void 0:n.touched)!==null&&u!==void 0?u:!1),g(i,(n==null?void 0:n.errors)||[]),ee(()=>{p&&(p.__flags.pendingReset=!1)})}function Be(i,n){let u=w(i!=null&&i.values?i.values:ae.value);u=n!=null&&n.force?u:Oe(ae.value,u),u=Z(R)&&z(R.cast)?R.cast(u):u,D(u,{force:n==null?void 0:n.force}),q(d=>{var p;d.__flags.pendingReset=!0,d.validated=!1,d.touched=((p=i==null?void 0:i.touched)===null||p===void 0?void 0:p[d.path])||!1,V(d.path,L(u,d.path),!1),g(d.path,void 0)}),n!=null&&n.force?N(u,!1):E(u,!1),T((i==null?void 0:i.errors)||{}),m.value=(i==null?void 0:i.submitCount)||0,ee(()=>{me({mode:"silent"}),q(d=>{d.__flags.pendingReset=!1})})}async function me(i){const n=(i==null?void 0:i.mode)||"force";if(n==="force"&&q(h=>h.validated=!0),v.validateSchema)return v.validateSchema(n);l.value=!0;const u=await Promise.all(c.value.map(h=>h.validate?h.validate(i).then(P=>({key:h.path,valid:P.valid,errors:P.errors,value:P.value})):Promise.resolve({key:h.path,valid:!0,errors:[],value:void 0})));l.value=!1;const d={},p={},y={};for(const h of u)d[h.key]={valid:h.valid,errors:h.errors},h.value&&ie(y,h.key,h.value),h.errors.length&&(p[h.key]=h.errors[0]);return{valid:u.every(h=>h.valid),results:d,errors:p,values:y,source:"fields"}}async function ue(i,n){var u;const d=M(i);if(d&&(n==null?void 0:n.mode)!=="silent"&&(d.validated=!0),R){const{results:p}=await te((n==null?void 0:n.mode)||"validated-only");return p[i]||{errors:[],valid:!0}}return d!=null&&d.validate?d.validate(n):(!d&&(u=n==null?void 0:n.warn),Promise.resolve({errors:[],valid:!0}))}function nt(i){ct(Q.value,i)}function Nt(i,n,u=!1){De(i,n),ie(s,i,n),u&&!(e!=null&&e.initialValues)&&ie(ae.value,i,w(n))}function De(i,n,u=!1){ie(Q.value,i,w(n)),u&&ie(ae.value,i,w(n))}async function it(){const i=O(R);if(!i)return{valid:!0,results:{},errors:{},source:"none"};l.value=!0;const n=Ne(i)||Z(i)?await Nr(i,s):await Tr(i,s,{names:X.value,bailsMap:H.value});return l.value=!1,n}const Tt=ye((i,{evt:n})=>{pr(n)&&n.target.submit()});pt(()=>{if(e!=null&&e.initialErrors&&T(e.initialErrors),e!=null&&e.initialTouched&&Re(e.initialTouched),e!=null&&e.validateOnMount){me();return}v.validateSchema&&v.validateSchema("silent")}),Pe(R)&&se(R,()=>{var i;(i=v.validateSchema)===null||i===void 0||i.call(v,"validated-only")}),gt(Xe,v);function xe(i,n){const u=z(n)||n==null?void 0:n.label,d=M(S(i))||fe(i,{label:u}),p=()=>z(n)?n(Ie(d,Fe)):n||{};function y(){var I;d.touched=!0,((I=p().validateOnBlur)!==null&&I!==void 0?I:_e().validateOnBlur)&&ue(d.path)}function h(){var I;((I=p().validateOnInput)!==null&&I!==void 0?I:_e().validateOnInput)&&ee(()=>{ue(d.path)})}function P(){var I;((I=p().validateOnChange)!==null&&I!==void 0?I:_e().validateOnChange)&&ee(()=>{ue(d.path)})}const C=j(()=>{const I={onChange:P,onInput:h,onBlur:y};return z(n)?Object.assign(Object.assign({},I),n(Ie(d,Fe)).props||{}):n!=null&&n.props?Object.assign(Object.assign({},I),n.props(Ie(d,Fe))):I});return[re(i,()=>{var I,k,x;return(x=(I=p().validateOnModelUpdate)!==null&&I!==void 0?I:(k=_e())===null||k===void 0?void 0:k.validateOnModelUpdate)!==null&&x!==void 0?x:!0}),C]}function Mt(i){return Array.isArray(i)?i.map(n=>re(n,!0)):re(i)}function Ut(i,n){const[u,d]=xe(i,n);function p(){d.value.onBlur()}function y(P){const C=Te(P);V(S(i),C,!1),d.value.onInput()}function h(P){const C=Te(P);V(S(i),C,!1),d.value.onChange()}return j(()=>Object.assign(Object.assign({},d.value),{onBlur:p,onInput:y,onChange:h,value:u.value}))}function kt(i,n){const[u,d]=xe(i,n),p=M(S(i));function y(h){u.value=h}return j(()=>{const h=z(n)?n(Ie(p,Fe)):n||{};return Object.assign({[h.model||"modelValue"]:u.value,[`onUpdate:${h.model||"modelValue"}`]:y},d.value)})}return Object.assign(Object.assign({},v),{values:zt(s),handleReset:()=>Be(),submitForm:Tt})}function Wr(e,t,r,a){const o={touched:"some",pending:"some",valid:"every"},l=j(()=>!B(t,O(r)));function m(){const s=e.value;return W(o).reduce((c,A)=>{const b=o[A];return c[A]=s[b](F=>F[A]),c},{})}const f=Ce(m());return Lt(()=>{const s=m();f.touched=s.touched,f.valid=s.valid,f.pending=s.pending}),j(()=>Object.assign(Object.assign({initialValues:O(r)},f),{valid:f.valid&&!W(a.value).length,dirty:l.value}))}function qr(e,t,r){const a=Ft(r),o=Y(a),l=Y(w(a));function m(f,s){s!=null&&s.force?(o.value=w(f),l.value=w(f)):(o.value=Oe(w(o.value)||{},w(f)),l.value=Oe(w(l.value)||{},w(f))),s!=null&&s.updateFields&&e.value.forEach(c=>{if(c.touched)return;const b=L(o.value,c.path);ie(t,c.path,w(b))})}return{initialValues:o,originalInitialValues:l,setInitialValues:m}}function Gr(e,t){return t?{valid:e.valid&&t.valid,errors:[...e.errors,...t.errors]}:e}const et=e=>(er("data-v-54906fa9"),e=e(),tr(),e),Hr={class:"user-image-container"},Kr={class:"user-form-container"},Yr=et(()=>he("img",{class:"",width:"350",src:nr},null,-1)),Zr=et(()=>he("h1",null,"Bem vinda!",-1)),Jr=et(()=>he("span",null,"Venha renovar o brilho do seu olhar",-1)),Xr={__name:"LoginPage",setup(e){const t=ar(),{handleSubmit:r}=$r({validationSchema:{email(m){return/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(m)?!0:"Insira um e-mail válido."},password(m){return/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(m)?!0:"A senha exige no mímimo 8 caracteres, incluindo pelo menos uma letra maiúscula, uma letra minúscula e um número"}}}),a=r(m=>{t.loginUser(m)}),o=mt("email"),l=mt("password");return(m,f)=>(Jt(),Gt(Zt,null,[he("div",Hr,[we(Xt,{class:"image-user animate__animated animate__fadeIn","aspect-ratio":"1/1",cover:"",gradient:"to top right, rgba(0,0,0,.33), rgba(0,0,0,.7)",src:rr})]),he("div",Kr,[Yr,Zr,Jr,he("form",{onSubmit:f[2]||(f[2]=Ht((...s)=>O(a)&&O(a)(...s),["prevent"])),class:"login-form","aspect-ratio":"1/1"},[we(at,{modelValue:O(o).value.value,"onUpdate:modelValue":f[0]||(f[0]=s=>O(o).value.value=s),"error-messages":O(o).errorMessage.value,clearable:"",label:"E-mail","prepend-icon":"mdi mdi-email-outline",variant:"outlined","hide-details":"auto",placeholder:"marina@gmail.com",type:"email"},null,8,["modelValue","error-messages"]),we(at,{modelValue:O(l).value.value,"onUpdate:modelValue":f[1]||(f[1]=s=>O(l).value.value=s),"error-messages":O(l).errorMessage.value,class:"mt-5",clearable:"",label:"Senha","prepend-icon":"mdi mdi-lock",variant:"outlined"},null,8,["modelValue","error-messages"]),we(Yt,{"prepend-icon":"mdi mdi-send-circle",class:"pa-6 mt-5",color:"Rose01",variant:"outlined",type:"submit",block:""},{default:Kt(()=>[Qt(" Acessar ")]),_:1})],32)])],64))}},tn=qt(Xr,[["__scopeId","data-v-54906fa9"]]);export{tn as default};
