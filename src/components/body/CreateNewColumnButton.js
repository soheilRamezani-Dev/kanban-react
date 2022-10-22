const CreateNewColumnButton = () => {
  return (
    <div
      className="category-column create-column h-100 py-4 opacity-50"
      role="button"
    >
      <div className="h-100 d-flex flex-column justify-content-center bg-primary mx-2 rounded my-3">
        <h4 className="text-secondary m-0 text-center">+ New Column</h4>
      </div>
    </div>
  );
};

export default CreateNewColumnButton;
