import { HtmlHTMLAttributes } from "react";

interface TextareaProps extends HtmlHTMLAttributes<HTMLElement> {
  label: string;
  cols: number;
  rows: number;
}

export function Textarea({ label, cols, rows, ...rest }: TextareaProps) {
  return (
    <div
      {...rest}
    >
      <label htmlFor="textarea">
        {label}
      </label>
      <textarea
        className="resize-none w-80 h-24 bg-gray-100 rounded-lg px-4 mt-1"
        id="textarea"
        cols={cols}
        rows={rows}
      ></textarea>
    </div>
  );
}