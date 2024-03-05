import { Header } from "./src/Header";
import Home from "./src/Home";
import { Routes, Route } from "react-router-dom";
import Profile from "./src/Profile";
import About from "./src/About";
import { useEffect, useState, useReducer } from "react";
import { userContext } from "./userContext";
import { reducer, setName, initialState } from "./reducer";

const App = () => {
//   const [name, setName] = useState("");
    const [ state, dispatch ] = useReducer(reducer, initialState);
    // Authentication
  useEffect(() => {
    //some-api
    dispatch(setName("Saurabh New"));
  }, []);

  console.log(state);
  return (
    <>
      <userContext.Provider value={{ userName: state?.userName, info: state?.info, dispatch}}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Profile" element={<Profile />} />
        </Routes>
      </userContext.Provider>
    </>
  );
};

export default App;
