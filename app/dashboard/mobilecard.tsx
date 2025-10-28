"use client";
import React from "react";
import { orders } from "./data";

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

export default function MobileCard() {
  return (
    <div className="block md:hidden space-y-4 p-3 bg-gray-50">
      {orders.map((order) => (
        <div
          key={order.tracking}
          className="border border-gray-200 rounded-xl p-4 shadow-sm bg-white"
        >
          <div className="font-semibold text-gray-900">{order.customer.customerName}</div>
          <div className="text-xs text-gray-500 mb-1">{order.tracking}</div>

          <div
            className={`inline-block px-2 py-1 text-xs rounded-full font-medium ${getStatusStyles(
              order.courierStatus
            )}`}
          >
            {order.courierStatus}
          </div>

          <div className="mt-2 text-xs text-gray-700">
            <strong>Courier:</strong> {order.courier}
          </div>

          <ul className="mt-2 text-xs">
            {order.product.slice(0, 2).map((p, i) => (
              <li
                key={i}
                className="border border-gray-200 rounded-md p-1 mb-1 bg-gray-50"
              >
                {p}
              </li>
            ))}
          </ul>

          <a
            href={order.customer.addressURL}
            className="text-blue-500 text-xs underline mt-2 block"
          >
            View Address
          </a>

          <div className="mt-2 text-xs text-gray-500">{order.orderDate}</div>
        </div>
      ))}
    </div>
  );
}
