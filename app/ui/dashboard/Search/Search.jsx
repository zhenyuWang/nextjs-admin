'use client'

import { MdSearch } from 'react-icons/md'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'
import { Input } from '@nextui-org/react'

const Search = ({ placeholder }) => {
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const pathname = usePathname()

  const handleSearch = useDebouncedCallback((value) => {
    const params = new URLSearchParams(searchParams)

    params.set('page', 1)

    if (value) {
      value.length > 2 && params.set('q', value)
    } else {
      params.delete('q')
    }
    replace(`${pathname}?${params}`)
  }, 300)

  return (
    <Input
      className='w-50'
      size='small'
      variant='bordered'
      placeholder={placeholder}
      startContent={<MdSearch />}
      onValueChange={handleSearch}
    />
  )
}

export default Search
