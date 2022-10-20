import { BsCardList } from "react-icons/bs";
import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <div className="bords-list">
      <ul className="list-group pe-4">
        <NavItem title="Platform Launch" selected/>
        <NavItem title="Marketing Plan" />
        <NavItem title="Roadmap" />
      </ul>
    </div>
  );
};

export default Navbar;
