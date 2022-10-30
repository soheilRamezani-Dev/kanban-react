import { BiHide } from "react-icons/bi";

const HideSidebarButton = ({setSidebarShow}) => {
  return (
    <div onClick={()=>setSidebarShow(false)} role="button" className="mx-4 my-4 text-secondary">
      <BiHide />
      <span className="ps-2">Hide Sidebar</span>
    </div>
  );
};

export default HideSidebarButton;
