const FormInput = ({ inputType, inputName, value, onChange }) => {
  return (
    <input
      type={inputType}
      name={inputName}
      value={value}
      onChange={onChange}
      placeholder=" "
      className="bg-transparent outline-none border-b-2 border-[#a3a380] pb-3 w-full rounded-none"
    />
  );
};

export default FormInput;
