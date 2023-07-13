import { InputHTMLAttributes } from "react";
import styles from "../styles/components/Radio.module.css";

interface RadioProps extends InputHTMLAttributes<HTMLElement> {
  label: string;
}

export function Radio({ label, name, ...rest }: RadioProps) {
  return (
    <div
      className=" relative flex flex-row-reverse"
    >
      <label htmlFor={name}>{label}</label>
      <input
        className={`${styles.input} absolute opacity-0 top-0 left-0 w-6 h-6`}
        type="radio"
        name={name}
        id={name}
        {...rest}
      />
      <span
        className={`${styles.checkmark} w-6 h-6 rounded-xl bg-gray-100
        before:none before:content[''] before:w-4 before:h-4 before:rounded-xl before:m-auto before:translate-y-1 hover:bg-gray-200`}
      ></span>
    </div>
  );
}