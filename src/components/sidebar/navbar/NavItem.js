import { BsCardList } from "react-icons/bs";

const NavItem = ({title,selected}) => {
  return (
    <li className={`list-group-item ${selected?'selected':''}`}>
      <span className="board-item-icon">
        <BsCardList size="1.5em" />
      </span>
      <span className="ps-2">{title}</span>
    </li>
  );
};

export default NavItem;
