import './App.css'
import { Configuration, OpenAIApi } from 'openai'
import OptionSelection from './components/OptionSelection'
import { arrayItems } from './AIOptions'
import Translation from './components/Translation'
import { useState } from 'react'

function App() {
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  });
  // here we create an instance of this open API using the API key and the configuration
  const openai = new OpenAIApi(configuration);
  // we only want to render the Translation component if an option is selected
  const [option, setOption] = useState({})
  const [input, setInput] = useState('')
  const [result, setResult] = useState('')
  // console.log(import.meta.env.VITE_OPENAI_API_KEY);
  // we pass the option object from index.jsx as an argument to the function selectOption
  const selectOption = (option) => {
    setOption(option);
  };

  
  const doStuff = async () => {
    let object = {...option, prompt: input};

    // openAI completes (i.e. reponds to) the prompt by taking the object (including the prompt) as an argument
    const response = await openai.createCompletion(object);
    setResult(response.data.choices[0].text);
  }
  
  return (
    
    <div className="App">
      {/* if the object of the option is empty, only show the option, else show the other component */}
      {Object.values(option).length === 0 ? (
        <OptionSelection arrayItems={arrayItems} selectOption={selectOption}/>
      ) : (
        <Translation doStuff={doStuff} setInput={setInput} result={result}/>
      )}
    </div>
  )
}

export default App
