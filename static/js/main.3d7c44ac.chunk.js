(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var i=n(3),a=n.n(i),s=n(1),m=n.n(s),l=(n(8),n(9),n(0));var c=e=>{let{images:t,itemWidth:n,frameSize:i,step:a,animationDuration:m,infinite:c}=e;const[r,o]=Object(s.useState)(0),h=t.length-i,d=r===h&&!c,u=0===r&&!c,p={width:"".concat(n*i,"px")},b={transform:"translateX(".concat(-r*n,"px)"),transition:"transform ".concat(m,"ms ease")};return Object(l.jsxs)("div",{className:"Carousel",style:p,children:[Object(l.jsx)("ul",{className:"Carousel__list",children:t.map(((e,t)=>Object(l.jsx)("li",{className:"Carousel__item",style:b,children:Object(l.jsx)("img",{src:e,alt:"".concat(t+1),width:n})},e)))}),Object(l.jsxs)("div",{className:"Carousel__buttons",children:[Object(l.jsx)("button",{onClick:()=>{o(r>0?e=>e-a>=0?e-a:0:h)},type:"button",disabled:u,children:"Prev"}),Object(l.jsx)("button",{onClick:()=>{o(r<h?e=>e+a<=h?e+a:h:0)},type:"button","data-cy":"next",disabled:d,children:"Next"})]})]})};class r extends m.a.Component{constructor(){super(...arguments),this.state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],itemWidth:130,frameSize:3,step:3,animationDuration:1e3,infinite:!1},this.handleInputChange=e=>{const{name:t,value:n}=e.target;"infinite"!==t?this.setState((e=>({...e,[t]:+n}))):this.setState((e=>({infinite:!e.infinite})))}}render(){const{images:e,itemWidth:t,frameSize:n,step:i,animationDuration:a,infinite:s}=this.state;return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsxs)("h1",{"data-cy":"title",children:["Carousel with ",e.length," images"]}),Object(l.jsxs)("form",{className:"form",action:"#",method:"post",children:[Object(l.jsxs)("label",{className:"form__label",htmlFor:"itemId",children:["Item Width:\xa0",Object(l.jsx)("input",{className:"form__input",type:"number",name:"itemWidth",id:"itemId",min:130,step:10,value:t,onChange:this.handleInputChange})]}),Object(l.jsxs)("label",{className:"form__label",htmlFor:"frameId",children:["Frame Size:\xa0",Object(l.jsx)("input",{className:"form__input",type:"number",name:"frameSize",id:"frameId",min:1,max:e.length,value:n,onChange:this.handleInputChange})]}),Object(l.jsxs)("label",{className:"form__label",htmlFor:"stepId",children:["Step:\xa0",Object(l.jsx)("input",{className:"form__input",type:"number",name:"step",id:"stepId",min:1,value:i,onChange:this.handleInputChange})]}),Object(l.jsxs)("label",{className:"form__label",htmlFor:"animationDurationId",children:["Animation Duration:\xa0",Object(l.jsx)("input",{className:"form__input",type:"number",name:"animationDuration",id:"animationDurationId",min:500,max:1e4,step:500,value:a,onChange:this.handleInputChange})]}),Object(l.jsxs)("label",{className:"form__label",htmlFor:"infiniteId",children:["Infinite:\xa0",Object(l.jsx)("input",{className:"form__input",type:"checkbox",name:"infinite",id:"infiniteId",checked:s,onChange:this.handleInputChange})]})]}),Object(l.jsx)(c,{images:e,step:i,frameSize:n,itemWidth:t,animationDuration:a,infinite:s})]})}}var o=r;a.a.render(Object(l.jsx)(o,{}),document.getElementById("root"))},8:function(e,t,n){},9:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.3d7c44ac.chunk.js.map