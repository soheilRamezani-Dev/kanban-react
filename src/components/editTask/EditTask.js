import { Modal } from "react-bootstrap";
import ModalSelectStatus from "../ModalSelectStatus";
import SubTasks from "./editForm/SubTasks";
import TaskInfo from "./editForm/TaskInfo";
import { useSelector } from "react-redux";

const EditTask = (props) => {
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
              <TaskInfo />
              <SubTasks />
              <div className="mt-5">
                <h6 className="mb-3">Status</h6>
                <ModalSelectStatus />
              </div>
              <button className="mt-5 mb-3 btn btn-success w-100 text-white">
                Edit Task
              </button>
            </div>
          </Modal.Body>
        </div>
      </div>
    </Modal>
  );
};

export default EditTask;
