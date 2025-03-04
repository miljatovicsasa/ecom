'use client';
import { useState } from 'react';

interface ProductOptionsProps {
  configurableOptions: {
    attribute_code: string;
    values: { value_index: number; label: string }[];
  }[];
  onSelectOption: (selectedOption: number) => void;
}

export default function ProductOptions({
  configurableOptions,
  onSelectOption,
}: ProductOptionsProps) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleSelect = (value: number) => {
    setSelectedOption(value);
    onSelectOption(value);
  };

  return (
    <div>
      {configurableOptions.map((option) => (
        <div key={option.attribute_code} className="mb-4">
          <label className="block text-sm font-semibold">
            {option.attribute_code.toUpperCase()}
          </label>
          <select
            className="w-full border p-2 rounded"
            value={selectedOption ?? ''}
            onChange={(e) => handleSelect(Number(e.target.value))}
          >
            <option value="">Select an option</option>
            {option.values.map((value) => (
              <option key={value.value_index} value={value.value_index}>
                {value.label}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
}
