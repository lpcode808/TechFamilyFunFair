import{j as e}from"./index-DAq57agh.js";import{b as s,L as t}from"./react-DHgU0_ix.js";import{B as r}from"./BackButton-g8wkYzKu.js";function a(){const[a,i]=s.useState([]),[l,n]=s.useState(!0),[c,o]=s.useState(null);s.useEffect((()=>{fetch("/TechFamilyFunFair/assets/data/experiences.json").then((e=>{if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);return e.json()})).then((e=>{i(e),n(!1)})).catch((e=>{o(e.message),n(!1)}))}),[]);const d=s.useMemo((()=>{const e=["vr-1","flight-sim-1","claw-1","hpd-keiki","hawaii-jobs","hpu","looopsie","lp-laser","lp-robotics","mit-lenovo","racing-sim"];return a.filter((s=>e.includes(s.id))).sort(((e,s)=>e.title.localeCompare(s.title)))}),[a]);return e.jsxs("div",{className:"container mx-auto px-4 py-8 pb-20",children:[e.jsx(r,{to:"/",label:"Back to Home"}),e.jsx("h1",{className:"text-2xl font-bold text-[#004299] mb-6",children:"All Experiences"}),l&&e.jsx("div",{className:"text-center py-8",children:e.jsx("p",{children:"Loading experiences..."})}),c&&e.jsxs("div",{className:"text-center py-8 text-red-500",children:[e.jsxs("p",{children:["Error loading experiences: ",c]}),e.jsx("button",{onClick:()=>window.location.reload(),className:"mt-4 px-4 py-2 bg-blue-500 text-white rounded",children:"Retry"})]}),!l&&!c&&e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4",children:d.length>0?d.map((s=>e.jsxs(t,{to:`/experience/${s.id}`,className:"bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow p-4 flex flex-col",children:[e.jsxs("div",{className:"flex items-start mb-2",children:[e.jsx("div",{className:"text-3xl mr-3",children:s.icon}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold text-[#004299]",children:s.title}),e.jsx("p",{className:"text-sm text-gray-600",children:s.provider}),e.jsx("p",{className:"text-xs text-gray-500 mt-1",children:s.location})]})]}),s.description&&e.jsx("p",{className:"text-sm text-gray-700 mt-2 line-clamp-3",children:s.description}),e.jsxs("div",{className:"mt-auto pt-3 flex flex-wrap gap-2",children:[s.ageRestriction&&e.jsxs("span",{className:"text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded",children:["Age: ",s.ageRestriction]}),s.duration&&e.jsx("span",{className:"text-xs bg-green-50 text-green-700 px-2 py-1 rounded",children:s.duration})]})]},s.id))):e.jsxs("div",{className:"col-span-3 text-center py-8 text-gray-500",children:[e.jsx("p",{children:"No experiences found."}),e.jsx("p",{className:"text-sm mt-2",children:"IDs we're looking for: vr-1, flight-sim-1, claw-1, etc."}),e.jsx("pre",{className:"mt-4 text-xs text-left bg-gray-100 p-2 rounded overflow-auto",children:JSON.stringify(a,null,2)})]})})]})}export{a as default};
