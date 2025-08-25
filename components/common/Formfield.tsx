import { cn } from "@/lib/utils";
import {  FieldErrors, Path, UseFormRegister } from "react-hook-form";

interface LoginValues{
    email:string;
    password:string;
}
interface FormfieldProps {
    id: string;
    type?: string;
    disabled?: boolean;
    placeholder?: string;
    label: string;
    inputClassName?: string;
    register: UseFormRegister<LoginValues>;
    errors: FieldErrors;
}
const Formfield = ({id,type,disabled,placeholder,label,inputClassName,register,errors}: FormfieldProps) => {
    const messsage = errors[id] && errors[id]?.message as string;
    return ( <div>
        {label && <span className="block text-sm">{label}</span>}
        <input
        id={id}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        {...register(id as Path<LoginValues>)}
        className={cn('w-full p-3 my-2 outline-none rounded-md disabled:opacity-70 disabled:curser-not-allowed border border-slate-300 dark:border-slate-700',errors[id] && "border-rose-400",inputClassName)}
        />
    </div> );
}
 
export default Formfield;