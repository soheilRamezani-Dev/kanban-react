const TasksCategoryTitle = ({columnTitle,taskLength}) => {
  return (
    <div className="category-title">
      <span className="rounded-circle category-icon mx-3"></span>
      <small className="text-light">{columnTitle} ({taskLength})</small>
    </div>
  );
};

export default TasksCategoryTitle;
