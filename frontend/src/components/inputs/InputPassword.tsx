import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

type InputProps = {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
};

export const InputPassword = ({
  label,
  placeholder,
  value,
  onChange,
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col gap-1">
      <label>{label}</label>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          className="absolute border rounded-xl p-2 border-slate-400 text-slate-600 text-[16px] w-full"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute translate-y-1/2 right-3"
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>
    </div>
  );
};
