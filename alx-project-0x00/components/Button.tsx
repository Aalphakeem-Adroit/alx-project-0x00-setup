import { ButtonProps } from "@/interfaces"

const Button: React.FC<ButtonProps> = ({ title }) => {

    const sizeClasses = {
        small: "px-2 py-1 text-sm rounded-sm",
        medium: "px-4 py-2 text-base rounded-md",
        large: "px-6 py-3 text-lg rounded-lg",
    };

    return (
        <button className={`text-white bg-blue-500 ${sizeClasses["large"]}`}>{title}</button>
    )
}

export default Button;