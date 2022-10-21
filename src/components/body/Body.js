const Body = () => {
  return (
    <div className="content-body text-light p-4 d-flex flex-nowrap">

      <div className="category-column">
        <div className="category-title">
          <span className="rounded-circle category-icon mx-3"></span>
          <small className="text-light">TODO (4)</small>
        </div>
        <ul className="list-group m-2">
          <li className="list-group-item category-column-item bg-primary  my-2 p-4 rounded">
            <h6 className="text-white m-0">Build UI for aboarding flow</h6>
            <sub className="">0 of three substacks</sub>
          </li>
          <li className="list-group-item category-column-item bg-primary my-2 p-4 rounded">
            <h6 className="text-white m-0">Build UI for aboarding flow</h6>
            <sub className="">0 of three substacks</sub>
          </li>
          <li className="list-group-item category-column-item bg-primary my-2 p-4 rounded">
            <h6 className="text-white m-0">Build UI for aboarding flow</h6>
            <sub className="">0 of three substacks</sub>
          </li>
          <li className="list-group-item category-column-item bg-primary my-2 p-4 rounded">
            <h6 className="text-white m-0">Build UI for aboarding flow</h6>
            <sub className="">0 of three substacks</sub>
          </li>
        </ul>
      </div>

      <div className="category-column create-column h-100 py-4 opacity-50" role="button">
        <div className="h-100 d-flex flex-column justify-content-center bg-primary mx-2 rounded my-3">
          <h4 className="text-secondary m-0 text-center">+ New Column</h4>
        </div>
      </div>
    </div>
  );
};

export default Body;
