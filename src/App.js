import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import Timer from "./components/Counter";
import DataFetcher from "./components/DataFetch";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Timer />
        <hr />
        <DataFetcher />
      </div>
    </Provider>
  );
};

export default App;
