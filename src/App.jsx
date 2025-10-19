import { Fog } from "./components/Fog";
import tree1 from "./assets/tree1.svg";
import tree2 from "./assets/tree2.svg";
import tree3 from "./assets/tree3.svg";
import { Countdown } from "./components/Countdown";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const eventDate = useMemo(() => new Date("2025-11-01T18:00:00+05:30"), []);
  const [email,setEmail] = useState("");

  const handleSubmit = () => {
      if(email.endsWith(".ic.25@nitj.ac.in") || email.endsWith(".ic.24@nitj.ac.in") || email.endsWith(".ic.23@nitj.ac.in") || email.endsWith(".ic.22@nitj.ac.in")) {
        sessionStorage.setItem('userEmail', email);
        navigate('/ticket');
      }
      else if(email.endsWith("@nitj.ac.in")) {
        navigate('/access-denied');
      }
      else {
        navigate('/external-access');
      }
    }

  useEffect(() => {
    function updateCountdown() {
      const now = new Date();
      const diff = eventDate - now;

      if (diff <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }

    // Initial call
    updateCountdown();

    // Update every second
    const interval = setInterval(updateCountdown, 1000);

    // Cleanup on unmount
    return () => clearInterval(interval);
  }, [eventDate]);

  return (
    <div className="w-[100vw] h-[100vh] flex flex-col gap-5 justify-center items-center">
      <div className="flex absolute top-0">
        <Fog />
      </div>
      <div className="flex justify-center items-center flex-col">
        <h1 className="font flex gap-3 stroked-text text-black/20 text-6xl">
          WELCOME TO THE UPSIDE <p className="rotate-x-180 bottom-5 relative">NWOD</p>
        </h1>
        <h3 className="font stroked-text text-black/20 text-4xl">
          Something STRANGE awaits...
        </h3>
      </div>
      <div className="font text-[#CD2404]">The portal is opening in</div>
      <div className="flex gap-16 py-5">
        <Countdown num={timeLeft.days} text={"days"}/>
        <Countdown num={timeLeft.hours}  text={"hours"}/>
        <Countdown num={timeLeft.minutes} text={"minutes"}/>
        <Countdown num={timeLeft.seconds} text={"seconds"}/>
      </div>
      <div className="absolute z-10 left-0 bottom-0">
        <img className="w-[400px]" src={tree1} alt="" />
      </div>
      <div className="absolute z-10 right-0 bottom-0">
        <img className="w-[400px]" src={tree2} alt="" />
      </div>
      <div className="absolute z-10 right-14 top-0">
        <img className="w-[400px]" src={tree3} alt="" />
      </div>
      <div className="flex flex-col justify-start items-center">
        <div className="bg-black/80 p-6 rounded-lg shadow-lg">
          <h1 className="font text-[#CD2404] text-2xl mb-2">
            Test your worth
          </h1>
          <div className="flex items-center">
            <input
              type="email"
              onChange={(e)=>setEmail(e.target.value)}
              onKeyDown={(e)=>
                {
                  if(e.key == 'Enter') handleSubmit();
                }
              }
              className="border-[1px] border-[#CD2404]/40 font max-w-[90%] w-[400px] placeholder:opacity-40 p-2 rounded-tl-lg rounded-bl-lg focus:outline-none focus:ring-2 focus:ring-[#CD2404]/70 bg-black/60 text-white"
              placeholder="Email"
            />
            <button onClick={()=>handleSubmit()} className="bg-[#CD2404] rounded-br-lg rounded-tr-lg p-2 font-bold font text-white hover:bg-[#FF5733] transition-all duration-300 shadow-lg hover:shadow-[#CD2404]/50">
              Test Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
