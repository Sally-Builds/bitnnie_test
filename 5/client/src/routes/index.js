import { Route, Routes, BrowserRouter } from "react-router-dom";

/**
 * import Layouts
 */
import MainLayout from "../containers/Layouts/MainLayout";
// import UserLayout from "../containers/Layouts/UserLayout";
/**
 * import views
 */
import Home from "../containers/Views/Home";
import Register from "../containers/Views/Register";

const Router = () => {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="" element={<Home />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;