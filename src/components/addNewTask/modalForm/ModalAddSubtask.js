import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const ModalAddSubtask = ({
  formikValues,
  setFieldValue,
  formikHandler,
  inputValue,
  title,
  id,
}) => {
  const [subtaskState, setSubtaskState] = useState([0, 1]);

  const subtaskValues = formikValues.subtasks;
  const newState = [...subtaskState];
  let isAllFieldFull = true;
  const addSubtaskHandler = (e) => {
    e.preventDefault();
    subtaskState.forEach((element, key) => {
      console.log(subtaskValues[key]);
      if (!(subtaskValues[key])) {
        isAllFieldFull = false;
      }
    });
    if (isAllFieldFull) {
      newState.push(subtaskState.length);
      setSubtaskState(newState);
    }
  };

  const removeSubtaskHandler = (subtaskId) => {
    const index = newState.indexOf(subtaskId);
    newState.splice(index, 1);
    //console.log(subtaskState.length);
    if (subtaskState.length >= 2) {
      setSubtaskState(newState);
      subtaskValues.splice(index, 1);
      setFieldValue("subtasks", subtaskValues);
    }
  };
  return (
    <div className="mt-3">
      <label>{title}</label>
      {subtaskState.map((val, key) => {
        return (
          <div key={key} className="d-flex">
            <input
              name={`${id}[${key}]`}
              value={inputValue[key]}
              className="form-control m-2 text-white"
              placeholder="e.g Take Coffee Breack"
              onChange={formikHandler}
            />
            <AiOutlineClose
              role="button"
              className="mt-3"
              size="1.5em"
              color="lightgray"
              onClick={() => removeSubtaskHandler(key)}
            />
          </div>
        );
      })}

      <button
        onClick={addSubtaskHandler}
        className="mt-1 m-2 p-2 rounded-pill text-success bg-white w-100 text-center"
      >
        + Add New SubTask
      </button>
    </div>
  );
};

export default ModalAddSubtask;
