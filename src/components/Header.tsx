import type {IHeader} from "../interfaces/IHeader.ts";

const Header = ({ children, className }: IHeader) => {
    return (
        <header className={className}>
            {children}
        </header>
    );
};

export default Header;