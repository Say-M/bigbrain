import { useState } from 'react'
import { Configuration, OpenAIApi } from 'openai'
import Form from '../ui/form'
import Button from '../ui/button'

const MidJourney = () => {
  // ! hooks
  const [image, setImage] = useState('')
  const [prompts, setPrompts] = useState([])
  const [images, setImages] = useState([])
  const [isSubmitting, setSubmitting] = useState(false)

  // ! handlers
  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      setImages([])
      const configuration = new Configuration({
        apiKey: import.meta.env.VITE_OPENAI_API_KEY,
      })
      const openai = new OpenAIApi(configuration)

      const response = await openai.createImage({
        prompt: image,
        n: 4,
        size: '1024x1024',
      })
      setPrompts([...prompts, image])
      setImages([...response?.data?.data])
      console.log(response?.data?.data)
      setImage('')
    } catch (error) {
      console.log(error)
    }
    setSubmitting(false)
  }

  return (
    <section className='bg-neutral-100 content-wrapper lg:p-8 p-4 overflow-auto'>
      <div className='max-w-5xl mx-auto'>
        <div className='px-8 py-4 bg-white rounded shadow flex justify-between items-center'>
          <div>
            <h2 className='text-4xl font-bold mb-2'>Brain Journey</h2>
            <p className='text-gray-500 text-sm'>
              This is a AI powered image generator. It uses OpenAI's Dall-E to
              generate images. It is a work in progress. Please be patient with
              it.
            </p>
          </div>
        </div>
        <div className='px-8 pb-4 pt-6 bg-white rounded shadow mt-4'>
          <Form className='flex sm:flex-row flex-col' onSubmit={handleSubmit}>
            <Form.Area
              label='Convert your imagination into image'
              className='w-full sm:mb-0 mb-4'
              inputClassName='rounded-r-none disabled:bg-gray-100'
              onChange={(e) => setImage(e.target.value)}
              value={image}
              disabled={isSubmitting}
            />
            <Button
              type='submit'
              className='bg-fuchsia-500 hover:bg-fuchsia-600 text-white rounded-l-none disabled:bg-fuchsia-400 disabled:cursor-not-allowed whitespace-nowrap'
              disabled={isSubmitting}>
              Submit {isSubmitting && '...'}
            </Button>
          </Form>
        </div>
        {!!images?.length && (
          <div className='px-8 py-4 bg-white rounded shadow mt-4'>
            <h2 className='text-2xl font-bold mb-4'>
              {prompts[prompts?.length - 1]}
            </h2>
            <div className='grid grid-cols-2 gap-4'>
              {images?.map((image) => (
                <img
                  key={image?.url}
                  src={image?.url}
                  alt='image'
                  className='w-full'
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default MidJourney
