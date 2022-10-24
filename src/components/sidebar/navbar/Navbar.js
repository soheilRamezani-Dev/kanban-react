import NavItem from "./NavItem";
import { useSelector } from "react-redux";

const Navbar = () => {
  const boards = useSelector(state=>state.tasks)
  return (
    <div className="bords-list">
      <ul className="list-group pe-4">
        {boards.map((val,index)=>{
          return <NavItem key={index} title={val.boardName} selected ={val.selected}/>
        })}
      </ul>
    </div>
  );
};

export default Navbar;
