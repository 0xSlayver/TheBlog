'use client';

import { parseAsString,useQueryState } from 'nuqs';

import DropdownSelect, {
  SelectOptionTypes,
} from '@/components/dropdown-select';

const SORT_OPTIONS: SelectOptionTypes[] = [
  { label: 'Newest', value: 'newest' },
  { label: 'Oldest', value: 'oldest' },
];

function ArticlesSort() {
  const [sortBy, setSortBy] = useQueryState(
    'sort',
    parseAsString.withDefault('newest'),
  );

  return (
    <DropdownSelect
      label='Sort by'
      placeholder='Sort articles'
      options={SORT_OPTIONS}
      value={sortBy}
      onValueChange={(val) => setSortBy(val)}
    />
  );
}

export default ArticlesSort;
