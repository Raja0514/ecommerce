import Adminsidebar from "../../../components/admin/Adminsidebar";
import { useState, useEffect } from "react";

const formatTime = (timeInSeconds: number) => {
  const hours = String(Math.floor(timeInSeconds / 3600));
  const minitues = String(Math.floor((timeInSeconds % 3600) / 60));
  const seconds = String(timeInSeconds % 60);
  const hoursinstring = hours.toString().padStart(2, "0");
  const minituesinstring = minitues.toString().padStart(2, "0");
  const secondsinstring = seconds.toString().padStart(2, "0");
  return `${hoursinstring} : ${minituesinstring} : ${secondsinstring}`;
};

const StopWatch = () => {
  const [time, setTime] = useState<number>(0);

  const [isactive, setActive] = useState<boolean>(false);

  const resetHandler = () => {
    setTime(0);
    setActive(false);
  };

  useEffect(() => {
    if (isactive) {
      let intervalId = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
      return () => {
        clearInterval(intervalId);
      };
    }
  }, [isactive]);

  return (
    <div className="admin-container">
      <Adminsidebar />
      <main className="dashboard-app-container">
        <h1 style={{textAlign:"center"}}>StopWatch</h1>
        <section>
          <div className="stopwatch">
            <h2>{formatTime(time)}</h2>
            <button onClick={() => setActive((prev) => !prev)}>
              {isactive ? "Stop" : "Start"}
            </button>
            <button onClick={resetHandler}>Reset</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default StopWatch;
