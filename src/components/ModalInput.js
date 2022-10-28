const ModalInput = ({ title, id,inputValue, setInputValue, formikHandler}) => {
  const inputChangeHandler = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div className="">
      <label htmlFor={id}>{title}</label>
      <input
        id={id}
        name={id}
        className="form-control my-2 text-white"
        placeholder="e.g Take Coffee Breack"
        value={inputValue}
        onChange={formikHandler||inputChangeHandler}
      />
    </div>
  );
};

export default ModalInput;
