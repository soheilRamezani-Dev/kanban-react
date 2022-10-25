import NavItem from "./NavItem";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeBoard } from "../../../redux/actions";

const Navbar = () => {
  const boards = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const clickHandler = (key) => {
    dispatch(changeBoard(key));
  };
  return (
    <div className="bords-list">
      <ul className="list-group pe-4">
        {boards.map((val, index) => {
          return (
            <div onClick={() => clickHandler(index)}>
              <NavItem 
                key={index}
                title={val.boardName}
                selected={val.selected}
              />
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
