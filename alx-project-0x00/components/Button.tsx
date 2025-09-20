import { ButtonProps } from "@/interfaces"

const Button: React.FC<ButtonProps> = ({ title, shapes="rounded-sm", sizes="small" }) => {

    const sizeClasses = {
        small: "px-2 py-1 text-sm",
        medium: "px-4 py-2 text-base",
        large: "px-6 py-3 text-lg",
    };

    const shapeClasses = {
        "rounded-sm": "rounded-sm",
        "rounded-md": "rounded-md",
        "rounded-full": "rounded-full",
    };

    return (
        <button className={`text-white bg-blue-500 ${sizeClasses[sizes]} ${shapeClasses[shapes]}`}>{title}</button>
    )
}

export default Button;