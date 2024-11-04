/**
 1) email 
    => '@' 무조건 포함 
 2) name
    => 2글자 이상
 3) password
    => 8글자 이상 + 영문, 특수문자는 꼭 하나씩 들어가야됩니다.
 4) passwordConfirm
    => password와 동일해야됩니다.
*/

// 1차 요구사항: 회원가입 버튼을 클릭했을 때, 위 조건을 만족하는 input value를 console.log로 출력해주세요.

import { ChangeEvent, FC, FormEvent, RefObject } from "react";

const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^&*()_+\-[\]{};':"\\|,.<>\/?`~\-]).{8,}$/;

interface SignupFormProps {
    onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (e: FormEvent<HTMLFormElement>) => void;
    userSignupForm: {
        email: string;
        name: string;
        password: string;
        passwordConfirm: string;
    };
    buttonRef: RefObject<HTMLButtonElement>;
}

const SignupForm: FC<SignupFormProps> = ({ onChangeInput, onSubmit, userSignupForm, buttonRef }) => {
    const validateField = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
    
        if (name === "email" && !value.includes("@")) {
            e.target.setCustomValidity("이메일 주소에 '@'를 포함해주세요.");
        } else if (name === "name" && value.length < 2) {
            e.target.setCustomValidity("이름은 최소 2글자 이상이어야 합니다.");
        } else if (name === "password" && !passwordRegex.test(value)) {
            e.target.setCustomValidity("비밀번호는 8자 이상이어야 하며, 영문자와 특수문자를 포함해야 합니다.");
        } else if (name === "passwordConfirm" && value !== userSignupForm.password) {
            e.target.setCustomValidity("비밀번호와 일치해야 합니다.");
        } else {
            e.target.setCustomValidity("");
        }
    };
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeInput(e);
        validateField(e);
    };

    return (
        <form onSubmit={onSubmit}>
            <h2>회원가입</h2>
            <input type="email" placeholder="email 입력" name="email" onChange={handleInputChange} />
            <input type="text" placeholder="name 입력" name="name" onChange={handleInputChange} />
            <input type="password" placeholder="password 입력" name="password" onChange={handleInputChange} /> 
            <input type="password" placeholder="password 확인" name="passwordConfirm" onChange={handleInputChange} /> 
            <button type="submit" ref={buttonRef} >회원가입</button>
        </form>
    );
};

export default SignupForm;