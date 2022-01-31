import PostForm from "./components/PostForm";
import Posts from "./components/Posts";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <>
      <Provider store={store}>
        <h1>Redux Practice</h1>
        <hr></hr>
        <PostForm/>
        <hr></hr>
        <Posts/>
      </Provider>
    </>
  );
}

export default App;
