import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLElement> {
  text: string;
}

export function Button({ text, ...rest }: ButtonProps) {
  return (
    <div>
      <button
        className="w-full h-10 rounded-lg text-white font-bold bg-green-600"
        type="button"
        {...rest}
      >
        {text}
      </button>
    </div>
  );
}