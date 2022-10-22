import { Modal } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";

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
          <form className="form mt-4">
            <div className="mb-3">
              <label htmlFor="title">Title</label>
              <input
                id="title"
                className="form-control my-2 text-white"
                placeholder="e.g Take Coffee Breack"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description">Description</label>
              <textarea
                rows={5}
                id="description"
                className="form-control my-2 text-white"
                placeholder="e.g Take Coffee Breack very good."
              ></textarea>
            </div>
            <div className="mb-3">
              <label>SubTasks</label>
              <div className="d-flex">
                <input
                  className="form-control m-2 text-white"
                  placeholder="e.g Take Coffee Breack"
                />
                <AiOutlineClose
                  role="button"
                  className="mt-3"
                  size="1.5em"
                  color="lightgray"
                />
              </div>
              <div className="d-flex">
                <input
                  className="form-control m-2 text-white"
                  placeholder="e.g Take Coffee Breack"
                />
                <AiOutlineClose
                  role="button"
                  className="mt-3"
                  size="1.5em"
                  color="lightgray"
                />
              </div>
              <button className="mt-1 m-2 p-2 rounded-pill text-success bg-white w-100 text-center">
                + Add New SubTask
              </button>
            </div>
            <div>
              <select
                class="form-select form-select-lg text-white m-2 bg-primary"
                aria-label=".form-select-sm example"
                role="button"
              >
                <option selected value="ToDo">
                  ToDo
                </option>
                <option value="Doing">Doing</option>
                <option value="Done">Done</option>
              </select>
            </div>
            <div className="mt-4">
              <button className="m-2 p-2 rounded-pill text-white bg-success w-100 text-center">
                + Create Task
              </button>
            </div>
          </form>
        </Modal.Body>
      </div>
    </Modal>
  );
};

export default AddNewTask;
