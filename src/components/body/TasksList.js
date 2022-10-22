import EditTask from "../editTask/EditTask";
import { useState } from "react";

const TasksList = () => {
  const [editTaskModal, setEditTaskModal] = useState(false);
  return (
    <>
      <ul className="list-group m-2">
        <li role="button" onClick={() => setEditTaskModal(true)} className="list-group-item category-column-item bg-primary  my-2 p-4 rounded">
          <h6 className="text-white m-0">Build UI for aboarding flow</h6>
          <sub className="">0 of three substacks</sub>
        </li>
        <li className="list-group-item category-column-item bg-primary my-2 p-4 rounded">
          <h6 className="text-white m-0">Build UI for aboarding flow</h6>
          <sub className="">0 of three substacks</sub>
        </li>
        <li className="list-group-item category-column-item bg-primary my-2 p-4 rounded">
          <h6 className="text-white m-0">Build UI for aboarding flow</h6>
          <sub className="">0 of three substacks</sub>
        </li>
        <li className="list-group-item category-column-item bg-primary my-2 p-4 rounded">
          <h6 className="text-white m-0">Build UI for aboarding flow</h6>
          <sub className="">0 of three substacks</sub>
        </li>
      </ul>

      <EditTask show={editTaskModal} onHide={() => setEditTaskModal(false)} />
    </>
  );
};

export default TasksList;
