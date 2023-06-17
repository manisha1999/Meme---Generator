import React, { useState, createRef, useEffect } from 'react'
import Draggable from 'react-draggable'
import './component.css'
import { exportComponentAsJPEG } from 'react-component-export-image'
import Navbar from './Navbar';
import { SketchPicker } from 'react-color';
const host = 'http:/localhost:3001'


function Home() {
  const [toptext, settoptext] = useState("")
  const [bottomtext, setbottomtext] = useState("")
  const [previewSource, setpreviewSource] = useState("")
  const [color, setColor] = useState('#000');
  const [selectedImg, setselectedImg] = useState("");
  const [selectedImgUrl, setSelectedImgUrl] = useState();
  const memeRef = createRef()

  function handleChange(e) {
    const file = e.target.files[0]
    setselectedImg(file)
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      setpreviewSource(reader.result)
    }

  }

  const saveImage = async (e) => {
    console.log("submitting")
    e.preventDefault();
    if (!previewSource) return;
    uploadImage(previewSource);
  };

  const uploadImage = async (imgurl) => {
    console.log(imgurl)
    try {
      await fetch('http://localhost:3001/upload', {
        method: "POST",

        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: imgurl
        }),

      }).catch((err) => console.log(err))
    }
    catch (error) {
      console.log("error");
    }
  }

  const handleColor = (color) => {
    setColor(color);
  };
  return (


    <div style={{ background: "#f2f2f2" }}>
      <Navbar />
      <h1 style={{ color: "#f57542", textAlign: "center" }}> Create your own memes </h1>
      <div className='home' style={{ maxWidth: " 600px" }}>
        <label ><h2 style={{ color: "#f57542" }}>Add Top Text
          <input type="text" style={{ marginLeft: "140px", width: "300px" }} onChange={(e) => settoptext(e.target.value)}></input></h2></label>

        <label style={{ marginLeft: "10px" }}><h2 style={{ color: "#f57542" }}>Add Bottom text
          <input type="text" style={{ marginLeft: "100px", width: "300px", marginRight: "10px" }} onChange={(e) => setbottomtext(e.target.value)}></input></h2></label>

        <label style={{ marginLeft: "10px" }}><h2 style={{ color: "#f57542" }}>Add Image
          <input type="file" style={{ marginLeft: "160px" }} onChange={handleChange} accept="image/*"></input></h2></label>

        <div className='display image'>


          {selectedImg == "" || selectedImg == null ? "" : <>

            <div ref={memeRef} className='meme' >
              <div key={selectedImg} className="image" >
                <Draggable ><div> <h2 style={{ color }}>{toptext}</h2></div></Draggable>
                <div className='memeimage'>
                  : <img src={previewSource} height="500" width="700" alt="abc" />
                </div>
                <Draggable ><div > <h2 style={{ color }}>{bottomtext}</h2></div>

                </Draggable>

                <h1></h1>
              </div>
            </div>

            <SketchPicker color={color} onChange={(color) => { setColor(color.hex) }} />
            <div className='e-button'>
              <button onClick={() => setselectedImg(null)}>Delete</button>
              <button variant="success" onClick={(e) => { exportComponentAsJPEG(memeRef) }}>Download</button>
              <button onClick={saveImage} type="submit">Save</button></div>
          </>
          }



        </div>
      </div>

    </div>

  )
}

export default Home