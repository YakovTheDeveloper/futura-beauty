import{C as r}from"./ATW36kOU.js";import{_ as d,r as c,v as i,p,o as l,w as o,b as f,d as m,T as _,a as s}from"./C0KMvREt.js";const u={class:"map"},w={__name:"index",setup(h){const t=c(null);return i(async()=>{const e=document.createElement("script");e.src="https://maps.api.2gis.ru/2.0/loader.js",e.async=!0,document.head.appendChild(e);const a=[56.876097,53.213179];e.onload=()=>{console.log("wtf",window.DG),window.DG&&window.DG.then(()=>{const n=window.DG.map(t.value,{center:a,zoom:14});DG.marker(a).addTo(n)})}}),(e,a)=>(l(),p(r,null,{default:o(()=>[f(_,{variant:"h1",offset:"",align:"center"},{default:o(()=>a[0]||(a[0]=[m("Наша студия находится здесь")])),_:1}),s("div",u,[s("div",{ref_key:"mapRef",ref:t,style:{width:"100%",height:"100%"}},null,512)])]),_:1}))}},y=d(w,[["__scopeId","data-v-e771f52b"]]);export{y as default};