import{j as e}from"./index.BOOQtDV5.js";import{b as r}from"./react.DDht0Ot4.js";function a(){const[a,t]=r.useState([]),[s,l]=r.useState(!0),[d,i]=r.useState(null);r.useEffect((()=>{console.log("Fetching vendors data...");const e="/TechFamilyFunFair/assets/data/vendors.json";console.log("Fetching from URL:",e),fetch(e).then((r=>{if(console.log("Response status:",r.status),!r.ok)throw console.error("Failed to fetch vendors data:",r),new Error(`HTTP error! Status: ${r.status}, URL: ${e}`);return r.json()})).then((e=>{console.log("Vendors data loaded:",e.length,"items");const r=e.filter((e=>"food"===e.type));console.log("Food vendors filtered:",r.length,"items"),t(r),l(!1)})).catch((e=>{console.error("Error loading vendors:",e),i(`${e.message} - Please check browser console for details`),l(!1)}))}),[]);const o=({type:r,url:a="#"})=>e.jsx("a",{href:a||{google:"#",yelp:"#",instagram:"#"}[r],target:"_blank",rel:"noopener noreferrer",className:"px-4 py-2 rounded-lg bg-[#004299] dark:bg-dark-primary text-white dark:text-white text-sm font-medium \n          hover:bg-[#003580] dark:hover:bg-[#2563EB] \n          hover:text-white dark:hover:text-white\n          hover:shadow-md hover:scale-105 \n          transition-all duration-200 ease-in-out\n          inline-block text-center min-w-[90px]",title:`Visit ${r} page`,children:{google:"Google",yelp:"Yelp",instagram:"Instagram"}[r]});return e.jsxs("div",{className:"container mx-auto px-4 pb-20",children:[e.jsxs("div",{className:"pt-12 py-8 text-center",children:[e.jsx("h1",{className:"text-3xl font-bold text-[#004299] dark:text-white",children:"Tech & Family Fun Fair"}),e.jsx("p",{className:"mt-2 text-gray-600 dark:text-gray-300",children:e.jsx("a",{href:"https://www.lapietra.edu",target:"_blank",rel:"noopener noreferrer",className:"hover:underline",children:"La Pietra Hawai'i School for Girls"})}),e.jsx("p",{className:"text-gray-600 dark:text-gray-300",children:"Saturday, March 8, 2025 • 11am - 7pm"})]}),e.jsx("div",{className:"mb-6",children:e.jsx("a",{href:"https://www.lapietra.edu/uploads/files/la-pietra-tfff-map-2025.pdf?v=1741044934751",target:"_blank",rel:"noopener noreferrer",className:"block w-full py-4 px-6 bg-[#004299] hover:bg-[#003580] dark:bg-dark-primary dark:hover:bg-dark-primary-hover transition-all duration-300 \n                     text-white dark:text-white text-center text-xl font-bold rounded-lg shadow-lg \n                     hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]",children:e.jsxs("div",{className:"flex items-center justify-center space-x-3",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-7 w-7 text-white dark:text-white",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"})}),e.jsx("span",{className:"dark:text-white",children:"Event Map"})]})})}),e.jsxs("div",{className:"bg-white dark:bg-dark-card rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 mb-6",children:[e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:["Join us for a day of technology, fun, and learning! Explore interactive exhibits, try out VR experiences, enjoy delicious food, and connect with tech enthusiasts.",e.jsx("br",{}),e.jsx("a",{href:"https://www.lapietra.edu/giving/tech-family-fun-fair/",className:"text-blue-600 dark:text-blue-400 hover:underline",children:"Register"})," to stay updated on Technology at La Pietra."]}),e.jsx("div",{className:"mt-4 grid grid-cols-1 md:grid-cols-2 gap-4"})]}),e.jsxs("div",{className:"bg-white dark:bg-dark-card rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 mb-6",children:[e.jsx("div",{className:"flex justify-between items-center mb-4",children:e.jsx("h2",{className:"text-xl font-bold text-[#004299] dark:text-white",children:"Food Vendors"})}),s&&e.jsx("div",{className:"text-center py-4",children:e.jsx("p",{className:"dark:text-gray-300",children:"Loading food vendors..."})}),d&&e.jsx("div",{className:"text-center py-4 text-red-500",children:e.jsxs("p",{children:["Error loading food vendors: ",d]})}),!s&&!d&&e.jsx(e.Fragment,{children:a.length>0?e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4",children:a.map((r=>e.jsxs("div",{className:"bg-gray-50 dark:bg-dark-secondary rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 p-4 flex flex-col h-full",children:[e.jsxs("div",{className:"flex items-center mb-2",children:[r.emoji&&e.jsx("span",{className:"text-2xl mr-2",children:r.emoji}),e.jsx("div",{children:e.jsx("h3",{className:"font-medium dark:text-white",children:r.name})})]}),r.description&&e.jsx("p",{className:"mt-2 text-sm text-gray-700 dark:text-gray-300",children:r.description}),e.jsxs("div",{className:"mt-3 space-y-1 text-sm",children:[r.phone&&e.jsxs("div",{className:"text-gray-600 dark:text-gray-400",children:[e.jsx("span",{className:"font-medium",children:"Phone:"})," ",r.phone]}),r.website&&e.jsxs("div",{className:"text-gray-600 dark:text-gray-400",children:[e.jsx("span",{className:"font-medium",children:"Website:"})," ",e.jsx("a",{href:r.website,target:"_blank",rel:"noopener noreferrer",className:"text-blue-600 dark:text-blue-400 hover:underline",children:r.website.replace("https://www.","").replace("https://","")})]}),r.address&&e.jsxs("div",{className:"text-gray-600 dark:text-gray-400",children:[e.jsx("span",{className:"font-medium",children:"Address:"})," ",r.address]})]}),e.jsx("div",{className:"mt-auto pt-4",children:(r.googleUrl||r.yelpUrl||r.instagramUrl)&&e.jsxs("div",{className:"flex justify-center gap-3 flex-wrap",children:[r.googleUrl&&e.jsx(o,{type:"google",url:r.googleUrl}),r.yelpUrl&&e.jsx(o,{type:"yelp",url:r.yelpUrl}),r.instagramUrl&&e.jsx(o,{type:"instagram",url:r.instagramUrl})]})})]},r.id)))}):e.jsx("p",{className:"text-center py-4 text-gray-500 dark:text-gray-400",children:"No food vendors available."})})]}),e.jsxs("div",{className:"bg-white dark:bg-dark-card rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4",children:[e.jsx("div",{className:"flex justify-between items-center mb-4",children:e.jsx("h2",{className:"text-xl font-bold text-[#004299] dark:text-white",children:"Merchandise"})}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300",children:"Shop for tech gadgets, educational toys, and unique merchandise from our vendors."})]}),e.jsx("br",{}),e.jsxs("div",{className:"bg-white dark:bg-dark-card rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 mb-6",children:[e.jsx("div",{className:"flex justify-between items-center mb-4",children:e.jsx("h2",{className:"text-xl font-bold text-[#004299] dark:text-white",children:"Experiences"})}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300",children:"Explore interactive tech experiences including VR, robotics, laser cutting, flight simulators, and more! Perfect for all ages."})]}),e.jsxs("div",{className:"bg-white dark:bg-dark-card rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 mb-6",children:[e.jsx("div",{className:"flex justify-between items-center mb-4",children:e.jsx("h2",{className:"text-xl font-bold text-[#004299] dark:text-white"})}),e.jsx("div",{className:"flex justify-center",children:e.jsxs("picture",{children:[e.jsx("source",{srcSet:"/TechFamilyFunFair/assets/images/tech-fair-highlight.webp",type:"image/webp"}),e.jsx("img",{src:"/TechFamilyFunFair/assets/images/tech-fair-highlight.jpg",alt:"Tech & Family Fun Fair Highlight",className:"rounded-lg max-w-full h-auto shadow-md",width:"800",height:"450",loading:"lazy"})]})}),e.jsx("p",{className:"mt-3 text-sm text-gray-600 dark:text-gray-400 text-center"})]}),e.jsxs("div",{className:"bg-white dark:bg-dark-card rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 mb-6",children:[e.jsx("div",{className:"flex justify-between items-center mb-4",children:e.jsx("h2",{className:"text-xl font-bold text-[#004299] dark:text-white",children:"Featured Videos"})}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"font-medium text-gray-800 dark:text-gray-200 mb-2",children:"Robotics Overview"}),e.jsx("div",{className:"relative",style:{paddingBottom:"56.25%"},children:e.jsx("iframe",{className:"absolute top-0 left-0 w-full h-full rounded-lg shadow-md",src:"https://www.youtube-nocookie.com/embed/LYXsFgiDduc?rel=0",title:"Tech Fair Overview",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"})}),e.jsx("p",{className:"mt-2 text-sm text-gray-600 dark:text-gray-400",children:"Get a quick overview of what to expect at this year's Tech & Family Fun Fair."})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-medium text-gray-800 dark:text-gray-200 mb-2",children:"Last Year's Highlights"}),e.jsx("div",{className:"relative",style:{paddingBottom:"56.25%"},children:e.jsx("iframe",{className:"absolute top-0 left-0 w-full h-full rounded-lg shadow-md",src:"https://www.youtube-nocookie.com/embed/2JK4ypL39fk?rel=0",title:"Last Year's Highlights",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"})}),e.jsx("p",{className:"mt-2 text-sm text-gray-600 dark:text-gray-400",children:"See the excitement and fun from our previous Tech & Family Fun Fair event."})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-medium text-gray-800 dark:text-gray-200 mb-2",children:"TechZone innovation space"}),e.jsx("div",{className:"relative",style:{paddingBottom:"56.25%"},children:e.jsx("iframe",{className:"absolute top-0 left-0 w-full h-full rounded-lg shadow-md",src:"https://www.youtube-nocookie.com/embed/hEebBBtDL-U?rel=0",title:"DIY Robot Workshop",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"})}),e.jsx("p",{className:"mt-2 text-sm text-gray-600 dark:text-gray-400",children:"Learn about our space that empowers learning            "})]})]}),e.jsx("div",{className:"text-center mt-2",children:e.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400"})})]}),e.jsxs("div",{className:"bg-white dark:bg-dark-card rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 mb-6",children:[e.jsx("div",{className:"flex justify-between items-center mb-2",children:e.jsx("h2",{className:"text-xl font-bold text-[#004299] dark:text-white",children:"Need Help?"})}),e.jsxs("div",{className:"flex items-center space-x-3 text-gray-700 dark:text-gray-300",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 text-[#004299] dark:text-dark-primary",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),e.jsxs("p",{children:["Visit the ",e.jsx("span",{className:"font-medium",children:"Information/Volunteer Booth"})," at the main entrance for assistance, event maps, schedules, and general questions."]})]})]})]})}export{a as default};
