import { BsCardList } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="bords-list">
      <ul className="list-group pe-4">
        <li className="list-group-item selected">
          <span className="board-item-icon">
            <BsCardList size="1.5em" />
          </span>
          <span className="ps-2">Platform Launch</span>
        </li>
        <li className="list-group-item">
          <span className="board-item-icon">
            <BsCardList size="1.5em" />
          </span>
          <span className="ps-2">Marketing Plan</span>
        </li>
        <li className="list-group-item">
          <span className="board-item-icon">
            <BsCardList size="1.5em" />
          </span>
          <span className="ps-2">Roadmap</span>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
