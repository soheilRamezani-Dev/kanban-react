const ModalTextarea = ({ title, id,inputValue, formikHandler }) => {
  return (
    <div className="mt-3">
      <label htmlFor={id}>{title}</label>
      <textarea
        name={id}
        rows={5}
        id={id}
        className="form-control my-2 text-white"
        placeholder="e.g Take Coffee Breack very good."
        onChange={formikHandler}
        value={inputValue}
      ></textarea>
    </div>
  );
};

export default ModalTextarea;
