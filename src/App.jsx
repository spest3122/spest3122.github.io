import { useState } from "react";
import { createPortal } from "react-dom";
import "./App.css";
import Header from "./component/Header";
import Section from "./component/Section";
import Sidebar from "./component/Sidebar";

import Footer from "./component/Footer";
function App() {
  const [sideScreen, setSideScreen] = useState(false);
  const toggleSidebar = () => {
    setSideScreen((prev) => !prev);
  };

  return (
    <div className="App">
      <Header toggleBar={toggleSidebar} />
      <Section />
      {/* <Footer /> */}
      {sideScreen &&
        createPortal(<Sidebar toggleBar={toggleSidebar} />, document.body)}
    </div>
  );
}

export default App;
