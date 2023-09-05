import { InputHTMLAttributes } from "react";
import styles from "../styles/components/Radio.module.css";
import { useFormContext } from "react-hook-form";

interface RadioProps extends InputHTMLAttributes<HTMLElement> {
  name: string;
  label: string;
}

export function Radio({ id, label, name, ...rest }: RadioProps) {
  const { register } = useFormContext();

  return (
    <div className=" relative flex flex-row-reverse">
      <label htmlFor={name}>{label}</label>
      <input
        className={`${styles.input} absolute left-0 top-0 h-6 w-6 opacity-0`}
        type="radio"
        id={name}
        {...register(name)}
        {...rest}
      />
      <span
        className={`${styles.checkmark} before:none before:content[''] h-6 w-6
        rounded-xl bg-gray-100 before:m-auto before:h-4 before:w-4 before:translate-y-1 before:rounded-xl hover:bg-gray-200`}
      ></span>
    </div>
  );
}
