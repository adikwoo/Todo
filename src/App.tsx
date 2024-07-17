

import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import AllToDo from "./components/ToDoListAll/AllToDo";
import Header from "./components/Header/Header";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <AllToDo />
      </div>
    </Provider>
  );
};

export default App;
