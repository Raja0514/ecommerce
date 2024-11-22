import { Link } from "react-router-dom";
import {
  FaSearch,
  FaShoppingBag,
  FaSignInAlt,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";
import { useState } from "react";

const user = {
  _id: "gfg",
  role: "admin",
};
const Header = () => {

  const [isopen, setisOpen] = useState<boolean>(false);

  const logoutHandler=()=>{
    setisOpen(false);
  }
  return (
    <nav className="header">
      <Link onClick={() => setisOpen((false))} to="/">HOME</Link>
      <Link onClick={() => setisOpen((false))} to="/cart">
        <FaShoppingBag />
      </Link>
      <Link onClick={() => setisOpen((false))} to="/search">
        <FaSearch />
      </Link>
      {user?._id ? (
        <>
          <button onClick={() => setisOpen((prev) => !prev)}>
            <FaUser />
          </button>
          <dialog open={isopen} >
            <div>
              {user.role === "admin" && (
                <Link onClick={() => setisOpen((false))} to="/admin/Dashboard">Admin</Link>
              )}
              <Link onClick={() => setisOpen((false))} to="/orders">Orders</Link>
              <button onClick={logoutHandler} >
                <FaSignOutAlt />
              </button>
            </div>
          </dialog>
        </>
      ) : (
        <Link to="/login">
          <FaSignInAlt />
        </Link>
      )}
    </nav>
  );
};

export default Header;
