import EditTask from "../editTask/EditTask";
import { useState } from "react";

const TasksList = ({ tasks, columnId }) => {
  const [ModalState, setModalState] = useState({
    editTaskModal: false,
    taskId: null,
  });
  const clickTaskHandler = (index) => {
    setModalState({taskId:index, editTaskModal:true});
  };

  return (
    <>
      <ul className="list-group m-2">
        {tasks.map((task, index) => {
          return (
            <li
              key={index}
              role="button"
              onClick={() => clickTaskHandler(index)}
              className="list-group-item category-column-item bg-primary  my-2 p-4 rounded"
            >
              <h6 className="text-white m-0">{task.tasksName}</h6>
              <sub className="">
                {task.subtasks.filter((val) => val.checked === true).length} of{" "}
                {task.subtasks.length} substacks
              </sub>
            </li>
          );
        })}
      </ul>
      {ModalState.taskId !== null ? (
        <EditTask
          taskId={ModalState.taskId}
          columnId={columnId}
          show={ModalState.editTaskModal}
          onHide={() => setModalState((state) => {return{...state, editTaskModal:false}})}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default TasksList;
