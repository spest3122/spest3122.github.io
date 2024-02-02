import { useEffect, useState } from "react";
import callAgriApi from "../Logic";
import "./section.css";

const sectionList = [
  { id: 1, name: "苗栗改良場", unitId: "106" },
  { id: 2, name: "畜產試驗所", unitId: "110" },
  { id: 3, name: "林業試驗所", unitId: "105" },
  { id: 4, name: "台東改良場", unitId: "141" },
  { id: 5, name: "桃園改良場", unitId: "807" },
];

const throttle = (func, wait) => {
  let shouldWait = false;
  return function (...args) {
    if (!shouldWait) {
      func(...args);
      shouldWait = true;

      setTimeout(function () {
        shouldWait = false;
      }, wait);
    }
  };
};
function Section() {
  const [list, setList] = useState([]);
  const [currentUnit, setCurrentUnit] = useState("106");
  const [sectionIndex, setSectionIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(20);

  useEffect(() => {
    callApi();
  }, [currentUnit]);

  useEffect(() => {
    const container = document.getElementById("content_list");

    const handleScroll = throttle(() => {
      if (
        container.scrollTop + container.clientHeight >
          container.scrollHeight - 200 &&
        !loading
      ) {
        callApi(page);
      }
    }, 200);

    container.addEventListener("scroll", handleScroll);
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [page, currentUnit]);

  const callApi = async (next = 0) => {
    setLoading(true);
    let result = await callAgriApi({ id: currentUnit, page: next });

    if (next > 0) {
      setPage((prev) => prev + 20);
    }
    setList((prev) => [...prev, ...result]);
    setLoading(false);
  };

  const changeUnit = (unit, index) => {
    setCurrentUnit(unit);
    setList([]);
    setSectionIndex(index);
    setPage(20);
  };
  return (
    <section className="section">
      <aside className="aside">
        <ul className="aside_list">
          {sectionList.map((item, index) => (
            <li
              key={"section" + item.id}
              className={`list_place ${
                index === sectionIndex ? "list_place_active" : ""
              }`}
              onClick={() => changeUnit(item.unitId, index)}
            >
              <div className="place_box">
                <p className="place_title">{item.name}</p>
              </div>
              {item.name.length > 5 && (
                <span className="tooltip">{item.name}</span>
              )}
            </li>
          ))}
        </ul>
      </aside>
      <main className="main">
        <ul className="content_list" id="content_list">
          {loading ? (
            <div>Loading ....</div>
          ) : (
            list.map((item, index) => (
              <li key={"list" + index} className="list_row">
                <a href={item["url"]} className="row_link" target="_blank">
                  <div className="row_block">
                    <p className="row_title">
                      <span>技轉項目 : </span>
                      {item["title"]}
                    </p>
                    <span className="row_date">{item["date"]}</span>
                  </div>
                  <p className="row_vendor">
                    <span>授權業者 : </span>
                    {item["vendor"]}
                  </p>
                </a>
              </li>
            ))
          )}
        </ul>
      </main>
    </section>
  );
}

export default Section;
