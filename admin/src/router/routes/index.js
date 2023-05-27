/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */

import { privateRoutes } from "./privateRoutes"
import MainLayout from "../../layout/MainLayout"
import ProtectRoutes from "./ProtectRoutes"


export const getRoutes = () =>{
    const allRoute = []
    privateRoutes.map(r=>{
        r.element = <ProtectRoutes route={r} >{r.element}</ProtectRoutes>
    })
    return {
        path: '/',
        element: <MainLayout />,
        children: privateRoutes
    }
}