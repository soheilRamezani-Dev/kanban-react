import { BiHide } from "react-icons/bi";

const HideSidebarButton = () => {
  return (
    <div className="hide mx-4 my-4 text-secondary">
      <BiHide />
      <span className="ps-2">Hide Sidebar</span>
    </div>
  );
};

export default HideSidebarButton;
