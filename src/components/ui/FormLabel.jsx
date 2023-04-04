import FormInput from './FormInput';

const FormLabel = ({ label, inputType, inputName, value, onChange }) => {
  return (
    <label className="relative w-full">
      <FormInput
        inputType={inputType}
        inputName={inputName}
        value={value}
        onChange={onChange}
      />
      <span className="absolute left-0 transition-all duration-700 pointer-events-none text-xl bg-transparent w-full ">
        {label}
      </span>
    </label>
  );
};

export default FormLabel;
