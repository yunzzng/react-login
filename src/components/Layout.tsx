import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import useAuth from "../hooks/useAuth";

const Layout = () => {
    // 현재 사용자의 경로를 알아내는 방법 /signin / profile
    const location = useLocation();
    console.log(location.pathname);
    
    const navigate = useNavigate();
    // 사용자 접근제어

    useAuth();
    
    return (
        <>
        <Header>
            <button onClick={()=> navigate("/")}>홈</button>
            <button onClick={()=> navigate("/domestic")}>국내숙소</button>
            <button onClick={()=> navigate("/signin")}>로그인</button>
            <button onClick={()=> navigate("/signup")}>회원가입</button>
            <button onClick={()=> navigate("/profile")}>프로필</button>
        </Header>
        <Outlet />
        <Footer></Footer>
        </>
    )
}

export default Layout;