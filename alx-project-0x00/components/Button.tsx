import { ButtonProps } from "@/interfaces"

const Button: React.FC<ButtonProps> = ({ title, styles,shapes="rounded-sm", sizes="small" }) => {

    const sizeClasses = {
        small: "text-sm",
        medium: "text-base",
        large: "text-lg",
    };

    const shapeClasses = {
        "rounded-sm": "rounded-sm",
        "rounded-md": "rounded-md",
        "rounded-full": "rounded-full",
    };

    return (
        <button className={`text-white bg-blue-500 ${styles} ${sizeClasses[sizes]} ${shapeClasses[shapes]}`}>{title}</button>
    )
}

export default Button;