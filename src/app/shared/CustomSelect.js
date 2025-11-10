import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CustomSelect = ({
  value,
  onChange,
  defaultValue = "",
  placeholder = "Select an option",
  label,
  options = [],
  variant = "default", // "default" | "outline" | "ghost"
  className = "",
}) => {
  const variantClasses = {
    default: "border border-gray-300",
    outline: "border border-dark-gray-200 text-[10px] leading-3 py-[5px] !h-auto px-4 text-dark-gray-300",
    ghost: "bg-transparent border-none shadow-none",
  };

  return (
    <Select value={value} onValueChange={onChange} defaultValue={defaultValue}>
      <SelectTrigger
        className={`cursor-pointer ${variantClasses[variant] || ""} ${className}`}
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>

      <SelectContent>
        {label && <SelectLabel>{label}</SelectLabel>}
        <SelectGroup>
          {options.map((opt) => (
            <SelectItem key={opt.value} value={opt.value}>
              {opt.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default CustomSelect;
