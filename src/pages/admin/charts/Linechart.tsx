
import Adminsidebar from "../../../components/admin/Adminsidebar"
import  {LineChart}  from "../../../components/admin/Charts";

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug","sept","oct","nov","dec"];

const Linechart = () => {
  return (
    <div className="admin-container">
      <Adminsidebar/>
      <main className="chart-container">
        <h1 style={{textAlign:"center"}} >Line Chart</h1>
        <section>
          <LineChart
          data={[200,444,444,556,778,455,990,1444,256,447,1000,1200]}
          label="Users"
          borderColor="rgb(53,162,255)"
          backgroundColor="rgb(53,162,255,0.5)"
         
          labels={months}
        />
         <h2>Active Users</h2>
        </section>

        <section>
          <LineChart
          data={[20,44,455,556,77,45,99,14,25,700,44,133]}
          label="Revenue"
          borderColor={"hsl(269,80%,40%)"}
          backgroundColor={"hsla(269,80%,40%,0.5)"}
         
          labels={months}
        />
         <h2>Total Products (SKU)</h2>
        </section>

        <section>
          <LineChart
          data={[20000,44440,44455,55644,77844,45545,99000,14440,256000,44700,100044,120033]}
          label="Products"
          borderColor={"hsl(129,80%,40%)"}
          backgroundColor={"hsla(129,80%,40%,0.4)"}
         
          labels={months}
        />
         <h2>Total Revenue</h2>
        </section>
        <section>
          <LineChart
          data={[9000,40000,3000,4000,6000,7000,10000,12000,20000,45000,35000,13000]}
          label="Discount"
          borderColor={"hsl(29,80%,40%)"}
          backgroundColor={"hsla(29,80%,40%,0.4)"}
         
          labels={months}
        />
         <h2>Discount Allotted</h2>
        </section>
      </main>
    </div>
  )
}

export default Linechart
