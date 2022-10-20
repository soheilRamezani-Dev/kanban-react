const Sidebar = () => {
  return (
    <div className="sidebar col-lg-3 bg-primary text-light">
      <div className="logo">
        <h1 className="p-3">
            <span className="logo-item-0"></span>
            <span className="logo-item-1"></span>
            <span className="logo-item-2"></span>
            <span className="ps-3">Kanban</span>   
            </h1>
      </div>
      <div className="title"></div>
      <div className="bords-list"></div>
      <div className="new-bord"></div>
      <div className="nightmode"></div>
      <div className="hide"></div>
    </div>
  );
};

export default Sidebar;
