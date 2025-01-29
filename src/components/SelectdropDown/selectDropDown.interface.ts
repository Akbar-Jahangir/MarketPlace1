export interface SelectDropdownProps {
  label: string; 
  id: string;
  name: string;
  options: { value: string; label: string }[]; // Array of options
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void; // Change handler
  customStyles?: string; // Optional custom styles for the dropdown
}
