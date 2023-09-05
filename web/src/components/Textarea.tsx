import { HtmlHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";

interface TextareaProps extends HtmlHTMLAttributes<HTMLElement> {
  id: string;
  label: string;
  cols: number;
  rows: number;
}

export function Textarea({ id, label, cols, rows, ...rest }: TextareaProps) {
  const { register } = useFormContext();

  return (
    <div {...rest}>
      <label htmlFor={id}>{label}</label>
      <textarea
        className="mt-1 h-24 w-full resize-none rounded-lg bg-gray-100 px-4"
        id={id}
        cols={cols}
        rows={rows}
        {...register(id)}
      ></textarea>
    </div>
  );
}
