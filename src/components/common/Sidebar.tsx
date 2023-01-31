import { Link } from 'react-router-dom'
import { IoMdImages } from 'react-icons/io'
import { BiSupport, BiHome, BiChat, BiBrain } from 'react-icons/bi'

const Sidebar = ({
  isSidebar,
  setSidebar,
}: {
  isSidebar: boolean
  setSidebar: (isSidebar: boolean) => void
}) => {
  return (
    <aside
      className={'h-screen max-w-xs w-full bg-white border-r flex flex-col lg:relative absolute lg:left-0 z-50 duration-150'.concat(
        isSidebar ? ' left-0' : ' -left-full'
      )}>
      <div className='max-h-20 h-full flex justify-between items-center py-4 px-8'>
        <div className='whitespace-nowrap flex items-end'>
          <BiBrain className='mr-3 text-3xl text-fuchsia-500' />
          <h1 className='text-3xl font-bold text-fuchsia-500'>BigBrain</h1>
        </div>
        <button className='lg:hidden' onClick={() => setSidebar(false)}>
          <svg
            className='w-6 h-6 text-gray-500'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </button>
      </div>
      <div className='flex flex-col justify-between h-full border-t'>
        <ul className='my-6'>
          <li className='mx-8 mb-3 last:mb-0'>
            <Link
              to='/'
              className='flex items-center px-4 py-2 rounded transition hover:bg-fuchsia-500 hover:text-white text-lg'>
              <BiHome className='mr-3' />
              <span className='font-medium'>Home</span>
            </Link>
          </li>
          <li className='mx-8 mb-3 last:mb-0'>
            <Link
              to='/brain-chat'
              className='flex items-center px-4 py-2 rounded transition hover:bg-fuchsia-500 hover:text-white text-lg'>
              <BiChat className='mr-3' />
              <span className='font-medium'>Brain Chat</span>
            </Link>
          </li>
          <li className='mx-8 mb-3 last:mb-0'>
            <Link
              to='/brain-journey'
              className='flex items-center px-4 py-2 rounded transition hover:bg-fuchsia-500 hover:text-white'>
              <IoMdImages className='mr-3' />
              <span className='font-medium'>Brain Journey</span>
            </Link>
          </li>
          {/* <li className='mx-8 mb-3 last:mb-0'>
            <Link
              to='/support'
              className='flex items-center px-4 py-2 rounded transition hover:bg-fuchsia-500 hover:text-white'>
              <BiSupport className='mr-3' />
              <span className='font-medium'>Support</span>
            </Link>
          </li> */}
        </ul>
        <div className='flex items-center mx-8 my-4'></div>
      </div>
    </aside>
  )
}

export default Sidebar
