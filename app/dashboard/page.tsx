"use client"
import React, { useState } from "react";
import { orders } from "./data";



// --------------------------------------------------
const getStatusStyles = (status: string) => {
  switch (status.toLowerCase()) {
    case "booked":
      return "text-green-700 bg-green-100";
    case "cancelled":
      return "text-red-700 bg-red-100";
    case "pending":
      return "text-blue-700 bg-blue-100";
    case "on route":
      return "text-yellow-700 bg-yellow-100";
    default:
      return "text-gray-700 bg-gray-100";
  }
};



export default function Page() {

// --------------------------------------------------
  const [expandedRows, setExpandedRows] = useState<string[]>([]);
  const toggleExpand = (tracking: string) => {
    setExpandedRows((prev) =>
      prev.includes(tracking)
    ? prev.filter((t) => t !== tracking)
    : [...prev, tracking]
  );
};

// --------------------------------------------------
const headers = Object.keys(orders[0]) as (keyof typeof orders[0])[];

// --------------------------------------------------
  return (
    <div className="w-full md:w-[95%] max-w-[1216px] rounded-xl border border-gray-200 mx-auto my-10 ">


      <div className="flex justify-between items-center pt-3 pr-6 pb-5 pl-6 gap-4 border-b border-gray-100">
          <div>
            <h2 className="text-gray-900 text-lg font-semibold">Customers</h2>
             <p className="text-gray-500 text-sm">These companis have purchased in the last 12 months.</p>
          </div>
          <button className="text-gray-700 hover:text-gray-700">
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
      {/* ======================================================================== */}
      <table className="w-full  border-collapse">
        <thead className="text-xs border border-gray-200 rounded">
          <tr>
            {headers.map((key) => (
              <th key={key} className="text-left  text-gray-600 capitalize bg-gray-50 p-4">
                {key}
              </th>
            ))}
          </tr>
        </thead>
        
        <tbody className="text-sm border border-gray-100">
          {orders.map((order) => {
            const isExpanded = expandedRows.includes(order.tracking);
            const visibleProducts = isExpanded
              ? order.product
              : order.product.slice(0, 1);

            return (
              <tr
                key={order.tracking}
                className="border-b  border-gray-200 hover:bg-gray-50 transition-colors"
              >
                {headers.map((key) => (
                  <td key={key as string} className="p-3 text-gray-700">
                    {key === "product" ? (
                      <div>
                        <ul>
                          {visibleProducts.map((p, i) => (
                            <li key={i} className="border text-xs border-gray-300/60 rounded-md p-1 mb-1">{p}</li>
                          ))}
                        </ul>

                        {order.product.length > 1 && (
                          <button
                            onClick={() => toggleExpand(order.tracking)}
                            className="text-blue-500 text-xs underline mt-1"
                          >
                            {isExpanded
                              ? "Show less"
                              : `+${order.product.length - 1} more items`}
                          </button>
                        )}
                      </div>
                    ) : key === "customer" ? (
                      <div>
                        <div>{order.customer.customerName}</div>
                        <a
                          href={order.customer.addressURL}
                          className="text-black-500 text-xs underline"
                        >
                          View Address
                        </a>
                      </div>
                    ) : (
                      key === "courierStatus" ? (
                          <span className={`px-2 py-1 text-xs rounded-full font-medium ${getStatusStyles(order[key] as string)}`}>
                              {order[key]}
                            </span>
                                ) : (
                            order[key]
                            )

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