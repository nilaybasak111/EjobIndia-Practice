import Rules from "./components/Rules";
import store from "./store/store"; 
import { Provider } from "react-redux";

function App() {

  return (
    <>
      <Provider store={store}>
        <Rules/>
      </Provider>
    </>
  )
}

export default App
