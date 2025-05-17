import { createBrowserRouter } from "react-router-dom";

import homeRoutes from "./homeRoutes";
import contactsRoutes from "./contactsRoutes";
import authRouters from "./authRoutes";

import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
    ...homeRoutes,
    ...contactsRoutes,
    ...authRouters,
    {
        path: '*',
        element: <NotFound />,
    }
])

export default router;