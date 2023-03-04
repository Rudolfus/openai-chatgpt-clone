
const Translation = ({doStuff, setInput, result}) => {
  return (
    <div>
        <textarea
            className='textarea'
            cols={55}
            rows= {10}
            onChange={(e) => setInput(e.target.value)}
            ></textarea>
        <button className='action-btn' onClick={doStuff}>generate answer</button>
        {/* if it is less than 0, or more than 0, we will render the result, else nothing */}
        <h3 className="result-text" cols={55} rows= {10}>{result.length > 0 ? result : ""} </h3>
    </div>
  )
}

export default Translation