import{L as l}from"./qtveRuP2.js";import{_ as c,o as n,p as m,w as _,d as p,c as r,a as i,F as d,A as u,W as k,Y as f,b as v,t as B}from"./xiXLZ5CW.js";const C={__name:"OrderButton",props:{openModal:{type:Function}},setup(s){return(a,e)=>(n(),m(l,{to:"order",class:"order"},{default:_(()=>e[0]||(e[0]=[p(" записаться ")])),_:1}))}},F=c(C,[["__scopeId","data-v-60e14f80"]]),h={class:"list"},g={__name:"Categories",props:{inverseColor:Boolean},setup(s){const a=s,e=[{name:"маникюр",link:"manicure"},{name:"педикюр",link:"pedicure"},{name:"волосы",link:"hair"},{name:"макияж и брови",link:"makeup"},{name:"косметология",link:"cosmetology"},{name:"шугаринг",link:"sugaring"}];return(t,x)=>(n(),r("nav",null,[i("ul",h,[(n(),r(d,null,u(e,(o,b)=>i("li",{key:o.name,class:k(`/${o.link}`===(t._.provides[f]||t.$route).path?"hide":"show")},[v(l,{to:`/${o.link}`,inverseColor:a.inverseColor},{default:_(()=>[p(B(o.name),1)]),_:2},1032,["to","inverseColor"])],2)),64))])]))}},L=c(g,[["__scopeId","data-v-dbb1ed51"]]);export{F as O,L as _};
