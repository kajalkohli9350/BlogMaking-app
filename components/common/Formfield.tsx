import { cn } from "@/lib/utils";
import {
  FieldErrors,
  Path,
  UseFormRegister,
  FieldValues,
} from "react-hook-form";

interface FormfieldProps<T extends FieldValues> {
  id: string;
  type?: string;
  disabled?: boolean;
  placeholder?: string;
  label: string;
  inputClassName?: string;
  register: UseFormRegister<T>;
  errors: FieldErrors;
}
const Formfield = <T extends FieldValues>({
  id,
  type = "text",
  disabled,
  placeholder,
  label,
 
  inputClassName,
  register,
  errors,
}: FormfieldProps<T>) => {
  const messsage = errors[id] && (errors[id]?.message as string);
  return (
    <div>
      {label && <span className="block text-sm">{label}</span>}
      <input
        id={id}
       
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        {...register(id as Path<T>)}
        className={cn(
          "w-full p-3 my-2 outline-none rounded-md disabled:opacity-70 disabled:curser-not-allowed border border-slate-300 dark:border-slate-700",
          errors[id] && "border-rose-400",
          inputClassName
        )}
      />
    </div>
  );
};

export default Formfield;
