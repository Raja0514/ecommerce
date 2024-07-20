import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
const Home = () => {

const addtocartHandler=()=>{

}


  return (
    <div className="home">
      <section></section>
      <h1>
        latest Products
        <Link to="/search">More</Link>
      </h1>
      <main>
        <ProductCard
          productId="sadsad"
          name="Mackbook"
          price={50000}
          stock={100}
          handler={addtocartHandler}
          photo="https://pimcdn.sharafdg.com/cdn-cgi/image/width=600,height=600,fit=pad/images/MACBOOKAIRM12020_space_grey_1?1719922330?g=0"
        />
          
      </main>
    </div>
  );
};

export default Home;
