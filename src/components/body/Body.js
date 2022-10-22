import CreateNewColumnButton from "./CreateNewColumnButton";
import TasksCategoryTitle from "./TasksCategoryTitle";
import TasksList from "./TasksList";

const Body = () => {
  return (
    <div className="content-body text-light p-4 d-flex flex-nowrap">

      <div className="category-column">
       <TasksCategoryTitle/>
        <TasksList/>
      </div>
      <CreateNewColumnButton/>
    </div>
  );
};

export default Body;
