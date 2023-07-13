import { InputHTMLAttributes, ReactNode } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  children?: ReactNode;
}

export function Input({ label, type, placeholder, children }: InputProps) {
  return (
    <div
      className="w-full flex flex-col max-w-xs relative"
    >
      <label htmlFor={label}>
        {label}
      </label>
      <input
        className="w-full h-10 bg-gray-100 rounded-lg px-4 mt-1"
        id={label}
        type={type}
        placeholder={placeholder}
      />
      {children}
    </div>
  );
}