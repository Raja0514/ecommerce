import { IconType } from "react-icons";
import {
  RiDashboard2Fill,
  RiShoppingBag3Fill,
  RiCoupon3Fill,
} from "react-icons/ri";
import { Link, useLocation, Location } from "react-router-dom";
import { AiFillFileText } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import {
  FaChartBar,
  FaChartPie,
  FaChartLine,
  FaStopwatch,
  FaGamepad,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import {HiMenu} from "react-icons/hi";
import { MdDashboard } from "react-icons/md";

const Adminsidebar = () => {
  const location = useLocation();
  const [showModel, setShoowModel] = useState<boolean>(false);
  const [phoneActive, setPhoneActive] = useState<boolean>(
    window.innerWidth < 1100
  );

  const resizehandler=()=>{
    setPhoneActive(window.innerWidth<1100);
  }

  useEffect(()=>{
    window.addEventListener("resize",resizehandler)
  },[])

  return (
    <>
      {phoneActive && (
        <button id="hamburger" onClick={() => setShoowModel(true)}>
         <HiMenu />
        </button>
      )}
      <aside
        style={
          phoneActive
            ? {
                width: "20rem",
                height: "100vh",
                position: "fixed",
                top: 0,
                left: showModel ? "0" : "-20rem",
                transition: "all 0.5s",
              }
            : {}
        }
      >
        <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
        <Link to="/"> 
        
        <MdDashboard style={{fontSize:"3rem", border:"5px dashed red",}} />
       
        </Link>
 
        </div>
              
        <Divone location={location} />
        <DivTwo location={location} />
        <DivThree location={location} phoneactive={phoneActive} showmodel={setShoowModel} />
      </aside>
    </>
  );
};

export default Adminsidebar;

interface Liprops {
  url: string;
  text: string;
  location: Location;
  Icon: IconType;
}

const Li = ({ url, text, location, Icon }: Liprops) => (
  <li
    style={{
      backgroundColor: location.pathname.includes(url)
        ? "rgba(0,115,255,0.1)"
        : "white",
    }}
  >
    <Link
      to={url}
      style={{
        color: location.pathname.includes(url) ? "rgba(0,115,255)" : "black",
      }}
    >
      <Icon />
      {text}
    </Link>
  </li>
);

const Divone = ({ location }: { location: Location }) => (
  <div>
    <h5>Dashboard</h5>

    <ul>
      <Li
        url="/admin/dashboard"
        Icon={RiDashboard2Fill}
        location={location}
        text="Dashboard"
      />

      <Li
        url="/admin/product"
        Icon={RiShoppingBag3Fill}
        location={location}
        text="Product"
      />

      <Li
        url="/admin/customer"
        Icon={IoIosPeople}
        location={location}
        text="Customer"
      />

      <Li
        url="/admin/transcation"
        Icon={AiFillFileText}
        location={location}
        text="Transactions"
      />
    </ul>
  </div>
);

const DivTwo = ({ location }: { location: Location }) => (
  <div>
    <h5>charts</h5>

    <ul>
      <Li
        url="/admin/chart/bar"
        Icon={FaChartBar}
        location={location}
        text="Bar"
      />

      <Li
        url="/admin/chart/pie"
        Icon={FaChartPie}
        location={location}
        text="Pie"
      />

      <Li
        url="/admin/chart/line"
        Icon={FaChartLine}
        location={location}
        text="Line"
      />
    </ul>
  </div>
);

const DivThree = ({
  location,
  phoneactive,
  showmodel
}: {
  location: Location;
  phoneactive: boolean;
  showmodel:React.Dispatch<React.SetStateAction<boolean>>
}) => (
  <div>
    <h5>apps</h5>

    <ul>
      <Li
        url="/admin/app/stopwatch"
        Icon={FaStopwatch}
        location={location}
        text="Stopwatch"
      />

      <Li
        url="/admin/app/coupon"
        Icon={RiCoupon3Fill}
        location={location}
        text="Coupon"
      />

      <Li
        url="/admin/app/toss"
        Icon={FaGamepad}
        location={location}
        text="Toss"
      />
    </ul>
    {phoneactive && <button id="close-sidebar" onClick={()=>{showmodel(false)}}>Close</button>}
  </div>
);
