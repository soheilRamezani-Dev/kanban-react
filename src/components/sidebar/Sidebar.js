import SidebarTitle from "./SidebarTitle";
import Logo from "./Logo";
import Navbar from "./navbar/Navbar";
import NewBoardButton from "./NewBoardButton";

import ModeToggle from "./ModeToggle";
import HideSidebarButton from "./HideSidebarButton";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const state = useSelector((state) => state.tasks);

  return (
    <div className="sidebar col-lg-2 bg-primary text-light p-0 d-flex flex-column justify-content-between border border-lightgray">
      <div>
        <Logo />
        <SidebarTitle boardsLength={state.length} />
        <Navbar boards={state} />
        <NewBoardButton />
      </div>
      <div>
          <ModeToggle/>
        <HideSidebarButton/>
      </div>
    </div>
  );
};

export default Sidebar;
