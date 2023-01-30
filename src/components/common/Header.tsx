import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaGlobe,
  FaLinkedinIn,
} from 'react-icons/fa'

const Header = ({
  isSidebar,
  setSidebar,
}: {
  isSidebar: boolean
  setSidebar: (isSidebar: boolean) => void
}) => {
  return (
    <header className='h-20 bg-white px-4 lg:px-8'>
      {isSidebar && (
        <div
          className='absolute z-30 w-full h-full left-0 top-0 bg-black opacity-50 lg:hidden'
          onClick={() => setSidebar(false)}></div>
      )}
      <div className='flex justify-between items-center h-full'>
        <div>
          <button className='lg:hidden' onClick={() => setSidebar(!isSidebar)}>
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
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </button>
        </div>
        <div className='flex'>
          <div className='flex'>
            <div>
              <img
                src='https://scontent.fcgp3-2.fna.fbcdn.net/v/t39.30808-6/297710393_3122456374734421_3394722948552607198_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=rr4GdyK_lnsAX_oVUTM&_nc_ht=scontent.fcgp3-2.fna&oh=00_AfDfG8-bqFofdDP_u4IjImApfGDkKldWD-1894G1dB4F2Q&oe=63DD68A6'
                alt='avatar'
                className='w-12 h-12 rounded-full mr-4 border object-cover'
              />
            </div>
            <div>
              <h6 className='font-medium mb-1'>Developed By Sayem</h6>
              <div className='flex'>
                {/* social media links */}
                <a
                  href='https://www.github.com/say-m'
                  target='_blank'
                  rel='noreferrer'
                  className='mr-3'>
                  <FaGithub />
                </a>
                <a
                  href='https://www.linkedin.com/in/say-m/'
                  target='_blank'
                  rel='noreferrer'
                  className='mr-3'>
                  <FaLinkedinIn />
                </a>
                <a
                  href='https://coder-sayem.vercel.app'
                  target='_blank'
                  rel='noreferrer'
                  className='mr-3'>
                  <FaGlobe />
                </a>
                <a
                  href='mailto:msayem089@gmail.com'
                  target='_blank'
                  rel='noreferrer'
                  className='mr-3'>
                  <FaEnvelope />
                </a>
                <a
                  href='https://www.facebook.com/sayem.me'
                  target='_blank'
                  rel='noreferrer'
                  className='mr-3'>
                  <FaFacebook />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
