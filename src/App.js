import { useState } from "react";
import axios from "axios";
import youtube_parser from './utlis'

function App() {
  const [input, setInput] = useState('')
  const [url, setUrl] = useState(null)
  const onSubmitForm = (e)=>{
    e.preventDefault()
    
    const youtubeID = youtube_parser(input)
    const options = {
      method: 'GET',
      url: 'https://youtube-mp36.p.rapidapi.com/dl',
      params: {id: youtubeID},
      headers: {
        'X-RapidAPI-Key': '618f5a6b61mshab88603c3d2d85ep1d866ejsn61b0ab0f3084',
        'X-RapidAPI-Host': 'youtube-mp36.p.rapidapi.com'
      }
    };

    axios(options).then(res=>setUrl(res.data.link)).catch(err=>console.log(err))
    setInput('')
  }

 
  
  return (
    <div className="App">
      <span className="logo">YouTube Mp3</span>
      <section className="content">
        <h1 className="content_title">YouTube to Mp3 Converter </h1>
        <p>Transform a Youtube video to Mp3 in just a few clicks!</p>
        <form className="form" onSubmit={onSubmitForm}>
            <input placeholder="Paste a youtube link" className="form_input" type="text" onChange={(e)=>setInput(e.target.value)}></input>
            <button type="submit" className="form_button">Search</button>
        </form>
        {url ? <a href={url} rel="refferr" target="_blank" className="download_btn">Download Mp3</a> : ''}
     
      </section>
    </div>
  );
}

export default App;
