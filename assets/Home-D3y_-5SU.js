import{j as e}from"./index-BJLqjIo3.js";import{b as s,L as a}from"./react-BbQJnCff.js";function t(){const[t,i]=s.useState([]);return s.useEffect((()=>{fetch("/assets/data/vendors.json").then((e=>e.json())).then((e=>{const s=e.filter((e=>"food"===e.type));i(s)})).catch((e=>{}))}),[]),e.jsx("div",{className:"pb-20",children:e.jsx("div",{className:"container mx-auto px-4",children:e.jsxs("div",{className:"py-6",children:[e.jsx("h1",{className:"text-2xl font-bold mb-2",children:"Tech & Family Fun Fair"}),e.jsx("p",{className:"text-gray-600 mb-6",children:"La Pietra Hawaiʻi School For Girls"}),e.jsxs("div",{className:"bg-white rounded-lg shadow-sm p-5 mb-6 border-t-4 border-t-[#004299]",children:[e.jsx("h2",{className:"text-xl font-semibold text-[#004299] mb-4",children:"Event Details"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-[#004299] mb-3",children:"When & Where"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-start",children:[e.jsx("span",{className:"text-[#004299] font-semibold w-20",children:"Date:"}),e.jsx("span",{children:"Saturday, March 8, 2025"})]}),e.jsxs("div",{className:"flex items-start",children:[e.jsx("span",{className:"text-[#004299] font-semibold w-20",children:"Time:"}),e.jsx("span",{children:"11:00 AM - 7:00 PM"})]}),e.jsxs("div",{className:"flex items-start",children:[e.jsx("span",{className:"text-[#004299] font-semibold w-20",children:"Location:"}),e.jsx("span",{children:"La Pietra Hawaii School for Girls"})]}),e.jsxs("div",{className:"flex items-start",children:[e.jsx("span",{className:"text-[#004299] font-semibold w-20",children:"Address:"}),e.jsx("span",{children:"2933 Poni Moi Rd, Honolulu, HI 96815"})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-[#004299] mb-3",children:"About the Event"}),e.jsx("p",{className:"mb-4 text-gray-700",children:"Join us for a day of technology, innovation, and family fun! This annual event brings together students, families, and the community to explore STEAM activities and enjoy interactive demonstrations."}),e.jsx("p",{className:"text-gray-700",children:"With robotics displays, coding workshops, arts and crafts, food vendors, and games for all ages, there's something for everyone at the Tech & Family Fun Fair!"})]})]})]}),e.jsxs("div",{className:"bg-white rounded-lg shadow-sm p-5 mb-6 border-t-4 border-t-[#004299]",children:[e.jsx("h2",{className:"text-xl font-semibold text-[#004299] mb-4",children:"Food Vendors"}),e.jsx("p",{className:"mb-4",children:"Enjoy delicious food and treats from these amazing local vendors:"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:t.map((s=>e.jsxs("div",{className:"border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow",children:[e.jsxs("div",{className:"flex items-center mb-2",children:[e.jsx("span",{className:"text-2xl mr-2",children:s.emoji}),e.jsx("h3",{className:"text-lg font-semibold",children:s.name})]}),e.jsx("p",{className:"text-gray-700 mb-3",children:s.description}),e.jsxs("div",{className:"text-sm space-y-1 text-gray-600",children:[s.location&&e.jsxs("p",{children:[e.jsx("span",{className:"font-semibold",children:"Location:"})," ",s.location]}),s.address&&e.jsxs("p",{children:[e.jsx("span",{className:"font-semibold",children:"Address:"})," ",s.address]}),s.phone&&e.jsxs("p",{children:[e.jsx("span",{className:"font-semibold",children:"Phone:"})," ",s.phone]}),s.website&&e.jsxs("p",{children:[e.jsx("span",{className:"font-semibold",children:"Website:"})," ",e.jsx("a",{href:s.website,target:"_blank",rel:"noopener noreferrer",className:"text-blue-600 hover:underline",children:s.website.replace("https://www.","").replace("https://","")})]})]})]},s.id)))}),e.jsx("div",{className:"mt-4 text-center",children:e.jsx(a,{to:"/vendors",className:"inline-block text-[#004299] font-medium hover:underline",children:"View all merchandise →"})})]}),e.jsxs("div",{id:"register",className:"bg-[#f8f9fa] border border-gray-200 rounded-lg shadow-sm p-5 text-center",children:[e.jsx("h2",{className:"text-xl font-semibold text-[#004299] mb-4",children:"Registration"}),e.jsx("p",{className:"mb-4",children:"Attendance is free, but registration is recommended for planning purposes."}),e.jsx("a",{href:"http://lapietra.edu/TechFair",className:"inline-block py-2 px-6 bg-[#004299] text-white text-center font-medium rounded hover:bg-[#0056c7] transition-colors",children:"Register at lapietra.edu/TechFair"})]})]})})})}export{t as default};
