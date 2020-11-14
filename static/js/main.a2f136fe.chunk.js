(this["webpackJsonporkla-pizza"]=this["webpackJsonporkla-pizza"]||[]).push([[0],{26:function(e,c,s){},27:function(e,c,s){},28:function(e,c,s){},34:function(e,c,s){},35:function(e,c,s){},36:function(e,c,s){},37:function(e,c,s){},38:function(e,c,s){},39:function(e,c,s){},40:function(e,c,s){},41:function(e,c,s){"use strict";s.r(c);var t=s(0),n=s(1),i=s.n(n),a=s(10),l=s.n(a),r=(s(26),s(27),s(28),s(7)),j=function(){return Object(t.jsx)("div",{className:"Sidebar ",children:Object(t.jsx)("div",{className:"sidenav nav",children:Object(t.jsxs)("div",{className:"linkContainer",children:[Object(t.jsx)(r.b,{to:"/",children:"Overview"}),Object(t.jsx)(r.b,{to:"/process",children:"In Process"}),Object(t.jsx)(r.b,{to:"/shaping",children:"Shaping"}),Object(t.jsx)(r.b,{to:"/analysis",children:"Analysis"}),Object(t.jsx)(r.b,{to:"/test",children:"test"}),Object(t.jsx)("hr",{}),Object(t.jsx)(r.b,{to:"/history",children:"Historic Data"}),Object(t.jsx)(r.b,{to:"/machinestatus",children:"Machine Status"})]})})})},d=s(2),o=s(11),h=s(12),b=s(14),x=s(13),O=function(e){return Object(t.jsx)("h1",{children:e.title})},m=(s(34),s(35),function(e){var c=e.type,s=e.children;return Object(t.jsxs)("div",{className:"Infobox ".concat(c||""),children:[Object(t.jsx)("div",{className:"infoIcon",children:"success"===c?Object(t.jsx)("i",{className:"float-right fas fa-check-circle"}):"danger"===c?Object(t.jsx)("i",{className:"float-right fas fa-exclamation-circle"}):Object(t.jsx)("i",{className:"float-right fas fa-arrow-circle-right"})}),s]})}),u=function(e){return Object(t.jsx)("h3",{style:{borderBottom:"1px solid black"},className:"SectionHeader",children:e.title})},p=function(){return Object(t.jsxs)("div",{className:"Sidelist",children:["Next batch",Object(t.jsx)("i",{class:"pl-2 fas fa-arrow-down"}),Object(t.jsxs)("ul",{children:[Object(t.jsx)("li",{children:"MAR2908"}),Object(t.jsx)("li",{children:"MAR2909"}),Object(t.jsx)("li",{children:"MAR2910"})]})]})},v=function(){return Object(t.jsxs)("div",{className:"CurrentProcess",children:[Object(t.jsx)(p,{}),Object(t.jsx)(u,{title:"Current Process"}),"Some Info",Object(t.jsxs)("div",{className:"infoboxContainer d-flex justify-content-around",children:[Object(t.jsx)(m,{title:"Preparation",type:"success",children:Object(t.jsxs)("p",{children:["Duration ",Object(t.jsx)("span",{className:"font-weight-bold",children:"30 min"})]})}),Object(t.jsx)(m,{title:"Shaping",type:"success",children:Object(t.jsxs)("p",{children:["Duration ",Object(t.jsx)("span",{className:"font-weight-bold",children:"30 min"})]})}),Object(t.jsx)(m,{title:"Baking",type:"danger",children:Object(t.jsxs)("p",{children:["Duration ",Object(t.jsx)("span",{className:"font-weight-bold",children:"30 min"})]})}),Object(t.jsx)(m,{title:"Packing",type:"",children:Object(t.jsxs)("p",{children:["Duration ",Object(t.jsx)("span",{className:"font-weight-bold",children:"30 min"})]})})]})]})},f=(s(36),document.getElementById("modal")),N=function(e){Object(b.a)(s,e);var c=Object(x.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=c.call(this,e)).content=function(){return Object(t.jsx)("div",{className:"my-modal vw-100 vh-100 d-flex justify-content-center align-items-center",children:Object(t.jsxs)("div",{className:"modal-content2",children:[Object(t.jsx)("h1",{children:"Heading"}),Object(t.jsx)("p",{children:"Lorem ipsum "}),Object(t.jsx)("i",{className:"exitIcon fas fa-times",onClick:n.props.toggleModal})]})})},n.element=document.createElement("div"),n}return Object(h.a)(s,[{key:"componentDidMount",value:function(){f.appendChild(this.element)}},{key:"componentWillUnmount",value:function(){f.removeChild(this.element)}},{key:"render",value:function(){return Object(a.createPortal)(this.content(),this.element)}}]),s}(i.a.Component),g=function(e){Object(b.a)(s,e);var c=Object(x.a)(s);function s(e){var t;return Object(o.a)(this,s),(t=c.call(this,e)).toggleModal=function(){t.setState({showModal:!t.state.showModal})},t.state={showModal:!1},t}return Object(h.a)(s,[{key:"render",value:function(){var e=this.state.showModal;return Object(t.jsxs)("div",{children:[Object(t.jsx)(O,{title:"Overview"}),Object(t.jsx)(v,{}),Object(t.jsx)("button",{onClick:this.toggleModal,children:"Open"}),e?Object(t.jsx)(N,{toggleModal:this.toggleModal,children:Object(t.jsx)("div",{className:"my-modal vw-100 vh-100 d-flex justify-content-center align-items-center",children:Object(t.jsxs)("div",{className:"modal-content2",children:[Object(t.jsx)("h1",{children:"Heading"}),Object(t.jsx)("p",{children:"Lorem ipsum "}),Object(t.jsx)("button",{className:"modal-close",onClick:this.toggleModal,children:"X"})]})})}):null]})}}]),s}(i.a.Component),y=function(){return Object(t.jsx)("div",{children:"Process"})},w=(s(37),s(38),s(39),function(e){return Object(t.jsx)("div",{className:"",children:Object(t.jsx)("div",{className:"circle ".concat(e.type?e.type:""),children:Object(t.jsx)("div",{className:"circleText",children:e.children})})})}),k=(s(40),function(e){var c=e.name,s=e.circleText,n=e.sensors,i=e.children;return Object(t.jsx)("div",{children:Object(t.jsxs)("div",{className:"DetailedInfobox",children:[Object(t.jsxs)("h5",{children:[c," "]}),i||Object(t.jsxs)("div",{children:[Object(t.jsx)(w,{type:"success",children:Object(t.jsx)("h6",{children:s})}),Object(t.jsx)("div",{className:"row pt-2",children:n.map((function(e){return Object(t.jsxs)("div",{className:"col-4 text-center justify-content-center devider",children:[Object(t.jsx)("div",{className:"sensorValue ".concat(e.type),children:e.value}),Object(t.jsx)("div",{className:"sensorName",children:e.type})]})}))})]})]})})}),C=function(){return Object(t.jsxs)("div",{className:"StagesDetails",children:[Object(t.jsx)("h5",{children:"Stages"}),Object(t.jsx)("div",{className:"d-flex flex-column justify-content-between",children:[{stage:"Preperation",type:"success"},{stage:"Shaping",type:"success"},{stage:"Baking",type:"danger"},{stage:"Topping",type:""},{stage:"Packaging",type:""}].map((function(e,c){return Object(t.jsx)("div",{className:"py-3",children:Object(t.jsx)(m,{type:e.type,children:Object(t.jsxs)("div",{className:"stage",children:[Object(t.jsx)("div",{className:"mb-2",children:Object(t.jsx)("span",{children:e.stage})}),Object(t.jsx)("div",{children:Object(t.jsxs)("div",{children:["Duration ",Object(t.jsx)("span",{className:"font-weight-bold float-right",children:"30 min"})]})})]})})},c)}))})]})},M=function(){return Object(t.jsxs)("div",{className:"infoDetailsContainer",children:[Object(t.jsx)("h5",{className:"d-inline-block",children:"Shaping"}),Object(t.jsxs)("div",{className:"d-flex justify-content-around align-self-center",children:[Object(t.jsx)(m,{type:"success",children:Object(t.jsxs)("div",{className:"infoboxText d-flex align-items-center",children:[Object(t.jsx)("p",{className:"m-0  w-50 float-left d-inline-block",children:"Portioning & Rounding"}),Object(t.jsxs)("div",{className:"m-0 w-50 text-right",children:[Object(t.jsx)("span",{className:"infoboxText-bold m-0 w-50",children:"10"}),Object(t.jsx)("span",{className:"secondaryStyle",children:"/10 min"})]})]})}),Object(t.jsx)(m,{type:"success",children:Object(t.jsxs)("div",{className:"infoboxText d-flex align-items-center",children:[Object(t.jsx)("p",{className:"m-0  w-50 float-left d-inline-block",children:"Proofing in pocket"}),Object(t.jsxs)("div",{className:"m-0 w-50 text-right",children:[Object(t.jsx)("span",{className:"infoboxText-bold m-0 w-50",children:"20"}),Object(t.jsx)("span",{className:"secondaryStyle",children:"/20 min"})]})]})}),Object(t.jsx)(m,{type:"success",children:Object(t.jsxs)("div",{className:"infoboxText d-flex align-items-center",children:[Object(t.jsx)("p",{className:"m-0  w-50 float-left d-inline-block",children:"Hot press on tray"}),Object(t.jsxs)("div",{className:"m-0 w-50 text-right",children:[Object(t.jsx)("span",{className:"infoboxText-bold m-0 w-50",children:"10"}),Object(t.jsx)("span",{className:"secondaryStyle",children:"/10 min"})]})]})})]})]})},S=function(){return Object(t.jsxs)("div",{className:"container",children:[Object(t.jsx)("div",{className:"d-inline-block leftSide",children:Object(t.jsx)(C,{})}),Object(t.jsxs)("div",{className:"d-inline-block rightSide",children:[Object(t.jsx)(M,{}),Object(t.jsxs)("div",{className:"ShapingDetails px-0",children:[Object(t.jsxs)("div",{className:"d-flex justify-content-between mb-4",children:[Object(t.jsx)(k,{name:"Portioning",circleText:"GOOD",sensors:[{name:"Position",value:"Center",type:"success"},{name:"Color",value:"Average",type:"success"},{name:"Weight",value:"300 g",type:"danger"}]}),Object(t.jsx)(k,{name:"Proofing",circleText:"GOOD",sensors:[{name:"Diameter",value:"Center",type:"success"},{name:"Density",value:"2 g/cm3",type:"danger"},{name:"Temperature",value:"37 c",type:"success"}]}),Object(t.jsx)(k,{name:"Hot Press",circleText:"GOOD",sensors:[{name:"Position",value:"Center",type:"success"},{name:"Color",value:"Average",type:"success"},{name:"Weight",value:"300 g",type:"danger"}]})]}),Object(t.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(t.jsx)(k,{name:"Machinery",children:Object(t.jsxs)("div",{className:"row",children:[Object(t.jsxs)("div",{className:"col-5 devider text-center p-0",children:[Object(t.jsx)(w,{type:"success",children:Object(t.jsx)("h6",{children:"90%"})}),Object(t.jsx)("div",{className:"sensorName",children:"Target 90%"}),Object(t.jsx)("div",{className:"sensorValue",children:"Performance"})]}),Object(t.jsxs)("div",{className:"col-7 sensorName",children:[Object(t.jsxs)("div",{className:"row",children:[Object(t.jsx)("div",{className:"col-8",children:"Chamber Termperature"}),Object(t.jsx)("div",{className:"col-4 p-0",children:"60%"})]}),Object(t.jsxs)("div",{className:"row pt-4",children:[Object(t.jsx)("div",{className:"col-8",children:"Chamber Termperature"}),Object(t.jsx)("div",{className:"col-4 p-0",children:"60%"})]})]})]})}),Object(t.jsx)(k,{name:"Machinery",children:Object(t.jsx)("div",{className:"d-flex justify-content-center",children:Object(t.jsxs)("div",{className:" text-center p-0",children:[Object(t.jsx)(w,{type:"success",children:Object(t.jsx)("h6",{children:"210/210"})}),Object(t.jsx)("div",{className:"sensorValue pt-4",children:"Current load"})]})})}),Object(t.jsx)(k,{name:"Pizzas Discarded",children:Object(t.jsxs)("div",{className:"row",children:[Object(t.jsxs)("div",{className:"col-6 text-center p-0 devider",children:[Object(t.jsx)(w,{type:"success",children:Object(t.jsx)("h6",{children:"0.5%"})}),Object(t.jsx)("div",{className:"sensorName",children:"Minimum 0.5%"}),Object(t.jsx)("div",{className:"sensorValue",children:"To fix"})]}),Object(t.jsxs)("div",{className:"col-6 text-center p-0 devider",children:[Object(t.jsx)(w,{type:"success",children:Object(t.jsx)("h6",{children:"0.5%"})}),Object(t.jsx)("div",{className:"sensorName",children:"Minimum 5%"}),Object(t.jsx)("div",{className:"sensorValue",children:"Waste"})]})]})})]})]})]})]})};var P=function(){return Object(t.jsxs)(r.a,{children:[Object(t.jsx)(j,{}),Object(t.jsx)(d.c,{children:Object(t.jsxs)("div",{className:"pageContent",children:[Object(t.jsx)(d.a,{exact:!0,path:"/",children:Object(t.jsx)(g,{})}),Object(t.jsx)(d.a,{exact:!0,path:"/process",children:Object(t.jsx)(y,{})}),Object(t.jsx)(d.a,{exact:!0,path:"/process/:id",children:"id details"}),Object(t.jsx)(d.a,{path:"/shaping",children:Object(t.jsx)(S,{})}),Object(t.jsx)(d.a,{path:"/test"})]})})]})};l.a.render(Object(t.jsx)(i.a.StrictMode,{children:Object(t.jsx)(P,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.a2f136fe.chunk.js.map