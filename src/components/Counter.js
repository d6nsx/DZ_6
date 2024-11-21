import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { startTimer, stopTimer, resetTimer, tick } from "../store/CounterSlice";
import { useSpring, animated } from "@react-spring/web";

const Timer = () => {
    const { time, isRunning } = useSelector((state) => state.timer);
    const dispatch = useDispatch();
  
    useEffect(() => {
      let interval;
      if (isRunning) {
        interval = setInterval(() => {
          dispatch(tick());
        }, 1000);
      }
      return () => clearInterval(interval);
    }, [isRunning, dispatch]);
  
    const fade = useSpring({
      opacity: isRunning ? 1 : 0.5,
      transform: isRunning ? "scale(1)" : "scale(0.9)",
    });
  
    return (
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <animated.h1 style={fade}>Timer: {time} seconds</animated.h1>
        <div style={{ marginTop: "1rem" }}>
          <button onClick={() => dispatch(startTimer())} style={buttonStyle}>
            Start
          </button>
          <button onClick={() => dispatch(stopTimer())} style={buttonStyle}>
            Stop
          </button>
          <button onClick={() => dispatch(resetTimer())} style={buttonStyle}>
            Reset
          </button>
        </div>
      </div>
    );
  };
  
  const buttonStyle = {
    margin: "0 5px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "5px",
    border: "1px solid #ddd",
    background: "#f5f5f5",
  };
  
  export default Timer;