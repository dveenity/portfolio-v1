import{j as e,L as c,p as n,m as d,n as h}from"./index-VLP3nKGI.js";import{F as p}from"./agro--tMGBJX8.js";const f=()=>{const r=[{image:p,h3:"Agro Farmer's Hub",description:"A Full Stack web app where farmers can post their products and users can place orders for those products",href:"blaze",to:"/first",tools:["#reactJS","#NodeJS","#MongoDB","ExpressJS"]},{image:n,h3:"Todo App",description:"An advanced todo web app with dark/light mode switch and also features tasks history",href:"todo",to:"/second",tools:["#react","#routing","#css"]},{image:d,h3:"BBNK Bank",description:"An webpage for an imaginary bank for an idea of what a futuristic bank webpage should look like",href:"bank",to:"/third",tools:["#react","#css","#antUI"]},{image:h,h3:"Calculator App",description:"A simple calculator that that shows results and also shows the inputted values above it",href:"cal",to:"/fourth",tools:["#html","#css","#js"]}],t=["orange","var(--header-color)","yellow","var(--header-color)"],a=r.map((s,i)=>e.jsx("li",{id:s.href,className:s.href,name:s.href,children:e.jsxs(c,{to:s.to,children:[e.jsx("img",{alt:"project image sample",src:s.image}),e.jsxs("div",{children:[e.jsx("h3",{children:s.h3}),e.jsxs("div",{children:[e.jsx("p",{children:s.description}),e.jsx("div",{children:s.tools.map((l,o)=>e.jsx("p",{style:{color:t[o]},children:l},o))})]})]})]})},i));return e.jsxs("div",{className:"projects",id:"projects",name:"projects",children:[e.jsxs("div",{children:[e.jsx("h2",{children:"My Projects"}),e.jsx("p",{children:"Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively."}),e.jsx("p",{children:"Click on each project to read more info and explore it live..."})]}),e.jsx("div",{className:"project-list",children:e.jsx("ul",{children:a})})]})};export{f as default};
