import type {IButtonInterface} from "../interfaces/IButtonInterface.ts";

const Button = ({
                    children,
                    type = "button",
                    className = "",
                    ...rest
                }: IButtonInterface) => {
    return (
        <button
            type={type}
            className={`px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition ${className}`}
            {...rest}
        >
            {children}
        </button>
    );
};

export default Button;