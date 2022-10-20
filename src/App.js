import Sidebar from "./components/sidebar/Sidebar";
import "./App.scss";
import Header from "./components/header/Header";

const App = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <div className="col-lg-10 p-0 d-flex flex-column h-100 bg-dark">
          <Header />
          <div className="bg-dark "></div>
        </div>
      </div>
    </div>
  );
};

export default App;
