import Sidebar from "./components/sidebar/Sidebar";
import "./App.scss";
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import { Provider } from "react-redux";
import store from "./redux/store";
const App = () => {
  return (
    <Provider store={store}>
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <div className="col-lg-10 p-0 d-flex flex-column h-100 bg-dark">
            <Header />
            <div className="bg-dark h-100">
              <Body />
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
};

export default App;
