'use client';

import DropdownSelect, {
  SelectOptionTypes,
} from '@/components/dropdown-select';
import { useState } from 'react';

const CATEGORY_OPTIONS: SelectOptionTypes[] = [
  { label: 'All Categories', value: 'all' },
  { label: 'Web Development', value: 'Web Development' },
  { label: 'Productivity', value: 'Productivity' },
  { label: 'Databases', value: 'Databases' },
  { label: 'Lifestyle', value: 'Lifestyle' },
];

function ArticlesFilter() {
  // edit URL params using nuqs for filtring

  const [category, setCategory] = useState('all');

  return (
    <DropdownSelect
      label='Categories'
      placeholder='Filter by category'
      options={CATEGORY_OPTIONS}
      value={category}
      onValueChange={(val) => {
        setCategory(val);
      }}
    />
  );
}

export default ArticlesFilter;
