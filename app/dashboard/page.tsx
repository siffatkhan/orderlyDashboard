// "use client"
// import React, { useState } from "react";
// import { orders } from "./data";


// // --------------------------------------------------
// const getStatusStyles = (status: string) => {
//   switch (status.toLowerCase()) {
//     case "booked":
//       return "text-gray-700 bg-[#D9F2D0]";
//     case "cancelled":
//       return "text-gray-700 bg-[#F2D0D0]";
//     case "pending":
//       return "text-gray-700 bg-[#D0EBF2]";
//     case "on route":
//       return "text-gray-700 bg-[#F2F0D0]";
//     default:
//       return "text-gray-700 bg-gray-100";
//   }
// };


// // const [openDotMenu, setOpenDotMenu] = useState(false);



// export default function Page() {
// // --------------------------------------------------
//   const [expandedRows, setExpandedRows] = useState<string[]>([]);
//   const toggleExpand = (tracking: string) => {
//     setExpandedRows((prev) =>
//       prev.includes(tracking)
//     ? prev.filter((t) => t !== tracking)
//     : [...prev, tracking]
//   );
// };

// // --------------------------------------------------
// const headers = Object.keys(orders[0]) as (keyof typeof orders[0])[];

// // --------------------------------------------------
//   return (
//     <div className="overflow-x-auto md:overflow-visible w-full md:w-[95%] max-w-[1216px] max-h-[569px] rounded-xl border bg-white border-gray-200 mx-auto my-20">
//       <div className="flex justify-between  h-[92px] items-center pt-3 pr-6 pb-5 pl-6 gap-4 border-b border-gray-100">
//           <div>
//             <h2 className="text-gray-900 text-[18px] font-semibold">Customers</h2>
//              <p className="text-gray-600 text-sm  font-normal font-w mt-1.5">These companies have purchased in the last 12 months.</p>
//           </div>
//           <button className="text-gray-700 cursor-pointer">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={2}
//                 stroke="currentColor"
//                 className="w-5 h-5"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M12 6h.01M12 12h.01M12 18h.01" />
//             </svg>
//           </button>

    

//       </div>
//       {/* ======================================================================== */}
//       <table className="min-w-[800px] md:min-w-full text-xs sm:text-sm border-collapse">
//         <thead className="text-xs bg-[#FAFAFA] border-b border-[#E9EAEB] ">
//           <tr>
//             {headers.map((key) => (
//               <th key={key} className="min-w-[112px] font-semibold h-[44px] text-left  text-gray-600 capitalize px-4 py-3 sm:px-3 sm:py-2 ">
//                 {key}
//               </th>
//             ))}
//           </tr>
//         </thead>
        
//         <tbody className="text-[14px] font-medium leading-[20px] text-gray-900 border border-gray-200">
//           {orders.map((order) => {
//             const isExpanded = expandedRows.includes(order.tracking);
//             const visibleProducts = isExpanded
//               ? order.product
//               : order.product.slice(0, 1);

//             return (
//               <tr
//                 key={order.tracking}
//                 className="border-b border-gray-200 h-[72px] sm:h-[60px]"
//               >
//                 {headers.map((key) => (
//                   <td key={key as string} className="p-4 text-gray-900 ">
//                     {key === "product" ? (
//                       <div className="w-[200px]">
//                         <ul>
//                           {visibleProducts.map((p, i) => (
//                             // <li key={i} className=" inline-block w-fit border text-gray-700 text-xs h-[22px] leading-[18px] border-gray-300/60 rounded-md px-2 py-[2px] mb-1">
//                             <li key={i} className="inline-block w-fit border text-gray-700 text-xs sm:text-[11px] h-[22px] leading-[18px] border-gray-300/60 rounded-md px-2 py-[2px] mb-1">

//                               {p}</li>
//                           ))}
//                         </ul>

//                         {order.product.length > 1 && (
//                           <button
//                             onClick={() => toggleExpand(order.tracking)}
//                             className="text-[#5798F4] text-xs  mt-1"
//                           >
//                             {isExpanded
//                               ? "Show less"
//                               : `+${order.product.length - 1} more items`}
//                           </button>
//                         )}
//                       </div>
//                     ) : key === "customer" ? (
//                       <div>
//                         <div>{order.customer.customerName}</div>
//                         <a
//                           href={order.customer.addressURL}
//                           className="text-gray-600 text-xs  font-normal underline"
//                         >
//                           View Address
//                         </a>
//                       </div>
//                     ) : (
//                       key === "courierStatus" ? (
//                           <span className={`px-2 py-1 text-[12px] rounded-full font-medium ${getStatusStyles(order[key] as string)}`}>
//                               {order[key]}
//                             </span>
//                                 ) : (
//                             order[key]
//                             )
//                     )}
//                   </td>
//                 ))}
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
  
//     </div>
//   );
// }



// Poora flow Urdu me:

// shuru me koi order expand nahi hai
// user “+2 more” pe click karta hai
// tracking number list me add hota hai
// React table dobara banata hai
// wo order ke saare products dikhata hai
// user “Show less” pe click karta hai
// tracking number list se nikal jata hai
// React dobara render karta hai
// sirf 2 products dikhata hai



// ===============================================================

"use client";
import React, { useState } from "react";
import { orders } from "./data";

// --------------------------------------------------
const getStatusStyles = (status: string) => {
  switch (status.toLowerCase()) {
    case "booked":
      return "text-gray-700 bg-[#D9F2D0]";
    case "cancelled":
      return "text-gray-700 bg-[#F2D0D0]";
    case "pending":
      return "text-gray-700 bg-[#D0EBF2]";
    case "on route":
      return "text-gray-700 bg-[#F2F0D0]";
    default:
      return "text-gray-700 bg-gray-100";
  }
};

export default function Page() {
  const [expandedRows, setExpandedRows] = useState<string[]>([]);
  const toggleExpand = (tracking: string) => {
    setExpandedRows((prev) =>
      prev.includes(tracking)
        ? prev.filter((t) => t !== tracking)
        : [...prev, tracking]
    );
  };

  const headers = Object.keys(orders[0]) as (keyof typeof orders[0])[];

  return (
    <div className="overflow-x-auto md:overflow-visible w-full md:w-[95%] max-w-[1216px] max-h-[569px] rounded-xl border bg-white border-gray-200 my-10 md:my-20 mx-4 md:mx-auto">
      {/* ---------------- HEADER ---------------- */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center h-auto md:h-[92px] pt-3 pr-3 pb-3 pl-3 md:pt-3 md:pr-6 md:pb-5 md:pl-6 gap-2 md:gap-4 border-b border-gray-100">
        <div>
          <h2 className="text-gray-900 text-[15px] md:text-[18px] font-semibold ">Customers </h2>
          <p className="text-gray-600 text-[12px] md:text-sm font-normal mt-1 md:mt-1.5 ">
            These companies have purchased in the last 12 months.</p>
            </div>
          <button className="text-gray-700 cursor-pointer">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6h.01M12 12h.01M12 18h.01" />
            </svg>
          </button>
      </div>
      {/* ---------------- TABLE ---------------- */}
      <table className="min-w-[720px] md:min-w-full border-collapse">
        <thead className="bg-[#FAFAFA] border-b border-[#E9EAEB]">
          <tr>
            {headers.map((key) => (
              <th
                key={key}
                className="text-[11px] min-w-[120px] md:h-[44px] font-semibold text-left text-gray-600 capitalize  px-2 py-1.5 md:px-4 md:py-3"
              >
                {key}
              </th>
            ))}
          </tr>


        </thead>

        <tbody className="text-[12px] md:text-[14px] font-medium leading-[17px] md:leading-[20px] text-gray-900">
          {orders.map((order) => {
            const isExpanded = expandedRows.includes(order.tracking);
            const visibleProducts = isExpanded
              ? order.product
              : order.product.slice(0, 1);

            return (
              <tr
                key={order.tracking}
                className="border-b border-gray-200 h-[50px] md:h-[72px]"
              >
                {headers.map((key) => (
                  <td
                    key={key as string}
                    className="p-3 md:p-4 text-gray-900 align-top min-w-[120px]"
                  >
                    {key === "product" ? (
                      <div className="w-[140px] md:w-[200px]">
                        <ul className="flex flex-wrap gap-[3px]">
                          {visibleProducts.map((p, i) => (
                            <li
                              key={i}
                              className="inline-block border text-gray-700 text-[10px] md:text-xs leading-[15px] border-gray-300/60 rounded-md px-[5px] py-[1px]"
                            >{p}
                            </li>
                          ))}
                        </ul>

                        {order.product.length > 1 && (
                          <button
                            onClick={() => toggleExpand(order.tracking)}
                            className="text-[#5798F4] text-[10px] md:text-xs mt-0.5 underline"
                          >
                            {isExpanded
                              ? "Show less"
                              : `+${order.product.length - 1} more items`}
                          </button>
                        )}
                      </div>
                    ) : key === "customer" ? (
                      <div>
                        <div className="text-[12px] md:text-[14px] md:w-[100px] font-medium text-gray-900">
                          {order.customer.customerName}
                        </div>
                        <a
                          href={order.customer.addressURL}
                          className="text-gray-600 text-[10px] md:text-xs font-normal underline"
                        >
                          View Address
                        </a>
                      </div>
                    ) : key === "courierStatus" ? (
                      <span
                        className={`px-2 py-[2px] text-[10px] md:text-[12px] rounded-full font-medium ${getStatusStyles(
                          order[key] as string
                        )}`}
                      >
                        {order[key]}
                      </span>
                    ) : (
                      order[key]
                    )}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      
    </div>
  );
}

// ==================================================================================
// What this does:
// Mobile-first: Base text/padding = mobile. Desktop uses md: overrides.

// Header: 16px title on mobile, 18px on desktop.

// Paragraph: 13px on mobile, 14px on desktop.

// Table text: 13px → 14px.

// Product tags: 11px → 12px.

// Address link: 11px → 12px.

// Padding: 12px (mobile) → 16px (desktop).

// Row height: 60px (mobile) → 72px (desktop).

// No overflow or text squeeze on small screens.

// ===========================================================================




//   return (
//     <div className="overflow-x-auto md:overflow-visible w-full md:w-[95%] max-w-[1216px] max-h-[569px] rounded-xl border bg-white border-gray-200 mx-auto my-8 md:my-20 px-3 md:px-0">
//       {/* ---------------- HEADER ---------------- */}
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center h-auto md:h-[92px] pt-3 pr-3 pb-3 pl-3 md:pt-3 md:pr-6 md:pb-5 md:pl-6 gap-2 md:gap-4 border-b border-gray-100">
//         <div>
//           <h2 className="text-gray-900 text-[15px] md:text-[18px] font-semibold">Customers</h2>
//           <p className="text-gray-600 text-[12px] md:text-sm font-normal mt-1 md:mt-1.5">
//             These companies have purchased in the last 12 months.
//           </p>
//         </div>
//         <button className="text-gray-700 cursor-pointer hidden md:block">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={2}
//             stroke="currentColor"
//             className="w-5 h-5"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" d="M12 6h.01M12 12h.01M12 18h.01" />
//           </svg>
//         </button>
//       </div>

//       {/* ---------------- TABLE ---------------- */}
//       <table className="min-w-[760px] md:min-w-full border-collapse">
//         <thead className="bg-[#FAFAFA] border-b border-[#E9EAEB]">
//           <tr>
//             {headers.map((key) => (
//               <th
//                 key={key}
//                 className="text-[11px] md:text-[12px] font-semibold text-left text-gray-600 capitalize px-2 py-1.5 md:px-4 md:py-3 min-w-[120px]"
//               >
//                 {key}
//               </th>
//             ))}
//           </tr>
//         </thead>

//         <tbody className="text-[12px] md:text-[14px] font-medium leading-[17px] md:leading-[20px] text-gray-900 border border-gray-200">
//           {orders.map((order) => {
//             const isExpanded = expandedRows.includes(order.tracking);
//             const visibleProducts = isExpanded
//               ? order.product
//               : order.product.slice(0, 1);

//             return (
//               <tr
//                 key={order.tracking}
//                 className="border-b border-gray-200 h-[52px] md:h-[72px]"
//               >
//                 {headers.map((key) => (
//                   <td
//                     key={key as string}
//                     className="p-2 md:p-4 text-gray-900 align-top min-w-[140px]"
//                   >
//                     {key === "product" ? (
//                       <div className="w-[140px] md:w-[200px]">
//                         <ul className="flex flex-wrap gap-[3px]">
//                           {visibleProducts.map((p, i) => (
//                             <li
//                               key={i}
//                               className="inline-block border text-gray-700 text-[10px] md:text-xs leading-[15px] border-gray-300/60 rounded-md px-[5px] py-[1px]"
//                             >
//                               {p}
//                             </li>
//                           ))}
//                         </ul>

//                         {order.product.length > 1 && (
//                           <button
//                             onClick={() => toggleExpand(order.tracking)}
//                             className="text-[#5798F4] text-[10px] md:text-xs mt-0.5 underline"
//                           >
//                             {isExpanded
//                               ? "Show less"
//                               : `+${order.product.length - 1} more`}
//                           </button>
//                         )}
//                       </div>
//                     ) : key === "customer" ? (
//                       <div className="min-w-[140px]">
//                         <div className="text-[12px] md:text-[14px] font-medium text-gray-900 truncate">
//                           {order.customer.customerName}
//                         </div>
//                         <a
//                           href={order.customer.addressURL}
//                           className="text-gray-600 text-[10px] md:text-xs font-normal underline"
//                         >
//                           View Address
//                         </a>
//                       </div>
//                     ) : key === "courierStatus" ? (
//                       <span
//                         className={`px-2 py-[2px] text-[10px] md:text-[12px] rounded-full font-medium ${getStatusStyles(
//                           order[key] as string
//                         )}`}
//                       >
//                         {order[key]}
//                       </span>
//                     ) : (
//                       <span className="whitespace-nowrap">{order[key]}</span>
//                     )}
//                   </td>
//                 ))}
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// }
