import Adminsidebar from "../../../components/admin/Adminsidebar";
import { BarChart } from "../../../components/admin/Charts";


const months=[
  "jan",
  "Feb",
  "mar",
  "apr",
  "may",
  "june",
  "july",
  "aug",
  "sept",
  "oct",
  "nov",
  "Dec"
]

const Barchart = () => {
  return (
    <div className="admin-container">
      <Adminsidebar />
      <main className="chart-container">
        <h1 style={{textAlign:"center"}} >BarChart</h1>
        <section>
          <BarChart 
           data_1={[2998,2533,1644,2488,2566,2478,2878,2888,1888,2222,1111,1222]}
           data_2={[2255,3289,3156,2912,1966,1745,2782,1788,2999,1222,3333,1212]}
           title_1="Products"
           title_2="Users"
           bgColor_1={`hsl(260,50%,30%)`}
           bgColor_2={`hsl(360,40%,70%)`}
           labels={months}
        />
         <h2>Top Selling products & Top Customers</h2>
        </section>
        <section>
          <BarChart 
          horizantal={true}
           data_1={[698,533,644,488,566,478,878,452,122,121,120,550]}
           data_2={[]}
           title_1="Products"
           title_2="Users"
           bgColor_1={`hsl(260,50%,70%)`}
           bgColor_2=""
           labels={months}
        />
        <h2>Orders Throughout the year</h2>
        </section>
      </main>
    </div>
  );
};

export default Barchart;
