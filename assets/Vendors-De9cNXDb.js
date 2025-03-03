import{j as e}from"./index-DAq57agh.js";import{b as s}from"./react-DHgU0_ix.js";function t(){const[t,a]=s.useState([]),[r,i]=s.useState(!0),[n,l]=s.useState(null);s.useEffect((()=>{fetch("/TechFamilyFunFair/assets/data/vendors.json").then((e=>{if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);return e.json()})).then((e=>{a(e),i(!1)})).catch((e=>{l(e.message),i(!1)}))}),[]);const d=s.useMemo((()=>t.filter((e=>"merchandise"===e.type))),[t]);return e.jsx("div",{className:"container mx-auto px-4 pb-20",children:e.jsxs("div",{className:"py-6",children:[e.jsx("h1",{className:"text-2xl font-bold mb-4",children:"Merchandise"}),r&&e.jsx("div",{className:"text-center py-8",children:e.jsx("p",{children:"Loading merchandise vendors..."})}),n&&e.jsxs("div",{className:"text-center py-8 text-red-500",children:[e.jsxs("p",{children:["Error loading merchandise vendors: ",n]}),e.jsx("button",{onClick:()=>window.location.reload(),className:"mt-4 px-4 py-2 bg-blue-500 text-white rounded",children:"Retry"})]}),!r&&!n&&e.jsx("div",{className:"mt-4 grid gap-4",children:d.length>0?d.map((s=>e.jsxs("div",{className:"bg-white rounded-lg shadow p-4 border border-gray-100",children:[e.jsx("div",{className:"flex justify-between items-start",children:e.jsxs("div",{className:"flex items-center",children:[s.emoji&&e.jsx("span",{className:"text-2xl mr-2",children:s.emoji}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-medium text-lg",children:s.name}),e.jsx("p",{className:"text-sm text-gray-500",children:s.location})]})]})}),s.description&&e.jsx("p",{className:"mt-2 text-gray-700",children:s.description}),s.items&&e.jsxs("div",{className:"mt-3",children:[e.jsx("h4",{className:"text-sm font-medium text-gray-700",children:"Available Items:"}),e.jsx("div",{className:"flex flex-wrap gap-1 mt-1",children:s.items.map(((s,t)=>e.jsx("span",{className:"bg-gray-100 px-2 py-1 rounded text-xs",children:s},t)))})]}),e.jsxs("div",{className:"mt-3 grid grid-cols-1 md:grid-cols-2 gap-2 text-sm",children:[s.phone&&e.jsxs("div",{className:"text-gray-600",children:[e.jsx("span",{className:"font-medium",children:"Phone:"})," ",s.phone]}),s.website&&e.jsxs("div",{className:"text-gray-600",children:[e.jsx("span",{className:"font-medium",children:"Website:"})," ",e.jsx("a",{href:s.website,target:"_blank",rel:"noopener noreferrer",className:"text-blue-600 hover:underline",children:s.website.replace("https://www.","").replace("https://","")})]}),s.openTime&&s.closeTime&&e.jsxs("div",{className:"text-gray-600",children:[e.jsx("span",{className:"font-medium",children:"Hours:"})," ",s.openTime," - ",s.closeTime]})]})]},s.id))):e.jsxs("div",{className:"text-center py-8 text-gray-500",children:[e.jsx("p",{children:"No merchandise vendors available."}),e.jsx("pre",{className:"mt-4 text-xs text-left bg-gray-100 p-2 rounded overflow-auto",children:JSON.stringify(t,null,2)})]})})]})})}export{t as default};
