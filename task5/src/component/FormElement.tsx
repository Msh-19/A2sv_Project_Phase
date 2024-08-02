// import React from "react";
import { useForm } from "react-hook-form";


const FormElement = ({ type, label, placeholder, fieldRef, hasError }: {
  type: string,
  label: string,
  placeholder: string,
  fieldRef: any,
  hasError: boolean
}) => {
  const classes =
    "form-control w-full px-3 py-1.5 text-gray-700 rounded border border-solid border-gray-300 focus:border-pink-600 fouces:outline-none";
  const {
    formState: {},
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  return (
    <div className="form-group mb-6">
      <label className="block text-grey-700 text-sm font-bold mb-2">
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          className={classes}
          row="3"
          placeholder={placeholder}
          {...fieldRef}
        />
      ) : (
        <input
          className={classes}
          type={type}
          placeholder={placeholder}
          {...fieldRef}
        />
      )}
      {hasError && (
        <p className="text-red-500 text-xs italic">{`${label} is required`}</p>
      )}
    </div>
  );
};

export default FormElement;
