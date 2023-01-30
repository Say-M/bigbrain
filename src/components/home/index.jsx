import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../ui/button'

const Home = () => {
  return (
    <section className='bg-neutral-100 content-wrapper lg:p-8 p-4 overflow-auto'>
      <div className='max-w-5xl mx-auto'>
        <div className='grid grid-cols-2 gap-4'>
          <div className='px-8 py-4 bg-white rounded shadow'>
            <div className='flex justify-between items-center'>
              <h5 className='text-xl font-bold'>BrainChat</h5>
              <p>
                <span className='text-gray-500'>Powered by</span>{' '}
                <a
                  href='https://openai.com/'
                  className='font-medium'
                  target='_blank'
                  rel='noreferrer'>
                  OpenAI
                </a>
              </p>
            </div>
            <p className='mt-4 text-gray-500 mb-2'>
              BrainChat is a chatbot that uses OpenAI's GPT-3 API to generate
              responses to your messages. It's a fun way to test out GPT-3's
              capabilities and see what it can do.
            </p>
            <p className='mb-2 text-gray-500'>
              If you want to learn more about GPT-3, check out{' '}
              <a
                href='https://openai.com/blog/openai-api/'
                className='text-fuchsia-500'
                target='_blank'
                rel='noreferrer'>
                OpenAI's blog post
              </a>{' '}
              about it.
            </p>
            <Button className='mt-4 w-full bg-fuchsia-500 hover:bg-fuchsia-600 disabled:bg-fuchsia-400 disabled:cursor-not-allowed'>
              <Link to='/brain-chat' className='w-full block'>
                <span className='text-white'>Start Chatting</span>
              </Link>
            </Button>
          </div>
          <div className='px-8 py-4 bg-white rounded shadow'>
            <div className='flex justify-between items-center'>
              <h5 className='text-xl font-bold'>BrainJourney</h5>
              <p>
                <span className='text-gray-500'>Powered by</span>{' '}
                <a
                  href='https://openai.com/'
                  className='font-medium'
                  target='_blank'
                  rel='noreferrer'>
                  OpenAI
                </a>
              </p>
            </div>
            <p className='mt-4 text-gray-500 mb-2'>
              BrainJourney is a image processing app that uses OpenAI's Dall-E
              API to generate responses to your images. It's a fun way to test
              out Dall-E's capabilities and see what it can do.
            </p>
            <p className='mb-2 text-gray-500'>
              If you want to learn more about Dall-E, check out{' '}
              <a
                href='https://openai.com/blog/dall-e/'
                className='text-fuchsia-500'
                target='_blank'
                rel='noreferrer'>
                OpenAI's blog post
              </a>{' '}
              about it.
            </p>
            <Button className='mt-4 w-full bg-fuchsia-500 hover:bg-fuchsia-600 disabled:bg-fuchsia-400 disabled:cursor-not-allowed'>
              <Link to='/brain-journey' className='w-full block'>
                <span className='text-white'>Start Processing Image</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
