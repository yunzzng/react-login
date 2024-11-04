import { ChangeEvent, FormEvent, useRef, useState } from "react";
import SignupForm from "./SignupForm";

interface UserSignupForm {
    email: string;
    name: string;
    password: string;
    passwordConfirm: string;
}

const Signup = () => {
    const [userSignupForm, setUserSignupForm] = useState<UserSignupForm>({
        email: "",
        name: "",
        password: "",
        passwordConfirm: "",
    });

    const buttonRef = useRef<HTMLButtonElement>(null);

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserSignupForm((prev) => ({ ...prev, [name]: value }));
    };

    const checkedEmail = async (email: string) => {
        try {
            const response = await fetch(`https://elice-express-api.vercel.app/api/users/check-email?email=${email}`);
            const result = await response.json();
            return result.isAvailable; 
        } catch (err) {
            console.error("이메일 중복 확인 오류:", err);
            return false;
        }
    };

    const handleClickSignup = async () => {
        // 이메일 중복 확인 먼저 수행
        const emailAvailable = await checkedEmail(userSignupForm.email);
        if (!emailAvailable) {
            alert("이미 사용 중인 이메일입니다.");
            return;
        }

        // 이메일 중복 확인을 통과한 경우에만 회원가입 요청
        try {
            const signupResult = await fetch("https://elice-express-api.vercel.app/api/users/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: userSignupForm.email,
                    name: userSignupForm.name,
                    password: userSignupForm.password,
                }),
            });

            if (signupResult.ok) {
                const signupAlert = await signupResult.json();
                if (signupAlert.isError === false) {
                    alert("회원가입 성공");
                } else {
                    alert("회원가입 실패");
                }
            } else {
                // http 통신 실패
                alert("서버 응답 실패: " + signupResult.status);
            }
        } catch (err) {
            // 클라이언트 코드 오류 혹은 http 통신 실패
            console.error("회원가입 요청 중 오류 발생:", err);
            alert("회원가입 요청 중 오류가 발생했습니다.");
        }
    };

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("회원가입 정보:", userSignupForm);
        handleClickSignup();
    };

    return (
        <SignupForm onChangeInput={onChangeInput} onSubmit={onSubmit} userSignupForm={userSignupForm} buttonRef={buttonRef}/>
    );
};

export default Signup;