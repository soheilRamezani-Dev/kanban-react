const TaskInfo = ({title,subtasksLength,subtasksCheckedLength}) => {
  return (
    <>
      <h4 className="mt-0">{title}</h4>
      <p className="text-light mt-4">{subtasksCheckedLength} of {subtasksLength} substacks</p>
    </>
  );
};

export default TaskInfo;
