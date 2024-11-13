import {ReactNode, FC, useState, useContext, Dispatch, SetStateAction, createContext} from 'react';
interface DropdownProps {children?: ReactNode};

interface DropdownContextProps {
    toggleOpen: boolean;
    setToggleOpen: Dispatch<SetStateAction<boolean>>;
};

const DropdownContext = createContext<DropdownContextProps>({
    toggleOpen: false,
    setToggleOpen: () => {},
});

const Dropdown: FC<DropdownProps> = ({children}) => {
    const [toggleOpen, setToggleOpen] = useState<boolean>(false);
    const contextValue = {
        toggleOpen,
        setToggleOpen,
    };

    return (
        <DropdownContext.Provider value={contextValue}>
            {children}
        </DropdownContext.Provider>
    );
};
const DropdownTrigger: FC<DropdownProps> = ({children}) => {
    const { toggleOpen, setToggleOpen } = useContext(DropdownContext);
    return (
        <>
            <button onClick={() => setToggleOpen(!toggleOpen)}>{children}toggle-button</button>
        </>
    );
};
const DropdownContent: FC<DropdownProps> = ({children}) => {    
    const { toggleOpen } = useContext(DropdownContext);
    return (
        <>
            {toggleOpen && children}
        </>
    );
};
const DropdownItem: FC<DropdownProps> = ({children}) => {
    return (
        <>
            {children}
        </>
    );
};

const PageComponent = () => {
    return (
        <Dropdown>
            <DropdownTrigger/>
            <DropdownContent>
                <DropdownItem>Item-1</DropdownItem>
                <DropdownItem>Item-2</DropdownItem>
                <DropdownItem>Item-3</DropdownItem>
            </DropdownContent>
        </Dropdown>
    );
};

export default PageComponent;