(this.webpackJsonprenovation=this.webpackJsonprenovation||[]).push([[4],{165:function(e,t,r){"use strict";r.r(t);for(var a=r(0),n=r.n(a),o=r(54),s={box:{height:"400px",border:"1px solid pink",overflowY:"scroll"},imageBox:{width:"500px",height:"500px",margin:"20px auto"}},c=[],i=[],l=0;l<9;l++){var u=n.a.createRef();i.push(u),c.push(n.a.createElement("div",{style:s.imageBox,key:l},n.a.createElement("img",{ref:u,"data-src":"https://raw.githubusercontent.com/lq110/-/master/cupboard/imgItem/cupboard0".concat(l+1,".png")})))}var d=new IntersectionObserver((function(e){e.forEach((function(e){if(!(e.intersectionRatio<=0)){var t=e.target;t.src=t.dataset.src}}))}),{threshold:[.01]}),p=function(){i.forEach((function(e){d.observe(e.current)}))},m=function(){return n.a.createElement("div",{style:s.box},c,n.a.createElement("img",{onError:p,src:""}))},h=[{id:1,title:1,address:"https://raw.githubusercontent.com/lq110/-/master/cupboard/slider01.png"},{id:2,title:2,address:"https://raw.githubusercontent.com/lq110/-/master/cupboard/slider02.png"},{id:3,title:3,address:"https://raw.githubusercontent.com/lq110/-/master/cupboard/slider03.png"}];t.default=function(e){return n.a.createElement("div",{className:"All"},n.a.createElement(o.a,{arrdata:h}),n.a.createElement(m,null))}}}]);
//# sourceMappingURL=4.35bd8a0e.chunk.js.map