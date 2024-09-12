import React from "react";

const ContactTextArea = ({
  row,
  placeholder,
  name,
  defaultValue,
  id,
  register,
  validationRules,
}) => {
  // const { onBlur, ...fieldProps } = register(name, validationRules);

  return (
    <>
      <label
        htmlFor={id}
        className="mb-[10px] block capitalize text-base font-medium text-black"
      >
        {name}{" "}
        {validationRules.required && <span className="text-red-500">*</span>}
      </label>
      <div className="">
        <textarea
          rows={row}
          placeholder={placeholder}
          name={name}
          // contactt form blur not working for input fields, except for name field
          className="w-full bg-[#efe5dc] resize-none rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none border-black"
          // onBlur={onBlur}
          defaultValue={defaultValue}
          // {...fieldProps}
          {...register(name, validationRules)}
        />
      </div>
    </>
  );
};

// Adding a displayName to the component
ContactTextArea.displayName = "ContactTextArea";

export default ContactTextArea;
