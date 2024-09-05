const ContactTextArea = ({ row, placeholder, name, defaultValue, id }) => {
  return (
    <>
      <label
        htmlFor={id}
        className="mb-[10px] block capitalize text-base font-medium text-black"
      >
        {name}
      </label>
      <div className="mb-6">
        <textarea
          rows={row}
          placeholder={placeholder}
          name={name}
          className="w-full bg-[#efe5dc] resize-none rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none border-black"
          defaultValue={defaultValue}
        />
      </div>
    </>
  );
};

export default ContactTextArea;