import "./App.scss";
import { Provider } from "react-redux";
import store from "./redux/store";
import Kanban from "./components/Kanban";
const App = () => {
  
  return (
    <Provider store={store}>
      <Kanban/>
    </Provider>
  );
};

export default App;
