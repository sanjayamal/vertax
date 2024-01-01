import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { Suspense } from "react";
import { Loading } from "./components";
import { Provider } from "react-redux";
import { store } from "./appStore/store";
import "./App.scss";

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </Suspense>
  );
}

export default App;
