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
const EditProduct = lazy(() => import("../../views/seller/EditProduct"));

export const sellerRoutes = [
    {
        path: '/',
        element: <Home />,
        role : ['admin', 'seller'],
        status : 'active'
    },
    {
        path: '/seller/dashboard',
        element: <SellerDashboard />,
        role : 'seller',
        status : 'active'
    },
    {
        path: '/seller/dashboard/add-product',
        element: <AddProduct />,
        role : 'seller',
        status : 'active'
    },
    {
        path: '/seller/dashboard/edit-product/:productId',
        element: <EditProduct />,
        role : 'seller',
        status : 'active'
    },
    {
        path: '/seller/dashboard/products',
        element: <AllProducts />,
        role : 'seller',
        status : 'active'
    },
    {
        path: '/seller/dashboard/discount-product',
        element: <DiscountProduct />,
        role : 'seller',
        status : 'active'
    },
    {
        path: '/seller/dashboard/orders',
        element: <SellerOrder />,
        role : 'seller',
        ability : ['active', 'deactive']
    },
    {
        path: '/seller/dashboard/payments',
        element: <Payment />,
        role : 'seller',
        status : 'active'
    },
    {
        path: '/seller/dashboard/chat-customer/:customerId',
        element: <ChatCustomer />,
        role : 'seller',
        status : 'active'
    },
    {
        path: '/seller/dashboard/chat-customer/',
        element: <ChatCustomer />,
        role : 'seller',
        status : 'active'
    },
    {
        path: '/seller/dashboard/chat-support',
        element: <ChatSupport />,
        role : 'seller',
        ability : ['active', 'deactive', 'pending']
        
    },
    {
        path: '/seller/dashboard/profile',
        element: <Profile />,
        role : 'seller',
        status : 'active'
    },
]