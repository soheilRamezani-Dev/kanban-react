import SidebarTitle from "./SidebarTitle";
import Logo from "./Logo";
import Navbar from "./navbar/Navbar";
import NewBoardButton from "./NewBoardButton";

import ModeToggle from "./ModeToggle";
import HideSidebarButton from "./HideSidebarButton";
import { useSelector } from "react-redux";

const Sidebar = ({sidebarShow ,setSidebarShow}) => {
  const state = useSelector((state) => state.tasks);

  return (
    <div className={`${sidebarShow?"":"unshow "} sidebar col-md-4 col-lg-3 col-xxl-2 bg-primary text-light p-0 d-flex flex-column justify-content-between border border-lightgray`}>
      <div>
        <Logo />
        <SidebarTitle boardsLength={state.length} />
        <Navbar boards={state} />
        <NewBoardButton />
      </div>
      <div>
          <ModeToggle/>
        <HideSidebarButton setSidebarShow={setSidebarShow}/>
      </div>
    </div>
  );
};

export default Sidebar;
