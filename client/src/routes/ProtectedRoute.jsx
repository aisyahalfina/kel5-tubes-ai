import { Navigate } from "react-router-dom";
import { storage } from "../utils/storage";

function ProtectedRoute({

    children,
    role

}) {

    const user =
        storage.getUser();

    if (!user) {

        return <Navigate to="/" />;

    }

    if (

        role &&
        user.role !== role

    ) {

        return <Navigate to="/" />;

    }

    return children;

}

export default ProtectedRoute;