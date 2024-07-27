import { useState } from "react";
import ProductCard from "../components/ProductCard";
const Search = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [maxprice, setMaxprice] = useState(100000);
  const [categeory, setcategeory] = useState("");
  const [page, setPage] = useState(1);

  const addtocartHandler = () => {};

  const isPrevPage = page > 1;
  const isNextpage = page < 4;

  return (
    <div className="product-search-page">
      <aside>
        <h2>Filters</h2>
        <div>
          <h4>sort</h4>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="">none</option>
            <option value="asc">price(Low to High)</option>
            <option value="dsc">price(High to Low)</option>
          </select>
        </div>
        <div>
          <h4>Max Price :{maxprice || ""}</h4>
          <input
            type="range"
            min={100}
            max={100000}
            value={maxprice}
            onChange={(e) => setMaxprice(Number(e.target.value))}
          />
        </div>

        <div>
          <h4>Categeory</h4>
          <select
            value={categeory}
            onChange={(e) => setcategeory(e.target.value)}
          >
            <option value="">All</option>
            <option value="sads">Sample1</option>
            <option value="asdsa">Sample2</option>
          </select>
        </div>
      </aside>
      <main>
        <h1>Products</h1>
        <input
          type="text"
          placeholder="Search by Name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="search-product-name">
          <ProductCard
            productId="sadsad"
            name="Mackbook"
            price={50000}
            stock={100}
            handler={addtocartHandler}
            photo="https://pimcdn.sharafdg.com/cdn-cgi/image/width=600,height=600,fit=pad/images/MACBOOKAIRM12020_space_grey_1?1719922330?g=0"
          />
        </div>

        <article>
          <button
            disabled={!isPrevPage}
            onClick={() => setPage((prev) => prev - 1)}
          >
            Prev
          </button>
          <span>
            {page}of{4}
          </span>
          <button
            disabled={!isNextpage}
            onClick={() => setPage((prev) => prev + 1)}
          >
            Next
          </button>
        </article>
      </main>
    </div>
  );
};

export default Search;
