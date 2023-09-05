import { InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function Input({ label, type, placeholder, ...rest }: InputProps) {
  const { register } = useFormContext();

  return (
    <div
      className="w-full flex flex-col max-w-xs relative"
    >
      <label htmlFor={label}>{label}</label>
      <input
        className="w-full h-10 bg-gray-100 rounded-lg px-4 mt-1"
        {...register(label)}
      />
    </div>
  );
}