import SidebarTitle from "./SidebarTitle";
import Logo from "./Logo";
import Navbar from "./navbar/Navbar";
import NewBoardButton from "./NewBoardButton";

import ModeToggle from "./ModeToggle";
import HideSidebarButton from "./HideSidebarButton";

const Sidebar = () => {
  return (
    <div className="sidebar col-lg-2 bg-primary text-light p-0 d-flex flex-column justify-content-between">
      <div>
        <Logo />
        <SidebarTitle />
        <Navbar />
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
