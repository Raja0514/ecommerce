import Adminsidebar from "../../../components/admin/Adminsidebar";
import { ChangeEvent, useState } from "react";

const NewProduct = () => {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>();
  const [stock, setStock] = useState<number>();
  const [photo, setPhoto] = useState<string>("");

  const changeImageHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined = e.target.files?.[0];

    const reader: FileReader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (typeof reader.result === "string") setPhoto(reader.result);
      };
    }
  };

  return (
    <div className="admin-container">
      <Adminsidebar />
      <main className="product-management">
        <article>
          <form>
            <h2>New Product</h2>
            <div>
              <label htmlFor="name">Name</label>

              <input
                type="text"
                placeholder="Enter your name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="name">Price</label>

              <input
                type="Number"
                id="name"
                required
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
              />
            </div>
            <div>
              <label htmlFor="name">Stock</label>

              <input
                type="Number"
                id="name"
                placeholder="Enter Stock"
                required
                value={stock}
                onChange={(e) => setStock(Number(e.target.value))}
              />
            </div>

            <div>
              <label>photo</label>
              <input type="file" onChange={changeImageHandler} />
            </div>

            {photo && <img src={photo} alt="newimage" />}

            <button type="submit">Create</button>
          </form>
        </article>
      </main>
    </div>
  );
};
export default NewProduct;
