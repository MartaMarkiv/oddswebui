import { Navigate } from "react-router-dom";
import { useCurrentUser } from "../shared/context/UserProvider"

export const PrivateRoute = ({ children }) => {
    const { currentUser } = useCurrentUser();
    return currentUser && currentUser.token ? children:
        <Navigate to="/" />
}