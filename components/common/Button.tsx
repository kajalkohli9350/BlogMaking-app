'use client'

import { cn } from "@/lib/utils";
import { IconType } from "react-icons";

interface ButtonProps {
    label: string;
    disabled?: boolean;
    outlined?: boolean;
    small?: boolean;
    icon?: IconType
    className?: string;
    type?: "submit" | "Button" | "reset" | undefined
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = (
    {label,disabled,outlined,small,icon:Icon,className,type,onClick}: ButtonProps
) => {
    return ( <button
    type={type}
    disabled={disabled}
    onClick={onClick}
    className={cn("disabled:capacity-70 disabled:cursor-not-allowed rounded-md hover:opacity-80 transition w-auto border-slate-300 border-2 flex items-center gap-2 justify-center py-3 px-5 my-2 bg-slate-700 text-white dark:border-slate-700",
        outlined && "bg-transparent text-slate-700 dark:text-slate-300 dark:bg-transparent",
        small && "text-sm py-1 px-2 border-[1px]",
        className && className
            )}>
                {Icon && <Icon size={20}/>}
                {label}

    </button> );
}
 
export default Button;