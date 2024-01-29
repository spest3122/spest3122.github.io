import { XMarkIcon } from "@heroicons/react/24/solid";
import "./sidebar.css";
const sectionList = [
  { id: 1, name: "苗栗改良場", unitId: "106" },
  { id: 2, name: "畜產試驗所", unitId: "110" },
  { id: 3, name: "林業試驗所", unitId: "105" },
  { id: 4, name: "台東改良場", unitId: "141" },
  { id: 5, name: "桃園改良場", unitId: "807" },
];
const Sidebar = ({ toggleBar }) => {
  return (
    <div className="sidebar">
      <div className="icon-xmark" onClick={toggleBar}>
        <XMarkIcon />
      </div>
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
    </div>
  );
};
export default Sidebar;
