import Home from "../pages/Home";
import  Dashboard from "../pages/Dashboard";
import ProtectedRoutes from "../components/ProtectedRoutes";
import NotFound from "../pages/NotFound";

const homeRoutes = [
    {
        errorElement: <NotFound />,
        index: true,
        element : <Home />,
    }
    ,
    {
        path: 'dashboard',
        element: (
            <ProtectedRoutes>
                <Dashboard />
            </ProtectedRoutes>
        )
    }
]

export default homeRoutes;