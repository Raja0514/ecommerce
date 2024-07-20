import { ReactElement, useCallback, useState } from "react";
import Adminsidebar from "../../components/admin/Adminsidebar";
import TableHoc from "../../components/admin/TableHOC";
import { Column } from "react-table";
import { Link } from "react-router-dom";
import {FaPlus} from 'react-icons/fa'
interface DataType {
  photo: ReactElement;
  name: string;
  price: number;
  stock: number;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Photo",
    accessor: "photo",
  },
  {
    Header: "Price",
    accessor: "price",
  },
  {
    Header: "Stock",
    accessor: "stock",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const img1 =
  "https://cdn.thewirecutter.com/wp-content/media/2024/05/running-shoes-2048px-9718.jpg";
const img2 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdpTy3e7xHdeJU9HJLdHpNCA_LHQxq2lTvXQ&s";

const arr: DataType[] = [
  {
    photo: <img src={img1} alt="loog" />,
    name: "Shoes",
    price: 650,
    stock: 23,
    action: <Link to="/admin/product/sadads">Manage</Link>,
  },
  {
    photo: <img src={img2} alt="loog" />,
    name: "MacBook",
    price: 700,
    stock: 53,
    action: <Link to="/admin/product/sadads">Manage</Link>,
  },
  {
    photo: <img src={img1} alt="loog" />,
    name: "Shoes",
    price: 650,
    stock: 23,
    action: <Link to="/admin/product/sadads">Manage</Link>,
  },
  {
    photo: <img src={img2} alt="loog" />,
    name: "MacBook",
    price: 700,
    stock: 53,
    action: <Link to="/admin/product/sadads">Manage</Link>,
  },
  {
    photo: <img src={img1} alt="loog" />,
    name: "Shoes",
    price: 650,
    stock: 23,
    action: <Link to="/admin/product/sadads">Manage</Link>,
  },
  {
    photo: <img src={img2} alt="loog" />,
    name: "MacBook",
    price: 700,
    stock: 53,
    action: <Link to="/admin/product/sadads">Manage</Link>,
  },
  {
    photo: <img src={img1} alt="loog" />,
    name: "Shoes",
    price: 650,
    stock: 23,
    action: <Link to="/admin/product/sadads">Manage</Link>,
  },
  {
    photo: <img src={img2} alt="loog" />,
    name: "MacBook",
    price: 700,
    stock: 53,
    action: <Link to="/admin/product/sadads">Manage</Link>,
  },
  {
    photo: <img src={img1} alt="loog" />,
    name: "Shoes",
    price: 650,
    stock: 23,
    action: <Link to="/admin/product/sadads">Manage</Link>,
  },
  {
    photo: <img src={img2} alt="loog" />,
    name: "MacBook",
    price: 700,
    stock: 53,
    action: <Link to="/admin/product/sadads">Manage</Link>,
  },
  {
    photo: <img src={img1} alt="loog" />,
    name: "Shoes",
    price: 650,
    stock: 23,
    action: <Link to="/admin/product/sadads">Manage</Link>,
  },
  {
    photo: <img src={img2} alt="loog" />,
    name: "MacBook",
    price: 700,
    stock: 53,
    action: <Link to="/admin/product/sadads">Manage</Link>,
  },
  {
    photo: <img src={img1} alt="loog" />,
    name: "Shoes",
    price: 650,
    stock: 23,
    action: <Link to="/admin/product/sadads">Manage</Link>,
  },
  {
    photo: <img src={img2} alt="loog" />,
    name: "MacBook",
    price: 700,
    stock: 53,
    action: <Link to="/admin/product/sadads">Manage</Link>,
  },
];

const Product = () => {
  const [data] = useState<DataType[]>(arr);

  const Table = useCallback(
    TableHoc<DataType>(columns, data, "dashboard-product-box", "Products",true),
    []
  );

  return (
    <div className="admin-container" >
     
      <Adminsidebar />
   
      
      <main>{Table()}</main>
   
      <Link to="/admin/product/new"  className="create-product-button">
       <FaPlus/>      
      </Link>
     
      
    </div>
  );
};

export default Product;
