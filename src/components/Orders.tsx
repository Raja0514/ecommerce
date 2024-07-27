import { ReactElement, useState } from "react";
import TableHOC from "./admin/TableHOC";
import { Column } from "react-table";
import { Link } from "react-router-dom";

type Datatype = {
  _id: String;
  amount: number;
  quantity: number;
  discount: number;
  status: ReactElement;
  action: ReactElement;
};

const column: Column<Datatype>[] = [
  {
    Header: "ID",
    accessor: "_id",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Quantity",
    accessor: "quantity",
  },
  {
    Header: "Discount",
    accessor: "discount",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const Orders = () => {

const[rows]=useState<Datatype[]>([
  
  {
  _id:"dsadsa",
  amount: 100,
  quantity: 200,
  discount: 5000,
  status: <span className="red">Processing</span>,
  action: <Link to={`/orders/dsadsa`}>View</Link>,
}

])

  const Table = TableHOC<Datatype>(
    column,
    rows,
    "dashboard-product-box",
    "Orders",
    rows.length>6
   
  )();

  return (
    <div className="container">
      <h1>My Order</h1>
      {Table}
    </div>
  );
};

export default Orders;
