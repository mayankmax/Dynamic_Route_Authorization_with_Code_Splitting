import React, { Suspense } from "react";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  RouterProvider,
} from "react-router-dom";

import router from "./router/routes";

export default function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        {/* <Routes>
          {routes.default.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes> */}
        <RouterProvider router={router} />
      </Suspense>
    </div>
  );
}
