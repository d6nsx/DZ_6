import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../store/dataSlice";
import { useSpring, animated } from "@react-spring/web";

const DataFetcher = () => {
    const { data, loading, error } = useSelector((state) => state.data);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(fetchData());
    }, [dispatch]);
  
    const fade = useSpring({
      opacity: data ? 1 : 0,
      transform: data ? "translateY(0px)" : "translateY(-20px)",
      config: { duration: 500 },
    });
  
    return (
      <div style={{ textAlign: "center" }}>
        <h2>API Data</h2>
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>Error: {error}</p>}
        {data && (
          <animated.div style={fade}>
            <h3>{data.title}</h3>
            <p>{data.body}</p>
          </animated.div>
        )}
      </div>
    );
  };
  
  export default DataFetcher;