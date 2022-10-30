import Sidebar from "./sidebar/Sidebar";
import Header from "./header/Header";
import Body from "./body/Body";
import { useSelector } from "react-redux";
import { useState } from "react";

const Kanban = () => {
  const [sidebarShow,setSidebarShow] = useState(true);
  return (
    <div
      id="container"
      className={`container-fluid ${useSelector((state) => state.mode)}-mode`}
    >
      <div className="row">
        <Sidebar sidebarShow={sidebarShow} setSidebarShow={setSidebarShow} />
        <div className={`${sidebarShow?'':'sidebar-unshow '} right-content col-md-8 col-lg-9 col-xxl-10 p-0 d-flex flex-column h-100 bg-dark`}>
          <Header setSidebarShow={setSidebarShow} />
          <div className="bg-dark h-100">
            <Body />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kanban;
