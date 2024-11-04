import { ChangeEvent, FormEvent, useState} from "react";
import LoginForm from "./LoginForm";

interface UserLoginForm{
    email: string;
    password: string;
};

const Login = () => {
    // const buttonRef = useRef<HTMLButtonElement>(null);

    // const refValue = useRef(3);
    // let normalValue = 3;

    const [UserLoginForm, setUserLoginForm] = useState<UserLoginForm>({
        email: "",
        password: "",
    });

    // useEffect(() => {
    //     refValue.current = 2;
    //     normalValue = 2;
    // }, []);

    // console.log('refValue: ', refValue.current, '\n namerValue:' ,normalValue);

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        // LoginForm: handleChangeInput --- props ---> Login: onChangeInput
        // buttonRef.current?.click(); 
        // const buttonElement = document.getElementById("ref-button");
        // buttonElement.click();

        const inputValue = e.target.value;
        const inputName = e.target.name; // email, password
        console.log(inputName, inputValue);

        setUserLoginForm(prev => ({...prev, [inputName]: inputValue}));
    };

    const handleClickLogin = async () => {
        try {
            const loginResult = await fetch("https://elice-express-api.vercel.app/api/users/signin", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: UserLoginForm.email,
                    password: UserLoginForm.password,
                }),
            });
    
            if (loginResult.ok) {
                const loginAlert = await loginResult.json();
                if (loginAlert.isError === false) {
                    alert("로그인 성공");
                } else {
                    alert("로그인 실패");
                }
            } else {
                // http 통신 실패
                alert("서버 응답 실패: " + loginResult.status);
            }
        } catch (err) {
            // 클라이언트 코드 오류 혹은 http 통신 실패
            console.error("로그인 요청 중 오류 발생:", err);
            alert("로그인 요청 중 오류가 발생했습니다.");
        }
    };

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("submit button clicked");
        console.log(UserLoginForm); // {email: "asd", password: "dfdf"}

        // fetch를 사용해서 로그인 API를 호출
        // 로그인 결과 값에
        // isError === false -> alert("로그인 성공") 
        // isError === true -> alert("로그인 실패")
        handleClickLogin();
    };

    // const handleClickButton = () => {
    //     console.log('trigger by Input');
    // };

    return (
        <>
            <LoginForm onChangeInput={onChangeInput} onSubmit={onSubmit} />
            {/* <button ref={buttonRef} onClick={handleClickButton}>Ref-Button</button> */}
        </>
    );
};

export default Login;