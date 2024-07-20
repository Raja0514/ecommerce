import Adminsidebar from "../../../components/admin/Adminsidebar";
import { ChangeEvent, FormEvent, useState } from "react";

const CustomerManagement = () => {
  const img =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUfMv77TyevunfWK_-BN3R4AYRJ0y8OP2bUw&s";

  const [name, setName] = useState<string>("puma");
  const [price, setPrice] = useState<number>(90);
  const [stock, setStock] = useState<number>(10);
  const [photo, setPhoto] = useState<string>(img);

  const [nameupdate, setNameupdate] = useState<string>(name);
  const [priceupdate, setPriceupdate] = useState<number>(price);
  const [stockupdate, setStockupdate] = useState<number>(stock);
  const [photoupdate, setPhotoupdate] = useState<string>(photo);

  const changeImageHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined = e.target.files?.[0];

    const reader: FileReader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (typeof reader.result === "string") setPhotoupdate(reader.result);
      };
    }
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setName(nameupdate);
    setPrice(priceupdate);
    setStock(stockupdate);
    setPhoto(photoupdate);
    console.log("welcome")
  };

  return (
    <div className="admin-container">
      <Adminsidebar />
      <main className="product-management">
        <section>
          <strong>ID-sdasdasdasda</strong>
          <img src={photo} style={{ width: "100%" }} alt="product" />
          <p>{name}</p>
          {stock > 0 ? (
            <span className="green">{stock} Available</span>
          ) : (
            <span className="red">not Available</span>
          )}
          <h3>${price}</h3>
        </section>

        <article>
          <form onSubmit={submitHandler}>
            <h2>Manage Product</h2>
            <div>
              <label htmlFor="name">Name</label>

              <input
                type="text"
                placeholder="Enter your name"
                required
                value={nameupdate}
                onChange={(e) => setNameupdate(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="name">Price</label>

              <input
                type="Number"
                id="name"
                required
                placeholder="Price"
                value={priceupdate}
                onChange={(e) => setPriceupdate(Number(e.target.value))}
              />
            </div>
            <div>
              <label htmlFor="name">Stock</label>

              <input
                type="Number"
                id="name"
                placeholder="Enter Stock"
                required
                value={stockupdate}
                onChange={(e) => setStockupdate(Number(e.target.value))}
              />
            </div>

            <div>
              <label>photo</label>
              <input type="file" onChange={changeImageHandler} />
            </div>

            {photoupdate && <img src={photoupdate} alt="newimage" />}

            <button type="submit">Update</button>
          </form>
        </article>
      </main>
    </div>
  );
};

export default CustomerManagement;
