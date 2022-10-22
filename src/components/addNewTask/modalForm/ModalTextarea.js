const ModalTextarea = ({title,id}) => {
  return (
    <div className="mb-3">
      <label htmlFor={id}>{title}</label>
      <textarea
        rows={5}
        id={id}
        className="form-control my-2 text-white"
        placeholder="e.g Take Coffee Breack very good."
      ></textarea>
    </div>
  );
};

export default ModalTextarea;
