import { useDispatch } from "react-redux";
import { checkSubtask } from "../../../redux/actions";

const TaskCheck = ({ title ,checked,columnId,taskId,index}) => {

  const dispatch = useDispatch();
  const checkHandler=(subtaskId)=>{
    dispatch(checkSubtask(columnId,taskId,subtaskId))
  }

  return (
    <div class="form-check my-2">
      <label
        class="form-check-label bg-dark py-2 d-block rounded"
        role="button"
      >
        <input onChange={() => checkHandler(index)} class="form-check-input mx-2" type="checkbox" value="" checked={checked}/>
        <small className="text-light">{title}</small>
      </label>
    </div>
  );
};

export default TaskCheck;
