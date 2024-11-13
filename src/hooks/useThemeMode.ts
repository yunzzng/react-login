import { useEffect, useState } from "react";

type ThemeModes = "dark" | "light";
// const savedTheme = localStorage.getItem("theme") as ThemeModes | null;
const themeStorage = localStorage.getItem("theme");
const isValidTheme = themeStorage && ["dark", "light"].includes(themeStorage);
const savedTheme = (isValidTheme ? themeStorage : "light") as ThemeModes;

const useThemeMode = () => {
    const [themeMode, setThemeMode] = useState<ThemeModes>(() => {
        return savedTheme ?? "light"; 
    });

    const toggleThemeMode = () => {
        const nextTheme = themeMode === "dark" ? "light" : "dark";
        setThemeMode(nextTheme);
        localStorage.setItem("theme", nextTheme);
        document.documentElement.classList.add(nextTheme);
        document.documentElement.classList.remove(themeMode);
        // 상태 업데이트가 비동기(작업이 끝나기전에 다음 코드가 실행된다)로 작동
        // toggleThemeMode 함수가 실행될 때 themeMode(즉, 함수가 실행되기 직전의 값)를 기준으로 클래스를 제거
    };

    useEffect(()=> {
        console.log(themeMode);
    }, [themeMode])

    useEffect(() => {
        // 훅 초기 마운팅 시, 코드 작성
        document.documentElement.classList.add(themeMode);
    }, [themeMode]);

    return { themeMode, toggleThemeMode };
};

export default useThemeMode;

// prefers-color-scheme 최우선