import Adminsidebar from "../../components/admin/Adminsidebar";
import { BsSearch } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import user from "../../assets/images/user.png";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
import data from "../../assets/data.json";
import { BarChart, DonutChart } from "../../components/admin/Charts";
import { BiMaleFemale } from "react-icons/bi";
import Table from '../../components/admin/DashboardTable';



const Dashboard = () => {


  
  return (
    <div className="admin-container">
      <Adminsidebar />
      <main className="dashboard">
        <div className="bar">
          <BsSearch />
          <input type="text" placeholder="Search" />
          <FaRegBell  />
          <img src={user} alt="userlogo" />
        </div>

        <section className="widget-container">
          <WidgetItem
            heading="Revenue"
            amount={true}
            value={3400}
            color="blue"
            percent={91}
          />
          <WidgetItem
            heading="Users"
            value={400}
            color="rgb(0 198 202)"
            percent={-84}
          />
          <WidgetItem
            heading="Transcations"
            value={23000}
            color="rgb(255,196,0)"
            percent={85}
          />
          <WidgetItem
            heading="Products"
            value={1000}
            color="rgb(76 0 255)"
            percent={90}
          />
        </section>

        <section className="graph-container">
          <div className="rvenue-chart">
            <h2>Revenue & Transcations</h2>
            {/* graphs here */}

            <BarChart
              data_2={[200, 554, 899, 456, 478, 456, 785]}
              data_1={[300, 500, 700, 900, 500, 400, 800]}
              title_1="Revenue"
              title_2="Transactions"
              bgColor_1="rgb(0,115,255)"
              bgColor_2="rgb(53,162,235,0.8)"
              // horizantal={true}
            />
          </div>
          <div className="dashboard-categeories">
            <h2>Inventry</h2>

            <div>
              {data.categeories.map((i) => (
                <CategeoryItem
                  key={i.heading}
                  heading={i.heading}
                  value={i.value}
                  color={`hsl(${i.value * 3},${i.value}%,50%)`}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="transcation-container">
          <div className="gender-chart">
            <h2>Gender Ratio</h2>

            <DonutChart
              labels={["Female", "Male"]}
              data={[12, 19]}
              backgroundColor={["hsl(340,86%,56%)", "rgba(53,162,235,0.8)"]}
              cutout={90}
              offset={[10]}
            />
            <p>
              <BiMaleFemale />
            </p>
          </div>

          <div>
            
          <Table data={data.transcation} />

          </div>

          
        
        </section>
      </main>
    </div>
  );
};

export default Dashboard;

interface widgetItemProps {
  heading: string;
  value: number;
  percent: number;
  color: string;
  amount?: boolean;
}

const WidgetItem = ({
  heading,
  value,
  percent,
  color,
  amount = false,
}: widgetItemProps) => (
  <article className="widget">
    <div className="widget-info">
      <p>{heading}</p>

      <h4>{amount ? `$${value}` : value}</h4>
      {percent > 0 ? (
        <span className="green">
          <HiTrendingUp />+{percent}%{" "}
        </span>
      ) : (
        <span className="red">
          <HiTrendingDown /> {percent}%{" "}
        </span>
      )}
    </div>

    <div
      className="widget-circle"
      style={{
        background: `conic-gradient(

      ${color} ${(Math.abs(percent) / 100) * 360}deg,rgb(255,255,255) 0
      
      )`,
      }}
    >
      <span color={color}> {percent}% </span>
    </div>
  </article>
);

interface CategeoryItemProps {
  color: string;
  value: number;
  heading: string;
}

const CategeoryItem = ({ color, value, heading }: CategeoryItemProps) => (
  <div className="categeory-item">
    <h5>{heading}</h5>
    <div>
      <div style={{ backgroundColor: color, width: `${value}%` }}></div>
    </div>

    <span>{value}%</span>
  </div>
);
