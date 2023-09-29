
import { useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie';
import { useCurrentUser } from "../context/UserProvider";

const cookies = new Cookies();
export default function useAuthenticated() {
    const navigate = useNavigate();
    const { currentUser, setCurrentUser } = useCurrentUser();

    const handleLogin = ({data, saveUser, rememberMe}) => {
        delete data.success
        if (data.message === 'NEW_PASSWORD_REQUIRED') {
            return navigate(`/account/password-reset/${data.token}`, { replace: true });
        }

        const { token, role, refresh_token  } = data;
        saveUser(data);
        cookies.set('userBenderToken', token, { path: '/' });
        cookies.set('userBenderRefreshToken', refresh_token, { path: '/' });
        cookies.set('userBenderRole', role, { path: '/' });

        storeRememberMe(rememberMe, data.email);
    }
    const handleLogout = () => {
        cookies.remove("userBenderToken", { path: "/" });
        cookies.remove("userBenderRefreshToken", { path: "/" });
        cookies.remove("userBenderRole", { path: "/" });
        setCurrentUser(null);
        navigate("/", { replace: true });
    }

    const loggedInUser = () => {
        let userToken = currentUser?.token || cookies.get('userBenderToken');
        let refreshToken = currentUser?.refresh_token || cookies.get('userBenderRefreshToken');

        return { userToken, refreshToken };
    }

    const setUserToken = (token) => {
        cookies.set('userBenderToken', token, { path: '/' });
        setCurrentUser({...currentUser, token});
    }

    const storeRememberMe = (rememberMe, email) => {
        if (rememberMe) {
            cookies.set('rememberMe', rememberMe, { path: '/' });
            cookies.set('userBenderEmail', email, { path: '/' });
        } else {
            cookies.remove('rememberMe', { path: '/' });
            cookies.remove('userBenderEmail', { path: '/' });
        }
    }

    return {
        handleLogin,
        handleLogout,
        loggedInUser,
        setUserToken
    }
}