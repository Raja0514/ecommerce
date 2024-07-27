import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";
import Header from "./components/Header";
const Home = lazy(() => import("./pages/Home"));
const Search = lazy(() => import("./pages/Search"));
const Cart = lazy(() => import("./pages/Cart"));
const Orders=lazy(()=>import("./components/Orders"));
const Shipping = lazy(() => import("./pages/Shipping"));
const Orderdetails=lazy(()=>import("./components/Orderdetails"))
const Login = lazy(() => import("./pages/Login"));

// admin import

const Coupon = lazy(() => import("./pages/admin/apps/Coupon"));
const StopWatch = lazy(() => import("./pages/admin/apps/StopWatch"));
const Toss = lazy(() => import("./pages/admin/apps/Toss"));
const Barchart = lazy(() => import("./pages/admin/charts/Barchart"));

const Piechart = lazy(() => import("./pages/admin/charts/Piechart"));
const Linechart = lazy(() => import("./pages/admin/charts/Linechart"));
const Dashboard = lazy(() => import("./pages/admin/Dashboard"));
const Page = lazy(() => import("./pages/admin/Mainpage"));

const Product = lazy(() => import("./pages/admin/Product"));
const Customer = lazy(() => import("./pages/admin/Customer"));
const Transcations = lazy(() => import("./pages/admin/Transaction"));
const Newproduct = lazy(() => import("./pages/admin/management/NewProduct"));

const ProductManagement = lazy(
  () => import("./pages/admin/management/ProductManagement")
);
const TranscationManagement = lazy(
  () => import("./pages/admin/management/TranscationManagement")
);

const App = () => {
  return (
    <Router>
      {/* Header */}
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/cart" element={<Cart />} />
          {/* not logged in */}
          <Route path="/login" element={<Login />} />
          {/* logged user Routes */}
          <Route>
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/orders" element={<Orders/>}/>
            <Route path="/orders/:id" element={<Orderdetails/>}/>
          </Route>

          {/* admin routes */}
          {/* main section */}
          <Route path="/" element={<Page />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/product" element={<Product />} />
          <Route path="/admin/transcation" element={<Transcations />} />
          <Route path="/admin/customer" element={<Customer />} />

          {/* Charts */}

          <Route path="/admin/chart/bar" element={<Barchart />} />
          <Route path="/admin/chart/pie" element={<Piechart />} />
          <Route path="/admin/chart/line" element={<Linechart />} />

          {/* Management */}

          <Route path="/admin/product/new" element={<Newproduct />} />
          <Route path="/admin/product/:id" element={<ProductManagement />} />
          <Route
            path="/admin/transaction/:id"
            element={<TranscationManagement />}
          />

          {/* Apps */}

          <Route path="/admin/app/coupon" element={<Coupon />} />
          <Route path="/admin/app/stopwatch" element={<StopWatch />} />
          <Route path="/admin/app/toss" element={<Toss />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
