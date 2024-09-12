import React from "react";

const ContactInputBox = ({
  type,
  placeholder,
  name,
  id,
  register,
  validationRules,
}) => (
  <>
    <label
      htmlFor={id}
      className="mb-[10px] block capitalize text-base font-medium text-black"
    >
      {name}{" "}
      {validationRules.required && <span className="text-red-500">*</span>}
    </label>
    <div className="relative">
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        name={name}
        className="w-full bg-[#efe5dc] rounded-md border border-stroke border-black px-[14px] py-3  text-body-color outline-none"
        //   py-[10px] pr-3 pl-12 focus:border-primary active:border-primary
        //   disabled:cursor-default disabled:bg-gray-2
        {...register(name, validationRules)}
      />
    </div>
  </>
);

// Adding a displayName to the component
ContactInputBox.displayName = "ContactInputBox";

export default ContactInputBox;
