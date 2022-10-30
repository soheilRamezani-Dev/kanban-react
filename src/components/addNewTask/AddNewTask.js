import { Modal } from "react-bootstrap";
import ModalForm from "./modalForm/ModalForm";
import { useSelector } from "react-redux";
const AddNewTask = ({setModalShow,...props}) => {
    return <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div className={`${useSelector((state) => state.mode)}-mode`}>
          <div className="bg-primary text-white rounded">
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
              <h4 className="mt-0">Add New Task</h4>
              <ModalForm setModalShow={setModalShow} />
            </Modal.Body>
          </div>
        </div>
      </Modal>
};

export default AddNewTask;
