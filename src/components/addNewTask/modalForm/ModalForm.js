import ModalInput from "./../../ModalInput";
import ModalTextarea from "./ModalTextarea";
import ModalAddSubtask from "./ModalAddSubtask";
import ModalSelectStatus from "./../../ModalSelectStatus";

const ModalForm = () => {
  return (
    <form className="form mt-4">
      <ModalInput title="Title" id="title" />
      <ModalTextarea title="Description" id="description" />
      <ModalAddSubtask />
      <div className="m-2">
        <ModalSelectStatus />
      </div>

      <div className="mt-4">
        <button className="m-2 p-2 rounded-pill text-white bg-success w-100 text-center">
          + Create Task
        </button>
      </div>
    </form>
  );
};

export default ModalForm;
