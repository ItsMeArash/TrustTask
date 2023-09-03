import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "../axiosconfig.js";
import { Provider } from "react-redux";
import store from "./app/store.js";
import { BrowserRouter } from "react-router-dom";
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
