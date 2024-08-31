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
          className="w-full bg-transparent rounded-md border border-stroke px-[14px] py-3  text-dark-6 outline-none transition focus:border-primary active:border-primary"
          //   py-[10px] pr-3 pl-12
          //   disabled:cursor-default disabled:bg-gray-2
        />
      </div>
    </>
  );
};

export default ContactInputBox;
