const ModalInput = ({ title, id,inputValue, setInputValue}) => {
  const inputChangeHandler = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div className="mb-3">
      <label htmlFor={id}>{title}</label>
      <input
        id={id}
        className="form-control my-2 text-white"
        placeholder="e.g Take Coffee Breack"
        value={inputValue}
        onChange={inputChangeHandler}
      />
    </div>
  );
};

export default ModalInput;
