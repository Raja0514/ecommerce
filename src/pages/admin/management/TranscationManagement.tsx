import Adminsidebar from "../../../components/admin/Adminsidebar.tsx";
import { useState } from "react";
import { Link } from "react-router-dom";

 type OrderItemType = {
  name: string;
  photo: string;
  price: number;
  quantity: number;
  _id: string;
};

type OrederType = {
  name: string;
  address: string;
  city: string;
  country: string;
  state: string;
  pincode: number;
  status: "processing" | "Shipped" | "Delivered";
  subtotal: number;
  discount: number;
  shippingCharge: number;
  tax: number;
  total: number;
  orderItems: OrderItemType[];
  _id: string;
};

const TranscationManagement = () => {
  const img =
    "data:image/jpeg;base64,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";
  const orderItems: OrderItemType[] = [
    {
      name: "puma shoes",
      photo: img,
      _id: "sdasdasdA",
      quantity: 5,
      price: 500,
    },
  ];

  const [order, setOrder] = useState<OrederType>({
    name: "Raja",
    address: "Rusayl",
    city: "Muscat",
    country: "Oman",
    state: "Alkuwaire",
    pincode: 111,
    status: "processing",
    subtotal: 200,
    discount: 10,
    shippingCharge: 0,
    tax: 20,
    total: 200 + 10 + 0 - 20,
    orderItems,
    _id: "122asdasd",
  });

  const {
    address,
    city,
    country,
    state,
    pincode,
    status,
    subtotal,
    discount,
    shippingCharge,
    tax,
    total,
  } = order;

  const UpdateHandler = () => {
    setOrder((prev) => ({
      ...prev,
      status: prev.status === "Shipped" ? "Delivered" : "Shipped",
    }));
  };

  return (
    <div className="admin-container">
      <Adminsidebar />
      <main className="product-management">
        <section>
          <h2>Order Items</h2>
          {order.orderItems.map((i) => (
            <ProductCard
              name={i.name}
              photo={i.photo}
              _id={i._id}
              price={i.price}
              quantity={i.quantity}
            />
          ))}
        </section>
        <article className="shipping-info-card">
          <h1>Order Info</h1>
          <h5>User Info</h5>
          <p>Address:{`${address},${city},${state},${country},${pincode}`}</p>

          <h5>Amount Info</h5>
          <p>SubTotal:{subtotal}</p>
          <p>Shiffing Charges:{shippingCharge}</p>
          <p>Tax:{tax}</p>
          <p>Discount:{discount}</p>
          <p>Total:{total}</p>

          <h5>Status Info</h5>
          <p>
            status:
            <span
              className={
                status === "Delivered"
                  ? "purple"
                  : status === "Shipped"
                  ? "green"
                  : "red"
              }
            >
              {status}
            </span>
          </p>
          <button onClick={UpdateHandler}>Process status</button>
        </article>
      </main>
    </div>
  );
};

export default TranscationManagement;

const ProductCard = ({ name, photo, price, quantity, _id }: OrderItemType) => (
  <div className="transaction-product-card">
    <img src={photo} alt={name} />
    <Link to={`/product/${_id}`}>{name}</Link>
    <span>
      ${price} X {quantity} ={price * quantity}
    </span>
  </div>
);
