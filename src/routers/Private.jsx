import { Navigate, useLocation } from "react-router-dom";
import useAllProvider from "../hooks/useAllProvider";

const Private = ({ children }) => {
    const { user } = useAllProvider();
    const location = useLocation();

    if (!user) {
        return <Navigate to="/sign_in" state={location.pathname} replace={true} />
    }

    return children;
};

export default Private;