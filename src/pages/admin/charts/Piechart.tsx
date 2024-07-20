import Adminsidebar from "../../../components/admin/Adminsidebar";
import { PieChart, DonutChart} from "../../../components/admin/Charts";
import { categeories } from "../../../assets/data.json";

const Piechart = () => {
  return (
    <div className="admin-container">
      <Adminsidebar />
      <main className="chart-container">
        <h1 style={{textAlign:"center"}}>PieChart & Dougnut Charts</h1>
        <section>
          <div>
            <PieChart
              labels={["Processing", "Shipped", "Deliverd"]}
              data={[12, 9, 13]}
              backgroundColor={[
                `hsl(110,80%,80%)`,
                `hsl(110,80%,50%)`,
                `hsl(110,40%,50%)`,
              ]}
              offset={[0, 0, 50]}
            />
          </div>
          <h2>Order Fullfillment Ratio</h2>
        </section>
        <section>
          <div>
            <DonutChart
              labels={categeories.map((i) => i.heading)}
              data={categeories.map((i) => i.value)}
              backgroundColor={categeories.map(
                (i) => `hsl(${i.value * 6},${i.value}%,40%)`
              )}
              legends={false}
              offset={[0, 0, 0, 80]}
            />
          </div>
          <h2>Product Catgeories Ratio</h2>
        </section>

        <section>
          <div>
            <DonutChart
              labels={["In Stock", "Out Of Stock"]}
              data={[40, 30]}
              backgroundColor={["hsl(269,80%,40%)", "rgb(53,162,255)"]}
              legends={false}
              offset={[0, 80]}
              cutout={"70%"}
            />
          </div>
          <h2>Stock Availability</h2>
        </section>

        <section>
          <div>
            <DonutChart
              labels={[
                "Marketing Cost",
                "Discount",
                "Burnt",
                "Production cost",
                "Net Margin",
              ]}
              data={[32, 18, 5, 20, 25]}
              backgroundColor={[
                "hsl(110,80%,40%)",
                "hsl(19,80%,40%)",
                "hsl(69,80%,40%)",
                "hsl(300,80%,40%)",
                "rgb(53,162,255)"
              ]}
              legends={false}
              offset={[20,30,20,30,80]}
            
            />
          </div>
          <h2>Revenue Distribution</h2>
        </section>
        <section>
          <div>
            <PieChart
              labels={["Teenager(Below 20)", "Adult (20-40)", "Older (abouve 40)"]}
              data={[30,250,70]}
              backgroundColor={[
                `hsl(10,${80}%,80%)`,
                `hsl(10,${80}%,50%)`,
                `hsl(10,${40}%,50%)`,
              ]}
              offset={[0, 0, 50]}
            />
          </div>
          <h2>User Age Group</h2>
        </section>
        <section>
          <div>
            <DonutChart
              labels={["Admin", "Customers"]}
              data={[40, 250]}
              backgroundColor={[`hsl(335,100%,38%)`, "rgb(53,162,255)"]}
             
              offset={[0, 80]}
            
            />
          </div>
         
        </section>
      </main>
    </div>
  );
};

export default Piechart;
