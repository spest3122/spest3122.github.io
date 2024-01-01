import { useEffect, useState } from "react";
import { mdaresApi } from "../Logic";
import "./section.css";

const sectionList = [
  { id: 1, name: "苗栗改良場", unitId: "106" },
  { id: 2, name: "畜產試驗所", unitId: "110" },
  { id: 3, name: "林業試驗所", unitId: "105" },
  { id: 4, name: "台東改良場", unitId: "141" },
  { id: 5, name: "桃園改良場", unitId: "807" },
  { id: 6, name: "農業藥物試驗所", unitId: "D41" },
];
function Section() {
  const [list, setList] = useState([]);
  useEffect(() => {
    callApi();
  }, []);
  const callApi = async () => {
    let result = await mdaresApi();
    setList(result);
  };
  return (
    <section className="section">
      <aside className="aside">
        <ul className="aside_list">
          {sectionList.map((item, index) => (
            <li
              key={"section" + item.id}
              className={`list_place ${index === 0 ? "list_place_active" : ""}`}
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
      <main>
        <ul className="content">
          {list.map((item, index) => (
            <li key={"list" + index}>
              <a href={item["url"]}>
                <span>{item["title"]}</span>
                <span>{item["date"]}</span>
                <span>{item["vendor"]}</span>
              </a>
            </li>
          ))}
        </ul>
      </main>
    </section>
  );
}

export default Section;
