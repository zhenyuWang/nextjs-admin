import { usePathname } from 'next/navigation'
import { useTheme } from '@/app/context/theme-context'
import { Accordion, AccordionItem } from '@nextui-org/react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import Link from 'next/link'
import './sideBar.css'

const List = ({ list, level }) => {
  const pathname = usePathname()
  const themeContext = useTheme()
  const theme = themeContext?.theme

  return (
    <Accordion
      className='p-0'
      itemClasses={{
        title: `${theme === 'light' ? '' : 'text-white'} accordion-item`,
        heading: ' px-3',
      }}
    >
      {list.map((item) => (
        <AccordionItem
          className={`pl-2 side-bar-item ${
            pathname === item.path ? 'active' : ''
          }`}
          key={item.title}
          startContent={item.icon}
          indicator={<MdOutlineKeyboardArrowRight />}
          hideIndicator={item.list ? false : true}
          textValue={item.title}
          title={
            item.list ? (
              item.title
            ) : (
              <Link
                className='absolute left-0 top-0 right-0 bottom-0 pl-10 z-10 dark:text-white leading-[58px]'
                target={item.href ? '_blank' : '_self'}
                href={item.href || item.path}
              >
                {item.title}
              </Link>
            )
          }
        >
          {item.list ? (
            <List list={item.list} level={level + 1} />
          ) : (
            <div></div>
          )}
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export default List
