import { FiMoreVertical } from "react-icons/fi";
import AddNewTask from "../addNewTask/AddNewTask";
import { useState } from "react";

const Header = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="bg-primary border border-lightgray d-flex justify-content-between text-light p-4">
      <h4>Platform Launch</h4>
      <div>
        <button className="btn btn-success" onClick={() => setModalShow(true)}>+ Add New Task</button>
        <AddNewTask
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

        <FiMoreVertical size="1.5em" />
      </div>
    </div>
  );
};

export default Header;
