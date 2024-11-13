import { ChangeEvent, Dispatch, SetStateAction, createContext, useContext, useState } from "react";

interface FormContextProps {
    inputValue: string;
    setInputValue: Dispatch<SetStateAction<string>>;
    buttonLog: () => void;
}

const FormContext = createContext<FormContextProps>({
    inputValue: '',
    setInputValue: () => {},
    buttonLog: () => {},
})

const Form = () => {
    const [inputValue, setInputValue] = useState('');
    const buttonLog = () => {
        console.log(inputValue);
    }
    
    const contextValue = {
        inputValue,
        setInputValue,
        buttonLog
    }

    return (
        <FormContext.Provider value={contextValue}>
            <Input/>
            <Button/>
        </FormContext.Provider>
    )
}

const Input = () => {
    const {inputValue, setInputValue} = useContext(FormContext);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    return (
        <input value={inputValue} onChange={handleChange}/>
    )
}

const Button = () => {
    const {buttonLog} = useContext(FormContext);

    const handleClick = () => {
        buttonLog();
    };
    return (
        <button onClick={handleClick}>button</button>
    )
}

export default Form;