'use client';

import { parseAsString,useQueryState } from 'nuqs';

import DropdownSelect, {
  SelectOptionTypes,
} from '@/components/dropdown-select';

const CATEGORY_OPTIONS: SelectOptionTypes[] = [
  { label: 'All Categories', value: 'all' },
  { label: 'Web Development', value: 'Web Development' },
  { label: 'Productivity', value: 'Productivity' },
  { label: 'Databases', value: 'Databases' },
  { label: 'Lifestyle', value: 'Lifestyle' },
];

function ArticlesFilter() {
  const [category, setCategory] = useQueryState(
    'category',
    parseAsString.withDefault('all'),
  );

  return (
    <DropdownSelect
      label='Categories'
      placeholder='Filter by category'
      options={CATEGORY_OPTIONS}
      value={category}
      onValueChange={(val) => setCategory(val)}
    />
  );
}

export default ArticlesFilter;
