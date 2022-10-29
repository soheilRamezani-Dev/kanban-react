import { FiMoreVertical } from "react-icons/fi";
import AddNewTask from "../addNewTask/AddNewTask";
import { useState } from "react";
import {AiOutlineMenu} from 'react-icons/ai'

const Header = ({setSidebarShow}) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="bg-primary border border-lightgray d-flex justify-content-between text-light p-4">
      <div className="d-flex">
        <AiOutlineMenu role="button" onClick={()=>setSidebarShow(state=>!state)} size="1.6em" />
        <h4 className="ps-4">Platform Launch</h4>
      </div>

      <div>
        <button className="btn btn-success" onClick={() => setModalShow(true)}>
          + Add New Task
        </button>
        <AddNewTask
          show={modalShow}
          onHide={() => setModalShow(false)}
          setModalShow={setModalShow}
        />
      </div>
    </div>
  );
};

export default Header;
