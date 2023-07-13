import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLElement> {
  text: string;
}

export function Button({ text, ...rest }: ButtonProps) {
  return (
    <div>
      <button
        className="w-24 h-10 rounded-lg text-white font-bold bg-emerald-400 absolute bottom-0 right-0 mr-12 mb-12"
        type="button"
        {...rest}
      >
        {text}
      </button>
    </div>
  );
}