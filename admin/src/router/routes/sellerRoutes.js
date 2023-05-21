import { lazy } from "react";

const Home = lazy(() => import("../../views/Home"));
const SellerDashboard = lazy(() => import("../../views/seller/SellerDashboard"));
const AddProduct = lazy(() => import("../../views/seller/AddProduct"));
const AllProducts = lazy(() => import("../../views/seller/AllProducts"));

export const sellerRoutes = [
    {
        path: '/',
        element: <Home />,
        ability : ['admin', 'seller']
    },
    {
        path: '/seller/dashboard',
        element: <SellerDashboard />,
        ability : ['seller']
    },
    {
        path: '/seller/dashboard/add-product',
        element: <AddProduct />,
        ability : ['seller']
    },
    {
        path: '/seller/dashboard/products',
        element: <AllProducts />,
        ability : ['seller']
    },
]