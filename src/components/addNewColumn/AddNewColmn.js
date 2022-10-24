import { Modal } from "react-bootstrap";
import ModalInput from "./../ModalInput";
import { useSelector } from "react-redux";

const AddNewColumn = (props) => {
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
            <h4 className="mb-5">Add New column</h4>
            <ModalInput title="Column Title" id="Columntitle" />
            <button className="btn btn-success w-100 mt-3">Add column</button>
          </Modal.Body>
        </div>
      </div>
    </Modal>
  );
};

export default AddNewColumn;
