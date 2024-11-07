import { ChangeEvent, FC, FormEvent } from "react";

interface LoginFormProps {
    onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (e: FormEvent<HTMLFormElement>) => void;
    isButtonEnabled: boolean; // 버튼 활성화 상태를 상위 컴포넌트에서 받아옴
}

// [LoginForm] input 입력 ---> handleChangeEmail ---> onChangeInput ---> [Login] 컴포넌트의 onChangeInput 동작
const LoginForm: FC<LoginFormProps> = (props) => {
    const { onChangeInput, onSubmit, isButtonEnabled } = props;

    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        // 사용자가 입력한 값을 상위 컴포넌트인 <Login />로 올려야 함
        onChangeInput(e);
    };

    // onSubmit 연결 함수 ---> props.[특정 함수 호출]
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        onSubmit(e);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h2>로그인</h2>
                <input placeholder="email 입력" name="email" onChange={handleChangeInput} />
                <input type="password" placeholder="password 입력" name="password" onChange={handleChangeInput} />
                <button type="submit" disabled={!isButtonEnabled}>로그인</button> 
            </form>
        </>
    );
};

export default LoginForm;