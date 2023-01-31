import { useEffect, useState } from 'react'
import { Configuration, OpenAIApi } from 'openai'
import ChatBox from './ChatBox'
import { FormSelect } from '../ui/form'

const ChatGPT = () => {
  // ! hooks
  const [engines, setEngines] = useState([])
  const [engine, setEngine] = useState('text-davinci-003')
  // ! get all engines
  useEffect(() => {
    const configuration = new Configuration({
      apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    })
    const openai = new OpenAIApi(configuration)
    openai.listModels().then((response) => setEngines(response?.data?.data))
  }, [])

  return (
    <section className='bg-neutral-100 content-wrapper lg:p-8 p-4 overflow-auto'>
      <div className='max-w-5xl mx-auto'>
        <div className='md:px-8 px-4 py-4 bg-white rounded shadow md:flex flex-col justify-between items-center'>
          <div className='mb-6 md:mb-0'>
            <h2 className='text-4xl font-bold mb-2'>Brain Chat</h2>
            <p className='text-gray-500 text-sm'>
              This is a chatbot powered by GPT-3. It is a work in progress.
              Please be patient with it.
            </p>
          </div>
          <div>
            <div className='min-w-[10rem] md:ml-6'>
              <FormSelect
                label='Select Engines'
                onChange={({ target }) => setEngine(target.value)}
                value={engine}>
                {engines?.map((engine) => (
                  <option key={engine?.id} value={engine?.id}>
                    {engine?.id}
                  </option>
                ))}
              </FormSelect>
            </div>
          </div>
        </div>
        <div className='md:px-8 px-4 pb-4 pt-6 bg-white rounded shadow mt-4'>
          <ChatBox engine={engine} />
        </div>
      </div>
    </section>
  )
}

export default ChatGPT
