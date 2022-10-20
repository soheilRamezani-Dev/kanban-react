import Sidebar from "./components/sidebar/Sidebar";
import "./App.scss";

const App = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
      </div>
    </div>
  );
};

export default App;
