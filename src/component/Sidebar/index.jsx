import PropTypes from "prop-types";
import { XMarkIcon } from "@heroicons/react/24/solid";
import "./sidebar.css";
import { sectionList } from "../utils/sectionList";

const Sidebar = ({ toggleBar, changeUnit, sectionIndex }) => {
  const sidebarChangeUnit = (id, index) => {
    changeUnit(id, index);
    toggleBar();
  };
  return (
    <div className="sidebar">
      <div className="icon-xmark" onClick={toggleBar}>
        <XMarkIcon />
      </div>
      <ul className="aside_list">
        {sectionList.map((item, index) => (
          <li
            key={"section" + item.id}
            className={`list_place ${
              index === sectionIndex ? "list_place_active" : ""
            }`}
            onClick={() => sidebarChangeUnit(item.unitId, index)}
            onTouchStart={() => sidebarChangeUnit(item.unitId, index)}
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

Sidebar.propTypes = {
  toggleBar: PropTypes.func,
  changeUnit: PropTypes.func,
  sectionIndex: PropTypes.number,
};
export default Sidebar;
