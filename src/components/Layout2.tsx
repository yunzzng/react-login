import { ChangeEventHandler, FC, MouseEventHandler, useState } from "react"

interface LayoutProps{
    title: string;
    desc: string;
};

const Layout2: FC<LayoutProps> = (props) => {
    const {title, desc} = props;
    const [state, setState] = useState("default-word");

    const handleClickButton: MouseEventHandler = (e) => {
        console.log(e);
        setState("changed-word");
    };

    // const handleClickButton1 = (e: MouseEvent): void => {
    //     setState("changed-word");
    // };

    const handleChangeInput: ChangeEventHandler<HTMLInputElement> = (e) => {
        const value = e.target.value;
        console.log(value);
    };
    // const handleChangeInput1 = (e: ChangeEvent<HTMLInputElement>) => {
    //     const value = e.target.value;
    //     console.log(value);
    // };
    return (
        <>
            <button onClick={handleClickButton}>change word</button>
            <input onChange={handleChangeInput} />
            <h2>{title}</h2>
            <div>{desc}</div>
            {state}
        </>
    );
};

export default Layout2;