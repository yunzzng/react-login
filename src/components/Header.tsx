import {FC, PropsWithChildren, useContext} from "react";
// import "./styles/header.css";
// import styles from "./styles/header/header.module.css";
import styled, { ThemeContext, css } from "styled-components";
import useThemeMode from "../hooks/useThemeMode";

interface HeaderProps extends PropsWithChildren {}

// const LogoStyled = styled.div `
//     width: 100px;
//     background-color: #007bff;
//     color: white;
// `

// 스타일 컴포넌트
// prop
// const LogoStyled = styled.div<{ danger: boolean }>`
// width: 100px;
// color: ${(props) => (props.danger ? "#007bff;" : "white")};
// `;

// prop 중에 mode === "modify"
// logo
const LogoStyled = styled.div<{ danger: boolean; mode: "create" | "modify" }>`
    width: 100px;
    color: ${(props) => (props.danger ? "red" : "white")};

    ${({ mode }) =>
        mode === "modify" &&
        css`
            width: 200px;
            color: #007bff;
            font-weight: bold;
            font-size: 24px;
    `}
`;

// header
const HeaderStyled = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f8f9fa;
    padding: 10px 20px;
    border-bottom: 2px solid #ddd;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
`;

const HeaderNav = styled.div`
    gap: 15px;
    margin-left: auto;
`;

const ThemeTest = styled.div<{color:string, bgColor:string}>`
    color: ${(props) => props.color};
    background-color: ${(props) => props.bgColor};
`

const Header: FC<HeaderProps> = (props) => {
    const {children} = props;
    // const headerStyle: CSSProperties = {
    //     background: "pink",
    //     textAlign: "center",
    // }

    const theme = useContext(ThemeContext);
    const { themeMode, toggleThemeMode } = useThemeMode();

    return (
        <>
            {/* <header className={styles.header_wrapper}> */}
            <HeaderStyled>
                {/* <LogoStyled danger={true}>숙박앱</LogoStyled> */}
                <LogoStyled danger={true} mode={"modify"}>숙박앱</LogoStyled>
                {/* <div className={styles.header_nav}>{children}</div> */}
                {/* <ThemeTest color={theme?.textColor} bgColor={theme?.backgroundColor}>theme-test-text</ThemeTest> */}
                <HeaderNav>{children}</HeaderNav>
                <button className={"bg-white dark:bg-black"} onClick={toggleThemeMode}>{themeMode}Theme</button>
            </HeaderStyled>
            {/* </header> */}
        </>
    );
};

export default Header;