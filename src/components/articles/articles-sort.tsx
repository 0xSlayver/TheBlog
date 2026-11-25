'use client';

import DropdownSelect, {
  SelectOptionTypes,
} from '@/components/dropdown-select';
import { useState } from 'react';

const SORT_OPTIONS: SelectOptionTypes[] = [
  { label: 'Newest', value: 'newest' },
  { label: 'Oldest', value: 'oldest' },
];

function ArticlesSort() {
  // edit URL params using nuqs for sorting

  const [sortBy, setSortBy] = useState('newest');

  return (
    <DropdownSelect
      label='Sort by'
      placeholder='Sort articles'
      options={SORT_OPTIONS}
      value={sortBy}
      onValueChange={(val) => {
        setSortBy(val);
      }}
    />
  );
}

export default ArticlesSort;
