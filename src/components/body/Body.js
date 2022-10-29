import CreateNewColumnButton from "./CreateNewColumnButton";
import TasksCategoryTitle from "./TasksCategoryTitle";
import TasksList from "./TasksList";
import { useSelector } from "react-redux";

const Body = () => {
  const selector = useSelector((state) => state.tasks);
  const columns = selector.find((value) => value.selected === true).columns;

  return (
    <div className="content-body text-light p-4 d-md-flex flex-nowrap">
      {columns.map((val, index) => {
        return (
          <div key={index} className="category-column">
            <TasksCategoryTitle columnTitle={val.columnName} taskLength={val.tasks.length} />
            <TasksList tasks={val.tasks} columnId={index}/>
          </div>
        );
      })}

      <CreateNewColumnButton />
    </div>
  );
};

export default Body;
