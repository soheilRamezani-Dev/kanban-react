import { Modal } from "react-bootstrap";
import ModalInput from './../ModalInput'

const CreateNewBoard = (props) => {
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
          <h4 className="mb-5">Add New Board</h4>
          <ModalInput title="Board Title" id="boardtitle"/>
          <button className="btn btn-success w-100 mt-3">Add Board</button>
        </Modal.Body>
      </div>
    </Modal>
  );
};

export default CreateNewBoard;
