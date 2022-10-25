import { Modal } from "react-bootstrap";
import ModalSelectStatus from "../ModalSelectStatus";
import SubTasks from "./editForm/SubTasks";
import TaskInfo from "./editForm/TaskInfo";
import { useSelector } from "react-redux";

const EditTask = ({ columnId, taskId, ...props }) => {
  const taskInfo = useSelector((state) =>
    state.tasks.find((vla) => vla.selected === true)
  ).columns[columnId].tasks[taskId];


  const subtasksLength = taskInfo.subtasks.length;
  const subtasksCheckedLength = taskInfo.subtasks.filter(
    (val) => val.checked === true
  ).length;


  return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div className={`${useSelector((state) => state.mode)}-mode`}>
          <div className="bg-primary text-white rounded">
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
              <div className="px-4">
                <TaskInfo
                  title={taskInfo.tasksName}
                  subtasksLength={subtasksLength}
                  subtasksCheckedLength={subtasksCheckedLength}
                />
                <SubTasks
                  subtasksList={taskInfo.subtasks}
                  subtasksLength={subtasksLength}
                  subtasksCheckedLength={subtasksCheckedLength}
                  columnId={columnId}
                  taskId={taskId}
                />
                <div className="my-5">
                  <h6 className="mb-3">Status</h6>
                  <ModalSelectStatus />
                </div>
              </div>
            </Modal.Body>
          </div>
        </div>
      </Modal>
  );
};

export default EditTask;
