import { InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
}

export function Input({ id, label, type, placeholder, ...rest }: InputProps) {
  const { register } = useFormContext();

  return (
    <div className="relative flex w-full max-w-xs flex-col">
      <label htmlFor={label}>{label}</label>
      <input
        className="mt-1 h-10 w-full rounded-lg bg-gray-100 px-4"
        {...register(id)}
      />
    </div>
  );
}
