import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import useAuth from "../hooks/useAuth";
import styled, { ThemeProvider } from "styled-components";
import { useState } from "react";
import theme from "../consts/styles/theme";

// 버튼
const StyledButton = styled.button`
    color: #6e6e6e;
    background-color: transparent;
    border: none;
    padding: 5px 15px;
    cursor: pointer;
    font-size: 16px;
    &:hover {
        background-color: #007bff;
        color: white;
        border-radius: 10px;
    }
`;

const Layout = () => {
    // 현재 사용자의 경로를 알아내는 방법 /signin / profile
    const location = useLocation();
    console.log(location.pathname);
    
    const navigate = useNavigate();
    // 사용자 접근제어
    useAuth();

    const [themeToken, setThemeToken] = useState<"light" | "dark">("light");
    const handleClickThemeToggle = () => {
        const nextThemeToken = themeToken === "light" ? "dark" : "light";
        setThemeToken(nextThemeToken);
    }
    
    return (
        <>
        <ThemeProvider theme={theme[themeToken]}>
            <Header>
                <div>
                    <StyledButton onClick={()=> navigate("/")}>홈</StyledButton>
                    <StyledButton onClick={()=> navigate("/domestic")}>국내숙소</StyledButton>
                    <StyledButton onClick={()=> navigate("/signin")}>로그인</StyledButton>
                    <StyledButton onClick={()=> navigate("/signup")}>회원가입</StyledButton>
                    <StyledButton onClick={()=> navigate("/profile")}>프로필</StyledButton>
                </div>
            </Header>
            {/* <button onClick={handleClickThemeToggle}>{themeToken}</button> */}
            <Outlet />
            <Footer></Footer>
        </ThemeProvider>
        </>
    )
}

export default Layout;