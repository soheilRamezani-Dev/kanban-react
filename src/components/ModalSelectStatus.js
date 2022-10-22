const ModalSelectStatus = () => {
  return (
    
      <select
        class="form-select form-select-lg text-white bg-primary"
        aria-label=".form-select-sm example"
        role="button"
      >
        <option selected value="ToDo">
          ToDo
        </option>
        <option value="Doing">Doing</option>
        <option value="Done">Done</option>
      </select>
    
  );
};

export default ModalSelectStatus;
