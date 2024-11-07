import {FC, PropsWithChildren} from "react";

interface HeaderProps extends PropsWithChildren {}
const Header: FC<HeaderProps> = (props) => {
    const {children} = props;
    return (
        <>
            <header>
                {children}
            </header>
        </>
    );
};

export default Header;