import { Column } from "react-table";
import TableHOC from "./TableHOC";

interface DataType {
  id: string;
  quantity: number;
  discount: number;
  amount: number;
  status: string;
}

const columns: Column<DataType>[] = [
  {
    Header: "Id",
    accessor: "id",
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
    Header: "status",
    accessor: "status",
  },
];

const DashboardTable = ({ data = [] }: { data: DataType[] }) => {

  // console.log(data);


  return TableHOC<DataType>(columns, data, "transcation-box", "TopTranscation")();

};

export default DashboardTable;
