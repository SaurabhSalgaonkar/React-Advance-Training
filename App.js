import { Header } from "./src/Header";
import Home from "./src/Home";
import { Routes, Route } from "react-router-dom";
import Profile from "./src/Profile";
import About from "./src/About";
import { useEffect, useState, useReducer } from "react";
import { userContext } from "./userContext";
import { reducer, setName, initialState } from "./reducer";
import Cart from "./src/Cart";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const App = () => {
  //   const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);
  // Authentication
  useEffect(() => {
    //some-api
    dispatch(setName("Saurabh New"));
  }, []);

  return (
    <>
      <Provider store={appStore}>
        <userContext.Provider
          value={{ userName: state?.userName, info: state?.info, dispatch }}
        >
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="profile" element={<Profile />} />
            <Route path="cart" element={<Cart />} />
          </Routes>
        </userContext.Provider>
      </Provider>
    </>
  );
};

export default App;
