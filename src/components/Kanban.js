import Sidebar from "./sidebar/Sidebar";
import Header from "./header/Header";
import Body from "./body/Body";
import { useSelector } from "react-redux";

const Kanban = () => {
  return (
    <div
      id="container"
      className={`container-fluid ${useSelector((state) => state.mode)}-mode`}
    >
      <div className="row">
        <Sidebar />
        <div className="col-lg-10 p-0 d-flex flex-column h-100 bg-dark">
          <Header />
          <div className="bg-dark h-100">
            <Body />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kanban;
