type InputProps = {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
};

export const InputText = ({
  label,
  placeholder,
  value,
  onChange,
}: InputProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label>{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="border rounded-xl p-2 border-slate-400 text-slate-600 text-[16px]"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
      />
    </div>
  );
};
