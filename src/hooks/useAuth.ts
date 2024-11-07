import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PRIVATE_PATHS = ["/profile"];
const useAuth = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("elice-app-token");

        if(PRIVATE_PATHS.includes(location.pathname) && !token){
            // 토큰이 없고 민감한 페이지일 경우 signin 페이지로 이동
            alert("로그인 후 이용 가능합니다.");
            navigate("/signin");
        }
    }, [location.pathname]);
};

export default useAuth;