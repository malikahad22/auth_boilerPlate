import { Outlet, Navigate } from 'react-router-dom'
import { getUserFromLocal } from './handleLocalStorage';
const PrivateRoutes = () => {

    let auth = getUserFromLocal();
    
    return (
        auth ? <Outlet /> : <Navigate to="/" />
    )

}

export default PrivateRoutes;