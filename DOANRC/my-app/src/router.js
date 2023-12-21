import { Routes, Route } from "react-router-dom";
import HomePage from "./component/users/homePage";
import ProfilePage from "./component/users/profilePage";
import ProfilePageBlog from "./component/users/profilePageBlog";
import ProfilePageLienhe from "./component/users/profilePageLienhe";
import Login from "./component/login/login";
import Sanpham from "./component/users/profileProduct/product";
import Chinhsachthanhtoan from "./component/users/Policy/chinhsachthanhtoan";
import Chinhsachdoitra from "./component/users/Policy/chinhsachdoitra";
import Chinhsachgiaohang from "./component/users/Policy/chinhsachgiaohang";
import { ROUTERS } from "./utils/router";
import MasterLayout from "./component/users/theme/masterLayout";

const renderUserRouter = () => {
  const userRouters = [
    {
      path: ROUTERS.USER.HOME,
      component: <HomePage />,
    },
    {
        path: ROUTERS.USER.PROFILE,
        component: <ProfilePage />,
    },
    {
      path: ROUTERS.USER.PROFILEBLOG,
      component: <ProfilePageBlog />,
    },
    {
      path: ROUTERS.USER.PROFILELIENHE,
      component: <ProfilePageLienhe />
    },
    {
      path: ROUTERS.USER.LOGIN,
      component: <Login />
    },
    {
      path: ROUTERS.USER.CHINHSACHTHANHTOAN,
      component: <Chinhsachthanhtoan />
    },
    {
      path: ROUTERS.USER.CHINHSACHDOITRA,
      component: <Chinhsachdoitra />
    },
    {
      path: ROUTERS.USER.CHINHSACHGIAOHANG,
      component: <Chinhsachgiaohang />
    },
    {
      path: ROUTERS.USER.SANPHAM,
      component: <Sanpham />
    },
  ];
  return (
    <MasterLayout>
      <Routes>
        {userRouters.map((item, key) => (
          <Route key={key} path={item.path} element={item.component} />
        ))}
      </Routes>
    </MasterLayout>
  );
};

const RouterCustom = () => {
  return renderUserRouter();
};

export default RouterCustom;
