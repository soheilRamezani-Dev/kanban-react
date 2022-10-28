import { useSelector, useDispatch } from "react-redux";
import { changeColumn } from "../redux/actions";

const ModalSelectStatus = ({
  columns,
  formikHandler,
  setModalState,
  columnId,
  taskId,
}) => {

  const dispatch = useDispatch();
  //console.log(columns);
  const columnChangeHandler = (event) => {
    const goalColumn = Number(event.target.value);
    const goalTaskId = columns[goalColumn].tasks.length;
    setModalState({
      editTaskModal: true,
      columnId: goalColumn,
      taskId: goalTaskId,
    });
    dispatch(changeColumn(taskId, columnId, goalColumn));
  };

  return (
    <select
      name="status"
      onChange={formikHandler || columnChangeHandler}
      class="form-select form-select-lg text-white bg-primary mt-4"
      aria-label=".form-select-sm example"
      //role="button"
    >
      {columns.map((val, index) => {
        return (
          <option
            key={index}
            selected={index === columnId ? true : false}
            value={index}
          >
            {val.columnName}
          </option>
        );
      })}
    </select>
  );
};

export default ModalSelectStatus;
