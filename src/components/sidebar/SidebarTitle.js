const SidebarTitle = ({boardsLength}) => {
  return (
    <div className="title p-3 text-secondary">
      <small>ALL BOARDS ({boardsLength})</small>
    </div>
  );
};

export default SidebarTitle;
