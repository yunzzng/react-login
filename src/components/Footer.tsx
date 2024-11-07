import {FC, PropsWithChildren} from "react";

interface HeaderProps extends PropsWithChildren {}
const Footer: FC<HeaderProps> = (props) => {
    const {children} = props;
    return (
        <>
            <footer>
                {children}
            </footer>
        </>
    );
};

export default Footer;