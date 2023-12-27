import { useEffect } from "react";
import axios from "../../axios";
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
  useEffect(() => {
    // callApi();
  }, []);
  const callApi = async () => {
    let result = await axios.get("UnitId=106&$top=10");
    console.log(result);
  };
  return (
    <section className="section">
      <aside>
        <ul>
          {sectionList.map((item) => (
            <li key={"section" + item.id}>{item.name}</li>
          ))}
        </ul>
      </aside>
      <main>I'm main</main>
    </section>
  );
}

export default Section;
