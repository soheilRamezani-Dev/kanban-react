import TaskCheck from "./TaskCheck";

const SubTasks = ({
  subtasksList,
  subtasksLength,
  subtasksCheckedLength,
  columnId,
  taskId,
}) => {
  return (
    <div className="subtasks mt-5">
      <h6 className="mb-3">
        SubTasks ({subtasksCheckedLength} of {subtasksLength})
      </h6>
      {subtasksList.map((val, index) => {
        return (
          <div>
            <TaskCheck
              key={index}
              title={val.subtasksName}
              checked={val.checked}
              columnId={columnId}
              taskId={taskId}
              index={index}
            />
          </div>
        );
      })}
    </div>
  );
};

export default SubTasks;
