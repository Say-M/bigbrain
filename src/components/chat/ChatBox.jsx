import { useEffect, useState } from 'react'
import { Configuration, OpenAIApi } from 'openai'
import Button from '../ui/button'
import Form from '../ui/form'

const ChatBox = ({ engine }) => {
  // ! hooks
  const [isSubmitting, setSubmitting] = useState(false)
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])

  // ! remove messages if engine changes
  useEffect(() => {
    setMessages([])
  }, [engine])

  // ! handlers
  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      const configuration = new Configuration({
        apiKey: import.meta.env.VITE_OPENAI_API_KEY,
      })
      let newMessages = [...messages]
      const openai = new OpenAIApi(configuration)
      const response = await openai.createCompletion({
        model: engine,
        prompt: [
          ...newMessages
            ?.reverse()
            ?.map((message) => message?.human + message?.ai + '\n'),
          message,
        ].join('\n'),
        temperature: 0.5,
        max_tokens: 2000,
      })
      setMessages([
        {
          id: Date.now(),
          human: message,
          ai: response?.data?.choices[0]?.text?.trim(),
        },
        ...messages,
      ])
      setMessage('')
    } catch (error) {
      console.log(error)
    }
    setSubmitting(false)
  }
  return (
    <div>
      <div className='flex flex-col-reverse h-96 overflow-y-auto border-b '>
        {messages?.map((message) => (
          <div key={message?.id}>
            <div className='flex mb-4'>
              <div className='flex flex-col max-w-xs mx-2 order-2 items-start'>
                <div className='rounded-lg px-4 py-2 bg-stone-100 text-gray-700'>
                  <p className='text-ellipsis'>{message?.human}</p>
                </div>
              </div>
              <img
                src='https://gravatar.com/avatar/9d8e3a0ba117397bf8bd5a445e06fc38?s=400&d=robohash&r=x'
                className='w-10 h-10 rounded-full order-1 border'
              />
            </div>
            <div className='flex flex-row-reverse mb-4 ml-auto'>
              <div className='flex flex-col max-w-xs mx-2 order-2 items-start'>
                <div className='rounded-lg px-4 py-2 bg-fuchsia-500 text-white'>
                  <p className='whitespace-pre'>{message?.ai}</p>
                </div>
              </div>
              <img
                src='https://brandlogovector.com/wp-content/uploads/2023/01/ChatGPT-Icon-Logo-PNG.png'
                className='w-10 h-10 rounded-full order-1 border'
              />
            </div>
          </div>
        ))}
      </div>
      <Form className='mt-8' onSubmit={handleSubmit}>
        <Form.Area
          name='chat'
          placeholder='Type your message here...'
          rows={3}
          label='What do you want to ask?'
          className='mb-4'
          inputClassName='disabled:bg-gray-100'
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          disabled={isSubmitting}
        />
        <Button
          type='submit'
          className='text-white w-full bg-fuchsia-500 hover:bg-fuchsia-600 disabled:bg-fuchsia-400 disabled:cursor-not-allowed'
          disabled={isSubmitting}>
          Submit {isSubmitting && <span className='ml-2'>...</span>}
        </Button>
      </Form>
    </div>
  )
}

export default ChatBox
