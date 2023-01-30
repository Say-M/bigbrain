import { Link } from 'react-router-dom'
import Button from '../ui/button'
import Form from '../ui/form'

const Register = () => {
  return (
    <div className='flex flex-1 items-center justify-center h-screen'>
      <div className='max-w-sm w-full p-6 bg-white shadow'>
        <h2 className='text-3xl uppercase font-bold text-center mb-2'>
          Join Now
        </h2>
        <p className='text-center mb-6 text-stone-500'>
          Enjoy ChatGPT and MidJourney experience
        </p>
        <Form className='mt-4'>
          <Form.Control type='text' name='name' label='Name' className='mb-4' />
          <Form.Control
            type='email'
            name='email'
            label='Email address'
            className='mb-4'
          />
          <Form.Control
            type='password'
            name='password'
            label='Password'
            className='mb-4'
          />
          <Button
            type='submit'
            className='text-white w-full bg-fuchsia-500 hover:bg-fuchsia-600'>
            Continue
          </Button>
        </Form>
        <div className='relative h-[1px] bg-gray-300 my-8 before:content-["Or"] before:bg-white before:absolute before:px-4 before:uppercase before:text-sm before:left-1/2 before:-translate-x-1/2 before:top-1/2 before:-translate-y-1/2'></div>
        <div className='mt-4 text-center'>
          <p className='text-sm text-stone-500'>
            Already have an account?{' '}
            <Link
              to='/login'
              className='text-fuchsia-500 hover:text-fuchsia-600'>
              Login
            </Link>
          </p>
        </div>
        <div className='mt-4'>
          <Button
            className='w-full border hover:bg-gray-100 flex justify-center'
            type='button'>
            <img
              src='https://img.icons8.com/color/24/000000/google-logo.png'
              alt='google'
              className='mr-2'
            />
            Continue with Google
          </Button>
        </div>
        <div className='mt-4'>
          <Button
            className='w-full border hover:bg-gray-100 flex justify-center'
            type='button'>
            <img
              src='https://img.icons8.com/color/24/000000/facebook-new.png'
              alt='facebook'
              className='mr-2'
            />
            Continue with Facebook
          </Button>
        </div>
        <div className='mt-4'>
          <Button
            className='w-full border hover:bg-gray-100 flex justify-center'
            type='button'>
            <img
              src='https://img.icons8.com/ios-filled/24/000000/github.png'
              alt='github'
              className='mr-2'
            />
            Continue with Github
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Register
