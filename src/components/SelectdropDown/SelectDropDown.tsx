interface SelectDropdownProps {
  label: string;
  id: string;
  name: string;
  options: { value: string; label: string }[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  customStyles?: string;
}

const SelectDropdown: React.FC<SelectDropdownProps> = ({
  label,
  id,
  name,
  options,
  onChange,
  customStyles,
}) => {
  return (
    <div>
      <label htmlFor={id} className="font-Montserrat">
        {label}
      </label>
      <select
        id={id}
        name={name}
        onChange={onChange}
        className={`w-full px-4 py-2 border rounded ${customStyles}`}
      >
        {options.map((option, index) => (
          <option
            key={index}
            value={option.value}
            disabled={option.value === ""}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectDropdown;
