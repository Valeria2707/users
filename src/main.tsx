import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Users from "./Users.tsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <Users />
    </Provider>
  </StrictMode>
);
