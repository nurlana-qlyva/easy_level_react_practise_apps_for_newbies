import { createBrowserRouter, Route, RouterProvider, createRoutesFromElements } from "react-router-dom";
import "./index.css";
import {routesArr} from './routes';
import SideBar from "./layouts/sidebar";
import ErrorPage from "./layouts/error";

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <>
      <Route 
        path={'/'}
        element={<SideBar/>}
        errorElement={<ErrorPage />}
        children={routesArr.map(item => {
          return <Route
            key={item.path} 
            path={item.path}
            element={item.component}
          />
        })}
      />
    </>
  ))

  return (
    <>
      <div className="container-fluid row">
        <div className="col-12">
            <RouterProvider router={router} />
        </div>
      </div>
    </>
  );
}

export default App;
