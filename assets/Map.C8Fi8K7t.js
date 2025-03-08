import{j as e}from"./index.BOOQtDV5.js";import{b as t}from"./react.DDht0Ot4.js";const s=t.memo((function({x:s,y:a,icon:n,title:r,onClick:o,isActive:l}){const[i,c]=t.useState(!1),d={left:s,top:a,position:"absolute",transform:"translate(-50%, -50%)",zIndex:i||l?10:1};return e.jsx("div",{className:"cursor-pointer transition-all duration-200 "+(l?"scale-125":i?"scale-110":"scale-100"),style:d,onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),onClick:o,children:e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("div",{className:"text-2xl "+(l?"animate-bounce":""),children:(()=>{switch(n){case"robot":return"🤖";case"paw":return"🐾";case"brain":return"🧠";case"drone":return"🚁";default:return"📍"}})()}),(i||l)&&e.jsx("div",{className:"mt-1 bg-white rounded-md px-2 py-1 text-xs shadow-md whitespace-nowrap",children:r})]})})}));function a(){const[a,n]=t.useState({zones:{},attractions:[]}),[r,o]=t.useState([]),[l,i]=t.useState(!0),[c,d]=t.useState(null),[m,u]=t.useState(null);t.useEffect((()=>{console.log("Fetching map and schedule data...");const e="/TechFamilyFunFair/assets/data/map.json",t="/TechFamilyFunFair/assets/data/schedule.json";console.log("Fetching from URLs:",e,t);const s=fetch(e).then((e=>{if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);return e.json()})),a=fetch(t).then((e=>{if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);return e.json()}));Promise.all([s,a]).then((([e,t])=>{console.log("Map data loaded:",e),console.log("Schedule data loaded:",t.length,"items"),n(e),o(t),i(!1)})).catch((e=>{console.error("Error loading data:",e),d(e.message),i(!1)}))}),[]);const h=t.useMemo((()=>{const e={};return r.forEach((t=>{e[t.id]=t})),e}),[r]),x=t.useMemo((()=>Object.keys(a.zones).map((t=>{const s=a.zones[t];return e.jsx("div",{className:"absolute bg-blue-200 bg-opacity-40 rounded border border-blue-300 flex items-center justify-center",style:{left:s.x,top:s.y,width:s.width,height:s.height},children:e.jsx("span",{className:"text-xs font-medium text-blue-800 p-1 bg-white bg-opacity-70 rounded",children:s.name})},t)}))),[a.zones]),p=t.useMemo((()=>a.attractions.map((t=>{const a=h[t.id]||{};return e.jsx(s,{x:t.x,y:t.y,icon:t.icon,title:a.title||"Unknown Event",onClick:()=>{return e=t.id,void u(m===e?null:e);var e},isActive:m===t.id},t.id)}))),[h,m,a.attractions]),j=t.useMemo((()=>{if(!m||!h[m])return null;const t=h[m];return e.jsxs("div",{className:"mt-4 bg-white p-4 rounded-lg shadow-sm border border-gray-200",children:[e.jsx("h3",{className:"font-medium",children:t.title}),e.jsxs("p",{className:"text-sm text-gray-600 mt-1",children:[t.time," at ",t.location]}),t.speaker&&e.jsxs("p",{className:"text-sm text-gray-600 mt-1",children:["Speaker: ",t.speaker]})]})}),[m,h]);return e.jsx("div",{className:"container mx-auto px-4 pb-20",children:e.jsxs("div",{className:"py-6",children:[e.jsx("h1",{className:"text-2xl font-bold",children:"Event Map"}),l&&e.jsx("div",{className:"text-center py-8",children:e.jsx("p",{children:"Loading map data..."})}),c&&e.jsxs("div",{className:"text-center py-8 text-red-500",children:[e.jsxs("p",{children:["Error loading map data: ",c]}),e.jsx("button",{onClick:()=>window.location.reload(),className:"mt-4 px-4 py-2 bg-blue-500 text-white rounded",children:"Retry"})]}),!l&&!c&&e.jsxs("div",{className:"mt-4 bg-gray-100 rounded-lg p-4",children:[e.jsx("p",{className:"text-sm text-gray-600 mb-2",children:"Tap on markers to see event details. Pan and zoom to navigate the map."}),e.jsxs("div",{className:"relative bg-blue-50 border border-blue-200 rounded-lg overflow-hidden",style:{height:"60vh"},children:[e.jsx("div",{className:"absolute inset-0 p-4 text-center flex items-center justify-center text-gray-400",children:e.jsx("span",{className:"text-sm",children:"Interactive venue map would appear here"})}),x,p]}),j]})]})})}export{a as default};
