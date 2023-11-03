import React, { useState } from "react";
import { Transition } from "react-transition-group";
import "./App.css";
import BackgroundPage from "./Components/BackgroundPage";
import Sidenav from "./Components/Sidenav";
import { useAmazonContext } from "./Context/AmazonContext";

function App() {
  const [navOpen, setNavOpen] = useState(true); // Navbar'ı başlangıçta açık olarak ayarlayın
  const { setSubContainer } = useAmazonContext();

  const { entryStore } = useAmazonContext();

  return (
    <div className="App">
      <Transition
        in={navOpen && entryStore}
        timeout={0}
        mountOnEnter
        unmountOnExit
      >
        {(state) => {
          if (state === "exited") setSubContainer(false);
          return (
            <>
              <Sidenav state={state} />
              {/* <div
                className="overlay"
                style={
                  state === "entering"
                    ? { animation: "show .3s forwards" }
                    : state === "entered"
                    ? { opacity: "1" }
                    : { animation: "show .3s backwards reverse" }
                }
              ></div> */}
              {/* <div
                className="closeBtn"
                style={
                  state === "entering"
                    ? { animation: "show .3s forwards" }
                    : state === "entered"
                    ? { opacity: "1" }
                    : { animation: "show .3s backwards reverse" }
                }
              >
                &times;
              </div> */}
            </>
          );
        }}
      </Transition>
      <BackgroundPage />
    </div>
  );
}

export default App;
