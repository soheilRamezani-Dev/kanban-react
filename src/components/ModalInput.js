const ModalInput = ({title,id}) => {
  return (
    <div className="mb-3">
      <label htmlFor={id}>{title}</label>
      <input
        id={id}
        className="form-control my-2 text-white"
        placeholder="e.g Take Coffee Breack"
      />
    </div>
  );
};

export default ModalInput;
