import{j as e}from"./index-BJLqjIo3.js";import{b as t}from"./react-BbQJnCff.js";const s=t.memo((function({x:s,y:a,icon:n,title:r,onClick:i,isActive:o}){const[c,l]=t.useState(!1),d={left:s,top:a,position:"absolute",transform:"translate(-50%, -50%)",zIndex:c||o?10:1};return e.jsx("div",{className:"cursor-pointer transition-all duration-200 "+(o?"scale-125":c?"scale-110":"scale-100"),style:d,onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),onClick:i,children:e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("div",{className:"text-2xl "+(o?"animate-bounce":""),children:(()=>{switch(n){case"robot":return"🤖";case"paw":return"🐾";case"brain":return"🧠";case"drone":return"🚁";default:return"📍"}})()}),(c||o)&&e.jsx("div",{className:"mt-1 bg-white rounded-md px-2 py-1 text-xs shadow-md whitespace-nowrap",children:r})]})})}));function a(){const[a,n]=t.useState({zones:{},attractions:[]}),[r,i]=t.useState([]),[o,c]=t.useState(null);t.useEffect((()=>{fetch("/assets/data/map.json").then((e=>e.json())).then((e=>n(e))).catch((e=>{})),fetch("/assets/data/schedule.json").then((e=>e.json())).then((e=>i(e))).catch((e=>{}))}),[]);const l=t.useMemo((()=>{const e={};return r.forEach((t=>{e[t.id]=t})),e}),[r]),d=t.useMemo((()=>Object.keys(a.zones).map((t=>{const s=a.zones[t];return e.jsx("div",{className:"absolute bg-blue-200 bg-opacity-40 rounded border border-blue-300 flex items-center justify-center",style:{left:s.x,top:s.y,width:s.width,height:s.height},children:e.jsx("span",{className:"text-xs font-medium text-blue-800 p-1 bg-white bg-opacity-70 rounded",children:s.name})},t)}))),[a.zones]),m=t.useMemo((()=>a.attractions.map((t=>{const a=l[t.id]||{};return e.jsx(s,{x:t.x,y:t.y,icon:t.icon,title:a.title||"Unknown Event",onClick:()=>{return e=t.id,void c(o===e?null:e);var e},isActive:o===t.id},t.id)}))),[l,o,a.attractions]),u=t.useMemo((()=>{if(!o||!l[o])return null;const t=l[o];return e.jsxs("div",{className:"mt-4 bg-white p-4 rounded-lg shadow-sm border border-gray-200",children:[e.jsx("h3",{className:"font-medium",children:t.title}),e.jsxs("p",{className:"text-sm text-gray-600 mt-1",children:[t.time," at ",t.location]}),t.speaker&&e.jsxs("p",{className:"text-sm text-gray-600 mt-1",children:["Speaker: ",t.speaker]})]})}),[o,l]);return e.jsx("div",{className:"container mx-auto px-4 pb-20",children:e.jsxs("div",{className:"py-6",children:[e.jsx("h1",{className:"text-2xl font-bold",children:"Event Map"}),e.jsxs("div",{className:"mt-4 bg-gray-100 rounded-lg p-4",children:[e.jsx("p",{className:"text-sm text-gray-600 mb-2",children:"Tap on markers to see event details. Pan and zoom to navigate the map."}),e.jsxs("div",{className:"relative bg-blue-50 border border-blue-200 rounded-lg overflow-hidden",style:{height:"60vh"},children:[e.jsx("div",{className:"absolute inset-0 p-4 text-center flex items-center justify-center text-gray-400",children:e.jsx("span",{className:"text-sm",children:"Interactive venue map would appear here"})}),d,m]}),u]})]})})}export{a as default};
