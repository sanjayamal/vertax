import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { Suspense } from "react";
import { Loading } from "./components";
import "./App.scss";

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
