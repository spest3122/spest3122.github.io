import PropTypes from "prop-types";
import { useEffect } from "react";
import "./section.css";
import { sectionList } from "../utils/sectionList";

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

function Section({ callApi, currentUnit, loading, changeUnit, list }) {
  useEffect(() => {
    const container = document.getElementById("content_list");

    const handleScroll = throttle(() => {
      if (
        container.scrollTop + container.clientHeight >
          container.scrollHeight - 200 &&
        !loading
      ) {
        callApi(currentUnit.page);
      }
    }, 200);

    container.addEventListener("scroll", handleScroll);
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [currentUnit.page, currentUnit.unitId]);

  return (
    <section className="section">
      <aside className="aside">
        <ul className="aside_list">
          {sectionList.map((item, index) => (
            <li
              key={"section" + item.id}
              className={`list_place ${
                index === currentUnit.sectionIndex ? "list_place_active" : ""
              }`}
              onClick={() => changeUnit(item.unitId, index)}
              onTouchStart={() => changeUnit(item.unitId, index)}
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
                <a
                  href={item["url"]}
                  className="row_link"
                  target="_blank"
                  rel="noreferrer"
                >
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
Section.propTypes = {
  callApi: PropTypes.func,
  currentUnit: PropTypes.object,
  loading: PropTypes.bool,
  changeUnit: PropTypes.object,
  list: PropTypes.array,
};

export default Section;
