import { Modal } from "react-bootstrap";
import ModalForm from "./modalForm/ModalForm";
const AddNewTask = (props) => {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className="bg-primary text-white rounded">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <h4 className="mt-0">Add New Task</h4>
          <ModalForm/>
        </Modal.Body>
      </div>
    </Modal>
  );
};

export default AddNewTask;
