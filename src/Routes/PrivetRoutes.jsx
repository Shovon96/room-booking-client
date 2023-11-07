import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types'
import { AuthContext } from "../components/AuthProvider/AuthProvider";


const PrivetRoutes = ({ children }) => {

    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <div className="flex justify-center items-center h-[80vh]"><span className="loading loading-lg loading-spinner text-primary"></span></div>
    }

    if (user) {
        return children;
    }


    return <Navigate state={location.pathname} to='/login'></Navigate>;
};

PrivetRoutes.propTypes = {
    children: PropTypes.node
}

export default PrivetRoutes;