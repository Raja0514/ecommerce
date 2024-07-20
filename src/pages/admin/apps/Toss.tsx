
import { useState } from "react"
import Adminsidebar from "../../../components/admin/Adminsidebar"

const Toss = () => {

const[angle,setAngle]=useState<number>(0);

const flipcoin=()=>{
  if(Math.random()>0.5) setAngle(prev=>prev+180);
  else setAngle(prev=>prev+360);
}

  return (
    <div className="admin-container">
        <Adminsidebar/>
        <main className="dashboard-app-container ">
            <h1 style={{textAlign:"center"}}>Toss</h1>
            <section>
              <article className="tosscoin" onClick={flipcoin}
              
              style={{transform:`rotateY(${angle}deg)`}}
              >
              <div></div>
              <div></div>
              </article>
            </section>
        </main>
      
    </div>
  )
}

export default Toss
