import { lazy } from "react";


const Home = lazy(() => import("../../views/Home"));
const SellerDashboard = lazy(() => import("../../views/seller/SellerDashboard"));
const AddProduct = lazy(() => import("../../views/seller/AddProduct"));
const AllProducts = lazy(() => import("../../views/seller/AllProducts"));
const DiscountProduct = lazy(() => import("../../views/seller/DiscountProduct"));
const SellerOrder = lazy(() => import("../../views/seller/SellerOrder"));
const Payment = lazy(() => import("../../views/seller/Payment"));
const ChatCustomer = lazy(() => import("../../views/seller/ChatCustomer"));
const ChatSupport = lazy(() => import("../../views/seller/ChatSupport"));
const Profile = lazy(() => import("../../views/seller/Profile"));

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
    {
        path: '/seller/dashboard/discount-product',
        element: <DiscountProduct />,
        ability : ['seller']
    },
    {
        path: '/seller/dashboard/orders',
        element: <SellerOrder />,
        ability : ['seller']
    },
    {
        path: '/seller/dashboard/payments',
        element: <Payment />,
        ability : ['seller']
    },
    {
        path: '/seller/dashboard/chat-customer',
        element: <ChatCustomer />,
        ability : ['seller']
    },
    {
        path: '/seller/dashboard/chat-support',
        element: <ChatSupport />,
        ability : ['seller']
    },
    {
        path: '/seller/dashboard/profile',
        element: <Profile />,
        ability : ['seller']
    },
]