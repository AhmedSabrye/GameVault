import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FilterSelectProps {
  value: string;
  onValueChange: (value: string) => void;
  options: string[];
  placeholder: string;
  className?: string;
}

const FilterSelect = ({
  value,
  onValueChange,
  options,
  placeholder,
  className,
}: FilterSelectProps) => {
  const formatLabel = (option: string) => {
    if (option === "all") {
      return `All ${placeholder}s`;
    }
    return option.toUpperCase();
  };

  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger
        className={`bg-white/10 border-purple-500/30 text-white w-full${
          className || ""
        }`}
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="bg-slate-800 border-purple-500/30">
        {options.map((option) => (
          <SelectItem
            key={option}
            value={option}
            className="text-white hover:bg-purple-500/20"
          >
            {formatLabel(option)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default FilterSelect;
