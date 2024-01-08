import { Bars3Icon } from "@heroicons/react/24/solid";

import "./header.css";

function Header({ toggleBar }) {
  return (
    <header className="header">
      <div className="icon-bar3" onClick={toggleBar}>
        <Bars3Icon />
      </div>
      <h2>農業相關技術移轉列表</h2>
    </header>
  );
}

export default Header;
