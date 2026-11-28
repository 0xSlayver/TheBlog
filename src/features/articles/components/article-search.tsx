'use client';

import { debounce,parseAsString, useQueryState } from 'nuqs';

import { Input } from '@/components/ui/input';

function ArticleSearch() {
  const [search, setSearch] = useQueryState('q', parseAsString.withDefault(''));

  const handleSearch = (value: string) => {
    setSearch(value.trim() === '' ? null : value, {
      limitUrlUpdates: value === '' ? undefined : debounce(300),
    });
  };

  return (
    <Input
      aria-label='Search articles'
      type='search'
      value={search}
      onChange={(event) => handleSearch(event.target.value)}
      placeholder='Search articles...'
    />
  );
}

export default ArticleSearch;
