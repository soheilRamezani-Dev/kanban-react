import { Modal } from "react-bootstrap";
import ModalSelectStatus from "../ModalSelectStatus";

const EditTask = (props) => {
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
          <div className="px-4">
            <h4 className="mt-0">Build UI for aboarding flow</h4>
            <p className="text-light mt-4">0 of three substacks</p>
            <div className="subtasks mt-5">
              <h6 className="mb-3">SubTasks (2 of 3)</h6>
              <div class="form-check bg-dark py-2 my-2 rounded">
                <input
                  class="form-check-input mx-2"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  <small className="text-light">Checked checkbox</small>
                </label>
              </div>
              <div class="form-check bg-dark py-2 my-2 rounded">
                <input
                  class="form-check-input mx-2"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                />
                <label class="form-check-label" for="flexCheckChecked">
                  <small className="text-light">Checked checkbox</small>
                </label>
              </div>
            </div>
            <div className="mt-5">
              <h6 className="mb-3">Status</h6>
              <ModalSelectStatus />
            </div>
            <button className="mt-5 mb-3 btn btn-success w-100 text-white">Edit Task</button>
          </div>
        </Modal.Body>
      </div>
    </Modal>
  );
};

export default EditTask;
