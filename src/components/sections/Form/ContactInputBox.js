const ContactInputBox = ({ type, placeholder, name, id }) => {
  return (
    <>
      <label
        htmlFor={id}
        className="mb-[10px] block capitalize text-base font-medium text-black"
      >
        {name}
      </label>
      <div className="relative mb-6">
        <input
          required
          id={id}
          type={type}
          placeholder={placeholder}
          name={name}
          className="w-full bg-[#efe5dc] rounded-md border border-stroke border-black px-[14px] py-3  text-body-color outline-none"
          //   py-[10px] pr-3 pl-12 focus:border-primary active:border-primary
          //   disabled:cursor-default disabled:bg-gray-2
        />
      </div>
    </>
  );
};

export default ContactInputBox;
