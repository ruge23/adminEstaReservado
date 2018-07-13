import LoginContainer from "../layouts/Login/LoginContainer";
import Dashboard from "../layouts/Dashboard/Dashboard";

const indexRoutes = [
    { path: "/", component: LoginContainer },
    { path: "/dashboard", component: Dashboard}
];

export default indexRoutes;
