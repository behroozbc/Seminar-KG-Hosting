import{d as _,J as u,z as h,f as s,g as t,t as o,C as c,F as f,K as g,o as a,i as v,e as x,B as b}from"../modules/vue-CJQmjBDY.js";import{h as y,u as N,m}from"../index-DmY7BzSB.js";import{_ as k}from"./NoteDisplay.vue_vue_type_style_index_0_lang-CWVp-9tW.js";import"../modules/shiki-DkXD3lZR.js";const w={id:"page-root"},B={class:"m-4"},L={class:"mb-10"},T={class:"text-4xl font-bold mt-2"},V={class:"opacity-50"},C={class:"text-lg"},H={class:"font-bold flex gap-2"},S={class:"opacity-50"},z={key:0,class:"border-main mb-8"},A=_({__name:"print",setup(D){const{slides:d,total:p}=y();u(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),N({title:`Notes - ${m.title}`});const i=h(()=>d.value.map(e=>e.meta?.slide).filter(e=>e!==void 0&&e.noteHTML!==""));return(e,n)=>(a(),s("div",w,[t("div",B,[t("div",L,[t("h1",T,o(c(m).title),1),t("div",V,o(new Date().toLocaleString()),1)]),(a(!0),s(f,null,g(i.value,(l,r)=>(a(),s("div",{key:r,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",C,[t("div",H,[t("div",S,o(l?.no)+"/"+o(c(p)),1),b(" "+o(l?.title)+" ",1),n[0]||(n[0]=t("div",{class:"flex-auto"},null,-1))])]),x(k,{"note-html":l.noteHTML,class:"max-w-full"},null,8,["note-html"])]),r<i.value.length-1?(a(),s("hr",z)):v("v-if",!0)]))),128))])]))}});export{A as default};
