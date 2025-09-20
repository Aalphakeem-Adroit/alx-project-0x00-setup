import { ButtonProps } from "@/interfaces"

const Button: React.FC<ButtonProps> = ({ title }) => {

    return (
        <button className="bg-blue-500 text-white">{title}</button>
    )
}

export default Button;