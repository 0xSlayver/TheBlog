'use client';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export type SelectOptionTypes = {
  label: string;
  value: string;
};

type DropdownSelectProps = {
  label: string;
  placeholder: string;
  options: SelectOptionTypes[];
  value?: string;
  defaultValue?: string;
  onValueChange: (value: string) => void;
  className?: string;
};

function DropdownSelect({
  label,
  placeholder,
  options,
  value,
  defaultValue,
  onValueChange,
  className,
}: DropdownSelectProps) {
  const handleValueChange = (nextValue: string | null) => {
    if (nextValue !== null) {
      onValueChange(nextValue);
    }
  };

  return (
    <Select
      items={options}
      value={value}
      defaultValue={defaultValue}
      onValueChange={handleValueChange}
      // disabled
    >
      <SelectTrigger
        className={
          className ?? 'w-full border-none shadow sm:min-w-40 sm:text-base'
        }
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>

      <SelectContent>
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default DropdownSelect;
