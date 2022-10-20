import SidebarTitle from "./SidebarTitle";
import Logo from "./Logo";
import Navbar from "./Navbar";

const Sidebar = () => {
  return (
    <div className="sidebar col-lg-3 bg-primary text-light p-0">
      <Logo />
      <SidebarTitle />
      <Navbar />
      <div className="new-bord"></div>
      <div className="nightmode"></div>
      <div className="hide"></div>
    </div>
  );
};

export default Sidebar;
