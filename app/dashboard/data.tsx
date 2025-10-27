interface Customer{
    customerName:string;
    addressURL:string;
}
interface Order {
    tracking: string;
    courier:string;
    courierStatus:string;
    customer: Customer;
    product:string[];
    price:string;
    orderDate:string;
    remarks:string;
}

export const orders : Order[] = [
  {
    tracking : "2220304012 #9302",
    courier: "Trax",
    courierStatus: "Booked",
    customer: {customerName:"Saqib Shah",addressURL:"/customers/saqib-shah/address"},
    product: ["Swissgear bag x 1","MI 20k mAh powerbank x 2","Swissgear bag x 1"],
    price: "Rs 4199/-",
    orderDate: "15th Oct 2025, 08:38 AM",
    remarks: "Customer needs this order asap"
  },
  {
    tracking: "2220304012 #9303",
    courier: "Trax",
    courierStatus: "Cancelled",
    customer: {
      customerName: "Saqib Shah",
      addressURL: "/customers/saqib-shah/address"
    },
    product: ["MI 20k mAh powerbank x 2","Swissgear bag x 1"],
    price: "Rs 4199/-",
    orderDate: "16th Oct 2025, 11:15 AM",
    remarks: "Customer wants to return"
  },
  {
    tracking: "2220304012 #9304",
    courier: "TCS",
    courierStatus: "On Route",
    customer: {
      customerName: "Saqib Shah",
      addressURL: "/customers/saqib-shah/address"
    },
    product: ["Swissgear bag x 1"],
    price: "Rs 4199/-",
    orderDate: "17th Oct 2025, 09:20 AM",
    remarks: "Rider issue"
  },
  {
    tracking: "2220304012 #9305",
    courier: "Call Courier",
    courierStatus: "Pending",
    customer: {
      customerName: "Saqib Shah",
      addressURL: "/customers/saqib-shah/address"
    },
    product: ["MI 20k mAh powerbank x 2","Swissgear bag x 1","lkjSwissgear bag x 1"],
    price: "Rs 4199/-",
    orderDate: "18th Oct 2025, 02:45 PM",
    remarks: "Repeat order"
  }
];
