import { Link } from "react-router-dom";

const Filter = () => {
  return (
    <div className="navbar-center bg-base-100">
      <ul className="menu menu-horizontal px-3 text-base">
        <li>
          <Link to="/">All</Link>
        </li>
        <li>
          <Link to="/cybersecurity">CyberSecurity</Link>
        </li>
        <li>
          <Link to="/fullstack">FullStack Development</Link>
        </li>
        <li>
          <Link to="/datascience">DataScience</Link>
        </li>
        <li>
          <Link to="/career">Career</Link>
        </li>
      </ul>
    </div>
  );
};

export default Filter;
