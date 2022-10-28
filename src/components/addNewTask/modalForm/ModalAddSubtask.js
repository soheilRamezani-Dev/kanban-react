import { AiOutlineClose } from "react-icons/ai";

const ModalAddSubtask = ({ formikHandler, inputValue, title, id }) => {
  return (
    <div className="mt-3">
      <label>{title}</label>
      <div className="d-flex">
        <input
          name={`${id}[0]`}
          value = {inputValue[0]}
          className="form-control m-2 text-white"
          placeholder="e.g Take Coffee Breack"
          onChange={formikHandler}
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
          name={`${id}[1]`}
          value = {inputValue[1]}
          className="form-control m-2 text-white"
          placeholder="e.g Take Coffee Breack"
          onChange={formikHandler}
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
  );
};

export default ModalAddSubtask;
