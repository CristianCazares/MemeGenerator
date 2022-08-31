import React, { useEffect, useState } from 'react'
import "./Meme.css"


const Meme = () => {

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  })

  const [allMemes, setAllMemes] = useState([])

  useEffect(() => {
    const getMemes = async () => {
      const res = await fetch("https://api.imgflip.com/get_memes")
      const data = await res.json()
      setAllMemes(data.data.memes)
    }
    
    getMemes()
  }, [])


  const getRandomImageURL = () => {
    const images = allMemes;
    setMeme(prevMeme => {
      return {
        ...prevMeme,
        randomImage: images[Math.floor(Math.random() * images.length)].url
      }
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setMeme(prevMeme => {
      return {
        ...prevMeme,
        [name]: value
      }
    })
  }

  return (
    <main>
      <div className='form'>
        <input
          type="text"
          name="topText"
          className="form-input"
          placeholder="Top text"
          onChange={handleChange}
          value={meme.topText}
        />
        <input
          type="text"
          name="bottomText"
          className="form-input"
          placeholder="Bottom text"
          onChange={handleChange}
          value={meme.bottomText}
        />
        <button
          className="form-button"
          onClick={getRandomImageURL}
        >
          Upload meme image
        </button>
        <div className='meme'>
          <img
            className='meme-image'
            src={meme.randomImage}
          />
          <h2 className="meme-text top">{meme.topText}</h2>
          <h2 className="meme-text bottom">{meme.bottomText}</h2>
        </div>
      </div>
    </main>
  )
}

export default Meme