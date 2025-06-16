import { InputProps } from "@/app/types/input";

export function Input({type, placeholder, name, onChange, style}: InputProps) {
    return (
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            className={style}
        />
    )
}