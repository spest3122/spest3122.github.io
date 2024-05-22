import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import callAgriApi from "./component/Logic";
import "./App.css";
import Header from "./component/Header";
import Section from "./component/Section";
import Sidebar from "./component/Sidebar";
// import Footer from "./component/Footer";

function App() {
  const [sideScreen, setSideScreen] = useState(false);
  const toggleSidebar = () => {
    setSideScreen((prev) => !prev);
  };

  const [list, setList] = useState([]);
  const [currentUnit, setCurrentUnit] = useState({
    unitId: "106",
    page: 20,
    sectionIndex: 0,
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    callApi();
  }, [currentUnit.unitId]);

  const callApi = async (next = 0) => {
    setLoading(true);
    let result = await callAgriApi({ id: currentUnit.unitId, page: next });

    if (next > 0) {
      setCurrentUnit((prev) => ({ ...prev, page: prev.page + 20 }));
    }
    setList((prev) => [...prev, ...result]);
    setLoading(false);
  };

  const changeUnit = (unit, index) => {
    setCurrentUnit((prev) => ({
      ...prev,
      unitId: unit,
      page: 20,
      sectionIndex: index,
    }));
    setList([]);
  };
  return (
    <div className="App">
      <Header toggleBar={toggleSidebar} />
      <Section
        list={list}
        currentUnit={currentUnit}
        callApi={callApi}
        changeUnit={changeUnit}
        loading={loading}
      />
      {/* <Footer /> */}
      {sideScreen &&
        createPortal(
          <Sidebar
            toggleBar={toggleSidebar}
            changeUnit={changeUnit}
            sectionIndex={currentUnit.sectionIndex}
          />,
          document.body
        )}
    </div>
  );
}

export default App;
