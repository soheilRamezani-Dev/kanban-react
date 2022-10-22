const TaskCheck = ({ title }) => {
  return (
    <div class="form-check my-2">
      <label
        class="form-check-label bg-dark py-2 d-block rounded"
        role="button"
      >
        <input class="form-check-input mx-2" type="checkbox" value="" />
        <small className="text-light">{title}</small>
      </label>
    </div>
  );
};

export default TaskCheck;
